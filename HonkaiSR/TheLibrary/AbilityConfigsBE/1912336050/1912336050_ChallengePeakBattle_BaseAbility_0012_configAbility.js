const configAbility = {
  "fileName": "1912336050_ChallengePeakBattle_BaseAbility_0012",
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
      "modifier": "<a class=\"gModGreen\" id=\"-187022719\">Modifier_ChallengePeakBattle_BaseAbility_0012</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-558919625\">Modifier_ChallengePeakBattle_BaseAbility_0012_03</a>[<span class=\"descriptionNumberColor\">Unending Refinement</span>]",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "Adjust Target Stats",
              "modifiedValuesArray": [
                {
                  "on": "Attacker",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageSUM</span>&nbsp;",
                  "value": "(-ChallengePeakBattle_0012_ADF_3 * MDF_Layer)"
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (ChallengePeakBattle_0012_ADF_1) || Variables[1] (MDF_Layer) || MUL || RETURN",
                "displayLines": "(ChallengePeakBattle_0012_ADF_1 * MDF_Layer)",
                "constants": [],
                "variables": [
                  "ChallengePeakBattle_0012_ADF_1",
                  "MDF_Layer"
                ]
              }
            }
          ]
        }
      ],
      "description": "Each stack reduces DMG received by <span class=\"descriptionNumberColor\">ChallengePeakBattle_0012_ADF_1</span> and CRIT DMG taken by <span class=\"descriptionNumberColor\">ChallengePeakBattle_0012_ADF_3</span>, stackable up to <span class=\"descriptionNumberColor\">ChallengePeakBattle_0012_ADF_2</span> time(s). Stacks are cleared at the start of turn or when entering the Weakness Break state.",
      "type": "Other",
      "statusName": "Unending Refinement",
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-575697244\">Modifier_ChallengePeakBattle_BaseAbility_0012_02</a>",
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
              "modifier": "<a class=\"gModGreen\" id=\"-558919625\">Modifier_ChallengePeakBattle_BaseAbility_0012_03</a>[<span class=\"descriptionNumberColor\">Unending Refinement</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-558919625\">Modifier_ChallengePeakBattle_BaseAbility_0012_03</a>[<span class=\"descriptionNumberColor\">Unending Refinement</span>]",
              "stackLimit": {
                "operator": "Variables[0] (ChallengePeakBattle_0012_ADF_2) || RETURN",
                "displayLines": "ChallengePeakBattle_0012_ADF_2",
                "constants": [],
                "variables": [
                  "ChallengePeakBattle_0012_ADF_2"
                ]
              },
              "valuePerStack": {
                "ChallengePeakBattle_0012_ADF_1": {
                  "operator": "Variables[0] (#ADF_1) || RETURN",
                  "displayLines": "#ADF_1",
                  "constants": [],
                  "variables": [
                    "#ADF_1"
                  ]
                },
                "ChallengePeakBattle_0012_ADF_2": {
                  "operator": "Variables[0] (#ADF_2) || RETURN",
                  "displayLines": "#ADF_2",
                  "constants": [],
                  "variables": [
                    "#ADF_2"
                  ]
                },
                "ChallengePeakBattle_0012_ADF_3": {
                  "operator": "Variables[0] (#ADF_3) || RETURN",
                  "displayLines": "#ADF_3",
                  "constants": [],
                  "variables": [
                    "#ADF_3"
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
              "modifier": "<a class=\"gModGreen\" id=\"-558919625\">Modifier_ChallengePeakBattle_BaseAbility_0012_03</a>[<span class=\"descriptionNumberColor\">Unending Refinement</span>]",
              "stackLimit": {
                "operator": "Variables[0] (ChallengePeakBattle_0012_ADF_2) || RETURN",
                "displayLines": "ChallengePeakBattle_0012_ADF_2",
                "constants": [],
                "variables": [
                  "ChallengePeakBattle_0012_ADF_2"
                ]
              },
              "valuePerStack": {
                "ChallengePeakBattle_0012_ADF_1": {
                  "operator": "Variables[0] (#ADF_1) || RETURN",
                  "displayLines": "#ADF_1",
                  "constants": [],
                  "variables": [
                    "#ADF_1"
                  ]
                },
                "ChallengePeakBattle_0012_ADF_2": {
                  "operator": "Variables[0] (#ADF_2) || RETURN",
                  "displayLines": "#ADF_2",
                  "constants": [],
                  "variables": [
                    "#ADF_2"
                  ]
                },
                "ChallengePeakBattle_0012_ADF_3": {
                  "operator": "Variables[0] (#ADF_3) || RETURN",
                  "displayLines": "#ADF_3",
                  "constants": [],
                  "variables": [
                    "#ADF_3"
                  ]
                }
              },
              "addStacksPerTrigger": 0
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked Completed [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "flagName": "Break",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-558919625\">Modifier_ChallengePeakBattle_BaseAbility_0012_03</a>[<span class=\"descriptionNumberColor\">Unending Refinement</span>]",
                  "valuePerStack": {
                    "ChallengePeakBattle_0012_ADF_1": {
                      "operator": "Variables[0] (#ADF_1) || RETURN",
                      "displayLines": "#ADF_1",
                      "constants": [],
                      "variables": [
                        "#ADF_1"
                      ]
                    },
                    "ChallengePeakBattle_0012_ADF_2": {
                      "operator": "Variables[0] (#ADF_2) || RETURN",
                      "displayLines": "#ADF_2",
                      "constants": [],
                      "variables": [
                        "#ADF_2"
                      ]
                    },
                    "ChallengePeakBattle_0012_ADF_3": {
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
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-558919625\">Modifier_ChallengePeakBattle_BaseAbility_0012_03</a>[<span class=\"descriptionNumberColor\">Unending Refinement</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-558919625\">Modifier_ChallengePeakBattle_BaseAbility_0012_03</a>[<span class=\"descriptionNumberColor\">Unending Refinement</span>]",
              "stackLimit": {
                "operator": "Variables[0] (ChallengePeakBattle_0012_ADF_2) || RETURN",
                "displayLines": "ChallengePeakBattle_0012_ADF_2",
                "constants": [],
                "variables": [
                  "ChallengePeakBattle_0012_ADF_2"
                ]
              },
              "valuePerStack": {
                "ChallengePeakBattle_0012_ADF_1": {
                  "operator": "Variables[0] (#ADF_1) || RETURN",
                  "displayLines": "#ADF_1",
                  "constants": [],
                  "variables": [
                    "#ADF_1"
                  ]
                },
                "ChallengePeakBattle_0012_ADF_2": {
                  "operator": "Variables[0] (#ADF_2) || RETURN",
                  "displayLines": "#ADF_2",
                  "constants": [],
                  "variables": [
                    "#ADF_2"
                  ]
                },
                "ChallengePeakBattle_0012_ADF_3": {
                  "operator": "Variables[0] (#ADF_3) || RETURN",
                  "displayLines": "#ADF_3",
                  "constants": [],
                  "variables": [
                    "#ADF_3"
                  ]
                }
              },
              "addStacksPerTrigger": 0
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-187022719\">Modifier_ChallengePeakBattle_BaseAbility_0012</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-575697244\">Modifier_ChallengePeakBattle_BaseAbility_0012_02</a>",
                  "valuePerStack": {
                    "ChallengePeakBattle_0012_ADF_1": {
                      "operator": "Variables[0] (#ADF_1) || RETURN",
                      "displayLines": "#ADF_1",
                      "constants": [],
                      "variables": [
                        "#ADF_1"
                      ]
                    },
                    "ChallengePeakBattle_0012_ADF_2": {
                      "operator": "Variables[0] (#ADF_2) || RETURN",
                      "displayLines": "#ADF_2",
                      "constants": [],
                      "variables": [
                        "#ADF_2"
                      ]
                    },
                    "ChallengePeakBattle_0012_ADF_3": {
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