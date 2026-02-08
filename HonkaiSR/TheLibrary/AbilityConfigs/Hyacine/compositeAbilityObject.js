const compositeAbilityObject = {
  "fullCharacterName": "Hyacine",
  "trimCharacterName": "Hyacine",
  "summonName": "Little Ica",
  "trimSummonName": "LittleIca",
  "abilityList": [
    "Hyacine_Hyacine_TechniqueInLevel",
    "Hyacine_Hyacine_PassiveAbility01",
    "Hyacine_Hyacine_Ability03_Part02",
    "Hyacine_Hyacine_Ability03_Part01",
    "Hyacine_Hyacine_Ability03_EnterReady",
    "Hyacine_Hyacine_Ability02_Part02",
    "Hyacine_Hyacine_Ability02_Part01",
    "Hyacine_Hyacine_Ability01_Part02",
    "Hyacine_Hyacine_Ability01_Part01",
    "Hyacine_Modifiers",
    "LittleIca_Servant_HyacineServant_Ability01_Part02",
    "LittleIca_Servant_HyacineServant_Ability01_Part01",
    "LittleIca_Servant_HyacineServant_DeathRattle",
    "LittleIca_Servant_HyacineServant_BattleCry",
    "LittleIca_Servant_HyacineServant_PassiveAbility",
    "LittleIca_Modifiers"
  ],
  "abilityObject": {
    "Hyacine_Hyacine_TechniqueInLevel": {
      "fileName": "Hyacine_Hyacine_TechniqueInLevel",
      "childAbilityList": [
        "Hyacine_Hyacine_TechniqueInLevel"
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
          "modifier": "<a class=\"gModGreen\" id=\"1135354482\">StageAbility_Maze_Hyacine_Modifier</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1998064298\">Hyacine_Maze_AddMaxHp</a>[<span class=\"descriptionNumberColor\">Day So Right, Life So Fine!</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HP%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (_MaxHPAdd) || RETURN",
                    "displayLines": "_MaxHPAdd",
                    "constants": [],
                    "variables": [
                      "_MaxHPAdd"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Max HP increases by <span class=\"descriptionNumberColor\">_MaxHPAdd</span>.",
          "type": "Buff",
          "statusName": "Day So Right, Life So Fine!"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1135354482\">StageAbility_Maze_Hyacine_Modifier</a>",
          "execute": [
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
                      "name": "Heal",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "healPercent": {
                        "operator": "Variables[0] (0.3) || RETURN",
                        "displayLines": "0.3",
                        "constants": [],
                        "variables": [
                          0.3
                        ]
                      },
                      "healFlat": {
                        "operator": "Variables[0] (600) || RETURN",
                        "displayLines": "600",
                        "constants": [],
                        "variables": [
                          600
                        ]
                      },
                      "formula": "Heal from Healer's MaxHP"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1998064298\">Hyacine_Maze_AddMaxHp</a>[<span class=\"descriptionNumberColor\">Day So Right, Life So Fine!</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "valuePerStack": {
                        "_MaxHPAdd": {
                          "operator": "Variables[0] (0.2) || RETURN",
                          "displayLines": "0.2",
                          "constants": [],
                          "variables": [
                            0.2
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
    "Hyacine_Hyacine_PassiveAbility01": {
      "fileName": "Hyacine_Hyacine_PassiveAbility01",
      "childAbilityList": [
        "Hyacine_Hyacine_PassiveAbility01"
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
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "_CurrenMaxtHP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": 0,
          "maximum": {
            "operator": "Variables[0] (3) || RETURN",
            "displayLines": "3",
            "constants": [],
            "variables": [
              3
            ]
          },
          "assignState": "True",
          "bar#": "Dot"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-151777328\">Hyacine_Passive</a>"
        },
        {
          "name": "Define Custom Variable with Modifier Values",
          "variableName": "MDF_Energy_Count",
          "modifierName": "<a class=\"gModGreen\" id=\"1761632932\">Hyacine_IronWater</a>",
          "multiplier": 1
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Gloomy Grin"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"981474753\">Hyacine_PointB1</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Stormy Caress"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"931141896\">Hyacine_PointB2</a>",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-151777328\">Hyacine_Passive</a>",
          "execute": [
            {
              "eventTrigger": "Heal Target Start [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Memosprite}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1132518124\">Hyacine_Passive_Effect</a>[<span class=\"descriptionNumberColor\">First Light Heals the World</span>]",
                  "duration": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "stackLimit": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
                    ]
                  },
                  "valuePerStack": {
                    "MDF_DamageAddRatio": {
                      "operator": "Variables[0] (0.8) || RETURN",
                      "displayLines": "0.8",
                      "constants": [],
                      "variables": [
                        0.8
                      ]
                    }
                  },
                  "addStacksPerTrigger": 1
                }
              ]
            },
            {
              "eventTrigger": "Heal Target End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Living State",
                    "state": "Mask_AliveOnly",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Memosprite}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_HealCount",
                      "value": {
                        "operator": "Variables[0] (_HealCount) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(_HealCount + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "_HealCount"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable with Healing",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "_HealValue",
                  "context": "ContextCaster"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_HealValue",
                  "value": {
                    "operator": "Variables[0] (_HealValue) || Constants[0] (1) || Variables[1] (ExtraHealRatio) || ADD || MUL || RETURN",
                    "displayLines": "(_HealValue * (1 + ExtraHealRatio))",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "_HealValue",
                      "ExtraHealRatio"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_HealValueTotal",
                  "value": {
                    "operator": "Variables[0] (_HealValueTotal) || Variables[1] (_HealValue) || ADD || RETURN",
                    "displayLines": "(_HealValueTotal + _HealValue)",
                    "constants": [],
                    "variables": [
                      "_HealValueTotal",
                      "_HealValue"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Memosprite}}"
                  },
                  "variableName": "_SummonerHealValueTotal",
                  "value": {
                    "operator": "Variables[0] (_HealValueTotal) || RETURN",
                    "displayLines": "_HealValueTotal",
                    "constants": [],
                    "variables": [
                      "_HealValueTotal"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Memosprite}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"492819159\">Memosprite_HyacineServant_Passive_Mark</a>[<span class=\"descriptionNumberColor\">Rainclouds, Time to Go!</span>]",
                  "casterAssign": "TargetSelf"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Tempestuous Halt"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1888501948\">Hyacine_PointB3</a>"
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
                      "modifier": "<a class=\"gModGreen\" id=\"290730475\">Hyacine_Eidolon2_Listen</a>"
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
                        "name": "Trace Activated",
                        "conditionList": "Tempestuous Halt"
                      },
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Caster}}.[[getMemosprite]]"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1888501948\">Hyacine_PointB3</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "_HealCount",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 99,
                  "whenValueChanges": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster's Memosprite}}"
                      },
                      "variableName": "_SummonerHealCount",
                      "value": {
                        "operator": "Variables[0] (_HealCount) || RETURN",
                        "displayLines": "_HealCount",
                        "constants": [],
                        "variables": [
                          "_HealCount"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Tempestuous Halt"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1888501948\">Hyacine_PointB3</a>"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Tempestuous Halt"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1888501948\">Hyacine_PointB3</a>"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Tempestuous Halt"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1888501948\">Hyacine_PointB3</a>"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">SpeedConverted</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Tempestuous Halt"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1888501948\">Hyacine_PointB3</a>"
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
    "Hyacine_Hyacine_Ability03_Part02": {
      "fileName": "Hyacine_Hyacine_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Memosprite}}"
            },
            "compareType": "<=",
            "value2": 0,
            "livingTargets": true
          },
          "passed": [
            {
              "name": "Summon Memosprite",
              "memoID": 11409,
              "valuePerStack": {
                "_SummonerHealValueTotal": {
                  "operator": "Variables[0] (_HealValueTotal) || RETURN",
                  "displayLines": "_HealValueTotal",
                  "constants": [],
                  "variables": [
                    "_HealValueTotal"
                  ]
                },
                "AbilityP01_P3_DamageIncrease": {
                  "operator": "Variables[0] (0.8) || RETURN",
                  "displayLines": "0.8",
                  "constants": [],
                  "variables": [
                    0.8
                  ]
                },
                "AbilityP01_P4_LifeTime": {
                  "operator": "Variables[0] (2) || RETURN",
                  "displayLines": "2",
                  "constants": [],
                  "variables": [
                    2
                  ]
                },
                "AbilityP01_P5_Layer": {
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
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Stormy Caress"
          },
          "passed": [
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{All Team Members}}"
              },
              "dispelCount": {
                "operator": "Variables[0] (1) || RETURN",
                "displayLines": "1",
                "constants": [],
                "variables": [
                  1
                ]
              },
              "dispelOrder": "LastAdded"
            }
          ]
        },
        {
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members}} - {{Caster}}.[[getMemosprite]]"
          },
          "healPercent": {
            "operator": "Variables[0] (0.1) || RETURN",
            "displayLines": "0.1",
            "constants": [],
            "variables": [
              0.1
            ]
          },
          "healFlat": {
            "operator": "Variables[0] (200) || RETURN",
            "displayLines": "200",
            "constants": [],
            "variables": [
              200
            ]
          },
          "formula": "Heal from Healer's MaxHP"
        },
        {
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Memosprite}}"
          },
          "healPercent": {
            "operator": "Variables[0] (0.12) || RETURN",
            "displayLines": "0.12",
            "constants": [],
            "variables": [
              0.12
            ]
          },
          "healFlat": {
            "operator": "Variables[0] (240) || RETURN",
            "displayLines": "240",
            "constants": [],
            "variables": [
              240
            ]
          },
          "formula": "Heal from Healer's MaxHP"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "_CurrenMaxtHP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "_CurrentHPConvert",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPConverted</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_CurrenMaxtHP",
          "value": {
            "operator": "Variables[0] (_CurrenMaxtHP) || Variables[1] (_CurrentHPConvert) || SUB || RETURN",
            "displayLines": "(_CurrenMaxtHP - _CurrentHPConvert)",
            "constants": [],
            "variables": [
              "_CurrenMaxtHP",
              "_CurrentHPConvert"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1902777328\">Memosprite_HyacineServant_MaxHpHalo</a>[<span class=\"descriptionNumberColor\">After Rain</span>]",
          "duration": {
            "operator": "Variables[0] (3) || RETURN",
            "displayLines": "3",
            "constants": [],
            "variables": [
              3
            ]
          },
          "valuePerStack": {
            "MDF_HaloCurrentHP": {
              "operator": "Variables[0] (_CurrenMaxtHP) || RETURN",
              "displayLines": "_CurrenMaxtHP",
              "constants": [],
              "variables": [
                "_CurrenMaxtHP"
              ]
            },
            "MDF_HaloMaxHPRatio": {
              "operator": "Variables[0] (0.3) || RETURN",
              "displayLines": "0.3",
              "constants": [],
              "variables": [
                0.3
              ]
            },
            "MDF_HaloMaxHPValue": {
              "operator": "Variables[0] (600) || RETURN",
              "displayLines": "600",
              "constants": [],
              "variables": [
                600
              ]
            },
            "MDF_ExtraMaxHPRatio": {
              "operator": "Variables[0] (0.5) || RETURN",
              "displayLines": "0.5",
              "constants": [],
              "variables": [
                0.5
              ]
            }
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Ability Target List}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Compare: Target",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "target2": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "invertCondition": true
          }
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (3) || RETURN",
            "displayLines": "3",
            "constants": [],
            "variables": [
              3
            ]
          },
          "maximum": {
            "operator": "Variables[0] (3) || RETURN",
            "displayLines": "3",
            "constants": [],
            "variables": [
              3
            ]
          },
          "assignState": "True",
          "bar#": "Dot"
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
      "references": []
    },
    "Hyacine_Hyacine_Ability03_Part01": {
      "fileName": "Hyacine_Hyacine_Ability03_Part01",
      "childAbilityList": [
        "Hyacine_Hyacine_Ability03_Camera",
        "Hyacine_Hyacine_Ability03_EnterReady",
        "Hyacine_Hyacine_Ability03_Part01",
        "Hyacine_Hyacine_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": 5,
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
          "ability": "Hyacine_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "Hyacine_Hyacine_Ability03_EnterReady": {
      "fileName": "Hyacine_Hyacine_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Hyacine_Hyacine_Ability02_Part02": {
      "fileName": "Hyacine_Hyacine_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Memosprite}}"
            },
            "compareType": "<=",
            "value2": 0,
            "livingTargets": true
          },
          "passed": [
            {
              "name": "Summon Memosprite",
              "memoID": 11409,
              "valuePerStack": {
                "_SummonerHealValueTotal": {
                  "operator": "Variables[0] (_HealValueTotal) || RETURN",
                  "displayLines": "_HealValueTotal",
                  "constants": [],
                  "variables": [
                    "_HealValueTotal"
                  ]
                },
                "AbilityP01_P3_DamageIncrease": {
                  "operator": "Variables[0] (0.8) || RETURN",
                  "displayLines": "0.8",
                  "constants": [],
                  "variables": [
                    0.8
                  ]
                },
                "AbilityP01_P4_LifeTime": {
                  "operator": "Variables[0] (2) || RETURN",
                  "displayLines": "2",
                  "constants": [],
                  "variables": [
                    2
                  ]
                },
                "AbilityP01_P5_Layer": {
                  "operator": "Variables[0] (3) || RETURN",
                  "displayLines": "3",
                  "constants": [],
                  "variables": [
                    3
                  ]
                }
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_IsSummon",
              "value": 1
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_IsSummon",
              "value": 0
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Stormy Caress"
          },
          "passed": [
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{All Team Members}}"
              },
              "dispelCount": {
                "operator": "Variables[0] (1) || RETURN",
                "displayLines": "1",
                "constants": [],
                "variables": [
                  1
                ]
              },
              "dispelOrder": "LastAdded"
            }
          ]
        },
        {
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members}} - {{Caster}}.[[getMemosprite]]"
          },
          "healPercent": {
            "operator": "Variables[0] (0.08) || RETURN",
            "displayLines": "0.08",
            "constants": [],
            "variables": [
              0.08
            ]
          },
          "healFlat": {
            "operator": "Variables[0] (160) || RETURN",
            "displayLines": "160",
            "constants": [],
            "variables": [
              160
            ]
          },
          "formula": "Heal from Healer's MaxHP"
        },
        {
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Memosprite}}"
          },
          "healPercent": {
            "operator": "Variables[0] (0.1) || RETURN",
            "displayLines": "0.1",
            "constants": [],
            "variables": [
              0.1
            ]
          },
          "healFlat": {
            "operator": "Variables[0] (200) || RETURN",
            "displayLines": "200",
            "constants": [],
            "variables": [
              200
            ]
          },
          "formula": "Heal from Healer's MaxHP"
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
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Ability Target List}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Compare: Target",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "target2": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "invertCondition": true
          }
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Hyacine_Hyacine_Ability02_Part01": {
      "fileName": "Hyacine_Hyacine_Ability02_Part01",
      "childAbilityList": [
        "Hyacine_Hyacine_Ability02_Camera",
        "Hyacine_Hyacine_Ability02_Part01",
        "Hyacine_Hyacine_Ability02_Part02"
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
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Hyacine_Ability02_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Hyacine_Hyacine_Ability01_Part02": {
      "fileName": "Hyacine_Hyacine_Ability01_Part02",
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
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (0.5) || RETURN",
              "displayLines": "0.5",
              "constants": [],
              "variables": [
                0.5
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Hyacine_Hyacine_Ability01_Part01": {
      "fileName": "Hyacine_Hyacine_Ability01_Part01",
      "childAbilityList": [
        "Hyacine_Hyacine_Ability01_Camera",
        "Hyacine_Hyacine_Ability01_Part01",
        "Hyacine_Hyacine_Ability01_Part02"
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
          "ability": "Hyacine_Ability01_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Hyacine_Modifiers": {
      "fileName": "Hyacine_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__593318455\">Hyacine_Ability03_MaxHP_Grow</a>[<span class=\"descriptionNumberColor\">After Rain</span>]",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 1
                  },
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_ExtraMaxHPRatio",
                      "value": 0
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PropertyValue",
                  "value": {
                    "operator": "Variables[0] (MDF_MaxHPRatio) || Variables[1] (MDF_ExtraMaxHPRatio) || ADD || RETURN",
                    "displayLines": "(MDF_MaxHPRatio + MDF_ExtraMaxHPRatio)",
                    "constants": [],
                    "variables": [
                      "MDF_MaxHPRatio",
                      "MDF_ExtraMaxHPRatio"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HP%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                    "displayLines": "MDF_PropertyValue",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPFlat</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_MaxHPValue) || RETURN",
                    "displayLines": "MDF_MaxHPValue",
                    "constants": [],
                    "variables": [
                      "MDF_MaxHPValue"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Max HP increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> plus <span class=\"descriptionNumberColor\">MDF_MaxHPValue</span>.",
          "type": "Buff",
          "statusName": "After Rain"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1347756164\">Memosprite_HyacineServant_MuteSpeed</a>",
          "modifierFlags": [
            "MuteSpeed"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__290730475\">Hyacine_Eidolon2_Listen</a>",
          "execute": [
            {
              "eventTrigger": "HP Change [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
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
                      {
                        "name": "Compare: Variable",
                        "value1": "Change_In_Current_Value",
                        "compareType": "<",
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
                      "modifier": "<a class=\"gModGreen\" id=\"1897109390\">Memosprite_HyacineServant_Eidolon2SpeedUp</a>[<span class=\"descriptionNumberColor\">Come Sit in My Courtyard</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "valuePerStack": {
                        "MDF_SpeedUpRatio": {
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
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1902777328\">Memosprite_HyacineServant_MaxHpHalo</a>[<span class=\"descriptionNumberColor\">After Rain</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Energy",
                  "value": 0
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (_Energy) || RETURN",
                    "displayLines": "_Energy",
                    "constants": [],
                    "variables": [
                      "_Energy"
                    ]
                  },
                  "maximum": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
                    ]
                  },
                  "assignState": "True",
                  "bar#": "Dot"
                }
              ]
            },
            {
              "eventTrigger": "Action Phase Start [Owner][?]",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "LifeTime",
                  "variableName": "_Energy",
                  "modifierName": "<a class=\"gModGreen\" id=\"-1902777328\">Memosprite_HyacineServant_MaxHpHalo</a>[<span class=\"descriptionNumberColor\">After Rain</span>]",
                  "multiplier": 1
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (_Energy) || RETURN",
                    "displayLines": "_Energy",
                    "constants": [],
                    "variables": [
                      "_Energy"
                    ]
                  },
                  "maximum": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
                    ]
                  },
                  "assignState": "True",
                  "bar#": "Dot"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 1
                  },
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_ExtraMaxHPRatio",
                      "value": 0
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PropertyValue",
                  "value": {
                    "operator": "Variables[0] (MDF_HaloMaxHPRatio) || Variables[1] (MDF_ExtraMaxHPRatio) || ADD || RETURN",
                    "displayLines": "(MDF_HaloMaxHPRatio + MDF_ExtraMaxHPRatio)",
                    "constants": [],
                    "variables": [
                      "MDF_HaloMaxHPRatio",
                      "MDF_ExtraMaxHPRatio"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HP%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                    "displayLines": "MDF_PropertyValue",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPFlat</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_HaloMaxHPValue) || RETURN",
                    "displayLines": "MDF_HaloMaxHPValue",
                    "constants": [],
                    "variables": [
                      "MDF_HaloMaxHPValue"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "LifeTime",
                  "variableName": "_Energy",
                  "modifierName": "<a class=\"gModGreen\" id=\"-1902777328\">Memosprite_HyacineServant_MaxHpHalo</a>[<span class=\"descriptionNumberColor\">After Rain</span>]",
                  "multiplier": 1
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (_Energy) || RETURN",
                    "displayLines": "_Energy",
                    "constants": [],
                    "variables": [
                      "_Energy"
                    ]
                  },
                  "maximum": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
                    ]
                  },
                  "assignState": "True",
                  "bar#": "Dot"
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Anyone]",
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
                        "name": "Eidolon Activated",
                        "eidolon": 1
                      },
                      {
                        "name": "Is Entity a Battle Event/Summon",
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
                      "name": "Heal",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "healPercent": {
                        "operator": "Variables[0] (0.08) || RETURN",
                        "displayLines": "0.08",
                        "constants": [],
                        "variables": [
                          0.08
                        ]
                      },
                      "formula": "Heal from Healer's MaxHP"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "Inject Extra-Turn",
                  "actionTag": null,
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Memosprite}}"
                  },
                  "afterInjection": [],
                  "priorityTag": "Character_HighPriorityAction"
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: End",
              "execute": [
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
                      "target": "{{Caster's Memosprite}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "valueType": "LifeTime",
                      "variableName": "_Energy",
                      "modifierName": "<a class=\"gModGreen\" id=\"-1902777328\">Memosprite_HyacineServant_MaxHpHalo</a>[<span class=\"descriptionNumberColor\">After Rain</span>]",
                      "multiplier": 1
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (_Energy) || RETURN",
                        "displayLines": "_Energy",
                        "constants": [],
                        "variables": [
                          "_Energy"
                        ]
                      },
                      "maximum": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
                        ]
                      },
                      "assignState": "True",
                      "bar#": "Dot"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_HaloCurrentHP",
            "MDF_HaloMaxHPRatio",
            "MDF_HaloMaxHPValue",
            "MDF_ExtraMaxHPRatio"
          ],
          "latentQueue": [],
          "description": "Max HP increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> plus <span class=\"descriptionNumberColor\">MDF_HaloMaxHPValue</span>.",
          "type": "Buff",
          "effectName": "After Rain",
          "statusName": "After Rain",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectables}} - {{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"593318455\">Hyacine_Ability03_MaxHP_Grow</a>[<span class=\"descriptionNumberColor\">After Rain</span>]",
              "aliveOnly": "False",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_CurrentHP": {
                  "operator": "Variables[0] (_CurrenMaxtHP) || RETURN",
                  "displayLines": "_CurrenMaxtHP",
                  "constants": [],
                  "variables": [
                    "_CurrenMaxtHP"
                  ]
                },
                "MDF_MaxHPRatio": {
                  "operator": "Variables[0] (0.3) || RETURN",
                  "displayLines": "0.3",
                  "constants": [],
                  "variables": [
                    0.3
                  ]
                },
                "MDF_MaxHPValue": {
                  "operator": "Variables[0] (600) || RETURN",
                  "displayLines": "600",
                  "constants": [],
                  "variables": [
                    600
                  ]
                },
                "MDF_ExtraMaxHPRatio": {
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
          "for": "<a class=\"gModGreen\" id=\"mod__1132518124\">Hyacine_Passive_Effect</a>[<span class=\"descriptionNumberColor\">First Light Heals the World</span>]",
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
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_DamageAddRatioTotal",
                  "value": {
                    "operator": "Variables[0] (MDF_DamageAddRatio) || Variables[1] (MDF_Layer) || MUL || RETURN",
                    "displayLines": "(MDF_DamageAddRatio * MDF_Layer)",
                    "constants": [],
                    "variables": [
                      "MDF_DamageAddRatio",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_DamageAddRatioTotal) || RETURN",
                    "displayLines": "MDF_DamageAddRatioTotal",
                    "constants": [],
                    "variables": [
                      "MDF_DamageAddRatioTotal"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_DamageAddRatio"
          ],
          "latentQueue": [],
          "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_DamageAddRatioTotal</span>.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "First Light Heals the World"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__931141896\">Hyacine_PointB2</a>",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">EffectRES</span>&nbsp;",
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
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__672502407\">Hyacine_PointB1_Effect</a>",
          "execute": [
            {
              "eventTrigger": "Heal Target Start [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (MDF_HPRatio) || RETURN",
                      "displayLines": "MDF_HPRatio",
                      "constants": [],
                      "variables": [
                        "MDF_HPRatio"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Healing Stats",
                      "on": "Healer",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">HealingOutgoingSUM</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (MDF_HealRatio) || RETURN",
                        "displayLines": "MDF_HealRatio",
                        "constants": [],
                        "variables": [
                          "MDF_HealRatio"
                        ]
                      }
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_CritChance) || RETURN",
                    "displayLines": "MDF_CritChance",
                    "constants": [],
                    "variables": [
                      "MDF_CritChance"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__981474753\">Hyacine_PointB1</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"672502407\">Hyacine_PointB1_Effect</a>",
                  "valuePerStack": {
                    "MDF_CritChance": {
                      "operator": "Variables[0] (1) || RETURN",
                      "displayLines": "1",
                      "constants": [],
                      "variables": [
                        1
                      ]
                    },
                    "MDF_HPRatio": {
                      "operator": "Variables[0] (0.5) || RETURN",
                      "displayLines": "0.5",
                      "constants": [],
                      "variables": [
                        0.5
                      ]
                    },
                    "MDF_HealRatio": {
                      "operator": "Variables[0] (0.25) || RETURN",
                      "displayLines": "0.25",
                      "constants": [],
                      "variables": [
                        0.25
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
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Caster}}.[[getMemosprite]]"
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"672502407\">Hyacine_PointB1_Effect</a>",
                      "valuePerStack": {
                        "MDF_CritChance": {
                          "operator": "Variables[0] (1) || RETURN",
                          "displayLines": "1",
                          "constants": [],
                          "variables": [
                            1
                          ]
                        },
                        "MDF_HPRatio": {
                          "operator": "Variables[0] (0.5) || RETURN",
                          "displayLines": "0.5",
                          "constants": [],
                          "variables": [
                            0.5
                          ]
                        },
                        "MDF_HealRatio": {
                          "operator": "Variables[0] (0.25) || RETURN",
                          "displayLines": "0.25",
                          "constants": [],
                          "variables": [
                            0.25
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
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1110430040\">Hyacine_PointB3_Effect</a>[<span class=\"descriptionNumberColor\">Tempestuous Halt</span>]",
          "stackType": "Replace",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HP%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (_MaxHPAdd) || RETURN",
                    "displayLines": "_MaxHPAdd",
                    "constants": [],
                    "variables": [
                      "_MaxHPAdd"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HealingOutgoingConverted</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (_HealHPRatioAdd) || RETURN",
                    "displayLines": "_HealHPRatioAdd",
                    "constants": [],
                    "variables": [
                      "_HealHPRatioAdd"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Eidolon Activated",
                        "eidolon": 4
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_MaxCritDmgAdd",
                        "compareType": ">",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Update Modifier Description",
                      "popUpText": "Max HP increases by <span class=\"descriptionNumberColor\">_MaxHPAdd</span>, Outgoing Healing increases by <span class=\"descriptionNumberColor\">_HealHPRatioAdd</span>, and CRIT DMG increases by <span class=\"descriptionNumberColor\">_MaxCritDmgAdd</span>."
                    },
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageConverted</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (_MaxCritDmgAdd) || RETURN",
                        "displayLines": "_MaxCritDmgAdd",
                        "constants": [],
                        "variables": [
                          "_MaxCritDmgAdd"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "description": "Max HP increases by <span class=\"descriptionNumberColor\">_MaxHPAdd</span> and Outgoing Healing increases by <span class=\"descriptionNumberColor\">_HealHPRatioAdd</span>.",
          "type": "Buff",
          "statusName": "Tempestuous Halt"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1888501948\">Hyacine_PointB3</a>",
          "stackType": "ReplaceByCaster",
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
                  "variableName": "_CurrentSpeed",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "_CurrentSpeed",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (200) || RETURN",
                      "displayLines": "200",
                      "constants": [],
                      "variables": [
                        200
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "_CurrentSpeedConvert",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">SpeedConverted</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_CurrentSpeed",
                      "value": {
                        "operator": "Variables[0] (_CurrentSpeed) || Variables[1] (_CurrentSpeedConvert) || SUB || RETURN",
                        "displayLines": "(_CurrentSpeed - _CurrentSpeedConvert)",
                        "constants": [],
                        "variables": [
                          "_CurrentSpeed",
                          "_CurrentSpeedConvert"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_OverCountSpeedValue",
                      "value": {
                        "operator": "Variables[0] (_CurrentSpeed) || Variables[1] (200) || SUB || RETURN",
                        "displayLines": "(_CurrentSpeed - 200)",
                        "constants": [],
                        "variables": [
                          "_CurrentSpeed",
                          200
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_OverCountSpeedValue",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (200) || RETURN",
                          "displayLines": "200",
                          "constants": [],
                          "variables": [
                            200
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_OverCountSpeedValue",
                          "value": {
                            "operator": "Variables[0] (200) || RETURN",
                            "displayLines": "200",
                            "constants": [],
                            "variables": [
                              200
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_OverCountSpeedValue",
                        "compareType": ">",
                        "value2": {
                          "operator": "Variables[0] (1) || RETURN",
                          "displayLines": "1",
                          "constants": [],
                          "variables": [
                            1
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_HealHPRatioAdd",
                          "value": {
                            "operator": "Variables[0] (FLOOR) || Variables[1] (_OverCountSpeedValue) || Variables[2] (1) || DIV || PARAM_1 || FUNCTION || Variables[3] (0.01) || MUL || RETURN",
                            "displayLines": "(&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((_OverCountSpeedValue / 1)) * 0.01)",
                            "constants": [],
                            "variables": [
                              "FLOOR",
                              "_OverCountSpeedValue",
                              1,
                              0.01
                            ]
                          }
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Eidolon Activated",
                            "eidolon": 4
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "_MaxCritDmgAdd",
                              "value": {
                                "operator": "Variables[0] (FLOOR) || Variables[1] (_OverCountSpeedValue) || Variables[2] (1) || DIV || PARAM_1 || FUNCTION || Variables[3] (0.02) || MUL || RETURN",
                                "displayLines": "(&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((_OverCountSpeedValue / 1)) * 0.02)",
                                "constants": [],
                                "variables": [
                                  "FLOOR",
                                  "_OverCountSpeedValue",
                                  1,
                                  0.02
                                ]
                              }
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_HealHPRatioAdd",
                          "value": 0
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_MaxCritDmgAdd",
                          "value": 0
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}+{{Caster's Memosprite}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1110430040\">Hyacine_PointB3_Effect</a>[<span class=\"descriptionNumberColor\">Tempestuous Halt</span>]",
                      "valuePerStack": {
                        "_MaxHPAdd": {
                          "operator": "Variables[0] (0.2) || RETURN",
                          "displayLines": "0.2",
                          "constants": [],
                          "variables": [
                            0.2
                          ]
                        },
                        "_HealHPRatioAdd": {
                          "operator": "Variables[0] (_HealHPRatioAdd) || RETURN",
                          "displayLines": "_HealHPRatioAdd",
                          "constants": [],
                          "variables": [
                            "_HealHPRatioAdd"
                          ]
                        },
                        "_MaxCritDmgAdd": {
                          "operator": "Variables[0] (_MaxCritDmgAdd) || RETURN",
                          "displayLines": "_MaxCritDmgAdd",
                          "constants": [],
                          "variables": [
                            "_MaxCritDmgAdd"
                          ]
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}+{{Caster's Memosprite}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1110430040\">Hyacine_PointB3_Effect</a>[<span class=\"descriptionNumberColor\">Tempestuous Halt</span>]"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "_SummonerHealCount"
          ]
        }
      ],
      "references": []
    },
    "LittleIca_Servant_HyacineServant_Ability01_Part02": {
      "fileName": "LittleIca_Servant_HyacineServant_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "scope": "SummonerEntity",
          "variableName": "_HealCount",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_ServantHealValueTotal",
          "value": {
            "operator": "Variables[0] (_ServantHealValueTotal) || Variables[1] (_SummonerHealValueTotal) || ADD || RETURN",
            "displayLines": "(_ServantHealValueTotal + _SummonerHealValueTotal)",
            "constants": [],
            "variables": [
              "_ServantHealValueTotal",
              "_SummonerHealValueTotal"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_ServantHealValueTotalNew",
          "value": {
            "operator": "Variables[0] (_ServantHealValueTotal) || RETURN",
            "displayLines": "_ServantHealValueTotal",
            "constants": [],
            "variables": [
              "_ServantHealValueTotal"
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6,
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            },
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_ServantHealValueTotal",
              "value": {
                "operator": "Variables[0] (_ServantHealValueTotal) || Variables[0] (_ServantHealValueTotal) || Variables[1] (0.5) || MUL || SUB || RETURN",
                "displayLines": "(_ServantHealValueTotal - (_ServantHealValueTotal * 0.5))",
                "constants": [],
                "variables": [
                  "_ServantHealValueTotal",
                  0.5
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_ServantHealValueTotal",
              "value": {
                "operator": "Variables[0] (_ServantHealValueTotal) || Variables[0] (_ServantHealValueTotal) || Variables[1] (0.12) || MUL || SUB || RETURN",
                "displayLines": "(_ServantHealValueTotal - (_ServantHealValueTotal * 0.12))",
                "constants": [],
                "variables": [
                  "_ServantHealValueTotal",
                  0.12
                ]
              }
            }
          ]
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "_ServantMaxHP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_SummonerHealValueTotal",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "variableName": "_HealValueTotal",
          "value": 0
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"492819159\">Memosprite_HyacineServant_Passive_Mark</a>[<span class=\"descriptionNumberColor\">Rainclouds, Time to Go!</span>]"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Wind",
            "DamageFlat": {
              "operator": "Variables[0] (_ServantHealValueTotalNew) || Variables[1] (0.2) || MUL || RETURN",
              "displayLines": "(_ServantHealValueTotalNew * 0.2)",
              "constants": [],
              "variables": [
                "_ServantHealValueTotalNew",
                0.2
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "ToughnessDMGType": {
              "DamageType": "Wind"
            },
            "Tags": null,
            "attackType": "Memosprite",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "LittleIca_Servant_HyacineServant_Ability01_Part01": {
      "fileName": "LittleIca_Servant_HyacineServant_Ability01_Part01",
      "childAbilityList": [
        "LittleIca_Servant_HyacineServant_Ability01_Part01",
        "LittleIca_Servant_HyacineServant_Ability01_Part02",
        "LittleIca_Servant_HyacineServant_Insert_Camera",
        "LittleIca_Servant_HyacineServant_Insert_Camera_Charm"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Memosprite",
      "energy": 20,
      "toughnessList": [
        10,
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
          "ability": "Servant_HyacineServant_Ability01_Part02",
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
            "flagName": "Charm"
          },
          "passed": [
            "Deleted bullshit"
          ],
          "failed": [
            "Deleted bullshit"
          ]
        }
      ],
      "references": []
    },
    "LittleIca_Servant_HyacineServant_DeathRattle": {
      "fileName": "LittleIca_Servant_HyacineServant_DeathRattle",
      "childAbilityList": [
        "LittleIca_Servant_HyacineServant_DeathRattle"
      ],
      "skillTrigger": "SkillP04",
      "abilityType": "Talent",
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
          "modifier": "<a class=\"gModGreen\" id=\"1268391312\">Memosprite_HyacineServant_DeathRattle</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1268391312\">Memosprite_HyacineServant_DeathRattle</a>",
          "modifierFlags": [
            "Deathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Was Killed (Queued) [Owner]",
              "execute": [
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "advanceType": "Set",
                  "multiAdd": "(0 - 0.3)"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "LittleIca_Servant_HyacineServant_BattleCry": {
      "fileName": "LittleIca_Servant_HyacineServant_BattleCry",
      "childAbilityList": [
        "LittleIca_Servant_HyacineServant_BattleCry"
      ],
      "skillTrigger": "SkillP03",
      "abilityType": "Talent",
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
          "modifier": "<a class=\"gModGreen\" id=\"1846136142\">Memosprite_HyacineServant_BattleCry</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1846136142\">Memosprite_HyacineServant_BattleCry</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Summoner}}"
                    },
                    "value1": "_FirstTimeSummon",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster's Summoner}}"
                      },
                      "value": {
                        "operator": "Variables[0] (15) || Variables[1] (30) || ADD || RETURN",
                        "displayLines": "(15 + 30)",
                        "constants": [],
                        "variables": [
                          15,
                          30
                        ]
                      },
                      "isFixed": "* ERR"
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster's Summoner}}"
                      },
                      "variableName": "_FirstTimeSummon",
                      "value": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster's Summoner}}"
                      },
                      "value": {
                        "operator": "Variables[0] (15) || RETURN",
                        "displayLines": "15",
                        "constants": [],
                        "variables": [
                          15
                        ]
                      },
                      "isFixed": "* ERR"
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
    "LittleIca_Servant_HyacineServant_PassiveAbility": {
      "fileName": "LittleIca_Servant_HyacineServant_PassiveAbility",
      "childAbilityList": [
        "LittleIca_Servant_HyacineServant_PassiveAbility"
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1066684227\">Memosprite_HyacineServant_Passive</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1467878909\">Memosprite_HyacineServant_ChallangeScore</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"124089426\">Memosprite_HyacineServant_LoseHpPassive</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6,
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            }
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"3098173\">Memosprite_HyacineServant_Eidolon6_PenetrateRatio_Halo</a>",
              "valuePerStack": {
                "MDF_PenetrateRatio": {
                  "operator": "Variables[0] (0.2) || RETURN",
                  "displayLines": "0.2",
                  "constants": [],
                  "variables": [
                    0.2
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
          "for": "<a class=\"gModGreen\" id=\"mod__124089426\">Memosprite_HyacineServant_LoseHpPassive</a>",
          "stackData": [],
          "latentQueue": [],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"889204199\">Memosprite_HyacineServant_LoseHpSet</a>",
              "haloStatus": true
            }
          ]
        }
      ]
    },
    "LittleIca_Modifiers": {
      "fileName": "LittleIca_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1467878909\">Memosprite_HyacineServant_ChallangeScore</a>",
          "stackType": "Replace",
          "modifierFlags": [
            "ServantInherit_ModifierContinuation"
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2026163190\">Memosprite_HyacineServant_Eidolon6_PenetrateRatio</a>[<span class=\"descriptionNumberColor\">O Sky, Heed My Plea</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAllPEN</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PenetrateRatio) || RETURN",
                    "displayLines": "MDF_PenetrateRatio",
                    "constants": [],
                    "variables": [
                      "MDF_PenetrateRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "All-Type RES PEN increases by <span class=\"descriptionNumberColor\">MDF_PenetrateRatio</span>.",
          "type": "Buff",
          "statusName": "O Sky, Heed My Plea"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__3098173\">Memosprite_HyacineServant_Eidolon6_PenetrateRatio_Halo</a>",
          "stackData": [
            "MDF_PenetrateRatio"
          ],
          "latentQueue": [],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2026163190\">Memosprite_HyacineServant_Eidolon6_PenetrateRatio</a>[<span class=\"descriptionNumberColor\">O Sky, Heed My Plea</span>]",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_PenetrateRatio": {
                  "operator": "Variables[0] (MDF_PenetrateRatio) || RETURN",
                  "displayLines": "MDF_PenetrateRatio",
                  "constants": [],
                  "variables": [
                    "MDF_PenetrateRatio"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1897109390\">Memosprite_HyacineServant_Eidolon2SpeedUp</a>[<span class=\"descriptionNumberColor\">Come Sit in My Courtyard</span>]",
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
          "description": "SPD increases by <span class=\"descriptionNumberColor\">MDF_SpeedUpRatio</span>.",
          "type": "Buff",
          "effectName": "SPD Boost",
          "statusName": "Come Sit in My Courtyard"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1507711781\">Memosprite_HyacineServant_LoseHpFlag</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__889204199\">Memosprite_HyacineServant_LoseHpSet</a>",
          "execute": [
            {
              "eventTrigger": "HP Change [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "MDF_ModifierOwnerCurrentHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1255340149\">Memosprite_HyacineServant_Passive_MaxHp_Increase</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPFlat</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_CurrentHP) || Variables[1] (MDF_MaxHPRatio) || MUL || Variables[2] (MDF_MaxHPValue) || ADD || RETURN",
                    "displayLines": "((MDF_CurrentHP * MDF_MaxHPRatio) + MDF_MaxHPValue)",
                    "constants": [],
                    "variables": [
                      "MDF_CurrentHP",
                      "MDF_MaxHPRatio",
                      "MDF_MaxHPValue"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__492819159\">Memosprite_HyacineServant_Passive_Mark</a>[<span class=\"descriptionNumberColor\">Rainclouds, Time to Go!</span>]",
          "stackType": "Replace",
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
                  "variableName": "MDF_HealValueTotal",
                  "value": {
                    "operator": "Variables[0] (_ServantHealValueTotal) || Variables[1] (_SummonerHealValueTotal) || ADD || RETURN",
                    "displayLines": "(_ServantHealValueTotal + _SummonerHealValueTotal)",
                    "constants": [],
                    "variables": [
                      "_ServantHealValueTotal",
                      "_SummonerHealValueTotal"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "The tally of healing: <span class=\"descriptionNumberColor\">MDF_HealValueTotal</span>",
          "type": "Other",
          "statusName": "Rainclouds, Time to Go!"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1585516308\">Memosprite_Hyacine_Resist</a>",
          "modifierFlags": [
            "ImmuneDebuff"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1066684227\">Memosprite_HyacineServant_Passive</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action END Phase] [Anyone]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1507711781\">Memosprite_HyacineServant_LoseHpFlag</a>"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Consume",
                      "consumeFrom": "MaxHP",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "consumePercent": {
                        "operator": "Variables[0] (0.04) || RETURN",
                        "displayLines": "0.04",
                        "constants": [],
                        "variables": [
                          0.04
                        ]
                      },
                      "dynamicAssignment": "_RealRatio",
                      "attackType": "Pursued"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "_ServantMaxHP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_ServantLoseHPValue",
                      "value": {
                        "operator": "Variables[0] (_RealRatio) || Variables[1] (_ServantMaxHP) || MUL || RETURN",
                        "displayLines": "(_RealRatio * _ServantMaxHP)",
                        "constants": [],
                        "variables": [
                          "_RealRatio",
                          "_ServantMaxHP"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable with Copy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1467878909\">Memosprite_HyacineServant_ChallangeScore</a>",
                      "variable": "_ServantLoseHPValueTotal",
                      "target2": null,
                      "variable2": "_ServantLoseHPValueTotal2"
                    },
                    {
                      "name": "Define Modifier-Specific Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifierName": "<a class=\"gModGreen\" id=\"1467878909\">Memosprite_HyacineServant_ChallangeScore</a>",
                      "variableName": "_ServantLoseHPValueTotal",
                      "value": {
                        "operator": "Variables[0] (_ServantLoseHPValueTotal2) || Variables[1] (_ServantLoseHPValue) || ADD || RETURN",
                        "displayLines": "(_ServantLoseHPValueTotal2 + _ServantLoseHPValue)",
                        "constants": [],
                        "variables": [
                          "_ServantLoseHPValueTotal2",
                          "_ServantLoseHPValue"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster's Summoner}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1902777328\">Memosprite_HyacineServant_MaxHpHalo</a>[<span class=\"descriptionNumberColor\">After Rain</span>]"
                      },
                      "passed": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-1507711781\">Memosprite_HyacineServant_LoseHpFlag</a>"
                          },
                          "ifTargetFound": [
                            {
                              "name": "Define Custom Variable with Stat",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster's Summoner}}"
                              },
                              "variableName": "Summoner_MaxHP",
                              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                            },
                            {
                              "name": "Heal",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "healFlat": {
                                "operator": "Variables[0] (Summoner_MaxHP) || Variables[1] (0.02) || MUL || Variables[2] (20) || ADD || RETURN",
                                "displayLines": "((Summoner_MaxHP * 0.02) + 20)",
                                "constants": [],
                                "variables": [
                                  "Summoner_MaxHP",
                                  0.02,
                                  20
                                ]
                              },
                              "formula": "Heal from Healer's MaxHP"
                            },
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1507711781\">Memosprite_HyacineServant_LoseHpFlag</a>"
                            }
                          ]
                        },
                        {
                          "name": "Define Custom Variable with Stat",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster's Summoner}}"
                          },
                          "variableName": "Summoner_MaxHP",
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                        },
                        {
                          "name": "Heal",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          "healFlat": {
                            "operator": "Variables[0] (Summoner_MaxHP) || Variables[1] (0.02) || MUL || Variables[2] (20) || ADD || RETURN",
                            "displayLines": "((Summoner_MaxHP * 0.02) + 20)",
                            "constants": [],
                            "variables": [
                              "Summoner_MaxHP",
                              0.02,
                              20
                            ]
                          },
                          "formula": "Heal from Healer's MaxHP"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-1507711781\">Memosprite_HyacineServant_LoseHpFlag</a>"
                          },
                          "ifTargetFound": [
                            {
                              "name": "Define Custom Variable with Stat",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster's Summoner}}"
                              },
                              "variableName": "Summoner_MaxHP",
                              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                            },
                            {
                              "name": "Heal",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "healFlat": {
                                "operator": "Variables[0] (Summoner_MaxHP) || Variables[1] (0.02) || MUL || Variables[2] (20) || ADD || RETURN",
                                "displayLines": "((Summoner_MaxHP * 0.02) + 20)",
                                "constants": [],
                                "variables": [
                                  "Summoner_MaxHP",
                                  0.02,
                                  20
                                ]
                              },
                              "formula": "Heal from Healer's MaxHP"
                            },
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1507711781\">Memosprite_HyacineServant_LoseHpFlag</a>"
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
              "eventTrigger": "Action End [Owner]"
            },
            {
              "eventTrigger": "Action End [Anyone]"
            },
            {
              "eventTrigger": "Heal Target Start [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1132518124\">Hyacine_Passive_Effect</a>[<span class=\"descriptionNumberColor\">First Light Heals the World</span>]",
                  "duration": {
                    "operator": "Variables[0] (AbilityP01_P4_LifeTime) || RETURN",
                    "displayLines": "AbilityP01_P4_LifeTime",
                    "constants": [],
                    "variables": [
                      "AbilityP01_P4_LifeTime"
                    ]
                  },
                  "stackLimit": {
                    "operator": "Variables[0] (_ServantLoseHPValueTotal) || RETURN",
                    "displayLines": "_ServantLoseHPValueTotal",
                    "constants": [],
                    "variables": [
                      "_ServantLoseHPValueTotal"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_DamageAddRatio": {
                      "operator": "Variables[0] (AbilityP01_P3_DamageIncrease) || RETURN",
                      "displayLines": "AbilityP01_P3_DamageIncrease",
                      "constants": [],
                      "variables": [
                        "AbilityP01_P3_DamageIncrease"
                      ]
                    }
                  },
                  "addStacksPerTrigger": 1
                }
              ]
            },
            {
              "eventTrigger": "Heal Target End [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable with Healing",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "_ServantHealValue",
                  "context": "ContextCaster"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_ServantHealValueTotal",
                  "value": {
                    "operator": "Variables[0] (_ServantHealValueTotal) || Variables[1] (_ServantHealValue) || ADD || RETURN",
                    "displayLines": "(_ServantHealValueTotal + _ServantHealValue)",
                    "constants": [],
                    "variables": [
                      "_ServantHealValueTotal",
                      "_ServantHealValue"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"492819159\">Memosprite_HyacineServant_Passive_Mark</a>[<span class=\"descriptionNumberColor\">Rainclouds, Time to Go!</span>]"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1585516308\">Memosprite_Hyacine_Resist</a>"
                },
                {
                  "name": "Set Action-State",
                  "on": null,
                  "stateName": "Hyacine_Summon",
                  "state": false
                },
                {
                  "name": "Block Advance/Delay Effects",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SpeedOverride</span>&nbsp;",
                  "value": 0
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Summoner}}"
                    },
                    "value1": "_TempServantHealValueTotal",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Copy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster's Summoner}}"
                      },
                      "variable": "_TempServantHealValueTotal",
                      "target2": null,
                      "variable2": "_ServantHealValueTotal"
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"492819159\">Memosprite_HyacineServant_Passive_Mark</a>[<span class=\"descriptionNumberColor\">Rainclouds, Time to Go!</span>]",
                  "casterAssign": "TargetSelf"
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "variableName": "_TempServantHealValueTotal",
                  "value": {
                    "operator": "Variables[0] (_ServantHealValueTotal) || RETURN",
                    "displayLines": "_ServantHealValueTotal",
                    "constants": [],
                    "variables": [
                      "_ServantHealValueTotal"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "HP Change [Anyone]",
              "execute": [
                {
                  "name": "Define Custom Variable with Varying Data",
                  "target": null,
                  "variableName": "HPChangeValue",
                  "value": "ParamValue"
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
                          "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "mustBeAlive2": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "HPChangeValue",
                        "compareType": "<",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
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
                            "modifier": "<a class=\"gModGreen\" id=\"-1507711781\">Memosprite_HyacineServant_LoseHpFlag</a>",
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
                              "target": "{{Caster}}"
                            },
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
                          "modifier": "<a class=\"gModGreen\" id=\"-1507711781\">Memosprite_HyacineServant_LoseHpFlag</a>"
                        }
                      ]
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
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Summoner}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1902777328\">Memosprite_HyacineServant_MaxHpHalo</a>[<span class=\"descriptionNumberColor\">After Rain</span>]"
                  },
                  "passed": [
                    {
                      "name": "Decrement Buff Durations",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Check Callback Flag Parameter",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Param Flag",
                    "flagName": "CallBack_SettleSkillOrInsertAbility"
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1507711781\">Memosprite_HyacineServant_LoseHpFlag</a>"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Consume",
                          "consumeFrom": "MaxHP",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "consumePercent": {
                            "operator": "Variables[0] (0.04) || RETURN",
                            "displayLines": "0.04",
                            "constants": [],
                            "variables": [
                              0.04
                            ]
                          },
                          "dynamicAssignment": "_RealRatio",
                          "attackType": "Pursued"
                        },
                        {
                          "name": "Define Custom Variable with Stat",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "variableName": "_ServantMaxHP",
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_ServantLoseHPValue",
                          "value": {
                            "operator": "Variables[0] (_RealRatio) || Variables[1] (_ServantMaxHP) || MUL || RETURN",
                            "displayLines": "(_RealRatio * _ServantMaxHP)",
                            "constants": [],
                            "variables": [
                              "_RealRatio",
                              "_ServantMaxHP"
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable with Copy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1467878909\">Memosprite_HyacineServant_ChallangeScore</a>",
                          "variable": "_ServantLoseHPValueTotal",
                          "target2": null,
                          "variable2": "_ServantLoseHPValueTotal2"
                        },
                        {
                          "name": "Define Modifier-Specific Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifierName": "<a class=\"gModGreen\" id=\"1467878909\">Memosprite_HyacineServant_ChallangeScore</a>",
                          "variableName": "_ServantLoseHPValueTotal",
                          "value": {
                            "operator": "Variables[0] (_ServantLoseHPValueTotal2) || Variables[1] (_ServantLoseHPValue) || ADD || RETURN",
                            "displayLines": "(_ServantLoseHPValueTotal2 + _ServantLoseHPValue)",
                            "constants": [],
                            "variables": [
                              "_ServantLoseHPValueTotal2",
                              "_ServantLoseHPValue"
                            ]
                          }
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster's Summoner}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-1902777328\">Memosprite_HyacineServant_MaxHpHalo</a>[<span class=\"descriptionNumberColor\">After Rain</span>]"
                          },
                          "passed": [
                            {
                              "name": "Find New Target",
                              "from": {
                                "name": "Target Name",
                                "target": "{{Player Team All}}"
                              },
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-1507711781\">Memosprite_HyacineServant_LoseHpFlag</a>"
                              },
                              "ifTargetFound": [
                                {
                                  "name": "Define Custom Variable with Stat",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Caster's Summoner}}"
                                  },
                                  "variableName": "Summoner_MaxHP",
                                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                                },
                                {
                                  "name": "Heal",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "healFlat": {
                                    "operator": "Variables[0] (Summoner_MaxHP) || Variables[1] (0.02) || MUL || Variables[2] (20) || ADD || RETURN",
                                    "displayLines": "((Summoner_MaxHP * 0.02) + 20)",
                                    "constants": [],
                                    "variables": [
                                      "Summoner_MaxHP",
                                      0.02,
                                      20
                                    ]
                                  },
                                  "formula": "Heal from Healer's MaxHP"
                                },
                                {
                                  "name": "Remove Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-1507711781\">Memosprite_HyacineServant_LoseHpFlag</a>"
                                }
                              ]
                            },
                            {
                              "name": "Define Custom Variable with Stat",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster's Summoner}}"
                              },
                              "variableName": "Summoner_MaxHP",
                              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                            },
                            {
                              "name": "Heal",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Player Team All}}"
                              },
                              "healFlat": {
                                "operator": "Variables[0] (Summoner_MaxHP) || Variables[1] (0.02) || MUL || Variables[2] (20) || ADD || RETURN",
                                "displayLines": "((Summoner_MaxHP * 0.02) + 20)",
                                "constants": [],
                                "variables": [
                                  "Summoner_MaxHP",
                                  0.02,
                                  20
                                ]
                              },
                              "formula": "Heal from Healer's MaxHP"
                            }
                          ],
                          "failed": [
                            {
                              "name": "Find New Target",
                              "from": {
                                "name": "Target Name",
                                "target": "{{Player Team All}}"
                              },
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-1507711781\">Memosprite_HyacineServant_LoseHpFlag</a>"
                              },
                              "ifTargetFound": [
                                {
                                  "name": "Define Custom Variable with Stat",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Caster's Summoner}}"
                                  },
                                  "variableName": "Summoner_MaxHP",
                                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                                },
                                {
                                  "name": "Heal",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "healFlat": {
                                    "operator": "Variables[0] (Summoner_MaxHP) || Variables[1] (0.02) || MUL || Variables[2] (20) || ADD || RETURN",
                                    "displayLines": "((Summoner_MaxHP * 0.02) + 20)",
                                    "constants": [],
                                    "variables": [
                                      "Summoner_MaxHP",
                                      0.02,
                                      20
                                    ]
                                  },
                                  "formula": "Heal from Healer's MaxHP"
                                },
                                {
                                  "name": "Remove Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-1507711781\">Memosprite_HyacineServant_LoseHpFlag</a>"
                                }
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
        }
      ],
      "references": []
    }
  }
}