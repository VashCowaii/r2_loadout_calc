const configAbility = {
  "fileName": "1912336050_ChallengePeakBattle_BaseAbility_0008",
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
      "modifier": "<a class=\"gModGreen\" id=\"-187169814\">Modifier_ChallengePeakBattle_BaseAbility_0008</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1051243622\">Modifier_ChallengePeakBattle_BaseAbility_0008_03</a>[<span class=\"descriptionNumberColor\">Taunting</span>]",
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
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "MDF_Layer",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (ChallengePeakBattle_0008_ADF_1) || RETURN",
                  "displayLines": "ChallengePeakBattle_0008_ADF_1",
                  "constants": [],
                  "variables": [
                    "ChallengePeakBattle_0008_ADF_1"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "set": 0
                }
              ]
            }
          ]
        }
      ],
      "description": "Gain 1 stack when attacked. When stacks reach <span class=\"descriptionNumberColor\">ChallengePeakBattle_0008_ADF_1</span>, take action immediately. Stack count resets at the start of turn.",
      "type": "Other",
      "statusName": "Taunting",
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1958699986\">Modifier_ChallengePeakBattle_BaseAbility_0008_02_PreShow</a>",
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": {
          "name": "Target Name",
          "target": "{{Player's Aim Target List}}"
        },
        "skillType": [
          "Basic ATK",
          "Skill",
          "Ultimate",
          "Memosprite"
        ],
        "conditions": {
          "name": "AND",
          "conditionList": [
            {
              "name": "Compare: Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "value1": "<a class=\"gModGreen\" id=\"-1051243622\">Modifier_ChallengePeakBattle_BaseAbility_0008_03</a>[<span class=\"descriptionNumberColor\">Taunting</span>]",
              "compareType": ">=",
              "value2": {
                "operator": "Variables[0] (ChallengePeakBattle_0008_ADF_1) || Constants[0] (1) || SUB || RETURN",
                "displayLines": "(ChallengePeakBattle_0008_ADF_1 - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "ChallengePeakBattle_0008_ADF_1"
                ]
              },
              "valueType": "Layer"
            },
            {
              "name": "Skill Effect",
              "skillType": [
                "SingleAttack",
                "AoEAttack",
                "Bounce",
                "Blast"
              ],
              "activeSkill": true
            }
          ]
        },
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": "0(Set AV)"
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1034466003\">Modifier_ChallengePeakBattle_BaseAbility_0008_02</a>",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1051243622\">Modifier_ChallengePeakBattle_BaseAbility_0008_03</a>[<span class=\"descriptionNumberColor\">Taunting</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1051243622\">Modifier_ChallengePeakBattle_BaseAbility_0008_03</a>[<span class=\"descriptionNumberColor\">Taunting</span>]",
              "valuePerStack": {
                "ChallengePeakBattle_0008_ADF_1": {
                  "operator": "Variables[0] (#ADF_1) || RETURN",
                  "displayLines": "#ADF_1",
                  "constants": [],
                  "variables": [
                    "#ADF_1"
                  ]
                }
              },
              "addStacksPerTrigger": 0
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
              "modifier": "<a class=\"gModGreen\" id=\"-1051243622\">Modifier_ChallengePeakBattle_BaseAbility_0008_03</a>[<span class=\"descriptionNumberColor\">Taunting</span>]",
              "valuePerStack": {
                "ChallengePeakBattle_0008_ADF_1": {
                  "operator": "Variables[0] (#ADF_1) || RETURN",
                  "displayLines": "#ADF_1",
                  "constants": [],
                  "variables": [
                    "#ADF_1"
                  ]
                }
              },
              "addStacksPerTrigger": 0
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked End [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1051243622\">Modifier_ChallengePeakBattle_BaseAbility_0008_03</a>[<span class=\"descriptionNumberColor\">Taunting</span>]",
              "valuePerStack": {
                "ChallengePeakBattle_0008_ADF_1": {
                  "operator": "Variables[0] (#ADF_1) || RETURN",
                  "displayLines": "#ADF_1",
                  "constants": [],
                  "variables": [
                    "#ADF_1"
                  ]
                }
              }
            }
          ]
        }
      ],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": {
          "name": "Target Name",
          "target": "{{Modifier Holder}}"
        },
        "conditions": {
          "name": "AND",
          "conditionList": [
            {
              "name": "Compare: Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "value1": null,
              "compareType": ">=",
              "value2": {
                "operator": "Variables[0] (ChallengePeakBattle_0008_ADF_1) || Constants[0] (1) || SUB || RETURN",
                "displayLines": "(ChallengePeakBattle_0008_ADF_1 - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "ChallengePeakBattle_0008_ADF_1"
                ]
              },
              "valueType": "Layer"
            },
            {
              "name": "Compare: Target",
              "target": {
                "name": "Target Name",
                "target": "{{Player's Aim Target List}}"
              },
              "target2": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
            }
          ]
        },
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": -1
        }
      },
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-187169814\">Modifier_ChallengePeakBattle_BaseAbility_0008</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1034466003\">Modifier_ChallengePeakBattle_BaseAbility_0008_02</a>",
                  "valuePerStack": {
                    "ChallengePeakBattle_0008_ADF_1": {
                      "operator": "Variables[0] (#ADF_1) || RETURN",
                      "displayLines": "#ADF_1",
                      "constants": [],
                      "variables": [
                        "#ADF_1"
                      ]
                    }
                  }
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
                  "modifier": "<a class=\"gModGreen\" id=\"1958699986\">Modifier_ChallengePeakBattle_BaseAbility_0008_02_PreShow</a>",
                  "valuePerStack": {
                    "ChallengePeakBattle_0008_ADF_1": {
                      "operator": "Variables[0] (#ADF_1) || RETURN",
                      "displayLines": "#ADF_1",
                      "constants": [],
                      "variables": [
                        "#ADF_1"
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