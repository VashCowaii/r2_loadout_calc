const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 3013012,
  "trimCharacterName": 3013012,
  "abilityList": [
    "3013012_Monster_W3_Dinosaur_01_PassiveAbilityInitiate_IF",
    "3013012_Monster_W3_Dinosaur_01_Ability07_Part02_IF",
    "3013012_Monster_W3_Dinosaur_01_Ability07_Part01_IF",
    "3013012_Monster_W3_Dinosaur_01_PassiveAbilityInitiate",
    "3013012_Monster_W3_Dinosaur_01_AbilityP01",
    "3013012_Monster_W3_Dinosaur_01_Ability07_Part02",
    "3013012_Monster_W3_Dinosaur_01_Ability07_Part01",
    "3013012_Monster_W3_Dinosaur_01_Ability06_Part02",
    "3013012_Monster_W3_Dinosaur_01_Ability06_Part01",
    "3013012_Monster_W3_Dinosaur_01_Ability04_Part02",
    "3013012_Monster_W3_Dinosaur_01_Ability04_Part01",
    "3013012_Monster_W3_Dinosaur_01_Ability01_Part02",
    "3013012_Monster_W3_Dinosaur_01_Ability01_Part01",
    "3013012_Modifiers"
  ],
  "abilityObject": {
    "3013012_Monster_W3_Dinosaur_01_PassiveAbilityInitiate_IF": {
      "fileName": "3013012_Monster_W3_Dinosaur_01_PassiveAbilityInitiate_IF",
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
          "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"207648995\">W3_Dinosaur_01_BattleScore1</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"224426614\">W3_Dinosaur_01_BattleScore2</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "3013012_Monster_W3_Dinosaur_01_Ability07_Part02_IF": {
      "fileName": "3013012_Monster_W3_Dinosaur_01_Ability07_Part02_IF",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Define Custom Variable with Modifier Values",
          "valueType": "Layer",
          "variableName": "MDF_Growth_Layer",
          "modifierName": "<a class=\"gModGreen\" id=\"-1395319081\">Enemy_W3_Dinosaur_01_Standard_Growth</a>[<span class=\"descriptionNumberColor\">Obscure Blaze</span>]",
          "multiplier": 1
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Monster_W3_Dinosaur_01_Skill07_CurrentHitCount_i",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Monster_W3_Dinosaur_01_Skill07_HitCount",
          "value": {
            "operator": "Variables[0] (MDF_Growth_Layer) || Variables[1] ({[Skill07[1]]}) || ADD || RETURN",
            "displayLines": "(MDF_Growth_Layer + {[Skill07[1]]})",
            "constants": [],
            "variables": [
              "MDF_Growth_Layer",
              "{[Skill07[1]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Monster_W3_Dinosaur_01_Skill07_SumTime",
          "value": 0.3
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Monster_W3_Dinosaur_01_Skill07_DeltaTime",
          "value": {
            "operator": "Variables[0] (Monster_W3_Dinosaur_01_Skill07_HitCount) || Variables[1] (Monster_W3_Dinosaur_01_Skill07_SumTime) || Constants[0] (1) || SUB || DIV || RETURN",
            "displayLines": "(Monster_W3_Dinosaur_01_Skill07_HitCount / (Monster_W3_Dinosaur_01_Skill07_SumTime - 1))",
            "constants": [
              1
            ],
            "variables": [
              "Monster_W3_Dinosaur_01_Skill07_HitCount",
              "Monster_W3_Dinosaur_01_Skill07_SumTime"
            ]
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1974630244\">Enemy_W3_Dinosaur_01_Ability07_HitTag</a>"
        },
        {
          "name": "Define Custom Variable with Modifier Values",
          "valueType": "Layer",
          "variableName": "MonsterAssistBuff_IF",
          "modifierName": "<a class=\"gModGreen\" id=\"-130810153\">Monster_W3_Dinosaur_01_MonsterAssistBonus</a>[<span class=\"descriptionNumberColor\">Terrathorn</span>]",
          "multiplier": 1
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (Monster_W3_Dinosaur_01_Skill07_SumTime) || RETURN",
            "displayLines": "Monster_W3_Dinosaur_01_Skill07_SumTime",
            "constants": [],
            "variables": [
              "Monster_W3_Dinosaur_01_Skill07_SumTime"
            ]
          },
          "Event": [
            {
              "name": "Random Event",
              "odds": [
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
              ],
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "EffRandomYaw",
                  "value": 30
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "EffRandomYaw",
                  "value": 60
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "EffRandomYaw",
                  "value": 90
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "EffRandomYaw",
                  "value": 120
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "EffRandomYaw",
                  "value": 150
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "EffRandomYaw",
                  "value": 180
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "EffRandomYaw",
                  "value": 210
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "EffRandomYaw",
                  "value": 240
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "EffRandomYaw",
                  "value": 270
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "EffRandomYaw",
                  "value": 300
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "EffRandomYaw",
                  "value": 330
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "EffRandomYaw",
                  "value": 360
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Monster_W3_Dinosaur_01_Skill07_CurrentHitCount_i_Eff_Loop",
              "value": {
                "operator": "Variables[0] (Monster_W3_Dinosaur_01_Skill07_CurrentHitCount_i) || Constants[0] (3) || MOD || RETURN",
                "displayLines": "(Monster_W3_Dinosaur_01_Skill07_CurrentHitCount_i % 3)",
                "constants": [
                  3
                ],
                "variables": [
                  "Monster_W3_Dinosaur_01_Skill07_CurrentHitCount_i"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Monster_W3_Dinosaur_01_Skill07_CurrentHitCount_i_Eff_Loop",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Monster_W3_Dinosaur_01_Skill07_CurrentHitCount_i",
                    "compareType": "=",
                    "value2": 0
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
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Player Team All}}"
                            },
                            "value1": "TeamCharacterCount",
                            "compareType": "=",
                            "value2": 1,
                            "conditions": {
                              "name": "Living State",
                              "state": "Mask_AliveOnly",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              }
                            }
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-1974630244\">Enemy_W3_Dinosaur_01_Ability07_HitTag</a>",
                            "invertCondition": true
                          }
                        ]
                      },
                      "ifTargetFound": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Hostile Entities(AOE)}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1974630244\">Enemy_W3_Dinosaur_01_Ability07_HitTag</a>"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1974630244\">Enemy_W3_Dinosaur_01_Ability07_HitTag</a>"
                        },
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Quantum",
                            "Damage": {
                              "operator": "Variables[0] ({[Skill07[0]]}) || RETURN",
                              "displayLines": "{[Skill07[0]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill07[0]]}"
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
                            "target": "{{Parameter Target}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Quantum",
                            "Damage": {
                              "operator": "Variables[0] ({[Skill07[2]]}) || Variables[1] (MonsterAssistBuff_IF) || MUL || RETURN",
                              "displayLines": "({[Skill07[2]]} * MonsterAssistBuff_IF)",
                              "constants": [],
                              "variables": [
                                "{[Skill07[2]]}",
                                "MonsterAssistBuff_IF"
                              ]
                            },
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Basic ATK"
                          }
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Player Team All}}"
                            },
                            "value1": "TeamCharacterCount",
                            "compareType": "=",
                            "value2": 1,
                            "conditions": {
                              "name": "Living State",
                              "state": "Mask_AliveOnly",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              }
                            }
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-1974630244\">Enemy_W3_Dinosaur_01_Ability07_HitTag</a>",
                            "invertCondition": true
                          }
                        ]
                      },
                      "ifTargetFound": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Hostile Entities(AOE)}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1974630244\">Enemy_W3_Dinosaur_01_Ability07_HitTag</a>"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1974630244\">Enemy_W3_Dinosaur_01_Ability07_HitTag</a>"
                        },
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Quantum",
                            "Damage": {
                              "operator": "Variables[0] ({[Skill07[0]]}) || RETURN",
                              "displayLines": "{[Skill07[0]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill07[0]]}"
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
                            "target": "{{Parameter Target}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Quantum",
                            "Damage": {
                              "operator": "Variables[0] ({[Skill07[2]]}) || Variables[1] (MonsterAssistBuff_IF) || MUL || RETURN",
                              "displayLines": "({[Skill07[2]]} * MonsterAssistBuff_IF)",
                              "constants": [],
                              "variables": [
                                "{[Skill07[2]]}",
                                "MonsterAssistBuff_IF"
                              ]
                            },
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Basic ATK"
                          }
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
                "value1": "Monster_W3_Dinosaur_01_Skill07_CurrentHitCount_i_Eff_Loop",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Player Team All}}"
                        },
                        "value1": "TeamCharacterCount",
                        "compareType": "=",
                        "value2": 1,
                        "conditions": {
                          "name": "Living State",
                          "state": "Mask_AliveOnly",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          }
                        }
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1974630244\">Enemy_W3_Dinosaur_01_Ability07_HitTag</a>",
                        "invertCondition": true
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1974630244\">Enemy_W3_Dinosaur_01_Ability07_HitTag</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1974630244\">Enemy_W3_Dinosaur_01_Ability07_HitTag</a>"
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Quantum",
                        "Damage": {
                          "operator": "Variables[0] ({[Skill07[0]]}) || RETURN",
                          "displayLines": "{[Skill07[0]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill07[0]]}"
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
                        "target": "{{Parameter Target}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Quantum",
                        "Damage": {
                          "operator": "Variables[0] ({[Skill07[2]]}) || Variables[1] (MonsterAssistBuff_IF) || MUL || RETURN",
                          "displayLines": "({[Skill07[2]]} * MonsterAssistBuff_IF)",
                          "constants": [],
                          "variables": [
                            "{[Skill07[2]]}",
                            "MonsterAssistBuff_IF"
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Basic ATK"
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
                "value1": "Monster_W3_Dinosaur_01_Skill07_CurrentHitCount_i_Eff_Loop",
                "compareType": "=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Player Team All}}"
                        },
                        "value1": "TeamCharacterCount",
                        "compareType": "=",
                        "value2": 1,
                        "conditions": {
                          "name": "Living State",
                          "state": "Mask_AliveOnly",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          }
                        }
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1974630244\">Enemy_W3_Dinosaur_01_Ability07_HitTag</a>",
                        "invertCondition": true
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1974630244\">Enemy_W3_Dinosaur_01_Ability07_HitTag</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1974630244\">Enemy_W3_Dinosaur_01_Ability07_HitTag</a>"
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Quantum",
                        "Damage": {
                          "operator": "Variables[0] ({[Skill07[0]]}) || RETURN",
                          "displayLines": "{[Skill07[0]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill07[0]]}"
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
                        "target": "{{Parameter Target}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Quantum",
                        "Damage": {
                          "operator": "Variables[0] ({[Skill07[2]]}) || Variables[1] (MonsterAssistBuff_IF) || MUL || RETURN",
                          "displayLines": "({[Skill07[2]]} * MonsterAssistBuff_IF)",
                          "constants": [],
                          "variables": [
                            "{[Skill07[2]]}",
                            "MonsterAssistBuff_IF"
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Basic ATK"
                      }
                    }
                  ]
                }
              ]
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "Monster_W3_Dinosaur_01_Skill07_CurrentHitCount_i",
              "context": "TargetEntity",
              "value": 1,
              "max": 100
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1974630244\">Enemy_W3_Dinosaur_01_Ability07_HitTag</a>",
          "stackData": [],
          "latentQueue": [
            "Monster_W3_Dinosaur_01_Skill07_DeltaTime",
            "EffRandomYaw",
            "Monster_W3_Dinosaur_01_Skill07_CurrentHitCount_i_Eff_Loop"
          ]
        }
      ]
    },
    "3013012_Monster_W3_Dinosaur_01_Ability07_Part01_IF": {
      "fileName": "3013012_Monster_W3_Dinosaur_01_Ability07_Part01_IF",
      "childAbilityList": [
        "3013012_Monster_W3_Dinosaur_01_Ability07_Camera",
        "3013012_Monster_W3_Dinosaur_01_Ability07_Camera_Servant",
        "3013012_Monster_W3_Dinosaur_01_Ability07_Part01_IF",
        "3013012_Monster_W3_Dinosaur_01_Ability07_Part02_IF"
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
          "ability": "Monster_W3_Dinosaur_01_Ability07_Part02_IF",
          "isTrigger": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Hostile Entities(AOE)}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": "<=",
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
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}",
        "targetIsVariable": true
      },
      "references": []
    },
    "3013012_Monster_W3_Dinosaur_01_PassiveAbilityInitiate": {
      "fileName": "3013012_Monster_W3_Dinosaur_01_PassiveAbilityInitiate",
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
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"207648995\">W3_Dinosaur_01_BattleScore1</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"224426614\">W3_Dinosaur_01_BattleScore2</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "3013012_Monster_W3_Dinosaur_01_AbilityP01": {
      "fileName": "3013012_Monster_W3_Dinosaur_01_AbilityP01",
      "childAbilityList": [
        "3013012_Monster_W3_Dinosaur_01_AbilityP01"
      ],
      "skillTrigger": "SkillP01",
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
          "modifier": "<a class=\"gModGreen\" id=\"532367944\">Standard_SuperArmorController</a>",
          "valuePerStack": {
            "MDF_SuperArmorDamageResistance": {
              "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
              "displayLines": "{[SkillP01[0]]}",
              "constants": [],
              "variables": [
                "{[SkillP01[0]]}"
              ]
            },
            "MDF_SuperArmorBreakActionDelay": {
              "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
              "displayLines": "{[SkillP01[1]]}",
              "constants": [],
              "variables": [
                "{[SkillP01[1]]}"
              ]
            },
            "MDF_SuperArmorBreakDamageTakenRatio": {
              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
              "displayLines": "{[SkillP01[2]]}",
              "constants": [],
              "variables": [
                "{[SkillP01[2]]}"
              ]
            }
          }
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "3013012_Monster_W3_Dinosaur_01_Ability07_Part02": {
      "fileName": "3013012_Monster_W3_Dinosaur_01_Ability07_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 3013013,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Memory Zone Meme \"Shell of Faded Rage\" (Bug)",
            "isBaseCompare": true
          },
          "passed": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "MDF_Growth_Layer",
              "modifierName": "<a class=\"gModGreen\" id=\"-340009422\">Enemy_W3_Dinosaur_01_Standard_Growth_Enhance</a>[<span class=\"descriptionNumberColor\">Scorchbone Inferno</span>]",
              "multiplier": 1
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "MDF_Growth_Layer",
              "modifierName": "<a class=\"gModGreen\" id=\"-1395319081\">Enemy_W3_Dinosaur_01_Standard_Growth</a>[<span class=\"descriptionNumberColor\">Obscure Blaze</span>]",
              "multiplier": 1
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Monster_W3_Dinosaur_01_Skill07_CurrentHitCount_i",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Monster_W3_Dinosaur_01_Skill07_HitCount",
          "value": {
            "operator": "Variables[0] (MDF_Growth_Layer) || Variables[1] ({[Skill07[1]]}) || ADD || RETURN",
            "displayLines": "(MDF_Growth_Layer + {[Skill07[1]]})",
            "constants": [],
            "variables": [
              "MDF_Growth_Layer",
              "{[Skill07[1]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Monster_W3_Dinosaur_01_Skill07_SumTime",
          "value": 0.3
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Monster_W3_Dinosaur_01_Skill07_DeltaTime",
          "value": {
            "operator": "Variables[0] (Monster_W3_Dinosaur_01_Skill07_HitCount) || Variables[1] (Monster_W3_Dinosaur_01_Skill07_SumTime) || Constants[0] (1) || SUB || DIV || RETURN",
            "displayLines": "(Monster_W3_Dinosaur_01_Skill07_HitCount / (Monster_W3_Dinosaur_01_Skill07_SumTime - 1))",
            "constants": [
              1
            ],
            "variables": [
              "Monster_W3_Dinosaur_01_Skill07_HitCount",
              "Monster_W3_Dinosaur_01_Skill07_SumTime"
            ]
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1974630244\">Enemy_W3_Dinosaur_01_Ability07_HitTag</a>"
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (Monster_W3_Dinosaur_01_Skill07_SumTime) || RETURN",
            "displayLines": "Monster_W3_Dinosaur_01_Skill07_SumTime",
            "constants": [],
            "variables": [
              "Monster_W3_Dinosaur_01_Skill07_SumTime"
            ]
          },
          "Event": [
            {
              "name": "Random Event",
              "odds": [
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
              ],
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "EffRandomYaw",
                  "value": 30
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "EffRandomYaw",
                  "value": 60
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "EffRandomYaw",
                  "value": 90
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "EffRandomYaw",
                  "value": 120
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "EffRandomYaw",
                  "value": 150
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "EffRandomYaw",
                  "value": 180
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "EffRandomYaw",
                  "value": 210
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "EffRandomYaw",
                  "value": 240
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "EffRandomYaw",
                  "value": 270
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "EffRandomYaw",
                  "value": 300
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "EffRandomYaw",
                  "value": 330
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "EffRandomYaw",
                  "value": 360
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Monster_W3_Dinosaur_01_Skill07_CurrentHitCount_i_Eff_Loop",
              "value": {
                "operator": "Variables[0] (Monster_W3_Dinosaur_01_Skill07_CurrentHitCount_i) || Constants[0] (3) || MOD || RETURN",
                "displayLines": "(Monster_W3_Dinosaur_01_Skill07_CurrentHitCount_i % 3)",
                "constants": [
                  3
                ],
                "variables": [
                  "Monster_W3_Dinosaur_01_Skill07_CurrentHitCount_i"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Monster_W3_Dinosaur_01_Skill07_CurrentHitCount_i_Eff_Loop",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Monster_W3_Dinosaur_01_Skill07_CurrentHitCount_i",
                    "compareType": "=",
                    "value2": 0
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
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Player Team All}}"
                            },
                            "value1": "TeamCharacterCount",
                            "compareType": "=",
                            "value2": 1,
                            "conditions": {
                              "name": "Living State",
                              "state": "Mask_AliveOnly",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              }
                            }
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-1974630244\">Enemy_W3_Dinosaur_01_Ability07_HitTag</a>",
                            "invertCondition": true
                          }
                        ]
                      },
                      "ifTargetFound": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Hostile Entities(AOE)}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1974630244\">Enemy_W3_Dinosaur_01_Ability07_HitTag</a>"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1974630244\">Enemy_W3_Dinosaur_01_Ability07_HitTag</a>"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Enemy ID",
                            "ID": 3013013,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "characterName": "Memory Zone Meme \"Shell of Faded Rage\" (Bug)",
                            "isBaseCompare": true
                          },
                          "passed": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Quantum",
                                "Damage": {
                                  "operator": "Variables[0] ({[Skill07[0]]}) || RETURN",
                                  "displayLines": "{[Skill07[0]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[Skill07[0]]}"
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
                                "target": "{{Targets Adjacent to Parameter Target}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Quantum",
                                "Damage": {
                                  "operator": "Variables[0] ({[Skill07[0]]}) || RETURN",
                                  "displayLines": "{[Skill07[0]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[Skill07[0]]}"
                                  ]
                                },
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Basic ATK",
                                "EnergyGainPercent": "100%"
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Quantum",
                                "Damage": {
                                  "operator": "Variables[0] ({[Skill07[0]]}) || RETURN",
                                  "displayLines": "{[Skill07[0]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[Skill07[0]]}"
                                  ]
                                },
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Basic ATK",
                                "EnergyGainPercent": "100%"
                              }
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Player Team All}}"
                            },
                            "value1": "TeamCharacterCount",
                            "compareType": "=",
                            "value2": 1,
                            "conditions": {
                              "name": "Living State",
                              "state": "Mask_AliveOnly",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              }
                            }
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-1974630244\">Enemy_W3_Dinosaur_01_Ability07_HitTag</a>",
                            "invertCondition": true
                          }
                        ]
                      },
                      "ifTargetFound": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Hostile Entities(AOE)}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1974630244\">Enemy_W3_Dinosaur_01_Ability07_HitTag</a>"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1974630244\">Enemy_W3_Dinosaur_01_Ability07_HitTag</a>"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Enemy ID",
                            "ID": 3013013,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "characterName": "Memory Zone Meme \"Shell of Faded Rage\" (Bug)",
                            "isBaseCompare": true
                          },
                          "passed": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Quantum",
                                "Damage": {
                                  "operator": "Variables[0] ({[Skill07[0]]}) || RETURN",
                                  "displayLines": "{[Skill07[0]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[Skill07[0]]}"
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
                                "target": "{{Targets Adjacent to Parameter Target}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Quantum",
                                "Damage": {
                                  "operator": "Variables[0] ({[Skill07[0]]}) || RETURN",
                                  "displayLines": "{[Skill07[0]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[Skill07[0]]}"
                                  ]
                                },
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Basic ATK",
                                "EnergyGainPercent": "100%"
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Quantum",
                                "Damage": {
                                  "operator": "Variables[0] ({[Skill07[0]]}) || RETURN",
                                  "displayLines": "{[Skill07[0]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[Skill07[0]]}"
                                  ]
                                },
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Basic ATK",
                                "EnergyGainPercent": "100%"
                              }
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
                "value1": "Monster_W3_Dinosaur_01_Skill07_CurrentHitCount_i_Eff_Loop",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Player Team All}}"
                        },
                        "value1": "TeamCharacterCount",
                        "compareType": "=",
                        "value2": 1,
                        "conditions": {
                          "name": "Living State",
                          "state": "Mask_AliveOnly",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          }
                        }
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1974630244\">Enemy_W3_Dinosaur_01_Ability07_HitTag</a>",
                        "invertCondition": true
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1974630244\">Enemy_W3_Dinosaur_01_Ability07_HitTag</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1974630244\">Enemy_W3_Dinosaur_01_Ability07_HitTag</a>"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Enemy ID",
                        "ID": 3013013,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "characterName": "Memory Zone Meme \"Shell of Faded Rage\" (Bug)",
                        "isBaseCompare": true
                      },
                      "passed": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Quantum",
                            "Damage": {
                              "operator": "Variables[0] ({[Skill07[0]]}) || RETURN",
                              "displayLines": "{[Skill07[0]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill07[0]]}"
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
                            "target": "{{Targets Adjacent to Parameter Target}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Quantum",
                            "Damage": {
                              "operator": "Variables[0] ({[Skill07[0]]}) || RETURN",
                              "displayLines": "{[Skill07[0]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill07[0]]}"
                              ]
                            },
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Basic ATK",
                            "EnergyGainPercent": "100%"
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Quantum",
                            "Damage": {
                              "operator": "Variables[0] ({[Skill07[0]]}) || RETURN",
                              "displayLines": "{[Skill07[0]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill07[0]]}"
                              ]
                            },
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Basic ATK",
                            "EnergyGainPercent": "100%"
                          }
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
                "value1": "Monster_W3_Dinosaur_01_Skill07_CurrentHitCount_i_Eff_Loop",
                "compareType": "=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Player Team All}}"
                        },
                        "value1": "TeamCharacterCount",
                        "compareType": "=",
                        "value2": 1,
                        "conditions": {
                          "name": "Living State",
                          "state": "Mask_AliveOnly",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          }
                        }
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1974630244\">Enemy_W3_Dinosaur_01_Ability07_HitTag</a>",
                        "invertCondition": true
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1974630244\">Enemy_W3_Dinosaur_01_Ability07_HitTag</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1974630244\">Enemy_W3_Dinosaur_01_Ability07_HitTag</a>"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Enemy ID",
                        "ID": 3013013,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "characterName": "Memory Zone Meme \"Shell of Faded Rage\" (Bug)",
                        "isBaseCompare": true
                      },
                      "passed": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Quantum",
                            "Damage": {
                              "operator": "Variables[0] ({[Skill07[0]]}) || RETURN",
                              "displayLines": "{[Skill07[0]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill07[0]]}"
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
                            "target": "{{Targets Adjacent to Parameter Target}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Quantum",
                            "Damage": {
                              "operator": "Variables[0] ({[Skill07[0]]}) || RETURN",
                              "displayLines": "{[Skill07[0]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill07[0]]}"
                              ]
                            },
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Basic ATK",
                            "EnergyGainPercent": "100%"
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Quantum",
                            "Damage": {
                              "operator": "Variables[0] ({[Skill07[0]]}) || RETURN",
                              "displayLines": "{[Skill07[0]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill07[0]]}"
                              ]
                            },
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Basic ATK",
                            "EnergyGainPercent": "100%"
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "Monster_W3_Dinosaur_01_Skill07_CurrentHitCount_i",
              "context": "TargetEntity",
              "value": 1,
              "max": 100
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1974630244\">Enemy_W3_Dinosaur_01_Ability07_HitTag</a>",
          "stackData": [],
          "latentQueue": [
            "Monster_W3_Dinosaur_01_Skill07_DeltaTime",
            "EffRandomYaw",
            "Monster_W3_Dinosaur_01_Skill07_CurrentHitCount_i_Eff_Loop"
          ]
        }
      ]
    },
    "3013012_Monster_W3_Dinosaur_01_Ability07_Part01": {
      "fileName": "3013012_Monster_W3_Dinosaur_01_Ability07_Part01",
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
          "ability": "Monster_W3_Dinosaur_01_Ability07_Part02",
          "isTrigger": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Hostile Entities(AOE)}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": "<=",
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
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "3013012_Monster_W3_Dinosaur_01_Ability06_Part02": {
      "fileName": "3013012_Monster_W3_Dinosaur_01_Ability06_Part02",
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
            "DamageType": "Quantum",
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
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 3013013,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Memory Zone Meme \"Shell of Faded Rage\" (Bug)",
            "isBaseCompare": true
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-340009422\">Enemy_W3_Dinosaur_01_Standard_Growth_Enhance</a>[<span class=\"descriptionNumberColor\">Scorchbone Inferno</span>]",
              "stackLimit": {
                "operator": "Variables[0] (UnusedUnderThisBase_273) || RETURN",
                "displayLines": "UnusedUnderThisBase_273",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_273"
                ]
              },
              "valuePerStack": {
                "MDF_MaxLayer": {
                  "operator": "Variables[0] (UnusedUnderThisBase_273) || RETURN",
                  "displayLines": "UnusedUnderThisBase_273",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_273"
                  ]
                }
              },
              "addStacksPerTrigger": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "<a class=\"gModGreen\" id=\"-340009422\">Enemy_W3_Dinosaur_01_Standard_Growth_Enhance</a>[<span class=\"descriptionNumberColor\">Scorchbone Inferno</span>]",
                "compareType": "<",
                "value2": {
                  "operator": "Variables[0] (UnusedUnderThisBase_273) || RETURN",
                  "displayLines": "UnusedUnderThisBase_273",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_273"
                  ]
                },
                "valueType": "Layer"
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
              "modifier": "<a class=\"gModGreen\" id=\"-1395319081\">Enemy_W3_Dinosaur_01_Standard_Growth</a>[<span class=\"descriptionNumberColor\">Obscure Blaze</span>]",
              "addStacksPerTrigger": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "<a class=\"gModGreen\" id=\"-1395319081\">Enemy_W3_Dinosaur_01_Standard_Growth</a>[<span class=\"descriptionNumberColor\">Obscure Blaze</span>]",
                "compareType": "<",
                "value2": 5,
                "valueType": "Layer"
              }
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "3013012_Monster_W3_Dinosaur_01_Ability06_Part01": {
      "fileName": "3013012_Monster_W3_Dinosaur_01_Ability06_Part01",
      "childAbilityList": [
        "3013012_Monster_W3_Dinosaur_01_Ability06_Camera",
        "3013012_Monster_W3_Dinosaur_01_Ability06_Part01",
        "3013012_Monster_W3_Dinosaur_01_Ability06_Part02"
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
          "ability": "Monster_W3_Dinosaur_01_Ability06_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "3013012_Monster_W3_Dinosaur_01_Ability04_Part02": {
      "fileName": "3013012_Monster_W3_Dinosaur_01_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 3013013,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Memory Zone Meme \"Shell of Faded Rage\" (Bug)",
            "isBaseCompare": true
          },
          "passed": [
            {
              "name": "Looped Event",
              "maxLoops": {
                "operator": "Variables[0] (UnusedUnderThisBase_274) || RETURN",
                "displayLines": "UnusedUnderThisBase_274",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_274"
                ]
              },
              "Event": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-340009422\">Enemy_W3_Dinosaur_01_Standard_Growth_Enhance</a>[<span class=\"descriptionNumberColor\">Scorchbone Inferno</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (UnusedUnderThisBase_273) || RETURN",
                    "displayLines": "UnusedUnderThisBase_273",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_273"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_MaxLayer": {
                      "operator": "Variables[0] (UnusedUnderThisBase_273) || RETURN",
                      "displayLines": "UnusedUnderThisBase_273",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_273"
                      ]
                    }
                  },
                  "addStacksPerTrigger": 1
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
                "value1": "<a class=\"gModGreen\" id=\"-340009422\">Enemy_W3_Dinosaur_01_Standard_Growth_Enhance</a>[<span class=\"descriptionNumberColor\">Scorchbone Inferno</span>]",
                "compareType": "<",
                "value2": {
                  "operator": "Variables[0] (UnusedUnderThisBase_273) || RETURN",
                  "displayLines": "UnusedUnderThisBase_273",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_273"
                  ]
                },
                "valueType": "Layer"
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
              "modifier": "<a class=\"gModGreen\" id=\"-1395319081\">Enemy_W3_Dinosaur_01_Standard_Growth</a>[<span class=\"descriptionNumberColor\">Obscure Blaze</span>]",
              "addStacksPerTrigger": 1
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1395319081\">Enemy_W3_Dinosaur_01_Standard_Growth</a>[<span class=\"descriptionNumberColor\">Obscure Blaze</span>]",
              "addStacksPerTrigger": 1
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1395319081\">Enemy_W3_Dinosaur_01_Standard_Growth</a>[<span class=\"descriptionNumberColor\">Obscure Blaze</span>]",
              "addStacksPerTrigger": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "<a class=\"gModGreen\" id=\"-1395319081\">Enemy_W3_Dinosaur_01_Standard_Growth</a>[<span class=\"descriptionNumberColor\">Obscure Blaze</span>]",
                "compareType": "<",
                "value2": 5,
                "valueType": "Layer"
              }
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "3013012_Monster_W3_Dinosaur_01_Ability04_Part01": {
      "fileName": "3013012_Monster_W3_Dinosaur_01_Ability04_Part01",
      "childAbilityList": [
        "3013012_Monster_W3_Dinosaur_01_Ability04_Camera",
        "3013012_Monster_W3_Dinosaur_01_Ability04_Part01",
        "3013012_Monster_W3_Dinosaur_01_Ability04_Part02"
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
          "ability": "Monster_W3_Dinosaur_01_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "3013012_Monster_W3_Dinosaur_01_Ability01_Part02": {
      "fileName": "3013012_Monster_W3_Dinosaur_01_Ability01_Part02",
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
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 3013013,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Memory Zone Meme \"Shell of Faded Rage\" (Bug)",
            "isBaseCompare": true
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-340009422\">Enemy_W3_Dinosaur_01_Standard_Growth_Enhance</a>[<span class=\"descriptionNumberColor\">Scorchbone Inferno</span>]",
              "stackLimit": {
                "operator": "Variables[0] (UnusedUnderThisBase_273) || RETURN",
                "displayLines": "UnusedUnderThisBase_273",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_273"
                ]
              },
              "valuePerStack": {
                "MDF_MaxLayer": {
                  "operator": "Variables[0] (UnusedUnderThisBase_273) || RETURN",
                  "displayLines": "UnusedUnderThisBase_273",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_273"
                  ]
                }
              },
              "addStacksPerTrigger": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "<a class=\"gModGreen\" id=\"-340009422\">Enemy_W3_Dinosaur_01_Standard_Growth_Enhance</a>[<span class=\"descriptionNumberColor\">Scorchbone Inferno</span>]",
                "compareType": "<",
                "value2": {
                  "operator": "Variables[0] (UnusedUnderThisBase_273) || RETURN",
                  "displayLines": "UnusedUnderThisBase_273",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_273"
                  ]
                },
                "valueType": "Layer"
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
              "modifier": "<a class=\"gModGreen\" id=\"-1395319081\">Enemy_W3_Dinosaur_01_Standard_Growth</a>[<span class=\"descriptionNumberColor\">Obscure Blaze</span>]",
              "addStacksPerTrigger": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "<a class=\"gModGreen\" id=\"-1395319081\">Enemy_W3_Dinosaur_01_Standard_Growth</a>[<span class=\"descriptionNumberColor\">Obscure Blaze</span>]",
                "compareType": "<",
                "value2": 5,
                "valueType": "Layer"
              }
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "3013012_Monster_W3_Dinosaur_01_Ability01_Part01": {
      "fileName": "3013012_Monster_W3_Dinosaur_01_Ability01_Part01",
      "childAbilityList": [
        "3013012_Monster_W3_Dinosaur_01_Ability01_Camera",
        "3013012_Monster_W3_Dinosaur_01_Ability01_Part01",
        "3013012_Monster_W3_Dinosaur_01_Ability01_Part02"
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
          "ability": "Monster_W3_Dinosaur_01_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      },
      "references": []
    },
    "3013012_Modifiers": {
      "fileName": "3013012_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__224426614\">W3_Dinosaur_01_BattleScore2</a>",
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
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Dinosaur_BreakCount"
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
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Dinosaur_BreakCount",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "relatedAchievements": [
                        {
                          "title": "Fight Fire With Fire",
                          "desc": "In a single battle, defeat Memory Zone Meme \"Shell of Faded Rage\" without causing Weakness Break",
                          "rarity": "Low"
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
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "Dinosaur_BreakCount",
                  "value": 1
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "AIFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__207648995\">W3_Dinosaur_01_BattleScore1</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Dinosaur_BreakModifierMaxCount"
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: Start [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "MaxLayer",
                  "variableName": "Dinosaur_BreakModifierMaxCount",
                  "modifierName": "<a class=\"gModGreen\" id=\"-1395319081\">Enemy_W3_Dinosaur_01_Standard_Growth</a>[<span class=\"descriptionNumberColor\">Obscure Blaze</span>]",
                  "multiplier": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "<a class=\"gModGreen\" id=\"-1395319081\">Enemy_W3_Dinosaur_01_Standard_Growth</a>[<span class=\"descriptionNumberColor\">Obscure Blaze</span>]",
                    "compareType": "=",
                    "value2": {
                      "operator": "Variables[0] (Dinosaur_BreakModifierMaxCount) || RETURN",
                      "displayLines": "Dinosaur_BreakModifierMaxCount",
                      "constants": [],
                      "variables": [
                        "Dinosaur_BreakModifierMaxCount"
                      ]
                    },
                    "valueType": "Layer"
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "relatedAchievements": [
                        {
                          "title": "Purging Heatiness",
                          "desc": "Clear the full stacks of Obscure Blaze on the Memory Zone Meme \"Shell of Faded Rage\" during a Weakness Break",
                          "rarity": "Low"
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
            "AIFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-340009422\">Enemy_W3_Dinosaur_01_Standard_Growth_Enhance</a>[<span class=\"descriptionNumberColor\">Scorchbone Inferno</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                "Modifier Deletes Itself",
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "AIFlag",
                  "value": 1
                }
              ]
            }
          ],
          "stackData": [
            "MDF_MaxLayer"
          ],
          "latentQueue": [],
          "description": "Each stack causes \"Bonepiercing Odium\" to additionally deal DMG 1 time, stacking up to <span class=\"descriptionNumberColor\">MDF_MaxLayer</span> time(s). Weaken is dispelled when Broken.",
          "type": "Buff",
          "effectName": "Scorchbone Inferno",
          "statusName": "Scorchbone Inferno"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1395319081\">Enemy_W3_Dinosaur_01_Standard_Growth</a>[<span class=\"descriptionNumberColor\">Obscure Blaze</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                "Modifier Deletes Itself",
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "AIFlag",
                  "value": 1
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "Each stack causes Bonepiercing Odium to deal DMG 1 additional time, up to 5 times. This state will be dispelled after being Weakness Broken.",
          "type": "Buff",
          "effectName": "Obscure Blaze",
          "statusName": "Obscure Blaze",
          "stackLimit": 5
        }
      ],
      "references": []
    }
  }
}