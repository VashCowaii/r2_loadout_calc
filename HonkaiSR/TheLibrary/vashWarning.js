// let currentWarning = "NOTE:<br>The missing hp amounts AFTER phase 1, on 4.0 enemies, should be resolved soonTM.";
let currentWarning = `NOTE:<br>Due to IRL restrictions(for once), the site will update to 4.6 on October 2nd/3rd.<br><br>EDIT 10/03: update in progress.`;

if (currentWarning) {
    readSelection("vashCustomWarningNote").style.color = "lightcoral";//"lightblue"
    readSelection("vashCustomWarningNote").innerHTML = currentWarning;
}
else {readSelection("vashCustomWarningNote").style.display = "none";}