const configAbility = {
  "fileName": "1004016_Boss_Cocolia_P2_insertAbility",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable with Added Value",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "DeathEvent_Trigger_Times",
      "context": "TargetEntity",
      "value": 1,
      "max": 1
    },
    {
      "name": "Remove from Team Target Grouping",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "stayInTeam": false
    },
    {
      "name": "Create Enemies",
      "delayPercent": 0,
      "enemyList": [
        {
          "name": "Create Enemy from Custom",
          "value": "P2ID",
          "summonLocation": "BeforeCaster"
        }
      ]
    }
  ],
  "references": []
}