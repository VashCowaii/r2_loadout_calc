const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": -1857366819,
  "trimCharacterName": -1857366819,
  "abilityList": [
    "-1857366819_Modifiers",
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
    "-1857366819_TrialPlayer_SpeedUp_Ability"
  ],
  "abilityObject": {
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
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
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
                    "displayLines": "BPExChange"
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
          ]
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
    },
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
          "stackData": [
            "MDF_ActionTime"
          ],
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
                      "value": 1,
                      "variableName": "MDF_ActionTime"
                    }
                  ],
                  "failed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
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
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
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
              "eventTrigger": "Waiting in Limbo [Owner]",
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
              "eventTrigger": "Being Attacked [Owner]: End"
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "-1857366819_TrialPlayer_1021111_Luka_TalkAbility_Battle2_Round2": {
      "fileName": "-1857366819_TrialPlayer_1021111_Luka_TalkAbility_Battle2_Round2",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable with Stat",
          "variableName": "MDF_LukaMaxHP",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
        },
        {
          "name": "Set HP Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "setValue": {
            "displayLines": "(MDF_LukaMaxHP * 0.5)"
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">StageFinalDMG</span>&nbsp;",
                  "statValue": 3
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__535355805\">TrialPlayer_101111_Luka_LimboAddAttack2</a>",
          "stackData": [
            "MDF_AttackRatio"
          ],
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
                      "priorityTag": "CharacterBuffSelf",
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">StageFinalDMG</span>&nbsp;",
                  "statValue": {
                    "displayLines": "MDF_AttackRatio"
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
              "eventTrigger": "Waiting in Limbo [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "MDF_TargetMaxHP2",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Set HP Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "setValue": {
                    "displayLines": "(MDF_TargetMaxHP2 * 0.3)"
                  }
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "-1857366819_TrialPlayer_1021111_Luka_TalkAbility_Battle2_Round1": {
      "fileName": "-1857366819_TrialPlayer_1021111_Luka_TalkAbility_Battle2_Round1",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable with Stat",
          "variableName": "MDF_LukaMaxHP",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
        },
        {
          "name": "Set HP Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "setValue": {
            "displayLines": "(MDF_LukaMaxHP * 0.7)"
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
          "stackData": [
            "MDF_AttackRatio"
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">StageFinalDMG</span>&nbsp;",
                  "statValue": {
                    "displayLines": "MDF_AttackRatio"
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
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "-1857366819_TrialPlayer_1021111_Luka_TalkAbility_Battle2_AfterAttack": {
      "fileName": "-1857366819_TrialPlayer_1021111_Luka_TalkAbility_Battle2_AfterAttack",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
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
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
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
                      "variableName": "MDF_TargetMaxHP",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                    },
                    {
                      "name": "Set HP Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "setValue": {
                        "displayLines": "(MDF_TargetMaxHP * 0.3)"
                      }
                    },
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">StageFinalDMG</span>&nbsp;",
                      "statValue": 1
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
              "eventTrigger": "Waiting in Limbo [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(MDF_LimboCount + 1)"
                  },
                  "variableName": "MDF_LimboCount"
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
                          "variableName": "DecisionFlag",
                          "resetValue": 3,
                          "scope": "TargetEntity"
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
                      "priorityTag": "CharacterReviveSelf",
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
                      "priorityTag": "CharacterReviveSelf",
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
                      "duration": 99,
                      "casterAssign": "TargetSelf"
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
                      "variableName": "PartDecisionFlag",
                      "resetValue": 2,
                      "scope": "TargetEntity"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">StageFinalDMG</span>&nbsp;",
                  "statValue": 1.5
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
                    "displayLines": "UnusedUnderThisBase_5679"
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
                    "displayLines": "10"
                  },
                  "maximum": {
                    "displayLines": "UnusedUnderThisBase_5679"
                  },
                  "assignState": "True",
                  "priorState": "Normal",
                  "bar#": 4,
                  "cooldown": 0
                },
                {
                  "name": "Show Attack Count",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Self-Made Battle-Events}}"
                  },
                  "attackCount": 10,
                  "attackCountEnhanced": 0,
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
                      "value": 1,
                      "variableName": "Flag"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "-1857366819_TrialPlayer_1101213_DanHengIL_Ability_BattleEnd": {
      "fileName": "-1857366819_TrialPlayer_1101213_DanHengIL_Ability_BattleEnd",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
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
              "eventTrigger": "Turn [Owner]: Action-End Phase",
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
              "eventTrigger": "Caused Limbo [Owner]",
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
                        "includeUnselectable": true,
                        "invertCondition": true
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
                      "priorityTag": "STAGE_Character",
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
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
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
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "-1857366819_TrialPlayer_1031213_DanHengIL_Ability": {
      "fileName": "-1857366819_TrialPlayer_1031213_DanHengIL_Ability",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
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
                      "displayLines": "1"
                    },
                    "contextScope": "ContextModifier"
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "value": 1,
                      "variableName": "MDF_OneMoreTime"
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
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
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
                      "displayLines": "1"
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
                          "displayLines": "1"
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
                          "value": {
                            "displayLines": "(MDF_ActionTime + 1)"
                          },
                          "variableName": "MDF_ActionTime"
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
                              "displayLines": "2"
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
                              "value": {
                                "displayLines": "(MDF_ActionTime + 1)"
                              },
                              "variableName": "MDF_ActionTime"
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
                                  "displayLines": "3"
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
                                  "value": {
                                    "displayLines": "(MDF_ActionTime + 1)"
                                  },
                                  "variableName": "MDF_ActionTime"
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
                          "displayLines": "0"
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
                      "value": {
                        "displayLines": "(MDF_ActionTime + 1)"
                      },
                      "variableName": "MDF_ActionTime"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
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
                  "value": {
                    "displayLines": "1"
                  },
                  "variableName": "MDF_KillTalk"
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
                      "value": {
                        "displayLines": "(MDF_KillTalk + 1)"
                      },
                      "variableName": "MDF_KillTalk"
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
                      "displayLines": "0"
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
                          "displayLines": "1"
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
                  "value": {
                    "displayLines": "(MDF_ActionTime + 1)"
                  },
                  "variableName": "MDF_ActionTime"
                }
              ]
            }
          ]
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
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
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
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
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
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
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
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
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
                  "value": 1,
                  "variableName": "isBeHit"
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">Aggro%</span>&nbsp;",
                  "statValue": 6
                },
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "isBeHit"
                },
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "BeHitTime"
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
                      "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">Aggro%</span>&nbsp;",
                      "statValue": -10
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
                          "value": {
                            "displayLines": "(BeHitTime + 1)"
                          },
                          "variableName": "isBeHit"
                        },
                        {
                          "name": "Define Custom Variable",
                          "value": 0,
                          "variableName": "isBeHit"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
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
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
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
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
                  "statValue": 10
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    }
  }
}