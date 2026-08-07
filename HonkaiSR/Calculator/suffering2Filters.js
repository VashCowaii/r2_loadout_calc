const presetTargetFilters = {
    excludeOwnMemosprite(battleData,sourceTurn,targetTurn) {
        return targetTurn.eventOwner != sourceTurn.name;
    },
    excludeSelf(battleData,sourceTurn,targetTurn) {
        return targetTurn.name != sourceTurn.name;
    },
};



Object.defineProperties(Array.prototype,{
    filter_ExcludeTarget: {
        value(target) {
            const existingArray = this;
            const arrayLength = existingArray.length;

            const returnArray = [];
            for (let i=0;i<arrayLength;i++) {
                const currentTarget = existingArray[i];
                if (currentTarget.name != target.name) {
                    returnArray.push(currentTarget);
                }
            }

            return returnArray;
        },
        enumerable: false,
    }
});