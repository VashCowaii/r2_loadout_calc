const configAbility = {
  "fileName": "Luka_Luka_TechniqueInLevel",
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
      "modifier": "Luka_TechniqueUsage"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Luka_TechniqueUsage",
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
                  "name": "Find New Target",
                  "from": "All Hostile Entities (AOE)",
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": "Use Prior Target(s) Defined",
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Physical",
                        "Damage": {
                          "operator": "Variables[0] (0.5) || RETURN",
                          "displayLines": "0.5",
                          "constants": [],
                          "variables": [
                            0.5
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Technique",
                        "EnergyGainPercent": "100%"
                      }
                    },
                    "Trigger: Attack End",
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "Luka_DOT_Tear[<span class=\"descriptionNumberColor\">Bleed</span>]",
                      "duration": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
                        ]
                      },
                      "baseChance": {
                        "operator": "Variables[0] (1) || RETURN",
                        "displayLines": "1",
                        "constants": [],
                        "variables": [
                          1
                        ]
                      },
                      "valuePerStack": {
                        "Modifier_Tear_DamageRatio": {
                          "operator": "Variables[0] (0.24) || RETURN",
                          "displayLines": "0.24",
                          "constants": [],
                          "variables": [
                            0.24
                          ]
                        },
                        "Modifier_Tear_MaxPercentage": {
                          "operator": "Variables[0] (3.38) || RETURN",
                          "displayLines": "3.38",
                          "constants": [],
                          "variables": [
                            3.38
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "Luka_ReloadBullet",
                  "valuePerStack": {
                    "MDF_AddValue": 1
                  }
                }
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