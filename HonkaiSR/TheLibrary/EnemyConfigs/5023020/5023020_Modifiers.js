const configAbility = {
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
          "eventTrigger": "Being Attacked End [Owner]",
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
                          "target": "{{Player Team All}}"
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
}