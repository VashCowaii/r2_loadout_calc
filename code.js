//used for archetype selection swaps in updateArchetype()
let archetype1Old ="";
let archetype2Old ="";
let ring1Old,ring2Old,ring3Old,ring4Old;
let fragment1Old,fragment2Old,fragment3Old;
let concoction1Old,concoction2Old,concoction3Old,concoction4Old,concoction5Old,concoction6Old,concoction7Old;
let rangedMutator1Old,rangedMutator2Old;
let rangedMod1Old,rangedMod2Old;
let scaledRelicBaseRecords;
let emptyTraitBoxHeader = `<div class="traitMegaTitleHeader"><span>TRAITS <span id="traitCount"></span>/<span id="traitCap"></span></span></div>`;
let activeTraits = 0;
let traitPointCount = 0;
let traitPointCap = 85;
let totalConcLimit = 0;
let greatTraitRecords = {}; //Automatically generated content, no touchy
let urlObject = {};

//The great container, the knower of all
const greatTableKnowerOfAll = {
  "Health": 0,
  "Health%": 0,
  "GlobalHealthModifier": 0,
  "Armor": 0,
  "Armor%": 0,
  "FlatDR": 0,
  "Bulwark": 0,
  "REdamage": [0],
  "DMGKept": [0],
  "RelicSpeed": 0,
  "RelicEFF": 0,
  "HealingEFF": 0,
  "GlobalHealingEff": 0,
  "HP/S+": 0,
  "HP/S%": 0,
  "RelicHPbase": 0,
  "RelicHPtype": 0,
  "RelicHPtime": 0,
  "GreyHP/S+": 0,
  "Stamina": 0,
  "Stamina%": 0,
  "Stamina/S+": 0,
  "StaminaCost": 0,
  "StaminaPenaltyAdjustment": 0,
  "ShieldEFF": 0,
  "Shield": 0,
  "Shield%/S": 0,
  "Lifesteal": 0,
  "MLifesteal": 0,
  "RLifesteal": 0,
  "Encumbrance": 0,
  "Encumbrance%": 0,
  "WeightThreshold": 0,
  "Bleed": 0,
  "Bleed%": 0,
  "Burn": 0,
  "Burn%": 0,
  "Shock": 0,
  "Shock%": 0,
  "Corrosive": 0,
  "Corrosive%": 0,
  "Blight": 0,
  "Blight%": 0,
  "GreyHP/S%": 0,
  "HealingModifiers": 0,
  "ConcLimit": 0,
  "Endurance": 0,
  "Expertise": 0,
  "Spirit": 0,
  "Vigor": 0
}
//Container used when referencing the armor tables using variables
const armor = {
    "helmets": helmets,
    "chests": chests,
    "legs": legs,
    "hands": hands,
}
//class title combos that display above the prime perk
const titleCombos = {
  "Alchemist": "",
  "Archon": "",
  "Challenger": "",
  "Engineer": "",
  "Explorer": "",
  "Gunslinger": "",
  "Handler": "",
  "Hunter": "",
  "Invader": "",
  "Medic": "",
  "Ritualist": "",
  "Summoner": "",
  "AlchemistAlchemist": "If you see this, report to Vash exactly how you did it",
  "ArchonArchon": "If you see this, report to Vash exactly how you did it",
  "ChallengerChallenger": "If you see this, report to Vash exactly how you did it",
  "EngineerEngineer": "If you see this, report to Vash exactly how you did it",
  "ExplorerExplorer": "If you see this, report to Vash exactly how you did it",
  "GunslingerGunslinger": "If you see this, report to Vash exactly how you did it",
  "HandlerHandler": "If you see this, report to Vash exactly how you did it",
  "HunterHunter": "If you see this, report to Vash exactly how you did it",
  "InvaderInvader": "If you see this, report to Vash exactly how you did it",
  "MedicMedic": "If you see this, report to Vash exactly how you did it",
  "RitualistRitualist": "If you see this, report to Vash exactly how you did it",
  "SummonerSummoner": "If you see this, report to Vash exactly how you did it",
  "": "---",
  "AlchemistChallenger": "SPIRITED CONSERVATOR",
  "AlchemistExplorer": "SPIRITED APOTHECARY",
  "AlchemistGunslinger": "SPIRITED LEADBRINGER",
  "AlchemistHandler": "SPIRITED GREY WOLF",
  "AlchemistHunter": "SPIRITED ISOLATOR",
  "AlchemistMedic": "SPIRITED SHAMAN",
  "AlchemistSummoner": "SPIRITED CONJURER",
  "AlchemistEngineer": "SPIRITED ARTIFICER",
  "AlchemistInvader": "SPIRITED TRICKSTER",
  "AlchemistArchon": "SPIRITED THAUMATURGE",
  "AlchemistRitualist": "SPIRITED DIABOLIST",
  "ChallengerAlchemist": "DIE HARD CONSERVATOR",
  "ChallengerExplorer": "DIE HARD CRUSADER",
  "ChallengerGunslinger": "DIE HARD MERCENARY",
  "ChallengerHandler": "DIE HARD BULLDOG",
  "ChallengerHunter": "DIE HARD SOLDIER",
  "ChallengerMedic": "DIE HARD GUARDIAN",
  "ChallengerSummoner": "DIE HARD OVERSEER",
  "ChallengerEngineer": "DIE HARD SENTINEL",
  "ChallengerInvader": "DIE HARD DESTROYER",
  "ChallengerArchon": "DIE HARD ARBITER",
  "ChallengerRitualist": "DIE HARD WARLORD",
  "ExplorerAlchemist": "LUCKY APOTHECARY",
  "ExplorerChallenger": "LUCKY CRUSADER",
  "ExplorerGunslinger": "LUCKY RAIDER",
  "ExplorerHandler": "LUCKY BLOODHOUND",
  "ExplorerHunter": "LUCKY OUTRIDER",
  "ExplorerMedic": "LUCKY SURVIVALIST",
  "ExplorerSummoner": "LUCKY HERALD",
  "ExplorerEngineer": "LUCKY PIONEER",
  "ExplorerInvader": "LUCKY MARAUDER",
  "ExplorerArchon": "LUCKY TRAILBLAZER",
  "ExplorerRitualist": "LUCKY OUTCAST",
  "GunslingerAlchemist": "LOADED LEADBRINGER",
  "GunslingerChallenger": "LOADED MERCENARY",
  "GunslingerExplorer": "LOADED RAIDER",
  "GunslingerHandler": "LOADED RIDGEBACK",
  "GunslingerHunter": "LOADED SHARPSHOOTER",
  "GunslingerMedic": "LOADED PEACEMAKER",
  "GunslingerSummoner": "LOADED TORMENTOR",
  "GunslingerEngineer": "LOADED BARRELSMITH",
  "GunslingerInvader": "LOADED PROFESSIONAL",
  "GunslingerArchon": "LOADED FIREBRAND",
  "GunslingerRitualist": "LOADED PUNISHER",
  "HandlerAlchemist": "BONDED GREY WOLF",
  "HandlerChallenger": "BONDED BULLDOG",
  "HandlerExplorer": "BONDED BLOODHOUND",
  "HandlerGunslinger": "BONDED RIDGEBACK",
  "HandlerHunter": "BONDED PREDATOR",
  "HandlerMedic": "BONDED SHEPHERD",
  "HandlerSummoner": "BONDED BEASTMASTER",
  "HandlerEngineer": "BONDED ROUGHNECK",
  "HandlerInvader": "BONDED PROWLER",
  "HandlerArchon": "BONDED HARRIER",
  "HandlerRitualist": "BONDED HELLHOUND",
  "HunterAlchemist": "DEAD TO RIGHTS ISOLATOR",
  "HunterChallenger": "DEAD TO RIGHTS SOLDIER",
  "HunterExplorer": "DEAD TO RIGHTS OUTRIDER",
  "HunterGunslinger": "DEAD TO RIGHTS SHARPSHOOTER",
  "HunterHandler": "DEAD TO RIGHTS PREDATOR",
  "HunterMedic": "DEAD TO RIGHTS RANGER",
  "HunterSummoner": "DEAD TO RIGHTS PAINBRINGER",
  "HunterEngineer": "DEAD TO RIGHTS TACTICIAN",
  "HunterInvader": "DEAD TO RIGHTS ASSASSIN",
  "HunterArchon": "DEAD TO RIGHTS VANQUISHER",
  "HunterRitualist": "DEAD TO RIGHTS HEADHUNTER",
  "MedicAlchemist": "REGENERATOR SHAMAN",
  "MedicChallenger": "REGENERATOR GUARDIAN",
  "MedicExplorer": "REGENERATOR SURVIVALIST",
  "MedicGunslinger": "REGENERATOR PEACEMAKER",
  "MedicHandler": "REGENERATOR SHEPHERD",
  "MedicHunter": "REGENERATOR RANGER",
  "MedicSummoner": "REGENERATOR DEFILER",
  "MedicEngineer": "REGENERATOR SPECIALIST",
  "MedicInvader": "REGENERATOR BLOODLETTER",
  "MedicArchon": "REGENERATOR VIRTUOSO",
  "MedicRitualist": "REGENERATOR PLAGUE DOCTOR",
  "SummonerAlchemist": "RUTHLESS CONJURER",
  "SummonerChallenger": "RUTHLESS OVERSEER",
  "SummonerExplorer": "RUTHLESS HERALD",
  "SummonerGunslinger": "RUTHLESS TORMENTOR",
  "SummonerHandler": "RUTHLESS BEASTMASTER",
  "SummonerHunter": "RUTHLESS PAINBRINGER",
  "SummonerMedic": "RUTHLESS DEFILER",
  "SummonerEngineer": "RUTHLESS MASTERMIND",
  "SummonerInvader": "RUTHLESS TYRANT",
  "SummonerArchon": "RUTHLESS INVOKER",
  "SummonerRitualist": "RUTHLESS GRAVELORD",
  "EngineerAlchemist": "HIGH TECH ARTIFICER",
  "EngineerChallenger": "HIGH TECH SENTINEL",
  "EngineerExplorer": "HIGH TECH PIONEER",
  "EngineerGunslinger": "HIGH TECH BARRELSMITH",
  "EngineerHandler": "HIGH TECH ROUGHNECK",
  "EngineerHunter": "HIGH TECH TACTICIAN",
  "EngineerMedic": "HIGH TECH SPECIALIST",
  "EngineerSummoner": "HIGH TECH MASTERMIND",
  "EngineerInvader": "HIGH TECH OPERATOR",
  "EngineerArchon": "HIGH TECH LUMINARY",
  "EngineerRitualist": "HIGH TECH WRECKER",
  "InvaderAlchemist": "SHADOW TRICKSTER",
  "InvaderChallenger": "SHADOW DESTROYER",
  "InvaderExplorer": "SHADOW MARAUDER",
  "InvaderGunslinger": "SHADOW PROFESSIONAL",
  "InvaderHandler": "SHADOW PROWLER",
  "InvaderHunter": "SHADOW ASSASSIN",
  "InvaderMedic": "SHADOW BLOODLETTER",
  "InvaderSummoner": "SHADOW TYRANT",
  "InvaderEngineer": "SHADOW OPERATOR",
  "InvaderArchon": "SHADOW RUINER",
  "InvaderRitualist": "SHADOW REAPER",
  "ArchonAlchemist": "TEMPEST THAUMATURGE",
  "ArchonChallenger": "TEMPEST ARBITER",
  "ArchonExplorer": "TEMPEST TRAILBLAZER",
  "ArchonGunslinger": "TEMPEST FIREBRAND",
  "ArchonHandler": "TEMPEST HARRIER",
  "ArchonHunter": "TEMPEST VANQUISHER",
  "ArchonMedic": "TEMPEST VIRTUOSO",
  "ArchonSummoner": "TEMPEST INVOKER",
  "ArchonEngineer": "TEMPEST LUMINARY",
  "ArchonInvader": "TEMPEST RUINER",
  "ArchonRitualist": "TEMPEST HARBINGER",
  "RitualistAlchemist": "VILE DIABOLIST",
  "RitualistChallenger": "VILE WARLORD",
  "RitualistExplorer": "VILE OUTCAST",
  "RitualistGunslinger": "VILE PUNISHER",
  "RitualistHandler": "VILE HELLHOUND",
  "RitualistHunter": "VILE HEADHUNTER",
  "RitualistMedic": "VILE PLAGUE DOCTOR",
  "RitualistSummoner": "VILE GRAVELORD",
  "RitualistEngineer": "VILE WRECKER",
  "RitualistInvader": "VILE REAPER",
  "RitualistArchon": "VILE HARBINGER"
}
const gear = {
   "amulets": amulets,
   "rings": rings,
   "relics": relics
}
const weapons = {
  "primary": primary,
  "melee": melee,
  "secondary": secondary
}
const mutators = {
  "primaryMutators": rangedMutators,
  "meleeMutators": meleeMutators,
  "secondaryMutators": rangedMutators
}
//const meleeMods = {} we don't have any melee mods set up yet bc they're all built-in
const mods = {
  "primaryMods": rangedMods,
  "meleeMods": "meleeMods",//Later, remove quotes obv
  "secondaryMods": rangedMods
}
const consumables = {
  "concoctions": concoctions,
  "quickUses": quickUses
}

//Shorthand for selecting an element by ID. Follow up with .value or .innerHTML
function readSelection(elemID) {
  let selectedValue = document.getElementById(elemID);
  return selectedValue;
}
//Generalized select <option> population. *should* be able to be used for any gear selection,
//provided there is a distinct json format to pull from
function populateGear(elemID,collection) {
  const select = readSelection(elemID);
  if (collection != traits) {
    for (const gear in collection) {
      if (collection.hasOwnProperty(gear)) {
          const option = document.createElement("option");
          option.text = gear;
          select.appendChild(option);
      }
    }
  }
  else {
    for (const gear in collection) {
      if (collection.hasOwnProperty(gear)) {
          let matchFound = false;
          for (let i=1;i<=activeTraits;i++) {
            if (gear === greatTraitRecords[`trait${i}`].name && gear != "" && `trait${i}` != elemID) {
              matchFound = true;
              break;
            }
          }
          if (matchFound===false) {
          const option = document.createElement("option");
          option.text = gear;
          select.appendChild(option);
          }
      }
    }
  }
}

function traitBoxShortHand(elemID) {
  return `<div class="traitContainer">
            <button type="button" class="traitButton" onclick="updateTrait('trait',${elemID},'-')" id="traitButtonMinus${elemID}">-</button>
            <div class="traitLineHolder">
                <div class="traitNameHolder">
                    <select class="traitSelector" id="trait${elemID}" onchange="updateTrait('trait',${elemID})"></select>
                    <div class="traitLevelDisplay" id="trait${elemID}Level">${greatTraitRecords[`trait${elemID}`].level}</div> 
                    </div>
                <div class="traitLevelContainer">
                    <div class="pointsSpent" id="trait${elemID}Spent"></div>
                    <div class="intrinsicPoints" id="trait${elemID}Intrinsic"></div>
                    <div class="traitLevelBar">
                        <div class="traitLevelCircle"></div>
                        <div class="traitLevelCircle"></div>
                        <div class="traitLevelCircle"></div>
                        <div class="traitLevelCircle"></div>
                        <div class="traitLevelCircle"></div>
                        <div class="traitLevelCircle"></div>
                        <div class="traitLevelCircle"></div>
                        <div class="traitLevelCircle"></div>
                        <div class="traitLevelCircle"></div>
                        <div class="traitLevelCircle"></div>
                    </div>
                </div>
            </div>
            <button type="button" class="traitButton" onclick="updateTrait('trait',${elemID},'+')" id="traitButtonPlus${elemID}">+</button>
        </div>`
}

function generateTraitToggles() {
  let megaBox = readSelection("traitTogglesMegaBox");
  megaBox.innerHTML = "";
  for (let i=1;i<=activeTraits;i++) {
    megaBox.innerHTML += traitToggleShortHand(i);
  }
}

function traitToggleShortHand(elemID) {
  return  `<div class="togglesRowBox">
            <div class="togglesStat">Trait${elemID}:</div><div class="togglesValue" id="toggledTrait${elemID}"></div><div class="togglesUse">
                <input type="checkbox" id="USEtoggledTrait${elemID}" class="togglesCheckBox" onchange="updateFormulas()"/>
            </div>
          </div>`
}

function modifyTraitRecord(action,ID,name,level,defaultPoints,spentPoints) {
  if (action==="create") {
    if (name==null) {name=""}
    if (level==null) {level=0;}
    if (defaultPoints==null) {defaultPoints=0}
    if (spentPoints==null) {spentPoints=0}
    greatTraitRecords[`trait${ID}`] = {
      "name": name,
      "level": level,
      "default": defaultPoints,
      "spent": spentPoints
    }
    activeTraits += 1;
  }
  else if (action==="delete") {
    delete greatTraitRecords[`trait${ID}`];
    activeTraits -= 1;
  }
  else {
    alert("Something went wrong with modifyTraitRecord()");
  }
}
function insertTrait(traitName,traitLevel,defaultPoints) {
  for (let i=activeTraits;i>1;i--) {
    greatTraitRecords[`trait${i}`].name = greatTraitRecords[`trait${i-1}`].name;
    greatTraitRecords[`trait${i}`].level = greatTraitRecords[`trait${i-1}`].level;
    greatTraitRecords[`trait${i}`].spent = greatTraitRecords[`trait${i-1}`].spent;
    greatTraitRecords[`trait${i}`].default = greatTraitRecords[`trait${i-1}`].default;
  }
  greatTraitRecords[`trait1`].name = traitName;
  greatTraitRecords[`trait1`].level = traitLevel;
  greatTraitRecords[`trait1`].default = defaultPoints;
}

function updateTraitCollection(archetype1Old,archetype2Old) {
  //The old arch 1 and 2
  let archetype1Olds = "";
  let archetype2Olds = "";
  if (archetype1Old!=null) {archetype1Olds=archetype1Old}
  if (archetype2Old!=null) {archetype2Olds=archetype2Old}
  let updateAgain = false;

  // <div class="traitsBox" id="traitsMegaBox"></div>  //this is the overall traits box
  let megaBox = readSelection("traitsMegaBox");
  if (activeTraits>=1) {
    megaBox.innerHTML = emptyTraitBoxHeader;
    //Used for determining if class traits should autopopulate
    let class1Active = (readSelection("archetype1").value != null && readSelection("archetype1").value != "");
    let class2Active = (readSelection("archetype2").value != null && readSelection("archetype2").value != "");
    let trait1Path = classInfo[readSelection("archetype1").value].classTrait;
    let trait2Path = classInfo[readSelection("archetype2").value].classTrait;
    //Used in identifying if another trait slot has the trait that might be autopopulated
    let otherTrait = 0;
    //Path to intrinsic trait values
    let endurancePath = classInfo[readSelection("archetype1").value].Endurance;
    let expertisePath = classInfo[readSelection("archetype1").value].Expertise;
    let spiritPath = classInfo[readSelection("archetype1").value].Spirit;
    let vigorPath = classInfo[readSelection("archetype1").value].Vigor;
    //Check if the intrinsic traits even have a bonus
    let useEndurance = endurancePath > 0;
    let useExpertise = expertisePath > 0;
    let useSpirit = spiritPath > 0;
    let useVigor = vigorPath > 0;
    //If so, trigger autopopulation checks for whichever ones do.
    //All the following checks are done in reverse order, as the display scheme is first in last out
    //Vigor Trait Checks
    if (useVigor === true) {
      let foundClassTrait = false;
      for (let i=1;i<=activeTraits;i++) {
        let checkName = greatTraitRecords[`trait${i}`].name;
        if (checkName==="Vigor" && i != 1){foundClassTrait=true;otherTrait=i;}
      }
      if (greatTraitRecords[`trait1`].name != "Vigor" && foundClassTrait === false) {
        modifyTraitRecord("create",activeTraits+1);
        insertTrait("Vigor",0,0);
      }
      else if (greatTraitRecords[`trait1`].name != "Vigor" && foundClassTrait === true) {
        let totalLevel = greatTraitRecords[`trait${otherTrait}`].level;
        let totalDefault = greatTraitRecords[`trait${otherTrait}`].default
        greatTraitRecords[`trait${otherTrait}`].name = "";
        greatTraitRecords[`trait${otherTrait}`].level = 0;
        greatTraitRecords[`trait${otherTrait}`].default = 0;
        greatTraitRecords[`trait${otherTrait}`].spent = 0;
        modifyTraitRecord("create",activeTraits+1);
        insertTrait("Vigor",totalLevel,totalDefault);
        otherTrait=0;
      }
    }
    //Spirit Trait Checks
    if (useSpirit === true) {
      let foundClassTrait = false;
      for (let i=1;i<=activeTraits;i++) {
        let checkName = greatTraitRecords[`trait${i}`].name;
        if (checkName==="Spirit" && i != 1){foundClassTrait=true;otherTrait=i;}
      }
      if (greatTraitRecords[`trait1`].name != "Spirit" && foundClassTrait === false) {
        modifyTraitRecord("create",activeTraits+1);
        insertTrait("Spirit",0,0);
      }
      else if (greatTraitRecords[`trait1`].name != "Spirit" && foundClassTrait === true) {
        let totalLevel = greatTraitRecords[`trait${otherTrait}`].level;
        let totalDefault = greatTraitRecords[`trait${otherTrait}`].default
        greatTraitRecords[`trait${otherTrait}`].name = "";
        greatTraitRecords[`trait${otherTrait}`].level = 0;
        greatTraitRecords[`trait${otherTrait}`].default = 0;
        greatTraitRecords[`trait${otherTrait}`].spent = 0;
        modifyTraitRecord("create",activeTraits+1);
        insertTrait("Spirit",totalLevel,totalDefault);
        otherTrait=0;
      }
    }
    //Expertise Trait Checks
    if (useExpertise === true) {
      let foundClassTrait = false;
      for (let i=1;i<=activeTraits;i++) {
        let checkName = greatTraitRecords[`trait${i}`].name;
        if (checkName==="Expertise" && i != 1){foundClassTrait=true;otherTrait=i;}
      }
      if (greatTraitRecords[`trait1`].name != "Expertise" && foundClassTrait === false) {
        modifyTraitRecord("create",activeTraits+1);
        insertTrait("Expertise",0,0);
      }
      else if (greatTraitRecords[`trait1`].name != "Expertise" && foundClassTrait === true) {
        let totalLevel = greatTraitRecords[`trait${otherTrait}`].level;
        let totalDefault = greatTraitRecords[`trait${otherTrait}`].default
        greatTraitRecords[`trait${otherTrait}`].name = "";
        greatTraitRecords[`trait${otherTrait}`].level = 0;
        greatTraitRecords[`trait${otherTrait}`].default = 0;
        greatTraitRecords[`trait${otherTrait}`].spent = 0;
        modifyTraitRecord("create",activeTraits+1);
        insertTrait("Expertise",totalLevel,totalDefault);
        otherTrait=0;
      }
    }
    //Endurance Trait Checks
    if (useEndurance === true) {
      let foundClassTrait = false;
      for (let i=1;i<=activeTraits;i++) {
        let checkName = greatTraitRecords[`trait${i}`].name;
        if (checkName==="Endurance" && i != 1){foundClassTrait=true;otherTrait=i;}
      }
      if (greatTraitRecords[`trait1`].name != "Endurance" && foundClassTrait === false) {
        modifyTraitRecord("create",activeTraits+1);
        insertTrait("Endurance",0,0);
      }
      else if (greatTraitRecords[`trait1`].name != "Endurance" && foundClassTrait === true) {
        let totalLevel = greatTraitRecords[`trait${otherTrait}`].level;
        let totalDefault = greatTraitRecords[`trait${otherTrait}`].default
        greatTraitRecords[`trait${otherTrait}`].name = "";
        greatTraitRecords[`trait${otherTrait}`].level = 0;
        greatTraitRecords[`trait${otherTrait}`].default = 0;
        greatTraitRecords[`trait${otherTrait}`].spent = 0;
        modifyTraitRecord("create",activeTraits+1);
        insertTrait("Endurance",totalLevel,totalDefault);
        otherTrait=0;
      }
    }
    //Archetype2 Trait Checks
    if (class2Active === true) {
      let foundClassTrait2 = false;
      // let foundClassTrait2 = false;
      for (let i=1;i<=activeTraits;i++) {
        let checkName = greatTraitRecords[`trait${i}`].name;
        if (checkName===trait2Path && i != 1){foundClassTrait2=true;otherTrait=i;}
      }
      if (greatTraitRecords[`trait1`].name != trait2Path && foundClassTrait2 === false) {
        modifyTraitRecord("create",activeTraits+1);
        insertTrait(trait2Path,10,10);
      }
      else if (greatTraitRecords[`trait1`].name != trait2Path && foundClassTrait2 === true) {
        greatTraitRecords[`trait${otherTrait}`].name = "";
        greatTraitRecords[`trait${otherTrait}`].level = 0;
        greatTraitRecords[`trait${otherTrait}`].default = 0;
        greatTraitRecords[`trait${otherTrait}`].spent = 0;
        modifyTraitRecord("create",activeTraits+1);
        insertTrait(trait2Path,10,10);
        otherTrait=0;
      }
    }
    //Archetype1 Trait Checks
    if (class1Active === true) {
      let foundClassTrait1 = false;
      // let foundClassTrait2 = false;
      for (let i=1;i<=activeTraits;i++) {
        let checkName = greatTraitRecords[`trait${i}`].name;
        if (checkName===trait1Path && i != 1){foundClassTrait1=true;otherTrait=i;}
        // else if (checkName===trait2Path){foundClassTrait2=true}
      }
      if (greatTraitRecords[`trait1`].name != trait1Path && foundClassTrait1 === false) {
        modifyTraitRecord("create",activeTraits+1);
        insertTrait(trait1Path,10,10);
      }
      else if (greatTraitRecords[`trait1`].name != trait1Path && foundClassTrait1 === true) {
        greatTraitRecords[`trait${otherTrait}`].name = "";
        greatTraitRecords[`trait${otherTrait}`].level = 0;
        greatTraitRecords[`trait${otherTrait}`].default = 0;
        greatTraitRecords[`trait${otherTrait}`].spent = 0;
        modifyTraitRecord("create",activeTraits+1);
        insertTrait(trait1Path,10,10);
        otherTrait=0;
      }
    }



    for (let i=1;i<=activeTraits;i++) { //Sort trait records and create/delete accordingly.
      //If the last trait is not blank, make a new blank trait slot.
      if (i===activeTraits && greatTraitRecords[`trait${i}`].name != "") {
        modifyTraitRecord("create",i+1);
      }
      //If the current is filled and +1 is blank
      else if (i < (activeTraits-1) && greatTraitRecords[`trait${i}`].name != "" && greatTraitRecords[`trait${i+1}`].name === "") {
        //And then +2 is not, move the +2 into +1 
        if (greatTraitRecords[`trait${i+1}`].name === "" && greatTraitRecords[`trait${i+2}`].name != "") {
          greatTraitRecords[`trait${i+1}`] = greatTraitRecords[`trait${i+2}`];
          greatTraitRecords[`trait${i+2}`] = {"name": "","level": 0,"default": 0,"spent": 0}
        }
        //Else if both +1 and +2 are blank, keep adding until you find one to move into +1
        else if (greatTraitRecords[`trait${i+1}`].name === "" && greatTraitRecords[`trait${i+2}`].name === "") {
          let nextTrait = 0;
          for (let x=i+2;x<=activeTraits;x++) {
            if (greatTraitRecords[`trait${x}`].name != "") {nextTrait=x;break;}
          }
          if (nextTrait != 0) {
            greatTraitRecords[`trait${i+1}`] = greatTraitRecords[`trait${nextTrait}`];
            greatTraitRecords[`trait${nextTrait}`] = {"name": "","level": 0,"default": 0,"spent": 0}
          }
        }
      }
      else if (i < activeTraits && greatTraitRecords[`trait${i}`].name === "" && greatTraitRecords[`trait${i+1}`].name != "") {
        greatTraitRecords[`trait${i}`] = greatTraitRecords[`trait${i+1}`];
        greatTraitRecords[`trait${i+1}`] = {"name": "","level": 0,"default": 0,"spent": 0}
      }
      else if (i < activeTraits && greatTraitRecords[`trait${i}`].name === "" && greatTraitRecords[`trait${i+1}`].name === "") {
        for (let z=activeTraits;z>1;z-=1) {
          if (greatTraitRecords[`trait${z}`].name === "" && greatTraitRecords[`trait${z-1}`].name === "") {
            modifyTraitRecord("delete",z);
          }
        }
      }
      megaBox.innerHTML += traitBoxShortHand(i);
      populateGear(`trait${i}`,traits);
      // readSelection(`trait${i}`).value = greatTraitRecords[`trait${i}`].name; //this might not work how I hope

    }
    for (let i=1;i<activeTraits;i++) { //Now that boxes are generated, fix their assigned values
      //can't seem to save .value while actively modifying the innerHTML, else I'd call it in the earlier loop
      readSelection(`trait${i}`).value = greatTraitRecords[`trait${i}`].name;
      let traitName = greatTraitRecords[`trait${i}`].name;
      let elemID = `trait${i}`;
      let defaultPoints = 0;

      if (greatTableKnowerOfAll[traitName] > 0) { //If the selected trait IS intrinsic
        defaultPoints = greatTableKnowerOfAll[traitName];
        if (greatTraitRecords[elemID].default === 0) { //If it wasn't before
          greatTraitRecords[elemID].default = defaultPoints;
        }
        else { //If it WAS
          let intrinsicAdjustment = defaultPoints - greatTraitRecords[elemID].default;
          if (intrinsicAdjustment<0){intrinsicAdjustment=0}
          greatTraitRecords[elemID].level -= intrinsicAdjustment;
        }
      }
      else { //If the trait is not intrinsic
        defaultPoints = 0; //Then there is obv no default value
        if (greatTraitRecords[elemID].default != defaultPoints) {//If used to be
          greatTraitRecords[elemID].level -= greatTraitRecords[elemID].default; //Subtract old default to reduce level correctly
          // greatTraitRecords[elemID].default = defaultPoints;
          if (greatTraitRecords[elemID].level < 0) {greatTraitRecords[elemID].level = 0;} //Ensure level does not go negative
        }
      }
      //Make sure the level is not lower than the default, if we do then it makes sure Spent can't be negative as well.
      if (greatTraitRecords[elemID].level < defaultPoints) {greatTraitRecords[elemID].level = defaultPoints;}
      //Assign default, spent, and level to the trait records.
      greatTraitRecords[elemID].default = defaultPoints; //Assign w/e the resulting default value was
      greatTraitRecords[elemID].spent = greatTraitRecords[elemID].level - greatTraitRecords[elemID].default;
      greatTraitRecords[elemID].level = greatTraitRecords[elemID].spent + greatTraitRecords[elemID].default

      //If it matches a currently selected class trait
      if ((greatTraitRecords[elemID].name===trait1Path && trait1Path != "") || (greatTraitRecords[elemID].name===trait2Path && trait2Path != "")) {
        greatTraitRecords[elemID].default = 10;
        greatTraitRecords[elemID].spent = 0;
        greatTraitRecords[elemID].level = 10;
      }
      //If it matches the class trait that was in the slot just before then.
      else if ((greatTraitRecords[elemID].name===classInfo[archetype1Olds].classTrait && classInfo[archetype1Olds].classTrait != "") || (greatTraitRecords[elemID].name===classInfo[archetype2Olds].classTrait && classInfo[archetype2Olds].classTrait != "")) {
        if (greatTraitRecords[elemID].level===0 && (i===1 || i===2)) {
          greatTraitRecords[elemID].name = "";
          readSelection(elemID).value = "";
          updateAgain = true;
        }
      }

      if (greatTraitRecords[elemID].name != "" && greatTraitRecords[elemID].level === 0) {
        readSelection(`traitButtonMinus${i}`).innerHTML = `<img src="images/TrashIcon.png" class="traitButtonImage" alt="trash icon">`;
      }
      else if (greatTraitRecords[elemID].name != "" && greatTraitRecords[elemID].level === 10) {
        readSelection(`traitButtonPlus${i}`).innerHTML = "";
        readSelection(`traitButtonPlus${i}`).disabled = true;
      }
      if (greatTraitRecords[elemID].name != "" && greatTraitRecords[elemID].level === greatTraitRecords[elemID].default && greatTraitRecords[elemID].level != 0) {
        readSelection(`traitButtonMinus${i}`).innerHTML = "";
        readSelection(`traitButtonMinus${i}`).disabled = true;
      }
      if (greatTraitRecords[elemID].default > 0) {
        readSelection(`trait${i}`).disabled = true;
      }
      //Then adjust bar width and level display.
      readSelection(`trait${i}Intrinsic`).style.width = `${greatTraitRecords[elemID].default * 10}%`
      readSelection(`trait${i}Spent`).style.width = `${greatTraitRecords[elemID].level * 10}%`
      readSelection(`${elemID}Level`).innerHTML = greatTraitRecords[elemID].level
    }
  }
  else if (activeTraits===0) { //If we just loaded the page, make the first trait box.
    modifyTraitRecord("create",1);
    megaBox.innerHTML = emptyTraitBoxHeader;
    megaBox.innerHTML += traitBoxShortHand(1);
    populateGear("trait1",traits);
    //
  }

if (updateAgain===true) {updateTraitCollection();} //Repeat if there would be multiple blank slots not handled this late
generateTraitToggles();
updateTraitPoints();
}

function updateTraitPoints() {
  let traitPoints = readSelection("traitCount");
  let traitCap = readSelection("traitCap");
  traitPointCount = 0;
  for (let i=1;i<=activeTraits;i++) {
    traitPointCount += greatTraitRecords[`trait${i}`].spent
  }
  traitPoints.innerHTML = traitPointCount;
  traitCap.innerHTML = traitPointCap;
}

//THE NO LONGER AS GREAT TRAIT FUCKERY
function updateTrait(collection,elemID,adjustment) {
  let traitName = readSelection(`${collection}${elemID}`).value;
  let totalPoints = greatTraitRecords[`${collection}${elemID}`].level
//Checks if trait selected is blank. If it is, skip pretty much everything.
if (traitName!=""){
  let change = adjustment != null;
  //If a button was used, adjust values accordingly
  if (change===true) {
    if (adjustment==="+"){
      if (totalPoints != 10 && traitPointCount != traitPointCap) {totalPoints += 1};
    } else if (adjustment==="-") {
      if (totalPoints != 0) {totalPoints -= 1}
      else {readSelection(`${collection}${elemID}`).value = "";}
    }
  if (totalPoints>=10) {totalPoints = 10}
  }
}
greatTraitRecords[`${collection}${elemID}`].name = readSelection(`${collection}${elemID}`).value;
greatTraitRecords[`${collection}${elemID}`].level = totalPoints;
//Dupe/swaps are not needed for traits as the dropdowns for them decrease with selections
//Finally, update formulas based on the newly displayed values for this trait
updateTraitCollection()
updateFormulas();
}

// Everything I want to load by default, without event triggers
document.addEventListener("DOMContentLoaded", function() {
  populateGear("helmetChoice",helmets);
  populateGear("chestChoice",chests);
  populateGear("legChoice",legs);
  populateGear("handChoice",hands);
  populateGear("archetype1",classInfo);
  populateGear("archetype2",classInfo);
  populateGear("amulet",amulets);
  populateGear("ring1",rings);
  populateGear("ring2",rings);
  populateGear("ring3",rings);
  populateGear("ring4",rings);
  populateGear("relic",relics);
  populateGear("fragment1",fragments);
  populateGear("fragment2",fragments);
  populateGear("fragment3",fragments);

  // updateTraitCollection(); //gets called in importURLparams

  populateGear("primary",primary);
  populateGear("melee",melee);
  populateGear("secondary",secondary);
  populateGear("rangedMutator1",rangedMutators);
  populateGear("meleeMutator",meleeMutators);
  populateGear("rangedMutator2",rangedMutators);
  populateGear("rangedMod1",rangedMods);
  // populateGear("meleeMod",meleeMods); //not yet, if ever really? It's not like melee mods are selected lmfao what am I thinking.
  populateGear("rangedMod2",rangedMods);
  populateGear("concoction1",concoctions);
  populateGear("concoction2",concoctions);
  populateGear("concoction3",concoctions);
  populateGear("concoction4",concoctions);
  populateGear("concoction5",concoctions);
  populateGear("concoction6",concoctions);
  populateGear("concoction7",concoctions);
  populateGear("quickUse1",quickUses);
  populateGear("quickUse2",quickUses);
  importURLparameters();
})

//Used to modify and actively update the browser URL display without a page reload.
//Also used to compile the query string when exporting to R2TK.
function updateURLparameters(isExported) {
  urlObject = {
    "trait": [],
    "archetype": [],
    "armor": [],
    "primary": [],
    "melee": [],
    "secondary": [],
    "consumable": [],
    "accessory": [],
    "relic": [],
    "settings": [],
    "adv": [],
    "s": ["s"]
  }
  for (i=1;i<activeTraits;i++) {
    let traitName = greatTraitRecords[`trait${i}`].name;
    let traitLevel = greatTraitRecords[`trait${i}`].level;
    let concatenated = `${traitName}${traitLevel}`;
    urlObject.trait.push(concatenated)
  }
  urlObject.archetype.push(readSelection("archetype1").value);
  urlObject.archetype.push(readSelection("archetype2").value);
  urlObject.archetype.push(readSelection("archetype1ability").value);
  urlObject.archetype.push(readSelection("archetype2ability").value);
  urlObject.armor.push(readSelection("helmetChoice").value);
  urlObject.armor.push(readSelection("chestChoice").value);
  urlObject.armor.push(readSelection("legChoice").value);
  urlObject.armor.push(readSelection("handChoice").value);
  urlObject.primary.push(readSelection("primary").value);
  urlObject.primary.push(readSelection("rangedMutator1").value);
  urlObject.primary.push(readSelection("rangedMod1").value);
  urlObject.melee.push(readSelection("melee").value);
  urlObject.melee.push(readSelection("meleeMutator").value);
  // urlObject.melee.push(readSelection("meleeMod").value);
  urlObject.secondary.push(readSelection("secondary").value);
  urlObject.secondary.push(readSelection("rangedMutator2").value);
  urlObject.secondary.push(readSelection("rangedMod2").value);
  for (i=1;i<=7;i++) {
    urlObject.consumable.push(readSelection(`concoction${i}`).value)
  }
  urlObject.consumable.push(readSelection("quickUse1").value);
  urlObject.consumable.push(readSelection("quickUse2").value);
  urlObject.consumable.push("");//For later when I add 2 more quickuse
  urlObject.consumable.push("");
  urlObject.accessory.push(readSelection("amulet").value);
  for (i=1;i<=4;i++) {
    urlObject.accessory.push(readSelection(`ring${i}`).value);
  }
  urlObject.relic.push(readSelection("relic").value);
  for (i=1;i<=3;i++) {
    urlObject.relic.push(readSelection(`fragment${i}`).value);
  }
  exportURLsetting("USEtoggledHead","settings");
  exportURLsetting("USEtoggledChest","settings");
  exportURLsetting("USEtoggledLegs","settings");
  exportURLsetting("USEtoggledHands","settings");
  exportURLsetting("USEtoggledAmulet","settings");
  exportURLsetting("USEtoggledRing1","settings");
  exportURLsetting("USEtoggledRing2","settings");
  exportURLsetting("USEtoggledRing3","settings");
  exportURLsetting("USEtoggledRing4","settings");
  exportURLsetting("USEtoggledRelic","settings");
  exportURLsetting("USEtoggledrFrag1","settings");
  exportURLsetting("USEtoggledrFrag2","settings");
  exportURLsetting("USEtoggledrFrag3","settings");
  exportURLsetting("USEtoggledPrimeP","settings");
  exportURLsetting("USEtoggledAbility1","settings");
  exportURLsetting("USEtoggledPassive1","settings");
  exportURLsetting("USEtoggledPassive2","settings");
  exportURLsetting("USEtoggledPassive3","settings");
  exportURLsetting("USEtoggledPassive4","settings");
  exportURLsetting("USEtoggledAbility2","settings");
  exportURLsetting("USEtoggledPassive5","settings");
  exportURLsetting("USEtoggledPassive6","settings");
  exportURLsetting("USEtoggledPassive7","settings");
  exportURLsetting("USEtoggledPassive8","settings");
  exportURLsetting("USEtoggledPrimary","settings");
  exportURLsetting("USEtoggledpMutator","settings");
  exportURLsetting("USEtoggledpMod","settings");
  exportURLsetting("USEtoggledMelee","settings");
  exportURLsetting("USEtoggledmMutator","settings");
  exportURLsetting("USEtoggledmMod","settings");
  exportURLsetting("USEtoggledSecondary","settings");
  exportURLsetting("USEtoggledsMutator","settings");
  exportURLsetting("USEtoggledsMod","settings");
  exportURLsetting("USEtoggledConc1","settings");
  exportURLsetting("USEtoggledConc2","settings");
  exportURLsetting("USEtoggledConc3","settings");
  exportURLsetting("USEtoggledConc4","settings");
  exportURLsetting("USEtoggledConc5","settings");
  exportURLsetting("USEtoggledConc6","settings");
  exportURLsetting("USEtoggledConc7","settings");
  exportURLsetting("USEtoggledQuick1","settings");
  exportURLsetting("USEtoggledQuick2","settings");
  exportURLsetting("USEtoggledQuick3","settings");
  exportURLsetting("USEtoggledQuick4","settings");
  for (let i=1;i<activeTraits;i++) {
    exportURLsetting(`USEtoggledTrait${i}`,"settings")
  }
  urlObject.settings = urlObject.settings.replace(/\.?0+$/, '');
//Advanced Stats Settings
  if (readSelection("complexInput").value != null && readSelection("complexInput").value != 0) {
    urlObject.adv.push(readSelection("complexInput").value);
  }
  else {urlObject.adv.push("")}
  if (readSelection("isCoop").value != null && readSelection("isCoop").value != "Solo") {
    urlObject.adv.push(readSelection("isCoop").value);
  }
  else {urlObject.adv.push("")}
  if (readSelection("teamCount").value != null && readSelection("teamCount").value != 1) {
    urlObject.adv.push(readSelection("teamCount").value);
  }
  else {urlObject.adv.push("")}
  if (readSelection("minionCount").value != null && readSelection("minionCount").value != 0) {
    urlObject.adv.push(readSelection("minionCount").value);
  }
  else {urlObject.adv.push("")}
  if (readSelection("spiritHealerStacks").value != null && readSelection("spiritHealerStacks").value != 0) {
    urlObject.adv.push(readSelection("spiritHealerStacks").value);
  }
  else {urlObject.adv.push("")}
  urlObject.adv.push("");
  exportURLsetting("includeREdamage","adv");
  exportURLsetting("includeDMGKept","adv");
  exportURLsetting("includeRelicHealing","adv");
  exportURLsetting("includeShields","adv");
  //remove trailing 0's from the last parameter, helps clear the URL if no adv settings are active
  urlObject.adv[5] = urlObject.adv[5].replace(/\.?0+$/, '');

//Delete a given parameter if it stores no values
  urlParamIsEmpty("trait");
  urlParamIsEmpty("archetype");
  urlParamIsEmpty("armor");
  urlParamIsEmpty("primary");
  urlParamIsEmpty("melee");
  urlParamIsEmpty("secondary");
  urlParamIsEmpty("consumable");
  urlParamIsEmpty("accessory");
  urlParamIsEmpty("relic");
  urlParamIsEmpty("settings");
  urlParamIsEmpty("adv");

  if (isExported != true) {
    const params = new URLSearchParams(urlObject);
    decoded = params.toString();
    decoded = decoded.replace(/%2C/g, ',');
    const newUrl = `${window.location.origin}/index.html?${decoded}`;
    history.replaceState({}, '', newUrl);
  }
}

function confirmExport() {
  let confirmed = confirm(`This build will be opened in Remnant2Toolkit.com for sharing purposes.\n\n"Why export, though?"\nBecause this is a calculator, not a builds hub. THAT SAID, please be aware that exported builds do not save toggles/settings you have chosen here. If you need a build link that includes your chosen settings, use the URL in your browser.`);
  if (confirmed===true) {
    let R2TKprefix = `https://remnant2toolkit.com/builder`
    updateURLparameters(true)
    urlObject.source = "vash";

    delete urlObject.settings;
    delete urlObject.adv;
    delete urlObject.s;

    const params = new URLSearchParams(urlObject);
    decoded = params.toString();
    decoded = decoded.replace(/%2C/g, ',');
    const newUrl = `${R2TKprefix}?${decoded}`;
    window.open(newUrl, '_blank').focus();
  }
}

//Used in updateURLparameters() to delete a given parameter if it is empty
function urlParamIsEmpty(objElement) {
  if (urlObject[objElement] === null || urlObject[objElement] === "" || urlObject[objElement].length === 0) {
    delete urlObject[objElement];
  }
  else{
    let foundValue = false;
    for (i=0;i<urlObject[objElement].length;i++) {
      if (urlObject[objElement][i] != null && urlObject[objElement][i] != ``) {foundValue=true;break;}
    }
    if (foundValue===false) {
      delete urlObject[objElement];
    }
  }
}
//Reads the query string if one exists, and populates all fields/updates formulas accordingly -- push text test
function importURLparameters() {
  let feed = (new URL(document.location)).searchParams;
  let urlTraits = feed.get("trait");
  let urlArchs = feed.get("archetype");
  let urlArmor = feed.get("armor");
  let urlPrimary = feed.get("primary");
  let urlMelee = feed.get("melee");
  let urlSecondary = feed.get("secondary");
  let urlConcoctions = feed.get("consumable");
  let urlAccessory = feed.get("accessory");
  let urlRelic = feed.get("relic");
  let urlSettings = feed.get("settings");
  let urlAdvanced = feed.get("adv");
  let urlSource = feed.get("s");
//TRAITS
  if (urlTraits != null) {
      urlTraits = urlTraits.split(",")
      let traitCounter = 1;
      for (traitors of urlTraits) {
          let traitLevel = traitors.replace(/[^0-9]/g,"");
          let traitName = traitors.replace(/[0-9]/g,"");
          modifyTraitRecord("create",traitCounter,traitName,traitLevel)
          traitCounter += 1;
      }
  }
  updateTraitCollection();//This needs to get called regardless of null or not, to generate first trait box
  //Also, for the sake of imports with more than the trait cap, need to establish default points now for later
  //ARCHETYPES AND ABILITIES
  if (urlArchs != null) {
    urlArchs = urlArchs.split(",");
    if (urlArchs[0] != "" && urlArchs[0] != null) {
      readSelection("archetype1").value = urlArchs[0];
      updateArchetype('archetype','1');
    }
    if (urlArchs[1] != "" && urlArchs[1] != null) {
      readSelection("archetype2").value = urlArchs[1]; 
      updateArchetype('archetype','2');
    }
    if (urlArchs[2] != "" && urlArchs[2] != null && urlArchs[0] != "") {
      readSelection("archetype1ability").value = urlArchs[2];
      updateAbility('archetype1');
    }
    if (urlArchs[3] != "" && urlArchs[3] != null && urlArchs[1] != "") {
      readSelection("archetype2ability").value = urlArchs[3];
      updateAbility('archetype2');
    }  
  }
  //If an import has over the trait cap in points spent
  if (urlTraits != null && traitPointCount > traitPointCap) {
  let traitsOverCap = traitPointCount - traitPointCap;
  if (traitsOverCap > 0) {
    for (let i=activeTraits;i>0;i-=1) {
      let currentImportLevel = greatTraitRecords[`trait${i}`].level;
      if (currentImportLevel >= traitsOverCap && currentImportLevel != 0 && traitsOverCap != 0) {
        //Example: if the current level of 10 is greater than the diff over the cap 8
        // then 10-8=2, the level is now 2 and the diff is now 0
        let importAdjustmentValue = currentImportLevel - traitsOverCap;
        greatTraitRecords[`trait${i}`].level = importAdjustmentValue;
        traitsOverCap = 0;
      }
      //But if the current level of 2 is less than the diff of 8, 8-2=6 the new diff, and current now 0
      else if (currentImportLevel < traitsOverCap && traitsOverCap > 0 && currentImportLevel != 0 && traitsOverCap != 0) {
        traitsOverCap -= currentImportLevel;
        greatTraitRecords[`trait${i}`].level = 0;
      }
    }
    updateTraitCollection();//Update needed to adjust everything again based on what just happened
  }
  }
//ARMOR
  if (urlArmor != null) {
    urlArmor = urlArmor.split(",");
    if (urlArmor[0] != "" && urlArmor[0] != null) {
      readSelection("helmetChoice").value = urlArmor[0];
      updateArmor('helmet');
    }
    if (urlArmor[1] != "" && urlArmor[1] != null) {
      readSelection("chestChoice").value = urlArmor[1];
      updateArmor('chest');
    }
    if (urlArmor[2] != "" && urlArmor[2] != null) {
      readSelection("legChoice").value = urlArmor[2];
      updateArmor('leg');
    }
    if (urlArmor[3] != "" && urlArmor[3] != null) {
      readSelection("handChoice").value = urlArmor[3];
      updateArmor('hand');
    }

  }
//WEAPONS
  if (urlPrimary != null) {
    urlPrimary = urlPrimary.split(",");
    if (urlPrimary[0] != "" && urlPrimary[0] != null) {
      readSelection("primary").value = urlPrimary[0];
      updateWeapon('primary');
    }
    if (urlPrimary[1] != "" && urlPrimary[1] != null) {
      readSelection("rangedMutator1").value = urlPrimary[1];
      updateMutator('rangedMutator','1');
    }
    if (urlPrimary[2] != "" && urlPrimary[2] != null) {
      readSelection("rangedMod1").value = urlPrimary[2];
      updateMod('rangedMod','1');
    }
  }
  if (urlMelee != null) {
    urlMelee = urlMelee.split(",");
    if (urlMelee[0] != "" && urlMelee[0] != null) {
      readSelection("melee").value = urlMelee[0];
      updateWeapon('melee');
    }
    if (urlMelee[1] != "" && urlMelee[1] != null) {
      readSelection("meleeMutator").value = urlMelee[1];
      updateMutator('meleeMutator');
    }
  }
  if (urlSecondary != null) {
    urlSecondary = urlSecondary.split(",");
    if (urlSecondary[0] != "" && urlSecondary[0] != null) {
      readSelection("secondary").value = urlSecondary[0];
      updateWeapon('secondary');
    }
    if (urlSecondary[1] != "" && urlSecondary[1] != null) {
      readSelection("rangedMutator2").value = urlSecondary[1];
      updateMutator('rangedMutator','2');
    }
    if (urlSecondary[2] != "" && urlSecondary[2] != null) {
      readSelection("rangedMod2").value = urlSecondary[2];
      updateMod('rangedMod','2');
    }
  }
//AMULET AND RINGS
  if (urlAccessory != null) {
    urlAccessory = urlAccessory.split(",");
    if (urlAccessory[0] != "" && urlAccessory[0] != null) {
      readSelection("amulet").value = urlAccessory[0];
      updateAccessory('amulet');
    }
    for (let i=1;i<=4;i++) {
      if (urlAccessory[i] != "" && urlAccessory[i] != null) {
        readSelection(`ring${i}`).value = urlAccessory[i];
        updateAccessory('ring',i);
      }
    }
  }
//CONCOCTIONS AND QUICK USE CONSUMABLES
  if (urlConcoctions != null) {
    updateFormulas();
    urlConcoctions = urlConcoctions.split(",");
    for (let i=0;i<totalConcLimit;i++) {
      if (urlConcoctions[i] != "" && urlConcoctions[i] != null) {
        readSelection(`concoction${i+1}`).value = urlConcoctions[i];
        updateConsumable('concoction',i+1);
      }
    }
    if (urlConcoctions[7] != "" && urlConcoctions[7] != null) {
      readSelection(`quickUse1`).value = urlConcoctions[7];
      updateConsumable('quickUse',1);
    }
    if (urlConcoctions[8] != "" && urlConcoctions[8] != null) {
      readSelection(`quickUse2`).value = urlConcoctions[8];
      updateConsumable('quickUse',2);
    }
  }
//RELIC AND FRAGMENTS
  if (urlRelic != null) {
    urlRelic = urlRelic.split(",");
    if (urlRelic[0] != "" && urlRelic[0] != null) {
      readSelection("relic").value = urlRelic[0];
      updateAccessory('relic');
    }
    for (let i=1;i<=3;i++) {
      if (urlRelic[i] != "" && urlRelic[i] != null) {
        readSelection(`fragment${i}`).value = urlRelic[i];
        updateFragment('fragment',i);
      }
    }
  }
//SETTINGS
  if (urlSettings != null) {
    importURLsetting("USEtoggledHead",urlSettings[0]);
    importURLsetting("USEtoggledChest",urlSettings[1]);
    importURLsetting("USEtoggledLegs",urlSettings[2]);
    importURLsetting("USEtoggledHands",urlSettings[3]);
    importURLsetting("USEtoggledAmulet",urlSettings[4]);
    importURLsetting("USEtoggledRing1",urlSettings[5]);
    importURLsetting("USEtoggledRing2",urlSettings[6]);
    importURLsetting("USEtoggledRing3",urlSettings[7]);
    importURLsetting("USEtoggledRing4",urlSettings[8]);
    importURLsetting("USEtoggledRelic",urlSettings[9]);
    importURLsetting("USEtoggledrFrag1",urlSettings[10]);
    importURLsetting("USEtoggledrFrag2",urlSettings[11]);
    importURLsetting("USEtoggledrFrag3",urlSettings[12]);
    importURLsetting("USEtoggledPrimeP",urlSettings[13]);
    importURLsetting("USEtoggledAbility1",urlSettings[14]);
    importURLsetting("USEtoggledPassive1",urlSettings[15]);
    importURLsetting("USEtoggledPassive2",urlSettings[16]);
    importURLsetting("USEtoggledPassive3",urlSettings[17]);
    importURLsetting("USEtoggledPassive4",urlSettings[18]);
    importURLsetting("USEtoggledAbility2",urlSettings[19]);
    importURLsetting("USEtoggledPassive5",urlSettings[20]);
    importURLsetting("USEtoggledPassive6",urlSettings[21]);
    importURLsetting("USEtoggledPassive7",urlSettings[22]);
    importURLsetting("USEtoggledPassive8",urlSettings[23]);
    importURLsetting("USEtoggledPrimary",urlSettings[24]);
    importURLsetting("USEtoggledpMutator",urlSettings[25]);
    importURLsetting("USEtoggledpMod",urlSettings[26]);
    importURLsetting("USEtoggledMelee",urlSettings[27]);
    importURLsetting("USEtoggledmMutator",urlSettings[28]);
    importURLsetting("USEtoggledmMod",urlSettings[29]);
    importURLsetting("USEtoggledSecondary",urlSettings[30]);
    importURLsetting("USEtoggledsMutator",urlSettings[31]);
    importURLsetting("USEtoggledsMod",urlSettings[32]);
    importURLsetting("USEtoggledConc1",urlSettings[33]);
    importURLsetting("USEtoggledConc2",urlSettings[34]);
    importURLsetting("USEtoggledConc3",urlSettings[35]);
    importURLsetting("USEtoggledConc4",urlSettings[36]);
    importURLsetting("USEtoggledConc5",urlSettings[37]);
    importURLsetting("USEtoggledConc6",urlSettings[38]);
    importURLsetting("USEtoggledConc7",urlSettings[39]);
    importURLsetting("USEtoggledQuick1",urlSettings[40]);
    importURLsetting("USEtoggledQuick2",urlSettings[41]);
    //42
    //43 for the other two quick use that I don't have yet
    for (let i=1;i<activeTraits;i++) {
      importURLsetting(`USEtoggledTrait${i}`,urlSettings[43+i])

    }
    updateFormulas();
  }
//ADVANCED STATS LOGGING
  if (urlAdvanced != null) {
    urlAdvanced = urlAdvanced.split(",");
    if (urlAdvanced[0] != null && urlAdvanced[0] != "") {
      readSelection("complexInput").value = urlAdvanced[0];
    }
    if (urlAdvanced[1] != null && urlAdvanced[1] != "") {
      readSelection("isCoop").value = urlAdvanced[1];
    }
    if (urlAdvanced[2] != null && urlAdvanced[2] != "") {
      readSelection("teamCount").value = urlAdvanced[2];
    }
    if (urlAdvanced[3] != null && urlAdvanced[3] != "") {
      readSelection("minionCount").value = urlAdvanced[3];
    }
    if (urlAdvanced[4] != null && urlAdvanced[4] != "") {
      readSelection("spiritHealerStacks").value = urlAdvanced[4];
    }
    importURLsetting("includeREdamage",urlAdvanced[5][0]);
    importURLsetting("includeDMGKept",urlAdvanced[5][1]);
    importURLsetting("includeRelicHealing",urlAdvanced[5][2]);
    importURLsetting("includeShields",urlAdvanced[5][3]);
    updateFormulas();
  }
//Last updateFormulas for good measure, if feed exists and isn't just the source
  if (feed != null && feed != "s=s") {
    updateFormulas();
  }
//CHECK SOURCE PARAM IS MISSING, SO WE CAN NOTIFY PEEPS COMING FROM R2TK
  if (urlSource != "s" && feed != null && feed != "") {
    alert("This build was imported from R2ToolKit, PLEASE READ.\n\nThis calculator extracts precise complex values to help you better understand how a given build works. BUT, by default, everything is calculated: passives you forgot about, mutators you didn't think mattered, etc.\n\nYou MUST turn off anything you don't want factored in, in settings(gear icon), and adjust settings in advanced stats down below, to get accurate numbers. See Help menu(? icon) for info.")
  }
}
//Used in importURLparameters for shorthand checks
function importURLsetting(checkBoxID,arrayIDvalue) {
  if (arrayIDvalue != null && arrayIDvalue === "1") {
    readSelection(checkBoxID).checked = true;
  }
}
//Used in updateURLparameters for shorthand checks
function exportURLsetting(checkBoxID,objElement) {
  if (objElement != "adv") {
    if (readSelection(checkBoxID) != null && readSelection(checkBoxID).checked === true) {
      urlObject[objElement] += "1";
    }
    else if (readSelection(checkBoxID) === null || readSelection(checkBoxID).checked === false) {
      urlObject[objElement] += "0";
    }
  }
  else {
    if (readSelection(checkBoxID) != null && readSelection(checkBoxID).checked === true) {
      urlObject.adv[5] += "1";
    }
    else if (readSelection(checkBoxID) === null || readSelection(checkBoxID).checked === false) {
      urlObject.adv[5] += "0";
    }
  }
}



function updateConsumable(type,ID) {
  let selectedConsumable = readSelection(`${type}${ID}`);
  // let concLimit = +readSelection("concValueDisplay").innerHTML;
  readSelection(`${type}${ID}Icon`).src=consumables[`${type}s`][selectedConsumable.value].image;
  readSelection(`${type}${ID}Desc`).innerHTML=consumables[`${type}s`][selectedConsumable.value].desc;
  //Pass the selected value into duplicate checks, under the same function to repeat if swapped,
  //-using "several" handling to loop through more than 2 options, stopping the loop at the conc limit
  if (type==="concoction") {
  checkDuplicateSelection(type,ID,`updateConsumable`,`several`,totalConcLimit);
  }
  else if (type==="quickUse") {
    checkDuplicateSelection(type,ID,`updateConsumable`,`duo`);
  }
  updateFormulas();
}

//Triggers whenever a new weapon is selected
function updateWeapon(type) {
  let selectedWeapon = readSelection(type);
  //Update accessory image, description, and then refresh formulas.
  readSelection(`${type}Image`).src=weapons[type][selectedWeapon.value].image;
  readSelection(`${type}Description`).innerHTML=weapons[type][selectedWeapon.value].desc;
  // readSelection(`${type}${modifier}Desc`).innerHTML=gear[jsonID][selectedValue].desc;

  let weaponObjectReference = weapons[type][selectedWeapon.value]
  if (type==="melee") {
    readSelection("meleeStat1").innerHTML = weaponObjectReference.DMG;
    readSelection("meleeStat2").innerHTML = weaponObjectReference.atkSpeed;
    readSelection("meleeStat3").innerHTML = weaponObjectReference.stamCost;
    readSelection("meleeStat4").innerHTML = weaponObjectReference.chargeDMG;
    readSelection("meleeStat5").innerHTML = weaponObjectReference.chargeSpeed;
    readSelection("meleeStat6").innerHTML = weaponObjectReference.chargeCost;
    readSelection("meleeStat7").innerHTML = weaponObjectReference.specialCost;
    readSelection("meleeStat8").innerHTML = weaponObjectReference.critChance;
    readSelection("meleeStat9").innerHTML = weaponObjectReference.weakSpot;
    readSelection("meleeStat10").innerHTML = weaponObjectReference.stagger;
    readSelection("meleeMod").innerHTML = weaponObjectReference.builtIN;
    readSelection("meleeModImage").src = builtInMelee[weaponObjectReference.builtIN].image;


    // updateMod('meleeMod');
    // console.log(weaponObjectReference.builtIN)
  }



  updateFormulas();
}

//Triggers whenever a new mutator is selected
function updateMutator(type,value) {
  let collection = 'melee';
  let modifier = ``;
  if (value===`1`) {collection = 'primary';modifier=value}
  else if (value===`2`) {collection = `secondary`;modifier=value}
  let selectedMutator = readSelection(`${type}${modifier}`).value;
  //Update accessory image, description, and then refresh formulas.
  readSelection(`${collection}MutatorDesc`).innerHTML=mutators[`${collection}Mutators`][selectedMutator].desc;
  if (type==="rangedMutator") { //Melee obv needs no dupe checks. ranged1 is primary, ranged2 secondary.
    checkDuplicateSelection(type,value,`updateMutator`,`duo`);
  }
  updateFormulas();
}

//Triggers whenever a new mod is selected
function updateMod(type,value) {
  let collection = 'melee';
  let modifier = ``;
  let builtIN = false;
  if (value===`1`) {collection = 'primary';modifier=value}
  else if (value===`2`) {collection = `secondary`;modifier=value}
  let selectedMod = readSelection(`${type}${modifier}`);
  //Update accessory image, description, and then refresh formulas.
  
  readSelection(`${collection}ModDesc`).innerHTML=mods[`${collection}Mods`][selectedMod.value].desc;
  readSelection(`${collection}ModImage`).src=mods[`${collection}Mods`][selectedMod.value].image;
  if (type==="rangedMod") { //Melee obv needs no dupe checks. ranged1 is primary, ranged2 secondary.
    checkDuplicateSelection(type,value,`updateMod`,`duo`);
  }
  updateFormulas();
}

//Update armor related information
function updateArmor(armorPiece) {
   elem_ID = armorPiece + "Choice";
   json_ID = armorPiece + "s"
   let selectedValue = readSelection(elem_ID).value;
   let selectedArmor = armor[json_ID][selectedValue]
   //assign new image path to the img tag src
   readSelection(`${armorPiece}Image`).src=selectedArmor.image;
   readSelection(`${armorPiece}Armor`).innerHTML=selectedArmor.VALUE;
   readSelection(`${armorPiece}Weight`).innerHTML=selectedArmor.WEIGHT;
   updateFormulas();
}
//Triggers whenever a new amu/ring/relic is selected
function updateAccessory(type,place) {
  let jsonID = `${type}s`;
  let modifier = "";
  if (place!=null){modifier=place;}
  let selectedValue = readSelection(`${type}${modifier}`).value;
  //Update accessory image, description, and then refresh formulas.
  readSelection(`${type}${modifier}Image`).src=gear[jsonID][selectedValue].image;
  readSelection(`${type}${modifier}Desc`).innerHTML=gear[jsonID][selectedValue].desc;
  if (type==="ring") {
    checkDuplicateSelection(type,place,`updateAccessory`,`several`,4);
  }
  updateFormulas();
}
//Triggers whenever a new fragment is selected
function updateFragment(elem,ID) {
   checkDuplicateSelection(elem,ID,`updateFragment`,`several`,3);
   updateFormulas();
}
//Triggers whenever a given archetype has a new selection
function updateArchetype(archetype,value) {
    let overArchetype = `${archetype}${value}`
    let selectedArchetype = readSelection(overArchetype).value;
    //Update archetype icon
    readSelection(`${overArchetype}Icon`).src=classInfo[selectedArchetype].classIcon;
    //Clear abilities left in the dropdown, if any were there
    readSelection(`${overArchetype}ability`).innerHTML="";
    //Populate ability list based on selected archetype
    populateGear(`${overArchetype}ability`,classInfo[selectedArchetype].abilities);
    //needed to populate info on first ability that populates selection by default
    updateAbility(overArchetype);
    //Populate passive names
    readSelection(`${overArchetype}passive1`).innerHTML=classInfo[selectedArchetype].passives.passive1.name;
    readSelection(`${overArchetype}passive2`).innerHTML=classInfo[selectedArchetype].passives.passive2.name;
    readSelection(`${overArchetype}passive3`).innerHTML=classInfo[selectedArchetype].passives.passive3.name;
    readSelection(`${overArchetype}passive4`).innerHTML=classInfo[selectedArchetype].passives.passive4.name;
    //Populate passive descriptions
    readSelection(`${overArchetype}passive1desc`).innerHTML=classInfo[selectedArchetype].passives.passive1.desc;
    readSelection(`${overArchetype}passive2desc`).innerHTML=classInfo[selectedArchetype].passives.passive2.desc;
    readSelection(`${overArchetype}passive3desc`).innerHTML=classInfo[selectedArchetype].passives.passive3.desc;
    readSelection(`${overArchetype}passive4desc`).innerHTML=classInfo[selectedArchetype].passives.passive4.desc;
    //Update traits based on class selection
    updateTraitCollection(window.archetype1Old,window.archetype2Old);
    //Check if this selection was a duplicate, and if it was, swap places with the old info.
    checkDuplicateSelection(archetype,value,`updateArchetype`,`duo`);
    //Concatenates the two selected classes, uses resulting string to search comboTitle
    let part1 = readSelection("archetype1").value;
    let part2 = readSelection("archetype2").value;
    readSelection("comboTitle").innerHTML=titleCombos[`${part1}${part2}`];
    //In closing, update all formulas
    updateFormulas();
}

function checkDuplicateSelection(collection,value,functionName,handling,limits) {
  //Collection, collection ID number, function to reuse on swap, "duo"/"several"/"trait" handling, limits several if needed
  let option1 = `${collection}${value}`;
  let selectedOption = readSelection(option1).value;
  let option2 = ``;
  let oppositeValue = ``; //for use in recalling the function associated
  let updateOpposing = false;
    if (handling==="duo") { //For use with archetypes, quick use cons, and other things with only 2 selections.
      //Defining the opposite selection ID call in case a swap happens
      if (option1===`${collection}1`) {option2=`${collection}2`;oppositeValue = `2`;}
      else {option2=`${collection}1`;oppositeValue = `1`;}
      //If the selection matches the opposing selection, swap places like in game
      if (selectedOption===readSelection(option2).value && readSelection(option2).value!="") {
        window[`${option2}Old`]=window[`${option1}Old`];
        readSelection(option2).value=window[`${option1}Old`];
        updateOpposing = true;
      }
    }
    else if (handling==="several") { //For use with concoctions, rings, and things with more than 2.
      for (i=1;i<=limits;i++) {
          let current = readSelection(`${collection}${i}`).value;
          //Checks ID's on ACTIVE selections for a dupe, non-matching ID, that isn't blank.
          //If criteria met, swap places like in game.
          if ((current===selectedOption) && ((`${collection}${i}`)!=(`${collection}${value}`)) && (current!="")) {
            window[`${collection}${i}Old`]=window[`${collection}${value}Old`];
            readSelection(`${collection}${i}`).value=window[`${collection}${value}Old`];
            oppositeValue = i;
            updateOpposing = true;
            break;
          }
      }
    }
    //Assigns currently selected option to the "Old" variable for that selection for the sake
    //of tracking selection swaps
    window[`${option1}Old`]=selectedOption;
    if (updateOpposing===true && collection != "fragment"){ //update the swapped item, if not a fragment(they have no displays)
      window[functionName](collection,oppositeValue);
    }
}


//Triggers whenever the parent archetype changes, or whenever a new ability is selected
function updateAbility(archetype) {
   let selectedArchetype = readSelection(archetype).value;
   let selectedAbility = readSelection(`${archetype}ability`).value;
   if (archetype==="archetype1") {
      readSelection(`primePerk`).innerHTML=classInfo[selectedArchetype].primePerk;
      readSelection(`primePerkIcon`).src=classInfo[selectedArchetype].primePerkImage;
      readSelection(`primePerkDesc`).innerHTML=classInfo[selectedArchetype].primePerkDesc;
   }
   readSelection(`${archetype}abilityDesc`).innerHTML=classInfo[selectedArchetype].abilities[selectedAbility].desc;
   readSelection(`${archetype}abilityIcon`).src=classInfo[selectedArchetype].abilities[selectedAbility].image;
   updateFormulas();
}
//<-- BEGIN CUSTOM ITEM FUNCTIONS
function gameMasters() {
  greatTableKnowerOfAll.DMGKept.push(1/readSelection("teamCount").value);
  greatTableKnowerOfAll.GlobalHealingEff = greatTableKnowerOfAll.GlobalHealingEff * 0.5;
}
function brewMasters() {
  for (let i=1;i<=7;i++) {
    let activeConcoction = readSelection(`concoction${i}`).value;
    if (activeConcoction != null && activeConcoction != "") {
      greatTableKnowerOfAll.FlatDR += 0.02;
    }
  }
}
function restrictionCord() {
  greatTableKnowerOfAll.GlobalHealthModifier = greatTableKnowerOfAll.GlobalHealthModifier * 0.5;
}
function soulGuard() {
  greatTableKnowerOfAll.Bulwark += +readSelection("minionCount").value;
}
function soulShard() {
  //for dmg later
  // += +readSelection("minionCount").value * w/e;
}
function resonatingHeart(relicHPscaled,totalHealth) {
  let path = relics["Resonating Heart"]
  //Healing/Relic EFF already factored before this function even starts
  readSelection("complexDesc").innerHTML = path.complex;
  readSelection("complexInputHeader").innerHTML = "Input:";
  //window[relics[readSelection(`relic`).value].custom](relicHPscaled);
  let inputValue = readSelection("complexInput").value * 2;


  let relicPercHPpSec = 0;
  let relicHPpSec = 0;
  let avgPercHPpSec = 0;
  let avgHPpSec = 0;
  //If input is blank or 0, all values will BE 0, but that's ok because in our check to pull relic healing
  //we will first check if the input is blank/0 before pulling either basic or complex stats.
  if (inputValue != null && inputValue > 0) {
    relicPercHPpSec = inputValue/20;
    relicHPpSec = (relicPercHPpSec/100) * totalHealth
    avgPercHPpSec = (relicHPscaled + inputValue)/25
    avgHPpSec = (avgPercHPpSec/100) * totalHealth;
  }

  readSelection("complexLeftHalf").innerHTML = `
  <div class="complexHalfHeader">2x over 20s</div>
  <div class="complexHalfHalfBox">
    <div class="complexHalfHalfHeader">%/s</div>
    <div class="complexHalfHalfHeader">HP/s</div>
  </div>
  <div class="complexHalfValueBox">
    <div class="complexHalfValue">${relicPercHPpSec.toFixed(2)}%</div>
    <div class="complexHalfValue">${relicHPpSec.toFixed(2)}</div>
  </div>
  `;
  readSelection("complexRightHalf").innerHTML = `
  <div class="complexHalfHeader">AVG over 25s</div>
  <div class="complexHalfHalfBox">
    <div class="complexHalfHalfHeader">%/s</div>
    <div class="complexHalfHalfHeader">HP/s</div>
  </div>
  <div class="complexHalfValueBox">
    <div class="complexHalfValue">${avgPercHPpSec.toFixed(2)}%</div>
    <div class="complexHalfValue">${avgHPpSec.toFixed(2)}</div>
  </div>
  `;
 return [avgPercHPpSec,avgHPpSec]
}
//END CUSTOM ITEM FUNCTIONS -->
//Displays all selected gear within the toggles menu. Does not utilize checks here, that's elsewhere
function pullToggles() {
  readSelection("toggledHead").innerHTML = readSelection("helmetChoice").value
  readSelection("toggledChest").innerHTML = readSelection("chestChoice").value
  readSelection("toggledLegs").innerHTML = readSelection("legChoice").value
  readSelection("toggledHands").innerHTML = readSelection("handChoice").value

  readSelection("toggledAmulet").innerHTML = readSelection("amulet").value
  readSelection("toggledRing1").innerHTML = readSelection("ring1").value
  readSelection("toggledRing2").innerHTML = readSelection("ring2").value
  readSelection("toggledRing3").innerHTML = readSelection("ring3").value
  readSelection("toggledRing4").innerHTML = readSelection("ring4").value

  readSelection("toggledRelic").innerHTML = readSelection("relic").value
  readSelection("toggledrFrag1").innerHTML = readSelection("fragment1").value
  readSelection("toggledrFrag2").innerHTML = readSelection("fragment2").value
  readSelection("toggledrFrag3").innerHTML = readSelection("fragment3").value

  readSelection("toggledPrimeP").innerHTML = readSelection("primePerk").innerHTML
  readSelection("toggledAbility1").innerHTML = readSelection("archetype1ability").value
  readSelection("toggledPassive1").innerHTML = readSelection("archetype1passive1").innerHTML
  readSelection("toggledPassive2").innerHTML = readSelection("archetype1passive2").innerHTML
  readSelection("toggledPassive3").innerHTML = readSelection("archetype1passive3").innerHTML
  readSelection("toggledPassive4").innerHTML = readSelection("archetype1passive4").innerHTML

  readSelection("toggledAbility2").innerHTML = readSelection("archetype2ability").value
  readSelection("toggledPassive5").innerHTML = readSelection("archetype2passive1").innerHTML
  readSelection("toggledPassive6").innerHTML = readSelection("archetype2passive2").innerHTML
  readSelection("toggledPassive7").innerHTML = readSelection("archetype2passive3").innerHTML
  readSelection("toggledPassive8").innerHTML = readSelection("archetype2passive4").innerHTML

  readSelection("toggledPrimary").innerHTML = readSelection("primary").value
  readSelection("toggledpMutator").innerHTML = readSelection("rangedMutator1").value
  readSelection("toggledpMod").innerHTML = readSelection("rangedMod1").value

  readSelection("toggledMelee").innerHTML = readSelection("melee").value
  readSelection("toggledmMutator").innerHTML = readSelection("meleeMutator").value
  readSelection("toggledmMod").innerHTML = readSelection("meleeMod").value

  readSelection("toggledSecondary").innerHTML = readSelection("secondary").value
  readSelection("toggledsMutator").innerHTML = readSelection("rangedMutator2").value
  readSelection("toggledsMod").innerHTML = readSelection("rangedMod2").value

  readSelection("toggledConc1").innerHTML = readSelection("concoction1").value
  readSelection("toggledConc2").innerHTML = readSelection("concoction2").value
  readSelection("toggledConc3").innerHTML = readSelection("concoction3").value
  readSelection("toggledConc4").innerHTML = readSelection("concoction4").value
  readSelection("toggledConc5").innerHTML = readSelection("concoction5").value
  readSelection("toggledConc6").innerHTML = readSelection("concoction6").value
  readSelection("toggledConc7").innerHTML = readSelection("concoction7").value

  readSelection("toggledQuick1").innerHTML = readSelection("quickUse1").value
  readSelection("toggledQuick2").innerHTML = readSelection("quickUse2").value
  //Only check as many traits are generated
  for (let i=1;i<=activeTraits;i++) {
    let traitLevel = greatTraitRecords[`trait${i}`].level;
    if (traitLevel === 0) {traitLevel=""}
    readSelection(`toggledTrait${i}`).innerHTML = `${greatTraitRecords[`trait${i}`].name} ${traitLevel}`
  }
}
//The big cheese, the great clusterfuck, where all the formulas refresh.
function updateFormulas() { 
  //Fill the Toggles table
  pullToggles();
  //Reset the table
  for(let elements in greatTableKnowerOfAll) {
    if (elements!="REdamage" && elements!="DMGKept" && elements!="GlobalHealthModifier" && elements!="GlobalHealingEff") {
      greatTableKnowerOfAll[elements]=0;
    }
    else if (elements==="GlobalHealthModifier"||elements==="GlobalHealingEff") {
      greatTableKnowerOfAll[elements]=1;
    }
    else {
      greatTableKnowerOfAll[elements]=[];
    }
  }

//MISC STATS THAT NEED TO BE PULLED FROM DISPLAYS FIRST-------------------------
let isCoop = readSelection("isCoop");
let teamCount = readSelection("teamCount");
  if (isCoop.value==="Co-op") {
    isCoop = true;
    teamCount.disabled = false;
    teamCount = teamCount.value
  }
  else {
    isCoop = false;
    teamCount.value = 1;
    teamCount.disabled = true;
    teamCount = 1;
  }
//----------TRAITS--------------------------------------------------------------
  pullTraits();
//----------WEAPONS-------------------------------------------------------------
  pullWeapons();
//----------BASICS COLUMN-------------------------------------------------------
  pullArmorStats();
  pullGearStats();
  pullClassStats();
//----------CONSUMABLES---------------------------------------------------------
//--These have to come after everything else, in order to take advantage of the correct concLimit
  totalConcLimit = 1 + greatTableKnowerOfAll.ConcLimit;
  updateDisplay("concValueDisplay",totalConcLimit,0);
  pullConsumables(totalConcLimit);
//SUMMARY STATS
  let baseHealth = 100 + greatTableKnowerOfAll.Health;
  let healthBoost = 1 + greatTableKnowerOfAll["Health%"];
  let globalHealth = greatTableKnowerOfAll.GlobalHealthModifier;
  let totalHealth = baseHealth * healthBoost * globalHealth; 
  updateDisplay("summaryHealth",totalHealth,1);
  let baseStamina = 100 + greatTableKnowerOfAll.Stamina;
  let staminaBoost = 1 + greatTableKnowerOfAll["Stamina%"];
  let totalStamina = baseStamina * staminaBoost; 
  updateDisplay("summaryStamina",totalStamina,1);
  let baseArmor = greatTableKnowerOfAll.Armor;
  let armorEff = 1 + greatTableKnowerOfAll["Armor%"];
  let totalArmor = baseArmor * armorEff;
  updateDisplay("summaryArmor",totalArmor,1);
  let baseWeight = greatTableKnowerOfAll.Encumbrance;
  let weightBoost = 1 + greatTableKnowerOfAll["Encumbrance%"];
  let totalWeight = baseWeight * weightBoost;
  updateDisplay("summaryWeight",totalWeight,1);
  let WeightThreshold = greatTableKnowerOfAll.WeightThreshold;
  let dodgeClass = "";
  let staminaPenalty = 0;
  if (totalWeight>(75+WeightThreshold)) {
    dodgeClass = "Flop";
    readSelection("summaryWeight").style.color = "#e06666";
    staminaPenalty = .75;
  }
  else if ((totalWeight>(50+WeightThreshold))&&(totalWeight<=(75+WeightThreshold))) {
    dodgeClass = "Heavy";
    readSelection("summaryWeight").style.color = "orange";
    staminaPenalty = .5;
  }
  else if ((totalWeight>(25+WeightThreshold))&&(totalWeight<=(50+WeightThreshold))) {
    dodgeClass = "Medium";
    readSelection("summaryWeight").style.color = "#90ee90";
    staminaPenalty = .25;
  }
  else {
    dodgeClass = "Light";
    readSelection("summaryWeight").style.color = "#93CCEA";
    //No stamina cost penalty on light dodge
  }
//DAMAGE REDUCTION
//ARMOR---
  updateDisplay("baseArmor",baseArmor,1);
  updateDisplay("armorEff",armorEff*100,2,"%");
  updateDisplay("totalArmor",totalArmor,1);
  let armorDR = totalArmor/(totalArmor+200);
  updateDisplay("armorDR",armorDR*100,2,"%");
//FLAT---
  let bulwarkStacks = greatTableKnowerOfAll.Bulwark;
  if (bulwarkStacks>5) {bulwarkStacks = 5;}//add a check here later to show people that they're going over stacks
  updateDisplay("bulwarkStacks",bulwarkStacks,0);
  let bulwarkDR = -.005*(bulwarkStacks**2) + .075*bulwarkStacks;
  updateDisplay("bulwarkDR",bulwarkDR*100,2,"%");
  let otherFlat = greatTableKnowerOfAll.FlatDR;
  updateDisplay("otherFlat",otherFlat*100,2,"%");
  let totalFlat = bulwarkDR+otherFlat;
  updateDisplay("totalFlat",totalFlat*100,2,"%");
  let totalDR = 1-(1-armorDR)*(1-totalFlat);
  updateDisplay("totalDR",totalDR*100,2,"%");
  if (totalDR>0.8){
    totalDR=0.8
    readSelection("totalDR").style.color = "#e06666"
  }
  else {
    readSelection("totalDR").style.color = "white"
  }//add a check here later to show people that they're going over cap
//RESISTANCES
  let bleed = greatTableKnowerOfAll.Bleed * (1+greatTableKnowerOfAll["Bleed%"]);
  let burn = greatTableKnowerOfAll.Burn * (1+greatTableKnowerOfAll["Burn%"]);
  let shock = greatTableKnowerOfAll.Shock * (1+greatTableKnowerOfAll["Shock%"]);
  let corrosive = greatTableKnowerOfAll.Corrosive * (1+greatTableKnowerOfAll["Corrosive%"]);
  let blight = greatTableKnowerOfAll.Blight * (1+greatTableKnowerOfAll["Blight%"]);
  updateDisplay("summaryBleed",bleed,0);
  updateDisplay("summaryBurn",burn,0);
  updateDisplay("summaryShock",shock,0);
  updateDisplay("summaryCorrosive",corrosive,0);
  updateDisplay("summaryBlight",blight,0);
//HEALING
  //this is for shit like game master's pride, it's a global multi modifier
  let globalHealingMod = greatTableKnowerOfAll.GlobalHealingEff;
//BOOSTS---
  let relicEffectiveness = greatTableKnowerOfAll.RelicEFF;
  updateDisplay("relicEFF",relicEffectiveness*100,2,"%");
  let healingEffectiveness = greatTableKnowerOfAll.HealingEFF;
  updateDisplay("healingEFF",healingEffectiveness*100,2,"%");
  let relicUseTime = greatTableKnowerOfAll.RelicSpeed;
  updateDisplay("relicUseTime",relicUseTime*100,2,"%");
  let lifestealALL = greatTableKnowerOfAll.Lifesteal;
  let lifestealMelee = greatTableKnowerOfAll.MLifesteal;
  let lifestealRange = greatTableKnowerOfAll.RLifesteal;
  readSelection("lifesteal").innerHTML = `${(lifestealALL).toFixed(1)}/${(lifestealMelee).toFixed(1)}/${(lifestealRange).toFixed(1)}`;
//REGENERATION---
  let flatHPperSec = greatTableKnowerOfAll["HP/S+"] * (1+healingEffectiveness) * globalHealingMod;
  updateDisplay("flatHP/s",flatHPperSec,1);
  let percHPperSec = greatTableKnowerOfAll["HP/S%"] * (1+healingEffectiveness) * globalHealingMod;
  updateDisplay("%HP/s",percHPperSec*100,2,"%");
  let greyHPperSec = 0.2 + greatTableKnowerOfAll["GreyHP/S+"];
  let greyPercHPperSec = greatTableKnowerOfAll["GreyHP/S%"];
  let totalGreyHPperSec = greyHPperSec * (1+greyPercHPperSec);
  updateDisplay("greyHP/s",totalGreyHPperSec,1);
//STAMINA
let staminaPerSec = 33 + greatTableKnowerOfAll["Stamina/S+"];
updateDisplay("stamina/s",staminaPerSec,1);
let staminaPenaltyAdjustment = 1;
if (greatTableKnowerOfAll.StaminaPenaltyAdjustment != 0) {staminaPenaltyAdjustment = greatTableKnowerOfAll.StaminaPenaltyAdjustment}
let staminaCost = 1 + (staminaPenalty*staminaPenaltyAdjustment) + greatTableKnowerOfAll.StaminaCost;
updateDisplay("staminaCost",staminaCost*100,2,"%");
readSelection("dodgeClass").innerHTML = dodgeClass;
//----------END BASICS COLUMN---------------------------------------------------
//----------RELIC STATS UNDER ACCESSORIES---------------------------------------------------
//RELIC HEALING
let relicHPbase = greatTableKnowerOfAll.RelicHPbase * globalHealingMod;
updateDisplay("relicBase",relicHPbase,2);
let relicHPtype = greatTableKnowerOfAll.RelicHPtype;
readSelection("relicType").innerHTML = relicHPtype;
let relicHPtime = greatTableKnowerOfAll.RelicHPtime;
updateDisplay("relicTime",relicHPtime,0);
//SCALED
let relicHPscaled = relicHPbase * (1+relicEffectiveness) * (1+healingEffectiveness);
if (relicHPtype==="%"){
  updateDisplay("relicScaled",relicHPscaled,1,"%");
  updateDisplay("relic%HP/s",(relicHPscaled/relicHPtime),1,"%");
  updateDisplay("relicHP/s",((relicHPscaled/relicHPtime)/100)*totalHealth,1);
}
else if (relicHPtype==="P"||relicHPtype==="F") {
  updateDisplay("relicScaled",relicHPscaled,1);
  readSelection("relic%HP/s").innerHTML = "---";
  updateDisplay("relicHP/s",(relicHPscaled/relicHPtime),1);
}
else {//if null
  relicHPscaled = 0;
  relicHPtime = 0;
  readSelection("relicScaled").innerHTML = "---";
  readSelection("relic%HP/s").innerHTML = "---";
  readSelection("relicHP/s").innerHTML = "---";
}
//Now that healing values have populated, check and call for custom relic functions
//for the sake of complex relic effects
let relicComplexArray;
if (readSelection("USEtoggledRelic").checked != true) {
  if (relics[readSelection(`relic`).value].custom != null) {
    readSelection("complexInput").disabled = false;
    relicComplexArray = window[relics[readSelection(`relic`).value].custom](relicHPscaled,totalHealth);
  }
  else { //clear complex effect
    readSelection("complexInput").disabled = true;
    readSelection("complexInput").value = "";
    readSelection("complexInputHeader").innerHTML = "";
    readSelection("complexDesc").innerHTML = "No complex relic effects are currently active.";
    readSelection("complexLeftHalf").innerHTML = "";
    readSelection("complexRightHalf").innerHTML = "";
  }
}
else { //clear complex effect
  readSelection("complexInput").disabled = true;
  readSelection("complexInput").value = "";
  readSelection("complexInputHeader").innerHTML = "";
  readSelection("complexDesc").innerHTML = "No complex relic effects are currently active.";
  readSelection("complexLeftHalf").innerHTML = "";
  readSelection("complexRightHalf").innerHTML = "";
}
let useComplexValues = false;
if (relicComplexArray != null && relicComplexArray != 0) {
  if (relicComplexArray[0] > 0) {useComplexValues = true;}
}

//----------MULTIPLICATIVE MITIGATION SOURCES---------------------------------------------------
//REDUCED ENEMY DAMAGE
let reducedEnemyDamage = 1;
  for (let i=0;i<=greatTableKnowerOfAll.REdamage.length-1;i++) {
    reducedEnemyDamage = reducedEnemyDamage * (1+greatTableKnowerOfAll.REdamage[i]);
  }
  reducedEnemyDamage += -1;
//DAMAGE KEPT OR RETAINED(how much gets shared to allies via various sources)
let damageKept = 1;
  for (let i=0;i<=greatTableKnowerOfAll.DMGKept.length-1;i++) { //ADD GAMEMASTER'S CHECK HERE LATER
      damageKept = damageKept * (1+greatTableKnowerOfAll.DMGKept[i]);
  }
  damageKept += -1;
updateDisplay("REdamage",reducedEnemyDamage*100,2,"%");
updateDisplay("DMGKept",damageKept*100,2,"%");
//If either box is checked, convert the format to dmg taken instead of dmg reduced, for use
//in the big cheese equation.
let useREdamage = readSelection("includeREdamage").checked;
  if (useREdamage===false){reducedEnemyDamage=1}
  else {
    reducedEnemyDamage += 1;
  }
let useDMGKept = readSelection("includeDMGKept").checked;
  if (useDMGKept===false){damageKept=1}
  else {
    damageKept += 1;
  }
//TOTAL BONUS TO EFFECTIVE DR, BASED ON REDMG AND DMGKEPT
let totalBonusMitigation = (damageKept*reducedEnemyDamage)-1;
updateDisplay("totalBonusMitigation",totalBonusMitigation*100,2,"%");
//TOTAL EFFECTIVE DAMAGE REDUCTION INCLUDING REDMG AND DMGKEPT
let effectiveDR = 1-(1-totalDR)*(1+totalBonusMitigation);
updateDisplay("effectiveDR",effectiveDR*100,2,"%");
//----------BASE EHP----------------------------------------------------------------------------
let baseEHP = totalHealth/(1-effectiveDR); 
  //declaring this here so we can use it in shield EHP before adding it
  //back into the total EHP display. This is necessary for the sake of EHP/s as well.
//----------SHIELDS----------------------------------------------------------------------------
let percShields = greatTableKnowerOfAll.Shield;
let shieldEff = greatTableKnowerOfAll.ShieldEFF;
updateDisplay("shield%",percShields*100,2,"%");
updateDisplay("shieldEff",shieldEff*100,2,"%");
let totalPercShields = percShields * (1+shieldEff);
updateDisplay("totalShield%",totalPercShields*100,2,"%");
let shieldEHP = baseEHP * totalPercShields;
updateDisplay("shieldEHP",shieldEHP,2);
let useShieldEHP = readSelection("includeShields").checked;
//----------TOTAL EHP----------------------------------------------------------------------------
if (useShieldEHP===false){shieldEHP=0}
let totalEHP = baseEHP + shieldEHP;
updateDisplay("EHP",totalEHP,2);
//----------HEALING----------------------------------------------------------------------------
updateDisplay("advancedFlat",flatHPperSec,2);
updateDisplay("advanced%",percHPperSec*100,2,"%");
updateDisplay("advancedTotalFlat",flatHPperSec + percHPperSec*totalHealth,2);
updateDisplay("advancedTotal%",(percHPperSec + flatHPperSec/totalHealth)*100,2,"%"); 

let advancedRelicFlat,advancedRelicPerc;
if (useComplexValues===true) {
  advancedRelicPerc = relicComplexArray[0];
  advancedRelicFlat = 0;
}
else {
  if (relicHPtype==="P"||relicHPtype==="F") {
    advancedRelicPerc = 0;
    advancedRelicFlat = relicHPscaled/relicHPtime;
  }
  else if (relicHPtype==="%") {
    advancedRelicPerc = relicHPscaled/relicHPtime;
    advancedRelicFlat = 0;
  }
  else { //If there is no healing type(unique relic like Shielded Heart)
    advancedRelicPerc = 0;
    advancedRelicFlat = 0;
  }
}
updateDisplay("advancedRelicFlat",advancedRelicFlat,2);
updateDisplay("advancedRelic%",advancedRelicPerc,2,"%");
updateDisplay("advancedRelicTotalFlat",advancedRelicFlat + (advancedRelicPerc/100)*totalHealth,2);
updateDisplay("advancedRelicTotal%",(advancedRelicPerc + advancedRelicFlat/totalHealth)*100,2,"%");

let useRelicHealing = readSelection("includeRelicHealing").checked != false;
let advancedTotalFlatHP = flatHPperSec + percHPperSec*totalHealth;
let advancedTotalPercHP = (percHPperSec + flatHPperSec/totalHealth)*100;
if (useRelicHealing===true) {
  advancedTotalFlatHP += advancedRelicFlat + (advancedRelicPerc/100)*totalHealth
  advancedTotalPercHP += advancedRelicPerc + advancedRelicFlat/totalHealth
}

updateDisplay("totalHealingFlat",advancedTotalFlatHP,2);
updateDisplay("totalHealing%",advancedTotalPercHP,2,"%");

let EHPpSec = baseEHP * (advancedTotalPercHP/100);
updateDisplay("EHP/s",EHPpSec,2);

updateURLparameters();
}

//Shorthand for shit I got tired of typing every god damn time.
function updateDisplay (elemID,statistic,rounding,percent) {
  let percentage = "";
  if (percent==null) {percentage=""}
  else {percentage=percent}
  readSelection(elemID).innerHTML = `${statistic.toFixed(rounding)}${percentage}`;
}
//Used in updateFormulas() to fill consumable values on the master table
function pullConsumables (concLimit) {
  let concoction1 = readSelection("concoction1");
  let concoction2 = readSelection("concoction2");
  let concoction3 = readSelection("concoction3");
  let concoction4 = readSelection("concoction4");
  let concoction5 = readSelection("concoction5");
  let concoction6 = readSelection("concoction6");
  let concoction7 = readSelection("concoction7");
  let quickUse1 = readSelection("quickUse1");
  let quickUse2 = readSelection("quickUse2");
//Concoctions
  for (i=1;i<=7;i++) {
    let concoction = readSelection(`concoction${i}`);
    if (i<=concLimit) {
      concoction.disabled = false;
      concoction.style.backgroundColor = "#d9d9d9";
      if (readSelection(`USEtoggledConc${i}`).checked != true) {
        pullStats(concoctions[concoction.value].stats);
        if (concoctions[concoction.value].custom != null) {
          window[concoctions[concoction.value].custom]();
        }
      }
    }
    else {
      concoction.value = "";
      concoction.style.backgroundColor = "#434343";
      readSelection(`concoction${i}Icon`).src = "images/Remnant/clear.png";
      readSelection(`concoction${i}Desc`).innerHTML = "";
      window[`concoction${i}old`]="";
      concoction.disabled = true;
    }
  }
//Quick-Use Consumables
  if (readSelection(`USEtoggledQuick1`).checked != true) {
    pullStats(quickUses[quickUse1.value].stats);
    if (quickUses[readSelection(`quickUse1`).value].custom != null) {
      window[quickUses[readSelection(`quickUse1`).value].custom]();
    }
  }
  if (readSelection(`USEtoggledQuick2`).checked != true) {
    pullStats(quickUses[quickUse2.value].stats);
    if (quickUses[readSelection(`quickUse2`).value].custom != null) {
      window[quickUses[readSelection(`quickUse2`).value].custom]();
    }
  }
}
//Used in updateFormulas() to fill weapon/mod/mutator values on the master table
function pullWeapons () {
  let primaryWeapon = readSelection("primary");
  let primaryWeaponMutator = readSelection("rangedMutator1");
  let primaryWeaponMod = readSelection("rangedMod1");
  let meleeWeapon = readSelection("melee");
  let meleeWeaponMutator = readSelection("meleeMutator");
  // let meleeWeaponMod = readSelection("meleeMod"); //not yet
  let secondaryWeapon = readSelection("secondary");
  let secondaryWeaponMutator = readSelection("rangedMutator2");
  let secondaryWeaponMod = readSelection("rangedMod2");
//Weapons
  if (readSelection(`USEtoggledPrimary`).checked != true) {
    pullStats(weapons.primary[primaryWeapon.value].stats);
    if (primary[readSelection(`primary`).value].custom != null) {
      window[primary[readSelection(`primary`).value].custom]();
    }
  }
  if (readSelection(`USEtoggledMelee`).checked != true) {
    pullStats(weapons.melee[meleeWeapon.value].stats);
    if (melee[readSelection(`melee`).value].custom != null) {
      window[melee[readSelection(`melee`).value].custom]();
    }
  }
  if (readSelection(`USEtoggledSecondary`).checked != true) {
    pullStats(weapons.secondary[secondaryWeapon.value].stats);
    if (secondary[readSelection(`secondary`).value].custom != null) {
      window[secondary[readSelection(`secondary`).value].custom]();
    }
  }
//Mutators
  if (readSelection(`USEtoggledpMutator`).checked != true) {
    pullStats(mutators.primaryMutators[primaryWeaponMutator.value].stats);
    if (mutators.primaryMutators[readSelection(`rangedMutator1`).value].custom != null) {
      window[mutators.primaryMutators[readSelection(`rangedMutator1`).value].custom]();
    }
  }
  if (readSelection(`USEtoggledmMutator`).checked != true) {
    pullStats(mutators.meleeMutators[meleeWeaponMutator.value].stats);
    if (mutators.meleeMutators[readSelection(`meleeMutator`).value].custom != null) {
      window[mutators.meleeMutators[readSelection(`meleeMutator`).value].custom]();
    }
  }
  if (readSelection(`USEtoggledsMutator`).checked != true) {
    pullStats(mutators.secondaryMutators[secondaryWeaponMutator.value].stats);
    if (mutators.secondaryMutators[readSelection(`rangedMutator2`).value].custom != null) {
      window[mutators.secondaryMutators[readSelection(`rangedMutator2`).value].custom]();
    }
  }
//Mods
if (readSelection(`USEtoggledpMod`).checked != true) {
  pullStats(mods.primaryMods[primaryWeaponMod.value].stats);
  if (mods.primaryMods[readSelection(`rangedMod1`).value].custom != null) {
    window[mods.primaryMods[readSelection(`rangedMod1`).value].custom]();
  }
}
// if (readSelection(`USEtoggledmMod`).checked != true) { //----------------NOT YET BUT WE WILL USE THIS LATER--------------
//   pullStats(mods.meleeMods[meleeWeaponMod.value].stats);
//   if (mods.meleeMods[readSelection(`meleeMod`).value].custom != null) {
//     window[mods.meleeMods[readSelection(`meleeMod`).value].custom]();
//   }
// }
if (readSelection(`USEtoggledsMod`).checked != true) {
  pullStats(mods.secondaryMods[secondaryWeaponMod.value].stats);
  if (mods.secondaryMods[readSelection(`rangedMod2`).value].custom != null) {
    window[mods.secondaryMods[readSelection(`rangedMod2`).value].custom]();
  }
}
}
//Used in updateFormulas() to fill trait property values on the master table
function pullTraits () {
  //Yoink all active trait values
  for (let i=1;i<=activeTraits;i++) {
    let traitLevel = greatTraitRecords[`trait${i}`].level;
    let traitPath = traits[greatTraitRecords[`trait${i}`].name];
    if (readSelection(`USEtoggledTrait${i}`).checked != true) {
      if (traitPath.property != "REdamage" && traitPath.property != "DMGKept") {
        greatTableKnowerOfAll[traitPath.property] += traitPath.level[traitLevel];
      }
      else if (traitPath.property==="REdamage" || traitPath.property==="DMGKept") {
        greatTableKnowerOfAll[traitPath.property].push(traitPath.level[traitLevel]);
        //put these two types into their respective multiplicative arrays
      }
      if (traits[greatTraitRecords[`trait${i}`].name].custom != null) {
        window[traits[greatTraitRecords[`trait${i}`].name].custom]();
      }
    }
  }
}
//Used in updateFormulas() to fill armor(armor/weight) values on the master table
function pullArmorStats() {
  let armorTotalWeight = 0;
  let armorTotalArmor = 0;
  if (readSelection(`USEtoggledHead`).checked != true) {
    armorTotalWeight += +readSelection("helmetWeight").innerHTML;
    armorTotalArmor += +readSelection("helmetArmor").innerHTML;
  }
  if (readSelection(`USEtoggledChest`).checked != true) {
    armorTotalWeight += +readSelection("chestWeight").innerHTML;
    armorTotalArmor += +readSelection("chestArmor").innerHTML;
  }
  if (readSelection(`USEtoggledLegs`).checked != true) {
    armorTotalWeight += +readSelection("legWeight").innerHTML;
    armorTotalArmor += +readSelection("legArmor").innerHTML;
  }
  if (readSelection(`USEtoggledHands`).checked != true) {
    armorTotalWeight += +readSelection("handWeight").innerHTML;
    armorTotalArmor += +readSelection("handArmor").innerHTML;
  }
  greatTableKnowerOfAll.Encumbrance += armorTotalWeight;
  greatTableKnowerOfAll.Armor += armorTotalArmor;
  readArmorResistance("Bleed");
  readArmorResistance("Burn");
  readArmorResistance("Shock");
  readArmorResistance("Corrosive");
  readArmorResistance("Blight");
}
//Used in pullArmorStats() to fill resistance values on the master table
function readArmorResistance(resistance) {
  if (readSelection(`USEtoggledHead`).checked != true) {
    greatTableKnowerOfAll[resistance] += +helmets[readSelection("helmetChoice").value][resistance];
  }
  if (readSelection(`USEtoggledChest`).checked != true) {
    greatTableKnowerOfAll[resistance] += +chests[readSelection("chestChoice").value][resistance];
  }
  if (readSelection(`USEtoggledLegs`).checked != true) {
    greatTableKnowerOfAll[resistance] += +legs[readSelection("legChoice").value][resistance];
  }
  if (readSelection(`USEtoggledHands`).checked != true) {
    greatTableKnowerOfAll[resistance] += +hands[readSelection("handChoice").value][resistance];
  }
}
//Used in updateFormulas() to read class specific statistics and add them to the master table
function pullClassStats() {
  // let archetype1 = readSelection("archetype1").value;
  // let archetype2 = readSelection("archetype2").value;
  let path1 = classInfo[readSelection("archetype1").value];
  let ability1 = readSelection("archetype1ability").value;
  let path2 = classInfo[readSelection("archetype2").value];
  let ability2 = readSelection("archetype2ability").value;
//Prime Perk
  if (readSelection(`USEtoggledPrimeP`).checked != true) {
    pullStats(path1.primeStats);
    if (path1.custom != null) {
      path1["custom"]();
    }
  }
//Archetype1
  if (readSelection(`USEtoggledAbility1`).checked != true) {
    pullStats(path1.abilities[ability1].stats);
    if (path1.abilities[ability1].custom != null) {
      path1.abilities[ability1]["custom"]();
    }
  }
  for (let i=1;i<=4;i++) {
    if (readSelection(`USEtoggledPassive${i}`).checked != true) {
      pullStats(path1.passives[`passive${i}`].stats);
      if (path1.passives[`passive${i}`].custom != null) {
        window[path1.passives[`passive${i}`].custom]();
      }
    }
  }
    // pullStats(path1.passives.passive1.stats);
//Trait points from primary archetype
    greatTableKnowerOfAll.Endurance = path1.Endurance;
    greatTableKnowerOfAll.Expertise = path1.Expertise;
    greatTableKnowerOfAll.Spirit = path1.Spirit;
    greatTableKnowerOfAll.Vigor = path1.Vigor;
//Archetype2
  if (readSelection(`USEtoggledAbility2`).checked != true) {
    pullStats(path2.abilities[ability2].stats);
    if (path2.abilities[ability2].custom != null) {
      path2.abilities[ability2]["custom"]();
    }
  }
  for (let i=1;i<=4;i++) {
    if (readSelection(`USEtoggledPassive${i+4}`).checked != true) {
      pullStats(path2.passives[`passive${i}`].stats);
      if (path2.passives[`passive${i}`].custom != null) {
        window[path2.passives[`passive${i}`].custom]();
      }
    }
  }
    // pullStats(path2.passives.passive1.stats);
}
//Used in updateFormulas() to read gear specific statistics and add them to the master table
function pullGearStats() {
//Amulet
  if (readSelection("USEtoggledAmulet").checked != true) {
    pullStats(amulets[readSelection("amulet").value].stats);
    if (amulets[readSelection(`amulet`).value].custom != null) {
      window[amulets[readSelection(`amulet`).value].custom]();
    }
  }
//Rings
  for (let i=1;i<=4;i++) {
    if (readSelection(`USEtoggledRing${i}`).checked != true) {
    pullStats(rings[readSelection(`ring${i}`).value].stats);
    if (rings[readSelection(`ring${i}`).value].custom != null) {
      window[rings[readSelection(`ring${i}`).value].custom]();
    }
    }
  }
//Relic
if (readSelection("USEtoggledRelic").checked != true) {
  pullStats(relics[readSelection("relic").value].stats);
  //Custom gets called later, not here for relics
}
//Fragments
  for (let i=1;i<=3;i++) {
    if (readSelection(`USEtoggledrFrag${i}`).checked != true) {
    pullStats(fragments[readSelection(`fragment${i}`).value].stats);
    if (fragments[readSelection(`fragment${i}`).value].custom != null) {
      window[fragments[readSelection(`fragment${i}`).value].custom]();
    }
    }
  }
}
//Shorthand for looping through an elements "stat" object and adding it to the corresponding master attribute
function pullStats(path) {
    for (let elements in path) {
      if (elements != "RelicHPtype" && elements != "REdamage" && elements != "DMGKept") {
        greatTableKnowerOfAll[elements] += path[elements];
      }
      else if (elements==="RelicHPtype"){
        greatTableKnowerOfAll[elements] = path[elements];
      }
      else if (elements==="REdamage" || elements==="DMGKept") {
        greatTableKnowerOfAll[elements].push(path[elements]);
        //This slaps them into an array for each as they are ALL multiplicative to each other.
      }
    }
}