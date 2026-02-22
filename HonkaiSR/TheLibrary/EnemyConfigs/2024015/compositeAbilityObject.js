const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 2024015,
  "trimCharacterName": 2024015,
  "abilityList": [
    "2024015_Monster_W2_Xuanlu_10_Ability14_Initiate",
    "2024015_Monster_W2_Xuanlu_10_Ability13_Part02",
    "2024015_Monster_W2_Xuanlu_10_Ability13_Part01",
    "2024015_Monster_W2_Xuanlu_10_Ability12_Part02",
    "2024015_Monster_W2_Xuanlu_10_Ability12_Part01",
    "2024015_Monster_W2_Xuanlu_10_Ability11_Part02",
    "2024015_Monster_W2_Xuanlu_10_Ability11_Part01",
    "2024015_Monster_W2_Xuanlu_10_Ability10_Part02",
    "2024015_Monster_W2_Xuanlu_10_Ability10_Part01",
    "2024015_Monster_W2_Xuanlu_10_Ability09_Part02",
    "2024015_Monster_W2_Xuanlu_10_Ability09_Part01",
    "2024015_Monster_W2_Xuanlu_10_Ability08_Part02",
    "2024015_Monster_W2_Xuanlu_10_Ability08_Part01",
    "2024015_Monster_W2_Xuanlu_10_ChangePhase3",
    "2024015_Monster_W2_Xuanlu_10_ChangePhase2",
    "2024015_Monster_W2_Xuanlu_10_PassiveAbility_Initiate",
    "2024015_Monster_W2_Xuanlu_Pingshu_PassiveAbility_Initiate",
    "2024015_Monster_W2_Xuanlu_PassiveAbility_Insert",
    "2024015_Monster_W2_Xuanlu_Mainline_Final",
    "2024015_Monster_W2_Xuanlu_Mainline_Heal",
    "2024015_Monster_W2_Xuanlu_Ability09_Part02",
    "2024015_Monster_W2_Xuanlu_Ability09_Part01",
    "2024015_Monster_W2_Xuanlu_Ability08_Part02",
    "2024015_Monster_W2_Xuanlu_Ability08_Part01",
    "2024015_Monster_W2_Xuanlu_Ability07_Part02",
    "2024015_Monster_W2_Xuanlu_Ability07_Part01",
    "2024015_Monster_W2_Xuanlu_Ability06_Part02",
    "2024015_Monster_W2_Xuanlu_Ability06_Part01",
    "2024015_Monster_W2_Xuanlu_Ability05_Part02",
    "2024015_Monster_W2_Xuanlu_Ability05_Part01",
    "2024015_Monster_W2_Xuanlu_Ability04_Part02",
    "2024015_Monster_W2_Xuanlu_Ability04_Part01",
    "2024015_Monster_W2_Xuanlu_Ability03_Part02",
    "2024015_Monster_W2_Xuanlu_Ability03_Part01",
    "2024015_Monster_W2_Xuanlu_Ability02_Part02",
    "2024015_Monster_W2_Xuanlu_Ability02_Part01",
    "2024015_Monster_W2_Xuanlu_Ability01_Part02",
    "2024015_Monster_W2_Xuanlu_Ability01_Part01",
    "2024015_Monster_W2_Xuanlu_PassiveAbility_Initiate",
    "2024015_Monster_W2_Xuanlu_PassiveAbility_BGM",
    "2024015_Modifiers"
  ],
  "abilityObject": {
    "2024015_Monster_W2_Xuanlu_10_Ability14_Initiate": {
      "fileName": "2024015_Monster_W2_Xuanlu_10_Ability14_Initiate",
      "childAbilityList": [
        "2024015_Monster_W2_Xuanlu_10_Ability14_Initiate"
      ],
      "skillTrigger": "Skill14",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1367728749\">Enemy_W2_Xuanlu_10_RL_RageHandler</a>",
          "valuePerStack": {
            "MDF_DamageUpRatio_PerLayer": {
              "operator": "Variables[0] ({[Skill14[0]]}) || RETURN",
              "displayLines": "{[Skill14[0]]}",
              "constants": [],
              "variables": [
                "{[Skill14[0]]}"
              ]
            }
          }
        }
      ],
      "references": []
    },
    "2024015_Monster_W2_Xuanlu_10_Ability13_Part02": {
      "fileName": "2024015_Monster_W2_Xuanlu_10_Ability13_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{All Team Members}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": "<=",
                "value2": 4
              },
              {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{All Team Members}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": "<=",
                "value2": 1,
                "conditions": {
                  "name": "Character ID",
                  "ID": "SummonMinionID_4",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "characterName": null
                }
              }
            ]
          },
          "passed": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[Skill13[0]]}) || RETURN",
                "displayLines": "{[Skill13[0]]}",
                "constants": [],
                "variables": [
                  "{[Skill13[0]]}"
                ]
              },
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonMinionID_4) || RETURN",
                    "displayLines": "SummonMinionID_4",
                    "constants": [],
                    "variables": [
                      "SummonMinionID_4"
                    ]
                  },
                  "locationType": "AfterCaster"
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
              "conditions": {
                "name": "Enemy ID",
                "ID": {
                  "operator": "Variables[0] (SummonMinionID_4) || RETURN",
                  "displayLines": "SummonMinionID_4",
                  "constants": [],
                  "variables": [
                    "SummonMinionID_4"
                  ]
                },
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
                  "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1146705485\">Enemy_W2_Xuanlu_10_MinionMark_4</a>",
                  "valuePerStack": {
                    "MDF_MaxMinionCount": {
                      "operator": "Variables[0] (MaxMinionCount) || RETURN",
                      "displayLines": "MaxMinionCount",
                      "constants": [],
                      "variables": [
                        "MaxMinionCount"
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
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{All Team Members}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": "<=",
                "value2": 4
              },
              {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{All Team Members}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": "<=",
                "value2": 1,
                "conditions": {
                  "name": "Character ID",
                  "ID": "SummonMinionID_4",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "characterName": null
                }
              }
            ]
          },
          "passed": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[Skill13[1]]}) || RETURN",
                "displayLines": "{[Skill13[1]]}",
                "constants": [],
                "variables": [
                  "{[Skill13[1]]}"
                ]
              },
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonMinionID_4) || RETURN",
                    "displayLines": "SummonMinionID_4",
                    "constants": [],
                    "variables": [
                      "SummonMinionID_4"
                    ]
                  },
                  "locationType": "BeforeCaster"
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
              "conditions": {
                "name": "Enemy ID",
                "ID": {
                  "operator": "Variables[0] (SummonMinionID_4) || RETURN",
                  "displayLines": "SummonMinionID_4",
                  "constants": [],
                  "variables": [
                    "SummonMinionID_4"
                  ]
                },
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
                  "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1146705485\">Enemy_W2_Xuanlu_10_MinionMark_4</a>",
                  "valuePerStack": {
                    "MDF_MaxMinionCount": {
                      "operator": "Variables[0] (MaxMinionCount) || RETURN",
                      "displayLines": "MaxMinionCount",
                      "constants": [],
                      "variables": [
                        "MaxMinionCount"
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
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{All Team Members}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": "<=",
                "value2": 4
              },
              {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{All Team Members}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": "=",
                "value2": 0,
                "conditions": {
                  "name": "Character ID",
                  "ID": "SummonMinionID_2",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "characterName": null
                }
              }
            ]
          },
          "passed": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[Skill13[2]]}) || RETURN",
                "displayLines": "{[Skill13[2]]}",
                "constants": [],
                "variables": [
                  "{[Skill13[2]]}"
                ]
              },
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonMinionID_2) || RETURN",
                    "displayLines": "SummonMinionID_2",
                    "constants": [],
                    "variables": [
                      "SummonMinionID_2"
                    ]
                  },
                  "locationType": "AroundCasterOnEdge"
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
              "conditions": {
                "name": "Enemy ID",
                "ID": {
                  "operator": "Variables[0] (SummonMinionID_2) || RETURN",
                  "displayLines": "SummonMinionID_2",
                  "constants": [],
                  "variables": [
                    "SummonMinionID_2"
                  ]
                },
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
                  "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1046039771\">Enemy_W2_Xuanlu_10_MinionMark_2</a>",
                  "valuePerStack": {
                    "MDF_MaxMinionCount": {
                      "operator": "Variables[0] (MaxMinionCount) || RETURN",
                      "displayLines": "MaxMinionCount",
                      "constants": [],
                      "variables": [
                        "MaxMinionCount"
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
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{All Team Members}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": "<=",
            "value2": 4
          },
          "passed": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[Skill13[3]]}) || RETURN",
                "displayLines": "{[Skill13[3]]}",
                "constants": [],
                "variables": [
                  "{[Skill13[3]]}"
                ]
              },
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonMinionID_1) || RETURN",
                    "displayLines": "SummonMinionID_1",
                    "constants": [],
                    "variables": [
                      "SummonMinionID_1"
                    ]
                  },
                  "locationType": "AroundCasterOnEdge"
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
              "conditions": {
                "name": "Enemy ID",
                "ID": {
                  "operator": "Variables[0] (SummonMinionID_1) || RETURN",
                  "displayLines": "SummonMinionID_1",
                  "constants": [],
                  "variables": [
                    "SummonMinionID_1"
                  ]
                },
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
                  "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1062817390\">Enemy_W2_Xuanlu_10_MinionMark_1</a>",
                  "valuePerStack": {
                    "MDF_MaxMinionCount": {
                      "operator": "Variables[0] (MaxMinionCount) || RETURN",
                      "displayLines": "MaxMinionCount",
                      "constants": [],
                      "variables": [
                        "MaxMinionCount"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "2024015_Monster_W2_Xuanlu_10_Ability13_Part01": {
      "fileName": "2024015_Monster_W2_Xuanlu_10_Ability13_Part01",
      "childAbilityList": [
        "2024015_Monster_W2_Xuanlu_10_Ability13_Part01",
        "2024015_Monster_W2_Xuanlu_10_Ability13_Part02"
      ],
      "skillTrigger": "Skill13",
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
          "ability": "Monster_W2_Xuanlu_10_Ability13_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2024015_Monster_W2_Xuanlu_10_Ability12_Part02": {
      "fileName": "2024015_Monster_W2_Xuanlu_10_Ability12_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{All Team Members}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": "<=",
                "value2": 4
              },
              {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{All Team Members}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": "=",
                "value2": 0,
                "conditions": {
                  "name": "Character ID",
                  "ID": "SummonMinionID_3",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "characterName": null
                }
              }
            ]
          },
          "passed": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[Skill12[0]]}) || RETURN",
                "displayLines": "{[Skill12[0]]}",
                "constants": [],
                "variables": [
                  "{[Skill12[0]]}"
                ]
              },
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonMinionID_3) || RETURN",
                    "displayLines": "SummonMinionID_3",
                    "constants": [],
                    "variables": [
                      "SummonMinionID_3"
                    ]
                  },
                  "locationType": "Last"
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
              "conditions": {
                "name": "Enemy ID",
                "ID": {
                  "operator": "Variables[0] (SummonMinionID_3) || RETURN",
                  "displayLines": "SummonMinionID_3",
                  "constants": [],
                  "variables": [
                    "SummonMinionID_3"
                  ]
                },
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
                  "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1029262152\">Enemy_W2_Xuanlu_10_MinionMark_3</a>",
                  "valuePerStack": {
                    "MDF_MaxMinionCount": {
                      "operator": "Variables[0] (MaxMinionCount) || RETURN",
                      "displayLines": "MaxMinionCount",
                      "constants": [],
                      "variables": [
                        "MaxMinionCount"
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
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{All Team Members}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": "<=",
                "value2": 4
              },
              {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{All Team Members}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": "=",
                "value2": 0,
                "conditions": {
                  "name": "Character ID",
                  "ID": "SummonMinionID_1",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "characterName": null
                }
              }
            ]
          },
          "passed": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[Skill12[1]]}) || RETURN",
                "displayLines": "{[Skill12[1]]}",
                "constants": [],
                "variables": [
                  "{[Skill12[1]]}"
                ]
              },
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonMinionID_1) || RETURN",
                    "displayLines": "SummonMinionID_1",
                    "constants": [],
                    "variables": [
                      "SummonMinionID_1"
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
                "target": "{{Caster's Minions}}"
              },
              "searchRandom": true,
              "conditions": {
                "name": "Enemy ID",
                "ID": {
                  "operator": "Variables[0] (SummonMinionID_1) || RETURN",
                  "displayLines": "SummonMinionID_1",
                  "constants": [],
                  "variables": [
                    "SummonMinionID_1"
                  ]
                },
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
                  "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1062817390\">Enemy_W2_Xuanlu_10_MinionMark_1</a>",
                  "valuePerStack": {
                    "MDF_MaxMinionCount": {
                      "operator": "Variables[0] (MaxMinionCount) || RETURN",
                      "displayLines": "MaxMinionCount",
                      "constants": [],
                      "variables": [
                        "MaxMinionCount"
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
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{All Team Members}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": "<=",
            "value2": 4
          },
          "passed": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[Skill12[2]]}) || RETURN",
                "displayLines": "{[Skill12[2]]}",
                "constants": [],
                "variables": [
                  "{[Skill12[2]]}"
                ]
              },
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonMinionID_2) || RETURN",
                    "displayLines": "SummonMinionID_2",
                    "constants": [],
                    "variables": [
                      "SummonMinionID_2"
                    ]
                  },
                  "locationType": "AroundCaster"
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
              "conditions": {
                "name": "Enemy ID",
                "ID": {
                  "operator": "Variables[0] (SummonMinionID_2) || RETURN",
                  "displayLines": "SummonMinionID_2",
                  "constants": [],
                  "variables": [
                    "SummonMinionID_2"
                  ]
                },
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
                  "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1046039771\">Enemy_W2_Xuanlu_10_MinionMark_2</a>",
                  "valuePerStack": {
                    "MDF_MaxMinionCount": {
                      "operator": "Variables[0] (MaxMinionCount) || RETURN",
                      "displayLines": "MaxMinionCount",
                      "constants": [],
                      "variables": [
                        "MaxMinionCount"
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
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{All Team Members}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": "<=",
            "value2": 4
          },
          "passed": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[Skill12[3]]}) || RETURN",
                "displayLines": "{[Skill12[3]]}",
                "constants": [],
                "variables": [
                  "{[Skill12[3]]}"
                ]
              },
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonMinionID_2) || RETURN",
                    "displayLines": "SummonMinionID_2",
                    "constants": [],
                    "variables": [
                      "SummonMinionID_2"
                    ]
                  },
                  "locationType": "AroundCaster"
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
              "conditions": {
                "name": "Enemy ID",
                "ID": {
                  "operator": "Variables[0] (SummonMinionID_2) || RETURN",
                  "displayLines": "SummonMinionID_2",
                  "constants": [],
                  "variables": [
                    "SummonMinionID_2"
                  ]
                },
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
                  "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1046039771\">Enemy_W2_Xuanlu_10_MinionMark_2</a>",
                  "valuePerStack": {
                    "MDF_MaxMinionCount": {
                      "operator": "Variables[0] (MaxMinionCount) || RETURN",
                      "displayLines": "MaxMinionCount",
                      "constants": [],
                      "variables": [
                        "MaxMinionCount"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "2024015_Monster_W2_Xuanlu_10_Ability12_Part01": {
      "fileName": "2024015_Monster_W2_Xuanlu_10_Ability12_Part01",
      "childAbilityList": [
        "2024015_Monster_W2_Xuanlu_10_Ability12_Part01",
        "2024015_Monster_W2_Xuanlu_10_Ability12_Part02"
      ],
      "skillTrigger": "Skill12",
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
          "ability": "Monster_W2_Xuanlu_10_Ability12_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2024015_Monster_W2_Xuanlu_10_Ability11_Part02": {
      "fileName": "2024015_Monster_W2_Xuanlu_10_Ability11_Part02",
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
              "target": "{{All Team Members}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": "<=",
            "value2": 4
          },
          "passed": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[Skill11[0]]}) || RETURN",
                "displayLines": "{[Skill11[0]]}",
                "constants": [],
                "variables": [
                  "{[Skill11[0]]}"
                ]
              },
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonMinionID_2) || RETURN",
                    "displayLines": "SummonMinionID_2",
                    "constants": [],
                    "variables": [
                      "SummonMinionID_2"
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
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{All Team Members}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": "<=",
            "value2": 4
          },
          "passed": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[Skill11[1]]}) || RETURN",
                "displayLines": "{[Skill11[1]]}",
                "constants": [],
                "variables": [
                  "{[Skill11[1]]}"
                ]
              },
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonMinionID_2) || RETURN",
                    "displayLines": "SummonMinionID_2",
                    "constants": [],
                    "variables": [
                      "SummonMinionID_2"
                    ]
                  },
                  "locationType": "AroundCasterOnEdge"
                }
              ]
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
          "conditions": {
            "name": "Enemy ID",
            "ID": {
              "operator": "Variables[0] (SummonMinionID_2) || RETURN",
              "displayLines": "SummonMinionID_2",
              "constants": [],
              "variables": [
                "SummonMinionID_2"
              ]
            },
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
              "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1046039771\">Enemy_W2_Xuanlu_10_MinionMark_2</a>",
              "valuePerStack": {
                "MDF_MaxMinionCount": {
                  "operator": "Variables[0] (MaxMinionCount) || RETURN",
                  "displayLines": "MaxMinionCount",
                  "constants": [],
                  "variables": [
                    "MaxMinionCount"
                  ]
                }
              }
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "2024015_Monster_W2_Xuanlu_10_Ability11_Part01": {
      "fileName": "2024015_Monster_W2_Xuanlu_10_Ability11_Part01",
      "childAbilityList": [
        "2024015_Monster_W2_Xuanlu_10_Ability11_Part01",
        "2024015_Monster_W2_Xuanlu_10_Ability11_Part02"
      ],
      "skillTrigger": "Skill11",
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
          "ability": "Monster_W2_Xuanlu_10_Ability11_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2024015_Monster_W2_Xuanlu_10_Ability10_Part02": {
      "fileName": "2024015_Monster_W2_Xuanlu_10_Ability10_Part02",
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
              "target": "{{All Team Members}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": "<=",
            "value2": 4
          },
          "passed": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[Skill10[0]]}) || RETURN",
                "displayLines": "{[Skill10[0]]}",
                "constants": [],
                "variables": [
                  "{[Skill10[0]]}"
                ]
              },
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonMinionID_1) || RETURN",
                    "displayLines": "SummonMinionID_1",
                    "constants": [],
                    "variables": [
                      "SummonMinionID_1"
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
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{All Team Members}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": "<=",
            "value2": 4
          },
          "passed": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[Skill10[1]]}) || RETURN",
                "displayLines": "{[Skill10[1]]}",
                "constants": [],
                "variables": [
                  "{[Skill10[1]]}"
                ]
              },
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonMinionID_1) || RETURN",
                    "displayLines": "SummonMinionID_1",
                    "constants": [],
                    "variables": [
                      "SummonMinionID_1"
                    ]
                  },
                  "locationType": "AroundCasterOnEdge"
                }
              ]
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
          "conditions": {
            "name": "Enemy ID",
            "ID": {
              "operator": "Variables[0] (SummonMinionID_1) || RETURN",
              "displayLines": "SummonMinionID_1",
              "constants": [],
              "variables": [
                "SummonMinionID_1"
              ]
            },
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
              "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1062817390\">Enemy_W2_Xuanlu_10_MinionMark_1</a>",
              "valuePerStack": {
                "MDF_MaxMinionCount": {
                  "operator": "Variables[0] (MaxMinionCount) || RETURN",
                  "displayLines": "MaxMinionCount",
                  "constants": [],
                  "variables": [
                    "MaxMinionCount"
                  ]
                }
              }
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "2024015_Monster_W2_Xuanlu_10_Ability10_Part01": {
      "fileName": "2024015_Monster_W2_Xuanlu_10_Ability10_Part01",
      "childAbilityList": [
        "2024015_Monster_W2_Xuanlu_10_Ability10_Part01",
        "2024015_Monster_W2_Xuanlu_10_Ability10_Part02"
      ],
      "skillTrigger": "Skill10",
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
          "ability": "Monster_W2_Xuanlu_10_Ability10_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2024015_Monster_W2_Xuanlu_10_Ability09_Part02": {
      "fileName": "2024015_Monster_W2_Xuanlu_10_Ability09_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"938780665\">Enemy_W2_Xuanlu_10_EnergyDrain</a>[<span class=\"descriptionNumberColor\">Synwood Renewal</span>]",
          "valuePerStack": {
            "Enemy_W2_Xuanlu_10_EnergyDrain_TriggerHealRatio": {
              "operator": "Variables[0] ({[Skill09[0]]}) || RETURN",
              "displayLines": "{[Skill09[0]]}",
              "constants": [],
              "variables": [
                "{[Skill09[0]]}"
              ]
            },
            "Enemy_W2_Xuanlu_10_EnergyDrain_TurnHealRatio": {
              "operator": "Variables[0] ({[Skill09[1]]}) || RETURN",
              "displayLines": "{[Skill09[1]]}",
              "constants": [],
              "variables": [
                "{[Skill09[1]]}"
              ]
            }
          }
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "2024015_Monster_W2_Xuanlu_10_Ability09_Part01": {
      "fileName": "2024015_Monster_W2_Xuanlu_10_Ability09_Part01",
      "childAbilityList": [
        "2024015_Monster_W2_Xuanlu_10_Ability09_Part01",
        "2024015_Monster_W2_Xuanlu_10_Ability09_Part02",
        "2024015_Monster_W2_Xuanlu_10_Ability09_Camera"
      ],
      "skillTrigger": "Skill09",
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
          "ability": "Monster_W2_Xuanlu_10_Ability09_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2024015_Monster_W2_Xuanlu_10_Ability08_Part02": {
      "fileName": "2024015_Monster_W2_Xuanlu_10_Ability08_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-129923965\">MoreOneMorePerTurn</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Skill08_BonusCount",
          "value": {
            "operator": "Variables[0] (MinionCount) || RETURN",
            "displayLines": "MinionCount",
            "constants": [],
            "variables": [
              "MinionCount"
            ]
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill08[0]]}) || Constants[0] (1) || Variables[1] (Skill08_BonusCount) || Variables[2] ({[Skill08[1]]}) || MUL || ADD || MUL || RETURN",
              "displayLines": "({[Skill08[0]]} * (1 + (Skill08_BonusCount * {[Skill08[1]]})))",
              "constants": [
                1
              ],
              "variables": [
                "{[Skill08[0]]}",
                "Skill08_BonusCount",
                "{[Skill08[1]]}"
              ]
            },
            "HitSplit": 0.15,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Looped Event",
          "maxLoops": 5,
          "Event": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] ({[Skill08[0]]}) || Constants[0] (1) || Variables[1] (Skill08_BonusCount) || Variables[2] ({[Skill08[1]]}) || MUL || ADD || MUL || RETURN",
                  "displayLines": "({[Skill08[0]]} * (1 + (Skill08_BonusCount * {[Skill08[1]]})))",
                  "constants": [
                    1
                  ],
                  "variables": [
                    "{[Skill08[0]]}",
                    "Skill08_BonusCount",
                    "{[Skill08[1]]}"
                  ]
                },
                "HitSplit": 0.17,
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "searchRandom": true,
          "maxTargets": 2,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1305390378\">Enemy_W2_Xuanlu_04_Charge</a>[<span class=\"descriptionNumberColor\">Lavish Fruit</span>]"
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
        "Trigger: Ability End"
      ],
      "references": []
    },
    "2024015_Monster_W2_Xuanlu_10_Ability08_Part01": {
      "fileName": "2024015_Monster_W2_Xuanlu_10_Ability08_Part01",
      "childAbilityList": [
        "2024015_Monster_W2_Xuanlu_10_Ability08_Part01",
        "2024015_Monster_W2_Xuanlu_10_Ability08_Part02",
        "2024015_Monster_W2_Xuanlu_10_Ability08_Camera"
      ],
      "skillTrigger": "Skill08",
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
          "ability": "Monster_W2_Xuanlu_10_Ability08_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2024015_Monster_W2_Xuanlu_10_ChangePhase3": {
      "fileName": "2024015_Monster_W2_Xuanlu_10_ChangePhase3",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
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
        "Deleted bullshit",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"938780665\">Enemy_W2_Xuanlu_10_EnergyDrain</a>[<span class=\"descriptionNumberColor\">Synwood Renewal</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2023283041\">Enemy_W2_Xuanlu_Ability07_NoWeakness</a>[<span class=\"descriptionNumberColor\">Hardy Leaf Sheath</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-585027897\">Enemy_W2_Xuanlu_Endurance</a>"
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
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-129923965\">MoreOneMorePerTurn</a>"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "MaxMinionCount",
          "value": 4
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-106618190\">Enemy_W2_Xuanlu_10_PartController_LockHP</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"113542848\">Enemy_W2_Xuanlu_10_SecondPhase</a>"
        }
      ],
      "references": []
    },
    "2024015_Monster_W2_Xuanlu_10_ChangePhase2": {
      "fileName": "2024015_Monster_W2_Xuanlu_10_ChangePhase2",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
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
        "Deleted bullshit",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2023283041\">Enemy_W2_Xuanlu_Ability07_NoWeakness</a>[<span class=\"descriptionNumberColor\">Hardy Leaf Sheath</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-585027897\">Enemy_W2_Xuanlu_Endurance</a>"
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
          "name": "Define Custom Variable",
          "variableName": "MaxMinionCount",
          "value": 4
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"113542848\">Enemy_W2_Xuanlu_10_SecondPhase</a>"
        },
        {
          "name": "Define Custom Variable",
          "scope": "TargetEntity",
          "variableName": "InsertCheck",
          "value": 1
        }
      ],
      "references": []
    },
    "2024015_Monster_W2_Xuanlu_10_PassiveAbility_Initiate": {
      "fileName": "2024015_Monster_W2_Xuanlu_10_PassiveAbility_Initiate",
      "skillTrigger": "Passive",
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
          "modifier": "<a class=\"gModGreen\" id=\"131137481\">Enemy_W2_Xuanlu_10_RemoveOneMore_RL</a>"
        },
        {
          "name": "Set Enemy Phase"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1366728989\">MMonsterW2_Xuanlu_10_EnterBattleToast</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-106618190\">Enemy_W2_Xuanlu_10_PartController_LockHP</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"966945518\">Enemy_W2_Xuanlu_10_Default</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-948493080\">Enemy_W2_Xuanlu_10_Break</a>"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "InsertCheck",
          "value": 1
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"163974997\">Monster_W2_Xuanlu_10_RL_LowHP</a>",
          "valuePerStack": {
            "MDF_LowHPRatio": {
              "operator": "Variables[0] ({[Skill14[1]]}) || RETURN",
              "displayLines": "{[Skill14[1]]}",
              "constants": [],
              "variables": [
                "{[Skill14[1]]}"
              ]
            }
          }
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-948493080\">Enemy_W2_Xuanlu_10_Break</a>",
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1366728989\">MMonsterW2_Xuanlu_10_EnterBattleToast</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "priorityLevel": 999999
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__966945518\">Enemy_W2_Xuanlu_10_Default</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__131137481\">Enemy_W2_Xuanlu_10_RemoveOneMore_RL</a>",
          "execute": [
            {
              "eventTrigger": "Action End [Owner]",
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
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-129923965\">MoreOneMorePerTurn</a>"
                      },
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-129923965\">MoreOneMorePerTurn</a>"
                        }
                      ]
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
                        "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                      },
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
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
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 2,
                            "contextScope": "TargetEntity"
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 4,
                            "contextScope": "TargetEntity"
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 6,
                            "contextScope": "TargetEntity"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "AIFlag",
                          "context": "TargetEntity",
                          "value": 1,
                          "max": 12
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 8,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
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
                    }
                  ]
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
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 2,
                            "contextScope": "TargetEntity"
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 4,
                            "contextScope": "TargetEntity"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "AIFlag",
                          "value": 3
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 6,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
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
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 3
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "FinalPhase",
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
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 2,
                            "contextScope": "TargetEntity"
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 3,
                            "contextScope": "TargetEntity"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "AIFlag",
                          "value": 4
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 5,
                            "contextScope": "TargetEntity"
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 6,
                            "contextScope": "TargetEntity"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "AIFlag",
                          "value": 7
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 8,
                            "contextScope": "TargetEntity"
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 9,
                            "contextScope": "TargetEntity"
                          }
                        ]
                      },
                      "passed": [
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
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 3
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "FinalPhase",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "AIFlag",
                      "value": 1
                    }
                  ]
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "CanUseUltra",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 1,
                  "includeMaxValueInRange": true,
                  "whenValueChanges": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "CanUseUltra",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-129923965\">MoreOneMorePerTurn</a>"
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
    "2024015_Monster_W2_Xuanlu_Pingshu_PassiveAbility_Initiate": {
      "fileName": "2024015_Monster_W2_Xuanlu_Pingshu_PassiveAbility_Initiate",
      "abilityType": null,
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        },
        {
          "name": "Set Enemy Phase"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-338709001\">Enemy_W2_Xuanlu_Default</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-719369711\">Enemy_W2_Xuanlu_Break</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-719369711\">Enemy_W2_Xuanlu_Break</a>",
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 2,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "TurnFlag",
                        "compareType": "=",
                        "value2": 3,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "TurnFlag",
                          "value": 1
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "variableName": "TurnFlag",
                          "context": "TargetEntity",
                          "value": 1,
                          "min": 1,
                          "max": 3
                        }
                      ]
                    }
                  ]
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
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-338709001\">Enemy_W2_Xuanlu_Default</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
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
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "SummonMinionCount"
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
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "2024015_Monster_W2_Xuanlu_PassiveAbility_Insert": {
      "fileName": "2024015_Monster_W2_Xuanlu_PassiveAbility_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
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
        "Deleted bullshit",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-585027897\">Enemy_W2_Xuanlu_Endurance</a>"
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
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "TurnFlag",
          "value": 1
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-776504343\">Enemy_W2_Xuanlu_PartController_LockHP</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1142936642\">Enemy_W2_Xuanlu_Mainline_Final</a>"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-561335331\">Enemy_W2_Xuanlu_SecondPhase</a>"
        }
      ],
      "references": []
    },
    "2024015_Monster_W2_Xuanlu_Mainline_Final": {
      "fileName": "2024015_Monster_W2_Xuanlu_Mainline_Final",
      "abilityType": null,
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
          "modifier": "<a class=\"gModGreen\" id=\"-1142936642\">Enemy_W2_Xuanlu_Mainline_Final</a>"
        }
      ],
      "references": []
    },
    "2024015_Monster_W2_Xuanlu_Mainline_Heal": {
      "fileName": "2024015_Monster_W2_Xuanlu_Mainline_Heal",
      "abilityType": null,
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
          "modifier": "<a class=\"gModGreen\" id=\"-897449444\">Enemy_W2_Xuanlu_Mainline_HealHP</a>"
        }
      ],
      "references": []
    },
    "2024015_Monster_W2_Xuanlu_Ability09_Part02": {
      "fileName": "2024015_Monster_W2_Xuanlu_Ability09_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Back to Life"
        },
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
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
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "healPercent": 1,
          "formula": "Heal from Healer's MaxHP"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "HealHPCheck",
          "value": 1
        },
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "HealHPTime",
          "context": "TargetEntity",
          "value": 1,
          "max": 2
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HealHPTime",
            "compareType": ">=",
            "value2": 2,
            "contextScope": "TargetEntity"
          }
        }
      ],
      "references": []
    },
    "2024015_Monster_W2_Xuanlu_Ability09_Part01": {
      "fileName": "2024015_Monster_W2_Xuanlu_Ability09_Part01",
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
          "ability": "Monster_W2_Xuanlu_Ability09_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2024015_Monster_W2_Xuanlu_Ability08_Part02": {
      "fileName": "2024015_Monster_W2_Xuanlu_Ability08_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Skill08_BonusCount",
          "value": {
            "operator": "Variables[0] (MinionCount) || RETURN",
            "displayLines": "MinionCount",
            "constants": [],
            "variables": [
              "MinionCount"
            ]
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill08[0]]}) || Constants[0] (1) || Variables[1] (Skill08_BonusCount) || Variables[2] ({[Skill08[1]]}) || MUL || ADD || MUL || RETURN",
              "displayLines": "({[Skill08[0]]} * (1 + (Skill08_BonusCount * {[Skill08[1]]})))",
              "constants": [
                1
              ],
              "variables": [
                "{[Skill08[0]]}",
                "Skill08_BonusCount",
                "{[Skill08[1]]}"
              ]
            },
            "HitSplit": 0.15,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Looped Event",
          "maxLoops": 5,
          "Event": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] ({[Skill08[0]]}) || Constants[0] (1) || Variables[1] (Skill08_BonusCount) || Variables[2] ({[Skill08[1]]}) || MUL || ADD || MUL || RETURN",
                  "displayLines": "({[Skill08[0]]} * (1 + (Skill08_BonusCount * {[Skill08[1]]})))",
                  "constants": [
                    1
                  ],
                  "variables": [
                    "{[Skill08[0]]}",
                    "Skill08_BonusCount",
                    "{[Skill08[1]]}"
                  ]
                },
                "HitSplit": 0.17,
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"392004917\">Enemy_W2_Xuanlu_Ability08_CoolDown</a>",
          "duration": 1
        },
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          }
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__392004917\">Enemy_W2_Xuanlu_Ability08_CoolDown</a>",
          "execute": [
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                  },
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
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
    "2024015_Monster_W2_Xuanlu_Ability08_Part01": {
      "fileName": "2024015_Monster_W2_Xuanlu_Ability08_Part01",
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
          "ability": "Monster_W2_Xuanlu_Ability08_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2024015_Monster_W2_Xuanlu_Ability07_Part02": {
      "fileName": "2024015_Monster_W2_Xuanlu_Ability07_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2023283041\">Enemy_W2_Xuanlu_Ability07_NoWeakness</a>[<span class=\"descriptionNumberColor\">Hardy Leaf Sheath</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill07[1]]}) || RETURN",
            "displayLines": "{[Skill07[1]]}",
            "constants": [],
            "variables": [
              "{[Skill07[1]]}"
            ]
          },
          "valuePerStack": {
            "MDF_DefenceAddedRatio": {
              "operator": "Variables[0] ({[Skill07[0]]}) || RETURN",
              "displayLines": "{[Skill07[0]]}",
              "constants": [],
              "variables": [
                "{[Skill07[0]]}"
              ]
            }
          }
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2023283041\">Enemy_W2_Xuanlu_Ability07_NoWeakness</a>[<span class=\"descriptionNumberColor\">Hardy Leaf Sheath</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "MuteBreak"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "action": "Protected",
                  "valueList": [
                    "Physical",
                    "Fire",
                    "Ice",
                    "Thunder",
                    "Wind",
                    "Quantum",
                    "Imaginary"
                  ]
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_DefenceAddedRatio) || RETURN",
                    "displayLines": "MDF_DefenceAddedRatio",
                    "constants": [],
                    "variables": [
                      "MDF_DefenceAddedRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_DefenceAddedRatio"
          ],
          "latentQueue": [],
          "description": "DEF increases. Toughness cannot be reduced.",
          "type": "Buff",
          "effectName": "DEF Boost",
          "statusName": "Hardy Leaf Sheath"
        }
      ]
    },
    "2024015_Monster_W2_Xuanlu_Ability07_Part01": {
      "fileName": "2024015_Monster_W2_Xuanlu_Ability07_Part01",
      "childAbilityList": [
        "2024015_Monster_W2_Xuanlu_Ability07_Part01",
        "2024015_Monster_W2_Xuanlu_Ability07_Part02",
        "2024015_Monster_W2_Xuanlu_Ability07_Camera"
      ],
      "skillTrigger": "Skill07",
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
          "ability": "Monster_W2_Xuanlu_Ability07_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2024015_Monster_W2_Xuanlu_Ability06_Part02": {
      "fileName": "2024015_Monster_W2_Xuanlu_Ability06_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
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
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "2024015_Monster_W2_Xuanlu_Ability06_Part01": {
      "fileName": "2024015_Monster_W2_Xuanlu_Ability06_Part01",
      "childAbilityList": [
        "2024015_Monster_W2_Xuanlu_Ability06_Part01",
        "2024015_Monster_W2_Xuanlu_Ability06_Part02",
        "2024015_Monster_W2_Xuanlu_Ability06_Camera"
      ],
      "skillTrigger": "Skill06",
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
          "ability": "Monster_W2_Xuanlu_Ability06_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2024015_Monster_W2_Xuanlu_Ability05_Part02": {
      "fileName": "2024015_Monster_W2_Xuanlu_Ability05_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
              "displayLines": "{[Skill05[0]]}",
              "constants": [],
              "variables": [
                "{[Skill05[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "2024015_Monster_W2_Xuanlu_Ability05_Part01": {
      "fileName": "2024015_Monster_W2_Xuanlu_Ability05_Part01",
      "childAbilityList": [
        "2024015_Monster_W2_Xuanlu_Ability05_Part01",
        "2024015_Monster_W2_Xuanlu_Ability05_Part02",
        "2024015_Monster_W2_Xuanlu_Ability05_Camera"
      ],
      "skillTrigger": "Skill05",
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
          "ability": "Monster_W2_Xuanlu_Ability05_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2024015_Monster_W2_Xuanlu_Ability04_Part02": {
      "fileName": "2024015_Monster_W2_Xuanlu_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
            "displayLines": "{[Skill04[0]]}",
            "constants": [],
            "variables": [
              "{[Skill04[0]]}"
            ]
          },
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (SummonMinionID_4) || RETURN",
                "displayLines": "SummonMinionID_4",
                "constants": [],
                "variables": [
                  "SummonMinionID_4"
                ]
              },
              "locationType": "AroundCasterOnEdge"
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
          "conditions": {
            "name": "Enemy ID",
            "ID": {
              "operator": "Variables[0] (SummonMinionID_4) || RETURN",
              "displayLines": "SummonMinionID_4",
              "constants": [],
              "variables": [
                "SummonMinionID_4"
              ]
            },
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
              "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1765961654\">Enemy_W2_Xuanlu_MinionMark_4</a>",
              "valuePerStack": {
                "MDF_MaxMinionCount": {
                  "operator": "Variables[0] (MaxMinionCount) || RETURN",
                  "displayLines": "MaxMinionCount",
                  "constants": [],
                  "variables": [
                    "MaxMinionCount"
                  ]
                }
              }
            }
          ]
        },
        "Ability Start",
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1765961654\">Enemy_W2_Xuanlu_MinionMark_4</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "variableName": "MinionCount",
                  "context": "TargetEntity",
                  "value": -1,
                  "max": {
                    "operator": "Variables[0] (MDF_MaxMinionCount) || RETURN",
                    "displayLines": "MDF_MaxMinionCount",
                    "constants": [],
                    "variables": [
                      "MDF_MaxMinionCount"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "variableName": "MinionState_4",
                  "context": "TargetEntity",
                  "value": -1,
                  "max": 2
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "variableName": "MinionCount",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": {
                    "operator": "Variables[0] (MDF_MaxMinionCount) || RETURN",
                    "displayLines": "MDF_MaxMinionCount",
                    "constants": [],
                    "variables": [
                      "MDF_MaxMinionCount"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "variableName": "SummonMinionCount",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": {
                    "operator": "Variables[0] (MDF_MaxMinionCount) || RETURN",
                    "displayLines": "MDF_MaxMinionCount",
                    "constants": [],
                    "variables": [
                      "MDF_MaxMinionCount"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "variableName": "SummonMinionTime",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": 99999
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "variableName": "MinionState_4",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": 2
                }
              ]
            }
          ],
          "stackData": [
            "MDF_MaxMinionCount"
          ],
          "latentQueue": []
        }
      ]
    },
    "2024015_Monster_W2_Xuanlu_Ability04_Part01": {
      "fileName": "2024015_Monster_W2_Xuanlu_Ability04_Part01",
      "childAbilityList": [
        "2024015_Monster_W2_Xuanlu_Ability04_Part01",
        "2024015_Monster_W2_Xuanlu_Ability04_Part02"
      ],
      "skillTrigger": "Skill04",
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
          "ability": "Monster_W2_Xuanlu_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2024015_Monster_W2_Xuanlu_Ability03_Part02": {
      "fileName": "2024015_Monster_W2_Xuanlu_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
            "displayLines": "{[Skill03[0]]}",
            "constants": [],
            "variables": [
              "{[Skill03[0]]}"
            ]
          },
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (SummonMinionID_3) || RETURN",
                "displayLines": "SummonMinionID_3",
                "constants": [],
                "variables": [
                  "SummonMinionID_3"
                ]
              },
              "locationType": "AroundCasterOnEdge"
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
          "conditions": {
            "name": "Enemy ID",
            "ID": {
              "operator": "Variables[0] (SummonMinionID_3) || RETURN",
              "displayLines": "SummonMinionID_3",
              "constants": [],
              "variables": [
                "SummonMinionID_3"
              ]
            },
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
              "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1849849749\">Enemy_W2_Xuanlu_MinionMark_3</a>",
              "valuePerStack": {
                "MDF_MaxMinionCount": {
                  "operator": "Variables[0] (MaxMinionCount) || RETURN",
                  "displayLines": "MaxMinionCount",
                  "constants": [],
                  "variables": [
                    "MaxMinionCount"
                  ]
                }
              }
            }
          ]
        },
        "Ability Start",
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1849849749\">Enemy_W2_Xuanlu_MinionMark_3</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "variableName": "MinionCount",
                  "context": "TargetEntity",
                  "value": -1,
                  "max": {
                    "operator": "Variables[0] (MDF_MaxMinionCount) || RETURN",
                    "displayLines": "MDF_MaxMinionCount",
                    "constants": [],
                    "variables": [
                      "MDF_MaxMinionCount"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "variableName": "MinionState_3",
                  "context": "TargetEntity",
                  "value": -1,
                  "max": 2
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "variableName": "MinionCount",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": {
                    "operator": "Variables[0] (MDF_MaxMinionCount) || RETURN",
                    "displayLines": "MDF_MaxMinionCount",
                    "constants": [],
                    "variables": [
                      "MDF_MaxMinionCount"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "variableName": "SummonMinionCount",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": {
                    "operator": "Variables[0] (MDF_MaxMinionCount) || RETURN",
                    "displayLines": "MDF_MaxMinionCount",
                    "constants": [],
                    "variables": [
                      "MDF_MaxMinionCount"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "variableName": "SummonMinionTime",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": 99999
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "variableName": "MinionState_3",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": 2
                }
              ]
            }
          ],
          "stackData": [
            "MDF_MaxMinionCount"
          ],
          "latentQueue": []
        }
      ]
    },
    "2024015_Monster_W2_Xuanlu_Ability03_Part01": {
      "fileName": "2024015_Monster_W2_Xuanlu_Ability03_Part01",
      "childAbilityList": [
        "2024015_Monster_W2_Xuanlu_Ability03_Part01",
        "2024015_Monster_W2_Xuanlu_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
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
          "ability": "Monster_W2_Xuanlu_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2024015_Monster_W2_Xuanlu_Ability02_Part02": {
      "fileName": "2024015_Monster_W2_Xuanlu_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
            "displayLines": "{[Skill02[0]]}",
            "constants": [],
            "variables": [
              "{[Skill02[0]]}"
            ]
          },
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (SummonMinionID_2) || RETURN",
                "displayLines": "SummonMinionID_2",
                "constants": [],
                "variables": [
                  "SummonMinionID_2"
                ]
              },
              "locationType": "AroundCasterOnEdge"
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
          "conditions": {
            "name": "Enemy ID",
            "ID": {
              "operator": "Variables[0] (SummonMinionID_2) || RETURN",
              "displayLines": "SummonMinionID_2",
              "constants": [],
              "variables": [
                "SummonMinionID_2"
              ]
            },
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
              "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1866627368\">Enemy_W2_Xuanlu_MinionMark_2</a>",
              "valuePerStack": {
                "MDF_MaxMinionCount": {
                  "operator": "Variables[0] (MaxMinionCount) || RETURN",
                  "displayLines": "MaxMinionCount",
                  "constants": [],
                  "variables": [
                    "MaxMinionCount"
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
            "modifier": "<a class=\"gModGreen\" id=\"-897449444\">Enemy_W2_Xuanlu_Mainline_HealHP</a>"
          }
        },
        "Ability Start",
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1866627368\">Enemy_W2_Xuanlu_MinionMark_2</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "variableName": "MinionCount",
                  "context": "TargetEntity",
                  "value": -1,
                  "max": {
                    "operator": "Variables[0] (MDF_MaxMinionCount) || RETURN",
                    "displayLines": "MDF_MaxMinionCount",
                    "constants": [],
                    "variables": [
                      "MDF_MaxMinionCount"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "variableName": "MinionState_2",
                  "context": "TargetEntity",
                  "value": -1,
                  "max": 2
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "variableName": "MinionCount",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": {
                    "operator": "Variables[0] (MDF_MaxMinionCount) || RETURN",
                    "displayLines": "MDF_MaxMinionCount",
                    "constants": [],
                    "variables": [
                      "MDF_MaxMinionCount"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "variableName": "SummonMinionCount",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": {
                    "operator": "Variables[0] (MDF_MaxMinionCount) || RETURN",
                    "displayLines": "MDF_MaxMinionCount",
                    "constants": [],
                    "variables": [
                      "MDF_MaxMinionCount"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "variableName": "SummonMinionTime",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": 99999
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "variableName": "MinionState_2",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": 2
                }
              ]
            }
          ],
          "stackData": [
            "MDF_MaxMinionCount"
          ],
          "latentQueue": []
        }
      ]
    },
    "2024015_Monster_W2_Xuanlu_Ability02_Part01": {
      "fileName": "2024015_Monster_W2_Xuanlu_Ability02_Part01",
      "childAbilityList": [
        "2024015_Monster_W2_Xuanlu_Ability02_Part01",
        "2024015_Monster_W2_Xuanlu_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
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
          "ability": "Monster_W2_Xuanlu_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2024015_Monster_W2_Xuanlu_Ability01_Part02": {
      "fileName": "2024015_Monster_W2_Xuanlu_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
            "displayLines": "{[Skill01[0]]}",
            "constants": [],
            "variables": [
              "{[Skill01[0]]}"
            ]
          },
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (SummonMinionID_1) || RETURN",
                "displayLines": "SummonMinionID_1",
                "constants": [],
                "variables": [
                  "SummonMinionID_1"
                ]
              },
              "locationType": "AroundCasterOnEdge"
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
          "conditions": {
            "name": "Enemy ID",
            "ID": {
              "operator": "Variables[0] (SummonMinionID_1) || RETURN",
              "displayLines": "SummonMinionID_1",
              "constants": [],
              "variables": [
                "SummonMinionID_1"
              ]
            },
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
              "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1816294511\">Enemy_W2_Xuanlu_MinionMark_1</a>",
              "valuePerStack": {
                "MDF_MaxMinionCount": {
                  "operator": "Variables[0] (MaxMinionCount) || RETURN",
                  "displayLines": "MaxMinionCount",
                  "constants": [],
                  "variables": [
                    "MaxMinionCount"
                  ]
                }
              }
            }
          ]
        },
        "Ability Start",
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1816294511\">Enemy_W2_Xuanlu_MinionMark_1</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "variableName": "MinionCount",
                  "context": "TargetEntity",
                  "value": -1,
                  "max": {
                    "operator": "Variables[0] (MDF_MaxMinionCount) || RETURN",
                    "displayLines": "MDF_MaxMinionCount",
                    "constants": [],
                    "variables": [
                      "MDF_MaxMinionCount"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "variableName": "MinionState_1",
                  "context": "TargetEntity",
                  "value": -1,
                  "max": 2
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "variableName": "MinionCount",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": {
                    "operator": "Variables[0] (MDF_MaxMinionCount) || RETURN",
                    "displayLines": "MDF_MaxMinionCount",
                    "constants": [],
                    "variables": [
                      "MDF_MaxMinionCount"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "variableName": "SummonMinionCount",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": {
                    "operator": "Variables[0] (MDF_MaxMinionCount) || RETURN",
                    "displayLines": "MDF_MaxMinionCount",
                    "constants": [],
                    "variables": [
                      "MDF_MaxMinionCount"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "variableName": "SummonMinionTime",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": 99999
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "variableName": "MinionState_1",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": 2
                }
              ]
            }
          ],
          "stackData": [
            "MDF_MaxMinionCount"
          ],
          "latentQueue": []
        }
      ]
    },
    "2024015_Monster_W2_Xuanlu_Ability01_Part01": {
      "fileName": "2024015_Monster_W2_Xuanlu_Ability01_Part01",
      "childAbilityList": [
        "2024015_Monster_W2_Xuanlu_Ability01_Part01",
        "2024015_Monster_W2_Xuanlu_Ability01_Part02",
        "2024015_Monster_W2_Xuanlu_Ability01_Camera"
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
          "ability": "Monster_W2_Xuanlu_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2024015_Monster_W2_Xuanlu_PassiveAbility_Initiate": {
      "fileName": "2024015_Monster_W2_Xuanlu_PassiveAbility_Initiate",
      "abilityType": null,
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        },
        {
          "name": "Set Enemy Phase"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-776504343\">Enemy_W2_Xuanlu_PartController_LockHP</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-338709001\">Enemy_W2_Xuanlu_Default</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-719369711\">Enemy_W2_Xuanlu_Break</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-719369711\">Enemy_W2_Xuanlu_Break</a>",
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 2,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "TurnFlag",
                        "compareType": "=",
                        "value2": 3,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "TurnFlag",
                          "value": 1
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "variableName": "TurnFlag",
                          "context": "TargetEntity",
                          "value": 1,
                          "min": 1,
                          "max": 3
                        }
                      ]
                    }
                  ]
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
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-338709001\">Enemy_W2_Xuanlu_Default</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
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
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "SummonMinionCount"
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
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "2024015_Monster_W2_Xuanlu_PassiveAbility_BGM": {
      "fileName": "2024015_Monster_W2_Xuanlu_PassiveAbility_BGM",
      "childAbilityList": [
        "2024015_Monster_W2_Xuanlu_PassiveAbility_BGM"
      ],
      "skillTrigger": "Passive_BGM",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Stage Type",
                "stageType": "Challenge"
              },
              {
                "name": "Stage Type",
                "stageType": "VerseSimulation"
              },
              {
                "name": "Stage Type",
                "stageType": "StrongChallengeActivity"
              },
              {
                "name": "Stage Type",
                "stageType": "RogueRelic"
              },
              {
                "name": "Stage Type",
                "stageType": "GridFightActivity"
              }
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-549735407\">Enemy_W2_Xuanlu_ResetStageBGM</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-549735407\">Enemy_W2_Xuanlu_ResetStageBGM</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Varying Data",
                  "target": null,
                  "variableName": "MDF_WaveIndex",
                  "value": "CurWaveIndex"
                }
              ]
            },
            {
              "eventTrigger": "New Enemy Wave",
              "execute": [
                {
                  "name": "Define Custom Variable with Varying Data",
                  "target": null,
                  "variableName": "MDF_WaveIndex2",
                  "value": "CurWaveIndex"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_WaveIndex",
                    "compareType": "NOT=",
                    "value2": {
                      "operator": "Variables[0] (MDF_WaveIndex2) || RETURN",
                      "displayLines": "MDF_WaveIndex2",
                      "constants": [],
                      "variables": [
                        "MDF_WaveIndex2"
                      ]
                    }
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "2024015_Modifiers": {
      "fileName": "2024015_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__163974997\">Monster_W2_Xuanlu_10_RL_LowHP</a>",
          "execute": [
            {
              "eventTrigger": "HP Change [Owner]",
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
                        "value1": "CurrentHP%",
                        "compareType": "<=",
                        "value2": {
                          "operator": "Variables[0] (MDF_LowHPRatio) || RETURN",
                          "displayLines": "MDF_LowHPRatio",
                          "constants": [],
                          "variables": [
                            "MDF_LowHPRatio"
                          ]
                        }
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 3
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "FinalPhase",
                      "value": 1
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "AIFlag",
                      "value": 1
                    },
                    {
                      "name": "Action Advance/Delay",
                      "advanceType": "Set",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "multiBase": 0
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "CurrentHP%",
                        "compareType": "<=",
                        "value2": 0
                      }
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_LowHPRatio"
          ],
          "latentQueue": [
            "InsertCheck"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__113542848\">Enemy_W2_Xuanlu_10_SecondPhase</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": [
            "AIFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-106618190\">Enemy_W2_Xuanlu_10_PartController_LockHP</a>",
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
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1794338335\">Standard_CTRL_Crazy</a>[<span class=\"descriptionNumberColor\">Outrage</span>]"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-924806619\">Enemy_W2_Xuanlu_02_Bonus</a>[<span class=\"descriptionNumberColor\">Engender</span>]"
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-585027897\">Enemy_W2_Xuanlu_Endurance</a>"
                    },
                    {
                      "name": "Define Custom Variable",
                      "scope": "TargetEntity",
                      "variableName": "InsertCheck",
                      "value": 0
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"113542848\">Enemy_W2_Xuanlu_10_SecondPhase</a>"
                    },
                    {
                      "name": "Set Enemy Phase",
                      "mode": "Inc"
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
                          "modifier": "<a class=\"gModGreen\" id=\"-514199936\">Enemy_W2_Xuanlu_DisableAction</a>"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 2
                      },
                      "passed": [
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W2_Xuanlu_10_ChangePhase2",
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
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 3
                      },
                      "passed": [
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W2_Xuanlu_10_ChangePhase3",
                          "priorityTag": "MonsterChangePhase",
                          "ownerState": "Mask_AliveOrLimbo",
                          "targetState": "Mask_AliveOrLimbo",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
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
          "for": "<a class=\"gModGreen\" id=\"mod__1146705485\">Enemy_W2_Xuanlu_10_MinionMark_4</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "variableName": "MinionCount",
                  "context": "TargetEntity",
                  "value": -1,
                  "max": {
                    "operator": "Variables[0] (MDF_MaxMinionCount) || RETURN",
                    "displayLines": "MDF_MaxMinionCount",
                    "constants": [],
                    "variables": [
                      "MDF_MaxMinionCount"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "variableName": "MinionState_4",
                  "context": "TargetEntity",
                  "value": -1,
                  "max": {
                    "operator": "Variables[0] (MDF_MaxMinionCount) || RETURN",
                    "displayLines": "MDF_MaxMinionCount",
                    "constants": [],
                    "variables": [
                      "MDF_MaxMinionCount"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "variableName": "MinionCount",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": {
                    "operator": "Variables[0] (MDF_MaxMinionCount) || RETURN",
                    "displayLines": "MDF_MaxMinionCount",
                    "constants": [],
                    "variables": [
                      "MDF_MaxMinionCount"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "variableName": "MinionState_4",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": {
                    "operator": "Variables[0] (MDF_MaxMinionCount) || RETURN",
                    "displayLines": "MDF_MaxMinionCount",
                    "constants": [],
                    "variables": [
                      "MDF_MaxMinionCount"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_MaxMinionCount"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1029262152\">Enemy_W2_Xuanlu_10_MinionMark_3</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "variableName": "MinionCount",
                  "context": "TargetEntity",
                  "value": -1,
                  "max": {
                    "operator": "Variables[0] (MDF_MaxMinionCount) || RETURN",
                    "displayLines": "MDF_MaxMinionCount",
                    "constants": [],
                    "variables": [
                      "MDF_MaxMinionCount"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "variableName": "MinionState_3",
                  "context": "TargetEntity",
                  "value": -1,
                  "max": {
                    "operator": "Variables[0] (MDF_MaxMinionCount) || RETURN",
                    "displayLines": "MDF_MaxMinionCount",
                    "constants": [],
                    "variables": [
                      "MDF_MaxMinionCount"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "variableName": "MinionCount",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": {
                    "operator": "Variables[0] (MDF_MaxMinionCount) || RETURN",
                    "displayLines": "MDF_MaxMinionCount",
                    "constants": [],
                    "variables": [
                      "MDF_MaxMinionCount"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "variableName": "MinionState_3",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": {
                    "operator": "Variables[0] (MDF_MaxMinionCount) || RETURN",
                    "displayLines": "MDF_MaxMinionCount",
                    "constants": [],
                    "variables": [
                      "MDF_MaxMinionCount"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_MaxMinionCount"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1046039771\">Enemy_W2_Xuanlu_10_MinionMark_2</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "variableName": "MinionCount",
                  "context": "TargetEntity",
                  "value": -1,
                  "max": {
                    "operator": "Variables[0] (MDF_MaxMinionCount) || RETURN",
                    "displayLines": "MDF_MaxMinionCount",
                    "constants": [],
                    "variables": [
                      "MDF_MaxMinionCount"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "variableName": "MinionState_2",
                  "context": "TargetEntity",
                  "value": -1,
                  "max": {
                    "operator": "Variables[0] (MDF_MaxMinionCount) || RETURN",
                    "displayLines": "MDF_MaxMinionCount",
                    "constants": [],
                    "variables": [
                      "MDF_MaxMinionCount"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "variableName": "MinionCount",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": {
                    "operator": "Variables[0] (MDF_MaxMinionCount) || RETURN",
                    "displayLines": "MDF_MaxMinionCount",
                    "constants": [],
                    "variables": [
                      "MDF_MaxMinionCount"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "variableName": "MinionState_2",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": {
                    "operator": "Variables[0] (MDF_MaxMinionCount) || RETURN",
                    "displayLines": "MDF_MaxMinionCount",
                    "constants": [],
                    "variables": [
                      "MDF_MaxMinionCount"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_MaxMinionCount"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1062817390\">Enemy_W2_Xuanlu_10_MinionMark_1</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "variableName": "MinionCount",
                  "context": "TargetEntity",
                  "value": -1,
                  "max": {
                    "operator": "Variables[0] (MDF_MaxMinionCount) || RETURN",
                    "displayLines": "MDF_MaxMinionCount",
                    "constants": [],
                    "variables": [
                      "MDF_MaxMinionCount"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "variableName": "MinionState_1",
                  "context": "TargetEntity",
                  "value": -1,
                  "max": {
                    "operator": "Variables[0] (MDF_MaxMinionCount) || RETURN",
                    "displayLines": "MDF_MaxMinionCount",
                    "constants": [],
                    "variables": [
                      "MDF_MaxMinionCount"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "variableName": "MinionCount",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": {
                    "operator": "Variables[0] (MDF_MaxMinionCount) || RETURN",
                    "displayLines": "MDF_MaxMinionCount",
                    "constants": [],
                    "variables": [
                      "MDF_MaxMinionCount"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "variableName": "MinionState_1",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": {
                    "operator": "Variables[0] (MDF_MaxMinionCount) || RETURN",
                    "displayLines": "MDF_MaxMinionCount",
                    "constants": [],
                    "variables": [
                      "MDF_MaxMinionCount"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_MaxMinionCount"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__938780665\">Enemy_W2_Xuanlu_10_EnergyDrain</a>[<span class=\"descriptionNumberColor\">Synwood Renewal</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Heal",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "healPercent": {
                    "operator": "Variables[0] (MMonster_W2_Xuanlu_10_EnergyDrain_TriggerHealRatio) || RETURN",
                    "displayLines": "MMonster_W2_Xuanlu_10_EnergyDrain_TriggerHealRatio",
                    "constants": [],
                    "variables": [
                      "MMonster_W2_Xuanlu_10_EnergyDrain_TriggerHealRatio"
                    ]
                  },
                  "formula": "Heal from Healer's MaxHP"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "MMonster_W2_Xuanlu_10_EnergyDrain_Layer",
                  "modifierName": "<a class=\"gModGreen\" id=\"938780665\">Enemy_W2_Xuanlu_10_EnergyDrain</a>[<span class=\"descriptionNumberColor\">Synwood Renewal</span>]",
                  "multiplier": 1
                },
                {
                  "name": "Heal",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "healPercent": {
                    "operator": "Variables[0] (MMonster_W2_Xuanlu_10_EnergyDrain_TurnHealRatio) || RETURN",
                    "displayLines": "MMonster_W2_Xuanlu_10_EnergyDrain_TurnHealRatio",
                    "constants": [],
                    "variables": [
                      "MMonster_W2_Xuanlu_10_EnergyDrain_TurnHealRatio"
                    ]
                  },
                  "formula": "Heal from Healer's MaxHP"
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MMonster_W2_Xuanlu_10_EnergyDrain_Layer) || Variables[1] (MMonster_W2_Xuanlu_10_EnergyDrain_ATKUpDelta) || MUL || RETURN",
                    "displayLines": "(MMonster_W2_Xuanlu_10_EnergyDrain_Layer * MMonster_W2_Xuanlu_10_EnergyDrain_ATKUpDelta)",
                    "constants": [],
                    "variables": [
                      "MMonster_W2_Xuanlu_10_EnergyDrain_Layer",
                      "MMonster_W2_Xuanlu_10_EnergyDrain_ATKUpDelta"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MMonster_W2_Xuanlu_10_EnergyDrain_TriggerHealRatio",
            "MMonster_W2_Xuanlu_10_EnergyDrain_TurnHealRatio"
          ],
          "latentQueue": [],
          "description": "In every turn, restores HP equal to <span class=\"descriptionNumberColor\">MMonster_W2_Xuanlu_10_EnergyDrain_TurnHealRatio</span> of the unit's Max HP.",
          "type": "Buff",
          "effectName": "Synwood Renewal",
          "statusName": "Synwood Renewal",
          "stackLimit": 5,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-536192328\">Enemy_W2_Xuanlu_10_RL_DamageUp</a>[<span class=\"descriptionNumberColor\">Vigor Overflow</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "ModifierLayers",
                  "multiplier": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_DamageUpRatio_PerLayer) || Variables[1] (ModifierLayers) || MUL || RETURN",
                    "displayLines": "(MDF_DamageUpRatio_PerLayer * ModifierLayers)",
                    "constants": [],
                    "variables": [
                      "MDF_DamageUpRatio_PerLayer",
                      "ModifierLayers"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_DamageUpRatio_PerLayer</span>. This effect is stackable.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "Vigor Overflow",
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1367728749\">Enemy_W2_Xuanlu_10_RL_RageHandler</a>",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Related Summoned Entity",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "valueType": "Layer",
                      "variableName": "Monster_W2_Xuanlu_10_Skill14_RageLayer",
                      "modifierName": "<a class=\"gModGreen\" id=\"-536192328\">Enemy_W2_Xuanlu_10_RL_DamageUp</a>[<span class=\"descriptionNumberColor\">Vigor Overflow</span>]",
                      "multiplier": 1
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Monster_W2_Xuanlu_10_Skill14_RageLayer",
                        "compareType": ">=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-536192328\">Enemy_W2_Xuanlu_10_RL_DamageUp</a>[<span class=\"descriptionNumberColor\">Vigor Overflow</span>]",
                          "valuePerStack": {
                            "MDF_DamageUpRatio_PerLayer": {
                              "operator": "Variables[0] (MDF_DamageUpRatio_PerLayer) || RETURN",
                              "displayLines": "MDF_DamageUpRatio_PerLayer",
                              "constants": [],
                              "variables": [
                                "MDF_DamageUpRatio_PerLayer"
                              ]
                            }
                          },
                          "addStacksPerTrigger": {
                            "operator": "Variables[0] (Monster_W2_Xuanlu_10_Skill14_RageLayer) || RETURN",
                            "displayLines": "Monster_W2_Xuanlu_10_Skill14_RageLayer",
                            "constants": [],
                            "variables": [
                              "Monster_W2_Xuanlu_10_Skill14_RageLayer"
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
              "eventTrigger": "When Stacking Modifier Instance [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Modifier Status Type",
                        "statusType": "Buff"
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target 2}}"
                        },
                        "team": "Enemy Team"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{All Team Members}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-536192328\">Enemy_W2_Xuanlu_10_RL_DamageUp</a>[<span class=\"descriptionNumberColor\">Vigor Overflow</span>]",
                      "valuePerStack": {
                        "MDF_DamageUpRatio_PerLayer": {
                          "operator": "Variables[0] (MDF_DamageUpRatio_PerLayer) || RETURN",
                          "displayLines": "MDF_DamageUpRatio_PerLayer",
                          "constants": [],
                          "variables": [
                            "MDF_DamageUpRatio_PerLayer"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_DamageUpRatio_PerLayer"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-514199936\">Enemy_W2_Xuanlu_DisableAction</a>",
          "modifierFlags": [
            "DisableAction"
          ],
          "stackData": [],
          "latentQueue": [
            "InsertCheck"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-561335331\">Enemy_W2_Xuanlu_SecondPhase</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": [
            "AIFlag",
            "TurnFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-585027897\">Enemy_W2_Xuanlu_Endurance</a>",
          "modifierFlags": [
            "Endurance"
          ],
          "stackData": [],
          "latentQueue": [
            "InsertCheck"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-776504343\">Enemy_W2_Xuanlu_PartController_LockHP</a>",
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
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1794338335\">Standard_CTRL_Crazy</a>[<span class=\"descriptionNumberColor\">Outrage</span>]"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-924806619\">Enemy_W2_Xuanlu_02_Bonus</a>[<span class=\"descriptionNumberColor\">Engender</span>]"
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-585027897\">Enemy_W2_Xuanlu_Endurance</a>"
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
                          "modifier": "<a class=\"gModGreen\" id=\"-514199936\">Enemy_W2_Xuanlu_DisableAction</a>"
                        }
                      ]
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W2_Xuanlu_PassiveAbility_Insert",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1142936642\">Enemy_W2_Xuanlu_Mainline_Final</a>",
          "execute": [
            {
              "eventTrigger": "HP Change [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "ParameterValue",
                        "compareType": "<",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 2
                      },
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "value1": "CurrentHP%",
                                "compareType": "<",
                                "value2": 0.3
                              },
                              {
                                "name": "Has Flag",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "flagName": "Break"
                              }
                            ]
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "value1": "CurrentHP%",
                            "compareType": "<",
                            "value2": 0.1
                          }
                        ]
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-897449444\">Enemy_W2_Xuanlu_Mainline_HealHP</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 0.00010000006
                }
              ]
            },
            {
              "eventTrigger": "Action End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Current Turn Is",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "SummonMinionTime",
                        "compareType": "=",
                        "value2": 3,
                        "contextScope": "TargetEntity"
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Current Turn Is",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "HealHPTurn",
                      "context": "TargetEntity",
                      "value": 1,
                      "max": 99
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
                        "name": "Compare: Variable",
                        "value1": "ParameterValue",
                        "compareType": "<",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "HealHPCheck",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "HealHPTurn",
                            "compareType": ">=",
                            "value2": 2,
                            "contextScope": "TargetEntity"
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "value1": "CurrentHP%",
                            "compareType": "<",
                            "value2": 0.7
                          }
                        ]
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "HealHPCheck"
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "HealHPTurn"
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W2_Xuanlu_Ability09_Part01",
                      "priorityTag": "LevelPerformMonster",
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
          "stackData": [],
          "latentQueue": []
        }
      ],
      "references": []
    }
  }
}