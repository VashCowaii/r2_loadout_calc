const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 5023020,
  "trimCharacterName": 5023020,
  "abilityList": [
    "5023020_Modifiers",
    "5023020_Monster_W5_Eater_Ability03_Part02",
    "5023020_Monster_W5_Eater_Ability03_Part01",
    "5023020_Monster_W5_Eater_PassiveAbilityInitiate",
    "5023020_Monster_W5_Eater_Ability04_Part02",
    "5023020_Monster_W5_Eater_Ability04_Part01",
    "5023020_Monster_W5_Eater_Ability02_Part02",
    "5023020_Monster_W5_Eater_Ability02_Part01",
    "5023020_Monster_W5_Eater_Ability01_Part02",
    "5023020_Monster_W5_Eater_Ability01_Part01",
    "5023020_Monster_W5_Eater_Ability03_Part03",
    "5023020_Handling",
    "5023020_Handling_OVERRIDE_502302001",
    "5023020_Handling_OVERRIDE_502302002",
    "5023020_Handling_OVERRIDE_502302004",
    "5023020_Handling_OVERRIDE_502302005"
  ],
  "abilityObject": {
    "5023020_Modifiers": {
      "fileName": "5023020_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__555908682\">Enemy_W5_Eater_Ability03_Attack</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
          "stackType": "Multiple",
          "description": "ATK increases by <span class=\"descriptionNumberColor\">MDF_Attack</span>.",
          "type": "Buff",
          "effectName": "ATK Boost",
          "statusName": "ATK Boost",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Search",
                        "entityType": "Avatar",
                        "teamType": "Player Team",
                        "livingState": "Mask_AliveOnly"
                      },
                      {
                        "name": "Sort by Stat",
                        "stat": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;",
                        "sortByHighest": true
                      },
                      {
                        "name": "Return Target",
                        "value": 1
                      }
                    ]
                  },
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
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
                      "passed": [
                        {
                          "name": "Achievement",
                          "matchTags": true,
                          "relatedAchievements": [
                            {
                              "title": "Gut Liberator",
                              "desc": "In combat against God-Devourer Offspring, use ally character with the highest ATK to dispel the \"Devour\" state and gain bonus ATK",
                              "rarity": "Low"
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
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">AttackConverted</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_Attack) || RETURN",
                    "displayLines": "MDF_Attack",
                    "constants": [],
                    "variables": [
                      "MDF_Attack"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1281011999\">Enemy_W5_Eater_Ability02_Attack</a>",
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
                    "operator": "Variables[0] (MDF_Attack) || RETURN",
                    "displayLines": "MDF_Attack",
                    "constants": [],
                    "variables": [
                      "MDF_Attack"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1972425744\">Enemy_W5_Eater_Ability02_Eater</a>[<span class=\"descriptionNumberColor\">Satiated</span>]",
          "modifierFlags": [
            "Deathrattle"
          ],
          "description": "Steals <span class=\"descriptionNumberColor\">MDF_Attack</span> ATK. Each time after it is attacked by an target unit, increases the Maximum Restorable HP of targets inflicted with the \"Devour\" state by this unit, and returns a certain percentage of ATK. After being attacked by target units a certain number of times or when having its Weakness Broken, dispels the \"Devour\" state inflicted by this unit.",
          "type": "Other",
          "effectName": "Satiated",
          "statusName": "Satiated",
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
                  "modifier": "<a class=\"gModGreen\" id=\"1281011999\">Enemy_W5_Eater_Ability02_Attack</a>",
                  "valuePerStack": {
                    "MDF_Attack": {
                      "operator": "Variables[0] ({[Skill02[4]]}) || RETURN",
                      "displayLines": "{[Skill02[4]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill02[4]]}"
                      ]
                    }
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_CurrentCount",
                  "value": {
                    "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                    "displayLines": "{[Skill02[3]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill02[3]]}"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_ShowCount",
                  "value": {
                    "operator": "Variables[0] (MDF_CurrentCount) || Variables[1] ({[Skill02[3]]}) || DIV || Variables[2] ({[Skill02[0]]}) || MUL || RETURN",
                    "displayLines": "((MDF_CurrentCount / {[Skill02[3]]}) * {[Skill02[0]]})",
                    "constants": [],
                    "variables": [
                      "MDF_CurrentCount",
                      "{[Skill02[3]]}",
                      "{[Skill02[0]]}"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "AIFlag",
                  "value": 1
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "assignState": "False"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1281011999\">Enemy_W5_Eater_Ability02_Attack</a>"
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}"
                  },
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-662226107\">Enemy_W5_Eater_Ability02_Ate</a>[<span class=\"descriptionNumberColor\">Devour</span>]",
                    "casterFilter": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  },
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-662226107\">Enemy_W5_Eater_Ability02_Ate</a>[<span class=\"descriptionNumberColor\">Devour</span>]"
                    },
                    {
                      "name": "Heal",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "healPercent": {
                        "operator": "Variables[0] (MDF_ShowCount) || RETURN",
                        "displayLines": "MDF_ShowCount",
                        "constants": [],
                        "variables": [
                          "MDF_ShowCount"
                        ]
                      },
                      "formula": "Heal from Target MaxHP"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": [
                      "STAT_CTRL_Frozen",
                      "STAT_CTRL_Frozen_Effect"
                    ],
                    "invertCondition": true
                  }
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-662226107\">Enemy_W5_Eater_Ability02_Ate</a>[<span class=\"descriptionNumberColor\">Devour</span>]",
                    "casterFilter": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Was Killed (Queued) [Owner]",
              "execute": [
                {
                  "name": "Abort Ability Use",
                  "abilityName": "Monster_W5_Eater_Ability03_Part01",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
                    },
                    "mustBeAlive2": true
                  },
                  "passed": [
                    {
                      "name": "Add Stage Ability",
                      "abilityName": "Monster_W5_Eater_Ability03_Part03"
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W5_Eater_Ability03_Part03",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "priorityTag": "EnemyBuffOthers",
                      "valuePerStack": {
                        "Ability03_Attack": {
                          "operator": "Variables[0] (MDF_LoseAttack) || Variables[1] ({[Skill03[0]]}) || MUL || RETURN",
                          "displayLines": "(MDF_LoseAttack * {[Skill03[0]]})",
                          "constants": [],
                          "variables": [
                            "MDF_LoseAttack",
                            "{[Skill03[0]]}"
                          ]
                        },
                        "Ability03_LifeTime": {
                          "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
                          "displayLines": "{[Skill03[1]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill03[1]]}"
                          ]
                        }
                      },
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked [Owner]: End",
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
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_CurrentCount",
                      "value": -1
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_ShowCount",
                      "value": {
                        "operator": "Variables[0] (MDF_CurrentCount) || Variables[1] ({[Skill02[3]]}) || DIV || Variables[2] ({[Skill02[0]]}) || MUL || RETURN",
                        "displayLines": "((MDF_CurrentCount / {[Skill02[3]]}) * {[Skill02[0]]})",
                        "constants": [],
                        "variables": [
                          "MDF_CurrentCount",
                          "{[Skill02[3]]}",
                          "{[Skill02[0]]}"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Attack",
                      "value": {
                        "operator": "Variables[0] (MDF_CurrentCount) || Variables[1] ({[Skill02[3]]}) || DIV || Variables[2] (MDF_LoseAttack) || MUL || RETURN",
                        "displayLines": "((MDF_CurrentCount / {[Skill02[3]]}) * MDF_LoseAttack)",
                        "constants": [],
                        "variables": [
                          "MDF_CurrentCount",
                          "{[Skill02[3]]}",
                          "MDF_LoseAttack"
                        ]
                      }
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (MDF_CurrentCount) || RETURN",
                        "displayLines": "MDF_CurrentCount",
                        "constants": [],
                        "variables": [
                          "MDF_CurrentCount"
                        ]
                      },
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "assignState": "True",
                      "state": "Active"
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)V2}}"
                      },
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-662226107\">Enemy_W5_Eater_Ability02_Ate</a>[<span class=\"descriptionNumberColor\">Devour</span>]",
                        "casterFilter": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      },
                      "ifTargetFound": [
                        {
                          "name": "Define Modifier-Specific Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifierName": "<a class=\"gModGreen\" id=\"-662226107\">Enemy_W5_Eater_Ability02_Ate</a>[<span class=\"descriptionNumberColor\">Devour</span>]",
                          "variableName": "MDF_DirtyHPRatio",
                          "value": {
                            "operator": "Variables[0] (MDF_ShowCount) || RETURN",
                            "displayLines": "MDF_ShowCount",
                            "constants": [],
                            "variables": [
                              "MDF_ShowCount"
                            ]
                          }
                        },
                        {
                          "name": "Define Modifier-Specific Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifierName": "<a class=\"gModGreen\" id=\"-662226107\">Enemy_W5_Eater_Ability02_Ate</a>[<span class=\"descriptionNumberColor\">Devour</span>]",
                          "variableName": "MDF_LoseAttack",
                          "value": {
                            "operator": "Variables[0] (MDF_Attack) || RETURN",
                            "displayLines": "MDF_Attack",
                            "constants": [],
                            "variables": [
                              "MDF_Attack"
                            ]
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"201524254\">Enemy_W5_Eater_Ability02_BlackBlood</a>",
                          "valuePerStack": {
                            "MDF_DirtyHPRatio": {
                              "operator": "Variables[0] (MDF_ShowCount) || RETURN",
                              "displayLines": "MDF_ShowCount",
                              "constants": [],
                              "variables": [
                                "MDF_ShowCount"
                              ]
                            }
                          }
                        },
                        {
                          "name": "Heal",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "healPercent": {
                            "operator": "Variables[0] ({[Skill02[0]]}) || Variables[1] ({[Skill02[3]]}) || DIV || RETURN",
                            "displayLines": "({[Skill02[0]]} / {[Skill02[3]]})",
                            "constants": [],
                            "variables": [
                              "{[Skill02[0]]}",
                              "{[Skill02[3]]}"
                            ]
                          },
                          "formula": "Heal from Target MaxHP"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1501806678\">Enemy_W5_Eater_Ability02_LoseAttack</a>",
                          "valuePerStack": {
                            "MDF_LoseAttack": {
                              "operator": "Variables[0] (MDF_Attack) || RETURN",
                              "displayLines": "MDF_Attack",
                              "constants": [],
                              "variables": [
                                "MDF_Attack"
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
                          "modifier": "<a class=\"gModGreen\" id=\"1281011999\">Enemy_W5_Eater_Ability02_Attack</a>",
                          "valuePerStack": {
                            "MDF_Attack": {
                              "operator": "Variables[0] (MDF_CurrentCount) || Variables[1] ({[Skill02[3]]}) || DIV || Variables[2] ({[Skill02[4]]}) || MUL || RETURN",
                              "displayLines": "((MDF_CurrentCount / {[Skill02[3]]}) * {[Skill02[4]]})",
                              "constants": [],
                              "variables": [
                                "MDF_CurrentCount",
                                "{[Skill02[3]]}",
                                "{[Skill02[4]]}"
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
                        "value1": "MDF_CurrentCount",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Is Part Of",
                            "of": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "target": {
                              "name": "Target Name",
                              "target": "{{Player Team All(with Unselectable)V2}}"
                            },
                            "mustBeAlive2": true
                          },
                          "passed": [
                            {
                              "name": "Inject Ability Use",
                              "condition": {
                                "name": "Insert Ability Condition",
                                "type": "AbilityOwnerInsertUnusedCount",
                                "typeValue": 1
                              },
                              "abilityName": "Monster_W5_Eater_Ability03_Part01",
                              "abilityTarget": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "priorityTag": "EnemyBuffOthers",
                              "showInActionOrder": true,
                              "abortFlags": [
                                "Break"
                              ],
                              "allowAbilityTriggers": false
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
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                "Modifier Deletes Itself",
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
                    },
                    "mustBeAlive2": true
                  },
                  "passed": [
                    {
                      "name": "Add Stage Ability",
                      "abilityName": "Monster_W5_Eater_Ability03_Part03"
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W5_Eater_Ability03_Part03",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "priorityTag": "EnemyBuffOthers",
                      "valuePerStack": {
                        "Ability03_Attack": {
                          "operator": "Variables[0] (MDF_LoseAttack) || Variables[1] ({[Skill03[0]]}) || MUL || RETURN",
                          "displayLines": "(MDF_LoseAttack * {[Skill03[0]]})",
                          "constants": [],
                          "variables": [
                            "MDF_LoseAttack",
                            "{[Skill03[0]]}"
                          ]
                        },
                        "Ability03_LifeTime": {
                          "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
                          "displayLines": "{[Skill03[1]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill03[1]]}"
                          ]
                        }
                      },
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Owner]: Aborted",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Parameter String",
                    "compareType": "=",
                    "value2": "Monster_W5_Eater_Ability03_Part01"
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
          "for": "<a class=\"gModGreen\" id=\"mod__201524254\">Enemy_W5_Eater_Ability02_BlackBlood</a>",
          "stackType": "ReplaceByCaster",
          "stackData": [
            "MDF_DirtyHPRatio"
          ],
          "latentQueue": [
            "AIFlag"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBlock%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_DirtyHPRatio) || RETURN",
                    "displayLines": "MDF_DirtyHPRatio",
                    "constants": [],
                    "variables": [
                      "MDF_DirtyHPRatio"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1501806678\">Enemy_W5_Eater_Ability02_LoseAttack</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_AttackDown"
          ],
          "stackData": [
            "MDF_LoseAttack"
          ],
          "latentQueue": [
            "AIFlag"
          ],
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
                  "variableName": "MDF_BaseAttack",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;"
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_LoseAttack) || INVERT || Variables[1] (MDF_BaseAttack) || DIV || RETURN",
                    "displayLines": "(-MDF_LoseAttack / MDF_BaseAttack)",
                    "constants": [],
                    "variables": [
                      "MDF_LoseAttack",
                      "MDF_BaseAttack"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-662226107\">Enemy_W5_Eater_Ability02_Ate</a>[<span class=\"descriptionNumberColor\">Devour</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Maximum Restorable HP decreases by <span class=\"descriptionNumberColor\">MDF_DirtyHPRatio</span>, and <span class=\"descriptionNumberColor\">MDF_LoseAttack</span> ATK is stolen by \"%CasterName.\"",
          "type": "Other",
          "effectName": "Devour",
          "statusName": "Devour",
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
                  "modifier": "<a class=\"gModGreen\" id=\"201524254\">Enemy_W5_Eater_Ability02_BlackBlood</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1501806678\">Enemy_W5_Eater_Ability02_LoseAttack</a>"
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
                  "variableName": "MDF_Attack",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_LoseAttack",
                  "value": {
                    "operator": "Variables[0] (MIN) || Variables[1] (MDF_Attack) || Variables[2] (MDF_AttackRatio) || MUL || Variables[3] (MDF_AttackMax) || PARAM_2 || FUNCTION || RETURN",
                    "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>((MDF_Attack * MDF_AttackRatio), MDF_AttackMax)",
                    "constants": [],
                    "variables": [
                      "MIN",
                      "MDF_Attack",
                      "MDF_AttackRatio",
                      "MDF_AttackMax"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1501806678\">Enemy_W5_Eater_Ability02_LoseAttack</a>",
                  "valuePerStack": {
                    "MDF_LoseAttack": {
                      "operator": "Variables[0] (MDF_LoseAttack) || RETURN",
                      "displayLines": "MDF_LoseAttack",
                      "constants": [],
                      "variables": [
                        "MDF_LoseAttack"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1742639356\">Enemy_W5_Eater_Ability02_Ate_Sub</a>",
          "stackType": "ReplaceByCaster",
          "addStacksPerTrigger": 1,
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"201524254\">Enemy_W5_Eater_Ability02_BlackBlood</a>",
                  "valuePerStack": {
                    "MDF_DirtyHPRatio": {
                      "operator": "Variables[0] ({[Skill02[0]]}) || Variables[1] (MDF_MaxLayer) || DIV || Variables[2] (MDF_Layer) || MUL || RETURN",
                      "displayLines": "(({[Skill02[0]]} / MDF_MaxLayer) * MDF_Layer)",
                      "constants": [],
                      "variables": [
                        "{[Skill02[0]]}",
                        "MDF_MaxLayer",
                        "MDF_Layer"
                      ]
                    }
                  }
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (MDF_Layer) || RETURN",
                    "displayLines": "MDF_Layer",
                    "constants": [],
                    "variables": [
                      "MDF_Layer"
                    ]
                  },
                  "entityClass": "Enemy",
                  "maximum": {
                    "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                    "displayLines": "MDF_MaxLayer",
                    "constants": [],
                    "variables": [
                      "MDF_MaxLayer"
                    ]
                  },
                  "assignState": "True",
                  "state": "Active"
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "5023020_Monster_W5_Eater_Ability03_Part02": {
      "fileName": "5023020_Monster_W5_Eater_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable with Copy",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1972425744\">Enemy_W5_Eater_Ability02_Eater</a>[<span class=\"descriptionNumberColor\">Satiated</span>]",
          "variable": "MDF_LoseAttack",
          "target2": null,
          "variable2": "Skill03_Attack"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Skill03_Attack",
          "value": {
            "operator": "Variables[0] (Skill03_Attack) || Variables[1] ({[Skill03[0]]}) || MUL || RETURN",
            "displayLines": "(Skill03_Attack * {[Skill03[0]]})",
            "constants": [],
            "variables": [
              "Skill03_Attack",
              "{[Skill03[0]]}"
            ]
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1972425744\">Enemy_W5_Eater_Ability02_Eater</a>[<span class=\"descriptionNumberColor\">Satiated</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"555908682\">Enemy_W5_Eater_Ability03_Attack</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
            "displayLines": "{[Skill03[1]]}",
            "constants": [],
            "variables": [
              "{[Skill03[1]]}"
            ]
          },
          "valuePerStack": {
            "MDF_Attack": {
              "operator": "Variables[0] (Skill03_Attack) || RETURN",
              "displayLines": "Skill03_Attack",
              "constants": [],
              "variables": [
                "Skill03_Attack"
              ]
            }
          },
          "casterAssign": "TargetSelf"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "5023020_Monster_W5_Eater_Ability03_Part01": {
      "fileName": "5023020_Monster_W5_Eater_Ability03_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "Monster_W5_Eater_Ability03_Part02",
          "isTrigger": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "flagName": [
              "STAT_CTRL_Frozen",
              "STAT_CTRL_Frozen_Effect"
            ],
            "invertCondition": true
          }
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "5023020_Monster_W5_Eater_PassiveAbilityInitiate": {
      "fileName": "5023020_Monster_W5_Eater_PassiveAbilityInitiate",
      "skillTrigger": "PassiveSkill01",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "5023020_Monster_W5_Eater_Ability04_Part02": {
      "fileName": "5023020_Monster_W5_Eater_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
              "displayLines": "{[Skill04[0]]}",
              "constants": [],
              "variables": [
                "{[Skill04[0]]}"
              ]
            },
            "HitSplit": 0.125,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
              "displayLines": "{[Skill04[0]]}",
              "constants": [],
              "variables": [
                "{[Skill04[0]]}"
              ]
            },
            "HitSplit": 0.125,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
              "displayLines": "{[Skill04[0]]}",
              "constants": [],
              "variables": [
                "{[Skill04[0]]}"
              ]
            },
            "HitSplit": 0.125,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
              "displayLines": "{[Skill04[0]]}",
              "constants": [],
              "variables": [
                "{[Skill04[0]]}"
              ]
            },
            "HitSplit": 0.125,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
              "displayLines": "{[Skill04[0]]}",
              "constants": [],
              "variables": [
                "{[Skill04[0]]}"
              ]
            },
            "HitSplit": 0.125,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
              "displayLines": "{[Skill04[0]]}",
              "constants": [],
              "variables": [
                "{[Skill04[0]]}"
              ]
            },
            "HitSplit": 0.125,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
              "displayLines": "{[Skill04[0]]}",
              "constants": [],
              "variables": [
                "{[Skill04[0]]}"
              ]
            },
            "HitSplit": 0.125,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
              "displayLines": "{[Skill04[0]]}",
              "constants": [],
              "variables": [
                "{[Skill04[0]]}"
              ]
            },
            "HitSplit": 0.125,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "5023020_Monster_W5_Eater_Ability04_Part01": {
      "fileName": "5023020_Monster_W5_Eater_Ability04_Part01",
      "childAbilityList": [
        "5023020_Monster_W5_Eater_Ability04_Camera",
        "5023020_Monster_W5_Eater_Ability04_Part01",
        "5023020_Monster_W5_Eater_Ability04_Part02"
      ],
      "skillTrigger": "Skill04",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W5_Eater_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "5023020_Monster_W5_Eater_Ability02_Part02": {
      "fileName": "5023020_Monster_W5_Eater_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-662226107\">Enemy_W5_Eater_Ability02_Ate</a>[<span class=\"descriptionNumberColor\">Devour</span>]",
          "valuePerStack": {
            "MDF_AttackRatio": {
              "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
              "displayLines": "{[Skill02[1]]}",
              "constants": [],
              "variables": [
                "{[Skill02[1]]}"
              ]
            },
            "MDF_AttackMax": {
              "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
              "displayLines": "{[Skill02[2]]}",
              "constants": [],
              "variables": [
                "{[Skill02[2]]}"
              ]
            },
            "MDF_DirtyHPRatio": {
              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
              "displayLines": "{[Skill02[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}"
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1742639356\">Enemy_W5_Eater_Ability02_Ate_Sub</a>",
          "stackLimit": {
            "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
            "displayLines": "{[Skill02[3]]}",
            "constants": [],
            "variables": [
              "{[Skill02[3]]}"
            ]
          },
          "valuePerStack": {
            "MDF_MaxLayer": {
              "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
              "displayLines": "{[Skill02[3]]}",
              "constants": [],
              "variables": [
                "{[Skill02[3]]}"
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1742639356\">Enemy_W5_Eater_Ability02_Ate_Sub</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1742639356\">Enemy_W5_Eater_Ability02_Ate_Sub</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1742639356\">Enemy_W5_Eater_Ability02_Ate_Sub</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1742639356\">Enemy_W5_Eater_Ability02_Ate_Sub</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1742639356\">Enemy_W5_Eater_Ability02_Ate_Sub</a>",
          "addStacksPerTrigger": {
            "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
            "displayLines": "{[Skill02[3]]}",
            "constants": [],
            "variables": [
              "{[Skill02[3]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable with Copy",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-662226107\">Enemy_W5_Eater_Ability02_Ate</a>[<span class=\"descriptionNumberColor\">Devour</span>]",
          "variable": "MDF_LoseAttack",
          "target2": null,
          "variable2": "Skill02_Attack"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1972425744\">Enemy_W5_Eater_Ability02_Eater</a>[<span class=\"descriptionNumberColor\">Satiated</span>]",
          "valuePerStack": {
            "MDF_LoseAttack": {
              "operator": "Variables[0] (Skill02_Attack) || RETURN",
              "displayLines": "Skill02_Attack",
              "constants": [],
              "variables": [
                "Skill02_Attack"
              ]
            },
            "MDF_Attack": {
              "operator": "Variables[0] (Skill02_Attack) || RETURN",
              "displayLines": "Skill02_Attack",
              "constants": [],
              "variables": [
                "Skill02_Attack"
              ]
            }
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1742639356\">Enemy_W5_Eater_Ability02_Ate_Sub</a>"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "5023020_Monster_W5_Eater_Ability02_Part01": {
      "fileName": "5023020_Monster_W5_Eater_Ability02_Part01",
      "childAbilityList": [
        "5023020_Monster_W5_Eater_Ability02_Camera",
        "5023020_Monster_W5_Eater_Ability02_Part01",
        "5023020_Monster_W5_Eater_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W5_Eater_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target",
        "allowMemoHostileTarget": "Forbidden"
      },
      "references": []
    },
    "5023020_Monster_W5_Eater_Ability01_Part02": {
      "fileName": "5023020_Monster_W5_Eater_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
              "displayLines": "{[Skill01[0]]}",
              "constants": [],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "HitSplit": 0.3,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
              "displayLines": "{[Skill01[0]]}",
              "constants": [],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "HitSplit": 0.7,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"914391189\">Standard_DefenceRatioDown</a>[<span class=\"descriptionNumberColor\">DEF Reduction</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
            "displayLines": "{[Skill01[3]]}",
            "constants": [],
            "variables": [
              "{[Skill01[3]]}"
            ]
          },
          "baseChance": {
            "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
            "displayLines": "{[Skill01[1]]}",
            "constants": [],
            "variables": [
              "{[Skill01[1]]}"
            ]
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
              "displayLines": "{[Skill01[2]]}",
              "constants": [],
              "variables": [
                "{[Skill01[2]]}"
              ]
            }
          }
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "5023020_Monster_W5_Eater_Ability01_Part01": {
      "fileName": "5023020_Monster_W5_Eater_Ability01_Part01",
      "childAbilityList": [
        "5023020_Monster_W5_Eater_Ability01_Camera",
        "5023020_Monster_W5_Eater_Ability01_Part01",
        "5023020_Monster_W5_Eater_Ability01_Part02"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W5_Eater_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      },
      "references": []
    },
    "5023020_Monster_W5_Eater_Ability03_Part03": {
      "fileName": "5023020_Monster_W5_Eater_Ability03_Part03",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"555908682\">Enemy_W5_Eater_Ability03_Attack</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
          "duration": {
            "operator": "Variables[0] (Skill03_LifeTime) || RETURN",
            "displayLines": "Skill03_LifeTime",
            "constants": [],
            "variables": [
              "Skill03_LifeTime"
            ]
          },
          "valuePerStack": {
            "MDF_Attack": {
              "operator": "Variables[0] (Skill03_Attack) || RETURN",
              "displayLines": "Skill03_Attack",
              "constants": [],
              "variables": [
                "Skill03_Attack"
              ]
            }
          },
          "casterAssign": "TargetSelf"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "5023020_Handling": {
      "fileName": "5023020_Handling",
      "abilityType": "Handling",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Action Handling",
          "values": [
            {
              "name": "Define Handler Boolean",
              "variableName": "ForbidClearSkillUseRecord",
              "value": true
            }
          ],
          "options": [
            {
              "name": "HANDLER OPTION GROUP",
              "option": "new phase",
              "goal": [
                {
                  "name": "HANDLER OPTION",
                  "option": "Skill01",
                  "goal": [
                    {
                      "name": "Sequence Event",
                      "passed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "AIFlag",
                          "value": 2
                        },
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill01"
                        }
                      ]
                    }
                  ],
                  "type": "DefaultDSE",
                  "check": [
                    {
                      "name": "Check Ability Use Condition",
                      "passedValue": 1,
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      }
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "option": "Skill02/Skill04",
                  "goal": [
                    {
                      "name": "Sequence Event",
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-1972425744\">Enemy_W5_Eater_Ability02_Eater</a>[<span class=\"descriptionNumberColor\">Satiated</span>]"
                          },
                          "passed": [
                            {
                              "name": "Declare Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "scope": "TargetEntity",
                              "variableName": "AIFlag",
                              "value": 1
                            },
                            {
                              "name": "Use Ability Option",
                              "skillName": "Skill04"
                            }
                          ],
                          "failed": [
                            {
                              "name": "Declare Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "scope": "TargetEntity",
                              "variableName": "AIFlag",
                              "value": 1
                            },
                            {
                              "name": "Find New Target",
                              "from": {
                                "name": "Target Name",
                                "target": "{{Player Team All}}.[[removeMemosprite]]"
                              },
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-662226107\">Enemy_W5_Eater_Ability02_Ate</a>[<span class=\"descriptionNumberColor\">Devour</span>]",
                                "invertCondition": true
                              },
                              "ifTargetFound": [
                                {
                                  "name": "Choose Ability Target",
                                  "skillName": "Skill02",
                                  "target": {
                                    "name": "Select by Modifier Name",
                                    "modifier": "<a class=\"gModGreen\" id=\"-662226107\">Enemy_W5_Eater_Ability02_Ate</a>[<span class=\"descriptionNumberColor\">Devour</span>]",
                                    "target": null,
                                    "invertCondition": true
                                  }
                                },
                                {
                                  "name": "Use Ability Option",
                                  "skillName": "Skill02"
                                }
                              ],
                              "noTargetFound": [
                                {
                                  "name": "Use Ability Option",
                                  "skillName": "Skill04"
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "type": "DefaultDSE",
                  "check": [
                    {
                      "name": "Check Ability Use Condition",
                      "passedValue": 1,
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 2,
                        "contextScope": "TargetEntity"
                      }
                    }
                  ]
                }
              ],
              "type": "DefaultDSE"
            }
          ]
        }
      ],
      "references": []
    },
    "5023020_Handling_OVERRIDE_502302001": {
      "fileName": "5023020_Handling_OVERRIDE_502302001",
      "abilityType": "Handling_502302001",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Action Handling",
          "values": [
            {
              "name": "Define Handler Boolean",
              "variableName": "ForbidClearSkillUseRecord",
              "value": true
            }
          ],
          "options": [
            {
              "name": "HANDLER OPTION GROUP",
              "option": "new phase",
              "goal": [
                {
                  "name": "HANDLER OPTION",
                  "option": "Skill01",
                  "goal": [
                    {
                      "name": "Sequence Event",
                      "passed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "AIFlag",
                          "value": 2
                        },
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill01"
                        }
                      ]
                    }
                  ],
                  "type": "DefaultDSE",
                  "check": [
                    {
                      "name": "Check Ability Use Condition",
                      "passedValue": 1,
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      }
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "option": "Skill02/Skill04",
                  "goal": [
                    {
                      "name": "Sequence Event",
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-1972425744\">Enemy_W5_Eater_Ability02_Eater</a>[<span class=\"descriptionNumberColor\">Satiated</span>]"
                          },
                          "passed": [
                            {
                              "name": "Declare Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "scope": "TargetEntity",
                              "variableName": "AIFlag",
                              "value": 1
                            },
                            {
                              "name": "Use Ability Option",
                              "skillName": "Skill04"
                            }
                          ],
                          "failed": [
                            {
                              "name": "Declare Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "scope": "TargetEntity",
                              "variableName": "AIFlag",
                              "value": 1
                            },
                            {
                              "name": "Find New Target",
                              "from": {
                                "name": "Target Name",
                                "target": "{{Player Team All}}.[[removeMemosprite]]"
                              },
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-662226107\">Enemy_W5_Eater_Ability02_Ate</a>[<span class=\"descriptionNumberColor\">Devour</span>]",
                                "invertCondition": true
                              },
                              "ifTargetFound": [
                                {
                                  "name": "Choose Ability Target",
                                  "skillName": "Skill02",
                                  "target": {
                                    "name": "Select by Modifier Name",
                                    "modifier": "<a class=\"gModGreen\" id=\"-662226107\">Enemy_W5_Eater_Ability02_Ate</a>[<span class=\"descriptionNumberColor\">Devour</span>]",
                                    "target": null,
                                    "invertCondition": true
                                  }
                                },
                                {
                                  "name": "Use Ability Option",
                                  "skillName": "Skill02"
                                }
                              ],
                              "noTargetFound": [
                                {
                                  "name": "Use Ability Option",
                                  "skillName": "Skill04"
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "type": "DefaultDSE",
                  "check": [
                    {
                      "name": "Check Ability Use Condition",
                      "passedValue": 1,
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 2,
                        "contextScope": "TargetEntity"
                      }
                    }
                  ]
                }
              ],
              "type": "DefaultDSE"
            }
          ]
        }
      ],
      "references": []
    },
    "5023020_Handling_OVERRIDE_502302002": {
      "fileName": "5023020_Handling_OVERRIDE_502302002",
      "abilityType": "Handling_502302002",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Action Handling",
          "values": [
            {
              "name": "Define Handler Boolean",
              "variableName": "ForbidClearSkillUseRecord",
              "value": true
            }
          ],
          "options": [
            {
              "name": "HANDLER OPTION GROUP",
              "option": "new phase",
              "goal": [
                {
                  "name": "HANDLER OPTION",
                  "option": "Skill01",
                  "goal": [
                    {
                      "name": "Sequence Event",
                      "passed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "AIFlag",
                          "value": 2
                        },
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill01"
                        }
                      ]
                    }
                  ],
                  "type": "DefaultDSE",
                  "check": [
                    {
                      "name": "Check Ability Use Condition",
                      "passedValue": 1,
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      }
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "option": "Skill02/Skill04",
                  "goal": [
                    {
                      "name": "Sequence Event",
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-1972425744\">Enemy_W5_Eater_Ability02_Eater</a>[<span class=\"descriptionNumberColor\">Satiated</span>]"
                          },
                          "passed": [
                            {
                              "name": "Declare Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "scope": "TargetEntity",
                              "variableName": "AIFlag",
                              "value": 1
                            },
                            {
                              "name": "Use Ability Option",
                              "skillName": "Skill04"
                            }
                          ],
                          "failed": [
                            {
                              "name": "Declare Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "scope": "TargetEntity",
                              "variableName": "AIFlag",
                              "value": 1
                            },
                            {
                              "name": "Find New Target",
                              "from": {
                                "name": "Target Name",
                                "target": "{{Player Team All}}.[[removeMemosprite]]"
                              },
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-662226107\">Enemy_W5_Eater_Ability02_Ate</a>[<span class=\"descriptionNumberColor\">Devour</span>]",
                                "invertCondition": true
                              },
                              "ifTargetFound": [
                                {
                                  "name": "Choose Ability Target",
                                  "skillName": "Skill02",
                                  "target": {
                                    "name": "Select by Modifier Name",
                                    "modifier": "<a class=\"gModGreen\" id=\"-662226107\">Enemy_W5_Eater_Ability02_Ate</a>[<span class=\"descriptionNumberColor\">Devour</span>]",
                                    "target": null,
                                    "invertCondition": true
                                  }
                                },
                                {
                                  "name": "Use Ability Option",
                                  "skillName": "Skill02"
                                }
                              ],
                              "noTargetFound": [
                                {
                                  "name": "Use Ability Option",
                                  "skillName": "Skill04"
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "type": "DefaultDSE",
                  "check": [
                    {
                      "name": "Check Ability Use Condition",
                      "passedValue": 1,
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 2,
                        "contextScope": "TargetEntity"
                      }
                    }
                  ]
                }
              ],
              "type": "DefaultDSE"
            }
          ]
        }
      ],
      "references": []
    },
    "5023020_Handling_OVERRIDE_502302004": {
      "fileName": "5023020_Handling_OVERRIDE_502302004",
      "abilityType": "Handling_502302004",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Action Handling",
          "values": [
            {
              "name": "Define Handler Boolean",
              "variableName": "ForbidClearSkillUseRecord",
              "value": true
            }
          ],
          "options": [
            {
              "name": "HANDLER OPTION GROUP",
              "option": "new phase",
              "goal": [
                {
                  "name": "HANDLER OPTION",
                  "option": "Skill01",
                  "goal": [
                    {
                      "name": "Sequence Event",
                      "passed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "AIFlag",
                          "value": 2
                        },
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill01"
                        }
                      ]
                    }
                  ],
                  "type": "DefaultDSE",
                  "check": [
                    {
                      "name": "Check Ability Use Condition",
                      "passedValue": 1,
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      }
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "option": "Skill02/Skill04",
                  "goal": [
                    {
                      "name": "Sequence Event",
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-1972425744\">Enemy_W5_Eater_Ability02_Eater</a>[<span class=\"descriptionNumberColor\">Satiated</span>]"
                          },
                          "passed": [
                            {
                              "name": "Declare Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "scope": "TargetEntity",
                              "variableName": "AIFlag",
                              "value": 1
                            },
                            {
                              "name": "Use Ability Option",
                              "skillName": "Skill04"
                            }
                          ],
                          "failed": [
                            {
                              "name": "Declare Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "scope": "TargetEntity",
                              "variableName": "AIFlag",
                              "value": 1
                            },
                            {
                              "name": "Find New Target",
                              "from": {
                                "name": "Target Name",
                                "target": "{{Player Team All}}.[[removeMemosprite]]"
                              },
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-662226107\">Enemy_W5_Eater_Ability02_Ate</a>[<span class=\"descriptionNumberColor\">Devour</span>]",
                                "invertCondition": true
                              },
                              "ifTargetFound": [
                                {
                                  "name": "Choose Ability Target",
                                  "skillName": "Skill02",
                                  "target": {
                                    "name": "Select by Modifier Name",
                                    "modifier": "<a class=\"gModGreen\" id=\"-662226107\">Enemy_W5_Eater_Ability02_Ate</a>[<span class=\"descriptionNumberColor\">Devour</span>]",
                                    "target": null,
                                    "invertCondition": true
                                  }
                                },
                                {
                                  "name": "Use Ability Option",
                                  "skillName": "Skill02"
                                }
                              ],
                              "noTargetFound": [
                                {
                                  "name": "Use Ability Option",
                                  "skillName": "Skill04"
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "type": "DefaultDSE",
                  "check": [
                    {
                      "name": "Check Ability Use Condition",
                      "passedValue": 1,
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 2,
                        "contextScope": "TargetEntity"
                      }
                    }
                  ]
                }
              ],
              "type": "DefaultDSE"
            }
          ]
        }
      ],
      "references": []
    },
    "5023020_Handling_OVERRIDE_502302005": {
      "fileName": "5023020_Handling_OVERRIDE_502302005",
      "abilityType": "Handling_502302005",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Action Handling",
          "values": [
            {
              "name": "Define Handler Boolean",
              "variableName": "ForbidClearSkillUseRecord",
              "value": true
            }
          ],
          "options": [
            {
              "name": "HANDLER OPTION GROUP",
              "option": "new phase",
              "goal": [
                {
                  "name": "HANDLER OPTION",
                  "option": "Skill01",
                  "goal": [
                    {
                      "name": "Sequence Event",
                      "passed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "AIFlag",
                          "value": 2
                        },
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill01"
                        }
                      ]
                    }
                  ],
                  "type": "DefaultDSE",
                  "check": [
                    {
                      "name": "Check Ability Use Condition",
                      "passedValue": 1,
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      }
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "option": "Skill02/Skill04",
                  "goal": [
                    {
                      "name": "Sequence Event",
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-1972425744\">Enemy_W5_Eater_Ability02_Eater</a>[<span class=\"descriptionNumberColor\">Satiated</span>]"
                          },
                          "passed": [
                            {
                              "name": "Declare Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "scope": "TargetEntity",
                              "variableName": "AIFlag",
                              "value": 1
                            },
                            {
                              "name": "Use Ability Option",
                              "skillName": "Skill04"
                            }
                          ],
                          "failed": [
                            {
                              "name": "Declare Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "scope": "TargetEntity",
                              "variableName": "AIFlag",
                              "value": 1
                            },
                            {
                              "name": "Find New Target",
                              "from": {
                                "name": "Target Name",
                                "target": "{{Player Team All}}.[[removeMemosprite]]"
                              },
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-662226107\">Enemy_W5_Eater_Ability02_Ate</a>[<span class=\"descriptionNumberColor\">Devour</span>]",
                                "invertCondition": true
                              },
                              "ifTargetFound": [
                                {
                                  "name": "Choose Ability Target",
                                  "skillName": "Skill02",
                                  "target": {
                                    "name": "Select by Modifier Name",
                                    "modifier": "<a class=\"gModGreen\" id=\"-662226107\">Enemy_W5_Eater_Ability02_Ate</a>[<span class=\"descriptionNumberColor\">Devour</span>]",
                                    "target": null,
                                    "invertCondition": true
                                  }
                                },
                                {
                                  "name": "Use Ability Option",
                                  "skillName": "Skill02"
                                }
                              ],
                              "noTargetFound": [
                                {
                                  "name": "Use Ability Option",
                                  "skillName": "Skill04"
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "type": "DefaultDSE",
                  "check": [
                    {
                      "name": "Check Ability Use Condition",
                      "passedValue": 1,
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 2,
                        "contextScope": "TargetEntity"
                      }
                    }
                  ]
                }
              ],
              "type": "DefaultDSE"
            }
          ]
        }
      ],
      "references": []
    }
  }
}