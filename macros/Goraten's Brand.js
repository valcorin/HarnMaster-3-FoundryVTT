const spellName = item.name;
const shortName = actor.name
// Always targets caster
const targetToken = token;
const targetActor = token.actor;

// Do nothing if casting failed
if (!rollResult.isSuccess) {
  return
}

let weapons = []
actor.items.find(item => {
  if (item.type === "weapongear") {
    if (item.name.includes("sword")) {
      weapons.unshift(item.name)
    } else {
      weapons.push(item.name)
    }
  }
})
let chosen_weapon = await getWeapon(weapons)
console.log(chosen_weapon + " returned")

let chatmsg = shortName + "'s " + chosen_weapon + " glows brightly with ethereal flame."
let bonus = "3d6";
if (rollResult.isCritical) {
  bonus = "5d6"
  chatmsg = shortName + "'s " + chosen_weapon + " glows brighter than the noon day sun!"
}
const changeData = [
  { key: 'system.eph.spellcat', value: "AddDmg", mode: 2 },
  { key: 'system.eph.spellaspect', value: "Fire", mode: 2 },
  { key: 'system.eph.spellimpact', value: bonus, mode: 2 },
  { key: 'system.eph.spellitem', value: chosen_weapon, mode: 2 }
];

// *****************************************************************************
// Now find out if this actor already has an Active Effect for this spell.
const ae = targetActor.effects.find(m => m.name === spellName);
if (ae) {
  // update the current active effect
  const result = await ae.update({
    disabled: false,
    duration: {
      startTurn: game.combat.turn,
      startRound: game.combat.turn,
      rounds: 10
    },
    'changes': changeData
  });
  if (result) console.log(`Active Effect ${spellName} activated with a bonus of ${bonus}!`);
} else {
  // create a new Active Effect
  const activeEffectData = {
    label: spellName,
    name: spellName,
    description: "AddDmg",
    icon: item.img,
    origin: targetActor.uuid,
    duration: {
      startTurn: game.combat.turn,
      startRound: game.combat.turn,
      rounds: 10
    },
    'changes': changeData
  }
  const result = await ActiveEffect.create(activeEffectData, { parent: targetActor });
  if (result) console.log(`Active Effect ${spellName} created with a bonus of ${bonus}!`);
}
ChatMessage.create({
  user: game.user._id,
  speaker: speaker,
  content: chatmsg
}, {});

return
  
async function getWeapon(weapons) {
  console.log(weapons)
  var myContent = `
          <div class="form-group">
            <label for="targetSelect">Weapons</label>
            <select name="targetSelect">`

  for (let i = 0; i < weapons.length; i++) {
    myContent += `
                  <option value="${weapons[i]}">${weapons[i]}</option>`
  };

  myContent += `
            </select><br /><br />
          </div>`

  const chosen_weapon = await Dialog.prompt({
    title: 'Select weapon',
    content: myContent,
    callback: async (html) => {
      const weapon_name = html.find('[name="targetSelect"]').val();
      console.log(weapon_name + " selected")
      return weapon_name
    }
  });
  return chosen_weapon
}