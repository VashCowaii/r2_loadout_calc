const conditionalChecksWeapons = {
    isWeakpoint(index,returnObject,isCycleCalcs,weaponRef,cycleReferences) {
        //is the current damage selection meant to be a weakpoint hit or not
        return globalRecords.useWeakspots && returnObject.bossPartWPBonus > 0 ? true : false;
    },
    isMultiHit(index,returnObject,isCycleCalcs,weaponRef,cycleReferences) {
        //do we even have a chance to do a multishot or not
        return returnObject.avgMultishotBonus > 0 ? true : false;
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
    isHandgun(index,returnObject,isCycleCalcs,weaponRef,cycleReferences) {
        return weaponRef.weaponType === "Handgun"
    },
    isHandCannon(index,returnObject,isCycleCalcs,weaponRef,cycleReferences) {
        return weaponRef.weaponType === "Hand Cannon"
    },
    isShotgun(index,returnObject,isCycleCalcs,weaponRef,cycleReferences) {
        return weaponRef.weaponType === "Shotgun"
    },
    isSniper(index,returnObject,isCycleCalcs,weaponRef,cycleReferences) {
        return weaponRef.weaponType === "Sniper Rifle"
    },
    isScout(index,returnObject,isCycleCalcs,weaponRef,cycleReferences) {
        return weaponRef.weaponType === "Scout Rifle"
    },
    isAssault(index,returnObject,isCycleCalcs,weaponRef,cycleReferences) {
        return weaponRef.weaponType === "Assault Rifle"
    },
    isSubmachine(index,returnObject,isCycleCalcs,weaponRef,cycleReferences) {
        return weaponRef.weaponType === "Submachine Gun"
    },
}