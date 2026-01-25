const configAbility = {
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
          "modifier": "TheHerta_Eidolon2_PreShow",
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
      "modifier": "TheHerta_Passive_MagicMark_Caster"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "TheHerta_Passive"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "TheHerta_Passive_PreShow"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "TheHerta_Passive_PreShow_Ability21"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "TheHerta_Passive_PreShow_Ability21_All"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "TheHerta_MageNum"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "TheHerta_SKL21_Listen"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "TheHerta_ExtraMark"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "TheHerta_UltraBoost"
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
          "modifier": "TheHerta_Trace02",
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
          "modifier": "TheHerta_Eidolon4_Listen",
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
          "modifier": "TheHerta_Eidolon6_Bonus",
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
          "modifier": "TheHerta_Trace01",
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
      "for": "TheHerta_Trace02_Bonus[<span class=\"descriptionNumberColor\">Message From Beyond the Veil</span>]",
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
      "for": "TheHerta_Trace02_Mage",
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
      "for": "TheHerta_Trace02_CheckMage",
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
              "modifier": "TheHerta_Trace02_Bonus[<span class=\"descriptionNumberColor\">Message From Beyond the Veil</span>]",
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
                "team": "TeamLight"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "TheHerta_Trace02_Bonus[<span class=\"descriptionNumberColor\">Message From Beyond the Veil</span>]",
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
      "for": "TheHerta_Trace02",
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
                  "modifier": "TheHerta_Trace02_CheckMage",
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
                  "modifier": "TheHerta_PointB2_Listen"
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
      "for": "TheHerta_UltraBoost",
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
      "for": "TheHerta_Passive_MagicMark_Caster",
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
                "modifier": "TheHerta_Passive_MagicMark[<span class=\"descriptionNumberColor\">Interpretation</span>]",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "TheHerta_Passive_MagicMark[<span class=\"descriptionNumberColor\">Interpretation</span>]",
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
                      "modifier": "TheHerta_Trace03_ExtraDamage[<span class=\"descriptionNumberColor\">Answer</span>]",
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
              "modifier": "TheHerta_Passive_MagicMark_Unselectable"
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
                "team": "TeamDark"
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
                        "modifier": "TheHerta_Passive_MagicMark[<span class=\"descriptionNumberColor\">Interpretation</span>]"
                      },
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "TheHerta_Passive_MagicMark[<span class=\"descriptionNumberColor\">Interpretation</span>]",
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
                              "modifier": "TheHerta_Trace03_ExtraDamage[<span class=\"descriptionNumberColor\">Answer</span>]",
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
                      "modifier": "TheHerta_Passive_MagicMark_Unselectable"
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
      "for": "TheHerta_Passive_MagicMark_Unselectable",
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
              "modifier": "TheHerta_Passive_MagicMark[<span class=\"descriptionNumberColor\">Interpretation</span>]",
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
                  "modifier": "TheHerta_Trace03_ExtraDamage[<span class=\"descriptionNumberColor\">Answer</span>]",
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
              "modifier": "TheHerta_Passive_MagicMark_Unselectable"
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
      "for": "TheHerta_Passive",
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
          "modifier": "TheHerta_BPdamageNumber_UIconfig",
          "haloStatus": true
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "TheHerta_Trace01_Regen",
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
                    "team": "TeamDark"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "TheHerta_Trace01_Regen_CD",
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
                  "modifier": "TheHerta_Trace01_Regen_CD"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "TheHerta_Passive_MagicMark[<span class=\"descriptionNumberColor\">Interpretation</span>]",
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
                  "modifierName": "TheHerta_Passive_MagicMark[<span class=\"descriptionNumberColor\">Interpretation</span>]",
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
                      "modifier": "TheHerta_Trace03_ExtraDamage[<span class=\"descriptionNumberColor\">Answer</span>]",
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
              "modifier": "TheHerta_Trace01_Regen_CD"
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
                    "modifier": "TheHerta_MageNum_2"
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
              "modifier": "TheHerta_Trace01_Regen_CD"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "TheHerta_Trace01_Regen_CD",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "TheHerta_Trace01",
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
                  "modifier": "TheHerta_Trace01_Regen",
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
                  "modifier": "TheHerta_Trace01_Regen",
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
                "team": "TeamLight"
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
                      "modifier": "TheHerta_Trace01_Regen",
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
                      "modifier": "TheHerta_Trace01_Regen",
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
                "team": "TeamLight"
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
                      "modifier": "TheHerta_Trace01_Regen",
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
                      "modifier": "TheHerta_Trace01_Regen",
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
      "for": "TheHerta_MageNum_2"
    },
    {
      "name": "Modifier Construction",
      "for": "TheHerta_MageNum",
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
                  "modifier": "TheHerta_MageNum_2"
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
      "for": "TheHerta_Passive_PreShow_Ability21_All",
      "stackData": [],
      "latentQueue": [
        "Skill21_Layer_Max"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "TheHerta_Passive_PreShow_Ability21",
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
      "for": "TheHerta_Passive_PreShow",
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
      "for": "TheHerta_SKL21_Listen",
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
                  "modifier": "TheHerta_SKL21[<span class=\"descriptionNumberColor\">Inspiration</span>]"
                }
              ],
              "whenValueChanges": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "TheHerta_SKL21[<span class=\"descriptionNumberColor\">Inspiration</span>]"
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
                  "modifier": "TheHerta_SKL21[<span class=\"descriptionNumberColor\">Inspiration</span>]"
                },
                {
                  "name": "Define Modifier Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifierName": "TheHerta_SKL21[<span class=\"descriptionNumberColor\">Inspiration</span>]",
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
                  "modifier": "TheHerta_SKL21[<span class=\"descriptionNumberColor\">Inspiration</span>]"
                },
                {
                  "name": "Define Modifier Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifierName": "TheHerta_SKL21[<span class=\"descriptionNumberColor\">Inspiration</span>]",
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
      "for": "TheHerta_PointB2_Ally",
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
                              "modifier": "TheHerta_Passive_MagicMark[<span class=\"descriptionNumberColor\">Interpretation</span>]"
                            }
                          ]
                        }
                      },
                      {
                        "name": "Sort by Modifier Value",
                        "modifier": "TheHerta_Passive_MagicMark[<span class=\"descriptionNumberColor\">Interpretation</span>]",
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
                    "value1": "TheHerta_Passive_MagicMark[<span class=\"descriptionNumberColor\">Interpretation</span>]",
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
                      "modifier": "TheHerta_Passive_MagicMark[<span class=\"descriptionNumberColor\">Interpretation</span>]",
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
                          "modifier": "TheHerta_Trace03_ExtraDamage[<span class=\"descriptionNumberColor\">Answer</span>]",
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
                              "modifier": "TheHerta_Trace03_ExtraDamage[<span class=\"descriptionNumberColor\">Answer</span>]",
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
      "for": "TheHerta_PointB2_Listen",
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
              "modifier": "TheHerta_PointB2_Ally",
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
                          "team": "TeamLight"
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
              "modifier": "TheHerta_PointB2_Ally",
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
                "team": "TeamLight"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "TheHerta_PointB2_Ally",
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
                    "team": "TeamLight"
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
                  "modifier": "TheHerta_PointB2_Ally",
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
      "for": "TheHerta_Herta_Listen",
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
              "modifier": "TheHerta_Herta",
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
                  "modifier": "TheHerta_Herta",
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
      "for": "TheHerta_Herta",
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
              "modifier": "TheHerta_Herta_CD"
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
                    "modifier": "TheHerta_Herta_Listen"
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
                    "modifier": "TheHerta_Herta_CD"
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
      "for": "TheHerta_ExtraMark",
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
                      "modifier": "TheHerta_Passive_MagicMark[<span class=\"descriptionNumberColor\">Interpretation</span>]",
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
                          "modifier": "TheHerta_Trace03_ExtraDamage[<span class=\"descriptionNumberColor\">Answer</span>]",
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
}