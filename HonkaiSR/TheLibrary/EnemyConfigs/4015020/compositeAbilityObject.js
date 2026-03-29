const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 4015020,
  "trimCharacterName": 4015020,
  "abilityList": [
    "4015020_BattleEventAbility_Monster_DawnEye_01_Rognarok",
    "4015020_BattleEventAbility_Monster_DawnEye_01_RognarokTrigger",
    "4015020_Monster_W4_DawnsEye_01_Ability04_Part02",
    "4015020_Monster_W4_DawnsEye_01_Ability04_Part01",
    "4015020_Monster_W4_DawnsEye_01_Ability03_Part02",
    "4015020_Monster_W4_DawnsEye_01_Ability03_Part01",
    "4015020_Monster_W4_DawnsEye_01_Ability02_Part02",
    "4015020_Monster_W4_DawnsEye_01_Ability02_Part01",
    "4015020_Monster_W4_DawnsEye_01_Ability01_Part02",
    "4015020_Monster_W4_DawnsEye_01_Ability01_Part01",
    "4015020_Monster_W4_DawnsEye_01_PassiveAbility_Insert",
    "4015020_Monster_W4_DawnsEye_01_MainStoryEnd",
    "4015020_Monster_W4_DawnsEye_01_MainStoryUseBE",
    "4015020_Monster_W4_DawnsEye_01_MainStoryUnlockBE",
    "4015020_Monster_W4_DawnsEye_01_MainStoryOpeningPhase01",
    "4015020_Monster_W4_DawnsEye_01_MainStory",
    "4015020_Monster_W4_DawnsEyePart_06_PassiveAbilityInitiate",
    "4015020_Monster_W4_DawnsEye_01_PassiveAbilityInitiate5",
    "4015020_Monster_W4_DawnsEye_01_PassiveAbilityInitiate4",
    "4015020_Monster_W4_DawnsEye_01_PassiveAbilityInitiate3",
    "4015020_Monster_W4_DawnsEye_01_PassiveAbilityInitiate2",
    "4015020_Monster_W4_DawnsEye_01_PassiveAbilityInitiate",
    "4015020_Modifiers",
    "4015020_Functions",
    "4015020_BE_BattleEvents"
  ],
  "abilityObject": {
    "4015020_BattleEventAbility_Monster_DawnEye_01_Rognarok": {
      "fileName": "4015020_BattleEventAbility_Monster_DawnEye_01_Rognarok",
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
          "modifier": "<a class=\"gModGreen\" id=\"-446760993\">Modifier_BattleEventAbility_WMonster_DawnEye_01_Rognarok</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-446760993\">Modifier_BattleEventAbility_WMonster_DawnEye_01_Rognarok</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertUnusedCount",
                    "typeValue": 1
                  },
                  "conditionActive": {
                    "name": "Target Exists",
                    "target": {
                      "name": "Add Target by Unique Identifier",
                      "identifier": "RagBattleEvent"
                    }
                  },
                  "abilityName": "BattleEventAbility_Monster_DawnEye_01_RognarokTrigger",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "priorityTag": "MonsterChangeState",
                  "canHitNonTargets": true,
                  "valuePerStack": {
                    "BaseAttack": {
                      "operator": "Variables[0] (BaseAttack) || RETURN",
                      "displayLines": "BaseAttack",
                      "constants": [],
                      "variables": [
                        "BaseAttack"
                      ]
                    }
                  },
                  "allowAbilityTriggers": false
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "4015020_BattleEventAbility_Monster_DawnEye_01_RognarokTrigger": {
      "fileName": "4015020_BattleEventAbility_Monster_DawnEye_01_RognarokTrigger",
      "childAbilityList": [
        "4015020_BattleEventAbility_Monster_DawnEye_01_RognarokTrigger",
        "4015020_Monster_W4_DawnsEye_01_Rognarok_Camera"
      ],
      "skillTrigger": "BattleEvent",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Compare: Monster Rank",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "compareType": "=",
            "value2": 5
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1053321581\">Modifier_Monster_W4_DawnsEye_01_WheaterMarkSpecial</a>",
              "casterAssign": "TargetSelf"
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "4015020_Monster_W4_DawnsEye_01_Ability04_Part02": {
      "fileName": "4015020_Monster_W4_DawnsEye_01_Ability04_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-439718905\">Enemy_W4_DawnsEye_01_Ability03_Charge</a>[<span class=\"descriptionNumberColor\">The Dark Tides Cometh</span>]"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-752624700\">Enemy_W4_DawnsEye_01_MainStory</a>"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1217242483\">Enemy_W4_DawnsEye_01_Ability04</a>"
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
            "modifier": "<a class=\"gModGreen\" id=\"-539111731\">Enemy_W4_DawnsEye_BEAdd</a>"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Is Entity Type",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "type": "Character",
                      "livingState": "Anyone"
                    }
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"196132555\">Enemy_W4_DawnsEye_01_MainStoryLockHP</a>",
              "valuePerStack": {
                "MDF_DeathSPAdd": {
                  "operator": "Variables[0] ({[SkillP07[2]]}) || RETURN",
                  "displayLines": "{[SkillP07[2]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP07[2]]}"
                  ]
                }
              }
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
            "DamageType": "Imaginary",
            "DamageFlat": {
              "operator": "Variables[0] (BaseAttack) || Variables[1] (TotalDamageRatio) || MUL || Variables[2] ({[Skill04P3[0]]}) || MUL || Constants[0] (0.1) || MUL || RETURN",
              "displayLines": "(((BaseAttack * TotalDamageRatio) * {[Skill04P3[0]]}) * 0.1)",
              "constants": [
                0.1
              ],
              "variables": [
                "BaseAttack",
                "TotalDamageRatio",
                "{[Skill04P3[0]]}"
              ]
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "10%"
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
            "DamageType": "Imaginary",
            "DamageFlat": {
              "operator": "Variables[0] (BaseAttack) || Variables[1] (TotalDamageRatio) || MUL || Variables[2] ({[Skill04P3[0]]}) || MUL || Constants[0] (0.1) || MUL || RETURN",
              "displayLines": "(((BaseAttack * TotalDamageRatio) * {[Skill04P3[0]]}) * 0.1)",
              "constants": [
                0.1
              ],
              "variables": [
                "BaseAttack",
                "TotalDamageRatio",
                "{[Skill04P3[0]]}"
              ]
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "10%"
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
            "DamageType": "Imaginary",
            "DamageFlat": {
              "operator": "Variables[0] (BaseAttack) || Variables[1] (TotalDamageRatio) || MUL || Variables[2] ({[Skill04P3[0]]}) || MUL || Constants[0] (0.1) || MUL || RETURN",
              "displayLines": "(((BaseAttack * TotalDamageRatio) * {[Skill04P3[0]]}) * 0.1)",
              "constants": [
                0.1
              ],
              "variables": [
                "BaseAttack",
                "TotalDamageRatio",
                "{[Skill04P3[0]]}"
              ]
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "10%"
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
            "DamageType": "Imaginary",
            "DamageFlat": {
              "operator": "Variables[0] (BaseAttack) || Variables[1] (TotalDamageRatio) || MUL || Variables[2] ({[Skill04P3[0]]}) || MUL || Constants[0] (0.1) || MUL || RETURN",
              "displayLines": "(((BaseAttack * TotalDamageRatio) * {[Skill04P3[0]]}) * 0.1)",
              "constants": [
                0.1
              ],
              "variables": [
                "BaseAttack",
                "TotalDamageRatio",
                "{[Skill04P3[0]]}"
              ]
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "10%"
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
            "DamageType": "Imaginary",
            "DamageFlat": {
              "operator": "Variables[0] (BaseAttack) || Variables[1] (TotalDamageRatio) || MUL || Variables[2] ({[Skill04P3[0]]}) || MUL || Constants[0] (0.1) || MUL || RETURN",
              "displayLines": "(((BaseAttack * TotalDamageRatio) * {[Skill04P3[0]]}) * 0.1)",
              "constants": [
                0.1
              ],
              "variables": [
                "BaseAttack",
                "TotalDamageRatio",
                "{[Skill04P3[0]]}"
              ]
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "10%"
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
            "DamageType": "Imaginary",
            "DamageFlat": {
              "operator": "Variables[0] (BaseAttack) || Variables[1] (TotalDamageRatio) || MUL || Variables[2] ({[Skill04P3[0]]}) || MUL || Constants[0] (0.1) || MUL || RETURN",
              "displayLines": "(((BaseAttack * TotalDamageRatio) * {[Skill04P3[0]]}) * 0.1)",
              "constants": [
                0.1
              ],
              "variables": [
                "BaseAttack",
                "TotalDamageRatio",
                "{[Skill04P3[0]]}"
              ]
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "10%"
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
            "DamageType": "Imaginary",
            "DamageFlat": {
              "operator": "Variables[0] (BaseAttack) || Variables[1] (TotalDamageRatio) || MUL || Variables[2] ({[Skill04P3[0]]}) || MUL || Constants[0] (0.1) || MUL || RETURN",
              "displayLines": "(((BaseAttack * TotalDamageRatio) * {[Skill04P3[0]]}) * 0.1)",
              "constants": [
                0.1
              ],
              "variables": [
                "BaseAttack",
                "TotalDamageRatio",
                "{[Skill04P3[0]]}"
              ]
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "10%"
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
            "DamageType": "Imaginary",
            "DamageFlat": {
              "operator": "Variables[0] (BaseAttack) || Variables[1] (TotalDamageRatio) || MUL || Variables[2] ({[Skill04P3[0]]}) || MUL || Constants[0] (0.1) || MUL || RETURN",
              "displayLines": "(((BaseAttack * TotalDamageRatio) * {[Skill04P3[0]]}) * 0.1)",
              "constants": [
                0.1
              ],
              "variables": [
                "BaseAttack",
                "TotalDamageRatio",
                "{[Skill04P3[0]]}"
              ]
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "10%"
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
            "DamageType": "Imaginary",
            "DamageFlat": {
              "operator": "Variables[0] (BaseAttack) || Variables[1] (TotalDamageRatio) || MUL || Variables[2] ({[Skill04P3[0]]}) || MUL || Constants[0] (0.1) || MUL || RETURN",
              "displayLines": "(((BaseAttack * TotalDamageRatio) * {[Skill04P3[0]]}) * 0.1)",
              "constants": [
                0.1
              ],
              "variables": [
                "BaseAttack",
                "TotalDamageRatio",
                "{[Skill04P3[0]]}"
              ]
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "10%"
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
            "DamageType": "Imaginary",
            "DamageFlat": {
              "operator": "Variables[0] (BaseAttack) || Variables[1] (TotalDamageRatio) || MUL || Variables[2] ({[Skill04P3[0]]}) || MUL || Constants[0] (0.1) || MUL || RETURN",
              "displayLines": "(((BaseAttack * TotalDamageRatio) * {[Skill04P3[0]]}) * 0.1)",
              "constants": [
                0.1
              ],
              "variables": [
                "BaseAttack",
                "TotalDamageRatio",
                "{[Skill04P3[0]]}"
              ]
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "10%"
          }
        },
        "Trigger: Attack End",
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
          "modifier": "<a class=\"gModGreen\" id=\"-459185506\">Enemy_W4_DawnsEye_01_StandbyEffect</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-539111731\">Enemy_W4_DawnsEye_BEAdd</a>"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Character ID",
                      "ID": 1409,
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "characterName": "Hyacine",
                      "invertCondition": true
                    }
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"-508563078\">Enemy_W4_DawnsEye_01_MainStoryDisableAction</a>"
            },
            {
              "name": "Inject Ability Use",
              "condition": {
                "name": "Insert Ability Condition",
                "type": "AbilityOwnerInsertUnusedCount",
                "typeValue": 1
              },
              "abilityName": "Monster_W4_DawnsEye_01_MainStoryUnlockBE",
              "abilitySource": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "abilityTarget": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Character ID",
                      "ID": 1409,
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "characterName": "Hyacine"
                    }
                  }
                ]
              },
              "priorityTag": "LevelPerformMonster",
              "targetState": "Anyone",
              "canHitNonTargets": true,
              "allowAbilityTriggers": false
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Enemy ID",
            "ID": {
              "operator": "Variables[0] (PartEntity1_MonsterID) || RETURN",
              "displayLines": "PartEntity1_MonsterID",
              "constants": [],
              "variables": [
                "PartEntity1_MonsterID"
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
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
            },
            {
              "name": "Remove Modifier Behavior Flag(s)",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "flagNames": []
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "Break"
              },
              "passed": [
                {
                  "name": "Reset Toughness",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                },
                {
                  "name": "Exit Broken-State",
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
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Enemy ID",
            "ID": {
              "operator": "Variables[0] (PartEntity3_MonsterID) || RETURN",
              "displayLines": "PartEntity3_MonsterID",
              "constants": [],
              "variables": [
                "PartEntity3_MonsterID"
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
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
            },
            {
              "name": "Remove Modifier Behavior Flag(s)",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "flagNames": []
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "Break"
              },
              "passed": [
                {
                  "name": "Reset Toughness",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                },
                {
                  "name": "Exit Broken-State",
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
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "AIFlag",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1186573263\">W4_DawnsEye_01_TargetChange</a>"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__88045827\">Enemy_W4_DawnsEye_01_Ability04BGMSwitch</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1217242483\">Enemy_W4_DawnsEye_01_Ability04</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "4015020_Monster_W4_DawnsEye_01_Ability04_Part01": {
      "fileName": "4015020_Monster_W4_DawnsEye_01_Ability04_Part01",
      "childAbilityList": [
        "4015020_Monster_W4_DawnsEye_01_Ability04_Camera",
        "4015020_Monster_W4_DawnsEye_01_Ability04_Part01",
        "4015020_Monster_W4_DawnsEye_01_Ability04_Part02"
      ],
      "skillTrigger": "Skill04P3",
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
          "ability": "Monster_W4_DawnsEye_01_Ability04_Part02",
          "isTrigger": true
        },
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
    "4015020_Monster_W4_DawnsEye_01_Ability03_Part02": {
      "fileName": "4015020_Monster_W4_DawnsEye_01_Ability03_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-459185506\">Enemy_W4_DawnsEye_01_StandbyEffect</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-752624700\">Enemy_W4_DawnsEye_01_MainStory</a>"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1301130578\">Enemy_W4_DawnsEye_01_Ability03</a>"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-439718905\">Enemy_W4_DawnsEye_01_Ability03_Charge</a>[<span class=\"descriptionNumberColor\">The Dark Tides Cometh</span>]"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Enemy ID",
            "ID": {
              "operator": "Variables[0] (PartEntity1_MonsterID) || RETURN",
              "displayLines": "PartEntity1_MonsterID",
              "constants": [],
              "variables": [
                "PartEntity1_MonsterID"
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
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
            },
            {
              "name": "Remove Modifier Behavior Flag(s)",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "flagNames": []
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "Break"
              },
              "passed": [
                {
                  "name": "Reset Toughness",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                },
                {
                  "name": "Exit Broken-State",
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
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Enemy ID",
            "ID": {
              "operator": "Variables[0] (PartEntity3_MonsterID) || RETURN",
              "displayLines": "PartEntity3_MonsterID",
              "constants": [],
              "variables": [
                "PartEntity3_MonsterID"
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
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
            },
            {
              "name": "Remove Modifier Behavior Flag(s)",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "flagNames": []
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "Break"
              },
              "passed": [
                {
                  "name": "Reset Toughness",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                },
                {
                  "name": "Exit Broken-State",
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
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        },
        {
          "name": "Assign Advance/Delay to Current Ability Use",
          "adjustmentValue": {
            "operator": "Variables[0] ({[Skill03P3[0]]}) || RETURN",
            "displayLines": "{[Skill03P3[0]]}",
            "constants": [],
            "variables": [
              "{[Skill03P3[0]]}"
            ]
          },
          "adjustmentType": "Advance"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1301130578\">Enemy_W4_DawnsEye_01_Ability03</a>",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-439718905\">Enemy_W4_DawnsEye_01_Ability03_Charge</a>[<span class=\"descriptionNumberColor\">The Dark Tides Cometh</span>]",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "The next attack will inflict \"Unmaking Ashes: Godsfall\" on all allies.",
          "type": "Other",
          "statusName": "The Dark Tides Cometh"
        }
      ]
    },
    "4015020_Monster_W4_DawnsEye_01_Ability03_Part01": {
      "fileName": "4015020_Monster_W4_DawnsEye_01_Ability03_Part01",
      "childAbilityList": [
        "4015020_Monster_W4_DawnsEye_01_Ability03_Camera",
        "4015020_Monster_W4_DawnsEye_01_Ability03_Part01",
        "4015020_Monster_W4_DawnsEye_01_Ability03_Part02"
      ],
      "skillTrigger": "Skill03P3",
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
          "ability": "Monster_W4_DawnsEye_01_Ability03_Part02",
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
    "4015020_Monster_W4_DawnsEye_01_Ability02_Part02": {
      "fileName": "4015020_Monster_W4_DawnsEye_01_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": {
                  "operator": "Variables[0] (PartEntity3_MonsterID) || RETURN",
                  "displayLines": "PartEntity3_MonsterID",
                  "constants": [],
                  "variables": [
                    "PartEntity3_MonsterID"
                  ]
                },
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
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
            },
            {
              "name": "Remove Modifier Behavior Flag(s)",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "flagNames": []
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "Break"
              },
              "passed": [
                {
                  "name": "Reset Toughness",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                },
                {
                  "name": "Exit Broken-State",
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
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "variableName": "LightTeamCount",
          "livingTargets": true
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Imaginary",
            "DamageFlat": {
              "operator": "Variables[0] ({[Skill02P3[0]]}) || Variables[1] (BaseAttack) || MUL || Variables[2] (TotalDamageRatio) || MUL || Variables[3] (LightTeamCount) || DIV || Constants[0] (6) || DIV || RETURN",
              "displayLines": "(((({[Skill02P3[0]]} * BaseAttack) * TotalDamageRatio) / LightTeamCount) / 6)",
              "constants": [
                6
              ],
              "variables": [
                "{[Skill02P3[0]]}",
                "BaseAttack",
                "TotalDamageRatio",
                "LightTeamCount"
              ]
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "16.666667%"
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
            "DamageType": "Imaginary",
            "DamageFlat": {
              "operator": "Variables[0] ({[Skill02P3[0]]}) || Variables[1] (BaseAttack) || MUL || Variables[2] (TotalDamageRatio) || MUL || Variables[3] (LightTeamCount) || DIV || Constants[0] (6) || DIV || RETURN",
              "displayLines": "(((({[Skill02P3[0]]} * BaseAttack) * TotalDamageRatio) / LightTeamCount) / 6)",
              "constants": [
                6
              ],
              "variables": [
                "{[Skill02P3[0]]}",
                "BaseAttack",
                "TotalDamageRatio",
                "LightTeamCount"
              ]
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "16.666667%"
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
            "DamageType": "Imaginary",
            "DamageFlat": {
              "operator": "Variables[0] ({[Skill02P3[0]]}) || Variables[1] (BaseAttack) || MUL || Variables[2] (TotalDamageRatio) || MUL || Variables[3] (LightTeamCount) || DIV || Constants[0] (6) || DIV || RETURN",
              "displayLines": "(((({[Skill02P3[0]]} * BaseAttack) * TotalDamageRatio) / LightTeamCount) / 6)",
              "constants": [
                6
              ],
              "variables": [
                "{[Skill02P3[0]]}",
                "BaseAttack",
                "TotalDamageRatio",
                "LightTeamCount"
              ]
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "16.666667%"
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
            "DamageType": "Imaginary",
            "DamageFlat": {
              "operator": "Variables[0] ({[Skill02P3[0]]}) || Variables[1] (BaseAttack) || MUL || Variables[2] (TotalDamageRatio) || MUL || Variables[3] (LightTeamCount) || DIV || Constants[0] (6) || DIV || RETURN",
              "displayLines": "(((({[Skill02P3[0]]} * BaseAttack) * TotalDamageRatio) / LightTeamCount) / 6)",
              "constants": [
                6
              ],
              "variables": [
                "{[Skill02P3[0]]}",
                "BaseAttack",
                "TotalDamageRatio",
                "LightTeamCount"
              ]
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "16.666667%"
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
            "DamageType": "Imaginary",
            "DamageFlat": {
              "operator": "Variables[0] ({[Skill02P3[0]]}) || Variables[1] (BaseAttack) || MUL || Variables[2] (TotalDamageRatio) || MUL || Variables[3] (LightTeamCount) || DIV || Constants[0] (6) || DIV || RETURN",
              "displayLines": "(((({[Skill02P3[0]]} * BaseAttack) * TotalDamageRatio) / LightTeamCount) / 6)",
              "constants": [
                6
              ],
              "variables": [
                "{[Skill02P3[0]]}",
                "BaseAttack",
                "TotalDamageRatio",
                "LightTeamCount"
              ]
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "16.666667%"
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
            "DamageType": "Imaginary",
            "DamageFlat": {
              "operator": "Variables[0] ({[Skill02P3[0]]}) || Variables[1] (BaseAttack) || MUL || Variables[2] (TotalDamageRatio) || MUL || Variables[3] (LightTeamCount) || DIV || Constants[0] (6) || DIV || RETURN",
              "displayLines": "(((({[Skill02P3[0]]} * BaseAttack) * TotalDamageRatio) / LightTeamCount) / 6)",
              "constants": [
                6
              ],
              "variables": [
                "{[Skill02P3[0]]}",
                "BaseAttack",
                "TotalDamageRatio",
                "LightTeamCount"
              ]
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "16.666667%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "AIFlag",
            "compareType": "=",
            "value2": 8
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1186573263\">W4_DawnsEye_01_TargetChange</a>"
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
    "4015020_Monster_W4_DawnsEye_01_Ability02_Part01": {
      "fileName": "4015020_Monster_W4_DawnsEye_01_Ability02_Part01",
      "childAbilityList": [
        "4015020_Monster_W4_DawnsEye_01_Ability02_Camera",
        "4015020_Monster_W4_DawnsEye_01_Ability02_Part01",
        "4015020_Monster_W4_DawnsEye_01_Ability02_Part02"
      ],
      "skillTrigger": "Skill02P3",
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
          "ability": "Monster_W4_DawnsEye_01_Ability02_Part02",
          "isTrigger": true
        },
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
    "4015020_Monster_W4_DawnsEye_01_Ability01_Part02": {
      "fileName": "4015020_Monster_W4_DawnsEye_01_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Enemy ID",
            "ID": {
              "operator": "Variables[0] (PartEntity1_MonsterID) || RETURN",
              "displayLines": "PartEntity1_MonsterID",
              "constants": [],
              "variables": [
                "PartEntity1_MonsterID"
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
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
            },
            {
              "name": "Remove Modifier Behavior Flag(s)",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "flagNames": []
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "Break"
              },
              "passed": [
                {
                  "name": "Reset Toughness",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                },
                {
                  "name": "Exit Broken-State",
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
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"352501027\">Enemy_W4_DawnsEye_01_Ability01isAiming</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1769824945\">Enemy_Monster_W4_DawnsEye_01_AimTarget</a>"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Imaginary",
            "DamageFlat": {
              "operator": "Variables[0] (BaseAttack) || Variables[1] (TotalDamageRatio) || MUL || Variables[2] ({[Skill01P3[0]]}) || MUL || RETURN",
              "displayLines": "((BaseAttack * TotalDamageRatio) * {[Skill01P3[0]]})",
              "constants": [],
              "variables": [
                "BaseAttack",
                "TotalDamageRatio",
                "{[Skill01P3[0]]}"
              ]
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
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
          "modifier": "<a class=\"gModGreen\" id=\"1789818614\">Modifier_Monster_W4_DawnsEye_01_WheaterRognarokSub</a>[<span class=\"descriptionNumberColor\">Rot</span>]",
          "valuePerStack": {
            "MDF_DamageValue": {
              "operator": "Variables[0] ({[Skill01P3[3]]}) || Variables[1] (BaseAttack) || MUL || RETURN",
              "displayLines": "({[Skill01P3[3]]} * BaseAttack)",
              "constants": [],
              "variables": [
                "{[Skill01P3[3]]}",
                "BaseAttack"
              ]
            }
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "AIFlag",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1186573263\">W4_DawnsEye_01_TargetChange</a>"
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-752624700\">Enemy_W4_DawnsEye_01_MainStory</a>"
          },
          "passed": [
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
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "4015020_Monster_W4_DawnsEye_01_Ability01_Part01": {
      "fileName": "4015020_Monster_W4_DawnsEye_01_Ability01_Part01",
      "childAbilityList": [
        "4015020_Monster_W4_DawnsEye_01_Ability01_Camera",
        "4015020_Monster_W4_DawnsEye_01_Ability01_Part01",
        "4015020_Monster_W4_DawnsEye_01_Ability01_Part02"
      ],
      "skillTrigger": "Skill01P3",
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
          "ability": "Monster_W4_DawnsEye_01_Ability01_Part02",
          "isTrigger": true
        },
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
    "4015020_Monster_W4_DawnsEye_01_PassiveAbility_Insert": {
      "fileName": "4015020_Monster_W4_DawnsEye_01_PassiveAbility_Insert",
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
            "modifier": "<a class=\"gModGreen\" id=\"-752624700\">Enemy_W4_DawnsEye_01_MainStory</a>"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                }
              },
              {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Caster's Minions}}"
                }
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "silent": true
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
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1151172141\">MWMonster_W4_Boss_MainBlock</a>"
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Add Target by Unique Identifier",
            "identifier": "HealBattleEvent"
          },
          "variableName": "W4_DawnsEye_01_HPRatio",
          "value": 1
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "<=",
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
              "variableName": "AIFlag",
              "value": 1
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
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1902031976\">Monster_ChangePhase_ParamEntity</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-178728122\">MWMonster_W4_DawnsEye_01_DamageTakenUp</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1909659856\">MWMonster_W4_Boss_PartHP</a>",
                  "casterAssign": "CasterSelf"
                }
              ]
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
                "name": "Add Target by Unique Identifier",
                "identifier": "RagBattleEvent"
              },
              "modifier": "<a class=\"gModGreen\" id=\"428140510\">Enemy_W4_DawnsEye_01_BESpeed</a>",
              "valuePerStack": {
                "MDF_Speed": {
                  "operator": "Variables[0] ({[SkillP07[5]]}) || RETURN",
                  "displayLines": "{[SkillP07[5]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP07[5]]}"
                  ]
                }
              }
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "Enemy ID",
                "ID": {
                  "operator": "Variables[0] (PartEntity1_MonsterID) || RETURN",
                  "displayLines": "PartEntity1_MonsterID",
                  "constants": [],
                  "variables": [
                    "PartEntity1_MonsterID"
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
                }
              ],
              "noTargetFound": [
                {
                  "name": "Create Enemy as Body Part",
                  "partName": "Head_R",
                  "value": {
                    "operator": "Variables[0] (PartEntity1_MonsterID) || RETURN",
                    "displayLines": "PartEntity1_MonsterID",
                    "constants": [],
                    "variables": [
                      "PartEntity1_MonsterID"
                    ]
                  },
                  "offset": -2,
                  "linkHitByPart": true
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": {
                      "operator": "Variables[0] (PartEntity1_MonsterID) || RETURN",
                      "displayLines": "PartEntity1_MonsterID",
                      "constants": [],
                      "variables": [
                        "PartEntity1_MonsterID"
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1807935838\">Enemy_W4_DawnsEye_PartController</a>",
                      "valuePerStack": {},
                      "casterAssign": "CasterSelf"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Enemy ID",
                        "ID": 4015021,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "characterName": "Hyacinthia, Eye of Twilight",
                        "isBaseCompare": true
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1459512555\">Enemy_W4_DawnsEye_B_PartHP</a>[<span class=\"descriptionNumberColor\">All As One</span>]",
                          "casterAssign": "CasterSelf"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1716068014\">Enemy_W4_DawnsEye_PartHP</a>[<span class=\"descriptionNumberColor\">All As One</span>]",
                          "casterAssign": "CasterSelf"
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
                    },
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
                      "modifier": "<a class=\"gModGreen\" id=\"-355315499\">Modifier_Monster_W4_DawnsEye_01_WheaterRognarokTotalDamageActionListener</a>",
                      "valuePerStack": {
                        "MDF_TotalDamageRatioAdd": 0,
                        "MDF_TotalDamageRatioCut": {
                          "operator": "Variables[0] ({[SkillP09[3]]}) || RETURN",
                          "displayLines": "{[SkillP09[3]]}",
                          "constants": [],
                          "variables": [
                            "{[SkillP09[3]]}"
                          ]
                        }
                      },
                      "casterAssign": "CasterSelf"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "Enemy ID",
                "ID": {
                  "operator": "Variables[0] (PartEntity3_MonsterID) || RETURN",
                  "displayLines": "PartEntity3_MonsterID",
                  "constants": [],
                  "variables": [
                    "PartEntity3_MonsterID"
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
                }
              ],
              "noTargetFound": [
                {
                  "name": "Create Enemy as Body Part",
                  "partName": "Head_L",
                  "value": {
                    "operator": "Variables[0] (PartEntity3_MonsterID) || RETURN",
                    "displayLines": "PartEntity3_MonsterID",
                    "constants": [],
                    "variables": [
                      "PartEntity3_MonsterID"
                    ]
                  },
                  "offset": 2,
                  "type": 3,
                  "linkHitByPart": true
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": {
                      "operator": "Variables[0] (PartEntity3_MonsterID) || RETURN",
                      "displayLines": "PartEntity3_MonsterID",
                      "constants": [],
                      "variables": [
                        "PartEntity3_MonsterID"
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1807935838\">Enemy_W4_DawnsEye_PartController</a>",
                      "valuePerStack": {},
                      "casterAssign": "CasterSelf"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Enemy ID",
                        "ID": 4015021,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "characterName": "Hyacinthia, Eye of Twilight",
                        "isBaseCompare": true
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1459512555\">Enemy_W4_DawnsEye_B_PartHP</a>[<span class=\"descriptionNumberColor\">All As One</span>]",
                          "casterAssign": "CasterSelf"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1716068014\">Enemy_W4_DawnsEye_PartHP</a>[<span class=\"descriptionNumberColor\">All As One</span>]",
                          "casterAssign": "CasterSelf"
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
                    },
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
                      "modifier": "<a class=\"gModGreen\" id=\"-355315499\">Modifier_Monster_W4_DawnsEye_01_WheaterRognarokTotalDamageActionListener</a>",
                      "valuePerStack": {
                        "MDF_TotalDamageRatioAdd": 0,
                        "MDF_TotalDamageRatioCut": {
                          "operator": "Variables[0] ({[SkillP09[3]]}) || RETURN",
                          "displayLines": "{[SkillP09[3]]}",
                          "constants": [],
                          "variables": [
                            "{[SkillP09[3]]}"
                          ]
                        }
                      },
                      "casterAssign": "CasterSelf"
                    }
                  ]
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
          "modifier": "<a class=\"gModGreen\" id=\"-1646746780\">MWMonster_W4_DawnsEye_01_PartController</a>"
        },
        {
          "name": "Define Custom Variable",
          "scope": "TargetEntity",
          "variableName": "ChangePhase_InsertController",
          "value": 0
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4015020_Monster_W4_DawnsEye_01_MainStoryEnd": {
      "fileName": "4015020_Monster_W4_DawnsEye_01_MainStoryEnd",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "silent": true
        },
        {
          "name": "Reset Toughness",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value": "MonsterType_W4_BossPart"
          },
          "ifTargetFound": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-985067601\">Enemy_W4_DawnsEye_01_BreakMuteSpeed</a>"
            },
            {
              "name": "Remove Modifier Behavior Flag(s)",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "flagNames": []
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "Break"
              },
              "passed": [
                {
                  "name": "Reset Toughness",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                },
                {
                  "name": "Exit Broken-State",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
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
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "MonsterType_W4_BossPartRight"
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value": "MonsterType_W4_BossPartLeft"
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
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-459185506\">Enemy_W4_DawnsEye_01_StandbyEffect</a>"
        },
        {
          "name": "Remove Modifier Behavior Flag(s)",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "flagNames": []
        },
        {
          "name": "Set HP Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "setValue": 1
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1766662793\">Enemy_W4_DawnsEye_01_LockHP</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1766662793\">Enemy_W4_DawnsEye_01_LockHP</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 0.00010000006
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "4015020_Monster_W4_DawnsEye_01_MainStoryUseBE": {
      "fileName": "4015020_Monster_W4_DawnsEye_01_MainStoryUseBE",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1488863445\">Modifier_Monster_W4_DawnsEye_01_MuteSpeed</a>[<span class=\"descriptionNumberColor\">Tide-Corrosion</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-633741031\">Enemy_W4_DawnsEye_01_HyacineStun</a>"
        },
        {
          "name": "Inject Ability Use",
          "condition": {
            "name": "Insert Ability Condition",
            "type": "AbilityOwnerInsertUnusedCount",
            "typeValue": 1
          },
          "abilityName": "MissionBattleEvent60024_Ability03_Insert_Part01",
          "abilitySource": {
            "name": "Add Target by Unique Identifier",
            "identifier": "HealBattleEvent"
          },
          "priorityTag": "LevelPerformMonster",
          "canHitNonTargets": true,
          "allowAbilityTriggers": false
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4015020_Monster_W4_DawnsEye_01_MainStoryUnlockBE": {
      "fileName": "4015020_Monster_W4_DawnsEye_01_MainStoryUnlockBE",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Character ID",
                  "ID": 1409,
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "characterName": "Hyacine",
                  "invertCondition": true
                }
              }
            ]
          },
          "modifier": "<a class=\"gModGreen\" id=\"-508563078\">Enemy_W4_DawnsEye_01_MainStoryDisableAction</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Character ID",
                  "ID": 1409,
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "characterName": "Hyacine"
                }
              }
            ]
          },
          "modifier": "<a class=\"gModGreen\" id=\"-633741031\">Enemy_W4_DawnsEye_01_HyacineStun</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-539111731\">Enemy_W4_DawnsEye_BEAdd</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1194820093\">Enemy_W4_DawnsEye_HyacineLockHP</a>"
        },
        {
          "name": "Add Battle Event",
          "teamName": "Player Team",
          "eventID": 60029,
          "variables": {
            "BaseAttack": {
              "operator": "Variables[0] (BaseAttack) || RETURN",
              "displayLines": "BaseAttack",
              "constants": [],
              "variables": [
                "BaseAttack"
              ]
            }
          },
          "whenCreated": [
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "value": -200,
              "isFixed": "* ERR"
            },
            {
              "name": "Assign Unique Name",
              "uniqueName": "HealBattleEvent",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "value": 100,
              "isFixed": "* ERR",
              "isSetToValue": true
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1028939151\">Enemy_W4_DawnsEye_StateGroupChange</a>"
            }
          ]
        },
        {
          "name": "Inject Ability Use",
          "condition": {
            "name": "Insert Ability Condition",
            "type": "AbilityOwnerInsertUnusedCount",
            "typeValue": 1
          },
          "abilityName": "Monster_W4_DawnsEye_01_MainStoryUseBE",
          "abilitySource": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "abilityTarget": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "priorityTag": "LevelPerformMonster",
          "canHitNonTargets": true,
          "allowAbilityTriggers": false
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1028939151\">Enemy_W4_DawnsEye_StateGroupChange</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "4015020_Monster_W4_DawnsEye_01_MainStoryOpeningPhase01": {
      "fileName": "4015020_Monster_W4_DawnsEye_01_MainStoryOpeningPhase01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Character ID",
            "ID": 1409,
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": "Hyacine"
          }
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4015020_Monster_W4_DawnsEye_01_MainStory": {
      "fileName": "4015020_Monster_W4_DawnsEye_01_MainStory",
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
          "modifier": "<a class=\"gModGreen\" id=\"-752624700\">Enemy_W4_DawnsEye_01_MainStory</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-539111731\">Enemy_W4_DawnsEye_BEAdd</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "conditions": {
            "name": "Character ID",
            "ID": 1409,
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": "Hyacine"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1194820093\">Enemy_W4_DawnsEye_HyacineLockHP</a>"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1472423733\">Enemy_W4_DawnsEye_01_Break</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2042518236\">Enemy_W4_DawnsEye_01_LowHP</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"506771112\">Enemy_W4_DawnsEye_01_Tutorial</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__506771112\">Enemy_W4_DawnsEye_01_Tutorial</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "value1": "WeatherPhase01Flag",
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
                      "variableName": "WeatherPhase01Flag"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Action Phase Start [Anyone][?]",
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
                          "target": "{{Level Entity}}"
                        },
                        "value1": "WeatherPhase01Flag",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "variableName": "WeatherPhase01Flag",
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
          "for": "<a class=\"gModGreen\" id=\"mod__2042518236\">Enemy_W4_DawnsEye_01_LowHP</a>",
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
                        "compareType": "<",
                        "value2": 0.3
                      }
                    ]
                  },
                  "passed": [
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
          "for": "<a class=\"gModGreen\" id=\"mod__1472423733\">Enemy_W4_DawnsEye_01_Break</a>",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-539111731\">Enemy_W4_DawnsEye_BEAdd</a>",
          "execute": [
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
                    "value1": "MDF_isLockHPThresholdReached",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-882985814\">RuanMei_PassiveArea_EnemyCD</a>"
                    },
                    {
                      "name": "Remove Modifier Behavior Flag(s)",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "flagNames": []
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "Break"
                      },
                      "passed": [
                        {
                          "name": "Reset Toughness",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          }
                        },
                        {
                          "name": "Exit Broken-State",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          }
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
                  "name": "Lock HP",
                  "threshold": 0.3
                }
              ]
            },
            {
              "eventTrigger": "Locked HP Floor Reached [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "AIFlag",
                  "value": 5
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"352501027\">Enemy_W4_DawnsEye_01_Ability01isAiming</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1769824945\">Enemy_Monster_W4_DawnsEye_01_AimTarget</a>"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_isLockHPThresholdReached",
                  "value": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Current Turn Is",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
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
                        "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
                      },
                      "failed": [
                        {
                          "name": "Assign Advance/Delay to Current Ability Use",
                          "adjustmentValue": 0,
                          "adjustmentType": "="
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Action Advance/Delay",
                      "advanceType": "Set",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "set": 0
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking Modifier Instance [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"-1488863445\">Modifier_Monster_W4_DawnsEye_01_MuteSpeed</a>[<span class=\"descriptionNumberColor\">Tide-Corrosion</span>]"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                      },
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1488863445\">Modifier_Monster_W4_DawnsEye_01_MuteSpeed</a>[<span class=\"descriptionNumberColor\">Tide-Corrosion</span>]"
                      },
                      "ifTargetFound": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Compare: Target Count",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target List}}"
                                },
                                "compareType": ">=",
                                "value2": 3
                              },
                              {
                                "name": "Target Exists",
                                "target": {
                                  "name": "Add Target by Unique Identifier",
                                  "identifier": "HealBattleEvent"
                                },
                                "invertCondition": true
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Sequence",
                                "Sequence": [
                                  {
                                    "name": "Target Name",
                                    "target": "{{Player Team All(with Unselectable)V2}}"
                                  },
                                  {
                                    "name": "Target Filter",
                                    "conditions": {
                                      "name": "Character ID",
                                      "ID": 1409,
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "characterName": "Hyacine",
                                      "invertCondition": true
                                    }
                                  }
                                ]
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-508563078\">Enemy_W4_DawnsEye_01_MainStoryDisableAction</a>"
                            },
                            {
                              "name": "Inject Ability Use",
                              "condition": {
                                "name": "Insert Ability Condition",
                                "type": "AbilityOwnerInsertUnusedCount",
                                "typeValue": 1
                              },
                              "abilityName": "Monster_W4_DawnsEye_01_MainStoryUnlockBE",
                              "abilitySource": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "abilityTarget": {
                                "name": "Target Sequence",
                                "Sequence": [
                                  {
                                    "name": "Target Name",
                                    "target": "{{Player Team All(with Unselectable)V2}}"
                                  },
                                  {
                                    "name": "Target Filter",
                                    "conditions": {
                                      "name": "Character ID",
                                      "ID": 1409,
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "characterName": "Hyacine"
                                    }
                                  }
                                ]
                              },
                              "priorityTag": "LevelPerformMonster",
                              "targetState": "Anyone",
                              "canHitNonTargets": true,
                              "allowAbilityTriggers": false
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
          "for": "<a class=\"gModGreen\" id=\"mod__1194820093\">Enemy_W4_DawnsEye_HyacineLockHP</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking Modifier Instance [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-1488863445\">Modifier_Monster_W4_DawnsEye_01_MuteSpeed</a>[<span class=\"descriptionNumberColor\">Tide-Corrosion</span>]"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Target Exists",
                        "target": {
                          "name": "Add Target by Unique Identifier",
                          "identifier": "HealBattleEvent"
                        },
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-508563078\">Enemy_W4_DawnsEye_01_MainStoryDisableAction</a>"
                        },
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertUnusedCount",
                            "typeValue": 1
                          },
                          "abilityName": "Monster_W4_DawnsEye_01_MainStoryUnlockBE",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "priorityTag": "LevelPerformMonster",
                          "targetState": "Anyone",
                          "canHitNonTargets": true,
                          "allowAbilityTriggers": false
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
          "for": "<a class=\"gModGreen\" id=\"mod__-752624700\">Enemy_W4_DawnsEye_01_MainStory</a>",
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
                    "value1": "ChangePhase_InsertController",
                    "compareType": "=",
                    "value2": 0,
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
                        "value1": "CurrentHP",
                        "compareType": "<=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "ChangePhase_InsertController",
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
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W4_DawnsEye_01_MainStoryEnd",
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
            },
            {
              "eventTrigger": "Enter Battle"
            },
            {
              "eventTrigger": "Leave Battle"
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "4015020_Monster_W4_DawnsEyePart_06_PassiveAbilityInitiate": {
      "fileName": "4015020_Monster_W4_DawnsEyePart_06_PassiveAbilityInitiate",
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
          "modifier": "<a class=\"gModGreen\" id=\"1639987176\">Enemy_W4_DawnsEyePart_06_MuteSpeed</a>"
        },
        {
          "name": "Boss Bar Display",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "display": true
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1639987176\">Enemy_W4_DawnsEyePart_06_MuteSpeed</a>",
          "modifierFlags": [
            "MuteHitFly"
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "4015020_Monster_W4_DawnsEye_01_PassiveAbilityInitiate5": {
      "fileName": "4015020_Monster_W4_DawnsEye_01_PassiveAbilityInitiate5",
      "skillTrigger": "SkillP10",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4015020_Monster_W4_DawnsEye_01_PassiveAbilityInitiate4": {
      "fileName": "4015020_Monster_W4_DawnsEye_01_PassiveAbilityInitiate4",
      "skillTrigger": "SkillP09",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4015020_Monster_W4_DawnsEye_01_PassiveAbilityInitiate3": {
      "fileName": "4015020_Monster_W4_DawnsEye_01_PassiveAbilityInitiate3",
      "skillTrigger": "SkillP08",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4015020_Monster_W4_DawnsEye_01_PassiveAbilityInitiate2": {
      "fileName": "4015020_Monster_W4_DawnsEye_01_PassiveAbilityInitiate2",
      "skillTrigger": "SkillP07",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4015020_Monster_W4_DawnsEye_01_PassiveAbilityInitiate": {
      "fileName": "4015020_Monster_W4_DawnsEye_01_PassiveAbilityInitiate",
      "skillTrigger": "SkillP06",
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
          "modifier": "<a class=\"gModGreen\" id=\"-459185506\">Enemy_W4_DawnsEye_01_StandbyEffect</a>"
        },
        {
          "name": "Create Enemy as Body Part",
          "partName": "Head_R",
          "value": {
            "operator": "Variables[0] (PartEntity1_MonsterID) || RETURN",
            "displayLines": "PartEntity1_MonsterID",
            "constants": [],
            "variables": [
              "PartEntity1_MonsterID"
            ]
          },
          "offset": -2,
          "linkHitByPart": true
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1480712068\">W4_DawnsEye_BattleScore3</a>"
        },
        {
          "name": "Create Enemy as Body Part",
          "partName": "Head_L",
          "value": {
            "operator": "Variables[0] (PartEntity3_MonsterID) || RETURN",
            "displayLines": "PartEntity3_MonsterID",
            "constants": [],
            "variables": [
              "PartEntity3_MonsterID"
            ]
          },
          "offset": 2,
          "type": 3,
          "linkHitByPart": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Stage ID",
            "ID": 2148,
            "compareType": "=",
            "characterName": null
          },
          "passed": [
            {
              "name": "Action Advance/Delay",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "advanceType": "Delay",
              "multiAdd": 1
            },
            {
              "name": "Action Advance/Delay",
              "target": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "advanceType": "Delay",
              "multiAdd": 99
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": 401502000,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": null
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 7
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
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
          "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-752624700\">Enemy_W4_DawnsEye_01_MainStory</a>"
          },
          "failed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1186573263\">W4_DawnsEye_01_TargetChange</a>"
            }
          ]
        },
        {
          "name": "Preload Battle Event(s)",
          "eventID": [
            20015,
            60029
          ]
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "BaseAttack",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;"
        },
        {
          "name": "Add Battle Event",
          "teamName": "Enemy Team",
          "eventID": 20015,
          "variables": {
            "BaseAttack": {
              "operator": "Variables[0] (BaseAttack) || RETURN",
              "displayLines": "BaseAttack",
              "constants": [],
              "variables": [
                "BaseAttack"
              ]
            }
          },
          "whenCreated": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"428140510\">Enemy_W4_DawnsEye_01_BESpeed</a>",
              "valuePerStack": {
                "MDF_Speed": {
                  "operator": "Variables[0] ({[SkillP07[4]]}) || RETURN",
                  "displayLines": "{[SkillP07[4]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP07[4]]}"
                  ]
                }
              }
            },
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "multiBase": {
                "operator": "Variables[0] ({[SkillP07[3]]}) || RETURN",
                "displayLines": "{[SkillP07[3]]}",
                "constants": [],
                "variables": [
                  "{[SkillP07[3]]}"
                ]
              }
            },
            {
              "name": "Assign Unique Name",
              "uniqueName": "RagBattleEvent",
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
              "modifier": "<a class=\"gModGreen\" id=\"-355315499\">Modifier_Monster_W4_DawnsEye_01_WheaterRognarokTotalDamageActionListener</a>",
              "valuePerStack": {
                "MDF_TotalDamageRatioAdd": {
                  "operator": "Variables[0] ({[SkillP09[2]]}) || RETURN",
                  "displayLines": "{[SkillP09[2]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP09[2]]}"
                  ]
                },
                "MDF_TotalDamageRatioCut": 0
              },
              "casterAssign": "CasterSelf"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 401502000,
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
              "modifier": "<a class=\"gModGreen\" id=\"-2100215981\">Modifier_Monster_W4_DawnsEye_01_WheaterRognarokTotalDamage</a>[<span class=\"descriptionNumberColor\">Black Tide Sync Rate</span>]",
              "valuePerStack": {
                "MDF_TotalDamageRatio": {
                  "operator": "Variables[0] ({[SkillP09[0]]}) || Variables[1] ({[SkillP09[5]]}) || ADD || RETURN",
                  "displayLines": "({[SkillP09[0]]} + {[SkillP09[5]]})",
                  "constants": [],
                  "variables": [
                    "{[SkillP09[0]]}",
                    "{[SkillP09[5]]}"
                  ]
                },
                "MDF_TotalDamageRatioMin": {
                  "operator": "Variables[0] ({[SkillP09[0]]}) || RETURN",
                  "displayLines": "{[SkillP09[0]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP09[0]]}"
                  ]
                },
                "MDF_TotalDamageRatioMax": {
                  "operator": "Variables[0] ({[SkillP09[1]]}) || RETURN",
                  "displayLines": "{[SkillP09[1]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP09[1]]}"
                  ]
                },
                "MDF_BaseAttack": {
                  "operator": "Variables[0] (BaseAttack) || RETURN",
                  "displayLines": "BaseAttack",
                  "constants": [],
                  "variables": [
                    "BaseAttack"
                  ]
                }
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
              "modifier": "<a class=\"gModGreen\" id=\"-2100215981\">Modifier_Monster_W4_DawnsEye_01_WheaterRognarokTotalDamage</a>[<span class=\"descriptionNumberColor\">Black Tide Sync Rate</span>]",
              "valuePerStack": {
                "MDF_TotalDamageRatio": {
                  "operator": "Variables[0] ({[SkillP09[0]]}) || RETURN",
                  "displayLines": "{[SkillP09[0]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP09[0]]}"
                  ]
                },
                "MDF_TotalDamageRatioMin": {
                  "operator": "Variables[0] ({[SkillP09[0]]}) || RETURN",
                  "displayLines": "{[SkillP09[0]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP09[0]]}"
                  ]
                },
                "MDF_TotalDamageRatioMax": {
                  "operator": "Variables[0] ({[SkillP09[1]]}) || RETURN",
                  "displayLines": "{[SkillP09[1]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP09[1]]}"
                  ]
                },
                "MDF_BaseAttack": {
                  "operator": "Variables[0] (BaseAttack) || RETURN",
                  "displayLines": "BaseAttack",
                  "constants": [],
                  "variables": [
                    "BaseAttack"
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
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-355315499\">Modifier_Monster_W4_DawnsEye_01_WheaterRognarokTotalDamageActionListener</a>",
          "valuePerStack": {
            "MDF_TotalDamageRatioAdd": {
              "operator": "Variables[0] ({[SkillP09[2]]}) || RETURN",
              "displayLines": "{[SkillP09[2]]}",
              "constants": [],
              "variables": [
                "{[SkillP09[2]]}"
              ]
            },
            "MDF_TotalDamageRatioCut": 0
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value": "MonsterType_W4_BossPart"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1807935838\">Enemy_W4_DawnsEye_PartController</a>",
              "casterAssign": "CasterSelf"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": 4015021,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Hyacinthia, Eye of Twilight",
                "isBaseCompare": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1459512555\">Enemy_W4_DawnsEye_B_PartHP</a>[<span class=\"descriptionNumberColor\">All As One</span>]",
                  "casterAssign": "CasterSelf"
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1716068014\">Enemy_W4_DawnsEye_PartHP</a>[<span class=\"descriptionNumberColor\">All As One</span>]",
                  "casterAssign": "CasterSelf"
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-355315499\">Modifier_Monster_W4_DawnsEye_01_WheaterRognarokTotalDamageActionListener</a>",
              "valuePerStack": {
                "MDF_TotalDamageRatioAdd": 0,
                "MDF_TotalDamageRatioCut": {
                  "operator": "Variables[0] ({[SkillP09[3]]}) || RETURN",
                  "displayLines": "{[SkillP09[3]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP09[3]]}"
                  ]
                }
              },
              "casterAssign": "CasterSelf"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": 401502000,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": null,
                "invertCondition": true
              },
              {
                "name": "Enemy ID",
                "ID": 4015021,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Hyacinthia, Eye of Twilight",
                "invertCondition": true
              }
            ]
          },
          "passed": [
            {
              "name": "Add Battle Event",
              "teamName": "Player Team",
              "eventID": 60029,
              "variables": {
                "BaseAttack": {
                  "operator": "Variables[0] (BaseAttack) || RETURN",
                  "displayLines": "BaseAttack",
                  "constants": [],
                  "variables": [
                    "BaseAttack"
                  ]
                }
              },
              "whenCreated": [
                {
                  "name": "Assign Unique Name",
                  "uniqueName": "HealBattleEvent",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                },
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "value": {
                    "operator": "Variables[0] ({[SkillP10[5]]}) || RETURN",
                    "displayLines": "{[SkillP10[5]]}",
                    "constants": [],
                    "variables": [
                      "{[SkillP10[5]]}"
                    ]
                  },
                  "isFixed": "* ERR"
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
          "modifier": "<a class=\"gModGreen\" id=\"1313380500\">Modifier_Monster_W4_DawnsEye_01_WheaterRognarok</a>",
          "valuePerStack": {
            "MDF_DirtyHPBase": {
              "operator": "Variables[0] ({[SkillP07[0]]}) || RETURN",
              "displayLines": "{[SkillP07[0]]}",
              "constants": [],
              "variables": [
                "{[SkillP07[0]]}"
              ]
            },
            "MDF_BaseAttack": {
              "operator": "Variables[0] (BaseAttack) || RETURN",
              "displayLines": "BaseAttack",
              "constants": [],
              "variables": [
                "BaseAttack"
              ]
            },
            "MDF_DeathSPAdd": {
              "operator": "Variables[0] ({[SkillP07[2]]}) || RETURN",
              "displayLines": "{[SkillP07[2]]}",
              "constants": [],
              "variables": [
                "{[SkillP07[2]]}"
              ]
            }
          }
        },
        {
          "name": "Add Stage Ability",
          "abilityName": "BattleEventAbility_Monster_DawnEye_01_RognarokTrigger"
        },
        {
          "name": "Add Stage Ability",
          "abilityName": "Monster_W4_DawnsEye_01_Rognarok_Camera"
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
          "modifier": "<a class=\"gModGreen\" id=\"-1259657295\">Enemy_W4_DawnsEye_01_BreakController</a>",
          "valuePerStack": {
            "StanceDamage": {
              "operator": "Variables[0] ({[SkillP06[2]]}) || RETURN",
              "displayLines": "{[SkillP06[2]]}",
              "constants": [],
              "variables": [
                "{[SkillP06[2]]}"
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
          "modifier": "<a class=\"gModGreen\" id=\"-105944791\">Enemy_W4_DawnsEye_01_SoundController</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-105944791\">Enemy_W4_DawnsEye_01_SoundController</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle"
            },
            {
              "eventTrigger": "Leave Battle"
            }
          ],
          "stackData": [],
          "latentQueue": [
            "AIFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1646746780\">MWMonster_W4_DawnsEye_01_PartController</a>",
          "counter": 1,
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
                  "variableName": "ChangePhase_InsertController"
                }
              ]
            },
            {
              "eventTrigger": "Waiting for Healing in Limbo",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "MonsterType_W4_BossPart"
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
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "ChangePhase_InsertController",
                    "compareType": "=",
                    "value2": 0,
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
                        "value1": "CurrentHP",
                        "compareType": "<=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "ChangePhase_InsertController",
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
                          "name": "Set Enemy Phase",
                          "mode": "Inc"
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W4_DawnsEye_01_PassiveAbility_Insert",
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
          ]
        }
      ]
    },
    "4015020_Modifiers": {
      "fileName": "4015020_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1301721119\">Enemy_W4_DawnsEye_01_AimNoTarget</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "When Losing Modifier [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"-1488863445\">Modifier_Monster_W4_DawnsEye_01_MuteSpeed</a>[<span class=\"descriptionNumberColor\">Tide-Corrosion</span>]"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"352501027\">Enemy_W4_DawnsEye_01_Ability01isAiming</a>"
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
                      "modifier": "<a class=\"gModGreen\" id=\"1769824945\">Enemy_Monster_W4_DawnsEye_01_AimTarget</a>",
                      "success": [
                        "Modifier Deletes Itself"
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Get Revived [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target 2}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"352501027\">Enemy_W4_DawnsEye_01_Ability01isAiming</a>"
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
                      "modifier": "<a class=\"gModGreen\" id=\"1769824945\">Enemy_Monster_W4_DawnsEye_01_AimTarget</a>",
                      "success": [
                        "Modifier Deletes Itself"
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__196132555\">Enemy_W4_DawnsEye_01_MainStoryLockHP</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 0.00010000006
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
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1488863445\">Modifier_Monster_W4_DawnsEye_01_MuteSpeed</a>[<span class=\"descriptionNumberColor\">Tide-Corrosion</span>]",
                  "valuePerStack": {
                    "MDF_DeathSPAdd": {
                      "operator": "Variables[0] (MDF_DeathSPAdd) || RETURN",
                      "displayLines": "MDF_DeathSPAdd",
                      "constants": [],
                      "variables": [
                        "MDF_DeathSPAdd"
                      ]
                    }
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_DeathSPAdd"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-508563078\">Enemy_W4_DawnsEye_01_MainStoryDisableAction</a>",
          "modifierFlags": [
            "DisableAction"
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-633741031\">Enemy_W4_DawnsEye_01_HyacineStun</a>",
          "modifierFlags": [
            "STAT_CTRL_UnOperable"
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-459185506\">Enemy_W4_DawnsEye_01_StandbyEffect</a>",
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
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__428140510\">Enemy_W4_DawnsEye_01_BESpeed</a>",
          "stackType": "Replace",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SpeedOverride</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_Speed) || RETURN",
                    "displayLines": "MDF_Speed",
                    "constants": [],
                    "variables": [
                      "MDF_Speed"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_Speed"
          ],
          "latentQueue": [
            "AIFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__352501027\">Enemy_W4_DawnsEye_01_Ability01isAiming</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1301721119\">Enemy_W4_DawnsEye_01_AimNoTarget</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"1769824945\">Enemy_Monster_W4_DawnsEye_01_AimTarget</a>"
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1186573263\">W4_DawnsEye_01_TargetChange</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1769824945\">Enemy_Monster_W4_DawnsEye_01_AimTarget</a>",
          "stackType": "Replace",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "AttackSign"
          ],
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1488863445\">Modifier_Monster_W4_DawnsEye_01_MuteSpeed</a>[<span class=\"descriptionNumberColor\">Tide-Corrosion</span>]",
          "modifierFlags": [
            "DisableAction",
            "STAT_CTRL_Shake",
            "STAT_CTRL",
            "AvatarBreak",
            "MuteSpeed",
            "AlwaysSuccess",
            "Stealth",
            "DisableHealHP",
            "STAT_ForceControl",
            "UnOperable",
            "STAT_CTRL_UnOperable",
            "RemoveWhenCasterDead"
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
                  "name": "Set Action-State",
                  "on": null,
                  "stateName": "Monster_W4_DawnsEye_01"
                },
                {
                  "name": "Lock Target AV",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "isLock": false
                },
                {
                  "name": "Set Action-State",
                  "on": null,
                  "stateName": "Monster_W4_DawnsEye_01"
                },
                {
                  "name": "Lock Target AV",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}.[[getBattleEvents]]"
                  },
                  "isLock": false
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
                },
                "Mark Entity as Non-Target(Unselectable)",
                {
                  "name": "Set Action-State",
                  "on": null,
                  "stateName": "Monster_W4_DawnsEye_01",
                  "state": false
                },
                {
                  "name": "Lock Target AV",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Set Action-State",
                  "on": null,
                  "stateName": "Monster_W4_DawnsEye_01",
                  "state": false
                },
                {
                  "name": "Lock Target AV",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}.[[getBattleEvents]]"
                  }
                },
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Add Target by Unique Identifier",
                    "identifier": "HealBattleEvent"
                  },
                  "value": {
                    "operator": "Variables[0] (MDF_DeathSPAdd) || RETURN",
                    "displayLines": "MDF_DeathSPAdd",
                    "constants": [],
                    "variables": [
                      "MDF_DeathSPAdd"
                    ]
                  },
                  "isFixed": "* ERR"
                }
              ]
            },
            {
              "eventTrigger": "Owner Changed [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target 2}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      },
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}.[[getSourceCreator]]"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Set Action-State",
                      "on": null,
                      "stateName": "Monster_W4_DawnsEye_01"
                    },
                    {
                      "name": "Lock Target AV",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "isLock": false
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_DeathSPAdd"
          ],
          "latentQueue": [],
          "description": "Cannot be selected, cannot take action.",
          "type": "Debuff",
          "effectName": "Tide-Corrosion",
          "statusName": "Tide-Corrosion"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1645075522\">Modifier_Monster_W4_DawnsEye_01_BlockDirtyHP</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__27951832\">Modifier_Monster_W4_DawnsEye_01_HOT</a>[<span class=\"descriptionNumberColor\">Eagerness</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "CanBeAddedToServant",
            "CanListenServantCallback"
          ],
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Heal",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "healFlat": {
                    "operator": "Variables[0] (MDF_HPDelta) || RETURN",
                    "displayLines": "MDF_HPDelta",
                    "constants": [],
                    "variables": [
                      "MDF_HPDelta"
                    ]
                  },
                  "formula": "Heal from Base Value"
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
                    "operator": "Variables[0] (MDF_DamageAddRatio) || RETURN",
                    "displayLines": "MDF_DamageAddRatio",
                    "constants": [],
                    "variables": [
                      "MDF_DamageAddRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "description": "Restores this unit's HP by <span class=\"descriptionNumberColor\">MDF_HPDelta</span> at the start of every turn, and increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_DamageAddRatio</span>.",
          "type": "Buff",
          "effectName": "Eagerness",
          "statusName": "Eagerness"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1825758342\">Modifier_Monster_W4_DawnsEye_01_MaxHPAddSub</a>",
          "stackType": "Multiple",
          "modifierFlags": [
            "CanBeAddedToServant"
          ],
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPFlat</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_HPDelta) || RETURN",
                    "displayLines": "MDF_HPDelta",
                    "constants": [],
                    "variables": [
                      "MDF_HPDelta"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HealingIncoming</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_HealAddRatio) || RETURN",
                    "displayLines": "MDF_HealAddRatio",
                    "constants": [],
                    "variables": [
                      "MDF_HealAddRatio"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-815851324\">Modifier_Monster_W4_DawnsEye_01_MaxHPAdd</a>[<span class=\"descriptionNumberColor\">Flame-Chase</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "CanBeAddedToServant"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Looped Event",
                  "maxLoops": {
                    "operator": "Variables[0] (MDF_Layer) || RETURN",
                    "displayLines": "MDF_Layer",
                    "constants": [],
                    "variables": [
                      "MDF_Layer"
                    ]
                  },
                  "Event": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1825758342\">Modifier_Monster_W4_DawnsEye_01_MaxHPAddSub</a>",
                      "valuePerStack": {
                        "MDF_HPDelta": {
                          "operator": "Variables[0] (MDF_HPDeltaPerLayer) || RETURN",
                          "displayLines": "MDF_HPDeltaPerLayer",
                          "constants": [],
                          "variables": [
                            "MDF_HPDeltaPerLayer"
                          ]
                        },
                        "MDF_HealAddRatio": {
                          "operator": "Variables[0] (MDF_HealAddRatio) || RETURN",
                          "displayLines": "MDF_HealAddRatio",
                          "constants": [],
                          "variables": [
                            "MDF_HealAddRatio"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_HPDelta",
                  "value": {
                    "operator": "Variables[0] (MDF_HPDeltaPerLayer) || Variables[1] (MDF_Layer) || MUL || RETURN",
                    "displayLines": "(MDF_HPDeltaPerLayer * MDF_Layer)",
                    "constants": [],
                    "variables": [
                      "MDF_HPDeltaPerLayer",
                      "MDF_Layer"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Max HP increases by <span class=\"descriptionNumberColor\">MDF_HPDelta</span>.",
          "type": "Buff",
          "effectName": "Flame-Chase",
          "statusName": "Flame-Chase"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__560024402\">Modifier_Monster_W4_DawnsEye_01_MaxHPAddHalo</a>",
          "modifierFlags": [],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable, exclude Netherwing)}}.[[removeBattleEvents]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-815851324\">Modifier_Monster_W4_DawnsEye_01_MaxHPAdd</a>[<span class=\"descriptionNumberColor\">Flame-Chase</span>]",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_HPDeltaPerLayer": {
                  "operator": "Variables[0] (MDF_HPDelta) || RETURN",
                  "displayLines": "MDF_HPDelta",
                  "constants": [],
                  "variables": [
                    "MDF_HPDelta"
                  ]
                },
                "MDF_HealAddRatio": {
                  "operator": "Variables[0] (MDF_HealAddRatio) || RETURN",
                  "displayLines": "MDF_HealAddRatio",
                  "constants": [],
                  "variables": [
                    "MDF_HealAddRatio"
                  ]
                },
                "MDF_Layer": {
                  "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED_20) || RETURN",
                  "displayLines": "ENEMIES_OBJECT_UNUSED_20",
                  "constants": [],
                  "variables": [
                    "ENEMIES_OBJECT_UNUSED_20"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1306101572\">Modifier_Monster_W4_DawnsEye_01_WheaterRognarokChange</a>",
          "stackType": "Replace",
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
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Compare: Monster Rank",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "compareType": "=",
                    "value2": 5
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1313380500\">Modifier_Monster_W4_DawnsEye_01_WheaterRognarok</a>",
                      "valuePerStack": {
                        "MDF_DamageValue": {
                          "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__157) || RETURN",
                          "displayLines": "ENEMIES_OBJECT_UNUSED__157",
                          "constants": [],
                          "variables": [
                            "ENEMIES_OBJECT_UNUSED__157"
                          ]
                        }
                      },
                      "casterAssign": "TargetSelf"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1053321581\">Modifier_Monster_W4_DawnsEye_01_WheaterMarkSpecial</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1789818614\">Modifier_Monster_W4_DawnsEye_01_WheaterRognarokSub</a>[<span class=\"descriptionNumberColor\">Rot</span>]"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target List}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1789818614\">Modifier_Monster_W4_DawnsEye_01_WheaterRognarokSub</a>[<span class=\"descriptionNumberColor\">Rot</span>]",
                      "valuePerStack": {
                        "MDF_DamageValue": {
                          "operator": "Variables[0] ({[SkillP07[1]]}) || Variables[1] (BaseAttack) || MUL || RETURN",
                          "displayLines": "({[SkillP07[1]]} * BaseAttack)",
                          "constants": [],
                          "variables": [
                            "{[SkillP07[1]]}",
                            "BaseAttack"
                          ]
                        }
                      }
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
          "for": "<a class=\"gModGreen\" id=\"mod__235721507\">Enemy_W4_DawnsEye_01_BlackBlood</a>",
          "stackType": "Merge",
          "modifierFlags": [
            "CanBeAddedToServant",
            "RemoveWhenCasterDead"
          ],
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBlockFlat</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_DirtyHPDelta) || RETURN",
                    "displayLines": "MDF_DirtyHPDelta",
                    "constants": [],
                    "variables": [
                      "MDF_DirtyHPDelta"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1789818614\">Modifier_Monster_W4_DawnsEye_01_WheaterRognarokSub</a>[<span class=\"descriptionNumberColor\">Rot</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "CanBeAddedToServant",
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_DamageValueTotal",
                  "value": {
                    "operator": "Variables[0] (MDF_DamageValueTotal) || Variables[1] (MDF_DamageValue) || ADD || RETURN",
                    "displayLines": "(MDF_DamageValueTotal + MDF_DamageValue)",
                    "constants": [],
                    "variables": [
                      "MDF_DamageValueTotal",
                      "MDF_DamageValue"
                    ]
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
                    "value1": "MDF_DamageValueTotal",
                    "compareType": "<=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DamageValueTotal",
                      "value": 0
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "MDF_DamageRatio",
                  "value": {
                    "operator": "Variables[0] (MDF_DamageRatioAdd) || RETURN",
                    "displayLines": "MDF_DamageRatioAdd",
                    "constants": [],
                    "variables": [
                      "MDF_DamageRatioAdd"
                    ]
                  },
                  "max": 100
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_DamageValueFinal",
                  "value": {
                    "operator": "Variables[0] (MDF_DamageValueTotal) || Variables[1] (MDF_DamageRatio) || MUL || RETURN",
                    "displayLines": "(MDF_DamageValueTotal * MDF_DamageRatio)",
                    "constants": [],
                    "variables": [
                      "MDF_DamageValueTotal",
                      "MDF_DamageRatio"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_MaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_DamageValueFinal",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_CurrentDirtyHPRatio",
                      "value": {
                        "operator": "Variables[0] (MDF_DamageValueFinal) || Variables[1] (MDF_MaxHP) || DIV || RETURN",
                        "displayLines": "(MDF_DamageValueFinal / MDF_MaxHP)",
                        "constants": [],
                        "variables": [
                          "MDF_DamageValueFinal",
                          "MDF_MaxHP"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_CurrentDirtyHPRatio",
                      "value": 0
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"235721507\">Enemy_W4_DawnsEye_01_BlackBlood</a>",
                  "valuePerStack": {
                    "MDF_DirtyHPRatio": {
                      "operator": "Variables[0] (MDF_CurrentDirtyHPRatio) || RETURN",
                      "displayLines": "MDF_CurrentDirtyHPRatio",
                      "constants": [],
                      "variables": [
                        "MDF_CurrentDirtyHPRatio"
                      ]
                    },
                    "MDF_DirtyHPDelta": {
                      "operator": "Variables[0] (MDF_DamageValueFinal) || RETURN",
                      "displayLines": "MDF_DamageValueFinal",
                      "constants": [],
                      "variables": [
                        "MDF_DamageValueFinal"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "eventTrigger": "Waiting for Healing in Limbo",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "type": "Memosprite",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Set HP Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "targetSource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "setValue": 1
                    },
                    {
                      "name": "Lock HP",
                      "threshold": {
                        "operator": "Constants[0] (0.000010000076) || RETURN",
                        "displayLines": "0.000010000076",
                        "constants": [
                          0.000010000076
                        ],
                        "variables": []
                      },
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "lockHolder": "<a class=\"gModGreen\" id=\"-1214340360\">Monster_W4_DawnsEye_LockHP</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1488863445\">Modifier_Monster_W4_DawnsEye_01_MuteSpeed</a>[<span class=\"descriptionNumberColor\">Tide-Corrosion</span>]",
                      "valuePerStack": {
                        "MDF_DeathSPAdd": {
                          "operator": "Variables[0] (MDF_DeathSPAdd) || RETURN",
                          "displayLines": "MDF_DeathSPAdd",
                          "constants": [],
                          "variables": [
                            "MDF_DeathSPAdd"
                          ]
                        }
                      }
                    }
                  ]
                }
              ],
              "priorityLevel": -50
            }
          ],
          "useEntitySnapshot": true,
          "stackData": [
            "MDF_DamageValue"
          ],
          "latentQueue": [],
          "description": "Maximum Restorable HP decreases by <span class=\"descriptionNumberColor\">MDF_DamageValueFinal</span>.",
          "type": "Debuff",
          "effectName": "Rot",
          "statusName": "Rot"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-355315499\">Modifier_Monster_W4_DawnsEye_01_WheaterRognarokTotalDamageActionListener</a>",
          "stackType": "Replace",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Action End [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2100215981\">Modifier_Monster_W4_DawnsEye_01_WheaterRognarokTotalDamage</a>[<span class=\"descriptionNumberColor\">Black Tide Sync Rate</span>]",
                  "valuePerStack": {
                    "MDF_TotalDamageRatioAdd": {
                      "operator": "Variables[0] (MDF_TotalDamageRatioAdd) || RETURN",
                      "displayLines": "MDF_TotalDamageRatioAdd",
                      "constants": [],
                      "variables": [
                        "MDF_TotalDamageRatioAdd"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Stacking Modifier Instance [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2100215981\">Modifier_Monster_W4_DawnsEye_01_WheaterRognarokTotalDamage</a>[<span class=\"descriptionNumberColor\">Black Tide Sync Rate</span>]",
                      "valuePerStack": {
                        "MDF_TotalDamageRatioAdd": {
                          "operator": "Constants[0] (0) || Variables[0] (MDF_TotalDamageRatioCut) || SUB || RETURN",
                          "displayLines": "(0 - MDF_TotalDamageRatioCut)",
                          "constants": [
                            0
                          ],
                          "variables": [
                            "MDF_TotalDamageRatioCut"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_TotalDamageRatioAdd",
            "MDF_TotalDamageRatioCut"
          ],
          "latentQueue": [
            "AIFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1717270165\">Modifier_Monster_W4_DawnsEye_WheaterRognarokTrueDamageMark</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Attack Action Completed [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__74735154\">Modifier_Monster_W4_DawnsEye_WheaterRognarokTrueDamage</a>[<span class=\"descriptionNumberColor\">Skygash</span>]",
          "execute": [
            {
              "eventTrigger": "Deal Damage End [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "team": "Enemy Team",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1525188531\">Modifier_Monster_W4_DawnsEye_WheaterRainSubMark</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "team": "Enemy Team",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Copy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variable": "TotalDamageRatio",
                      "target2": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variable2": "MDF_TotalDamageRatio"
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1525188531\">Modifier_Monster_W4_DawnsEye_WheaterRainSubMark</a>"
                      },
                      "ifTargetFound": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "AttackScaling": {
                            "DamageType": {
                              "name": "Damage Type Source",
                              "sourceType": {}
                            },
                            "Damage": {
                              "operator": "Variables[0] (MDF_TotalDamageRatio) || Variables[1] (MDF_DamagePercentage) || MUL || RETURN",
                              "displayLines": "(MDF_TotalDamageRatio * MDF_DamagePercentage)",
                              "constants": [],
                              "variables": [
                                "MDF_TotalDamageRatio",
                                "MDF_DamagePercentage"
                              ]
                            },
                            "cantKill": true,
                            "dmgFormula": "Max HP Scaling",
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "True DMG"
                          },
                          "overrideDamageOwner": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          }
                        }
                      ]
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1525188531\">Modifier_Monster_W4_DawnsEye_WheaterRainSubMark</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "description": "After targets attack, deals True DMG based on \"Black Tide Sync Rate.\" This DMG is \"Non-fatal.\"",
          "type": "Buff",
          "statusName": "Skygash"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2100215981\">Modifier_Monster_W4_DawnsEye_01_WheaterRognarokTotalDamage</a>[<span class=\"descriptionNumberColor\">Black Tide Sync Rate</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "MDF_TotalDamageRatio",
                  "value": {
                    "operator": "Variables[0] (MDF_TotalDamageRatioAdd) || RETURN",
                    "displayLines": "MDF_TotalDamageRatioAdd",
                    "constants": [],
                    "variables": [
                      "MDF_TotalDamageRatioAdd"
                    ]
                  },
                  "min": {
                    "operator": "Variables[0] (MDF_TotalDamageRatioMin) || RETURN",
                    "displayLines": "MDF_TotalDamageRatioMin",
                    "constants": [],
                    "variables": [
                      "MDF_TotalDamageRatioMin"
                    ]
                  },
                  "max": {
                    "operator": "Variables[0] (MDF_TotalDamageRatioMax) || RETURN",
                    "displayLines": "MDF_TotalDamageRatioMax",
                    "constants": [],
                    "variables": [
                      "MDF_TotalDamageRatioMax"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "CurrentDamage",
                  "value": {
                    "operator": "Variables[0] (MDF_BaseAttack) || Variables[1] (MDF_TotalDamageRatio) || MUL || RETURN",
                    "displayLines": "(MDF_BaseAttack * MDF_TotalDamageRatio)",
                    "constants": [],
                    "variables": [
                      "MDF_BaseAttack",
                      "MDF_TotalDamageRatio"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "TotalDamageRatio",
                  "value": {
                    "operator": "Variables[0] (MDF_TotalDamageRatio) || RETURN",
                    "displayLines": "MDF_TotalDamageRatio",
                    "constants": [],
                    "variables": [
                      "MDF_TotalDamageRatio"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_ChargePercentage",
                  "value": {
                    "operator": "Variables[0] (TotalDamageRatio) || Variables[1] (MDF_TotalDamageRatioMax) || DIV || RETURN",
                    "displayLines": "(TotalDamageRatio / MDF_TotalDamageRatioMax)",
                    "constants": [],
                    "variables": [
                      "TotalDamageRatio",
                      "MDF_TotalDamageRatioMax"
                    ]
                  }
                },
                {
                  "name": "Set Aquila UI Data"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 4015021,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Hyacinthia, Eye of Twilight",
                    "isBaseCompare": true
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_TotalDamageRatioAdd"
          ],
          "latentQueue": [
            "AIFlag"
          ],
          "description": "The current Charge ratio of \"Eye of Twilight\" is <span class=\"descriptionNumberColor\">MDF_ChargePercentage</span>.",
          "type": "Other",
          "statusName": "Black Tide Sync Rate"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1313380500\">Modifier_Monster_W4_DawnsEye_01_WheaterRognarok</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1789818614\">Modifier_Monster_W4_DawnsEye_01_WheaterRognarokSub</a>[<span class=\"descriptionNumberColor\">Rot</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"235721507\">Enemy_W4_DawnsEye_01_BlackBlood</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-815851324\">Modifier_Monster_W4_DawnsEye_01_MaxHPAdd</a>[<span class=\"descriptionNumberColor\">Flame-Chase</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1825758342\">Modifier_Monster_W4_DawnsEye_01_MaxHPAddSub</a>"
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Battle Event List}}"
                  },
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Battle Event ID",
                        "ID": 20015,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      {
                        "name": "Battle Event ID",
                        "ID": 60029,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Destroy Battle Entity",
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
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [
            "MDF_DamageValue"
          ],
          "latentQueue": [],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]].[[Remove Backup Memosprite]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1789818614\">Modifier_Monster_W4_DawnsEye_01_WheaterRognarokSub</a>[<span class=\"descriptionNumberColor\">Rot</span>]",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_RecoverRatioAttack": {
                  "operator": "Variables[0] (MDF_DirtyHPBase) || RETURN",
                  "displayLines": "MDF_DirtyHPBase",
                  "constants": [],
                  "variables": [
                    "MDF_DirtyHPBase"
                  ]
                },
                "MDF_BaseAttack": {
                  "operator": "Variables[0] (MDF_BaseAttack) || RETURN",
                  "displayLines": "MDF_BaseAttack",
                  "constants": [],
                  "variables": [
                    "MDF_BaseAttack"
                  ]
                },
                "MDF_DamageRatioAdd": 0,
                "MDF_DamageValueFinal": {
                  "operator": "Variables[0] (MDF_DamageValueFinal) || RETURN",
                  "displayLines": "MDF_DamageValueFinal",
                  "constants": [],
                  "variables": [
                    "MDF_DamageValueFinal"
                  ]
                },
                "MDF_DeathSPAdd": {
                  "operator": "Variables[0] (MDF_DeathSPAdd) || RETURN",
                  "displayLines": "MDF_DeathSPAdd",
                  "constants": [],
                  "variables": [
                    "MDF_DeathSPAdd"
                  ]
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"74735154\">Modifier_Monster_W4_DawnsEye_WheaterRognarokTrueDamage</a>[<span class=\"descriptionNumberColor\">Skygash</span>]",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_DamagePercentage": {
                  "operator": "Variables[0] ({[SkillP09[4]]}) || RETURN",
                  "displayLines": "{[SkillP09[4]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP09[4]]}"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-985067601\">Enemy_W4_DawnsEye_01_BreakMuteSpeed</a>",
          "modifierFlags": [],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "Default"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "Phase1"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1259657295\">Enemy_W4_DawnsEye_01_BreakController</a>",
          "modifierFlags": [
            "ForceHitH"
          ],
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
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value": "MonsterType_W4_BossPart"
                          },
                          {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value": "MonsterType_W4_BossPartP3"
                          }
                        ]
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": "<",
                        "value2": 3
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Deal Toughness DMG",
                      "value": {
                        "operator": "Variables[0] (StanceDamage) || RETURN",
                        "displayLines": "StanceDamage",
                        "constants": [],
                        "variables": [
                          "StanceDamage"
                        ]
                      },
                      "defender": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "forceReduction": true,
                      "canDelay": true,
                      "ToughnessDMGType": {
                        "name": "Damage Type Source",
                        "sourceType": {}
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
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value": "MonsterType_W4_BossPart"
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "flagName": "Break"
                          },
                          "passed": [
                            {
                              "name": "Exit Broken-State",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              }
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Action Advance/Delay",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "advanceType": "Set",
                          "multiAdd": "{[SkillP10[4]]}"
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-985067601\">Enemy_W4_DawnsEye_01_BreakMuteSpeed</a>"
                    }
                  ]
                },
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "advanceType": "Set",
                  "multiAdd": "{[SkillP10[3]]}"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 3
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"352501027\">Enemy_W4_DawnsEye_01_Ability01isAiming</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1769824945\">Enemy_Monster_W4_DawnsEye_01_AimTarget</a>"
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
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-439718905\">Enemy_W4_DawnsEye_01_Ability03_Charge</a>[<span class=\"descriptionNumberColor\">The Dark Tides Cometh</span>]"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-439718905\">Enemy_W4_DawnsEye_01_Ability03_Charge</a>[<span class=\"descriptionNumberColor\">The Dark Tides Cometh</span>]"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "MonsterType_W4_BossPart"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-985067601\">Enemy_W4_DawnsEye_01_BreakMuteSpeed</a>"
                    },
                    {
                      "name": "Remove Modifier Behavior Flag(s)",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "flagNames": []
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "Break"
                      },
                      "passed": [
                        {
                          "name": "Reset Toughness",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          }
                        },
                        {
                          "name": "Exit Broken-State",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
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
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]",
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value": "MonsterType_W4_BossPartRight"
                          },
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "value": "MonsterType_W4_BossPartLeft"
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
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-459185506\">Enemy_W4_DawnsEye_01_StandbyEffect</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking Modifier Instance [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
                  },
                  "passed": [
                    {
                      "name": "Deal Toughness DMG",
                      "value": {
                        "operator": "Variables[0] (StanceDamage) || RETURN",
                        "displayLines": "StanceDamage",
                        "constants": [],
                        "variables": [
                          "StanceDamage"
                        ]
                      },
                      "defender": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "forceReduction": true,
                      "canDelay": true,
                      "ToughnessDMGType": {
                        "name": "Damage Type Source",
                        "sourceType": {}
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "StanceDamage"
          ],
          "latentQueue": [
            "AIFlag"
          ]
        }
      ],
      "references": []
    },
    "4015020_Functions": {
      "fileName": "4015020_Functions",
      "abilityType": "Char. Functions",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "length": 1,
      "parse": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1186573263\">W4_DawnsEye_01_TargetChange</a>",
          "parse": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"352501027\">Enemy_W4_DawnsEye_01_Ability01isAiming</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "flagName": "Taunt"
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemies by Aggro}}"
                  },
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1769824945\">Enemy_Monster_W4_DawnsEye_01_AimTarget</a>"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-752624700\">Enemy_W4_DawnsEye_01_MainStory</a>"
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Character ID",
                            "ID": 1409,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "characterName": "Hyacine",
                            "invertCondition": true
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-1488863445\">Modifier_Monster_W4_DawnsEye_01_MuteSpeed</a>[<span class=\"descriptionNumberColor\">Tide-Corrosion</span>]",
                            "invertCondition": true,
                            "justAddedOrActive": true
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
                          "modifier": "<a class=\"gModGreen\" id=\"1769824945\">Enemy_Monster_W4_DawnsEye_01_AimTarget</a>"
                        }
                      ],
                      "noTargetFound": [
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
                            "modifier": "<a class=\"gModGreen\" id=\"-1488863445\">Modifier_Monster_W4_DawnsEye_01_MuteSpeed</a>[<span class=\"descriptionNumberColor\">Tide-Corrosion</span>]",
                            "invertCondition": true,
                            "justAddedOrActive": true
                          },
                          "ifTargetFound": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1769824945\">Enemy_Monster_W4_DawnsEye_01_AimTarget</a>"
                            }
                          ],
                          "noTargetFound": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1301721119\">Enemy_W4_DawnsEye_01_AimNoTarget</a>"
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
                        "target": "{{Player Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1488863445\">Modifier_Monster_W4_DawnsEye_01_MuteSpeed</a>[<span class=\"descriptionNumberColor\">Tide-Corrosion</span>]",
                        "invertCondition": true,
                        "justAddedOrActive": true
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1769824945\">Enemy_Monster_W4_DawnsEye_01_AimTarget</a>"
                        }
                      ],
                      "noTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1301721119\">Enemy_W4_DawnsEye_01_AimNoTarget</a>"
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
      "references": []
    },
    "4015020_BE_BattleEvents": {
      "fileName": "4015020_BE_BattleEvents",
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
          "ID": 60029,
          "team": "Player Team",
          "eventType": "Assist",
          "abilityList": [
            "BattleEventAbility_620101_Camera"
          ],
          "overridesArray": [
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
              "value": 90
            }
          ],
          "eventSpeed": 100,
          "hardLevelEvent": true,
          "eliteGroup": true,
          "actionDescription": "Removes the \"Tide-Corrosion\" state from all ally targets. Adds \"Flame-Chase\" and \"Eagerness\" to all ally targets and restores HP."
        },
        {
          "name": "Battle Event Construction",
          "ID": 20015,
          "team": "Enemy Team",
          "eventType": "Assist",
          "abilityList": [
            "BattleEventAbility_Monster_DawnEye_01_Rognarok"
          ],
          "overridesArray": [
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
              "value": 90
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
              "value": 100
            }
          ],
          "eventSpeed": 167,
          "hardLevelEvent": true
        }
      ],
      "references": []
    }
  }
}