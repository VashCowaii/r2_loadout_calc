const conditionalChecksWeapons = {
    isWeakpoint(index,returnObject,isCycleCalcs,weaponRef) {
        //is the current damage selection meant to be a weakpoint hit or not
        return globalRecords.useWeakspots && returnObject.bossPartWPBonus > 0 ? true : false;
    },
    isAdvantage(index,returnObject,isCycleCalcs,weaponRef) {
        //is the current damage selection meant to be a weakpoint hit or not.
        // console.log(weaponRef)
        let currentAdvantage = weaponRef.physicalType;

        return globalRecords.boss.currentBossPartType === currentAdvantage;
    }
}