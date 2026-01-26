const configAbility = {
  "fileName": "Phainon_Phainon_PassiveAbility02",
  "childAbilityList": [
    "Phainon_Phainon_PassiveAbility02"
  ],
  "skillTrigger": "SkillP02",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": [
    0,
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
      "modifier": "Phainon_PassiveAbility02"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 1
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "CDF_SpeedConvertRatio",
          "value": {
            "operator": "Variables[0] (0.66) || RETURN",
            "displayLines": "0.66",
            "constants": [],
            "variables": [
              0.66
            ]
          }
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "CDF_SpeedConvertRatio",
          "value": {
            "operator": "Variables[0] (0.6) || RETURN",
            "displayLines": "0.6",
            "constants": [],
            "variables": [
              0.6
            ]
          }
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Skill11_EnergyAdd",
      "value": {
        "operator": "Variables[0] (2) || RETURN",
        "displayLines": "2",
        "constants": [],
        "variables": [
          2
        ]
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Skill21_ExtraEnergyAdd",
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Skill22_Energy_Max",
      "value": 7
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
          "variableName": "Have_Rank06",
          "value": 1
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Phainon_Ability22_Disable",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Disable Abilities",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "abilityTypes": null,
              "extraText": "Insufficient \"Scourge\"",
              "controlTypes": [
                "ControlSkill02"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Phainon_Ultimate_Energy[<span class=\"descriptionNumberColor\">Scourge</span>]",
      "counter": 1,
      "stackType": "ReplaceByCaster",
      "description": "\"Scourge\" points. \"Scourge\" can be consumed to use Skill \"Foundation: Stardeath Verdict.\"",
      "type": "Other",
      "statusName": "Scourge"
    },
    {
      "name": "Modifier Construction",
      "for": "Phainon_PassiveAbility02",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Read Variable Value",
              "adjustmentType": "Add to Value (Default)",
              "variableName": "Skill22_Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Caster}}"
              }
            }
          ]
        },
        {
          "eventTrigger": "Action Start [Anyone]",
          "execute": [
            {
              "name": "Set Phainon Charge Points Preview",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Define Custom Variable with Team Count",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "variableName": "_enemyCount",
              "livingTargets": true,
              "context": "ContextModifier"
            }
          ]
        },
        {
          "eventTrigger": "Extra Action/Turn [Owner]: Start ",
          "execute": [
            {
              "name": "Define Custom Variable with Team Count",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "variableName": "_enemyCount",
              "livingTargets": true,
              "context": "ContextModifier"
            }
          ]
        },
        {
          "eventTrigger": "Update Target Selected(UI) [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Name",
                "skillName": "Skill11",
                "useActive": true
              },
              "passed": [
                {
                  "name": "Set Phainon Charge Points Preview",
                  "value": {
                    "operator": "Variables[0] (Skill11_EnergyAdd) || RETURN",
                    "displayLines": "Skill11_EnergyAdd",
                    "constants": [],
                    "variables": [
                      "Skill11_EnergyAdd"
                    ]
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Name",
                "skillName": "Skill21",
                "useActive": true
              },
              "passed": [
                {
                  "name": "Set Phainon Charge Points Preview",
                  "value": {
                    "operator": "Variables[0] (_enemyCount) || Variables[1] (Skill21_ExtraEnergyAdd) || ADD || RETURN",
                    "displayLines": "(_enemyCount + Skill21_ExtraEnergyAdd)",
                    "constants": [],
                    "variables": [
                      "_enemyCount",
                      "Skill21_ExtraEnergyAdd"
                    ]
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Name",
                "skillName": "Skill22",
                "useActive": true
              },
              "passed": [
                {
                  "name": "Set Phainon Charge Points Preview",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (Skill22_Energy) || SUB || RETURN",
                    "displayLines": "(0 - Skill22_Energy)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "Skill22_Energy"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Update Target Selected(UI) [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Set Phainon Charge Points Preview",
                  "value": 0
                }
              ]
            }
          ]
        }
      ],
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "Skill22_Energy",
          "from": "ContextCaster",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "whenValueChanges": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "Phainon_Ultimate_Energy[<span class=\"descriptionNumberColor\">Scourge</span>]"
                  },
                  "passed": [
                    {
                      "name": "Define Modifier Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifierName": "Phainon_Ultimate_Energy[<span class=\"descriptionNumberColor\">Scourge</span>]",
                      "value": {
                        "operator": "Variables[0] (Skill22_Energy) || RETURN",
                        "displayLines": "Skill22_Energy",
                        "constants": [],
                        "variables": [
                          "Skill22_Energy"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "Phainon_Ultra[<span class=\"descriptionNumberColor\">Divine Vessel</span>]"
                  },
                  "passed": [
                    {
                      "name": "Set Phainon Charge Points",
                      "value": {
                        "operator": "Variables[0] (Skill22_Energy) || RETURN",
                        "displayLines": "Skill22_Energy",
                        "constants": [],
                        "variables": [
                          "Skill22_Energy"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": 1,
              "maxValue": 99,
              "whenEnteringRange": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Phainon_Ultimate_Energy[<span class=\"descriptionNumberColor\">Scourge</span>]",
                  "counter": {
                    "operator": "Variables[0] (Skill22_Energy) || RETURN",
                    "displayLines": "Skill22_Energy",
                    "constants": [],
                    "variables": [
                      "Skill22_Energy"
                    ]
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Phainon_Ability22_Disable"
                }
              ],
              "whenLeavingRange": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Phainon_Ultimate_Energy[<span class=\"descriptionNumberColor\">Scourge</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Phainon_Ability22_Disable"
                }
              ]
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": {
                "operator": "Variables[0] (4) || RETURN",
                "displayLines": "4",
                "constants": [],
                "variables": [
                  4
                ]
              },
              "maxValue": 99
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "conditions": {
          "name": "Skill Name",
          "skillName": "Skill22",
          "useActive": true
        },
        "multiplier": 0.25
      }
    }
  ]
}