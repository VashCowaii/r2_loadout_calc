const configAbility = {
  "fileName": "2034014_BattleEvent_W2_LycanKing_IF_EnterReady",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Compare: Monster Rank",
        "target": {
          "name": "Target Name",
          "target": "{{Modifier Holder}}"
        },
        "compareType": "=",
        "value2": 4
      }
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}