//used for archetype selection swaps in updateArchetype()
let archetype1Old ="";
let archetype2Old ="";
let ring1Old,ring2Old,ring3Old,ring4Old;
let fragment1Old,fragment2Old,fragment3Old;
let concoction1Old,concoction2Old,concoction3Old,concoction4Old,concoction5Old,concoction6Old,concoction7Old;
let rangedMutator1Old,rangedMutator2Old;
let rangedMod1Old,rangedMod2Old;
let scaledRelicBaseRecords;



//Generalized select <option> population. *should* be able to be used for any gear selection,
//provided there is a distinct json format to pull from

function populateGear(elem_ID,collection) {
   const select = readSelection(elem_ID);

  for (const gear in collection) {
      if (collection.hasOwnProperty(gear)) {
          const option = document.createElement("option");
          option.text = gear;
          select.appendChild(option);
      }
  }
}
//Everything I want to load by default, without event triggers
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

  populateGear("trait1",traits);
  populateGear("trait2",traits);
  populateGear("trait3",traits);
  populateGear("trait4",traits);
  populateGear("trait5",traits);
  populateGear("trait6",traits);
  populateGear("trait7",traits);
  populateGear("trait8",traits);
  populateGear("trait9",traits);
  populateGear("trait10",traits);
  populateGear("trait11",traits);
  populateGear("trait12",traits);
  populateGear("trait13",traits);
  populateGear("trait14",traits);
  populateGear("trait15",traits);
  populateGear("trait16",traits);
  populateGear("trait17",traits);
  populateGear("trait18",traits);
  populateGear("trait19",traits);
  populateGear("trait20",traits);

  populateGear("primary",primary);
  populateGear("melee",melee);
  populateGear("secondary",secondary);
  populateGear("rangedMutator1",rangedMutators);
  populateGear("meleeMutator",meleeMutators);
  populateGear("rangedMutator2",rangedMutators);
  populateGear("rangedMod1",rangedMods);
  // populateGear("meleeMod",meleeMods); //not yet
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
})

function updateConsumable(type,ID) {
  let selectedConsumable = readSelection(`${type}${ID}`);
  let concLimit = +readSelection("concValueDisplay").innerHTML;
  readSelection(`${type}${ID}Icon`).src=consumables[`${type}s`][selectedConsumable.value].image;
  readSelection(`${type}${ID}Desc`).innerHTML=consumables[`${type}s`][selectedConsumable.value].desc;
  //Pass the selected value into duplicate checks, under the same function to repeat if swapped,
  //-using "several" handling to loop through more than 2 options, stopping the loop at the conc limit
  checkDuplicateSelection(type,ID,`updateConsumable`,`several`,concLimit);
  updateFormulas();
}

//Triggers whenever a new weapon is selected
function updateWeapon(type) {
  let selectedWeapon = readSelection(type);
  //Update accessory image, description, and then refresh formulas.
  readSelection(`${type}Image`).src=weapons[type][selectedWeapon.value].image;
  // readSelection(`${type}${modifier}Desc`).innerHTML=gear[jsonID][selectedValue].desc;
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
   readSelection(`${armorPiece}Image`).src=selectedArmor.IMAGE;
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
  //Collection, collection ID number, function to reuse on swap, "duo" or "several" handling, limits several if needed
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
//Shorthand for selecting an element by ID. Follow up with .value or .innerHTML
function readSelection(elemID) {
    let selectedValue = document.getElementById(elemID);
    return selectedValue;
}

function gameMasters() {
  greatTableKnowerOfAll.DMGKept.push(1/readSelection("teamCount").value);
  greatTableKnowerOfAll.GlobalHealingEff = greatTableKnowerOfAll.GlobalHealingEff * 0.5;
}
function brewMasters() {
  for (i=1;i<=7;i++) {
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

  for (i=1;i<=20;i++) {
    readSelection(`toggledTrait${i}`).innerHTML = `${readSelection(`trait${i}`).value} ${readSelection(`trait${i}Level`).innerHTML}`
  }
}
//The big cheese, the great clusterfuck, where all the formulas refresh.
function updateFormulas() { 
  //Fill the Toggles table
  pullToggles();
  //Reset the table
  for(elements in greatTableKnowerOfAll) {
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
  let concLimit = 1 + greatTableKnowerOfAll.ConcLimit;
  updateDisplay("concValueDisplay",concLimit,0);
  pullConsumables(concLimit);
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
updateDisplay("advancedRelicTotal%",(advancedRelicPerc + advancedRelicFlat/totalHealth),2,"%");

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
  for (i=1;i<=20;i++) {
    let traitLevel = +readSelection(`trait${i}Level`).innerHTML;
    let traitPath = traits[readSelection(`trait${i}`).value];
    if (readSelection(`USEtoggledTrait${i}`).checked != true) {
      if (traitPath.property != "REdamage" && traitPath.property != "DMGKept") {
        greatTableKnowerOfAll[traitPath.property] += traitPath.level[traitLevel];
      }
      else if (traitPath.property==="REdamage" || traitPath.property==="DMGKept") {
        greatTableKnowerOfAll[traitPath.property].push(traitPath.level[traitLevel]);
        //put these two types into their respective multiplicative arrays
      }
      if (traits[readSelection(`trait${i}`).value].custom != null) {
        window[traits[readSelection(`trait${i}`).value].custom]();
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
  for (i=1;i<=4;i++) {
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
  for (i=1;i<=4;i++) {
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
  for (i=1;i<=4;i++) {
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
  for (i=1;i<=3;i++) {
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
    for (elements in path) {
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
//THE GREAT TRAIT FUCKERY
function updateTrait(elemID,adjustment) {
  let traitName = readSelection(elemID).value;
  let traitLevel = readSelection(`${elemID}Level`);
  let traitSpentBar = readSelection(`${elemID}Spent`).style;
  let traitIntrinsicBar = readSelection(`${elemID}Intrinsic`).style;
  let bluePoints = 0;
  let defaultPoints = 0;
//Checks if trait selected is blank. If it is, skip pretty much everything.
if (traitName!=""){
  let change = false;
  if (adjustment!=null) {change=true}
  let totalPoints = 0;
  //Check if it's an intrinsic trait. If it is, expand orange bar to fit level specified
  //Also declare how many user points are displayed on top of the intrinsics
  if (greatTableKnowerOfAll[traitName] > 0) {
    defaultPoints = greatTableKnowerOfAll[traitName];
    // bluePoints = +traitLevel.innerHTML - defaultPoints;
    // if (bluePoints<0) {bluePoints=0}

    bluePoints = +traitLevel.innerHTML;
    //If swapping from intrinsic to another intrinsic trait, adjust value based on prior
    //spent points AS WELL AS prior intrinsic points, like in game.
    if (traitName!=traitRecords[elemID].name && bluePoints!=traitRecords[elemID].spent) {
      let intrinsicAdjustment = defaultPoints - traitRecords[elemID].default;
      if (intrinsicAdjustment<0){intrinsicAdjustment=0}
      bluePoints += -(bluePoints - traitRecords[elemID].spent) - intrinsicAdjustment;
    }
    else {
      bluePoints += -defaultPoints;
      if (bluePoints<0) {bluePoints=0}
    }
  }
  else {
    bluePoints = +traitLevel.innerHTML;
    //If we are swapping from an intrinsic to a NON-intrinsic trait, remove points based
    //on the amount given by the trait prior, like in game.
    if (traitName!=traitRecords[elemID].name && bluePoints!=traitRecords[elemID].spent) {
      bluePoints += -(bluePoints - traitRecords[elemID].spent);
    }
  }
  //If a button was used, adjust values accordingly
  if (change===true) {
    if (adjustment==="+"){
      if ((bluePoints+defaultPoints)!=10) {bluePoints += 1};
    } else if (adjustment==="-") {
      if (bluePoints!=0) {bluePoints += -1};
    }
    totalPoints = bluePoints + defaultPoints;
    if (totalPoints<defaultPoints) {totalPoints = defaultPoints}
    else if (totalPoints>=10) {totalPoints = 10}
    traitLevel.innerHTML = totalPoints;
  }
  //If no button was used, update
  else {
    if (bluePoints<0) {bluePoints=0}
    traitLevel.innerHTML = bluePoints + defaultPoints;
  }
  traitIntrinsicBar.width = `${defaultPoints * 10}%`
  traitSpentBar.width = `${+traitLevel.innerHTML * 10}%`
}
else {
  traitLevel.innerHTML = "0";
  traitSpentBar.width = "0%";
  traitIntrinsicBar.width = "0%";
}
traitRecords[elemID].name = traitName;
traitRecords[elemID].default = defaultPoints;
traitRecords[elemID].spent = bluePoints;
//Finally, update formulas based on the newly displayed values for this trait
updateFormulas();
}

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
const traitRecords = {
  "trait1": {
    "name": "",
    "default": 0,
    "spent": 0
  },
  "trait2": {
    "name": "",
    "default": 0,
    "spent": 0
  },
  "trait3": {
    "name": "",
    "default": 0,
    "spent": 0
  },
  "trait4": {
    "name": "",
    "default": 0,
    "spent": 0
  },
  "trait5": {
    "name": "",
    "default": 0,
    "spent": 0
  },
  "trait6": {
    "name": "",
    "default": 0,
    "spent": 0
  },
  "trait7": {
    "name": "",
    "default": 0,
    "spent": 0
  },
  "trait8": {
    "name": "",
    "default": 0,
    "spent": 0
  },
  "trait9": {
    "name": "",
    "default": 0,
    "spent": 0
  },
  "trait10": {
    "name": "",
    "default": 0,
    "spent": 0
  },
  "trait11": {
    "name": "",
    "default": 0,
    "spent": 0
  },
  "trait12": {
    "name": "",
    "default": 0,
    "spent": 0
  },
  "trait13": {
    "name": "",
    "default": 0,
    "spent": 0
  },
  "trait14": {
    "name": "",
    "default": 0,
    "spent": 0
  },
  "trait15": {
    "name": "",
    "default": 0,
    "spent": 0
  },
  "trait16": {
    "name": "",
    "default": 0,
    "spent": 0
  },
  "trait17": {
    "name": "",
    "default": 0,
    "spent": 0
  },
  "trait18": {
    "name": "",
    "default": 0,
    "spent": 0
  },
  "trait19": {
    "name": "",
    "default": 0,
    "spent": 0
  },
  "trait20": {
    "name": "",
    "default": 0,
    "spent": 0
  },
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