let currentWarning = "NOTE:<br>Ran into a problem with data for 4.0 enemies/variants<br><br>As a result, <i><b>4.0</b></i> enemy phase data is going to be missing for now.<br>Will fix ASAP(no ETA) but in the meantime, be aware that enemy HP for 4.0 enemies will still be correct, but also wrong since it's missing diff phase HP counts.";

if (currentWarning) {readSelection("vashCustomWarningNote").innerHTML = currentWarning;}
else {readSelection("vashCustomWarningNote").style.display = "none";}