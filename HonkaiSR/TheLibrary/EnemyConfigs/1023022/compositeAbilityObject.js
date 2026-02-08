const compositeAbilityObject = {
  "fullCharacterName": 1023022,
  "trimCharacterName": 1023022,
  "abilityList": [
    "1023022_Monster_W1_Mecha03_01_Ability11_Part02",
    "1023022_Monster_W1_Mecha03_01_Ability11_Part01",
    "1023022_Monster_W1_Mecha03_01_Ability10_Part02",
    "1023022_Monster_W1_Mecha03_01_Ability10_Part01",
    "1023022_Monster_W1_Mecha03_01_Ability08_Part02",
    "1023022_Monster_W1_Mecha03_01_Ability08_Part01",
    "1023022_Monster_W1_Mecha03_01_Ability07_Part02",
    "1023022_Monster_W1_Mecha03_01_Ability07_Part01",
    "1023022_Monster_W1_Mecha03_01_Ability06_Part02",
    "1023022_Monster_W1_Mecha03_01_Ability06_Part01",
    "1023022_Monster_W1_Mecha03_01_Ability05_Part02",
    "1023022_Monster_W1_Mecha03_01_Ability05_Part01",
    "1023022_Monster_W1_Mecha03_01_Ability09_Part02",
    "1023022_Monster_W1_Mecha03_01_Ability09_Part01",
    "1023022_Monster_W1_Mecha03_01_Ability01_Part02",
    "1023022_Monster_W1_Mecha03_01_Ability01_Part01",
    "1023022_Monster_W1_Mecha03_01_Passive01",
    "1023022_Modifiers"
  ],
  "abilityObject": {
    "1023022_Monster_W1_Mecha03_01_Ability11_Part02": {
      "fileName": "1023022_Monster_W1_Mecha03_01_Ability11_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "SummonMonsterEatCount",
            "compareType": "=",
            "value2": 1
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "SummonMonsterEatCount",
                "compareType": "=",
                "value2": 2
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "SummonMonsterEatCount",
                    "compareType": "=",
                    "value2": 3
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "SummonMonsterEatCount",
                        "compareType": "=",
                        "value2": 4
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill11[0]]}) || RETURN",
              "displayLines": "{[Skill11[0]]}",
              "constants": [],
              "variables": [
                "{[Skill11[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "SummonMonsterEatCount",
            "compareType": ">",
            "value2": 1
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "operator": "Variables[0] ({[Skill11[1]]}) || RETURN",
                  "displayLines": "{[Skill11[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill11[1]]}"
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
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "SummonMonsterEatCount",
            "compareType": ">",
            "value2": 2
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "operator": "Variables[0] ({[Skill11[2]]}) || RETURN",
                  "displayLines": "{[Skill11[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill11[2]]}"
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
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "SummonMonsterEatCount",
            "compareType": ">",
            "value2": 3
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "operator": "Variables[0] ({[Skill11[3]]}) || RETURN",
                  "displayLines": "{[Skill11[3]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill11[3]]}"
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
        "Trigger: Attack End",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1137901449\">Monster_W1_Mecha03_01_Frozen</a>[<span class=\"descriptionNumberColor\">Deep Freeze</span>]",
          "baseChance": 1,
          "stackLimit": {
            "operator": "Variables[0] ({[Skill06[3]]}) || RETURN",
            "displayLines": "{[Skill06[3]]}",
            "constants": [],
            "variables": [
              "{[Skill06[3]]}"
            ]
          },
          "valuePerStack": {
            "MDF_IceResistanceRatio_PerLayer": {
              "operator": "Variables[0] ({[Skill06[1]]}) || RETURN",
              "displayLines": "{[Skill06[1]]}",
              "constants": [],
              "variables": [
                "{[Skill06[1]]}"
              ]
            },
            "MDF_SpeedAddedDelta_PerLayer": {
              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
              "displayLines": "{[Skill06[0]]}",
              "constants": [],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "MDF_MaxLayer": {
              "operator": "Variables[0] ({[Skill06[3]]}) || RETURN",
              "displayLines": "{[Skill06[3]]}",
              "constants": [],
              "variables": [
                "{[Skill06[3]]}"
              ]
            }
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
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1023022_Monster_W1_Mecha03_01_Ability11_Part01": {
      "fileName": "1023022_Monster_W1_Mecha03_01_Ability11_Part01",
      "childAbilityList": [
        "1023022_Monster_W1_Mecha03_01_Ability11_Camera",
        "1023022_Monster_W1_Mecha03_01_Ability11_Part01",
        "1023022_Monster_W1_Mecha03_01_Ability11_Part02"
      ],
      "skillTrigger": "Skill11",
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
          "ability": "Monster_W1_Mecha03_01_Ability11_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "SummonMonsterEatCount",
            "compareType": ">",
            "value2": 1
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "SummonMonsterEatCount",
                "compareType": ">",
                "value2": 2
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "SummonMonsterEatCount",
                    "compareType": ">",
                    "value2": 3
                  }
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "1023022_Monster_W1_Mecha03_01_Ability10_Part02": {
      "fileName": "1023022_Monster_W1_Mecha03_01_Ability10_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "SummonMonsterEatCount",
          "value": 0
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "searchRandom": true,
          "ignoreParallelWarning": true,
          "ifTargetFound": [
            "Ability Start",
            {
              "name": "Mark Entity For Immediate Death",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "SummonMonsterEatCount",
              "value": {
                "operator": "Variables[0] (SummonMonsterEatCount) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(SummonMonsterEatCount + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "SummonMonsterEatCount"
                ]
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
          "modifier": "<a class=\"gModGreen\" id=\"-1705391722\">Monster_W1_Mecha03_01_Rage</a>[<span class=\"descriptionNumberColor\">Surpass</span>]",
          "duration": 1,
          "valuePerStack": {
            "MDF_AttackAddedRatio": {
              "operator": "Variables[0] ({[Skill10[0]]}) || RETURN",
              "displayLines": "{[Skill10[0]]}",
              "constants": [],
              "variables": [
                "{[Skill10[0]]}"
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
          "modifier": "<a class=\"gModGreen\" id=\"-800128779\">Monster_W1_Mecha03_01_AOECount</a>[<span class=\"descriptionNumberColor\">Bitterly Cold</span>]",
          "duration": 1,
          "addStacksPerTrigger": {
            "operator": "Variables[0] (SummonMonsterEatCount) || RETURN",
            "displayLines": "SummonMonsterEatCount",
            "constants": [],
            "variables": [
              "SummonMonsterEatCount"
            ]
          }
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1023022_Monster_W1_Mecha03_01_Ability10_Part01": {
      "fileName": "1023022_Monster_W1_Mecha03_01_Ability10_Part01",
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
          "ability": "Monster_W1_Mecha03_01_Ability10_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1023022_Monster_W1_Mecha03_01_Ability08_Part02": {
      "fileName": "1023022_Monster_W1_Mecha03_01_Ability08_Part02",
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
              "target": "{{All Team Members}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": "<=",
            "value2": 1
          }
        },
        "Ability Start",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2015116315\">Monster_W1_Mecha03_01_Overheat</a>[<span class=\"descriptionNumberColor\">DEF Reduction</span>]",
          "valuePerStack": {
            "MDF_DefenceAddedRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_39) || RETURN",
              "displayLines": "UnusedUnderThisBase_39",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_39"
              ]
            }
          }
        },
        {
          "name": "Achievement",
          "matchTags": true,
          "relatedAchievements": [
            {
              "title": "Regurgitation",
              "desc": "Cause Frigid Prowler to fail to use Devour Otherling",
              "rarity": "Mid"
            }
          ]
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase1"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1023022_Monster_W1_Mecha03_01_Ability08_Part01": {
      "fileName": "1023022_Monster_W1_Mecha03_01_Ability08_Part01",
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
          "ability": "Monster_W1_Mecha03_01_Ability08_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1023022_Monster_W1_Mecha03_01_Ability07_Part02": {
      "fileName": "1023022_Monster_W1_Mecha03_01_Ability07_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 1023021,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Frigid Prowler (Bug)"
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "SummonMonsterEatCount",
              "value": 0
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "searchRandom": true,
              "ifTargetFound": [
                "Ability Start",
                {
                  "name": "Mark Entity For Immediate Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                },
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "SummonMonsterEatCount",
                  "value": {
                    "operator": "Variables[0] (SummonMonsterEatCount) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(SummonMonsterEatCount + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "SummonMonsterEatCount"
                    ]
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
              "modifier": "<a class=\"gModGreen\" id=\"-1705391722\">Monster_W1_Mecha03_01_Rage</a>[<span class=\"descriptionNumberColor\">Surpass</span>]",
              "duration": 1,
              "valuePerStack": {
                "MDF_AttackAddedRatio": {
                  "operator": "Variables[0] (UnusedUnderThisBase_27) || RETURN",
                  "displayLines": "UnusedUnderThisBase_27",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_27"
                  ]
                }
              }
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
              "ifTargetFound": [
                "Ability Start",
                {
                  "name": "Mark Entity For Immediate Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                },
                {
                  "name": "Force Entity Death",
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
              "modifier": "<a class=\"gModGreen\" id=\"-1705391722\">Monster_W1_Mecha03_01_Rage</a>[<span class=\"descriptionNumberColor\">Surpass</span>]",
              "duration": 1,
              "valuePerStack": {
                "MDF_AttackAddedRatio": {
                  "operator": "Variables[0] (UnusedUnderThisBase_27) || RETURN",
                  "displayLines": "UnusedUnderThisBase_27",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_27"
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
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1421560478\">Monster_W1_Mecha03_01_Sign</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
          "counter": 1
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1023022_Monster_W1_Mecha03_01_Ability07_Part01": {
      "fileName": "1023022_Monster_W1_Mecha03_01_Ability07_Part01",
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
          "ability": "Monster_W1_Mecha03_01_Ability07_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1023022_Monster_W1_Mecha03_01_Ability06_Part02": {
      "fileName": "1023022_Monster_W1_Mecha03_01_Ability06_Part02",
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
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[2]]}) || Constants[0] (0.15) || MUL || RETURN",
              "displayLines": "({[Skill06[2]]} * 0.15)",
              "constants": [
                0.15
              ],
              "variables": [
                "{[Skill06[2]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "15%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[2]]}) || Constants[0] (0.15) || MUL || RETURN",
              "displayLines": "({[Skill06[2]]} * 0.15)",
              "constants": [
                0.15
              ],
              "variables": [
                "{[Skill06[2]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "15%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[2]]}) || Constants[0] (0.15) || MUL || RETURN",
              "displayLines": "({[Skill06[2]]} * 0.15)",
              "constants": [
                0.15
              ],
              "variables": [
                "{[Skill06[2]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "15%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[2]]}) || Constants[0] (0.15) || MUL || RETURN",
              "displayLines": "({[Skill06[2]]} * 0.15)",
              "constants": [
                0.15
              ],
              "variables": [
                "{[Skill06[2]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "15%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[2]]}) || Constants[0] (0.4) || MUL || RETURN",
              "displayLines": "({[Skill06[2]]} * 0.4)",
              "constants": [
                0.4
              ],
              "variables": [
                "{[Skill06[2]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "40%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1137901449\">Monster_W1_Mecha03_01_Frozen</a>[<span class=\"descriptionNumberColor\">Deep Freeze</span>]",
          "baseChance": 1,
          "stackLimit": {
            "operator": "Variables[0] ({[Skill06[3]]}) || RETURN",
            "displayLines": "{[Skill06[3]]}",
            "constants": [],
            "variables": [
              "{[Skill06[3]]}"
            ]
          },
          "valuePerStack": {
            "MDF_IceResistanceRatio_PerLayer": {
              "operator": "Variables[0] ({[Skill06[1]]}) || RETURN",
              "displayLines": "{[Skill06[1]]}",
              "constants": [],
              "variables": [
                "{[Skill06[1]]}"
              ]
            },
            "MDF_SpeedAddedDelta_PerLayer": {
              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
              "displayLines": "{[Skill06[0]]}",
              "constants": [],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "MDF_MaxLayer": {
              "operator": "Variables[0] ({[Skill06[3]]}) || RETURN",
              "displayLines": "{[Skill06[3]]}",
              "constants": [],
              "variables": [
                "{[Skill06[3]]}"
              ]
            }
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
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1023022_Monster_W1_Mecha03_01_Ability06_Part01": {
      "fileName": "1023022_Monster_W1_Mecha03_01_Ability06_Part01",
      "childAbilityList": [
        "1023022_Monster_W1_Mecha03_01_Ability06_Camera",
        "1023022_Monster_W1_Mecha03_01_Ability06_Part01",
        "1023022_Monster_W1_Mecha03_01_Ability06_Part02"
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
          "ability": "Monster_W1_Mecha03_01_Ability06_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1023022_Monster_W1_Mecha03_01_Ability05_Part02": {
      "fileName": "1023022_Monster_W1_Mecha03_01_Ability05_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Create Enemies",
          "delayPercent": 0.5,
          "enemyList": [
            {
              "name": "Create Enemy from Custom",
              "value": "Monster_SummonID",
              "summonLocation": "BeforeCaster"
            },
            {
              "name": "Create Enemy from Custom",
              "value": "Monster_SummonID",
              "summonLocation": "AfterCaster"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 1023021,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Frigid Prowler (Bug)"
          },
          "passed": [
            {
              "name": "Create Enemies",
              "delayPercent": 1.2,
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "Monster_SummonID",
                  "summonLocation": "First"
                },
                {
                  "name": "Create Enemy from Custom",
                  "value": "Monster_SummonID",
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
          "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
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
            "modifier": "<a class=\"gModGreen\" id=\"375705017\">Monster_W1_Mecha03_01_SummonMark</a>",
            "invertCondition": true
          }
        },
        "Ability Start",
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
            "modifier": "<a class=\"gModGreen\" id=\"375705017\">Monster_W1_Mecha03_01_SummonMark</a>",
            "invertCondition": true
          }
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
            "modifier": "<a class=\"gModGreen\" id=\"375705017\">Monster_W1_Mecha03_01_SummonMark</a>",
            "invertCondition": true
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"375705017\">Monster_W1_Mecha03_01_SummonMark</a>"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1023022_Monster_W1_Mecha03_01_Ability05_Part01": {
      "fileName": "1023022_Monster_W1_Mecha03_01_Ability05_Part01",
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
          "ability": "Monster_W1_Mecha03_01_Ability05_Part02",
          "isTrigger": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 1023021,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Frigid Prowler (Bug)"
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
    "1023022_Monster_W1_Mecha03_01_Ability09_Part02": {
      "fileName": "1023022_Monster_W1_Mecha03_01_Ability09_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Looped Event",
          "maxLoops": 10,
          "Event": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "operator": "Variables[0] (UnusedUnderThisBase_38) || Constants[0] (0.1) || MUL || RETURN",
                  "displayLines": "(UnusedUnderThisBase_38 * 0.1)",
                  "constants": [
                    0.1
                  ],
                  "variables": [
                    "UnusedUnderThisBase_38"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "10%"
              }
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target List}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1137901449\">Monster_W1_Mecha03_01_Frozen</a>[<span class=\"descriptionNumberColor\">Deep Freeze</span>]",
          "baseChance": 1,
          "stackLimit": {
            "operator": "Variables[0] ({[Skill06[3]]}) || RETURN",
            "displayLines": "{[Skill06[3]]}",
            "constants": [],
            "variables": [
              "{[Skill06[3]]}"
            ]
          },
          "valuePerStack": {
            "MDF_IceResistanceRatio_PerLayer": {
              "operator": "Variables[0] ({[Skill06[1]]}) || RETURN",
              "displayLines": "{[Skill06[1]]}",
              "constants": [],
              "variables": [
                "{[Skill06[1]]}"
              ]
            },
            "MDF_SpeedAddedDelta_PerLayer": {
              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
              "displayLines": "{[Skill06[0]]}",
              "constants": [],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "MDF_MaxLayer": {
              "operator": "Variables[0] ({[Skill06[3]]}) || RETURN",
              "displayLines": "{[Skill06[3]]}",
              "constants": [],
              "variables": [
                "{[Skill06[3]]}"
              ]
            }
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1705391722\">Monster_W1_Mecha03_01_Rage</a>[<span class=\"descriptionNumberColor\">Surpass</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1421560478\">Monster_W1_Mecha03_01_Sign</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
          "onlyRemoveOwnersInstance": true
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase1"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1023022_Monster_W1_Mecha03_01_Ability09_Part01": {
      "fileName": "1023022_Monster_W1_Mecha03_01_Ability09_Part01",
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
          "ability": "Monster_W1_Mecha03_01_Ability09_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "references": []
    },
    "1023022_Monster_W1_Mecha03_01_Ability01_Part02": {
      "fileName": "1023022_Monster_W1_Mecha03_01_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Looped Event",
          "maxLoops": 5,
          "Event": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "operator": "Variables[0] (UnusedUnderThisBase_3) || Constants[0] (0.2) || MUL || RETURN",
                  "displayLines": "(UnusedUnderThisBase_3 * 0.2)",
                  "constants": [
                    0.2
                  ],
                  "variables": [
                    "UnusedUnderThisBase_3"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "20%"
              }
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase1"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1023022_Monster_W1_Mecha03_01_Ability01_Part01": {
      "fileName": "1023022_Monster_W1_Mecha03_01_Ability01_Part01",
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
          "ability": "Monster_W1_Mecha03_01_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "references": []
    },
    "1023022_Monster_W1_Mecha03_01_Passive01": {
      "fileName": "1023022_Monster_W1_Mecha03_01_Passive01",
      "childAbilityList": [
        "1023022_Monster_W1_Mecha03_01_Passive01"
      ],
      "skillTrigger": "PassiveSkill01",
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
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-923896178\">Monster_W1_Mecha03_01_MureHitFly</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"703130049\">Monster_W1_Mecha03_01_AIChange</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1952827515\">Monster_W1_Mecha03_01_EffectCommon</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__703130049\">Monster_W1_Mecha03_01_AIChange</a>",
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1421560478\">Monster_W1_Mecha03_01_Sign</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
                  "onlyRemoveOwnersInstance": true
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
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Monster_W1_Mecha03_01_AICounter_01",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-923896178\">Monster_W1_Mecha03_01_MureHitFly</a>",
          "modifierFlags": [
            "MuteHitFly"
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1952827515\">Monster_W1_Mecha03_01_EffectCommon</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
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
        }
      ]
    },
    "1023022_Modifiers": {
      "fileName": "1023022_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1421560478\">Monster_W1_Mecha03_01_Sign</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "AttackSign"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "%CasterName will focus attacks on this target.",
          "type": "Other",
          "effectName": "Lock On",
          "statusName": "Lock On"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1705391722\">Monster_W1_Mecha03_01_Rage</a>[<span class=\"descriptionNumberColor\">Surpass</span>]",
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
                  "modifier": "<a class=\"gModGreen\" id=\"643096962\">Monster_W1_Mecha03_01_Effect</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
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
                  "modifier": "<a class=\"gModGreen\" id=\"643096962\">Monster_W1_Mecha03_01_Effect</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AttackAddedRatio) || RETURN",
                    "displayLines": "MDF_AttackAddedRatio",
                    "constants": [],
                    "variables": [
                      "MDF_AttackAddedRatio"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [
            "MDF_AttackAddedRatio"
          ],
          "latentQueue": [],
          "description": "ATK +<span class=\"descriptionNumberColor\">MDF_AttackAddedRatio</span>.",
          "type": "Buff",
          "effectName": "ATK Greatly Boosted",
          "statusName": "Surpass",
          "duration": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__643096962\">Monster_W1_Mecha03_01_Effect</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1790658643\">Monster_W1_Mecha03_01_Effect_Fail</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-168738441\">Monster_W1_Mecha03_01_Charge</a>",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (Modifier_AttackAddedRatio) || RETURN",
                    "displayLines": "Modifier_AttackAddedRatio",
                    "constants": [],
                    "variables": [
                      "Modifier_AttackAddedRatio"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "duration": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-272775798\">Monster_W1_Mecha03_01_Bonus</a>",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AttackAddedRatio) || RETURN",
                    "displayLines": "MDF_AttackAddedRatio",
                    "constants": [],
                    "variables": [
                      "MDF_AttackAddedRatio"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "duration": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2015116315\">Monster_W1_Mecha03_01_Overheat</a>[<span class=\"descriptionNumberColor\">DEF Reduction</span>]",
          "execute": [
            {
              "eventTrigger": "Action Choice Window [Owner]",
              "execute": [
                "Modifier Deletes Itself"
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
                    "operator": "Constants[0] (0) || Variables[0] (MDF_DefenceAddedRatio) || SUB || RETURN",
                    "displayLines": "(0 - MDF_DefenceAddedRatio)",
                    "constants": [
                      0
                    ],
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
          "description": "DEF -<span class=\"descriptionNumberColor\">MDF_DefenceAddedRatio</span>.",
          "type": "Debuff",
          "effectName": "DEF Reduction",
          "statusName": "DEF Reduction",
          "duration": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1137901449\">Monster_W1_Mecha03_01_Frozen</a>[<span class=\"descriptionNumberColor\">Deep Freeze</span>]",
          "stackType": "Replace",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
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
                  "name": "Define Custom Variable",
                  "variableName": "MDF_IceResistanceRatio",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (MDF_IceResistanceRatio_PerLayer) || Variables[1] (ModifierLayers) || MUL || SUB || RETURN",
                    "displayLines": "(0 - (MDF_IceResistanceRatio_PerLayer * ModifierLayers))",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "MDF_IceResistanceRatio_PerLayer",
                      "ModifierLayers"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceIceBonus</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_IceResistanceRatio) || RETURN",
                    "displayLines": "MDF_IceResistanceRatio",
                    "constants": [],
                    "variables": [
                      "MDF_IceResistanceRatio"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_SpeedAddedDelta",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (MDF_SpeedAddedDelta_PerLayer) || Variables[1] (ModifierLayers) || MUL || SUB || RETURN",
                    "displayLines": "(0 - (MDF_SpeedAddedDelta_PerLayer * ModifierLayers))",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "MDF_SpeedAddedDelta_PerLayer",
                      "ModifierLayers"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_SpeedAddedDelta) || RETURN",
                    "displayLines": "MDF_SpeedAddedDelta",
                    "constants": [],
                    "variables": [
                      "MDF_SpeedAddedDelta"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_IceResistanceRatio_PerLayer",
            "MDF_SpeedAddedDelta_PerLayer",
            "MDF_MaxLayer"
          ],
          "latentQueue": [],
          "description": "Reduces Ice RES by <span class=\"descriptionNumberColor\">MDF_IceResistanceRatio_PerLayer</span> and SPD by <span class=\"descriptionNumberColor\">MDF_SpeedAddedDelta_PerLayer</span>. Can stack up to <span class=\"descriptionNumberColor\">MDF_MaxLayer</span> time(s).",
          "type": "Debuff",
          "effectName": "Deep Freeze",
          "statusName": "Deep Freeze",
          "stackLimit": 5,
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
          "for": "<a class=\"gModGreen\" id=\"mod__1506657871\">Monster_W1_Mecha03_01_Attack</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__488136598\">Monster_W1_Mecha03_01_Shield</a>",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessReductionRES</span>&nbsp;",
                  "value": 0.5
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1053325166\">Monster_W1_Mecha03_01_Armor</a>",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (Modifier_DefenceAddedRatio) || RETURN",
                    "displayLines": "Modifier_DefenceAddedRatio",
                    "constants": [],
                    "variables": [
                      "Modifier_DefenceAddedRatio"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__375705017\">Monster_W1_Mecha03_01_SummonMark</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-800128779\">Monster_W1_Mecha03_01_AOECount</a>[<span class=\"descriptionNumberColor\">Bitterly Cold</span>]",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "ModifierLayers",
                  "multiplier": 1
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "Unleashes <span class=\"descriptionNumberColor\">ModifierLayers</span> wave(s) of Blazing Freeze in the next action.",
          "type": "Other",
          "statusName": "Bitterly Cold",
          "stackLimit": 4,
          "addStacksPerTrigger": {
            "operator": "Variables[0] (ModifierStackLayer) || RETURN",
            "displayLines": "ModifierStackLayer",
            "constants": [],
            "variables": [
              "ModifierStackLayer"
            ]
          }
        }
      ],
      "references": []
    }
  }
}