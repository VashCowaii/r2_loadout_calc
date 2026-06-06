const presetTargetFilters = {
    excludeOwnMemosprite(battleData,sourceTurn,targetTurn) {
        return targetTurn.eventOwner != sourceTurn.name;
    },
    excludeSelf(battleData,sourceTurn,targetTurn) {
        return targetTurn.name != sourceTurn.name;
    },
};