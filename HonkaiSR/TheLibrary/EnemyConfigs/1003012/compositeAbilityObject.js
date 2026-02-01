const compositeAbilityObject = {
  "fullCharacterName": 1003012,
  "trimCharacterName": 1003012,
  "abilityList": [
    "1003012_Monster_W1_Soldier03_RL_Ability09_Part02",
    "1003012_Monster_W1_Soldier03_RL_Ability09_Part01",
    "1003012_Monster_W1_Soldier03_PassiveAbilityInsert2",
    "1003012_Monster_W1_Soldier03_PassiveAbilityInsert",
    "1003012_Monster_W1_Soldier03_Ability09_Part02",
    "1003012_Monster_W1_Soldier03_Ability09_Part01",
    "1003012_Monster_W1_Soldier03_Ability08_Part02",
    "1003012_Monster_W1_Soldier03_Ability08_Part01",
    "1003012_Monster_W1_Soldier03_Ability07_Part02",
    "1003012_Monster_W1_Soldier03_Ability07_Part01",
    "1003012_Monster_W1_Soldier03_AbilityP06_Part02",
    "1003012_Monster_W1_Soldier03_AbilityP06_Part01",
    "1003012_Monster_W1_Soldier03_Ability06_Insert_Part02",
    "1003012_Monster_W1_Soldier03_Ability06_Insert_Part01",
    "1003012_Monster_W1_Soldier03_Ability06_Part02",
    "1003012_Monster_W1_Soldier03_Ability06_Part01",
    "1003012_Monster_W1_Soldier03_Ability01_Part02",
    "1003012_Monster_W1_Soldier03_Ability01_Part01",
    "1003012_Monster_W1_Soldier03_PassiveAbilityInitiate",
    "1003012_Modifiers"
  ],
  "abilityObject": {
    "1003012_Monster_W1_Soldier03_RL_Ability09_Part02": {
      "fileName": "1003012_Monster_W1_Soldier03_RL_Ability09_Part02",
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
          "modifier": "OneMore"
        },
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
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1003012_Monster_W1_Soldier03_RL_Ability09_Part01": {
      "fileName": "1003012_Monster_W1_Soldier03_RL_Ability09_Part01",
      "childAbilityList": [
        "1003012_Monster_W1_Soldier03_Ability09_Camera",
        "1003012_Monster_W1_Soldier03_RL_Ability09_Part01",
        "1003012_Monster_W1_Soldier03_RL_Ability09_Part02"
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
          "ability": "Monster_W1_Soldier03_RL_Ability09_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "from": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "to": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "value1": "Distance_Between_Entities",
            "compareType": ">",
            "value2": 0
          }
        }
      ],
      "references": []
    },
    "1003012_Monster_W1_Soldier03_PassiveAbilityInsert2": {
      "fileName": "1003012_Monster_W1_Soldier03_PassiveAbilityInsert2",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase2"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_W1_Soldier03_ListenBeingAttacked[<span class=\"descriptionNumberColor\">Counter</span>]"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "W1_Soldier03_00_AICounter",
          "value": 5
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "W1_Soldier03_00_InsertFlag"
        }
      ],
      "references": []
    },
    "1003012_Monster_W1_Soldier03_PassiveAbilityInsert": {
      "fileName": "1003012_Monster_W1_Soldier03_PassiveAbilityInsert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "flagName": "DisableAction"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "flagName": "STAT_CTRL"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "flagName": "Break"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "OneMore"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "Monster_W1_Soldier03_LoseShieldInCtrl"
              }
            ]
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_W1_Soldier03_ListenBeingAttacked[<span class=\"descriptionNumberColor\">Counter</span>]"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "flagName": "DisableAction"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "flagName": "STAT_CTRL"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "flagName": "Break"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "OneMore"
              }
            ]
          }
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase1"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "flagName": "DisableAction"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "flagName": "STAT_CTRL"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "flagName": "Break"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "OneMore"
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
              "modifier": "Monster_W1_Soldier03_LoseShieldInCtrl"
            }
          ],
          "failed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_W1_Soldier03_LoseShieldInCtrl"
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
          "variableName": "W1_Soldier03_00_InsertFlag"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "W1_Soldier03_00_AICounter",
          "value": 1
        }
      ],
      "references": []
    },
    "1003012_Monster_W1_Soldier03_Ability09_Part02": {
      "fileName": "1003012_Monster_W1_Soldier03_Ability09_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "value": 0
        },
        {
          "name": "UI Display Event (On Entity)",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "popUpText": "Action Advanced"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "modifier": "Monster_W1_Soldier01_03_Bonus[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
          "duration": {
            "operator": "Variables[0] (UnusedUnderThisBase_1) || RETURN",
            "displayLines": "UnusedUnderThisBase_1",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_1"
            ]
          },
          "valuePerStack": {
            "Modifier_AttackAddedRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_2) || RETURN",
              "displayLines": "UnusedUnderThisBase_2",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_2"
              ]
            },
            "Modifier_SpeedDelta": 0
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "Monster_W1_Soldier03_HoldShield"
          },
          "passed": [
            {
              "name": "Inject Ability Use",
              "abilityName": "Monster_W1_Soldier03_PassiveAbilityInsert2",
              "priorityTag": "MonsterChangeState",
              "canHitNonTargets": true,
              "showInActionOrder": true,
              "allowAbilityTriggers": false
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1003012_Monster_W1_Soldier03_Ability09_Part01": {
      "fileName": "1003012_Monster_W1_Soldier03_Ability09_Part01",
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
          "ability": "Monster_W1_Soldier03_Ability09_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1003012_Monster_W1_Soldier03_Ability08_Part02": {
      "fileName": "1003012_Monster_W1_Soldier03_Ability08_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 1003011,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Silvermane Lieutenant (Bug)"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{All Team Members(Exclude Self)}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": "<=",
                "value2": 4
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "W1_Soldier03_00_SummonCounter",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
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
                          "delayPercent": 0.7,
                          "refreshPositions": false,
                          "enemyList": [
                            {
                              "name": "Create Enemy from Custom",
                              "value": "SummonID01",
                              "summonLocation": "First"
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": 0.7,
                          "refreshPositions": false,
                          "enemyList": [
                            {
                              "name": "Create Enemy from Custom",
                              "value": "SummonID01",
                              "summonLocation": "Last"
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
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{All Team Members(Exclude Self)}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": "<=",
                "value2": 4
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "W1_Soldier03_00_SummonCounter",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Part Of Team Location",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "team": "Enemy Team",
                        "location": "Right"
                      },
                      "passed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": 0.7,
                          "refreshPositions": false,
                          "enemyList": [
                            {
                              "name": "Create Enemy from Custom",
                              "value": "SummonID02",
                              "summonLocation": "Last"
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": 0.7,
                          "refreshPositions": false,
                          "enemyList": [
                            {
                              "name": "Create Enemy from Custom",
                              "value": "SummonID02",
                              "summonLocation": "First"
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
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{All Team Members(Exclude Self)}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": "<=",
                "value2": 4
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "W1_Soldier03_00_SummonCounter",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
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
                          "delayPercent": 0.7,
                          "refreshPositions": false,
                          "enemyList": [
                            {
                              "name": "Create Enemy from Custom",
                              "value": "SummonID02",
                              "summonLocation": "First"
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": 0.7,
                          "refreshPositions": false,
                          "enemyList": [
                            {
                              "name": "Create Enemy from Custom",
                              "value": "SummonID02",
                              "summonLocation": "Last"
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
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{All Team Members(Exclude Self)}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": "<=",
                "value2": 4
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "W1_Soldier03_00_SummonCounter",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Part Of Team Location",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "team": "Enemy Team",
                        "location": "Right"
                      },
                      "passed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": 0.7,
                          "refreshPositions": false,
                          "enemyList": [
                            {
                              "name": "Create Enemy from Custom",
                              "value": "SummonID01",
                              "summonLocation": "Last"
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": 0.7,
                          "refreshPositions": false,
                          "enemyList": [
                            {
                              "name": "Create Enemy from Custom",
                              "value": "SummonID01",
                              "summonLocation": "First"
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
                "compareType": "<=",
                "value2": 3
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "W1_Soldier03_00_SummonCounter",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
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
                          "refreshPositions": false,
                          "enemyList": [
                            {
                              "name": "Create Enemy from Custom",
                              "value": "SummonID01",
                              "summonLocation": "First"
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Create Enemies",
                          "refreshPositions": false,
                          "enemyList": [
                            {
                              "name": "Create Enemy from Custom",
                              "value": "SummonID01",
                              "summonLocation": "Last"
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
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{All Team Members(Exclude Self)}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": "<=",
                "value2": 3
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "W1_Soldier03_00_SummonCounter",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Part Of Team Location",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "team": "Enemy Team",
                        "location": "Right"
                      },
                      "passed": [
                        {
                          "name": "Create Enemies",
                          "refreshPositions": false,
                          "enemyList": [
                            {
                              "name": "Create Enemy from Custom",
                              "value": "SummonID02",
                              "summonLocation": "Last"
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Create Enemies",
                          "refreshPositions": false,
                          "enemyList": [
                            {
                              "name": "Create Enemy from Custom",
                              "value": "SummonID02",
                              "summonLocation": "First"
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
                "target": "{{Caster}}"
              },
              "modifier": "OneMore"
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
    "1003012_Monster_W1_Soldier03_Ability08_Part01": {
      "fileName": "1003012_Monster_W1_Soldier03_Ability08_Part01",
      "childAbilityList": [
        "1003012_Monster_W1_Soldier03_Ability08_Camera",
        "1003012_Monster_W1_Soldier03_Ability08_Part01",
        "1003012_Monster_W1_Soldier03_Ability08_Part02"
      ],
      "skillTrigger": "Skill08",
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
          "ability": "Monster_W1_Soldier03_Ability08_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1003012_Monster_W1_Soldier03_Ability07_Part02": {
      "fileName": "1003012_Monster_W1_Soldier03_Ability07_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase2"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 1003011,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Silvermane Lieutenant (Bug)"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_W1_Soldier03_HoldShield"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_W1_Soldier03_ListenBeingAttacked[<span class=\"descriptionNumberColor\">Counter</span>]"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1003012_Monster_W1_Soldier03_Ability07_Part01": {
      "fileName": "1003012_Monster_W1_Soldier03_Ability07_Part01",
      "childAbilityList": [
        "1003012_Monster_W1_Soldier03_Ability07_Camera",
        "1003012_Monster_W1_Soldier03_Ability07_Part01",
        "1003012_Monster_W1_Soldier03_Ability07_Part02"
      ],
      "skillTrigger": "Skill07",
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
          "ability": "Monster_W1_Soldier03_Ability07_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1003012_Monster_W1_Soldier03_AbilityP06_Part02": {
      "fileName": "1003012_Monster_W1_Soldier03_AbilityP06_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase1"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || Constants[0] (0.2) || MUL || RETURN",
              "displayLines": "({[Skill06[0]]} * 0.2)",
              "constants": [
                0.2
              ],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "20%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || Constants[0] (0.1) || MUL || RETURN",
              "displayLines": "({[Skill06[0]]} * 0.1)",
              "constants": [
                0.1
              ],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "10%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || Constants[0] (0.1) || MUL || RETURN",
              "displayLines": "({[Skill06[0]]} * 0.1)",
              "constants": [
                0.1
              ],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "10%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || Constants[0] (0.1) || MUL || RETURN",
              "displayLines": "({[Skill06[0]]} * 0.1)",
              "constants": [
                0.1
              ],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "10%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || Constants[0] (0.5) || MUL || RETURN",
              "displayLines": "({[Skill06[0]]} * 0.5)",
              "constants": [
                0.5
              ],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "50%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_W1_Soldier03_ListenBeingAttacked[<span class=\"descriptionNumberColor\">Counter</span>]"
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase2"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_W1_Soldier03_ListenBeingAttacked[<span class=\"descriptionNumberColor\">Counter</span>]"
        }
      ],
      "references": []
    },
    "1003012_Monster_W1_Soldier03_AbilityP06_Part01": {
      "fileName": "1003012_Monster_W1_Soldier03_AbilityP06_Part01",
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
              "target": "{{All Team Members(Exclude Self)}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": "=",
            "value2": 0
          },
          "failed": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "inherentTarget": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "ability": "Monster_W1_Soldier03_AbilityP06_Part02",
              "isTrigger": true
            },
            "Deleted bullshit",
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "from": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "to": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "value1": "Distance_Between_Entities",
                "compareType": ">",
                "value2": 0
              }
            }
          ]
        }
      ],
      "references": []
    },
    "1003012_Monster_W1_Soldier03_Ability06_Insert_Part02": {
      "fileName": "1003012_Monster_W1_Soldier03_Ability06_Insert_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase1"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || Constants[0] (0.2) || MUL || RETURN",
              "displayLines": "({[Skill06[0]]} * 0.2)",
              "constants": [
                0.2
              ],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "20%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || Constants[0] (0.1) || MUL || RETURN",
              "displayLines": "({[Skill06[0]]} * 0.1)",
              "constants": [
                0.1
              ],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "10%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || Constants[0] (0.1) || MUL || RETURN",
              "displayLines": "({[Skill06[0]]} * 0.1)",
              "constants": [
                0.1
              ],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "10%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || Constants[0] (0.1) || MUL || RETURN",
              "displayLines": "({[Skill06[0]]} * 0.1)",
              "constants": [
                0.1
              ],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "10%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || Constants[0] (0.5) || MUL || RETURN",
              "displayLines": "({[Skill06[0]]} * 0.5)",
              "constants": [
                0.5
              ],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "50%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_W1_Soldier03_ListenBeingAttacked[<span class=\"descriptionNumberColor\">Counter</span>]"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "W1_Soldier03_00_AICounter",
          "value": 1
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": 1
        }
      ],
      "references": []
    },
    "1003012_Monster_W1_Soldier03_Ability06_Insert_Part01": {
      "fileName": "1003012_Monster_W1_Soldier03_Ability06_Insert_Part01",
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
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "Monster_W1_Soldier03_Ability06_Insert_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "from": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "to": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "value1": "Distance_Between_Entities",
            "compareType": ">",
            "value2": 0
          }
        }
      ],
      "references": []
    },
    "1003012_Monster_W1_Soldier03_Ability06_Part02": {
      "fileName": "1003012_Monster_W1_Soldier03_Ability06_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase1"
        },
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
              "operator": "Variables[0] ({[Skill06[0]]}) || Constants[0] (0.2) || MUL || RETURN",
              "displayLines": "({[Skill06[0]]} * 0.2)",
              "constants": [
                0.2
              ],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "20%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || Constants[0] (0.1) || MUL || RETURN",
              "displayLines": "({[Skill06[0]]} * 0.1)",
              "constants": [
                0.1
              ],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "10%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || Constants[0] (0.1) || MUL || RETURN",
              "displayLines": "({[Skill06[0]]} * 0.1)",
              "constants": [
                0.1
              ],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "10%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || Constants[0] (0.1) || MUL || RETURN",
              "displayLines": "({[Skill06[0]]} * 0.1)",
              "constants": [
                0.1
              ],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "10%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || Constants[0] (0.5) || MUL || RETURN",
              "displayLines": "({[Skill06[0]]} * 0.5)",
              "constants": [
                0.5
              ],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "50%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_W1_Soldier03_ListenBeingAttacked[<span class=\"descriptionNumberColor\">Counter</span>]"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1003012_Monster_W1_Soldier03_Ability06_Part01": {
      "fileName": "1003012_Monster_W1_Soldier03_Ability06_Part01",
      "childAbilityList": [
        "1003012_Monster_W1_Soldier03_Ability06_Camera",
        "1003012_Monster_W1_Soldier03_Ability06_Part01",
        "1003012_Monster_W1_Soldier03_Ability06_Part02",
        "1003012_Monster_W1_Soldier03_AbilityP06_Camera",
        "1003012_Monster_W1_Soldier03_AbilityP06_Part01",
        "1003012_Monster_W1_Soldier03_AbilityP06_Part02",
        "1003012_Monster_W1_Soldier03_Ability06_Insert_Part01",
        "1003012_Monster_W1_Soldier03_Ability06_Insert_Part02",
        "1003012_Monster_W1_Soldier03_Ability06_Insert_Camera"
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
          "ability": "Monster_W1_Soldier03_Ability06_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "from": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "to": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "value1": "Distance_Between_Entities",
            "compareType": ">",
            "value2": 0
          }
        }
      ],
      "references": []
    },
    "1003012_Monster_W1_Soldier03_Ability01_Part02": {
      "fileName": "1003012_Monster_W1_Soldier03_Ability01_Part02",
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
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1003012_Monster_W1_Soldier03_Ability01_Part01": {
      "fileName": "1003012_Monster_W1_Soldier03_Ability01_Part01",
      "childAbilityList": [
        "1003012_Monster_W1_Soldier03_Ability01_Camera",
        "1003012_Monster_W1_Soldier03_Ability01_Part01",
        "1003012_Monster_W1_Soldier03_Ability01_Part02"
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
          "ability": "Monster_W1_Soldier03_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "from": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "to": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "value1": "Distance_Between_Entities",
            "compareType": ">",
            "value2": 0
          }
        }
      ],
      "references": []
    },
    "1003012_Monster_W1_Soldier03_PassiveAbilityInitiate": {
      "fileName": "1003012_Monster_W1_Soldier03_PassiveAbilityInitiate",
      "skillTrigger": "PassiveSkillInitiate",
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
          "modifier": "Enemy_W1_Soldier03_BattleScore1"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "W1_Soldier03_00_SummonCounter"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "W1_Soldier03_00_AICounter",
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
            "ID": 1003011,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Silvermane Lieutenant (Bug)"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "OneMorePerTurn"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_W1_Soldier03_ShieldControl"
            }
          ]
        }
      ],
      "references": []
    },
    "1003012_Modifiers": {
      "fileName": "1003012_Modifiers",
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
          "for": "MW1_Soldier03_RL_AIFlag"
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W1_Soldier03_BattleScore1",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "W1_Soldier03_00_BattleScore2_Flag"
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "W1_Soldier"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "W1_Soldier03_00_BattleScore2_Flag",
                      "context": "TargetEntity",
                      "value": 1,
                      "max": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "value1": "W1_Soldier03_00_BattleScore1_Flag",
                    "compareType": ">=",
                    "value2": 4,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "matchTags": true,
                      "relatedAchievements": [
                        {
                          "title": "Attack! No Matter the Cost!",
                          "desc": "Trigger Silvermane Lieutenant's Shield Reflect at least <unbreak>#1[i]</unbreak> time(s) and defeat it",
                          "rarity": "Low",
                          "params": [
                            4
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "W1_Soldier03_00_BattleScore2_Flag",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "matchTags": true,
                      "relatedAchievements": [
                        {
                          "title": "Decapitation Strike",
                          "desc": "Defeat the Silvermane Lieutenant without defeating any Silvermane Guards",
                          "rarity": "Mid"
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
          "for": "Monster_W1_Soldier03_LoseShieldInCtrl",
          "execute": [
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "DisableAction",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "STAT_CTRL",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "Break",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W1_Soldier03_PassiveAbilityInsert",
                      "priorityTag": "MonsterChangeState",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
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
          "for": "Enemy_W1_Soldier03_ListenBeingAttacked[<span class=\"descriptionNumberColor\">Counter</span>]",
          "modifierFlags": [
            "MuteHitH",
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Set Shield State/Value"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "ReturnAttackCounter"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Set Shield State/Value",
                  "reset": true
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 1003011,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": "Silvermane Lieutenant (Bug)"
                  },
                  "passed": [
                    {
                      "name": "Update Modifier Description",
                      "popUpText": "When attacked, performs a powerful Counter on the attacker. Remains in the Counter state as long as there are other enemy targets on the field."
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked End [Owner]",
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
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "ReturnAttackCounter",
                        "compareType": "=",
                        "value2": 0,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "STAT_CTRL",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "Break",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Level Entity}}"
                        },
                        "value1": "W1_Soldier03_00_BattleScore1_Flag",
                        "compareType": "=",
                        "value2": 0,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Level Entity}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "W1_Soldier03_00_BattleScore1_Flag"
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "variableName": "W1_Soldier03_00_BattleScore1_Flag",
                      "context": "TargetEntity",
                      "value": 1,
                      "max": 4
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Enemy ID",
                        "ID": 1003011,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "characterName": "Silvermane Lieutenant (Bug)"
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Compare: Variable",
                                "value1": "W1_Soldier03_00_InsertAttackFlag",
                                "compareType": "=",
                                "value2": 0,
                                "contextScope": "TargetEntity"
                              },
                              {
                                "name": "NOT",
                                "condition": {
                                  "name": "Has Param Flag",
                                  "flagName": "IsFakeAvatarAttack"
                                }
                              },
                              {
                                "name": "Is Part Of",
                                "of": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Currency Wars Full OffFieldList}}"
                                },
                                "mustBeAlive2": true,
                                "invertCondition": true
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
                              "variableName": "W1_Soldier03_00_InsertAttackFlag",
                              "value": 1
                            },
                            {
                              "name": "Inject Ability Use",
                              "abilityName": "Monster_W1_Soldier03_AbilityP06_Part01",
                              "abilityTarget": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "priorityTag": "MonsterInsertAttackSelf",
                              "showInActionOrder": true,
                              "abortFlags": [
                                "STAT_CTRL",
                                "DisableAction",
                                "Break"
                              ],
                              "allowAbilityTriggers": false
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
                                "name": "NOT",
                                "condition": {
                                  "name": "Has Param Flag",
                                  "flagName": "IsFakeAvatarAttack"
                                }
                              },
                              {
                                "name": "Is Part Of",
                                "of": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Currency Wars Full OffFieldList}}"
                                },
                                "mustBeAlive2": true,
                                "invertCondition": true
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
                              "variableName": "ReturnAttackCounter",
                              "value": 1
                            },
                            {
                              "name": "Inject Ability Use",
                              "abilityName": "Monster_W1_Soldier03_Ability06_Insert_Part01",
                              "abilityTarget": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "priorityTag": "MonsterInsertAttackSelf",
                              "showInActionOrder": true,
                              "abortFlags": [
                                "STAT_CTRL",
                                "DisableAction",
                                "Break"
                              ],
                              "allowAbilityTriggers": false
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
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "ReturnAttackCounter"
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "Phase1"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 1003011,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": "Silvermane Lieutenant (Bug)"
                  },
                  "failed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "W1_Soldier03_00_AICounter",
                      "value": 1
                    }
                  ]
                },
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "Uses a Powerful Counter on the attacker after being attacked.",
          "type": "Buff",
          "effectName": "Counter",
          "statusName": "Counter"
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_Soldier03_HoldShield",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "W1_Soldier03_00_AICounter",
                  "value": 1
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "W1_Soldier03_00_InsertAttackFlag"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_Soldier03_ShieldControl",
          "execute": [
            {
              "eventTrigger": "Entity Death [Anyone]",
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
                        "value1": "W1_Soldier03_00_InsertFlag",
                        "compareType": "=",
                        "value2": 0,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{All Team Members(Exclude Self)}}"
                        },
                        "value1": "TeamCharacterCount",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Teammate",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "W1_Soldier03_00_InsertFlag",
                          "value": 1
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "Monster_W1_Soldier03_HoldShield"
                          },
                          "passed": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "Monster_W1_Soldier03_HoldShield"
                            },
                            {
                              "name": "Inject Ability Use",
                              "abilityName": "Monster_W1_Soldier03_PassiveAbilityInsert",
                              "priorityTag": "MonsterChangeState",
                              "canHitNonTargets": true,
                              "showInActionOrder": true,
                              "allowAbilityTriggers": false
                            }
                          ],
                          "failed": [
                            {
                              "name": "Declare Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "scope": "TargetEntity",
                              "variableName": "W1_Soldier03_00_AICounter",
                              "value": 1
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
              "eventTrigger": "Entity Left Battle [Anyone]",
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
                        "value1": "W1_Soldier03_00_InsertFlag",
                        "compareType": "=",
                        "value2": 0,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{All Team Members(Exclude Self)}}"
                        },
                        "value1": "TeamCharacterCount",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Teammate",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "W1_Soldier03_00_InsertFlag",
                          "value": 1
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "Monster_W1_Soldier03_HoldShield"
                          },
                          "passed": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "Monster_W1_Soldier03_HoldShield"
                            },
                            {
                              "name": "Inject Ability Use",
                              "abilityName": "Monster_W1_Soldier03_PassiveAbilityInsert",
                              "priorityTag": "MonsterChangeState",
                              "canHitNonTargets": true,
                              "showInActionOrder": true,
                              "allowAbilityTriggers": false
                            }
                          ],
                          "failed": [
                            {
                              "name": "Declare Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "scope": "TargetEntity",
                              "variableName": "W1_Soldier03_00_AICounter",
                              "value": 1
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
          "stackData": [],
          "latentQueue": [
            "W1_Soldier03_00_SummonCounter",
            "W1_Soldier03_00_AICounter"
          ]
        }
      ],
      "references": []
    }
  }
}