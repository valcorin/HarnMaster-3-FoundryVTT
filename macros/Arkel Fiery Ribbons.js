const spellName = item.name;
const convSI = item.system.skillIndex;
const eml = item.system.effectiveMasteryLevel;
const shortName = actor.name
const targets = game.user.targets;
if (!targets?.size) {
  let curr_fatigue = token.actor.system.fatigue
  console.log("Current fatigue: " + curr_fatigue)
  ui.notifications.warn(`You must select one or more targets; ${spellName} aborted. Fatigue is ${curr_fatigue} - correct based on chat.`);
  return;
}

// Do nothing if casting failed
if (!rollResult.isSuccess) {
  return
}

const target_arr = Array.from(targets)

let desc = 'Casting ' + spellName

for (let i = 0; i < target_arr.length; i++) {
  const targetToken = target_arr[i];
  if (typeof targetToken == "undefined") {
    console.log("No more targets.")
    break;
  }
  const targetActor = targetToken.actor
  // Set generic dodge target in case it can't be retrieved
  let dodge_target = 51
  if (typeof targetActor.system.dodge != "undefined") {
    dodge_target = targetActor.system.dodge
    console.log("Using actual dodge of " + targetActor.system.dodge + " for " + targetActor.name)
  }
  if (eml > 74) {
    console.log("EML of " + eml + " makes dodging harder - cut in half.")
    dodge_target = Math.floor(dodge_target * .5)
  }
  let dmg_rndInt = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1)
  if (rollResult.result == 'CS') {
    dmg_rndInt = dmg_rndInt + (Math.floor(Math.random() * 6) + 1)
  }
  dmg_rndInt = dmg_rndInt + convSI
  // Check for dodge roll
  let dodge_result = (Math.floor(Math.random() * 100) + 1);
  console.log("Trying to beat " + dodge_target + " with a " + dodge_result)
  let request_label = "Full damage to " + targetToken.name
  if (dodge_result <= dodge_target) {
    dmg_rndInt = Math.floor(dmg_rndInt / 2)
    request_label = "Halved damage to " + targetToken.name
    console.log("Dodged and dmg is now " + dmg_rndInt)
  }
  rollResult.aspect = "Fire";
  rollResult.impact = dmg_rndInt;
  rollResult.aim = "Mid";
  rollResult.tokenId = targetToken.id
  await Requestor.request({
    description: desc,
    sound: "worlds/novendo/sounds/heatwave.ogg",
    img: targetActor.thumbnail,
    buttonData: [{
      scope: {amount: rollResult, tokenId: targetToken.id},
      permission: "GM",
      limit: 1,
      label: request_label,
      action: async () => {
        await game.hm3.macros.injuryRoll(actor, amount);
      }
    }]
  });
}