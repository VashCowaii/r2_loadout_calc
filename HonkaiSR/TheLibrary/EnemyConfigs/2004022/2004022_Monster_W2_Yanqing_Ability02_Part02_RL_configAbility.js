const configAbility = {
  "fileName": "2004022_Monster_W2_Yanqing_Ability02_Part02_RL",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1666789092\">Enemy_W2_Yanqing_Ability02_MarkingCountDown_1</a>[<span class=\"descriptionNumberColor\">Ready for Battle</span>]"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1616456235\">Enemy_W2_Yanqing_Ability02_MarkingCountDown_2</a>[<span class=\"descriptionNumberColor\">Ready for Battle</span>]"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Caster's Minions}}"
        },
        "value1": "TeamCharacterCount",
        "compareType": ">=",
        "value2": 1
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Caster's Minions}}"
        },
        "value1": "TeamCharacterCount",
        "compareType": ">=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1328693800\">Enemy_W2_Yanqing_Ability02_DuringSkill</a>"
        },
        {
          "name": "Mark Entity For Immediate Death",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          }
        },
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          }
        },
        {
          "name": "Remove from Team Target Grouping",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "stayInTeam": false
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1560182165\">Enemy_W2_Yanqing_Ability02_Mark</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
        }
      ]
    },
    {
      "name": "WAIT FOR",
      "condition": {
        "name": "Death Animation Completed",
        "team": "Enemy Team",
        "type": "Team Characters"
      }
    },
    {
      "name": "Create Enemies",
      "refreshPositions": false,
      "enemyList": [
        {
          "name": "Create Enemy from Custom",
          "value": "W2_Yanqing_00_Skill02_SummonID01",
          "summonLocation": "BeforeCaster"
        },
        {
          "name": "Create Enemy from Custom",
          "value": "W2_Yanqing_00_Skill02_SummonID01",
          "summonLocation": "AfterCaster"
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{All Team Members}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "Is Part Of Team Location",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "team": "Enemy Team"
      },
      "ifTargetFound": [
        {
          "name": "Assign Unique Name",
          "uniqueName": "W2_Yanqing_00_Skill02_SummonMinion_Pos_2",
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
        "target": "{{All Team Members}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "Is Part Of Team Location",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "team": "Enemy Team",
        "location": "Max"
      },
      "ifTargetFound": [
        {
          "name": "Assign Unique Name",
          "uniqueName": "W2_Yanqing_00_Skill02_SummonMinion_Pos_4",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          }
        }
      ]
    },
    {
      "name": "Create Enemies",
      "enemyList": [
        {
          "name": "Create Enemy from Custom",
          "value": "W2_Yanqing_00_Skill02_SummonID02",
          "summonLocation": "First"
        },
        {
          "name": "Create Enemy from Custom",
          "value": "W2_Yanqing_00_Skill02_SummonID02",
          "summonLocation": "Last"
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{All Team Members}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "Is Part Of Team Location",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "team": "Enemy Team"
      },
      "ifTargetFound": [
        {
          "name": "Assign Unique Name",
          "uniqueName": "W2_Yanqing_00_Skill02_SummonMinion_Pos_1",
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
        "target": "{{All Team Members}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "Is Part Of Team Location",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "team": "Enemy Team",
        "location": "Max"
      },
      "ifTargetFound": [
        {
          "name": "Assign Unique Name",
          "uniqueName": "W2_Yanqing_00_Skill02_SummonMinion_Pos_5",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
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
      "modifier": "<a class=\"gModGreen\" id=\"-1389810309\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_Core_RL</a>[<span class=\"descriptionNumberColor\">Sword Formation</span>]",
      "valuePerStack": {
        "MDF_SpeedDelta": {
          "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
          "displayLines": "{[Skill02[0]]}",
          "constants": [],
          "variables": [
            "{[Skill02[0]]}"
          ]
        }
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Random Chance",
        "chance": 0.33
      },
      "passed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "searchRandom": true,
          "maxTargets": 2,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"2095309040\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_Unrevealed</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2051112248\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_01</a>[<span class=\"descriptionNumberColor\">Formation Core</span>]"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"2095309040\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_Unrevealed</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2101445105\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_02</a>[<span class=\"descriptionNumberColor\">Formation Core</span>]"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"2095309040\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_Unrevealed</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2084667486\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_03</a>[<span class=\"descriptionNumberColor\">Formation Core</span>]"
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Random Chance",
            "chance": 0.5
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "searchRandom": true,
              "maxTargets": 2,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"2095309040\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_Unrevealed</a>",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2101445105\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_02</a>[<span class=\"descriptionNumberColor\">Formation Core</span>]"
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"2095309040\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_Unrevealed</a>",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2084667486\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_03</a>[<span class=\"descriptionNumberColor\">Formation Core</span>]"
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"2095309040\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_Unrevealed</a>",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2051112248\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_01</a>[<span class=\"descriptionNumberColor\">Formation Core</span>]"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "searchRandom": true,
              "maxTargets": 2,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"2095309040\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_Unrevealed</a>",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2084667486\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_03</a>[<span class=\"descriptionNumberColor\">Formation Core</span>]"
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"2095309040\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_Unrevealed</a>",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2051112248\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_01</a>[<span class=\"descriptionNumberColor\">Formation Core</span>]"
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"2095309040\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_Unrevealed</a>",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2101445105\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_02</a>[<span class=\"descriptionNumberColor\">Formation Core</span>]"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "W2_Yanqing_00_Skill02_AccumulateRevealed",
      "value": 0
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-204617197\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_Toast_Controller</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1501512671\">Enemy_W2_Yanqing_Ability02_WindToast</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"504784023\">Enemy_W2_Yanqing_Ability02_ThunderToast</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1106896946\">Enemy_W2_Yanqing_Ability02_ImaginaryToast</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"805504301\">Enemy_W2_Yanqing_Ability02_AdditiveToast</a>"
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
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1075172229\">HeiShengBei_PreAddBEModifier</a>"
      },
      "passed": [
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "set": 0
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "HP_Bars_Remaining",
        "compareType": "=",
        "value2": 3
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "FinalPhase",
            "compareType": "=",
            "value2": 1,
            "contextScope": "TargetEntity"
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-2068860507\">Enemy_W2_Yanqing_SwordPowerUp</a>[<span class=\"descriptionNumberColor\">Ordeal</span>]",
                    "invertCondition": true
                  },
                  {
                    "name": "Character ID",
                    "ID": "W2_Yanqing_00_Skill02_SummonID01",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": null
                  }
                ]
              },
              "ifTargetFound": [
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2068860507\">Enemy_W2_Yanqing_SwordPowerUp</a>[<span class=\"descriptionNumberColor\">Ordeal</span>]"
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-2068860507\">Enemy_W2_Yanqing_SwordPowerUp</a>[<span class=\"descriptionNumberColor\">Ordeal</span>]",
                    "invertCondition": true
                  },
                  {
                    "name": "Character ID",
                    "ID": "W2_Yanqing_00_Skill02_SummonID01",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": null
                  }
                ]
              },
              "ifTargetFound": [
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2068860507\">Enemy_W2_Yanqing_SwordPowerUp</a>[<span class=\"descriptionNumberColor\">Ordeal</span>]"
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-2068860507\">Enemy_W2_Yanqing_SwordPowerUp</a>[<span class=\"descriptionNumberColor\">Ordeal</span>]",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "multiBase": 1.5
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2068860507\">Enemy_W2_Yanqing_SwordPowerUp</a>[<span class=\"descriptionNumberColor\">Ordeal</span>]"
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-2068860507\">Enemy_W2_Yanqing_SwordPowerUp</a>[<span class=\"descriptionNumberColor\">Ordeal</span>]",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2068860507\">Enemy_W2_Yanqing_SwordPowerUp</a>[<span class=\"descriptionNumberColor\">Ordeal</span>]"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-2068860507\">Enemy_W2_Yanqing_SwordPowerUp</a>[<span class=\"descriptionNumberColor\">Ordeal</span>]",
                    "invertCondition": true
                  },
                  {
                    "name": "Character ID",
                    "ID": "W2_Yanqing_00_Skill02_SummonID01",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": null
                  }
                ]
              },
              "ifTargetFound": [
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2068860507\">Enemy_W2_Yanqing_SwordPowerUp</a>[<span class=\"descriptionNumberColor\">Ordeal</span>]"
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-2068860507\">Enemy_W2_Yanqing_SwordPowerUp</a>[<span class=\"descriptionNumberColor\">Ordeal</span>]",
                    "invertCondition": true
                  },
                  {
                    "name": "Character ID",
                    "ID": "W2_Yanqing_00_Skill02_SummonID01",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": null
                  }
                ]
              },
              "ifTargetFound": [
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2068860507\">Enemy_W2_Yanqing_SwordPowerUp</a>[<span class=\"descriptionNumberColor\">Ordeal</span>]"
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-2068860507\">Enemy_W2_Yanqing_SwordPowerUp</a>[<span class=\"descriptionNumberColor\">Ordeal</span>]",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "multiBase": 1.5
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
      "modifier": "<a class=\"gModGreen\" id=\"153779397\">Enemy_W2_Yanqing_01_StandByEffect</a>"
    },
    {
      "name": "Define Custom Variable with Modifier Values",
      "valueType": "Layer",
      "variableName": "OverdriveLayer",
      "modifierName": "<a class=\"gModGreen\" id=\"-1122230262\">Enemy_W2_Yanqing_Standard_Overdrive</a>[<span class=\"descriptionNumberColor\">Chilling Light</span>]",
      "multiplier": 1
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "OverdriveLayer",
        "compareType": ">=",
        "value2": 1,
        "contextScope": "TargetEntity"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1122230262\">Enemy_W2_Yanqing_Standard_Overdrive</a>[<span class=\"descriptionNumberColor\">Chilling Light</span>]",
          "valuePerStack": {
            "AllDamageTypeAddedRatioPerLayer": {
              "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
              "displayLines": "{[Skill01[1]]}",
              "constants": [],
              "variables": [
                "{[Skill01[1]]}"
              ]
            }
          },
          "addStacksPerTrigger": {
            "operator": "Variables[0] (OverdriveLayer) || RETURN",
            "displayLines": "OverdriveLayer",
            "constants": [],
            "variables": [
              "OverdriveLayer"
            ]
          }
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}