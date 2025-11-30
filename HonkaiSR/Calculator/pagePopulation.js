// globalUI.pageLoadIsDone = false;
globalUI.pageLoadIsDone = true;
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