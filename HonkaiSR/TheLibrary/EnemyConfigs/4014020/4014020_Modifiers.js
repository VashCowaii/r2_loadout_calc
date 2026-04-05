const configAbility = {
  "fileName": "4014020_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1769875873\">W4_Hearse_BattleScore2</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "Hearse_BattleScore2_Flag"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking Modifier Instance [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-18449095\">Monster_W4_Hearse_BattleScore2Count</a>"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"-18449095\">Monster_W4_Hearse_BattleScore2Count</a>",
                    "compareType": "=",
                    "value2": 4,
                    "valueType": "Layer"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Achievement",
                  "relatedAchievements": [
                    {
                      "title": "The Conqueror King",
                      "desc": "After The Giver, Master of Legions, Lance of Fury uses \"The Vanquished Behold Woe,\" destroy all Conquer or Be Conquered with the same character",
                      "rarity": "Low"
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
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1753098254\">W4_Hearse_BattleScore1</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "Hearse_BattleScore1_Flag"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier is Added [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"1663613862\">Monster_W4_Hearse_BattleScore1Count</a>"
              },
              "passed": [
                {
                  "name": "Achievement",
                  "relatedAchievements": [
                    {
                      "title": "Shattered Battleground",
                      "desc": "When facing The Giver, Master of Legions, Lance of Fury, cause the \"The Fallen Feeds My Might\" to fail to absorb \"Conquer or Be Conquered\"",
                      "rarity": "Low"
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
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-191666641\">Monster_W4_Hearse_FullPhase1</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-516776989\">Monster_W4_Hearse_ForceAutoLock</a>",
      "modifierFlags": [
        "TauntForAutoLock"
      ],
      "execute": [
        {
          "eventTrigger": "Ability Use [Anyone]: Start",
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
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "Tutorial_Flag",
        "MDF_KillByHearse"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__126121466\">Monster_W4_Hearse_LeaveTeam</a>",
      "execute": [
        {
          "eventTrigger": "Action Choice Window [Anyone]",
          "execute": [
            {
              "name": "Remove from Team Target Grouping",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "stayInTeam": false
            },
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "Remove from Team Target Grouping",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "stayInTeam": false
            },
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Ultimate Prep-Phase [Anyone]",
          "execute": [
            {
              "name": "Remove from Team Target Grouping",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "stayInTeam": false
            },
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Extra Action/Turn [Anyone]: Start",
          "execute": [
            {
              "name": "Remove from Team Target Grouping",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "stayInTeam": false
            },
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "Remove from Team Target Grouping",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "stayInTeam": false
            },
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-18449095\">Monster_W4_Hearse_BattleScore2Count</a>",
      "stackType": "Replace",
      "stackLimit": 4,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1663613862\">Monster_W4_Hearse_BattleScore1Count</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-672192540\">Monster_W4_Hearse_Ability03_Prepare</a>",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "MDF_Defence",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">DEFSUM</span>&nbsp;"
            },
            {
              "name": "Adjust Target Stats",
              "modifiedValuesArray": [
                {
                  "on": "Defender",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEFFlat</span>&nbsp;",
                  "value": "(0 - MDF_Defence)"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2062180239\">Monster_W4_Hearse_ActionDelay</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Action Advance/Delay",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "advanceType": "Set",
              "multiAdd": "(MDF_ActionDelayRatio / 2)",
              "isStartingDelay": true
            },
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1701771010\">Monster_W4_Hearse_ChangeDelayEffect</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1170733797\">Monster_W4_Hearse_ChangeDelay</a>",
      "execute": [
        {
          "eventTrigger": "Action End [Anyone]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1701771010\">Monster_W4_Hearse_ChangeDelayEffect</a>"
            },
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1169900751\">Monster_W4_Hearse_SetSpeed</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_CurrentSpeed",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;"
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_Speed) || Variables[1] (MDF_CurrentSpeed) || SUB || RETURN",
                "displayLines": "(MDF_Speed - MDF_CurrentSpeed)",
                "constants": [],
                "variables": [
                  "MDF_Speed",
                  "MDF_CurrentSpeed"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_Speed"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__191148502\">Monster_W4_Hearse_LockHPNikadory</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Lock HP",
              "threshold": 0
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1968202244\">Monster_W4_Hearse_ChargeEffectDelay</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2003197831\">Monster_W4_Hearse_ChargeEffect</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1816428122\">Monster_W4_Hearse_Part2ExtraEffect</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1810020186\">Monster_W4_Hearse_Part2Effect</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-778914885\">Monster_W4_Hearse_Part2EffectMaterial</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1296909781\">Monster_W4_Hearse_Effect</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1746079700\">Monster_W4_Hearse_EffectPrepare</a>",
      "execute": [
        {
          "eventTrigger": "Action Choice Window [Anyone]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1296909781\">Monster_W4_Hearse_Effect</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1296909781\">Monster_W4_Hearse_Effect</a>"
            },
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1296909781\">Monster_W4_Hearse_Effect</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1296909781\">Monster_W4_Hearse_Effect</a>"
            },
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Ultimate Prep-Phase [Anyone]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1296909781\">Monster_W4_Hearse_Effect</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1296909781\">Monster_W4_Hearse_Effect</a>"
            },
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Extra Action/Turn [Anyone]: Start",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1296909781\">Monster_W4_Hearse_Effect</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1296909781\">Monster_W4_Hearse_Effect</a>"
            },
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1591064655\">Monster_W4_Hearse_StartEffect</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1952846644\">Monster_W4_Hearse_Ability04_PositionMark</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2101563151\">Monster_W4_Hearse_Ability04_Mark</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1065905624\">Monster_W4_Hearse_Ability03_Mark</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1178549218\">Monster_W4_Hearse_Ability01_Mark</a>",
      "stackData": [],
      "latentQueue": [
        "Tutorial_Flag",
        "MDF_KillByHearse"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-580159473\">Monster_W4_Hearse_PartController</a>",
      "execute": [
        {
          "eventTrigger": "Waiting for Healing in Limbo",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
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
                    "value1": "InsertCheck",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Dispel Debuffs",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "silent": true
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-208688438\">Monster_W4_Nikadory_Endurance</a>"
                    },
                    {
                      "name": "Dispel Debuffs",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Nikador: Self}}"
                      },
                      "silent": true
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Nikador: Self}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1511774920\">Monster_W4_Nikadory_EnhanceShield</a>[<span class=\"descriptionNumberColor\">Titanic Corpus</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Nikador: Self}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-818020607\">Monster_W4_Nikadory_AddShield</a>",
                      "casterAssign": "TargetSelf"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Nikador: Self}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-208688438\">Monster_W4_Nikadory_Endurance</a>"
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "InsertCheck"
                    },
                    {
                      "name": "Set Enemy Phase",
                      "mode": "Inc"
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Caster's Minions}}"
                      },
                      "conditions": {
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "compareType": "=",
                        "value2": 2
                      },
                      "ifTargetFound": [
                        {
                          "name": "Define Modifier-Specific Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifierName": "<a class=\"gModGreen\" id=\"-254137842\">Monster_W4_HearsePart_Passive</a>",
                          "variableName": "MDF_KillByHearse",
                          "value": 1
                        },
                        {
                          "name": "Mark Entity For Immediate Death",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          }
                        },
                        {
                          "name": "Force Entity Death",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          }
                        }
                      ]
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W4_Hearse_PassiveAbility_Insert",
                      "priorityTag": "EnemyPhaseChange",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": 4014022,
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "characterName": "The Giver, Master of Legions, Lance of Fury (Complete)",
                "isBaseCompare": true
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
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
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
                        "value1": "InsertCheck",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Dispel Debuffs",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "silent": true
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-208688438\">Monster_W4_Nikadory_Endurance</a>"
                        },
                        {
                          "name": "Dispel Debuffs",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Nikador: Self}}"
                          },
                          "silent": true
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Nikador: Self}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1511774920\">Monster_W4_Nikadory_EnhanceShield</a>[<span class=\"descriptionNumberColor\">Titanic Corpus</span>]"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Nikador: Self}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-818020607\">Monster_W4_Nikadory_AddShield</a>",
                          "casterAssign": "TargetSelf"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Nikador: Self}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-208688438\">Monster_W4_Nikadory_Endurance</a>"
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "InsertCheck"
                        },
                        {
                          "name": "Set Enemy Phase",
                          "mode": "Inc"
                        },
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Caster's Minions}}"
                          },
                          "conditions": {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "compareType": "=",
                            "value2": 2
                          },
                          "ifTargetFound": [
                            {
                              "name": "Define Modifier-Specific Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifierName": "<a class=\"gModGreen\" id=\"-254137842\">Monster_W4_HearsePart_Passive</a>",
                              "variableName": "MDF_KillByHearse",
                              "value": 1
                            },
                            {
                              "name": "Mark Entity For Immediate Death",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              }
                            },
                            {
                              "name": "Force Entity Death",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              }
                            }
                          ]
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W4_Hearse_PassiveAbility_Insert",
                          "priorityTag": "EnemyPhaseChange",
                          "ownerState": "Mask_AliveOrLimbo",
                          "targetState": "Mask_AliveOrLimbo",
                          "canHitNonTargets": true,
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "priorityLevel": -90
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1871536192\">Monster_W4_Hearse_Sign_Enhance</a>[<span class=\"descriptionNumberColor\">Drowning in Terror</span>]",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_DamageTakenUpRatio) || RETURN",
                "displayLines": "MDF_DamageTakenUpRatio",
                "constants": [],
                "variables": [
                  "MDF_DamageTakenUpRatio"
                ]
              }
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
              "modifier": "<a class=\"gModGreen\" id=\"1997760414\">Standard_Confine</a>[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
              "duration": 1,
              "baseChance": {
                "operator": "Variables[0] (MDF_ConfineChance) || RETURN",
                "displayLines": "MDF_ConfineChance",
                "constants": [],
                "variables": [
                  "MDF_ConfineChance"
                ]
              },
              "immediateEffect": true,
              "valuePerStack": {
                "MDF_ActionDelayRatio": {
                  "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
                  "displayLines": "{[Skill03[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill03[2]]}"
                  ]
                }
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_DamageTakenUpRatio",
        "MDF_ConfineChance"
      ],
      "latentQueue": [],
      "description": "Increases received damage by <span class=\"descriptionNumberColor\">MDF_DamageTakenUpRatio</span>. When receiving attacks, there is a chance to be inflicted with Imprisonment. Defeat the corresponding \"Conquer or Be Conquered\" to dispel this effect.",
      "type": "Other",
      "effectName": "Drowning in Terror",
      "statusName": "Drowning in Terror"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__770051597\">Monster_W4_Hearse_Sign</a>[<span class=\"descriptionNumberColor\">Strife-Granted Fear</span>]",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_DamageTakenUpRatio) || RETURN",
                "displayLines": "MDF_DamageTakenUpRatio",
                "constants": [],
                "variables": [
                  "MDF_DamageTakenUpRatio"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_DamageTakenUpRatio"
      ],
      "latentQueue": [],
      "description": "DMG taken increases by <span class=\"descriptionNumberColor\">MDF_DamageTakenUpRatio</span>. This effect can be dispelled by defeating the \"Conquer or Be Conquered\" corresponding to this unit.",
      "type": "Other",
      "effectName": "Fear",
      "statusName": "Strife-Granted Fear"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-689985018\">Monster_W4_Hearse_ActionBarHint</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1584202078\">Monster_W4_Hearse_Action</a>",
      "execute": [
        {
          "eventTrigger": "Turn Start [Anyone]",
          "execute": [
            {
              "name": "Set Action-State",
              "on": null,
              "stateName": "W4_Hearse_00"
            },
            {
              "name": "Create AV Link",
              "from": {
                "name": "Target Name",
                "target": "{{Nikador: Self}}"
              },
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "linkOrder": 1,
              "isStart": true
            },
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__276604905\">Monster_W4_Hearse_Passive</a>",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "Turn [Action-End Phase]",
          "execute": [
            {
              "name": "Set Action-State",
              "on": null,
              "stateName": "W4_Hearse_00",
              "state": false
            }
          ]
        },
        {
          "eventTrigger": "Turn [Action-End Phase] [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of",
                "of": {
                  "name": "Target Name",
                  "target": "{{Nikador: Self}}"
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "mustBeAlive2": true
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
                    "value1": "HP_Bars_Remaining",
                    "compareType": ">=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_TurnCount",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_TurnCount",
                          "value": 0
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 3
                          }
                        },
                        {
                          "name": "Set Action-State",
                          "on": null,
                          "stateName": "W4_Hearse_00"
                        },
                        {
                          "name": "Create AV Link",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Nikador: Self}}"
                          },
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "linkOrder": 1,
                          "isStart": true
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_TurnCount",
                          "value": 1
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_Phase2First",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_Phase2First",
                          "value": 1
                        }
                      ],
                      "failed": [
                        {
                          "name": "Set Action-State",
                          "on": null,
                          "stateName": "W4_Hearse_00"
                        },
                        {
                          "name": "Create AV Link",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Nikador: Self}}"
                          },
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "linkOrder": 1,
                          "isStart": true
                        }
                      ]
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
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "mustBeAlive2": true
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 1
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 4014022,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": "The Giver, Master of Legions, Lance of Fury (Complete)",
                    "isBaseCompare": true,
                    "invertCondition": true
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
                  "modifier": "<a class=\"gModGreen\" id=\"1584202078\">Monster_W4_Hearse_Action</a>"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_TurnCount",
                  "value": 0
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "mustBeAlive2": true
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 1
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 3
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 4014022,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": "The Giver, Master of Legions, Lance of Fury (Complete)",
                    "isBaseCompare": true
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
                  "modifier": "<a class=\"gModGreen\" id=\"1584202078\">Monster_W4_Hearse_Action</a>"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_TurnCount",
                  "value": 0
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "mustBeAlive2": true
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 1
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 4014023,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": "Mydeimos, Lance of Fury",
                    "isBaseCompare": true
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
                  "modifier": "<a class=\"gModGreen\" id=\"1584202078\">Monster_W4_Hearse_Action</a>"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_TurnCount",
                  "value": 0
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
                "name": "Enemy ID",
                "ID": 401401,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": null,
                "isCompareUniqueID": true
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Nikador: Self}}"
                  },
                  "variableName": "MDF_Speed",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1169900751\">Monster_W4_Hearse_SetSpeed</a>",
                  "valuePerStack": {
                    "MDF_Speed": {
                      "operator": "Variables[0] (MDF_Speed) || Constants[0] (0) || MUL || RETURN",
                      "displayLines": "(MDF_Speed * 0)",
                      "constants": [
                        0
                      ],
                      "variables": [
                        "MDF_Speed"
                      ]
                    }
                  }
                },
                {
                  "name": "Create AV Link",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Nikador: Self}}"
                  },
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "linkOrder": 1,
                  "isStart": true
                },
                {
                  "name": "Create Shared HP Group",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "subTarget": {
                    "name": "Target Name",
                    "target": "{{Nikador: Self}}"
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "conditions": {
                "name": "Compare: Monster Rank",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "compareType": "<=",
                "value2": 2
              },
              "ifTargetFound": [
                {
                  "name": "Define Modifier-Specific Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifierName": "<a class=\"gModGreen\" id=\"-254137842\">Monster_W4_HearsePart_Passive</a>",
                  "variableName": "MDF_KillByHearse",
                  "value": 1
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"637369732\">Monster_W4_HearsePart_Effect</a>"
                },
                {
                  "name": "Mark Entity For Immediate Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                },
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "HP Change [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1275245570\">Monster_W4_Hearse_InChangePhase</a>",
                "invertCondition": true
              }
            }
          ]
        },
        {
          "eventTrigger": "When Modifier is Added [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"-1701771010\">Monster_W4_Hearse_ChangeDelayEffect</a>"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_TurnCount",
                    "compareType": ">=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_TurnCount",
                      "value": 0
                    },
                    {
                      "name": "Set Action-State",
                      "on": null,
                      "stateName": "W4_Hearse_00"
                    },
                    {
                      "name": "Create AV Link",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Nikador: Self}}"
                      },
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "linkOrder": 1,
                      "isStart": true
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_TurnCount",
                      "value": 1
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1701771010\">Monster_W4_Hearse_ChangeDelayEffect</a>"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2010268595\">Monster_W4_Hearse_LockHP</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Lock HP",
              "threshold": 0
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1275245570\">Monster_W4_Hearse_InChangePhase</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__985676222\">Monster_W4_Hearse_Enhance</a>[<span class=\"descriptionNumberColor\">Strife-Granted Valiance</span>]",
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
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "MDF_KillByHearse"
      ],
      "description": "Each stack increases DMG dealt for the next attack.",
      "type": "Buff",
      "effectName": "Valiance",
      "statusName": "Strife-Granted Valiance",
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-677273932\">Monster_W4_Hearse_Weak</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "action": "Attach",
              "valueList": [
                "Wind"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1470468731\">Monster_W4_Hearse_AlreadyAdd</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": 4014023,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster's Summoner}}"
                },
                "characterName": "Mydeimos, Lance of Fury",
                "isBaseCompare": true,
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1774231954\">Monster_W4_HearsePart_Soul</a>[<span class=\"descriptionNumberColor\">Conquer</span>]",
                  "valuePerStack": {
                    "MDF_DamageTakenUpRatio": {
                      "operator": "Variables[0] (MDF_DamageTakenUpRatio) || RETURN",
                      "displayLines": "MDF_DamageTakenUpRatio",
                      "constants": [],
                      "variables": [
                        "MDF_DamageTakenUpRatio"
                      ]
                    }
                  },
                  "casterAssign": "CasterSelf"
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"323182003\">Monster_W4_HearsePart_Soul_B</a>[<span class=\"descriptionNumberColor\">Conquer</span>]",
                  "valuePerStack": {
                    "MDF_DamageTakenUpRatio": {
                      "operator": "Variables[0] (MDF_DamageTakenUpRatio) || RETURN",
                      "displayLines": "MDF_DamageTakenUpRatio",
                      "constants": [],
                      "variables": [
                        "MDF_DamageTakenUpRatio"
                      ]
                    }
                  },
                  "casterAssign": "CasterSelf"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-117590533\">Monster_W4_Hearse_Born</a>",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Monster_W4_Hearse_Born_Part02",
              "isTrigger": true
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": 9004113,
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "characterName": null,
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1296909781\">Monster_W4_Hearse_Effect</a>"
                }
              ]
            }
          ],
          "priorityLevel": -90
        }
      ]
    }
  ],
  "references": []
}