const configAbility = {
  "fileName": "1912336050_ChallengePeakBattle_EnhancedAbility_0025",
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
      "modifier": "<a class=\"gModGreen\" id=\"1867484504\">Modifier_ChallengePeakBattle_EnhancedAbility_0025</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1117622602\">Modifier_ChallengePeakBattle_EnhancedAbility_0025_02_ForShow</a>",
      "stackType": "Replace"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1330967193\">Modifier_ChallengePeakBattle_EnhancedAbility_0025_02</a>",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "ChallengePeakBattle_0025_ADF_3",
              "value": {
                "operator": "Variables[0] (MAX) || Variables[1] (ChallengePeakBattle_0025_ADF_1) || Variables[0] (MAX) || Variables[2] (LightTeamNumCurrent) || Constants[0] (4) || SUB || Constants[1] (0) || PARAM_2 || FUNCTION || Variables[3] (ChallengePeakBattle_0025_ADF_2) || MUL || SUB || Constants[1] (0) || PARAM_2 || FUNCTION || RETURN",
                "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MAX</span>((ChallengePeakBattle_0025_ADF_1 - (&nbsp;<span class=\"descriptionFunctionColor\">MAX</span>((LightTeamNumCurrent - 4), 0) * ChallengePeakBattle_0025_ADF_2)), 0)",
                "constants": [
                  4,
                  0
                ],
                "variables": [
                  "MAX",
                  "ChallengePeakBattle_0025_ADF_1",
                  "LightTeamNumCurrent",
                  "ChallengePeakBattle_0025_ADF_2"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (ChallengePeakBattle_0025_ADF_3) || RETURN",
                "displayLines": "ChallengePeakBattle_0025_ADF_3",
                "constants": [],
                "variables": [
                  "ChallengePeakBattle_0025_ADF_3"
                ]
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1117622602\">Modifier_ChallengePeakBattle_EnhancedAbility_0025_02_ForShow</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "ChallengePeakBattle_0025_ADF_3",
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
                  "modifier": "<a class=\"gModGreen\" id=\"1117622602\">Modifier_ChallengePeakBattle_EnhancedAbility_0025_02_ForShow</a>",
                  "valuePerStack": {
                    "ChallengePeakBattle_0025_ADF_3": {
                      "operator": "Variables[0] (ChallengePeakBattle_0025_ADF_3) || RETURN",
                      "displayLines": "ChallengePeakBattle_0025_ADF_3",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_0025_ADF_3"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1867484504\">Modifier_ChallengePeakBattle_EnhancedAbility_0025</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1636406307\">ChallengePeakBattle_EnhancedAbility_0025_Template</a>"
            }
          ]
        },
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
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
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1636406307\">ChallengePeakBattle_EnhancedAbility_0025_Template</a>"
                }
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
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Player Team"
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1636406307\">ChallengePeakBattle_EnhancedAbility_0025_Template</a>"
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
                "team": "Enemy Team"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1330967193\">Modifier_ChallengePeakBattle_EnhancedAbility_0025_02</a>",
                  "valuePerStack": {
                    "ChallengePeakBattle_0025_ADF_1": {
                      "operator": "Variables[0] (#ADF_1) || RETURN",
                      "displayLines": "#ADF_1",
                      "constants": [],
                      "variables": [
                        "#ADF_1"
                      ]
                    },
                    "ChallengePeakBattle_0025_ADF_2": {
                      "operator": "Variables[0] (#ADF_2) || RETURN",
                      "displayLines": "#ADF_2",
                      "constants": [],
                      "variables": [
                        "#ADF_2"
                      ]
                    },
                    "LightTeamNumCurrent": {
                      "operator": "Variables[0] (LightTeamNumLast) || RETURN",
                      "displayLines": "LightTeamNumLast",
                      "constants": [],
                      "variables": [
                        "LightTeamNumLast"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Departed State: Begin [Anyone]",
          "execute": [
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
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1636406307\">ChallengePeakBattle_EnhancedAbility_0025_Template</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Departed State: End [Anyone]",
          "execute": [
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
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1636406307\">ChallengePeakBattle_EnhancedAbility_0025_Template</a>"
                }
              ]
            }
          ]
        }
      ],
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1636406307\">ChallengePeakBattle_EnhancedAbility_0025_Template</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Player Team All}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": "=",
                "value2": {
                  "operator": "Variables[0] (LightTeamNumLast) || RETURN",
                  "displayLines": "LightTeamNumLast",
                  "constants": [],
                  "variables": [
                    "LightTeamNumLast"
                  ]
                }
              },
              "failed": [
                {
                  "name": "Define Custom Variable with Team Count",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "variableName": "LightTeamNumCurrent",
                  "livingTargets": true
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1330967193\">Modifier_ChallengePeakBattle_EnhancedAbility_0025_02</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1117622602\">Modifier_ChallengePeakBattle_EnhancedAbility_0025_02_ForShow</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1330967193\">Modifier_ChallengePeakBattle_EnhancedAbility_0025_02</a>",
                  "valuePerStack": {
                    "ChallengePeakBattle_0025_ADF_1": {
                      "operator": "Variables[0] (#ADF_1) || RETURN",
                      "displayLines": "#ADF_1",
                      "constants": [],
                      "variables": [
                        "#ADF_1"
                      ]
                    },
                    "ChallengePeakBattle_0025_ADF_2": {
                      "operator": "Variables[0] (#ADF_2) || RETURN",
                      "displayLines": "#ADF_2",
                      "constants": [],
                      "variables": [
                        "#ADF_2"
                      ]
                    },
                    "LightTeamNumCurrent": {
                      "operator": "Variables[0] (LightTeamNumCurrent) || RETURN",
                      "displayLines": "LightTeamNumCurrent",
                      "constants": [],
                      "variables": [
                        "LightTeamNumCurrent"
                      ]
                    }
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "LightTeamNumLast",
                  "value": {
                    "operator": "Variables[0] (LightTeamNumCurrent) || RETURN",
                    "displayLines": "LightTeamNumCurrent",
                    "constants": [],
                    "variables": [
                      "LightTeamNumCurrent"
                    ]
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