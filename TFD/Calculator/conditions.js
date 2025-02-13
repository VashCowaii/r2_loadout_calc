const conditionalChecksWeapons = {
    isWeakpoint(index,returnObject,isCycleCalcs,weaponRef,cycleReferences) {
        //is the current damage selection meant to be a weakpoint hit or not
        return globalRecords.useWeakspots && returnObject.bossPartWPBonus > 0 ? true : false;
    },
    isAdvantage(index,returnObject,isCycleCalcs,weaponRef,cycleReferences) {
        //is the current damage selection meant to be a weakpoint hit or not.
        // console.log(weaponRef)
        let currentAdvantage = weaponRef.physicalType;

        return globalRecords.boss.currentBossPartType === currentAdvantage;
    },
    isReloaded(index,returnObject,isCycleCalcs,weaponRef,cycleReferences) {
        return cycleReferences.justReloaded;
    },
    isEndOfMagazine(index,returnObject,isCycleCalcs,weaponRef,cycleReferences) {
        return cycleReferences.isEndOfMagazine;
    },
    hasFirearmDamage(index,returnObject,isCycleCalcs,weaponRef,cycleReferences) {
        return cycleReferences.hasFirearmDamage
    },
}