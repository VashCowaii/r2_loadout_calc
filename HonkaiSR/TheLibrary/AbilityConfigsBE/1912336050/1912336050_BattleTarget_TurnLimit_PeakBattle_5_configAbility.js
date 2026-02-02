const configAbility = {
  "fileName": "1912336050_BattleTarget_TurnLimit_PeakBattle_5",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Modifier_BattleTarget_TurnLimit_PeakBattle_5"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Modifier_BattleTarget_TurnLimit_PeakBattle_5",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Define Variable with Battle Goal ID",
              "ability": "BattleTarget_TurnLimit_PeakBattle_5",
              "variableName": "_BattleTargetKey"
            }
          ]
        },
        {
          "eventTrigger": "Turn End [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Entity a Battle Event/Summon",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Current Turn Owner}}"
                    },
                    "expectedType": "VS. Warning Event"
                  }
                ]
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}