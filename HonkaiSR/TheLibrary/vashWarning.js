// let currentWarning = "NOTE:<br>The missing hp amounts AFTER phase 1, on 4.0 enemies, should be resolved soonTM.";
let currentWarning = `4.4 data is in progress. Some data will be incomplete for a few days.`;

if (currentWarning) {readSelection("vashCustomWarningNote").innerHTML = currentWarning;}
else {readSelection("vashCustomWarningNote").style.display = "none";}