const configAbility = {
  "fileName": "3004020_Monster_W3_Theater_PassiveAbility_Initiate",
  "childAbilityList": [
    "3004020_Monster_W3_Theater_PassiveAbility_Initiate"
  ],
  "skillTrigger": "Skill01",
  "abilityType": "Talent",
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
      "modifier": "<a class=\"gModGreen\" id=\"704406634\">Enemy_W3_Theater_ImmuneDebuff</a>"
    },
    {
      "name": "Create Enemies",
      "delayPercent": {
        "operator": "Variables[0] ({[Skill08[0]]}) || RETURN",
        "displayLines": "{[Skill08[0]]}",
        "constants": [],
        "variables": [
          "{[Skill08[0]]}"
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
          "locationType": "First"
        }
      ]
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
      "modifier": "<a class=\"gModGreen\" id=\"-1839261754\">Enemy_W3_Theater_HideWeakness</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1856806253\">Standard_MuteAttachWeakness</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Enemy ID",
        "ID": 3004025,
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "characterName": "Thousand-Faced Skott",
        "invertCondition": true
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1754146880\">Enemy_W3_Theater_PartController</a>"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1099674866\">Enemy_W3_Theather_Initiate</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Check Boolean Value",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "value": "Theater_Rogue"
      },
      "passed": [
        {
          "name": "Preload Battle Event(s)",
          "eventID": [
            20025
          ]
        }
      ],
      "failed": [
        {
          "name": "Preload Battle Event(s)",
          "eventID": [
            20010
          ]
        }
      ]
    },
    {
      "name": "Assign Unique Name",
      "uniqueName": "TheaterCore",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "Add Stage Ability",
      "abilityName": "Monster_Monster_W3_Theater_Insert_RestartPhase2"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"772761347\">Enemy_W3_Theater_ViewModeListener</a>"
    },
    {
      "name": "Set Action-State",
      "on": null,
      "stateName": "TheaterCore",
      "state": false
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1408875788\">W3_Theater_BattleScore1</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Enemy ID",
        "ID": 3004025,
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "characterName": "Thousand-Faced Skott"
      },
      "passed": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "P1_BaseSpeed",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;"
        },
        {
          "name": "Add Battle Event",
          "teamName": "Enemy Team",
          "eventID": 20025,
          "variables": {
            "BE_P1_BESpeed": {
              "operator": "Variables[0] (P1_BaseSpeed) || RETURN",
              "displayLines": "P1_BaseSpeed",
              "constants": [],
              "variables": [
                "P1_BaseSpeed"
              ]
            },
            "P2_BreakDelayRatioPerFigure": {
              "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
              "displayLines": "{[Skill02[1]]}",
              "constants": [],
              "variables": [
                "{[Skill02[1]]}"
              ]
            },
            "BE_P3_InitDelay": {
              "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
              "displayLines": "{[Skill02[2]]}",
              "constants": [],
              "variables": [
                "{[Skill02[2]]}"
              ]
            }
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value": "MonsterType_W3_Dinosaur_00"
          }
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1839261754\">Enemy_W3_Theater_HideWeakness</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueList": []
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1754146880\">Enemy_W3_Theater_PartController</a>",
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
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
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
                    "value1": "InsertCheck",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value": "ENEMIES_OBJECT_UNUSED__114"
                      },
                      "ifTargetFound": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "Has Flag",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "flagName": "Break"
                              }
                            ]
                          }
                        },
                        {
                          "name": "Dispel Debuffs",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "silent": true
                        }
                      ]
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
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
                      "abilityName": "Monster_W3_Theater_PassiveAbility01_Insert",
                      "priorityTag": "MonsterChangePhase",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
                    }
                  ]
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
      "for": "<a class=\"gModGreen\" id=\"mod__772761347\">Enemy_W3_Theater_ViewModeListener</a>",
      "execute": [
        {
          "eventTrigger": "Enter View-Mode [Anyone]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
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
                    "value": "ENEMIES_OBJECT_UNUSED__114"
                  },
                  {
                    "name": "OR",
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
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "Break"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "DisableAction"
                      }
                    ]
                  }
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Exit View-Mode [Anyone]"
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1948547262\">Enemy_W3_Theater_TV2Mark</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1990801725\">Enemy_W3_Theater_TV1Mark</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__401919097\">Enemy_W3_Theater_MainStoryDisableAction</a>",
      "modifierFlags": [
        "DisableAction"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__704406634\">Enemy_W3_Theater_ImmuneDebuff</a>",
      "modifierFlags": [
        "ImmuneDebuff"
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1099674866\">Enemy_W3_Theather_Initiate</a>",
      "modifierFlags": [
        "MuteSpeed",
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            "Mark Entity as Non-Target(Unselectable)",
            {
              "name": "Remove from Team Target Grouping",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "stayInTeam": false
            },
            {
              "name": "Boss Bar Display",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "display": true
            },
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[Skill08[1]]}) || RETURN",
                "displayLines": "{[Skill08[1]]}",
                "constants": [],
                "variables": [
                  "{[Skill08[1]]}"
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
                  "locationType": "Last"
                }
              ]
            },
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[Skill08[4]]}) || RETURN",
                "displayLines": "{[Skill08[4]]}",
                "constants": [],
                "variables": [
                  "{[Skill08[4]]}"
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
                  "locationType": "Last"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value": "Theater_Rogue"
              },
              "passed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "operator": "Variables[0] ({[Skill08[2]]}) || RETURN",
                    "displayLines": "{[Skill08[2]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill08[2]]}"
                    ]
                  },
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Variables[0] (SummonList_ADF_5) || RETURN",
                        "displayLines": "SummonList_ADF_5",
                        "constants": [],
                        "variables": [
                          "SummonList_ADF_5"
                        ]
                      },
                      "locationType": "First"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "operator": "Variables[0] ({[Skill08[2]]}) || RETURN",
                    "displayLines": "{[Skill08[2]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill08[2]]}"
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
                      "locationType": "First"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[Skill08[3]]}) || RETURN",
                "displayLines": "{[Skill08[3]]}",
                "constants": [],
                "variables": [
                  "{[Skill08[3]]}"
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
                  "locationType": "First"
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
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "ENEMIES_OBJECT_UNUSED__114"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target List}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1055277375\">MModifier_Monster_W3_Theater_DamageSharePhase1</a>"
                },
                {
                  "name": "Create Shared HP Group",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "subTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target List}}"
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target List}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1459208645\">W3_Theater_BattleScore2</a>"
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
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "MonsterType_W3_Dinosaur_00"
              },
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "value": "Theater_Rogue"
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
                    "value": "ENEMIES_OBJECT_UNUSED__114"
                  },
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "MonsterType_W3_TV_00"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1990801725\">Enemy_W3_Theater_TV1Mark</a>"
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
                    "value": "ENEMIES_OBJECT_UNUSED__114"
                  },
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "MonsterType_W3_TV_00"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1990801725\">Enemy_W3_Theater_TV1Mark</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1948547262\">Enemy_W3_Theater_TV2Mark</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "MonsterType_W3_Dinosaur_00"
              },
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "value": "Theater_Rogue"
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
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"824631784\">Enemy_W3_Theater_MainStoryMark</a>"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": ">=",
                    "value2": 2
                  }
                ]
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "searchRandom": true,
                  "ifTargetFound": [
                    {
                      "name": "Change Character Transformation",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "phase": "Phase1"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"401919097\">Enemy_W3_Theater_MainStoryDisableAction</a>"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Create Shared HP Group",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "isRemove": true
                },
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "value": "Theater_Rogue"
              },
              "passed": [
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{All Unselectable Targets}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Battle Event ID",
                          "ID": 20025,
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          }
                        }
                      }
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{All Unselectable Targets}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Battle Event ID",
                          "ID": 20010,
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          }
                        }
                      }
                    ]
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
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"824631784\">Enemy_W3_Theater_MainStoryMark</a>"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": ">=",
                    "value2": 2
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": 0.1
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_MainStroyDialog",
                    "compareType": "=",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_MainStroyDialog",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "priorityLevel": -91
        },
        {
          "eventTrigger": "Weakness Break [Anyone]"
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}