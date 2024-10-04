let rowsLogic = {
    modifyRowRecord(action,ID,name,level,defaultPoints,spentPoints) {

        // {"name": "","level": 0}

        //ID only used for deletion, can be put as anything during creation if custom values are passed
        if (action==="create") {
            globalRecords.greatRowRecords.push({
            "name": name ?? "",
            "level": level ?? 0,
            "default": defaultPoints ?? 0,
            "spent": spentPoints ?? 0})
        }
        else if (action==="delete") {
            globalRecords.greatRowRecords.splice(ID-1,1);
        }
        else {
            alert("modifyTraitRecord(): The action type was not specified.");
        }
      },
}

let plannerTrigger = {
    updateRow(rowID) {
        const rowString = `PrismRow${rowID}`;
        const recordIndex = rowID-1;
        let domValue = readSelection(rowString);
        const comboKeys = Object.keys(ComboStats);
        const isOptimizer = document.location.href.includes("Optimizer");


        if (rowID<=3 && !isOptimizer) {//are we updating fragments, then update the first 3 rows properly. We skip the frags here on the optimizer, since frags can be queried
            userTrigger.updateFragment('PrismRow',rowID);
            for (let i=1;i<=3;i++) {globalRecords.greatRowRecords[i-1].name = readSelection(`PrismRow${i}`).value;}
        }
        else {//otherwise check to see if the value already exists in the row records after frags
            for (let i=4;i<=8;i++) {
                //if we see a duplicate value, clear the current value and move on
                if (domValue.value === globalRecords.greatRowRecords[i-1].name) {domValue.value = "";break;}
                //else check if your currently placed combo statistic has matching substats with another combo in play, and clear the current if so
                else if (ComboStats[domValue.value] && ComboStats[globalRecords.greatRowRecords[i-1].name]) {
                    const currentCombo = ComboStats[domValue.value].requirements;
                    const currentRecord = ComboStats[globalRecords.greatRowRecords[i-1].name].requirements;
                    if (currentCombo[0] === currentRecord[0]
                        || currentCombo[0] === currentRecord[1]
                        || currentCombo[1] === currentRecord[0]
                        || currentCombo[1] === currentRecord[1]
                    )
                    {domValue.value = "";}
                }
                else {
                    //otherwise check to see if we can make a combo with existing row stats
                    for (let entry of comboKeys) {
                        let entryToFind = null; 
                        //note which entry we are missing and need to find to complete a combo
                        if (!ComboStats[domValue.value]) {
                            if (domValue.value === ComboStats[entry].requirements[0]) {entryToFind = ComboStats[entry].requirements[1];}
                            else if (domValue.value === ComboStats[entry].requirements[1]) {entryToFind = ComboStats[entry].requirements[0];}

                            if (entryToFind) {//if we found a match, look for the second requirement
                                for (let i=4;i<=8;i++) {
                                    if ((i-1) === recordIndex) {continue;}//if we are on our own record, skip it
    
                                    if (entryToFind === globalRecords.greatRowRecords[i-1].name) {
                                        globalRecords.greatRowRecords[i-1].name = "";
                                        globalRecords.greatRowRecords[i-1].isCombo = false;
                                        globalRecords.greatRowRecords[i-1].comboArray = ["",""];
    
                                        domValue.value = ComboStats[entry].name;
                                    }
                                }
                            }
                            //otherwise, check if your current record is a match for an existing combo substat to avoid dupe values
                            else {
                                for (let i=4;i<=8;i++) {
                                    if (globalRecords.greatRowRecords[i-1].comboArray[0] === domValue.value || globalRecords.greatRowRecords[i-1].comboArray[1] === domValue.value) {domValue.value = "";}
                                }
                            }
                        }
                    }
                }
            }

            
        }

        
        const recordReference = globalRecords.greatRowRecords[recordIndex];
        recordReference.name = domValue.value;
        recordReference.isCombo = ComboStats[recordReference.name] ? true : false;
        recordReference.comboArray = recordReference.isCombo ? [...ComboStats[recordReference.name].requirements] : ["",""];

        plannerTrigger.updateRowBySelections();
        if (rowID === 9) {userTrigger.updateTrait(null,null,false);}
    },
    updateRowBySelections() {
        const recordReference = globalRecords.greatRowRecords;
        const isOptimizer = document.location.href.includes("Optimizer");

        //count how many combo stats there are, bc we can only allow 4 total
        let currentComboStats = 0;
        for (let entry of recordReference) {if (entry.isCombo) {currentComboStats+=1;}}

        //set the desired outcome box to blank, so we can fill it based on globalRecords
        let visibleRows = readSelection("plannerDesiredRows");
        visibleRows.innerHTML = "";

        const starterIndex = !isOptimizer ? 1 : 4;

        //create each of the 6 selectors
        for (let i=starterIndex;i<=9;i++) {
            if (i===1) {visibleRows.innerHTML += `<div class="prismTitleTypeHeader">FRAGMENTS</div>`}
            else if (i===4) {visibleRows.innerHTML += `<div class="prismTitleTypeHeader">PRISM</div>`}
            const imageOverride = i!=9 ? null : "/brotherLibrary/plannerImages/iconImages/LegendaryStar.png";
            visibleRows.innerHTML += createHTML.Planner.plannerRowBox(i,imageOverride);
        }

        //If the max combo stats is reached, and the existing stat isn't a combo stat already, then only populate that slot with fragment selections instead of both.
        let populate = createHTML.Planner.populateGearPlannerVariant;
        if (!isOptimizer) {
            populate(`PrismRow1List`,fragments);
            populate(`PrismRow2List`,fragments);
            populate(`PrismRow3List`,fragments);
        }
        for (let i=4;i<=8;i++) {
            let isFragsOnly = false;
            if (currentComboStats>=4 && !recordReference[i-1].isCombo) {isFragsOnly=true;}
            
            const injectedOptions = isFragsOnly ? fragments : prismRowOptions;
            console.log(isFragsOnly,currentComboStats)
            populate(`PrismRow${i}List`,injectedOptions) 
        }
        populate(`PrismRow9List`,legendaryPerks)

        //then actually fill the display info
        for (let i=starterIndex;i<=9;i++) {
            const rowString = `PrismRow${i}`;
            const rowName = recordReference[i-1].name;
            readSelection(rowString).value = rowName;

            const optionReference = prismRowOptions[rowName];
            if (i!=9) {
                const imagePrefix = "/brotherLibrary/plannerImages/iconImages/";
                const imageSuffix = optionReference.color != "Combo" ? `${optionReference.color}.png` : optionReference.imageSuffix;
                const imageString = imagePrefix + imageSuffix;
                readSelection(`${rowString}Icon`).src = imageString;

                if (recordReference[i-1].isCombo) {
                    readSelection(`${rowString}Value`).innerHTML = "";//clear value slot

                    const req1 = optionReference.requirements[0];
                    const req2 = optionReference.requirements[1];

                    const req1Value = (fragments[req1].value*(fragments[req1].units === "%" ? 100 : 1)).toFixed(2) + fragments[req1].units;
                    const req2Value = (fragments[req2].value*(fragments[req2].units === "%" ? 100 : 1)).toFixed(2) + fragments[req2].units;

                    readSelection(`${rowString}Description`).innerHTML = `
                    <div class="prismRowIconPlusName">
                        <div class="comboInnerDisplayRow hasHoverTooltip">${req1}</div>
                        <span class="rowTraceLine"></span>
                        <span class="basicsSummaryValue">${req1Value}</span>
                    </div>
                    <div class="prismRowIconPlusName">
                        <div class="comboInnerDisplayRow hasHoverTooltip">${req2}</div>
                        <span class="rowTraceLine"></span>
                        <span class="basicsSummaryValue">${req2Value}</span>
                    </div>
                    `;
                }
                else {
                    readSelection(`${rowString}Description`).innerHTML = "";
                    readSelection(`${rowString}Value`).innerHTML = (fragments[rowName].value*(fragments[rowName].units === "%" ? 100 : 1)).toFixed(2) + fragments[rowName].units;
                }

            }
            else if (rowName) {
                const legendaryReference = legendaryPerks[rowName];
                readSelection(`${rowString}Icon`).src = "/brotherLibrary/plannerImages/iconImages/LegendaryStar.png";
                readSelection(`${rowString}Value`).innerHTML = "";
                readSelection(`${rowString}Description`).innerHTML = legendaryReference.desc;
            }
        }

        updateFormulas();
    }
}