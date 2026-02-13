const compositeAbilityObject = {
  "fullCharacterName": 8025010,
  "trimCharacterName": 8025010,
  "abilityList": [
    "8025010_Monster_SW_Boss_01_PassiveAbilityMainBattle",
    "8025010_Monster_SW_Boss_01_PassiveAbility_Insert",
    "8025010_Monster_SW_Boss_01_AbilityP05_02",
    "8025010_Monster_SW_Boss_01_AbilityP05",
    "8025010_Monster_SW_Boss_01_Ability06_Part02",
    "8025010_Monster_SW_Boss_01_Ability06_Part01",
    "8025010_Monster_SW_Boss_01_Ability05_Part02",
    "8025010_Monster_SW_Boss_01_Ability05_Part01",
    "8025010_Monster_SW_Boss_01_Ability04_Part02",
    "8025010_Monster_SW_Boss_01_Ability04_Part01",
    "8025010_Monster_SW_Boss_01_Ability03_Part02",
    "8025010_Monster_SW_Boss_01_Ability03_Part01",
    "8025010_Monster_SW_Boss_01_Ability02_Part02",
    "8025010_Monster_SW_Boss_01_Ability02_Part01",
    "8025010_Monster_SW_Boss_01_Ability01_Part02",
    "8025010_Monster_SW_Boss_01_Ability01_Part01",
    "8025010_Monster_SW_Boss_01_Passive01",
    "8025010_Modifiers"
  ],
  "abilityObject": {
    "8025010_Monster_SW_Boss_01_PassiveAbilityMainBattle": {
      "fileName": "8025010_Monster_SW_Boss_01_PassiveAbilityMainBattle",
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
          "modifier": "<a class=\"gModGreen\" id=\"-848257295\">Enemy_SW_Boss_01_PassiveAbilityMainBattle</a>"
        }
      ],
      "references": []
    },
    "8025010_Monster_SW_Boss_01_PassiveAbility_Insert": {
      "fileName": "8025010_Monster_SW_Boss_01_PassiveAbility_Insert",
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
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "BreakEndFlag"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"259450291\">Monster_SW_Boss_01_Ability05Charge</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2142572207\">Monster_SW_Boss_01_Ability05_Passive</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-850302516\">Monster_SW_Boss_01_DamageReduce</a>[<span class=\"descriptionNumberColor\">Multiply</span>]"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-848257295\">Enemy_SW_Boss_01_PassiveAbilityMainBattle</a>"
          }
        },
        "Deleted bullshit",
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
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1916097971\">Monster_SW_Boss_Endurance</a>"
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
          "variableName": "Phase2FirstTurn",
          "value": 1
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1293250966\">Monster_SW_Boss_01_PartController</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-848257295\">Enemy_SW_Boss_01_PassiveAbilityMainBattle</a>"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"346528323\">Monster_SW_Boss_01_MainBattleLockHP</a>"
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__217357917\">Monster_SW_Boss_01_MainBattle_DisableAction</a>",
          "modifierFlags": [
            "DisableAction"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__346528323\">Monster_SW_Boss_01_MainBattleLockHP</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 0.01
                }
              ]
            },
            {
              "eventTrigger": "Locked HP Floor Reached [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"217357917\">Monster_SW_Boss_01_MainBattle_DisableAction</a>"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "BreakEndFlag",
            "InsertCheck",
            "AIFlag",
            "Phase2FirstTurn"
          ]
        }
      ]
    },
    "8025010_Monster_SW_Boss_01_AbilityP05_02": {
      "fileName": "8025010_Monster_SW_Boss_01_AbilityP05_02",
      "childAbilityList": [
        "8025010_Monster_SW_Boss_01_AbilityP05_02",
        "8025010_Monster_SW_Boss_01_AbilityP05_02_Camera"
      ],
      "skillTrigger": "Skill07",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "value1": "Target__Toughness",
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "ContextAbility",
              "variableName": "Ability_Count"
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "includeDyingTargets": true,
              "maxTargets": 5,
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team"
              },
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "Ability_Count",
                  "context": "ContextAbility",
                  "value": 1,
                  "max": 5
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
                    "value1": "Ability_Count",
                    "compareType": "<",
                    "value2": 5
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP",
                    "compareType": ">",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Phase2FirstTurn",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "failed": [
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
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"-1940595812\">RandomSummonDelay</a>"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1730193233\">Enemy_SW_Boss_01_SummonMinion</a>",
                          "valuePerStack": {
                            "MDF_SummonID": {
                              "operator": "Variables[0] (SummonMonsterID01) || RETURN",
                              "displayLines": "SummonMonsterID01",
                              "constants": [],
                              "variables": [
                                "SummonMonsterID01"
                              ]
                            },
                            "MDF_SummonDelay": {
                              "operator": "Variables[0] (SummonDelayRatioPhase2) || RETURN",
                              "displayLines": "SummonDelayRatioPhase2",
                              "constants": [],
                              "variables": [
                                "SummonDelayRatioPhase2"
                              ]
                            }
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"-1940595812\">RandomSummonDelay</a>"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1730193233\">Enemy_SW_Boss_01_SummonMinion</a>",
                          "valuePerStack": {
                            "MDF_SummonID": {
                              "operator": "Variables[0] (SummonMonsterID01) || RETURN",
                              "displayLines": "SummonMonsterID01",
                              "constants": [],
                              "variables": [
                                "SummonMonsterID01"
                              ]
                            },
                            "MDF_SummonDelay": {
                              "operator": "Variables[0] (SummonDelayRatioPhase2) || RETURN",
                              "displayLines": "SummonDelayRatioPhase2",
                              "constants": [],
                              "variables": [
                                "SummonDelayRatioPhase2"
                              ]
                            }
                          }
                        },
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"-1940595812\">RandomSummonDelay</a>"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1730193233\">Enemy_SW_Boss_01_SummonMinion</a>",
                          "valuePerStack": {
                            "MDF_SummonID": {
                              "operator": "Variables[0] (SummonMonsterID01) || RETURN",
                              "displayLines": "SummonMonsterID01",
                              "constants": [],
                              "variables": [
                                "SummonMonsterID01"
                              ]
                            },
                            "MDF_SummonDelay": {
                              "operator": "Variables[0] (SummonDelayRatioPhase2) || RETURN",
                              "displayLines": "SummonDelayRatioPhase2",
                              "constants": [],
                              "variables": [
                                "SummonDelayRatioPhase2"
                              ]
                            }
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
                    }
                  ]
                }
              ]
            },
            "Deleted bullshit",
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-850302516\">Monster_SW_Boss_01_DamageReduce</a>[<span class=\"descriptionNumberColor\">Multiply</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"259450291\">Monster_SW_Boss_01_Ability05Charge</a>"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "MaxStance",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
              "warningType": "MaxToughness"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                  "displayLines": "{[Skill05[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill05[1]]}"
                  ]
                },
                "dmgFormula": "Max HP Scaling",
                "Toughness": {
                  "operator": "Variables[0] (MaxStance) || RETURN",
                  "displayLines": "MaxStance",
                  "constants": [],
                  "variables": [
                    "MaxStance"
                  ]
                },
                "ToughnessDMGType": {},
                "Tags": null,
                "attackType": "Additional DMG"
              }
            },
            "Trigger: Attack End",
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-658511969\">Monster_SW_Boss_DamageTakenUp</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
              "duration": {
                "operator": "Variables[0] ({[Skill04[3]]}) || RETURN",
                "displayLines": "{[Skill04[3]]}",
                "constants": [],
                "variables": [
                  "{[Skill04[3]]}"
                ]
              },
              "stackLimit": {
                "operator": "Variables[0] ({[Skill04[4]]}) || RETURN",
                "displayLines": "{[Skill04[4]]}",
                "constants": [],
                "variables": [
                  "{[Skill04[4]]}"
                ]
              },
              "valuePerStack": {
                "MDF_DamageTakenUpRatio_PerLayer": {
                  "operator": "Variables[0] ({[Skill04[2]]}) || RETURN",
                  "displayLines": "{[Skill04[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill04[2]]}"
                  ]
                }
              },
              "addStacksPerTrigger": {
                "operator": "Variables[0] ({[Skill04[1]]}) || RETURN",
                "displayLines": "{[Skill04[1]]}",
                "constants": [],
                "variables": [
                  "{[Skill04[1]]}"
                ]
              }
            },
            {
              "name": "Action Advance/Delay",
              "target": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "advanceType": "Set",
              "multiAdd": "{[Skill04[5]]}"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "BreakEndFlag",
              "value": 1
            }
          ]
        }
      ],
      "functions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1940595812\">RandomSummonDelay</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Random Chance",
                "chance": 0.4
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "SummonDelayRatio1",
                  "value": {
                    "operator": "Variables[0] (SummonDelayRatio1Random2) || RETURN",
                    "displayLines": "SummonDelayRatio1Random2",
                    "constants": [],
                    "variables": [
                      "SummonDelayRatio1Random2"
                    ]
                  }
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
                      "name": "Define Custom Variable",
                      "variableName": "SummonDelayRatio1",
                      "value": {
                        "operator": "Variables[0] (SummonDelayRatio1Random3) || RETURN",
                        "displayLines": "SummonDelayRatio1Random3",
                        "constants": [],
                        "variables": [
                          "SummonDelayRatio1Random3"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "SummonDelayRatio1",
                      "value": {
                        "operator": "Variables[0] (SummonDelayRatio1Random1) || RETURN",
                        "displayLines": "SummonDelayRatio1Random1",
                        "constants": [],
                        "variables": [
                          "SummonDelayRatio1Random1"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "8025010_Monster_SW_Boss_01_AbilityP05": {
      "fileName": "8025010_Monster_SW_Boss_01_AbilityP05",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Phase2FirstTurn",
            "compareType": "=",
            "value2": 1,
            "contextScope": "TargetEntity"
          },
          "failed": [
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
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1940595812\">RandomSummonDelay</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1730193233\">Enemy_SW_Boss_01_SummonMinion</a>",
                  "valuePerStack": {
                    "MDF_SummonID": {
                      "operator": "Variables[0] (SummonMonsterID01) || RETURN",
                      "displayLines": "SummonMonsterID01",
                      "constants": [],
                      "variables": [
                        "SummonMonsterID01"
                      ]
                    },
                    "MDF_SummonDelay": {
                      "operator": "Variables[0] (SummonDelayRatioPhase2) || RETURN",
                      "displayLines": "SummonDelayRatioPhase2",
                      "constants": [],
                      "variables": [
                        "SummonDelayRatioPhase2"
                      ]
                    }
                  }
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Phase2FirstSummon",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Phase2FirstSummon",
                      "value": 0
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1730193233\">Enemy_SW_Boss_01_SummonMinion</a>",
                      "valuePerStack": {
                        "MDF_SummonID": {
                          "operator": "Variables[0] (SummonMonsterID02) || RETURN",
                          "displayLines": "SummonMonsterID02",
                          "constants": [],
                          "variables": [
                            "SummonMonsterID02"
                          ]
                        },
                        "MDF_SummonDelay": {
                          "operator": "Variables[0] (SummonDelayRatioPhase1) || RETURN",
                          "displayLines": "SummonDelayRatioPhase1",
                          "constants": [],
                          "variables": [
                            "SummonDelayRatioPhase1"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1940595812\">RandomSummonDelay</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1730193233\">Enemy_SW_Boss_01_SummonMinion</a>",
                      "valuePerStack": {
                        "MDF_SummonID": {
                          "operator": "Variables[0] (SummonMonsterID01) || RETURN",
                          "displayLines": "SummonMonsterID01",
                          "constants": [],
                          "variables": [
                            "SummonMonsterID01"
                          ]
                        },
                        "MDF_SummonDelay": {
                          "operator": "Variables[0] (SummonDelayRatioPhase2) || RETURN",
                          "displayLines": "SummonDelayRatioPhase2",
                          "constants": [],
                          "variables": [
                            "SummonDelayRatioPhase2"
                          ]
                        }
                      }
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
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1730193233\">Enemy_SW_Boss_01_SummonMinion</a>",
                          "valuePerStack": {
                            "MDF_SummonID": {
                              "operator": "Variables[0] (SummonMonsterID02) || RETURN",
                              "displayLines": "SummonMonsterID02",
                              "constants": [],
                              "variables": [
                                "SummonMonsterID02"
                              ]
                            },
                            "MDF_SummonDelay": {
                              "operator": "Variables[0] (SummonDelayRatioPhase1) || RETURN",
                              "displayLines": "SummonDelayRatioPhase1",
                              "constants": [],
                              "variables": [
                                "SummonDelayRatioPhase1"
                              ]
                            }
                          }
                        },
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"-1940595812\">RandomSummonDelay</a>"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1730193233\">Enemy_SW_Boss_01_SummonMinion</a>",
                          "valuePerStack": {
                            "MDF_SummonID": {
                              "operator": "Variables[0] (SummonMonsterID01) || RETURN",
                              "displayLines": "SummonMonsterID01",
                              "constants": [],
                              "variables": [
                                "SummonMonsterID01"
                              ]
                            },
                            "MDF_SummonDelay": {
                              "operator": "Variables[0] (SummonDelayRatioPhase2) || RETURN",
                              "displayLines": "SummonDelayRatioPhase2",
                              "constants": [],
                              "variables": [
                                "SummonDelayRatioPhase2"
                              ]
                            }
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"-1940595812\">RandomSummonDelay</a>"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1730193233\">Enemy_SW_Boss_01_SummonMinion</a>",
                          "valuePerStack": {
                            "MDF_SummonID": {
                              "operator": "Variables[0] (SummonMonsterID01) || RETURN",
                              "displayLines": "SummonMonsterID01",
                              "constants": [],
                              "variables": [
                                "SummonMonsterID01"
                              ]
                            },
                            "MDF_SummonDelay": {
                              "operator": "Variables[0] (SummonDelayRatioPhase2) || RETURN",
                              "displayLines": "SummonDelayRatioPhase2",
                              "constants": [],
                              "variables": [
                                "SummonDelayRatioPhase2"
                              ]
                            }
                          }
                        },
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"-1940595812\">RandomSummonDelay</a>"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1730193233\">Enemy_SW_Boss_01_SummonMinion</a>",
                          "valuePerStack": {
                            "MDF_SummonID": {
                              "operator": "Variables[0] (SummonMonsterID01) || RETURN",
                              "displayLines": "SummonMonsterID01",
                              "constants": [],
                              "variables": [
                                "SummonMonsterID01"
                              ]
                            },
                            "MDF_SummonDelay": {
                              "operator": "Variables[0] (SummonDelayRatioPhase2) || RETURN",
                              "displayLines": "SummonDelayRatioPhase2",
                              "constants": [],
                              "variables": [
                                "SummonDelayRatioPhase2"
                              ]
                            }
                          }
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
            }
          ]
        }
      ],
      "functions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1940595812\">RandomSummonDelay</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Random Chance",
                "chance": 0.4
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "SummonDelayRatio1",
                  "value": {
                    "operator": "Variables[0] (SummonDelayRatio1Random2) || RETURN",
                    "displayLines": "SummonDelayRatio1Random2",
                    "constants": [],
                    "variables": [
                      "SummonDelayRatio1Random2"
                    ]
                  }
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
                      "name": "Define Custom Variable",
                      "variableName": "SummonDelayRatio1",
                      "value": {
                        "operator": "Variables[0] (SummonDelayRatio1Random3) || RETURN",
                        "displayLines": "SummonDelayRatio1Random3",
                        "constants": [],
                        "variables": [
                          "SummonDelayRatio1Random3"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "SummonDelayRatio1",
                      "value": {
                        "operator": "Variables[0] (SummonDelayRatio1Random1) || RETURN",
                        "displayLines": "SummonDelayRatio1Random1",
                        "constants": [],
                        "variables": [
                          "SummonDelayRatio1Random1"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "8025010_Monster_SW_Boss_01_Ability06_Part02": {
      "fileName": "8025010_Monster_SW_Boss_01_Ability06_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"259450291\">Monster_SW_Boss_01_Ability05Charge</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-850302516\">Monster_SW_Boss_01_DamageReduce</a>[<span class=\"descriptionNumberColor\">Multiply</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2142572207\">Monster_SW_Boss_01_Ability05_Passive</a>"
        },
        "Ability Start",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1256327347\">Monster_SW_Boss_01_Ability07_Ball</a>"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
              "displayLines": "{[Skill06[0]]}",
              "constants": [],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "HitSplit": 0.1,
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
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
                  "displayLines": "{[Skill06[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill06[0]]}"
                  ]
                },
                "HitSplit": 0.05,
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "Looped Event",
          "maxLoops": 10,
          "Event": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
                  "displayLines": "{[Skill06[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill06[0]]}"
                  ]
                },
                "HitSplit": 0.065,
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
    "8025010_Monster_SW_Boss_01_Ability06_Part01": {
      "fileName": "8025010_Monster_SW_Boss_01_Ability06_Part01",
      "childAbilityList": [
        "8025010_Monster_SW_Boss_01_Ability06_Camera",
        "8025010_Monster_SW_Boss_01_Ability06_Part01",
        "8025010_Monster_SW_Boss_01_Ability06_Part02"
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
          "ability": "Monster_SW_Boss_01_Ability06_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8025010_Monster_SW_Boss_01_Ability05_Part02": {
      "fileName": "8025010_Monster_SW_Boss_01_Ability05_Part02",
      "abilityType": null,
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
          "variableName": "Phase2FirstTurn"
        },
        "Ability Start",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1256327347\">Monster_SW_Boss_01_Ability07_Ball</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"259450291\">Monster_SW_Boss_01_Ability05Charge</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2142572207\">Monster_SW_Boss_01_Ability05_Passive</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-850302516\">Monster_SW_Boss_01_DamageReduce</a>[<span class=\"descriptionNumberColor\">Multiply</span>]",
          "valuePerStack": {
            "MDF_DamageReduceRatio": {
              "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
              "displayLines": "{[Skill04[0]]}",
              "constants": [],
              "variables": [
                "{[Skill04[0]]}"
              ]
            }
          }
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8025010_Monster_SW_Boss_01_Ability05_Part01": {
      "fileName": "8025010_Monster_SW_Boss_01_Ability05_Part01",
      "childAbilityList": [
        "8025010_Monster_SW_Boss_01_Ability05_Camera",
        "8025010_Monster_SW_Boss_01_Ability05_Part01",
        "8025010_Monster_SW_Boss_01_Ability05_Part02",
        "8025010_Monster_SW_Boss_01_AbilityP05",
        "8025010_Monster_SW_Boss_01_AbilityP05_Camera"
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
          "ability": "Monster_SW_Boss_01_Ability05_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8025010_Monster_SW_Boss_01_Ability04_Part02": {
      "fileName": "8025010_Monster_SW_Boss_01_Ability04_Part02",
      "abilityType": null,
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
          "variableName": "Phase2FirstTurn"
        },
        "Ability Start",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-850302516\">Monster_SW_Boss_01_DamageReduce</a>[<span class=\"descriptionNumberColor\">Multiply</span>]",
          "valuePerStack": {
            "MDF_DamageReduceRatio": {
              "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
              "displayLines": "{[Skill04[0]]}",
              "constants": [],
              "variables": [
                "{[Skill04[0]]}"
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
          "modifier": "<a class=\"gModGreen\" id=\"259450291\">Monster_SW_Boss_01_Ability05Charge</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2142572207\">Monster_SW_Boss_01_Ability05_Passive</a>"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8025010_Monster_SW_Boss_01_Ability04_Part01": {
      "fileName": "8025010_Monster_SW_Boss_01_Ability04_Part01",
      "childAbilityList": [
        "8025010_Monster_SW_Boss_01_Ability04_Camera",
        "8025010_Monster_SW_Boss_01_Ability04_Part01",
        "8025010_Monster_SW_Boss_01_Ability04_Part02"
      ],
      "skillTrigger": "Skill04",
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
          "ability": "Monster_SW_Boss_01_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8025010_Monster_SW_Boss_01_Ability03_Part02": {
      "fileName": "8025010_Monster_SW_Boss_01_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"259450291\">Monster_SW_Boss_01_Ability05Charge</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-850302516\">Monster_SW_Boss_01_DamageReduce</a>[<span class=\"descriptionNumberColor\">Multiply</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2142572207\">Monster_SW_Boss_01_Ability05_Passive</a>"
        },
        "Ability Start",
        {
          "name": "Looped Event",
          "maxLoops": 8,
          "Event": [
            {
              "name": "Random Event",
              "odds": [
                0.333,
                0.333,
                0.334
              ]
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
                  "displayLines": "{[Skill03[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill03[0]]}"
                  ]
                },
                "HitSplit": {
                  "operator": "Variables[0] ({[Skill03[0]]}) || Variables[1] ({[Skill03[1]]}) || SUB || Variables[0] ({[Skill03[0]]}) || DIV || Constants[0] (8) || DIV || RETURN",
                  "displayLines": "((({[Skill03[0]]} - {[Skill03[1]]}) / {[Skill03[0]]}) / 8)",
                  "constants": [
                    8
                  ],
                  "variables": [
                    "{[Skill03[0]]}",
                    "{[Skill03[1]]}"
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
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
              "displayLines": "{[Skill03[0]]}",
              "constants": [],
              "variables": [
                "{[Skill03[0]]}"
              ]
            },
            "HitSplit": {
              "operator": "Variables[0] ({[Skill03[1]]}) || Variables[1] ({[Skill03[0]]}) || DIV || Constants[0] (1) || DIV || RETURN",
              "displayLines": "(({[Skill03[1]]} / {[Skill03[0]]}) / 1)",
              "constants": [
                1
              ],
              "variables": [
                "{[Skill03[1]]}",
                "{[Skill03[0]]}"
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
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[1]]}) || Constants[0] (1) || DIV || RETURN",
              "displayLines": "({[Skill03[1]]} / 1)",
              "constants": [
                1
              ],
              "variables": [
                "{[Skill03[1]]}"
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
    "8025010_Monster_SW_Boss_01_Ability03_Part01": {
      "fileName": "8025010_Monster_SW_Boss_01_Ability03_Part01",
      "childAbilityList": [
        "8025010_Monster_SW_Boss_01_Ability03_Camera",
        "8025010_Monster_SW_Boss_01_Ability03_Part01",
        "8025010_Monster_SW_Boss_01_Ability03_Part02"
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
          "ability": "Monster_SW_Boss_01_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8025010_Monster_SW_Boss_01_Ability02_Part02": {
      "fileName": "8025010_Monster_SW_Boss_01_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Define Custom Variable",
          "scope": "ContextAbility",
          "variableName": "AbilityFlag",
          "value": 0
        },
        {
          "name": "Looped Event",
          "maxLoops": 7,
          "Event": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                  "displayLines": "{[Skill02[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[0]]}"
                  ]
                },
                "HitSplit": 0.05,
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "Looped Event",
          "maxLoops": 1,
          "Event": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                  "displayLines": "{[Skill02[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[0]]}"
                  ]
                },
                "HitSplit": 0.05,
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
              "displayLines": "{[Skill02[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}"
              ]
            },
            "HitSplit": 0.6,
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
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2065489118\">Standard_Entangle</a>[<span class=\"descriptionNumberColor\">Entanglement</span>]",
          "duration": 1,
          "baseChance": {
            "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
            "displayLines": "{[Skill02[3]]}",
            "constants": [],
            "variables": [
              "{[Skill02[3]]}"
            ]
          },
          "valuePerStack": {
            "MDF_ActionDelayRatio": {
              "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
              "displayLines": "{[Skill02[1]]}",
              "constants": [],
              "variables": [
                "{[Skill02[1]]}"
              ]
            },
            "Modifier_Entangle_DamagePercentage": {
              "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
              "displayLines": "{[Skill02[2]]}",
              "constants": [],
              "variables": [
                "{[Skill02[2]]}"
              ]
            },
            "Modifier_Entangle_DamageValue": 0
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1730193233\">Enemy_SW_Boss_01_SummonMinion</a>",
          "valuePerStack": {
            "MDF_SummonID": {
              "operator": "Variables[0] (SummonMonsterID01) || RETURN",
              "displayLines": "SummonMonsterID01",
              "constants": [],
              "variables": [
                "SummonMonsterID01"
              ]
            },
            "MDF_SummonDelay": {
              "operator": "Variables[0] ({[Skill02[4]]}) || RETURN",
              "displayLines": "{[Skill02[4]]}",
              "constants": [],
              "variables": [
                "{[Skill02[4]]}"
              ]
            }
          }
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8025010_Monster_SW_Boss_01_Ability02_Part01": {
      "fileName": "8025010_Monster_SW_Boss_01_Ability02_Part01",
      "childAbilityList": [
        "8025010_Monster_SW_Boss_01_Ability02_Camera",
        "8025010_Monster_SW_Boss_01_Ability02_Part01",
        "8025010_Monster_SW_Boss_01_Ability02_Part02"
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
          "ability": "Monster_SW_Boss_01_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8025010_Monster_SW_Boss_01_Ability01_Part02": {
      "fileName": "8025010_Monster_SW_Boss_01_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Quantum",
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
            "Trigger: Attack End"
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8025010_Monster_SW_Boss_01_Ability01_Part01": {
      "fileName": "8025010_Monster_SW_Boss_01_Ability01_Part01",
      "childAbilityList": [
        "8025010_Monster_SW_Boss_01_Ability01_Camera",
        "8025010_Monster_SW_Boss_01_Ability01_Part01",
        "8025010_Monster_SW_Boss_01_Ability01_Part02"
      ],
      "skillTrigger": "Skill01",
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
          "ability": "Monster_SW_Boss_01_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8025010_Monster_SW_Boss_01_Passive01": {
      "fileName": "8025010_Monster_SW_Boss_01_Passive01",
      "skillTrigger": "PassiveSkill02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-794767767\">W2_SW_Boss_01_BattleScore1</a>"
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
          "modifier": "<a class=\"gModGreen\" id=\"-1551418319\">Monster_SW_Boss_01_AIChange</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1095252278\">Monster_SW_Boss_01_WingsControl</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1783095716\">Monster_SW_Boss_01_MuteHitFly</a>"
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
          "modifier": "<a class=\"gModGreen\" id=\"-1293250966\">Monster_SW_Boss_01_PartController</a>"
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1982402150\">Enemy_SW_Boss_01_ScoringDetect0101</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1095252278\">Monster_SW_Boss_01_WingsControl</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Put in Deathstate Limbo"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Pre-Death [Owner]"
            },
            {
              "eventTrigger": "Ability Use [Owner]: Start"
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Skill Name",
                        "skillName": "Skill05"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]"
            },
            {
              "eventTrigger": "End Broken State [Owner]"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1551418319\">Monster_SW_Boss_01_AIChange</a>",
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
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
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1783095716\">Monster_SW_Boss_01_MuteHitFly</a>",
          "modifierFlags": [
            "MuteHitFly"
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "8025010_Modifiers": {
      "fileName": "8025010_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-794767767\">W2_SW_Boss_01_BattleScore1</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier is Added [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"1965624531\">Enemy_SW_Boss_01_ScoringDetect0102</a>"
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "matchTags": true,
                      "relatedAchievements": [
                        {
                          "title": "In Utter Darkness",
                          "desc": "After the Starcrusher Swarm King unleashes \"Carapace of Nurtured Disaster,\" inflict Weakness Break on it",
                          "rarity": "Low",
                          "type": "Hidden until Completion"
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
          "for": "<a class=\"gModGreen\" id=\"mod__259450291\">Monster_SW_Boss_01_Ability05Charge</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Any"
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]"
            }
          ],
          "stackData": [],
          "latentQueue": [
            "Phase2FirstTurn"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1256327347\">Monster_SW_Boss_01_Ability07_Ball</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "Phase2FirstTurn"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-689016270\">Monster_SW_Boss_01_AbilityP05_First</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 8022030,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Gnaw Sting"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-689016270\">Monster_SW_Boss_01_AbilityP05_First</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2142572207\">Monster_SW_Boss_01_Ability05_Passive</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "SummonDelayRatioPhase1",
                  "value": 0.5
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "SummonDelayRatioPhase2",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked End [Owner]",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "ContextModifier",
                  "variableName": "MDF_Count"
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "includeDyingTargets": true,
                  "maxTargets": 5,
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_Count",
                      "context": "ContextModifier",
                      "value": 1,
                      "max": 5
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
                        "value1": "MDF_Count",
                        "compareType": "<",
                        "value2": 5
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "CurrentHP",
                        "compareType": ">",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "Current_Toughness_%",
                        "compareType": ">",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_SW_Boss_01_AbilityP05",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "priorityTag": "MonsterBattleCry",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
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
                    "value1": "CurrentHP%",
                    "compareType": ">",
                    "value2": 0
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
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 1
                      }
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_SW_Boss_01_AbilityP05_02",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "priorityTag": "MonsterBattleCry",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                },
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "Phase2FirstTurn"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-257262548\">Monster_SW_Boss_01_DamageTakenUp</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_DamageTakenUpRatio_PerLayer) || Variables[1] (ModifierLayers) || MUL || RETURN",
                    "displayLines": "(MDF_DamageTakenUpRatio_PerLayer * ModifierLayers)",
                    "constants": [],
                    "variables": [
                      "MDF_DamageTakenUpRatio_PerLayer",
                      "ModifierLayers"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Increases DMG received by <span class=\"descriptionNumberColor\">MDF_DamageTakenUpRatio_PerLayer</span>. This effect is stackable.",
          "type": "Debuff",
          "effectName": "Vulnerability",
          "statusName": "Vulnerability",
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-850302516\">Monster_SW_Boss_01_DamageReduce</a>[<span class=\"descriptionNumberColor\">Multiply</span>]",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                      "value": "MDF_DamageReduceRatio"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_DamageReduceRatio"
          ],
          "latentQueue": [
            "Phase2FirstTurn"
          ],
          "description": "Reduces DMG taken by <span class=\"descriptionNumberColor\">MDF_DamageReduceRatio</span>. Summons a regular Swarm every time this unit is attacked. When this unit's Weakness is Broken, deals Toughness Reduction equal to its own max Toughness to all friendly units and increases the DMG taken by all other friendly units besides the target themselves.",
          "type": "Buff",
          "effectName": "Multiply",
          "statusName": "Multiply",
          "duration": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1293250966\">Monster_SW_Boss_01_PartController</a>",
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
                          "modifier": "<a class=\"gModGreen\" id=\"1916097971\">Monster_SW_Boss_Endurance</a>"
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
                          "abilityName": "Monster_SW_Boss_01_PassiveAbility_Insert",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-848257295\">Enemy_SW_Boss_01_PassiveAbilityMainBattle</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1965624531\">Enemy_SW_Boss_01_ScoringDetect0102</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1982402150\">Enemy_SW_Boss_01_ScoringDetect0101</a>",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: End",
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
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 2
                      },
                      {
                        "name": "Skill Name",
                        "skillName": "Skill05"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "FirstTime",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "scope": "ContextModifier",
                      "variableName": "FirstTime",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "scope": "ContextModifier",
                      "variableName": "FirstSkillInPhase02",
                      "value": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "scope": "ContextModifier",
                      "variableName": "FirstSkillInPhase02",
                      "value": 0
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
                    "value1": "FirstSkillInPhase02",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1965624531\">Enemy_SW_Boss_01_ScoringDetect0102</a>"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1022584123\">Enemy_SW_Boss_01_ShowMinion</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "maxTargets": 2,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"979937712\">Enemy_SW_Boss_01_NeedToShow_Mark</a>"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"979937712\">Enemy_SW_Boss_01_NeedToShow_Mark</a>"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Enemy ID",
                        "ID": {
                          "operator": "Variables[0] (SummonMonsterID02) || RETURN",
                          "displayLines": "SummonMonsterID02",
                          "constants": [],
                          "variables": [
                            "SummonMonsterID02"
                          ]
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null,
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Enemy ID",
                            "ID": 802501000,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "characterName": null
                          }
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Enemy ID",
                        "ID": 802501000,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "characterName": null
                      }
                    }
                  ]
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__979937712\">Enemy_SW_Boss_01_NeedToShow_Mark</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1730193233\">Enemy_SW_Boss_01_SummonMinion</a>",
          "stackType": "Multiple",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Target Count",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Enemy Team All}}"
                        },
                        "compareType": "<",
                        "value2": 5,
                        "livingTargets": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_SummonFlag",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "ContextModifier"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "scope": "ContextModifier",
                      "variableName": "MDF_SummonFlag",
                      "value": 0
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Is Part Of Team Location",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "team": "Enemy Team",
                            "location": "Left"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": {
                            "operator": "Variables[0] (MDF_SummonDelay) || RETURN",
                            "displayLines": "MDF_SummonDelay",
                            "constants": [],
                            "variables": [
                              "MDF_SummonDelay"
                            ]
                          },
                          "enemyList": [
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "operator": "Variables[0] (MDF_SummonID) || RETURN",
                                "displayLines": "MDF_SummonID",
                                "constants": [],
                                "variables": [
                                  "MDF_SummonID"
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
                            "target": "{{Recently Summoned Enemies}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"979937712\">Enemy_SW_Boss_01_NeedToShow_Mark</a>"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Enemy ID",
                            "ID": 802501000,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "characterName": null
                          },
                          "passed": [
                            {
                              "name": "Shot Fired",
                              "execute": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1022584123\">Enemy_SW_Boss_01_ShowMinion</a>"
                                },
                                "Modifier Deletes Itself"
                              ]
                            }
                          ],
                          "failed": [
                            {
                              "name": "Shot Fired",
                              "execute": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1022584123\">Enemy_SW_Boss_01_ShowMinion</a>"
                                },
                                "Modifier Deletes Itself"
                              ]
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": {
                            "operator": "Variables[0] (MDF_SummonDelay) || RETURN",
                            "displayLines": "MDF_SummonDelay",
                            "constants": [],
                            "variables": [
                              "MDF_SummonDelay"
                            ]
                          },
                          "enemyList": [
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "operator": "Variables[0] (MDF_SummonID) || RETURN",
                                "displayLines": "MDF_SummonID",
                                "constants": [],
                                "variables": [
                                  "MDF_SummonID"
                                ]
                              },
                              "locationType": "Last"
                            }
                          ]
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Recently Summoned Enemies}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"979937712\">Enemy_SW_Boss_01_NeedToShow_Mark</a>"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Enemy ID",
                            "ID": 802501000,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "characterName": null
                          },
                          "passed": [
                            {
                              "name": "Shot Fired",
                              "execute": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1022584123\">Enemy_SW_Boss_01_ShowMinion</a>"
                                },
                                "Modifier Deletes Itself"
                              ]
                            }
                          ],
                          "failed": [
                            {
                              "name": "Shot Fired",
                              "execute": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1022584123\">Enemy_SW_Boss_01_ShowMinion</a>"
                                },
                                "Modifier Deletes Itself"
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
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_SummonID",
            "MDF_SummonDelay"
          ],
          "latentQueue": [
            "AbilityFlag"
          ]
        }
      ],
      "references": []
    }
  }
}