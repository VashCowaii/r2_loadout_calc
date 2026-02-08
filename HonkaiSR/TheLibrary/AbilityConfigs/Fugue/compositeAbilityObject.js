const compositeAbilityObject = {
  "fullCharacterName": "Fugue",
  "trimCharacterName": "Fugue",
  "abilityList": [
    "Fugue_Fugue_TechniqueInLevel",
    "Fugue_Fugue_PassiveAbility01",
    "Fugue_Fugue_Ability03_Part02",
    "Fugue_Fugue_Ability03_Part01",
    "Fugue_Fugue_Ability03_EnterReady",
    "Fugue_Fugue_Ability02_Part02",
    "Fugue_Fugue_Ability02_Part01",
    "Fugue_Fugue_Ability11_Part02",
    "Fugue_Fugue_Ability11_Part01",
    "Fugue_Fugue_Ability01_Part02",
    "Fugue_Fugue_Ability01_Part01",
    "Fugue_Modifiers"
  ],
  "abilityObject": {
    "Fugue_Fugue_TechniqueInLevel": {
      "fileName": "Fugue_Fugue_TechniqueInLevel",
      "childAbilityList": [
        "Fugue_Fugue_TechniqueInLevel"
      ],
      "skillTrigger": "SkillMaze",
      "abilityType": "Technique",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1034016164\">Fugue_TechniqueUsage_Modifier</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1034016164\">Fugue_TechniqueUsage_Modifier</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Level Entity}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1904238030\">StageAbility_MazeStandard_EnterBattle_Monster_Modifier</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Technique Modifies Current Wave"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Wave Count",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Action Advance/Delay",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "advanceType": "Advance",
                      "multiAdd": "-0.4"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-375769760\">Fugue_DefenceDown</a>[<span class=\"descriptionNumberColor\">Virtue Beckons Bliss</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "baseChance": {
                        "operator": "Variables[0] (1) || RETURN",
                        "displayLines": "1",
                        "constants": [],
                        "variables": [
                          1
                        ]
                      },
                      "valuePerStack": {
                        "MDF_DefenceDownRatio": {
                          "operator": "Variables[0] (0.18) || RETURN",
                          "displayLines": "0.18",
                          "constants": [],
                          "variables": [
                            0.18
                          ]
                        }
                      }
                    }
                  ]
                }
              ],
              "priorityLevel": -80
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Fugue_Fugue_PassiveAbility01": {
      "fileName": "Fugue_Fugue_PassiveAbility01",
      "childAbilityList": [
        "Fugue_Fugue_PassiveAbility01"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Update Displayed Energy Bar",
          "value": 0,
          "maximum": 3,
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 3,
          "cooldown": 0
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-825933762\">Fugue_PassiveAbility_OnListenBreakModifier</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"873674204\">Fugue_StancePreview</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Verdantia Renaissance"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1113685163\">Fugue_PointB1_Listen</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Sylvan Enigma"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-880987638\">Fugue_PointB2_BpBack</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1748420043\">Fugue_PointB2_Sub</a>[<span class=\"descriptionNumberColor\">Sylvan Enigma</span>]",
              "valuePerStack": {
                "MDF_PropertyRatio_BreakDamageSelf": {
                  "operator": "Variables[0] (0.3) || RETURN",
                  "displayLines": "0.3",
                  "constants": [],
                  "variables": [
                    0.3
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Phecda Primordia"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"32106889\">Fugue_PointB3_Listen</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 2
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-18674978\">Fugue_Eidolon2_Listen</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 2
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"915939939\">Fugue_Eidolon2_PreShow</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1045772852\">Fugue_Eidolon6</a>[<span class=\"descriptionNumberColor\">Clairvoyance of Boom and Doom</span>]",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.5) || RETURN",
                  "displayLines": "0.5",
                  "constants": [],
                  "variables": [
                    0.5
                  ]
                }
              }
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1045772852\">Fugue_Eidolon6</a>[<span class=\"descriptionNumberColor\">Clairvoyance of Boom and Doom</span>]",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakEfficiency</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                    "displayLines": "MDF_PropertyValue",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": [],
          "description": "Weakness Break Efficiency increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "Weakness Break Efficiency Boost",
          "statusName": "Clairvoyance of Boom and Doom"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-18674978\">Fugue_Eidolon2_Listen</a>",
          "execute": [
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
                    {
                      "name": "Action Advance/Delay",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                      },
                      "advanceType": "Advance",
                      "multiAdd": "-0.24"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Weakness Break [Anyone]",
              "execute": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
                    ]
                  },
                  "isFixed": "* ERR"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__281541797\">Fugue_PointB3_Sub03</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: Start [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Ability Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "value1": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakSUM</span>&nbsp;",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (MDF_Sub3_PointB3_BreakDamageValue) || RETURN",
                      "displayLines": "MDF_Sub3_PointB3_BreakDamageValue",
                      "constants": [],
                      "variables": [
                        "MDF_Sub3_PointB3_BreakDamageValue"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}} - {{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"264764178\">Fugue_PointB3_Sub02</a>",
                      "stackLimit": {
                        "operator": "Variables[0] (MDF_Sub3_MaxLayer) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(MDF_Sub3_MaxLayer + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "MDF_Sub3_MaxLayer"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyRatio": {
                          "operator": "Variables[0] (MDF_Sub3_MaxPropertyRatio) || RETURN",
                          "displayLines": "MDF_Sub3_MaxPropertyRatio",
                          "constants": [],
                          "variables": [
                            "MDF_Sub3_MaxPropertyRatio"
                          ]
                        }
                      },
                      "addStacksPerTrigger": 1
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}} - {{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"490649964\">Fugue_PointB3_Sub</a>[<span class=\"descriptionNumberColor\">Phecda Primordia</span>]",
                      "duration": {
                        "operator": "Variables[0] (MDF_Sub3_LifeTime) || RETURN",
                        "displayLines": "MDF_Sub3_LifeTime",
                        "constants": [],
                        "variables": [
                          "MDF_Sub3_LifeTime"
                        ]
                      },
                      "stackLimit": {
                        "operator": "Variables[0] (MDF_Sub3_MaxLayer) || RETURN",
                        "displayLines": "MDF_Sub3_MaxLayer",
                        "constants": [],
                        "variables": [
                          "MDF_Sub3_MaxLayer"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_BreakDamageAdd": {
                          "operator": "Variables[0] (MDF_Sub3_MaxPropertyRatio) || RETURN",
                          "displayLines": "MDF_Sub3_MaxPropertyRatio",
                          "constants": [],
                          "variables": [
                            "MDF_Sub3_MaxPropertyRatio"
                          ]
                        }
                      },
                      "addStacksPerTrigger": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}} - {{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"264764178\">Fugue_PointB3_Sub02</a>",
                      "stackLimit": {
                        "operator": "Variables[0] (MDF_Sub3_MaxLayer) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(MDF_Sub3_MaxLayer + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "MDF_Sub3_MaxLayer"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyRatio": {
                          "operator": "Variables[0] (MDF_Sub3_PropertyRatio) || RETURN",
                          "displayLines": "MDF_Sub3_PropertyRatio",
                          "constants": [],
                          "variables": [
                            "MDF_Sub3_PropertyRatio"
                          ]
                        }
                      },
                      "addStacksPerTrigger": 1
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}} - {{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"490649964\">Fugue_PointB3_Sub</a>[<span class=\"descriptionNumberColor\">Phecda Primordia</span>]",
                      "duration": {
                        "operator": "Variables[0] (MDF_Sub3_LifeTime) || RETURN",
                        "displayLines": "MDF_Sub3_LifeTime",
                        "constants": [],
                        "variables": [
                          "MDF_Sub3_LifeTime"
                        ]
                      },
                      "stackLimit": {
                        "operator": "Variables[0] (MDF_Sub3_MaxLayer) || RETURN",
                        "displayLines": "MDF_Sub3_MaxLayer",
                        "constants": [],
                        "variables": [
                          "MDF_Sub3_MaxLayer"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_BreakDamageAdd": {
                          "operator": "Variables[0] (MDF_Sub3_PropertyRatio) || RETURN",
                          "displayLines": "MDF_Sub3_PropertyRatio",
                          "constants": [],
                          "variables": [
                            "MDF_Sub3_PropertyRatio"
                          ]
                        }
                      },
                      "addStacksPerTrigger": 1
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__264764178\">Fugue_PointB3_Sub02</a>",
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
                  "variableName": "MDF_Layer",
                  "modifierName": "<a class=\"gModGreen\" id=\"264764178\">Fugue_PointB3_Sub02</a>",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PropertyRatio",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyRatio) || Variables[1] (MDF_Layer) || Constants[0] (1) || SUB || MUL || RETURN",
                    "displayLines": "(MDF_PropertyRatio * (MDF_Layer - 1))",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "MDF_PropertyRatio",
                      "MDF_Layer"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyRatio) || RETURN",
                    "displayLines": "MDF_PropertyRatio",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyRatio"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"490649964\">Fugue_PointB3_Sub</a>[<span class=\"descriptionNumberColor\">Phecda Primordia</span>]"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_PropertyRatio",
                      "value": 0
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Living State",
                        "state": "Mask_AliveOrRevivable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "invertCondition": true
                      },
                      "passed": [
                        "Modifier Deletes Itself"
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable with Modifier Values",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "ContextModifier",
                          "valueType": "Layer",
                          "variableName": "Layer_Count",
                          "multiplier": 1
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"264764178\">Fugue_PointB3_Sub02</a>",
                          "addStacksPerTrigger": {
                            "operator": "Constants[0] (1) || Variables[0] (Layer_Count) || SUB || RETURN",
                            "displayLines": "(1 - Layer_Count)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "Layer_Count"
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
          "stackData": [
            "MDF_PropertyRatio"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__490649964\">Fugue_PointB3_Sub</a>[<span class=\"descriptionNumberColor\">Phecda Primordia</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [
            "MDF_BreakDamageAdd"
          ],
          "latentQueue": [],
          "description": "Each stack increases Break Effect by <span class=\"descriptionNumberColor\">MDF_BreakDamageAdd</span>. This effect can stack up to <span class=\"descriptionNumberColor\">#SkillTree_PointB3_P3_Layer</span> time(s).",
          "type": "Buff",
          "effectName": "Break Effect Boost",
          "statusName": "Phecda Primordia"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__32106889\">Fugue_PointB3_Listen</a>",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
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
                        "team": "Player Team"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"264764178\">Fugue_PointB3_Sub02</a>",
                        "invertCondition": true
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
                      "modifier": "<a class=\"gModGreen\" id=\"264764178\">Fugue_PointB3_Sub02</a>",
                      "stackLimit": {
                        "operator": "Variables[0] (2) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(2 + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          2
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyRatio": 0,
                        "MDF_Layer": 0
                      },
                      "addStacksPerTrigger": 1
                    }
                  ]
                },
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
                      "modifier": "<a class=\"gModGreen\" id=\"281541797\">Fugue_PointB3_Sub03</a>",
                      "valuePerStack": {
                        "MDF_Sub3_MaxLayer": {
                          "operator": "Variables[0] (2) || RETURN",
                          "displayLines": "2",
                          "constants": [],
                          "variables": [
                            2
                          ]
                        },
                        "MDF_Sub3_LifeTime": {
                          "operator": "Variables[0] (2) || RETURN",
                          "displayLines": "2",
                          "constants": [],
                          "variables": [
                            2
                          ]
                        },
                        "MDF_Sub3_PropertyRatio": {
                          "operator": "Variables[0] (0.06) || RETURN",
                          "displayLines": "0.06",
                          "constants": [],
                          "variables": [
                            0.06
                          ]
                        },
                        "MDF_Sub3_MaxPropertyRatio": {
                          "operator": "Variables[0] (0.06) || Variables[1] (0.12) || ADD || RETURN",
                          "displayLines": "(0.06 + 0.12)",
                          "constants": [],
                          "variables": [
                            0.06,
                            0.12
                          ]
                        },
                        "MDF_Sub3_PointB3_BreakDamageValue": {
                          "operator": "Variables[0] (2.2) || RETURN",
                          "displayLines": "2.2",
                          "constants": [],
                          "variables": [
                            2.2
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
                    "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
                  },
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"264764178\">Fugue_PointB3_Sub02</a>",
                    "invertCondition": true
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"264764178\">Fugue_PointB3_Sub02</a>",
                      "stackLimit": {
                        "operator": "Variables[0] (2) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(2 + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          2
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyRatio": 0,
                        "MDF_Layer": 0
                      },
                      "addStacksPerTrigger": 1
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"281541797\">Fugue_PointB3_Sub03</a>",
                  "valuePerStack": {
                    "MDF_Sub3_MaxLayer": {
                      "operator": "Variables[0] (2) || RETURN",
                      "displayLines": "2",
                      "constants": [],
                      "variables": [
                        2
                      ]
                    },
                    "MDF_Sub3_LifeTime": {
                      "operator": "Variables[0] (2) || RETURN",
                      "displayLines": "2",
                      "constants": [],
                      "variables": [
                        2
                      ]
                    },
                    "MDF_Sub3_PropertyRatio": {
                      "operator": "Variables[0] (0.06) || RETURN",
                      "displayLines": "0.06",
                      "constants": [],
                      "variables": [
                        0.06
                      ]
                    },
                    "MDF_Sub3_MaxPropertyRatio": {
                      "operator": "Variables[0] (0.06) || Variables[1] (0.12) || ADD || RETURN",
                      "displayLines": "(0.06 + 0.12)",
                      "constants": [],
                      "variables": [
                        0.06,
                        0.12
                      ]
                    },
                    "MDF_Sub3_PointB3_BreakDamageValue": {
                      "operator": "Variables[0] (2.2) || RETURN",
                      "displayLines": "2.2",
                      "constants": [],
                      "variables": [
                        2.2
                      ]
                    }
                  }
                }
              ],
              "priorityLevel": -80
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1748420043\">Fugue_PointB2_Sub</a>[<span class=\"descriptionNumberColor\">Sylvan Enigma</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyRatio_BreakDamageSelf) || RETURN",
                    "displayLines": "MDF_PropertyRatio_BreakDamageSelf",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyRatio_BreakDamageSelf"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyRatio_BreakDamageSelf"
          ],
          "latentQueue": [],
          "description": "Break Effect increases by <span class=\"descriptionNumberColor\">MDF_PropertyRatio_BreakDamageSelf</span>.",
          "type": "Buff",
          "effectName": "Break Effect Boost",
          "statusName": "Sylvan Enigma"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-880987638\">Fugue_PointB2_BpBack</a>",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Skill"
                  },
                  "passed": [
                    {
                      "name": "Skill Points Modification",
                      "adjustmentValue": {
                        "operator": "Variables[0] (1) || RETURN",
                        "displayLines": "1",
                        "constants": [],
                        "variables": [
                          1
                        ]
                      },
                      "adjustmentType": "+"
                    },
                    "Modifier Deletes Itself"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1523669098\">Fugue_PointB1_Bonus_Preshow</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": {
              "name": "Target Name",
              "target": "{{Player's Aim Target List}}"
            },
            "conditions": {
              "name": "Has Toughness Reduction Preview",
              "caster": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": {
                "operator": "Variables[0] (MDF_PropertyValue2) || RETURN",
                "displayLines": "MDF_PropertyValue2",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue2"
                ]
              }
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1113685163\">Fugue_PointB1_Listen</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1523669098\">Fugue_PointB1_Bonus_Preshow</a>",
                  "valuePerStack": {
                    "MDF_PropertyValue2": {
                      "operator": "Variables[0] (0.15) || RETURN",
                      "displayLines": "0.15",
                      "constants": [],
                      "variables": [
                        0.15
                      ]
                    }
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
                    "team": "Player Team"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1523669098\">Fugue_PointB1_Bonus_Preshow</a>",
                      "valuePerStack": {
                        "MDF_PropertyValue2": {
                          "operator": "Variables[0] (0.15) || RETURN",
                          "displayLines": "0.15",
                          "constants": [],
                          "variables": [
                            0.15
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Weakness Break [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target 2}}"
                    },
                    "team": "Player Team"
                  },
                  "passed": [
                    {
                      "name": "Action Advance/Delay",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "advanceType": "Delay",
                      "multiAdd": "0.15"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-825933762\">Fugue_PassiveAbility_OnListenBreakModifier</a>",
          "stackData": [],
          "latentQueue": [],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectables}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2001305717\">Fugue_PassiveAbility_ListenBreakDamage</a>",
              "aliveOnly": "False",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_PassiveDamage2": {
                  "operator": "Variables[0] (1) || RETURN",
                  "displayLines": "1",
                  "constants": [],
                  "variables": [
                    1
                  ]
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1774454693\">Fugue_RedStance</a>[<span class=\"descriptionNumberColor\">Cloudflame Luster</span>]",
              "aliveOnly": "False",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_PassiveDamage2": {
                  "operator": "Variables[0] (1) || RETURN",
                  "displayLines": "1",
                  "constants": [],
                  "variables": [
                    1
                  ]
                },
                "MDF_RedStanceRatio": {
                  "operator": "Variables[0] (0.4) || RETURN",
                  "displayLines": "0.4",
                  "constants": [],
                  "variables": [
                    0.4
                  ]
                },
                "MDF_MinStance": 30
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-74108309\">Fugue_PassiveAbility_ElementDamage</a>",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_SuperBreakDamagePercentage": 0
              }
            }
          ]
        }
      ]
    },
    "Fugue_Fugue_Ability03_Part02": {
      "fileName": "Fugue_Fugue_Ability03_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1376045581\">Fugue_Ability03_WeakType_BUFF</a>"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (2) || RETURN",
              "displayLines": "2",
              "constants": [],
              "variables": [
                2
              ]
            },
            "HitSplit": 0.6,
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "Tags": null,
            "attackType": "Ultimate",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (2) || RETURN",
              "displayLines": "2",
              "constants": [],
              "variables": [
                2
              ]
            },
            "HitSplit": 0.1,
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "Tags": null,
            "attackType": "Ultimate",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (2) || RETURN",
              "displayLines": "2",
              "constants": [],
              "variables": [
                2
              ]
            },
            "HitSplit": 0.1,
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "Tags": null,
            "attackType": "Ultimate",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (2) || RETURN",
              "displayLines": "2",
              "constants": [],
              "variables": [
                2
              ]
            },
            "HitSplit": 0.1,
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "Tags": null,
            "attackType": "Ultimate",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (2) || RETURN",
              "displayLines": "2",
              "constants": [],
              "variables": [
                2
              ]
            },
            "HitSplit": 0.1,
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "Tags": null,
            "attackType": "Ultimate",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1376045581\">Fugue_Ability03_WeakType_BUFF</a>"
        },
        "Trigger: Skip Death Handling",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Fugue_Fugue_Ability03_Part01": {
      "fileName": "Fugue_Fugue_Ability03_Part01",
      "childAbilityList": [
        "Fugue_Fugue_Ability03_Camera",
        "Fugue_Fugue_Ability03_EnterReady",
        "Fugue_Fugue_Ability03_Part01",
        "Fugue_Fugue_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": 5,
      "toughnessList": [
        0,
        20,
        0
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Fugue_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Fugue_Fugue_Ability03_EnterReady": {
      "fileName": "Fugue_Fugue_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Fugue_Fugue_Ability02_Part02": {
      "fileName": "Fugue_Fugue_Ability02_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-690913647\">Fugue_BPAbilityBonusListen</a>[<span class=\"descriptionNumberColor\">Torrid Scorch</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"647019371\">Fugue_BPAbility</a>[<span class=\"descriptionNumberColor\">Foxian Prayer</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1132900651\">Fugue_BPAbility_Eidolon1</a>[<span class=\"descriptionNumberColor\">Foxian Prayer</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1216788746\">Fugue_BPAbility_Eidolon4</a>[<span class=\"descriptionNumberColor\">Foxian Prayer</span>]"
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": 3,
          "maximum": 3,
          "assignState": "True",
          "priorState": "Active",
          "bar#": 3,
          "cooldown": 0
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-690913647\">Fugue_BPAbilityBonusListen</a>[<span class=\"descriptionNumberColor\">Torrid Scorch</span>]",
          "duration": {
            "operator": "Variables[0] (3) || RETURN",
            "displayLines": "3",
            "constants": [],
            "variables": [
              3
            ]
          },
          "valuePerStack": {
            "MDF_Chance": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "MDF_DefenceDownRatio": {
              "operator": "Variables[0] (0.18) || RETURN",
              "displayLines": "0.18",
              "constants": [],
              "variables": [
                0.18
              ]
            },
            "MDF_LifeTime": {
              "operator": "Variables[0] (2) || RETURN",
              "displayLines": "2",
              "constants": [],
              "variables": [
                2
              ]
            }
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"696396442\">Fugue_Eidolon6_Listen</a>"
            }
          ],
          "failed": [
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
                    "target": "{{Ability Target(ST)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1216788746\">Fugue_BPAbility_Eidolon4</a>[<span class=\"descriptionNumberColor\">Foxian Prayer</span>]",
                  "valuePerStack": {
                    "MDF_BreakDamageAdd": {
                      "operator": "Variables[0] (0.3) || RETURN",
                      "displayLines": "0.3",
                      "constants": [],
                      "variables": [
                        0.3
                      ]
                    },
                    "MDF_StanceBreakAddRatio": {
                      "operator": "Variables[0] (0.5) || RETURN",
                      "displayLines": "0.5",
                      "constants": [],
                      "variables": [
                        0.5
                      ]
                    },
                    "MDF_Chance": {
                      "operator": "Variables[0] (1) || RETURN",
                      "displayLines": "1",
                      "constants": [],
                      "variables": [
                        1
                      ]
                    },
                    "MDF_DefenceDownRatio": {
                      "operator": "Variables[0] (0.18) || RETURN",
                      "displayLines": "0.18",
                      "constants": [],
                      "variables": [
                        0.18
                      ]
                    },
                    "MDF_BreakDamageAddedRatio": {
                      "operator": "Variables[0] (0.2) || RETURN",
                      "displayLines": "0.2",
                      "constants": [],
                      "variables": [
                        0.2
                      ]
                    },
                    "MDF_LifeTime": {
                      "operator": "Variables[0] (2) || RETURN",
                      "displayLines": "2",
                      "constants": [],
                      "variables": [
                        2
                      ]
                    },
                    "MDF_PropertyRatio": {
                      "operator": "Variables[0] (0.5) || RETURN",
                      "displayLines": "0.5",
                      "constants": [],
                      "variables": [
                        0.5
                      ]
                    }
                  }
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1132900651\">Fugue_BPAbility_Eidolon1</a>[<span class=\"descriptionNumberColor\">Foxian Prayer</span>]",
                      "valuePerStack": {
                        "MDF_BreakDamageAdd": {
                          "operator": "Variables[0] (0.3) || RETURN",
                          "displayLines": "0.3",
                          "constants": [],
                          "variables": [
                            0.3
                          ]
                        },
                        "MDF_StanceBreakAddRatio": {
                          "operator": "Variables[0] (0.5) || RETURN",
                          "displayLines": "0.5",
                          "constants": [],
                          "variables": [
                            0.5
                          ]
                        },
                        "MDF_Chance": {
                          "operator": "Variables[0] (1) || RETURN",
                          "displayLines": "1",
                          "constants": [],
                          "variables": [
                            1
                          ]
                        },
                        "MDF_DefenceDownRatio": {
                          "operator": "Variables[0] (0.18) || RETURN",
                          "displayLines": "0.18",
                          "constants": [],
                          "variables": [
                            0.18
                          ]
                        },
                        "MDF_LifeTime": {
                          "operator": "Variables[0] (2) || RETURN",
                          "displayLines": "2",
                          "constants": [],
                          "variables": [
                            2
                          ]
                        },
                        "MDF_PropertyRatio": {
                          "operator": "Variables[0] (0.5) || RETURN",
                          "displayLines": "0.5",
                          "constants": [],
                          "variables": [
                            0.5
                          ]
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"647019371\">Fugue_BPAbility</a>[<span class=\"descriptionNumberColor\">Foxian Prayer</span>]",
                      "valuePerStack": {
                        "MDF_BreakDamageAdd": {
                          "operator": "Variables[0] (0.3) || RETURN",
                          "displayLines": "0.3",
                          "constants": [],
                          "variables": [
                            0.3
                          ]
                        },
                        "MDF_Chance": {
                          "operator": "Variables[0] (1) || RETURN",
                          "displayLines": "1",
                          "constants": [],
                          "variables": [
                            1
                          ]
                        },
                        "MDF_DefenceDownRatio": {
                          "operator": "Variables[0] (0.18) || RETURN",
                          "displayLines": "0.18",
                          "constants": [],
                          "variables": [
                            0.18
                          ]
                        },
                        "MDF_LifeTime": {
                          "operator": "Variables[0] (2) || RETURN",
                          "displayLines": "2",
                          "constants": [],
                          "variables": [
                            2
                          ]
                        },
                        "MDF_PropertyRatio": {
                          "operator": "Variables[0] (0.5) || RETURN",
                          "displayLines": "0.5",
                          "constants": [],
                          "variables": [
                            0.5
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "valuePercent": 1,
          "ofAbilitySplit": true,
          "isFixed": "* ERR"
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1216788746\">Fugue_BPAbility_Eidolon4</a>[<span class=\"descriptionNumberColor\">Foxian Prayer</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "Unknow",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "ListenBattleEventSkill",
            "ForceStanceDamage"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 6
                  },
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-690913647\">Fugue_BPAbilityBonusListen</a>[<span class=\"descriptionNumberColor\">Torrid Scorch</span>]"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Attack Type",
                        "attackTypes": [
                          "Break DMG"
                        ]
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakMulti</span>&nbsp;",
                          "value": "MDF_BreakDamageAddedRatio"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakEfficiency</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_StanceBreakAddRatio) || RETURN",
                    "displayLines": "MDF_StanceBreakAddRatio",
                    "constants": [],
                    "variables": [
                      "MDF_StanceBreakAddRatio"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_BreakDamageAdd) || RETURN",
                    "displayLines": "MDF_BreakDamageAdd",
                    "constants": [],
                    "variables": [
                      "MDF_BreakDamageAdd"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessReductionForced%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyRatio) || RETURN",
                    "displayLines": "MDF_PropertyRatio",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_BreakDamageAdd",
            "MDF_StanceBreakAddRatio",
            "MDF_Chance",
            "MDF_DefenceDownRatio",
            "MDF_BreakDamageAddedRatio",
            "MDF_LifeTime",
            "MDF_PropertyRatio"
          ],
          "latentQueue": [],
          "description": "Break DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_BreakDamageAddedRatio</span>, Weakness Break Efficiency increases by <span class=\"descriptionNumberColor\">MDF_StanceBreakAddRatio</span>, and Break Effect increases by <span class=\"descriptionNumberColor\">MDF_BreakDamageAdd</span>. Can also reduce Toughness when attacking enemies that don't have the corresponding Weakness Type, with the effect equivalent to <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span> of the original Toughness Reduction value. This cannot stack with other Toughness Reduction effects that also ignore Weakness Type.",
          "type": "Buff",
          "effectName": "Foxian Prayer",
          "statusName": "Foxian Prayer"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1132900651\">Fugue_BPAbility_Eidolon1</a>[<span class=\"descriptionNumberColor\">Foxian Prayer</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "Unknow",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "ListenBattleEventSkill",
            "ForceStanceDamage"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-690913647\">Fugue_BPAbilityBonusListen</a>[<span class=\"descriptionNumberColor\">Torrid Scorch</span>]"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakEfficiency</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_StanceBreakAddRatio) || RETURN",
                    "displayLines": "MDF_StanceBreakAddRatio",
                    "constants": [],
                    "variables": [
                      "MDF_StanceBreakAddRatio"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_BreakDamageAdd) || RETURN",
                    "displayLines": "MDF_BreakDamageAdd",
                    "constants": [],
                    "variables": [
                      "MDF_BreakDamageAdd"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessReductionForced%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyRatio) || RETURN",
                    "displayLines": "MDF_PropertyRatio",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_BreakDamageAdd",
            "MDF_StanceBreakAddRatio",
            "MDF_Chance",
            "MDF_DefenceDownRatio",
            "MDF_LifeTime",
            "MDF_PropertyRatio"
          ],
          "latentQueue": [],
          "description": "Weakness Break Efficiency increases by <span class=\"descriptionNumberColor\">MDF_StanceBreakAddRatio</span>. Break Effect increases by <span class=\"descriptionNumberColor\">MDF_BreakDamageAdd</span>. Can also reduce Toughness when attacking enemies that don't have the corresponding Weakness Type, with the effect equivalent to <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span> of the original Toughness Reduction value. This cannot stack with other Toughness Reduction effects that also ignore Weakness Type.",
          "type": "Buff",
          "effectName": "Foxian Prayer",
          "statusName": "Foxian Prayer"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__647019371\">Fugue_BPAbility</a>[<span class=\"descriptionNumberColor\">Foxian Prayer</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "Unknow",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "ListenBattleEventSkill",
            "ForceStanceDamage"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-690913647\">Fugue_BPAbilityBonusListen</a>[<span class=\"descriptionNumberColor\">Torrid Scorch</span>]"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_BreakDamageAdd) || RETURN",
                    "displayLines": "MDF_BreakDamageAdd",
                    "constants": [],
                    "variables": [
                      "MDF_BreakDamageAdd"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessReductionForced%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyRatio) || RETURN",
                    "displayLines": "MDF_PropertyRatio",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_BreakDamageAdd",
            "MDF_Chance",
            "MDF_DefenceDownRatio",
            "MDF_LifeTime",
            "MDF_PropertyRatio"
          ],
          "latentQueue": [],
          "description": "Break Effect increases by <span class=\"descriptionNumberColor\">MDF_BreakDamageAdd</span>. Can also reduce Toughness when attacking enemies that don't have the corresponding Weakness Type, with the effect equivalent to <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span> of the original Toughness Reduction value. This cannot stack with other Toughness Reduction effects that also ignore Weakness Type.",
          "type": "Buff",
          "effectName": "Foxian Prayer",
          "statusName": "Foxian Prayer"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-690913647\">Fugue_BPAbilityBonusListen</a>[<span class=\"descriptionNumberColor\">Torrid Scorch</span>]",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 0,
                  "maximum": 3,
                  "assignState": "True",
                  "priorState": "Normal",
                  "bar#": 3,
                  "cooldown": 0
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"647019371\">Fugue_BPAbility</a>[<span class=\"descriptionNumberColor\">Foxian Prayer</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1132900651\">Fugue_BPAbility_Eidolon1</a>[<span class=\"descriptionNumberColor\">Foxian Prayer</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1216788746\">Fugue_BPAbility_Eidolon4</a>[<span class=\"descriptionNumberColor\">Foxian Prayer</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"696396442\">Fugue_Eidolon6_Listen</a>"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Fugue_Skill11_Flag",
                  "value": 0
                },
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityName": "Skill01",
                  "skillSlot": "Basic ATK"
                },
                {
                  "name": "Update Ability Enhance Button",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "display": "Hide",
                  "abilityName": "Basic ATK"
                }
              ]
            },
            {
              "eventTrigger": "Action Phase Start [Owner][?]",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "LifeTime",
                  "variableName": "Skill02_EnergyBarCount",
                  "modifierName": "<a class=\"gModGreen\" id=\"-690913647\">Fugue_BPAbilityBonusListen</a>[<span class=\"descriptionNumberColor\">Torrid Scorch</span>]",
                  "multiplier": 1
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (Skill02_EnergyBarCount) || RETURN",
                    "displayLines": "Skill02_EnergyBarCount",
                    "constants": [],
                    "variables": [
                      "Skill02_EnergyBarCount"
                    ]
                  },
                  "maximum": 3,
                  "assignState": "True",
                  "priorState": "Active",
                  "bar#": 3,
                  "cooldown": 0
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityName": "Skill11",
                  "skillSlot": "Basic ATK"
                },
                {
                  "name": "Update Ability Enhance Button",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "display": "Show",
                  "abilityName": "Basic ATK"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Fugue_Skill11_Flag",
                  "value": 1
                }
              ]
            }
          ],
          "stackData": [
            "MDF_Chance",
            "MDF_DefenceDownRatio",
            "MDF_LifeTime"
          ],
          "latentQueue": [],
          "description": "The Basic ATK \"Radiant Streak\" is enhanced to \"Fiery Caress\" that can deal Blast DMG. Every time an ally target with \"Foxian Prayer\" attacks, Fugue has a <span class=\"descriptionNumberColor\">MDF_Chance</span> base chance to reduce the attacked enemy target's DEF by <span class=\"descriptionNumberColor\">MDF_DefenceDownRatio</span>, lasting for <span class=\"descriptionNumberColor\">MDF_LifeTime</span> turn(s).",
          "type": "Other",
          "statusName": "Torrid Scorch"
        }
      ]
    },
    "Fugue_Fugue_Ability02_Part01": {
      "fileName": "Fugue_Fugue_Ability02_Part01",
      "childAbilityList": [
        "Fugue_Fugue_Ability02_Camera",
        "Fugue_Fugue_Ability02_Camera_Self",
        "Fugue_Fugue_Ability02_Part01",
        "Fugue_Fugue_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": 30,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Fugue_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "references": []
    },
    "Fugue_Fugue_Ability11_Part02": {
      "fileName": "Fugue_Fugue_Ability11_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Shot Fired",
          "caster": {
            "name": "Target Name",
            "target": "{{Caster}}"
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
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (0.5) || RETURN",
              "displayLines": "0.5",
              "constants": [],
              "variables": [
                0.5
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (Blast Toughness Value) || RETURN",
              "displayLines": "Blast Toughness Value",
              "constants": [],
              "variables": [
                "Blast Toughness Value"
              ]
            },
            "Tags": null,
            "attackType": "Basic ATK"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Fugue_Fugue_Ability11_Part01": {
      "fileName": "Fugue_Fugue_Ability11_Part01",
      "childAbilityList": [
        "Fugue_Fugue_Ability11_Camera",
        "Fugue_Fugue_Ability11_Part01",
        "Fugue_Fugue_Ability11_Part02"
      ],
      "skillTrigger": "Skill11",
      "abilityType": "Basic ATK",
      "energy": 20,
      "toughnessList": [
        10,
        0,
        5
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Fugue_Ability11_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "Fugue_Fugue_Ability01_Part02": {
      "fileName": "Fugue_Fugue_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] (1) || RETURN",
                  "displayLines": "1",
                  "constants": [],
                  "variables": [
                    1
                  ]
                },
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || RETURN",
                  "displayLines": "ST Toughness Value",
                  "constants": [],
                  "variables": [
                    "ST Toughness Value"
                  ]
                },
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Fugue_Fugue_Ability01_Part01": {
      "fileName": "Fugue_Fugue_Ability01_Part01",
      "childAbilityList": [
        "Fugue_Fugue_Ability01_Camera",
        "Fugue_Fugue_Ability01_Part01",
        "Fugue_Fugue_Ability01_Part02"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Basic ATK",
      "energy": 20,
      "toughnessList": [
        10,
        0,
        0
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Fugue_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "Fugue_Modifiers": {
      "fileName": "Fugue_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-74108309\">Fugue_PassiveAbility_ElementDamage</a>",
          "stackType": "Replace",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"2132906314\">DealSuperBreakDamage_DamagePerformance</a>",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Attack Targets of Modifier Holder}}"
                  },
                  "variables": {
                    "value_0_DamagePercentage": {
                      "operator": "Variables[0] (MDF_SuperBreakDamagePercentage) || RETURN",
                      "displayLines": "MDF_SuperBreakDamagePercentage",
                      "constants": [],
                      "variables": [
                        "MDF_SuperBreakDamagePercentage"
                      ]
                    }
                  },
                  "damageSequence": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1466558420\">PursuedDamage_PerformanceDelay</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": {
                          "name": "Damage Type Source",
                          "sourceType": "ReadTargetType",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          }
                        },
                        "DamageBreak": {
                          "operator": "Variables[0] (value_0_DamagePercentage) || RETURN",
                          "displayLines": "value_0_DamagePercentage",
                          "constants": [],
                          "variables": [
                            "value_0_DamagePercentage"
                          ]
                        },
                        "dmgFormula": "Break DMG Scaling",
                        "dmgFormulaFinal": "Pure (No DMG%)",
                        "Toughness": null,
                        "Tags": [
                          "Super Break"
                        ],
                        "attackType": "Break DMG"
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_SuperBreakDamagePercentage"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2001305717\">Fugue_PassiveAbility_ListenBreakDamage</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "STAT_SuperBreakBuff"
          ],
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-74108309\">Fugue_PassiveAbility_ElementDamage</a>",
                  "valuePerStack": {
                    "MDF_SuperBreakDamagePercentage": {
                      "operator": "Variables[0] (MDF_PassiveDamage2) || RETURN",
                      "displayLines": "MDF_PassiveDamage2",
                      "constants": [],
                      "variables": [
                        "MDF_PassiveDamage2"
                      ]
                    }
                  },
                  "casterAssign": "TargetSelf"
                }
              ],
              "priorityLevel": 100
            }
          ],
          "stackData": [
            "MDF_PassiveDamage2"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1376045581\">Fugue_Ability03_WeakType_BUFF</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "ForceStanceDamage"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessReductionForced%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (FUGUE_OBJECT_UNUSED_1) || RETURN",
                    "displayLines": "FUGUE_OBJECT_UNUSED_1",
                    "constants": [],
                    "variables": [
                      "FUGUE_OBJECT_UNUSED_1"
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
          "for": "<a class=\"gModGreen\" id=\"mod__873674204\">Fugue_StancePreview</a>",
          "stackData": [],
          "latentQueue": [],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "skillType": "Ultimate",
            "toughnessForcedReductionPreview": {
              "operator": "Variables[0] (FUGUE_OBJECT_UNUSED_1) || RETURN",
              "displayLines": "FUGUE_OBJECT_UNUSED_1",
              "constants": [],
              "variables": [
                "FUGUE_OBJECT_UNUSED_1"
              ]
            },
            "showAsForcedReduction": true
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-375769760\">Fugue_DefenceDown</a>[<span class=\"descriptionNumberColor\">Virtue Beckons Bliss</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_DefenceDown"
          ],
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                      "value": "(0 - MDF_DefenceDownRatio)"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_DefenceDownRatio"
          ],
          "latentQueue": [],
          "description": "DEF decreases by <span class=\"descriptionNumberColor\">MDF_DefenceDownRatio</span>.",
          "type": "Debuff",
          "effectName": "DEF Reduction",
          "statusName": "Virtue Beckons Bliss"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__915939939\">Fugue_Eidolon2_PreShow</a>",
          "stackData": [],
          "latentQueue": [],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": {
              "name": "Target Name",
              "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
            },
            "skillType": [
              "Ultimate"
            ],
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": {
                "operator": "Variables[0] (0.24) || INVERT || RETURN",
                "displayLines": "-0.24",
                "constants": [],
                "variables": [
                  0.24
                ]
              }
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__696396442\">Fugue_Eidolon6_Listen</a>",
          "stackData": [],
          "latentQueue": [],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectables}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1216788746\">Fugue_BPAbility_Eidolon4</a>[<span class=\"descriptionNumberColor\">Foxian Prayer</span>]",
              "aliveOnly": "True",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_BreakDamageAdd": {
                  "operator": "Variables[0] (0.3) || RETURN",
                  "displayLines": "0.3",
                  "constants": [],
                  "variables": [
                    0.3
                  ]
                },
                "MDF_StanceBreakAddRatio": {
                  "operator": "Variables[0] (0.5) || RETURN",
                  "displayLines": "0.5",
                  "constants": [],
                  "variables": [
                    0.5
                  ]
                },
                "MDF_Chance": {
                  "operator": "Variables[0] (1) || RETURN",
                  "displayLines": "1",
                  "constants": [],
                  "variables": [
                    1
                  ]
                },
                "MDF_DefenceDownRatio": {
                  "operator": "Variables[0] (0.18) || RETURN",
                  "displayLines": "0.18",
                  "constants": [],
                  "variables": [
                    0.18
                  ]
                },
                "MDF_BreakDamageAddedRatio": {
                  "operator": "Variables[0] (0.2) || RETURN",
                  "displayLines": "0.2",
                  "constants": [],
                  "variables": [
                    0.2
                  ]
                },
                "MDF_LifeTime": {
                  "operator": "Variables[0] (2) || RETURN",
                  "displayLines": "2",
                  "constants": [],
                  "variables": [
                    2
                  ]
                },
                "MDF_PropertyRatio": {
                  "operator": "Variables[0] (0.5) || RETURN",
                  "displayLines": "0.5",
                  "constants": [],
                  "variables": [
                    0.5
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1774454693\">Fugue_RedStance</a>[<span class=\"descriptionNumberColor\">Cloudflame Luster</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
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
                  "variableName": "MDF_CurMaxStance2",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
                  "warningType": "MaxToughness"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_RedStance_First",
                  "value": {
                    "operator": "Variables[0] (MDF_CurMaxStance2) || Variables[1] (MDF_RedStanceRatio) || MUL || RETURN",
                    "displayLines": "(MDF_CurMaxStance2 * MDF_RedStanceRatio)",
                    "constants": [],
                    "variables": [
                      "MDF_CurMaxStance2",
                      "MDF_RedStanceRatio"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_RedStance_First",
                    "compareType": "<=",
                    "value2": 0
                  },
                  "failed": [
                    {
                      "name": "Stack Exo-Toughness",
                      "exoPercent": {
                        "operator": "Variables[0] (MDF_RedStanceRatio) || RETURN",
                        "displayLines": "MDF_RedStanceRatio",
                        "constants": [],
                        "variables": [
                          "MDF_RedStanceRatio"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked Start [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1216788746\">Fugue_BPAbility_Eidolon4</a>[<span class=\"descriptionNumberColor\">Foxian Prayer</span>]"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1132900651\">Fugue_BPAbility_Eidolon1</a>[<span class=\"descriptionNumberColor\">Foxian Prayer</span>]"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"647019371\">Fugue_BPAbility</a>[<span class=\"descriptionNumberColor\">Foxian Prayer</span>]"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-375769760\">Fugue_DefenceDown</a>[<span class=\"descriptionNumberColor\">Virtue Beckons Bliss</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "baseChance": {
                        "operator": "Variables[0] (1) || RETURN",
                        "displayLines": "1",
                        "constants": [],
                        "variables": [
                          1
                        ]
                      },
                      "valuePerStack": {
                        "MDF_DefenceDownRatio": {
                          "operator": "Variables[0] (0.18) || RETURN",
                          "displayLines": "0.18",
                          "constants": [],
                          "variables": [
                            0.18
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PassiveDamage2",
            "MDF_RedStanceRatio",
            "MDF_MinStance"
          ],
          "latentQueue": [],
          "description": "When initial Toughness is reduced to 0, \"Cloudflame Luster\" can continue to be reduced. When \"Cloudflame Luster\" is reduced to 0, the enemy will receive Weakness Break DMG again.",
          "type": "Other",
          "effectName": "Cloudflame Luster",
          "statusName": "Cloudflame Luster"
        }
      ],
      "references": []
    }
  }
}