// globalUI.pageLoadIsDone = false;
globalUI.pageLoadIsDone = true;


// actionHeadersSorta awkwardLogTypes
const uiRefGlobal = globalUI.actionOrderFilters;
const newActionFilterArray = [...userTriggers.actionHeadersSorta,...Object.keys(userTriggers.awkwardLogTypes)];

//this is just populating the action order filters by default with everything set to true so that way even if I add more to the header list later, it will still recognize the entire list
for (let entry of newActionFilterArray) {
    uiRefGlobal[entry] = true;
}


// "actionOrderFiltersChars": {
//         "char1": true,
//         "char2": true,
//         "char3": true,
//         "char4": true,
//         "summons": true,
//         "enemies": true,
//     },

// actionOrderFilters


window.addEventListener("keydown", (event) => {
    if (globalUI.currentBattleViewDisplayType === "ActionExpand" && globalUI.currentMainMenuDisplayed === 2) {

        if (event.key === "ArrowLeft" || event.code === "ArrowLeft") {
            userTriggers.forcePriorActionExpand();
        }
        else if (event.key === "ArrowRight" || event.code === "ArrowRight") {
            userTriggers.forceNextActionExpand();
        }
    }
    // ArrowLeft
    // ArrowRight
});
  





userTriggers.shiftDefaultConditionsToCharObjects();
userTriggers.updateSelectedCharacter(globalRecords.character.char1.name);
userTriggers.updateSelectedTraceDisplay(3);//default to ulty on page load, otherwise the trace desc right side will be empty, and that's fuckin weird
userTriggers.updateSelectedRelicStats();

// userTriggers.shiftDefaultConditionsToCharObjects();

userTriggers.updateCharacterBreakdownClicked(1);
userTriggers.updateMainMenuDisplayed(1);
customHTML.updateSelectedFilterDisplay('occlusionsFiltersHolder');


pagePopulation.pageLoadTrashDefinition();
userTriggers.renewFiltersDisplayValues();
pagePopulation.populateQueryOptions();
userTriggers.updateQuerySearchSettings();
userTriggers.addEnemyToWave(1,null,true);
userTriggers.addEnemyToWave(2,null,true);
// userTriggers.updateGraphViewDisplayed('Summary');


customHTML.establishZoomableTraces();
customHTML.establishMobileSideScrollerMenu();