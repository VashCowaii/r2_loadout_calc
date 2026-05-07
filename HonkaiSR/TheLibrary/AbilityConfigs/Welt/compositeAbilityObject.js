const entityPageType = "char"
const compositeAbilityObject = {
  "fullCharacterName": "Welt",
  "trimCharacterName": "Welt",
  "abilityList": [
    "Welt_Advanced_Welt_Trace03",
    "Welt_Advanced_Welt_Trace02",
    "Welt_Advanced_Welt_Trace01",
    "Welt_Advanced_Welt_TechniqueInLevel",
    "Welt_Advanced_Welt_PassiveAbility01",
    "Welt_Advanced_Welt_Ability03_Part02",
    "Welt_Advanced_Welt_Ability03_Part01",
    "Welt_Advanced_Welt_Ability03_EnterReady",
    "Welt_Advanced_Welt_Ability02_Part02",
    "Welt_Advanced_Welt_Ability02_Part01",
    "Welt_Advanced_Welt_Ability01_Part02",
    "Welt_Advanced_Welt_Ability01_Part01",
    "Welt_Modifiers"
  ],
  "abilityObject": {
    "Welt_Advanced_Welt_Trace03": {
      "fileName": "Welt_Advanced_Welt_Trace03",
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
          "modifier": "<a class=\"gModGreen\" id=\"1794214494\">Advanced_Welt_Ultimate_ExtraSP</a>",
          "valuePerStack": {
            "MDF_AddValue": {
              "operator": "Variables[0] (5) || RETURN",
              "displayLines": "5",
              "constants": [],
              "variables": [
                5
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
          "modifier": "<a class=\"gModGreen\" id=\"84847530\">Advanced_Welt_Trace03_StatusProbabilityShow</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1794214494\">Advanced_Welt_Ultimate_ExtraSP</a>",
          "stackData": [
            "MDF_AddValue"
          ],
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": {
                        "operator": "Variables[0] (MDF_AddValue) || RETURN",
                        "displayLines": "MDF_AddValue",
                        "constants": [],
                        "variables": [
                          "MDF_AddValue"
                        ]
                      },
                      "isFixed": "* ERR"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Welt_Advanced_Welt_Trace02": {
      "fileName": "Welt_Advanced_Welt_Trace02",
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
          "modifier": "<a class=\"gModGreen\" id=\"671864885\">M_Welt_Trace02</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__671864885\">M_Welt_Trace02</a>",
          "execute": [
            {
              "eventTrigger": "Deal Damage End [Owner]: Hit",
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
                            "skillType": "Basic ATK"
                          },
                          {
                            "name": "Skill Type",
                            "skillType": "Skill"
                          }
                        ]
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Ability Target TAKING DMG}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1169637268\">Welt_Trace02_HitMark</a>",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Ability Target TAKING DMG}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1169637268\">Welt_Trace02_HitMark</a>"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Skill Type",
                        "skillType": "Basic ATK"
                      },
                      "passed": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Ability Target TAKING DMG}}"
                          },
                          "canPhase": true,
                          "AttackScaling": {
                            "DamageType": "Imaginary",
                            "Damage": {
                              "operator": "Variables[0] (1) || Variables[1] (0.8) || MUL || RETURN",
                              "displayLines": "(1 * 0.8)",
                              "constants": [],
                              "variables": [
                                1,
                                0.8
                              ]
                            },
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Additional DMG"
                          }
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Skill Type",
                        "skillType": "Skill"
                      },
                      "passed": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Ability Target TAKING DMG}}"
                          },
                          "canPhase": true,
                          "AttackScaling": {
                            "DamageType": "Imaginary",
                            "Damage": {
                              "operator": "Variables[0] (0.72) || Variables[1] (1.2) || MUL || RETURN",
                              "displayLines": "(0.72 * 1.2)",
                              "constants": [],
                              "variables": [
                                0.72,
                                1.2
                              ]
                            },
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Additional DMG"
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
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Welt_Advanced_Welt_Trace01": {
      "fileName": "Welt_Advanced_Welt_Trace01",
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
          "modifier": "<a class=\"gModGreen\" id=\"-951760977\">Advanced_Welt_Trace01Listen</a>"
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Welt_Advanced_Welt_TechniqueInLevel": {
      "fileName": "Welt_Advanced_Welt_TechniqueInLevel",
      "childAbilityList": [
        "Welt_Advanced_Welt_TechniqueInLevel"
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
          "modifier": "<a class=\"gModGreen\" id=\"-1756861226\">StageAbility_Maze_Welt_Modifier</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1756861226\">StageAbility_Maze_Welt_Modifier</a>",
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
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1997760414\">Standard_Confine</a>[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
                      "duration": 1,
                      "baseChance": {
                        "operator": "Variables[0] (1) || RETURN",
                        "displayLines": "1",
                        "constants": [],
                        "variables": [
                          1
                        ]
                      },
                      "immediateEffect": true,
                      "valuePerStack": {
                        "MDF_SpeedDownRatio": {
                          "operator": "Variables[0] (0.1) || RETURN",
                          "displayLines": "0.1",
                          "constants": [],
                          "variables": [
                            0.1
                          ]
                        },
                        "MDF_ActionDelayRatio": {
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
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Welt_Advanced_Welt_PassiveAbility01": {
      "fileName": "Welt_Advanced_Welt_PassiveAbility01",
      "childAbilityList": [
        "Welt_Advanced_Welt_PassiveAbility01"
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
          "modifier": "<a class=\"gModGreen\" id=\"1725603697\">Welt_Passive01Modifier</a>",
          "valuePerStack": {
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1621594543\">AbilityPreShowModifier</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-993379801\">AbilityPreShowModifier2</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1055171101\">WeightlessPreShowModifier</a>"
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
              "modifier": "<a class=\"gModGreen\" id=\"177845316\">Welt_Eidolon6_SlowCrit</a>"
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1725603697\">Welt_Passive01Modifier</a>",
          "stackData": [
            "MDF_LifeTime"
          ],
          "execute": [
            {
              "eventTrigger": "Deal Damage End [Owner]: Hit",
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
                        "name": "OR",
                        "conditionList": [
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
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Ability Target TAKING DMG}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-37395626\">Advanced_Welt_Weightless</a>[<span class=\"descriptionNumberColor\">Weightless</span>]"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Ability Target TAKING DMG}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1689462102\">Welt_Eidolon1_HitMark</a>",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Ability Target TAKING DMG}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1689462102\">Welt_Eidolon1_HitMark</a>"
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Ability Target TAKING DMG}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Imaginary",
                        "Damage": {
                          "operator": "Variables[0] (1.5) || Variables[1] (0.4) || MUL || RETURN",
                          "displayLines": "(1.5 * 0.4)",
                          "constants": [],
                          "variables": [
                            1.5,
                            0.4
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Additional DMG"
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Ability Target TAKING DMG}}"
                    },
                    "flagName": "STAT_SpeedDown"
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Ability Target TAKING DMG}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Imaginary",
                        "Damage": {
                          "operator": "Variables[0] (1) || RETURN",
                          "displayLines": "1",
                          "constants": [],
                          "variables": [
                            1
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Additional DMG"
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
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-37395626\">Advanced_Welt_Weightless</a>[<span class=\"descriptionNumberColor\">Weightless</span>]",
                      "duration": {
                        "operator": "Variables[0] (MDF_LifeTime) || RETURN",
                        "displayLines": "MDF_LifeTime",
                        "constants": [],
                        "variables": [
                          "MDF_LifeTime"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_WeightlessTriggerCount": {
                          "operator": "Variables[0] (8) || RETURN",
                          "displayLines": "8",
                          "constants": [],
                          "variables": [
                            8
                          ]
                        },
                        "MDF_ActionDelayRatio": {
                          "operator": "Variables[0] (0.04) || RETURN",
                          "displayLines": "0.04",
                          "constants": [],
                          "variables": [
                            0.04
                          ]
                        },
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.4) || RETURN",
                          "displayLines": "0.4",
                          "constants": [],
                          "variables": [
                            0.4
                          ]
                        },
                        "MDF_AllResDownValue": {
                          "operator": "Variables[0] (0.3) || RETURN",
                          "displayLines": "0.3",
                          "constants": [],
                          "variables": [
                            0.3
                          ]
                        },
                        "MDF_SpeedDownRatio": {
                          "operator": "Variables[0] (0.05) || RETURN",
                          "displayLines": "0.05",
                          "constants": [],
                          "variables": [
                            0.05
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
          "for": "<a class=\"gModGreen\" id=\"mod__1055171101\">WeightlessPreShowModifier</a>",
          "previewValue": {
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
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-37395626\">Advanced_Welt_Weightless</a>[<span class=\"descriptionNumberColor\">Weightless</span>]",
                    "invertCondition": true,
                    "casterFilter": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  }
                }
              ]
            },
            "skillType": [
              "Ultimate"
            ],
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": "-0.05(SPD Change)"
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-993379801\">AbilityPreShowModifier2</a>",
          "previewValue": {
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
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1997760414\">Standard_Confine</a>[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
                    "casterFilter": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  }
                }
              ]
            },
            "skillType": [
              "Ultimate"
            ],
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": {
                "operator": "Variables[0] (0.12) || RETURN",
                "displayLines": "0.12",
                "constants": [],
                "variables": [
                  0.12
                ]
              }
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1621594543\">AbilityPreShowModifier</a>",
          "previewValue": {
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
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1997760414\">Standard_Confine</a>[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
                      "casterFilter": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      }
                    }
                  }
                }
              ]
            },
            "skillType": [
              "Ultimate"
            ],
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": {
                "operator": "Variables[0] (0.12) || RETURN",
                "displayLines": "0.12",
                "constants": [],
                "variables": [
                  0.12
                ]
              }
            }
          }
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Welt_Advanced_Welt_Ability03_Part02": {
      "fileName": "Welt_Advanced_Welt_Ability03_Part02",
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
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (1.5) || RETURN",
              "displayLines": "1.5",
              "constants": [],
              "variables": [
                1.5
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
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (1.5) || RETURN",
              "displayLines": "1.5",
              "constants": [],
              "variables": [
                1.5
              ]
            },
            "HitSplit": 0.9,
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1997760414\">Standard_Confine</a>[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
          "duration": 1,
          "baseChance": {
            "operator": "Variables[0] (1) || RETURN",
            "displayLines": "1",
            "constants": [],
            "variables": [
              1
            ]
          },
          "immediateEffect": true,
          "valuePerStack": {
            "MDF_SpeedDownRatio": {
              "operator": "Variables[0] (0.1) || RETURN",
              "displayLines": "0.1",
              "constants": [],
              "variables": [
                0.1
              ]
            },
            "MDF_ActionDelayRatio": {
              "operator": "Variables[0] (0.12) || RETURN",
              "displayLines": "0.12",
              "constants": [],
              "variables": [
                0.12
              ]
            }
          }
        },
        "Trigger: Skip Death Handling",
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "Welt_Advanced_Welt_Ability03_Part01": {
      "fileName": "Welt_Advanced_Welt_Ability03_Part01",
      "childAbilityList": [
        "Welt_Advanced_Welt_Ability03_Camera",
        "Welt_Advanced_Welt_Ability03_EnterReady",
        "Welt_Advanced_Welt_Ability03_Part01",
        "Welt_Advanced_Welt_Ability03_Part02"
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
          "ability": "Advanced_Welt_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "Welt_Advanced_Welt_Ability03_EnterReady": {
      "fileName": "Welt_Advanced_Welt_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "Welt_Advanced_Welt_Ability02_Part02": {
      "fileName": "Welt_Advanced_Welt_Ability02_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-2102528117\">Advanced_Welt_Ability02_ListenModifier</a>"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (0.72) || RETURN",
              "displayLines": "0.72",
              "constants": [],
              "variables": [
                0.72
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
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"247970287\">Bounce_SelectTarget</a>",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "paramSequence": [
            "Select Random Target from List",
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "operator": "Variables[0] (0.72) || RETURN",
                  "displayLines": "0.72",
                  "constants": [],
                  "variables": [
                    0.72
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
            }
          ]
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"247970287\">Bounce_SelectTarget</a>",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "paramSequence": [
            "Select Random Target from List",
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "operator": "Variables[0] (0.72) || RETURN",
                  "displayLines": "0.72",
                  "constants": [],
                  "variables": [
                    0.72
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
            }
          ]
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"247970287\">Bounce_SelectTarget</a>",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "paramSequence": [
            "Select Random Target from List",
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "operator": "Variables[0] (0.72) || RETURN",
                  "displayLines": "0.72",
                  "constants": [],
                  "variables": [
                    0.72
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
            }
          ]
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"247970287\">Bounce_SelectTarget</a>",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "paramSequence": [
            "Select Random Target from List",
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "operator": "Variables[0] (0.72) || RETURN",
                  "displayLines": "0.72",
                  "constants": [],
                  "variables": [
                    0.72
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
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2102528117\">Advanced_Welt_Ability02_ListenModifier</a>"
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2102528117\">Advanced_Welt_Ability02_ListenModifier</a>",
          "execute": [
            {
              "eventTrigger": "Deal Damage End [Owner]: Hit",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Ability Target TAKING DMG}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-432037034\">Advanced_Welt_BPAbility_SpeedDown</a>[<span class=\"descriptionNumberColor\">Slow</span>]",
                  "duration": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] (0.75) || RETURN",
                    "displayLines": "0.75",
                    "constants": [],
                    "variables": [
                      0.75
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyRatio": {
                      "operator": "Variables[0] (0.1) || RETURN",
                      "displayLines": "0.1",
                      "constants": [],
                      "variables": [
                        0.1
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Welt_Advanced_Welt_Ability02_Part01": {
      "fileName": "Welt_Advanced_Welt_Ability02_Part01",
      "childAbilityList": [
        "Welt_Advanced_Welt_Ability02_Camera",
        "Welt_Advanced_Welt_Ability02_Part01",
        "Welt_Advanced_Welt_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": 6,
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
          "ability": "Advanced_Welt_Ability02_Part02",
          "isTrigger": true
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target",
        "subTarget": "All Other Team Members"
      }
    },
    "Welt_Advanced_Welt_Ability01_Part02": {
      "fileName": "Welt_Advanced_Welt_Ability01_Part02",
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
            "DamageType": "Imaginary",
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
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Welt_Advanced_Welt_Ability01_Part01": {
      "fileName": "Welt_Advanced_Welt_Ability01_Part01",
      "childAbilityList": [
        "Welt_Advanced_Welt_Ability01_Camera",
        "Welt_Advanced_Welt_Ability01_Part01",
        "Welt_Advanced_Welt_Ability01_Part02"
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
          "ability": "Advanced_Welt_Ability01_Part02",
          "isTrigger": true
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      }
    },
    "Welt_Modifiers": {
      "fileName": "Welt_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1660387869\">Advanced_Welt_Trace01_AllDamageTypeAddedRatio</a>[<span class=\"descriptionNumberColor\">Retribution</span>]",
          "stackType": "ReplaceByCaster",
          "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_PropertyRatioFinal</span>.",
          "type": "Buff",
          "effectName": "Retribution",
          "statusName": "Retribution",
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
                  "variableName": "MDF_PropertyRatioFinal",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyRatio) || Variables[1] (MDF_Layer) || MUL || RETURN",
                    "displayLines": "(MDF_PropertyRatio * MDF_Layer)",
                    "constants": [],
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyRatioFinal) || RETURN",
                    "displayLines": "MDF_PropertyRatioFinal",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyRatioFinal"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-951760977\">Advanced_Welt_Trace01Listen</a>",
          "execute": [
            {
              "eventTrigger": "Attack Start [Anyone]",
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
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target 2}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-37395626\">Advanced_Welt_Weightless</a>[<span class=\"descriptionNumberColor\">Weightless</span>]"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1660387869\">Advanced_Welt_Trace01_AllDamageTypeAddedRatio</a>[<span class=\"descriptionNumberColor\">Retribution</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "stackLimit": {
                        "operator": "Variables[0] (10) || RETURN",
                        "displayLines": "10",
                        "constants": [],
                        "variables": [
                          10
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyRatio": {
                          "operator": "Variables[0] (0.1) || RETURN",
                          "displayLines": "0.1",
                          "constants": [],
                          "variables": [
                            0.1
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
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "operator": "Variables[0] (30) || RETURN",
                        "displayLines": "30",
                        "constants": [],
                        "variables": [
                          30
                        ]
                      },
                      "isFixed": "* ERR"
                    }
                  ]
                }
              ],
              "priorityLevel": -80
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1169637268\">Welt_Trace02_HitMark</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Ability Use [Anyone]: End",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1689462102\">Welt_Eidolon1_HitMark</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Ability Use [Anyone]: End",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__177845316\">Welt_Eidolon6_SlowCrit</a>",
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
                        "name": "OR",
                        "conditionList": [
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
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Ability Target TAKING DMG}}"
                        },
                        "flagName": "STAT_SpeedDown"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateSUM</span>&nbsp;",
                          "value": "0.3"
                        },
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageSUM</span>&nbsp;",
                          "value": "0.6"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-37395626\">Advanced_Welt_Weightless</a>[<span class=\"descriptionNumberColor\">Weightless</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_DefenceDown",
            "STAT_SpeedDown",
            "RemoveWhenCasterDead"
          ],
          "stackData": [
            "MDF_WeightlessTriggerCount",
            "MDF_ActionDelayRatio",
            "MDF_PropertyValue",
            "MDF_AllResDownValue",
            "MDF_SpeedDownRatio"
          ],
          "description": "DEF decreases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>, SPD decreases by <span class=\"descriptionNumberColor\">MDF_SpeedDownRatio</span>. When receiving an attack, action is delayed by <span class=\"descriptionNumberColor\">MDF_ActionDelayRatio</span>. This effect can be triggered <span class=\"descriptionNumberColor\">MDF_WeightlessTriggerCount</span> more time(s).",
          "type": "Debuff",
          "effectName": "Weightless",
          "statusName": "Weightless",
          "duration": 1,
          "execute": [
            {
              "eventTrigger": "Turn [Action-End Phase]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_WeightlessTriggerCount",
                  "value": {
                    "operator": "Variables[0] (8) || RETURN",
                    "displayLines": "8",
                    "constants": [],
                    "variables": [
                      8
                    ]
                  }
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                    "displayLines": "(0 - MDF_PropertyValue)",
                    "constants": [
                      0
                    ],
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (MDF_SpeedDownRatio) || SUB || RETURN",
                    "displayLines": "(0 - MDF_SpeedDownRatio)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "MDF_SpeedDownRatio"
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
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAll</span>&nbsp;",
                      "value": {
                        "operator": "Constants[0] (0) || Variables[0] (MDF_AllResDownValue) || SUB || RETURN",
                        "displayLines": "(0 - MDF_AllResDownValue)",
                        "constants": [
                          0
                        ],
                        "variables": [
                          "MDF_AllResDownValue"
                        ]
                      }
                    },
                    {
                      "name": "Update Modifier Description",
                      "popUpText": "DEF decreases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>, SPD decreases by <span class=\"descriptionNumberColor\">MDF_SpeedDownRatio</span>, and All-Type RES decreases by <span class=\"descriptionNumberColor\">MDF_AllResDownValue</span>. When receiving an attack, action is delayed by <span class=\"descriptionNumberColor\">MDF_ActionDelayRatio</span>. This effect can be triggered <span class=\"descriptionNumberColor\">MDF_WeightlessTriggerCount</span> more time(s)."
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_WeightlessTriggerCount",
                        "compareType": ">",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-537679168\">ReduceActionDelay</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variables": {
                        "parameter[0]_NormalizedValue": {
                          "operator": "Constants[0] (0) || Variables[0] (0.04) || SUB || RETURN",
                          "displayLines": "(0 - 0.04)",
                          "constants": [
                            0
                          ],
                          "variables": [
                            0.04
                          ]
                        }
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_WeightlessTriggerCount",
                      "value": {
                        "operator": "Variables[0] (MDF_WeightlessTriggerCount) || Constants[0] (1) || SUB || RETURN",
                        "displayLines": "(MDF_WeightlessTriggerCount - 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "MDF_WeightlessTriggerCount"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1473917865\">Advanced_Welt_Trace03_AttackUp</a>[<span class=\"descriptionNumberColor\">Punishment</span>]",
          "stackType": "ReplaceByCaster",
          "description": "ATK increases by <span class=\"descriptionNumberColor\">MDF_AttackAddRatio</span>.",
          "type": "Buff",
          "effectName": "ATK Boost",
          "statusName": "Punishment",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "MDF_BaseAttack",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_AttackConvertValue",
                  "value": {
                    "operator": "Variables[0] (MDF_BaseAttack) || Variables[1] (MDF_AttackAddRatio) || MUL || RETURN",
                    "displayLines": "(MDF_BaseAttack * MDF_AttackAddRatio)",
                    "constants": [],
                    "variables": [
                      "MDF_BaseAttack",
                      "MDF_AttackAddRatio"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">AttackConverted</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AttackConvertValue) || RETURN",
                    "displayLines": "MDF_AttackConvertValue",
                    "constants": [],
                    "variables": [
                      "MDF_AttackConvertValue"
                    ]
                  },
                  "isRefresh": true
                }
              ]
            }
          ],
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "MDF_BaseAttack",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_AttackConvertValue",
                      "value": {
                        "operator": "Variables[0] (MDF_BaseAttack) || Variables[1] (MDF_AttackAddRatio) || MUL || RETURN",
                        "displayLines": "(MDF_BaseAttack * MDF_AttackAddRatio)",
                        "constants": [],
                        "variables": [
                          "MDF_BaseAttack",
                          "MDF_AttackAddRatio"
                        ]
                      }
                    },
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">AttackConverted</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (MDF_AttackConvertValue) || RETURN",
                        "displayLines": "MDF_AttackConvertValue",
                        "constants": [],
                        "variables": [
                          "MDF_AttackConvertValue"
                        ]
                      },
                      "isRefresh": true
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__84847530\">Advanced_Welt_Trace03_StatusProbabilityShow</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1110048549\">Advanced_Welt_Trace03_Sub</a>"
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__-1110048549\">Advanced_Welt_Trace03_Sub</a>",
              "parse": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "SkillTree_PointB3_StatusProbabilityValue",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRate</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "SkillTree_PointB3_StatusProbabilityValue",
                  "value": {
                    "operator": "Variables[0] (FLOOR) || Variables[1] (SkillTree_PointB3_StatusProbabilityValue) || Variables[2] (0.4) || SUB || Variables[3] (0.1) || DIV || PARAM_1 || FUNCTION || Variables[4] (0.2) || MUL || RETURN",
                    "displayLines": "(&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>(((SkillTree_PointB3_StatusProbabilityValue - 0.4) / 0.1)) * 0.2)",
                    "constants": [],
                    "variables": [
                      "FLOOR",
                      "SkillTree_PointB3_StatusProbabilityValue",
                      0.4,
                      0.1,
                      0.2
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "SkillTree_PointB3_StatusProbabilityValue",
                    "compareType": "<=",
                    "value2": 0,
                    "contextScope": "ContextCaster"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "SkillTree_PointB3_StatusProbabilityValue",
                      "value": 0
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1473917865\">Advanced_Welt_Trace03_AttackUp</a>[<span class=\"descriptionNumberColor\">Punishment</span>]"
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "SkillTree_PointB3_StatusProbabilityValue",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (0.8) || RETURN",
                          "displayLines": "0.8",
                          "constants": [],
                          "variables": [
                            0.8
                          ]
                        },
                        "contextScope": "ContextCaster"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "SkillTree_PointB3_StatusProbabilityValue",
                          "value": {
                            "operator": "Variables[0] (0.8) || RETURN",
                            "displayLines": "0.8",
                            "constants": [],
                            "variables": [
                              0.8
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1473917865\">Advanced_Welt_Trace03_AttackUp</a>[<span class=\"descriptionNumberColor\">Punishment</span>]",
                      "valuePerStack": {
                        "MDF_AttackAddRatio": {
                          "operator": "Variables[0] (SkillTree_PointB3_StatusProbabilityValue) || RETURN",
                          "displayLines": "SkillTree_PointB3_StatusProbabilityValue",
                          "constants": [],
                          "variables": [
                            "SkillTree_PointB3_StatusProbabilityValue"
                          ]
                        }
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
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRate</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1110048549\">Advanced_Welt_Trace03_Sub</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-432037034\">Advanced_Welt_BPAbility_SpeedDown</a>[<span class=\"descriptionNumberColor\">Slow</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_SpeedDown"
          ],
          "stackData": [
            "MDF_PropertyRatio"
          ],
          "description": "SPD decreases by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>.",
          "type": "Debuff",
          "effectName": "Slow",
          "statusName": "Slow",
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
                    "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyRatio) || SUB || RETURN",
                    "displayLines": "(0 - MDF_PropertyRatio)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "MDF_PropertyRatio"
                    ]
                  }
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