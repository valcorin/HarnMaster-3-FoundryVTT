const spellName = String(item?.name ?? 'Unknown Spell');
let lastSpaceIndex = spellName.lastIndexOf(' (');
if (lastSpaceIndex < 1) {
  lastSpaceIndex = spellName.length
}
const spellName_nice = spellName.substring(0, lastSpaceIndex);

const convSI = item.system.skillIndex;
const mastery = item.system.masteryLevel;
const shortName = actor.name

// Do nothing if casting failed
if (!rollResult.isSuccess) {
    return
}

for (let targetToken of canvas.tokens.placeables) {
    const targetActor = targetToken.actor
    const raw_distance = Math.floor(rangeToTarget(token, targetToken));
    // Raw distance already in feet
    const effect_distance = Math.floor(convSI * 5)
    const diff_distance = raw_distance - effect_distance
  
    if (targetToken.document.hidden) {
        console.log("Target token is hidden so skipping it.")
    } else {
      if (diff_distance > 0 || token.id == targetToken.id) {
        if (token.id == targetToken.id) {
          console.log(targetToken.name + " cast " + spellName_nice + " and so is not effected by it.")
        } else {
          const missmsg = targetToken.name + " is out of range by " + diff_distance + "."
          ChatMessage.create({
              user: game.user._id,
              speaker: speaker,
              content: missmsg
          }, {});
        }
      } else {
        // Allies get +20 for MS and +50 for CS
        let disposition = 0
        if (typeof(targetToken.document.disposition) != null) {
          disposition = targetToken.document.disposition
        }
        if (disposition == 1) {
          const friendmsg = targetToken.name + " was excluded from " + spellName_nice + "."
          ChatMessage.create({
              user: game.user._id,
              speaker: speaker,
              content: friendmsg
          }, {});
          console.log()
        } else {
          let desc = targetToken.name + " attempts to resist " + spellName_nice + "."
          let multiplier = 4;
          if (rollResult.isCritical) {
            desc = targetToken.name + " attempts to fight off " + spellName_nice + "!"
            multiplier = 3;
          }
      
          const effectData = {
            actor_from_token_ID: targetToken.id,
            spellName: spellName,
            shortName: shortName,
            modifier: multiplier,
            duration: convSI,
            abilitycheck: 'will',
            abilitymodMS: 10,
            abilitymodCS: 50,
            effectKey: 'system.eph.SongofDefense',
            itemdataimg: item.img
          }
      
          let request_label = spellName_nice + " to " + targetToken.name
          await Requestor.request({
            description: desc,
            sound: "worlds/novendo/sounds/wow.ogg",
            img: targetActor.thumbnail,
            buttonData: [{
              scope: { amount: effectData, tokenId: targetToken.id },
              permission: "GM",
              limit: 1,
              label: request_label,
              action: async () => {
                await game.hm3.macros.applyEffect(actor, amount);
              }
            }]
          });
        }
      }
    }
  }
  return
  
  function rangeToTarget(sourceToken, targetToken, gridUnits = false) {
    if (!sourceToken || !targetToken || !canvas.scene || !canvas.scene.grid) return 9999;
  
    // If the current scene is marked "Theatre of the Mind", then range is always 0
    if (canvas.scene.getFlag('hm3', 'isTotm')) return 0;
  
    const sToken = canvas.tokens.get(sourceToken.id);
    const tToken = canvas.tokens.get(targetToken.id);
    if (!sToken || !tToken) return 9999;

    const source = sToken.center;
    const dest = tToken.center;
    let distance;

    if (typeof canvas.grid.measurePath === 'function') {
      const path = canvas.grid.measurePath([source, dest]);
      distance = path?.distance ?? 9999;
    } else if (typeof canvas.grid.measureDistances === 'function') {
      const ray = new Ray(source, dest);
      const distances = canvas.grid.measureDistances([{ ray }], { gridSpaces: true });
      distance = distances?.[0] ?? 9999;
    } else {
      distance = 9999;
    }

    console.log(`Distance = ${distance}, gridUnits=${gridUnits}`);
    if (gridUnits) return Math.round(distance / canvas.dimensions.distance);
    return distance;
  }