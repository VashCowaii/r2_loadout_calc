const configAbility = {
  "fileName": "8024010_Monster_SW_Boss_Ability06_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      },
      "searchRandom": true,
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "flagName": "STAT_CTRL"
          },
          {
            "name": "OR",
            "conditionList": [
              {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "ENEMIES_OBJECT_UNUSED__63"
              },
              {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "ENEMIES_OBJECT_UNUSED__64"
              }
            ]
          }
        ]
      },
      "ifTargetFound": [
        {
          "name": "Remove Modifier Behavior Flag(s)",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "flagNames": []
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      },
      "searchRandom": true,
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "flagName": "Break"
          },
          {
            "name": "OR",
            "conditionList": [
              {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "ENEMIES_OBJECT_UNUSED__63"
              },
              {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "ENEMIES_OBJECT_UNUSED__64"
              }
            ]
          }
        ]
      },
      "ifTargetFound": [
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          }
        },
        {
          "name": "Reset Toughness",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          }
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Compare: Monster Rank",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "compareType": "=",
            "value2": 4
          },
          {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value": "ENEMIES_OBJECT_UNUSED__64"
          },
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-2020120612\">Monster_SW_Boss_Ability06Mark</a>",
            "invertCondition": true
          }
        ]
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2020120612\">Monster_SW_Boss_Ability06Mark</a>"
        }
      ],
      "noTargetFound": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "ENEMIES_OBJECT_UNUSED__63"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-2020120612\">Monster_SW_Boss_Ability06Mark</a>",
                "invertCondition": true
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2020120612\">Monster_SW_Boss_Ability06Mark</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value": "ENEMIES_OBJECT_UNUSED__63"
          },
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-2020120612\">Monster_SW_Boss_Ability06Mark</a>",
            "invertCondition": true
          }
        ]
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2020120612\">Monster_SW_Boss_Ability06Mark</a>"
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value": "ENEMIES_OBJECT_UNUSED__63"
          },
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-2020120612\">Monster_SW_Boss_Ability06Mark</a>",
            "invertCondition": true
          }
        ]
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2020120612\">Monster_SW_Boss_Ability06Mark</a>"
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value": "ENEMIES_OBJECT_UNUSED__63"
          },
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-2020120612\">Monster_SW_Boss_Ability06Mark</a>",
            "invertCondition": true
          }
        ]
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2020120612\">Monster_SW_Boss_Ability06Mark</a>"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{All Team Members(Exclude Self)}}"
        },
        "value1": "TeamCharacterCount",
        "compareType": "=",
        "value2": 4,
        "conditions": {
          "name": "OR",
          "conditionList": [
            {
              "name": "Check Boolean Value",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "value": "ENEMIES_OBJECT_UNUSED__63"
            },
            {
              "name": "Check Boolean Value",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "value": "ENEMIES_OBJECT_UNUSED__64"
            }
          ]
        }
      },
      "passed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemies by Aggro OR Random}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Wind",
                "Damage": {
                  "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
                  "displayLines": "{[Skill06[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill06[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"603194622\">Monster_SW_Boss_DOT_Poison</a>[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
              "duration": {
                "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
                "displayLines": "{[Skill01[3]]}",
                "constants": [],
                "variables": [
                  "{[Skill01[3]]}"
                ]
              },
              "baseChance": 1,
              "stackLimit": {
                "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
                "displayLines": "{[Skill01[4]]}",
                "constants": [],
                "variables": [
                  "{[Skill01[4]]}"
                ]
              },
              "valuePerStack": {
                "Modifier_Poison_DamagePercentage": {
                  "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
                  "displayLines": "{[Skill01[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[2]]}"
                  ]
                }
              },
              "addStacksPerTrigger": {
                "operator": "Variables[0] ({[Skill06[1]]}) || RETURN",
                "displayLines": "{[Skill06[1]]}",
                "constants": [],
                "variables": [
                  "{[Skill06[1]]}"
                ]
              }
            },
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "value": {
                "operator": "Variables[0] ({[Skill06[4]]}) || RETURN",
                "displayLines": "{[Skill06[4]]}",
                "constants": [],
                "variables": [
                  "{[Skill06[4]]}"
                ]
              },
              "isFixed": "* ERR"
            }
          ]
        },
        {
          "name": "Looped Event",
          "maxLoops": 6,
          "Event": [
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
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
                      "displayLines": "{[Skill06[0]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill06[0]]}"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK"
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"603194622\">Monster_SW_Boss_DOT_Poison</a>[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
                  "duration": {
                    "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
                    "displayLines": "{[Skill01[3]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill01[3]]}"
                    ]
                  },
                  "baseChance": 1,
                  "stackLimit": {
                    "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
                    "displayLines": "{[Skill01[4]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill01[4]]}"
                    ]
                  },
                  "valuePerStack": {
                    "Modifier_Poison_DamagePercentage": {
                      "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
                      "displayLines": "{[Skill01[2]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill01[2]]}"
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] ({[Skill06[1]]}) || RETURN",
                    "displayLines": "{[Skill06[1]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill06[1]]}"
                    ]
                  }
                },
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "value": {
                    "operator": "Variables[0] ({[Skill06[4]]}) || RETURN",
                    "displayLines": "{[Skill06[4]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill06[4]]}"
                    ]
                  },
                  "isFixed": "* ERR"
                }
              ]
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{All Team Members(Exclude Self)}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": "=",
            "value2": 3,
            "conditions": {
              "name": "OR",
              "conditionList": [
                {
                  "name": "Check Boolean Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "value": "ENEMIES_OBJECT_UNUSED__63"
                },
                {
                  "name": "Check Boolean Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "value": "ENEMIES_OBJECT_UNUSED__64"
                }
              ]
            }
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemies by Aggro OR Random}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
                      "displayLines": "{[Skill06[0]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill06[0]]}"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK"
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"603194622\">Monster_SW_Boss_DOT_Poison</a>[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
                  "duration": {
                    "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
                    "displayLines": "{[Skill01[3]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill01[3]]}"
                    ]
                  },
                  "baseChance": 1,
                  "stackLimit": {
                    "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
                    "displayLines": "{[Skill01[4]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill01[4]]}"
                    ]
                  },
                  "valuePerStack": {
                    "Modifier_Poison_DamagePercentage": {
                      "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
                      "displayLines": "{[Skill01[2]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill01[2]]}"
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] ({[Skill06[1]]}) || RETURN",
                    "displayLines": "{[Skill06[1]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill06[1]]}"
                    ]
                  }
                },
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "value": {
                    "operator": "Variables[0] ({[Skill06[4]]}) || RETURN",
                    "displayLines": "{[Skill06[4]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill06[4]]}"
                    ]
                  },
                  "isFixed": "* ERR"
                }
              ]
            },
            {
              "name": "Looped Event",
              "maxLoops": 5,
              "Event": [
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
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Wind",
                        "Damage": {
                          "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
                          "displayLines": "{[Skill06[0]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill06[0]]}"
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Basic ATK"
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"603194622\">Monster_SW_Boss_DOT_Poison</a>[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
                      "duration": {
                        "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
                        "displayLines": "{[Skill01[3]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill01[3]]}"
                        ]
                      },
                      "baseChance": 1,
                      "stackLimit": {
                        "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
                        "displayLines": "{[Skill01[4]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill01[4]]}"
                        ]
                      },
                      "valuePerStack": {
                        "Modifier_Poison_DamagePercentage": {
                          "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
                          "displayLines": "{[Skill01[2]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill01[2]]}"
                          ]
                        }
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] ({[Skill06[1]]}) || RETURN",
                        "displayLines": "{[Skill06[1]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill06[1]]}"
                        ]
                      }
                    },
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "value": {
                        "operator": "Variables[0] ({[Skill06[4]]}) || RETURN",
                        "displayLines": "{[Skill06[4]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill06[4]]}"
                        ]
                      },
                      "isFixed": "* ERR"
                    }
                  ]
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{All Team Members(Exclude Self)}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": "=",
                "value2": 2,
                "conditions": {
                  "name": "OR",
                  "conditionList": [
                    {
                      "name": "Check Boolean Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "value": "ENEMIES_OBJECT_UNUSED__63"
                    },
                    {
                      "name": "Check Boolean Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "value": "ENEMIES_OBJECT_UNUSED__64"
                    }
                  ]
                }
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemies by Aggro OR Random}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Wind",
                        "Damage": {
                          "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
                          "displayLines": "{[Skill06[0]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill06[0]]}"
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Basic ATK"
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"603194622\">Monster_SW_Boss_DOT_Poison</a>[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
                      "duration": {
                        "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
                        "displayLines": "{[Skill01[3]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill01[3]]}"
                        ]
                      },
                      "baseChance": 1,
                      "stackLimit": {
                        "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
                        "displayLines": "{[Skill01[4]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill01[4]]}"
                        ]
                      },
                      "valuePerStack": {
                        "Modifier_Poison_DamagePercentage": {
                          "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
                          "displayLines": "{[Skill01[2]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill01[2]]}"
                          ]
                        }
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] ({[Skill06[1]]}) || RETURN",
                        "displayLines": "{[Skill06[1]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill06[1]]}"
                        ]
                      }
                    },
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "value": {
                        "operator": "Variables[0] ({[Skill06[4]]}) || RETURN",
                        "displayLines": "{[Skill06[4]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill06[4]]}"
                        ]
                      },
                      "isFixed": "* ERR"
                    }
                  ]
                },
                {
                  "name": "Looped Event",
                  "maxLoops": 4,
                  "Event": [
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
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "canPhase": true,
                          "AttackScaling": {
                            "DamageType": "Wind",
                            "Damage": {
                              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
                              "displayLines": "{[Skill06[0]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill06[0]]}"
                              ]
                            },
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Basic ATK"
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"603194622\">Monster_SW_Boss_DOT_Poison</a>[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
                          "duration": {
                            "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
                            "displayLines": "{[Skill01[3]]}",
                            "constants": [],
                            "variables": [
                              "{[Skill01[3]]}"
                            ]
                          },
                          "baseChance": 1,
                          "stackLimit": {
                            "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
                            "displayLines": "{[Skill01[4]]}",
                            "constants": [],
                            "variables": [
                              "{[Skill01[4]]}"
                            ]
                          },
                          "valuePerStack": {
                            "Modifier_Poison_DamagePercentage": {
                              "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
                              "displayLines": "{[Skill01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill01[2]]}"
                              ]
                            }
                          },
                          "addStacksPerTrigger": {
                            "operator": "Variables[0] ({[Skill06[1]]}) || RETURN",
                            "displayLines": "{[Skill06[1]]}",
                            "constants": [],
                            "variables": [
                              "{[Skill06[1]]}"
                            ]
                          }
                        },
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "value": {
                            "operator": "Variables[0] ({[Skill06[4]]}) || RETURN",
                            "displayLines": "{[Skill06[4]]}",
                            "constants": [],
                            "variables": [
                              "{[Skill06[4]]}"
                            ]
                          },
                          "isFixed": "* ERR"
                        }
                      ]
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{All Team Members(Exclude Self)}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": "=",
                    "value2": 1,
                    "conditions": {
                      "name": "OR",
                      "conditionList": [
                        {
                          "name": "Check Boolean Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "value": "ENEMIES_OBJECT_UNUSED__63"
                        },
                        {
                          "name": "Check Boolean Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "value": "ENEMIES_OBJECT_UNUSED__64"
                        }
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemies by Aggro OR Random}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "canPhase": true,
                          "AttackScaling": {
                            "DamageType": "Wind",
                            "Damage": {
                              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
                              "displayLines": "{[Skill06[0]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill06[0]]}"
                              ]
                            },
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Basic ATK"
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"603194622\">Monster_SW_Boss_DOT_Poison</a>[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
                          "duration": {
                            "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
                            "displayLines": "{[Skill01[3]]}",
                            "constants": [],
                            "variables": [
                              "{[Skill01[3]]}"
                            ]
                          },
                          "baseChance": 1,
                          "stackLimit": {
                            "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
                            "displayLines": "{[Skill01[4]]}",
                            "constants": [],
                            "variables": [
                              "{[Skill01[4]]}"
                            ]
                          },
                          "valuePerStack": {
                            "Modifier_Poison_DamagePercentage": {
                              "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
                              "displayLines": "{[Skill01[2]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill01[2]]}"
                              ]
                            }
                          },
                          "addStacksPerTrigger": {
                            "operator": "Variables[0] ({[Skill06[1]]}) || RETURN",
                            "displayLines": "{[Skill06[1]]}",
                            "constants": [],
                            "variables": [
                              "{[Skill06[1]]}"
                            ]
                          }
                        },
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "value": {
                            "operator": "Variables[0] ({[Skill06[4]]}) || RETURN",
                            "displayLines": "{[Skill06[4]]}",
                            "constants": [],
                            "variables": [
                              "{[Skill06[4]]}"
                            ]
                          },
                          "isFixed": "* ERR"
                        }
                      ]
                    },
                    {
                      "name": "Looped Event",
                      "maxLoops": 3,
                      "Event": [
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
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "canPhase": true,
                              "AttackScaling": {
                                "DamageType": "Wind",
                                "Damage": {
                                  "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
                                  "displayLines": "{[Skill06[0]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[Skill06[0]]}"
                                  ]
                                },
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Basic ATK"
                              }
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"603194622\">Monster_SW_Boss_DOT_Poison</a>[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
                              "duration": {
                                "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
                                "displayLines": "{[Skill01[3]]}",
                                "constants": [],
                                "variables": [
                                  "{[Skill01[3]]}"
                                ]
                              },
                              "baseChance": 1,
                              "stackLimit": {
                                "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
                                "displayLines": "{[Skill01[4]]}",
                                "constants": [],
                                "variables": [
                                  "{[Skill01[4]]}"
                                ]
                              },
                              "valuePerStack": {
                                "Modifier_Poison_DamagePercentage": {
                                  "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
                                  "displayLines": "{[Skill01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[Skill01[2]]}"
                                  ]
                                }
                              },
                              "addStacksPerTrigger": {
                                "operator": "Variables[0] ({[Skill06[1]]}) || RETURN",
                                "displayLines": "{[Skill06[1]]}",
                                "constants": [],
                                "variables": [
                                  "{[Skill06[1]]}"
                                ]
                              }
                            },
                            {
                              "name": "Update Energy",
                              "on": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "value": {
                                "operator": "Variables[0] ({[Skill06[4]]}) || RETURN",
                                "displayLines": "{[Skill06[4]]}",
                                "constants": [],
                                "variables": [
                                  "{[Skill06[4]]}"
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
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Wind",
        "Damage": {
          "operator": "Variables[0] ({[Skill06[2]]}) || RETURN",
          "displayLines": "{[Skill06[2]]}",
          "constants": [],
          "variables": [
            "{[Skill06[2]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
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
      "modifier": "<a class=\"gModGreen\" id=\"603194622\">Monster_SW_Boss_DOT_Poison</a>[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
      "duration": {
        "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
        "displayLines": "{[Skill01[3]]}",
        "constants": [],
        "variables": [
          "{[Skill01[3]]}"
        ]
      },
      "baseChance": 1,
      "stackLimit": {
        "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
        "displayLines": "{[Skill01[4]]}",
        "constants": [],
        "variables": [
          "{[Skill01[4]]}"
        ]
      },
      "valuePerStack": {
        "Modifier_Poison_DamagePercentage": {
          "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
          "displayLines": "{[Skill01[2]]}",
          "constants": [],
          "variables": [
            "{[Skill01[2]]}"
          ]
        }
      },
      "addStacksPerTrigger": {
        "operator": "Variables[0] ({[Skill06[3]]}) || RETURN",
        "displayLines": "{[Skill06[3]]}",
        "constants": [],
        "variables": [
          "{[Skill06[3]]}"
        ]
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"484655132\">Monster_SW_Boss_Ability05Charge</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2020120612\">Monster_SW_Boss_Ability06Mark</a>"
    },
    "Trigger: Ability End"
  ],
  "references": []
}