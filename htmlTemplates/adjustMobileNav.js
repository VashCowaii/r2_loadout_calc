function adjustMobileNavHeader() {
    let navButton = document.getElementById("tripleBarIcon");
    let hiddenButtons = document.querySelectorAll('.dropbtnHiddenMobile');

    //"&equiv;" is "≡"

    if (navButton.innerHTML === "≡") {
        navButton.innerHTML = "X";

        hiddenButtons.forEach(function(hiddenButtons) {
            hiddenButtons.style.display = 'flex';
        });
    }
    else {
        navButton.innerHTML = "≡";

        hiddenButtons.forEach(function(hiddenButtons) {
            hiddenButtons.style.display = 'none';
        });
    }
}


function toggleDropdown(dropdownId) {
    let dropdowns = document.querySelectorAll('.dropdownContentFromLeftMobile');

    dropdowns.forEach(function(dropdown) {//Close open dropdowns
        if (dropdown.id !== dropdownId) {
            dropdown.style.display = 'none';
        }
    });

    // Toggle the selected dropdown
    let dropdown = document.getElementById(dropdownId);
    if (dropdown.style.display === 'flex') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'flex';
    }
}