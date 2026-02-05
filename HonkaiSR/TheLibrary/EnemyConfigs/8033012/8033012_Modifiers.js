const configAbility = {
  "fileName": "8033012_Modifiers",
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
      "for": "W1_Mecha03_02_BattleScore1",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Character ID",
                "ID": 1304,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": "Aventurine"
              },
              "passed": [
                {
                  "name": "Achievement",
                  "matchTags": true,
                  "relatedAchievements": [
                    {
                      "title": "Performance Evaluation",
                      "desc": "Use ally Aventurine to fight Senior Staff: Team Leader and deal the finishing blow",
                      "rarity": "Low",
                      "type": "Hidden until Completion"
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
      "for": "Monster_Company_Coin_Avater_Effect",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
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
                "operator": "Variables[0] (MDF_DamageUpRatio_PerLayer) || Variables[1] (ModifierLayers) || MUL || RETURN",
                "displayLines": "(MDF_DamageUpRatio_PerLayer * ModifierLayers)",
                "constants": [],
                "variables": [
                  "MDF_DamageUpRatio_PerLayer",
                  "ModifierLayers"
                ]
              }
            }
          ]
        }
      ],
      "stackLimit": 3,
      "addStacksPerTrigger": {
        "operator": "Variables[0] (ModifierStackLayer) || RETURN",
        "displayLines": "ModifierStackLayer",
        "constants": [],
        "variables": [
          "ModifierStackLayer"
        ]
      }
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_Company_Coin_Avater_Mark"
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_Company_Coin_Monster_Mark",
      "execute": [
        {
          "eventTrigger": "Attack Action Completed [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Monster Rank",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "compareType": ">=",
                "value2": 3
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Monster_Company_Coin_Elite[<span class=\"descriptionNumberColor\">Performance Points</span>]",
                  "valuePerStack": {
                    "MDF_DamageUpRatio_PerLayer": {
                      "operator": "Variables[0] (MDF_DamageUpRatio_PerLayer) || RETURN",
                      "displayLines": "MDF_DamageUpRatio_PerLayer",
                      "constants": [],
                      "variables": [
                        "MDF_DamageUpRatio_PerLayer"
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (ModifierLayers) || RETURN",
                    "displayLines": "ModifierLayers",
                    "constants": [],
                    "variables": [
                      "ModifierLayers"
                    ]
                  },
                  "casterAssign": "TargetSelf"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Monster_Company_Coin_Elite[<span class=\"descriptionNumberColor\">Performance Points</span>]",
                    "compareType": "=",
                    "value2": 2,
                    "valueType": "Layer"
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
                        "value1": "Monster_Company_Coin_Elite[<span class=\"descriptionNumberColor\">Performance Points</span>]",
                        "compareType": "=",
                        "value2": 3,
                        "valueType": "Layer"
                      }
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Monster_Company_Coin[<span class=\"descriptionNumberColor\">Performance Points</span>]",
                  "valuePerStack": {
                    "MDF_DamageUpRatio": {
                      "operator": "Variables[0] (MDF_DamageUpRatio_PerLayer) || RETURN",
                      "displayLines": "MDF_DamageUpRatio_PerLayer",
                      "constants": [],
                      "variables": [
                        "MDF_DamageUpRatio_PerLayer"
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (ModifierLayers) || RETURN",
                    "displayLines": "ModifierLayers",
                    "constants": [],
                    "variables": [
                      "ModifierLayers"
                    ]
                  },
                  "casterAssign": "TargetSelf"
                }
              ]
            },
            "Modifier Deletes Itself"
          ]
        }
      ],
      "duration": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_Company_Coin_Avater[<span class=\"descriptionNumberColor\">Performance Points</span>]",
      "stackType": "Replace",
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
              "modifier": "Monster_Company_Coin_Avater_Mark"
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
              "modifier": "Monster_Company_Coin_Avater_Effect"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Monster_Company_Coin_Avater_Mark"
            }
          ]
        },
        {
          "eventTrigger": "When Put in Deathstate Limbo",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team"
                  },
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "WMonster_W1_Mecha_02_PhaseFlag"
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
                  "modifier": "Monster_Company_Coin_Monster_Mark",
                  "valuePerStack": {
                    "MDF_DamageUpRatio_PerLayer": {
                      "operator": "Variables[0] (MDF_DamageUpRatio_PerLayer) || RETURN",
                      "displayLines": "MDF_DamageUpRatio_PerLayer",
                      "constants": [],
                      "variables": [
                        "MDF_DamageUpRatio_PerLayer"
                      ]
                    },
                    "ModifierLayers": {
                      "operator": "Variables[0] (ModifierLayers) || RETURN",
                      "displayLines": "ModifierLayers",
                      "constants": [],
                      "variables": [
                        "ModifierLayers"
                      ]
                    }
                  }
                }
              ]
            },
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "ModifierLayers",
              "multiplier": 1
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Monster_Company_Coin_Avater_Effect"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Monster_Company_Coin_Avater_Effect",
              "valuePerStack": {
                "MDF_DamageUpRatio_PerLayer": {
                  "operator": "Variables[0] (MDF_DamageUpRatio_PerLayer) || RETURN",
                  "displayLines": "MDF_DamageUpRatio_PerLayer",
                  "constants": [],
                  "variables": [
                    "MDF_DamageUpRatio_PerLayer"
                  ]
                }
              },
              "addStacksPerTrigger": {
                "operator": "Variables[0] (ModifierLayers) || RETURN",
                "displayLines": "ModifierLayers",
                "constants": [],
                "variables": [
                  "ModifierLayers"
                ]
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Monster_Company_Coin_Avater_Mark"
            }
          ]
        },
        {
          "eventTrigger": "Attack Start [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Skill Type",
                    "skillType": "Basic ATK"
                  },
                  {
                    "name": "Skill Type",
                    "skillType": "Skill"
                  },
                  {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_AttackType",
                  "value": 1
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
                "name": "Compare: Variable",
                "value1": "MDF_AttackType",
                "compareType": "=",
                "value2": 1
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
                    "modifier": "Monster_Company_Coin_Avater_Mark"
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Monster_Company_Coin_Avater_Mark"
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Monster_Company_Coin_Avater_Effect"
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "Monster_Company_Coin_Avater_Mark"
                  },
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Monster_Company_Coin_Avater_Mark"
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Monster_Company_Coin_Avater_Effect"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Monster_Company_Coin_Avater_Effect",
                  "valuePerStack": {
                    "MDF_DamageUpRatio_PerLayer": {
                      "operator": "Variables[0] (MDF_DamageUpRatio_PerLayer) || RETURN",
                      "displayLines": "MDF_DamageUpRatio_PerLayer",
                      "constants": [],
                      "variables": [
                        "MDF_DamageUpRatio_PerLayer"
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (ModifierLayers) || RETURN",
                    "displayLines": "ModifierLayers",
                    "constants": [],
                    "variables": [
                      "ModifierLayers"
                    ]
                  }
                }
              ]
            }
          ]
        }
      ],
      "description": "Interastral Peace Corporation's employee Performance Points. Each stack increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_DamageUpRatio_PerLayer</span>, stacking up to <span class=\"descriptionNumberColor\">MaxLayer</span> time(s). All Performance Points are consumed when this unit uses Basic ATK, Skill, or Ultimate. Performance Points can be seized by the attacker when this unit receives a killing blow from an Interastral Peace Corporation Employee.",
      "type": "Buff",
      "effectName": "Performance Points",
      "statusName": "Performance Points",
      "stackLimit": 3,
      "addStacksPerTrigger": {
        "operator": "Variables[0] (ModifierStackLayer) || RETURN",
        "displayLines": "ModifierStackLayer",
        "constants": [],
        "variables": [
          "ModifierStackLayer"
        ]
      }
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_Company_Coin_Avater_RemoveMark",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_AddLayer",
              "value": {
                "operator": "Variables[0] (MDF_AddLayer) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(MDF_AddLayer + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "MDF_AddLayer"
                ]
              }
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
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "Monster_Company_Coin_Avater[<span class=\"descriptionNumberColor\">Performance Points</span>]"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "MDF_AfterLayer",
                  "modifierName": "Monster_Company_Coin_Avater[<span class=\"descriptionNumberColor\">Performance Points</span>]",
                  "multiplier": 1
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Monster_Company_Coin_Avater[<span class=\"descriptionNumberColor\">Performance Points</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Monster_Company_Coin_Avater[<span class=\"descriptionNumberColor\">Performance Points</span>]",
                  "valuePerStack": {
                    "MDF_DamageUpRatio_PerLayer": {
                      "operator": "Variables[0] (MDF_DamageUpRatio_PerLayer) || RETURN",
                      "displayLines": "MDF_DamageUpRatio_PerLayer",
                      "constants": [],
                      "variables": [
                        "MDF_DamageUpRatio_PerLayer"
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (MDF_AddLayer) || RETURN",
                    "displayLines": "MDF_AddLayer",
                    "constants": [],
                    "variables": [
                      "MDF_AddLayer"
                    ]
                  },
                  "casterAssign": "TargetSelf"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack Action Completed [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "Monster_Company_Coin_Avater[<span class=\"descriptionNumberColor\">Performance Points</span>]"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Monster_Company_Coin_Avater_Mark"
                }
              ]
            },
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "When Stacking Modifier Instance [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "Monster_Company_Coin_Avater[<span class=\"descriptionNumberColor\">Performance Points</span>]"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_AddLayer",
                  "value": {
                    "operator": "Variables[0] (MDF_AddLayer) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(MDF_AddLayer + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "MDF_AddLayer"
                    ]
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
      "for": "Monster_Company_Coin_Elite_Effect"
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_Company_Coin_Elite_RemoveEffect",
      "execute": [
        {
          "eventTrigger": "Being Attacked End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "ModifierLayers",
                "compareType": "=",
                "value2": 3
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "ModifierLayers",
                    "compareType": "=",
                    "value2": 2
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "ModifierLayers",
                        "compareType": "=",
                        "value2": 1
                      }
                    }
                  ]
                }
              ]
            },
            "Modifier Deletes Itself"
          ]
        }
      ],
      "duration": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_Company_Coin_Elite[<span class=\"descriptionNumberColor\">Performance Points</span>]",
      "stackType": "Replace",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
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
              "modifier": "Monster_Company_Coin_Monster_EnergyBar"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Monster_Company_Coin_Monster_EnergyBar2"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Monster_Company_Coin_Monster_EnergyBar3"
            }
          ]
        },
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Current Action Holder Is",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_AttackType",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Put in Deathstate Limbo",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_OneAttack",
              "value": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_AttackType",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_AttackType",
                  "value": 0
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target's Source Owner}}"
                    },
                    "modifier": "Monster_Company_Coin_Avater_Mark"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target's Source Owner}}"
                      },
                      "modifier": "Monster_Company_Coin_Avater_RemoveMark",
                      "valuePerStack": {
                        "MDF_OriginLayer": {
                          "operator": "Variables[0] (MDF_OriginLayer) || RETURN",
                          "displayLines": "MDF_OriginLayer",
                          "constants": [],
                          "variables": [
                            "MDF_OriginLayer"
                          ]
                        },
                        "MDF_DamageUpRatio_PerLayer": {
                          "operator": "Variables[0] (MDF_DamageUpRatio_PerLayer) || RETURN",
                          "displayLines": "MDF_DamageUpRatio_PerLayer",
                          "constants": [],
                          "variables": [
                            "MDF_DamageUpRatio_PerLayer"
                          ]
                        }
                      },
                      "casterAssign": "TargetSelf"
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
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "AlreadyAdd",
                    "compareType": "=",
                    "value2": 0
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target's Source Owner}}"
                    },
                    "team": "Player Team"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target's Source Owner}}"
                  },
                  "modifier": "Monster_Company_Coin_Avater[<span class=\"descriptionNumberColor\">Performance Points</span>]",
                  "valuePerStack": {
                    "MDF_DamageUpRatio_PerLayer": {
                      "operator": "Variables[0] (MDF_DamageUpRatio_PerLayer) || RETURN",
                      "displayLines": "MDF_DamageUpRatio_PerLayer",
                      "constants": [],
                      "variables": [
                        "MDF_DamageUpRatio_PerLayer"
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (ModifierLayers) || RETURN",
                    "displayLines": "ModifierLayers",
                    "constants": [],
                    "variables": [
                      "ModifierLayers"
                    ]
                  },
                  "casterAssign": "TargetSelf"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target's Source Owner}}"
                  },
                  "modifier": "Monster_Company_Coin_Avater_AddMark"
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "AlreadyAdd",
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
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "ModifierLayers",
              "multiplier": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "ModifierLayers",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Monster_Company_Coin_Monster_EnergyBar"
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
                    "value1": "ModifierLayers",
                    "compareType": "=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Monster_Company_Coin_Monster_EnergyBar2"
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
                        "value1": "ModifierLayers",
                        "compareType": "=",
                        "value2": 3
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "Monster_Company_Coin_Monster_EnergyBar3"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_DamageUpRatio_PerLayer) || Variables[1] (ModifierLayers) || MUL || RETURN",
                "displayLines": "(MDF_DamageUpRatio_PerLayer * ModifierLayers)",
                "constants": [],
                "variables": [
                  "MDF_DamageUpRatio_PerLayer",
                  "ModifierLayers"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "ModifierLayers",
                "compareType": "=",
                "value2": 3
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "ModifierLayers",
                    "compareType": "=",
                    "value2": 2
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "ModifierLayers",
                        "compareType": "=",
                        "value2": 1
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked Start [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_OriginLayer",
              "value": 0
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Monster_Company_Coin_Avater[<span class=\"descriptionNumberColor\">Performance Points</span>]"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "valueType": "Layer",
                  "variableName": "MDF_OriginLayer",
                  "modifierName": "Monster_Company_Coin_Avater[<span class=\"descriptionNumberColor\">Performance Points</span>]",
                  "multiplier": 1
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Skill Type",
                    "skillType": "Basic ATK"
                  },
                  {
                    "name": "Skill Type",
                    "skillType": "Skill"
                  },
                  {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_AttackType",
                  "value": 0
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_AttackType",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Being Attacked End [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_OneAttack",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_AttackType",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_AttackType",
                  "value": 0
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Monster_Company_Coin_Avater_Mark"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_OneAttack",
                        "compareType": "=",
                        "value2": 0
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
                      "modifier": "Monster_Company_Coin_Avater_RemoveMark",
                      "valuePerStack": {
                        "MDF_OriginLayer": {
                          "operator": "Variables[0] (MDF_OriginLayer) || RETURN",
                          "displayLines": "MDF_OriginLayer",
                          "constants": [],
                          "variables": [
                            "MDF_OriginLayer"
                          ]
                        },
                        "MDF_DamageUpRatio_PerLayer": {
                          "operator": "Variables[0] (MDF_DamageUpRatio_PerLayer) || RETURN",
                          "displayLines": "MDF_DamageUpRatio_PerLayer",
                          "constants": [],
                          "variables": [
                            "MDF_DamageUpRatio_PerLayer"
                          ]
                        }
                      },
                      "casterAssign": "TargetSelf"
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
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "AlreadyAdd",
                    "compareType": "=",
                    "value2": 0
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
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
                  "modifier": "Monster_Company_Coin_Avater[<span class=\"descriptionNumberColor\">Performance Points</span>]",
                  "valuePerStack": {
                    "MDF_DamageUpRatio_PerLayer": {
                      "operator": "Variables[0] (MDF_DamageUpRatio_PerLayer) || RETURN",
                      "displayLines": "MDF_DamageUpRatio_PerLayer",
                      "constants": [],
                      "variables": [
                        "MDF_DamageUpRatio_PerLayer"
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (ModifierLayers) || RETURN",
                    "displayLines": "ModifierLayers",
                    "constants": [],
                    "variables": [
                      "ModifierLayers"
                    ]
                  },
                  "casterAssign": "TargetSelf"
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "AlreadyAdd",
                  "value": 1
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Monster_Company_Coin_Elite_RemoveEffect",
              "valuePerStack": {
                "ModifierLayers": {
                  "operator": "Variables[0] (ModifierLayers) || RETURN",
                  "displayLines": "ModifierLayers",
                  "constants": [],
                  "variables": [
                    "ModifierLayers"
                  ]
                }
              }
            },
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [
        "MDF_DamageUpRatio_PerLayer"
      ],
      "latentQueue": [],
      "description": "Interastral Peace Corporation's employee Performance Points. Each stack increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_DamageUpRatio_PerLayer</span>, stacking up to <span class=\"descriptionNumberColor\">MaxLayer</span> time(s). All Performance Points are consumed when this unit uses an attack. Performance Points can be seized by the attacker when this unit's Weakness is Broken or this unit receives a killing blow.",
      "type": "Buff",
      "effectName": "Performance Points",
      "statusName": "Performance Points",
      "stackLimit": 3,
      "addStacksPerTrigger": {
        "operator": "Variables[0] (ModifierStackLayer) || RETURN",
        "displayLines": "ModifierStackLayer",
        "constants": [],
        "variables": [
          "ModifierStackLayer"
        ]
      }
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_Company_Coin_RemoveEffect",
      "execute": [
        {
          "eventTrigger": "Being Attacked End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "duration": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_Company_Coin_Avater_AddMark",
      "execute": [
        {
          "eventTrigger": "Attack Action Completed [Anyone]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Monster_Company_Coin_Avater_Mark"
            },
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "MDF_AttackType",
        "MDF_OneAttack",
        "AlreadyAdd"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_Company_Coin[<span class=\"descriptionNumberColor\">Performance Points</span>]",
      "stackType": "Replace",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
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
              "modifier": "Monster_Company_Coin_Monster_EnergyBar"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Enemy ID",
                    "ID": 8032020,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": "Grunt: Security Personnel"
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 803202000,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": null
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 803202000,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": null
                  }
                ]
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Enemy ID",
                        "ID": 8032010,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "characterName": "Grunt: Field Personnel"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 803201000,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "characterName": null
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 803201000,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "characterName": null
                      }
                    ]
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
              "modifier": "Monster_Company_Coin_Monster_EnergyBar"
            }
          ]
        },
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Current Action Holder Is",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_AttackType",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Put in Deathstate Limbo",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_OneAttack",
              "value": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_AttackType",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_AttackType",
                  "value": 0
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target's Source Owner}}"
                    },
                    "modifier": "Monster_Company_Coin_Avater_Mark"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target's Source Owner}}"
                      },
                      "modifier": "Monster_Company_Coin_Avater_RemoveMark",
                      "valuePerStack": {
                        "MDF_OriginLayer": {
                          "operator": "Variables[0] (MDF_OriginLayer) || RETURN",
                          "displayLines": "MDF_OriginLayer",
                          "constants": [],
                          "variables": [
                            "MDF_OriginLayer"
                          ]
                        },
                        "MDF_DamageUpRatio_PerLayer": {
                          "operator": "Variables[0] (MDF_DamageUpRatio) || RETURN",
                          "displayLines": "MDF_DamageUpRatio",
                          "constants": [],
                          "variables": [
                            "MDF_DamageUpRatio"
                          ]
                        }
                      },
                      "casterAssign": "TargetSelf"
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
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "AlreadyAdd",
                    "compareType": "=",
                    "value2": 0
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target's Source Owner}}"
                    },
                    "team": "Player Team"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target's Source Owner}}"
                  },
                  "modifier": "Monster_Company_Coin_Avater[<span class=\"descriptionNumberColor\">Performance Points</span>]",
                  "valuePerStack": {
                    "MDF_DamageUpRatio_PerLayer": {
                      "operator": "Variables[0] (MDF_DamageUpRatio) || RETURN",
                      "displayLines": "MDF_DamageUpRatio",
                      "constants": [],
                      "variables": [
                        "MDF_DamageUpRatio"
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (ModifierLayers) || RETURN",
                    "displayLines": "ModifierLayers",
                    "constants": [],
                    "variables": [
                      "ModifierLayers"
                    ]
                  },
                  "casterAssign": "TargetSelf"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target's Source Owner}}"
                  },
                  "modifier": "Monster_Company_Coin_Avater_AddMark"
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "AlreadyAdd",
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
              "name": "Define Custom Variable with Modifier Values",
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
                "operator": "Variables[0] (MDF_DamageUpRatio) || Variables[1] (ModifierLayers) || MUL || RETURN",
                "displayLines": "(MDF_DamageUpRatio * ModifierLayers)",
                "constants": [],
                "variables": [
                  "MDF_DamageUpRatio",
                  "ModifierLayers"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Pre-Death [Owner]"
        },
        {
          "eventTrigger": "Being Attacked Start [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_OriginLayer",
              "value": 0
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Monster_Company_Coin_Avater[<span class=\"descriptionNumberColor\">Performance Points</span>]"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "valueType": "Layer",
                  "variableName": "MDF_OriginLayer",
                  "modifierName": "Monster_Company_Coin_Avater[<span class=\"descriptionNumberColor\">Performance Points</span>]",
                  "multiplier": 1
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Skill Type",
                    "skillType": "Basic ATK"
                  },
                  {
                    "name": "Skill Type",
                    "skillType": "Skill"
                  },
                  {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_AttackType",
                  "value": 0
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_AttackType",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Being Attacked End [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_OneAttack",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_AttackType",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_AttackType",
                  "value": 0
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Monster_Company_Coin_Avater_Mark"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_OneAttack",
                        "compareType": "=",
                        "value2": 0
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
                      "modifier": "Monster_Company_Coin_Avater_RemoveMark",
                      "valuePerStack": {
                        "MDF_OriginLayer": {
                          "operator": "Variables[0] (MDF_OriginLayer) || RETURN",
                          "displayLines": "MDF_OriginLayer",
                          "constants": [],
                          "variables": [
                            "MDF_OriginLayer"
                          ]
                        },
                        "MDF_DamageUpRatio_PerLayer": {
                          "operator": "Variables[0] (MDF_DamageUpRatio) || RETURN",
                          "displayLines": "MDF_DamageUpRatio",
                          "constants": [],
                          "variables": [
                            "MDF_DamageUpRatio"
                          ]
                        }
                      },
                      "casterAssign": "TargetSelf"
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
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "AlreadyAdd",
                    "compareType": "=",
                    "value2": 0
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
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
                  "modifier": "Monster_Company_Coin_Avater[<span class=\"descriptionNumberColor\">Performance Points</span>]",
                  "valuePerStack": {
                    "MDF_DamageUpRatio_PerLayer": {
                      "operator": "Variables[0] (MDF_DamageUpRatio) || RETURN",
                      "displayLines": "MDF_DamageUpRatio",
                      "constants": [],
                      "variables": [
                        "MDF_DamageUpRatio"
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (ModifierLayers) || RETURN",
                    "displayLines": "ModifierLayers",
                    "constants": [],
                    "variables": [
                      "ModifierLayers"
                    ]
                  },
                  "casterAssign": "TargetSelf"
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "AlreadyAdd",
                  "value": 1
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Monster_Company_Coin_RemoveEffect"
            },
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [
        "MDF_DamageUpRatio"
      ],
      "latentQueue": [],
      "description": "Interastral Peace Corporation's employee Performance Points. Each stack increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_DamageUpRatio</span>, stacking up to <span class=\"descriptionNumberColor\">MaxLayer</span> time(s). All Performance Points are consumed when this unit uses an attack. Performance Points can be seized by the attacker when this unit's Weakness is Broken or this unit receives a killing blow.",
      "type": "Buff",
      "effectName": "Performance Points",
      "statusName": "Performance Points",
      "stackLimit": 1,
      "addStacksPerTrigger": {
        "operator": "Variables[0] (ModifierStackLayer) || RETURN",
        "displayLines": "ModifierStackLayer",
        "constants": [],
        "variables": [
          "ModifierStackLayer"
        ]
      }
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_Company_Coin_Monster_EnergyBar3",
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
              "modifier": "Monster_Company_Coin_Monster_EnergyBar"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Monster_Company_Coin_Monster_EnergyBar2"
            }
          ]
        },
        {
          "eventTrigger": "Action Choice Window [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "MDF_SetValue",
                    "compareType": "=",
                    "value2": 0
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_SetValue",
                  "value": 1
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 3,
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": 3,
                  "assignState": "True"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "MDF_SetValue",
                    "compareType": "=",
                    "value2": 0
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_SetValue",
                  "value": 1
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 3,
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": 3,
                  "assignState": "True"
                }
              ]
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
                "value1": "MDF_SetValue",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ultimate Prep-Phase [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_SetValue",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_SetValue",
                  "value": 1
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 3,
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": 3,
                  "assignState": "True"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Extra Action/Turn [Anyone]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_SetValue",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_SetValue",
                  "value": 1
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 3,
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": 3,
                  "assignState": "True"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "MDF_AttackType",
        "MDF_OneAttack",
        "AlreadyAdd"
      ],
      "duration": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_Company_Coin_Monster_EnergyBar2",
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
              "modifier": "Monster_Company_Coin_Monster_EnergyBar"
            }
          ]
        },
        {
          "eventTrigger": "Action Choice Window [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "MDF_SetValue",
                    "compareType": "=",
                    "value2": 0
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_SetValue",
                  "value": 1
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 2,
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": 2,
                  "assignState": "True"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "MDF_SetValue",
                    "compareType": "=",
                    "value2": 0
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_SetValue",
                  "value": 1
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 2,
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": 2,
                  "assignState": "True"
                }
              ]
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
                "value1": "MDF_SetValue",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ultimate Prep-Phase [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_SetValue",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_SetValue",
                  "value": 1
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 2,
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": 2,
                  "assignState": "True"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Extra Action/Turn [Anyone]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_SetValue",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_SetValue",
                  "value": 1
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 2,
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": 2,
                  "assignState": "True"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "MDF_AttackType",
        "MDF_OneAttack",
        "AlreadyAdd"
      ],
      "duration": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_Company_Coin_Monster_EnergyBar",
      "execute": [
        {
          "eventTrigger": "Action Choice Window [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "MDF_SetValue",
                    "compareType": "=",
                    "value2": 0
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_SetValue",
                  "value": 1
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 1,
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": 1,
                  "assignState": "True"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "MDF_SetValue",
                    "compareType": "=",
                    "value2": 0
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_SetValue",
                  "value": 1
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 1,
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": 1,
                  "assignState": "True"
                }
              ]
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
                "value1": "MDF_SetValue",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ultimate Prep-Phase [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_SetValue",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_SetValue",
                  "value": 1
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 1,
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": 1,
                  "assignState": "True"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Extra Action/Turn [Anyone]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_SetValue",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_SetValue",
                  "value": 1
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 1,
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": 1,
                  "assignState": "True"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "duration": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W1_Mecha03_02_Ability04After",
      "stackData": [],
      "latentQueue": [],
      "duration": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W1_Mecha03_02_Ability04Mark",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W1_Mecha03_02_Effect",
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
      "for": "Monster_W1_Mecha03_02_EffectController",
      "execute": [
        {
          "eventTrigger": "Action Choice Window [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "EndBreakFlag",
                "compareType": "=",
                "value2": 1,
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
                  "variableName": "EndBreakFlag",
                  "value": 0
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Monster_W1_Mecha03_02_Effect"
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
              "modifier": "Monster_W1_Mecha03_02_Effect"
            }
          ]
        },
        {
          "eventTrigger": "End Broken State [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "EndBreakFlag",
              "value": 1
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W1_Mecha03_02_ChargeEffect[<span class=\"descriptionNumberColor\">In Training</span>]",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "Uses Work Culture Shock in the next action.",
      "type": "Other",
      "statusName": "In Training"
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W1_Mecha03_02_CoinPassive",
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "Monster_Company_Coin_Elite[<span class=\"descriptionNumberColor\">Performance Points</span>]"
              },
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Monster_Company_Coin_Elite[<span class=\"descriptionNumberColor\">Performance Points</span>]",
                  "valuePerStack": {
                    "MDF_DamageUpRatio_PerLayer": {
                      "operator": "Variables[0] ({[PassiveSkillInitiate[0]]}) || RETURN",
                      "displayLines": "{[PassiveSkillInitiate[0]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkillInitiate[0]]}"
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
  "references": []
}