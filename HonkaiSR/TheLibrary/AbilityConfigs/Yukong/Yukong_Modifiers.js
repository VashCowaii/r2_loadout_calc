const configAbility = {
  "fileName": "Yukong_Modifiers",
  "abilityType": "Char. Modifiers",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__64466487\">Yukong_FlowerListen</a>",
      "execute": [
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectables}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1617821492\">Yukong_Flower</a>"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__781697929\">Yukong_Eidolon4_Flower_Bonus</a>[<span class=\"descriptionNumberColor\">Zephyrean Echoes</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AddedRatio) || RETURN",
                "displayLines": "MDF_AddedRatio",
                "constants": [],
                "variables": [
                  "MDF_AddedRatio"
                ]
              }
            }
          ]
        }
      ],
      "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_AddedRatio</span>.",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "Zephyrean Echoes"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1203634791\">Yukong_Passive_BonusCD</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2029608096\">Yukong_Passive_Bonus</a>[<span class=\"descriptionNumberColor\">Seven Layers, One Arrow</span>]",
              "valuePerStack": {
                "MDF_AddDamagePercentage": {
                  "operator": "Variables[0] (MDF_AddDamagePercentage) || RETURN",
                  "displayLines": "MDF_AddDamagePercentage",
                  "constants": [],
                  "variables": [
                    "MDF_AddDamagePercentage"
                  ]
                },
                "MDF_StanceBreakAddedRatio": {
                  "operator": "Variables[0] (MDF_StanceBreakAddedRatio) || RETURN",
                  "displayLines": "MDF_StanceBreakAddedRatio",
                  "constants": [],
                  "variables": [
                    "MDF_StanceBreakAddedRatio"
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
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2029608096\">Yukong_Passive_Bonus</a>[<span class=\"descriptionNumberColor\">Seven Layers, One Arrow</span>]"
            }
          ]
        }
      ],
      "stackData": [
        "MDF_AddDamagePercentage",
        "MDF_StanceBreakAddedRatio"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2029608096\">Yukong_Passive_Bonus</a>[<span class=\"descriptionNumberColor\">Seven Layers, One Arrow</span>]",
      "execute": [
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectables}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1617821492\">Yukong_Flower</a>"
            }
          ]
        }
      ],
      "stackData": [
        "MDF_AddDamagePercentage",
        "MDF_StanceBreakAddedRatio"
      ],
      "latentQueue": [],
      "description": "Basic ATK deals additional Imaginary DMG equal to <span class=\"descriptionNumberColor\">MDF_AddDamagePercentage</span> of Yukong's ATK, and increases Toughness Reduction by <span class=\"descriptionNumberColor\">MDF_StanceBreakAddedRatio</span>.",
      "type": "Buff",
      "statusName": "Seven Layers, One Arrow"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1932378528\">Yukong_Flower_ActionTurn</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1097783562\">Yukong_Flower_ATK_Crit</a>[<span class=\"descriptionNumberColor\">Roaring Bowstrings</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"432670237\">Yukong_Flower_ATK</a>[<span class=\"descriptionNumberColor\">Roaring Bowstrings</span>]"
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_RealAttack) || RETURN",
                "displayLines": "MDF_RealAttack",
                "constants": [],
                "variables": [
                  "MDF_RealAttack"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_CritChanceUp) || RETURN",
                "displayLines": "MDF_CritChanceUp",
                "constants": [],
                "variables": [
                  "MDF_CritChanceUp"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_CritDamageUpRatio) || RETURN",
                "displayLines": "MDF_CritDamageUpRatio",
                "constants": [],
                "variables": [
                  "MDF_CritDamageUpRatio"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_RealAttack",
        "MDF_CritChanceUp",
        "MDF_CritDamageUpRatio"
      ],
      "latentQueue": [],
      "description": "Increases ATK by <span class=\"descriptionNumberColor\">MDF_RealAttack</span>, CRIT Rate by <span class=\"descriptionNumberColor\">MDF_CritChanceUp</span>, and CRIT DMG by <span class=\"descriptionNumberColor\">MDF_CritDamageUpRatio</span>.",
      "type": "Buff",
      "effectName": "ATK, CRIT Rate, and CRIT DMG Boost",
      "statusName": "Roaring Bowstrings"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__432670237\">Yukong_Flower_ATK</a>[<span class=\"descriptionNumberColor\">Roaring Bowstrings</span>]",
      "stackType": "ReplaceByCaster",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_RealAttack) || RETURN",
                "displayLines": "MDF_RealAttack",
                "constants": [],
                "variables": [
                  "MDF_RealAttack"
                ]
              }
            }
          ]
        }
      ],
      "description": "ATK +<span class=\"descriptionNumberColor\">MDF_RealAttack</span>.",
      "type": "Buff",
      "effectName": "ATK Boost",
      "statusName": "Roaring Bowstrings"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1617821492\">Yukong_Flower</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 4
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"781697929\">Yukong_Eidolon4_Flower_Bonus</a>[<span class=\"descriptionNumberColor\">Zephyrean Echoes</span>]",
                  "valuePerStack": {
                    "MDF_AddedRatio": {
                      "operator": "Variables[0] (MDF_Rank04AddedRatio) || RETURN",
                      "displayLines": "MDF_Rank04AddedRatio",
                      "constants": [],
                      "variables": [
                        "MDF_Rank04AddedRatio"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "MDF_FromUltraMark",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"432670237\">Yukong_Flower_ATK</a>[<span class=\"descriptionNumberColor\">Roaring Bowstrings</span>]",
                  "valuePerStack": {
                    "MDF_RealAttack": {
                      "operator": "Variables[0] (MDF_AttackAddedRatio) || RETURN",
                      "displayLines": "MDF_AttackAddedRatio",
                      "constants": [],
                      "variables": [
                        "MDF_AttackAddedRatio"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"432670237\">Yukong_Flower_ATK</a>[<span class=\"descriptionNumberColor\">Roaring Bowstrings</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1097783562\">Yukong_Flower_ATK_Crit</a>[<span class=\"descriptionNumberColor\">Roaring Bowstrings</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"781697929\">Yukong_Eidolon4_Flower_Bonus</a>[<span class=\"descriptionNumberColor\">Zephyrean Echoes</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1932378528\">Yukong_Flower_ActionTurn</a>"
            }
          ]
        },
        {
          "eventTrigger": "Turn [Pre-action Phase]",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1932378528\">Yukong_Flower_ActionTurn</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Turn End [Anyone]",
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
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1932378528\">Yukong_Flower_ActionTurn</a>"
                  },
                  "passed": [
                    {
                      "name": "Trigger Ability",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "ability": "Yukong_Ability02_CountDown"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1932378528\">Yukong_Flower_ActionTurn</a>"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
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
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1103490299\">Yukong_Ability02_FlowerFlag</a>"
                  },
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1932378528\">Yukong_Flower_ActionTurn</a>"
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Current Turn Is",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_FromUltraMark",
                    "compareType": "=",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1932378528\">Yukong_Flower_ActionTurn</a>"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_FromUltraMark",
                  "value": 1
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
                "name": "Trace Activated",
                "conditionList": "Majestas"
              },
              "passed": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "operator": "Variables[0] (MDF_PointB3Amount) || RETURN",
                    "displayLines": "MDF_PointB3Amount",
                    "constants": [],
                    "variables": [
                      "MDF_PointB3Amount"
                    ]
                  },
                  "isFixed": "* ERR"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_AttackAddedRatio",
        "MDF_Rank04AddedRatio",
        "MDF_PointB3Amount",
        "MDF_FromUltraMark"
      ],
      "latentQueue": []
    }
  ],
  "references": []
}