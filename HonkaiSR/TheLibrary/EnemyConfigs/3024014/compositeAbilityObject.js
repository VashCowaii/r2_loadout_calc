const compositeAbilityObject = {
  "fullCharacterName": 3024014,
  "trimCharacterName": 3024014,
  "abilityList": [
    "3024014_Monster_W2_Argenti_PartChange2T3_Insert",
    "3024014_Monster_W2_Argenti_Ability08_Part02",
    "3024014_Monster_W2_Argenti_Ability08_Part01",
    "3024014_Monster_W2_Argenti_Ability06_Part02",
    "3024014_Monster_W2_Argenti_Ability06_Part01",
    "3024014_Monster_W2_Argenti_Ability07_Part02",
    "3024014_Monster_W2_Argenti_Ability07_Part01",
    "3024014_Monster_W2_Argenti_Ability05_Part02",
    "3024014_Monster_W2_Argenti_Ability05_Part01",
    "3024014_Monster_W2_Argenti_Ability04_Part02",
    "3024014_Monster_W2_Argenti_Ability04_Part01",
    "3024014_Monster_W2_Argenti_Ability03_Part02",
    "3024014_Monster_W2_Argenti_Ability03_Part01",
    "3024014_Monster_W2_Argenti_Ability02_Part02",
    "3024014_Monster_W2_Argenti_Ability02_Part01",
    "3024014_Monster_W2_Argenti_Ability01_Part02",
    "3024014_Monster_W2_Argenti_Ability01_Part01",
    "3024014_BattleEventAbility_Monster_W2_Argenti_MainStory202",
    "3024014_Monster_W2_Argenti_PassiveAbility202",
    "3024014_Monster_W2_Argenti_PartChange_Insert",
    "3024014_Monster_W2_Argenti_PassiveAbilityInitiate",
    "3024014_Monster_W2_Argenti_Passive02",
    "3024014_Monster_W2_Argenti_Passive01",
    "3024014_Monster_W2_Argenti_PassiveAbility_BGM",
    "3024014_Modifiers"
  ],
  "abilityObject": {
    "3024014_Monster_W2_Argenti_PartChange2T3_Insert": {
      "fileName": "3024014_Monster_W2_Argenti_PartChange2T3_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "silent": true
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Monster_ChangePhase"
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "multiBase": 0
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_Standard_Endurance"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Phase_Flag",
          "value": 3
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
      ],
      "references": []
    },
    "3024014_Monster_W2_Argenti_Ability08_Part02": {
      "fileName": "3024014_Monster_W2_Argenti_Ability08_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "healPercent": 1,
          "formula": "Heal from Healer's MaxHP"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "team": "Enemy Team",
            "location": "Left"
          },
          "passed": [
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
              "refreshPositions": false,
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
          ],
          "failed": [
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
              "refreshPositions": false,
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
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "team": "Enemy Team",
            "location": "Left"
          },
          "passed": [
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
              "refreshPositions": false,
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
          ],
          "failed": [
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
              "refreshPositions": false,
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
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "team": "Enemy Team",
            "location": "Left"
          },
          "passed": [
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
              "refreshPositions": false,
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
          ],
          "failed": [
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
              "refreshPositions": false,
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
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "team": "Enemy Team",
            "location": "Left"
          },
          "passed": [
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
              "refreshPositions": false,
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
          ],
          "failed": [
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
              "refreshPositions": false,
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
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "Standard_Servant[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "3024014_Monster_W2_Argenti_Ability08_Part01": {
      "fileName": "3024014_Monster_W2_Argenti_Ability08_Part01",
      "childAbilityList": [
        "3024014_Monster_W2_Argenti_Ability08_Camera",
        "3024014_Monster_W2_Argenti_Ability08_Part01",
        "3024014_Monster_W2_Argenti_Ability08_Part02"
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
          "ability": "Monster_W2_Argenti_Ability08_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "3024014_Monster_W2_Argenti_Ability06_Part02": {
      "fileName": "3024014_Monster_W2_Argenti_Ability06_Part02",
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
          "modifier": "OneMorePerTurn"
        },
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": 3024011,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Argenti (Complete)"
              },
              {
                "name": "Enemy ID",
                "ID": 302401100,
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
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "modifier": "Enemy_W2_Argenti_Power_RL[<span class=\"descriptionNumberColor\">Soul Ascension</span>]",
              "duration": {
                "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                "displayLines": "{[Skill04[0]]}",
                "constants": [],
                "variables": [
                  "{[Skill04[0]]}"
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "modifier": "Enemy_W2_Argenti_Power[<span class=\"descriptionNumberColor\">Soulfreed</span>]",
              "duration": {
                "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                "displayLines": "{[Skill04[0]]}",
                "constants": [],
                "variables": [
                  "{[Skill04[0]]}"
                ]
              }
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "3024014_Monster_W2_Argenti_Ability06_Part01": {
      "fileName": "3024014_Monster_W2_Argenti_Ability06_Part01",
      "childAbilityList": [
        "3024014_Monster_W2_Argenti_Ability06_Camera",
        "3024014_Monster_W2_Argenti_Ability06_Part01",
        "3024014_Monster_W2_Argenti_Ability06_Part02"
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
          "ability": "Monster_W2_Argenti_Ability06_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "3024014_Monster_W2_Argenti_Ability07_Part02": {
      "fileName": "3024014_Monster_W2_Argenti_Ability07_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
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
          },
          "noTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "team": "Enemy Team",
                "location": "Left"
              },
              "passed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
                    "displayLines": "{[Skill03[1]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill03[1]]}"
                    ]
                  },
                  "refreshPositions": false,
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
                      "locationType": "First"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
                    "displayLines": "{[Skill03[1]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill03[1]]}"
                    ]
                  },
                  "refreshPositions": false,
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
                }
              ]
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
          },
          "noTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "team": "Enemy Team",
                "location": "Left"
              },
              "passed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
                    "displayLines": "{[Skill03[2]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill03[2]]}"
                    ]
                  },
                  "refreshPositions": false,
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
                }
              ],
              "failed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
                    "displayLines": "{[Skill03[2]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill03[2]]}"
                    ]
                  },
                  "refreshPositions": false,
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
                      "locationType": "Last"
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
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "team": "Enemy Team",
            "location": "Left"
          },
          "passed": [
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
              "refreshPositions": false,
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
          ],
          "failed": [
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
              "refreshPositions": false,
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
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Is Part Of Team Location",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "team": "Enemy Team",
            "location": "Left"
          },
          "passed": [
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
              "refreshPositions": false,
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
          ],
          "failed": [
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
              "refreshPositions": false,
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
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "Standard_Servant[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "3024014_Monster_W2_Argenti_Ability07_Part01": {
      "fileName": "3024014_Monster_W2_Argenti_Ability07_Part01",
      "childAbilityList": [
        "3024014_Monster_W2_Argenti_Ability07_Camera",
        "3024014_Monster_W2_Argenti_Ability07_Part01",
        "3024014_Monster_W2_Argenti_Ability07_Part02"
      ],
      "skillTrigger": "Skill07",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Spear & Shield"
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Argenti_Ability07_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "3024014_Monster_W2_Argenti_Ability05_Part02": {
      "fileName": "3024014_Monster_W2_Argenti_Ability05_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill05[0]]}) || Constants[0] (0.2) || MUL || RETURN",
              "displayLines": "({[Skill05[0]]} * 0.2)",
              "constants": [
                0.2
              ],
              "variables": [
                "{[Skill05[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "20%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill05[0]]}) || Constants[0] (0.8) || MUL || RETURN",
              "displayLines": "({[Skill05[0]]} * 0.8)",
              "constants": [
                0.8
              ],
              "variables": [
                "{[Skill05[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "80%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": 3024011,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Argenti (Complete)"
              },
              {
                "name": "Enemy ID",
                "ID": 302401100,
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
              "modifier": "Monster_W1_Gepard_RL_DamageUP[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
              "valuePerStack": {
                "MDF_DamageAddedRatio": {
                  "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
                  "displayLines": "{[SkillP01[0]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP01[0]]}"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 302401000,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": null
          }
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "3024014_Monster_W2_Argenti_Ability05_Part01": {
      "fileName": "3024014_Monster_W2_Argenti_Ability05_Part01",
      "childAbilityList": [
        "3024014_Monster_W2_Argenti_Ability05_Camera",
        "3024014_Monster_W2_Argenti_Ability05_Part01",
        "3024014_Monster_W2_Argenti_Ability05_Part02"
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
          "ability": "Monster_W2_Argenti_Ability05_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "3024014_Monster_W2_Argenti_Ability04_Part02": {
      "fileName": "3024014_Monster_W2_Argenti_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
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
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Enemy_W2_Argenti_Power[<span class=\"descriptionNumberColor\">Soulfreed</span>]"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Enemy_W2_Argenti_Power_RL[<span class=\"descriptionNumberColor\">Soul Ascension</span>]"
                  }
                ],
                "invertCondition": true
              },
              {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "Sword_FirstFlag"
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Enemy ID",
                    "ID": 3024011,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Argenti (Complete)"
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 302401100,
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
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Enemy_W2_Argenti_Power_RL[<span class=\"descriptionNumberColor\">Soul Ascension</span>]",
                  "duration": {
                    "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                    "displayLines": "{[Skill04[0]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill04[0]]}"
                    ]
                  }
                },
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
                  "name": "UI Display Event (On Entity)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "popUpText": "Action Advanced",
                  "living": true
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Enemy_W2_Argenti_Power[<span class=\"descriptionNumberColor\">Soulfreed</span>]",
                  "duration": {
                    "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                    "displayLines": "{[Skill04[0]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill04[0]]}"
                    ]
                  }
                }
              ]
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
                    "value": "Sword_FirstFlag"
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Enemy ID",
                        "ID": 3024011,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "characterName": "Argenti (Complete)"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 302401100,
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
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Enemy_W2_Argenti_Power_RL[<span class=\"descriptionNumberColor\">Soul Ascension</span>]",
                      "duration": {
                        "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                        "displayLines": "{[Skill04[0]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill04[0]]}"
                        ]
                      }
                    },
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
                      "name": "UI Display Event (On Entity)",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "popUpText": "Action Advanced",
                      "living": true
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Enemy_W2_Argenti_Power[<span class=\"descriptionNumberColor\">Soulfreed</span>]",
                      "duration": {
                        "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                        "displayLines": "{[Skill04[0]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill04[0]]}"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "3024014_Monster_W2_Argenti_Ability04_Part01": {
      "fileName": "3024014_Monster_W2_Argenti_Ability04_Part01",
      "childAbilityList": [
        "3024014_Monster_W2_Argenti_Ability04_Camera",
        "3024014_Monster_W2_Argenti_Ability04_Part01",
        "3024014_Monster_W2_Argenti_Ability04_Part02"
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
          "ability": "Monster_W2_Argenti_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "3024014_Monster_W2_Argenti_Ability03_Part02": {
      "fileName": "3024014_Monster_W2_Argenti_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Random Event",
          "isUnique": true,
          "count": 2,
          "odds": [
            0.3,
            0.4,
            0.4
          ],
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "team": "Enemy Team",
                "location": "Left"
              },
              "passed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
                    "displayLines": "{[Skill03[1]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill03[1]]}"
                    ]
                  },
                  "refreshPositions": false,
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
                      "locationType": "First"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
                    "displayLines": "{[Skill03[1]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill03[1]]}"
                    ]
                  },
                  "refreshPositions": false,
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
              },
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team Location",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "team": "Enemy Team",
                    "location": "Left"
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": {
                        "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
                        "displayLines": "{[Skill03[1]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill03[1]]}"
                        ]
                      },
                      "refreshPositions": false,
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
                          "locationType": "First"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": {
                        "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
                        "displayLines": "{[Skill03[1]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill03[1]]}"
                        ]
                      },
                      "refreshPositions": false,
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
                    }
                  ]
                }
              ],
              "noTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team Location",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "team": "Enemy Team",
                    "location": "Left"
                  },
                  "passed": [
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
                      "refreshPositions": false,
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
                  ],
                  "failed": [
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
                      "refreshPositions": false,
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
                    }
                  ]
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
              },
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team Location",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "team": "Enemy Team",
                    "location": "Left"
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": {
                        "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
                        "displayLines": "{[Skill03[1]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill03[1]]}"
                        ]
                      },
                      "refreshPositions": false,
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
                          "locationType": "First"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": {
                        "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
                        "displayLines": "{[Skill03[1]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill03[1]]}"
                        ]
                      },
                      "refreshPositions": false,
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
                    }
                  ]
                }
              ],
              "noTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team Location",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "team": "Enemy Team",
                    "location": "Left"
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": {
                        "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
                        "displayLines": "{[Skill03[2]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill03[2]]}"
                        ]
                      },
                      "refreshPositions": false,
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
                    }
                  ],
                  "failed": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": {
                        "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
                        "displayLines": "{[Skill03[2]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill03[2]]}"
                        ]
                      },
                      "refreshPositions": false,
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
                          "locationType": "Last"
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "Standard_Servant[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "3024014_Monster_W2_Argenti_Ability03_Part01": {
      "fileName": "3024014_Monster_W2_Argenti_Ability03_Part01",
      "childAbilityList": [
        "3024014_Monster_W2_Argenti_Ability03_Camera",
        "3024014_Monster_W2_Argenti_Ability03_Part01",
        "3024014_Monster_W2_Argenti_Ability03_Part02"
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
          "ability": "Monster_W2_Argenti_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "3024014_Monster_W2_Argenti_Ability02_Part02": {
      "fileName": "3024014_Monster_W2_Argenti_Ability02_Part02",
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
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
              "displayLines": "{[Skill02[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
              "displayLines": "{[Skill02[1]]}",
              "constants": [],
              "variables": [
                "{[Skill02[1]]}"
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
    "3024014_Monster_W2_Argenti_Ability02_Part01": {
      "fileName": "3024014_Monster_W2_Argenti_Ability02_Part01",
      "childAbilityList": [
        "3024014_Monster_W2_Argenti_Ability02_Camera",
        "3024014_Monster_W2_Argenti_Ability02_Part01",
        "3024014_Monster_W2_Argenti_Ability02_Part02"
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
          "ability": "Monster_W2_Argenti_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "3024014_Monster_W2_Argenti_Ability01_Part02": {
      "fileName": "3024014_Monster_W2_Argenti_Ability01_Part02",
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
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
              "displayLines": "{[Skill01[0]]}",
              "constants": [],
              "variables": [
                "{[Skill01[0]]}"
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
    "3024014_Monster_W2_Argenti_Ability01_Part01": {
      "fileName": "3024014_Monster_W2_Argenti_Ability01_Part01",
      "childAbilityList": [
        "3024014_Monster_W2_Argenti_Ability01_Camera",
        "3024014_Monster_W2_Argenti_Ability01_Part01",
        "3024014_Monster_W2_Argenti_Ability01_Part02"
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
          "ability": "Monster_W2_Argenti_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "3024014_BattleEventAbility_Monster_W2_Argenti_MainStory202": {
      "fileName": "3024014_BattleEventAbility_Monster_W2_Argenti_MainStory202",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "Monster_Monster_W2_Argenti_BattlePerform_LockHP"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Monster_Monster_W2_Argenti_BattlePerform_LockHP",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 0.0009999999
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked End [Owner]"
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "3024014_Monster_W2_Argenti_PassiveAbility202": {
      "fileName": "3024014_Monster_W2_Argenti_PassiveAbility202",
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
          "modifier": "Enemy_W2_Argenti_TalkListener"
        },
        {
          "name": "Add Stage Ability",
          "abilityName": "BattleEventAbility_Monster_W2_Argenti_MainStory202",
          "parameters": {}
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Enemy_W2_Argenti_TalkListener",
          "execute": [
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
                        "value1": "MDF_InsertCheck",
                        "compareType": "=",
                        "value2": 0
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
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_InsertCheck",
                      "value": 1
                    },
                    {
                      "name": "Set HP Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "setValue": 0.01
                    },
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "BattleEventAbility_Monster_W2_Argenti_MainStory202",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "priorityTag": "MonsterChangePhase",
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
      ]
    },
    "3024014_Monster_W2_Argenti_PartChange_Insert": {
      "fileName": "3024014_Monster_W2_Argenti_PartChange_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "silent": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "MaxPhase",
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
              "variableName": "Die_Flag"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 302401000,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": null
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Monster_ChangePhase"
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "multiBase": 0
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_Standard_Endurance"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Phase_Flag",
          "value": 2
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
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 302401000,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": null
          }
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Enemy_W2_Argenti_LockHP",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 0.01
                }
              ]
            }
          ]
        }
      ]
    },
    "3024014_Monster_W2_Argenti_PassiveAbilityInitiate": {
      "fileName": "3024014_Monster_W2_Argenti_PassiveAbilityInitiate",
      "skillTrigger": "SkillP03",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
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
          "variableName": "Phase_Flag",
          "value": 1
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_Standard_HideMonsterHUD"
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
          "modifier": "Enemy_Standard_MuteHitFly"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 302401000,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": null
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_W2_GS_Argenti_SpecialVictory_LockHP"
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_GS_Argenti_SpecialVictory_LockHP",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 0.5
                }
              ]
            },
            {
              "eventTrigger": "Locked HP Floor Reached [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Argenti_SpecialVictory_Flag",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
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
                      "variableName": "AIFlag",
                      "value": 13
                    },
                    {
                      "name": "Action Advance/Delay",
                      "advanceType": "Set",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "multiBase": 0
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "modifier": "Monster_Standard_DisableAction"
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "Argenti_SpecialVictory_Flag",
                      "value": 1
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "AIFlag",
            "Phase_Flag"
          ]
        }
      ]
    },
    "3024014_Monster_W2_Argenti_Passive02": {
      "fileName": "3024014_Monster_W2_Argenti_Passive02",
      "skillTrigger": "SkillP02",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "W2_Argenti_BattleScore1"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "W2_Argenti_BattleScore2"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "OneMorePerTurn"
        }
      ],
      "references": []
    },
    "3024014_Monster_W2_Argenti_Passive01": {
      "fileName": "3024014_Monster_W2_Argenti_Passive01",
      "skillTrigger": "SkillP01",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Argenti_Initiate"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Argenti_Initiate",
          "execute": [
            {
              "eventTrigger": "Waiting for Healing in Limbo",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "modifier": "Enemy_W2_ArgentiTotem_Initiate"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "modifier": "Enemy_W2_ArgentiTotem_01_Initiate"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "modifier": "Enemy_W2_ArgentiTotem_02_Initiate"
                },
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Die_Flag",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Dispel Debuffs",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
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
                      "variableName": "Die_Flag",
                      "value": 1
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Monster_Standard_Endurance"
                    },
                    {
                      "name": "Define Custom Variable with Varying Data",
                      "target": null,
                      "variableName": "MaxPhase",
                      "value": "MaxMonsterPhase"
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
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Set Enemy Phase",
                          "mode": "Inc"
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W2_Argenti_PartChange_Insert",
                          "priorityTag": "MonsterChangePhase",
                          "ownerState": "Mask_AliveOrLimbo",
                          "targetState": "Mask_AliveOrLimbo",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "allowAbilityTriggers": false
                        }
                      ],
                      "failed": [
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
                                "compareType": "NOT=",
                                "value2": {
                                  "operator": "Variables[0] (MaxPhase) || RETURN",
                                  "displayLines": "MaxPhase",
                                  "constants": [],
                                  "variables": [
                                    "MaxPhase"
                                  ]
                                }
                              },
                              {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value1": "MaxPhase",
                                "compareType": "=",
                                "value2": 3
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Set Enemy Phase",
                              "mode": "Inc"
                            },
                            {
                              "name": "Inject Ability Use",
                              "abilityName": "Monster_W2_Argenti_PartChange2T3_Insert",
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
                  ]
                }
              ],
              "priorityLevel": -90
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "3024014_Monster_W2_Argenti_PassiveAbility_BGM": {
      "fileName": "3024014_Monster_W2_Argenti_PassiveAbility_BGM",
      "childAbilityList": [
        "3024014_Monster_W2_Argenti_PassiveAbility_BGM"
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
          "modifier": "Enemy_W2_Argenti_ResetStageBGM"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Enemy_W2_Argenti_ResetStageBGM",
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
    "3024014_Modifiers": {
      "fileName": "3024014_Modifiers",
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
          "for": "Monster_Argenti_Attack_Sign",
          "modifierFlags": [],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_Standard_AllDamageReduce",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W2_Argenti_Power_RL[<span class=\"descriptionNumberColor\">Soul Ascension</span>]",
          "stackType": "Refresh",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "The knight's prayers completely ascended the soul. This is regarded as equal to \"Soulfreed.\"",
          "type": "Buff",
          "effectName": "Soul Ascension",
          "statusName": "Soul Ascension"
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W2_Argenti_Power[<span class=\"descriptionNumberColor\">Soulfreed</span>]",
          "stackType": "Refresh",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "The knight's prayers bid the liberation of souls. Abilities have been enhanced.",
          "type": "Buff",
          "effectName": "Soulfreed",
          "statusName": "Soulfreed"
        }
      ],
      "references": []
    }
  }
}