const compositeAbilityObject = {
  "fullCharacterName": -1857366819,
  "trimCharacterName": -1857366819,
  "abilityList": [
    "-1857366819_TrialPlayer_1101212_Jingliu_Ability",
    "-1857366819_TrialPlayer_1101208_FuXuan_Ability",
    "-1857366819_TrialPlayer_1021111_Luka_TalkAbility_Battle2_Final",
    "-1857366819_TrialPlayer_1021111_Luka_TalkAbility_Battle2_Round2",
    "-1857366819_TrialPlayer_1021111_Luka_TalkAbility_Battle2_Round1",
    "-1857366819_TrialPlayer_1021111_Luka_TalkAbility_Battle2_AfterAttack",
    "-1857366819_TrialPlayer_1021111_Luka_TalkAbility_Battle0",
    "-1857366819_TrialPlayer_1021111_Luka_Ability",
    "-1857366819_TrialPlayer_1111204_JingYuan_Ability",
    "-1857366819_TrialPlayer_1101213_DanHengIL_Ability_BattleEnd",
    "-1857366819_TrialPlayer_1101213_DanHengIL_Ability",
    "-1857366819_TrialPlayer_1021213_DanHengIL_Ability",
    "-1857366819_TrialPlayer_1031213_DanHengIL_Ability",
    "-1857366819_TrialPlayer_1021212_Jingliu_Ability",
    "-1857366819_TrialPlayer_1021209_Yanqing_Ability",
    "-1857366819_TrialPlayer_AutoWithoutUltra_Ability",
    "-1857366819_TrialPlayer_AutoWithUltra_Ability",
    "-1857366819_TrialPlayer_AggroUP_Ability",
    "-1857366819_TrialPlayer_NoBP_Ability",
    "-1857366819_TrialPlayer_CTRLResist",
    "-1857366819_TrialPlayer_SpeedUp_Ability",
    "-1857366819_Modifiers"
  ],
  "abilityObject": {
    "-1857366819_TrialPlayer_1101212_Jingliu_Ability": {
      "fileName": "-1857366819_TrialPlayer_1101212_Jingliu_Ability",
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
          "modifier": "<a class=\"gModGreen\" id=\"-800068298\">MTrialPlayer_1101212_Jingliu_Ability</a>",
          "valuePerStack": {
            "MDF_ActionTime": 0
          }
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-800068298\">MTrialPlayer_1101212_Jingliu_Ability</a>",
          "execute": [
            {
              "eventTrigger": "Action End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_ActionTime",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "ContextModifier"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_ActionTime",
                      "value": 1
                    }
                  ],
                  "failed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_ActionTime"
          ],
          "latentQueue": []
        }
      ]
    },
    "-1857366819_TrialPlayer_1101208_FuXuan_Ability": {
      "fileName": "-1857366819_TrialPlayer_1101208_FuXuan_Ability",
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
          "modifier": "<a class=\"gModGreen\" id=\"1185796836\">MTrialPlayer_1101208_FuXuan_Ability</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1185796836\">MTrialPlayer_1101208_FuXuan_Ability</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": 120,
                  "isFixed": "(Fixed)"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "-1857366819_TrialPlayer_1021111_Luka_TalkAbility_Battle2_Final": {
      "fileName": "-1857366819_TrialPlayer_1021111_Luka_TalkAbility_Battle2_Final",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"535355805\">TrialPlayer_101111_Luka_LimboAddAttack2</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-58718825\">TrialPlayer_101111_Luka_Final_SpecialWin</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1162946172\">Standard_CTRL_Stun</a>[<span class=\"descriptionNumberColor\">Stunned</span>]",
          "duration": 2
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "set": 100
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-58718825\">TrialPlayer_101111_Luka_Final_SpecialWin</a>",
          "execute": [
            {
              "eventTrigger": "Waiting for Healing in Limbo",
              "execute": [
                {
                  "name": "Set HP Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "setValue": 1
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked End [Owner]"
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "-1857366819_TrialPlayer_1021111_Luka_TalkAbility_Battle2_Round2": {
      "fileName": "-1857366819_TrialPlayer_1021111_Luka_TalkAbility_Battle2_Round2",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "variableName": "MDF_LukaMaxHP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
        },
        {
          "name": "Set HP Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "setValue": {
            "operator": "Variables[0] (MDF_LukaMaxHP) || Constants[0] (0.5) || MUL || RETURN",
            "displayLines": "(MDF_LukaMaxHP * 0.5)",
            "constants": [
              0.5
            ],
            "variables": [
              "MDF_LukaMaxHP"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"535355805\">TrialPlayer_101111_Luka_LimboAddAttack2</a>",
          "valuePerStack": {
            "MDF_AttackRatio": 5
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1091533610\">TrialPlayer_101111_Luka_Talk_Modifier_ForLuka</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__887420892\">TrialPlayer_101111_Luka_AddATK_ForMonster</a>",
          "modifierFlags": [
            "Stealth",
            "BlockDamage"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">StageFinalDMG</span>&nbsp;",
                  "value": 3
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__535355805\">TrialPlayer_101111_Luka_LimboAddAttack2</a>",
          "execute": [
            {
              "eventTrigger": "Deal Damage End [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "CurrentHP%",
                        "compareType": "<=",
                        "value2": 0.41
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 101401010,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Svarog"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Ability",
                      "abilityName": "TrialPlayer_1021111_Luka_TalkAbility_Battle2_Final"
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "TrialPlayer_1021111_Luka_TalkAbility_Battle2_Final",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "priorityTag": "AvatarBuffSelf",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"887420892\">TrialPlayer_101111_Luka_AddATK_ForMonster</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">StageFinalDMG</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AttackRatio) || RETURN",
                    "displayLines": "MDF_AttackRatio",
                    "constants": [],
                    "variables": [
                      "MDF_AttackRatio"
                    ]
                  }
                },
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": 120,
                  "isFixed": "(Fixed)"
                },
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
            },
            {
              "eventTrigger": "Waiting for Healing in Limbo",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_TargetMaxHP2",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Set HP Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "setValue": {
                    "operator": "Variables[0] (MDF_TargetMaxHP2) || Constants[0] (0.3) || MUL || RETURN",
                    "displayLines": "(MDF_TargetMaxHP2 * 0.3)",
                    "constants": [
                      0.3
                    ],
                    "variables": [
                      "MDF_TargetMaxHP2"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_AttackRatio"
          ],
          "latentQueue": []
        }
      ]
    },
    "-1857366819_TrialPlayer_1021111_Luka_TalkAbility_Battle2_Round1": {
      "fileName": "-1857366819_TrialPlayer_1021111_Luka_TalkAbility_Battle2_Round1",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "variableName": "MDF_LukaMaxHP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
        },
        {
          "name": "Set HP Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "setValue": {
            "operator": "Variables[0] (MDF_LukaMaxHP) || Constants[0] (0.7) || MUL || RETURN",
            "displayLines": "(MDF_LukaMaxHP * 0.7)",
            "constants": [
              0.7
            ],
            "variables": [
              "MDF_LukaMaxHP"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"714755645\">TrialPlayer_101111_Luka_LimboAddAttack</a>",
          "valuePerStack": {
            "MDF_AttackRatio": 1
          }
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__714755645\">TrialPlayer_101111_Luka_LimboAddAttack</a>",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">StageFinalDMG</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AttackRatio) || RETURN",
                    "displayLines": "MDF_AttackRatio",
                    "constants": [],
                    "variables": [
                      "MDF_AttackRatio"
                    ]
                  }
                },
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
          ],
          "stackData": [
            "MDF_AttackRatio"
          ],
          "latentQueue": []
        }
      ]
    },
    "-1857366819_TrialPlayer_1021111_Luka_TalkAbility_Battle2_AfterAttack": {
      "fileName": "-1857366819_TrialPlayer_1021111_Luka_TalkAbility_Battle2_AfterAttack",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "-1857366819_TrialPlayer_1021111_Luka_TalkAbility_Battle0": {
      "fileName": "-1857366819_TrialPlayer_1021111_Luka_TalkAbility_Battle0",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"575702222\">TrialPlayer_101111_Luka_Talk_Modifier_ForMonster_Sub2</a>"
        }
      ],
      "references": []
    },
    "-1857366819_TrialPlayer_1021111_Luka_Ability": {
      "fileName": "-1857366819_TrialPlayer_1021111_Luka_Ability",
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
          "modifier": "<a class=\"gModGreen\" id=\"-590974367\">TrialPlayer_101111_Luka_Talk_Modifier_ForMonster</a>",
          "immediateEffect": true
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__766042391\">TrialPlayer_101111_Luka_SetHP_ForMonster</a>",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": 0.3
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_TargetMaxHP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                    },
                    {
                      "name": "Set HP Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "setValue": {
                        "operator": "Variables[0] (MDF_TargetMaxHP) || Constants[0] (0.3) || MUL || RETURN",
                        "displayLines": "(MDF_TargetMaxHP * 0.3)",
                        "constants": [
                          0.3
                        ],
                        "variables": [
                          "MDF_TargetMaxHP"
                        ]
                      }
                    },
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">StageFinalDMG</span>&nbsp;",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 0.0009999999
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1576481953\">TrialPlayer_101111_Luka_Talk_Modifier_ForLuka_Trigger0</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1091533610\">TrialPlayer_101111_Luka_Talk_Modifier_ForLuka</a>",
          "execute": [
            {
              "eventTrigger": "Waiting for Healing in Limbo",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_LimboCount",
                  "value": {
                    "operator": "Variables[0] (MDF_LimboCount) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(MDF_LimboCount + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "MDF_LimboCount"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_LimboCount",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextModifier"
                  },
                  "passed": [
                    {
                      "name": "Add Ability",
                      "abilityName": "TrialPlayer_1021111_Luka_TalkAbility_Battle2_Round1"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Enemy ID",
                        "ID": 101401010,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Svarog"
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"2115356635\">Monster_W1_SvarogPart_CD</a>"
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "DecisionFlag",
                          "value": 3
                        }
                      ]
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "TrialPlayer_1021111_Luka_TalkAbility_Battle2_Round1",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "priorityTag": "AvatarReviveSelf",
                      "ownerState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_LimboCount",
                    "compareType": ">=",
                    "value2": 2,
                    "contextScope": "ContextModifier"
                  },
                  "passed": [
                    {
                      "name": "Add Ability",
                      "abilityName": "TrialPlayer_1021111_Luka_TalkAbility_Battle2_Round2"
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "TrialPlayer_1021111_Luka_TalkAbility_Battle2_Round2",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "priorityTag": "AvatarReviveSelf",
                      "ownerState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1576481953\">TrialPlayer_101111_Luka_Talk_Modifier_ForLuka_Trigger0</a>"
                  },
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1576481953\">TrialPlayer_101111_Luka_Talk_Modifier_ForLuka_Trigger0</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__575702222\">TrialPlayer_101111_Luka_Talk_Modifier_ForMonster_Sub2</a>",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "CurrentHP%",
                        "compareType": "<=",
                        "value2": 0.7
                      }
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Ability",
                  "abilityName": "TrialPlayer_1021111_Luka_TalkAbility_Battle0"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1114693496\">TrialPlayer_101111_Luka_Talk_Modifier_ForMonster_Sub</a>",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "CurrentHP%",
                        "compareType": "<=",
                        "value2": 0.4
                      }
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-590974367\">TrialPlayer_101111_Luka_Talk_Modifier_ForMonster</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 8003020,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Blaze Out of Space"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1114693496\">TrialPlayer_101111_Luka_Talk_Modifier_ForMonster_Sub</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 1002020,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Vagrant"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"575702222\">TrialPlayer_101111_Luka_Talk_Modifier_ForMonster_Sub2</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 101401010,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Svarog"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1091533610\">TrialPlayer_101111_Luka_Talk_Modifier_ForLuka</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"766042391\">TrialPlayer_101111_Luka_SetHP_ForMonster</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2115356635\">Monster_W1_SvarogPart_CD</a>",
                      "duration": 99
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 1012040,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Auxiliary Robot Arm Unit"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "PartDecisionFlag",
                      "value": 2
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
    },
    "-1857366819_TrialPlayer_1111204_JingYuan_Ability": {
      "fileName": "-1857366819_TrialPlayer_1111204_JingYuan_Ability",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1319822710\">MTrialPlayer_1111204_JingYuan</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1815357366\">MTrialPlayer_1111204_JingYuan_LevelAllDamageAddedRatio</a>",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">StageFinalDMG</span>&nbsp;",
                  "value": 1.5
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1319822710\">MTrialPlayer_1111204_JingYuan</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2081826421\">JingYuan_BattleEvent_ATKCount</a>[<span class=\"descriptionNumberColor\">Prana Extirpated</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (UnusedUnderThisBase_138) || RETURN",
                    "displayLines": "UnusedUnderThisBase_138",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_138"
                    ]
                  },
                  "addStacksPerTrigger": 7
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1815357366\">MTrialPlayer_1111204_JingYuan_LevelAllDamageAddedRatio</a>"
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Constants[0] (10) || RETURN",
                    "displayLines": "10",
                    "constants": [
                      10
                    ],
                    "variables": []
                  },
                  "maximum": {
                    "operator": "Variables[0] (UnusedUnderThisBase_138) || RETURN",
                    "displayLines": "UnusedUnderThisBase_138",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_138"
                    ]
                  },
                  "assignState": "True",
                  "priorState": "Normal",
                  "bar#": 4,
                  "cooldown": 0
                },
                {
                  "name": "Show Attack Time",
                  "time": 10,
                  "on": null,
                  "show": true
                },
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Self-Made Battle-Events}}"
                  },
                  "set": 0
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Flag",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": 200,
                      "isFixed": "* ERR"
                    },
                    {
                      "name": "Inject Extra-Turn",
                      "actionTag": null,
                      "skillType": "ControlSkill03",
                      "afterInjection": []
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Flag",
                      "value": 1
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
    },
    "-1857366819_TrialPlayer_1101213_DanHengIL_Ability_BattleEnd": {
      "fileName": "-1857366819_TrialPlayer_1101213_DanHengIL_Ability_BattleEnd",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "-1857366819_TrialPlayer_1101213_DanHengIL_Ability": {
      "fileName": "-1857366819_TrialPlayer_1101213_DanHengIL_Ability",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1820886097\">TrialPlayer_1101213_DanHengIL_AddBP</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1081318228\">TrialPlayer_1101213_DanHengIL_Talk_1</a>",
          "stackType": "ReplaceByCaster"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1820886097\">TrialPlayer_1101213_DanHengIL_AddBP</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Action-End Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1081318228\">TrialPlayer_1101213_DanHengIL_Talk_1</a>",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1081318228\">TrialPlayer_1101213_DanHengIL_Talk_1</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Caused a Limbo/DeathState [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Enemies Still Alive",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "invertCondition": true,
                        "includeNonTargets": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "TrialPlayer_1101213_DanHengIL_Ability_BattleEnd",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "priorityTag": "LevelPerformAvatar",
                      "ownerState": "Anyone",
                      "targetState": "Anyone",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Ability",
                  "abilityName": "TrialPlayer_1101213_DanHengIL_Ability_BattleEnd"
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
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
                      "name": "Skill Points Modification",
                      "adjustmentValue": 5,
                      "adjustmentType": "+",
                      "silent": true
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
    },
    "-1857366819_TrialPlayer_1021213_DanHengIL_Ability": {
      "fileName": "-1857366819_TrialPlayer_1021213_DanHengIL_Ability",
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
          "modifier": "<a class=\"gModGreen\" id=\"-934258987\">TrialPlayer_DanHengIL_20231052_Modifier</a>"
        }
      ],
      "references": []
    },
    "-1857366819_TrialPlayer_1031213_DanHengIL_Ability": {
      "fileName": "-1857366819_TrialPlayer_1031213_DanHengIL_Ability",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "-1857366819_TrialPlayer_1021212_Jingliu_Ability": {
      "fileName": "-1857366819_TrialPlayer_1021212_Jingliu_Ability",
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
          "modifier": "<a class=\"gModGreen\" id=\"-620579539\">TrialPlayer_1021212_Jingliu_AddDisableAction_Modifier</a>",
          "immediateEffect": true
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-474927513\">TrialPlayer_1021212_Jingliu_OneMore_Modifier</a>",
          "modifierFlags": [
            "OneMore"
          ],
          "execute": [
            {
              "eventTrigger": "Attack Start [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_OneMoreTime",
                    "compareType": "=",
                    "value2": {
                      "operator": "Constants[0] (1) || RETURN",
                      "displayLines": "1",
                      "constants": [
                        1
                      ],
                      "variables": []
                    },
                    "contextScope": "ContextModifier"
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_OneMoreTime",
                      "value": 1
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-59977986\">TrialPlayer_1021212_Jingliu_DisableAction_Modifier</a>",
          "modifierFlags": [
            "DisableAction"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-620579539\">TrialPlayer_1021212_Jingliu_AddDisableAction_Modifier</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_ActionTime",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Constants[0] (1) || RETURN",
                      "displayLines": "1",
                      "constants": [
                        1
                      ],
                      "variables": []
                    },
                    "contextScope": "ContextModifier"
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
                        "value1": "MDF_ActionTime",
                        "compareType": "=",
                        "value2": {
                          "operator": "Constants[0] (1) || RETURN",
                          "displayLines": "1",
                          "constants": [
                            1
                          ],
                          "variables": []
                        },
                        "contextScope": "ContextModifier"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "ContextModifier",
                          "variableName": "MDF_ActionTime",
                          "value": {
                            "operator": "Variables[0] (MDF_ActionTime) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(MDF_ActionTime + 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "MDF_ActionTime"
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "MDF_ActionTime",
                            "compareType": "=",
                            "value2": {
                              "operator": "Constants[0] (2) || RETURN",
                              "displayLines": "2",
                              "constants": [
                                2
                              ],
                              "variables": []
                            },
                            "contextScope": "ContextModifier"
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "scope": "ContextModifier",
                              "variableName": "MDF_ActionTime",
                              "value": {
                                "operator": "Variables[0] (MDF_ActionTime) || Constants[0] (1) || ADD || RETURN",
                                "displayLines": "(MDF_ActionTime + 1)",
                                "constants": [
                                  1
                                ],
                                "variables": [
                                  "MDF_ActionTime"
                                ]
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value1": "MDF_ActionTime",
                                "compareType": "=",
                                "value2": {
                                  "operator": "Constants[0] (3) || RETURN",
                                  "displayLines": "3",
                                  "constants": [
                                    3
                                  ],
                                  "variables": []
                                },
                                "contextScope": "ContextModifier"
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "scope": "ContextModifier",
                                  "variableName": "MDF_ActionTime",
                                  "value": {
                                    "operator": "Variables[0] (MDF_ActionTime) || Constants[0] (1) || ADD || RETURN",
                                    "displayLines": "(MDF_ActionTime + 1)",
                                    "constants": [
                                      1
                                    ],
                                    "variables": [
                                      "MDF_ActionTime"
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_ActionTime",
                        "compareType": "=",
                        "value2": {
                          "operator": "Constants[0] (0) || RETURN",
                          "displayLines": "0",
                          "constants": [
                            0
                          ],
                          "variables": []
                        },
                        "contextScope": "ContextModifier"
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-59977986\">TrialPlayer_1021212_Jingliu_DisableAction_Modifier</a>",
                      "duration": 1,
                      "immediateEffect": true
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "ContextModifier",
                      "variableName": "MDF_ActionTime",
                      "value": {
                        "operator": "Variables[0] (MDF_ActionTime) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(MDF_ActionTime + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "MDF_ActionTime"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "-1857366819_TrialPlayer_1021209_Yanqing_Ability": {
      "fileName": "-1857366819_TrialPlayer_1021209_Yanqing_Ability",
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
          "modifier": "<a class=\"gModGreen\" id=\"224735379\">TrialPlayer_1021209_Yanqing_AttackFlag_Modifier</a>",
          "immediateEffect": true
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1426857351\">TrialPlayer_1021209_Yanqing_Talk_Modifier</a>",
          "immediateEffect": true
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1426857351\">TrialPlayer_1021209_Yanqing_Talk_Modifier</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "ContextModifier",
                  "variableName": "MDF_KillTalk",
                  "value": {
                    "operator": "Constants[0] (1) || RETURN",
                    "displayLines": "1",
                    "constants": [
                      1
                    ],
                    "variables": []
                  }
                }
              ]
            },
            {
              "eventTrigger": "Got a Kill [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_KillTalk",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "ContextModifier"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_ActionTime",
                        "compareType": ">",
                        "value2": 3,
                        "contextScope": "ContextModifier"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "ContextModifier",
                      "variableName": "MDF_KillTalk",
                      "value": {
                        "operator": "Variables[0] (MDF_KillTalk) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(MDF_KillTalk + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "MDF_KillTalk"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack Start [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_ActionTime",
                    "compareType": "=",
                    "value2": {
                      "operator": "Constants[0] (0) || RETURN",
                      "displayLines": "0",
                      "constants": [
                        0
                      ],
                      "variables": []
                    },
                    "contextScope": "ContextModifier"
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_ActionTime",
                        "compareType": "=",
                        "value2": {
                          "operator": "Constants[0] (1) || RETURN",
                          "displayLines": "1",
                          "constants": [
                            1
                          ],
                          "variables": []
                        },
                        "contextScope": "ContextModifier"
                      }
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "ContextModifier",
                  "variableName": "MDF_ActionTime",
                  "value": {
                    "operator": "Variables[0] (MDF_ActionTime) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(MDF_ActionTime + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "MDF_ActionTime"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-246667125\">TrialPlayer_1021209_Yanqing_Flag_Modifier</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__224735379\">TrialPlayer_1021209_Yanqing_AttackFlag_Modifier</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-246667125\">TrialPlayer_1021209_Yanqing_Flag_Modifier</a>",
                  "onlyRemoveOwnersInstance": true,
                  "removeAllInstances": true
                }
              ]
            },
            {
              "eventTrigger": "Deal Damage End [Owner]: Hit",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-246667125\">TrialPlayer_1021209_Yanqing_Flag_Modifier</a>"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "-1857366819_TrialPlayer_AutoWithoutUltra_Ability": {
      "fileName": "-1857366819_TrialPlayer_AutoWithoutUltra_Ability",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Switch to Action/Ability Context",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          }
        },
        {
          "name": "Update Energy Value",
          "on": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "value": 0,
          "adjustment": "Set",
          "ignoreBlock": true
        },
        {
          "name": "Disable Abilities",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "abilityTypes": null,
          "controlTypes": [
            "ControlSkill03"
          ]
        }
      ],
      "references": []
    },
    "-1857366819_TrialPlayer_AutoWithUltra_Ability": {
      "fileName": "-1857366819_TrialPlayer_AutoWithUltra_Ability",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Disable Abilities",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "abilityTypes": null,
          "controlTypes": [
            "ControlSkill03"
          ]
        }
      ],
      "references": []
    },
    "-1857366819_TrialPlayer_AggroUP_Ability": {
      "fileName": "-1857366819_TrialPlayer_AggroUP_Ability",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1584307616\">Modifier_AggroUP</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1584307616\">Modifier_AggroUP</a>",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "Take Damage End [Owner]: Hit",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "isBeHit",
                  "value": 1
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Aggro%</span>&nbsp;",
                  "value": 6
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "isBeHit",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "BeHitTime",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "BeHitTime",
                    "compareType": ">=",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">Aggro%</span>&nbsp;",
                      "value": -10
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "isBeHit",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "isBeHit",
                          "value": {
                            "operator": "Variables[0] (BeHitTime) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(BeHitTime + 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "BeHitTime"
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "isBeHit",
                          "value": 0
                        }
                      ]
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
    },
    "-1857366819_TrialPlayer_NoBP_Ability": {
      "fileName": "-1857366819_TrialPlayer_NoBP_Ability",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1688359672\">Modifier_AttackNoBP</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1688359672\">Modifier_AttackNoBP</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Update Ability Properties",
                  "propertyList": [
                    {
                      "name": "Ability Property Action",
                      "propertyName": "Skill Point Cost",
                      "propertyAction": "Remove"
                    },
                    {
                      "name": "Ability Property Action",
                      "propertyName": "Skill Point Gain",
                      "propertyAction": "Remove"
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
    },
    "-1857366819_TrialPlayer_CTRLResist": {
      "fileName": "-1857366819_TrialPlayer_CTRLResist",
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
          "modifier": "<a class=\"gModGreen\" id=\"818054412\">TrialPlayer_CTRLResist</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__818054412\">TrialPlayer_CTRLResist</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "STAT_CTRL",
                  "value": 1
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "-1857366819_TrialPlayer_SpeedUp_Ability": {
      "fileName": "-1857366819_TrialPlayer_SpeedUp_Ability",
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
          "modifier": "<a class=\"gModGreen\" id=\"-2142075301\">Modifier_TrialSpeedUp</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2142075301\">Modifier_TrialSpeedUp</a>",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
                  "value": 10
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "-1857366819_Modifiers": {
      "fileName": "-1857366819_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-934258987\">TrialPlayer_DanHengIL_20231052_Modifier</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Adjust Variable Value",
                  "adjustmentType": "Add to Value (Default)",
                  "variableName": "BPExChange",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": 3
                },
                {
                  "name": "Modify Skill-Point Extras",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "function": "Set",
                  "value": {
                    "operator": "Variables[0] (BPExChange) || RETURN",
                    "displayLines": "BPExChange",
                    "constants": [],
                    "variables": [
                      "BPExChange"
                    ]
                  },
                  "silentChange": true
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 3,
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": 3
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1738340073\">DanHengIL_BPCost_3_Special</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Switch to Action/Ability Context",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Update Energy Value",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": 0,
                  "adjustment": "Set",
                  "ignoreBlock": true
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1597361272\">TrialPlayer_Standard_Disable_Ultimate_Modifier</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Disable Abilities",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTypes": [
                    "Ultimate"
                  ]
                }
              ]
            }
          ]
        }
      ],
      "references": []
    }
  }
}