const compositeAbilityObject = {
  "fullCharacterName": 1014014,
  "trimCharacterName": 1014014,
  "abilityList": [
    "1014014_Monster_W1_GS_Svarog_RL_PassiveAbility04",
    "1014014_Monster_W1_GS_Svarog_RL_PassiveAbility02",
    "1014014_Monster_W1_GS_Svarog_RL_PassiveAbility03",
    "1014014_Monster_W1_GS_Svarog_RL_PassiveAbility_Insert2",
    "1014014_Monster_W1_GS_Svarog_RL_PassiveAbility_Insert",
    "1014014_Monster_W1_GS_Svarog_RL_Ability11_Part02",
    "1014014_Monster_W1_GS_Svarog_RL_Ability11_Part01",
    "1014014_Monster_W1_GS_Svarog_RL_Ability10_Part02",
    "1014014_Monster_W1_GS_Svarog_RL_Ability10_Part01",
    "1014014_Monster_W1_GS_Svarog_RL_Ability09_Part02",
    "1014014_Monster_W1_GS_Svarog_RL_Ability09_Part01",
    "1014014_Monster_W1_GS_Svarog_RL_Ability08_Part02",
    "1014014_Monster_W1_GS_Svarog_RL_Ability08_Part01",
    "1014014_Monster_W1_GS_Svarog_RL_AIControl",
    "1014014_Monster_W1_GS_Svarog_RL_Ability07_Part02",
    "1014014_Monster_W1_GS_Svarog_RL_Ability07_Part01",
    "1014014_Monster_W1_GS_Svarog_RL_Ability06_Part02",
    "1014014_Monster_W1_GS_Svarog_RL_Ability06_Part01",
    "1014014_Monster_W1_GS_Svarog_RL_Ability05_Part02",
    "1014014_Monster_W1_GS_Svarog_RL_Ability05_Part01",
    "1014014_Monster_W1_GS_Svarog_RL_Ability04_Part02",
    "1014014_Monster_W1_GS_Svarog_RL_Ability04_Part01",
    "1014014_Monster_W1_GS_Svarog_RL_Ability03_Part02",
    "1014014_Monster_W1_GS_Svarog_RL_Ability03_Part01",
    "1014014_Monster_W1_GS_Svarog_RL_Ability02_Part02",
    "1014014_Monster_W1_GS_Svarog_RL_Ability02_Part01",
    "1014014_Monster_W1_GS_Svarog_RL_Ability01_Part02",
    "1014014_Monster_W1_GS_Svarog_RL_Ability01_Part01",
    "1014014_Monster_W1_GS_Svarog_RL_PassiveAbilityInitiate",
    "1014014_Monster_W1_GS_Svarog_PassiveAbility04",
    "1014014_Monster_W1_GS_Svarog_PassiveAbility02",
    "1014014_Monster_W1_GS_Svarog_PassiveAbility03",
    "1014014_Monster_W1_GS_Svarog_Ability08_Part02",
    "1014014_Monster_W1_GS_Svarog_Ability08_Part01",
    "1014014_Monster_W1_GS_Svarog_AIControl",
    "1014014_Monster_W1_GS_Svarog_Ability07_Part02",
    "1014014_Monster_W1_GS_Svarog_Ability07_Part01",
    "1014014_Monster_W1_GS_Svarog_Ability06_Part02",
    "1014014_Monster_W1_GS_Svarog_Ability06_Part01",
    "1014014_Monster_W1_GS_Svarog_Ability05_Part02",
    "1014014_Monster_W1_GS_Svarog_Ability05_Part01",
    "1014014_Monster_W1_GS_Svarog_Ability04_Part02",
    "1014014_Monster_W1_GS_Svarog_Ability04_Part01",
    "1014014_Monster_W1_GS_Svarog_Ability03_Part02",
    "1014014_Monster_W1_GS_Svarog_Ability03_Part01",
    "1014014_Monster_W1_GS_Svarog_Ability02_Part02",
    "1014014_Monster_W1_GS_Svarog_Ability02_Part01",
    "1014014_Monster_W1_GS_Svarog_Ability01_Part02",
    "1014014_Monster_W1_GS_Svarog_Ability01_Part01",
    "1014014_Monster_W1_GS_Svarog_PassiveAbilityInitiate",
    "1014014_Monster_W1_Svarog_PassiveAbility_BGM",
    "1014014_Modifiers"
  ],
  "abilityObject": {
    "1014014_Monster_W1_GS_Svarog_RL_PassiveAbility04": {
      "fileName": "1014014_Monster_W1_GS_Svarog_RL_PassiveAbility04",
      "childAbilityList": [
        "1014014_Monster_W1_GS_Svarog_RL_PassiveAbility04"
      ],
      "skillTrigger": "PassiveSkill04",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "SlowModifier",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (PassiveSkill04_SpeedDelta) || RETURN",
                    "displayLines": "PassiveSkill04_SpeedDelta",
                    "constants": [],
                    "variables": [
                      "PassiveSkill04_SpeedDelta"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "OnBreakSlowModifier",
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "SlowModifier",
                  "duration": 1,
                  "valuePerStack": {
                    "PassiveAbility04_SpeedDelta": {
                      "operator": "Variables[0] (PassiveSkill04_SpeedDelta) || RETURN",
                      "displayLines": "PassiveSkill04_SpeedDelta",
                      "constants": [],
                      "variables": [
                        "PassiveSkill04_SpeedDelta"
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
    "1014014_Monster_W1_GS_Svarog_RL_PassiveAbility02": {
      "fileName": "1014014_Monster_W1_GS_Svarog_RL_PassiveAbility02",
      "childAbilityList": [
        "1014014_Monster_W1_GS_Svarog_RL_PassiveAbility02"
      ],
      "skillTrigger": "PassiveSkill02",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "1014014_Monster_W1_GS_Svarog_RL_PassiveAbility03": {
      "fileName": "1014014_Monster_W1_GS_Svarog_RL_PassiveAbility03",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Create Enemies",
          "delayPercent": 0,
          "refreshPositions": false,
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": 9004021,
              "locationType": "BeforeCaster"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "Monster_W1_Svarog_RL_Part_ListenHP_Modifier",
          "valuePerStack": {
            "PassiveAbility02_P2_HPRatio": {
              "operator": "Variables[0] ({[PassiveSkill02[0]]}) || RETURN",
              "displayLines": "{[PassiveSkill02[0]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill02[0]]}"
              ]
            }
          }
        }
      ],
      "references": []
    },
    "1014014_Monster_W1_GS_Svarog_RL_PassiveAbility_Insert2": {
      "fileName": "1014014_Monster_W1_GS_Svarog_RL_PassiveAbility_Insert2",
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
            }
          ]
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
          "modifier": "Monster_W1_Svarog_RL_Endurance"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "DecisionFlag",
          "value": 1
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W1_Svarog_RL_PartController_LockHP"
        }
      ],
      "references": []
    },
    "1014014_Monster_W1_GS_Svarog_RL_PassiveAbility_Insert": {
      "fileName": "1014014_Monster_W1_GS_Svarog_RL_PassiveAbility_Insert",
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
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "searchRandom": true,
              "includeDyingTargets": true,
              "conditions": {
                "name": "NOT",
                "condition": {
                  "name": "Enemy ID",
                  "ID": 1012021,
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "characterName": "Automaton Spider"
                }
              }
            }
          ]
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
          "name": "Use Custom Character Function",
          "functionName": "Monster_ChangePhase"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W1_Svarog_RL_Endurance"
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
          "variableName": "DecisionFlag",
          "value": 1
        }
      ],
      "references": []
    },
    "1014014_Monster_W1_GS_Svarog_RL_Ability11_Part02": {
      "fileName": "1014014_Monster_W1_GS_Svarog_RL_Ability11_Part02",
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
              "target": "{{Caster's Minions}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": "<",
            "value2": 1
          },
          "passed": [
            {
              "name": "Create Enemies",
              "delayPercent": 0,
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "Monster_Summon_EliteID",
                  "summonLocation": "BeforeCaster"
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "modifier": "Monster_W1_Svarog_RL_Mark"
            },
            {
              "name": "Create Enemies",
              "delayPercent": 0,
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "Monster_Summon_EliteID",
                  "summonLocation": "AfterCaster"
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
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "Monster_W1_Svarog_RL_AttackUp[<span class=\"descriptionNumberColor\">DMG Boost</span>]"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "AttackUpLayer",
                  "modifierName": "Monster_W1_Svarog_RL_AttackUp[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                  "multiplier": 1
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "modifier": "Monster_W1_Svarog_RL_AttackUp[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                  "valuePerStack": {
                    "MDF_DamageUpRatio_PerLayer": {
                      "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
                      "displayLines": "{[Skill06[0]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill06[0]]}"
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (AttackUpLayer) || RETURN",
                    "displayLines": "AttackUpLayer",
                    "constants": [],
                    "variables": [
                      "AttackUpLayer"
                    ]
                  }
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
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Monster_W1_Svarog_RL_Mark"
              }
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_Svarog_RL_Mark",
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "1014014_Monster_W1_GS_Svarog_RL_Ability11_Part01": {
      "fileName": "1014014_Monster_W1_GS_Svarog_RL_Ability11_Part01",
      "childAbilityList": [
        "1014014_Monster_W1_GS_Svarog_RL_Ability11_Part01",
        "1014014_Monster_W1_GS_Svarog_RL_Ability11_Part02",
        "1014014_Monster_W1_GS_Svarog_RL_Ability11_Camera"
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
          "ability": "Monster_W1_GS_Svarog_RL_Ability11_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1014014_Monster_W1_GS_Svarog_RL_Ability10_Part02": {
      "fileName": "1014014_Monster_W1_GS_Svarog_RL_Ability10_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Phase1_PhaseFlag",
            "compareType": "=",
            "value2": 1,
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
              "variableName": "Phase1_PhaseFlag"
            }
          ]
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
            "compareType": "<",
            "value2": 4
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "SummonMinions",
                "compareType": "=",
                "value2": 0,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": 0.5,
                  "enemyList": [
                    {
                      "name": "Create Enemy from Custom",
                      "value": "Monster_SummonID2",
                      "summonLocation": "First"
                    },
                    {
                      "name": "Create Enemy from Custom",
                      "value": "Monster_SummonID2",
                      "summonLocation": "Last"
                    },
                    {
                      "name": "Create Enemy from Custom",
                      "value": "Monster_SummonID3",
                      "summonLocation": "AfterCaster"
                    },
                    {
                      "name": "Create Enemy from Custom",
                      "value": "Monster_SummonID3",
                      "summonLocation": "BeforeCaster"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "SummonMinions",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Looped Event",
                      "maxLoops": 4,
                      "Event": [
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
                              "delayPercent": 0.5,
                              "refreshPositions": false,
                              "enemyList": [
                                {
                                  "name": "Create Enemy from Custom",
                                  "value": "Monster_SummonID3",
                                  "summonLocation": "First"
                                }
                              ]
                            }
                          ],
                          "failed": [
                            {
                              "name": "Create Enemies",
                              "delayPercent": 0.5,
                              "refreshPositions": false,
                              "enemyList": [
                                {
                                  "name": "Create Enemy from Custom",
                                  "value": "Monster_SummonID3",
                                  "summonLocation": "Last"
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
                      "name": "Looped Event",
                      "maxLoops": 4,
                      "Event": [
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
                              "delayPercent": 0.5,
                              "refreshPositions": false,
                              "enemyList": [
                                {
                                  "name": "Create Enemy from Custom",
                                  "value": "Monster_SummonID2",
                                  "summonLocation": "First"
                                }
                              ]
                            }
                          ],
                          "failed": [
                            {
                              "name": "Create Enemies",
                              "delayPercent": 0.5,
                              "refreshPositions": false,
                              "enemyList": [
                                {
                                  "name": "Create Enemy from Custom",
                                  "value": "Monster_SummonID2",
                                  "summonLocation": "Last"
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
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "modifier": "Standard_Servant[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "Monster_W1_Svarog_RL_AttackUp[<span class=\"descriptionNumberColor\">DMG Boost</span>]"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "AttackUpLayer",
                  "modifierName": "Monster_W1_Svarog_RL_AttackUp[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                  "multiplier": 1
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "searchRandom": true,
                  "conditions": {
                    "name": "NOT",
                    "condition": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Monster_W1_Svarog_RL_AttackUp[<span class=\"descriptionNumberColor\">DMG Boost</span>]"
                    }
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Monster_W1_Svarog_RL_AttackUp[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                      "valuePerStack": {
                        "MDF_DamageUpRatio_PerLayer": {
                          "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
                          "displayLines": "{[Skill06[0]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill06[0]]}"
                          ]
                        }
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (AttackUpLayer) || RETURN",
                        "displayLines": "AttackUpLayer",
                        "constants": [],
                        "variables": [
                          "AttackUpLayer"
                        ]
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
                "value1": "SummonMinions",
                "compareType": "=",
                "value2": 1,
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
                  "variableName": "SummonMinions"
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "SummonMinions",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": 2
                }
              ]
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1014014_Monster_W1_GS_Svarog_RL_Ability10_Part01": {
      "fileName": "1014014_Monster_W1_GS_Svarog_RL_Ability10_Part01",
      "childAbilityList": [
        "1014014_Monster_W1_GS_Svarog_RL_Ability10_Part01",
        "1014014_Monster_W1_GS_Svarog_RL_Ability10_Part02",
        "1014014_Monster_W1_GS_Svarog_RL_Ability10_Camera"
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
          "ability": "Monster_W1_GS_Svarog_RL_Ability10_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1014014_Monster_W1_GS_Svarog_RL_Ability09_Part02": {
      "fileName": "1014014_Monster_W1_GS_Svarog_RL_Ability09_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "Monster_W1_Svarog_RL_AttackUp[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
          "valuePerStack": {
            "MDF_DamageUpRatio_PerLayer": {
              "operator": "Variables[0] ({[Skill09[0]]}) || RETURN",
              "displayLines": "{[Skill09[0]]}",
              "constants": [],
              "variables": [
                "{[Skill09[0]]}"
              ]
            }
          }
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1014014_Monster_W1_GS_Svarog_RL_Ability09_Part01": {
      "fileName": "1014014_Monster_W1_GS_Svarog_RL_Ability09_Part01",
      "childAbilityList": [
        "1014014_Monster_W1_GS_Svarog_RL_Ability09_Part01",
        "1014014_Monster_W1_GS_Svarog_RL_Ability09_Part02",
        "1014014_Monster_W1_GS_Svarog_RL_Ability09_Camera"
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
          "ability": "Monster_W1_GS_Svarog_RL_Ability09_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1014014_Monster_W1_GS_Svarog_RL_Ability08_Part02": {
      "fileName": "1014014_Monster_W1_GS_Svarog_RL_Ability08_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1014014_Monster_W1_GS_Svarog_RL_Ability08_Part01": {
      "fileName": "1014014_Monster_W1_GS_Svarog_RL_Ability08_Part01",
      "childAbilityList": [
        "1014014_Monster_W1_GS_Svarog_RL_Ability08_Part01",
        "1014014_Monster_W1_GS_Svarog_RL_Ability08_Part02",
        "1014014_Monster_W1_GS_Svarog_RL_Ability08_Camera"
      ],
      "skillTrigger": "Skill08",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "OneMore"
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W1_GS_Svarog_RL_Ability08_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1014014_Monster_W1_GS_Svarog_RL_AIControl": {
      "fileName": "1014014_Monster_W1_GS_Svarog_RL_AIControl",
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
          "modifier": "Straight_AIControl"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Straight_AIControl",
          "execute": [
            {
              "eventTrigger": "Action End [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "AIFlag",
                  "context": "TargetEntity",
                  "value": 1,
                  "min": 1,
                  "max": 7
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
                    "compareType": ">",
                    "value2": 6,
                    "contextScope": "TargetEntity"
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
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "1014014_Monster_W1_GS_Svarog_RL_Ability07_Part02": {
      "fileName": "1014014_Monster_W1_GS_Svarog_RL_Ability07_Part02",
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
              "target": "{{Caster's Minions}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": "<",
            "value2": 5
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
                  "delayPercent": 0,
                  "refreshPositions": false,
                  "enemyList": [
                    {
                      "name": "Create Enemy from Custom",
                      "value": "Monster_SummonID0",
                      "summonLocation": "First"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": 0,
                  "refreshPositions": false,
                  "enemyList": [
                    {
                      "name": "Create Enemy from Custom",
                      "value": "Monster_SummonID0",
                      "summonLocation": "Last"
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
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "searchRandom": true,
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "LowHPRatio",
                  "value": {
                    "operator": "Variables[0] ({[PassiveSkill02[1]]}) || RETURN",
                    "displayLines": "{[PassiveSkill02[1]]}",
                    "constants": [],
                    "variables": [
                      "{[PassiveSkill02[1]]}"
                    ]
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Svarog's Confinement Target v2}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": "<",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "CanUseSkill03",
                  "value": 1
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "value1": "CurrentHP%",
                "compareType": "<=",
                "value2": {
                  "operator": "Variables[0] ({[PassiveSkill02[1]]}) || RETURN",
                  "displayLines": "{[PassiveSkill02[1]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill02[1]]}"
                  ]
                }
              },
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "modifier": "Monster_W1_Svarog_RL_Part_ListenHP_Modifier",
                  "valuePerStack": {
                    "PassiveAbility02_P2_HPRatio": {
                      "operator": "Variables[0] ({[PassiveSkill02[0]]}) || RETURN",
                      "displayLines": "{[PassiveSkill02[0]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill02[0]]}"
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
              "modifier": "Monster_W1_SvarogPart_RL_ListenBreak_Modifier"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "SelfDestroy_Controller"
            }
          ]
        },
        "Ability Start",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1014014_Monster_W1_GS_Svarog_RL_Ability07_Part01": {
      "fileName": "1014014_Monster_W1_GS_Svarog_RL_Ability07_Part01",
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
          "ability": "Monster_W1_GS_Svarog_RL_Ability07_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1014014_Monster_W1_GS_Svarog_RL_Ability06_Part02": {
      "fileName": "1014014_Monster_W1_GS_Svarog_RL_Ability06_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "Monster_W1_Svarog_RL_AttackUp[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
          "valuePerStack": {
            "MDF_DamageUpRatio_PerLayer": {
              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
              "displayLines": "{[Skill06[0]]}",
              "constants": [],
              "variables": [
                "{[Skill06[0]]}"
              ]
            }
          }
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1014014_Monster_W1_GS_Svarog_RL_Ability06_Part01": {
      "fileName": "1014014_Monster_W1_GS_Svarog_RL_Ability06_Part01",
      "childAbilityList": [
        "1014014_Monster_W1_GS_Svarog_RL_Ability06_Part01",
        "1014014_Monster_W1_GS_Svarog_RL_Ability06_Part02",
        "1014014_Monster_W1_GS_Svarog_RL_Ability06_Camera"
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
          "ability": "Monster_W1_GS_Svarog_RL_Ability06_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Minions}}"
            },
            "modifier": "StanceBreakState"
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "modifier": "StanceBreakState"
            }
          ]
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "phase": "Phase1"
        }
      ],
      "references": []
    },
    "1014014_Monster_W1_GS_Svarog_RL_Ability05_Part02": {
      "fileName": "1014014_Monster_W1_GS_Svarog_RL_Ability05_Part02",
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
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1014014_Monster_W1_GS_Svarog_RL_Ability05_Part01": {
      "fileName": "1014014_Monster_W1_GS_Svarog_RL_Ability05_Part01",
      "childAbilityList": [
        "1014014_Monster_W1_GS_Svarog_RL_Ability05_Part01",
        "1014014_Monster_W1_GS_Svarog_RL_Ability05_Part02",
        "1014014_Monster_W1_GS_Svarog_RL_Ability05_Camera"
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
          "ability": "Monster_W1_GS_Svarog_RL_Ability05_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1014014_Monster_W1_GS_Svarog_RL_Ability04_Part02": {
      "fileName": "1014014_Monster_W1_GS_Svarog_RL_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Shot Fired",
          "caster": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "projectileCountTotal": 12,
          "projectileDMG": {
            "name": "ATK Scaling DMG",
            "target": {
              "name": "Target Name",
              "target": "{{Hostile Entities(AOE)}}"
            },
            "AttackScaling": {
              "DamageType": "Physical",
              "Damage": {
                "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                "displayLines": "{[Skill04[0]]}",
                "constants": [],
                "variables": [
                  "{[Skill04[0]]}"
                ]
              },
              "Toughness": null,
              "Tags": null,
              "attackType": "Basic ATK",
              "EnergyGainPercent": "100%"
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "Monster_W1_Svarog_RL_DefenceRatioDown[<span class=\"descriptionNumberColor\">DEF Reduction</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill04[2]]}) || RETURN",
            "displayLines": "{[Skill04[2]]}",
            "constants": [],
            "variables": [
              "{[Skill04[2]]}"
            ]
          },
          "baseChance": 1,
          "valuePerStack": {
            "MDF_DefenceAddedRatio_PerLayer": {
              "operator": "Variables[0] ({[Skill04[1]]}) || RETURN",
              "displayLines": "{[Skill04[1]]}",
              "constants": [],
              "variables": [
                "{[Skill04[1]]}"
              ]
            }
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1014014_Monster_W1_GS_Svarog_RL_Ability04_Part01": {
      "fileName": "1014014_Monster_W1_GS_Svarog_RL_Ability04_Part01",
      "childAbilityList": [
        "1014014_Monster_W1_GS_Svarog_RL_Ability04_Part01",
        "1014014_Monster_W1_GS_Svarog_RL_Ability04_Part02",
        "1014014_Monster_W1_GS_Svarog_RL_Ability04_Camera",
        "1014014_Monster_W1_GS_Svarog_Ability04_Camera_2"
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
          "ability": "Monster_W1_GS_Svarog_RL_Ability04_Part02",
          "isTrigger": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Player Team All}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": ">",
            "value2": 4
          },
          "passed": [
            "Deleted bullshit"
          ],
          "failed": [
            "Deleted bullshit"
          ]
        }
      ],
      "references": []
    },
    "1014014_Monster_W1_GS_Svarog_RL_Ability03_Part02": {
      "fileName": "1014014_Monster_W1_GS_Svarog_RL_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "Boss_Cocolia_Endurance"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Character ID",
            "ID": 1310,
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "characterName": "Firefly"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "Monster_W1_Svarog_RL_ListenPlayerDie_Modifier"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "Svarog_ListenBreak_RemoveControl_Modifier"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "Monster_W1_Svarog_RL_Part_ListenHP_Modifier",
          "valuePerStack": {
            "PassiveAbility02_P2_HPRatio": {
              "operator": "Variables[0] ({[PassiveSkill02[0]]}) || RETURN",
              "displayLines": "{[PassiveSkill02[0]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill02[0]]}"
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "Monster_W1_Svarog_RL_Control_Modifier[<span class=\"descriptionNumberColor\">Restrain</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "Monster_W1_Svarog_RL_Control_OnPart_Modifier",
          "valuePerStack": {
            "Modifier_DamagePercentage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
              "displayLines": "{[Skill03[0]]}",
              "constants": [],
              "variables": [
                "{[Skill03[0]]}"
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "Svarog_ListenPlayerAllDie_Modifier"
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Svarog_ListenPlayerAllDie_Modifier",
          "execute": [
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player Team All}}.[[removeMemosprite]]"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": "<=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Monster_W1_Svarog_RL_Control_Modifier[<span class=\"descriptionNumberColor\">Restrain</span>]"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster's Minions}}"
                      },
                      "modifier": "Monster_W1_Svarog_RL_Control_OnPart_Modifier"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster's Minions}}"
                      },
                      "modifier": "Monster_W1_SvarogPart_RL_OnTurnEndChangePhaseModifier"
                    },
                    "Modifier Deletes Itself"
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
          "for": "Svarog_ListenBreak_RemoveControl_Modifier",
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Svarog's Confinement Target v2}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Monster_W1_Svarog_RL_Control_Modifier[<span class=\"descriptionNumberColor\">Restrain</span>]"
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Monster_W1_Svarog_RL_Control_OnPart_Modifier"
                },
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "Phase0"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "CanUseSkill03",
                  "value": 1
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "PartCanUseSkill03",
                  "value": 1
                },
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "1014014_Monster_W1_GS_Svarog_RL_Ability03_Part01": {
      "fileName": "1014014_Monster_W1_GS_Svarog_RL_Ability03_Part01",
      "childAbilityList": [
        "1014014_Monster_W1_GS_Svarog_RL_Ability03_Part01",
        "1014014_Monster_W1_GS_Svarog_RL_Ability03_Part02",
        "1014014_Monster_W1_GS_Svarog_RL_Ability03_Camera"
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
          "ability": "Monster_W1_GS_Svarog_RL_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "phase": "Phase1"
        }
      ],
      "references": []
    },
    "1014014_Monster_W1_GS_Svarog_RL_Ability02_Part02": {
      "fileName": "1014014_Monster_W1_GS_Svarog_RL_Ability02_Part02",
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
          "name": "Action Advance/Delay",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "advanceType": "Set",
          "multiAdd": "{[Skill02[1]]}"
        },
        {
          "name": "UI Display Event (On Entity)",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "popUpText": "Action Delayed"
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1014014_Monster_W1_GS_Svarog_RL_Ability02_Part01": {
      "fileName": "1014014_Monster_W1_GS_Svarog_RL_Ability02_Part01",
      "childAbilityList": [
        "1014014_Monster_W1_GS_Svarog_RL_Ability02_Part01",
        "1014014_Monster_W1_GS_Svarog_RL_Ability02_Part02",
        "1014014_Monster_W1_GS_Svarog_RL_Ability02_Camera"
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
          "ability": "Monster_W1_GS_Svarog_RL_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1014014_Monster_W1_GS_Svarog_RL_Ability01_Part02": {
      "fileName": "1014014_Monster_W1_GS_Svarog_RL_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
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
            "value2": 7
          },
          "passed": [
            "Ability Start"
          ],
          "failed": [
            "Ability Start"
          ]
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
    "1014014_Monster_W1_GS_Svarog_RL_Ability01_Part01": {
      "fileName": "1014014_Monster_W1_GS_Svarog_RL_Ability01_Part01",
      "childAbilityList": [
        "1014014_Monster_W1_GS_Svarog_RL_Ability01_Part01",
        "1014014_Monster_W1_GS_Svarog_RL_Ability01_Part02",
        "1014014_Monster_W1_GS_Svarog_RL_Ability01_Camera"
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
          "ability": "Monster_W1_GS_Svarog_RL_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1014014_Monster_W1_GS_Svarog_RL_PassiveAbilityInitiate": {
      "fileName": "1014014_Monster_W1_GS_Svarog_RL_PassiveAbilityInitiate",
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
          "modifier": "Monster_W1_GS_Svarog_BattleScore1"
        },
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
          "modifier": "Monster_W1_Svarog_RL_PartController_LockHP"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W1_Svarog_RL_LowHP",
          "valuePerStack": {
            "MDF_LowHPRatio": {
              "operator": "Variables[0] ({[PassiveSkill02[1]]}) || RETURN",
              "displayLines": "{[PassiveSkill02[1]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill02[1]]}"
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
          "modifier": "Monster_W1_Svarog_RL_ReviveEffect"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_Svarog_RL_ReviveEffect",
          "execute": [
            {
              "eventTrigger": "When Put in Deathstate Limbo"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_Svarog_RL_LowHP",
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
                      "variableName": "RL_Phase",
                      "value": 4
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "DecisionFlag",
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
                      },
                      "failed": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Caster's Minions}}"
                          },
                          "searchRandom": true,
                          "ifTargetFound": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "value1": "PartDecisionFlag",
                                "compareType": "=",
                                "value2": 1,
                                "contextScope": "TargetEntity"
                              },
                              "passed": [
                                {
                                  "name": "Declare Custom Variable",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "scope": "TargetEntity",
                                  "variableName": "PartDecisionFlag",
                                  "value": 2
                                }
                              ]
                            }
                          ]
                        }
                      ]
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
          "latentQueue": []
        }
      ]
    },
    "1014014_Monster_W1_GS_Svarog_PassiveAbility04": {
      "fileName": "1014014_Monster_W1_GS_Svarog_PassiveAbility04",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "SlowModifier",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (PassiveSkill04_SpeedDelta) || RETURN",
                    "displayLines": "PassiveSkill04_SpeedDelta",
                    "constants": [],
                    "variables": [
                      "PassiveSkill04_SpeedDelta"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "OnBreakSlowModifier",
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "SlowModifier",
                  "duration": 1,
                  "valuePerStack": {
                    "PassiveAbility04_SpeedDelta": {
                      "operator": "Variables[0] (PassiveSkill04_SpeedDelta) || RETURN",
                      "displayLines": "PassiveSkill04_SpeedDelta",
                      "constants": [],
                      "variables": [
                        "PassiveSkill04_SpeedDelta"
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
    "1014014_Monster_W1_GS_Svarog_PassiveAbility02": {
      "fileName": "1014014_Monster_W1_GS_Svarog_PassiveAbility02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "1014014_Monster_W1_GS_Svarog_PassiveAbility03": {
      "fileName": "1014014_Monster_W1_GS_Svarog_PassiveAbility03",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Create Enemies",
          "delayPercent": 0,
          "refreshPositions": false,
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": 9004021,
              "locationType": "BeforeCaster"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "Svarog_Part_ListenHP_Modifier",
          "valuePerStack": {
            "PassiveAbility02_P2_HPRatio": {
              "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__35) || RETURN",
              "displayLines": "ENEMIES_OBJECT_UNUSED__35",
              "constants": [],
              "variables": [
                "ENEMIES_OBJECT_UNUSED__35"
              ]
            }
          }
        }
      ],
      "references": []
    },
    "1014014_Monster_W1_GS_Svarog_Ability08_Part02": {
      "fileName": "1014014_Monster_W1_GS_Svarog_Ability08_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1014014_Monster_W1_GS_Svarog_Ability08_Part01": {
      "fileName": "1014014_Monster_W1_GS_Svarog_Ability08_Part01",
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
          "ability": "Monster_W1_GS_Svarog_Ability08_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1014014_Monster_W1_GS_Svarog_AIControl": {
      "fileName": "1014014_Monster_W1_GS_Svarog_AIControl",
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
          "modifier": "Straight_AIControl"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Straight_AIControl",
          "execute": [
            {
              "eventTrigger": "Action End [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "AIFlag",
                  "context": "TargetEntity",
                  "value": 1,
                  "min": 1,
                  "max": 7
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
                    "compareType": ">",
                    "value2": 6,
                    "contextScope": "TargetEntity"
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
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "1014014_Monster_W1_GS_Svarog_Ability07_Part02": {
      "fileName": "1014014_Monster_W1_GS_Svarog_Ability07_Part02",
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
              "target": "{{Caster's Minions}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": "<",
            "value2": 1
          },
          "passed": [
            {
              "name": "Create Enemies",
              "delayPercent": 0,
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": 1012040,
                  "locationType": "BeforeCaster"
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
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Svarog's Confinement Target}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": "<",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "CanUseSkill03",
                  "value": 1
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "modifier": "Svarog_Part_ListenHP_Modifier"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "modifier": "Svarog_Part_ListenBreak_Modifier"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "SelfDestroy_Controller"
            }
          ]
        },
        "Ability Start",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1014014_Monster_W1_GS_Svarog_Ability07_Part01": {
      "fileName": "1014014_Monster_W1_GS_Svarog_Ability07_Part01",
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
          "ability": "Monster_W1_GS_Svarog_Ability07_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1014014_Monster_W1_GS_Svarog_Ability06_Part02": {
      "fileName": "1014014_Monster_W1_GS_Svarog_Ability06_Part02",
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
          "modifier": "Svarog_Ability06_Bonus",
          "duration": 1
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1014014_Monster_W1_GS_Svarog_Ability06_Part01": {
      "fileName": "1014014_Monster_W1_GS_Svarog_Ability06_Part01",
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
          "ability": "Monster_W1_GS_Svarog_Ability06_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Minions}}"
            },
            "modifier": "StanceBreakState"
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "modifier": "StanceBreakState"
            }
          ]
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "phase": "Phase1"
        }
      ],
      "references": []
    },
    "1014014_Monster_W1_GS_Svarog_Ability05_Part02": {
      "fileName": "1014014_Monster_W1_GS_Svarog_Ability05_Part02",
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
            "DamageType": "Fire",
            "Damage": {
              "displayLines": 1
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
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
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1014014_Monster_W1_GS_Svarog_Ability05_Part01": {
      "fileName": "1014014_Monster_W1_GS_Svarog_Ability05_Part01",
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
          "ability": "Monster_W1_GS_Svarog_Ability05_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1014014_Monster_W1_GS_Svarog_Ability04_Part02": {
      "fileName": "1014014_Monster_W1_GS_Svarog_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 101401010,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Svarog"
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "OneMore"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_W1_GS_Svarog_Level_SpecialWin"
            }
          ]
        },
        {
          "name": "Shot Fired",
          "caster": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "projectileCountTotal": 12,
          "projectileDMG": {
            "name": "ATK Scaling DMG",
            "target": {
              "name": "Target Name",
              "target": "{{Hostile Entities(AOE)}}"
            },
            "AttackScaling": {
              "DamageType": "Physical",
              "Damage": {
                "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                "displayLines": "{[Skill04[0]]}",
                "constants": [],
                "variables": [
                  "{[Skill04[0]]}"
                ]
              },
              "Toughness": null,
              "Tags": null,
              "attackType": "Basic ATK",
              "EnergyGainPercent": "100%"
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "Standard_DefenceRatioDown[<span class=\"descriptionNumberColor\">DEF Reduction</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill04[2]]}) || RETURN",
            "displayLines": "{[Skill04[2]]}",
            "constants": [],
            "variables": [
              "{[Skill04[2]]}"
            ]
          },
          "baseChance": 1,
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (UnusedUnderThisBase_63) || RETURN",
              "displayLines": "UnusedUnderThisBase_63",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_63"
              ]
            }
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1014014_Monster_W1_GS_Svarog_Ability04_Part01": {
      "fileName": "1014014_Monster_W1_GS_Svarog_Ability04_Part01",
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
          "ability": "Monster_W1_GS_Svarog_Ability04_Part02",
          "isTrigger": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Player Team All}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": ">",
            "value2": 4
          },
          "passed": [
            "Deleted bullshit"
          ],
          "failed": [
            "Deleted bullshit"
          ]
        }
      ],
      "references": []
    },
    "1014014_Monster_W1_GS_Svarog_Ability03_Part02": {
      "fileName": "1014014_Monster_W1_GS_Svarog_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "Boss_Cocolia_Endurance"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Character ID",
            "ID": 1310,
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "characterName": "Firefly"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "Svarog_ListenPlayerDie_Modifier"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "Svarog_ListenBreak_RemoveControl_Modifier"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "Svarog_Part_ListenHP_Modifier",
          "valuePerStack": {
            "PassiveAbility02_P2_HPRatio": {
              "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__35) || RETURN",
              "displayLines": "ENEMIES_OBJECT_UNUSED__35",
              "constants": [],
              "variables": [
                "ENEMIES_OBJECT_UNUSED__35"
              ]
            },
            "PassiveAbility02_P3_StanceBreakTakenRatio": {
              "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__36) || RETURN",
              "displayLines": "ENEMIES_OBJECT_UNUSED__36",
              "constants": [],
              "variables": [
                "ENEMIES_OBJECT_UNUSED__36"
              ]
            },
            "PassiveAbility02_P4_MDF_AllDamageTypeTakenRatio": {
              "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__37) || RETURN",
              "displayLines": "ENEMIES_OBJECT_UNUSED__37",
              "constants": [],
              "variables": [
                "ENEMIES_OBJECT_UNUSED__37"
              ]
            },
            "PassiveAbility02_P5_LifeTime": {
              "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__38) || RETURN",
              "displayLines": "ENEMIES_OBJECT_UNUSED__38",
              "constants": [],
              "variables": [
                "ENEMIES_OBJECT_UNUSED__38"
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "Svarog_Control_Modifier[<span class=\"descriptionNumberColor\">Restrain</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "Svarog_Control_OnPart_Modifier"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "Svarog_ListenPlayerAllDie_Modifier"
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Svarog_ListenPlayerAllDie_Modifier",
          "execute": [
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player Team All}}.[[removeMemosprite]]"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": "<=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Svarog_Control_Modifier[<span class=\"descriptionNumberColor\">Restrain</span>]"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster's Minions}}"
                      },
                      "modifier": "Svarog_Control_OnPart_Modifier"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster's Minions}}"
                      },
                      "modifier": "Svarog_Part_OnTurnEndChangePhaseModifier"
                    },
                    "Modifier Deletes Itself"
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
          "for": "Svarog_ListenBreak_RemoveControl_Modifier",
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Svarog's Confinement Target}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Svarog_Control_Modifier[<span class=\"descriptionNumberColor\">Restrain</span>]"
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Svarog_Control_OnPart_Modifier"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Phase_Flag",
                  "value": 1
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 1
                },
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "Phase0"
                },
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "1014014_Monster_W1_GS_Svarog_Ability03_Part01": {
      "fileName": "1014014_Monster_W1_GS_Svarog_Ability03_Part01",
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
          "ability": "Monster_W1_GS_Svarog_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "phase": "Phase1"
        }
      ],
      "references": []
    },
    "1014014_Monster_W1_GS_Svarog_Ability02_Part02": {
      "fileName": "1014014_Monster_W1_GS_Svarog_Ability02_Part02",
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
        "Trigger: Attack End",
        {
          "name": "UI Display Event (On Entity)",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "popUpText": "Action Delayed"
        },
        {
          "name": "Action Advance/Delay",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "advanceType": "Set",
          "multiAdd": "{[Skill02[1]]}"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1014014_Monster_W1_GS_Svarog_Ability02_Part01": {
      "fileName": "1014014_Monster_W1_GS_Svarog_Ability02_Part01",
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
          "ability": "Monster_W1_GS_Svarog_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1014014_Monster_W1_GS_Svarog_Ability01_Part02": {
      "fileName": "1014014_Monster_W1_GS_Svarog_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
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
            "value2": 7
          },
          "passed": [
            "Ability Start"
          ],
          "failed": [
            "Ability Start"
          ]
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
    "1014014_Monster_W1_GS_Svarog_Ability01_Part01": {
      "fileName": "1014014_Monster_W1_GS_Svarog_Ability01_Part01",
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
          "ability": "Monster_W1_GS_Svarog_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1014014_Monster_W1_GS_Svarog_PassiveAbilityInitiate": {
      "fileName": "1014014_Monster_W1_GS_Svarog_PassiveAbilityInitiate",
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
          "modifier": "Monster_W1_GS_Svarog_BattleScore1"
        },
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
          "modifier": "Monster_W1_GS_Svarog_Break"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 101401010,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Svarog"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_W1_GS_Svarog_SpecialVictory_LockHP"
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_GS_Svarog_SpecialVictory_LockHP",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 0.7
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
                    "value1": "Svarog_SpecialVictory_Flag",
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
                      "variableName": "DecisionFlag"
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
                      "modifier": "Monster_W1_GS_Svarog_DisableAction"
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "Svarog_SpecialVictory_Flag",
                      "value": 1
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
          "for": "Monster_W1_GS_Svarog_Break",
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]"
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "1014014_Monster_W1_Svarog_PassiveAbility_BGM": {
      "fileName": "1014014_Monster_W1_Svarog_PassiveAbility_BGM",
      "childAbilityList": [
        "1014014_Monster_W1_Svarog_PassiveAbility_BGM"
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
          "modifier": "Enemy_W1_Svarog_ResetStageBGM"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Enemy_W1_Svarog_ResetStageBGM",
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
    "1014014_Modifiers": {
      "fileName": "1014014_Modifiers",
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
          "for": "Monster_W1_SvarogPart_RL_CountDown[<span class=\"descriptionNumberColor\">Overload Countdown</span>]",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "PartDecisionFlag",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "PartDecisionFlag",
                      "value": 2
                    }
                  ]
                }
              ]
            }
          ],
          "description": "Auxiliary Robot Arm Unit initiates Overload countdown. After the countdown ends, cast Overload Warning.",
          "type": "Other",
          "statusName": "Overload Countdown",
          "duration": 2
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_SvarogPart_RL_ListenBreak_Modifier",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "CanUseSkill03"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "PartCanUseSkill03"
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "CanUseSkill03",
                  "value": 1
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "PartCanUseSkill03",
                  "value": 1
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "CanUseSkill03"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_SvarogPart_RL_OnTurnEndChangePhaseModifier",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "Phase0"
                },
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_Svarog_RL_Control_OnPart_Modifier",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "Turn [Action-End Phase]"
            },
            {
              "eventTrigger": "Take Damage End [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Random Chance",
                    "chance": 0.33
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Random Chance",
                        "chance": 0.5
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [
            "Modifier_DamagePercentage"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_Svarog_RL_ListenPlayerDie_Modifier",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Waiting for Healing in Limbo",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Svarog's Confinement Target v2}}"
                  },
                  "searchRandom": true,
                  "includeDyingTargets": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Monster_W1_Svarog_RL_Control_Modifier[<span class=\"descriptionNumberColor\">Restrain</span>]"
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Monster_W1_Svarog_RL_Control_OnPart_Modifier"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Svarog_ListenBreak_RemoveControl_Modifier"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Monster_W1_SvarogPart_RL_OnTurnEndChangePhaseModifier"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "CanUseSkill03",
                  "value": 1
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "PartCanUseSkill03",
                  "value": 1
                },
                "Modifier Deletes Itself"
              ],
              "priorityLevel": -90
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Monster_W1_SvarogPart_RL_OnTurnEndChangePhaseModifier"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Monster_W1_Svarog_RL_Control_OnPart_Modifier"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Svarog_ListenBreak_RemoveControl_Modifier"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "CanUseSkill03",
                  "value": 1
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "PartCanUseSkill03",
                  "value": 1
                },
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_Svarog_RL_Endurance",
          "modifierFlags": [
            "Endurance"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "PhaseChange"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "Phase0"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "STAT_CTRL",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_Svarog_RL_Control_Modifier[<span class=\"descriptionNumberColor\">Restrain</span>]",
          "modifierFlags": [
            "Stealth",
            "DisableHealHP",
            "AlwaysSuccess",
            "MuteSpeed",
            "STAT_ForceControl"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Remove Modifier Behavior Flag(s)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "flagNames": []
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Character ID",
                    "ID": 1310,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": "Firefly"
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "M_Svarog_CTRL"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Monster_W1_Svarog_RL_ListenPlayerDie_Modifier"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Svarog_ListenPlayerAllDie_Modifier"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "CanUseSkill03",
                  "value": 1
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "PartCanUseSkill03",
                  "value": 1
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "M_Svarog_CTRL",
                  "valuePerStack": {
                    "Modifier_Frozen_DamagePercentage": 0
                  }
                },
                "Mark Entity as Non-Target(Unselectable)"
              ]
            }
          ],
          "useEntitySnapshot": true,
          "stackData": [],
          "latentQueue": [],
          "description": "Restrained. Cannot take action.",
          "type": "Debuff",
          "effectName": "Restrain",
          "statusName": "Restrain"
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_Svarog_RL_PartController_LockHP",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
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
                          "modifier": "Monster_W1_Svarog_RL_Endurance"
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
                          "abilityName": "Monster_W1_GS_Svarog_RL_PassiveAbility_Insert",
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
                  "failed": [
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
                          "modifier": "Monster_W1_Svarog_RL_Endurance"
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
                          "abilityName": "Monster_W1_GS_Svarog_RL_PassiveAbility_Insert2",
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
          "for": "Monster_W1_Svarog_RL_Part_ListenHP_Modifier",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "Monster_W1_Svarog_RL_Control_OnPart_Modifier"
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Svarog's Confinement Target v2}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Monster_W1_Svarog_RL_Control_Modifier[<span class=\"descriptionNumberColor\">Restrain</span>]"
                        }
                      ]
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Monster_W1_Svarog_RL_Control_OnPart_Modifier"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Svarog_ListenBreak_RemoveControl_Modifier"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Put in Deathstate Limbo",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "Monster_W1_Svarog_RL_Control_OnPart_Modifier"
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Svarog's Confinement Target v2}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Monster_W1_Svarog_RL_Control_Modifier[<span class=\"descriptionNumberColor\">Restrain</span>]"
                        }
                      ]
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Monster_W1_Svarog_RL_Control_OnPart_Modifier"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Svarog_ListenBreak_RemoveControl_Modifier"
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "CurrentHP%",
                        "compareType": "<=",
                        "value2": {
                          "operator": "Variables[0] (PassiveSkill02_P2_HPRatio) || RETURN",
                          "displayLines": "PassiveSkill02_P2_HPRatio",
                          "constants": [],
                          "variables": [
                            "PassiveSkill02_P2_HPRatio"
                          ]
                        }
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Summoner of Modifier Holder}}"
                        },
                        "value1": "SelfDestroy_Controller",
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
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "Monster_W1_Svarog_RL_Control_OnPart_Modifier"
                      },
                      "passed": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Svarog's Confinement Target v2}}"
                          },
                          "searchRandom": true,
                          "maxTargets": 1,
                          "ifTargetFound": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "Monster_W1_Svarog_RL_Control_Modifier[<span class=\"descriptionNumberColor\">Restrain</span>]"
                            }
                          ]
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "Monster_W1_Svarog_RL_Control_OnPart_Modifier"
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "Svarog_ListenBreak_RemoveControl_Modifier"
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Summoner of Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "CanUseSkill03",
                          "value": 1
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "PartCanUseSkill03",
                          "value": 1
                        }
                      ]
                    },
                    {
                      "name": "Action Advance/Delay",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "advanceType": "Advance",
                      "multiAdd": -1
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "PartDecisionFlag",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "PartDecisionFlag",
                          "value": 2
                        }
                      ]
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Summoner of Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "SelfDestroy_Controller",
                      "value": 1
                    },
                    {
                      "name": "Change Character Transformation",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "phase": "Phase0"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "PassiveSkill02_P2_HPRatio"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_Svarog_RL_DefenceRatioDown[<span class=\"descriptionNumberColor\">DEF Reduction</span>]",
          "stackType": "Replace",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_DefenceDown"
          ],
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (MDF_DefenceAddedRatio_PerLayer) || Variables[1] (ModifierLayers) || MUL || SUB || RETURN",
                    "displayLines": "(0 - (MDF_DefenceAddedRatio_PerLayer * ModifierLayers))",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "MDF_DefenceAddedRatio_PerLayer",
                      "ModifierLayers"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_DefenceAddedRatio_PerLayer"
          ],
          "latentQueue": [],
          "description": "Reduces DEF by <span class=\"descriptionNumberColor\">MDF_DefenceAddedRatio_PerLayer</span>. This effect can stack.",
          "type": "Debuff",
          "effectName": "DEF Reduction",
          "statusName": "DEF Reduction",
          "duration": 3,
          "stackLimit": 10,
          "addStacksPerTrigger": {
            "operator": "Variables[0] (ModifierStackLayer) || RETURN",
            "displayLines": "ModifierStackLayer",
            "constants": [],
            "variables": [
              "ModifierStackLayer"
            ]
          }
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_Svarog_RL_AttackUp[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
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
          "stackData": [
            "MDF_DamageUpRatio_PerLayer"
          ],
          "latentQueue": [],
          "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_DamageUpRatio_PerLayer</span>. This effect can stack.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "DMG Boost",
          "addStacksPerTrigger": {
            "operator": "Variables[0] (ModifierStackLayer) || RETURN",
            "displayLines": "ModifierStackLayer",
            "constants": [],
            "variables": [
              "ModifierStackLayer"
            ]
          }
        },
        {
          "name": "Modifier Construction",
          "for": "Svarog_Control_OnPart_Modifier",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]"
            },
            {
              "eventTrigger": "Take Damage End [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Random Chance",
                    "chance": 0.33
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Random Chance",
                        "chance": 0.5
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Svarog_Ability07_AllDamageUp_Modifier[<span class=\"descriptionNumberColor\">Amplification</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">Modifier_AllDamageUp</span>. This effect can stack.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "Amplification",
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "Svarog_Part_ListenBreak_Modifier",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "CanUseSkill03",
                  "value": 1
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "PartCanUseSkill03",
                  "value": 1
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "CanUseSkill03"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "PartCanUseSkill03"
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "CanUseSkill03",
                  "value": 1
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "PartCanUseSkill03",
                  "value": 1
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "CanUseSkill03"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Svarog_Part_OnTurnEndChangePhaseModifier",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "Phase0"
                },
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Svarog_ListenPlayerDie_Modifier",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Waiting for Healing in Limbo",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Svarog's Confinement Target}}"
                  },
                  "searchRandom": true,
                  "includeDyingTargets": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Svarog_Control_Modifier[<span class=\"descriptionNumberColor\">Restrain</span>]"
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Svarog_Control_OnPart_Modifier"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Svarog_ListenBreak_RemoveControl_Modifier"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Svarog_Part_OnTurnEndChangePhaseModifier"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "CanUseSkill03",
                  "value": 1
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "PartCanUseSkill03",
                  "value": 1
                },
                "Modifier Deletes Itself"
              ],
              "priorityLevel": -90
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Svarog_Part_OnTurnEndChangePhaseModifier"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Svarog_Control_OnPart_Modifier"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Svarog_ListenBreak_RemoveControl_Modifier"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "CanUseSkill03",
                  "value": 1
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "PartCanUseSkill03",
                  "value": 1
                },
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Svarog_Ability06_Bonus",
          "modifierFlags": [
            "Endurance"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "W1_Mecha02_AttackBonus_Effect"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
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
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Svarog_Part0_DamageReduceModifier",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__32) || RETURN",
                    "displayLines": "ENEMIES_OBJECT_UNUSED__32",
                    "constants": [],
                    "variables": [
                      "ENEMIES_OBJECT_UNUSED__32"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Toughness Reduction Resistance</span>&nbsp;",
                  "value": 1
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_StanceLock",
                  "value": {
                    "operator": "Variables[0] (_StanceLock) || Constants[0] (1) || SUB || RETURN",
                    "displayLines": "(_StanceLock - 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "_StanceLock"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Svarog_Kaboom_Modifier[<span class=\"descriptionNumberColor\">Overheat</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessVulnerability</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_StanceBreakTakenRatio) || RETURN",
                    "displayLines": "MDF_StanceBreakTakenRatio",
                    "constants": [],
                    "variables": [
                      "MDF_StanceBreakTakenRatio"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AllDamageTypeTakenRatio) || RETURN",
                    "displayLines": "MDF_AllDamageTypeTakenRatio",
                    "constants": [],
                    "variables": [
                      "MDF_AllDamageTypeTakenRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Received Toughness DMG increases by <span class=\"descriptionNumberColor\">MDF_StanceBreakTakenRatio</span>, and received damage increases by <span class=\"descriptionNumberColor\">MDF_AllDamageTypeTakenRatio</span>.",
          "type": "Debuff",
          "effectName": "Overheat",
          "statusName": "Overheat"
        },
        {
          "name": "Modifier Construction",
          "for": "Svarog_Part_ListenHP_Modifier",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Put in Deathstate Limbo",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Svarog's Confinement Target}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Svarog_Control_Modifier[<span class=\"descriptionNumberColor\">Restrain</span>]"
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Svarog_Control_OnPart_Modifier"
                }
              ]
            }
          ],
          "stackData": [
            "PassiveSkill02_P2_HPRatio",
            "PassiveSkill02_P3_StanceBreakTakenRatio",
            "PassiveSkill02_P4_MDF_AllDamageTypeTakenRatio",
            "PassiveSkill02_P5_LifeTime"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Svarog_Ability06_Insert_Modifier",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W1_GS_Svarog_Insert_Part01",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "M_Svarog_CTRL",
          "stackType": "Merge",
          "modifierFlags": [
            "DisableAction",
            "STAT_CTRL_Stun",
            "STAT_CTRL",
            "AlwaysSuccess",
            "STAT_ForceControl"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Stun_Effect"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Stun_Effect"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Target Exists",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "living": true
                  },
                  "passed": [
                    {
                      "name": "UI Display Event (On Entity)",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "popUpText": "Broke Free From Restrain"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": null,
                    "compareType": "=",
                    "value2": 1,
                    "valueType": "LifeTime"
                  },
                  "passed": [
                    "Abort Modifier Phase Action"
                  ],
                  "failed": [
                    {
                      "name": "UI Display Event (On Entity)",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "popUpText": "Restrained"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Disable Abilities",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityTypes": [
                    "Ultimate"
                  ],
                  "text": "Ability cannot be used"
                }
              ]
            }
          ],
          "stackData": [
            "Modifier_Frozen_DamagePercentage"
          ],
          "latentQueue": [
            "CanUseSkill03",
            "PartCanUseSkill03"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Svarog_Electric_Modifier[<span class=\"descriptionNumberColor\">Grievous</span>]",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_DefenceDown"
          ],
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "Damage": {
                      "operator": "Variables[0] (Modifier_DamagePercentage) || RETURN",
                      "displayLines": "Modifier_DamagePercentage",
                      "constants": [],
                      "variables": [
                        "Modifier_DamagePercentage"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (Modifier_DefenceAddedRatio) || SUB || RETURN",
                    "displayLines": "(0 - Modifier_DefenceAddedRatio)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "Modifier_DefenceAddedRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "For a certain number of turns, DEF is reduced by <span class=\"descriptionNumberColor\">Modifier_DefenceAddedRatio</span>, and takes Physical DMG at the beginning of each turn.",
          "type": "Debuff",
          "effectName": "Grievous",
          "statusName": "Grievous"
        },
        {
          "name": "Modifier Construction",
          "for": "Svarog_Control_Modifier[<span class=\"descriptionNumberColor\">Restrain</span>]",
          "modifierFlags": [
            "Stealth",
            "DisableHealHP",
            "AlwaysSuccess",
            "MuteSpeed",
            "STAT_ForceControl"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Remove Modifier Behavior Flag(s)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "flagNames": []
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Character ID",
                    "ID": 1310,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": "Firefly"
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "M_Svarog_CTRL"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Svarog_ListenPlayerDie_Modifier"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Svarog_ListenPlayerAllDie_Modifier"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "CanUseSkill03",
                  "value": 1
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "PartCanUseSkill03",
                  "value": 1
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "M_Svarog_CTRL",
                  "valuePerStack": {
                    "Modifier_Frozen_DamagePercentage": 0
                  }
                },
                "Mark Entity as Non-Target(Unselectable)"
              ]
            }
          ],
          "useEntitySnapshot": true,
          "stackData": [],
          "latentQueue": [],
          "description": "Restrained. Cannot take action.",
          "type": "Debuff",
          "effectName": "Restrain",
          "statusName": "Restrain"
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_GS_Svarog_Level_SpecialWin",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: End"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_GS_Svarog_DisableAction",
          "modifierFlags": [
            "DisableAction"
          ],
          "stackData": [],
          "latentQueue": [
            "Svarog_SpecialVictory_Flag",
            "DecisionFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_SvarogPart_CD",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "duration": 1
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_SvarogPart_Overload[<span class=\"descriptionNumberColor\">Overload</span>]",
          "description": "Casts Controlled Blasting in the next action.",
          "type": "Other",
          "effectName": "Overload",
          "statusName": "Overload"
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W1_SvarogPart_CountDown[<span class=\"descriptionNumberColor\">Overload Countdown</span>]",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "PartDecisionFlag",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "PartDecisionFlag",
                      "value": 2
                    }
                  ]
                }
              ]
            }
          ],
          "description": "Auxiliary Robot Arm Unit initiates Overload countdown. After the countdown ends, cast Overload Warning.",
          "type": "Other",
          "statusName": "Overload Countdown",
          "duration": 2
        }
      ],
      "references": []
    }
  }
}