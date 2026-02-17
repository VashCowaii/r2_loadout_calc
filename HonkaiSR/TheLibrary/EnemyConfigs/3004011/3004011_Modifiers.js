const configAbility = {
  "fileName": "3004011_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__1664207003\">Monster_W3_FigureBoss_DispelStatus_BE</a>",
      "modifierFlags": [
        "BlockDamage",
        "Stealth"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier is Added [Owner]",
          "execute": [
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "typeOverride": "Buff"
            },
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
            },
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "typeOverride": "Other"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1027298323\">Monster_W3_FigureBoss_DispelStatus</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier is Added [Owner]",
          "execute": [
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "typeOverride": "Buff"
            },
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
            },
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "typeOverride": "Other"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__745906485\">Enemy_W3_Figure_02_RLElite_SuperArmorBreak</a>",
      "modifierFlags": [
        "STAT_SuperArmorBreak"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-237425029\">StanceBreakState_Effect</a>"
            }
          ]
        },
        {
          "eventTrigger": "End Broken State [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "When Modifier is Added [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"-237425029\">StanceBreakState_Effect</a>"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-237425029\">StanceBreakState_Effect</a>"
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
      "for": "<a class=\"gModGreen\" id=\"mod__919092314\">Monster_W3_FigureBoss_DamageUP</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueType": "Layer",
              "variableName": "ModifierLayers",
              "multiplier": 1
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_DamageUP) || Variables[1] (ModifierLayers) || MUL || RETURN",
                "displayLines": "(MDF_DamageUP * ModifierLayers)",
                "constants": [],
                "variables": [
                  "MDF_DamageUP",
                  "ModifierLayers"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "Each stack increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_DamageUP</span>.",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "DMG Boost",
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-198505777\">Enemy_W3_Figure_02_RLBOSS_BreakHitEffectController</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-870233728\">Enemy_W3_Figure_02_RLBOSS_SuperArmorController</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"73301376\">Standard_SuperArmor</a>[<span class=\"descriptionNumberColor\">Safeguard</span>]",
              "valuePerStack": {
                "MDF_AllDamageTypeResistance": {
                  "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
                  "displayLines": "{[Skill03[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill03[0]]}"
                  ]
                }
              }
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
              "modifier": "<a class=\"gModGreen\" id=\"73301376\">Standard_SuperArmor</a>[<span class=\"descriptionNumberColor\">Safeguard</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1917647041\">Standard_SuperArmorBreak</a>[<span class=\"descriptionNumberColor\">Safeguard Broken</span>]",
              "valuePerStack": {
                "MDF_AllDamageTypeTakenRatio": {
                  "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
                  "displayLines": "{[Skill03[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill03[1]]}"
                  ]
                }
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-198505777\">Enemy_W3_Figure_02_RLBOSS_BreakHitEffectController</a>"
            }
          ]
        },
        {
          "eventTrigger": "End Broken State [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1917647041\">Standard_SuperArmorBreak</a>[<span class=\"descriptionNumberColor\">Safeguard Broken</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"73301376\">Standard_SuperArmor</a>[<span class=\"descriptionNumberColor\">Safeguard</span>]",
              "valuePerStack": {
                "MDF_AllDamageTypeResistance": {
                  "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
                  "displayLines": "{[Skill03[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill03[0]]}"
                  ]
                }
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-198505777\">Enemy_W3_Figure_02_RLBOSS_BreakHitEffectController</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1469662086\">Enemy_W3_Figure_02_RLBOSS_AIRecorder</a>",
      "execute": [
        {
          "eventTrigger": "Action End [Owner]",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "AIFlag",
              "value": {
                "operator": "Variables[0] (MDF_AIFlag) || RETURN",
                "displayLines": "MDF_AIFlag",
                "constants": [],
                "variables": [
                  "MDF_AIFlag"
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
              "set": {
                "operator": "Variables[0] (MDF_ActionDelay) || RETURN",
                "displayLines": "MDF_ActionDelay",
                "constants": [],
                "variables": [
                  "MDF_ActionDelay"
                ]
              }
            },
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Copy",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variable": "AIFlag",
              "target2": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variable2": "MDF_AIFlag"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_ActionDelay",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">ActionDelay</span>&nbsp;"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "AIFlag",
              "value": 10
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
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1611594582\">Monster_W3_FigureBoss_Standard_TheChosenOneEffect</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__941590351\">Monster_W3_FigureBoss_Standard_TheChosenOne</a>[<span class=\"descriptionNumberColor\">Impresario</span>]",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
            }
          ]
        },
        {
          "eventTrigger": "Action End [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1611594582\">Monster_W3_FigureBoss_Standard_TheChosenOneEffect</a>"
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
              "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>",
              "casterAssign": "TargetSelf"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Add Target by Unique Identifier",
                  "identifier": "DollBoss"
                },
                "value1": "HP_Bars_Remaining",
                "compareType": ">=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-870233728\">Enemy_W3_Figure_02_RLBOSS_SuperArmorController</a>"
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
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value": "W3_Figure_00"
                      },
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value": "W3_Figure_01"
                      },
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value": "W3_Figure_02"
                      }
                    ]
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"941590351\">Monster_W3_FigureBoss_Standard_TheChosenOne</a>[<span class=\"descriptionNumberColor\">Impresario</span>]",
                    "invertCondition": true
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1611594582\">Monster_W3_FigureBoss_Standard_TheChosenOneEffect</a>"
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_ChosenOneSpeedUp) || RETURN",
                "displayLines": "MDF_ChosenOneSpeedUp",
                "constants": [],
                "variables": [
                  "MDF_ChosenOneSpeedUp"
                ]
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
                "value1": "AIFlag",
                "compareType": "NOT=",
                "value2": 4,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 1
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 5
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Action Advance/Delay",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "advanceType": "Set",
              "multiAdd": "MDF_BreakDelayRatio"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Add Target by Unique Identifier",
                      "identifier": "DollBoss"
                    },
                    "value1": "CurrentHP%",
                    "compareType": ">",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Add Target by Unique Identifier",
                      "identifier": "DollBoss"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": ">=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "value": "W3_Figure_00"
                              },
                              {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "value": "W3_Figure_01"
                              },
                              {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "value": "W3_Figure_02"
                              }
                            ]
                          },
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "flagName": "Break",
                            "invertCondition": true
                          },
                          {
                            "name": "Compare: Target",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "target2": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "invertCondition": true
                          }
                        ]
                      },
                      "ifTargetFound": [
                        "Modifier Deletes Itself"
                      ],
                      "noTargetFound": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1611594582\">Monster_W3_FigureBoss_Standard_TheChosenOneEffect</a>"
                        },
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertCount",
                            "typeValue": 1
                          },
                          "abilityName": "Monster_W3_FigureBoss_Ability04_Insert_Explode",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Level Entity}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "priorityTag": "MonsterChangeState",
                          "canHitNonTargets": true,
                          "valuePerStack": {
                            "P1_BreakDelayRatio": {
                              "operator": "Variables[0] (MDF_BreakDelayRatio) || RETURN",
                              "displayLines": "MDF_BreakDelayRatio",
                              "constants": [],
                              "variables": [
                                "MDF_BreakDelayRatio"
                              ]
                            },
                            "P2_ChosenOneSpeedUp": {
                              "operator": "Variables[0] (MDF_ChosenOneSpeedUp) || RETURN",
                              "displayLines": "MDF_ChosenOneSpeedUp",
                              "constants": [],
                              "variables": [
                                "MDF_ChosenOneSpeedUp"
                              ]
                            },
                            "P3_ExploreDamagePercentage": {
                              "operator": "Variables[0] (MDF_ExploreDamagePercentage) || RETURN",
                              "displayLines": "MDF_ExploreDamagePercentage",
                              "constants": [],
                              "variables": [
                                "MDF_ExploreDamagePercentage"
                              ]
                            },
                            "P4_ExploreDelayRatio": {
                              "operator": "Variables[0] (MDF_ExploreDelayRatio) || RETURN",
                              "displayLines": "MDF_ExploreDelayRatio",
                              "constants": [],
                              "variables": [
                                "MDF_ExploreDelayRatio"
                              ]
                            },
                            "P5_ExploreDamageUpRatio": {
                              "operator": "Variables[0] (MDF_ExploreDamageUpRatio) || RETURN",
                              "displayLines": "MDF_ExploreDamageUpRatio",
                              "constants": [],
                              "variables": [
                                "MDF_ExploreDamageUpRatio"
                              ]
                            }
                          },
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "value": "W3_Figure_00"
                              },
                              {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "value": "W3_Figure_01"
                              },
                              {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "value": "W3_Figure_02"
                              }
                            ]
                          },
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "flagName": "Break",
                            "invertCondition": true
                          },
                          {
                            "name": "Compare: Target",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "target2": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "invertCondition": true
                          }
                        ]
                      },
                      "noTargetFound": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1611594582\">Monster_W3_FigureBoss_Standard_TheChosenOneEffect</a>"
                        }
                      ]
                    },
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertCount",
                        "typeValue": 1
                      },
                      "conditionActive": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Add Target by Unique Identifier",
                          "identifier": "DollBoss"
                        },
                        "value1": "HP_Bars_Remaining",
                        "compareType": "<",
                        "value2": 2
                      },
                      "abilityName": "Monster_W3_FigureBoss_Ability03_Insert_Transform",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "priorityTag": "MonsterChangeState",
                      "canHitNonTargets": true,
                      "valuePerStack": {
                        "P1_BreakDelayRatio": {
                          "operator": "Variables[0] (MDF_BreakDelayRatio) || RETURN",
                          "displayLines": "MDF_BreakDelayRatio",
                          "constants": [],
                          "variables": [
                            "MDF_BreakDelayRatio"
                          ]
                        },
                        "P2_ChosenOneSpeedUp": {
                          "operator": "Variables[0] (MDF_ChosenOneSpeedUp) || RETURN",
                          "displayLines": "MDF_ChosenOneSpeedUp",
                          "constants": [],
                          "variables": [
                            "MDF_ChosenOneSpeedUp"
                          ]
                        },
                        "P3_ExploreDamagePercentage": {
                          "operator": "Variables[0] (MDF_ExploreDamagePercentage) || RETURN",
                          "displayLines": "MDF_ExploreDamagePercentage",
                          "constants": [],
                          "variables": [
                            "MDF_ExploreDamagePercentage"
                          ]
                        },
                        "P4_ExploreDelayRatio": {
                          "operator": "Variables[0] (MDF_ExploreDelayRatio) || RETURN",
                          "displayLines": "MDF_ExploreDelayRatio",
                          "constants": [],
                          "variables": [
                            "MDF_ExploreDelayRatio"
                          ]
                        },
                        "P5_ExploreDamageUpRatio": {
                          "operator": "Variables[0] (MDF_ExploreDamageUpRatio) || RETURN",
                          "displayLines": "MDF_ExploreDamageUpRatio",
                          "constants": [],
                          "variables": [
                            "MDF_ExploreDamageUpRatio"
                          ]
                        }
                      },
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_BreakDelayRatio",
        "MDF_ChosenOneSpeedUp",
        "MDF_ExploreDamagePercentage",
        "MDF_ExploreDelayRatio",
        "MDF_ExploreDamageUpRatio"
      ],
      "latentQueue": [
        "BreakEndFlag"
      ],
      "description": "An extra action can be taken every turn and SPD increases slightly.",
      "type": "Buff",
      "effectName": "Impresario",
      "statusName": "Impresario"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__261154727\">Monster_W3_FigureBoss_Standard_BreakController</a>",
      "execute": [
        {
          "eventTrigger": "End Broken State [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Current Action Holder Is",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                }
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "HaveAnyChosenOne"
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 5,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"941590351\">Monster_W3_FigureBoss_Standard_TheChosenOne</a>[<span class=\"descriptionNumberColor\">Impresario</span>]"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "HaveAnyChosenOne",
                      "context": "TargetEntity",
                      "value": 1,
                      "max": 5
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "HaveAnyChosenOne",
                        "compareType": "=",
                        "value2": 0,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Add Target by Unique Identifier",
                          "identifier": "DollBoss"
                        },
                        "value1": "HP_Bars_Remaining",
                        "compareType": ">=",
                        "value2": 2
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
                      "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"941590351\">Monster_W3_FigureBoss_Standard_TheChosenOne</a>[<span class=\"descriptionNumberColor\">Impresario</span>]",
                      "valuePerStack": {
                        "MDF_BreakDelayRatio": {
                          "operator": "Variables[0] (MDF_BreakDelayRatio) || RETURN",
                          "displayLines": "MDF_BreakDelayRatio",
                          "constants": [],
                          "variables": [
                            "MDF_BreakDelayRatio"
                          ]
                        },
                        "MDF_ChosenOneSpeedUp": {
                          "operator": "Variables[0] (MDF_ChosenOneSpeedUp) || RETURN",
                          "displayLines": "MDF_ChosenOneSpeedUp",
                          "constants": [],
                          "variables": [
                            "MDF_ChosenOneSpeedUp"
                          ]
                        },
                        "MDF_ExploreDamagePercentage": {
                          "operator": "Variables[0] (MDF_ExploreDamagePercentage) || RETURN",
                          "displayLines": "MDF_ExploreDamagePercentage",
                          "constants": [],
                          "variables": [
                            "MDF_ExploreDamagePercentage"
                          ]
                        },
                        "MDF_ExploreDelayRatio": {
                          "operator": "Variables[0] (MDF_ExploreDelayRatio) || RETURN",
                          "displayLines": "MDF_ExploreDelayRatio",
                          "constants": [],
                          "variables": [
                            "MDF_ExploreDelayRatio"
                          ]
                        },
                        "MDF_ExploreDamageUpRatio": {
                          "operator": "Variables[0] (MDF_ExploreDamageUpRatio) || RETURN",
                          "displayLines": "MDF_ExploreDamageUpRatio",
                          "constants": [],
                          "variables": [
                            "MDF_ExploreDamageUpRatio"
                          ]
                        }
                      }
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
      "for": "<a class=\"gModGreen\" id=\"mod__-900182182\">Monster_W3_FigureBoss_Standard_Basic</a>[<span class=\"descriptionNumberColor\">\"Puppets of the Order\"</span>]",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "Puppets controlled by Order. Can become Impresario.",
      "type": "Other",
      "effectName": "\"Puppets of the Order\"",
      "statusName": "\"Puppets of the Order\""
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-51027530\">Monster_W3_FigureBoss_Standard_Part2Break</a>",
      "execute": [
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Trigger 0-Toughness",
              "target": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "BreakEndFlag",
        "InsertCheck",
        "AIFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-803712324\">Monster_W3_FigureBoss_Standard_DamageSplitPhase2</a>",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": [
        "BreakEndFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__988700955\">Monster_W3_FigureBoss_Standard_DamageSplit</a>",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Waiting for Healing in Limbo"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1551949671\">Monster_W3_FigureBoss_Standard_BossEnhance</a>",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Battle Event List}}"
              },
              "conditions": {
                "name": "Battle Event ID",
                "ID": 20019,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              "ifTargetFound": [
                {
                  "name": "Destroy Battle Entity",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Enemy ID",
                    "ID": 300401000,
                    "target": {
                      "name": "Add Target by Unique Identifier",
                      "identifier": "DollBoss"
                    },
                    "characterName": null
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Add Target by Unique Identifier",
                      "identifier": "DollBoss"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": ">=",
                    "value2": 2
                  }
                ]
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value": "W3_Figure_00"
                      },
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value": "W3_Figure_01"
                      },
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value": "W3_Figure_02"
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"941590351\">Monster_W3_FigureBoss_Standard_TheChosenOne</a>[<span class=\"descriptionNumberColor\">Impresario</span>]"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-724775683\">Monster_W3_FigureBoss_PartController</a>",
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
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-882985814\">RuanMei_PassiveArea_EnemyCD</a>"
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value": "W3_Figure_00"
                          },
                          {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value": "W3_Figure_01"
                          },
                          {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value": "W3_Figure_02"
                          }
                        ]
                      },
                      "ifTargetFound": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "Has Flag",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "flagName": "Break"
                              }
                            ]
                          }
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"941590351\">Monster_W3_FigureBoss_Standard_TheChosenOne</a>[<span class=\"descriptionNumberColor\">Impresario</span>]"
                        },
                        {
                          "name": "Dispel Debuffs",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "silent": true
                        },
                        {
                          "name": "Dispel Debuffs",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          }
                        }
                      ]
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
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W3_FigureBoss_PassiveAbility01_Insert",
                      "priorityTag": "MonsterChangePhase",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
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
                    "value1": "InsertCheck",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-882985814\">RuanMei_PassiveArea_EnemyCD</a>"
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value": "W3_Figure_00"
                          },
                          {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value": "W3_Figure_01"
                          },
                          {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value": "W3_Figure_02"
                          }
                        ]
                      },
                      "ifTargetFound": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "Has Flag",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "flagName": "Break"
                              }
                            ]
                          }
                        },
                        {
                          "name": "Dispel Debuffs",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          }
                        }
                      ]
                    },
                    {
                      "name": "Dispel Debuffs",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "silent": true
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
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W3_FigureBoss_PassiveAbility02_Insert",
                      "priorityTag": "MonsterChangePhase",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
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
      "for": "<a class=\"gModGreen\" id=\"mod__201948068\">Monster_W3_FigureBoss_ViewModeListener</a>",
      "execute": [
        {
          "eventTrigger": "Enter View-Mode [Anyone]"
        },
        {
          "eventTrigger": "Exit View-Mode [Anyone]"
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1675215449\">Monster_W3_FigureBoss_Initiate</a>",
      "modifierFlags": [
        "MuteSpeed",
        "ImmuneDebuff"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Create Shared HP Group",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "isRemove": true
            }
          ]
        },
        {
          "eventTrigger": "Action Phase Start [Anyone][?]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "W3_Figure_00"
                  },
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "W3_Figure_01"
                  },
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "W3_Figure_02"
                  }
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            "Mark Entity as Non-Target(Unselectable)",
            {
              "name": "Remove from Team Target Grouping",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "stayInTeam": false
            },
            {
              "name": "Boss Bar Display",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "display": true
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1551949671\">Monster_W3_FigureBoss_Standard_BossEnhance</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-848494172\">Monster_W3_FigureBoss_RLBoss_New_SummonMonster</a>"
              },
              "passed": [
                {
                  "name": "Create Enemies",
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__103) || RETURN",
                        "displayLines": "ENEMIES_OBJECT_UNUSED__103",
                        "constants": [],
                        "variables": [
                          "ENEMIES_OBJECT_UNUSED__103"
                        ]
                      },
                      "locationType": "Last"
                    }
                  ]
                },
                {
                  "name": "Create Enemies",
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__104) || RETURN",
                        "displayLines": "ENEMIES_OBJECT_UNUSED__104",
                        "constants": [],
                        "variables": [
                          "ENEMIES_OBJECT_UNUSED__104"
                        ]
                      },
                      "locationType": "Last"
                    }
                  ]
                },
                {
                  "name": "Create Enemies",
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__95) || RETURN",
                        "displayLines": "ENEMIES_OBJECT_UNUSED__95",
                        "constants": [],
                        "variables": [
                          "ENEMIES_OBJECT_UNUSED__95"
                        ]
                      },
                      "locationType": "Last"
                    }
                  ]
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
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "W3_Figure_00"
                  },
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "W3_Figure_01"
                  },
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "W3_Figure_02"
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"988700955\">Monster_W3_FigureBoss_Standard_DamageSplit</a>",
                  "casterAssign": "CasterSelf"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"261154727\">Monster_W3_FigureBoss_Standard_BreakController</a>",
                  "valuePerStack": {
                    "MDF_BreakDelayRatio": {
                      "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
                      "displayLines": "{[Skill01[0]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill01[0]]}"
                      ]
                    },
                    "MDF_ChosenOneSpeedUp": {
                      "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
                      "displayLines": "{[Skill01[1]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill01[1]]}"
                      ]
                    },
                    "MDF_ExploreDamagePercentage": {
                      "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
                      "displayLines": "{[Skill01[2]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill01[2]]}"
                      ]
                    },
                    "MDF_ExploreDelayRatio": {
                      "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
                      "displayLines": "{[Skill01[3]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill01[3]]}"
                      ]
                    },
                    "MDF_ExploreDamageUpRatio": {
                      "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
                      "displayLines": "{[Skill01[4]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill01[4]]}"
                      ]
                    }
                  }
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
                "name": "AND",
                "conditionList": [
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value": "W3_Figure_00"
                      },
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value": "W3_Figure_01"
                      },
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value": "W3_Figure_02"
                      }
                    ]
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team"
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": ">=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-803712324\">Monster_W3_FigureBoss_Standard_DamageSplitPhase2</a>",
                      "casterAssign": "CasterSelf"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"988700955\">Monster_W3_FigureBoss_Standard_DamageSplit</a>",
                      "casterAssign": "CasterSelf"
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"261154727\">Monster_W3_FigureBoss_Standard_BreakController</a>",
                  "valuePerStack": {
                    "MDF_BreakDelayRatio": {
                      "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
                      "displayLines": "{[Skill01[0]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill01[0]]}"
                      ]
                    },
                    "MDF_ChosenOneSpeedUp": {
                      "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
                      "displayLines": "{[Skill01[1]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill01[1]]}"
                      ]
                    },
                    "MDF_ExploreDamagePercentage": {
                      "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
                      "displayLines": "{[Skill01[2]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill01[2]]}"
                      ]
                    },
                    "MDF_ExploreDelayRatio": {
                      "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
                      "displayLines": "{[Skill01[3]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill01[3]]}"
                      ]
                    },
                    "MDF_ExploreDamageUpRatio": {
                      "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
                      "displayLines": "{[Skill01[4]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill01[4]]}"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "W3_Figure_00"
                  },
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "W3_Figure_01"
                  },
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "W3_Figure_02"
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Create Shared HP Group",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "subTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target List}}"
                  },
                  "resolveToSubGroups": true
                }
              ]
            },
            {
              "name": "Inject Ability Use",
              "abilityName": "Monster_W3_FigureBoss_Ability01_Insert_EnterCombat",
              "abilitySource": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "abilityTarget": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Is Part Of Team Location",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "team": "Enemy Team",
                      "location": "Pos2"
                    }
                  }
                ]
              },
              "priorityTag": "MonsterBattleCry",
              "canHitNonTargets": true,
              "valuePerStack": {
                "P1_BreakDelayRatio": {
                  "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
                  "displayLines": "{[Skill01[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[0]]}"
                  ]
                },
                "P2_ChosenOneSpeedUp": {
                  "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
                  "displayLines": "{[Skill01[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[1]]}"
                  ]
                },
                "P3_ExploreDamagePercentage": {
                  "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
                  "displayLines": "{[Skill01[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[2]]}"
                  ]
                },
                "P4_ExploreDelayRatio": {
                  "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
                  "displayLines": "{[Skill01[3]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[3]]}"
                  ]
                },
                "P5_ExploreDamageUpRatio": {
                  "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
                  "displayLines": "{[Skill01[4]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[4]]}"
                  ]
                }
              },
              "allowAbilityTriggers": false
            }
          ],
          "priorityLevel": -91
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-843842211\">W3_FigureBoss_BattleScore2</a>",
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
              "variableName": "W3_FigureBoss_00_BattleScore2_Flag1",
              "value": 2
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "W3_FigureBoss_00_BattleScore2_Flag1",
                "compareType": ">=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Achievement",
                  "relatedAchievements": [
                    {
                      "title": "One-Act Play",
                      "desc": "In the second phase of \"The Past, Present, and Eternal Show,\" the enemy uses \"Dance for Synchrony\" at most once",
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
      "latentQueue": [
        "BreakEndFlag",
        "InsertCheck",
        "AIFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-894175068\">W3_FigureBoss_BattleScore1</a>",
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
              "variableName": "W3_FigureBoss_00_BattleScore1_Flag1"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "W3_FigureBoss_00_BattleScore1_Flag2"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "W3_FigureBoss_00_BattleScore1_Flag3"
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
                    "modifier": "<a class=\"gModGreen\" id=\"-607059020\">Enemy_W3_DollElite_Commnon_TheChosenOne</a>[<span class=\"descriptionNumberColor\">Impresario</span>]"
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
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "W3_Figure_00"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "W3_FigureBoss_00_BattleScore1_Flag1",
                      "value": 1
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "W3_Figure_01"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "W3_FigureBoss_00_BattleScore1_Flag2",
                      "value": 1
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "W3_Figure_02"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "W3_FigureBoss_00_BattleScore1_Flag3",
                      "value": 1
                    }
                  ]
                },
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
                        "value1": "W3_FigureBoss_00_BattleScore1_Flag1",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "W3_FigureBoss_00_BattleScore1_Flag2",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "W3_FigureBoss_00_BattleScore1_Flag3",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "relatedAchievements": [
                        {
                          "title": "Ensemble Piece",
                          "desc": "In the first phase of \"The Past, Present, and Eternal Show,\" cause #1 enemies to take turns to become Impresario for 1 time",
                          "rarity": "Low",
                          "params": [
                            3
                          ]
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
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1855037437\">Enemy_W3_Figure_02_SuperArmorBreak</a>",
      "modifierFlags": [
        "STAT_SuperArmorBreak"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-237425029\">StanceBreakState_Effect</a>"
            }
          ]
        },
        {
          "eventTrigger": "End Broken State [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "When Modifier is Added [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"-237425029\">StanceBreakState_Effect</a>"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-237425029\">StanceBreakState_Effect</a>"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1924069150\">Enemy_W3_Figure_02_AIRecorder</a>",
      "execute": [
        {
          "eventTrigger": "Action End [Owner]",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "AIFlag",
              "value": {
                "operator": "Variables[0] (MDF_AIFlag) || RETURN",
                "displayLines": "MDF_AIFlag",
                "constants": [],
                "variables": [
                  "MDF_AIFlag"
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
              "set": {
                "operator": "Variables[0] (MDF_ActionDelay) || RETURN",
                "displayLines": "MDF_ActionDelay",
                "constants": [],
                "variables": [
                  "MDF_ActionDelay"
                ]
              }
            },
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Copy",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variable": "AIFlag",
              "target2": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variable2": "MDF_AIFlag"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_ActionDelay",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">ActionDelay</span>&nbsp;"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "AIFlag",
              "value": 10
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
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__851149437\">Enemy_W3_DollElite_Commnon_TheChosenOneEffect</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-607059020\">Enemy_W3_DollElite_Commnon_TheChosenOne</a>[<span class=\"descriptionNumberColor\">Impresario</span>]",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
            }
          ]
        },
        {
          "eventTrigger": "Action End [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"851149437\">Enemy_W3_DollElite_Commnon_TheChosenOneEffect</a>"
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
              "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>",
              "casterAssign": "TargetSelf"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"851149437\">Enemy_W3_DollElite_Commnon_TheChosenOneEffect</a>"
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_ChosenOneSpeedUp) || RETURN",
                "displayLines": "MDF_ChosenOneSpeedUp",
                "constants": [],
                "variables": [
                  "MDF_ChosenOneSpeedUp"
                ]
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
                "value1": "AIFlag",
                "compareType": "NOT=",
                "value2": 4,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 1
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 5
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Action Advance/Delay",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "advanceType": "Set",
              "multiAdd": "MDF_BreakDelayRatio"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Add Target by Unique Identifier",
                      "identifier": "DollBoss"
                    },
                    "value1": "CurrentHP%",
                    "compareType": ">",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Add Target by Unique Identifier",
                      "identifier": "DollBoss"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": ">=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "value": "W3_Figure_00"
                              },
                              {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "value": "W3_Figure_01"
                              },
                              {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "value": "W3_Figure_02"
                              }
                            ]
                          },
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "flagName": "Break",
                            "invertCondition": true
                          },
                          {
                            "name": "Compare: Target",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "target2": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "invertCondition": true
                          }
                        ]
                      },
                      "ifTargetFound": [
                        "Modifier Deletes Itself"
                      ],
                      "noTargetFound": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"851149437\">Enemy_W3_DollElite_Commnon_TheChosenOneEffect</a>"
                        },
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertCount",
                            "typeValue": 1
                          },
                          "abilityName": "Monster_W3_DollElite_Standard_Ability04_Insert_Explode",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Level Entity}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "priorityTag": "MonsterChangeState",
                          "canHitNonTargets": true,
                          "valuePerStack": {
                            "P1_BreakDelayRatio": {
                              "operator": "Variables[0] (MDF_BreakDelayRatio) || RETURN",
                              "displayLines": "MDF_BreakDelayRatio",
                              "constants": [],
                              "variables": [
                                "MDF_BreakDelayRatio"
                              ]
                            },
                            "P2_ChosenOneSpeedUp": {
                              "operator": "Variables[0] (MDF_ChosenOneSpeedUp) || RETURN",
                              "displayLines": "MDF_ChosenOneSpeedUp",
                              "constants": [],
                              "variables": [
                                "MDF_ChosenOneSpeedUp"
                              ]
                            },
                            "P3_ExploreDamagePercentage": {
                              "operator": "Variables[0] (MDF_ExploreDamagePercentage) || RETURN",
                              "displayLines": "MDF_ExploreDamagePercentage",
                              "constants": [],
                              "variables": [
                                "MDF_ExploreDamagePercentage"
                              ]
                            },
                            "P4_ExploreDelayRatio": {
                              "operator": "Variables[0] (MDF_ExploreDelayRatio) || RETURN",
                              "displayLines": "MDF_ExploreDelayRatio",
                              "constants": [],
                              "variables": [
                                "MDF_ExploreDelayRatio"
                              ]
                            },
                            "P5_ExploreDamageUpRatio": {
                              "operator": "Variables[0] (MDF_ExploreDamageUpRatio) || RETURN",
                              "displayLines": "MDF_ExploreDamageUpRatio",
                              "constants": [],
                              "variables": [
                                "MDF_ExploreDamageUpRatio"
                              ]
                            }
                          },
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "value": "W3_Figure_00"
                              },
                              {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "value": "W3_Figure_01"
                              },
                              {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "value": "W3_Figure_02"
                              }
                            ]
                          },
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "flagName": "Break",
                            "invertCondition": true
                          },
                          {
                            "name": "Compare: Target",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "target2": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "invertCondition": true
                          }
                        ]
                      },
                      "noTargetFound": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"851149437\">Enemy_W3_DollElite_Commnon_TheChosenOneEffect</a>"
                        }
                      ]
                    },
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertCount",
                        "typeValue": 1
                      },
                      "conditionActive": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Add Target by Unique Identifier",
                          "identifier": "DollBoss"
                        },
                        "value1": "HP_Bars_Remaining",
                        "compareType": "<",
                        "value2": 2
                      },
                      "abilityName": "Monster_W3_DollElite_Standard_Ability03_Insert_Transform",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "priorityTag": "MonsterChangeState",
                      "canHitNonTargets": true,
                      "valuePerStack": {
                        "P1_BreakDelayRatio": {
                          "operator": "Variables[0] (MDF_BreakDelayRatio) || RETURN",
                          "displayLines": "MDF_BreakDelayRatio",
                          "constants": [],
                          "variables": [
                            "MDF_BreakDelayRatio"
                          ]
                        },
                        "P2_ChosenOneSpeedUp": {
                          "operator": "Variables[0] (MDF_ChosenOneSpeedUp) || RETURN",
                          "displayLines": "MDF_ChosenOneSpeedUp",
                          "constants": [],
                          "variables": [
                            "MDF_ChosenOneSpeedUp"
                          ]
                        },
                        "P3_ExploreDamagePercentage": {
                          "operator": "Variables[0] (MDF_ExploreDamagePercentage) || RETURN",
                          "displayLines": "MDF_ExploreDamagePercentage",
                          "constants": [],
                          "variables": [
                            "MDF_ExploreDamagePercentage"
                          ]
                        },
                        "P4_ExploreDelayRatio": {
                          "operator": "Variables[0] (MDF_ExploreDelayRatio) || RETURN",
                          "displayLines": "MDF_ExploreDelayRatio",
                          "constants": [],
                          "variables": [
                            "MDF_ExploreDelayRatio"
                          ]
                        },
                        "P5_ExploreDamageUpRatio": {
                          "operator": "Variables[0] (MDF_ExploreDamageUpRatio) || RETURN",
                          "displayLines": "MDF_ExploreDamageUpRatio",
                          "constants": [],
                          "variables": [
                            "MDF_ExploreDamageUpRatio"
                          ]
                        }
                      },
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_BreakDelayRatio",
        "MDF_ChosenOneSpeedUp",
        "MDF_ExploreDamagePercentage",
        "MDF_ExploreDelayRatio",
        "MDF_ExploreDamageUpRatio"
      ],
      "latentQueue": [
        "BreakEndFlag"
      ],
      "description": "An extra action can be taken every turn with a slight increase in SPD.",
      "type": "Buff",
      "effectName": "Impresario",
      "statusName": "Impresario"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1842038910\">Enemy_W3_DollElite_Commnon_BreakController</a>",
      "execute": [
        {
          "eventTrigger": "End Broken State [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Current Action Holder Is",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                }
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "HaveAnyChosenOne"
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-607059020\">Enemy_W3_DollElite_Commnon_TheChosenOne</a>[<span class=\"descriptionNumberColor\">Impresario</span>]"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "HaveAnyChosenOne",
                      "context": "TargetEntity",
                      "value": 1,
                      "max": 5
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "HaveAnyChosenOne",
                        "compareType": "=",
                        "value2": 0,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Add Target by Unique Identifier",
                          "identifier": "DollBoss"
                        },
                        "value1": "HP_Bars_Remaining",
                        "compareType": ">=",
                        "value2": 2
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
                      "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-607059020\">Enemy_W3_DollElite_Commnon_TheChosenOne</a>[<span class=\"descriptionNumberColor\">Impresario</span>]",
                      "valuePerStack": {
                        "MDF_BreakDelayRatio": {
                          "operator": "Variables[0] (MDF_BreakDelayRatio) || RETURN",
                          "displayLines": "MDF_BreakDelayRatio",
                          "constants": [],
                          "variables": [
                            "MDF_BreakDelayRatio"
                          ]
                        },
                        "MDF_ChosenOneSpeedUp": {
                          "operator": "Variables[0] (MDF_ChosenOneSpeedUp) || RETURN",
                          "displayLines": "MDF_ChosenOneSpeedUp",
                          "constants": [],
                          "variables": [
                            "MDF_ChosenOneSpeedUp"
                          ]
                        },
                        "MDF_ExploreDamagePercentage": {
                          "operator": "Variables[0] (MDF_ExploreDamagePercentage) || RETURN",
                          "displayLines": "MDF_ExploreDamagePercentage",
                          "constants": [],
                          "variables": [
                            "MDF_ExploreDamagePercentage"
                          ]
                        },
                        "MDF_ExploreDelayRatio": {
                          "operator": "Variables[0] (MDF_ExploreDelayRatio) || RETURN",
                          "displayLines": "MDF_ExploreDelayRatio",
                          "constants": [],
                          "variables": [
                            "MDF_ExploreDelayRatio"
                          ]
                        },
                        "MDF_ExploreDamageUpRatio": {
                          "operator": "Variables[0] (MDF_ExploreDamageUpRatio) || RETURN",
                          "displayLines": "MDF_ExploreDamageUpRatio",
                          "constants": [],
                          "variables": [
                            "MDF_ExploreDamageUpRatio"
                          ]
                        }
                      }
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1336534629\">Enemy_W3_DollElite_Commnon_Basic</a>[<span class=\"descriptionNumberColor\">\"Puppets of the Order\"</span>]",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "Puppets controlled by Order. Can become Impresario.",
      "type": "Other",
      "effectName": "\"Puppets of the Order\"",
      "statusName": "\"Puppets of the Order\""
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1198317781\">Enemy_W3_DollElite_Commnon_Part2Break</a>",
      "execute": [
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Trigger 0-Toughness",
              "target": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "BreakEndFlag",
        "InsertCheck",
        "AIFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__911256169\">Enemy_W3_DollElite_Commnon_DamageSplitPhase2</a>",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Enemy ID",
                    "ID": 300401000,
                    "target": {
                      "name": "Add Target by Unique Identifier",
                      "identifier": "DollBoss"
                    },
                    "characterName": null
                  }
                ]
              },
              "passed": [
                {
                  "name": "Lock HP",
                  "threshold": 0.0009999999
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "BreakEndFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2051649734\">Enemy_W3_DollElite_Commnon_DamageSplit</a>",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Lock HP",
              "threshold": 0.0009999999
            }
          ]
        },
        {
          "eventTrigger": "Waiting for Healing in Limbo"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1064046612\">Enemy_W3_DollElite_Commnon_BossEnhance</a>",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Battle Event List}}"
              },
              "conditions": {
                "name": "Battle Event ID",
                "ID": 20012,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              "ifTargetFound": [
                {
                  "name": "Destroy Battle Entity",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Enemy ID",
                    "ID": 300401000,
                    "target": {
                      "name": "Add Target by Unique Identifier",
                      "identifier": "DollBoss"
                    },
                    "characterName": null
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Add Target by Unique Identifier",
                      "identifier": "DollBoss"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": ">=",
                    "value2": 2
                  }
                ]
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value": "W3_Figure_00"
                      },
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value": "W3_Figure_01"
                      },
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value": "W3_Figure_02"
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "flagName": "Break"
                          }
                        ]
                      }
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-607059020\">Enemy_W3_DollElite_Commnon_TheChosenOne</a>[<span class=\"descriptionNumberColor\">Impresario</span>]"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-48704972\">WMonster_W3_DollElite01_PartController</a>",
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
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-882985814\">RuanMei_PassiveArea_EnemyCD</a>"
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value": "W3_Figure_00"
                          },
                          {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value": "W3_Figure_01"
                          },
                          {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value": "W3_Figure_02"
                          }
                        ]
                      },
                      "ifTargetFound": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "Has Flag",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "flagName": "Break"
                              }
                            ]
                          }
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-607059020\">Enemy_W3_DollElite_Commnon_TheChosenOne</a>[<span class=\"descriptionNumberColor\">Impresario</span>]"
                        },
                        {
                          "name": "Dispel Debuffs",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "silent": true
                        },
                        {
                          "name": "Dispel Debuffs",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          }
                        }
                      ]
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
                      "name": "Inject Ability Use",
                      "abilityName": "WMonster_W3_DollElite01_PassiveAbility01_Insert",
                      "priorityTag": "MonsterChangePhase",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
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
      "for": "<a class=\"gModGreen\" id=\"mod__-366928355\">Enemy_W3_DollElite_Boss_ViewModeListener</a>",
      "execute": [
        {
          "eventTrigger": "Enter View-Mode [Anyone]"
        },
        {
          "eventTrigger": "Exit View-Mode [Anyone]"
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-972729784\">Enemy_W3_DollElite_Boss_Initiate</a>",
      "modifierFlags": [
        "MuteSpeed",
        "ImmuneDebuff"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Create Shared HP Group",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "isRemove": true
            }
          ]
        },
        {
          "eventTrigger": "Action Phase Start [Anyone][?]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "W3_Figure_00"
                  },
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "W3_Figure_01"
                  },
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "W3_Figure_02"
                  }
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            "Mark Entity as Non-Target(Unselectable)",
            {
              "name": "Remove from Team Target Grouping",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "stayInTeam": false
            },
            {
              "name": "Boss Bar Display",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "display": true
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1064046612\">Enemy_W3_DollElite_Commnon_BossEnhance</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-942301720\">Monster_W3_FigureBoss_New_SummonMonster</a>"
              },
              "passed": [
                {
                  "name": "Create Enemies",
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__103) || RETURN",
                        "displayLines": "ENEMIES_OBJECT_UNUSED__103",
                        "constants": [],
                        "variables": [
                          "ENEMIES_OBJECT_UNUSED__103"
                        ]
                      },
                      "locationType": "Last"
                    }
                  ]
                },
                {
                  "name": "Create Enemies",
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__104) || RETURN",
                        "displayLines": "ENEMIES_OBJECT_UNUSED__104",
                        "constants": [],
                        "variables": [
                          "ENEMIES_OBJECT_UNUSED__104"
                        ]
                      },
                      "locationType": "Last"
                    }
                  ]
                },
                {
                  "name": "Create Enemies",
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__95) || RETURN",
                        "displayLines": "ENEMIES_OBJECT_UNUSED__95",
                        "constants": [],
                        "variables": [
                          "ENEMIES_OBJECT_UNUSED__95"
                        ]
                      },
                      "locationType": "Last"
                    }
                  ]
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
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "W3_Figure_00"
                  },
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "W3_Figure_01"
                  },
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "W3_Figure_02"
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2051649734\">Enemy_W3_DollElite_Commnon_DamageSplit</a>",
                  "casterAssign": "CasterSelf"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1842038910\">Enemy_W3_DollElite_Commnon_BreakController</a>",
                  "valuePerStack": {
                    "MDF_BreakDelayRatio": {
                      "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
                      "displayLines": "{[Skill01[0]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill01[0]]}"
                      ]
                    },
                    "MDF_ChosenOneSpeedUp": {
                      "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
                      "displayLines": "{[Skill01[1]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill01[1]]}"
                      ]
                    },
                    "MDF_ExploreDamagePercentage": {
                      "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
                      "displayLines": "{[Skill01[2]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill01[2]]}"
                      ]
                    },
                    "MDF_ExploreDelayRatio": {
                      "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
                      "displayLines": "{[Skill01[3]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill01[3]]}"
                      ]
                    },
                    "MDF_ExploreDamageUpRatio": {
                      "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
                      "displayLines": "{[Skill01[4]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill01[4]]}"
                      ]
                    }
                  }
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
                "name": "AND",
                "conditionList": [
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value": "W3_Figure_00"
                      },
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value": "W3_Figure_01"
                      },
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value": "W3_Figure_02"
                      }
                    ]
                  },
                  {
                    "name": "Is Related Summoned Entity",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "invertCondition": true
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team"
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": ">=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"911256169\">Enemy_W3_DollElite_Commnon_DamageSplitPhase2</a>",
                      "casterAssign": "CasterSelf"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2051649734\">Enemy_W3_DollElite_Commnon_DamageSplit</a>",
                      "casterAssign": "CasterSelf"
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1842038910\">Enemy_W3_DollElite_Commnon_BreakController</a>",
                  "valuePerStack": {
                    "MDF_BreakDelayRatio": {
                      "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
                      "displayLines": "{[Skill01[0]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill01[0]]}"
                      ]
                    },
                    "MDF_ChosenOneSpeedUp": {
                      "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
                      "displayLines": "{[Skill01[1]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill01[1]]}"
                      ]
                    },
                    "MDF_ExploreDamagePercentage": {
                      "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
                      "displayLines": "{[Skill01[2]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill01[2]]}"
                      ]
                    },
                    "MDF_ExploreDelayRatio": {
                      "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
                      "displayLines": "{[Skill01[3]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill01[3]]}"
                      ]
                    },
                    "MDF_ExploreDamageUpRatio": {
                      "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
                      "displayLines": "{[Skill01[4]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill01[4]]}"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "W3_Figure_00"
                  },
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "W3_Figure_01"
                  },
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "W3_Figure_02"
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Create Shared HP Group",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "subTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target List}}"
                  }
                }
              ]
            },
            {
              "name": "Inject Ability Use",
              "abilityName": "Monster_W3_DollElite_Standard_Ability01_Insert_EnterCombat",
              "abilitySource": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "abilityTarget": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Is Part Of Team Location",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "team": "Enemy Team",
                      "location": "Pos2"
                    }
                  }
                ]
              },
              "priorityTag": "MonsterBattleCry",
              "canHitNonTargets": true,
              "valuePerStack": {
                "P1_BreakDelayRatio": {
                  "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
                  "displayLines": "{[Skill01[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[0]]}"
                  ]
                },
                "P2_ChosenOneSpeedUp": {
                  "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
                  "displayLines": "{[Skill01[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[1]]}"
                  ]
                },
                "P3_ExploreDamagePercentage": {
                  "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
                  "displayLines": "{[Skill01[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[2]]}"
                  ]
                },
                "P4_ExploreDelayRatio": {
                  "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
                  "displayLines": "{[Skill01[3]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[3]]}"
                  ]
                },
                "P5_ExploreDamageUpRatio": {
                  "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
                  "displayLines": "{[Skill01[4]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[4]]}"
                  ]
                }
              },
              "allowAbilityTriggers": false
            }
          ],
          "priorityLevel": -91
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "references": []
}