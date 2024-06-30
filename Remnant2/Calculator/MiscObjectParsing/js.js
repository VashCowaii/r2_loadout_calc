//Recall though that now we've added these placement ID's to everything, we can't do it again just by doing it like this
//In the future we need to ensure items are added with placement ID's that are AFTER the max ID present now.
//Come time, we'll need to first loop over all ID's, get the highest, then loop again and find items without ID's and increment from the max found prior.
let kits = {}//Put the data object here you want to modify

console.log("Starting file construction");
const fs = require("fs");

function addPlacementID(kitss, digits = 3,prefix) {
    Object.keys(kitss).forEach((key, index) => {
        let placementID = String(index).padStart(digits, '0');

        kitss[key].placementID = prefix + placementID;

		// if (kitss[key].abilities) {
		// 	kitss[key].abilities = addPlacementID(kitss[key].abilities, 1,"");
		// }

    });
    return kitss;
}

let numbers = 2;//How many digits to display, even with 0's padding the string
let prefix = "";//What letter prefix to assign to a placement ID
const updatedObjects = addPlacementID(kits, numbers,prefix);

fs.writeFileSync(`primary.json`, JSON.stringify(updatedObjects, null, 2));
console.log("Finished")