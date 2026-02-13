const compositeAbilityObject = {
  "fullCharacterName": 4064010,
  "trimCharacterName": 4064010,
  "abilityList": [
    "4064010_Monster_W4_Serpent_01_Ability07_Part02",
    "4064010_Monster_W4_Serpent_01_Ability07_Part01",
    "4064010_Monster_W4_Serpent_01_Ability06_3_Part02",
    "4064010_Monster_W4_Serpent_01_Ability06_3_Part01",
    "4064010_BattleEvent_W4_Serpent_01_Part01",
    "4064010_BattleEvent_W4_Serpent_01_EnterReady",
    "4064010_Monster_W4_Serpent_01_Ability06_Part02",
    "4064010_Monster_W4_Serpent_01_Ability06_Part01",
    "4064010_Monster_W4_Serpent_01_Ability05_Part02",
    "4064010_Monster_W4_Serpent_01_Ability05_Part01",
    "4064010_Monster_W4_Serpent_01_Ability04_Part03",
    "4064010_Monster_W4_Serpent_01_Ability04_Part02",
    "4064010_Monster_W4_Serpent_01_Ability04_Part01",
    "4064010_Monster_W4_Serpent_01_Ability03_Part02",
    "4064010_Monster_W4_Serpent_01_Ability03_Part01",
    "4064010_Monster_W4_Serpent_01_SummonNoDeathrattle",
    "4064010_Monster_W4_Serpent_01_SummonDeathrattle",
    "4064010_Monster_W4_Serpent_01_Ability02_Part02",
    "4064010_Monster_W4_Serpent_01_Ability02_Part01",
    "4064010_Monster_W4_Serpent_01_Ability01_Part03",
    "4064010_Monster_W4_Serpent_01_Ability01_Part02",
    "4064010_Monster_W4_Serpent_01_Ability01_Part01",
    "4064010_Monster_W4_Serpent_01_ChangePhase1",
    "4064010_Monster_W4_Serpent_01_PassiveAbility",
    "4064010_Monster_W4_Serpent_01_PassiveAbility_BGM",
    "4064010_Modifiers",
    "4064010_BE_BattleEvents"
  ],
  "abilityObject": {
    "4064010_Monster_W4_Serpent_01_Ability07_Part02": {
      "fileName": "4064010_Monster_W4_Serpent_01_Ability07_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-2034245301\">Enemy_W4_Serpent_01_Charge02_Target</a>[<span class=\"descriptionNumberColor\">First Offense</span>]"
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-2034245301\">Enemy_W4_Serpent_01_Charge02_Target</a>[<span class=\"descriptionNumberColor\">First Offense</span>]",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target List}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"839686414\">Enemy_W4_Serpent_01_Charge02_Target_Sub</a>[<span class=\"descriptionNumberColor\">Accomplice</span>]",
                  "casterAssign": "TargetSelf"
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
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-2034245301\">Enemy_W4_Serpent_01_Charge02_Target</a>[<span class=\"descriptionNumberColor\">First Offense</span>]"
              },
              "ifTargetFound": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-2034245301\">Enemy_W4_Serpent_01_Charge02_Target</a>[<span class=\"descriptionNumberColor\">First Offense</span>]",
                    "invertCondition": true
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target List}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"839686414\">Enemy_W4_Serpent_01_Charge02_Target_Sub</a>[<span class=\"descriptionNumberColor\">Accomplice</span>]",
                      "casterAssign": "TargetSelf"
                    }
                  ]
                }
              ],
              "noTargetFound": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2034245301\">Enemy_W4_Serpent_01_Charge02_Target</a>[<span class=\"descriptionNumberColor\">First Offense</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"839686414\">Enemy_W4_Serpent_01_Charge02_Target_Sub</a>[<span class=\"descriptionNumberColor\">Accomplice</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2034245301\">Enemy_W4_Serpent_01_Charge02_Target</a>[<span class=\"descriptionNumberColor\">First Offense</span>]",
                  "casterAssign": "TargetSelf"
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-2034245301\">Enemy_W4_Serpent_01_Charge02_Target</a>[<span class=\"descriptionNumberColor\">First Offense</span>]",
                    "invertCondition": true
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target List}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"839686414\">Enemy_W4_Serpent_01_Charge02_Target_Sub</a>[<span class=\"descriptionNumberColor\">Accomplice</span>]",
                      "casterAssign": "TargetSelf"
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
            "target": "{{Hostile Entities(AOE)}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"839686414\">Enemy_W4_Serpent_01_Charge02_Target_Sub</a>[<span class=\"descriptionNumberColor\">Accomplice</span>]"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-2034245301\">Enemy_W4_Serpent_01_Charge02_Target</a>[<span class=\"descriptionNumberColor\">First Offense</span>]"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-2034245301\">Enemy_W4_Serpent_01_Charge02_Target</a>[<span class=\"descriptionNumberColor\">First Offense</span>]"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-2034245301\">Enemy_W4_Serpent_01_Charge02_Target</a>[<span class=\"descriptionNumberColor\">First Offense</span>]"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"839686414\">Enemy_W4_Serpent_01_Charge02_Target_Sub</a>[<span class=\"descriptionNumberColor\">Accomplice</span>]"
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "operator": "Variables[0] ({[Skill07[1]]}) || RETURN",
                  "displayLines": "{[Skill07[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill07[1]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"839686414\">Enemy_W4_Serpent_01_Charge02_Target_Sub</a>[<span class=\"descriptionNumberColor\">Accomplice</span>]"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-2034245301\">Enemy_W4_Serpent_01_Charge02_Target</a>[<span class=\"descriptionNumberColor\">First Offense</span>]"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1221492183\">Enemy_W2_Beast01_04_AbilityP02_GoldBlood_DamageCalculator</a>"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Imaginary",
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
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2034245301\">Enemy_W4_Serpent_01_Charge02_Target</a>[<span class=\"descriptionNumberColor\">First Offense</span>]"
            },
            "Trigger: Attack End",
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1779981114\">Enemy_W2_Beast01_04_AbilityP02_GoldBlood_BeHit</a>"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1221492183\">Enemy_W2_Beast01_04_AbilityP02_GoldBlood_DamageCalculator</a>",
                  "variable": "_TotalDamage",
                  "target2": null,
                  "variable2": "TargetTotalDamage"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1128925615\">Enemy_W2_Beast01_04_AbilityP02_GoldBlood_DOT</a>[<span class=\"descriptionNumberColor\">Hemotort Corruption</span>]",
                  "valuePerStack": {
                    "MDF_DamageValue": {
                      "operator": "Variables[0] (TargetTotalDamage) || Variables[1] ({[Skill07[2]]}) || MUL || RETURN",
                      "displayLines": "(TargetTotalDamage * {[Skill07[2]]})",
                      "constants": [],
                      "variables": [
                        "TargetTotalDamage",
                        "{[Skill07[2]]}"
                      ]
                    }
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1779981114\">Enemy_W2_Beast01_04_AbilityP02_GoldBlood_BeHit</a>"
                }
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1221492183\">Enemy_W2_Beast01_04_AbilityP02_GoldBlood_DamageCalculator</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "CurrentHP%",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1144531535\">W4_Serpent_01_BattleScore2</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1611237649\">Enemy_W4_Serpent_01_Charge02</a>[<span class=\"descriptionNumberColor\">Penance Prep</span>]"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4064010_Monster_W4_Serpent_01_Ability07_Part01": {
      "fileName": "4064010_Monster_W4_Serpent_01_Ability07_Part01",
      "childAbilityList": [
        "4064010_Monster_W4_Serpent_01_Ability07_Camera",
        "4064010_Monster_W4_Serpent_01_Ability07_Part01",
        "4064010_Monster_W4_Serpent_01_Ability07_Part02"
      ],
      "skillTrigger": "Skill07",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-2034245301\">Enemy_W4_Serpent_01_Charge02_Target</a>[<span class=\"descriptionNumberColor\">First Offense</span>]"
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                }
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Body-Types",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Ability Target(ST)}}"
                    },
                    "types": [
                      "LittleAvatar"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Body-Types",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "types": [
                      "LittleAvatar"
                    ]
                  }
                }
              ]
            }
          ],
          "noTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Body-Types",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "types": [
                  "LittleAvatar"
                ]
              }
            }
          ]
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_Serpent_01_Ability07_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4064010_Monster_W4_Serpent_01_Ability06_3_Part02": {
      "fileName": "4064010_Monster_W4_Serpent_01_Ability06_3_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4064010_Monster_W4_Serpent_01_Ability06_3_Part01": {
      "fileName": "4064010_Monster_W4_Serpent_01_Ability06_3_Part01",
      "childAbilityList": [
        "4064010_Monster_W4_Serpent_01_Ability06_3_Camera",
        "4064010_Monster_W4_Serpent_01_Ability06_3_Part01",
        "4064010_Monster_W4_Serpent_01_Ability06_3_Part02"
      ],
      "skillTrigger": "Skill09",
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
          "ability": "Monster_W4_Serpent_01_Ability06_3_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4064010_BattleEvent_W4_Serpent_01_Part01": {
      "fileName": "4064010_BattleEvent_W4_Serpent_01_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Add Target by Unique Identifier",
            "identifier": "W4_Serpent_01"
          },
          "revertDefault": true
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1584375052\">Enemy_W4_Serpent_01_Locking</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"986864876\">Enemy_W4_Serpent_01_MuteUltra</a>"
        },
        "Deleted bullshit",
        {
          "name": "Animation Event",
          "target": {
            "name": "Add Target by Unique Identifier",
            "identifier": "W4_Serpent_01"
          },
          "state": "Skill06_3",
          "passed": [
            {
              "name": "Animation Task"
            },
            {
              "name": "Animation Task"
            },
            {
              "name": "Animation Task",
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2034245301\">Enemy_W4_Serpent_01_Charge02_Target</a>[<span class=\"descriptionNumberColor\">First Offense</span>]",
                  "casterAssign": "TargetSelf"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Add Target by Unique Identifier",
                      "identifier": "W4_Serpent_01"
                    },
                    "value": "RLBoss"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"968355900\">Monster_W4_Serpent_01_RLBoss_Ability06Choose</a>[<span class=\"descriptionNumberColor\">Hemotort Drench</span>]"
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeMemosprite]]"
                  },
                  "includeDyingTargets": true,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-2034245301\">Enemy_W4_Serpent_01_Charge02_Target</a>[<span class=\"descriptionNumberColor\">First Offense</span>]",
                        "invertCondition": true
                      },
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "type": "Character"
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target List}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"839686414\">Enemy_W4_Serpent_01_Charge02_Target_Sub</a>[<span class=\"descriptionNumberColor\">Accomplice</span>]",
                      "casterAssign": "TargetSelf"
                    }
                  ]
                }
              ]
            }
          ]
        },
        "Wait for Pending Ability Completions",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4064010_BattleEvent_W4_Serpent_01_EnterReady": {
      "fileName": "4064010_BattleEvent_W4_Serpent_01_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "4064010_Monster_W4_Serpent_01_Ability06_Part02": {
      "fileName": "4064010_Monster_W4_Serpent_01_Ability06_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"1611237649\">Enemy_W4_Serpent_01_Charge02</a>[<span class=\"descriptionNumberColor\">Penance Prep</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1584375052\">Enemy_W4_Serpent_01_Locking</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"986864876\">Enemy_W4_Serpent_01_MuteUltra</a>"
        },
        {
          "name": "Assign Advance/Delay to Current Ability Use",
          "adjustmentValue": {
            "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
            "displayLines": "{[Skill06[0]]}",
            "constants": [],
            "variables": [
              "{[Skill06[0]]}"
            ]
          },
          "adjustmentType": "="
        },
        {
          "name": "Inject Extra-Turn",
          "actionTag": null,
          "skillType": "ControlSkill03",
          "target": {
            "name": "Add Target by Unique Identifier",
            "identifier": "SelectTarget"
          },
          "afterInjection": []
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1584375052\">Enemy_W4_Serpent_01_Locking</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "Update Target Selected(UI) [Anyone]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}"
                  },
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Player's Aim Target List}}"
                        },
                        "invertCondition": true
                      },
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "type": "Character"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1916197424\">Monster_W4_Serpent_01_RLBoss_Ability06Judge</a>",
                        "invertCondition": true
                      }
                    ]
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
    "4064010_Monster_W4_Serpent_01_Ability06_Part01": {
      "fileName": "4064010_Monster_W4_Serpent_01_Ability06_Part01",
      "childAbilityList": [
        "4064010_Monster_W4_Serpent_01_Ability06_Camera",
        "4064010_Monster_W4_Serpent_01_Ability06_Part01",
        "4064010_Monster_W4_Serpent_01_Ability06_Part02"
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
          "ability": "Monster_W4_Serpent_01_Ability06_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase1"
        }
      ],
      "references": []
    },
    "4064010_Monster_W4_Serpent_01_Ability05_Part02": {
      "fileName": "4064010_Monster_W4_Serpent_01_Ability05_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1028185089\">Enemy_AML_Minion02_01_RallyHP_Controller_V2</a>",
          "valuePerStack": {
            "MDF_RallyTransferRatio": {
              "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
              "displayLines": "{[Skill05[1]]}",
              "constants": [],
              "variables": [
                "{[Skill05[1]]}"
              ]
            },
            "MDF_Rally_HealPercentage": {
              "operator": "Variables[0] ({[Skill05[2]]}) || RETURN",
              "displayLines": "{[Skill05[2]]}",
              "constants": [],
              "variables": [
                "{[Skill05[2]]}"
              ]
            },
            "MDF_Rally_Strongth_AllDamageTypeAddedRatio": {
              "operator": "Variables[0] ({[Skill05[3]]}) || RETURN",
              "displayLines": "{[Skill05[3]]}",
              "constants": [],
              "variables": [
                "{[Skill05[3]]}"
              ]
            }
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
              "displayLines": "{[Skill05[0]]}",
              "constants": [],
              "variables": [
                "{[Skill05[0]]}"
              ]
            },
            "HitSplit": 0.3,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
              "displayLines": "{[Skill05[0]]}",
              "constants": [],
              "variables": [
                "{[Skill05[0]]}"
              ]
            },
            "HitSplit": 0.3,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
              "displayLines": "{[Skill05[0]]}",
              "constants": [],
              "variables": [
                "{[Skill05[0]]}"
              ]
            },
            "HitSplit": 0.4,
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
    "4064010_Monster_W4_Serpent_01_Ability05_Part01": {
      "fileName": "4064010_Monster_W4_Serpent_01_Ability05_Part01",
      "childAbilityList": [
        "4064010_Monster_W4_Serpent_01_Ability05_Camera",
        "4064010_Monster_W4_Serpent_01_Ability05_Part01",
        "4064010_Monster_W4_Serpent_01_Ability05_Part02"
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
          "ability": "Monster_W4_Serpent_01_Ability05_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4064010_Monster_W4_Serpent_01_Ability04_Part03": {
      "fileName": "4064010_Monster_W4_Serpent_01_Ability04_Part03",
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
          "modifier": "<a class=\"gModGreen\" id=\"1560904792\">Enemy_W4_Serpent_01_Charge01</a>[<span class=\"descriptionNumberColor\">Pursuer</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1028185089\">Enemy_AML_Minion02_01_RallyHP_Controller_V2</a>",
          "valuePerStack": {
            "MDF_RallyTransferRatio": {
              "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
              "displayLines": "{[Skill05[1]]}",
              "constants": [],
              "variables": [
                "{[Skill05[1]]}"
              ]
            },
            "MDF_Rally_HealPercentage": {
              "operator": "Variables[0] ({[Skill05[2]]}) || RETURN",
              "displayLines": "{[Skill05[2]]}",
              "constants": [],
              "variables": [
                "{[Skill05[2]]}"
              ]
            },
            "MDF_Rally_Strongth_AllDamageTypeAddedRatio": {
              "operator": "Variables[0] ({[Skill05[3]]}) || RETURN",
              "displayLines": "{[Skill05[3]]}",
              "constants": [],
              "variables": [
                "{[Skill05[3]]}"
              ]
            }
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
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
        },
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Projectile's Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"149951100\">Enemy_W4_Serpent_01_Passive_StanceDamage</a>",
              "valuePerStack": {
                "MDF_StanceDamage": {
                  "operator": "Variables[0] ({[Skill04[1]]}) || RETURN",
                  "displayLines": "{[Skill04[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill04[1]]}"
                  ]
                }
              }
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1710428840\">Enemy_W4_Serpent_01_Charge01_Target</a>[<span class=\"descriptionNumberColor\">Pursuit Target</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1560904792\">Enemy_W4_Serpent_01_Charge01</a>[<span class=\"descriptionNumberColor\">Pursuer</span>]"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4064010_Monster_W4_Serpent_01_Ability04_Part02": {
      "fileName": "4064010_Monster_W4_Serpent_01_Ability04_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"1560904792\">Enemy_W4_Serpent_01_Charge01</a>[<span class=\"descriptionNumberColor\">Pursuer</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1028185089\">Enemy_AML_Minion02_01_RallyHP_Controller_V2</a>",
          "valuePerStack": {
            "MDF_RallyTransferRatio": {
              "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
              "displayLines": "{[Skill05[1]]}",
              "constants": [],
              "variables": [
                "{[Skill05[1]]}"
              ]
            },
            "MDF_Rally_HealPercentage": {
              "operator": "Variables[0] ({[Skill05[2]]}) || RETURN",
              "displayLines": "{[Skill05[2]]}",
              "constants": [],
              "variables": [
                "{[Skill05[2]]}"
              ]
            },
            "MDF_Rally_Strongth_AllDamageTypeAddedRatio": {
              "operator": "Variables[0] ({[Skill05[3]]}) || RETURN",
              "displayLines": "{[Skill05[3]]}",
              "constants": [],
              "variables": [
                "{[Skill05[3]]}"
              ]
            }
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
              "displayLines": "{[Skill04[0]]}",
              "constants": [],
              "variables": [
                "{[Skill04[0]]}"
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
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
              "displayLines": "{[Skill04[0]]}",
              "constants": [],
              "variables": [
                "{[Skill04[0]]}"
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
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
              "displayLines": "{[Skill04[0]]}",
              "constants": [],
              "variables": [
                "{[Skill04[0]]}"
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
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
              "displayLines": "{[Skill04[0]]}",
              "constants": [],
              "variables": [
                "{[Skill04[0]]}"
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
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
              "displayLines": "{[Skill04[0]]}",
              "constants": [],
              "variables": [
                "{[Skill04[0]]}"
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
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
              "displayLines": "{[Skill04[0]]}",
              "constants": [],
              "variables": [
                "{[Skill04[0]]}"
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
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
              "displayLines": "{[Skill04[0]]}",
              "constants": [],
              "variables": [
                "{[Skill04[0]]}"
              ]
            },
            "HitSplit": 0.4,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1710428840\">Enemy_W4_Serpent_01_Charge01_Target</a>[<span class=\"descriptionNumberColor\">Pursuit Target</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1560904792\">Enemy_W4_Serpent_01_Charge01</a>[<span class=\"descriptionNumberColor\">Pursuer</span>]"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4064010_Monster_W4_Serpent_01_Ability04_Part01": {
      "fileName": "4064010_Monster_W4_Serpent_01_Ability04_Part01",
      "childAbilityList": [
        "4064010_Monster_W4_Serpent_01_Ability04_Camera",
        "4064010_Monster_W4_Serpent_01_Ability04_Self_Camera",
        "4064010_Monster_W4_Serpent_01_Ability04_Part01",
        "4064010_Monster_W4_Serpent_01_Ability04_Part02",
        "4064010_Monster_W4_Serpent_01_Ability04_Part03"
      ],
      "skillTrigger": "Skill04",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "flagName": "Shield"
          },
          "passed": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Monster_W4_Serpent_01_Ability04_Part03",
              "isTrigger": true
            },
            "Deleted bullshit"
          ],
          "failed": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Monster_W4_Serpent_01_Ability04_Part02",
              "isTrigger": true
            },
            "Deleted bullshit"
          ]
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4064010_Monster_W4_Serpent_01_Ability03_Part02": {
      "fileName": "4064010_Monster_W4_Serpent_01_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Is Entity Type",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "type": "Memosprite"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1560904792\">Enemy_W4_Serpent_01_Charge01</a>[<span class=\"descriptionNumberColor\">Pursuer</span>]",
          "stackLimit": {
            "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
            "displayLines": "{[Skill03[2]]}",
            "constants": [],
            "variables": [
              "{[Skill03[2]]}"
            ]
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
              "displayLines": "{[Skill03[0]]}",
              "constants": [],
              "variables": [
                "{[Skill03[0]]}"
              ]
            },
            "MDF_MaxCount": {
              "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
              "displayLines": "{[Skill03[2]]}",
              "constants": [],
              "variables": [
                "{[Skill03[2]]}"
              ]
            },
            "MDF_Count": {
              "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
              "displayLines": "{[Skill03[2]]}",
              "constants": [],
              "variables": [
                "{[Skill03[2]]}"
              ]
            }
          },
          "addStacksPerTrigger": {
            "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
            "displayLines": "{[Skill03[2]]}",
            "constants": [],
            "variables": [
              "{[Skill03[2]]}"
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Is Entity Type",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "type": "Memosprite"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}.[[getSummoner]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1710428840\">Enemy_W4_Serpent_01_Charge01_Target</a>[<span class=\"descriptionNumberColor\">Pursuit Target</span>]",
              "stackLimit": {
                "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
                "displayLines": "{[Skill03[2]]}",
                "constants": [],
                "variables": [
                  "{[Skill03[2]]}"
                ]
              },
              "addStacksPerTrigger": {
                "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
                "displayLines": "{[Skill03[2]]}",
                "constants": [],
                "variables": [
                  "{[Skill03[2]]}"
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1710428840\">Enemy_W4_Serpent_01_Charge01_Target</a>[<span class=\"descriptionNumberColor\">Pursuit Target</span>]",
              "stackLimit": {
                "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
                "displayLines": "{[Skill03[2]]}",
                "constants": [],
                "variables": [
                  "{[Skill03[2]]}"
                ]
              },
              "addStacksPerTrigger": {
                "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
                "displayLines": "{[Skill03[2]]}",
                "constants": [],
                "variables": [
                  "{[Skill03[2]]}"
                ]
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
            "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>",
              "duration": 2
            },
            {
              "name": "Define Modifier-Specific Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifierName": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>",
              "variableName": "OneMoreCount",
              "value": 2
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
            },
            {
              "name": "Define Modifier-Specific Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifierName": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>",
              "variableName": "OneMoreCount",
              "value": 1
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4064010_Monster_W4_Serpent_01_Ability03_Part01": {
      "fileName": "4064010_Monster_W4_Serpent_01_Ability03_Part01",
      "childAbilityList": [
        "4064010_Monster_W4_Serpent_01_Ability03_Camera",
        "4064010_Monster_W4_Serpent_01_Ability03_Part01",
        "4064010_Monster_W4_Serpent_01_Ability03_Part02"
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
          "ability": "Monster_W4_Serpent_01_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "references": []
    },
    "4064010_Monster_W4_Serpent_01_SummonNoDeathrattle": {
      "fileName": "4064010_Monster_W4_Serpent_01_SummonNoDeathrattle",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Mark Entity For Immediate Death",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        }
      ],
      "onAbort": [
        {
          "name": "Mark Entity For Immediate Death",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        }
      ],
      "references": []
    },
    "4064010_Monster_W4_Serpent_01_SummonDeathrattle": {
      "fileName": "4064010_Monster_W4_Serpent_01_SummonDeathrattle",
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
          "variableName": "Summon_Deathrattle"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "includeDyingTargets": true,
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value1": "MDF_Deathrattle",
            "compareType": "=",
            "value2": 1,
            "contextScope": "TargetEntity"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Team Count",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target List}}"
              },
              "variableName": "Summon_Deathrattle"
            },
            {
              "name": "Deal Toughness DMG",
              "value": {
                "operator": "Variables[0] ({[Skill02[2]]}) || Variables[1] (Summon_Deathrattle) || MUL || RETURN",
                "displayLines": "({[Skill02[2]]} * Summon_Deathrattle)",
                "constants": [],
                "variables": [
                  "{[Skill02[2]]}",
                  "Summon_Deathrattle"
                ]
              },
              "defender": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ignoreAttackerBonuses": true,
              "canDelay": true,
              "ToughnessDMGType": {
                "name": "Damage Type Source",
                "sourceType": {}
              }
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "scope": "TargetEntity",
          "variableName": "Deathrattle",
          "value": 0
        }
      ],
      "references": []
    },
    "4064010_Monster_W4_Serpent_01_Ability02_Part02": {
      "fileName": "4064010_Monster_W4_Serpent_01_Ability02_Part02",
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
            "compareType": "<",
            "value2": 5
          },
          "passed": [
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
                    "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__95) || RETURN",
                    "displayLines": "ENEMIES_OBJECT_UNUSED__95",
                    "constants": [],
                    "variables": [
                      "ENEMIES_OBJECT_UNUSED__95"
                    ]
                  },
                  "locationType": "KeepOnEdge"
                }
              ]
            },
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                "displayLines": "{[Skill02[3]]}",
                "constants": [],
                "variables": [
                  "{[Skill02[3]]}"
                ]
              },
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__95) || RETURN",
                    "displayLines": "ENEMIES_OBJECT_UNUSED__95",
                    "constants": [],
                    "variables": [
                      "ENEMIES_OBJECT_UNUSED__95"
                    ]
                  },
                  "locationType": "KeepOnEdge"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "value": "RLBoss"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 3
                  }
                ]
              },
              "passed": [
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
                        "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__95) || RETURN",
                        "displayLines": "ENEMIES_OBJECT_UNUSED__95",
                        "constants": [],
                        "variables": [
                          "ENEMIES_OBJECT_UNUSED__95"
                        ]
                      },
                      "locationType": "KeepOnEdge"
                    }
                  ]
                },
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                    "displayLines": "{[Skill02[3]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill02[3]]}"
                    ]
                  },
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__95) || RETURN",
                        "displayLines": "ENEMIES_OBJECT_UNUSED__95",
                        "constants": [],
                        "variables": [
                          "ENEMIES_OBJECT_UNUSED__95"
                        ]
                      },
                      "locationType": "KeepOnEdge"
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
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]",
                "invertCondition": true
              }
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]",
                "invertCondition": true
              }
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]",
                "invertCondition": true
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
                  "modifier": "<a class=\"gModGreen\" id=\"120636483\">Enemy_W4_Serpent_01_Summon_Deathrattle</a>[<span class=\"descriptionNumberColor\">Execution Squad</span>]"
                }
              ]
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4064010_Monster_W4_Serpent_01_Ability02_Part01": {
      "fileName": "4064010_Monster_W4_Serpent_01_Ability02_Part01",
      "childAbilityList": [
        "4064010_Monster_W4_Serpent_01_Ability02_Camera",
        "4064010_Monster_W4_Serpent_01_Ability02_Part01",
        "4064010_Monster_W4_Serpent_01_Ability02_Part02"
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
          "ability": "Monster_W4_Serpent_01_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4064010_Monster_W4_Serpent_01_Ability01_Part03": {
      "fileName": "4064010_Monster_W4_Serpent_01_Ability01_Part03",
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
          "modifier": "<a class=\"gModGreen\" id=\"1560904792\">Enemy_W4_Serpent_01_Charge01</a>[<span class=\"descriptionNumberColor\">Pursuer</span>]"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"149951100\">Enemy_W4_Serpent_01_Passive_StanceDamage</a>",
          "valuePerStack": {
            "MDF_StanceDamage": {
              "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
              "displayLines": "{[Skill01[1]]}",
              "constants": [],
              "variables": [
                "{[Skill01[1]]}"
              ]
            }
          }
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4064010_Monster_W4_Serpent_01_Ability01_Part02": {
      "fileName": "4064010_Monster_W4_Serpent_01_Ability01_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"1560904792\">Enemy_W4_Serpent_01_Charge01</a>[<span class=\"descriptionNumberColor\">Pursuer</span>]"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
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
    "4064010_Monster_W4_Serpent_01_Ability01_Part01": {
      "fileName": "4064010_Monster_W4_Serpent_01_Ability01_Part01",
      "childAbilityList": [
        "4064010_Monster_W4_Serpent_01_Ability01_Camera",
        "4064010_Monster_W4_Serpent_01_Ability01_Self_Camera",
        "4064010_Monster_W4_Serpent_01_Ability01_Part01",
        "4064010_Monster_W4_Serpent_01_Ability01_Part02",
        "4064010_Monster_W4_Serpent_01_Ability01_Part03"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "flagName": "Shield"
          },
          "passed": [
            "Deleted bullshit",
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Monster_W4_Serpent_01_Ability01_Part03",
              "isTrigger": true
            },
            "Deleted bullshit"
          ],
          "failed": [
            "Deleted bullshit",
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Monster_W4_Serpent_01_Ability01_Part02",
              "isTrigger": true
            },
            "Deleted bullshit"
          ]
        }
      ],
      "references": []
    },
    "4064010_Monster_W4_Serpent_01_ChangePhase1": {
      "fileName": "4064010_Monster_W4_Serpent_01_ChangePhase1",
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
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 2
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 3
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
          "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1717754231\">Enemy_W4_Serpent_01_Passive_Sub</a>[<span class=\"descriptionNumberColor\">Expedite Verdict</span>]",
          "valuePerStack": {
            "MDF_AllDamageReduce": {
              "operator": "Variables[0] ({[PassiveSkillInitiate[0]]}) || RETURN",
              "displayLines": "{[PassiveSkillInitiate[0]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkillInitiate[0]]}"
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
          "modifier": "<a class=\"gModGreen\" id=\"1404590263\">Standard_Endurance</a>"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "ChangePhase",
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
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 2
          },
          "passed": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "Phase_Flag",
              "value": 2
            }
          ],
          "failed": [
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
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Phase_Flag",
                  "value": 3
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "4064010_Monster_W4_Serpent_01_PassiveAbility": {
      "fileName": "4064010_Monster_W4_Serpent_01_PassiveAbility",
      "skillTrigger": "PassiveSkillInitiate",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Assign Unique Name",
          "uniqueName": "W4_Serpent_01",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
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
          "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "value": "RLBoss"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1413842812\">Enemy_W4_Serpent_01_RLBoss_ChangePhaseController</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-227770037\">Monster_W4_Serpent_01_RLBoss_Passive</a>",
              "valuePerStack": {
                "MDF_DamageUpRatio_PerLayer": {
                  "operator": "Variables[0] (UnusedUnderThisBase_220) || RETURN",
                  "displayLines": "UnusedUnderThisBase_220",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_220"
                  ]
                }
              }
            },
            {
              "name": "Preload Battle Event(s)",
              "eventID": [
                20038
              ]
            },
            {
              "name": "Add Battle Event",
              "teamName": "Player Team",
              "dmgCountsForTeam": "Enemy Team",
              "eventID": 20038,
              "variables": null,
              "whenCreated": [
                {
                  "name": "Assign Unique Name",
                  "uniqueName": "SelectTarget",
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
                  "modifier": "<a class=\"gModGreen\" id=\"1234779090\">Enemy_W4_Serpent_01_PickUpMessage</a>"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": 4064013,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Ichor Memosprite: Judge of Oblivion",
                "isBaseCompare": true,
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2038153082\">Enemy_W4_Serpent_01_ChangePhaseController</a>"
                }
              ]
            },
            {
              "name": "Preload Battle Event(s)",
              "eventID": [
                20030
              ]
            },
            {
              "name": "Add Battle Event",
              "teamName": "Player Team",
              "dmgCountsForTeam": "Enemy Team",
              "eventID": 20030,
              "variables": null,
              "whenCreated": [
                {
                  "name": "Assign Unique Name",
                  "uniqueName": "SelectTarget",
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
                  "modifier": "<a class=\"gModGreen\" id=\"1234779090\">Enemy_W4_Serpent_01_PickUpMessage</a>"
                },
                "Show BattleEvent Button"
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
          "modifier": "<a class=\"gModGreen\" id=\"-501224004\">Enemy_W4_Serpent_01_Passive</a>",
          "valuePerStack": {
            "MDF_AllDamageReduce": {
              "operator": "Variables[0] ({[PassiveSkillInitiate[0]]}) || RETURN",
              "displayLines": "{[PassiveSkillInitiate[0]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkillInitiate[0]]}"
              ]
            },
            "MDF_ActionDelay": {
              "operator": "Variables[0] ({[PassiveSkillInitiate[1]]}) || RETURN",
              "displayLines": "{[PassiveSkillInitiate[1]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkillInitiate[1]]}"
              ]
            },
            "MDF_AllDamageTypeTakenRatio": {
              "operator": "Variables[0] ({[PassiveSkillInitiate[2]]}) || RETURN",
              "displayLines": "{[PassiveSkillInitiate[2]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkillInitiate[2]]}"
              ]
            },
            "MDF_DamagePercentage": {
              "operator": "Variables[0] ({[PassiveSkillInitiate[3]]}) || RETURN",
              "displayLines": "{[PassiveSkillInitiate[3]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkillInitiate[3]]}"
              ]
            }
          }
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1234779090\">Enemy_W4_Serpent_01_PickUpMessage</a>",
          "execute": [
            {
              "eventTrigger": "Ultimate Prep-Phase [Owner]"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1413842812\">Enemy_W4_Serpent_01_RLBoss_ChangePhaseController</a>",
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
                        "value1": "ChangePhase",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster's Minions}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"120636483\">Enemy_W4_Serpent_01_Summon_Deathrattle</a>[<span class=\"descriptionNumberColor\">Execution Squad</span>]"
                        },
                        {
                          "name": "Force Entity Death",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster's Minions}}"
                          }
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1560904792\">Enemy_W4_Serpent_01_Charge01</a>[<span class=\"descriptionNumberColor\">Pursuer</span>]"
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "ChangePhase"
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
                          "modifier": "<a class=\"gModGreen\" id=\"1404590263\">Standard_Endurance</a>"
                        },
                        {
                          "name": "Set Enemy Phase",
                          "mode": "Inc"
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W4_Serpent_01_ChangePhase1",
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
                            "value1": "ChangePhase",
                            "compareType": "=",
                            "value2": 1,
                            "contextScope": "TargetEntity"
                          },
                          "passed": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster's Minions}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"120636483\">Enemy_W4_Serpent_01_Summon_Deathrattle</a>[<span class=\"descriptionNumberColor\">Execution Squad</span>]"
                            },
                            {
                              "name": "Force Entity Death",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster's Minions}}"
                              }
                            },
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1560904792\">Enemy_W4_Serpent_01_Charge01</a>[<span class=\"descriptionNumberColor\">Pursuer</span>]"
                            },
                            {
                              "name": "Declare Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "scope": "TargetEntity",
                              "variableName": "ChangePhase"
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
                              "modifier": "<a class=\"gModGreen\" id=\"1404590263\">Standard_Endurance</a>"
                            },
                            {
                              "name": "Set Enemy Phase",
                              "mode": "Inc"
                            },
                            {
                              "name": "Inject Ability Use",
                              "abilityName": "Monster_W4_Serpent_01_ChangePhase1",
                              "priorityTag": "MonsterChangePhase",
                              "ownerState": "Mask_AliveOrLimbo",
                              "targetState": "Mask_AliveOrLimbo",
                              "canHitNonTargets": true,
                              "showInActionOrder": true,
                              "allowAbilityTriggers": false
                            }
                          ]
                        },
                        "Modifier Deletes Itself"
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
          "for": "<a class=\"gModGreen\" id=\"mod__2038153082\">Enemy_W4_Serpent_01_ChangePhaseController</a>",
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
                    "value1": "ChangePhase",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster's Minions}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"120636483\">Enemy_W4_Serpent_01_Summon_Deathrattle</a>[<span class=\"descriptionNumberColor\">Execution Squad</span>]"
                    },
                    {
                      "name": "Force Entity Death",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster's Minions}}"
                      }
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1560904792\">Enemy_W4_Serpent_01_Charge01</a>[<span class=\"descriptionNumberColor\">Pursuer</span>]"
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "ChangePhase"
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
                      "modifier": "<a class=\"gModGreen\" id=\"1404590263\">Standard_Endurance</a>"
                    },
                    {
                      "name": "Set Enemy Phase",
                      "mode": "Inc"
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W4_Serpent_01_ChangePhase1",
                      "priorityTag": "MonsterChangePhase",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                },
                "Modifier Deletes Itself"
              ],
              "priorityLevel": -90
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "4064010_Monster_W4_Serpent_01_PassiveAbility_BGM": {
      "fileName": "4064010_Monster_W4_Serpent_01_PassiveAbility_BGM",
      "childAbilityList": [
        "4064010_Monster_W4_Serpent_01_PassiveAbility_BGM"
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
          "modifier": "<a class=\"gModGreen\" id=\"623581294\">Enemy_W4_Serpent_01_ResetStageBGM</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__623581294\">Enemy_W4_Serpent_01_ResetStageBGM</a>",
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
    "4064010_Modifiers": {
      "fileName": "4064010_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1916197424\">Monster_W4_Serpent_01_RLBoss_Ability06Judge</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__968355900\">Monster_W4_Serpent_01_RLBoss_Ability06Choose</a>[<span class=\"descriptionNumberColor\">Hemotort Drench</span>]",
          "stackData": [],
          "latentQueue": [],
          "description": "The character that has been selected by \"Name the Culprit.\"",
          "type": "Other",
          "statusName": "Hemotort Drench"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__986553475\">Monster_W4_Serpent_01_RLBoss_TriggerDamage</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Trigger Modifier Event",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "DOT_TriggerRatio",
                  "eventType": "DOT",
                  "value": 1
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1128925615\">Enemy_W2_Beast01_04_AbilityP02_GoldBlood_DOT</a>[<span class=\"descriptionNumberColor\">Hemotort Corruption</span>]"
                },
                "Modifier Deletes Itself"
              ]
            }
          ],
          "duration": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-227770037\">Monster_W4_Serpent_01_RLBoss_Passive</a>",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Name",
                    "skillName": "Skill06"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Player Team All}}.[[removeMemosprite]]"
                        },
                        "value1": "TeamCharacterCount",
                        "compareType": ">",
                        "value2": 0,
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"968355900\">Monster_W4_Serpent_01_RLBoss_Ability06Choose</a>[<span class=\"descriptionNumberColor\">Hemotort Drench</span>]",
                          "invertCondition": true
                        }
                      },
                      "passed": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Player Team All}}.[[removeMemosprite]]"
                          },
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"968355900\">Monster_W4_Serpent_01_RLBoss_Ability06Choose</a>[<span class=\"descriptionNumberColor\">Hemotort Drench</span>]"
                          },
                          "ifTargetFound": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1916197424\">Monster_W4_Serpent_01_RLBoss_Ability06Judge</a>"
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
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Skill Name",
                        "skillName": "Skill04"
                      },
                      {
                        "name": "Skill Name",
                        "skillName": "Skill05"
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
                      "modifier": "<a class=\"gModGreen\" id=\"437668983\">Monster_W4_Nikadory_RLBoss_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
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
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Name",
                    "skillName": "Skill07"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1916197424\">Monster_W4_Serpent_01_RLBoss_Ability06Judge</a>"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1144531535\">W4_Serpent_01_BattleScore2</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Achievement",
                  "relatedAchievements": [
                    {
                      "title": "Vindicated by Faith",
                      "desc": "The ally character targeted by \"Name the Culprit\" has their HP equal to their Max HP after being hit by \"Hemotort Decapitation\" from \"Ichor Memosprite: Judge of Oblivion\"",
                      "rarity": "Low"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1161309154\">W4_Serpent_01_BattleScore1</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
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
                    "value2": 3,
                    "valueType": "Layer"
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "relatedAchievements": [
                        {
                          "title": "The Ascension of the Shield Powerhouse",
                          "desc": "All of \"Ichor Memosprite: Judge of Oblivion's\" #1 Single Target attack(s) to the locked-on target hit a Shield",
                          "rarity": "Low",
                          "params": [
                            3
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"149951100\">Enemy_W4_Serpent_01_Passive_StanceDamage</a>"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1161309154\">W4_Serpent_01_BattleScore1</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "stackLimit": 3,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2034245301\">Enemy_W4_Serpent_01_Charge02_Target</a>[<span class=\"descriptionNumberColor\">First Offense</span>]",
          "modifierFlags": [
            "AttackSign"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Set Target Parameter",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "paramTarget": {
                    "name": "Add Target by Unique Identifier",
                    "identifier": "W4_Serpent_01"
                  },
                  "variableName": "MMonster_W4_Serpent_01_Charge02_Target_DynamicTarget"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "When \"%DynamicTargetName\" uses \"Hemotort Decapitation\", they take maximum damage, and if any DMG is not offset by Shield, they will be inflicted with \"Hemotort Corruption.\"",
          "type": "Other",
          "effectName": "First Offense",
          "statusName": "First Offense"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__839686414\">Enemy_W4_Serpent_01_Charge02_Target_Sub</a>[<span class=\"descriptionNumberColor\">Accomplice</span>]",
          "modifierFlags": [
            "AttackSign"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Set Target Parameter",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "paramTarget": {
                    "name": "Add Target by Unique Identifier",
                    "identifier": "W4_Serpent_01"
                  },
                  "variableName": "MMonster_W4_Serpent_01_Charge02_Target_Sub_DynamicTarget"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "\"%DynamicTargetName\" takes damage when using \"Hemotort Decapitation.\"",
          "type": "Other",
          "effectName": "Accomplice",
          "statusName": "Accomplice"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1611237649\">Enemy_W4_Serpent_01_Charge02</a>[<span class=\"descriptionNumberColor\">Penance Prep</span>]",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
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
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                "Modifier Deletes Itself",
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2034245301\">Enemy_W4_Serpent_01_Charge02_Target</a>[<span class=\"descriptionNumberColor\">First Offense</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"839686414\">Enemy_W4_Serpent_01_Charge02_Target_Sub</a>[<span class=\"descriptionNumberColor\">Accomplice</span>]"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "AIFlag",
                  "value": 1
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "Use \"Hemotort Decapitation\" in the next action. This effect is dispelled when this unit becomes Weakness Broken.",
          "type": "Other",
          "effectName": "Penance Prep",
          "statusName": "Penance Prep"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__986864876\">Enemy_W4_Serpent_01_MuteUltra</a>",
          "execute": [
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1965565011\">Enemy_W4_Serpent_01_Charge01_Target_Change</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1710428840\">Enemy_W4_Serpent_01_Charge01_Target</a>[<span class=\"descriptionNumberColor\">Pursuit Target</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "AttackSign"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1161309154\">W4_Serpent_01_BattleScore1</a>",
                  "addStacksPerTrigger": 0
                },
                {
                  "name": "Set Target Parameter",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "paramTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MMonster_W4_Serpent_01_Charge01_DynamicTarget"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "Stealth"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1965565011\">Enemy_W4_Serpent_01_Charge01_Target_Change</a>"
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1161309154\">W4_Serpent_01_BattleScore1</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "MDF_Layer",
                  "multiplier": 1
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "Will receive <span class=\"descriptionNumberColor\">MDF_Layer</span> instances of Single Target attacks from \"%CasterName.\" If this unit has Shield, when hit by \"%CasterName's\" Single Target attacks, reduces Toughness. This effect is dispelled when \"%CasterName\" is Weakness Broken.",
          "type": "Other",
          "effectName": "Pursuit Target",
          "statusName": "Pursuit Target",
          "addStacksPerTrigger": -1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1560904792\">Enemy_W4_Serpent_01_Charge01</a>[<span class=\"descriptionNumberColor\">Pursuer</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "AttackFlag",
                  "value": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
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
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1710428840\">Enemy_W4_Serpent_01_Charge01_Target</a>[<span class=\"descriptionNumberColor\">Pursuit Target</span>]"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "AttackFlag",
                  "value": 0
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "assignState": "False"
                }
              ]
            },
            {
              "eventTrigger": "Turn Start [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
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
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_Count",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "AttackFlag",
                          "value": 2
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "AttackFlag",
                          "value": 1
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "MDF_Count",
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
                    "value1": "MDF_Count",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (MDF_Count) || RETURN",
                        "displayLines": "MDF_Count",
                        "constants": [],
                        "variables": [
                          "MDF_Count"
                        ]
                      },
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "maximum": {
                        "operator": "Variables[0] (MDF_MaxCount) || RETURN",
                        "displayLines": "MDF_MaxCount",
                        "constants": [],
                        "variables": [
                          "MDF_MaxCount"
                        ]
                      },
                      "assignState": "True",
                      "state": "Active",
                      "trigger": "SpEff_Trigger"
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1710428840\">Enemy_W4_Serpent_01_Charge01_Target</a>[<span class=\"descriptionNumberColor\">Pursuit Target</span>]"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1710428840\">Enemy_W4_Serpent_01_Charge01_Target</a>[<span class=\"descriptionNumberColor\">Pursuit Target</span>]"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1710428840\">Enemy_W4_Serpent_01_Charge01_Target</a>[<span class=\"descriptionNumberColor\">Pursuit Target</span>]"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_Count",
                        "compareType": ">",
                        "value2": 0
                      }
                    ]
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
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1710428840\">Enemy_W4_Serpent_01_Charge01_Target</a>[<span class=\"descriptionNumberColor\">Pursuit Target</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] (MDF_MaxCount) || RETURN",
                            "displayLines": "MDF_MaxCount",
                            "constants": [],
                            "variables": [
                              "MDF_MaxCount"
                            ]
                          },
                          "addStacksPerTrigger": {
                            "operator": "Variables[0] (MDF_Count) || RETURN",
                            "displayLines": "MDF_Count",
                            "constants": [],
                            "variables": [
                              "MDF_Count"
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
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target 2}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1710428840\">Enemy_W4_Serpent_01_Charge01_Target</a>[<span class=\"descriptionNumberColor\">Pursuit Target</span>]",
                        "invertCondition": true
                      },
                      {
                        "name": "Modifier Has Flag",
                        "flagName": "Taunt"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)V2}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1710428840\">Enemy_W4_Serpent_01_Charge01_Target</a>[<span class=\"descriptionNumberColor\">Pursuit Target</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target 2}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1710428840\">Enemy_W4_Serpent_01_Charge01_Target</a>[<span class=\"descriptionNumberColor\">Pursuit Target</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (MDF_MaxCount) || RETURN",
                        "displayLines": "MDF_MaxCount",
                        "constants": [],
                        "variables": [
                          "MDF_MaxCount"
                        ]
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (MDF_Count) || RETURN",
                        "displayLines": "MDF_Count",
                        "constants": [],
                        "variables": [
                          "MDF_Count"
                        ]
                      }
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
                        "compareType": ">",
                        "value2": 0
                      },
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"-1965565011\">Enemy_W4_Serpent_01_Charge01_Target_Change</a>"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-228290033\">ParamModifier</a>"
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemies by Aggro OR Random}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1710428840\">Enemy_W4_Serpent_01_Charge01_Target</a>[<span class=\"descriptionNumberColor\">Pursuit Target</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] (MDF_MaxCount) || RETURN",
                            "displayLines": "MDF_MaxCount",
                            "constants": [],
                            "variables": [
                              "MDF_MaxCount"
                            ]
                          },
                          "addStacksPerTrigger": {
                            "operator": "Variables[0] (MDF_Count) || RETURN",
                            "displayLines": "MDF_Count",
                            "constants": [],
                            "variables": [
                              "MDF_Count"
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
          "stackData": [],
          "latentQueue": [],
          "description": "Increases SPD by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>. Will launch <span class=\"descriptionNumberColor\">MDF_Count</span> instance(s) of Single Target attacks on %DynamicTargetName. This effect is dispelled when this unit's Weakness is Broken.",
          "type": "Other",
          "effectName": "Pursuer",
          "statusName": "Pursuer",
          "addStacksPerTrigger": -1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__120636483\">Enemy_W4_Serpent_01_Summon_Deathrattle</a>[<span class=\"descriptionNumberColor\">Execution Squad</span>]",
          "modifierFlags": [
            "Deathrattle",
            "KeepOnDeathrattle",
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Ability",
                  "abilityName": "Monster_W4_Serpent_01_SummonNoDeathrattle"
                }
              ]
            },
            {
              "eventTrigger": "Was Killed (Queued) [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Summoner of Modifier Holder}}"
                    },
                    "flagName": "Break",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "MDF_Deathrattle",
                      "value": 1
                    },
                    {
                      "name": "Dispel Debuffs",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "silent": true
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Summoner of Modifier Holder}}"
                        },
                        "value1": "Deathrattle",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Inject Ability Use",
                          "conditionActive": {
                            "name": "Living State",
                            "state": "Mask_AliveOnly",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            }
                          },
                          "abilityName": "Monster_W4_Serpent_01_SummonDeathrattle",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Summoner of Modifier Holder}}"
                          },
                          "priorityTag": "MonsterDeathRattle",
                          "ownerState": "Mask_AliveOrLimbo",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "abortFlags": [
                            "Break"
                          ],
                          "allowAbilityTriggers": false
                        },
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Summoner of Modifier Holder}}"
                          },
                          "variableName": "Deathrattle",
                          "value": 1
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Summoner of Modifier Holder}}"
                            },
                            "flagName": "Break",
                            "invertCondition": true
                          }
                        }
                      ]
                    },
                    {
                      "name": "Inject Ability Use",
                      "checkOverride": {
                        "name": "Condition Priority",
                        "overridePriority": "MonsterForceKill",
                        "condition": {
                          "name": "Compare: Ability Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Summoner of Modifier Holder}}"
                          },
                          "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                          "compareType": "<=",
                          "value2": 0
                        }
                      },
                      "abilityName": "Monster_W4_Serpent_01_SummonNoDeathrattle",
                      "priorityTag": "MonsterDeathRattle",
                      "ownerState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "When defeated, reduces the Toughness of \"Ichor Memosprite: Judge of Oblivion.\"",
          "type": "Other",
          "effectName": "Execution Squad",
          "statusName": "Execution Squad"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__149951100\">Enemy_W4_Serpent_01_Passive_StanceDamage</a>",
          "stackType": "Multiple",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Current Action Holder Is",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Lock Toughness",
                      "percent": 0
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_StanceDamage"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1922828191\">Enemy_W4_Serpent_01_Passive_Sub2</a>[<span class=\"descriptionNumberColor\">Expedite Verdict</span>]",
          "modifierFlags": [
            "STAT_SuperArmorBreak"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-237425029\">StanceBreakState_Effect</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Imaginary",
                    "Damage": {
                      "operator": "Variables[0] (MDF_DamagePercentage) || RETURN",
                      "displayLines": "MDF_DamagePercentage",
                      "constants": [],
                      "variables": [
                        "MDF_DamagePercentage"
                      ]
                    },
                    "dmgFormula": "Max HP Scaling",
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Additional DMG"
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
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-237425029\">StanceBreakState_Effect</a>"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-237425029\">StanceBreakState_Effect</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "description": "Takes <span class=\"descriptionNumberColor\">MDF_AllDamageTypeTakenRatio</span> more DMG. Dispelled when recovering from the Weakness Break state.",
          "type": "Other",
          "statusName": "Expedite Verdict"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1717754231\">Enemy_W4_Serpent_01_Passive_Sub</a>[<span class=\"descriptionNumberColor\">Expedite Verdict</span>]",
          "modifierFlags": [
            "STAT_SuperArmor"
          ],
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AllDamageReduce) || RETURN",
                    "displayLines": "MDF_AllDamageReduce",
                    "constants": [],
                    "variables": [
                      "MDF_AllDamageReduce"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_AllDamageReduce"
          ],
          "latentQueue": [],
          "description": "DMG received decreases by <span class=\"descriptionNumberColor\">MDF_AllDamageReduce</span>. When this unit is Weakness Broken, this effect is dispelled, its action will be further delayed, and deals massive Imaginary DMG to this unit.",
          "type": "Other",
          "effectName": "Expedite Verdict",
          "statusName": "Expedite Verdict"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-501224004\">Enemy_W4_Serpent_01_Passive</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "Break",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1717754231\">Enemy_W4_Serpent_01_Passive_Sub</a>[<span class=\"descriptionNumberColor\">Expedite Verdict</span>]",
                      "valuePerStack": {
                        "MDF_AllDamageReduce": {
                          "operator": "Variables[0] (MDF_AllDamageReduce) || RETURN",
                          "displayLines": "MDF_AllDamageReduce",
                          "constants": [],
                          "variables": [
                            "MDF_AllDamageReduce"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1717754231\">Enemy_W4_Serpent_01_Passive_Sub</a>[<span class=\"descriptionNumberColor\">Expedite Verdict</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1922828191\">Enemy_W4_Serpent_01_Passive_Sub2</a>[<span class=\"descriptionNumberColor\">Expedite Verdict</span>]",
                  "valuePerStack": {
                    "MDF_AllDamageTypeTakenRatio": {
                      "operator": "Variables[0] (MDF_AllDamageTypeTakenRatio) || RETURN",
                      "displayLines": "MDF_AllDamageTypeTakenRatio",
                      "constants": [],
                      "variables": [
                        "MDF_AllDamageTypeTakenRatio"
                      ]
                    },
                    "MDF_DamagePercentage": {
                      "operator": "Variables[0] (MDF_DamagePercentage) || RETURN",
                      "displayLines": "MDF_DamagePercentage",
                      "constants": [],
                      "variables": [
                        "MDF_DamagePercentage"
                      ]
                    }
                  }
                },
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "advanceType": "Set",
                  "multiAdd": "MDF_ActionDelay"
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1717754231\">Enemy_W4_Serpent_01_Passive_Sub</a>[<span class=\"descriptionNumberColor\">Expedite Verdict</span>]",
                  "valuePerStack": {
                    "MDF_AllDamageReduce": {
                      "operator": "Variables[0] (MDF_AllDamageReduce) || RETURN",
                      "displayLines": "MDF_AllDamageReduce",
                      "constants": [],
                      "variables": [
                        "MDF_AllDamageReduce"
                      ]
                    }
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1922828191\">Enemy_W4_Serpent_01_Passive_Sub2</a>[<span class=\"descriptionNumberColor\">Expedite Verdict</span>]"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"149951100\">Enemy_W4_Serpent_01_Passive_StanceDamage</a>"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Copy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-228290033\">ParamModifier</a>",
                      "variable": "MDF_StanceDamage",
                      "target2": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variable2": "MDF_StanceDamage"
                    },
                    {
                      "name": "Deal Toughness DMG",
                      "value": {
                        "operator": "Variables[0] (MDF_StanceDamage) || RETURN",
                        "displayLines": "MDF_StanceDamage",
                        "constants": [],
                        "variables": [
                          "MDF_StanceDamage"
                        ]
                      },
                      "attacker": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "defender": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "ignoreAttackerBonuses": true,
                      "canDelay": true,
                      "ToughnessDMGType": {
                        "name": "Damage Type Source",
                        "sourceType": {}
                      }
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-228290033\">ParamModifier</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_AllDamageReduce",
            "MDF_ActionDelay",
            "MDF_AllDamageTypeTakenRatio",
            "MDF_DamagePercentage"
          ],
          "latentQueue": []
        }
      ],
      "references": []
    },
    "4064010_BE_BattleEvents": {
      "fileName": "4064010_BE_BattleEvents",
      "abilityType": "Char. B.Events",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Battle Event Construction",
          "ID": 20030,
          "team": "Neutral Team",
          "eventType": "Entity Selection",
          "abilityList": null,
          "overridesArray": [
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
              "value": 100
            }
          ],
          "hardLevelEvent": true
        },
        {
          "name": "Battle Event Construction",
          "ID": 20038,
          "team": "Neutral Team",
          "eventType": "Entity Selection",
          "abilityList": null,
          "overridesArray": [
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
              "value": 100
            }
          ],
          "hardLevelEvent": true
        }
      ],
      "references": []
    }
  }
}