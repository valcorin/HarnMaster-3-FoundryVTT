import { onManageActiveEffect } from '../effect.js';
import * as utility from '../utility.js';

// Prefer v13+ namespace; fall back for v12
const CompatItemSheet = foundry.appv1?.sheets?.ItemSheet ?? ItemSheet;

/**
 * Extend the basic ItemSheet with some very simple modifications
 * @extends {ItemSheet}
 */
export class HarnMasterItemSheet extends CompatItemSheet {

  /** @override */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["hm3", "sheet", "item"],
      width: 560,
      height: 550,
      tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "properties" }]
    });
  }

  /** @override */
  get template() {
    const path = "systems/hm3/templates/item";
    return `${path}/${this.item.type}-sheet.html`;
  }

  /* -------------------------------------------- */

  /** @override */
  getData() {
    const data = super.getData();

    // Re-define the template data references (backwards compatible)
    data.item = this.item;
    data.idata = this.item.system;
    data.config = CONFIG.HM3;
    data.itemType = this.item.type;
    data.hasActor = this.actor && true;
    data.hasCombatSkills = false;
    data.hasRitualSkills = false;
    data.hasMagicSkills = false;

    const macroTypesArr = foundry.utils.deepClone(game.system?.documentTypes?.Macro ?? []);
    data.macroTypes = Object.fromEntries(macroTypesArr.map(v => [v, v]));

    data.containers = { 'on-person': 'On Person' };
    // Containers are not allowed in other containers.  So if this item is a container,
    // don't show any other containers.

    if (this.actor && this.item.type !== 'containergear') {
      this.actor.items.forEach(it => {
        if (it.type === 'containergear') {
          data.containers[it.id] = it.name;
        }
      });
    }

    // Fill appropriate lists for individual item sheets
    if (this.item.type === 'spell') {
      // Spells need a list of convocations
      const convocationsArr = [];
      if (this.actor) {
        this.actor.itemTypes.skill.forEach(it => {
          if (it.system.type === 'Magic') {
            convocationsArr.push(it.name);
            data.hasMagicSkills = true;
          }
        });
      }
      data.convocations = Object.fromEntries(convocationsArr.map(v => [v, v]));
    } else if (this.item.type === 'invocation') {
      // Invocations need a list of dieties
      const dietiesArr = [];
      if (this.actor) {
        this.actor.itemTypes.skill.forEach(it => {
          if (it.system.type === 'Ritual') {
            dietiesArr.push(it.name);
            data.hasRitualSkills = true;
          }
        });
      }
      data.dieties = Object.fromEntries(dietiesArr.map(v => [v, v]));
    } else if (this.item.type === 'weapongear' ||
      this.item.type === 'missilegear') {

      // Weapons need a list of combat skills
      const combatSkillsArr = [];

      if (this.actor) {
        if (this.item.type === 'weapongear') {
          // For weapons, we add a "None" item to the front of the list
          // as a default (in case no other combat skill applies)
          combatSkillsArr.push('None');
        } else {
          // For missiles, we add the "Throwing" skill to the front
          // of the list as a default (in case no other combat
          // skill applies)
          combatSkillsArr.push('Throwing');
        }

        this.actor.itemTypes.skill.forEach(it => {
          if (it.system.type === 'Combat') {
            const lcName = it.name.toLowerCase();
            // Ignore the 'Dodge' and 'Initiative' skills,
            // since you never want a weapon based on those skills.
            if (!(lcName === 'initiative' || lcName === 'dodge')) {
              combatSkillsArr.push(it.name);
              data.hasCombatSkills = true;
            }
          }
        });
      }
      data.combatSkills = Object.fromEntries(combatSkillsArr.map(v => [v, v]));
    }

    data.skillTypeOptions = Object.fromEntries(CONFIG.HM3.skillTypes.map(v => [v, v]));
    data.traitTypeOptions = Object.fromEntries(CONFIG.HM3.traitTypes.map(v => [v, v]));
    data.injuryLevelOptions = Object.fromEntries(CONFIG.HM3.injuryLevels.map(v => [v, v]));
    data.injuryImpactTypeOptions = Object.fromEntries(
      Object.entries(CONFIG.HM3.injuryLocations).map(([name, loc]) => [loc.impactType, name])
    );
    data.injuryLocationsOptions = Object.fromEntries(
      Object.keys(CONFIG.HM3.injuryLocations).filter(k => k !== 'Custom').map(k => [k, k])
    );
    data.weaponAspectOptions = { Piercing: 'Piercing', Blunt: 'Blunt', Edged: 'Edged' };

    data.effects = {};
    this.item.effects.forEach(effect => {
      //effect._getSourceName().then(()=> {
      data.effects[effect.id] = {
        'source': effect.sourceName,
        'duration': utility.aeDuration(effect),
        'data': effect,
        'changes': utility.aeChanges(effect)
      }
      //})
    });

    return data;
  }

  /* -------------------------------------------- */

  /** @override */
  setPosition(options = {}) {
    const position = super.setPosition(options);
    const sheetBody = this.element.find(".sheet-body");
    const bodyHeight = position.height - 192;
    sheetBody.css("height", bodyHeight);
    return position;
  }

  /* -------------------------------------------- */

  /** @override */
  activateListeners(html) {
    super.activateListeners(html);

    // Everything below here is only needed if the sheet is editable
    if (!this.options.editable) return;

    // Roll handlers, click handlers, etc. go here.

    html.on("click", "input[type='text']", ev => {
      ev.currentTarget.select();
    });

    html.on("keypress", ".properties", ev => {
      var keycode = (ev.keyCode ? ev.keyCode : ev.which);
      if (keycode == '13') {
        super.close();
      }
    });

    html.find(".effect-control").click(ev => {
      if (this.item.isOwned) return ui.notifications.warn("You cannot change an Item's Effects after it is associated with an Actor. To modify this Effect, go to the Actor's Effects tab.")
      onManageActiveEffect(ev, this.item)
    });

    // Add Inventory Item
    html.find('.armorgear-location-add').click(this._armorgearLocationAdd.bind(this));

    // Delete Inventory Item
    html.find('.armorgear-location-delete').click(this._armorgearLocationDelete.bind(this));
  }

  async _armorgearLocationAdd(event) {
    const dataset = event.currentTarget.dataset;
    const itemData = this.item.system;

    await this._onSubmit(event);  // Submit any unsaved changes

    // Clone the existing locations list if it exists, otherwise set to empty array
    let locations = [];
    if (typeof itemData.locations != 'undefined') {
      locations = [...itemData.locations];
    }

    // Only add location to list if it is unique
    if (locations.indexOf(dataset.location) === -1) {
      locations.push(dataset.location);
    }

    // Update the list on the server
    return this.item.update({ "system.locations": locations });
  }

  async _armorgearLocationDelete(event) {
    const dataset = event.currentTarget.dataset;
    const itemData = this.item.system;

    await this._onSubmit(event);   // Submit any unsaved changes

    // Clone the location list (we don't want to touch the actual list)
    let locations = [...itemData.locations];

    // find the index of the item to remove, and if found remove it from list
    let removeIndex = locations.indexOf(dataset.location);
    if (removeIndex >= 0) {
      locations.splice(removeIndex, 1);
    }

    // Update the list on the server
    return this.item.update({ "system.locations": locations });
  }
}
