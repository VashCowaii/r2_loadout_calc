let tooltips = {
    updateSubstatColor(description) {
        for (let substat of substatColorMods) {
          //And if the description contains the looped substat ANYWHERE within it, proceed
          if (description.toLowerCase().includes(substat) === true) {
            let substatExclusion = "";
            if (substatColorExclusions[substat] != undefined) {
              //(?!) = lookahead is not [whatever you don't want to be next]
              substatExclusion = `(?!${substatColorExclusions[substat]})`;
              //This is to only find exclusion values based upon the specified substat. So fire = rate, status = effect, etc.
            }
            //b = word boundary, g = global, i = case insensitive. Any \\ is just bc \ is an escape itself and needs to be escaped. \s = whitespace character
            let regEx = new RegExp(`\\b(${substat})${substatExclusion}\\b`, "gi");
            description = description.replace(regEx, `<span class="${substat.replace(/\s/g,"")}">${substat.toUpperCase()}</span>`);
          }
        }
        //d= digit character, w = word character
        let regExNumbers = new RegExp(`\\b(\\d[%\\w]*)`, "gi");
        description = description.replace(regExNumbers, `<span class="numberTag">$&</span>`);
        return description;
    },
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
            tooltip.innerHTML = tooltips.updateSubstatColor(tooltipText);
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
}

// Initialize tooltips on load
tooltips.loadTooltips();
// Reinitialize tooltips on window resize

window.addEventListener('resize', tooltips.loadTooltips);
//You need a tooltipStorage file wherever you use this