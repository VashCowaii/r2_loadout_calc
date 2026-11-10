const configAbility = {
  "fileName": "Guinaifen_Guinaifen_TechniqueInLevel",
  "childAbilityList": [
    "Guinaifen_Guinaifen_TechniqueInLevel"
  ],
  "skillTrigger": "SkillMaze",
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
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1393403826\">Guinaifen_TechniqueUsage_Modifier</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1393403826\">Guinaifen_TechniqueUsage_Modifier</a>",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "priorityLevel": -60,
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  "Technique Modifies Current Wave",
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
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "MDF_AttackCount"
                },
                {
                  "name": "Looped Event",
                  "maxLoops": {
                    "displayLines": "4"
                  },
                  "execute": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(MDF_AttackCount + 1)"
                      },
                      "variableName": "MDF_AttackCount"
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "searchRandom": true,
                      "includeDyingTargets": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Enemies Still Alive",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "includeUnselectable": true,
                            "invertCondition": true
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value1": "CurrentHP",
                            "compareType": ">",
                            "value2": 0
                          }
                        ]
                      },
                      "ifTargetFound": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "canPhase": true,
                          "AttackScaling": {
                            "DamageType": "Fire",
                            "Damage": {
                              "displayLines": "0.5"
                            },
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Technique",
                            "EnergyGainPercent": "100%"
                          }
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "MDF_AttackCount",
                            "compareType": "=",
                            "value2": {
                              "displayLines": "4"
                            },
                            "contextScope": "ContextModifier"
                          },
                          "passed": [
                            "Trigger: Attack End"
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Eidolon Activated",
                            "eidolon": 6
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "value": {
                                "displayLines": "(3 + 1)"
                              },
                              "variableName": "MDF_MaxLayer"
                            }
                          ],
                          "failed": [
                            {
                              "name": "Define Custom Variable",
                              "value": {
                                "displayLines": "3"
                              },
                              "variableName": "MDF_MaxLayer"
                            }
                          ]
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"597170239\">Guinaifen_Oil_Sub</a>[<span class=\"descriptionNumberColor\">Firekiss</span>]",
                          "duration": {
                            "displayLines": "3"
                          },
                          "baseChance": {
                            "displayLines": "1"
                          },
                          "stackLimit": {
                            "displayLines": "MDF_MaxLayer"
                          },
                          "valuePerStack": {
                            "MDF_PropertyValue2": {
                              "displayLines": "0.07"
                            }
                          },
                          "addStacksPerTrigger": 1
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  }
}