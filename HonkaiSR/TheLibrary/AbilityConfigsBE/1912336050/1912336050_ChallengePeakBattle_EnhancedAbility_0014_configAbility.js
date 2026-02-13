const configAbility = {
  "fileName": "1912336050_ChallengePeakBattle_EnhancedAbility_0014",
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
      "modifier": "<a class=\"gModGreen\" id=\"1581823696\">Modifier_ChallengePeakBattle_EnhancedAbility_0014</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1953155713\">Modifier_ChallengePeakBattle_EnhancedAbility_0014_02</a>[<span class=\"descriptionNumberColor\">Confinement+</span>]",
      "stackType": "Replace",
      "execute": [
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">Weaken%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (ChallengePeakBattle_0014_ADF_2) || Variables[1] (MDF_Layer) || MUL || RETURN",
                "displayLines": "(ChallengePeakBattle_0014_ADF_2 * MDF_Layer)",
                "constants": [],
                "variables": [
                  "ChallengePeakBattle_0014_ADF_2",
                  "MDF_Layer"
                ]
              }
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
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                "Modifier Deletes Itself"
              ]
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
                  "valueType": "Layer",
                  "variableName": "MDF_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1953155713\">Modifier_ChallengePeakBattle_EnhancedAbility_0014_02</a>[<span class=\"descriptionNumberColor\">Confinement+</span>]",
                  "valuePerStack": {
                    "ChallengePeakBattle_0014_ADF_1": {
                      "operator": "Variables[0] (ChallengePeakBattle_0014_ADF_1) || RETURN",
                      "displayLines": "ChallengePeakBattle_0014_ADF_1",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_0014_ADF_1"
                      ]
                    },
                    "ChallengePeakBattle_0014_ADF_2": {
                      "operator": "Variables[0] (ChallengePeakBattle_0014_ADF_2) || RETURN",
                      "displayLines": "ChallengePeakBattle_0014_ADF_2",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_0014_ADF_2"
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (MDF_Layer) || RETURN",
                    "displayLines": "MDF_Layer",
                    "constants": [],
                    "variables": [
                      "MDF_Layer"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_Layer",
                    "compareType": ">=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1953155713\">Modifier_ChallengePeakBattle_EnhancedAbility_0014_02</a>[<span class=\"descriptionNumberColor\">Confinement+</span>]",
                  "valuePerStack": {
                    "ChallengePeakBattle_0014_ADF_1": {
                      "operator": "Variables[0] (ChallengePeakBattle_0014_ADF_1) || RETURN",
                      "displayLines": "ChallengePeakBattle_0014_ADF_1",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_0014_ADF_1"
                      ]
                    },
                    "ChallengePeakBattle_0014_ADF_2": {
                      "operator": "Variables[0] (ChallengePeakBattle_0014_ADF_2) || RETURN",
                      "displayLines": "ChallengePeakBattle_0014_ADF_2",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_0014_ADF_2"
                      ]
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}.[[getMemosprite]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1953155713\">Modifier_ChallengePeakBattle_EnhancedAbility_0014_02</a>[<span class=\"descriptionNumberColor\">Confinement+</span>]",
                  "valuePerStack": {
                    "ChallengePeakBattle_0014_ADF_1": {
                      "operator": "Variables[0] (ChallengePeakBattle_0014_ADF_1) || RETURN",
                      "displayLines": "ChallengePeakBattle_0014_ADF_1",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_0014_ADF_1"
                      ]
                    },
                    "ChallengePeakBattle_0014_ADF_2": {
                      "operator": "Variables[0] (ChallengePeakBattle_0014_ADF_2) || RETURN",
                      "displayLines": "ChallengePeakBattle_0014_ADF_2",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_0014_ADF_2"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ],
      "description": "Each stack decreases DMG dealt by <span class=\"descriptionNumberColor\">ChallengePeakBattle_0014_ADF_2</span>, and 1 stack is removed after each Ultimate used.",
      "type": "Other",
      "statusName": "Confinement+",
      "addStacksPerTrigger": -1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1581823696\">Modifier_ChallengePeakBattle_EnhancedAbility_0014</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1953155713\">Modifier_ChallengePeakBattle_EnhancedAbility_0014_02</a>[<span class=\"descriptionNumberColor\">Confinement+</span>]",
                  "valuePerStack": {
                    "ChallengePeakBattle_0014_ADF_1": {
                      "operator": "Variables[0] (#ADF_1) || RETURN",
                      "displayLines": "#ADF_1",
                      "constants": [],
                      "variables": [
                        "#ADF_1"
                      ]
                    },
                    "ChallengePeakBattle_0014_ADF_2": {
                      "operator": "Variables[0] (#ADF_2) || RETURN",
                      "displayLines": "#ADF_2",
                      "constants": [],
                      "variables": [
                        "#ADF_2"
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (#ADF_1) || RETURN",
                    "displayLines": "#ADF_1",
                    "constants": [],
                    "variables": [
                      "#ADF_1"
                    ]
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