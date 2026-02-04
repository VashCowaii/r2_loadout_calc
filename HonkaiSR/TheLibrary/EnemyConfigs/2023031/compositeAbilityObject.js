const compositeAbilityObject = {
  "fullCharacterName": 2023031,
  "trimCharacterName": 2023031,
  "abilityList": [
    "2023031_Monster_XP_Elite02_02_RLElite_BattlePerformAbility",
    "2023031_Monster_XP_Elite02_02_RLElite_InstantDirtyHPAbility",
    "2023031_Monster_XP_Elite02_02_RLElite_MuteDirtyHPAbility",
    "2023031_Monster_XP_Elite02_02_RLElite_Ability05_Part02",
    "2023031_Monster_XP_Elite02_02_RLElite_Ability05_Part01",
    "2023031_Monster_XP_Elite02_02_RLElite_Ability04_Part02",
    "2023031_Monster_XP_Elite02_02_RLElite_Ability04_Part01",
    "2023031_Monster_XP_Elite02_02_RLElite_Ability03_Part02",
    "2023031_Monster_XP_Elite02_02_RLElite_Ability03_Part01",
    "2023031_Monster_XP_Elite02_02_RLElite_Ability02_Part02",
    "2023031_Monster_XP_Elite02_02_RLElite_Ability02_Part01",
    "2023031_Monster_XP_Elite02_02_RLElite_Ability01_Part02",
    "2023031_Monster_XP_Elite02_02_RLElite_Ability01_Part01",
    "2023031_Monster_XP_Elite02_02_RLElite_AbilityP01",
    "2023031_Monster_XP_Elite02_02_RLElite_Passive01",
    "2023031_Modifiers"
  ],
  "abilityObject": {
    "2023031_Monster_XP_Elite02_02_RLElite_BattlePerformAbility": {
      "fileName": "2023031_Monster_XP_Elite02_02_RLElite_BattlePerformAbility",
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
          "modifier": "Monster_XP_Elite02_02_RLElite_BattlePerform_LockHP"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Monster_XP_Elite02_02_RLElite_Instance_DisableAction",
          "modifierFlags": [
            "DisableAction"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_XP_Elite02_02_RLElite_BattlePerform_LockHP",
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
    "2023031_Monster_XP_Elite02_02_RLElite_InstantDirtyHPAbility": {
      "fileName": "2023031_Monster_XP_Elite02_02_RLElite_InstantDirtyHPAbility",
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
    "2023031_Monster_XP_Elite02_02_RLElite_MuteDirtyHPAbility": {
      "fileName": "2023031_Monster_XP_Elite02_02_RLElite_MuteDirtyHPAbility",
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
          "modifier": "Monster_XP_Elite02_02_RLElite_MuteDirtyHP"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Monster_XP_Elite02_02_RLElite_MuteDirtyHP",
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "2023031_Monster_XP_Elite02_02_RLElite_Ability05_Part02": {
      "fileName": "2023031_Monster_XP_Elite02_02_RLElite_Ability05_Part02",
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
          "modifier": "Monster_XP_Elite02_02_RLElite_ChargeEffect[<span class=\"descriptionNumberColor\">Japa</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "Monster_XP_Elite02_02_RLElite_DirtyHPListener",
          "valuePerStack": {
            "MDF_DirtyHPAddedRatio": {
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
    "2023031_Monster_XP_Elite02_02_RLElite_Ability05_Part01": {
      "fileName": "2023031_Monster_XP_Elite02_02_RLElite_Ability05_Part01",
      "childAbilityList": [
        "2023031_Monster_XP_Elite02_02_RLElite_Ability05_Camera",
        "2023031_Monster_XP_Elite02_02_RLElite_Ability05_Part01",
        "2023031_Monster_XP_Elite02_02_RLElite_Ability05_Part02"
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
          "ability": "Monster_XP_Elite02_02_RLElite_Ability05_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2023031_Monster_XP_Elite02_02_RLElite_Ability04_Part02": {
      "fileName": "2023031_Monster_XP_Elite02_02_RLElite_Ability04_Part02",
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
          "modifier": "Monster_XP_Elite02_02_RLElite_ChargeEffect[<span class=\"descriptionNumberColor\">Japa</span>]"
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
    "2023031_Monster_XP_Elite02_02_RLElite_Ability04_Part01": {
      "fileName": "2023031_Monster_XP_Elite02_02_RLElite_Ability04_Part01",
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
          "ability": "Monster_XP_Elite02_02_RLElite_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2023031_Monster_XP_Elite02_02_RLElite_Ability03_Part02": {
      "fileName": "2023031_Monster_XP_Elite02_02_RLElite_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "modifier": "Standard_BlackBlood[<span class=\"descriptionNumberColor\">Prana-Siphoned</span>]"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "Monster_XP_Elite02_02_RLElite_TryAddDirtyHP"
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
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "AIFlag",
            "compareType": "=",
            "value2": 5
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_XP_Elite02_02_RLElite_ChargeEffect[<span class=\"descriptionNumberColor\">Japa</span>]"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "2023031_Monster_XP_Elite02_02_RLElite_Ability03_Part01": {
      "fileName": "2023031_Monster_XP_Elite02_02_RLElite_Ability03_Part01",
      "childAbilityList": [
        "2023031_Monster_XP_Elite02_02_RLElite_Ability03_Camera",
        "2023031_Monster_XP_Elite02_02_RLElite_Ability03_Part01",
        "2023031_Monster_XP_Elite02_02_RLElite_Ability03_Part02"
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
          "ability": "Monster_XP_Elite02_02_RLElite_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2023031_Monster_XP_Elite02_02_RLElite_Ability02_Part02": {
      "fileName": "2023031_Monster_XP_Elite02_02_RLElite_Ability02_Part02",
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
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "modifier": "Standard_BlackBlood[<span class=\"descriptionNumberColor\">Prana-Siphoned</span>]"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "Monster_XP_Elite02_02_RLElite_TryAddDirtyHP"
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
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Target Right of Ability Target(ST)}}"
            },
            "modifier": "Standard_BlackBlood[<span class=\"descriptionNumberColor\">Prana-Siphoned</span>]"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Target Right of Ability Target(ST)}}"
              },
              "modifier": "Monster_XP_Elite02_02_RLElite_TryAddDirtyHP"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Target Left of Ability Target(ST)}}"
            },
            "modifier": "Standard_BlackBlood[<span class=\"descriptionNumberColor\">Prana-Siphoned</span>]"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Target Left of Ability Target(ST)}}"
              },
              "modifier": "Monster_XP_Elite02_02_RLElite_TryAddDirtyHP"
            }
          ]
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
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "2023031_Monster_XP_Elite02_02_RLElite_Ability02_Part01": {
      "fileName": "2023031_Monster_XP_Elite02_02_RLElite_Ability02_Part01",
      "childAbilityList": [
        "2023031_Monster_XP_Elite02_02_RLElite_Ability02_Camera",
        "2023031_Monster_XP_Elite02_02_RLElite_Ability02_Part01",
        "2023031_Monster_XP_Elite02_02_RLElite_Ability02_Part02"
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
          "ability": "Monster_XP_Elite02_02_RLElite_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2023031_Monster_XP_Elite02_02_RLElite_Ability01_Part02": {
      "fileName": "2023031_Monster_XP_Elite02_02_RLElite_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Use Custom Character Function",
          "functionName": "Monster_XP_Elite02_02_RLElite_Ability01_TaskTemplate_DamageWithRandomEffect_FirstHit"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Monster_XP_Elite02_02_RLElite_Ability01_TaskTemplate_DamageWithRandomEffect"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Monster_XP_Elite02_02_RLElite_Ability01_TaskTemplate_DamageWithRandomEffect"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Monster_XP_Elite02_02_RLElite_Ability01_TaskTemplate_DamageWithRandomEffect"
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
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Standard_BlackBlood[<span class=\"descriptionNumberColor\">Prana-Siphoned</span>]"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_XP_Elite02_02_RLElite_TryAddDirtyHP"
                }
              ]
            },
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
            "Trigger: Attack End",
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
          "functionName": "Monster_XP_Elite02_02_RLElite_Ability01_TaskTemplate_DamageWithRandomEffect_FirstHit",
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
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Standard_BlackBlood[<span class=\"descriptionNumberColor\">Prana-Siphoned</span>]"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Monster_XP_Elite02_02_RLElite_TryAddDirtyHP"
                    }
                  ]
                },
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
          "functionName": "Monster_XP_Elite02_02_RLElite_Ability01_TaskTemplate_DamageWithRandomEffect",
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
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Standard_BlackBlood[<span class=\"descriptionNumberColor\">Prana-Siphoned</span>]"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Monster_XP_Elite02_02_RLElite_TryAddDirtyHP"
                    }
                  ]
                },
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
    "2023031_Monster_XP_Elite02_02_RLElite_Ability01_Part01": {
      "fileName": "2023031_Monster_XP_Elite02_02_RLElite_Ability01_Part01",
      "childAbilityList": [
        "2023031_Monster_XP_Elite02_02_RLElite_Ability01_Camera",
        "2023031_Monster_XP_Elite02_02_RLElite_Ability01_Part01",
        "2023031_Monster_XP_Elite02_02_RLElite_Ability01_Part02"
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
          "ability": "Monster_XP_Elite02_02_RLElite_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2023031_Monster_XP_Elite02_02_RLElite_AbilityP01": {
      "fileName": "2023031_Monster_XP_Elite02_02_RLElite_AbilityP01",
      "childAbilityList": [
        "2023031_Monster_XP_Elite02_02_RLElite_AbilityP01"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
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
          "variableName": "SpecialFlag",
          "value": 2
        }
      ],
      "references": []
    },
    "2023031_Monster_XP_Elite02_02_RLElite_Passive01": {
      "fileName": "2023031_Monster_XP_Elite02_02_RLElite_Passive01",
      "childAbilityList": [
        "2023031_Monster_XP_Elite02_02_RLElite_Passive01"
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
          "modifier": "Monster_XP_Elite02_02_RLElite_PartControl"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Monster_XP_Elite02_02_RLElite_PartControl",
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
                  "value": 3
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "2023031_Modifiers": {
      "fileName": "2023031_Modifiers",
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
          "for": "Monster_XP_Elite02_02_RLElite_TryAddDirtyHP",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "ImmuneDebuff"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
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
                      "valuePerStack": {
                        "MDF_DirtyHPRatio": 0.1
                      }
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Monster_XP_Elite02_02_RLElite_TryAddDirtyHP"
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
          "for": "Monster_XP_Elite02_02_RLElite_DirtyHPListener",
          "stackType": "Replace",
          "modifierFlags": [
            "RemoveWhenCasterDead"
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
                  "variableName": "MDF_CurrentDirtyHPRatio"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_MaxDirtyHPRatio",
                  "value": {
                    "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
                    "displayLines": "{[SkillP01[0]]}",
                    "constants": [],
                    "variables": [
                      "{[SkillP01[0]]}"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_CurrentDirtyHPRatio",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPBlock%</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_CurrentDirtyHPRatio",
                  "value": {
                    "operator": "Variables[0] (MDF_DirtyHPAddedRatio) || RETURN",
                    "displayLines": "MDF_DirtyHPAddedRatio",
                    "constants": [],
                    "variables": [
                      "MDF_DirtyHPAddedRatio"
                    ]
                  },
                  "max": {
                    "operator": "Variables[0] (MDF_MaxDirtyHPRatio) || RETURN",
                    "displayLines": "MDF_MaxDirtyHPRatio",
                    "constants": [],
                    "variables": [
                      "MDF_MaxDirtyHPRatio"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "Standard_BlackBlood[<span class=\"descriptionNumberColor\">Prana-Siphoned</span>]"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "ImmuneDebuff"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Stat",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "MDF_CurrentDirtyHPRatio",
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPBlock%</span>&nbsp;"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
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
                          "valuePerStack": {
                            "MDF_DirtyHPRatio": {
                              "operator": "Variables[0] (MDF_CurrentDirtyHPRatio) || RETURN",
                              "displayLines": "MDF_CurrentDirtyHPRatio",
                              "constants": [],
                              "variables": [
                                "MDF_CurrentDirtyHPRatio"
                              ]
                            }
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "Standard_BlackBlood[<span class=\"descriptionNumberColor\">Prana-Siphoned</span>]"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
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
                          "valuePerStack": {
                            "MDF_DirtyHPRatio": {
                              "operator": "Variables[0] (MDF_CurrentDirtyHPRatio) || RETURN",
                              "displayLines": "MDF_CurrentDirtyHPRatio",
                              "constants": [],
                              "variables": [
                                "MDF_CurrentDirtyHPRatio"
                              ]
                            }
                          }
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
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
                          "operator": "Variables[0] (MDF_CurrentDirtyHPRatio) || RETURN",
                          "displayLines": "MDF_CurrentDirtyHPRatio",
                          "constants": [],
                          "variables": [
                            "MDF_CurrentDirtyHPRatio"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked Start [Owner]",
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
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "Standard_BlackBlood[<span class=\"descriptionNumberColor\">Prana-Siphoned</span>]"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 2023031,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "The Ascended (Bug)"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with HP%",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_HPRatioBeforeAttacked"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked End [Owner] [ADV?]",
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
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "Standard_BlackBlood[<span class=\"descriptionNumberColor\">Prana-Siphoned</span>]"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 2023031,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "The Ascended (Bug)"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with HP%",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_HPRatioAfterAttacked"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_CurrentDirtyHPRatio",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPBlock%</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_CurrentDirtyHPRatio",
                      "value": {
                        "operator": "Variables[0] (MDF_HPRatioAfterAttacked) || Variables[1] (MDF_HPRatioBeforeAttacked) || SUB || RETURN",
                        "displayLines": "(MDF_HPRatioAfterAttacked - MDF_HPRatioBeforeAttacked)",
                        "constants": [],
                        "variables": [
                          "MDF_HPRatioAfterAttacked",
                          "MDF_HPRatioBeforeAttacked"
                        ]
                      },
                      "max": {
                        "operator": "Variables[0] (MDF_MaxDirtyHPRatio) || RETURN",
                        "displayLines": "MDF_MaxDirtyHPRatio",
                        "constants": [],
                        "variables": [
                          "MDF_MaxDirtyHPRatio"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "Monster_XP_Elite02_02_RLElite_TryAddDirtyHP"
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "Standard_BlackBlood[<span class=\"descriptionNumberColor\">Prana-Siphoned</span>]"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
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
                          "valuePerStack": {
                            "MDF_DirtyHPRatio": {
                              "operator": "Variables[0] (MDF_CurrentDirtyHPRatio) || RETURN",
                              "displayLines": "MDF_CurrentDirtyHPRatio",
                              "constants": [],
                              "variables": [
                                "MDF_CurrentDirtyHPRatio"
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
                          "modifier": "Monster_XP_Elite02_02_RLElite_TryAddDirtyHP"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_DirtyHPAddFlag",
                  "value": 1
                }
              ]
            }
          ],
          "stackData": [
            "MDF_DirtyHPAddedRatio"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_XP_Elite02_02_RLElite_ChargeEffect[<span class=\"descriptionNumberColor\">Japa</span>]",
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
                  "modifier": "Monster_XP_Elite02_02_RLElite_ChargeEffect[<span class=\"descriptionNumberColor\">Japa</span>]"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "AIFlag"
          ],
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