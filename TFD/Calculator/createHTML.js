const createHTML = {
    modSlotBox(number,typeString) {
        return `
        <div class="${typeString}" onclick="userTriggers.updateSelectedFocus('mod${number}BreakdownTab')">
            <div class="modSlotPolarityHolderBox">
                <img src="/TFD/TFDImages/Polarities/Icon_RunesCapacity_Mini_000_Picto.png" alt="polarity icon" class="modSlotPolarityImage" id="modSlotPolarityIcon${number}">
            </div>
            <div class="modSlotNameHolder" id="modSlotName${number}">
                <div class="modSlotNameMod" id="modSlotName${number}Mod"></div>
                <div class="modSlotNameCategory" id="modSlotName${number}Category"></div>
            </div>
        </div>
        `
    },
    basicsRow(tooltipID,name,value,isRounded,unit) {
        unit = unit ?? "";
        value = unit==="%" ? value*100 : value;
        value = !isRounded ? value : value.toFixed(3)
        return `<div class="basicsDRContainer hasHoverTooltip" id="${tooltipID}">
          <span class="basicsDRStat">${name}</span><span class="rowTraceLine"></span><span class="basicsDRValue" id="">${value}</span>
        <span class="rowUnitCenter">${unit}</span></div>`
    },
    basicsRowAbilityHeader(tooltipID,name,value,isRounded,unit) {
        unit = unit ?? "";
        value = unit==="%" ? value*100 : value;
        value = !isRounded ? value : value.toFixed(3)
        return `<div class="basicsDRContainer hasHoverTooltip" id="${tooltipID}">
          <span class="basicsDRStatGreen">${name}</span></div>`
    },
    componentDescription(descRef) {
        return `<span class="componentDescription">
            <b>2 Piece:</b> ${descRef["2pc"].desc}
            <br>
            <b>4 Piece:</b> ${descRef["4pc"].desc}
        </span>`
    }
}