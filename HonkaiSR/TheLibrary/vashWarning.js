// let currentWarning = "NOTE:<br>The missing hp amounts AFTER phase 1, on 4.0 enemies, should be resolved soonTM.";
let currentWarning = `NOTE: 4.6 is in progress but due to complications some enemies will be missing phase data or event-readers.`;

if (currentWarning) {
    readSelection("vashCustomWarningNote").style.color = "lightcoral";//"lightblue"
    readSelection("vashCustomWarningNote").innerHTML = currentWarning;
}
else {readSelection("vashCustomWarningNote").style.display = "none";}