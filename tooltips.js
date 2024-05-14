const tooltipStorage = {
    //"elementID": "tooltip text here",
    "threadCountTooltip": "How many CPU threads should we use to speed up the query?<br>More = Faster, most of the time.<br><br>Refer to your CPU core count as a general rule of thumb. Too many threads opened when your computer can't handle it, will only slow it down. Monitor your CPU and RAM usage while a query is in effect, to see if you're using too much.",
    "lastFound": "This is simply a number that represents within the total possible combos, when the last loadout was found with an equivalent or better value. The number might change between query to query due to how multithreading works, it might be found sooner or later under performance considerations at the time.",




};

function showTooltip(elementId) {
    // console.log("triggered")
    const tooltip = document.getElementById('tooltip');
    const element = document.getElementById(elementId);
    const tooltipText = tooltipStorage[elementId];

    if (tooltipText) {
        tooltip.innerHTML = userTrigger.updateSubstatColor(tooltipText);
        tooltip.style.display = 'block';

        element.addEventListener('mousemove', function (event) {
            tooltip.style.left = event.pageX + 10 + 'px';
            tooltip.style.top = event.pageY + 10 + 'px';
        });
    }
}

function hideTooltip() {
    const tooltip = document.getElementById('tooltip');
    tooltip.style.display = 'none';
}

document.querySelectorAll('.hasHoverTooltip').forEach(element => {
    element.addEventListener('mouseenter', () => showTooltip(element.id));
    element.addEventListener('mouseleave', hideTooltip);
});