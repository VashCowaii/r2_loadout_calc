const compositeAbilityObject = {
  "fullCharacterName": 1004012,
  "trimCharacterName": 1004012,
  "abilityList": [
    "1004012_Boss_Cocolia_P1_Weapon_DeathSetCamera",
    "1004012_Monster_Boss_Cocolia_P1_Weapon_Ability04_Part02",
    "1004012_Monster_Boss_Cocolia_P1_Weapon_Ability04_Part01",
    "1004012_Boss_Cocolia_P1_Weapon_DeathEffect",
    "1004012_Boss_Cocolia_P1_Weapon_MuteHitFly",
    "1004012_Monster_Boss_Cocolia_P1_Weapon_Ability03_Part02",
    "1004012_Monster_Boss_Cocolia_P1_Weapon_Ability03_Part01",
    "1004012_Monster_Boss_Cocolia_P1_Weapon_Ability02_Part01",
    "1004012_Monster_Boss_Cocolia_P1_Weapon_Ability01_Part01",
    "1004012_BattleEventAbility_CocoliaP1_RL_Insert",
    "1004012_BattleEventAbility_CocoliaP1_RL",
    "1004012_Monster_W1_CocoliaP1_RL_PassiveAbility_Insert_Part02",
    "1004012_Monster_W1_CocoliaP1_RL_PassiveAbility_Insert_Part01",
    "1004012_Boss_Cocolia_RL_AbilityP07_Part01",
    "1004012_Boss_Cocolia_RL_Ability07_Part02",
    "1004012_Boss_Cocolia_RL_Ability07_Part01",
    "1004012_Boss_Cocolia_RL_Ability05_Part02",
    "1004012_Boss_Cocolia_RL_Ability05_Part01",
    "1004012_Boss_Cocolia_RL_Ability04_Part02",
    "1004012_Boss_Cocolia_RL_Ability04_Part01",
    "1004012_Boss_Cocolia_RL_Ability03_Part02",
    "1004012_Boss_Cocolia_RL_Ability03_Part01",
    "1004012_Boss_Cocolia_RL_Ability02_Part02",
    "1004012_Boss_Cocolia_RL_Ability02_Part01",
    "1004012_Boss_Cocolia_RL_Ability01_Part02",
    "1004012_Boss_Cocolia_RL_Ability01_Part01",
    "1004012_Boss_Cocolia_RL_AIControlAndHPLock",
    "1004012_Boss_Cocolia_RL_PassiveAbility_Initiate",
    "1004012_Boss_Cocolia_RL_IceValue",
    "1004012_Boss_Cocolia_P2_BossModifier",
    "1004012_Boss_Cocolia_P1_AIControlAndHPLock",
    "1004012_Boss_Cocolia_P1_StanceBreakInsert",
    "1004012_Boss_Cocolia_P1_StateCameraChange_02",
    "1004012_Boss_Cocolia_P1_StateCameraChange_01",
    "1004012_Boss_Cocolia_P2_insertAbility",
    "1004012_Boss_Cocolia_P2_PassiveAbility_Initiate",
    "1004012_Boss_Cocolia_P1_AbilityTest_Part02",
    "1004012_Boss_Cocolia_P1_AbilityTest_Part01",
    "1004012_Boss_Cocolia_P1_Ability08_Part02",
    "1004012_Boss_Cocolia_P1_Ability08_Part01",
    "1004012_Boss_Cocolia_P1_LockHP",
    "1004012_Boss_Cocolia_P1_Ability07_Part02",
    "1004012_Boss_Cocolia_P1_Ability07_Part01",
    "1004012_Boss_Cocolia_P1_Ability06_Part02",
    "1004012_Boss_Cocolia_P1_Ability06_Part01",
    "1004012_Boss_Cocolia_P1_Ability05_Part02",
    "1004012_Boss_Cocolia_P1_Ability05_Part01",
    "1004012_Boss_Cocolia_P1_Ability04_Part02",
    "1004012_Boss_Cocolia_P1_Ability04_Part01",
    "1004012_Boss_Cocolia_P1_Ability03_Part02",
    "1004012_Boss_Cocolia_P1_Ability03_Part01",
    "1004012_Boss_Cocolia_P1_Ability02_Part02",
    "1004012_Boss_Cocolia_P1_Ability02_Part01",
    "1004012_Boss_Cocolia_P1_Insert",
    "1004012_Boss_Cocolia_IceValue",
    "1004012_Boss_Cocolia_P1_Ability01_Part02",
    "1004012_Boss_Cocolia_P1_Ability01_Part01",
    "1004012_Monster_W1_CocoliaP1_PassiveAbility_BGM",
    "1004012_Modifiers",
    "1004012_BE_BattleEvents"
  ],
  "abilityObject": {
    "1004012_Boss_Cocolia_P1_Weapon_DeathSetCamera": {
      "fileName": "1004012_Boss_Cocolia_P1_Weapon_DeathSetCamera",
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
          "modifier": "<a class=\"gModGreen\" id=\"1118324770\">Boss_Cocolia_P1_Weapon_DeathSetCamera</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1118324770\">Boss_Cocolia_P1_Weapon_DeathSetCamera</a>",
          "execute": [
            {
              "eventTrigger": "When Put in Deathstate Limbo",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-79024859\">BOSS_COCOLIA_BOSS_MDF</a>"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "WeaponDeathCount",
                      "context": "TargetEntity",
                      "value": 1,
                      "max": 2
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "WeaponDeathCount",
                        "compareType": "=",
                        "value2": 2,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        "Deleted bullshit"
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
    "1004012_Monster_Boss_Cocolia_P1_Weapon_Ability04_Part02": {
      "fileName": "1004012_Monster_Boss_Cocolia_P1_Weapon_Ability04_Part02",
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
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1004012_Monster_Boss_Cocolia_P1_Weapon_Ability04_Part01": {
      "fileName": "1004012_Monster_Boss_Cocolia_P1_Weapon_Ability04_Part01",
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
          "ability": "Monster_Boss_Cocolia_P1_Weapon_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1004012_Boss_Cocolia_P1_Weapon_DeathEffect": {
      "fileName": "1004012_Boss_Cocolia_P1_Weapon_DeathEffect",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1847839650\">Boss_Cocolia_P1_Weapon_DeathEffect</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1847839650\">Boss_Cocolia_P1_Weapon_DeathEffect</a>",
          "execute": [
            {
              "eventTrigger": "When Put in Deathstate Limbo",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DeathEvent_Trigger_Times",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
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
    "1004012_Boss_Cocolia_P1_Weapon_MuteHitFly": {
      "fileName": "1004012_Boss_Cocolia_P1_Weapon_MuteHitFly",
      "skillTrigger": "PassiveSkill05",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1485263337\">Boss_Cocolia_MuteHitFly_Modifier</a>"
        }
      ],
      "references": []
    },
    "1004012_Monster_Boss_Cocolia_P1_Weapon_Ability03_Part02": {
      "fileName": "1004012_Monster_Boss_Cocolia_P1_Weapon_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED_1) || RETURN",
              "displayLines": "ENEMIES_OBJECT_UNUSED_1",
              "constants": [],
              "variables": [
                "ENEMIES_OBJECT_UNUSED_1"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Mark Entity For Immediate Death"
        },
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1004012_Monster_Boss_Cocolia_P1_Weapon_Ability03_Part01": {
      "fileName": "1004012_Monster_Boss_Cocolia_P1_Weapon_Ability03_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DeathEvent_Trigger_Times",
          "context": "TargetEntity",
          "value": 1,
          "max": 1
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_Boss_Cocolia_P1_Weapon_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1004012_Monster_Boss_Cocolia_P1_Weapon_Ability02_Part01": {
      "fileName": "1004012_Monster_Boss_Cocolia_P1_Weapon_Ability02_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit"
      ],
      "references": []
    },
    "1004012_Monster_Boss_Cocolia_P1_Weapon_Ability01_Part01": {
      "fileName": "1004012_Monster_Boss_Cocolia_P1_Weapon_Ability01_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit"
      ],
      "references": []
    },
    "1004012_BattleEventAbility_CocoliaP1_RL_Insert": {
      "fileName": "1004012_BattleEventAbility_CocoliaP1_RL_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Doomsday Ice Cascade"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage) || Constants[0] (0.2) || MUL || RETURN",
              "displayLines": "(MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage * 0.2)",
              "constants": [
                0.2
              ],
              "variables": [
                "MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Additional DMG",
            "hitOwner": {
              "name": "Target Name",
              "target": "{{Enemy Teams}}"
            },
            "EnergyGainPercent": "33%"
          }
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "value": {
            "operator": "Variables[0] (MDF_CocoliaP1_00_RL_BattleEvent_SPAdd) || Constants[0] (0.2) || MUL || RETURN",
            "displayLines": "(MDF_CocoliaP1_00_RL_BattleEvent_SPAdd * 0.2)",
            "constants": [
              0.2
            ],
            "variables": [
              "MDF_CocoliaP1_00_RL_BattleEvent_SPAdd"
            ]
          },
          "isFixed": "* ERR"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage) || Constants[0] (0.2) || MUL || RETURN",
              "displayLines": "(MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage * 0.2)",
              "constants": [
                0.2
              ],
              "variables": [
                "MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Additional DMG",
            "hitOwner": {
              "name": "Target Name",
              "target": "{{Enemy Teams}}"
            },
            "EnergyGainPercent": "33%"
          }
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "value": {
            "operator": "Variables[0] (MDF_CocoliaP1_00_RL_BattleEvent_SPAdd) || Constants[0] (0.2) || MUL || RETURN",
            "displayLines": "(MDF_CocoliaP1_00_RL_BattleEvent_SPAdd * 0.2)",
            "constants": [
              0.2
            ],
            "variables": [
              "MDF_CocoliaP1_00_RL_BattleEvent_SPAdd"
            ]
          },
          "isFixed": "* ERR"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage) || Constants[0] (0.2) || MUL || RETURN",
              "displayLines": "(MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage * 0.2)",
              "constants": [
                0.2
              ],
              "variables": [
                "MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Additional DMG",
            "hitOwner": {
              "name": "Target Name",
              "target": "{{Enemy Teams}}"
            },
            "EnergyGainPercent": "34%"
          }
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "value": {
            "operator": "Variables[0] (MDF_CocoliaP1_00_RL_BattleEvent_SPAdd) || Constants[0] (0.2) || MUL || RETURN",
            "displayLines": "(MDF_CocoliaP1_00_RL_BattleEvent_SPAdd * 0.2)",
            "constants": [
              0.2
            ],
            "variables": [
              "MDF_CocoliaP1_00_RL_BattleEvent_SPAdd"
            ]
          },
          "isFixed": "* ERR"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage) || Constants[0] (0.2) || MUL || RETURN",
              "displayLines": "(MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage * 0.2)",
              "constants": [
                0.2
              ],
              "variables": [
                "MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Additional DMG",
            "hitOwner": {
              "name": "Target Name",
              "target": "{{Enemy Teams}}"
            },
            "EnergyGainPercent": "33%"
          }
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "value": {
            "operator": "Variables[0] (MDF_CocoliaP1_00_RL_BattleEvent_SPAdd) || Constants[0] (0.2) || MUL || RETURN",
            "displayLines": "(MDF_CocoliaP1_00_RL_BattleEvent_SPAdd * 0.2)",
            "constants": [
              0.2
            ],
            "variables": [
              "MDF_CocoliaP1_00_RL_BattleEvent_SPAdd"
            ]
          },
          "isFixed": "* ERR"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage) || Constants[0] (0.2) || MUL || RETURN",
              "displayLines": "(MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage * 0.2)",
              "constants": [
                0.2
              ],
              "variables": [
                "MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Additional DMG",
            "hitOwner": {
              "name": "Target Name",
              "target": "{{Enemy Teams}}"
            },
            "EnergyGainPercent": "33%"
          }
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "value": {
            "operator": "Variables[0] (MDF_CocoliaP1_00_RL_BattleEvent_SPAdd) || Constants[0] (0.2) || MUL || RETURN",
            "displayLines": "(MDF_CocoliaP1_00_RL_BattleEvent_SPAdd * 0.2)",
            "constants": [
              0.2
            ],
            "variables": [
              "MDF_CocoliaP1_00_RL_BattleEvent_SPAdd"
            ]
          },
          "isFixed": "* ERR"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "MDF_CocoliaP1_00_RL_BattleEvent_Count",
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_CocoliaP1_00_RL_BattleEvent_Count",
              "value": 1
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "NOT",
                "condition": {
                  "name": "Has Flag",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "flagName": "STAT_CTRL_Frozen"
                }
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]",
                  "duration": 1,
                  "baseChance": 1,
                  "valuePerStack": {
                    "Modifier_Frozen_DamagePercentage": {
                      "operator": "Variables[0] (MDF_CocoliaP1_00_RL_BattleEvent_FrozenDamagePerTurn) || RETURN",
                      "displayLines": "MDF_CocoliaP1_00_RL_BattleEvent_FrozenDamagePerTurn",
                      "constants": [],
                      "variables": [
                        "MDF_CocoliaP1_00_RL_BattleEvent_FrozenDamagePerTurn"
                      ]
                    }
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
                "target": "{{Player Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "NOT",
                "condition": {
                  "name": "Has Flag",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "flagName": "STAT_CTRL_Frozen"
                }
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]",
                  "duration": 1,
                  "baseChance": 1,
                  "valuePerStack": {
                    "Modifier_Frozen_DamagePercentage": {
                      "operator": "Variables[0] (MDF_CocoliaP1_00_RL_BattleEvent_FrozenDamagePerTurn) || RETURN",
                      "displayLines": "MDF_CocoliaP1_00_RL_BattleEvent_FrozenDamagePerTurn",
                      "constants": [],
                      "variables": [
                        "MDF_CocoliaP1_00_RL_BattleEvent_FrozenDamagePerTurn"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Attack End"
      ],
      "references": []
    },
    "1004012_BattleEventAbility_CocoliaP1_RL": {
      "fileName": "1004012_BattleEventAbility_CocoliaP1_RL",
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
          "modifier": "<a class=\"gModGreen\" id=\"826546199\">Modifier_CocoliaP1_RL_BattleEvent</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1295964216\">Modifier_CocoliaP1_RL_BattleEvent_BaseSpeed</a>"
        },
        {
          "name": "Action Advance/Delay",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "advanceType": "Advance",
          "multiAdd": -1
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1295964216\">Modifier_CocoliaP1_RL_BattleEvent_BaseSpeed</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_CocoliaP1_00_RL_BattleEvent_BaseSpeed) || RETURN",
                    "displayLines": "MDF_CocoliaP1_00_RL_BattleEvent_BaseSpeed",
                    "constants": [],
                    "variables": [
                      "MDF_CocoliaP1_00_RL_BattleEvent_BaseSpeed"
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
    "1004012_Monster_W1_CocoliaP1_RL_PassiveAbility_Insert_Part02": {
      "fileName": "1004012_Monster_W1_CocoliaP1_RL_PassiveAbility_Insert_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": 1004031,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": "Bronya (Complete)"
              },
              {
                "name": "Enemy ID",
                "ID": 100403100,
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
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "BronyaScore",
              "value": 1
            }
          ]
        },
        {
          "name": "Assign Value to Stat",
          "variableName": "BronyaScoreCheck",
          "value": {
            "operator": "Variables[0] (BronyaScore) || RETURN",
            "displayLines": "BronyaScore",
            "constants": [],
            "variables": [
              "BronyaScore"
            ]
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
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"920837138\">Monster_W1_CocoliaP1_RL_Endurance</a>"
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase0"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "ChargeFlag"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1349231340\">Monster_W1_CocoliaP1_RL_Revive</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "value1": "DecisionFlag",
            "compareType": "=",
            "value2": 5,
            "contextScope": "TargetEntity"
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "BaseSpeed",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;"
            },
            {
              "name": "Add Battle Event",
              "teamName": "Enemy Team",
              "eventID": 20001,
              "statSource": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variables": {
                "MDF_CocoliaP1_RL_BattleEvent_DamagePercentage": {
                  "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                  "displayLines": "{[PassiveSkill01[0]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill01[0]]}"
                  ]
                },
                "MDF_CocoliaP1_RL_BattleEvent_SPAdd": {
                  "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                  "displayLines": "{[PassiveSkill01[1]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill01[1]]}"
                  ]
                },
                "MDF_CocoliaP1_RL_BattleEvent_ActionDelay": 0,
                "MDF_CocoliaP1_RL_BattleEvent_BaseSpeed": {
                  "operator": "Variables[0] (BaseSpeed) || RETURN",
                  "displayLines": "BaseSpeed",
                  "constants": [],
                  "variables": [
                    "BaseSpeed"
                  ]
                },
                "MDF_CocoliaP1_RL_BattleEvent_FrozenDamagePerTurn": {
                  "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                  "displayLines": "{[PassiveSkill01[2]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill01[2]]}"
                  ]
                },
                "MDF_CocoliaP1_RL_BattleEvent_Count": 0
              }
            }
          ],
          "failed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "BaseSpeed",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;"
            },
            {
              "name": "Add Battle Event",
              "teamName": "Enemy Team",
              "eventID": 20001,
              "statSource": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variables": {
                "MDF_CocoliaP1_RL_BattleEvent_DamagePercentage": {
                  "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                  "displayLines": "{[PassiveSkill01[0]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill01[0]]}"
                  ]
                },
                "MDF_CocoliaP1_RL_BattleEvent_SPAdd": {
                  "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                  "displayLines": "{[PassiveSkill01[1]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill01[1]]}"
                  ]
                },
                "MDF_CocoliaP1_RL_BattleEvent_ActionDelay": 0,
                "MDF_CocoliaP1_RL_BattleEvent_BaseSpeed": {
                  "operator": "Variables[0] (BaseSpeed) || RETURN",
                  "displayLines": "BaseSpeed",
                  "constants": [],
                  "variables": [
                    "BaseSpeed"
                  ]
                },
                "MDF_CocoliaP1_RL_BattleEvent_FrozenDamagePerTurn": {
                  "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                  "displayLines": "{[PassiveSkill01[2]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill01[2]]}"
                  ]
                },
                "MDF_CocoliaP1_RL_BattleEvent_Count": 0
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
          "multiBase": 0.05
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
    "1004012_Monster_W1_CocoliaP1_RL_PassiveAbility_Insert_Part01": {
      "fileName": "1004012_Monster_W1_CocoliaP1_RL_PassiveAbility_Insert_Part01",
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
          "variableName": "InsertCheck",
          "value": 1
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
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"920837138\">Monster_W1_CocoliaP1_RL_Endurance</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "multiBase": 0.5
        },
        {
          "name": "Create Enemies",
          "delayPercent": 0.5,
          "enemyList": [
            {
              "name": "Create Enemy from Custom",
              "value": "SummonID03",
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
          "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1827853653\">Monster_W1_CocoliaP1_RL_IcePower_Summon</a>",
          "valuePerStack": {
            "MDF_DamageUpRatio_PerLayer": {
              "operator": "Variables[0] ({[PassiveSkill01[3]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[3]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[3]]}"
              ]
            }
          },
          "casterAssign": "TargetSelf"
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
    "1004012_Boss_Cocolia_RL_AbilityP07_Part01": {
      "fileName": "1004012_Boss_Cocolia_RL_AbilityP07_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "FrozenScore",
          "context": "TargetEntity",
          "value": 1,
          "max": 5
        },
        "Deleted bullshit",
        {
          "name": "Animation Event",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "state": "Skill07",
          "passed": [
            {
              "name": "Animation Task",
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Ice",
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
                    "target": "{{Ability Target(ST)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Targets Adjacent(Blast)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Ice",
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
                    "EnergyGainPercent": "50%"
                  }
                },
                "Trigger: Attack End"
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "searchRandom": true,
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]"
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Boss_Cocolia_RL_AbilityP07_Part01",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "priorityTag": "MonsterInsertAttackSelf",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "Break",
                    "DisableAction",
                    "STAT_CTRL"
                  ],
                  "allowAbilityTriggers": false
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "1004012_Boss_Cocolia_RL_Ability07_Part02": {
      "fileName": "1004012_Boss_Cocolia_RL_Ability07_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
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
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
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
            "EnergyGainPercent": "50%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "searchRandom": true,
          "ifTargetFound": [
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
                    "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1603948168\">StageAbility_GridFight_MonsterTag_2007_Tag</a>",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Boss_Cocolia_RL_AbilityP07_Part01",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "priorityTag": "MonsterInsertAttackSelf",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "Break",
                    "DisableAction",
                    "STAT_CTRL"
                  ],
                  "allowAbilityTriggers": false
                }
              ]
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1004012_Boss_Cocolia_RL_Ability07_Part01": {
      "fileName": "1004012_Boss_Cocolia_RL_Ability07_Part01",
      "childAbilityList": [
        "1004012_Boss_Cocolia_RL_Ability07_Part01_Camera",
        "1004012_Boss_Cocolia_RL_Ability07_Part01",
        "1004012_Boss_Cocolia_RL_Ability07_Part02",
        "1004012_Boss_Cocolia_RL_AbilityP07_Part01",
        "1004012_Boss_Cocolia_RL_AbilityP07_Part01_Camera"
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
          "ability": "Boss_Cocolia_RL_Ability07_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1004012_Boss_Cocolia_RL_Ability05_Part02": {
      "fileName": "1004012_Boss_Cocolia_RL_Ability05_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1440219637\">Boss_Cocolia_Endurance</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-883410937\">Monster_W1_CocoliaP1_RL_Ability05_Bonus</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
          "duration": 1,
          "valuePerStack": {
            "ModifierDamageUpValue": {
              "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
              "displayLines": "{[Skill05[0]]}",
              "constants": [],
              "variables": [
                "{[Skill05[0]]}"
              ]
            }
          }
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1004012_Boss_Cocolia_RL_Ability05_Part01": {
      "fileName": "1004012_Boss_Cocolia_RL_Ability05_Part01",
      "childAbilityList": [
        "1004012_Boss_Cocolia_RL_Ability05_Part01_Camera",
        "1004012_Boss_Cocolia_RL_Ability05_Part01",
        "1004012_Boss_Cocolia_RL_Ability05_Part02"
      ],
      "skillTrigger": "Skill05",
      "abilityType": "Skill",
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
          "variableName": "Cocolia_BattleScore5_Flag",
          "value": 1
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Boss_Cocolia_RL_Ability05_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase2"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "ChargeFlag",
          "value": 1
        }
      ],
      "references": []
    },
    "1004012_Boss_Cocolia_RL_Ability04_Part02": {
      "fileName": "1004012_Boss_Cocolia_RL_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]",
              "duration": {
                "operator": "Variables[0] ({[Skill04[2]]}) || RETURN",
                "displayLines": "{[Skill04[2]]}",
                "constants": [],
                "variables": [
                  "{[Skill04[2]]}"
                ]
              },
              "baseChance": {
                "operator": "Variables[0] ({[Skill04[1]]}) || RETURN",
                "displayLines": "{[Skill04[1]]}",
                "constants": [],
                "variables": [
                  "{[Skill04[1]]}"
                ]
              },
              "valuePerStack": {
                "Modifier_Frozen_DamagePercentage": {
                  "operator": "Variables[0] ({[Skill04[3]]}) || RETURN",
                  "displayLines": "{[Skill04[3]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill04[3]]}"
                  ]
                }
              },
              "success": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1606994047\">Monster_W1_CocoliaP1_RL_Frost</a>"
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
                "DamageType": "Ice",
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
    "1004012_Boss_Cocolia_RL_Ability04_Part01": {
      "fileName": "1004012_Boss_Cocolia_RL_Ability04_Part01",
      "childAbilityList": [
        "1004012_Boss_Cocolia_RL_Ability04_Part01_Camera",
        "1004012_Boss_Cocolia_RL_Ability04_Part01",
        "1004012_Boss_Cocolia_RL_Ability04_Part02"
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
          "ability": "Boss_Cocolia_RL_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1004012_Boss_Cocolia_RL_Ability03_Part02": {
      "fileName": "1004012_Boss_Cocolia_RL_Ability03_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1440219637\">Boss_Cocolia_Endurance</a>"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || Constants[0] (0.33) || MUL || RETURN",
              "displayLines": "({[Skill03[0]]} * 0.33)",
              "constants": [
                0.33
              ],
              "variables": [
                "{[Skill03[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "33%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || Constants[0] (0.33) || MUL || RETURN",
              "displayLines": "({[Skill03[0]]} * 0.33)",
              "constants": [
                0.33
              ],
              "variables": [
                "{[Skill03[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "33%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || Constants[0] (0.34) || MUL || RETURN",
              "displayLines": "({[Skill03[0]]} * 0.34)",
              "constants": [
                0.34
              ],
              "variables": [
                "{[Skill03[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "34%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase0"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "ChargeFlag"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-883410937\">Monster_W1_CocoliaP1_RL_Ability05_Bonus</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1004012_Boss_Cocolia_RL_Ability03_Part01": {
      "fileName": "1004012_Boss_Cocolia_RL_Ability03_Part01",
      "childAbilityList": [
        "1004012_Boss_Cocolia_RL_Ability03_Part01_Camera",
        "1004012_Boss_Cocolia_RL_Ability03_Part01",
        "1004012_Boss_Cocolia_RL_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Skill",
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
          "variableName": "Cocolia_BattleScore5_Flag"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1117029266\">Cocolia_P1_Ability03_Modifier</a>"
        },
        "Ability Start",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Boss_Cocolia_RL_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1117029266\">Cocolia_P1_Ability03_Modifier</a>"
        }
      ],
      "references": []
    },
    "1004012_Boss_Cocolia_RL_Ability02_Part02": {
      "fileName": "1004012_Boss_Cocolia_RL_Ability02_Part02",
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
            "value2": 2
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
              },
              "failed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": 0,
                  "enemyList": [
                    {
                      "name": "Create Enemy from Custom",
                      "value": "SummonID01",
                      "summonLocation": "First"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Create Enemies",
              "delayPercent": 0.5,
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "SummonID02",
                  "summonLocation": "AfterCaster"
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
            "name": "AND",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": 1004031,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": "Bronya (Complete)",
                "invertCondition": true
              },
              {
                "name": "Enemy ID",
                "ID": 100403100,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": null,
                "invertCondition": true
              }
            ]
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
              "modifier": "<a class=\"gModGreen\" id=\"1827853653\">Monster_W1_CocoliaP1_RL_IcePower_Summon</a>",
              "valuePerStack": {
                "MDF_DamageUpRatio_PerLayer": {
                  "operator": "Variables[0] ({[PassiveSkill01[3]]}) || RETURN",
                  "displayLines": "{[PassiveSkill01[3]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill01[3]]}"
                  ]
                }
              },
              "casterAssign": "TargetSelf"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1004012_Boss_Cocolia_RL_Ability02_Part01": {
      "fileName": "1004012_Boss_Cocolia_RL_Ability02_Part01",
      "childAbilityList": [
        "1004012_Boss_Cocolia_RL_Ability02_Part01_Camera",
        "1004012_Boss_Cocolia_RL_Ability02_Part01",
        "1004012_Boss_Cocolia_RL_Ability02_Part02"
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
          "ability": "Boss_Cocolia_RL_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1004012_Boss_Cocolia_RL_Ability01_Part02": {
      "fileName": "1004012_Boss_Cocolia_RL_Ability01_Part02",
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
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[0]]}) || Constants[0] (0.2) || MUL || RETURN",
              "displayLines": "({[Skill01[0]]} * 0.2)",
              "constants": [
                0.2
              ],
              "variables": [
                "{[Skill01[0]]}"
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
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[0]]}) || Constants[0] (0.3) || MUL || RETURN",
              "displayLines": "({[Skill01[0]]} * 0.3)",
              "constants": [
                0.3
              ],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "30%"
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
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "operator": "Variables[0] ({[Skill01[0]]}) || Constants[0] (0.1) || MUL || RETURN",
                  "displayLines": "({[Skill01[0]]} * 0.1)",
                  "constants": [
                    0.1
                  ],
                  "variables": [
                    "{[Skill01[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "EnergyGainPercent": "10%"
              }
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1004012_Boss_Cocolia_RL_Ability01_Part01": {
      "fileName": "1004012_Boss_Cocolia_RL_Ability01_Part01",
      "childAbilityList": [
        "1004012_Boss_Cocolia_RL_Ability01_Part01_Camera",
        "1004012_Boss_Cocolia_RL_Ability01_Part01",
        "1004012_Boss_Cocolia_RL_Ability01_Part02"
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
          "ability": "Boss_Cocolia_RL_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1004012_Boss_Cocolia_RL_AIControlAndHPLock": {
      "fileName": "1004012_Boss_Cocolia_RL_AIControlAndHPLock",
      "skillTrigger": "PassiveSkill02",
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
          "modifier": "<a class=\"gModGreen\" id=\"2084822160\">M_Monster_W1_CocoliaP1_LimboHandleEffect</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2084822160\">M_Monster_W1_CocoliaP1_LimboHandleEffect</a>",
          "execute": [
            {
              "eventTrigger": "When Put in Deathstate Limbo"
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "1004012_Boss_Cocolia_RL_PassiveAbility_Initiate": {
      "fileName": "1004012_Boss_Cocolia_RL_PassiveAbility_Initiate",
      "skillTrigger": "PassiveSkill04",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1349231340\">Monster_W1_CocoliaP1_RL_Revive</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1098298174\">Monster_W1_CocoliaP1_RL_LockHP</a>",
          "modifierFlags": [
            "MuteBreak"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 1
                },
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
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
                }
              ]
            }
          ]
        }
      ]
    },
    "1004012_Boss_Cocolia_RL_IceValue": {
      "fileName": "1004012_Boss_Cocolia_RL_IceValue",
      "skillTrigger": "PassiveSkill03",
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
          "modifier": "<a class=\"gModGreen\" id=\"1698013289\">Boss_Cocolia_BattleScore5</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1681235670\">Boss_Cocolia_BattleScore4</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1731568527\">Boss_Cocolia_BattleScore3</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1714790908\">Boss_Cocolia_BattleScore2</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1765123765\">Boss_Cocolia_BattleScore1</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1043898383\">Boss_Cocolia_IceValueManage</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1124446035\">Monster_W1_CocoliaP1_RL_IcePower</a>",
          "valuePerStack": {
            "MDF_DamageUpRatio_PerLayer": {
              "operator": "Variables[0] ({[PassiveSkill01[3]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[3]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[3]]}"
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
          "modifier": "<a class=\"gModGreen\" id=\"-1507922859\">Monster_W1_CocoliaP1_RL_LowHP</a>",
          "valuePerStack": {
            "MDF_LowHPRatio": {
              "operator": "Variables[0] ({[PassiveSkill01[5]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[5]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[5]]}"
              ]
            }
          }
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1043898383\">Boss_Cocolia_IceValueManage</a>",
          "counter": 1,
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "Assign Value to Stat",
                  "variableName": "FrozenScoreCheck",
                  "value": {
                    "operator": "Variables[0] (FrozenScore) || RETURN",
                    "displayLines": "FrozenScore",
                    "constants": [],
                    "variables": [
                      "FrozenScore"
                    ]
                  }
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
                    "value2": 3
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
                        "value1": "DecisionFlag",
                        "compareType": ">",
                        "value2": 3,
                        "contextScope": "TargetEntity"
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
                            "value1": "DecisionFlag",
                            "compareType": ">",
                            "value2": 5,
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
                              "variableName": "DecisionFlag",
                              "value": 1
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
                              "variableName": "DecisionFlag",
                              "value": 3
                            }
                          ]
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
                          "variableName": "DecisionFlag",
                          "value": 1
                        }
                      ]
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
                      "variableName": "DecisionFlag",
                      "value": 1
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "ChargeFlag",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Change Character Transformation",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "phase": "Phase1"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "Phase0"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "ChargeFlag"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1507922859\">Monster_W1_CocoliaP1_RL_LowHP</a>",
          "execute": [
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Battle Event List}}"
                  },
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
                  "ifTargetFound": [
                    {
                      "name": "Force Entity Death",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
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
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "LowHPFlag",
                        "compareType": "=",
                        "value2": 0,
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
                      "variableName": "LowHPFlag",
                      "value": 1
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "BaseSpeed",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;"
                    },
                    {
                      "name": "Add Battle Event",
                      "teamName": "Enemy Team",
                      "eventID": 20001,
                      "statSource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variables": {
                        "MDF_CocoliaP1_RL_BattleEvent_DamagePercentage": {
                          "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                          "displayLines": "{[PassiveSkill01[0]]}",
                          "constants": [],
                          "variables": [
                            "{[PassiveSkill01[0]]}"
                          ]
                        },
                        "MDF_CocoliaP1_RL_BattleEvent_SPAdd": {
                          "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                          "displayLines": "{[PassiveSkill01[1]]}",
                          "constants": [],
                          "variables": [
                            "{[PassiveSkill01[1]]}"
                          ]
                        },
                        "MDF_CocoliaP1_RL_BattleEvent_ActionDelay": 0,
                        "MDF_CocoliaP1_RL_BattleEvent_BaseSpeed": {
                          "operator": "Variables[0] (BaseSpeed) || RETURN",
                          "displayLines": "BaseSpeed",
                          "constants": [],
                          "variables": [
                            "BaseSpeed"
                          ]
                        },
                        "MDF_CocoliaP1_RL_BattleEvent_FrozenDamagePerTurn": {
                          "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                          "displayLines": "{[PassiveSkill01[2]]}",
                          "constants": [],
                          "variables": [
                            "{[PassiveSkill01[2]]}"
                          ]
                        },
                        "MDF_CocoliaP1_RL_BattleEvent_Count": 0
                      }
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
                    }
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
    "1004012_Boss_Cocolia_P2_BossModifier": {
      "fileName": "1004012_Boss_Cocolia_P2_BossModifier",
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
          "modifier": "<a class=\"gModGreen\" id=\"-79024859\">BOSS_COCOLIA_BOSS_MDF</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1068246674\">HideMonsterHUD</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1068246674\">HideMonsterHUD</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]"
            },
            {
              "eventTrigger": "Action Choice Window [Owner]"
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "1004012_Boss_Cocolia_P1_AIControlAndHPLock": {
      "fileName": "1004012_Boss_Cocolia_P1_AIControlAndHPLock",
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
          "modifier": "<a class=\"gModGreen\" id=\"-954371893\">Straight_AIControl</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2084822160\">M_Monster_W1_CocoliaP1_LimboHandleEffect</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-954371893\">Straight_AIControl</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-325261952\">Boss_Cocolia_P1_Ability05_Bonus</a>"
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "matchTags": true,
                      "relatedAchievements": [
                        {
                          "title": "Road to Canossa",
                          "desc": "Interrupt Cocolia's use of \"Wrath of Winterland Saints\" when she is charging",
                          "rarity": "Mid"
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
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-325261952\">Boss_Cocolia_P1_Ability05_Bonus</a>"
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "matchTags": true,
                      "relatedAchievements": [
                        {
                          "title": "Road to Canossa",
                          "desc": "Interrupt Cocolia's use of \"Wrath of Winterland Saints\" when she is charging",
                          "rarity": "Mid"
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
                      "value": 5
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
          "for": "<a class=\"gModGreen\" id=\"mod__2084822160\">M_Monster_W1_CocoliaP1_LimboHandleEffect</a>",
          "execute": [
            {
              "eventTrigger": "When Put in Deathstate Limbo"
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "1004012_Boss_Cocolia_P1_StanceBreakInsert": {
      "fileName": "1004012_Boss_Cocolia_P1_StanceBreakInsert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Looped Event",
          "maxLoops": 3,
          "Event": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1302022455\">Boss_Cocolia_IceValueShow</a>"
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
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Phase_Flag",
            "compareType": "=",
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
              "variableName": "Phase_Flag",
              "value": 2
            }
          ],
          "failed": [
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
      ],
      "references": []
    },
    "1004012_Boss_Cocolia_P1_StateCameraChange_02": {
      "fileName": "1004012_Boss_Cocolia_P1_StateCameraChange_02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "1004012_Boss_Cocolia_P1_StateCameraChange_01": {
      "fileName": "1004012_Boss_Cocolia_P1_StateCameraChange_01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "1004012_Boss_Cocolia_P2_insertAbility": {
      "fileName": "1004012_Boss_Cocolia_P2_insertAbility",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DeathEvent_Trigger_Times",
          "context": "TargetEntity",
          "value": 1,
          "max": 1
        },
        {
          "name": "Remove from Team Target Grouping",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "stayInTeam": false
        },
        {
          "name": "Create Enemies",
          "delayPercent": 0,
          "enemyList": [
            {
              "name": "Create Enemy from Custom",
              "value": "P2ID",
              "summonLocation": "BeforeCaster"
            }
          ]
        }
      ],
      "references": []
    },
    "1004012_Boss_Cocolia_P2_PassiveAbility_Initiate": {
      "fileName": "1004012_Boss_Cocolia_P2_PassiveAbility_Initiate",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "1004012_Boss_Cocolia_P1_AbilityTest_Part02": {
      "fileName": "1004012_Boss_Cocolia_P1_AbilityTest_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1004012_Boss_Cocolia_P1_AbilityTest_Part01": {
      "fileName": "1004012_Boss_Cocolia_P1_AbilityTest_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Boss_Cocolia_P1_AbilityTest_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "1004012_Boss_Cocolia_P1_Ability08_Part02": {
      "fileName": "1004012_Boss_Cocolia_P1_Ability08_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"807903782\">Boss_Cocolia_P2_BattleEvent_ListenPlayerUltra</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"801976131\">ListenHPRatio_Modifier</a>"
        }
      ],
      "references": []
    },
    "1004012_Boss_Cocolia_P1_Ability08_Part01": {
      "fileName": "1004012_Boss_Cocolia_P1_Ability08_Part01",
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
          "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Boss_Cocolia_P1_Ability08_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1004012_Boss_Cocolia_P1_LockHP": {
      "fileName": "1004012_Boss_Cocolia_P1_LockHP",
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
          "modifier": "<a class=\"gModGreen\" id=\"801976131\">ListenHPRatio_Modifier</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__801976131\">ListenHPRatio_Modifier</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": {
                    "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED_2) || RETURN",
                    "displayLines": "ENEMIES_OBJECT_UNUSED_2",
                    "constants": [],
                    "variables": [
                      "ENEMIES_OBJECT_UNUSED_2"
                    ]
                  }
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
                    "value1": "Blizzard_Trigger_Times",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-898477955\">StanceBreakState</a>"
                    },
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "Blizzard_Trigger_Times",
                      "context": "TargetEntity",
                      "value": 1,
                      "max": 1
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Boss_Cocolia_P1_Ability08_Part01",
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
    "1004012_Boss_Cocolia_P1_Ability07_Part02": {
      "fileName": "1004012_Boss_Cocolia_P1_Ability07_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"1302022455\">Boss_Cocolia_IceValueShow</a>"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1004012_Boss_Cocolia_P1_Ability07_Part01": {
      "fileName": "1004012_Boss_Cocolia_P1_Ability07_Part01",
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
          "ability": "Boss_Cocolia_P1_Ability07_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1004012_Boss_Cocolia_P1_Ability06_Part02": {
      "fileName": "1004012_Boss_Cocolia_P1_Ability06_Part02",
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
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (UnusedUnderThisBase_109) || Constants[0] (0.2) || MUL || RETURN",
              "displayLines": "(UnusedUnderThisBase_109 * 0.2)",
              "constants": [
                0.2
              ],
              "variables": [
                "UnusedUnderThisBase_109"
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
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (UnusedUnderThisBase_109) || Constants[0] (0.3) || MUL || RETURN",
              "displayLines": "(UnusedUnderThisBase_109 * 0.3)",
              "constants": [
                0.3
              ],
              "variables": [
                "UnusedUnderThisBase_109"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "30%"
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
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "operator": "Variables[0] (UnusedUnderThisBase_109) || Constants[0] (0.1) || MUL || RETURN",
                  "displayLines": "(UnusedUnderThisBase_109 * 0.1)",
                  "constants": [
                    0.1
                  ],
                  "variables": [
                    "UnusedUnderThisBase_109"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "EnergyGainPercent": "10%"
              }
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1004012_Boss_Cocolia_P1_Ability06_Part01": {
      "fileName": "1004012_Boss_Cocolia_P1_Ability06_Part01",
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
          "ability": "Boss_Cocolia_P1_Ability06_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1004012_Boss_Cocolia_P1_Ability05_Part02": {
      "fileName": "1004012_Boss_Cocolia_P1_Ability05_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1440219637\">Boss_Cocolia_Endurance</a>"
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
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "ifTargetFound": [
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
              "name": "Create Enemies",
              "delayPercent": 0.25,
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "Ice_Lance_ID",
                  "summonLocation": "BeforeCaster"
                }
              ]
            },
            {
              "name": "Create Enemies",
              "delayPercent": 0.25,
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "Ice_Lance_ID",
                  "summonLocation": "First"
                }
              ]
            },
            {
              "name": "Create Enemies",
              "delayPercent": 0.75,
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "Ice_Lance_ID_2",
                  "summonLocation": "AfterCaster"
                }
              ]
            },
            {
              "name": "Create Enemies",
              "delayPercent": 0.75,
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "Ice_Lance_ID_2",
                  "summonLocation": "Last"
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
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-325261952\">Boss_Cocolia_P1_Ability05_Bonus</a>",
          "duration": 1,
          "valuePerStack": {
            "ModifierDamageUpValue": {
              "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
              "displayLines": "{[Skill05[0]]}",
              "constants": [],
              "variables": [
                "{[Skill05[0]]}"
              ]
            }
          }
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1004012_Boss_Cocolia_P1_Ability05_Part01": {
      "fileName": "1004012_Boss_Cocolia_P1_Ability05_Part01",
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
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1075172229\">HeiShengBei_PreAddBEModifier</a>",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
            }
          ]
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Boss_Cocolia_P1_Ability05_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase2"
        }
      ],
      "references": []
    },
    "1004012_Boss_Cocolia_P1_Ability04_Part02": {
      "fileName": "1004012_Boss_Cocolia_P1_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]",
              "duration": {
                "operator": "Variables[0] (UnusedUnderThisBase_139) || RETURN",
                "displayLines": "UnusedUnderThisBase_139",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_139"
                ]
              },
              "baseChance": 1,
              "valuePerStack": {
                "Modifier_Frozen_DamagePercentage": {
                  "operator": "Variables[0] (UnusedUnderThisBase_140) || RETURN",
                  "displayLines": "UnusedUnderThisBase_140",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_140"
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
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Ice",
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
          "modifier": "<a class=\"gModGreen\" id=\"1302022455\">Boss_Cocolia_IceValueShow</a>"
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__680810622\">Cocolia_P1_DOT_TAG</a>"
        }
      ]
    },
    "1004012_Boss_Cocolia_P1_Ability04_Part01": {
      "fileName": "1004012_Boss_Cocolia_P1_Ability04_Part01",
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
          "ability": "Boss_Cocolia_P1_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1004012_Boss_Cocolia_P1_Ability03_Part02": {
      "fileName": "1004012_Boss_Cocolia_P1_Ability03_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1440219637\">Boss_Cocolia_Endurance</a>"
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (Boss_Cocolia_IceValue) || RETURN",
            "displayLines": "Boss_Cocolia_IceValue",
            "constants": [],
            "variables": [
              "Boss_Cocolia_IceValue"
            ]
          },
          "Event": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1302022455\">Boss_Cocolia_IceValueShow</a>"
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || Constants[0] (0.33) || MUL || RETURN",
              "displayLines": "({[Skill03[0]]} * 0.33)",
              "constants": [
                0.33
              ],
              "variables": [
                "{[Skill03[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "33%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || Constants[0] (0.33) || MUL || RETURN",
              "displayLines": "({[Skill03[0]]} * 0.33)",
              "constants": [
                0.33
              ],
              "variables": [
                "{[Skill03[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "33%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || Constants[0] (0.34) || MUL || RETURN",
              "displayLines": "({[Skill03[0]]} * 0.34)",
              "constants": [
                0.34
              ],
              "variables": [
                "{[Skill03[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "34%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase0"
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
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-325261952\">Boss_Cocolia_P1_Ability05_Bonus</a>"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1004012_Boss_Cocolia_P1_Ability03_Part01": {
      "fileName": "1004012_Boss_Cocolia_P1_Ability03_Part01",
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
          "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1117029266\">Cocolia_P1_Ability03_Modifier</a>"
        },
        "Ability Start",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Boss_Cocolia_P1_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1117029266\">Cocolia_P1_Ability03_Modifier</a>"
        }
      ],
      "references": []
    },
    "1004012_Boss_Cocolia_P1_Ability02_Part02": {
      "fileName": "1004012_Boss_Cocolia_P1_Ability02_Part02",
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
            "compareType": "=",
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
                  "value": "Ice_Lance_ID",
                  "summonLocation": "BeforeCaster"
                }
              ]
            },
            {
              "name": "Create Enemies",
              "delayPercent": 0.5,
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "Ice_Lance_ID_2",
                  "summonLocation": "AfterCaster"
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
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1004012_Boss_Cocolia_P1_Ability02_Part01": {
      "fileName": "1004012_Boss_Cocolia_P1_Ability02_Part01",
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
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1075172229\">HeiShengBei_PreAddBEModifier</a>",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
            }
          ]
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Boss_Cocolia_P1_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1004012_Boss_Cocolia_P1_Insert": {
      "fileName": "1004012_Boss_Cocolia_P1_Insert",
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
          "variableName": "InsertController"
        }
      ],
      "references": []
    },
    "1004012_Boss_Cocolia_IceValue": {
      "fileName": "1004012_Boss_Cocolia_IceValue",
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
          "modifier": "<a class=\"gModGreen\" id=\"1681235670\">Boss_Cocolia_BattleScore4</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1731568527\">Boss_Cocolia_BattleScore3</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1714790908\">Boss_Cocolia_BattleScore2</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1765123765\">Boss_Cocolia_BattleScore1</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1043898383\">Boss_Cocolia_IceValueManage</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1043898383\">Boss_Cocolia_IceValueManage</a>",
          "counter": 1,
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
                  "variableName": "InsertController"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1230340009\">Monster_W1_CocoliaP1_RemoveOneMore</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Hit"
            },
            {
              "eventTrigger": "Take Damage End [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Damage Type/Element",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "list": [
                          "Fire"
                        ]
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "LeftHandAlive",
                        "compareType": "=",
                        "value2": 0,
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
                      "variableName": "InsertController",
                      "value": 1
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
                        "name": "Compare: Variable",
                        "value1": "InsertController",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Skill Type",
                            "skillType": "Skill"
                          },
                          {
                            "name": "Skill Type",
                            "skillType": "Ultimate"
                          }
                        ]
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
                      "modifier": "<a class=\"gModGreen\" id=\"1302022455\">Boss_Cocolia_IceValueShow</a>"
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
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-325261952\">Boss_Cocolia_P1_Ability05_Bonus</a>"
                  },
                  "passed": [
                    {
                      "name": "Change Character Transformation",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "phase": "Phase1"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "Phase0"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "1004012_Boss_Cocolia_P1_Ability01_Part02": {
      "fileName": "1004012_Boss_Cocolia_P1_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED_1) || Constants[0] (0.5) || MUL || RETURN",
              "displayLines": "(ENEMIES_OBJECT_UNUSED_1 * 0.5)",
              "constants": [
                0.5
              ],
              "variables": [
                "ENEMIES_OBJECT_UNUSED_1"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "50%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED_1) || Constants[0] (0.5) || MUL || RETURN",
              "displayLines": "(ENEMIES_OBJECT_UNUSED_1 * 0.5)",
              "constants": [
                0.5
              ],
              "variables": [
                "ENEMIES_OBJECT_UNUSED_1"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "50%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1302022455\">Boss_Cocolia_IceValueShow</a>"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1004012_Boss_Cocolia_P1_Ability01_Part01": {
      "fileName": "1004012_Boss_Cocolia_P1_Ability01_Part01",
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
          "ability": "Boss_Cocolia_P1_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1004012_Monster_W1_CocoliaP1_PassiveAbility_BGM": {
      "fileName": "1004012_Monster_W1_CocoliaP1_PassiveAbility_BGM",
      "childAbilityList": [
        "1004012_Monster_W1_CocoliaP1_PassiveAbility_BGM"
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
          "modifier": "<a class=\"gModGreen\" id=\"818085954\">Enemy_W1_CocoliaP1_ResetStageBGM</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__818085954\">Enemy_W1_CocoliaP1_ResetStageBGM</a>",
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
    "1004012_Modifiers": {
      "fileName": "1004012_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__826546199\">Modifier_CocoliaP1_RL_BattleEvent</a>",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "BattleEventAbility_CocoliaP1_RL_Insert",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "priorityTag": "MonsterInsertAttackSelf",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__920837138\">Monster_W1_CocoliaP1_RL_Endurance</a>",
          "modifierFlags": [
            "Endurance"
          ],
          "execute": [
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
          "for": "<a class=\"gModGreen\" id=\"mod__946339673\">Monster_W1_CocoliaP1_RL_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
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
          "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_DamageUpRatio_PerLayer</span>. This effect can stack.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "DMG Boost",
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1606994047\">Monster_W1_CocoliaP1_RL_Frost</a>",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (MDF_SpeedAddedRatio_PerLayer) || Variables[1] (ModifierLayers) || MUL || SUB || RETURN",
                    "displayLines": "(0 - (MDF_SpeedAddedRatio_PerLayer * ModifierLayers))",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "MDF_SpeedAddedRatio_PerLayer",
                      "ModifierLayers"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": null,
                    "compareType": "=",
                    "value2": {
                      "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED_3) || RETURN",
                      "displayLines": "ENEMIES_OBJECT_UNUSED_3",
                      "constants": [],
                      "variables": [
                        "ENEMIES_OBJECT_UNUSED_3"
                      ]
                    },
                    "valueType": "Layer"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]",
                      "duration": 1,
                      "valuePerStack": {
                        "Modifier_Frozen_DamagePercentage": {
                          "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED_4) || RETURN",
                          "displayLines": "ENEMIES_OBJECT_UNUSED_4",
                          "constants": [],
                          "variables": [
                            "ENEMIES_OBJECT_UNUSED_4"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{All Team Members}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"946339673\">Monster_W1_CocoliaP1_RL_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
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
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
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
          "for": "<a class=\"gModGreen\" id=\"mod__1827853653\">Monster_W1_CocoliaP1_RL_IcePower_Summon</a>",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "DamageUpFlag",
                    "compareType": ">",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Looped Event",
                      "maxLoops": {
                        "operator": "Variables[0] (DamageUpFlag) || RETURN",
                        "displayLines": "DamageUpFlag",
                        "constants": [],
                        "variables": [
                          "DamageUpFlag"
                        ]
                      },
                      "Event": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"946339673\">Monster_W1_CocoliaP1_RL_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
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
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "DamageUpFlag"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "DamageUpFlag",
                    "compareType": ">",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Looped Event",
                      "maxLoops": {
                        "operator": "Variables[0] (DamageUpFlag) || RETURN",
                        "displayLines": "DamageUpFlag",
                        "constants": [],
                        "variables": [
                          "DamageUpFlag"
                        ]
                      },
                      "Event": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"946339673\">Monster_W1_CocoliaP1_RL_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
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
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "DamageUpFlag"
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
                    "name": "Modifier Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "STAT_CTRL_Frozen"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "DamageUpFlag",
                      "context": "TargetEntity",
                      "value": 1,
                      "max": 5
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1124446035\">Monster_W1_CocoliaP1_RL_IcePower</a>",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "DamageUpFlag",
                    "compareType": ">",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Looped Event",
                      "maxLoops": {
                        "operator": "Variables[0] (DamageUpFlag) || RETURN",
                        "displayLines": "DamageUpFlag",
                        "constants": [],
                        "variables": [
                          "DamageUpFlag"
                        ]
                      },
                      "Event": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"946339673\">Monster_W1_CocoliaP1_RL_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
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
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "DamageUpFlag"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "DamageUpFlag",
                    "compareType": ">",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Looped Event",
                      "maxLoops": {
                        "operator": "Variables[0] (DamageUpFlag) || RETURN",
                        "displayLines": "DamageUpFlag",
                        "constants": [],
                        "variables": [
                          "DamageUpFlag"
                        ]
                      },
                      "Event": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"946339673\">Monster_W1_CocoliaP1_RL_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
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
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "DamageUpFlag"
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "STAT_CTRL_Frozen"
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Player Team"
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
                      "variableName": "DamageUpFlag",
                      "context": "TargetEntity",
                      "value": 1,
                      "max": 5
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
          "for": "<a class=\"gModGreen\" id=\"mod__-883410937\">Monster_W1_CocoliaP1_RL_Ability05_Bonus</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (ModifierDamageUpValue) || RETURN",
                    "displayLines": "ModifierDamageUpValue",
                    "constants": [],
                    "variables": [
                      "ModifierDamageUpValue"
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
          "stackData": [
            "ModifierDamageUpValue"
          ],
          "latentQueue": [],
          "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">ModifierDamageUpValue</span>.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "DMG Boost",
          "duration": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1349231340\">Monster_W1_CocoliaP1_RL_Revive</a>",
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
                    "value1": "CurrentHP",
                    "compareType": "<=",
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
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"920837138\">Monster_W1_CocoliaP1_RL_Endurance</a>"
                            },
                            {
                              "name": "Set Enemy Phase",
                              "mode": "Inc"
                            },
                            {
                              "name": "Inject Ability Use",
                              "abilityName": "Monster_W1_CocoliaP1_RL_PassiveAbility_Insert_Part01",
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
                                "value1": "DecisionFlag",
                                "compareType": "=",
                                "value2": 5,
                                "contextScope": "TargetEntity"
                              }
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
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"920837138\">Monster_W1_CocoliaP1_RL_Endurance</a>"
                            },
                            {
                              "name": "Set Enemy Phase",
                              "mode": "Inc"
                            },
                            {
                              "name": "Inject Ability Use",
                              "abilityName": "Monster_W1_CocoliaP1_RL_PassiveAbility_Insert_Part02",
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
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1440219637\">Boss_Cocolia_Endurance</a>",
          "modifierFlags": [
            "MuteHitH"
          ],
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-79024859\">BOSS_COCOLIA_BOSS_MDF</a>",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [],
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
          "for": "<a class=\"gModGreen\" id=\"mod__-325261952\">Boss_Cocolia_P1_Ability05_Bonus</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
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
                    "operator": "Variables[0] (ModifierDamageUpValue) || RETURN",
                    "displayLines": "ModifierDamageUpValue",
                    "constants": [],
                    "variables": [
                      "ModifierDamageUpValue"
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
          "stackData": [
            "ModifierDamageUpValue"
          ],
          "latentQueue": [],
          "duration": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1994698840\">Cocolia_P1_Energy_3</a>",
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
                    "modifier": "<a class=\"gModGreen\" id=\"-1117029266\">Cocolia_P1_Ability03_Modifier</a>"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2011476459\">Cocolia_P1_Energy_2</a>",
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
                    "modifier": "<a class=\"gModGreen\" id=\"-1117029266\">Cocolia_P1_Ability03_Modifier</a>"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__404315430\">Cocolia_P1_Energy</a>",
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
                    "modifier": "<a class=\"gModGreen\" id=\"-1117029266\">Cocolia_P1_Ability03_Modifier</a>"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1698013289\">Boss_Cocolia_BattleScore5</a>",
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
                  "variableName": "Cocolia_BattleScore5_Flag"
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
                    "value1": "Cocolia_BattleScore5_Flag",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "matchTags": true,
                      "relatedAchievements": [
                        {
                          "title": "Road to Canossa",
                          "desc": "Interrupt Cocolia's use of \"Wrath of Winterland Saints\" when she is charging",
                          "rarity": "Mid"
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
                    "value1": "Cocolia_BattleScore5_Flag",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "matchTags": true,
                      "relatedAchievements": [
                        {
                          "title": "Road to Canossa",
                          "desc": "Interrupt Cocolia's use of \"Wrath of Winterland Saints\" when she is charging",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1681235670\">Boss_Cocolia_BattleScore4</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Character ID",
                    "ID": 1101,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Bronya"
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "matchTags": true,
                      "relatedAchievements": [
                        {
                          "title": "Et tu, Bronya?",
                          "desc": "Use Bronya to deal the final blow in a victory against boss Cocolia",
                          "rarity": "Mid",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1731568527\">Boss_Cocolia_BattleScore3</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Character ID",
                    "ID": 1103,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Serval"
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "matchTags": true,
                      "relatedAchievements": [
                        {
                          "title": "Serval's Parting Gift",
                          "desc": "Use Serval to deal the final blow in a victory against boss Cocolia",
                          "rarity": "Mid",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1714790908\">Boss_Cocolia_BattleScore2</a>",
          "modifierFlags": [
            "ListenBattleEventSkill"
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
                  "variableName": "Gepard_BattleScore2_Flag"
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Character ID",
                        "ID": 1101,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Bronya"
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Ultimate"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "matchTags": true,
                      "relatedAchievements": []
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
          "for": "<a class=\"gModGreen\" id=\"mod__1765123765\">Boss_Cocolia_BattleScore1</a>",
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
                  "variableName": "CocoliaP1_BattleScore1_Flag"
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
                    "value": "W1_Ice"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "CocoliaP1_BattleScore1_Flag",
                      "context": "TargetEntity",
                      "value": 1,
                      "max": 4
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "CocoliaP1_BattleScore1_Flag",
                    "compareType": "=",
                    "value2": 4,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "matchTags": true,
                      "relatedAchievements": [
                        {
                          "title": "Homemade Crushed Ice",
                          "desc": "Defeat the Ice Edge summoned by Cocolia #1[i] time(s)",
                          "rarity": "Low",
                          "params": [
                            4
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "W1_Bronya"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Achievement",
                      "matchTags": true,
                      "relatedAchievements": [
                        {
                          "title": "Save the Princess",
                          "desc": "Defeat Cocolia without defeating Bronya",
                          "rarity": "High"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1230340009\">Monster_W1_CocoliaP1_RemoveOneMore</a>",
          "execute": [
            {
              "eventTrigger": "Action End [Owner]",
              "execute": [
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
                        "value2": 3,
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
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
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
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-1075172229\">HeiShengBei_PreAddBEModifier</a>"
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "InsertController"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1230090241\">Boss_Cocolia_P1_Endurance</a>",
          "modifierFlags": [
            "MuteHitH"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1117029266\">Cocolia_P1_Ability03_Modifier</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1302022455\">Boss_Cocolia_IceValueShow</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Boss_Cocolia_IceValue",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"404315430\">Cocolia_P1_Energy</a>"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2011476459\">Cocolia_P1_Energy_2</a>"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1994698840\">Cocolia_P1_Energy_3</a>"
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Boss_Cocolia_IceValue",
                        "compareType": "=",
                        "value2": 2
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"404315430\">Cocolia_P1_Energy</a>"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"2011476459\">Cocolia_P1_Energy_2</a>"
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1994698840\">Cocolia_P1_Energy_3</a>"
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "Boss_Cocolia_IceValue",
                            "compareType": "=",
                            "value2": 3
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"404315430\">Cocolia_P1_Energy</a>"
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"2011476459\">Cocolia_P1_Energy_2</a>"
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1994698840\">Cocolia_P1_Energy_3</a>"
                            }
                          ],
                          "failed": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"404315430\">Cocolia_P1_Energy</a>"
                            },
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"2011476459\">Cocolia_P1_Energy_2</a>"
                            },
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1994698840\">Cocolia_P1_Energy_3</a>"
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
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1485263337\">Boss_Cocolia_MuteHitFly_Modifier</a>",
          "modifierFlags": [
            "MuteHitFly"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "references": []
    },
    "1004012_BE_BattleEvents": {
      "fileName": "1004012_BE_BattleEvents",
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
          "ID": 20001,
          "team": "Enemy Team",
          "eventType": "Assist",
          "abilityList": [
            "BattleEventAbility_CocoliaP1_RL",
            "BattleEventAbility_CocoliaP1_RL_Insert"
          ],
          "overridesArray": [
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
              "value": 100
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CharacterLevel</span>&nbsp;",
              "value": 1
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateSUM</span>&nbsp;",
              "value": 1
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageSUM</span>&nbsp;",
              "value": 1
            }
          ]
        }
      ],
      "references": []
    }
  }
}