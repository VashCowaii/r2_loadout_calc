const presetTargetFilters = {
    excludeOwnMemosprite(battleData,sourceTurn,targetTurn) {
        return targetTurn.eventOwner != sourceTurn.name;
    },
};