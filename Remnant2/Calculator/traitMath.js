/* ---------------------------------------------------------------------------------------- */
/* ------------------- Trait manipulation, generation, and deletion ----------------------- */
/* ---------------------------------------------------------------------------------------- */

//Also note some of this is still handled under userTriggers updateTrait() function
let manipulateTrait = {
    //THE GREAT TRAIT FUCKERY.
    //Reads all active traits. Deletes unused trait entries
    //Inserts/updates traits based on archetype selections
    //Generates a new trait box if all trait boxes are filled
    //Enforces trait cap limit if import provides more than 85
    //Handles all trait math to be identical to how the game functions.
    updateTraitCollection(archetype1Old,archetype2Old) {
      //The old arch 1 and 2
      archetype1Old = archetype1Old ?? "";
      archetype2Old = archetype2Old ?? "";
      let addOrDelete = manipulateTrait.modifyTraitRecord;
      // <div class="traitsBox" id="traitsMegaBox"></div>  //this is the overall traits box html
      let megaBox = readSelection("traitsMegaBox");
      if (globalRecords.greatTraitRecords.length>=1) {
        megaBox.innerHTML = globalRecords.emptyTraitBoxHeader;
        //Used for determining if class traits should autopopulate
        let arch1path = readSelection("archetype1").value;
        let arch2path = readSelection("archetype2").value;
        let class1Active = !!arch1path;
        let class2Active = !!arch2path;
        let trait1Path = classInfo[arch1path].classTrait;
        let trait2Path = classInfo[arch2path].classTrait;
        //Check if the intrinsic traits even have a bonus
        const isTraitorActive = globalRecords.greatRowRecords[8].name === "Traitor";
        const defaultModifier = isTraitorActive ? 10 : 0;
        let useEndurance = (classInfo[arch1path].Endurance + defaultModifier) > 0;
        let useExpertise = (classInfo[arch1path].Expertise + defaultModifier) > 0;
        let useSpirit = (classInfo[arch1path].Spirit + defaultModifier) > 0;
        let useVigor = (classInfo[arch1path].Vigor + defaultModifier) > 0;
        //If so, trigger autopopulation checks for whichever ones do.
        //All the following checks are done in reverse order, as the display scheme is first in last out
        let pushTrait = manipulateTrait.bumpTrait;
        pushTrait(useVigor,"Vigor");
        pushTrait(useSpirit,"Spirit");
        pushTrait(useExpertise,"Expertise");
        pushTrait(useEndurance,"Endurance");
        pushTrait(class2Active,trait2Path);
        pushTrait(class1Active,trait1Path);
        //Sort/create/delete trait entries accordingly.
        for (let i=1;i<=globalRecords.greatTraitRecords.length;i++) {
          let recordPath = globalRecords.greatTraitRecords[i-1];
          //If it matches a class trait that was in the slot just before then.
          if (recordPath.default > 0) {
            if ((recordPath.name===classInfo[archetype1Old].classTrait && classInfo[archetype1Old].classTrait && archetype1Old != arch1path && archetype1Old != arch2path)
            || (recordPath.name===classInfo[archetype2Old].classTrait && classInfo[archetype2Old].classTrait && archetype2Old != arch2path && archetype2Old != arch1path)) {
              addOrDelete("delete",i);
            }
          }
          //If the last trait is not blank, make a new blank trait slot.
          else if (i === globalRecords.greatTraitRecords.length && recordPath.name) {
            addOrDelete("create");
          }
          //If the current slot is blank, and is not the last slot, delete the slot
          else if (i != globalRecords.greatTraitRecords.length && !recordPath.name){
            addOrDelete("delete",i);
          }
          //Correct/store trait levels, create the trait box, and then populate it with trait options
          manipulateTrait.modifyTraitLevels(i,trait1Path,trait2Path,isTraitorActive);
          megaBox.innerHTML += createHTML.traitBox(i);
          createHTML.populateGear(`trait${i}List`,traits);
        }
        //Adjust traitbox html displays based on everything done thus far
        manipulateTrait.updateTraitPoints();
        manipulateTrait.modifyTraitHTML();
      }
      else if (globalRecords.greatTraitRecords.length===0) { //If we just loaded the page, make the first trait box.
        addOrDelete("create");
        megaBox.innerHTML = globalRecords.emptyTraitBoxHeader;
        megaBox.innerHTML += createHTML.traitBox(1);
        createHTML.populateGear("trait1List",traits);
        //
      }
    // manipulateTrait.updateTraitPoints();//Moved this within the first IF so that way we could track points correctly during modifyTraitHTML
    //we don't call updateFormulas from here, that would be bad lol
    },
    //Used in updateTraitCollection to update and define the currently spent trait points, as well as the trait point limit
    updateTraitPoints() {
      let traitPoints = readSelection("traitCount");
      let traitCap = readSelection("traitCap");
      globalRecords.traitPointCount = 0;
      for (let i=1;i<=globalRecords.greatTraitRecords.length;i++) {
        globalRecords.traitPointCount += globalRecords.greatTraitRecords[i-1].spent
      }
      traitPoints.innerHTML = globalRecords.traitPointCount;
      traitCap.innerHTML = globalRecords.traitPointCap;
    },
    //Used to either create, or delete an entry within greatTraitRecords
    modifyTraitRecord(action,ID,name,level,defaultPoints,spentPoints) {
      //ID only used for deletion, can be put as anything during creation if custom values are passed
      if (action==="create") {
        globalRecords.greatTraitRecords.push({
        "name": name ?? "",
        "level": level ?? 0,
        "default": defaultPoints ?? 0,
        "spent": spentPoints ?? 0})
      }
      else if (action==="delete") {
        globalRecords.greatTraitRecords.splice(ID-1,1);
      }
      else {
        alert("modifyTraitRecord(): The action type was not specified.");
      }
    },
    //Used in updateTraitCollection to prepend/move class specific traits, if they exist, to greatTraitRecords[0]
    bumpTrait(check,trait) {
      // check is a boolean for whether that trait should even be used or not.
        if (check) {
          let foundClassTrait = false;
          let otherTrait = 0;
          //Search the records and if we find a match that isn't the first, record what trait it is for later
          for (let i=1;i<=globalRecords.greatTraitRecords.length;i++) {
            let checkName = globalRecords.greatTraitRecords[i-1].name;
            if (checkName===trait && i != 1){foundClassTrait=true;otherTrait=i-1;}
          }
          //If the first value isn't a match, and we didn't find it anywhere, then make it
          if (globalRecords.greatTraitRecords[0].name != trait && !foundClassTrait) {
            globalRecords.greatTraitRecords.unshift({"name": trait,"level": 0,"default": 0,"spent": 0});
          }
          //Else if the first value isn't a match, but we DID find it elsewhere, move it
          else if (globalRecords.greatTraitRecords[0].name != trait && foundClassTrait) {
            globalRecords.greatTraitRecords.unshift({
              "name": trait,
              "level": globalRecords.greatTraitRecords[otherTrait].level,
              "default": globalRecords.greatTraitRecords[otherTrait].default,
              "spent": globalRecords.greatTraitRecords[otherTrait].spent});
            //+2 here as modifyTraitRecord already -1, else this would just be +1
            manipulateTrait.modifyTraitRecord("delete",otherTrait+2);  
          }
        }
    },
    //Used in updateTraitCollection to modify/fill the html of traitboxes after they have been generated
    modifyTraitHTML() {
      for (let i=1;i<=globalRecords.greatTraitRecords.length;i++) {
        let recordPath = globalRecords.greatTraitRecords[i-1];
        //can't seem to save .value while actively modifying the innerHTML, else I'd call it when the boxes were generated
        readSelection(`trait${i}`).value = recordPath.name;
        //If the default value of any given trait is greater than 0, lock the selector element
        if (recordPath.default > 0) {
          readSelection(`trait${i}`).disabled = true;
        }
  
        //Then adjust circle fills and level display.
        for (let x=1;x<=10;x++) {
          let background = "black";
          let refID = `trait${i}Circle${x}`;
          if (x<=recordPath.default) {background = "#97543a"}
          else if (x<=recordPath.level) {background = "#7f7f7f"}
          else if ((globalRecords.traitPointCount === globalRecords.traitPointCap)) {
            //Has to be minus one here or it won't work.
            //It will never equal the cap unless we adjust a trait while it is maxed, but going to the cap it'll never register without the -1
            background = "none";
            readSelection(refID).style.border = "none";
            readSelection(refID).style.boxShadow = "none";
          }
          readSelection(refID).style.backgroundColor = background;
        }
  
        readSelection(`trait${i}Level`).value = recordPath.level
      }
      let recordPath = globalRecords.greatTraitRecords[globalRecords.greatTraitRecords.length-1].name;
      if (globalRecords.traitPointCount === globalRecords.traitPointCap && recordPath === "") {
        readSelection(`traitContainer${globalRecords.greatTraitRecords.length}`).style.display = "none";
      }
    },
    //Used in updateTraitCollection to calculate the adjusted trait levels, accounting for archetype-provided levels.
    modifyTraitLevels(entry,trait1Path,trait2Path,isTraitorActive) {
      let recordPath = globalRecords.greatTraitRecords[entry-1];
      let traitName = recordPath.name;
      let defaultPoints = 0;
      const defaultOverride = isTraitorActive ? 10 : 0;
      //define the intrinsic points here so we don't have to in update forms
      let path1 = classInfo[readSelection("archetype1").value];
      let intrinsics = {
        "Endurance": Math.min(10,path1.Endurance + defaultOverride),
        "Expertise": Math.min(10,path1.Expertise + defaultOverride),
        "Spirit": Math.min(10,path1.Spirit + defaultOverride),
        "Vigor": Math.min(10,path1.Vigor + defaultOverride)
      }
  
      if (intrinsics[traitName] > 0) { //If the selected trait IS intrinsic
        defaultPoints = intrinsics[traitName];
        if (recordPath.default === 0) { //If it wasn't before
          recordPath.default = defaultPoints;
        }
        else { //If it WAS
          let intrinsicAdjustment = recordPath.default - defaultPoints;
          if (intrinsicAdjustment < 0){
            intrinsicAdjustment = 0;
          }
          recordPath.level -= intrinsicAdjustment;
        }
      }
      else { //If the trait is not intrinsic
        defaultPoints = 0; //Then there is obv no default value
        if (recordPath.default != defaultPoints) {//If used to be
          recordPath.level -= recordPath.default; //Subtract old default to reduce level correctly
          recordPath.default = defaultPoints;
          if (recordPath.level < 0) {recordPath.level = 0;} //Ensure level does not go negative
        }
      }
      //Make sure the level is not lower than the default, if we do then it makes sure Spent can't be negative as well.
      if (recordPath.level < defaultPoints) {recordPath.level = defaultPoints;}
      //Assign default, spent, and level to the trait records.
      recordPath.default = defaultPoints; //Assign w/e the resulting default value was
      recordPath.spent = recordPath.level - recordPath.default;
      recordPath.level = recordPath.spent + recordPath.default;
      //If it matches a currently selected class trait
      if ((recordPath.name===trait1Path && trait1Path) || (recordPath.name===trait2Path && trait2Path)) {
        recordPath.default = 10;
        recordPath.spent = 0;
        recordPath.level = 10;
      }
    },
    //Used in to handle any instance where the traits spent exceed the cap.
    //Only used in imports at the moment as it's impossible to exceed it without modifying the URL
    pointsOverLimit() {
      //If the total spent points are over the trait, then go backwards, cutting off points
      //Currently this is only used in imports, but since it is trait related I moved it here
      if (globalRecords.traitPointCount > globalRecords.traitPointCap) {
        let traitsOverCap = globalRecords.traitPointCount - globalRecords.traitPointCap;
        let notifCount = globalRecords.traitPointCount;
        let notifDiff = traitsOverCap;
        if (traitsOverCap > 0) {
          for (let i=globalRecords.greatTraitRecords.length;i>0;i-=1) {
            let path = globalRecords.greatTraitRecords[i-1];
            let currentLevel = path.level;
            if (currentLevel >= traitsOverCap && currentLevel != 0 && traitsOverCap != 0) {
              //Example: if the current level of 10 is greater than the diff over the cap 8
              //then 10-8=2, the level is now 2 and the diff is now 0
              path.level = currentLevel - traitsOverCap;
              traitsOverCap = 0;
            }
            //But if the current level of 2 is less than the diff of 8, 8-2=6 the new diff, and current now 0
            else if (currentLevel < traitsOverCap && traitsOverCap > 0 && currentLevel != 0 && traitsOverCap != 0) {
              traitsOverCap -= currentLevel;
              path.level = 0;
            }
          }
          manipulateTrait.updateTraitCollection();//Update needed to adjust everything again based on what just happened
          alert(`Traits spent(${notifCount}) EXCEEDED the cap(${globalRecords.traitPointCap}) by ${notifDiff} points.\nPoints have been REMOVED to bring you in line with the limit.\n\nThis can happen for one of two reasons:\n- You manually modified the URL. Don't.\n- You imported this build here from somewhere that does not enforce the trait cap.\n\nSOURCE: pointsOverLimit()`)
        }
      }
    }
  }