const compositeAbilityObject = {
  "fullCharacterName": "Arlan",
  "trimCharacterName": "Arlan",
  "abilityList": [
    "Arlan_Arlan_PassiveAbility03_Insert",
    "Arlan_Arlan_Trace03",
    "Arlan_Arlan_Trace02",
    "Arlan_Arlan_Trace01",
    "Arlan_Arlan_TechniqueInLevel",
    "Arlan_Arlan_PassiveAbility01",
    "Arlan_Arlan_Ability03_Part02",
    "Arlan_Arlan_Ability03_Part01",
    "Arlan_Arlan_Ability03_EnterReady",
    "Arlan_Arlan_Ability02_Part02",
    "Arlan_Arlan_Ability02_Part01",
    "Arlan_Arlan_Ability01_Part02",
    "Arlan_Arlan_Ability01_Part01",
    "Arlan_Modifiers"
  ],
  "abilityObject": {
    "Arlan_Arlan_PassiveAbility03_Insert": {
      "fileName": "Arlan_Arlan_PassiveAbility03_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "Arlan_MaxHPValue",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
        },
        {
          "name": "Set HP Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "setValue": {
            "operator": "Variables[0] (Arlan_MaxHPValue) || Variables[1] (0.25) || MUL || RETURN",
            "displayLines": "(Arlan_MaxHPValue * 0.25)",
            "constants": [],
            "variables": [
              "Arlan_MaxHPValue",
              0.25
            ]
          }
        },
        {
          "name": "Define Modifier Variable",
          "modifierName": "<a class=\"gModGreen\" id=\"-331301596\">Arlan_PassiveAbility_UnDead</a>[<span class=\"descriptionNumberColor\">Turn the Tables</span>]",
          "function": "Add"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "scope": "TargetEntity",
          "variableName": "_Arlan_00_PassiveSkill03_InsertController"
        }
      ],
      "references": []
    },
    "Arlan_Arlan_Trace03": {
      "fileName": "Arlan_Arlan_Trace03",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "value1": "CurrentHP%",
            "compareType": "<=",
            "value2": {
              "operator": "Variables[0] (0.5) || RETURN",
              "displayLines": "0.5",
              "constants": [],
              "variables": [
                0.5
              ]
            }
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1364993633\">BlockDamage_Count</a>[<span class=\"descriptionNumberColor\">Repel</span>]"
            }
          ]
        }
      ],
      "references": []
    },
    "Arlan_Arlan_Trace02": {
      "fileName": "Arlan_Arlan_Trace02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Stack Target Resistance",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "statName": "STAT_DOT",
          "value": {
            "operator": "Variables[0] (0.5) || RETURN",
            "displayLines": "0.5",
            "constants": [],
            "variables": [
              0.5
            ]
          }
        }
      ],
      "references": []
    },
    "Arlan_Arlan_Trace01": {
      "fileName": "Arlan_Arlan_Trace01",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1694658139\">M_Arlan_Tree01</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1694658139\">M_Arlan_Tree01</a>",
          "execute": [
            {
              "eventTrigger": "Got a Kill [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (0.3) || RETURN",
                      "displayLines": "0.3",
                      "constants": [],
                      "variables": [
                        0.3
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Heal",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "healPercent": {
                        "operator": "Variables[0] (0.2) || RETURN",
                        "displayLines": "0.2",
                        "constants": [],
                        "variables": [
                          0.2
                        ]
                      },
                      "formula": "Heal from Healer's MaxHP"
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
    "Arlan_Arlan_TechniqueInLevel": {
      "fileName": "Arlan_Arlan_TechniqueInLevel",
      "childAbilityList": [
        "Arlan_Arlan_TechniqueInLevel"
      ],
      "skillTrigger": "SkillMaze",
      "abilityType": "Technique",
      "energy": null,
      "toughnessList": [
        20,
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
          "modifier": "<a class=\"gModGreen\" id=\"-1043065373\">Arlan_TechniqueUsage_Proc</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1043065373\">Arlan_TechniqueUsage_Proc</a>",
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
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Thunder",
                        "Damage": {
                          "operator": "Variables[0] (0.8) || RETURN",
                          "displayLines": "0.8",
                          "constants": [],
                          "variables": [
                            0.8
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Technique",
                        "EnergyGainPercent": "100%"
                      }
                    }
                  ]
                },
                "Trigger: Attack End"
              ],
              "priorityLevel": -60
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Arlan_Arlan_PassiveAbility01": {
      "fileName": "Arlan_Arlan_PassiveAbility01",
      "childAbilityList": [
        "Arlan_Arlan_PassiveAbility01",
        "Arlan_Arlan_PassiveAbility03_Insert"
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
          "modifier": "<a class=\"gModGreen\" id=\"937498507\">M_Arlan_Passive</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"301994937\">M_Arlan_Ability02_LoseHPPreShow</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1890598575\">Arlan_Eidolon1</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1840265718\">Arlan_Eidolon6</a>"
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
              "modifier": "<a class=\"gModGreen\" id=\"-331301596\">Arlan_PassiveAbility_UnDead</a>[<span class=\"descriptionNumberColor\">Turn the Tables</span>]",
              "duration": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              }
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__301994937\">M_Arlan_Ability02_LoseHPPreShow</a>",
          "execute": [
            {
              "eventTrigger": "Update Target Selected(UI) [Owner]",
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
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "MDF_MaxHP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                    },
                    {
                      "name": "Update UI Preview",
                      "show": "Show",
                      "skillType": [
                        "Skill"
                      ],
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "previewType": null,
                      "previewValue": {
                        "operator": "Variables[0] (MDF_MaxHP) || Variables[1] (0.15) || MUL || RETURN",
                        "displayLines": "(MDF_MaxHP * 0.15)",
                        "constants": [],
                        "variables": [
                          "MDF_MaxHP",
                          0.15
                        ]
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
          "for": "<a class=\"gModGreen\" id=\"mod__-331301596\">Arlan_PassiveAbility_UnDead</a>[<span class=\"descriptionNumberColor\">Turn the Tables</span>]",
          "counter": 1,
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
                  "variableName": "_Arlan_00_PassiveSkill03_InsertController"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Arlan_00_PassiveSkill03Success"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Modifier_Arlan_00_P03_Ratio",
                  "value": {
                    "operator": "Variables[0] (0.25) || RETURN",
                    "displayLines": "0.25",
                    "constants": [],
                    "variables": [
                      0.25
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Waiting for Healing in Limbo",
              "execute": [
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
                        "value1": "_Arlan_00_PassiveSkill03_InsertController",
                        "compareType": "=",
                        "value2": 0,
                        "contextScope": "TargetEntity"
                      }
                    ]
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
                        "value1": "CurrentHP",
                        "compareType": "<=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "Arlan_00_PassiveSkill03Success",
                          "value": 1
                        },
                        {
                          "name": "Dispel Debuffs",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Arlan_ReviveCount",
                          "value": 0
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Arlan_PassiveAbility03_Insert",
                          "priorityTag": "AvatarReviveSelf",
                          "ownerState": "Mask_AliveOrLimbo",
                          "canHitNonTargets": true,
                          "allowAbilityTriggers": false
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "_Arlan_00_PassiveSkill03_InsertController",
                          "value": 1
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
          "latentQueue": [],
          "description": "When struck with a killing blow, instead of becoming downed, the character immediately restores HP equal to <span class=\"descriptionNumberColor\">Modifier_Arlan_00_P03_Ratio</span> of Max HP.",
          "type": "Buff",
          "statusName": "Turn the Tables"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__937498507\">M_Arlan_Passive</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "=",
                    "value2": 1
                  },
                  "failed": [
                    {
                      "name": "Define Custom Variable with HP%",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "_HPRatio"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1498391924\">Arlan_Passive_DamageUp</a>[<span class=\"descriptionNumberColor\">Pain and Anger</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.72) || Constants[0] (1) || Variables[1] (_HPRatio) || SUB || MUL || RETURN",
                          "displayLines": "(0.72 * (1 - _HPRatio))",
                          "constants": [
                            1
                          ],
                          "variables": [
                            0.72,
                            "_HPRatio"
                          ]
                        }
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
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1498391924\">Arlan_Passive_DamageUp</a>[<span class=\"descriptionNumberColor\">Pain and Anger</span>]"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable with HP%",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "_HPRatio"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1498391924\">Arlan_Passive_DamageUp</a>[<span class=\"descriptionNumberColor\">Pain and Anger</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.72) || Constants[0] (1) || Variables[1] (_HPRatio) || SUB || MUL || RETURN",
                          "displayLines": "(0.72 * (1 - _HPRatio))",
                          "constants": [
                            1
                          ],
                          "variables": [
                            0.72,
                            "_HPRatio"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1890598575\">Arlan_Eidolon1</a>",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Eidolon Activated",
                        "eidolon": 1
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Skill"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "CurrentHP%",
                        "compareType": "<=",
                        "value2": 0.5
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                          "value": "0.1"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1840265718\">Arlan_Eidolon6</a>",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Eidolon Activated",
                        "eidolon": 6
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Ultimate"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "CurrentHP%",
                        "compareType": "<=",
                        "value2": 0.5
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                          "value": "0.2"
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
    "Arlan_Arlan_Ability03_Part02": {
      "fileName": "Arlan_Arlan_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 2
          },
          "passed": [
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "dispelCount": 1,
              "dispelOrder": "LastAdded"
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] (3.2) || Constants[0] (0.3) || MUL || RETURN",
              "displayLines": "(3.2 * 0.3)",
              "constants": [
                0.3
              ],
              "variables": [
                3.2
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.3) || MUL || RETURN",
              "displayLines": "(ST Toughness Value * 0.3)",
              "constants": [
                0.3
              ],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "30%"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Eidolon Activated",
                "eidolon": 6
              },
              {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "value1": "CurrentHP%",
                "compareType": "<=",
                "value2": 0.5
              }
            ]
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Targets Adjacent(Blast)}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] (3.2) || Constants[0] (0.3) || MUL || RETURN",
                  "displayLines": "(3.2 * 0.3)",
                  "constants": [
                    0.3
                  ],
                  "variables": [
                    3.2
                  ]
                },
                "Toughness": {
                  "operator": "Variables[0] (Blast Toughness Value) || Constants[0] (0.3) || MUL || RETURN",
                  "displayLines": "(Blast Toughness Value * 0.3)",
                  "constants": [
                    0.3
                  ],
                  "variables": [
                    "Blast Toughness Value"
                  ]
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
                "target": "{{Ability Targets Adjacent(Blast)}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] (1.6) || Constants[0] (0.3) || MUL || RETURN",
                  "displayLines": "(1.6 * 0.3)",
                  "constants": [
                    0.3
                  ],
                  "variables": [
                    1.6
                  ]
                },
                "Toughness": {
                  "operator": "Variables[0] (Blast Toughness Value) || Constants[0] (0.3) || MUL || RETURN",
                  "displayLines": "(Blast Toughness Value * 0.3)",
                  "constants": [
                    0.3
                  ],
                  "variables": [
                    "Blast Toughness Value"
                  ]
                },
                "Tags": null
              }
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] (3.2) || Constants[0] (0.1) || MUL || RETURN",
              "displayLines": "(3.2 * 0.1)",
              "constants": [
                0.1
              ],
              "variables": [
                3.2
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.1) || MUL || RETURN",
              "displayLines": "(ST Toughness Value * 0.1)",
              "constants": [
                0.1
              ],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "10%"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Eidolon Activated",
                "eidolon": 6
              },
              {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "value1": "CurrentHP%",
                "compareType": "<=",
                "value2": 0.5
              }
            ]
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Targets Adjacent(Blast)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] (3.2) || Constants[0] (0.1) || MUL || RETURN",
                  "displayLines": "(3.2 * 0.1)",
                  "constants": [
                    0.1
                  ],
                  "variables": [
                    3.2
                  ]
                },
                "Toughness": {
                  "operator": "Variables[0] (Blast Toughness Value) || Constants[0] (0.1) || MUL || RETURN",
                  "displayLines": "(Blast Toughness Value * 0.1)",
                  "constants": [
                    0.1
                  ],
                  "variables": [
                    "Blast Toughness Value"
                  ]
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
                "target": "{{Ability Targets Adjacent(Blast)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] (1.6) || Constants[0] (0.1) || MUL || RETURN",
                  "displayLines": "(1.6 * 0.1)",
                  "constants": [
                    0.1
                  ],
                  "variables": [
                    1.6
                  ]
                },
                "Toughness": {
                  "operator": "Variables[0] (Blast Toughness Value) || Constants[0] (0.1) || MUL || RETURN",
                  "displayLines": "(Blast Toughness Value * 0.1)",
                  "constants": [
                    0.1
                  ],
                  "variables": [
                    "Blast Toughness Value"
                  ]
                },
                "Tags": null
              }
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] (3.2) || Constants[0] (0.6) || MUL || RETURN",
              "displayLines": "(3.2 * 0.6)",
              "constants": [
                0.6
              ],
              "variables": [
                3.2
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.6) || MUL || RETURN",
              "displayLines": "(ST Toughness Value * 0.6)",
              "constants": [
                0.6
              ],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "60%"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Eidolon Activated",
                "eidolon": 6
              },
              {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "value1": "CurrentHP%",
                "compareType": "<=",
                "value2": 0.5
              }
            ]
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Targets Adjacent(Blast)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] (3.2) || Constants[0] (0.6) || MUL || RETURN",
                  "displayLines": "(3.2 * 0.6)",
                  "constants": [
                    0.6
                  ],
                  "variables": [
                    3.2
                  ]
                },
                "Toughness": {
                  "operator": "Variables[0] (Blast Toughness Value) || Constants[0] (0.6) || MUL || RETURN",
                  "displayLines": "(Blast Toughness Value * 0.6)",
                  "constants": [
                    0.6
                  ],
                  "variables": [
                    "Blast Toughness Value"
                  ]
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
                "target": "{{Ability Targets Adjacent(Blast)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] (1.6) || Constants[0] (0.6) || MUL || RETURN",
                  "displayLines": "(1.6 * 0.6)",
                  "constants": [
                    0.6
                  ],
                  "variables": [
                    1.6
                  ]
                },
                "Toughness": {
                  "operator": "Variables[0] (Blast Toughness Value) || Constants[0] (0.6) || MUL || RETURN",
                  "displayLines": "(Blast Toughness Value * 0.6)",
                  "constants": [
                    0.6
                  ],
                  "variables": [
                    "Blast Toughness Value"
                  ]
                },
                "Tags": null
              }
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Skip Death Handling",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Arlan_Arlan_Ability03_Part01": {
      "fileName": "Arlan_Arlan_Ability03_Part01",
      "childAbilityList": [
        "Arlan_Arlan_Ability03_Camera",
        "Arlan_Arlan_Ability03_EnterReady",
        "Arlan_Arlan_Ability03_Part01",
        "Arlan_Arlan_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": 5,
      "toughnessList": [
        20,
        0,
        20
      ],
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Arlan_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "Arlan_Arlan_Ability03_EnterReady": {
      "fileName": "Arlan_Arlan_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Arlan_Arlan_Ability02_Part02": {
      "fileName": "Arlan_Arlan_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Consume",
          "consumeFrom": "MaxHP",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "consumePercent": {
            "operator": "Variables[0] (0.15) || RETURN",
            "displayLines": "0.15",
            "constants": [],
            "variables": [
              0.15
            ]
          },
          "consumeFloor": 1
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 2
          },
          "passed": [
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "dispelCount": 1,
              "dispelOrder": "LastAdded"
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] (2.4) || Constants[0] (1) || MUL || RETURN",
              "displayLines": "(2.4 * 1)",
              "constants": [
                1
              ],
              "variables": [
                2.4
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || Constants[0] (1) || MUL || RETURN",
              "displayLines": "(ST Toughness Value * 1)",
              "constants": [
                1
              ],
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
    "Arlan_Arlan_Ability02_Part01": {
      "fileName": "Arlan_Arlan_Ability02_Part01",
      "childAbilityList": [
        "Arlan_Arlan_Ability02_Camera",
        "Arlan_Arlan_Ability02_Part01",
        "Arlan_Arlan_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": 30,
      "toughnessList": [
        20,
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
          "ability": "Arlan_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "Arlan_Arlan_Ability01_Part02": {
      "fileName": "Arlan_Arlan_Ability01_Part02",
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
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] (1) || Constants[0] (0.3) || MUL || RETURN",
              "displayLines": "(1 * 0.3)",
              "constants": [
                0.3
              ],
              "variables": [
                1
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.3) || MUL || RETURN",
              "displayLines": "(ST Toughness Value * 0.3)",
              "constants": [
                0.3
              ],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "30%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] (1) || Constants[0] (0.7) || MUL || RETURN",
              "displayLines": "(1 * 0.7)",
              "constants": [
                0.7
              ],
              "variables": [
                1
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.7) || MUL || RETURN",
              "displayLines": "(ST Toughness Value * 0.7)",
              "constants": [
                0.7
              ],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "70%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Arlan_Arlan_Ability01_Part01": {
      "fileName": "Arlan_Arlan_Ability01_Part01",
      "childAbilityList": [
        "Arlan_Arlan_Ability01_Camera",
        "Arlan_Arlan_Ability01_Part01",
        "Arlan_Arlan_Ability01_Part02"
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
          "ability": "Arlan_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "Arlan_Modifiers": {
      "fileName": "Arlan_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1498391924\">Arlan_Passive_DamageUp</a>[<span class=\"descriptionNumberColor\">Pain and Anger</span>]",
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
          "latentQueue": [],
          "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "statusName": "Pain and Anger"
        }
      ],
      "references": []
    }
  }
}