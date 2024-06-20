const tooltipStorage = {
    //"elementID": "tooltip text here",
    "threadCountTooltip": "How many CPU threads should we use to speed up the query?<br>More = Faster, most of the time.<br><br>Refer to your CPU core count as a general rule of thumb. Too many threads opened when your computer can't handle it, will only slow it down. Monitor your CPU and RAM usage while a query is in effect, to see if you're using too much.",
    "lastFound": "This is simply a number that represents within the total possible combos, when the last loadout was found with an equivalent or better value. The number might change between query to query due to how multithreading works, it might be found sooner or later under performance considerations at the time.",
    "currentlySupportedDamageCalcs": "Breakdowns will not display unless the item is equipped<br><ul><li>Havoc Form (ability)</li><li>Sandstorm (mod)</li></ul>Someone will probably ask me to let you add the DPS breakdowns together - I will, but I made an insane number of changes just getting things to the point they are now, gimme a day or two.",


};

let tooltips = {
    hideTooltip() {
        const tooltip = document.getElementById('tooltip');
        tooltip.style.display = 'none';
    },
    showTooltip(elementId) {
        const tooltip = document.getElementById('tooltip');
        const element = document.getElementById(elementId);
        const tooltipText = tooltipStorage[elementId];
        const isMobile = window.matchMedia("(max-width: 768px)").matches;//Adjust the breakpoint as needed
    
        if (tooltipText) {
            tooltip.innerHTML = userTrigger.updateSubstatColor(tooltipText);
            tooltip.style.display = 'block';
    
            if (isMobile) {
                //On mobile view, fit to screen width and position beneath the tapped element
                tooltip.style.width = 'calc(100% - 20px)';//Adjust as needed
                tooltip.style.left = '10px';//Center it horizontally with some margin
                const rect = element.getBoundingClientRect();
                tooltip.style.top = window.scrollY + rect.bottom + 10 + 'px';//Position it below the element with some margin

                //Add event listener to close tooltip if tapping outside
                function outsideClickListener(event) {
                    if (!tooltip.contains(event.target) && !element.contains(event.target)) {
                        tooltips.hideTooltip();
                        document.removeEventListener('click', outsideClickListener);
                    }
                }
                document.addEventListener('click', outsideClickListener);
            }
            else {
                // On desktop view, position according to the mouse cursor
                function mouseMoveListener(event) {
                    const windowHeight = window.innerHeight;
                    const windowWidth = window.innerWidth;
                    const cursorY = event.clientY;
                    const cursorX = event.clientX;
                    const isBottomHalf = cursorY > windowHeight / 2;
                    const isRightHalf = cursorX > windowWidth / 2;

                    if (isRightHalf) {tooltip.style.left = event.pageX - tooltip.offsetWidth - 10 + 'px';}//Left
                    else {tooltip.style.left = event.pageX + 10 + 'px';}//Right

                    if (isBottomHalf) {tooltip.style.top = event.pageY - tooltip.offsetHeight - 10 + 'px';}//Above
                    else {tooltip.style.top = event.pageY + 10 + 'px';}//Below
                }

                element.addEventListener('mousemove', mouseMoveListener);

                // Remove the mousemove listener when the tooltip is hidden
                element.addEventListener('mouseleave', () => {
                    element.removeEventListener('mousemove', mouseMoveListener);
                    tooltips.hideTooltip();
                });
            }
        }
    },
    addDesktopListeners(element) {
        element.addEventListener('mouseenter', () => tooltips.showTooltip(element.id));
        element.addEventListener('mouseleave', tooltips.hideTooltip);
    },
    addMobileListeners(element) {
        let touchStartTime = 0;
        element.addEventListener('touchstart', (event) => {
            touchStartTime = new Date().getTime();
            const isVisible = element.getAttribute('data-tooltip-visible') === 'true';
            if (isVisible) {
                tooltips.hideTooltip();
                element.setAttribute('data-tooltip-visible', 'false');
            } else {
                tooltips.showTooltip(element.id);
                element.setAttribute('data-tooltip-visible', 'true');
            }
            event.stopPropagation();
        });
        element.addEventListener('click', (event) => {
            const currentTime = new Date().getTime();
            if (currentTime - touchStartTime < 500) {
                // Ignore click event if it is fired within 500ms of touchstart
                event.preventDefault();
                event.stopPropagation();
                return;
            }
        });
    },
    loadTooltips() {
        const isMobile = window.matchMedia("(max-width: 768px)").matches; // Adjust the breakpoint as needed
        document.querySelectorAll('.hasHoverTooltip').forEach(element => {
            if (isMobile) {
                // Check if mobile listeners are already added
                if (!element.hasMobileListeners) {
                    element.removeEventListener('mouseenter', tooltips.showTooltip);
                    element.removeEventListener('mouseleave', tooltips.hideTooltip);
                    element.hasDesktopListeners = false;

                    tooltips.addMobileListeners(element);
                    element.hasMobileListeners = true;
                }
            } else {
                // Check if desktop listeners are already added
                if (!element.hasDesktopListeners) {
                    element.removeEventListener('touchstart', tooltips.showTooltip);
                    element.hasMobileListeners = false;

                    tooltips.addDesktopListeners(element);
                    element.hasDesktopListeners = true;
                }
            }
        });
    },
    checkItemForStat(path,name,statistic,type) {
        //Checks the path provided for a given statistic, and if the stat exists within the path's stats or tags arrays, it returns the item name
        let tags = path.tags
        let newTagArray = [];
    
        if (!type) {
            let stats = Object.keys(path.stats);
            for (entry of stats) {newTagArray.push(entry);}
        }
        if (type != "prime") {
            let tags = path.tags
            for (entry of tags) {newTagArray.push(entry);}
        }
        else {
            let stats = Object.keys(path.primeStats);
            for (entry of stats) {newTagArray.push(entry);}
        }
    
        let itemFound = false;
    
        for (entry of newTagArray) {
            if (entry === statistic) {itemFound = true;}
        }
    
        return itemFound ? `${name}<br>` : "";
    },
    returnItemsWithStat(statistic) {
        //This is a function to go over every possible equipped item, check if it the item can at any point provide the target, and if so, return the item names.
        let htmlString = "";
        let globalReference = globalRecords;
        let accessoryReference = globalReference.accessories;
        let consumableReference = globalReference.consumables;
        let weaponReference = globalReference.weapons;
        let armorReference = globalReference.armor;
        let traitReference = globalReference.greatTraitRecords
        let classReference = globalReference.archs;
    
        htmlString += tooltips.checkItemForStat(amulets[accessoryReference.amulet],accessoryReference.amulet,statistic);
        for (let i=1;i<=4;i++) {
            htmlString += tooltips.checkItemForStat(rings[accessoryReference[`ring${i}`]],accessoryReference[`ring${i}`],statistic);
        }
        htmlString += tooltips.checkItemForStat(relics[accessoryReference.relic],accessoryReference.relic,statistic);
        for (let i=1;i<=3;i++) {
            htmlString += tooltips.checkItemForStat(fragments[accessoryReference[`fragment${i}`]],accessoryReference[`fragment${i}`],statistic);
        }
    
        for (let i=1;i<=7;i++) {
            htmlString += tooltips.checkItemForStat(concoctions[consumableReference[`concoction${i}`]],consumableReference[`concoction${i}`],statistic);
        }
        for (let i=1;i<=4;i++) {
            htmlString += tooltips.checkItemForStat(quickUses[consumableReference[`quickUse${i}`]],consumableReference[`quickUse${i}`],statistic);
        }
        htmlString += tooltips.checkItemForStat(primary[weaponReference.primary],weaponReference.primary,statistic);
        htmlString += tooltips.checkItemForStat(rangedMutators[weaponReference.primaryMutator],weaponReference.primaryMutator,statistic);
        htmlString += primary[weaponReference.primary].builtIN ? tooltips.checkItemForStat(builtInPrimary[primary[weaponReference.primary].builtIN],primary[weaponReference.primary].builtIN,statistic)
        : tooltips.checkItemForStat(rangedMods[weaponReference.primaryMod],weaponReference.primaryMod,statistic);
        htmlString += tooltips.checkItemForStat(melee[weaponReference.melee],weaponReference.melee,statistic);
        htmlString += tooltips.checkItemForStat(meleeMutators[weaponReference.meleeMutator],weaponReference.meleeMutator,statistic);
        htmlString += melee[weaponReference.melee].builtIN ? tooltips.checkItemForStat(builtInMelee[melee[weaponReference.melee].builtIN],melee[weaponReference.melee].builtIN,statistic)
        : "";
        htmlString += tooltips.checkItemForStat(secondary[weaponReference.secondary],weaponReference.secondary,statistic);
        htmlString += tooltips.checkItemForStat(rangedMutators[weaponReference.secondaryMutator],weaponReference.secondaryMutator,statistic);
        htmlString += secondary[weaponReference.secondary].builtIN ? tooltips.checkItemForStat(builtInSecondary[secondary[weaponReference.secondary].builtIN],secondary[weaponReference.secondary].builtIN,statistic)
        : tooltips.checkItemForStat(rangedMods[weaponReference.secondaryMod],weaponReference.secondaryMod,statistic);
        htmlString += tooltips.checkItemForStat(helmets[armorReference.helmet],armorReference.helmet,statistic);
        htmlString += tooltips.checkItemForStat(chests[armorReference.chest],armorReference.chest,statistic);
        htmlString += tooltips.checkItemForStat(legs[armorReference.leg],armorReference.leg,statistic);
        htmlString += tooltips.checkItemForStat(hands[armorReference.hand],armorReference.hand,statistic);
    
        for (let i=0;i<traitReference.length;i++) {
            htmlString += tooltips.checkItemForStat(traits[traitReference[i].name],traitReference[i].name,statistic,"trait");
        }
    
    
        htmlString += tooltips.checkItemForStat(classInfo[classReference.one.class],classInfo[classReference.one.class].primePerk,statistic,"prime");
        htmlString += tooltips.checkItemForStat(classInfo[classReference.one.class].abilities[classReference.one.ability],classReference.one.ability,statistic);
        for (let i=1;i<=4;i++) {
            htmlString += tooltips.checkItemForStat(classInfo[classReference.one.class].passives[`passive${i}`],classInfo[classReference.one.class].passives[`passive${i}`].name,statistic);
        }
    
        htmlString += tooltips.checkItemForStat(classInfo[classReference.two.class].abilities[classReference.two.ability],classReference.two.ability,statistic);
        for (let i=1;i<=4;i++) {
            htmlString += tooltips.checkItemForStat(classInfo[classReference.two.class].passives[`passive${i}`],classInfo[classReference.two.class].passives[`passive${i}`].name,statistic);
        }
    
        // classReference
    
    
        return htmlString;
    },
    updateTooltipDisplay(elemID,breakdownString,statArray) {
        let listItemsHeader = "<div>The following selections can contribute to this statistic:</div>"
        let statsString = "";

        for (let i=0;i<statArray.length;i++) {
            statsString += tooltips.returnItemsWithStat(statArray[i])
        }

        tooltipStorage[elemID] =
        (breakdownString ? breakdownString : "")
        + (breakdownString && statsString ? "<br><br>" : "")
        + (statsString ? listItemsHeader + statsString : "");
    },
}

// Initialize tooltips on load
tooltips.loadTooltips();
// Reinitialize tooltips on window resize

window.addEventListener('resize', tooltips.loadTooltips);