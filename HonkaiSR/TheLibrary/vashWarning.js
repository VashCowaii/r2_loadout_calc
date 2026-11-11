// let currentWarning = "NOTE:<br>The missing hp amounts AFTER phase 1, on 4.0 enemies, should be resolved soonTM.";
let currentWarning = `NOTE: 4.7 is in progress, and <b><i>the library as a whole is being rewritten code-wise</i></b>.<br>I will post info in changelog as I go.`;

if (currentWarning) {
    readSelection("vashCustomWarningNote").style.color = "lightcoral";//"lightblue"
    readSelection("vashCustomWarningNote").innerHTML = currentWarning;
}
else {readSelection("vashCustomWarningNote").style.display = "none";}