const configAbility = {
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
      "modifier": "Fugue_PassiveAbility_OnListenBreakModifier"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Fugue_StancePreview"
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
          "modifier": "Fugue_PointB1_Listen"
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
          "modifier": "Fugue_PointB2_BpBack"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Fugue_PointB2_Sub[<span class=\"descriptionNumberColor\">Sylvan Enigma</span>]",
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
          "modifier": "Fugue_PointB3_Listen"
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
          "modifier": "Fugue_Eidolon2_Listen"
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
          "modifier": "Fugue_Eidolon2_PreShow"
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
          "modifier": "Fugue_Eidolon6[<span class=\"descriptionNumberColor\">Clairvoyance of Boom and Doom</span>]",
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
      "for": "Fugue_Eidolon6[<span class=\"descriptionNumberColor\">Clairvoyance of Boom and Doom</span>]",
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
      "for": "Fugue_Eidolon2_Listen",
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
                  "multi": "-0.24"
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
      "for": "Fugue_PointB3_Sub03",
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
                  "modifier": "Fugue_PointB3_Sub02",
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
                  "modifier": "Fugue_PointB3_Sub[<span class=\"descriptionNumberColor\">Phecda Primordia</span>]",
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
                  "modifier": "Fugue_PointB3_Sub02",
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
                  "modifier": "Fugue_PointB3_Sub[<span class=\"descriptionNumberColor\">Phecda Primordia</span>]",
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
      "for": "Fugue_PointB3_Sub02",
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
              "modifierName": "Fugue_PointB3_Sub02",
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
                "modifier": "Fugue_PointB3_Sub[<span class=\"descriptionNumberColor\">Phecda Primordia</span>]"
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
                      "modifier": "Fugue_PointB3_Sub02",
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
      "for": "Fugue_PointB3_Sub[<span class=\"descriptionNumberColor\">Phecda Primordia</span>]",
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
      "for": "Fugue_PointB3_Listen",
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
                    "modifier": "Fugue_PointB3_Sub02",
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
                  "modifier": "Fugue_PointB3_Sub02",
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
                  "modifier": "Fugue_PointB3_Sub03",
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
                "modifier": "Fugue_PointB3_Sub02",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Fugue_PointB3_Sub02",
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
              "modifier": "Fugue_PointB3_Sub03",
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
      "for": "Fugue_PointB2_Sub[<span class=\"descriptionNumberColor\">Sylvan Enigma</span>]",
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
      "for": "Fugue_PointB2_BpBack",
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
      "for": "Fugue_PointB1_Bonus_Preshow",
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
      "for": "Fugue_PointB1_Listen",
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
              "modifier": "Fugue_PointB1_Bonus_Preshow",
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
                  "modifier": "Fugue_PointB1_Bonus_Preshow",
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
                  "multi": "0.15"
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
      "for": "Fugue_PassiveAbility_OnListenBreakModifier",
      "stackData": [],
      "latentQueue": [],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members with Unselectables}}"
          },
          "modifier": "Fugue_PassiveAbility_ListenBreakDamage",
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
          "modifier": "Fugue_RedStance[<span class=\"descriptionNumberColor\">Cloudflame Luster</span>]",
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
          "modifier": "Fugue_PassiveAbility_ElementDamage",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_SuperBreakDamagePercentage": 0
          }
        }
      ]
    }
  ]
}