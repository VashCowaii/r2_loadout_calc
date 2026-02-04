const compositeAbilityObject = {
  "fullCharacterName": 2023030,
  "trimCharacterName": 2023030,
  "abilityList": [
    "2023030_Monster_XP_Elite02_02_BattlePerform_Insert",
    "2023030_Monster_XP_Elite02_02_BattlePerformAbility",
    "2023030_Monster_XP_Elite02_02_InstantDirtyHPAbility",
    "2023030_Monster_XP_Elite02_02_MuteDirtyHPAbility",
    "2023030_Monster_XP_Elite02_02_Ability05_Part02",
    "2023030_Monster_XP_Elite02_02_Ability05_Part01",
    "2023030_Monster_XP_Elite02_02_Ability04_Part02",
    "2023030_Monster_XP_Elite02_02_Ability04_Part01",
    "2023030_Monster_XP_Elite02_02_Ability03_Part02",
    "2023030_Monster_XP_Elite02_02_Ability03_Part01",
    "2023030_Monster_XP_Elite02_02_Ability02_Part02",
    "2023030_Monster_XP_Elite02_02_Ability02_Part01",
    "2023030_Monster_XP_Elite02_02_Ability01_Part02",
    "2023030_Monster_XP_Elite02_02_Ability01_Part01",
    "2023030_Monster_XP_Elite02_02_Passive01",
    "2023030_Modifiers"
  ],
  "abilityObject": {
    "2023030_Monster_XP_Elite02_02_BattlePerform_Insert": {
      "fileName": "2023030_Monster_XP_Elite02_02_BattlePerform_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "2023030_Monster_XP_Elite02_02_BattlePerformAbility": {
      "fileName": "2023030_Monster_XP_Elite02_02_BattlePerformAbility",
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_XP_Elite02_02_BattlePerform_LockHP"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Monster_XP_Elite02_02_Instance_DisableAction",
          "modifierFlags": [
            "DisableAction"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_XP_Elite02_02_BattlePerform_LockHP",
          "modifierFlags": [
            "Deathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Put in Deathstate Limbo",
              "execute": [
                {
                  "name": "Add Ability",
                  "abilityName": "Monster_XP_Elite02_02_BattlePerform_Insert"
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_XP_Elite02_02_BattlePerform_Insert",
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "priorityTag": "MonsterDeathRattle",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Mute Last Kill",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
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
    "2023030_Monster_XP_Elite02_02_InstantDirtyHPAbility": {
      "fileName": "2023030_Monster_XP_Elite02_02_InstantDirtyHPAbility",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "scope": "TargetEntity",
          "variableName": "SpecialFlag",
          "value": 2
        }
      ],
      "references": []
    },
    "2023030_Monster_XP_Elite02_02_MuteDirtyHPAbility": {
      "fileName": "2023030_Monster_XP_Elite02_02_MuteDirtyHPAbility",
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
          "modifier": "Monster_XP_Elite02_02_MuteDirtyHP"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Monster_XP_Elite02_02_MuteDirtyHP",
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "2023030_Monster_XP_Elite02_02_Ability05_Part02": {
      "fileName": "2023030_Monster_XP_Elite02_02_Ability05_Part02",
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
          "modifier": "Monster_XP_Elite02_02_ChargeEffect[<span class=\"descriptionNumberColor\">Japa</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "Standard_BlackBlood[<span class=\"descriptionNumberColor\">Prana-Siphoned</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
            "displayLines": "{[Skill05[1]]}",
            "constants": [],
            "variables": [
              "{[Skill05[1]]}"
            ]
          },
          "baseChance": {
            "operator": "Variables[0] ({[Skill05[2]]}) || RETURN",
            "displayLines": "{[Skill05[2]]}",
            "constants": [],
            "variables": [
              "{[Skill05[2]]}"
            ]
          },
          "valuePerStack": {
            "MDF_DirtyHPRatio": {
              "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
              "displayLines": "{[Skill05[0]]}",
              "constants": [],
              "variables": [
                "{[Skill05[0]]}"
              ]
            }
          },
          "success": []
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "2023030_Monster_XP_Elite02_02_Ability05_Part01": {
      "fileName": "2023030_Monster_XP_Elite02_02_Ability05_Part01",
      "childAbilityList": [
        "2023030_Monster_XP_Elite02_02_Ability05_Camera",
        "2023030_Monster_XP_Elite02_02_Ability05_Part01",
        "2023030_Monster_XP_Elite02_02_Ability05_Part02"
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
          "ability": "Monster_XP_Elite02_02_Ability05_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2023030_Monster_XP_Elite02_02_Ability04_Part02": {
      "fileName": "2023030_Monster_XP_Elite02_02_Ability04_Part02",
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
          "modifier": "Monster_XP_Elite02_02_ChargeEffect[<span class=\"descriptionNumberColor\">Japa</span>]"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "SpecialFlag",
            "compareType": "=",
            "value2": 0,
            "contextScope": "TargetEntity"
          }
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "2023030_Monster_XP_Elite02_02_Ability04_Part01": {
      "fileName": "2023030_Monster_XP_Elite02_02_Ability04_Part01",
      "childAbilityList": [
        "2023030_Monster_XP_Elite02_02_Ability04_Camera",
        "2023030_Monster_XP_Elite02_02_Ability04_Part01",
        "2023030_Monster_XP_Elite02_02_Ability04_Part02"
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
          "ability": "Monster_XP_Elite02_02_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2023030_Monster_XP_Elite02_02_Ability03_Part02": {
      "fileName": "2023030_Monster_XP_Elite02_02_Ability03_Part02",
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
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
              "displayLines": "{[Skill03[0]]}",
              "constants": [],
              "variables": [
                "{[Skill03[0]]}"
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
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "Standard_DOT_Poison[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
            "displayLines": "{[Skill03[2]]}",
            "constants": [],
            "variables": [
              "{[Skill03[2]]}"
            ]
          },
          "baseChance": {
            "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
            "displayLines": "{[Skill03[1]]}",
            "constants": [],
            "variables": [
              "{[Skill03[1]]}"
            ]
          },
          "valuePerStack": {
            "Modifier_Poison_DamagePercentage": {
              "operator": "Variables[0] ({[Skill03[3]]}) || RETURN",
              "displayLines": "{[Skill03[3]]}",
              "constants": [],
              "variables": [
                "{[Skill03[3]]}"
              ]
            }
          },
          "stackFlag": "CharacterSkill"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "2023030_Monster_XP_Elite02_02_Ability03_Part01": {
      "fileName": "2023030_Monster_XP_Elite02_02_Ability03_Part01",
      "childAbilityList": [
        "2023030_Monster_XP_Elite02_02_Ability03_Camera",
        "2023030_Monster_XP_Elite02_02_Ability03_Part01",
        "2023030_Monster_XP_Elite02_02_Ability03_Part02"
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
          "ability": "Monster_XP_Elite02_02_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2023030_Monster_XP_Elite02_02_Ability02_Part02": {
      "fileName": "2023030_Monster_XP_Elite02_02_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "searchRandom": true
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Wind",
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "Standard_DOT_Poison[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
            "displayLines": "{[Skill02[2]]}",
            "constants": [],
            "variables": [
              "{[Skill02[2]]}"
            ]
          },
          "baseChance": {
            "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
            "displayLines": "{[Skill02[1]]}",
            "constants": [],
            "variables": [
              "{[Skill02[1]]}"
            ]
          },
          "valuePerStack": {
            "Modifier_Poison_DamagePercentage": {
              "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
              "displayLines": "{[Skill02[3]]}",
              "constants": [],
              "variables": [
                "{[Skill02[3]]}"
              ]
            }
          },
          "stackFlag": "CharacterSkill"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "AttackScaling": {
            "DamageType": "Wind",
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
            "EnergyGainPercent": "50%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "modifier": "Standard_DOT_Poison[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
            "displayLines": "{[Skill02[2]]}",
            "constants": [],
            "variables": [
              "{[Skill02[2]]}"
            ]
          },
          "baseChance": {
            "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
            "displayLines": "{[Skill02[1]]}",
            "constants": [],
            "variables": [
              "{[Skill02[1]]}"
            ]
          },
          "valuePerStack": {
            "Modifier_Poison_DamagePercentage": {
              "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
              "displayLines": "{[Skill02[3]]}",
              "constants": [],
              "variables": [
                "{[Skill02[3]]}"
              ]
            }
          },
          "stackFlag": "CharacterSkill"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "2023030_Monster_XP_Elite02_02_Ability02_Part01": {
      "fileName": "2023030_Monster_XP_Elite02_02_Ability02_Part01",
      "childAbilityList": [
        "2023030_Monster_XP_Elite02_02_Ability02_Camera",
        "2023030_Monster_XP_Elite02_02_Ability02_Part01",
        "2023030_Monster_XP_Elite02_02_Ability02_Part02"
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
          "ability": "Monster_XP_Elite02_02_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2023030_Monster_XP_Elite02_02_Ability01_Part02": {
      "fileName": "2023030_Monster_XP_Elite02_02_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Use Custom Character Function",
          "functionName": "Monster_XP_Elite02_02_Ability01_TaskTemplate_DamageWithRandomEffect_FirstHit"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Monster_XP_Elite02_02_Ability01_TaskTemplate_DamageWithRandomEffect"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Monster_XP_Elite02_02_Ability01_TaskTemplate_DamageWithRandomEffect"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Monster_XP_Elite02_02_Ability01_TaskTemplate_DamageWithRandomEffect"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Wind",
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
                "target": "{{Parameter Target}}"
              },
              "modifier": "Standard_DOT_Poison[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
              "duration": {
                "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
                "displayLines": "{[Skill01[2]]}",
                "constants": [],
                "variables": [
                  "{[Skill01[2]]}"
                ]
              },
              "baseChance": {
                "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
                "displayLines": "{[Skill01[1]]}",
                "constants": [],
                "variables": [
                  "{[Skill01[1]]}"
                ]
              },
              "valuePerStack": {
                "Modifier_Poison_DamagePercentage": {
                  "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
                  "displayLines": "{[Skill01[3]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[3]]}"
                  ]
                }
              },
              "stackFlag": "CharacterSkill"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Random Chance",
                "chance": 0.4
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
          ],
          "noTargetFound": [
            "Trigger: Attack End"
          ]
        },
        "Trigger: Ability End"
      ],
      "functions": [
        {
          "name": "CharacterFunctions",
          "functionName": "Monster_XP_Elite02_02_Ability01_TaskTemplate_DamageWithRandomEffect",
          "parse": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Wind",
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
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Standard_DOT_Poison[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
                  "duration": {
                    "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
                    "displayLines": "{[Skill01[2]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill01[2]]}"
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
                    "displayLines": "{[Skill01[1]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill01[1]]}"
                    ]
                  },
                  "valuePerStack": {
                    "Modifier_Poison_DamagePercentage": {
                      "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
                      "displayLines": "{[Skill01[3]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill01[3]]}"
                      ]
                    }
                  },
                  "stackFlag": "CharacterSkill"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Random Chance",
                    "chance": 0.4
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
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Monster_XP_Elite02_02_Ability01_TaskTemplate_DamageWithRandomEffect_FirstHit",
          "parse": [
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
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Wind",
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
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Standard_DOT_Poison[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
                  "duration": {
                    "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
                    "displayLines": "{[Skill01[2]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill01[2]]}"
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
                    "displayLines": "{[Skill01[1]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill01[1]]}"
                    ]
                  },
                  "valuePerStack": {
                    "Modifier_Poison_DamagePercentage": {
                      "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
                      "displayLines": "{[Skill01[3]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill01[3]]}"
                      ]
                    }
                  },
                  "stackFlag": "CharacterSkill"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Random Chance",
                    "chance": 0.4
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
            }
          ]
        }
      ],
      "references": []
    },
    "2023030_Monster_XP_Elite02_02_Ability01_Part01": {
      "fileName": "2023030_Monster_XP_Elite02_02_Ability01_Part01",
      "childAbilityList": [
        "2023030_Monster_XP_Elite02_02_Ability01_Camera",
        "2023030_Monster_XP_Elite02_02_Ability01_Part01",
        "2023030_Monster_XP_Elite02_02_Ability01_Part02"
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
          "ability": "Monster_XP_Elite02_02_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2023030_Monster_XP_Elite02_02_Passive01": {
      "fileName": "2023030_Monster_XP_Elite02_02_Passive01",
      "childAbilityList": [
        "2023030_Monster_XP_Elite02_02_Passive01"
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
          "modifier": "OneMorePerTurn"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_Standard_MuteHitFly"
        }
      ],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_XP_Elite02_02_PartControl"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Monster_XP_Elite02_02_PartControl",
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
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
                        "value2": 5,
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
                        "value1": "SpecialFlag",
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
                      "variableName": "SpecialFlag",
                      "value": 2
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
    "2023030_Modifiers": {
      "fileName": "2023030_Modifiers",
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
          "for": "Monster_XP_Elite02_02_DirtyHPSpecial[<span class=\"descriptionNumberColor\">undefined</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with HP%",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_DirtyHPRatio"
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBlock%</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (1) || Variables[0] (MDF_DirtyHPRatio) || SUB || RETURN",
                    "displayLines": "(1 - MDF_DirtyHPRatio)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "MDF_DirtyHPRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Missing Description",
          "type": "Debuff",
          "duration": 2
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_XP_Elite02_02_DirtyHP[<span class=\"descriptionNumberColor\">Prana-Siphoned</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBlock%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_DirtyHPRatio_PerLayer) || Variables[1] (ModifierLayers) || MUL || RETURN",
                    "displayLines": "(MDF_DirtyHPRatio_PerLayer * ModifierLayers)",
                    "constants": [],
                    "variables": [
                      "MDF_DirtyHPRatio_PerLayer",
                      "ModifierLayers"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Decreases Maximum Restorable HP by <span class=\"descriptionNumberColor\">MDF_DirtyHPRatio_PerLayer</span>.",
          "type": "Debuff",
          "effectName": "Prana-Siphoned",
          "statusName": "Prana-Siphoned",
          "stackLimit": 3,
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
          "for": "Monster_XP_Elite02_02_ChargeEffect[<span class=\"descriptionNumberColor\">Japa</span>]",
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
                "Modifier Deletes Itself",
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Monster_XP_Elite02_02_ChargeEffect[<span class=\"descriptionNumberColor\">Japa</span>]"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "Uses Black Prana's Snare on all targets during the next action.",
          "type": "Buff",
          "effectName": "Japa",
          "statusName": "Japa"
        }
      ],
      "references": []
    }
  }
}