const configAbility = {
  "fileName": "1912336050_ChallengePeakBattle_ExtremeAbility_0013",
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
      "modifier": "<a class=\"gModGreen\" id=\"1007273967\">Modifier_ChallengePeakBattle_ExtremeAbility_0013</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-926604631\">Modifier_ChallengePeakBattle_ExtremeAbility_0013_03</a>",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyRegenRate</span>&nbsp;",
              "statValue": {
                "displayLines": "-ChallengePeakBattle_0013_ADF_2"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-943382250\">Modifier_ChallengePeakBattle_ExtremeAbility_0013_02</a>[<span class=\"descriptionNumberColor\">Depowered++</span>]",
      "description": "Decreases Energy Regeneration Rate by <span class=\"descriptionNumberColor\">ChallengePeakBattle_0013_ADF_2</span> outside this unit's turn.",
      "type": "Other",
      "statusName": "Depowered++",
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
              "modifier": "<a class=\"gModGreen\" id=\"-943382250\">Modifier_ChallengePeakBattle_ExtremeAbility_0013_02</a>[<span class=\"descriptionNumberColor\">Depowered++</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-926604631\">Modifier_ChallengePeakBattle_ExtremeAbility_0013_03</a>"
            }
          ]
        },
        {
          "eventTrigger": "Turn [Anyone]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Current Turn Is",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                }
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-926604631\">Modifier_ChallengePeakBattle_ExtremeAbility_0013_03</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Turn [Anyone]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Current Turn Is",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-926604631\">Modifier_ChallengePeakBattle_ExtremeAbility_0013_03</a>",
                  "duration": {
                    "displayLines": "ChallengePeakBattle_0013_ADF_3"
                  },
                  "valuePerStack": {
                    "ChallengePeakBattle_0013_ADF_1": {
                      "displayLines": "ChallengePeakBattle_0013_ADF_1"
                    },
                    "ChallengePeakBattle_0013_ADF_2": {
                      "displayLines": "ChallengePeakBattle_0013_ADF_2"
                    },
                    "ChallengePeakBattle_0013_ADF_3": {
                      "displayLines": "ChallengePeakBattle_0013_ADF_3"
                    }
                  }
                }
              ]
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
              "modifier": "<a class=\"gModGreen\" id=\"-926604631\">Modifier_ChallengePeakBattle_ExtremeAbility_0013_03</a>",
              "valuePerStack": {
                "ChallengePeakBattle_0013_ADF_1": {
                  "displayLines": "ChallengePeakBattle_0013_ADF_1"
                },
                "ChallengePeakBattle_0013_ADF_2": {
                  "displayLines": "ChallengePeakBattle_0013_ADF_2"
                },
                "ChallengePeakBattle_0013_ADF_3": {
                  "displayLines": "ChallengePeakBattle_0013_ADF_3"
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
                    "entityType": "Memosprite"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-943382250\">Modifier_ChallengePeakBattle_ExtremeAbility_0013_02</a>[<span class=\"descriptionNumberColor\">Depowered++</span>]",
                  "valuePerStack": {
                    "ChallengePeakBattle_0013_ADF_1": {
                      "displayLines": "ChallengePeakBattle_0013_ADF_1"
                    },
                    "ChallengePeakBattle_0013_ADF_2": {
                      "displayLines": "ChallengePeakBattle_0013_ADF_2"
                    },
                    "ChallengePeakBattle_0013_ADF_3": {
                      "displayLines": "ChallengePeakBattle_0013_ADF_3"
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "priorityLevel": -90,
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Wave Count",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valuePercent": {
                    "displayLines": "-ChallengePeakBattle_0013_ADF_1"
                  },
                  "isFixed": "(Fixed)"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1007273967\">Modifier_ChallengePeakBattle_ExtremeAbility_0013</a>",
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
                    "entityType": "Character"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-943382250\">Modifier_ChallengePeakBattle_ExtremeAbility_0013_02</a>[<span class=\"descriptionNumberColor\">Depowered++</span>]",
                  "duration": {
                    "displayLines": "#ADF_3"
                  },
                  "valuePerStack": {
                    "ChallengePeakBattle_0013_ADF_1": {
                      "displayLines": "#ADF_1"
                    },
                    "ChallengePeakBattle_0013_ADF_2": {
                      "displayLines": "#ADF_2"
                    },
                    "ChallengePeakBattle_0013_ADF_3": {
                      "displayLines": "#ADF_3"
                    }
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}