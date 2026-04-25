// let currentWarning = "NOTE:<br>The missing hp amounts AFTER phase 1, on 4.0 enemies, should be resolved soonTM.";
let currentWarning = "4.2 is IN PROGRESS<br><br>Enemies should all be done, only some new character eventreaders remain.";

if (currentWarning) {readSelection("vashCustomWarningNote").innerHTML = currentWarning;}
else {readSelection("vashCustomWarningNote").style.display = "none";}