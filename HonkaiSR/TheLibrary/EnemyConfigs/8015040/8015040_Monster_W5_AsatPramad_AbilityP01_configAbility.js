const configAbility = {
  "fileName": "8015040_Monster_W5_AsatPramad_AbilityP01",
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Boss Bar Display",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "display": true
    },
    {
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "BaseAttack",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;"
    },
    {
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "BaseSpeed",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Check Boolean Value",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "value": "W5_AsatPramad_00"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-636682820\">Enemy_W5_AsatPramad_ShakeListener</a>"
        }
      ]
    },
    {
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "MaxHP",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1369501540\">Enemy_W5_AsatPramad_DisableLookAt</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1678225227\">Enemy_W5_AsatPramad_MuteHitFly</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target",
        "target": {
          "name": "Target Name",
          "target": "{{Asat Pramad: 0}}"
        },
        "target2": {
          "name": "Target Name",
          "target": "{{Caster}}"
        }
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-473353257\">Enemy_W5_AsatPramad_Effect00</a>"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target",
        "target": {
          "name": "Target Name",
          "target": "{{Asat Pramad: 1}}"
        },
        "target2": {
          "name": "Target Name",
          "target": "{{Caster}}"
        }
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-490130876\">Enemy_W5_AsatPramad_Effect01</a>"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target",
        "target": {
          "name": "Target Name",
          "target": "{{Asat Pramad: 2}}"
        },
        "target2": {
          "name": "Target Name",
          "target": "{{Caster}}"
        }
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-439798019\">Enemy_W5_AsatPramad_Effect02</a>"
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
        "value": "W5_AsatPramad_00"
      },
      "passed": [
        {
          "name": "Change Character UI",
          "characterName": "Lord of Saṃvartasthāyi, Asat Pramad: \"Formation\""
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
            "ID": 2350,
            "compareType": "<=",
            "characterName": null
          },
          {
            "name": "Stage ID",
            "ID": 2344,
            "compareType": ">=",
            "characterName": null
          }
        ]
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target",
            "target": {
              "name": "Target Name",
              "target": "{{Asat Pramad: 2}}"
            },
            "target2": {
              "name": "Target Name",
              "target": "{{Caster}}"
            }
          },
          "passed": [
            {
              "name": "Assign Unique Name",
              "uniqueName": "W5_AsatPramad_02",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Stage ID",
                "ID": 2350,
                "compareType": "=",
                "characterName": null
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"964206682\">W5_AsatPramad_Part03BEBreakSet</a>"
                },
                {
                  "name": "Change Entity Turn-State",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Asat Pramad: 0}} + {{Asat Pramad: 1}} + {{Asat Pramad: 2}}"
                  },
                  "phase": "Phase1"
                },
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Asat Pramad: 0}}+{{Asat Pramad: 1}}+{{Asat Pramad: 2}}"
                  },
                  "set": 999
                },
                {
                  "name": "Create Shared HP Group",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "subTarget": {
                    "name": "Target Name",
                    "target": "{{Asat Pramad: 0}} + {{Asat Pramad: 1}}"
                  }
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-180566802\">Enemy_W5_AsatPramad_EnterBattle</a>"
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Asat Pramad: 1}}"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Assign Unique Name",
                      "uniqueName": "W5_AsatPramad_01",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    },
                    {
                      "name": "Remove from Team Target Grouping",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "stayInTeam": false
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1445036185\">AddMuteSpeedAndLockActionDelayChange</a>",
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
                    "target": "{{Asat Pramad: 0}}"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Assign Unique Name",
                      "uniqueName": "W5_AsatPramad_00",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    },
                    {
                      "name": "Remove from Team Target Grouping",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "stayInTeam": false
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1445036185\">AddMuteSpeedAndLockActionDelayChange</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    }
                  ]
                },
                {
                  "name": "Create Shared HP Group",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "subTarget": {
                    "name": "Target Name",
                    "target": "{{Asat Pramad: 0}} + {{Asat Pramad: 1}}"
                  }
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Stage ID",
                    "ID": 2344,
                    "compareType": "NOT=",
                    "characterName": null
                  },
                  {
                    "name": "Stage ID",
                    "ID": 2350,
                    "compareType": "NOT=",
                    "characterName": null
                  }
                ]
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
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"596508493\">Enemy_W5_AsatPramad_BreakController</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Asat Pramad: 0}} + {{Asat Pramad: 1}} + {{Asat Pramad: 2}}"
          },
          "includeDyingTargets": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Is Related Summoned Entity",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "target2": {
              "name": "Target Name",
              "target": "{{Caster}}"
            }
          },
          "ifTargetFound": [
            {
              "name": "Set Enemy Phase",
              "phase": 3
            }
          ],
          "noTargetFound": [
            {
              "name": "Boss Bar Display",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "display": true
            },
            {
              "name": "Preload Battle Event(s)",
              "eventID": [
                20045
              ]
            },
            {
              "name": "Add Battle Event",
              "teamName": "Enemy Team",
              "eventID": 20045,
              "variables": null,
              "whenCreated": [
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "multiBase": 0
                },
                {
                  "name": "Assign Unique Name",
                  "uniqueName": "BossSummonMonster",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "AIFlag",
              "value": 20
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "isPhase03EnterBattle",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "value": "W5_AsatPramad_MainStory440P3",
                    "invertCondition": true
                  }
                },
                {
                  "name": "Set Enemy Phase",
                  "phase": 3
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-180566802\">Enemy_W5_AsatPramad_EnterBattle</a>"
                },
                {
                  "name": "Create Enemies",
                  "delayPercent": 0.333,
                  "refreshPositions": false,
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Variables[0] (AsatPramad01ID) || RETURN",
                        "displayLines": "AsatPramad01ID",
                        "constants": [],
                        "variables": [
                          "AsatPramad01ID"
                        ]
                      },
                      "locationType": "BeforeCaster"
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Recently Summoned Enemies}}"
                  },
                  "variableName": "AIFlag",
                  "value": 12
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Recently Summoned Enemies}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1242962761\">Enemy_W5_AsatPramad_Part03Unselectable</a>"
                },
                {
                  "name": "Create Enemies",
                  "delayPercent": 0.667,
                  "refreshPositions": false,
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Variables[0] (AsatPramad02ID) || RETURN",
                        "displayLines": "AsatPramad02ID",
                        "constants": [],
                        "variables": [
                          "AsatPramad02ID"
                        ]
                      },
                      "locationType": "BeforeCaster"
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Recently Summoned Enemies}}"
                  },
                  "variableName": "AIFlag",
                  "value": 1
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Recently Summoned Enemies}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1242962761\">Enemy_W5_AsatPramad_Part03Unselectable</a>"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 12
                },
                {
                  "name": "Remove from Team Target Grouping",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Asat Pramad: 0}}"
                  },
                  "stayInTeam": false
                },
                {
                  "name": "Remove from Team Target Grouping",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Asat Pramad: 1}}"
                  },
                  "stayInTeam": false
                },
                {
                  "name": "Create Shared HP Group",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Asat Pramad: 2}}"
                  },
                  "subTarget": {
                    "name": "Target Name",
                    "target": "{{Asat Pramad: 0}} + {{Asat Pramad: 1}}"
                  }
                },
                {
                  "name": "Boss Bar Display",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Asat Pramad: 2}}"
                  },
                  "display": true
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Asat Pramad: 0}} + {{Asat Pramad: 1}} + {{Asat Pramad: 2}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-551162872\">Enemy_W5_AsatPramad_Part03</a>",
                  "valuePerStack": {
                    "MDF_Part03SpeedAddRatio": {
                      "operator": "Variables[0] ({[SkillP01[5]]}) || RETURN",
                      "displayLines": "{[SkillP01[5]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillP01[5]]}"
                      ]
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Add Target by Unique Identifier",
                    "identifier": "BossSummonMonster"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"975723655\">Enemy_W5_AsatPramad_BESpeedUp</a>",
                  "valuePerStack": {
                    "MDF_SpeedAddedRatio": {
                      "operator": "Variables[0] ({[SkillP04[3]]}) || RETURN",
                      "displayLines": "{[SkillP04[3]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillP04[3]]}"
                      ]
                    }
                  }
                },
                {
                  "name": "Preload Battle Event(s)",
                  "eventID": [
                    20046
                  ]
                },
                {
                  "name": "Add Battle Event",
                  "teamName": "Enemy Team",
                  "eventID": 20046,
                  "variables": null,
                  "whenCreated": [
                    {
                      "name": "Action Advance/Delay",
                      "advanceType": "Set",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "multiBase": 2
                    },
                    {
                      "name": "Assign Unique Name",
                      "uniqueName": "BossUltra",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"975723655\">Enemy_W5_AsatPramad_BESpeedUp</a>",
                      "valuePerStack": {
                        "MDF_SpeedAddedRatio": {
                          "operator": "Variables[0] (UnusedUnderThisBase_13195) || RETURN",
                          "displayLines": "UnusedUnderThisBase_13195",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_13195"
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "Preload Battle Event(s)",
                  "eventID": [
                    20050,
                    20051
                  ]
                },
                {
                  "name": "Add Battle Event",
                  "teamName": "Enemy Team",
                  "eventID": 20050,
                  "variables": null,
                  "whenCreated": [
                    {
                      "name": "Action Advance/Delay",
                      "advanceType": "Set",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "multiBase": 1
                    },
                    {
                      "name": "Assign Unique Name",
                      "uniqueName": "BE_AsatPramad_00",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-660230935\">Enemy_W5_AsatPramad_Part03Mark</a>[<span class=\"descriptionNumberColor\">Three Faces as One</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2037385218\">Enemy_W5_AsatPramad_Part03UnselectableMark</a>[<span class=\"descriptionNumberColor\">Elation Depleted</span>]"
                    }
                  ]
                },
                {
                  "name": "Add Battle Event",
                  "teamName": "Enemy Team",
                  "eventID": 20051,
                  "variables": null,
                  "whenCreated": [
                    {
                      "name": "Action Advance/Delay",
                      "advanceType": "Set",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "multiBase": 0.5
                    },
                    {
                      "name": "Assign Unique Name",
                      "uniqueName": "BE_AsatPramad_01",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-660230935\">Enemy_W5_AsatPramad_Part03Mark</a>[<span class=\"descriptionNumberColor\">Three Faces as One</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2037385218\">Enemy_W5_AsatPramad_Part03UnselectableMark</a>[<span class=\"descriptionNumberColor\">Elation Depleted</span>]"
                    }
                  ]
                },
                {
                  "name": "Preload Battle Event(s)",
                  "eventID": [
                    60044
                  ]
                },
                {
                  "name": "Add Battle Event",
                  "teamName": "Player Team",
                  "dmgCountsForTeam": "Player Team",
                  "eventID": 60044,
                  "variables": null,
                  "whenCreated": [
                    {
                      "name": "Assign Unique Name",
                      "uniqueName": "HimekoBE",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    },
                    {
                      "name": "Show BattleEvent Button",
                      "show": true
                    }
                  ]
                },
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Add Target by Unique Identifier",
                    "identifier": "BossSummonMonster"
                  },
                  "set": 0
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1105309933\">Enemy_W5_AsatPramad_PartController</a>"
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
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-180566802\">Enemy_W5_AsatPramad_EnterBattle</a>",
      "latentQueue": [
        "AIFlag",
        "isPhase03EnterBattle"
      ],
      "execute": [
        {
          "eventTrigger": "Turn [Anyone]: Start",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1369501540\">Enemy_W5_AsatPramad_DisableLookAt</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1576555605\">Enemy_W5_AsatPramad_ModelChange</a>",
      "execute": [
        {
          "eventTrigger": "Action Completed [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "MDF_CurrentFace",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_CurrentFace",
                  "value": 1
                },
                {
                  "name": "Change Character Model",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_CurrentFace",
                  "value": 0
                },
                {
                  "name": "Change Character Model",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
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
      "for": "<a class=\"gModGreen\" id=\"mod__596508493\">Enemy_W5_AsatPramad_BreakController</a>",
      "modifierFlags": [
        "MuteHitFly"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "Turn [Owner]: Pre-action Phase"
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "AIFlag",
              "value": 1
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
            },
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
                "value2": 2
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
                    "value1": "CurrentFace",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1839166892\">W5_AsatPramad_Part02ChangeTo00</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "CurrentFace",
                      "value": 0
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1678225227\">Enemy_W5_AsatPramad_MuteHitFly</a>",
      "modifierFlags": [
        "MuteHitFly"
      ]
    }
  ]
}