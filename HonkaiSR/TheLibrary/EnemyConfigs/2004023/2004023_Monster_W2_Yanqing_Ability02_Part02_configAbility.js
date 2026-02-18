const configAbility = {
  "fileName": "2004023_Monster_W2_Yanqing_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
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
      "delayPercent": 0,
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
      "name": "Create Enemies",
      "delayPercent": 0.5,
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
      "name": "Define Custom Variable with Team Count",
      "target": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "variableName": "W2_Yanqing_00_Skill02_SummonNumber",
      "livingTargets": true
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"1108547427\">Enemy_W2_Yanqing_PassiveAbilityMainBattle</a>"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-242524526\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_Core_MainBattle</a>[<span class=\"descriptionNumberColor\">Sword Formation</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1881028391\">Enemy_W2_Yanqing_MainBattle_Fatigue</a>"
        }
      ],
      "failed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"194045592\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_Core</a>[<span class=\"descriptionNumberColor\">Sword Formation</span>]",
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
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"1108547427\">Enemy_W2_Yanqing_PassiveAbilityMainBattle</a>"
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
            "name": "Character ID",
            "ID": "W2_Yanqing_00_Skill02_SummonID01",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null
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
          "maxTargets": 2,
          "conditions": {
            "name": "Character ID",
            "ID": "W2_Yanqing_00_Skill02_SummonID02",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null
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
            },
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
                },
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
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"1108547427\">Enemy_W2_Yanqing_PassiveAbilityMainBattle</a>"
      },
      "failed": [
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
        }
      ]
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
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"153779397\">Enemy_W2_Yanqing_01_StandByEffect</a>"
    },
    "Trigger: Ability End"
  ],
  "references": []
}