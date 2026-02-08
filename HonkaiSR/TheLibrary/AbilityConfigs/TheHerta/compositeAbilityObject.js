const compositeAbilityObject = {
  "fullCharacterName": "The Herta",
  "trimCharacterName": "TheHerta",
  "abilityList": [
    "TheHerta_TheHerta_TechniqueInRougeLevel",
    "TheHerta_TheHerta_TechniqueInLevel",
    "TheHerta_TheHerta_PassiveAbility01",
    "TheHerta_TheHerta_Ability03_Part02",
    "TheHerta_TheHerta_Ability03_Part01",
    "TheHerta_TheHerta_Ability03_EnterReady",
    "TheHerta_TheHerta_Ability21_Part02",
    "TheHerta_TheHerta_Ability21_Part01",
    "TheHerta_TheHerta_Ability02_Part02",
    "TheHerta_TheHerta_Ability02_Part01",
    "TheHerta_TheHerta_Ability01_Part02",
    "TheHerta_TheHerta_Ability01_Part01",
    "TheHerta_Modifiers",
    "TheHerta_Functions"
  ],
  "abilityObject": {
    "TheHerta_TheHerta_TechniqueInRougeLevel": {
      "fileName": "TheHerta_TheHerta_TechniqueInRougeLevel",
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
          "modifier": "<a class=\"gModGreen\" id=\"-2036504722\">TheHerta_TechniqueInRougeLevel</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2036504722\">TheHerta_TechniqueInRougeLevel</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "TargetHP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "compareType": ">=",
                        "value2": 3
                      },
                      "passed": [
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
                              "sourceType": {}
                            },
                            "DamageFlat": {
                              "operator": "Variables[0] (TargetHP) || Variables[1] (EliteDamagePercentage) || MUL || RETURN",
                              "displayLines": "(TargetHP * EliteDamagePercentage)",
                              "constants": [],
                              "variables": [
                                "TargetHP",
                                "EliteDamagePercentage"
                              ]
                            },
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "True DMG"
                          }
                        }
                      ],
                      "failed": [
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
                              "sourceType": {}
                            },
                            "DamageFlat": {
                              "operator": "Variables[0] (TargetHP) || Variables[1] (BasicDamagePercentage) || MUL || RETURN",
                              "displayLines": "(TargetHP * BasicDamagePercentage)",
                              "constants": [],
                              "variables": [
                                "TargetHP",
                                "BasicDamagePercentage"
                              ]
                            },
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "True DMG"
                          }
                        }
                      ]
                    }
                  ]
                }
              ],
              "priorityLevel": -60
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "TheHerta_TheHerta_TechniqueInLevel": {
      "fileName": "TheHerta_TheHerta_TechniqueInLevel",
      "childAbilityList": [
        "TheHerta_TheHerta_TechniqueInLevel"
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
          "modifier": "<a class=\"gModGreen\" id=\"1753550945\">Technique_TheHerta_Modifier</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__127317606\">TheHerta_TechniqueUsage_AttackRatioUp</a>[<span class=\"descriptionNumberColor\">Vibe Checker</span>]",
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
          "description": "Increases ATK by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "ATK Boost",
          "statusName": "Vibe Checker"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1753550945\">Technique_TheHerta_Modifier</a>",
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"127317606\">TheHerta_TechniqueUsage_AttackRatioUp</a>[<span class=\"descriptionNumberColor\">Vibe Checker</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.6) || RETURN",
                          "displayLines": "0.6",
                          "constants": [],
                          "variables": [
                            0.6
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
    "TheHerta_TheHerta_PassiveAbility01": {
      "fileName": "TheHerta_TheHerta_PassiveAbility01",
      "childAbilityList": [
        "TheHerta_TheHerta_PassiveAbility01"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": 30,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "Energy_Layer",
          "value": 0
        },
        {
          "name": "Read Variable Value",
          "adjustmentType": "Add to Value (Default)",
          "variableName": "Skill21_Layer",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Adjust Variable Value",
          "adjustmentType": "Overwrite Value",
          "variableName": "Skill21_Layer",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "S03_Mark_Max",
          "value": {
            "operator": "Variables[0] (42) || RETURN",
            "displayLines": "42",
            "constants": [],
            "variables": [
              42
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Skill21_Layer_Add",
          "value": 1
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Skill21_Layer_Max",
          "value": {
            "operator": "Variables[0] (4) || RETURN",
            "displayLines": "4",
            "constants": [],
            "variables": [
              4
            ]
          }
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
              "modifier": "<a class=\"gModGreen\" id=\"489116474\">TheHerta_Eidolon2_PreShow</a>",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.35) || RETURN",
                  "displayLines": "0.35",
                  "constants": [],
                  "variables": [
                    0.35
                  ]
                }
              }
            },
            {
              "name": "Adjust Variable Value",
              "adjustmentType": "Add to Value (Default)",
              "variableName": "Skill21_Layer",
              "on": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": 1
            },
            {
              "name": "Update Ability Binding",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "abilityName": "Skill21",
              "skillSlot": "Skill",
              "enableSecondaryType": "ControlSkill02"
            },
            {
              "name": "Update Ability Enhance Button",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "display": "Show",
              "abilityName": "Skill"
            }
          ]
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "_MaxSp",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-910560068\">TheHerta_Passive_MagicMark_Caster</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-928577282\">TheHerta_Passive</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-57316235\">TheHerta_Passive_PreShow</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"734755482\">TheHerta_Passive_PreShow_Ability21</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1935947210\">TheHerta_Passive_PreShow_Ability21_All</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2664689\">TheHerta_MageNum</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"611803002\">TheHerta_SKL21_Listen</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-614684164\">TheHerta_ExtraMark</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2011497788\">TheHerta_UltraBoost</a>"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_PointB3_Ratio",
          "value": 0
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Starved Landscape of Vacua"
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_SkillTree03_MaxCount",
              "value": {
                "operator": "Variables[0] (99) || RETURN",
                "displayLines": "99",
                "constants": [],
                "variables": [
                  99
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_PointB3_Ratio",
              "value": {
                "operator": "Variables[0] (0.01) || RETURN",
                "displayLines": "0.01",
                "constants": [],
                "variables": [
                  0.01
                ]
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Message From Beyond the Veil"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-450886652\">TheHerta_Trace02</a>",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.8) || RETURN",
                  "displayLines": "0.8",
                  "constants": [],
                  "variables": [
                    0.8
                  ]
                }
              }
            }
          ]
        },
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
              "modifier": "<a class=\"gModGreen\" id=\"1044334207\">TheHerta_Eidolon4_Listen</a>",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.12) || RETURN",
                  "displayLines": "0.12",
                  "constants": [],
                  "variables": [
                    0.12
                  ]
                }
              }
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
              "modifier": "<a class=\"gModGreen\" id=\"-73718393\">TheHerta_Eidolon6_Bonus</a>",
              "valuePerStack": {
                "MDF_PropertyValue": {
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
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Aloofly Honest"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-400553795\">TheHerta_Trace01</a>",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (3) || RETURN",
                  "displayLines": "3",
                  "constants": [],
                  "variables": [
                    3
                  ]
                },
                "MDF_MaxCount": {
                  "operator": "Variables[0] (S03_Mark_Max) || RETURN",
                  "displayLines": "S03_Mark_Max",
                  "constants": [],
                  "variables": [
                    "S03_Mark_Max"
                  ]
                },
                "MDF_MinCount": 0,
                "MDF_AddLayer": 0,
                "MDF_MaxLayer": {
                  "operator": "Variables[0] (42) || RETURN",
                  "displayLines": "42",
                  "constants": [],
                  "variables": [
                    42
                  ]
                },
                "MDF_MaxLayer_PointB3": {
                  "operator": "Variables[0] (_SkillTree03_MaxCount) || RETURN",
                  "displayLines": "_SkillTree03_MaxCount",
                  "constants": [],
                  "variables": [
                    "_SkillTree03_MaxCount"
                  ]
                },
                "MDF_Ratio_PointB3": {
                  "operator": "Variables[0] (_PointB3_Ratio) || RETURN",
                  "displayLines": "_PointB3_Ratio",
                  "constants": [],
                  "variables": [
                    "_PointB3_Ratio"
                  ]
                },
                "MDF_BounceLayer": 0
              }
            }
          ]
        },
        {
          "name": "Update Displayed Energy Bar",
          "maximum": 1,
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 4,
          "cooldown": 0
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 2
          },
          "passed": [
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (Skill21_Layer) || RETURN",
                "displayLines": "Skill21_Layer",
                "constants": [],
                "variables": [
                  "Skill21_Layer"
                ]
              },
              "priorState": "Active"
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1890012800\">TheHerta_Trace02_Bonus</a>[<span class=\"descriptionNumberColor\">Message From Beyond the Veil</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
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
          "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "statusName": "Message From Beyond the Veil"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1949332681\">TheHerta_Trace02_Mage</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  },
                  "passed": [
                    {
                      "name": "Skill Points Modification",
                      "adjustmentValue": 1,
                      "adjustmentType": "+"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1909734267\">TheHerta_Trace02_CheckMage</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1890012800\">TheHerta_Trace02_Bonus</a>[<span class=\"descriptionNumberColor\">Message From Beyond the Veil</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                      "displayLines": "MDF_PropertyValue",
                      "constants": [],
                      "variables": [
                        "MDF_PropertyValue"
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
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1890012800\">TheHerta_Trace02_Bonus</a>[<span class=\"descriptionNumberColor\">Message From Beyond the Veil</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                          "displayLines": "MDF_PropertyValue",
                          "constants": [],
                          "variables": [
                            "MDF_PropertyValue"
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
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-450886652\">TheHerta_Trace02</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Mage_Count",
                  "value": 0
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "conditions": {
                    "name": "Target is Pathstrider",
                    "path": [
                      "Erudition"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Mage_Count",
                      "value": {
                        "operator": "Variables[0] (_Mage_Count) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(_Mage_Count + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "_Mage_Count"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_Mage_Count",
                    "compareType": ">=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1909734267\">TheHerta_Trace02_CheckMage</a>",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                          "displayLines": "MDF_PropertyValue",
                          "constants": [],
                          "variables": [
                            "MDF_PropertyValue"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1280907269\">TheHerta_PointB2_Listen</a>"
                    }
                  ]
                }
              ],
              "priorityLevel": -80
            }
          ],
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": [
            "Skill21_Layer_Max"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2011497788\">TheHerta_UltraBoost</a>",
          "stackData": [],
          "latentQueue": [
            "Skill21_Layer_Max"
          ],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "skillType": [
              "Ultimate"
            ],
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": "0(Set AV)"
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-910560068\">TheHerta_Passive_MagicMark_Caster</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                    "invertCondition": true
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (42) || RETURN",
                        "displayLines": "42",
                        "constants": [],
                        "variables": [
                          42
                        ]
                      },
                      "valuePerStack": {
                        "MagicMark_MaxCount_Max": {
                          "operator": "Variables[0] (42) || RETURN",
                          "displayLines": "42",
                          "constants": [],
                          "variables": [
                            42
                          ]
                        },
                        "MagicMark_MaxCount": {
                          "operator": "Variables[0] (42) || RETURN",
                          "displayLines": "42",
                          "constants": [],
                          "variables": [
                            42
                          ]
                        },
                        "MagicMark_Ratio": {
                          "operator": "Variables[0] (1) || RETURN",
                          "displayLines": "1",
                          "constants": [],
                          "variables": [
                            1
                          ]
                        }
                      },
                      "addStacksPerTrigger": 1
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Starved Landscape of Vacua"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1985764523\">TheHerta_Trace03_ExtraDamage</a>[<span class=\"descriptionNumberColor\">Answer</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] (99) || RETURN",
                            "displayLines": "99",
                            "constants": [],
                            "variables": [
                              99
                            ]
                          },
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (_PointB3_Ratio) || RETURN",
                              "displayLines": "_PointB3_Ratio",
                              "constants": [],
                              "variables": [
                                "_PointB3_Ratio"
                              ]
                            }
                          },
                          "addStacksPerTrigger": 1
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team Unselectables}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"887606439\">TheHerta_Passive_MagicMark_Unselectable</a>"
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
                    "team": "Enemy Team"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Enemy Team All}}"
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
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]"
                          },
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                              "stackLimit": {
                                "operator": "Variables[0] (42) || RETURN",
                                "displayLines": "42",
                                "constants": [],
                                "variables": [
                                  42
                                ]
                              },
                              "valuePerStack": {
                                "MagicMark_MaxCount_Max": {
                                  "operator": "Variables[0] (42) || RETURN",
                                  "displayLines": "42",
                                  "constants": [],
                                  "variables": [
                                    42
                                  ]
                                },
                                "MagicMark_MaxCount": {
                                  "operator": "Variables[0] (42) || RETURN",
                                  "displayLines": "42",
                                  "constants": [],
                                  "variables": [
                                    42
                                  ]
                                },
                                "MagicMark_Ratio": {
                                  "operator": "Variables[0] (1) || RETURN",
                                  "displayLines": "1",
                                  "constants": [],
                                  "variables": [
                                    1
                                  ]
                                }
                              },
                              "addStacksPerTrigger": 1
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Trace Activated",
                                "conditionList": "Starved Landscape of Vacua"
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1985764523\">TheHerta_Trace03_ExtraDamage</a>[<span class=\"descriptionNumberColor\">Answer</span>]",
                                  "stackLimit": {
                                    "operator": "Variables[0] (99) || RETURN",
                                    "displayLines": "99",
                                    "constants": [],
                                    "variables": [
                                      99
                                    ]
                                  },
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] (_PointB3_Ratio) || RETURN",
                                      "displayLines": "_PointB3_Ratio",
                                      "constants": [],
                                      "variables": [
                                        "_PointB3_Ratio"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ]
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"887606439\">TheHerta_Passive_MagicMark_Unselectable</a>"
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
            "Skill21_Layer_Max"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__887606439\">TheHerta_Passive_MagicMark_Unselectable</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Unselectable Adjustment [Owner]: End",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (42) || RETURN",
                    "displayLines": "42",
                    "constants": [],
                    "variables": [
                      42
                    ]
                  },
                  "valuePerStack": {
                    "MagicMark_MaxCount_Max": {
                      "operator": "Variables[0] (42) || RETURN",
                      "displayLines": "42",
                      "constants": [],
                      "variables": [
                        42
                      ]
                    },
                    "MagicMark_MaxCount": {
                      "operator": "Variables[0] (42) || RETURN",
                      "displayLines": "42",
                      "constants": [],
                      "variables": [
                        42
                      ]
                    },
                    "MagicMark_Ratio": {
                      "operator": "Variables[0] (1) || RETURN",
                      "displayLines": "1",
                      "constants": [],
                      "variables": [
                        1
                      ]
                    }
                  },
                  "addStacksPerTrigger": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Starved Landscape of Vacua"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1985764523\">TheHerta_Trace03_ExtraDamage</a>[<span class=\"descriptionNumberColor\">Answer</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (99) || RETURN",
                        "displayLines": "99",
                        "constants": [],
                        "variables": [
                          99
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (_PointB3_Ratio) || RETURN",
                          "displayLines": "_PointB3_Ratio",
                          "constants": [],
                          "variables": [
                            "_PointB3_Ratio"
                          ]
                        }
                      },
                      "addStacksPerTrigger": 1
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"887606439\">TheHerta_Passive_MagicMark_Unselectable</a>"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "Skill21_Layer_Max"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-928577282\">TheHerta_Passive</a>",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": [
            "Skill21_Layer_Max"
          ],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-682623552\">TheHerta_BPdamageNumber_UIconfig</a>",
              "haloStatus": true
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-434693417\">TheHerta_Trace01_Regen</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Hit",
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
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"220694751\">TheHerta_Trace01_Regen_CD</a>",
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
                      "modifier": "<a class=\"gModGreen\" id=\"220694751\">TheHerta_Trace01_Regen_CD</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                        "displayLines": "MDF_MaxLayer",
                        "constants": [],
                        "variables": [
                          "MDF_MaxLayer"
                        ]
                      },
                      "addStacksPerTrigger": 1
                    },
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "valueType": "Layer",
                      "variableName": "_Effect_Layer",
                      "modifierName": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                      "multiplier": 1
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Starved Landscape of Vacua"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1985764523\">TheHerta_Trace03_ExtraDamage</a>[<span class=\"descriptionNumberColor\">Answer</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] (MDF_MaxLayer_PointB3) || RETURN",
                            "displayLines": "MDF_MaxLayer_PointB3",
                            "constants": [],
                            "variables": [
                              "MDF_MaxLayer_PointB3"
                            ]
                          },
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (MDF_Ratio_PointB3) || RETURN",
                              "displayLines": "MDF_Ratio_PointB3",
                              "constants": [],
                              "variables": [
                                "MDF_Ratio_PointB3"
                              ]
                            }
                          },
                          "addStacksPerTrigger": 1
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Hit_Count",
                      "value": {
                        "operator": "Variables[0] (_Hit_Count) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(_Hit_Count + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "_Hit_Count"
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
                  "name": "Define Custom Variable",
                  "variableName": "_Hit_Count",
                  "value": 0
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"220694751\">TheHerta_Trace01_Regen_CD</a>"
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
                    "value1": "_Hit_Count",
                    "compareType": ">",
                    "value2": {
                      "operator": "Variables[0] (MDF_MaxCount) || RETURN",
                      "displayLines": "MDF_MaxCount",
                      "constants": [],
                      "variables": [
                        "MDF_MaxCount"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Hit_Count",
                      "value": {
                        "operator": "Variables[0] (MDF_MaxCount) || RETURN",
                        "displayLines": "MDF_MaxCount",
                        "constants": [],
                        "variables": [
                          "MDF_MaxCount"
                        ]
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
                        "name": "Compare: Variable",
                        "value1": "_Hit_Count",
                        "compareType": "<",
                        "value2": {
                          "operator": "Variables[0] (MDF_MinCount) || RETURN",
                          "displayLines": "MDF_MinCount",
                          "constants": [],
                          "variables": [
                            "MDF_MinCount"
                          ]
                        }
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-2073297144\">TheHerta_MageNum_2</a>"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Hit_Count",
                      "value": {
                        "operator": "Variables[0] (MDF_MinCount) || RETURN",
                        "displayLines": "MDF_MinCount",
                        "constants": [],
                        "variables": [
                          "MDF_MinCount"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "operator": "Variables[0] (_Hit_Count) || Variables[1] (MDF_PropertyValue) || MUL || RETURN",
                    "displayLines": "(_Hit_Count * MDF_PropertyValue)",
                    "constants": [],
                    "variables": [
                      "_Hit_Count",
                      "MDF_PropertyValue"
                    ]
                  },
                  "isFixed": "(Fixed)"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Hit_Count",
                  "value": 0
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"220694751\">TheHerta_Trace01_Regen_CD</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__220694751\">TheHerta_Trace01_Regen_CD</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-400553795\">TheHerta_Trace01</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Message From Beyond the Veil"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-434693417\">TheHerta_Trace01_Regen</a>",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                          "displayLines": "MDF_PropertyValue",
                          "constants": [],
                          "variables": [
                            "MDF_PropertyValue"
                          ]
                        },
                        "MDF_PropertyValue_2": {
                          "operator": "Variables[0] (MDF_PropertyValue_2) || RETURN",
                          "displayLines": "MDF_PropertyValue_2",
                          "constants": [],
                          "variables": [
                            "MDF_PropertyValue_2"
                          ]
                        },
                        "MDF_MaxCount": {
                          "operator": "Variables[0] (MDF_MaxCount) || RETURN",
                          "displayLines": "MDF_MaxCount",
                          "constants": [],
                          "variables": [
                            "MDF_MaxCount"
                          ]
                        },
                        "MDF_MinCount": {
                          "operator": "Variables[0] (MDF_MinCount) || Variables[1] (3) || ADD || RETURN",
                          "displayLines": "(MDF_MinCount + 3)",
                          "constants": [],
                          "variables": [
                            "MDF_MinCount",
                            3
                          ]
                        },
                        "MDF_AddLayer": {
                          "operator": "Variables[0] (MDF_AddLayer) || RETURN",
                          "displayLines": "MDF_AddLayer",
                          "constants": [],
                          "variables": [
                            "MDF_AddLayer"
                          ]
                        },
                        "MDF_MaxLayer": {
                          "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                          "displayLines": "MDF_MaxLayer",
                          "constants": [],
                          "variables": [
                            "MDF_MaxLayer"
                          ]
                        },
                        "MDF_MaxLayer_PointB3": {
                          "operator": "Variables[0] (MDF_MaxLayer_PointB3) || RETURN",
                          "displayLines": "MDF_MaxLayer_PointB3",
                          "constants": [],
                          "variables": [
                            "MDF_MaxLayer_PointB3"
                          ]
                        },
                        "MDF_Ratio_PointB3": {
                          "operator": "Variables[0] (MDF_Ratio_PointB3) || RETURN",
                          "displayLines": "MDF_Ratio_PointB3",
                          "constants": [],
                          "variables": [
                            "MDF_Ratio_PointB3"
                          ]
                        },
                        "MDF_BounceLayer": {
                          "operator": "Variables[0] (MDF_BounceLayer) || RETURN",
                          "displayLines": "MDF_BounceLayer",
                          "constants": [],
                          "variables": [
                            "MDF_BounceLayer"
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
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-434693417\">TheHerta_Trace01_Regen</a>",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                          "displayLines": "MDF_PropertyValue",
                          "constants": [],
                          "variables": [
                            "MDF_PropertyValue"
                          ]
                        },
                        "MDF_PropertyValue_2": {
                          "operator": "Variables[0] (MDF_PropertyValue_2) || RETURN",
                          "displayLines": "MDF_PropertyValue_2",
                          "constants": [],
                          "variables": [
                            "MDF_PropertyValue_2"
                          ]
                        },
                        "MDF_MaxCount": {
                          "operator": "Variables[0] (MDF_MaxCount) || RETURN",
                          "displayLines": "MDF_MaxCount",
                          "constants": [],
                          "variables": [
                            "MDF_MaxCount"
                          ]
                        },
                        "MDF_MinCount": {
                          "operator": "Variables[0] (MDF_MinCount) || RETURN",
                          "displayLines": "MDF_MinCount",
                          "constants": [],
                          "variables": [
                            "MDF_MinCount"
                          ]
                        },
                        "MDF_AddLayer": {
                          "operator": "Variables[0] (MDF_AddLayer) || RETURN",
                          "displayLines": "MDF_AddLayer",
                          "constants": [],
                          "variables": [
                            "MDF_AddLayer"
                          ]
                        },
                        "MDF_MaxLayer": {
                          "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                          "displayLines": "MDF_MaxLayer",
                          "constants": [],
                          "variables": [
                            "MDF_MaxLayer"
                          ]
                        },
                        "MDF_MaxLayer_PointB3": {
                          "operator": "Variables[0] (MDF_MaxLayer_PointB3) || RETURN",
                          "displayLines": "MDF_MaxLayer_PointB3",
                          "constants": [],
                          "variables": [
                            "MDF_MaxLayer_PointB3"
                          ]
                        },
                        "MDF_Ratio_PointB3": {
                          "operator": "Variables[0] (MDF_Ratio_PointB3) || RETURN",
                          "displayLines": "MDF_Ratio_PointB3",
                          "constants": [],
                          "variables": [
                            "MDF_Ratio_PointB3"
                          ]
                        },
                        "MDF_BounceLayer": {
                          "operator": "Variables[0] (MDF_BounceLayer) || RETURN",
                          "displayLines": "MDF_BounceLayer",
                          "constants": [],
                          "variables": [
                            "MDF_BounceLayer"
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
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Message From Beyond the Veil"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-434693417\">TheHerta_Trace01_Regen</a>",
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                              "displayLines": "MDF_PropertyValue",
                              "constants": [],
                              "variables": [
                                "MDF_PropertyValue"
                              ]
                            },
                            "MDF_PropertyValue_2": {
                              "operator": "Variables[0] (MDF_PropertyValue_2) || RETURN",
                              "displayLines": "MDF_PropertyValue_2",
                              "constants": [],
                              "variables": [
                                "MDF_PropertyValue_2"
                              ]
                            },
                            "MDF_MaxCount": {
                              "operator": "Variables[0] (MDF_MaxCount) || RETURN",
                              "displayLines": "MDF_MaxCount",
                              "constants": [],
                              "variables": [
                                "MDF_MaxCount"
                              ]
                            },
                            "MDF_MinCount": {
                              "operator": "Variables[0] (MDF_MinCount) || Variables[1] (3) || ADD || RETURN",
                              "displayLines": "(MDF_MinCount + 3)",
                              "constants": [],
                              "variables": [
                                "MDF_MinCount",
                                3
                              ]
                            },
                            "MDF_AddLayer": {
                              "operator": "Variables[0] (MDF_AddLayer) || RETURN",
                              "displayLines": "MDF_AddLayer",
                              "constants": [],
                              "variables": [
                                "MDF_AddLayer"
                              ]
                            },
                            "MDF_MaxLayer": {
                              "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                              "displayLines": "MDF_MaxLayer",
                              "constants": [],
                              "variables": [
                                "MDF_MaxLayer"
                              ]
                            },
                            "MDF_MaxLayer_PointB3": {
                              "operator": "Variables[0] (MDF_MaxLayer_PointB3) || RETURN",
                              "displayLines": "MDF_MaxLayer_PointB3",
                              "constants": [],
                              "variables": [
                                "MDF_MaxLayer_PointB3"
                              ]
                            },
                            "MDF_Ratio_PointB3": {
                              "operator": "Variables[0] (MDF_Ratio_PointB3) || RETURN",
                              "displayLines": "MDF_Ratio_PointB3",
                              "constants": [],
                              "variables": [
                                "MDF_Ratio_PointB3"
                              ]
                            },
                            "MDF_BounceLayer": {
                              "operator": "Variables[0] (MDF_BounceLayer) || RETURN",
                              "displayLines": "MDF_BounceLayer",
                              "constants": [],
                              "variables": [
                                "MDF_BounceLayer"
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
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-434693417\">TheHerta_Trace01_Regen</a>",
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                              "displayLines": "MDF_PropertyValue",
                              "constants": [],
                              "variables": [
                                "MDF_PropertyValue"
                              ]
                            },
                            "MDF_PropertyValue_2": {
                              "operator": "Variables[0] (MDF_PropertyValue_2) || RETURN",
                              "displayLines": "MDF_PropertyValue_2",
                              "constants": [],
                              "variables": [
                                "MDF_PropertyValue_2"
                              ]
                            },
                            "MDF_MaxCount": {
                              "operator": "Variables[0] (MDF_MaxCount) || RETURN",
                              "displayLines": "MDF_MaxCount",
                              "constants": [],
                              "variables": [
                                "MDF_MaxCount"
                              ]
                            },
                            "MDF_MinCount": {
                              "operator": "Variables[0] (MDF_MinCount) || RETURN",
                              "displayLines": "MDF_MinCount",
                              "constants": [],
                              "variables": [
                                "MDF_MinCount"
                              ]
                            },
                            "MDF_AddLayer": {
                              "operator": "Variables[0] (MDF_AddLayer) || RETURN",
                              "displayLines": "MDF_AddLayer",
                              "constants": [],
                              "variables": [
                                "MDF_AddLayer"
                              ]
                            },
                            "MDF_MaxLayer": {
                              "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                              "displayLines": "MDF_MaxLayer",
                              "constants": [],
                              "variables": [
                                "MDF_MaxLayer"
                              ]
                            },
                            "MDF_MaxLayer_PointB3": {
                              "operator": "Variables[0] (MDF_MaxLayer_PointB3) || RETURN",
                              "displayLines": "MDF_MaxLayer_PointB3",
                              "constants": [],
                              "variables": [
                                "MDF_MaxLayer_PointB3"
                              ]
                            },
                            "MDF_Ratio_PointB3": {
                              "operator": "Variables[0] (MDF_Ratio_PointB3) || RETURN",
                              "displayLines": "MDF_Ratio_PointB3",
                              "constants": [],
                              "variables": [
                                "MDF_Ratio_PointB3"
                              ]
                            },
                            "MDF_BounceLayer": {
                              "operator": "Variables[0] (MDF_BounceLayer) || RETURN",
                              "displayLines": "MDF_BounceLayer",
                              "constants": [],
                              "variables": [
                                "MDF_BounceLayer"
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
              "eventTrigger": "Battle Event/Summon Created [Anyone]",
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
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Message From Beyond the Veil"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-434693417\">TheHerta_Trace01_Regen</a>",
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                              "displayLines": "MDF_PropertyValue",
                              "constants": [],
                              "variables": [
                                "MDF_PropertyValue"
                              ]
                            },
                            "MDF_PropertyValue_2": {
                              "operator": "Variables[0] (MDF_PropertyValue_2) || RETURN",
                              "displayLines": "MDF_PropertyValue_2",
                              "constants": [],
                              "variables": [
                                "MDF_PropertyValue_2"
                              ]
                            },
                            "MDF_MaxCount": {
                              "operator": "Variables[0] (MDF_MaxCount) || RETURN",
                              "displayLines": "MDF_MaxCount",
                              "constants": [],
                              "variables": [
                                "MDF_MaxCount"
                              ]
                            },
                            "MDF_MinCount": {
                              "operator": "Variables[0] (MDF_MinCount) || Variables[1] (3) || ADD || RETURN",
                              "displayLines": "(MDF_MinCount + 3)",
                              "constants": [],
                              "variables": [
                                "MDF_MinCount",
                                3
                              ]
                            },
                            "MDF_AddLayer": {
                              "operator": "Variables[0] (MDF_AddLayer) || RETURN",
                              "displayLines": "MDF_AddLayer",
                              "constants": [],
                              "variables": [
                                "MDF_AddLayer"
                              ]
                            },
                            "MDF_MaxLayer": {
                              "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                              "displayLines": "MDF_MaxLayer",
                              "constants": [],
                              "variables": [
                                "MDF_MaxLayer"
                              ]
                            },
                            "MDF_MaxLayer_PointB3": {
                              "operator": "Variables[0] (MDF_MaxLayer_PointB3) || RETURN",
                              "displayLines": "MDF_MaxLayer_PointB3",
                              "constants": [],
                              "variables": [
                                "MDF_MaxLayer_PointB3"
                              ]
                            },
                            "MDF_Ratio_PointB3": {
                              "operator": "Variables[0] (MDF_Ratio_PointB3) || RETURN",
                              "displayLines": "MDF_Ratio_PointB3",
                              "constants": [],
                              "variables": [
                                "MDF_Ratio_PointB3"
                              ]
                            },
                            "MDF_BounceLayer": {
                              "operator": "Variables[0] (MDF_BounceLayer) || RETURN",
                              "displayLines": "MDF_BounceLayer",
                              "constants": [],
                              "variables": [
                                "MDF_BounceLayer"
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
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-434693417\">TheHerta_Trace01_Regen</a>",
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                              "displayLines": "MDF_PropertyValue",
                              "constants": [],
                              "variables": [
                                "MDF_PropertyValue"
                              ]
                            },
                            "MDF_PropertyValue_2": {
                              "operator": "Variables[0] (MDF_PropertyValue_2) || RETURN",
                              "displayLines": "MDF_PropertyValue_2",
                              "constants": [],
                              "variables": [
                                "MDF_PropertyValue_2"
                              ]
                            },
                            "MDF_MaxCount": {
                              "operator": "Variables[0] (MDF_MaxCount) || RETURN",
                              "displayLines": "MDF_MaxCount",
                              "constants": [],
                              "variables": [
                                "MDF_MaxCount"
                              ]
                            },
                            "MDF_MinCount": {
                              "operator": "Variables[0] (MDF_MinCount) || RETURN",
                              "displayLines": "MDF_MinCount",
                              "constants": [],
                              "variables": [
                                "MDF_MinCount"
                              ]
                            },
                            "MDF_AddLayer": {
                              "operator": "Variables[0] (MDF_AddLayer) || RETURN",
                              "displayLines": "MDF_AddLayer",
                              "constants": [],
                              "variables": [
                                "MDF_AddLayer"
                              ]
                            },
                            "MDF_MaxLayer": {
                              "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                              "displayLines": "MDF_MaxLayer",
                              "constants": [],
                              "variables": [
                                "MDF_MaxLayer"
                              ]
                            },
                            "MDF_MaxLayer_PointB3": {
                              "operator": "Variables[0] (MDF_MaxLayer_PointB3) || RETURN",
                              "displayLines": "MDF_MaxLayer_PointB3",
                              "constants": [],
                              "variables": [
                                "MDF_MaxLayer_PointB3"
                              ]
                            },
                            "MDF_Ratio_PointB3": {
                              "operator": "Variables[0] (MDF_Ratio_PointB3) || RETURN",
                              "displayLines": "MDF_Ratio_PointB3",
                              "constants": [],
                              "variables": [
                                "MDF_Ratio_PointB3"
                              ]
                            },
                            "MDF_BounceLayer": {
                              "operator": "Variables[0] (MDF_BounceLayer) || RETURN",
                              "displayLines": "MDF_BounceLayer",
                              "constants": [],
                              "variables": [
                                "MDF_BounceLayer"
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
          ],
          "stackData": [
            "MDF_PropertyValue",
            "MDF_MaxCount",
            "MDF_MinCount",
            "MDF_AddLayer",
            "MDF_MaxLayer",
            "MDF_MaxLayer_PointB3",
            "MDF_Ratio_PointB3",
            "MDF_BounceLayer"
          ],
          "latentQueue": [
            "Skill21_Layer_Max"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2073297144\">TheHerta_MageNum_2</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2664689\">TheHerta_MageNum</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_MCount",
                  "value": 0
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "conditions": {
                    "name": "Target is Pathstrider",
                    "path": [
                      "Erudition"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_MCount",
                      "value": {
                        "operator": "Variables[0] (_MCount) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(_MCount + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "_MCount"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_MCount",
                    "compareType": ">=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2073297144\">TheHerta_MageNum_2</a>"
                    }
                  ]
                }
              ],
              "priorityLevel": -80
            }
          ],
          "stackData": [],
          "latentQueue": [
            "Skill21_Layer_Max"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1935947210\">TheHerta_Passive_PreShow_Ability21_All</a>",
          "stackData": [],
          "latentQueue": [
            "Skill21_Layer_Max"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__734755482\">TheHerta_Passive_PreShow_Ability21</a>",
          "execute": [
            {
              "eventTrigger": "Update Target Selected(UI) [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "Skill21_Layer",
                        "compareType": ">",
                        "value2": 0.5
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Skill",
                        "activeSkill": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Modifier: UI Preview",
                      "show": "Hide",
                      "target": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Player's Aim Primary-Target}}"
                          },
                          "Adjust Target by Adjacent Targets"
                        ]
                      },
                      "attacker": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "toughnessType": "Ice",
                      "baseToughnessDMG": 15
                    },
                    {
                      "name": "Modifier: UI Preview",
                      "show": "Hide",
                      "target": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Hostile Entities(AOE)}}"
                          },
                          {
                            "name": "Target Filter",
                            "conditions": {
                              "name": "AND",
                              "conditionList": [
                                {
                                  "name": "Is Part Of",
                                  "of": {
                                    "name": "Target Name",
                                    "target": "{{Player's Aim Primary-Target}}"
                                  },
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "mustBeAlive2": true,
                                  "invertCondition": true
                                },
                                {
                                  "name": "OR",
                                  "conditionList": [
                                    {
                                      "name": "Is Part Of",
                                      "of": {
                                        "name": "Target Sequence",
                                        "Sequence": [
                                          {
                                            "name": "Target Name",
                                            "target": "{{Player's Aim Primary-Target}}"
                                          },
                                          "Adjust Target by Adjacent Targets"
                                        ]
                                      },
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "mustBeAlive2": true
                                    },
                                    {
                                      "name": "Is Part Of",
                                      "of": {
                                        "name": "Target Sequence",
                                        "Sequence": [
                                          {
                                            "name": "Target Name",
                                            "target": "{{Player's Aim Primary-Target}}"
                                          },
                                          "Adjust Target by Adjacent Targets"
                                        ]
                                      },
                                      "target": {
                                        "name": "Target Sequence",
                                        "Sequence": [
                                          {
                                            "name": "Target Name",
                                            "target": "{{Parameter Target}}"
                                          },
                                          "Adjust Target by Adjacent Targets"
                                        ]
                                      },
                                      "mustBeAlive2": true
                                    }
                                  ]
                                }
                              ]
                            }
                          }
                        ]
                      },
                      "attacker": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "toughnessType": "Ice",
                      "baseToughnessDMG": 15
                    },
                    {
                      "name": "Modifier: UI Preview",
                      "show": "Hide",
                      "target": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Hostile Entities(AOE)}}"
                          },
                          {
                            "name": "Target Filter",
                            "conditions": {
                              "name": "NOT",
                              "condition": {
                                "name": "Is Part Of",
                                "of": {
                                  "name": "Target Name",
                                  "target": "{{Player's Aim Primary-Target}}"
                                },
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "mustBeAlive2": true
                              }
                            }
                          }
                        ]
                      },
                      "attacker": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "toughnessType": "Ice",
                      "baseToughnessDMG": 15
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "Skill21_Layer_Max"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-57316235\">TheHerta_Passive_PreShow</a>",
          "stackData": [],
          "latentQueue": [
            "Skill21_Layer_Max"
          ],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "skillType": "Skill",
            "conditions": {
              "name": "AND",
              "conditionList": [
                {
                  "name": "Compare: Variable",
                  "value1": "Skill21_Layer",
                  "compareType": "<",
                  "value2": 0.5
                },
                {
                  "name": "Is Part Of",
                  "of": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "target": {
                    "name": "Target Name",
                    "target": "{{Player's Aim Primary-Target}}"
                  },
                  "mustBeAlive2": true,
                  "invertCondition": true
                },
                {
                  "name": "Is Part Of",
                  "of": {
                    "name": "Target Name",
                    "target": "{{Targets Adjacent to Parameter Target}}"
                  },
                  "target": {
                    "name": "Target Name",
                    "target": "{{Player's Aim Primary-Target}}"
                  },
                  "mustBeAlive2": true,
                  "invertCondition": true
                }
              ]
            },
            "multiplier": 0.5
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__611803002\">TheHerta_SKL21_Listen</a>",
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "Skill21_Layer",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": -999,
                  "maxValue": 1,
                  "whenEnteringRange": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-612445396\">TheHerta_SKL21</a>[<span class=\"descriptionNumberColor\">Inspiration</span>]"
                    }
                  ],
                  "whenValueChanges": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-612445396\">TheHerta_SKL21</a>[<span class=\"descriptionNumberColor\">Inspiration</span>]"
                    }
                  ]
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 1,
                  "maxValue": 999,
                  "whenEnteringRange": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-612445396\">TheHerta_SKL21</a>[<span class=\"descriptionNumberColor\">Inspiration</span>]"
                    },
                    {
                      "name": "Define Modifier Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifierName": "<a class=\"gModGreen\" id=\"-612445396\">TheHerta_SKL21</a>[<span class=\"descriptionNumberColor\">Inspiration</span>]",
                      "value": {
                        "operator": "Variables[0] (Skill21_Layer) || RETURN",
                        "displayLines": "Skill21_Layer",
                        "constants": [],
                        "variables": [
                          "Skill21_Layer"
                        ]
                      }
                    }
                  ],
                  "whenValueChanges": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-612445396\">TheHerta_SKL21</a>[<span class=\"descriptionNumberColor\">Inspiration</span>]"
                    },
                    {
                      "name": "Define Modifier Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifierName": "<a class=\"gModGreen\" id=\"-612445396\">TheHerta_SKL21</a>[<span class=\"descriptionNumberColor\">Inspiration</span>]",
                      "value": {
                        "operator": "Variables[0] (Skill21_Layer) || RETURN",
                        "displayLines": "Skill21_Layer",
                        "constants": [],
                        "variables": [
                          "Skill21_Layer"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "Skill21_Layer_Max"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1573828152\">TheHerta_PointB2_Ally</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Target is Pathstrider",
                    "path": [
                      "Erudition"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Exec_Layer",
                      "value": {
                        "operator": "Variables[0] (MDF_BounceLayer) || Variables[1] (MDF_MageLayer) || ADD || RETURN",
                        "displayLines": "(MDF_BounceLayer + MDF_MageLayer)",
                        "constants": [],
                        "variables": [
                          "MDF_BounceLayer",
                          "MDF_MageLayer"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Exec_Layer",
                      "value": {
                        "operator": "Variables[0] (MDF_BounceLayer) || RETURN",
                        "displayLines": "MDF_BounceLayer",
                        "constants": [],
                        "variables": [
                          "MDF_BounceLayer"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Looped Event",
                  "maxLoops": {
                    "operator": "Variables[0] (_Exec_Layer) || RETURN",
                    "displayLines": "_Exec_Layer",
                    "constants": [],
                    "variables": [
                      "_Exec_Layer"
                    ]
                  },
                  "Event": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Attack Targets of Modifier Holder}}"
                          },
                          {
                            "name": "Target Filter",
                            "conditions": {
                              "name": "AND",
                              "conditionList": [
                                {
                                  "name": "Has Modifier",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]"
                                }
                              ]
                            }
                          },
                          {
                            "name": "Sort by Modifier Value",
                            "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                            "value": "Layer",
                            "sortByHighest": true
                          }
                        ]
                      },
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                        "compareType": "<",
                        "value2": {
                          "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                          "displayLines": "MDF_MaxLayer",
                          "constants": [],
                          "variables": [
                            "MDF_MaxLayer"
                          ]
                        },
                        "valueType": "Layer"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                            "displayLines": "MDF_MaxLayer",
                            "constants": [],
                            "variables": [
                              "MDF_MaxLayer"
                            ]
                          },
                          "addStacksPerTrigger": 1
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Trace Activated",
                            "conditionList": "Starved Landscape of Vacua"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1985764523\">TheHerta_Trace03_ExtraDamage</a>[<span class=\"descriptionNumberColor\">Answer</span>]",
                              "stackLimit": {
                                "operator": "Variables[0] (MDF_MaxLayer_PointB3) || RETURN",
                                "displayLines": "MDF_MaxLayer_PointB3",
                                "constants": [],
                                "variables": [
                                  "MDF_MaxLayer_PointB3"
                                ]
                              },
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] (MDF_Ratio_PointB3) || RETURN",
                                  "displayLines": "MDF_Ratio_PointB3",
                                  "constants": [],
                                  "variables": [
                                    "MDF_Ratio_PointB3"
                                  ]
                                }
                              },
                              "addStacksPerTrigger": 1
                            }
                          ]
                        }
                      ],
                      "noTargetFound": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Trace Activated",
                            "conditionList": "Starved Landscape of Vacua"
                          },
                          "passed": [
                            {
                              "name": "Find New Target",
                              "from": {
                                "name": "Target Name",
                                "target": "{{Attack Targets of Modifier Holder}}"
                              },
                              "maxTargets": 1,
                              "ifTargetFound": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1985764523\">TheHerta_Trace03_ExtraDamage</a>[<span class=\"descriptionNumberColor\">Answer</span>]",
                                  "stackLimit": {
                                    "operator": "Variables[0] (MDF_MaxLayer_PointB3) || RETURN",
                                    "displayLines": "MDF_MaxLayer_PointB3",
                                    "constants": [],
                                    "variables": [
                                      "MDF_MaxLayer_PointB3"
                                    ]
                                  },
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] (MDF_Ratio_PointB3) || RETURN",
                                      "displayLines": "MDF_Ratio_PointB3",
                                      "constants": [],
                                      "variables": [
                                        "MDF_Ratio_PointB3"
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
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1280907269\">TheHerta_PointB2_Listen</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1573828152\">TheHerta_PointB2_Ally</a>",
                  "valuePerStack": {
                    "MDF_MaxLayer_PointB3": {
                      "operator": "Variables[0] (_SkillTree03_MaxCount) || RETURN",
                      "displayLines": "_SkillTree03_MaxCount",
                      "constants": [],
                      "variables": [
                        "_SkillTree03_MaxCount"
                      ]
                    },
                    "MDF_Ratio_PointB3": {
                      "operator": "Variables[0] (_PointB3_Ratio) || RETURN",
                      "displayLines": "_PointB3_Ratio",
                      "constants": [],
                      "variables": [
                        "_PointB3_Ratio"
                      ]
                    },
                    "MDF_MaxLayer": {
                      "operator": "Variables[0] (42) || RETURN",
                      "displayLines": "42",
                      "constants": [],
                      "variables": [
                        42
                      ]
                    },
                    "MDF_BounceLayer": {
                      "operator": "Variables[0] (1) || RETURN",
                      "displayLines": "1",
                      "constants": [],
                      "variables": [
                        1
                      ]
                    },
                    "MDF_MageLayer": {
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Battle Event List}}"
                      },
                      {
                        "name": "Target Filter",
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
                              "name": "Is Entity a Battle Event/Summon",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "invertCondition": true,
                              "expectedType": "Summon"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1573828152\">TheHerta_PointB2_Ally</a>",
                  "valuePerStack": {
                    "MDF_MaxLayer_PointB3": {
                      "operator": "Variables[0] (_SkillTree03_MaxCount) || RETURN",
                      "displayLines": "_SkillTree03_MaxCount",
                      "constants": [],
                      "variables": [
                        "_SkillTree03_MaxCount"
                      ]
                    },
                    "MDF_Ratio_PointB3": {
                      "operator": "Variables[0] (_PointB3_Ratio) || RETURN",
                      "displayLines": "_PointB3_Ratio",
                      "constants": [],
                      "variables": [
                        "_PointB3_Ratio"
                      ]
                    },
                    "MDF_MaxLayer": {
                      "operator": "Variables[0] (42) || RETURN",
                      "displayLines": "42",
                      "constants": [],
                      "variables": [
                        42
                      ]
                    },
                    "MDF_BounceLayer": {
                      "operator": "Variables[0] (1) || RETURN",
                      "displayLines": "1",
                      "constants": [],
                      "variables": [
                        1
                      ]
                    },
                    "MDF_MageLayer": {
                      "operator": "Variables[0] (2) || RETURN",
                      "displayLines": "2",
                      "constants": [],
                      "variables": [
                        2
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
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1573828152\">TheHerta_PointB2_Ally</a>",
                      "valuePerStack": {
                        "MDF_MaxLayer_PointB3": {
                          "operator": "Variables[0] (_SkillTree03_MaxCount) || RETURN",
                          "displayLines": "_SkillTree03_MaxCount",
                          "constants": [],
                          "variables": [
                            "_SkillTree03_MaxCount"
                          ]
                        },
                        "MDF_Ratio_PointB3": {
                          "operator": "Variables[0] (_PointB3_Ratio) || RETURN",
                          "displayLines": "_PointB3_Ratio",
                          "constants": [],
                          "variables": [
                            "_PointB3_Ratio"
                          ]
                        },
                        "MDF_MaxLayer": {
                          "operator": "Variables[0] (42) || RETURN",
                          "displayLines": "42",
                          "constants": [],
                          "variables": [
                            42
                          ]
                        },
                        "MDF_BounceLayer": {
                          "operator": "Variables[0] (1) || RETURN",
                          "displayLines": "1",
                          "constants": [],
                          "variables": [
                            1
                          ]
                        },
                        "MDF_MageLayer": {
                          "operator": "Variables[0] (2) || RETURN",
                          "displayLines": "2",
                          "constants": [],
                          "variables": [
                            2
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Battle Event/Summon Created [Anyone]",
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
                        "name": "Is Entity a Battle Event/Summon",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "invertCondition": true,
                        "expectedType": "Summon"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1573828152\">TheHerta_PointB2_Ally</a>",
                      "valuePerStack": {
                        "MDF_MaxLayer_PointB3": {
                          "operator": "Variables[0] (_SkillTree03_MaxCount) || RETURN",
                          "displayLines": "_SkillTree03_MaxCount",
                          "constants": [],
                          "variables": [
                            "_SkillTree03_MaxCount"
                          ]
                        },
                        "MDF_Ratio_PointB3": {
                          "operator": "Variables[0] (_PointB3_Ratio) || RETURN",
                          "displayLines": "_PointB3_Ratio",
                          "constants": [],
                          "variables": [
                            "_PointB3_Ratio"
                          ]
                        },
                        "MDF_MaxLayer": {
                          "operator": "Variables[0] (42) || RETURN",
                          "displayLines": "42",
                          "constants": [],
                          "variables": [
                            42
                          ]
                        },
                        "MDF_BounceLayer": {
                          "operator": "Variables[0] (1) || RETURN",
                          "displayLines": "1",
                          "constants": [],
                          "variables": [
                            1
                          ]
                        },
                        "MDF_MageLayer": {
                          "operator": "Variables[0] (2) || RETURN",
                          "displayLines": "2",
                          "constants": [],
                          "variables": [
                            2
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
          "latentQueue": [
            "Skill21_Layer_Max"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__780596583\">TheHerta_Herta_Listen</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Character ID",
                          "ID": 1013,
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "characterName": "Herta"
                        }
                      }
                    ]
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1544367051\">TheHerta_Herta</a>",
                  "valuePerStack": {
                    "Cur_Count": 0
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
                    "name": "Character ID",
                    "ID": 1013,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Herta"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1544367051\">TheHerta_Herta</a>",
                      "valuePerStack": {
                        "Cur_Count": 0
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
          "for": "<a class=\"gModGreen\" id=\"mod__1544367051\">TheHerta_Herta</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Turn [Action-End Phase]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1505063883\">TheHerta_Herta_CD</a>"
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
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Skill Type",
                            "skillType": "Skill"
                          },
                          {
                            "name": "Skill Type",
                            "skillType": "Basic ATK"
                          }
                        ]
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"780596583\">TheHerta_Herta_Listen</a>"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1505063883\">TheHerta_Herta_CD</a>"
                      },
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Has Flag",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "flagName": "DisableAction",
                                "invertCondition": true
                              },
                              {
                                "name": "Has Flag",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "flagName": "STAT_CTRL",
                                "invertCondition": true
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Inject Ability Use",
                              "abilityName": "Herta_PassiveAtkReady_Ability_Trigger",
                              "abilityTarget": {
                                "name": "Target Name",
                                "target": "{{Hostile Entities(AOE)}}"
                              },
                              "priorityTag": "AvatarInsertAttackSelf",
                              "canHitNonTargets": true,
                              "showInActionOrder": true,
                              "abortFlags": [
                                "STAT_CTRL",
                                "DisableAction"
                              ],
                              "valuePerStack": {
                                "Herta_Roll_Count": {
                                  "operator": "Variables[0] (Cur_Count) || RETURN",
                                  "displayLines": "Cur_Count",
                                  "constants": [],
                                  "variables": [
                                    "Cur_Count"
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
              ]
            }
          ],
          "stackData": [
            "Cur_Count"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-614684164\">TheHerta_ExtraMark</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Looped Event",
                  "maxLoops": 1,
                  "Event": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          "Shuffle Targets",
                          {
                            "name": "Sort by Stat",
                            "stat": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                            "sortByHighest": true
                          },
                          {
                            "name": "Sort by Monster Rank",
                            "byHighest": true
                          }
                        ]
                      },
                      "includeDyingTargets": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] (42) || RETURN",
                            "displayLines": "42",
                            "constants": [],
                            "variables": [
                              42
                            ]
                          },
                          "valuePerStack": {
                            "MagicMark_MaxCount_Max": {
                              "operator": "Variables[0] (42) || RETURN",
                              "displayLines": "42",
                              "constants": [],
                              "variables": [
                                42
                              ]
                            },
                            "MagicMark_MaxCount": {
                              "operator": "Variables[0] (42) || RETURN",
                              "displayLines": "42",
                              "constants": [],
                              "variables": [
                                42
                              ]
                            },
                            "MagicMark_Ratio": {
                              "operator": "Variables[0] (1) || RETURN",
                              "displayLines": "1",
                              "constants": [],
                              "variables": [
                                1
                              ]
                            }
                          },
                          "addStacksPerTrigger": {
                            "operator": "Variables[0] (25) || RETURN",
                            "displayLines": "25",
                            "constants": [],
                            "variables": [
                              25
                            ]
                          }
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Trace Activated",
                            "conditionList": "Starved Landscape of Vacua"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1985764523\">TheHerta_Trace03_ExtraDamage</a>[<span class=\"descriptionNumberColor\">Answer</span>]",
                              "stackLimit": {
                                "operator": "Variables[0] (99) || RETURN",
                                "displayLines": "99",
                                "constants": [],
                                "variables": [
                                  99
                                ]
                              },
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] (_PointB3_Ratio) || RETURN",
                                  "displayLines": "_PointB3_Ratio",
                                  "constants": [],
                                  "variables": [
                                    "_PointB3_Ratio"
                                  ]
                                }
                              },
                              "addStacksPerTrigger": {
                                "operator": "Variables[0] (25) || RETURN",
                                "displayLines": "25",
                                "constants": [],
                                "variables": [
                                  25
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
              "priorityLevel": -80
            }
          ],
          "stackData": [],
          "latentQueue": [
            "Skill21_Layer_Max"
          ]
        }
      ]
    },
    "TheHerta_TheHerta_Ability03_Part02": {
      "fileName": "TheHerta_TheHerta_Ability03_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"426098232\">TheHerta_Passive_MagicMark_42_Block</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"184474088\">TheHerta_SKL03_Sort_Storge</a>"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "__i",
          "value": 0
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]"
                }
              },
              {
                "name": "Sort by Modifier Value",
                "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                "value": "Layer",
                "sortByHighest": true
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable",
              "variableName": "__i",
              "value": {
                "operator": "Variables[0] (__i) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(__i + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "__i"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "__j",
              "value": 0
            },
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "valueType": "Layer",
              "variableName": "_Temp_Sort_Layer",
              "modifierName": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
              "multiplier": 1
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]"
                    }
                  },
                  {
                    "name": "Sort by Stat",
                    "stat": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                    "sortByHighest": true
                  },
                  {
                    "name": "Sort by Monster Rank",
                    "byHighest": true
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "__j",
                  "value": {
                    "operator": "Variables[0] (__j) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(__j + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "__j"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "__j",
                    "compareType": "=",
                    "value2": {
                      "operator": "Variables[0] (__i) || RETURN",
                      "displayLines": "__i",
                      "constants": [],
                      "variables": [
                        "__i"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"184474088\">TheHerta_SKL03_Sort_Storge</a>",
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (_Temp_Sort_Layer) || RETURN",
                        "displayLines": "_Temp_Sort_Layer",
                        "constants": [],
                        "variables": [
                          "_Temp_Sort_Layer"
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
          "name": "Find New Target",
          "from": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"184474088\">TheHerta_SKL03_Sort_Storge</a>"
                }
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "valueType": "Layer",
              "variableName": "_Temp_Sort_Layer",
              "modifierName": "<a class=\"gModGreen\" id=\"184474088\">TheHerta_SKL03_Sort_Storge</a>",
              "multiplier": 1
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
              "stackLimit": {
                "operator": "Variables[0] (42) || RETURN",
                "displayLines": "42",
                "constants": [],
                "variables": [
                  42
                ]
              },
              "valuePerStack": {
                "MagicMark_MaxCount_Max": {
                  "operator": "Variables[0] (42) || RETURN",
                  "displayLines": "42",
                  "constants": [],
                  "variables": [
                    42
                  ]
                },
                "MagicMark_MaxCount": {
                  "operator": "Variables[0] (42) || RETURN",
                  "displayLines": "42",
                  "constants": [],
                  "variables": [
                    42
                  ]
                },
                "MagicMark_Ratio": {
                  "operator": "Variables[0] (1) || RETURN",
                  "displayLines": "1",
                  "constants": [],
                  "variables": [
                    1
                  ]
                }
              },
              "addStacksPerTrigger": {
                "operator": "Variables[0] (_Temp_Sort_Layer) || RETURN",
                "displayLines": "_Temp_Sort_Layer",
                "constants": [],
                "variables": [
                  "_Temp_Sort_Layer"
                ]
              }
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Hat",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_SKL03_EXTRADAMAGE",
          "value": 0
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Trace Activated",
                "conditionList": "Starved Landscape of Vacua"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1985764523\">TheHerta_Trace03_ExtraDamage</a>[<span class=\"descriptionNumberColor\">Answer</span>]"
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "_SKL03_EXTRADAMAGE",
              "modifierName": "<a class=\"gModGreen\" id=\"1985764523\">TheHerta_Trace03_ExtraDamage</a>[<span class=\"descriptionNumberColor\">Answer</span>]",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_SKL03_EXTRADAMAGE",
              "value": {
                "operator": "Variables[0] (_SKL03_EXTRADAMAGE) || Variables[1] (_PointB3_Ratio) || MUL || RETURN",
                "displayLines": "(_SKL03_EXTRADAMAGE * _PointB3_Ratio)",
                "constants": [],
                "variables": [
                  "_SKL03_EXTRADAMAGE",
                  "_PointB3_Ratio"
                ]
              }
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
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Name",
                  "target": "{{Hostile Entities(AOE)}}"
                },
                "compareType": ">=",
                "value2": 3,
                "livingTargets": true
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_SKL03_EXTRADAMAGE",
                  "value": {
                    "operator": "Variables[0] (_SKL03_EXTRADAMAGE) || Variables[1] (1.4) || ADD || RETURN",
                    "displayLines": "(_SKL03_EXTRADAMAGE + 1.4)",
                    "constants": [],
                    "variables": [
                      "_SKL03_EXTRADAMAGE",
                      1.4
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Hostile Entities(AOE)}}"
                    },
                    "compareType": "=",
                    "value2": 2,
                    "livingTargets": true
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_SKL03_EXTRADAMAGE",
                      "value": {
                        "operator": "Variables[0] (_SKL03_EXTRADAMAGE) || Variables[1] (2.5) || ADD || RETURN",
                        "displayLines": "(_SKL03_EXTRADAMAGE + 2.5)",
                        "constants": [],
                        "variables": [
                          "_SKL03_EXTRADAMAGE",
                          2.5
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_SKL03_EXTRADAMAGE",
                      "value": {
                        "operator": "Variables[0] (_SKL03_EXTRADAMAGE) || Variables[1] (4) || ADD || RETURN",
                        "displayLines": "(_SKL03_EXTRADAMAGE + 4)",
                        "constants": [],
                        "variables": [
                          "_SKL03_EXTRADAMAGE",
                          4
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"555212333\">TheHerta_Ability03_Bonus</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
          "duration": {
            "operator": "Variables[0] (3) || RETURN",
            "displayLines": "3",
            "constants": [],
            "variables": [
              3
            ]
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (0.8) || RETURN",
              "displayLines": "0.8",
              "constants": [],
              "variables": [
                0.8
              ]
            }
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"426098232\">TheHerta_Passive_MagicMark_42_Block</a>"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (2) || Variables[1] (_SKL03_EXTRADAMAGE) || ADD || RETURN",
              "displayLines": "(2 + _SKL03_EXTRADAMAGE)",
              "constants": [],
              "variables": [
                2,
                "_SKL03_EXTRADAMAGE"
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
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Update Ability Binding",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "abilityName": "Skill21",
          "skillSlot": "Skill",
          "enableSecondaryType": "ControlSkill02"
        },
        {
          "name": "Update Ability Enhance Button",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "display": "Show",
          "abilityName": "Skill"
        },
        {
          "name": "Adjust Variable Value",
          "adjustmentType": "Add to Value (Default)",
          "variableName": "Skill21_Layer",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": {
            "operator": "Variables[0] (Skill21_Layer_Add) || RETURN",
            "displayLines": "Skill21_Layer_Add",
            "constants": [],
            "variables": [
              "Skill21_Layer_Add"
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 2
          },
          "passed": [
            {
              "name": "Adjust Variable Value",
              "adjustmentType": "Add to Value (Default)",
              "variableName": "Skill21_Layer",
              "on": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": 1
            }
          ]
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (Skill21_Layer) || RETURN",
            "displayLines": "Skill21_Layer",
            "constants": [],
            "variables": [
              "Skill21_Layer"
            ]
          },
          "priorState": "Active"
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "set": 0
        },
        "Trigger: Skip Death Handling",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "TheHerta_TheHerta_Ability03_Part01": {
      "fileName": "TheHerta_TheHerta_Ability03_Part01",
      "childAbilityList": [
        "TheHerta_TheHerta_Ability03_Camera",
        "TheHerta_TheHerta_Ability03_EnterReady",
        "TheHerta_TheHerta_Ability03_Part01",
        "TheHerta_TheHerta_Ability03_Part02"
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
          "ability": "TheHerta_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "TheHerta_TheHerta_Ability03_EnterReady": {
      "fileName": "TheHerta_TheHerta_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "TheHerta_TheHerta_Ability21_Part02": {
      "fileName": "TheHerta_TheHerta_Ability21_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"1324497127\">TheHerta_Ability21</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1940766665\">TheHerta_SKL02_Mark</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-696979317\">TheHerta_SKL02_Mark_Pre</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1940766665\">TheHerta_SKL02_Mark</a>"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "S03_Mark_Count",
          "value": 0
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]"
          },
          "passed": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "valueType": "Layer",
              "variableName": "S03_Mark_Count",
              "modifierName": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "valueType": "Layer",
              "variableName": "Orig_Layer",
              "modifierName": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
              "multiplier": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 1
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{ST and Blast}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]"
                        }
                      },
                      {
                        "name": "Sort by Modifier Value",
                        "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                        "value": "Layer",
                        "sortByHighest": true
                      }
                    ]
                  },
                  "includeDyingTargets": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "valueType": "Layer",
                      "variableName": "_ADJ_TMP_COUNT",
                      "modifierName": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                      "multiplier": 1
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "S03_Mark_Count",
                      "value": {
                        "operator": "Variables[0] (S03_Mark_Count) || Variables[1] (_ADJ_TMP_COUNT) || Variables[2] (0.5) || MUL || ADD || RETURN",
                        "displayLines": "(S03_Mark_Count + (_ADJ_TMP_COUNT * 0.5))",
                        "constants": [],
                        "variables": [
                          "S03_Mark_Count",
                          "_ADJ_TMP_COUNT",
                          0.5
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "Aloofly Honest"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "S03_Mark_Count",
                    "compareType": ">=",
                    "value2": 42
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1341843949\">TheHerta_PointB1_42</a>",
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
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-2073297144\">TheHerta_MageNum_2</a>"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "S03_Mark_Count",
                  "value": {
                    "operator": "Variables[0] (S03_Mark_Count) || Constants[0] (2) || MUL || RETURN",
                    "displayLines": "(S03_Mark_Count * 2)",
                    "constants": [
                      2
                    ],
                    "variables": [
                      "S03_Mark_Count"
                    ]
                  }
                }
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Eidolon Activated",
                    "eidolon": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (42) || RETURN",
                    "displayLines": "42",
                    "constants": [],
                    "variables": [
                      42
                    ]
                  },
                  "valuePerStack": {
                    "MagicMark_MaxCount_Max": {
                      "operator": "Variables[0] (42) || RETURN",
                      "displayLines": "42",
                      "constants": [],
                      "variables": [
                        42
                      ]
                    },
                    "MagicMark_MaxCount": {
                      "operator": "Variables[0] (42) || RETURN",
                      "displayLines": "42",
                      "constants": [],
                      "variables": [
                        42
                      ]
                    },
                    "MagicMark_Ratio": {
                      "operator": "Variables[0] (1) || RETURN",
                      "displayLines": "1",
                      "constants": [],
                      "variables": [
                        1
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (15) || RETURN",
                    "displayLines": "15",
                    "constants": [],
                    "variables": [
                      15
                    ]
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (42) || RETURN",
                    "displayLines": "42",
                    "constants": [],
                    "variables": [
                      42
                    ]
                  },
                  "valuePerStack": {
                    "MagicMark_MaxCount_Max": {
                      "operator": "Variables[0] (42) || RETURN",
                      "displayLines": "42",
                      "constants": [],
                      "variables": [
                        42
                      ]
                    },
                    "MagicMark_MaxCount": {
                      "operator": "Variables[0] (42) || RETURN",
                      "displayLines": "42",
                      "constants": [],
                      "variables": [
                        42
                      ]
                    },
                    "MagicMark_Ratio": {
                      "operator": "Variables[0] (1) || RETURN",
                      "displayLines": "1",
                      "constants": [],
                      "variables": [
                        1
                      ]
                    }
                  },
                  "addStacksPerTrigger": 1
                }
              ]
            }
          ]
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1142002606\">TheHerta_SKL02</a>",
          "variables": {
            "DV_DamageRatio1": {
              "operator": "Variables[0] (0.8) || RETURN",
              "displayLines": "0.8",
              "constants": [],
              "variables": [
                0.8
              ]
            },
            "DV_MarkAddLayer": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "DV_MarkMaxLayer": {
              "operator": "Variables[0] (42) || RETURN",
              "displayLines": "42",
              "constants": [],
              "variables": [
                42
              ]
            }
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Orig_Layer",
            "compareType": ">=",
            "value2": -1
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"27955030\">TheHerta_Passive_MagicMark_Burst_Show</a>"
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
          "includeDyingTargets": true,
          "maxTargets": 10,
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "S03_Mark_Count",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "S03_Mark_Damage",
                  "value": {
                    "operator": "Variables[0] (S03_Mark_Count) || Variables[1] (0.08) || MUL || RETURN",
                    "displayLines": "(S03_Mark_Count * 0.08)",
                    "constants": [],
                    "variables": [
                      "S03_Mark_Count",
                      0.08
                    ]
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
                      "target": "{{Ability Target(ST)}}"
                    },
                    "mustBeAlive2": true
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Ice",
                        "Damage": {
                          "operator": "Variables[0] (S03_Mark_Count) || Variables[1] (0.08) || MUL || Variables[2] (0.4) || ADD || RETURN",
                          "displayLines": "((S03_Mark_Count * 0.08) + 0.4)",
                          "constants": [],
                          "variables": [
                            "S03_Mark_Count",
                            0.08,
                            0.4
                          ]
                        },
                        "Toughness": {
                          "displayLines": 15
                        },
                        "Tags": null
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Ice",
                        "Damage": {
                          "operator": "Variables[0] (S03_Mark_Count) || Variables[1] (0.04) || MUL || Variables[2] (0.4) || ADD || RETURN",
                          "displayLines": "((S03_Mark_Count * 0.04) + 0.4)",
                          "constants": [],
                          "variables": [
                            "S03_Mark_Count",
                            0.04,
                            0.4
                          ]
                        },
                        "Toughness": {
                          "displayLines": 15
                        },
                        "Tags": null
                      }
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "Damage": {
                      "operator": "Variables[0] (0.4) || RETURN",
                      "displayLines": "0.4",
                      "constants": [],
                      "variables": [
                        0.4
                      ]
                    },
                    "Toughness": {
                      "displayLines": 15
                    },
                    "Tags": null
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 2
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1527090005\">ReduceNextActionDelay</a>",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variables": {
                "parameter[0]_NormalizedValue": {
                  "operator": "Variables[0] (0.35) || RETURN",
                  "displayLines": "0.35",
                  "constants": [],
                  "variables": [
                    0.35
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1324497127\">TheHerta_Ability21</a>"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-333672562\">TheHerta_Passive_MagicMark_Burst</a>"
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1324497127\">TheHerta_Ability21</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1341843949\">TheHerta_PointB1_42</a>"
        },
        {
          "name": "Adjust Variable Value",
          "adjustmentType": "Add to Value (Default)",
          "variableName": "Skill21_Layer",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": -1
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Skill21_Layer",
            "compareType": ">",
            "value2": 0
          },
          "passed": [
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (Skill21_Layer) || RETURN",
                "displayLines": "Skill21_Layer",
                "constants": [],
                "variables": [
                  "Skill21_Layer"
                ]
              },
              "priorState": "Active"
            }
          ],
          "failed": [
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (Skill21_Layer) || RETURN",
                "displayLines": "Skill21_Layer",
                "constants": [],
                "variables": [
                  "Skill21_Layer"
                ]
              },
              "priorState": "Normal"
            },
            {
              "name": "Update Ability Binding",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "abilityName": "Skill02",
              "skillSlot": "Skill",
              "enableSecondaryType": "ControlSkill02"
            },
            {
              "name": "Update Ability Enhance Button",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "display": "Hide",
              "abilityName": "Skill"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "TheHerta_TheHerta_Ability21_Part01": {
      "fileName": "TheHerta_TheHerta_Ability21_Part01",
      "childAbilityList": [
        "TheHerta_TheHerta_Ability021_Camera",
        "TheHerta_TheHerta_Ability21_Part01",
        "TheHerta_TheHerta_Ability21_Part02"
      ],
      "skillTrigger": "Skill21",
      "abilityType": "Skill",
      "energy": 30,
      "toughnessList": [
        20,
        0,
        10
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "TheHerta_Ability21_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "TheHerta_TheHerta_Ability02_Part02": {
      "fileName": "TheHerta_TheHerta_Ability02_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-424945107\">TheHerta_Trace02_MainTarget</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1940766665\">TheHerta_SKL02_Mark</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-696979317\">TheHerta_SKL02_Mark_Pre</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1940766665\">TheHerta_SKL02_Mark</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1142002606\">TheHerta_SKL02</a>",
          "variables": {
            "DV_DamageRatio1": {
              "operator": "Variables[0] (0.7) || RETURN",
              "displayLines": "0.7",
              "constants": [],
              "variables": [
                0.7
              ]
            },
            "DV_MarkAddLayer": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "DV_MarkMaxLayer": {
              "operator": "Variables[0] (42) || RETURN",
              "displayLines": "42",
              "constants": [],
              "variables": [
                42
              ]
            }
          }
        },
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-696979317\">TheHerta_SKL02_Mark_Pre</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1940766665\">TheHerta_SKL02_Mark</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-424945107\">TheHerta_Trace02_MainTarget</a>"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "TheHerta_TheHerta_Ability02_Part01": {
      "fileName": "TheHerta_TheHerta_Ability02_Part01",
      "childAbilityList": [
        "TheHerta_TheHerta_Ability02_Camera",
        "TheHerta_TheHerta_Ability02_Part01",
        "TheHerta_TheHerta_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": 30,
      "toughnessList": [
        15,
        0,
        10
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "TheHerta_Ability02_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "TheHerta_TheHerta_Ability01_Part02": {
      "fileName": "TheHerta_TheHerta_Ability01_Part02",
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
            "DamageType": "Ice",
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
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "TheHerta_TheHerta_Ability01_Part01": {
      "fileName": "TheHerta_TheHerta_Ability01_Part01",
      "childAbilityList": [
        "TheHerta_TheHerta_Ability01_Camera",
        "TheHerta_TheHerta_Ability01_Part01",
        "TheHerta_TheHerta_Ability01_Part02"
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
          "ability": "TheHerta_Ability01_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "TheHerta_Modifiers": {
      "fileName": "TheHerta_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1324497127\">TheHerta_Ability21</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-424945107\">TheHerta_Trace02_MainTarget</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1073653973\">TheHerta_Eidolon6_Mark</a>",
          "stackType": "ReplaceByCaster"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-269827168\">TheHerta_Eidolon2_Debuff</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-155397413\">TheHerta_Eidolon2_Bonus</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1847951860\">TheHerta_Eidolon1_Ice</a>",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceIcePEN</span>&nbsp;",
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1787645214\">TheHerta_Passive_ExceedSpStatus</a>",
          "counter": 1,
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "EntityStockSPForShow",
                    "compareType": ">",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Define Modifier Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifierName": "<a class=\"gModGreen\" id=\"1787645214\">TheHerta_Passive_ExceedSpStatus</a>",
                      "value": {
                        "operator": "Variables[0] (WHOLE) || Variables[1] (EntityStockSPForShow) || PARAM_1 || FUNCTION || RETURN",
                        "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">WHOLE</span>(EntityStockSPForShow)",
                        "constants": [],
                        "variables": [
                          "WHOLE",
                          "EntityStockSPForShow"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Modifier Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifierName": "<a class=\"gModGreen\" id=\"1787645214\">TheHerta_Passive_ExceedSpStatus</a>",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1558664027\">TheHerta_Passive_StockSpValue</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Energy Change",
              "execute": [
                {
                  "name": "Define Custom Variable with Changes to Stats",
                  "variableName": "_SPChangeValue"
                },
                {
                  "name": "Define Custom Variable with Changes to Stats",
                  "variableName": "_SPChangeValueRaw",
                  "type": "RawDelta"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_SPChangeValue",
                    "compareType": "=",
                    "value2": {
                      "operator": "Variables[0] (_SPChangeValueRaw) || RETURN",
                      "displayLines": "_SPChangeValueRaw",
                      "constants": [],
                      "variables": [
                        "_SPChangeValueRaw"
                      ]
                    }
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_SPChangeValueRaw",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Stat",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "EntityCurrentSP",
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;"
                        },
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "EntityCurrentSP",
                          "value": {
                            "operator": "Variables[0] (EntityCurrentSP) || Variables[1] (_SPChangeValue) || SUB || Variables[2] (_SPChangeValueRaw) || ADD || RETURN",
                            "displayLines": "((EntityCurrentSP - _SPChangeValue) + _SPChangeValueRaw)",
                            "constants": [],
                            "variables": [
                              "EntityCurrentSP",
                              "_SPChangeValue",
                              "_SPChangeValueRaw"
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable with Stat",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "EntityMaxSP",
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "EntityCurrentSP",
                            "compareType": ">",
                            "value2": {
                              "operator": "Variables[0] (EntityMaxSP) || RETURN",
                              "displayLines": "EntityMaxSP",
                              "constants": [],
                              "variables": [
                                "EntityMaxSP"
                              ]
                            }
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "variableName": "EntityStockSP",
                              "value": {
                                "operator": "Variables[0] (EntityStockSP) || Variables[1] (EntityCurrentSP) || ADD || Variables[2] (EntityMaxSP) || SUB || RETURN",
                                "displayLines": "((EntityStockSP + EntityCurrentSP) - EntityMaxSP)",
                                "constants": [],
                                "variables": [
                                  "EntityStockSP",
                                  "EntityCurrentSP",
                                  "EntityMaxSP"
                                ]
                              }
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "EntityStockSP",
                                "compareType": ">=",
                                "value2": {
                                  "operator": "Variables[0] (EntityMaxSP) || Variables[1] (T_HERTA_OBJECT_UNUSED_9) || MUL || RETURN",
                                  "displayLines": "(EntityMaxSP * T_HERTA_OBJECT_UNUSED_9)",
                                  "constants": [],
                                  "variables": [
                                    "EntityMaxSP",
                                    "T_HERTA_OBJECT_UNUSED_9"
                                  ]
                                }
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "variableName": "EntityStockSP",
                                  "value": {
                                    "operator": "Variables[0] (EntityMaxSP) || Variables[1] (T_HERTA_OBJECT_UNUSED_9) || MUL || RETURN",
                                    "displayLines": "(EntityMaxSP * T_HERTA_OBJECT_UNUSED_9)",
                                    "constants": [],
                                    "variables": [
                                      "EntityMaxSP",
                                      "T_HERTA_OBJECT_UNUSED_9"
                                    ]
                                  }
                                }
                              ]
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"1787645214\">TheHerta_Passive_ExceedSpStatus</a>"
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable with Copy",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1787645214\">TheHerta_Passive_ExceedSpStatus</a>",
                                  "variable": "EntityStockSPForShow",
                                  "target2": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "variable2": "_Current_Show_Value"
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Modifier Holder}}"
                                    },
                                    "value1": "_Current_Show_Value",
                                    "compareType": "<",
                                    "value2": {
                                      "operator": "Variables[0] (EntityStockSP) || RETURN",
                                      "displayLines": "EntityStockSP",
                                      "constants": [],
                                      "variables": [
                                        "EntityStockSP"
                                      ]
                                    }
                                  },
                                  "passed": [
                                    {
                                      "name": "Add Events/Bonuses",
                                      "to": {
                                        "name": "Target Name",
                                        "target": "{{Modifier Holder}}"
                                      },
                                      "modifier": "<a class=\"gModGreen\" id=\"1787645214\">TheHerta_Passive_ExceedSpStatus</a>",
                                      "valuePerStack": {
                                        "EntityStockSPForShow": {
                                          "operator": "Variables[0] (EntityStockSP) || RETURN",
                                          "displayLines": "EntityStockSP",
                                          "constants": [],
                                          "variables": [
                                            "EntityStockSP"
                                          ]
                                        }
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
                                  "modifier": "<a class=\"gModGreen\" id=\"1787645214\">TheHerta_Passive_ExceedSpStatus</a>",
                                  "valuePerStack": {
                                    "EntityStockSPForShow": {
                                      "operator": "Variables[0] (EntityStockSP) || RETURN",
                                      "displayLines": "EntityStockSP",
                                      "constants": [],
                                      "variables": [
                                        "EntityStockSP"
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
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-125980821\">TheHerta_Passive_ReturnSpValue</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Ability Use [Anyone]: Start"
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
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "_CurrentSP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "EntityMaxSP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "EntityStockSP",
                        "compareType": "<=",
                        "value2": {
                          "operator": "Variables[0] (EntityMaxSP) || Variables[1] (_CurrentSP) || SUB || RETURN",
                          "displayLines": "(EntityMaxSP - _CurrentSP)",
                          "constants": [],
                          "variables": [
                            "EntityMaxSP",
                            "_CurrentSP"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "value": {
                            "operator": "Variables[0] (EntityStockSP) || RETURN",
                            "displayLines": "EntityStockSP",
                            "constants": [],
                            "variables": [
                              "EntityStockSP"
                            ]
                          },
                          "isFixed": "(Fixed)"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "EntityStockSP",
                          "value": 0
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1787645214\">TheHerta_Passive_ExceedSpStatus</a>"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "value": {
                            "operator": "Variables[0] (EntityMaxSP) || Variables[1] (_CurrentSP) || SUB || RETURN",
                            "displayLines": "(EntityMaxSP - _CurrentSP)",
                            "constants": [],
                            "variables": [
                              "EntityMaxSP",
                              "_CurrentSP"
                            ]
                          },
                          "isFixed": "* ERR"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "EntityStockSP",
                          "value": {
                            "operator": "Variables[0] (EntityStockSP) || Variables[1] (EntityMaxSP) || SUB || Variables[2] (_CurrentSP) || ADD || RETURN",
                            "displayLines": "((EntityStockSP - EntityMaxSP) + _CurrentSP)",
                            "constants": [],
                            "variables": [
                              "EntityStockSP",
                              "EntityMaxSP",
                              "_CurrentSP"
                            ]
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1787645214\">TheHerta_Passive_ExceedSpStatus</a>",
                          "valuePerStack": {
                            "EntityStockSPForShow": {
                              "operator": "Variables[0] (EntityStockSP) || RETURN",
                              "displayLines": "EntityStockSP",
                              "constants": [],
                              "variables": [
                                "EntityStockSP"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1149465899\">TheHerta_Passive_ReturnSpValue_Eidolon1</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__555212333\">TheHerta_Ability03_Bonus</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
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
          "latentQueue": [
            "_Hat"
          ],
          "description": "ATK increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "ATK Boost",
          "statusName": "ATK Boost"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__184474088\">TheHerta_SKL03_Sort_Storge</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1940766665\">TheHerta_SKL02_Mark</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__985102857\">TheHerta_Eidolon2_CD</a>[<span class=\"descriptionNumberColor\">Wind Through Keyhole</span>]",
          "description": "The \"Wind Through Keyhole\" action advance effect cannot be triggered yet.",
          "type": "Other",
          "statusName": "Wind Through Keyhole"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-971879271\">TheHerta_Eidolon2_PreShow_42</a>",
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "skillType": [
              "Skill"
            ],
            "conditions": {
              "name": "AND",
              "conditionList": [
                {
                  "name": "Compare: Variable",
                  "value1": "Skill21_Layer",
                  "compareType": ">=",
                  "value2": 1
                },
                {
                  "name": "Compare: Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Player's Aim Primary-Target}}"
                  },
                  "value1": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                  "compareType": ">=",
                  "value2": 42,
                  "valueType": "Layer"
                }
              ]
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": {
                "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                "displayLines": "(0 - MDF_PropertyValue)",
                "constants": [
                  0
                ],
                "variables": [
                  "MDF_PropertyValue"
                ]
              }
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__489116474\">TheHerta_Eidolon2_PreShow</a>",
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": [
            "Skill21_Layer_Max"
          ],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "skillType": [
              "Skill"
            ],
            "conditions": {
              "name": "AND",
              "conditionList": [
                {
                  "name": "Compare: Variable",
                  "value1": "Skill21_Layer",
                  "compareType": ">=",
                  "value2": 1
                }
              ]
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": {
                "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                "displayLines": "(0 - MDF_PropertyValue)",
                "constants": [
                  0
                ],
                "variables": [
                  "MDF_PropertyValue"
                ]
              }
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-696979317\">TheHerta_SKL02_Mark_Pre</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-682623552\">TheHerta_BPdamageNumber_UIconfig</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
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
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "DV_HitCount",
                      "context": "TargetEntity",
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
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "DV_HitCount"
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked Start [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "DV_HitCount",
                  "value": 0
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "Skill21_Layer_Max"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__27955030\">TheHerta_Passive_MagicMark_Burst_Show</a>",
          "stackData": [],
          "latentQueue": [
            "Orig_Layer"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-333672562\">TheHerta_Passive_MagicMark_Burst</a>",
          "stackData": [],
          "latentQueue": [
            "Orig_Layer",
            "S03_Mark_Damage"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "ListenBattleEventSkill",
            "KeepOnDeathrattle"
          ],
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
                  "modifier": "<a class=\"gModGreen\" id=\"-850819741\">TheHerta_Passive_MagicMark_42_Block_42</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"410301042\">TheHerta_Passive_MagicMark_Effect_Block_42</a>"
                }
              ]
            },
            {
              "eventTrigger": "Action Phase Start [Anyone][?]"
            },
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
                  "variableName": "MDF_Count",
                  "modifierName": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "MaxLayer",
                  "variableName": "MagicMark_MaxCount",
                  "modifierName": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "MaxLayer",
                  "variableName": "MagicMark_MaxCount_Max",
                  "modifierName": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                  "multiplier": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_Count",
                    "compareType": ">=",
                    "value2": 42
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
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"410301042\">TheHerta_Passive_MagicMark_Effect_Block_42</a>",
                            "invertCondition": true
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Toggle Skill Mark",
                          "toggle": true,
                          "skillTypesAllow": [],
                          "trigger": "Trigger_Hint"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"410301042\">TheHerta_Passive_MagicMark_Effect_Block_42</a>"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_Count",
                        "compareType": ">=",
                        "value2": 21
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
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "MDF_Count",
                  "modifierName": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_TMP_VAL",
                  "value": 0
                },
                {
                  "name": "Looped Event",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_TMP_VAL",
                    "compareType": "<",
                    "value2": {
                      "operator": "Variables[0] (MDF_Count) || Variables[1] (MagicMark_Ratio) || MUL || RETURN",
                      "displayLines": "(MDF_Count * MagicMark_Ratio)",
                      "constants": [],
                      "variables": [
                        "MDF_Count",
                        "MagicMark_Ratio"
                      ]
                    }
                  },
                  "Event": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_TMP_VAL",
                      "value": {
                        "operator": "Variables[0] (_TMP_VAL) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(_TMP_VAL + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "_TMP_VAL"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Looped Event",
                  "maxLoops": {
                    "operator": "Variables[0] (_TMP_VAL) || RETURN",
                    "displayLines": "_TMP_VAL",
                    "constants": [],
                    "variables": [
                      "_TMP_VAL"
                    ]
                  },
                  "Event": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target Count SUM",
                        "target": {
                          "name": "Target Sequence",
                          "Sequence": [
                            {
                              "name": "Target Name",
                              "target": "{{Enemy Team All}}"
                            },
                            {
                              "name": "Target Filter",
                              "conditions": {
                                "name": "AND",
                                "conditionList": [
                                  {
                                    "name": "Has Modifier",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]"
                                  },
                                  {
                                    "name": "Is Part Of",
                                    "of": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Modifier Holder}}"
                                    },
                                    "mustBeAlive2": true,
                                    "invertCondition": true
                                  }
                                ]
                              }
                            }
                          ]
                        },
                        "conditions": {
                          "name": "Compare: Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "value1": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                          "compareType": "<",
                          "value2": {
                            "operator": "Variables[0] (MagicMark_MaxCount_Max) || RETURN",
                            "displayLines": "MagicMark_MaxCount_Max",
                            "constants": [],
                            "variables": [
                              "MagicMark_MaxCount_Max"
                            ]
                          },
                          "valueType": "Layer"
                        }
                      },
                      "passed": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Target Name",
                                "target": "{{Enemy Team All}}"
                              },
                              {
                                "name": "Target Filter",
                                "conditions": {
                                  "name": "AND",
                                  "conditionList": [
                                    {
                                      "name": "Has Modifier",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]"
                                    },
                                    {
                                      "name": "Is Part Of",
                                      "of": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Modifier Holder}}"
                                      },
                                      "mustBeAlive2": true,
                                      "invertCondition": true
                                    }
                                  ]
                                }
                              },
                              {
                                "name": "Sort by Stat",
                                "stat": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                                "sortByHighest": true
                              },
                              {
                                "name": "Sort by Monster Rank",
                                "byHighest": true
                              }
                            ]
                          },
                          "maxTargets": 1,
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value1": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                            "compareType": "<",
                            "value2": {
                              "operator": "Variables[0] (MagicMark_MaxCount_Max) || RETURN",
                              "displayLines": "MagicMark_MaxCount_Max",
                              "constants": [],
                              "variables": [
                                "MagicMark_MaxCount_Max"
                              ]
                            },
                            "valueType": "Layer"
                          },
                          "ifTargetFound": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                              "stackLimit": {
                                "operator": "Variables[0] (MagicMark_MaxCount_Max) || RETURN",
                                "displayLines": "MagicMark_MaxCount_Max",
                                "constants": [],
                                "variables": [
                                  "MagicMark_MaxCount_Max"
                                ]
                              },
                              "addStacksPerTrigger": 1
                            }
                          ],
                          "noTargetFound": [
                            {
                              "name": "Find New Target",
                              "from": {
                                "name": "Target Sequence",
                                "Sequence": [
                                  {
                                    "name": "Target Name",
                                    "target": "{{Enemy Team All}}"
                                  },
                                  {
                                    "name": "Target Filter",
                                    "conditions": {
                                      "name": "AND",
                                      "conditionList": [
                                        {
                                          "name": "Has Modifier",
                                          "target": {
                                            "name": "Target Name",
                                            "target": "{{Parameter Target}}"
                                          },
                                          "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]"
                                        },
                                        {
                                          "name": "Is Part Of",
                                          "of": {
                                            "name": "Target Name",
                                            "target": "{{Parameter Target}}"
                                          },
                                          "target": {
                                            "name": "Target Name",
                                            "target": "{{Modifier Holder}}"
                                          },
                                          "mustBeAlive2": true,
                                          "invertCondition": true
                                        }
                                      ]
                                    }
                                  },
                                  {
                                    "name": "Sort by Stat",
                                    "stat": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                                    "sortByHighest": true
                                  },
                                  {
                                    "name": "Sort by Monster Rank",
                                    "byHighest": true
                                  }
                                ]
                              },
                              "maxTargets": 1,
                              "conditions": {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "value1": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                                "compareType": "<",
                                "value2": {
                                  "operator": "Variables[0] (MagicMark_MaxCount) || RETURN",
                                  "displayLines": "MagicMark_MaxCount",
                                  "constants": [],
                                  "variables": [
                                    "MagicMark_MaxCount"
                                  ]
                                },
                                "valueType": "Layer"
                              },
                              "ifTargetFound": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                                  "stackLimit": {
                                    "operator": "Variables[0] (MagicMark_MaxCount_Max) || RETURN",
                                    "displayLines": "MagicMark_MaxCount_Max",
                                    "constants": [],
                                    "variables": [
                                      "MagicMark_MaxCount_Max"
                                    ]
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ]
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Target Name",
                                "target": "{{Enemy Team All}}"
                              },
                              {
                                "name": "Target Filter",
                                "conditions": {
                                  "name": "AND",
                                  "conditionList": [
                                    {
                                      "name": "Has Modifier",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]"
                                    },
                                    {
                                      "name": "Is Part Of",
                                      "of": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Modifier Holder}}"
                                      },
                                      "mustBeAlive2": true,
                                      "invertCondition": true
                                    }
                                  ]
                                }
                              },
                              {
                                "name": "Sort by Stat",
                                "stat": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                                "sortByHighest": true
                              },
                              {
                                "name": "Sort by Monster Rank",
                                "byHighest": true
                              }
                            ]
                          },
                          "maxTargets": 1,
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value1": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                            "compareType": "<",
                            "value2": {
                              "operator": "Variables[0] (MagicMark_MaxCount) || RETURN",
                              "displayLines": "MagicMark_MaxCount",
                              "constants": [],
                              "variables": [
                                "MagicMark_MaxCount"
                              ]
                            },
                            "valueType": "Layer"
                          },
                          "ifTargetFound": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                              "stackLimit": {
                                "operator": "Variables[0] (MagicMark_MaxCount_Max) || RETURN",
                                "displayLines": "MagicMark_MaxCount_Max",
                                "constants": [],
                                "variables": [
                                  "MagicMark_MaxCount_Max"
                                ]
                              },
                              "addStacksPerTrigger": 1
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
              "eventTrigger": "Entity Left Battle [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "MDF_Count",
                  "modifierName": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_TMP_VAL",
                  "value": 0
                },
                {
                  "name": "Looped Event",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_TMP_VAL",
                    "compareType": "<",
                    "value2": {
                      "operator": "Variables[0] (MDF_Count) || Variables[1] (MagicMark_Ratio) || MUL || RETURN",
                      "displayLines": "(MDF_Count * MagicMark_Ratio)",
                      "constants": [],
                      "variables": [
                        "MDF_Count",
                        "MagicMark_Ratio"
                      ]
                    }
                  },
                  "Event": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_TMP_VAL",
                      "value": {
                        "operator": "Variables[0] (_TMP_VAL) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(_TMP_VAL + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "_TMP_VAL"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Looped Event",
                  "maxLoops": {
                    "operator": "Variables[0] (_TMP_VAL) || RETURN",
                    "displayLines": "_TMP_VAL",
                    "constants": [],
                    "variables": [
                      "_TMP_VAL"
                    ]
                  },
                  "Event": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target Count SUM",
                        "target": {
                          "name": "Target Sequence",
                          "Sequence": [
                            {
                              "name": "Target Name",
                              "target": "{{Enemy Team All}}"
                            },
                            {
                              "name": "Target Filter",
                              "conditions": {
                                "name": "AND",
                                "conditionList": [
                                  {
                                    "name": "Has Modifier",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]"
                                  },
                                  {
                                    "name": "Is Part Of",
                                    "of": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Modifier Holder}}"
                                    },
                                    "mustBeAlive2": true,
                                    "invertCondition": true
                                  }
                                ]
                              }
                            }
                          ]
                        },
                        "conditions": {
                          "name": "Compare: Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "value1": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                          "compareType": "<",
                          "value2": {
                            "operator": "Variables[0] (MagicMark_MaxCount_Max) || RETURN",
                            "displayLines": "MagicMark_MaxCount_Max",
                            "constants": [],
                            "variables": [
                              "MagicMark_MaxCount_Max"
                            ]
                          },
                          "valueType": "Layer"
                        }
                      },
                      "passed": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Target Name",
                                "target": "{{Enemy Team All}}"
                              },
                              {
                                "name": "Target Filter",
                                "conditions": {
                                  "name": "AND",
                                  "conditionList": [
                                    {
                                      "name": "Has Modifier",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]"
                                    },
                                    {
                                      "name": "Is Part Of",
                                      "of": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Modifier Holder}}"
                                      },
                                      "mustBeAlive2": true,
                                      "invertCondition": true
                                    }
                                  ]
                                }
                              },
                              {
                                "name": "Sort by Stat",
                                "stat": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                                "sortByHighest": true
                              },
                              {
                                "name": "Sort by Monster Rank",
                                "byHighest": true
                              }
                            ]
                          },
                          "maxTargets": 1,
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value1": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                            "compareType": "<",
                            "value2": {
                              "operator": "Variables[0] (MagicMark_MaxCount_Max) || RETURN",
                              "displayLines": "MagicMark_MaxCount_Max",
                              "constants": [],
                              "variables": [
                                "MagicMark_MaxCount_Max"
                              ]
                            },
                            "valueType": "Layer"
                          },
                          "ifTargetFound": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                              "stackLimit": {
                                "operator": "Variables[0] (MagicMark_MaxCount_Max) || RETURN",
                                "displayLines": "MagicMark_MaxCount_Max",
                                "constants": [],
                                "variables": [
                                  "MagicMark_MaxCount_Max"
                                ]
                              },
                              "addStacksPerTrigger": 1
                            }
                          ],
                          "noTargetFound": [
                            {
                              "name": "Find New Target",
                              "from": {
                                "name": "Target Sequence",
                                "Sequence": [
                                  {
                                    "name": "Target Name",
                                    "target": "{{Enemy Team All}}"
                                  },
                                  {
                                    "name": "Target Filter",
                                    "conditions": {
                                      "name": "AND",
                                      "conditionList": [
                                        {
                                          "name": "Has Modifier",
                                          "target": {
                                            "name": "Target Name",
                                            "target": "{{Parameter Target}}"
                                          },
                                          "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]"
                                        },
                                        {
                                          "name": "Is Part Of",
                                          "of": {
                                            "name": "Target Name",
                                            "target": "{{Parameter Target}}"
                                          },
                                          "target": {
                                            "name": "Target Name",
                                            "target": "{{Modifier Holder}}"
                                          },
                                          "mustBeAlive2": true,
                                          "invertCondition": true
                                        }
                                      ]
                                    }
                                  },
                                  {
                                    "name": "Sort by Stat",
                                    "stat": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                                    "sortByHighest": true
                                  },
                                  {
                                    "name": "Sort by Monster Rank",
                                    "byHighest": true
                                  }
                                ]
                              },
                              "maxTargets": 1,
                              "conditions": {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "value1": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                                "compareType": "<",
                                "value2": {
                                  "operator": "Variables[0] (MagicMark_MaxCount) || RETURN",
                                  "displayLines": "MagicMark_MaxCount",
                                  "constants": [],
                                  "variables": [
                                    "MagicMark_MaxCount"
                                  ]
                                },
                                "valueType": "Layer"
                              },
                              "ifTargetFound": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                                  "stackLimit": {
                                    "operator": "Variables[0] (MagicMark_MaxCount_Max) || RETURN",
                                    "displayLines": "MagicMark_MaxCount_Max",
                                    "constants": [],
                                    "variables": [
                                      "MagicMark_MaxCount_Max"
                                    ]
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ]
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Target Name",
                                "target": "{{Enemy Team All}}"
                              },
                              {
                                "name": "Target Filter",
                                "conditions": {
                                  "name": "AND",
                                  "conditionList": [
                                    {
                                      "name": "Has Modifier",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]"
                                    },
                                    {
                                      "name": "Is Part Of",
                                      "of": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Modifier Holder}}"
                                      },
                                      "mustBeAlive2": true,
                                      "invertCondition": true
                                    }
                                  ]
                                }
                              },
                              {
                                "name": "Sort by Stat",
                                "stat": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                                "sortByHighest": true
                              },
                              {
                                "name": "Sort by Monster Rank",
                                "byHighest": true
                              }
                            ]
                          },
                          "maxTargets": 1,
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value1": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                            "compareType": "<",
                            "value2": {
                              "operator": "Variables[0] (MagicMark_MaxCount) || RETURN",
                              "displayLines": "MagicMark_MaxCount",
                              "constants": [],
                              "variables": [
                                "MagicMark_MaxCount"
                              ]
                            },
                            "valueType": "Layer"
                          },
                          "ifTargetFound": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                              "stackLimit": {
                                "operator": "Variables[0] (MagicMark_MaxCount_Max) || RETURN",
                                "displayLines": "MagicMark_MaxCount_Max",
                                "constants": [],
                                "variables": [
                                  "MagicMark_MaxCount_Max"
                                ]
                              },
                              "addStacksPerTrigger": 1
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
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "Toggle Skill Mark"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variable": "Orig_Layer",
                  "target2": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variable2": "MDF_Count_Burst"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"27955030\">TheHerta_Passive_MagicMark_Burst_Show</a>"
                  },
                  "passed": [
                    {
                      "name": "Toggle Skill Mark",
                      "toggle": true,
                      "skillTypesAllow": [],
                      "trigger": "Trigger_Normal"
                    },
                    {
                      "name": "Toggle Skill Mark",
                      "toggle": true,
                      "skillTypesAllow": [],
                      "trigger": "State_Normal"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "Orig_Layer",
                            "compareType": ">=",
                            "value2": 42
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Toggle Skill Mark",
                          "toggle": true,
                          "skillTypesAllow": [],
                          "trigger": "Level_Level3"
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Compare: Variable",
                                "value1": "Orig_Layer",
                                "compareType": ">=",
                                "value2": 21
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Toggle Skill Mark",
                              "toggle": true,
                              "skillTypesAllow": [],
                              "trigger": "Level_Level2"
                            }
                          ],
                          "failed": [
                            {
                              "name": "Toggle Skill Mark",
                              "toggle": true,
                              "skillTypesAllow": [],
                              "trigger": "Level_Level1"
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
                      "modifier": "<a class=\"gModGreen\" id=\"27955030\">TheHerta_Passive_MagicMark_Burst_Show</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-333672562\">TheHerta_Passive_MagicMark_Burst</a>"
                  },
                  "passed": [
                    {
                      "name": "Toggle Skill Mark",
                      "toggle": true,
                      "skillTypesAllow": [],
                      "trigger": "Trigger_Burst"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-333672562\">TheHerta_Passive_MagicMark_Burst</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "Toggle Skill Mark"
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: End"
            },
            {
              "eventTrigger": "Update Target Selected(UI) [Anyone]",
              "execute": [
                {
                  "name": "Toggle Skill Mark"
                },
                {
                  "name": "Define Custom Variable (VFX)",
                  "variableName": "MDF_Count_Show",
                  "value": 1
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]"
                  },
                  "ifTargetFound": [
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
                            "value1": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                            "compareType": ">",
                            "value2": {
                              "operator": "Variables[0] (MDF_Count) || RETURN",
                              "displayLines": "MDF_Count",
                              "constants": [],
                              "variables": [
                                "MDF_Count"
                              ]
                            },
                            "valueType": "Layer"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable (VFX)",
                          "variableName": "MDF_Count_Show",
                          "value": 0
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
                        "name": "Target is Unselectable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target Count SUM",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Player's Aim Target List}}"
                        },
                        "conditions": {
                          "name": "Compare: Target",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "target2": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          }
                        }
                      },
                      "passed": [
                        {
                          "name": "Toggle Skill Mark",
                          "toggle": true,
                          "skillTypesAllow": [
                            "Basic ATK",
                            "Ultimate",
                            "Skill",
                            "Memosprite"
                          ],
                          "trigger": "Trigger_Normal"
                        },
                        {
                          "name": "Toggle Skill Mark",
                          "toggle": true,
                          "skillTypesAllow": [
                            "Basic ATK",
                            "Ultimate",
                            "Skill",
                            "Memosprite"
                          ],
                          "trigger": "State_Normal"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "MDF_Count",
                            "compareType": ">=",
                            "value2": 42
                          },
                          "passed": [
                            {
                              "name": "Toggle Skill Mark",
                              "toggle": true,
                              "skillTypesAllow": [
                                "Basic ATK",
                                "Ultimate",
                                "Skill",
                                "Memosprite"
                              ],
                              "trigger": "Level_Level3"
                            }
                          ],
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "AND",
                                "conditionList": [
                                  {
                                    "name": "Compare: Variable",
                                    "value1": "MDF_Count_Show",
                                    "compareType": ">=",
                                    "value2": 1
                                  },
                                  {
                                    "name": "Compare: Variable",
                                    "value1": "MDF_Count",
                                    "compareType": ">=",
                                    "value2": 21
                                  }
                                ]
                              },
                              "passed": [
                                {
                                  "name": "Toggle Skill Mark",
                                  "toggle": true,
                                  "skillTypesAllow": [
                                    "Basic ATK",
                                    "Ultimate",
                                    "Skill",
                                    "Memosprite"
                                  ],
                                  "trigger": "Level_Level2"
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Toggle Skill Mark",
                                  "toggle": true,
                                  "skillTypesAllow": [
                                    "Basic ATK",
                                    "Ultimate",
                                    "Skill",
                                    "Memosprite"
                                  ],
                                  "trigger": "Level_Level1"
                                }
                              ]
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Toggle Skill Mark",
                          "toggle": true,
                          "skillTypesAllow": [
                            "Basic ATK",
                            "Ultimate",
                            "Skill",
                            "Memosprite"
                          ],
                          "trigger": "Trigger_Normal"
                        },
                        {
                          "name": "Toggle Skill Mark",
                          "toggle": true,
                          "skillTypesAllow": [
                            "Basic ATK",
                            "Ultimate",
                            "Skill",
                            "Memosprite"
                          ],
                          "trigger": "State_Normal"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "MDF_Count",
                            "compareType": ">=",
                            "value2": 42
                          },
                          "passed": [
                            {
                              "name": "Toggle Skill Mark",
                              "toggle": true,
                              "skillTypesAllow": [
                                "Basic ATK",
                                "Ultimate",
                                "Skill",
                                "Memosprite"
                              ],
                              "trigger": "Level_Level3"
                            }
                          ],
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "AND",
                                "conditionList": [
                                  {
                                    "name": "Compare: Variable",
                                    "value1": "MDF_Count_Show",
                                    "compareType": ">=",
                                    "value2": 1
                                  },
                                  {
                                    "name": "Compare: Variable",
                                    "value1": "MDF_Count",
                                    "compareType": ">=",
                                    "value2": 21
                                  }
                                ]
                              },
                              "passed": [
                                {
                                  "name": "Toggle Skill Mark",
                                  "toggle": true,
                                  "skillTypesAllow": [
                                    "Basic ATK",
                                    "Ultimate",
                                    "Skill",
                                    "Memosprite"
                                  ],
                                  "trigger": "Level_Level2"
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Toggle Skill Mark",
                                  "toggle": true,
                                  "skillTypesAllow": [
                                    "Basic ATK",
                                    "Ultimate",
                                    "Skill",
                                    "Memosprite"
                                  ],
                                  "trigger": "Level_Level1"
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
                      "name": "Toggle Skill Mark"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Unselectable Adjustment [Owner]: Start",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "MDF_Count",
                  "modifierName": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_TMP_VAL",
                  "value": 0
                },
                {
                  "name": "Looped Event",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_TMP_VAL",
                    "compareType": "<",
                    "value2": {
                      "operator": "Variables[0] (MDF_Count) || Variables[1] (MagicMark_Ratio) || MUL || RETURN",
                      "displayLines": "(MDF_Count * MagicMark_Ratio)",
                      "constants": [],
                      "variables": [
                        "MDF_Count",
                        "MagicMark_Ratio"
                      ]
                    }
                  },
                  "Event": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_TMP_VAL",
                      "value": {
                        "operator": "Variables[0] (_TMP_VAL) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(_TMP_VAL + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "_TMP_VAL"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Looped Event",
                  "maxLoops": {
                    "operator": "Variables[0] (_TMP_VAL) || RETURN",
                    "displayLines": "_TMP_VAL",
                    "constants": [],
                    "variables": [
                      "_TMP_VAL"
                    ]
                  },
                  "Event": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target Count SUM",
                        "target": {
                          "name": "Target Sequence",
                          "Sequence": [
                            {
                              "name": "Target Name",
                              "target": "{{Enemy Team All}}"
                            },
                            {
                              "name": "Target Filter",
                              "conditions": {
                                "name": "AND",
                                "conditionList": [
                                  {
                                    "name": "Has Modifier",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]"
                                  },
                                  {
                                    "name": "Is Part Of",
                                    "of": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Modifier Holder}}"
                                    },
                                    "mustBeAlive2": true,
                                    "invertCondition": true
                                  }
                                ]
                              }
                            }
                          ]
                        },
                        "conditions": {
                          "name": "Compare: Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "value1": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                          "compareType": "<",
                          "value2": {
                            "operator": "Variables[0] (MagicMark_MaxCount_Max) || RETURN",
                            "displayLines": "MagicMark_MaxCount_Max",
                            "constants": [],
                            "variables": [
                              "MagicMark_MaxCount_Max"
                            ]
                          },
                          "valueType": "Layer"
                        }
                      },
                      "passed": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Target Name",
                                "target": "{{Enemy Team All}}"
                              },
                              {
                                "name": "Target Filter",
                                "conditions": {
                                  "name": "AND",
                                  "conditionList": [
                                    {
                                      "name": "Has Modifier",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]"
                                    },
                                    {
                                      "name": "Is Part Of",
                                      "of": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Modifier Holder}}"
                                      },
                                      "mustBeAlive2": true,
                                      "invertCondition": true
                                    }
                                  ]
                                }
                              },
                              {
                                "name": "Sort by Stat",
                                "stat": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                                "sortByHighest": true
                              },
                              {
                                "name": "Sort by Monster Rank",
                                "byHighest": true
                              }
                            ]
                          },
                          "maxTargets": 1,
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value1": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                            "compareType": "<",
                            "value2": {
                              "operator": "Variables[0] (MagicMark_MaxCount_Max) || RETURN",
                              "displayLines": "MagicMark_MaxCount_Max",
                              "constants": [],
                              "variables": [
                                "MagicMark_MaxCount_Max"
                              ]
                            },
                            "valueType": "Layer"
                          },
                          "ifTargetFound": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                              "stackLimit": {
                                "operator": "Variables[0] (MagicMark_MaxCount_Max) || RETURN",
                                "displayLines": "MagicMark_MaxCount_Max",
                                "constants": [],
                                "variables": [
                                  "MagicMark_MaxCount_Max"
                                ]
                              },
                              "addStacksPerTrigger": 1
                            }
                          ],
                          "noTargetFound": [
                            {
                              "name": "Find New Target",
                              "from": {
                                "name": "Target Sequence",
                                "Sequence": [
                                  {
                                    "name": "Target Name",
                                    "target": "{{Enemy Team All}}"
                                  },
                                  {
                                    "name": "Target Filter",
                                    "conditions": {
                                      "name": "AND",
                                      "conditionList": [
                                        {
                                          "name": "Has Modifier",
                                          "target": {
                                            "name": "Target Name",
                                            "target": "{{Parameter Target}}"
                                          },
                                          "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]"
                                        },
                                        {
                                          "name": "Is Part Of",
                                          "of": {
                                            "name": "Target Name",
                                            "target": "{{Parameter Target}}"
                                          },
                                          "target": {
                                            "name": "Target Name",
                                            "target": "{{Modifier Holder}}"
                                          },
                                          "mustBeAlive2": true,
                                          "invertCondition": true
                                        }
                                      ]
                                    }
                                  },
                                  {
                                    "name": "Sort by Stat",
                                    "stat": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                                    "sortByHighest": true
                                  },
                                  {
                                    "name": "Sort by Monster Rank",
                                    "byHighest": true
                                  }
                                ]
                              },
                              "maxTargets": 1,
                              "conditions": {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "value1": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                                "compareType": "<",
                                "value2": {
                                  "operator": "Variables[0] (MagicMark_MaxCount) || RETURN",
                                  "displayLines": "MagicMark_MaxCount",
                                  "constants": [],
                                  "variables": [
                                    "MagicMark_MaxCount"
                                  ]
                                },
                                "valueType": "Layer"
                              },
                              "ifTargetFound": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                                  "stackLimit": {
                                    "operator": "Variables[0] (MagicMark_MaxCount_Max) || RETURN",
                                    "displayLines": "MagicMark_MaxCount_Max",
                                    "constants": [],
                                    "variables": [
                                      "MagicMark_MaxCount_Max"
                                    ]
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ]
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Target Name",
                                "target": "{{Enemy Team All}}"
                              },
                              {
                                "name": "Target Filter",
                                "conditions": {
                                  "name": "AND",
                                  "conditionList": [
                                    {
                                      "name": "Has Modifier",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]"
                                    },
                                    {
                                      "name": "Is Part Of",
                                      "of": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Modifier Holder}}"
                                      },
                                      "mustBeAlive2": true,
                                      "invertCondition": true
                                    }
                                  ]
                                }
                              },
                              {
                                "name": "Sort by Stat",
                                "stat": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                                "sortByHighest": true
                              },
                              {
                                "name": "Sort by Monster Rank",
                                "byHighest": true
                              }
                            ]
                          },
                          "maxTargets": 1,
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value1": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                            "compareType": "<",
                            "value2": {
                              "operator": "Variables[0] (MagicMark_MaxCount) || RETURN",
                              "displayLines": "MagicMark_MaxCount",
                              "constants": [],
                              "variables": [
                                "MagicMark_MaxCount"
                              ]
                            },
                            "valueType": "Layer"
                          },
                          "ifTargetFound": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                              "stackLimit": {
                                "operator": "Variables[0] (MagicMark_MaxCount_Max) || RETURN",
                                "displayLines": "MagicMark_MaxCount_Max",
                                "constants": [],
                                "variables": [
                                  "MagicMark_MaxCount_Max"
                                ]
                              },
                              "addStacksPerTrigger": 1
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [
            "MagicMark_MaxCount_Max",
            "MagicMark_MaxCount",
            "MagicMark_Ratio"
          ],
          "latentQueue": [
            "Orig_Layer"
          ],
          "description": "The Herta's Enhanced Skill will additionally deal DMG to all enemies based on the number of \"Interpretation\" stacks on the target.",
          "type": "Other",
          "statusName": "Interpretation"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__338292354\">TheHerta_Passive_MagicMark_42</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1353733302\">TheHerta_Passive_MagicMark_42_Delay</a>"
                },
                {
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variable": "Skill21_Layer",
                  "target2": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variable2": "_TMP_VAL"
                },
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityName": "Skill21",
                  "skillSlot": "Skill",
                  "enableSecondaryType": "ControlSkill02"
                },
                {
                  "name": "Update Ability Enhance Button",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "display": "Show",
                  "abilityName": "Skill"
                },
                {
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variable": "Skill21_Layer_Max",
                  "target2": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variable2": "_TMP_MAX"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_TMP_MAX",
                    "compareType": ">",
                    "value2": {
                      "operator": "Variables[0] (_TMP_VAL) || RETURN",
                      "displayLines": "_TMP_VAL",
                      "constants": [],
                      "variables": [
                        "_TMP_VAL"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Adjust Variable Value",
                      "adjustmentType": "Overwrite Value",
                      "variableName": "Skill21_Layer",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "operator": "Variables[0] (_TMP_VAL) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(_TMP_VAL + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "_TMP_VAL"
                        ]
                      }
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (_TMP_VAL) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(_TMP_VAL + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "_TMP_VAL"
                        ]
                      },
                      "priorState": "Active"
                    }
                  ]
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1985764523\">TheHerta_Trace03_ExtraDamage</a>[<span class=\"descriptionNumberColor\">Answer</span>]",
          "stackType": "ReplaceByCaster",
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": [
            "Skill21_Layer_Max"
          ],
          "description": "Each stack increases the multiplier of the DMG dealt by Ultimate by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Other",
          "statusName": "Answer"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-612445396\">TheHerta_SKL21</a>[<span class=\"descriptionNumberColor\">Inspiration</span>]",
          "counter": 1,
          "stackData": [],
          "latentQueue": [
            "Skill21_Layer_Max"
          ],
          "description": "Skill is enhanced to \"Hear Me Out.\"",
          "type": "Other",
          "statusName": "Inspiration"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__410301042\">TheHerta_Passive_MagicMark_Effect_Block_42</a>",
          "stackData": [],
          "latentQueue": [
            "Orig_Layer"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-850819741\">TheHerta_Passive_MagicMark_42_Block_42</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__426098232\">TheHerta_Passive_MagicMark_42_Block</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1353733302\">TheHerta_Passive_MagicMark_42_Delay</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-533235219\">TheHerta_Eidolon4_Bonus</a>[<span class=\"descriptionNumberColor\">The Sixteenth Key</span>]",
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
          "description": "SPD increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "statusName": "The Sixteenth Key"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1044334207\">TheHerta_Eidolon4_Listen</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Target is Pathstrider",
                          "path": [
                            "Erudition"
                          ],
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          }
                        }
                      }
                    ]
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-533235219\">TheHerta_Eidolon4_Bonus</a>[<span class=\"descriptionNumberColor\">The Sixteenth Key</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                      "displayLines": "MDF_PropertyValue",
                      "constants": [],
                      "variables": [
                        "MDF_PropertyValue"
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
                      "name": "IF",
                      "conditions": {
                        "name": "Target is Pathstrider",
                        "path": [
                          "Erudition"
                        ],
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-533235219\">TheHerta_Eidolon4_Bonus</a>[<span class=\"descriptionNumberColor\">The Sixteenth Key</span>]",
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                              "displayLines": "MDF_PropertyValue",
                              "constants": [],
                              "variables": [
                                "MDF_PropertyValue"
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
              "eventTrigger": "Character Path Change [Anyone]",
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
                      "name": "IF",
                      "conditions": {
                        "name": "Target is Pathstrider",
                        "path": [
                          "Erudition"
                        ],
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-533235219\">TheHerta_Eidolon4_Bonus</a>[<span class=\"descriptionNumberColor\">The Sixteenth Key</span>]",
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                              "displayLines": "MDF_PropertyValue",
                              "constants": [],
                              "variables": [
                                "MDF_PropertyValue"
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
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-533235219\">TheHerta_Eidolon4_Bonus</a>[<span class=\"descriptionNumberColor\">The Sixteenth Key</span>]"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": [
            "Skill21_Layer_Max"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1341843949\">TheHerta_PointB1_42</a>",
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
          "latentQueue": [
            "Orig_Layer"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-73718393\">TheHerta_Eidolon6_Bonus</a>",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceIcePEN</span>&nbsp;",
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
          "latentQueue": [
            "Skill21_Layer_Max"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1505063883\">TheHerta_Herta_CD</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ]
        }
      ],
      "references": []
    },
    "TheHerta_Functions": {
      "fileName": "TheHerta_Functions",
      "abilityType": "Char. Functions",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "length": 1,
      "parse": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1142002606\">TheHerta_SKL02</a>",
          "parse": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>[<span class=\"descriptionNumberColor\">Interpretation</span>]",
              "stackLimit": {
                "operator": "Variables[0] (DV_MarkMaxLayer) || RETURN",
                "displayLines": "DV_MarkMaxLayer",
                "constants": [],
                "variables": [
                  "DV_MarkMaxLayer"
                ]
              },
              "addStacksPerTrigger": {
                "operator": "Variables[0] (DV_MarkAddLayer) || RETURN",
                "displayLines": "DV_MarkAddLayer",
                "constants": [],
                "variables": [
                  "DV_MarkAddLayer"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "Starved Landscape of Vacua"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1985764523\">TheHerta_Trace03_ExtraDamage</a>[<span class=\"descriptionNumberColor\">Answer</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (_SkillTree03_MaxCount) || RETURN",
                    "displayLines": "_SkillTree03_MaxCount",
                    "constants": [],
                    "variables": [
                      "_SkillTree03_MaxCount"
                    ]
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (DV_MarkAddLayer) || RETURN",
                    "displayLines": "DV_MarkAddLayer",
                    "constants": [],
                    "variables": [
                      "DV_MarkAddLayer"
                    ]
                  }
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{ST and Blast}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-696979317\">TheHerta_SKL02_Mark_Pre</a>"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "operator": "Variables[0] (DV_DamageRatio1) || RETURN",
                  "displayLines": "DV_DamageRatio1",
                  "constants": [],
                  "variables": [
                    "DV_DamageRatio1"
                  ]
                },
                "Toughness": {
                  "displayLines": 15
                },
                "Tags": null,
                "hitOwner": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "EnergyGainPercent": "30%"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-696979317\">TheHerta_SKL02_Mark_Pre</a>",
                      "includePreDeath": true
                    }
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"1940766665\">TheHerta_SKL02_Mark</a>"
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "includeDyingTargets": true,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1940766665\">TheHerta_SKL02_Mark</a>",
                "includePreDeath": true
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Targets Adjacent to Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-696979317\">TheHerta_SKL02_Mark_Pre</a>"
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
              "includeDyingTargets": true,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1940766665\">TheHerta_SKL02_Mark</a>",
                "includePreDeath": true
              },
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variable": "DV_HitCount",
                  "target2": null,
                  "variable2": "DV_OnHitCount"
                },
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
                      "target": "{{Ability Target(ST)}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Ice",
                        "Damage": {
                          "operator": "Variables[0] (DV_DamageRatio1) || RETURN",
                          "displayLines": "DV_DamageRatio1",
                          "constants": [],
                          "variables": [
                            "DV_DamageRatio1"
                          ]
                        },
                        "Toughness": {
                          "displayLines": 15
                        },
                        "Tags": null,
                        "hitOwner": {
                          "name": "Target Name",
                          "target": "{{Ability Target(ST)}}"
                        },
                        "EnergyGainPercent": "30%"
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Ice",
                        "Damage": {
                          "operator": "Variables[0] (DV_DamageRatio1) || RETURN",
                          "displayLines": "DV_DamageRatio1",
                          "constants": [],
                          "variables": [
                            "DV_DamageRatio1"
                          ]
                        },
                        "Toughness": {
                          "displayLines": 15
                        },
                        "Tags": null,
                        "hitOwner": {
                          "name": "Target Name",
                          "target": "{{Ability Target(ST)}}"
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-696979317\">TheHerta_SKL02_Mark_Pre</a>",
                      "includePreDeath": true
                    }
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"1940766665\">TheHerta_SKL02_Mark</a>"
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "includeDyingTargets": true,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1940766665\">TheHerta_SKL02_Mark</a>",
                "includePreDeath": true
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Targets Adjacent to Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-696979317\">TheHerta_SKL02_Mark_Pre</a>"
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "maxTargets": 5,
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "DV_HitCount",
                  "value": 0
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
              "includeDyingTargets": true,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1940766665\">TheHerta_SKL02_Mark</a>",
                "includePreDeath": true
              },
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_MainTargetFinalDmgRatio",
                  "value": {
                    "operator": "Variables[0] (DV_DamageRatio1) || RETURN",
                    "displayLines": "DV_DamageRatio1",
                    "constants": [],
                    "variables": [
                      "DV_DamageRatio1"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_OtherTargetFinalDmgRatio",
                  "value": {
                    "operator": "Variables[0] (DV_DamageRatio1) || RETURN",
                    "displayLines": "DV_DamageRatio1",
                    "constants": [],
                    "variables": [
                      "DV_DamageRatio1"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variable": "DV_HitCount",
                  "target2": null,
                  "variable2": "DV_OnHitCount"
                },
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
                      "target": "{{Ability Target(ST)}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Ice",
                        "Damage": {
                          "operator": "Variables[0] (DV_MainTargetFinalDmgRatio) || RETURN",
                          "displayLines": "DV_MainTargetFinalDmgRatio",
                          "constants": [],
                          "variables": [
                            "DV_MainTargetFinalDmgRatio"
                          ]
                        },
                        "Toughness": {
                          "displayLines": 15
                        },
                        "Tags": null,
                        "hitOwner": {
                          "name": "Target Name",
                          "target": "{{Ability Target(ST)}}"
                        },
                        "EnergyGainPercent": "40%"
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Ice",
                        "Damage": {
                          "operator": "Variables[0] (DV_OtherTargetFinalDmgRatio) || RETURN",
                          "displayLines": "DV_OtherTargetFinalDmgRatio",
                          "constants": [],
                          "variables": [
                            "DV_OtherTargetFinalDmgRatio"
                          ]
                        },
                        "Toughness": {
                          "displayLines": 15
                        },
                        "Tags": null,
                        "hitOwner": {
                          "name": "Target Name",
                          "target": "{{Ability Target(ST)}}"
                        }
                      }
                    }
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