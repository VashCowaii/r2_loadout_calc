const configAbility = {
  "fileName": "Sushang_Sushang_TechniqueInLevel",
  "abilityType": "Technique",
  "energy": null,
  "toughnessList": [
    20,
    0,
    0
  ],
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "StageAbility_Maze_Sushang_Modifier"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "StageAbility_Maze_Sushang_Modifier",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Technique Modifies Current Wave"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "Wave Count",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": "All Hostile Entities (AOE)",
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "Damage": {
                      "operator": "Variables[0] (0.8) || RETURN",
                      "displayLines": "0.8",
                      "constants": [],
                      "variables": [
                        0.8
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Technique",
                    "EnergyGainPercent": "100%"
                  }
                },
                "Trigger: Attack End"
              ]
            }
          ],
          "priorityLevel": -60
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}