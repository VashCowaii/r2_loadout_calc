//Used for creating consumable related UI elements, and updating the conumable related global record arrays

let manipulateConsumable = {
    updateConsumableCollection(consumableTable) {
      let megaBox = readSelection(`${consumableTable}sMegaBox`);
      let displayRow = readSelection(`${consumableTable === "concoction" ? "comboConcoctionsBox" : "comboQuickUsesBox"}`);
      megaBox.innerHTML = "";
      displayRow.innerHTML = "";
      let recordReference = consumableTable === "concoction" ? globalRecords.greatConcoctionRecords : globalRecords.greatConsumableRecords;
  
  
      if (consumableTable === "concoction") {
        let concLimit = globalRecords.totalConcLimit;
        for (let i=1;i<=concLimit;i++) {
          //create the box, and then populate it with cons options
          megaBox.innerHTML += createHTML.consumableBox(consumableTable,i);
          displayRow.innerHTML += createHTML.consumableIconBox(consumableTable,i);
          createHTML.populateGear(`${consumableTable}${i}List`,concoctions);
          userTrigger.consumableToggleStates.concoctionsToggleArray.push(false);
        }
        for (let i=0;i<recordReference.length;i++) {
          if ((i+1)<=globalRecords.totalConcLimit) {
            let recordPath = recordReference[i];
            //If the current slot is blank, and is not the last slot, delete the slot
            if (!recordPath){
              manipulateConsumable.modifyConsumableRecord(recordReference,"delete",i+1);
              userTrigger.consumableToggleStates.concoctionsToggleArray.splice(i,1);
            }
            readSelection(`concoction${i+1}`).value = recordPath;
            readSelection(`${consumableTable}${i+1}Icon`).src=concoctions[recordPath].image;
            readSelection(`${consumableTable}${i+1}IconMAIN`).src=concoctions[recordPath].image;
            readSelection(`${consumableTable}${i+1}Desc`).innerHTML = userTrigger.updateSubstatColor(concoctions[recordPath].desc);
            readSelection(`USEtoggledConc${i+1}`).checked = userTrigger.consumableToggleStates.concoctionsToggleArray[i] || false;
            // id="USEtoggled${consumableTable==="concoction" ? "Conc" : "Quick"}${elemID}"
          }
          else {
            manipulateConsumable.modifyConsumableRecord(recordReference,"delete",i+1);
            userTrigger.consumableToggleStates.concoctionsToggleArray.splice(i,1);
          }
        }
        for (let i=0;i<userTrigger.consumableToggleStates.concoctionsToggleArray.length;i++) {
          if (i>=recordReference.length) {
            userTrigger.consumableToggleStates.concoctionsToggleArray.splice(i,1);
          }
        }
      }
      else {
        if (recordReference.length===0) { //If we just loaded the page, make the first cons box.
          manipulateConsumable.modifyConsumableRecord(recordReference,"create");
          megaBox.innerHTML += createHTML.consumableBox(consumableTable,1);
          displayRow.innerHTML += createHTML.consumableIconBox(consumableTable,1);
          createHTML.populateGear(`${consumableTable}${1}List`,quickUses);
        }
        else {
          for (let i=0;i<recordReference.length;i++) {
            let recordPath = recordReference[i];
            //If the current slot is blank, and is not the last slot, delete the slot
            if (i != recordReference.length-1 && !recordPath){
              manipulateConsumable.modifyConsumableRecord(recordReference,"delete",i+1);
              userTrigger.consumableToggleStates.consumablesToggleArray.splice(i,1);
            }
            //If the last cons is not blank, make a new blank cons slot.
            else if (i === recordReference.length-1 && recordPath) {
              manipulateConsumable.modifyConsumableRecord(recordReference,"create");
              userTrigger.consumableToggleStates.consumablesToggleArray.push(false);
            }
  
            megaBox.innerHTML += createHTML.consumableBox(consumableTable,i+1);
            displayRow.innerHTML += createHTML.consumableIconBox(consumableTable,i+1);
            createHTML.populateGear(`${consumableTable}${i+1}List`,quickUses);
          }
  
          for (let i=0;i<recordReference.length;i++) {
            let recordPath = recordReference[i];
            readSelection(`${consumableTable}${i+1}`).value = recordPath;
            readSelection(`${consumableTable}${i+1}Icon`).src = quickUses[recordPath].image;
            readSelection(`${consumableTable}${i+1}IconMAIN`).src = quickUses[recordPath].image;
            readSelection(`${consumableTable}${i+1}Desc`).innerHTML = userTrigger.updateSubstatColor(quickUses[recordPath].desc);
            readSelection(`USEtoggledQuick${i+1}`).checked = userTrigger.consumableToggleStates.consumablesToggleArray[i] || false;
          }
  
          for (let i=0;i<userTrigger.consumableToggleStates.consumablesToggleArray.length;i++) {
            if (i>=recordReference.length) {
              userTrigger.consumableToggleStates.consumablesToggleArray.splice(i,1);
            }
          }
        }
  
      }
    },
    modifyConsumableRecord(recordReference,action,ID,name,) {
      //ID only used for deletion, can be put as anything during creation if custom values are passed
      if (action==="create") {
        recordReference.push(name ?? "")//this might be wrong and needs a globalRecords param passed instead of a reference
      }
      else if (action==="delete") {
        recordReference.splice(ID-1,1);
      }
      else {
        alert("modifyConsumableRecord(): The action type was not specified.");
      }
    },
  }