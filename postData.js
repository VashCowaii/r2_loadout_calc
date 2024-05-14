// This is where anything that should run after data.js, but shouldn't be copied by workers, should go
function generateRecords(name,limit) {
    //Used for generating what the "old" record of a slot might have been. Only used for the UI calc, not cycles
    for (let i=1;i<=limit;i++) {
        globalRecords[`${name}${i}Old`] = "";
    }
}
generateRecords("archetype",2);
generateRecords("ring",4);
generateRecords("fragment",3);
generateRecords("concoction",7);
generateRecords("quickUse",2);
generateRecords("rangedMutator",2);
generateRecords("rangeMod",2);

//Shorthand for selecting an element by ID. Follow up with .value or .innerHTML
function readSelection(elemID) {
	let selectedValue = document.getElementById(elemID);
	return selectedValue;
  }

let workers = {
	"cycleWorker": undefined,
}
