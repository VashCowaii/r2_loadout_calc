//Used to populate the page with given item selections
function pagePopulation() {
    //If we run into undefined issues again, just swap back to this
    // document.addEventListener("DOMContentLoaded", function() {})
    createHTML.populateGear("archs1List",classInfo);
    createHTML.populateGear("archs2List",classInfo);
    if (document.location.href.includes("Calculator")) {
    createHTML.populateGear("helmetsList",helmets);
    createHTML.populateGear("chestsList",chests);
    createHTML.populateGear("legsList",legs);
    createHTML.populateGear("handsList",hands);
    createHTML.populateGear("amuletsList",amulets);
    createHTML.populateGear("rings1List",rings);
    createHTML.populateGear("rings2List",rings);
    createHTML.populateGear("rings3List",rings);
    createHTML.populateGear("rings4List",rings);
    createHTML.populateGear("relicsList",relics);
    createHTML.populateGear("fragment1List",fragments);
    createHTML.populateGear("fragment2List",fragments);
    createHTML.populateGear("fragment3List",fragments);
    //updateTraitCollection(); //gets called in importURLparams
    createHTML.populateGear("primariesList",primary);
    createHTML.populateGear("meleesList",melee);
    createHTML.populateGear("secondariesList",secondary);
    createHTML.populateGear("rangedMutator1List",rangedMutators);
    createHTML.populateGear("meleeMutatorsList",meleeMutators);
    createHTML.populateGear("rangedMutator2List",rangedMutators);
    createHTML.populateGear("rangedMod1List",rangedMods);
    // populateGear("meleeMod",meleeMods); //not yet, if ever really? It's not like melee mods are even selected.
    createHTML.populateGear("rangedMod2List",rangedMods);
    // createHTML.populateGear("concoction1List",concoctions);
    // createHTML.populateGear("concoction2List",concoctions);
    // createHTML.populateGear("concoction3List",concoctions);
    // createHTML.populateGear("concoction4List",concoctions);
    // createHTML.populateGear("concoction5List",concoctions);
    // createHTML.populateGear("concoction6List",concoctions);
    // createHTML.populateGear("concoction7List",concoctions);
    // createHTML.populateGear("quickUse1List",quickUses);
    // createHTML.populateGear("quickUse2List",quickUses);
    // createHTML.populateGear("quickUse3List",quickUses);
    // createHTML.populateGear("quickUse4List",quickUses); 
    }
    manipulateURL.importURLparameters();
  
  
    if (document.location.href.includes("Optimizer")) {
    //Occlusions filter selections
    createHTML.populateGear("amuletOcclusionsList",amulets);
    createHTML.populateGear("ringOcclusionsList",rings);
    createHTML.populateGear("relicOcclusionsList",relics);
    createHTML.populateGear("fragmentOcclusionsList",fragments);
    createHTML.populateGear("concoctionOcclusionsList",concoctions);
    createHTML.populateGear("consumableOcclusionsList",quickUses);
    createHTML.populateGear("primaryOcclusionsList",primary);
    createHTML.populateGear("primaryMutatorOcclusionsList",rangedMutators);
    createHTML.populateGear("primaryModOcclusionsList",rangedMods);
    createHTML.populateGear("meleeOcclusionsList",melee);
    createHTML.populateGear("meleeMutatorOcclusionsList",meleeMutators);
    createHTML.populateGear("secondaryOcclusionsList",secondary);

    createHTML.populateGear("helmetsOcclusionsList",helmets);
    createHTML.populateGear("chestsOcclusionsList",chests);
    createHTML.populateGear("legsOcclusionsList",legs);
    createHTML.populateGear("handsOcclusionsList",hands);
    // createHTML.populateGear("secondaryMutatorOcclusionsList",rangedMutators); //we disabled occlusions so they were bundled into ranged. Locks still possible on each.
    // createHTML.populateGear("secondaryModOcclusionsList",rangedMods);
  
    //Lock filter selections
    createHTML.populateGear("amuletList",amulets);
    createHTML.populateGear("ringList",rings);
    createHTML.populateGear("relicList",relics);
    createHTML.populateGear("fragmentList",fragments);
    createHTML.populateGear("concoctionList",concoctions);
    createHTML.populateGear("consumableList",quickUses);
    createHTML.populateGear("primaryList",primary);
    createHTML.populateGear("primaryMutatorList",rangedMutators);
    createHTML.populateGear("primaryModList",rangedMods);
    createHTML.populateGear("meleeList",melee);
    createHTML.populateGear("meleeMutatorList",meleeMutators);
    createHTML.populateGear("secondaryList",secondary);
    createHTML.populateGear("secondaryMutatorList",rangedMutators);
    createHTML.populateGear("secondaryModList",rangedMods);

    createHTML.populateGear("helmetsLocksList",helmets);
    createHTML.populateGear("chestsLocksList",chests);
    createHTML.populateGear("legsLocksList",legs);
    createHTML.populateGear("handsLocksList",hands);

    if (stopQueryFractures) {
      // readSelection("calcLastUpdated").innerHTML != ""
      // readSelection("queryBox").style.display = "none";
      // readSelection("dmgVisibilityToggle").style.display = "none";
      // readSelection("damageStatsContainer").style.display = "none";
    }
        //Tag filter selections
        createHTML.populateGear("tagPresets",cycles.presets);
        createHTML.populateGear("filterTagList",referenceTable);
        createHTML.populateGear("statInputList",playerDerivedStatistics);
    }
}
  let stopQueryFractures = true;

  //Must be last, fill the page
  pagePopulation();
  if (document.location.href.includes("Optimizer")) {filters.updateDodgeClass();}
  //buildTime.js script call is injected into the HTML of the deployment, never the actual files here.



 //Moved the parsing to js.js. Open gitbash and type node within the file.