const configAbility = {
  "fileName": "4033012_Monster_XP_Elite01_02_LocalLegend_Ability06_Part02",
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
                      "operator": "Variables[0] (SummonID04) || RETURN",
                      "displayLines": "SummonID04",
                      "constants": [],
                      "variables": [
                        "SummonID04"
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
                    "operator": "Variables[0] (SummonID04) || RETURN",
                    "displayLines": "SummonID04",
                    "constants": [],
                    "variables": [
                      "SummonID04"
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
                      "operator": "Variables[0] (SummonID04) || RETURN",
                      "displayLines": "SummonID04",
                      "constants": [],
                      "variables": [
                        "SummonID04"
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
                    "operator": "Variables[0] (SummonID04) || RETURN",
                    "displayLines": "SummonID04",
                    "constants": [],
                    "variables": [
                      "SummonID04"
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
          "operator": "Variables[0] (SummonID04) || RETURN",
          "displayLines": "SummonID04",
          "constants": [],
          "variables": [
            "SummonID04"
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
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}