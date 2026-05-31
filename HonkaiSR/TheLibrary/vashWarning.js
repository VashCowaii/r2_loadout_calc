// let currentWarning = "NOTE:<br>The missing hp amounts AFTER phase 1, on 4.0 enemies, should be resolved soonTM.";
let currentWarning = `4.3 Data is in progress, see changelog for progress details.`;

if (currentWarning) {readSelection("vashCustomWarningNote").innerHTML = currentWarning;}
else {readSelection("vashCustomWarningNote").style.display = "none";}