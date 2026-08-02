(async () => {
  const ACTOR_NAME = "Nong Sujia";
  const DRY_RUN = false;
  const SUFFIX = " (Rebuilt)";
  const DELETE_EXISTING_REBUILT = true;
  const FLAG_SCOPE = "hm3";
  const FLAG_KEY = "rebuildOldId";

  function deepClone(v) {
    return foundry.utils.deepClone(v);
  }

  function stripNestedIds(value, depth) {
    if (depth === undefined) depth = 0;
    let removed = 0;

    if (Array.isArray(value)) {
      for (const v of value) removed += stripNestedIds(v, depth + 1);
      return removed;
    }

    if (value && typeof value === "object") {
      for (const k of Object.keys(value)) {
        if (k === "_id" && depth > 0) {
          delete value[k];
          removed++;
          continue;
        }
        removed += stripNestedIds(value[k], depth + 1);
      }
    }

    return removed;
  }

  function removeRootId(source) {
    const s = deepClone(source);
    delete s._id;
    return s;
  }

  function sanitizeEffectData(effectData) {
    const e = deepClone(effectData);
    if (!Array.isArray(e.changes)) return e;

    e.changes = e.changes.map(ch => {
      const c = deepClone(ch);
      if (!Object.prototype.hasOwnProperty.call(c, "value")) return c;
      if (c.value === null || c.value === undefined) c.value = "";
      else if (typeof c.value !== "string") c.value = String(c.value);
      return c;
    });

    return e;
  }

  function rewriteOrigin(origin, oldActorId, newActorId, itemIdMap) {
    if (typeof origin !== "string" || !origin.length) return origin;

    let out = origin;
    out = out.replace("Actor." + oldActorId, "Actor." + newActorId);

    for (const [oldItemId, newItemId] of itemIdMap.entries()) {
      out = out.replace("Item." + oldItemId, "Item." + newItemId);
    }

    return out;
  }

  const actor = game.actors.getName(ACTOR_NAME);
  if (!actor) {
    ui.notifications.error("Actor not found: " + ACTOR_NAME);
    return;
  }

  const oldActorId = actor.id;
  const rebuiltName = actor.name + SUFFIX;

  const existingRebuilt = game.actors.getName(rebuiltName);
  if (existingRebuilt) {
    if (DRY_RUN) {
      ui.notifications.warn("DRY RUN: " + rebuiltName + " already exists.");
      return;
    }
    if (!DELETE_EXISTING_REBUILT) {
      ui.notifications.error(rebuiltName + " already exists. Delete it first or enable DELETE_EXISTING_REBUILT.");
      return;
    }
    await existingRebuilt.delete();
  }

  const actorSource = actor.toObject();
  const itemSources = actor.items.map(i => i.toObject());
  const effectSources = actor.effects.map(e => e.toObject());

  const newActorData = removeRootId(actorSource);
  delete newActorData.items;
  delete newActorData.effects;
  newActorData.name = rebuiltName;

  let removedCount = 0;
  removedCount += stripNestedIds(newActorData);

  const itemPayload = itemSources.map(src => {
    const oldId = src._id;
    const itemData = removeRootId(src);
    removedCount += stripNestedIds(itemData);

    itemData.flags = itemData.flags || {};
    itemData.flags[FLAG_SCOPE] = itemData.flags[FLAG_SCOPE] || {};
    itemData.flags[FLAG_SCOPE][FLAG_KEY] = oldId;

    return itemData;
  });

  const effectPayload = effectSources.map(src => {
    const eff = sanitizeEffectData(removeRootId(src));
    removedCount += stripNestedIds(eff);
    return eff;
  });

  if (DRY_RUN) {
    const msg =
      "DRY RUN | Would rebuild actor: " + actor.name +
      " | New actor: " + rebuiltName +
      " | Items: " + itemPayload.length +
      " | Effects: " + effectPayload.length +
      " | Nested _id removed: " + removedCount;
    console.log(msg);
    ui.notifications.info(msg);
    return;
  }

  const rebuilt = await Actor.create(newActorData);
  if (!rebuilt) {
    ui.notifications.error("Failed to create rebuilt actor");
    return;
  }

  let createdItems = [];
  if (itemPayload.length) {
    createdItems = await rebuilt.createEmbeddedDocuments("Item", itemPayload);
  }

  const itemIdMap = new Map();
  for (const it of createdItems) {
    const oldId = it.getFlag(FLAG_SCOPE, FLAG_KEY);
    if (oldId) itemIdMap.set(oldId, it.id);
  }

  const containerFixes = [];
  for (const it of rebuilt.items) {
    const containerId = it.system && it.system.container;
    if (containerId && containerId !== "on-person" && itemIdMap.has(containerId)) {
      containerFixes.push({
        _id: it.id,
        "system.container": itemIdMap.get(containerId)
      });
    }
  }
  if (containerFixes.length) {
    await rebuilt.updateEmbeddedDocuments("Item", containerFixes);
  }

  const rewrittenEffects = effectPayload.map(eff => {
    const e = deepClone(eff);
    e.origin = rewriteOrigin(e.origin, oldActorId, rebuilt.id, itemIdMap);
    return e;
  });

  if (rewrittenEffects.length) {
    await rebuilt.createEmbeddedDocuments("ActiveEffect", rewrittenEffects);
  }

  for (const it of rebuilt.items) {
    if (it.getFlag(FLAG_SCOPE, FLAG_KEY) !== undefined) {
      await it.unsetFlag(FLAG_SCOPE, FLAG_KEY);
    }
  }

  const doneMsg =
    "Rebuild complete | Old actor: " + actor.name +
    " | New actor: " + rebuilt.name +
    " | Items copied: " + createdItems.length +
    " | Effects copied: " + rewrittenEffects.length +
    " | Container links fixed: " + containerFixes.length +
    " | Nested _id removed: " + removedCount;

  console.log(doneMsg);
  ui.notifications.info(doneMsg);
  await rebuilt.sheet.render(true);
})();
