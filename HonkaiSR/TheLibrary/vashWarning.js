// let currentWarning = "NOTE:<br>The missing hp amounts AFTER phase 1, on 4.0 enemies, should be resolved soonTM.";
let currentWarning = `4.5 data is in progress.`;

if (currentWarning) {
    readSelection("vashCustomWarningNote").style.color = "lightblue"
    readSelection("vashCustomWarningNote").innerHTML = currentWarning;
}
else {readSelection("vashCustomWarningNote").style.display = "none";}