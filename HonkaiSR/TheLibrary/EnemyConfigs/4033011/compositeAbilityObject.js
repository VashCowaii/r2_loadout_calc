const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 4033011,
  "trimCharacterName": 4033011,
  "abilityList": [
    "4033011_Monster_XP_Elite01_02_LocalLegend_Ability06_Part02",
    "4033011_Monster_XP_Elite01_02_LocalLegend_Ability06_Part01",
    "4033011_Monster_XP_Elite01_02_LocalLegend_Ability05_Part02",
    "4033011_Monster_XP_Elite01_02_LocalLegend_Ability05_Part01",
    "4033011_Monster_XP_Elite01_02_LocalLegend_Ability03_Insert_Part02",
    "4033011_Monster_XP_Elite01_02_LocalLegend_Ability03_Insert_Part01",
    "4033011_Monster_XP_Elite01_02_LocalLegend_Ability03_Part02",
    "4033011_Monster_XP_Elite01_02_LocalLegend_Ability03_Part01",
    "4033011_Monster_XP_Elite01_02_LocalLegend_Ability02_Part02",
    "4033011_Monster_XP_Elite01_02_LocalLegend_Ability02_Part01",
    "4033011_Monster_XP_Elite01_02_LocalLegend_Ability01_Part02",
    "4033011_Monster_XP_Elite01_02_LocalLegend_Ability01_Part01",
    "4033011_Monster_XP_Elite01_02_LocalLegend_PassiveAbility_Insert",
    "4033011_Monster_XP_Elite01_02_LocalLegend_PassiveAbility01",
    "4033011_Modifiers",
    "4033011_BE_BattleEvents"
  ],
  "abilityObject": {
    "4033011_Monster_XP_Elite01_02_LocalLegend_Ability06_Part02": {
      "fileName": "4033011_Monster_XP_Elite01_02_LocalLegend_Ability06_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Sequence",
                  "Sequence": [
                    {
                      "name": "Target Name",
                      "target": "{{Caster's Minions}}"
                    },
                    {
                      "name": "Target Filter",
                      "conditions": {
                        "name": "Enemy ID",
                        "ID": {
                          "operator": "Variables[0] (SummonID01) || RETURN",
                          "displayLines": "SummonID01",
                          "constants": [],
                          "variables": [
                            "SummonID01"
                          ]
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null
                      }
                    }
                  ]
                },
                "compareType": "=",
                "value2": 0,
                "livingTargets": true
              },
              "passed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
                    "displayLines": "{[Skill06[0]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill06[0]]}"
                    ]
                  },
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Variables[0] (SummonID01) || RETURN",
                        "displayLines": "SummonID01",
                        "constants": [],
                        "variables": [
                          "SummonID01"
                        ]
                      },
                      "locationType": "AroundCasterOnEdge"
                    }
                  ]
                },
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "operator": "Variables[0] ({[Skill06[3]]}) || RETURN",
                    "displayLines": "{[Skill06[3]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill06[3]]}"
                    ]
                  },
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Variables[0] (SummonID01) || RETURN",
                        "displayLines": "SummonID01",
                        "constants": [],
                        "variables": [
                          "SummonID01"
                        ]
                      },
                      "locationType": "AroundCasterOnEdge"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count",
                    "target": {
                      "name": "Target Sequence",
                      "Sequence": [
                        {
                          "name": "Target Name",
                          "target": "{{Caster's Minions}}"
                        },
                        {
                          "name": "Target Filter",
                          "conditions": {
                            "name": "Enemy ID",
                            "ID": {
                              "operator": "Variables[0] (SummonID01) || RETURN",
                              "displayLines": "SummonID01",
                              "constants": [],
                              "variables": [
                                "SummonID01"
                              ]
                            },
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "characterName": null
                          }
                        }
                      ]
                    },
                    "compareType": "=",
                    "value2": 1,
                    "livingTargets": true
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": {
                        "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
                        "displayLines": "{[Skill06[0]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill06[0]]}"
                        ]
                      },
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Variables[0] (SummonID01) || RETURN",
                            "displayLines": "SummonID01",
                            "constants": [],
                            "variables": [
                              "SummonID01"
                            ]
                          },
                          "locationType": "AroundCasterOnEdge"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Sequence",
                  "Sequence": [
                    {
                      "name": "Target Name",
                      "target": "{{Caster's Minions}}"
                    },
                    {
                      "name": "Target Filter",
                      "conditions": {
                        "name": "Enemy ID",
                        "ID": {
                          "operator": "Variables[0] (SummonID02) || RETURN",
                          "displayLines": "SummonID02",
                          "constants": [],
                          "variables": [
                            "SummonID02"
                          ]
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null
                      }
                    }
                  ]
                },
                "compareType": "=",
                "value2": 0,
                "livingTargets": true
              },
              "passed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "operator": "Variables[0] ({[Skill06[1]]}) || RETURN",
                    "displayLines": "{[Skill06[1]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill06[1]]}"
                    ]
                  },
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Variables[0] (SummonID02) || RETURN",
                        "displayLines": "SummonID02",
                        "constants": [],
                        "variables": [
                          "SummonID02"
                        ]
                      },
                      "locationType": "BeforeCaster"
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Sequence",
                  "Sequence": [
                    {
                      "name": "Target Name",
                      "target": "{{Caster's Minions}}"
                    },
                    {
                      "name": "Target Filter",
                      "conditions": {
                        "name": "Enemy ID",
                        "ID": {
                          "operator": "Variables[0] (SummonID05) || RETURN",
                          "displayLines": "SummonID05",
                          "constants": [],
                          "variables": [
                            "SummonID05"
                          ]
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null
                      }
                    }
                  ]
                },
                "compareType": "=",
                "value2": 0,
                "livingTargets": true
              },
              "passed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "operator": "Variables[0] ({[Skill06[1]]}) || RETURN",
                    "displayLines": "{[Skill06[1]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill06[1]]}"
                    ]
                  },
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Variables[0] (SummonID05) || RETURN",
                        "displayLines": "SummonID05",
                        "constants": [],
                        "variables": [
                          "SummonID05"
                        ]
                      },
                      "locationType": "AfterCaster"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "FirstSummon",
              "value": 1
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Sequence",
                  "Sequence": [
                    {
                      "name": "Target Name",
                      "target": "{{Caster's Minions}}"
                    },
                    {
                      "name": "Target Filter",
                      "conditions": {
                        "name": "Enemy ID",
                        "ID": {
                          "operator": "Variables[0] (SummonID05) || RETURN",
                          "displayLines": "SummonID05",
                          "constants": [],
                          "variables": [
                            "SummonID05"
                          ]
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null
                      }
                    }
                  ]
                },
                "compareType": "=",
                "value2": 0,
                "livingTargets": true
              },
              "passed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
                    "displayLines": "{[Skill06[0]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill06[0]]}"
                    ]
                  },
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Variables[0] (SummonID05) || RETURN",
                        "displayLines": "SummonID05",
                        "constants": [],
                        "variables": [
                          "SummonID05"
                        ]
                      },
                      "locationType": "AroundCaster"
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Sequence",
                  "Sequence": [
                    {
                      "name": "Target Name",
                      "target": "{{Caster's Minions}}"
                    },
                    {
                      "name": "Target Filter",
                      "conditions": {
                        "name": "Enemy ID",
                        "ID": {
                          "operator": "Variables[0] (SummonID01) || RETURN",
                          "displayLines": "SummonID01",
                          "constants": [],
                          "variables": [
                            "SummonID01"
                          ]
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null
                      }
                    }
                  ]
                },
                "compareType": "=",
                "value2": 0,
                "livingTargets": true
              },
              "passed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
                    "displayLines": "{[Skill06[0]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill06[0]]}"
                    ]
                  },
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Variables[0] (SummonID01) || RETURN",
                        "displayLines": "SummonID01",
                        "constants": [],
                        "variables": [
                          "SummonID01"
                        ]
                      },
                      "locationType": "AroundCasterOnEdge"
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Sequence",
                  "Sequence": [
                    {
                      "name": "Target Name",
                      "target": "{{Caster's Minions}}"
                    },
                    {
                      "name": "Target Filter",
                      "conditions": {
                        "name": "Enemy ID",
                        "ID": {
                          "operator": "Variables[0] (SummonID03) || RETURN",
                          "displayLines": "SummonID03",
                          "constants": [],
                          "variables": [
                            "SummonID03"
                          ]
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null
                      }
                    }
                  ]
                },
                "compareType": "=",
                "value2": 0,
                "livingTargets": true
              },
              "passed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "operator": "Variables[0] ({[Skill06[1]]}) || RETURN",
                    "displayLines": "{[Skill06[1]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill06[1]]}"
                    ]
                  },
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Variables[0] (SummonID03) || RETURN",
                        "displayLines": "SummonID03",
                        "constants": [],
                        "variables": [
                          "SummonID03"
                        ]
                      },
                      "locationType": "BeforeCaster"
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Sequence",
                  "Sequence": [
                    {
                      "name": "Target Name",
                      "target": "{{Caster's Minions}}"
                    },
                    {
                      "name": "Target Filter",
                      "conditions": {
                        "name": "Enemy ID",
                        "ID": {
                          "operator": "Variables[0] (SummonID02) || RETURN",
                          "displayLines": "SummonID02",
                          "constants": [],
                          "variables": [
                            "SummonID02"
                          ]
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null
                      }
                    }
                  ]
                },
                "compareType": "=",
                "value2": 0,
                "livingTargets": true
              },
              "passed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "operator": "Variables[0] ({[Skill06[2]]}) || RETURN",
                    "displayLines": "{[Skill06[2]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill06[2]]}"
                    ]
                  },
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Variables[0] (SummonID02) || RETURN",
                        "displayLines": "SummonID02",
                        "constants": [],
                        "variables": [
                          "SummonID02"
                        ]
                      },
                      "locationType": "AroundCasterOnEdge"
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
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "conditions": {
            "name": "Enemy ID",
            "ID": {
              "operator": "Variables[0] (SummonID01) || RETURN",
              "displayLines": "SummonID01",
              "constants": [],
              "variables": [
                "SummonID01"
              ]
            },
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "conditions": {
            "name": "Enemy ID",
            "ID": {
              "operator": "Variables[0] (SummonID02) || RETURN",
              "displayLines": "SummonID02",
              "constants": [],
              "variables": [
                "SummonID02"
              ]
            },
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "conditions": {
            "name": "Enemy ID",
            "ID": {
              "operator": "Variables[0] (SummonID03) || RETURN",
              "displayLines": "SummonID03",
              "constants": [],
              "variables": [
                "SummonID03"
              ]
            },
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "conditions": {
            "name": "Enemy ID",
            "ID": {
              "operator": "Variables[0] (SummonID05) || RETURN",
              "displayLines": "SummonID05",
              "constants": [],
              "variables": [
                "SummonID05"
              ]
            },
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null
          }
        },
        {
          "name": "Add Battle Event",
          "eventID": 20036,
          "variables": null,
          "whenCreated": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"416601415\">Modifier_XP_Elite01_02_LocalLegend_Ability03BattleEvent</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "set": {
                    "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
                    "displayLines": "{[Skill03[0]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill03[0]]}"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "set": {
                    "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
                    "displayLines": "{[Skill03[2]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill03[2]]}"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "variableName": "MDF_CharacterCount",
          "livingTargets": true
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"471853411\">Standard_Monster_AllDamageReduce</a>[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (_Basic_AllDamageReduceRatio) || RETURN",
              "displayLines": "_Basic_AllDamageReduceRatio",
              "constants": [],
              "variables": [
                "_Basic_AllDamageReduceRatio"
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
          "modifier": "<a class=\"gModGreen\" id=\"-1258915271\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood_LockHP</a>"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4033011_Monster_XP_Elite01_02_LocalLegend_Ability06_Part01": {
      "fileName": "4033011_Monster_XP_Elite01_02_LocalLegend_Ability06_Part01",
      "childAbilityList": [
        "4033011_Monster_XP_Elite01_02_LocalLegend_Ability06_Part01",
        "4033011_Monster_XP_Elite01_02_LocalLegend_Ability06_Part02",
        "4033011_Monster_XP_Elite01_02_LocalLegend_Ability06_Camera"
      ],
      "skillTrigger": "Skill06",
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
          "ability": "Monster_XP_Elite01_02_LocalLegend_Ability06_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4033011_Monster_XP_Elite01_02_LocalLegend_Ability05_Part02": {
      "fileName": "4033011_Monster_XP_Elite01_02_LocalLegend_Ability05_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
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
              "variableName": "_TargetMaxHp",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": {
                  "name": "Damage Type Source",
                  "sourceType": {}
                },
                "DamageFlat": {
                  "operator": "Variables[0] ({[Skill05[0]]}) || Variables[1] (_TargetMaxHp) || MUL || RETURN",
                  "displayLines": "({[Skill05[0]]} * _TargetMaxHp)",
                  "constants": [],
                  "variables": [
                    "{[Skill05[0]]}",
                    "_TargetMaxHp"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "attackType": "True DMG",
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
    "4033011_Monster_XP_Elite01_02_LocalLegend_Ability05_Part01": {
      "fileName": "4033011_Monster_XP_Elite01_02_LocalLegend_Ability05_Part01",
      "childAbilityList": [
        "4033011_Monster_XP_Elite01_02_LocalLegend_Ability05_Part01",
        "4033011_Monster_XP_Elite01_02_LocalLegend_Ability05_Part02",
        "4033011_Monster_XP_Elite01_02_Ability05_Camera"
      ],
      "skillTrigger": "Skill05",
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
          "ability": "Monster_XP_Elite01_02_LocalLegend_Ability05_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4033011_Monster_XP_Elite01_02_LocalLegend_Ability03_Insert_Part02": {
      "fileName": "4033011_Monster_XP_Elite01_02_LocalLegend_Ability03_Insert_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "flagName": "Break"
          },
          "passed": [
            {
              "name": "Exit Broken-State",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              }
            },
            {
              "name": "Reset Toughness",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1771764709\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood</a>[<span class=\"descriptionNumberColor\">HP Overload</span>]"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"990819121\">Monster_XP_Elite01_02_LocalLegend_PartController_LockHP</a>",
                "invertCondition": true
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_TargetNegativeHp",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPNegative</span>&nbsp;",
              "context": "ContextAbility"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1258915271\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood_LockHP</a>"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": {
                  "name": "Damage Type Source",
                  "sourceType": {}
                },
                "DamageFlat": {
                  "operator": "Variables[0] (CEIL) || Variables[1] (_TargetNegativeHp) || PARAM_1 || FUNCTION || RETURN",
                  "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">CEIL</span>(_TargetNegativeHp)",
                  "constants": [],
                  "variables": [
                    "CEIL",
                    "_TargetNegativeHp"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "attackType": "True DMG"
              }
            }
          ]
        },
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
            "modifier": "<a class=\"gModGreen\" id=\"1177581439\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood_Avatar</a>[<span class=\"descriptionNumberColor\">HP Overload</span>]"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_TargetNegativeHp",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPNegative</span>&nbsp;",
              "context": "ContextAbility"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1258915271\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood_LockHP</a>"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": {
                  "name": "Damage Type Source",
                  "sourceType": {}
                },
                "DamageFlat": {
                  "operator": "Variables[0] (CEIL) || Variables[1] (_TargetNegativeHp) || PARAM_1 || FUNCTION || RETURN",
                  "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">CEIL</span>(_TargetNegativeHp)",
                  "constants": [],
                  "variables": [
                    "CEIL",
                    "_TargetNegativeHp"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "attackType": "True DMG"
              }
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "variableName": "_MonsterChangeCnt02",
          "context": "TargetEntity",
          "value": 1
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1258915271\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood_LockHP</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1771764709\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood</a>[<span class=\"descriptionNumberColor\">HP Overload</span>]"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Stage ID",
                    "ID": 4260030,
                    "compareType": ">=",
                    "characterName": "Corrupting Shadowfiend: Torrential Rotbringer"
                  },
                  {
                    "name": "Stage ID",
                    "ID": 4260036,
                    "compareType": "<=",
                    "characterName": "Corrupting Shadowfiend: Torrential Rotbringer"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "_BattleTarget_LocalLegend_S3_1_Check",
                  "value": 1
                }
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1258915271\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood_LockHP</a>"
            },
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "silent": true
            },
            {
              "name": "Set Enemy Phase",
              "mode": "Inc"
            },
            {
              "name": "Inject Ability Use",
              "abilityName": "Monster_XP_Elite01_02_LocalLegend_PassiveAbility_Insert",
              "priorityTag": "MonsterChangePhase",
              "ownerState": "Mask_AliveOrLimbo",
              "targetState": "Mask_AliveOrLimbo",
              "canHitNonTargets": true,
              "showInActionOrder": true,
              "allowAbilityTriggers": false
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Name",
              "target": "{{Enemy Team All}}"
            },
            "compareType": "<=",
            "value2": 1,
            "livingTargets": true
          },
          "passed": [
            {
              "name": "Action Advance/Delay",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "advanceType": "Set",
              "add": {
                "operator": "Variables[0] (_BattleTarget_LocalLegend_S3_1_Check) || RETURN",
                "displayLines": "_BattleTarget_LocalLegend_S3_1_Check",
                "constants": [],
                "variables": [
                  "_BattleTarget_LocalLegend_S3_1_Check"
                ]
              }
            }
          ]
        }
      ],
      "references": []
    },
    "4033011_Monster_XP_Elite01_02_LocalLegend_Ability03_Insert_Part01": {
      "fileName": "4033011_Monster_XP_Elite01_02_LocalLegend_Ability03_Insert_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_XP_Elite01_02_LocalLegend_Ability03_Insert_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4033011_Monster_XP_Elite01_02_LocalLegend_Ability03_Part02": {
      "fileName": "4033011_Monster_XP_Elite01_02_LocalLegend_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Heartmarrow Corrosion"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1808493640\">Enemy_Standard_LocalLegend_Init_LockHp</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"449361701\">Enemy_Standard_LocalLegend_Init_MuteBreak</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1291270123\">Monster_XP_Elite01_02_LocalLegend_Ability03_Status</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1258915271\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood_LockHP</a>"
        },
        {
          "name": "Add Battle Event",
          "eventID": 20036,
          "variables": null,
          "whenCreated": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"416601415\">Modifier_XP_Elite01_02_LocalLegend_Ability03BattleEvent</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "set": {
                    "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
                    "displayLines": "{[Skill03[0]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill03[0]]}"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "set": {
                    "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
                    "displayLines": "{[Skill03[2]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill03[2]]}"
                    ]
                  }
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "4033011_Monster_XP_Elite01_02_LocalLegend_Ability03_Part01": {
      "fileName": "4033011_Monster_XP_Elite01_02_LocalLegend_Ability03_Part01",
      "childAbilityList": [
        "4033011_Monster_XP_Elite01_02_LocalLegend_Ability03_Part01",
        "4033011_Monster_XP_Elite01_02_LocalLegend_Ability03_Part02",
        "4033011_Monster_XP_Elite01_02_LocalLegend_Ability03_Camera"
      ],
      "skillTrigger": "Skill03",
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
          "ability": "Monster_XP_Elite01_02_LocalLegend_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4033011_Monster_XP_Elite01_02_LocalLegend_Ability02_Part02": {
      "fileName": "4033011_Monster_XP_Elite01_02_LocalLegend_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Define Custom Variable",
          "scope": "ContextAbility",
          "variableName": "FireBallNum",
          "value": 1
        },
        {
          "name": "Trigger Multiple Functions",
          "functionList": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1380139364\">Monster_XP_Elite01_02_Ability02_Ball_ParallelTargetFinding</a>",
              "delayInterval": 0.2537,
              "parallelCount": 5
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "functions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1380139364\">Monster_XP_Elite01_02_Ability02_Ball_ParallelTargetFinding</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "FireBallNum",
                "compareType": "=",
                "value2": 1,
                "contextScope": "ContextAbility"
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemies by Aggro OR Random}}"
                  },
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Trigger Multiple Functions",
                      "functionList": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"1983891597\">Monster_XP_Elite01_02_Ability02_Ball_Fire</a>"
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
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Trigger Multiple Functions",
                      "functionList": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"1983891597\">Monster_XP_Elite01_02_Ability02_Ball_Fire</a>"
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
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1983891597\">Monster_XP_Elite01_02_Ability02_Ball_Fire</a>",
          "parse": [
            {
              "name": "SWITCH",
              "switchValue": {
                "operator": "Variables[0] (SummonType) || RETURN",
                "displayLines": "SummonType",
                "constants": [],
                "variables": [
                  "SummonType"
                ]
              },
              "caseEvents": [
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 1
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 2
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 3
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 4
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 5
                }
              ],
              "defaultEvents": []
            },
            {
              "name": "Shot Fired"
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "FireBallNum",
              "context": "ContextAbility",
              "value": 1,
              "max": 100
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "CurrentHP%",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "_TargetMaxHp",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "_TargetCurrentHp",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill02[0]]}) || Constants[0] (1) || Variables[1] (_TargetCurrentHp) || Variables[2] (_TargetMaxHp) || DIV || Variables[3] ({[Skill02[1]]}) || MUL || ADD || MUL || RETURN",
                      "displayLines": "({[Skill02[0]]} * (1 + ((_TargetCurrentHp / _TargetMaxHp) * {[Skill02[1]]})))",
                      "constants": [
                        1
                      ],
                      "variables": [
                        "{[Skill02[0]]}",
                        "_TargetCurrentHp",
                        "_TargetMaxHp",
                        "{[Skill02[1]]}"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "EnergyGainPercent": "100%"
                  }
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "4033011_Monster_XP_Elite01_02_LocalLegend_Ability02_Part01": {
      "fileName": "4033011_Monster_XP_Elite01_02_LocalLegend_Ability02_Part01",
      "childAbilityList": [
        "4033011_Monster_XP_Elite01_02_LocalLegend_Ability02_Part01",
        "4033011_Monster_XP_Elite01_02_LocalLegend_Ability02_Part02",
        "4033011_Monster_XP_Elite01_02_Ability02_Camera"
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
          "ability": "Monster_XP_Elite01_02_LocalLegend_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4033011_Monster_XP_Elite01_02_LocalLegend_Ability01_Part02": {
      "fileName": "4033011_Monster_XP_Elite01_02_LocalLegend_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "variableName": "_TargetMaxHp",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "variableName": "_TargetCurrentHp",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
        },
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Projectile's Target}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] ({[Skill01[0]]}) || Constants[0] (1) || Variables[1] (_TargetCurrentHp) || Variables[2] (_TargetMaxHp) || DIV || Variables[3] ({[Skill01[1]]}) || MUL || ADD || MUL || RETURN",
                  "displayLines": "({[Skill01[0]]} * (1 + ((_TargetCurrentHp / _TargetMaxHp) * {[Skill01[1]]})))",
                  "constants": [
                    1
                  ],
                  "variables": [
                    "{[Skill01[0]]}",
                    "_TargetCurrentHp",
                    "_TargetMaxHp",
                    "{[Skill01[1]]}"
                  ]
                },
                "Toughness": null,
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
    "4033011_Monster_XP_Elite01_02_LocalLegend_Ability01_Part01": {
      "fileName": "4033011_Monster_XP_Elite01_02_LocalLegend_Ability01_Part01",
      "childAbilityList": [
        "4033011_Monster_XP_Elite01_02_LocalLegend_Ability01_Part01",
        "4033011_Monster_XP_Elite01_02_LocalLegend_Ability01_Part02",
        "4033011_Monster_XP_Elite01_02_Ability01_Camera"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_XP_Elite01_02_LocalLegend_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4033011_Monster_XP_Elite01_02_LocalLegend_PassiveAbility_Insert": {
      "fileName": "4033011_Monster_XP_Elite01_02_LocalLegend_PassiveAbility_Insert",
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
              "target": "{{Modifier Holder}}"
            },
            "value1": "InsertCheck",
            "compareType": "=",
            "value2": 1,
            "contextScope": "TargetEntity"
          }
        },
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "silent": true
        },
        {
          "name": "Define Custom Variable",
          "variableName": "FirstSummon",
          "value": 0
        },
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Battle Event List}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "Battle Event ID",
            "ID": 20036,
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            }
          },
          "ifTargetFound": [
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            }
          ]
        },
        "Deleted bullshit",
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
        },
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
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"990819121\">Monster_XP_Elite01_02_LocalLegend_PartController_LockHP</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1258915271\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood_LockHP</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "target2": {
              "name": "Target Name",
              "target": "{{Current Turn Owner}}"
            }
          },
          "passed": [
            {
              "name": "Assign Advance/Delay to Current Ability Use",
              "adjustmentValue": 0,
              "adjustmentType": "="
            }
          ]
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
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"471853411\">Standard_Monster_AllDamageReduce</a>[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (_Basic_AllDamageReduceRatio) || RETURN",
              "displayLines": "_Basic_AllDamageReduceRatio",
              "constants": [],
              "variables": [
                "_Basic_AllDamageReduceRatio"
              ]
            }
          }
        }
      ],
      "references": []
    },
    "4033011_Monster_XP_Elite01_02_LocalLegend_PassiveAbility01": {
      "fileName": "4033011_Monster_XP_Elite01_02_LocalLegend_PassiveAbility01",
      "skillTrigger": "PassiveSkill01",
      "abilityType": "Talent",
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
          "name": "Boss Bar Display",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "display": true
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"999869963\">Enemy_XP_Elite01_02_LocalLegend_AbilityP01</a>"
        },
        {
          "name": "Set Enemy Phase"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": 4033011,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Corrupting Shadowfiend: Torrential Rotbringer"
              },
              {
                "name": "Enemy ID",
                "ID": 403301100,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": null
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
              "modifier": "<a class=\"gModGreen\" id=\"990819121\">Monster_XP_Elite01_02_LocalLegend_PartController_LockHP</a>"
            },
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[Skill06[3]]}) || RETURN",
                "displayLines": "{[Skill06[3]]}",
                "constants": [],
                "variables": [
                  "{[Skill06[3]]}"
                ]
              },
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonID01) || RETURN",
                    "displayLines": "SummonID01",
                    "constants": [],
                    "variables": [
                      "SummonID01"
                    ]
                  },
                  "locationType": "AroundCasterOnEdge"
                }
              ]
            },
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[Skill06[2]]}) || RETURN",
                "displayLines": "{[Skill06[2]]}",
                "constants": [],
                "variables": [
                  "{[Skill06[2]]}"
                ]
              },
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonID05) || RETURN",
                    "displayLines": "SummonID05",
                    "constants": [],
                    "variables": [
                      "SummonID05"
                    ]
                  },
                  "locationType": "AfterCaster"
                }
              ]
            }
          ]
        },
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] ({[Skill06[1]]}) || RETURN",
            "displayLines": "{[Skill06[1]]}",
            "constants": [],
            "variables": [
              "{[Skill06[1]]}"
            ]
          },
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (SummonID02) || RETURN",
                "displayLines": "SummonID02",
                "constants": [],
                "variables": [
                  "SummonID02"
                ]
              },
              "locationType": "BeforeCaster"
            }
          ]
        },
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
            "displayLines": "{[Skill06[0]]}",
            "constants": [],
            "variables": [
              "{[Skill06[0]]}"
            ]
          },
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (SummonID01) || RETURN",
                "displayLines": "SummonID01",
                "constants": [],
                "variables": [
                  "SummonID01"
                ]
              },
              "locationType": "AroundCasterOnEdge"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Stage ID",
            "ID": 426009,
            "compareType": "=",
            "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1219810118\">XP_Elite01_02_LocalLegend_BattleScore1</a>",
              "casterAssign": "TargetSelf"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_ModifyActionDelay",
              "value": {
                "operator": "Variables[0] ({[Skill06[4]]}) || RETURN",
                "displayLines": "{[Skill06[4]]}",
                "constants": [],
                "variables": [
                  "{[Skill06[4]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_Basic_AllDamageReduceRatio",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill01[3]]}) || RETURN",
                "displayLines": "{[PassiveSkill01[3]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill01[3]]}"
                ]
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Stage ID",
                "ID": 4260030,
                "compareType": "=",
                "characterName": "Corrupting Shadowfiend: Torrential Rotbringer"
              },
              {
                "name": "Stage ID",
                "ID": 4260031,
                "compareType": "=",
                "characterName": "Corrupting Shadowfiend: Torrential Rotbringer"
              },
              {
                "name": "Stage ID",
                "ID": 4260080,
                "compareType": "=",
                "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
              },
              {
                "name": "Stage ID",
                "ID": 4260081,
                "compareType": "=",
                "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_ModifyActionDelay",
              "value": {
                "operator": "Variables[0] ({[Skill06[10]]}) || RETURN",
                "displayLines": "{[Skill06[10]]}",
                "constants": [],
                "variables": [
                  "{[Skill06[10]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_Basic_AllDamageReduceRatio",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill02[5]]}) || RETURN",
                "displayLines": "{[PassiveSkill02[5]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill02[5]]}"
                ]
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Stage ID",
                "ID": 4260032,
                "compareType": "=",
                "characterName": "Corrupting Shadowfiend: Torrential Rotbringer"
              },
              {
                "name": "Stage ID",
                "ID": 4260082,
                "compareType": "=",
                "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_ModifyActionDelay",
              "value": {
                "operator": "Variables[0] ({[Skill06[9]]}) || RETURN",
                "displayLines": "{[Skill06[9]]}",
                "constants": [],
                "variables": [
                  "{[Skill06[9]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_Basic_AllDamageReduceRatio",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill02[4]]}) || RETURN",
                "displayLines": "{[PassiveSkill02[4]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill02[4]]}"
                ]
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Stage ID",
                "ID": 4260033,
                "compareType": "=",
                "characterName": "Corrupting Shadowfiend: Torrential Rotbringer"
              },
              {
                "name": "Stage ID",
                "ID": 4260083,
                "compareType": "=",
                "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_ModifyActionDelay",
              "value": {
                "operator": "Variables[0] ({[Skill06[8]]}) || RETURN",
                "displayLines": "{[Skill06[8]]}",
                "constants": [],
                "variables": [
                  "{[Skill06[8]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_Basic_AllDamageReduceRatio",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill02[3]]}) || RETURN",
                "displayLines": "{[PassiveSkill02[3]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill02[3]]}"
                ]
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Stage ID",
                "ID": 4260034,
                "compareType": "=",
                "characterName": "Corrupting Shadowfiend: Torrential Rotbringer"
              },
              {
                "name": "Stage ID",
                "ID": 4260084,
                "compareType": "=",
                "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_ModifyActionDelay",
              "value": {
                "operator": "Variables[0] ({[Skill06[7]]}) || RETURN",
                "displayLines": "{[Skill06[7]]}",
                "constants": [],
                "variables": [
                  "{[Skill06[7]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_Basic_AllDamageReduceRatio",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill02[2]]}) || RETURN",
                "displayLines": "{[PassiveSkill02[2]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill02[2]]}"
                ]
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Stage ID",
                "ID": 4260035,
                "compareType": "=",
                "characterName": "Corrupting Shadowfiend: Torrential Rotbringer"
              },
              {
                "name": "Stage ID",
                "ID": 4260085,
                "compareType": "=",
                "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_ModifyActionDelay",
              "value": {
                "operator": "Variables[0] ({[Skill06[6]]}) || RETURN",
                "displayLines": "{[Skill06[6]]}",
                "constants": [],
                "variables": [
                  "{[Skill06[6]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_Basic_AllDamageReduceRatio",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill02[1]]}) || RETURN",
                "displayLines": "{[PassiveSkill02[1]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill02[1]]}"
                ]
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Stage ID",
                "ID": 4260036,
                "compareType": "=",
                "characterName": "Corrupting Shadowfiend: Torrential Rotbringer"
              },
              {
                "name": "Stage ID",
                "ID": 4260086,
                "compareType": "=",
                "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_ModifyActionDelay",
              "value": {
                "operator": "Variables[0] ({[Skill06[5]]}) || RETURN",
                "displayLines": "{[Skill06[5]]}",
                "constants": [],
                "variables": [
                  "{[Skill06[5]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_Basic_AllDamageReduceRatio",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill02[0]]}) || RETURN",
                "displayLines": "{[PassiveSkill02[0]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill02[0]]}"
                ]
              }
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"741408749\">Enemy_XP_Elite01_02_LocalLegend_Status</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1808493640\">Enemy_Standard_LocalLegend_Init_LockHp</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"449361701\">Enemy_Standard_LocalLegend_Init_MuteBreak</a>"
        }
      ],
      "whenAdded": [],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__999869963\">Enemy_XP_Elite01_02_LocalLegend_AbilityP01</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
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
                  "variableName": "MDF_IsNegative"
                }
              ]
            },
            {
              "eventTrigger": "HP Change [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_NegativeHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPNegative</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_NegativeHP",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_IsNegative",
                      "value": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_IsNegative",
                      "value": 0
                    }
                  ]
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "MDF_IsNegative",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 0,
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1771764709\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood</a>[<span class=\"descriptionNumberColor\">HP Overload</span>]"
                    }
                  ]
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 1,
                  "maxValue": 1,
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1771764709\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood</a>[<span class=\"descriptionNumberColor\">HP Overload</span>]"
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
          "for": "<a class=\"gModGreen\" id=\"mod__354987416\">Enemy_XP_Elite01_02_LocalLegend_DamageAdded</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
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
                    "operator": "Variables[0] (MDF_ShowValue1) || RETURN",
                    "displayLines": "MDF_ShowValue1",
                    "constants": [],
                    "variables": [
                      "MDF_ShowValue1"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_ShowValue1</span>.",
          "type": "Buff",
          "statusName": "DMG Boost"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__741408749\">Enemy_XP_Elite01_02_LocalLegend_Status</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"471853411\">Standard_Monster_AllDamageReduce</a>[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (_Basic_AllDamageReduceRatio) || RETURN",
                      "displayLines": "_Basic_AllDamageReduceRatio",
                      "constants": [],
                      "variables": [
                        "_Basic_AllDamageReduceRatio"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "Define Custom Variable with Team Count",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}} + {{Player Team All}}"
                  },
                  "variableName": "_CharacterCount",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1177581439\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood_Avatar</a>[<span class=\"descriptionNumberColor\">HP Overload</span>]"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1771764709\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood</a>[<span class=\"descriptionNumberColor\">HP Overload</span>]"
                      }
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "_CharacterCount",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"354987416\">Enemy_XP_Elite01_02_LocalLegend_DamageAdded</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"354987416\">Enemy_XP_Elite01_02_LocalLegend_DamageAdded</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                      "valuePerStack": {
                        "MDF_ShowValue1": {
                          "operator": "Variables[0] (_CharacterCount) || Variables[1] ({[PassiveSkill01[1]]}) || MUL || RETURN",
                          "displayLines": "(_CharacterCount * {[PassiveSkill01[1]]})",
                          "constants": [],
                          "variables": [
                            "_CharacterCount",
                            "{[PassiveSkill01[1]]}"
                          ]
                        }
                      }
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
                      "name": "Define Custom Variable with Team Count",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "variableName": "MDF_CharacterCount",
                      "livingTargets": true
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_CharacterCount",
                        "compareType": ">",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"471853411\">Standard_Monster_AllDamageReduce</a>[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]",
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (_Basic_AllDamageReduceRatio) || RETURN",
                              "displayLines": "_Basic_AllDamageReduceRatio",
                              "constants": [],
                              "variables": [
                                "_Basic_AllDamageReduceRatio"
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
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"471853411\">Standard_Monster_AllDamageReduce</a>[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]"
                        },
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Battle Event List}}"
                          },
                          "searchRandom": true,
                          "conditions": {
                            "name": "Battle Event ID",
                            "ID": 20036,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            }
                          },
                          "ifTargetFound": [
                            {
                              "name": "Force Entity Death",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              }
                            }
                          ]
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1258915271\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood_LockHP</a>"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_XP_Elite01_02_LocalLegend_Ability03_Part01",
                  "priorityTag": "LevelPerformMonster",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
                }
              ],
              "priorityLevel": -90
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 1
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"1177581439\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood_Avatar</a>[<span class=\"descriptionNumberColor\">HP Overload</span>]"
                      },
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"1771764709\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood</a>[<span class=\"descriptionNumberColor\">HP Overload</span>]"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Team Count",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}} + {{Player Team All}}"
                      },
                      "variableName": "_CharacterCount",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1177581439\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood_Avatar</a>[<span class=\"descriptionNumberColor\">HP Overload</span>]"
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1771764709\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood</a>[<span class=\"descriptionNumberColor\">HP Overload</span>]"
                          }
                        ]
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"354987416\">Enemy_XP_Elite01_02_LocalLegend_DamageAdded</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                      "valuePerStack": {
                        "MDF_ShowValue1": {
                          "operator": "Variables[0] (_CharacterCount) || Variables[1] ({[PassiveSkill01[1]]}) || MUL || RETURN",
                          "displayLines": "(_CharacterCount * {[PassiveSkill01[1]]})",
                          "constants": [],
                          "variables": [
                            "_CharacterCount",
                            "{[PassiveSkill01[1]]}"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"1177581439\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood_Avatar</a>[<span class=\"descriptionNumberColor\">HP Overload</span>]"
                      },
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"1771764709\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood</a>[<span class=\"descriptionNumberColor\">HP Overload</span>]"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Team Count",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}} + {{Player Team All}}"
                      },
                      "variableName": "_CharacterCount",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1177581439\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood_Avatar</a>[<span class=\"descriptionNumberColor\">HP Overload</span>]"
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1771764709\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood</a>[<span class=\"descriptionNumberColor\">HP Overload</span>]"
                          }
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "_CharacterCount",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"354987416\">Enemy_XP_Elite01_02_LocalLegend_DamageAdded</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"354987416\">Enemy_XP_Elite01_02_LocalLegend_DamageAdded</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                          "valuePerStack": {
                            "MDF_ShowValue1": {
                              "operator": "Variables[0] (_CharacterCount) || Variables[1] ({[PassiveSkill01[1]]}) || MUL || RETURN",
                              "displayLines": "(_CharacterCount * {[PassiveSkill01[1]]})",
                              "constants": [],
                              "variables": [
                                "_CharacterCount",
                                "{[PassiveSkill01[1]]}"
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
          "stackData": [],
          "latentQueue": [
            "_ModifyActionDelay"
          ]
        }
      ]
    },
    "4033011_Modifiers": {
      "fileName": "4033011_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1065867398\">XP_Elite01_02_LocalLegend_BattleScoreMark</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1219810118\">XP_Elite01_02_LocalLegend_BattleScore1</a>",
          "execute": [
            {
              "eventTrigger": "Leave Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      "Battle was Victory",
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "_IsLose",
                        "compareType": "=",
                        "value2": 0,
                        "contextScope": "ContextModifier"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "matchTags": true,
                      "relatedAchievements": [
                        {
                          "title": "Crazy Diamond",
                          "desc": "Clear the Nightmare difficulty combat against Corrupting Shadowfiend with all ally characters' \"HP Overload\" not exceeding #1",
                          "rarity": "Low",
                          "params": [
                            8000
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-1065867398\">XP_Elite01_02_LocalLegend_BattleScoreMark</a>"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "ContextModifier",
                      "variableName": "_IsLose",
                      "value": 1
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
          "for": "<a class=\"gModGreen\" id=\"mod__1177581439\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood_Avatar</a>[<span class=\"descriptionNumberColor\">HP Overload</span>]",
          "description": "Target has accumulated \"HP Overload,\" healing <span class=\"descriptionNumberColor\">MDF_NegativeBlood</span> HP will remove this state. When the \"Overload Settlement\" turn begins, the target will receive fatal damage.",
          "type": "Other",
          "statusName": "HP Overload"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1062600240\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood_OnAvatarStatus</a>",
          "execute": [
            {
              "eventTrigger": "When Put in Deathstate Limbo",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1258915271\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood_LockHP</a>"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Property",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "&nbsp;<span class=\"descriptionNumberColor\">HPNegative</span>&nbsp;",
                      "value": 0,
                      "function": "=",
                      "canModifyLimbo": true
                    }
                  ]
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1258915271\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood_LockHP</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Stage ID",
                        "ID": 4260030,
                        "compareType": ">=",
                        "characterName": "Corrupting Shadowfiend: Torrential Rotbringer"
                      },
                      {
                        "name": "Stage ID",
                        "ID": 4260036,
                        "compareType": "<=",
                        "characterName": "Corrupting Shadowfiend: Torrential Rotbringer"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Variable with Battle Goal Param",
                      "goalID": 5001812,
                      "variableName": "_BattleTarget_S3_2_Param"
                    },
                    {
                      "name": "Define Variable with Battle Goal Param",
                      "goalID": 5001813,
                      "variableName": "_BattleTarget_S3_3_Param"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Stage ID",
                    "ID": 426009,
                    "compareType": "=",
                    "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
                  },
                  "passed": [
                    {
                      "name": "Define Variable with Battle Goal Param",
                      "goalID": 5001830,
                      "variableName": "_BattleTarget_S3_2_Param"
                    },
                    {
                      "name": "Define Variable with Battle Goal Param",
                      "goalID": 5001831,
                      "variableName": "_BattleTarget_S3_3_Param"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "HP Change [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_NegativeHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPNegative</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "variable": "_MonsterChangeCnt",
                  "target2": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variable2": "MDF_LevelMaxNegativeHP",
                  "scope": "ContextModifier"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_NegativeHP",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1177581439\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood_Avatar</a>[<span class=\"descriptionNumberColor\">HP Overload</span>]"
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
                        "modifier": "<a class=\"gModGreen\" id=\"1177581439\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood_Avatar</a>[<span class=\"descriptionNumberColor\">HP Overload</span>]"
                      },
                      "passed": [
                        {
                          "name": "Define Modifier-Specific Variable",
                          "modifierName": "<a class=\"gModGreen\" id=\"1177581439\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood_Avatar</a>[<span class=\"descriptionNumberColor\">HP Overload</span>]",
                          "variableName": "MDF_NegativeBlood",
                          "value": {
                            "operator": "Variables[0] (CEIL) || Variables[1] (MDF_NegativeHP) || PARAM_1 || FUNCTION || RETURN",
                            "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">CEIL</span>(MDF_NegativeHP)",
                            "constants": [],
                            "variables": [
                              "CEIL",
                              "MDF_NegativeHP"
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1177581439\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood_Avatar</a>[<span class=\"descriptionNumberColor\">HP Overload</span>]",
                          "valuePerStack": {
                            "MDF_NegativeBlood": {
                              "operator": "Variables[0] (CEIL) || Variables[1] (MDF_NegativeHP) || PARAM_1 || FUNCTION || RETURN",
                              "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">CEIL</span>(MDF_NegativeHP)",
                              "constants": [],
                              "variables": [
                                "CEIL",
                                "MDF_NegativeHP"
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Stage ID",
                        "ID": 4260030,
                        "compareType": ">=",
                        "characterName": "Corrupting Shadowfiend: Torrential Rotbringer"
                      },
                      {
                        "name": "Stage ID",
                        "ID": 4260036,
                        "compareType": "<=",
                        "characterName": "Corrupting Shadowfiend: Torrential Rotbringer"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_NegativeHP",
                        "compareType": ">",
                        "value2": {
                          "operator": "Variables[0] (_BattleTarget_S3_2_Param) || RETURN",
                          "displayLines": "_BattleTarget_S3_2_Param",
                          "constants": [],
                          "variables": [
                            "_BattleTarget_S3_2_Param"
                          ]
                        }
                      },
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "type": "Character"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "_BattleTarget_LocalLegend_S3_2_Check",
                      "value": 1
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Stage ID",
                        "ID": 4260030,
                        "compareType": ">=",
                        "characterName": "Corrupting Shadowfiend: Torrential Rotbringer"
                      },
                      {
                        "name": "Stage ID",
                        "ID": 4260036,
                        "compareType": "<=",
                        "characterName": "Corrupting Shadowfiend: Torrential Rotbringer"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_NegativeHP",
                        "compareType": ">",
                        "value2": {
                          "operator": "Variables[0] (_BattleTarget_S3_3_Param) || RETURN",
                          "displayLines": "_BattleTarget_S3_3_Param",
                          "constants": [],
                          "variables": [
                            "_BattleTarget_S3_3_Param"
                          ]
                        }
                      },
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "type": "Character"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "_BattleTarget_LocalLegend_S3_3_Check",
                      "value": 1
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Stage ID",
                        "ID": 426009,
                        "compareType": "=",
                        "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_NegativeHP",
                        "compareType": ">",
                        "value2": {
                          "operator": "Variables[0] (_BattleTarget_S3_2_Param) || RETURN",
                          "displayLines": "_BattleTarget_S3_2_Param",
                          "constants": [],
                          "variables": [
                            "_BattleTarget_S3_2_Param"
                          ]
                        }
                      },
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "type": "Character"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "_BattleTarget_LocalLegend_S3_6_Check",
                      "value": 1
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Stage ID",
                        "ID": 426009,
                        "compareType": "=",
                        "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_NegativeHP",
                        "compareType": ">",
                        "value2": {
                          "operator": "Variables[0] (_BattleTarget_S3_3_Param) || RETURN",
                          "displayLines": "_BattleTarget_S3_3_Param",
                          "constants": [],
                          "variables": [
                            "_BattleTarget_S3_3_Param"
                          ]
                        }
                      },
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "type": "Character"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "_BattleTarget_LocalLegend_S3_7_Check",
                      "value": 1
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Stage ID",
                        "ID": 426009,
                        "compareType": "=",
                        "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_NegativeHP",
                        "compareType": ">",
                        "value2": 8000
                      },
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "type": "Character"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1065867398\">XP_Elite01_02_LocalLegend_BattleScoreMark</a>",
                      "casterAssign": "TargetSelf"
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
                        "value1": "MDF_NegativeHP",
                        "compareType": ">",
                        "value2": {
                          "operator": "Variables[0] (_BattleTarget_LocalLegend_S3_7_Check) || RETURN",
                          "displayLines": "_BattleTarget_LocalLegend_S3_7_Check",
                          "constants": [],
                          "variables": [
                            "_BattleTarget_LocalLegend_S3_7_Check"
                          ]
                        }
                      },
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "type": "Character"
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
                            "name": "Stage ID",
                            "ID": 4260030,
                            "compareType": ">=",
                            "characterName": "Corrupting Shadowfiend: Torrential Rotbringer"
                          },
                          {
                            "name": "Stage ID",
                            "ID": 4260036,
                            "compareType": "<=",
                            "characterName": "Corrupting Shadowfiend: Torrential Rotbringer"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Level Entity}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "_BattleTarget_LocalLegend_S3_1_ProgressInfo",
                          "value": {
                            "operator": "Variables[0] (CEIL) || Variables[1] (MDF_NegativeHP) || PARAM_1 || FUNCTION || RETURN",
                            "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">CEIL</span>(MDF_NegativeHP)",
                            "constants": [],
                            "variables": [
                              "CEIL",
                              "MDF_NegativeHP"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Stage ID",
                        "ID": 426009,
                        "compareType": "=",
                        "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Level Entity}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "_BattleTarget_LocalLegend_S3_5_ProgressInfo",
                          "value": {
                            "operator": "Variables[0] (CEIL) || Variables[1] (MDF_NegativeHP) || PARAM_1 || FUNCTION || RETURN",
                            "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">CEIL</span>(MDF_NegativeHP)",
                            "constants": [],
                            "variables": [
                              "CEIL",
                              "MDF_NegativeHP"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "_MonsterChangeCnt",
                      "value": {
                        "operator": "Variables[0] (MDF_NegativeHP) || RETURN",
                        "displayLines": "MDF_NegativeHP",
                        "constants": [],
                        "variables": [
                          "MDF_NegativeHP"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Get Revived [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1258915271\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood_LockHP</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1258915271\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood_LockHP</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"1972420771\">Enemy_XP_Elite01_02_LocalLegend_Ability03_Mark</a>[<span class=\"descriptionNumberColor\">Overloadable</span>]"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                "Allow NEGATIVE HP",
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1972420771\">Enemy_XP_Elite01_02_LocalLegend_Ability03_Mark</a>[<span class=\"descriptionNumberColor\">Overloadable</span>]"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "MDF_LevelMaxNegativeHP",
            "_BattleTarget_LocalLegend_S3_2_Check",
            "_BattleTarget_LocalLegend_S3_3_Check",
            "_BattleTarget_LocalLegend_S3_6_Check",
            "_BattleTarget_LocalLegend_S3_1_ProgressInfo",
            "_BattleTarget_LocalLegend_S3_5_ProgressInfo"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1972420771\">Enemy_XP_Elite01_02_LocalLegend_Ability03_Mark</a>[<span class=\"descriptionNumberColor\">Overloadable</span>]",
          "stackData": [],
          "latentQueue": [
            "_BattleTarget_LocalLegend_S3_5_ProgressInfo",
            "_BattleTarget_LocalLegend_S3_1_ProgressInfo",
            "_BattleTarget_LocalLegend_S3_6_Check",
            "_BattleTarget_LocalLegend_S3_3_Check",
            "_BattleTarget_LocalLegend_S3_2_Check",
            "MDF_LevelMaxNegativeHP"
          ],
          "description": "Target's HP cannot be reduced below 1, and any excess damage beyond an amount of their current HP will be converted to \"HP Overload.\" When receiving healing, prioritizes restoring their \"HP Overload.\"",
          "type": "Other",
          "effectName": "Overloadable",
          "statusName": "Overloadable"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1291270123\">Monster_XP_Elite01_02_LocalLegend_Ability03_Status</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1062600240\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood_OnAvatarStatus</a>",
                  "casterAssign": "TargetSelf"
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
                        "modifier": "<a class=\"gModGreen\" id=\"-1062600240\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood_OnAvatarStatus</a>",
                        "invertCondition": true
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1062600240\">Enemy_AML_Minion02_01_LocalLegend_NegativeBlood_OnAvatarStatus</a>",
                          "casterAssign": "TargetSelf"
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
          "for": "<a class=\"gModGreen\" id=\"mod__990819121\">Monster_XP_Elite01_02_LocalLegend_PartController_LockHP</a>",
          "execute": [
            {
              "eventTrigger": "Waiting for Healing in Limbo",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "InsertCheck",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Stage ID",
                            "ID": 4260030,
                            "compareType": ">=",
                            "characterName": "Corrupting Shadowfiend: Torrential Rotbringer"
                          },
                          {
                            "name": "Stage ID",
                            "ID": 4260036,
                            "compareType": "<=",
                            "characterName": "Corrupting Shadowfiend: Torrential Rotbringer"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Level Entity}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "_BattleTarget_LocalLegend_S3_1_Check",
                          "value": 1
                        }
                      ]
                    },
                    {
                      "name": "Dispel Debuffs",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "silent": true
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "InsertCheck"
                    },
                    {
                      "name": "Set Enemy Phase",
                      "mode": "Inc"
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_XP_Elite01_02_LocalLegend_PassiveAbility_Insert",
                      "priorityTag": "MonsterChangePhase",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ],
              "priorityLevel": -90
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1526505902\">Modifier_XP_Elite01_02_LocalLegend_Ability03BattleEvent_SpeedAddedRatio</a>",
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
                    "operator": "Variables[0] (_SpeedAddedRatio) || RETURN",
                    "displayLines": "_SpeedAddedRatio",
                    "constants": [],
                    "variables": [
                      "_SpeedAddedRatio"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__416601415\">Modifier_XP_Elite01_02_LocalLegend_Ability03BattleEvent</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_XP_Elite01_02_LocalLegend_Ability03_Insert_Part01",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "priorityTag": "MonsterChangePhase",
                  "ownerState": "Anyone",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Stage ID",
                        "ID": 4260080,
                        "compareType": ">=",
                        "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
                      },
                      {
                        "name": "Stage ID",
                        "ID": 4260086,
                        "compareType": "<=",
                        "characterName": "Greatsword Guardian: Vanguard Wallbreaker"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_OriginCharacterCount",
                      "value": 2
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_OriginCharacterCount",
                      "value": 4
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
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
                        "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Team Count",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "variableName": "_CharacterCount",
                      "livingTargets": true,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1526505902\">Modifier_XP_Elite01_02_LocalLegend_Ability03BattleEvent_SpeedAddedRatio</a>",
                      "valuePerStack": {
                        "_SpeedAddedRatio": {
                          "operator": "Variables[0] (_OriginCharacterCount) || Variables[1] (_CharacterCount) || SUB || Variables[2] ({[Skill03[1]]}) || MUL || RETURN",
                          "displayLines": "((_OriginCharacterCount - _CharacterCount) * {[Skill03[1]]})",
                          "constants": [],
                          "variables": [
                            "_OriginCharacterCount",
                            "_CharacterCount",
                            "{[Skill03[1]]}"
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
    },
    "4033011_BE_BattleEvents": {
      "fileName": "4033011_BE_BattleEvents",
      "abilityType": "Char. B.Events",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Battle Event Construction",
          "ID": 20036,
          "team": "Neutral Team",
          "eventType": "Assist",
          "abilityList": null,
          "overridesArray": [
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;",
              "value": 65
            }
          ],
          "hardLevelEvent": true,
          "actionDescription": "When \"Overload Settlement\" on the action bar takes action, HP calculation will be performed. Units with HP below 0 will receive fatal damage. \"Overload Settlement\" will increase in speed as the number of enemy summons decreases, and will be removed when all enemy summons are defeated."
        }
      ],
      "references": []
    }
  }
}