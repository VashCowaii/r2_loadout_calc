//Used to populate the page with given item selections
function pagePopulation() {
  let populate = createHTML.populateGear;
  

  populate("archs1List",classInfo);
  populate("archs2List",classInfo);
  if (document.location.href.includes("Calculator")) {

    let populatePrism = createHTML.Planner.populateGearPlannerVariant;
    plannerOutcomebox = readSelection("plannerDesiredRows");
    plannerOutcomebox.innerHTML = ``;
    for (let i=1;i<=9;i++) {
        if (i===1) {plannerOutcomebox.innerHTML += `<div class="prismTitleTypeHeader">FRAGMENTS</div>`}
        else if (i===4) {plannerOutcomebox.innerHTML += `<div class="prismTitleTypeHeader">PRISM</div>`}
        const imageOverride = i!=9 ? null : "/brotherLibrary/plannerImages/iconImages/LegendaryStar.png";
        plannerOutcomebox.innerHTML += createHTML.Planner.plannerRowBox(i,imageOverride);
    }
    for (let i=4;i<=8;i++) {
      populatePrism(`PrismRow${i}List`,prismRowOptions) 
    }
    populatePrism("PrismRow9List",legendaryPerks);

    let calcPops = [
      {"Name": "helmetsList", "DataSet": helmets},
      {"Name": "chestsList", "DataSet": chests},
      {"Name": "legsList", "DataSet": legs},
      {"Name": "handsList", "DataSet": hands},
      {"Name": "amuletsList", "DataSet": amulets},
      {"Name": "rings1List", "DataSet": rings},
      {"Name": "rings2List", "DataSet": rings},
      {"Name": "rings3List", "DataSet": rings},
      {"Name": "rings4List", "DataSet": rings},
      {"Name": "relicsList", "DataSet": relics},
      {"Name": "PrismRow1List", "DataSet": fragments},
      {"Name": "PrismRow2List", "DataSet": fragments},
      {"Name": "PrismRow3List", "DataSet": fragments},
      {"Name": "primariesList", "DataSet": primaries},
      {"Name": "meleesList", "DataSet": melees},
      {"Name": "secondariesList", "DataSet": secondaries},
      {"Name": "rangedMutator1List", "DataSet": rangedMutators},
      {"Name": "rangedMutator2List", "DataSet": rangedMutators},
      {"Name": "meleeMutatorsList", "DataSet": meleeMutators},
      {"Name": "rangedMod1List", "DataSet": rangedMods},
      {"Name": "rangedMod2List", "DataSet": rangedMods},
    ];

    for (let entry of calcPops) {
      populate(entry.Name,entry.DataSet);
    }

    manipulateURL.importURLparameters();
    updateFormulas();
  }
  
  if (document.location.href.includes("Optimizer")) {
    let populatePrism = createHTML.Planner.populateGearPlannerVariant;
    plannerOutcomebox = readSelection("plannerDesiredRows");
    plannerOutcomebox.innerHTML = ``;
    for (let i=4;i<=9;i++) {
        if (i===1) {plannerOutcomebox.innerHTML += `<div class="prismTitleTypeHeader">FRAGMENTS</div>`}
        else if (i===4) {plannerOutcomebox.innerHTML += `<div class="prismTitleTypeHeader">PRISM</div>`}
        const imageOverride = i!=9 ? null : "/brotherLibrary/plannerImages/iconImages/LegendaryStar.png";
        plannerOutcomebox.innerHTML += createHTML.Planner.plannerRowBox(i,imageOverride);
    }
    for (let i=4;i<=8;i++) {
      populatePrism(`PrismRow${i}List`,prismRowOptions) 
    }
    populatePrism("PrismRow9List",legendaryPerks);

    let optimizerArmorPops = [
      {"Name": "helmets", "DataSet": helmets},{"Name": "chests", "DataSet": chests},{"Name": "legs", "DataSet": legs},{"Name": "hands", "DataSet": hands},
    ];
    for (let entry of optimizerArmorPops) {populate(entry.Name + "OcclusionsList",entry.DataSet);populate(entry.Name + "LocksList",entry.DataSet);}

    let optimizerPops = [
      //FILTERS: 0 is both, 1 is occlusions only, 2 is locks only
      {"Name": "amulet", "DataSet": amulets, "Filters": 0},
      {"Name": "ring", "DataSet": rings, "Filters": 0},
      {"Name": "relic", "DataSet": relics, "Filters": 0},
      {"Name": "fragment", "DataSet": fragments, "Filters": 0},
      {"Name": "primary", "DataSet": primaries, "Filters": 0},
      {"Name": "melee", "DataSet": melees, "Filters": 0},
      {"Name": "secondary", "DataSet": secondaries, "Filters": 0},
      {"Name": "primaryMutator", "DataSet": rangedMutators, "Filters": 0},
      {"Name": "secondaryMutator", "DataSet": rangedMutators, "Filters": 2},//Can't be filtered by occlusion since they're considered ranged mutators under the Primary Weapon section
      {"Name": "meleeMutator", "DataSet": meleeMutators, "Filters": 0},
      {"Name": "primaryMod", "DataSet": rangedMods, "Filters": 0},
      {"Name": "secondaryMod", "DataSet": rangedMods, "Filters": 2},//Can't be filtered by occlusion since they're considered ranged mods under the Primary Weapon section
      {"Name": "concoction", "DataSet": concoctions, "Filters": 0},
      {"Name": "consumable", "DataSet": quickUses, "Filters": 1},//quick-use items are only filtered by occlusion, since locks don't make sense when they are in all their entirety considered one single combination now for queries
    ];

    for (let entry of optimizerPops) {
      if (entry.Filters === 0 || entry.Filters === 1) {populate(entry.Name + "OcclusionsList",entry.DataSet);}
      if (entry.Filters === 0 || entry.Filters === 2) {populate(entry.Name + "List",entry.DataSet);}
    }

    //Tag filter selections
    populate("tagPresets",cycles.presets);
    populate("filterTagList",referenceTable);
    populate("statInputList",playerDerivedStatistics);
    manipulateTrait.updateTraitCollection();//Still gotta pop the trait side of things for the selections, but this line doesn't need to be updateFormulas();
  }
}
  let stopQueryFractures = true;

  //Must be last, fill the page
  pagePopulation();
  if (document.location.href.includes("Optimizer")) {filters.updateDodgeClass();}//Update user selection elements if optimizer
  else {basicsUpdates.updateFocus();}//otherwise focus the amulet display tab to start us off when opening a page on the calc
  //buildTime.js script call is injected into the HTML of the deployment, never the actual files here.