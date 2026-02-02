const configAbility = {
  "fileName": "1912336050_ChallengePeakBattle_BaseAbility_0013",
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
      "modifier": "Modifier_ChallengePeakBattle_BaseAbility_0013"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Modifier_ChallengePeakBattle_BaseAbility_0013_03",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyRegenRate</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (ChallengePeakBattle_0013_ADF_2) || INVERT || RETURN",
                "displayLines": "-ChallengePeakBattle_0013_ADF_2",
                "constants": [],
                "variables": [
                  "ChallengePeakBattle_0013_ADF_2"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_ChallengePeakBattle_BaseAbility_0013_02[<span class=\"descriptionNumberColor\">Depowered</span>]",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}.[[getMemosprite]]"
              },
              "modifier": "Modifier_ChallengePeakBattle_BaseAbility_0013_02[<span class=\"descriptionNumberColor\">Depowered</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Modifier_ChallengePeakBattle_BaseAbility_0013_03"
            }
          ]
        },
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Modifier_ChallengePeakBattle_BaseAbility_0013_03"
            }
          ]
        },
        {
          "eventTrigger": "Turn [Action-End Phase]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Modifier_ChallengePeakBattle_BaseAbility_0013_03",
              "duration": {
                "operator": "Variables[0] (ChallengePeakBattle_0013_ADF_3) || RETURN",
                "displayLines": "ChallengePeakBattle_0013_ADF_3",
                "constants": [],
                "variables": [
                  "ChallengePeakBattle_0013_ADF_3"
                ]
              },
              "valuePerStack": {
                "ChallengePeakBattle_0013_ADF_1": {
                  "operator": "Variables[0] (ChallengePeakBattle_0013_ADF_1) || RETURN",
                  "displayLines": "ChallengePeakBattle_0013_ADF_1",
                  "constants": [],
                  "variables": [
                    "ChallengePeakBattle_0013_ADF_1"
                  ]
                },
                "ChallengePeakBattle_0013_ADF_2": {
                  "operator": "Variables[0] (ChallengePeakBattle_0013_ADF_2) || RETURN",
                  "displayLines": "ChallengePeakBattle_0013_ADF_2",
                  "constants": [],
                  "variables": [
                    "ChallengePeakBattle_0013_ADF_2"
                  ]
                },
                "ChallengePeakBattle_0013_ADF_3": {
                  "operator": "Variables[0] (ChallengePeakBattle_0013_ADF_3) || RETURN",
                  "displayLines": "ChallengePeakBattle_0013_ADF_3",
                  "constants": [],
                  "variables": [
                    "ChallengePeakBattle_0013_ADF_3"
                  ]
                }
              }
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Modifier_ChallengePeakBattle_BaseAbility_0013_03",
              "valuePerStack": {
                "ChallengePeakBattle_0013_ADF_1": {
                  "operator": "Variables[0] (ChallengePeakBattle_0013_ADF_1) || RETURN",
                  "displayLines": "ChallengePeakBattle_0013_ADF_1",
                  "constants": [],
                  "variables": [
                    "ChallengePeakBattle_0013_ADF_1"
                  ]
                },
                "ChallengePeakBattle_0013_ADF_2": {
                  "operator": "Variables[0] (ChallengePeakBattle_0013_ADF_2) || RETURN",
                  "displayLines": "ChallengePeakBattle_0013_ADF_2",
                  "constants": [],
                  "variables": [
                    "ChallengePeakBattle_0013_ADF_2"
                  ]
                },
                "ChallengePeakBattle_0013_ADF_3": {
                  "operator": "Variables[0] (ChallengePeakBattle_0013_ADF_3) || RETURN",
                  "displayLines": "ChallengePeakBattle_0013_ADF_3",
                  "constants": [],
                  "variables": [
                    "ChallengePeakBattle_0013_ADF_3"
                  ]
                }
              }
            }
          ]
        },
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "type": "Memosprite"
                  },
                  {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}.[[getMemosprite]]"
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "LifeTime",
                  "variableName": "MDF_LifeTime",
                  "multiplier": 1
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Modifier_ChallengePeakBattle_BaseAbility_0013_02[<span class=\"descriptionNumberColor\">Depowered</span>]",
                  "valuePerStack": {
                    "ChallengePeakBattle_0013_ADF_1": {
                      "operator": "Variables[0] (ChallengePeakBattle_0013_ADF_1) || RETURN",
                      "displayLines": "ChallengePeakBattle_0013_ADF_1",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_0013_ADF_1"
                      ]
                    },
                    "ChallengePeakBattle_0013_ADF_2": {
                      "operator": "Variables[0] (ChallengePeakBattle_0013_ADF_2) || RETURN",
                      "displayLines": "ChallengePeakBattle_0013_ADF_2",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_0013_ADF_2"
                      ]
                    },
                    "ChallengePeakBattle_0013_ADF_3": {
                      "operator": "Variables[0] (ChallengePeakBattle_0013_ADF_3) || RETURN",
                      "displayLines": "ChallengePeakBattle_0013_ADF_3",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_0013_ADF_3"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valuePercent": {
                "operator": "Variables[0] (ChallengePeakBattle_0013_ADF_1) || INVERT || RETURN",
                "displayLines": "-ChallengePeakBattle_0013_ADF_1",
                "constants": [],
                "variables": [
                  "ChallengePeakBattle_0013_ADF_1"
                ]
              },
              "isFixed": "(Fixed)"
            }
          ],
          "priorityLevel": -90
        }
      ],
      "description": "Decreases Energy Regeneration Rate by <span class=\"descriptionNumberColor\">ChallengePeakBattle_0013_ADF_2</span> outside this unit's turn.",
      "type": "Other",
      "statusName": "Depowered"
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_ChallengePeakBattle_BaseAbility_0013",
      "execute": [
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "type": "Character"
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Modifier_ChallengePeakBattle_BaseAbility_0013_02[<span class=\"descriptionNumberColor\">Depowered</span>]",
                  "duration": {
                    "operator": "Variables[0] (#ADF_3) || RETURN",
                    "displayLines": "#ADF_3",
                    "constants": [],
                    "variables": [
                      "#ADF_3"
                    ]
                  },
                  "valuePerStack": {
                    "ChallengePeakBattle_0013_ADF_1": {
                      "operator": "Variables[0] (#ADF_1) || RETURN",
                      "displayLines": "#ADF_1",
                      "constants": [],
                      "variables": [
                        "#ADF_1"
                      ]
                    },
                    "ChallengePeakBattle_0013_ADF_2": {
                      "operator": "Variables[0] (#ADF_2) || RETURN",
                      "displayLines": "#ADF_2",
                      "constants": [],
                      "variables": [
                        "#ADF_2"
                      ]
                    },
                    "ChallengePeakBattle_0013_ADF_3": {
                      "operator": "Variables[0] (#ADF_3) || RETURN",
                      "displayLines": "#ADF_3",
                      "constants": [],
                      "variables": [
                        "#ADF_3"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}