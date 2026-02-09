const configAbility = {
  "fileName": "-1097634517_BattleEventAbility_Challenge_Xianzhou_02",
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
      "modifier": "<a class=\"gModGreen\" id=\"401641453\">Modifier_BattleEventAbility_Challenge_Xianzhou_02</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1747419348\">Modifier_BattleEventAbility_Challenge_Xianzhou_02_Sub</a>",
      "execute": [
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "DOT"
                ],
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                      "value": "#BattleEvent_P1_ADF"
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
      "for": "<a class=\"gModGreen\" id=\"mod__401641453\">Modifier_BattleEventAbility_Challenge_Xianzhou_02</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "inherentTarget": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "ability": "BattleEventAbility_Camear_AllDarkTeam",
              "isTrigger": true
            },
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "inherentTarget": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "ability": "BattleEventAbility_Camear_AllDarkTeam_RemoveModifier",
              "isTrigger": true
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 5,
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1935319413\">Standard_DOT_Electric</a>[<span class=\"descriptionNumberColor\">Shock</span>]",
                  "duration": {
                    "operator": "Variables[0] (#BattleEvent_P3_ADF) || RETURN",
                    "displayLines": "#BattleEvent_P3_ADF",
                    "constants": [],
                    "variables": [
                      "#BattleEvent_P3_ADF"
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
                    "displayLines": "#BattleEvent_P2_ADF",
                    "constants": [],
                    "variables": [
                      "#BattleEvent_P2_ADF"
                    ]
                  },
                  "valuePerStack": {
                    "Modifier_Electric_DamagePercentage": {
                      "operator": "Variables[0] (#BattleEvent_P4_ADF) || Constants[0] (1.5) || MUL || RETURN",
                      "displayLines": "(#BattleEvent_P4_ADF * 1.5)",
                      "constants": [
                        1.5
                      ],
                      "variables": [
                        "#BattleEvent_P4_ADF"
                      ]
                    }
                  },
                  "stackFlag": "Level"
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 5,
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-868837614\">Standard_DOT_Poison</a>[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
                  "duration": {
                    "operator": "Variables[0] (#BattleEvent_P3_ADF) || RETURN",
                    "displayLines": "#BattleEvent_P3_ADF",
                    "constants": [],
                    "variables": [
                      "#BattleEvent_P3_ADF"
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
                    "displayLines": "#BattleEvent_P2_ADF",
                    "constants": [],
                    "variables": [
                      "#BattleEvent_P2_ADF"
                    ]
                  },
                  "valuePerStack": {
                    "Modifier_Poison_DamagePercentage": {
                      "operator": "Variables[0] (#BattleEvent_P4_ADF) || Constants[0] (1) || MUL || RETURN",
                      "displayLines": "(#BattleEvent_P4_ADF * 1)",
                      "constants": [
                        1
                      ],
                      "variables": [
                        "#BattleEvent_P4_ADF"
                      ]
                    }
                  },
                  "stackFlag": "Level"
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 5,
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-868837614\">Standard_DOT_Poison</a>[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
                  "duration": {
                    "operator": "Variables[0] (#BattleEvent_P3_ADF) || RETURN",
                    "displayLines": "#BattleEvent_P3_ADF",
                    "constants": [],
                    "variables": [
                      "#BattleEvent_P3_ADF"
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
                    "displayLines": "#BattleEvent_P2_ADF",
                    "constants": [],
                    "variables": [
                      "#BattleEvent_P2_ADF"
                    ]
                  },
                  "valuePerStack": {
                    "Modifier_Poison_DamagePercentage": {
                      "operator": "Variables[0] (#BattleEvent_P4_ADF) || Constants[0] (1) || MUL || RETURN",
                      "displayLines": "(#BattleEvent_P4_ADF * 1)",
                      "constants": [
                        1
                      ],
                      "variables": [
                        "#BattleEvent_P4_ADF"
                      ]
                    }
                  },
                  "stackFlag": "Level"
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 5,
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1990407757\">Standard_DOT_Burn</a>[<span class=\"descriptionNumberColor\">Burn</span>]",
                  "duration": {
                    "operator": "Variables[0] (#BattleEvent_P3_ADF) || RETURN",
                    "displayLines": "#BattleEvent_P3_ADF",
                    "constants": [],
                    "variables": [
                      "#BattleEvent_P3_ADF"
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
                    "displayLines": "#BattleEvent_P2_ADF",
                    "constants": [],
                    "variables": [
                      "#BattleEvent_P2_ADF"
                    ]
                  },
                  "valuePerStack": {
                    "Modifier_Burn_DamagePercentage": {
                      "operator": "Variables[0] (#BattleEvent_P4_ADF) || Constants[0] (1) || MUL || RETURN",
                      "displayLines": "(#BattleEvent_P4_ADF * 1)",
                      "constants": [
                        1
                      ],
                      "variables": [
                        "#BattleEvent_P4_ADF"
                      ]
                    }
                  },
                  "stackFlag": "Level"
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 5,
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"227784370\">Standard_DOT_Tear</a>[<span class=\"descriptionNumberColor\">Bleed</span>]",
                  "duration": {
                    "operator": "Variables[0] (#BattleEvent_P3_ADF) || RETURN",
                    "displayLines": "#BattleEvent_P3_ADF",
                    "constants": [],
                    "variables": [
                      "#BattleEvent_P3_ADF"
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
                    "displayLines": "#BattleEvent_P2_ADF",
                    "constants": [],
                    "variables": [
                      "#BattleEvent_P2_ADF"
                    ]
                  },
                  "valuePerStack": {
                    "Modifier_Tear_DamageRatio": 0.1,
                    "Modifier_Tear_MaxPercentage": {
                      "operator": "Variables[0] (#BattleEvent_P4_ADF) || Constants[0] (2.5) || MUL || RETURN",
                      "displayLines": "(#BattleEvent_P4_ADF * 2.5)",
                      "constants": [
                        2.5
                      ],
                      "variables": [
                        "#BattleEvent_P4_ADF"
                      ]
                    }
                  },
                  "stackFlag": "Level"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "TempHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "TempAttack",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;"
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKFlat</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (TempHP) || Variables[1] (Hardlevel_HP) || SUB || RETURN",
                "displayLines": "(TempHP - Hardlevel_HP)",
                "constants": [],
                "variables": [
                  "TempHP",
                  "Hardlevel_HP"
                ]
              }
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "Hardlevel_StatusResistance",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">EffectRESSUM</span>&nbsp;"
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRate</span>&nbsp;",
              "value": {
                "operator": "Constants[0] (1) || Constants[0] (1) || Variables[0] (Hardlevel_StatusResistance) || Constants[1] (0.1) || ADD || SUB || DIV || Constants[0] (1) || SUB || RETURN",
                "displayLines": "((1 / (1 - (Hardlevel_StatusResistance + 0.1))) - 1)",
                "constants": [
                  1,
                  0.1
                ],
                "variables": [
                  "Hardlevel_StatusResistance"
                ]
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
                  "modifier": "<a class=\"gModGreen\" id=\"1747419348\">Modifier_BattleEventAbility_Challenge_Xianzhou_02_Sub</a>"
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