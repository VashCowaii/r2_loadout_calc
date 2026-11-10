const configAbility = {
  "fileName": "1912336050_ChallengePeakBattle_BaseAbility_0025",
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
      "modifier": "<a class=\"gModGreen\" id=\"1708303775\">Modifier_ChallengePeakBattle_BaseAbility_0025</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1970687453\">Modifier_ChallengePeakBattle_BaseAbility_0025_02_ForShow</a>[<span class=\"descriptionNumberColor\">Joint Forces</span>]",
      "stackType": "Replace",
      "description": "DMG taken decreases by <span class=\"descriptionNumberColor\">ChallengePeakBattle_0025_ADF_3</span>.",
      "type": "Other",
      "statusName": "Joint Forces"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1148002490\">Modifier_ChallengePeakBattle_BaseAbility_0025_02</a>",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MAX</span>((ChallengePeakBattle_0025_ADF_1 - (&nbsp;<span class=\"descriptionFunctionColor\">MAX</span>((LightTeamNumCurrent - 4), 0) * ChallengePeakBattle_0025_ADF_2)), 0)"
              },
              "variableName": "ChallengePeakBattle_0025_ADF_3"
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
              "statValue": {
                "displayLines": "ChallengePeakBattle_0025_ADF_3"
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1970687453\">Modifier_ChallengePeakBattle_BaseAbility_0025_02_ForShow</a>[<span class=\"descriptionNumberColor\">Joint Forces</span>]"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1970687453\">Modifier_ChallengePeakBattle_BaseAbility_0025_02_ForShow</a>[<span class=\"descriptionNumberColor\">Joint Forces</span>]",
                  "valuePerStack": {
                    "ChallengePeakBattle_0025_ADF_3": {
                      "displayLines": "ChallengePeakBattle_0025_ADF_3"
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
      "for": "<a class=\"gModGreen\" id=\"mod__1708303775\">Modifier_ChallengePeakBattle_BaseAbility_0025</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-955967502\">ChallengePeakBattle_BaseAbility_0025_Template</a>"
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
                  "functionName": "<a class=\"gTempYellow\" id=\"-955967502\">ChallengePeakBattle_BaseAbility_0025_Template</a>"
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
                  "functionName": "<a class=\"gTempYellow\" id=\"-955967502\">ChallengePeakBattle_BaseAbility_0025_Template</a>"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1148002490\">Modifier_ChallengePeakBattle_BaseAbility_0025_02</a>",
                  "valuePerStack": {
                    "ChallengePeakBattle_0025_ADF_1": {
                      "displayLines": "#ADF_1"
                    },
                    "ChallengePeakBattle_0025_ADF_2": {
                      "displayLines": "#ADF_2"
                    },
                    "LightTeamNumCurrent": {
                      "displayLines": "LightTeamNumLast"
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
                  "functionName": "<a class=\"gTempYellow\" id=\"-955967502\">ChallengePeakBattle_BaseAbility_0025_Template</a>"
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
                  "functionName": "<a class=\"gTempYellow\" id=\"-955967502\">ChallengePeakBattle_BaseAbility_0025_Template</a>"
                }
              ]
            }
          ]
        }
      ],
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-955967502\">ChallengePeakBattle_BaseAbility_0025_Template</a>",
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
                  "displayLines": "LightTeamNumLast"
                }
              },
              "failed": [
                {
                  "name": "Define Custom Variable with Team Count",
                  "variableName": "LightTeamNumCurrent",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "living": true
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1148002490\">Modifier_ChallengePeakBattle_BaseAbility_0025_02</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1970687453\">Modifier_ChallengePeakBattle_BaseAbility_0025_02_ForShow</a>[<span class=\"descriptionNumberColor\">Joint Forces</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1148002490\">Modifier_ChallengePeakBattle_BaseAbility_0025_02</a>",
                  "valuePerStack": {
                    "ChallengePeakBattle_0025_ADF_1": {
                      "displayLines": "#ADF_1"
                    },
                    "ChallengePeakBattle_0025_ADF_2": {
                      "displayLines": "#ADF_2"
                    },
                    "LightTeamNumCurrent": {
                      "displayLines": "LightTeamNumCurrent"
                    }
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "LightTeamNumCurrent"
                  },
                  "variableName": "LightTeamNumLast"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}