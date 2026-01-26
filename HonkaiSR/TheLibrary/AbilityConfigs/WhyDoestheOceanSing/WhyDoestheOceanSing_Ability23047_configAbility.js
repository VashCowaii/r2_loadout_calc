const configAbility = {
  "fileName": "WhyDoestheOceanSing_Ability23047",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "LC_23047_Main"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "LC_23047_Sub3[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
      "stackType": "Replace",
      "modifierFlags": [
        "STAT_SpeedUp"
      ],
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_SpeedUpRatio) || RETURN",
                "displayLines": "MDF_SpeedUpRatio",
                "constants": [],
                "variables": [
                  "MDF_SpeedUpRatio"
                ]
              }
            }
          ]
        }
      ],
      "description": "Increases SPD by <span class=\"descriptionNumberColor\">MDF_SpeedUpRatio</span>.",
      "type": "Buff",
      "effectName": "SPD Boost",
      "statusName": "SPD Boost"
    },
    {
      "name": "Modifier Construction",
      "for": "LC_23047_Sub2[<span class=\"descriptionNumberColor\">Enthrallment</span>]",
      "stackType": "Replace",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
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
                      "value": "MDF_TotalDotDamageAddRatio"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "TaskList_LC_23047_CheckCasterDebuffCount"
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked Start [Owner]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "conditions": {
                "name": "Is Part Of",
                "of": {
                  "name": "Target Name",
                  "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "mustBeAlive2": true
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "LC_23047_Sub3[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
                  "duration": {
                    "operator": "Variables[0] (MDF_SpeedUpLifeTimeTemp) || RETURN",
                    "displayLines": "MDF_SpeedUpLifeTimeTemp",
                    "constants": [],
                    "variables": [
                      "MDF_SpeedUpLifeTimeTemp"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_SpeedUpRatio": {
                      "operator": "Variables[0] (MDF_SpeedUpRatioTemp) || RETURN",
                      "displayLines": "MDF_SpeedUpRatioTemp",
                      "constants": [],
                      "variables": [
                        "MDF_SpeedUpRatioTemp"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Modifier is Added [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Type Was",
                "statusType": "Debuff"
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "TaskList_LC_23047_CheckCasterDebuffCount"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Losing Modifier [Owner]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "TaskList_LC_23047_CheckCasterDebuffCount"
            }
          ]
        }
      ],
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "TaskList_LC_23047_CheckCasterDebuffCount",
          "parse": [
            {
              "name": "Define Custom Variable with Status Counter",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_CurrentDeBuffCount",
              "casterFilter": {
                "name": "Target Name",
                "target": "{{Caster}}"
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
                "value1": "MDF_CurrentDeBuffCount",
                "compareType": ">",
                "value2": {
                  "operator": "Variables[0] (MDF_DeBonusMaxCount) || RETURN",
                  "displayLines": "MDF_DeBonusMaxCount",
                  "constants": [],
                  "variables": [
                    "MDF_DeBonusMaxCount"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_CurrentDeBuffCount",
                  "value": {
                    "operator": "Variables[0] (MDF_DeBonusMaxCount) || RETURN",
                    "displayLines": "MDF_DeBonusMaxCount",
                    "constants": [],
                    "variables": [
                      "MDF_DeBonusMaxCount"
                    ]
                  }
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_TotalDotDamageAddRatio",
              "value": {
                "operator": "Variables[0] (MDF_DotDamageAddRatio) || Variables[1] (MDF_CurrentDeBuffCount) || MUL || RETURN",
                "displayLines": "(MDF_DotDamageAddRatio * MDF_CurrentDeBuffCount)",
                "constants": [],
                "variables": [
                  "MDF_DotDamageAddRatio",
                  "MDF_CurrentDeBuffCount"
                ]
              }
            }
          ]
        }
      ],
      "description": "Increases DoT received by <span class=\"descriptionNumberColor\">MDF_TotalDotDamageAddRatio</span>.",
      "type": "Debuff",
      "effectName": "Enthrallment",
      "statusName": "Enthrallment"
    },
    {
      "name": "Modifier Construction",
      "for": "LC_23047_Main",
      "execute": [
        {
          "eventTrigger": "When Stacking Modifier Instance [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Modifier Type Was",
                    "statusType": "Debuff"
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team"
                  },
                  {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Sequence",
                      "Sequence": [
                        {
                          "name": "Target Name",
                          "target": "{{Parameter Target 2}}"
                        },
                        "Get Source Owner"
                      ]
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
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
                  "modifier": "LC_23047_Sub2[<span class=\"descriptionNumberColor\">Enthrallment</span>]",
                  "duration": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] (0.8) || RETURN",
                    "displayLines": "0.8",
                    "constants": [],
                    "variables": [
                      0.8
                    ]
                  },
                  "valuePerStack": {
                    "MDF_DotDamageAddRatio": {
                      "operator": "Variables[0] (0.05) || RETURN",
                      "displayLines": "0.05",
                      "constants": [],
                      "variables": [
                        0.05
                      ]
                    },
                    "MDF_DeBonusMaxCount": {
                      "operator": "Variables[0] (6) || RETURN",
                      "displayLines": "6",
                      "constants": [],
                      "variables": [
                        6
                      ]
                    },
                    "MDF_SpeedUpRatioTemp": {
                      "operator": "Variables[0] (0.1) || RETURN",
                      "displayLines": "0.1",
                      "constants": [],
                      "variables": [
                        0.1
                      ]
                    },
                    "MDF_SpeedUpLifeTimeTemp": {
                      "operator": "Variables[0] (3) || RETURN",
                      "displayLines": "3",
                      "constants": [],
                      "variables": [
                        3
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
  ],
  "isLightcone": true,
  "desc": "Increases the wearer's Effect Hit Rate by #1[i]%. When an enemy target gets inflicted with a debuff by the wearer, there is a #2[i]% base chance for them to enter \"Enthrallment,\" lasting for #3[i] turn(s). Effects of the same type cannot stack. While the target is in \"Enthrallment,\" for every 1 debuff applied by the wearer on the target, increases the target's received DoT by #4[f1]%, stacking up to #5[i] time(s). When the target gets attacked by an ally, increases the attacker's SPD by #6[f1]% for #7[i] turn(s). When the wearer gets knocked down, removes all \"Enthrallment.\"",
  "params": [
    [
      0.4,
      0.8,
      3,
      0.05,
      6,
      0.1,
      3
    ],
    [
      0.45,
      0.8,
      3,
      0.0625,
      6,
      0.125,
      3
    ],
    [
      0.5,
      0.8,
      3,
      0.075,
      6,
      0.15,
      3
    ],
    [
      0.55,
      0.8,
      3,
      0.0875,
      6,
      0.175,
      3
    ],
    [
      0.6,
      0.8,
      3,
      0.1,
      6,
      0.2,
      3
    ]
  ]
}