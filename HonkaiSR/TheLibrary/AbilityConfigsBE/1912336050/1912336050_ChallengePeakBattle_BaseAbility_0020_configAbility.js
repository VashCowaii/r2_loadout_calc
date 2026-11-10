const configAbility = {
  "fileName": "1912336050_ChallengePeakBattle_BaseAbility_0020",
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
      "modifier": "<a class=\"gModGreen\" id=\"1624415680\">Modifier_ChallengePeakBattle_BaseAbility_0020</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-466803248\">Modifier_ChallengePeakBattle_BaseAbility_0020_02_PreShow</a>",
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": {
          "name": "Target Name",
          "target": "{{Enemy Team All(with Unselectable)}}"
        },
        "skillType": [
          "Ultimate"
        ],
        "conditions": {
          "name": "Compare: Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "value1": "<a class=\"gModGreen\" id=\"255563439\">Modifier_ChallengePeakBattle_BaseAbility_0020_02</a>[<span class=\"descriptionNumberColor\">Enrage</span>]",
          "compareType": "<",
          "value2": {
            "displayLines": "ChallengePeakBattle_0020_ADF_2"
          },
          "valueType": "Layer"
        },
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": "ChallengePeakBattle_0020_ADF_1(SPD Change)"
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__255563439\">Modifier_ChallengePeakBattle_BaseAbility_0020_02</a>[<span class=\"descriptionNumberColor\">Enrage</span>]",
      "stackType": "Replace",
      "modifierFlags": [
        "STAT_SpeedUp"
      ],
      "description": "Each stack increases SPD by <span class=\"descriptionNumberColor\">ChallengePeakBattle_0020_ADF_1</span>, stacking up to <span class=\"descriptionNumberColor\">ChallengePeakBattle_0020_ADF_2</span> time(s). At the start of each turn, all stacks are removed.",
      "type": "Other",
      "statusName": "Enrage",
      "addStacksPerTrigger": 1,
      "execute": [
        {
          "eventTrigger": "Turn [Owner]: Pre-action Phase",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "MDF_Layer",
              "multiplier": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "MDF_Layer",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"255563439\">Modifier_ChallengePeakBattle_BaseAbility_0020_02</a>[<span class=\"descriptionNumberColor\">Enrage</span>]",
                  "valuePerStack": {
                    "ChallengePeakBattle_0020_ADF_1": {
                      "displayLines": "ChallengePeakBattle_0020_ADF_1"
                    },
                    "ChallengePeakBattle_0020_ADF_2": {
                      "displayLines": "ChallengePeakBattle_0020_ADF_2"
                    }
                  },
                  "addStacksPerTrigger": {
                    "displayLines": "-MDF_Layer"
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
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "MDF_Layer",
              "multiplier": 1
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "value": {
                "displayLines": "(ChallengePeakBattle_0020_ADF_1 * MDF_Layer)"
              }
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  },
                  {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"255563439\">Modifier_ChallengePeakBattle_BaseAbility_0020_02</a>[<span class=\"descriptionNumberColor\">Enrage</span>]",
                    "compareType": "<",
                    "value2": {
                      "displayLines": "ChallengePeakBattle_0020_ADF_2"
                    },
                    "valueType": "Layer"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"255563439\">Modifier_ChallengePeakBattle_BaseAbility_0020_02</a>[<span class=\"descriptionNumberColor\">Enrage</span>]",
                      "valuePerStack": {
                        "ChallengePeakBattle_0020_ADF_1": {
                          "displayLines": "ChallengePeakBattle_0020_ADF_1"
                        },
                        "ChallengePeakBattle_0020_ADF_2": {
                          "displayLines": "ChallengePeakBattle_0020_ADF_2"
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
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1624415680\">Modifier_ChallengePeakBattle_BaseAbility_0020</a>",
      "execute": [
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"255563439\">Modifier_ChallengePeakBattle_BaseAbility_0020_02</a>[<span class=\"descriptionNumberColor\">Enrage</span>]",
                  "valuePerStack": {
                    "ChallengePeakBattle_0020_ADF_1": {
                      "displayLines": "#ADF_1"
                    },
                    "ChallengePeakBattle_0020_ADF_2": {
                      "displayLines": "#ADF_2"
                    }
                  },
                  "addStacksPerTrigger": 0
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Player Team"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-466803248\">Modifier_ChallengePeakBattle_BaseAbility_0020_02_PreShow</a>",
                  "valuePerStack": {
                    "ChallengePeakBattle_0020_ADF_1": {
                      "displayLines": "#ADF_1"
                    },
                    "ChallengePeakBattle_0020_ADF_2": {
                      "displayLines": "#ADF_2"
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