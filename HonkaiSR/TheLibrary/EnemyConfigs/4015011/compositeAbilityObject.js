const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 4015011,
  "trimCharacterName": 4015011,
  "abilityList": [
    "4015011_BattleEventAbility_Monster_DawnEye_01_Rognarok",
    "4015011_BattleEventAbility_Monster_DawnEye_01_RognarokTrigger",
    "4015011_Monster_W4_DawnsEye_01_Ability04_Part02",
    "4015011_Monster_W4_DawnsEye_01_Ability04_Part01",
    "4015011_Monster_W4_DawnsEye_01_Ability03_Part02",
    "4015011_Monster_W4_DawnsEye_01_Ability03_Part01",
    "4015011_Monster_W4_DawnsEye_01_Ability02_Part02",
    "4015011_Monster_W4_DawnsEye_01_Ability02_Part01",
    "4015011_Monster_W4_DawnsEye_01_Ability01_Part02",
    "4015011_Monster_W4_DawnsEye_01_Ability01_Part01",
    "4015011_Monster_W4_DawnsEye_01_PassiveAbility_Insert",
    "4015011_Monster_W4_DawnsEye_01_MainStoryEnd",
    "4015011_Monster_W4_DawnsEye_01_MainStoryUseBE",
    "4015011_Monster_W4_DawnsEye_01_MainStoryUnlockBE",
    "4015011_Monster_W4_DawnsEye_01_MainStoryOpeningPhase01",
    "4015011_Monster_W4_DawnsEye_01_MainStory",
    "4015011_Monster_W4_DawnsEyePart_06_PassiveAbilityInitiate",
    "4015011_Monster_W4_DawnsEye_01_PassiveAbilityInitiate5",
    "4015011_Monster_W4_DawnsEye_01_PassiveAbilityInitiate4",
    "4015011_Monster_W4_DawnsEye_01_PassiveAbilityInitiate3",
    "4015011_Monster_W4_DawnsEye_01_PassiveAbilityInitiate2",
    "4015011_Monster_W4_DawnsEye_01_PassiveAbilityInitiate",
    "4015011_LevelAbility_Dawnseye_WeatherSunny",
    "4015011_Monster_W4_DawnsEye_RainThunder_Part02",
    "4015011_Monster_W4_DawnsEye_RainThunder_Part01",
    "4015011_BattleEventAbility_W4_DawnsEye_RainSKill04Result",
    "4015011_BattleEventAbility_W4_DawnsEye_RainKillSummon",
    "4015011_BattleEventAbility_W4_DawnsEye_RainChargeBreak",
    "4015011_BattleEventAbility_W4_DawnsEye_SummonMonster",
    "4015011_Monster_W4_DawnsEye_Ability05P2_Part02",
    "4015011_Monster_W4_DawnsEye_Ability05P2_Part01",
    "4015011_Monster_W4_DawnsEye_Ability05P1_Part02",
    "4015011_Monster_W4_DawnsEye_Ability05_Part01",
    "4015011_Monster_W4_DawnsEye_Ability04P2_Part02",
    "4015011_Monster_W4_DawnsEye_Ability04P2_Part01",
    "4015011_Monster_W4_DawnsEye_Ability04_Part02",
    "4015011_Monster_W4_DawnsEye_Ability04_Part01",
    "4015011_Monster_W4_DawnsEye_Ability03P2_Part02",
    "4015011_Monster_W4_DawnsEye_Ability03P2_Part01",
    "4015011_Monster_W4_DawnsEye_Ability03_Part02",
    "4015011_Monster_W4_DawnsEye_Ability03_Part01",
    "4015011_Monster_W4_DawnsEye_Ability02P2_Part02",
    "4015011_Monster_W4_DawnsEye_Ability02P2_Part01",
    "4015011_Monster_W4_DawnsEye_Ability02_Part02",
    "4015011_Monster_W4_DawnsEye_Ability02_Part01",
    "4015011_Monster_W4_DawnsEye_Ability01P2_Part02",
    "4015011_Monster_W4_DawnsEye_Ability01P2_Part01",
    "4015011_Monster_W4_DawnsEye_Ability01_Part02",
    "4015011_Monster_W4_DawnsEye_Ability01_Part01",
    "4015011_Monster_W4_DawnsEye_PassiveAbility_Insert",
    "4015011_Monster_W4_DawnsEye_PassiveAbility_InsertMainStory",
    "4015011_Monster_W4_DawnsEye_MainStoryOpeningPhase03",
    "4015011_Monster_W4_DawnsEye_MainStoryOpeningPhase02",
    "4015011_Monster_W4_DawnsEye_MainStoryOpeningPhase01",
    "4015011_Monster_W4_DawnsEye_MainStory",
    "4015011_Monster_W4_DawnsEye_PassiveAbilityInitiate2ForFX",
    "4015011_Monster_W4_DawnsEye_PassiveAbilityInitiate6",
    "4015011_Monster_W4_DawnsEye_PassiveAbilityInitiate5",
    "4015011_Monster_W4_DawnsEye_PassiveAbilityInitiate4",
    "4015011_Monster_W4_DawnsEye_PassiveAbilityInitiate3",
    "4015011_Monster_W4_DawnsEye_PassiveAbilityInitiate2",
    "4015011_Monster_W4_DawnsEyePart_05_PassiveAbilityInitiate",
    "4015011_Monster_W4_DawnsEye_PassiveAbilityInitiate_Weekly",
    "4015011_Monster_W4_DawnsEye_PassiveAbilityInitiate",
    "4015011_Modifiers",
    "4015011_Functions",
    "4015011_BE_BattleEvents"
  ],
  "abilityObject": {
    "4015011_BattleEventAbility_Monster_DawnEye_01_Rognarok": {
      "fileName": "4015011_BattleEventAbility_Monster_DawnEye_01_Rognarok",
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
    "4015011_BattleEventAbility_Monster_DawnEye_01_RognarokTrigger": {
      "fileName": "4015011_BattleEventAbility_Monster_DawnEye_01_RognarokTrigger",
      "childAbilityList": [
        "4015011_BattleEventAbility_Monster_DawnEye_01_RognarokTrigger",
        "4015011_Monster_W4_DawnsEye_01_Rognarok_Camera"
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
      "references": []
    },
    "4015011_Monster_W4_DawnsEye_01_Ability04_Part02": {
      "fileName": "4015011_Monster_W4_DawnsEye_01_Ability04_Part02",
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
    "4015011_Monster_W4_DawnsEye_01_Ability04_Part01": {
      "fileName": "4015011_Monster_W4_DawnsEye_01_Ability04_Part01",
      "childAbilityList": [
        "4015011_Monster_W4_DawnsEye_01_Ability04_Camera",
        "4015011_Monster_W4_DawnsEye_01_Ability04_Part01",
        "4015011_Monster_W4_DawnsEye_01_Ability04_Part02"
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
      "references": []
    },
    "4015011_Monster_W4_DawnsEye_01_Ability03_Part02": {
      "fileName": "4015011_Monster_W4_DawnsEye_01_Ability03_Part02",
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
    "4015011_Monster_W4_DawnsEye_01_Ability03_Part01": {
      "fileName": "4015011_Monster_W4_DawnsEye_01_Ability03_Part01",
      "childAbilityList": [
        "4015011_Monster_W4_DawnsEye_01_Ability03_Camera",
        "4015011_Monster_W4_DawnsEye_01_Ability03_Part01",
        "4015011_Monster_W4_DawnsEye_01_Ability03_Part02"
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
      "references": []
    },
    "4015011_Monster_W4_DawnsEye_01_Ability02_Part02": {
      "fileName": "4015011_Monster_W4_DawnsEye_01_Ability02_Part02",
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
      "references": []
    },
    "4015011_Monster_W4_DawnsEye_01_Ability02_Part01": {
      "fileName": "4015011_Monster_W4_DawnsEye_01_Ability02_Part01",
      "childAbilityList": [
        "4015011_Monster_W4_DawnsEye_01_Ability02_Camera",
        "4015011_Monster_W4_DawnsEye_01_Ability02_Part01",
        "4015011_Monster_W4_DawnsEye_01_Ability02_Part02"
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
      "references": []
    },
    "4015011_Monster_W4_DawnsEye_01_Ability01_Part02": {
      "fileName": "4015011_Monster_W4_DawnsEye_01_Ability01_Part02",
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
      "references": []
    },
    "4015011_Monster_W4_DawnsEye_01_Ability01_Part01": {
      "fileName": "4015011_Monster_W4_DawnsEye_01_Ability01_Part01",
      "childAbilityList": [
        "4015011_Monster_W4_DawnsEye_01_Ability01_Camera",
        "4015011_Monster_W4_DawnsEye_01_Ability01_Part01",
        "4015011_Monster_W4_DawnsEye_01_Ability01_Part02"
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
      "references": []
    },
    "4015011_Monster_W4_DawnsEye_01_PassiveAbility_Insert": {
      "fileName": "4015011_Monster_W4_DawnsEye_01_PassiveAbility_Insert",
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
      "references": []
    },
    "4015011_Monster_W4_DawnsEye_01_MainStoryEnd": {
      "fileName": "4015011_Monster_W4_DawnsEye_01_MainStoryEnd",
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
    "4015011_Monster_W4_DawnsEye_01_MainStoryUseBE": {
      "fileName": "4015011_Monster_W4_DawnsEye_01_MainStoryUseBE",
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
      "references": []
    },
    "4015011_Monster_W4_DawnsEye_01_MainStoryUnlockBE": {
      "fileName": "4015011_Monster_W4_DawnsEye_01_MainStoryUnlockBE",
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
    "4015011_Monster_W4_DawnsEye_01_MainStoryOpeningPhase01": {
      "fileName": "4015011_Monster_W4_DawnsEye_01_MainStoryOpeningPhase01",
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
      "references": []
    },
    "4015011_Monster_W4_DawnsEye_01_MainStory": {
      "fileName": "4015011_Monster_W4_DawnsEye_01_MainStory",
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
    "4015011_Monster_W4_DawnsEyePart_06_PassiveAbilityInitiate": {
      "fileName": "4015011_Monster_W4_DawnsEyePart_06_PassiveAbilityInitiate",
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
    "4015011_Monster_W4_DawnsEye_01_PassiveAbilityInitiate5": {
      "fileName": "4015011_Monster_W4_DawnsEye_01_PassiveAbilityInitiate5",
      "skillTrigger": "SkillP10",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "4015011_Monster_W4_DawnsEye_01_PassiveAbilityInitiate4": {
      "fileName": "4015011_Monster_W4_DawnsEye_01_PassiveAbilityInitiate4",
      "skillTrigger": "SkillP09",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "4015011_Monster_W4_DawnsEye_01_PassiveAbilityInitiate3": {
      "fileName": "4015011_Monster_W4_DawnsEye_01_PassiveAbilityInitiate3",
      "skillTrigger": "SkillP08",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "4015011_Monster_W4_DawnsEye_01_PassiveAbilityInitiate2": {
      "fileName": "4015011_Monster_W4_DawnsEye_01_PassiveAbilityInitiate2",
      "skillTrigger": "SkillP07",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "4015011_Monster_W4_DawnsEye_01_PassiveAbilityInitiate": {
      "fileName": "4015011_Monster_W4_DawnsEye_01_PassiveAbilityInitiate",
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
    "4015011_LevelAbility_Dawnseye_WeatherSunny": {
      "fileName": "4015011_LevelAbility_Dawnseye_WeatherSunny",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1982815636\">Modifier_Monster_W4_DawnsEye_WheaterSunnyForLevel</a>",
          "valuePerStack": {
            "Weather_SunnyHeatInitial": 40,
            "Weather_HeatDamage": 0.04,
            "Weather_HeatAddPerAction": 1,
            "Weather_HeatCountDown": 5,
            "Weather_AllDamageTypeAddedRatio": 0.005
          }
        }
      ],
      "references": []
    },
    "4015011_Monster_W4_DawnsEye_RainThunder_Part02": {
      "fileName": "4015011_Monster_W4_DawnsEye_RainThunder_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4015011_Monster_W4_DawnsEye_RainThunder_Part01": {
      "fileName": "4015011_Monster_W4_DawnsEye_RainThunder_Part01",
      "childAbilityList": [
        "4015011_Monster_W4_DawnsEye_RainThunder_Part01",
        "4015011_Monster_W4_DawnsEye_RainThunder_Part02"
      ],
      "skillTrigger": "RainThunder",
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
          "ability": "Monster_W4_DawnsEye_RainThunder_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4015011_BattleEventAbility_W4_DawnsEye_RainSKill04Result": {
      "fileName": "4015011_BattleEventAbility_W4_DawnsEye_RainSKill04Result",
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
            "modifier": "<a class=\"gModGreen\" id=\"2022265091\">Enemy_W4_DawnsEye_MainStory</a>"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"185030676\">Enemy_W4_DawnsEye_ThunderAttackPhase02</a>"
            }
          ]
        },
        "Deleted bullshit",
        {
          "name": "Define Custom Variable",
          "variableName": "Thunder_CountTotal",
          "value": {
            "operator": "Variables[0] (Thunder_CountLight) || RETURN",
            "displayLines": "Thunder_CountLight",
            "constants": [],
            "variables": [
              "Thunder_CountLight"
            ]
          }
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Thunder"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Thunder_CountLight",
            "compareType": ">",
            "value2": 5
          },
          "passed": [
            {
              "name": "Looped Event",
              "maxLoops": 3,
              "Event": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "Damage": {
                      "operator": "Variables[0] ({[SkillP02[1]]}) || Variables[1] (Thunder_CountTotal) || Constants[0] (6) || DIV || MUL || RETURN",
                      "displayLines": "({[SkillP02[1]]} * (Thunder_CountTotal / 6))",
                      "constants": [
                        6
                      ],
                      "variables": [
                        "{[SkillP02[1]]}",
                        "Thunder_CountTotal"
                      ]
                    },
                    "dmgFormula": "Max HP Scaling",
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK"
                  }
                }
              ]
            },
            {
              "name": "Looped Event",
              "maxLoops": 3,
              "Event": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "Damage": {
                      "operator": "Variables[0] ({[SkillP02[1]]}) || Variables[1] (Thunder_CountTotal) || Constants[0] (6) || DIV || MUL || RETURN",
                      "displayLines": "({[SkillP02[1]]} * (Thunder_CountTotal / 6))",
                      "constants": [
                        6
                      ],
                      "variables": [
                        "{[SkillP02[1]]}",
                        "Thunder_CountTotal"
                      ]
                    },
                    "dmgFormula": "Max HP Scaling",
                    "dmgFormulaFinal": "Converted DMG Base",
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
              "name": "Looped Event",
              "maxLoops": 3,
              "Event": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "Damage": {
                      "operator": "Variables[0] ({[SkillP02[1]]}) || Variables[1] (Thunder_CountLight) || MUL || Constants[0] (3) || DIV || RETURN",
                      "displayLines": "(({[SkillP02[1]]} * Thunder_CountLight) / 3)",
                      "constants": [
                        3
                      ],
                      "variables": [
                        "{[SkillP02[1]]}",
                        "Thunder_CountLight"
                      ]
                    },
                    "dmgFormula": "Max HP Scaling",
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK"
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "phase": "Default"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Thunder_CountLight",
          "value": 0
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1414068042\">Modifier_Monster_W4_DawnsEye_WheaterMarkAbility04</a>[<span class=\"descriptionNumberColor\">Ionization</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2093876840\">Modifier_Monster_W4_DawnsEye_WheaterRainUIController</a>"
        }
      ],
      "references": []
    },
    "4015011_BattleEventAbility_W4_DawnsEye_RainKillSummon": {
      "fileName": "4015011_BattleEventAbility_W4_DawnsEye_RainKillSummon",
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
            "modifier": "<a class=\"gModGreen\" id=\"2022265091\">Enemy_W4_DawnsEye_MainStory</a>"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"185030676\">Enemy_W4_DawnsEye_ThunderAttackPhase02</a>"
            }
          ]
        },
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Thunder_CountDark",
            "compareType": ">",
            "value2": {
              "operator": "Variables[0] (ThunderKillCount) || Variables[1] ({[SkillP02[4]]}) || MUL || RETURN",
              "displayLines": "(ThunderKillCount * {[SkillP02[4]]})",
              "constants": [],
              "variables": [
                "ThunderKillCount",
                "{[SkillP02[4]]}"
              ]
            }
          },
          "passed": [
            {
              "name": "Looped Event",
              "maxLoops": 3,
              "Event": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "Damage": {
                      "operator": "Variables[0] ({[SkillP02[1]]}) || Variables[1] (ThunderKillCount) || Variables[2] ({[SkillP02[4]]}) || MUL || Constants[0] (3) || DIV || MUL || RETURN",
                      "displayLines": "({[SkillP02[1]]} * ((ThunderKillCount * {[SkillP02[4]]}) / 3))",
                      "constants": [
                        3
                      ],
                      "variables": [
                        "{[SkillP02[1]]}",
                        "ThunderKillCount",
                        "{[SkillP02[4]]}"
                      ]
                    },
                    "dmgFormula": "Max HP Scaling",
                    "dmgFormulaFinal": "Converted DMG Base",
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
              "name": "Looped Event",
              "maxLoops": 3,
              "Event": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "Damage": {
                      "operator": "Variables[0] ({[SkillP02[1]]}) || Variables[1] (Thunder_CountDark) || MUL || Constants[0] (3) || DIV || RETURN",
                      "displayLines": "(({[SkillP02[1]]} * Thunder_CountDark) / 3)",
                      "constants": [
                        3
                      ],
                      "variables": [
                        "{[SkillP02[1]]}",
                        "Thunder_CountDark"
                      ]
                    },
                    "dmgFormula": "Max HP Scaling",
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK"
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "Thunder_CountDark",
          "value": {
            "operator": "Constants[0] (0) || Variables[0] (ThunderKillCount) || Variables[1] ({[SkillP02[4]]}) || MUL || SUB || RETURN",
            "displayLines": "(0 - (ThunderKillCount * {[SkillP02[4]]}))",
            "constants": [
              0
            ],
            "variables": [
              "ThunderKillCount",
              "{[SkillP02[4]]}"
            ]
          },
          "max": 999
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2093876840\">Modifier_Monster_W4_DawnsEye_WheaterRainUIController</a>"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "ThunderKillCount",
          "value": 0
        }
      ],
      "references": []
    },
    "4015011_BattleEventAbility_W4_DawnsEye_RainChargeBreak": {
      "fileName": "4015011_BattleEventAbility_W4_DawnsEye_RainChargeBreak",
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
            "modifier": "<a class=\"gModGreen\" id=\"2022265091\">Enemy_W4_DawnsEye_MainStory</a>"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"185030676\">Enemy_W4_DawnsEye_ThunderAttackPhase02</a>"
            }
          ]
        },
        "Deleted bullshit",
        {
          "name": "Define Custom Variable",
          "variableName": "Thunder_CountDark",
          "value": {
            "operator": "Variables[0] (Thunder_CountLight) || Variables[1] (Thunder_CountDark) || ADD || RETURN",
            "displayLines": "(Thunder_CountLight + Thunder_CountDark)",
            "constants": [],
            "variables": [
              "Thunder_CountLight",
              "Thunder_CountDark"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Thunder_TempCount",
          "value": {
            "operator": "Variables[0] (Thunder_CountDark) || RETURN",
            "displayLines": "Thunder_CountDark",
            "constants": [],
            "variables": [
              "Thunder_CountDark"
            ]
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-526594563\">Modifier_Monster_W4_DawnsEye_WheaterRainChargeBreak</a>"
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
          "name": "Looped Event",
          "maxLoops": 3,
          "Event": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] ({[SkillP02[1]]}) || Variables[1] (Thunder_TempCount) || Constants[0] (6) || DIV || MUL || RETURN",
                  "displayLines": "({[SkillP02[1]]} * (Thunder_TempCount / 6))",
                  "constants": [
                    6
                  ],
                  "variables": [
                    "{[SkillP02[1]]}",
                    "Thunder_TempCount"
                  ]
                },
                "dmgFormula": "Max HP Scaling",
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK"
              }
            }
          ]
        },
        {
          "name": "Looped Event",
          "maxLoops": 3,
          "Event": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] ({[SkillP02[1]]}) || Variables[1] (Thunder_TempCount) || Constants[0] (6) || DIV || MUL || RETURN",
                  "displayLines": "({[SkillP02[1]]} * (Thunder_TempCount / 6))",
                  "constants": [
                    6
                  ],
                  "variables": [
                    "{[SkillP02[1]]}",
                    "Thunder_TempCount"
                  ]
                },
                "dmgFormula": "Max HP Scaling",
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK"
              }
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Define Custom Variable",
          "variableName": "Thunder_CountDark",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Thunder_CountLight",
          "value": 0
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1414068042\">Modifier_Monster_W4_DawnsEye_WheaterMarkAbility04</a>[<span class=\"descriptionNumberColor\">Ionization</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2093876840\">Modifier_Monster_W4_DawnsEye_WheaterRainUIController</a>"
        }
      ],
      "references": []
    },
    "4015011_BattleEventAbility_W4_DawnsEye_SummonMonster": {
      "fileName": "4015011_BattleEventAbility_W4_DawnsEye_SummonMonster",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "MonsterType_W4_BossPartP3"
              },
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Left"
              }
            ]
          },
          "noTargetFound": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[SkillP03[2]]}) || RETURN",
                "displayLines": "{[SkillP03[2]]}",
                "constants": [],
                "variables": [
                  "{[SkillP03[2]]}"
                ]
              },
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonedMonsterID) || RETURN",
                    "displayLines": "SummonedMonsterID",
                    "constants": [],
                    "variables": [
                      "SummonedMonsterID"
                    ]
                  },
                  "locationType": "First"
                }
              ]
            },
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
                  "name": "Set Enemy Phase",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Recently Summoned Enemies}}"
                  },
                  "phase": 2
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Recently Summoned Enemies}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1716068014\">Enemy_W4_DawnsEye_PartHP</a>[<span class=\"descriptionNumberColor\">All As One</span>]",
              "valuePerStack": {
                "MDF_SunnyBreakCold": {
                  "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                  "displayLines": "{[SkillP01[3]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP01[3]]}"
                  ]
                },
                "MDF_SunnyBreakColdRatio": {
                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                  "displayLines": "{[SkillP01[2]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP01[2]]}"
                  ]
                }
              },
              "casterAssign": "CasterSelf"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Recently Summoned Enemies}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "MonsterType_W4_BossPartP3"
              },
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Right"
              }
            ]
          },
          "noTargetFound": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] ({[SkillP03[3]]}) || RETURN",
                "displayLines": "{[SkillP03[3]]}",
                "constants": [],
                "variables": [
                  "{[SkillP03[3]]}"
                ]
              },
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (SummonedMonsterID) || RETURN",
                    "displayLines": "SummonedMonsterID",
                    "constants": [],
                    "variables": [
                      "SummonedMonsterID"
                    ]
                  },
                  "locationType": "Last"
                }
              ]
            },
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
                  "name": "Set Enemy Phase",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Recently Summoned Enemies}}"
                  },
                  "phase": 2
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Recently Summoned Enemies}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1716068014\">Enemy_W4_DawnsEye_PartHP</a>[<span class=\"descriptionNumberColor\">All As One</span>]",
              "valuePerStack": {
                "MDF_SunnyBreakCold": {
                  "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                  "displayLines": "{[SkillP01[3]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP01[3]]}"
                  ]
                },
                "MDF_SunnyBreakColdRatio": {
                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                  "displayLines": "{[SkillP01[2]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP01[2]]}"
                  ]
                }
              },
              "casterAssign": "CasterSelf"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Recently Summoned Enemies}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
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
      ],
      "references": []
    },
    "4015011_Monster_W4_DawnsEye_Ability05P2_Part02": {
      "fileName": "4015011_Monster_W4_DawnsEye_Ability05P2_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"2111915075\">Enemy_W4_DawnsEye_Ability4P2Effect</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"2022265091\">Enemy_W4_DawnsEye_MainStory</a>"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1205772152\">Enemy_W4_DawnsEye_Ability05Phase02</a>"
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
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill05P2[0]]}) || RETURN",
              "displayLines": "{[Skill05P2[0]]}",
              "constants": [],
              "variables": [
                "{[Skill05P2[0]]}"
              ]
            },
            "HitSplit": 0.2,
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
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill05P2[0]]}) || RETURN",
              "displayLines": "{[Skill05P2[0]]}",
              "constants": [],
              "variables": [
                "{[Skill05P2[0]]}"
              ]
            },
            "HitSplit": 0.2,
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
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill05P2[0]]}) || RETURN",
              "displayLines": "{[Skill05P2[0]]}",
              "constants": [],
              "variables": [
                "{[Skill05P2[0]]}"
              ]
            },
            "HitSplit": 0.6,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Thunder_CountDark",
            "compareType": ">",
            "value2": {
              "operator": "Variables[0] ({[Skill05P2[1]]}) || RETURN",
              "displayLines": "{[Skill05P2[1]]}",
              "constants": [],
              "variables": [
                "{[Skill05P2[1]]}"
              ]
            }
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Thunder_CountTotal",
              "value": {
                "operator": "Variables[0] ({[Skill05P2[1]]}) || RETURN",
                "displayLines": "{[Skill05P2[1]]}",
                "constants": [],
                "variables": [
                  "{[Skill05P2[1]]}"
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Thunder_CountTotal",
              "value": {
                "operator": "Variables[0] (Thunder_CountDark) || RETURN",
                "displayLines": "Thunder_CountDark",
                "constants": [],
                "variables": [
                  "Thunder_CountDark"
                ]
              }
            }
          ]
        },
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "variableName": "CurrentLightTeamCount",
          "livingTargets": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "CurrentLightTeamCount",
            "compareType": ">",
            "value2": 0
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "DamageFlat": {
                  "operator": "Variables[0] ({[SkillP02[0]]}) || Variables[1] (BaseAttack) || MUL || Variables[2] (Thunder_CountTotal) || MUL || Variables[3] (CurrentLightTeamCount) || DIV || RETURN",
                  "displayLines": "((({[SkillP02[0]]} * BaseAttack) * Thunder_CountTotal) / CurrentLightTeamCount)",
                  "constants": [],
                  "variables": [
                    "{[SkillP02[0]]}",
                    "BaseAttack",
                    "Thunder_CountTotal",
                    "CurrentLightTeamCount"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK"
              }
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "Thunder_CountDark",
              "value": {
                "operator": "Constants[0] (0) || Variables[0] (Thunder_CountTotal) || SUB || RETURN",
                "displayLines": "(0 - Thunder_CountTotal)",
                "constants": [
                  0
                ],
                "variables": [
                  "Thunder_CountTotal"
                ]
              },
              "max": 999
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2093876840\">Modifier_Monster_W4_DawnsEye_WheaterRainUIController</a>"
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-484779713\">Enemy_W4_DawnsEye_Ability05_HitTag</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-526594563\">Modifier_Monster_W4_DawnsEye_WheaterRainChargeBreak</a>"
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
            "value1": "Thunder_CountLight",
            "compareType": ">",
            "value2": 0
          },
          "passed": [
            {
              "name": "Inject Ability Use",
              "condition": {
                "name": "Insert Ability Condition",
                "type": "AbilityOwnerInsertUnusedCount",
                "typeValue": 1
              },
              "conditionActive": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "Thunder_CountLight",
                    "compareType": ">=",
                    "value2": 1
                  }
                ]
              },
              "abilityName": "BattleEventAbility_W4_DawnsEye_RainSKill04Result",
              "abilitySource": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "priorityTag": "MonsterChangeState",
              "canHitNonTargets": true,
              "allowAbilityTriggers": false
            }
          ],
          "failed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1414068042\">Modifier_Monster_W4_DawnsEye_WheaterMarkAbility04</a>[<span class=\"descriptionNumberColor\">Ionization</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2093876840\">Modifier_Monster_W4_DawnsEye_WheaterRainUIController</a>"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1205772152\">Enemy_W4_DawnsEye_Ability05Phase02</a>",
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
    "4015011_Monster_W4_DawnsEye_Ability05P2_Part01": {
      "fileName": "4015011_Monster_W4_DawnsEye_Ability05P2_Part01",
      "childAbilityList": [
        "4015011_Monster_W4_DawnsEye_Ability05P2_Camera",
        "4015011_Monster_W4_DawnsEye_Ability05P2_Part01",
        "4015011_Monster_W4_DawnsEye_Ability05P2_Part02"
      ],
      "skillTrigger": "Skill05P2",
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
          "ability": "Monster_W4_DawnsEye_Ability05P2_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4015011_Monster_W4_DawnsEye_Ability05P1_Part02": {
      "fileName": "4015011_Monster_W4_DawnsEye_Ability05P1_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-936361058\">Enemy_W4_DawnsEye_Ability4P1Effect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1701351944\">Enemy_W4_DawnsEye_Ability4P1Effect02</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"2022265091\">Enemy_W4_DawnsEye_MainStory</a>"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1155439295\">Enemy_W4_DawnsEye_Ability05Phase01</a>"
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "scope": "TargetEntity",
          "variableName": "Skill05P1TotalDamage",
          "value": {
            "operator": "Variables[0] ({[Skill05P1[0]]}) || Variables[1] (Skill04P1SunnyHeat) || MUL || RETURN",
            "displayLines": "({[Skill05P1[0]]} * Skill04P1SunnyHeat)",
            "constants": [],
            "variables": [
              "{[Skill05P1[0]]}",
              "Skill04P1SunnyHeat"
            ]
          }
        },
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "variableName": "CurrentLightTeamCount",
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
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (Skill05P1TotalDamage) || Variables[1] (CurrentLightTeamCount) || DIV || RETURN",
              "displayLines": "(Skill05P1TotalDamage / CurrentLightTeamCount)",
              "constants": [],
              "variables": [
                "Skill05P1TotalDamage",
                "CurrentLightTeamCount"
              ]
            },
            "HitSplit": 0.1,
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
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (Skill05P1TotalDamage) || Variables[1] (CurrentLightTeamCount) || DIV || RETURN",
              "displayLines": "(Skill05P1TotalDamage / CurrentLightTeamCount)",
              "constants": [],
              "variables": [
                "Skill05P1TotalDamage",
                "CurrentLightTeamCount"
              ]
            },
            "HitSplit": 0.1,
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
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (Skill05P1TotalDamage) || Variables[1] (CurrentLightTeamCount) || DIV || RETURN",
              "displayLines": "(Skill05P1TotalDamage / CurrentLightTeamCount)",
              "constants": [],
              "variables": [
                "Skill05P1TotalDamage",
                "CurrentLightTeamCount"
              ]
            },
            "HitSplit": 0.1,
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
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (Skill05P1TotalDamage) || Variables[1] (CurrentLightTeamCount) || DIV || RETURN",
              "displayLines": "(Skill05P1TotalDamage / CurrentLightTeamCount)",
              "constants": [],
              "variables": [
                "Skill05P1TotalDamage",
                "CurrentLightTeamCount"
              ]
            },
            "HitSplit": 0.1,
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
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (Skill05P1TotalDamage) || Variables[1] (CurrentLightTeamCount) || DIV || RETURN",
              "displayLines": "(Skill05P1TotalDamage / CurrentLightTeamCount)",
              "constants": [],
              "variables": [
                "Skill05P1TotalDamage",
                "CurrentLightTeamCount"
              ]
            },
            "HitSplit": 0.1,
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
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (Skill05P1TotalDamage) || Variables[1] (CurrentLightTeamCount) || DIV || RETURN",
              "displayLines": "(Skill05P1TotalDamage / CurrentLightTeamCount)",
              "constants": [],
              "variables": [
                "Skill05P1TotalDamage",
                "CurrentLightTeamCount"
              ]
            },
            "HitSplit": 0.1,
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
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (Skill05P1TotalDamage) || Variables[1] (CurrentLightTeamCount) || DIV || RETURN",
              "displayLines": "(Skill05P1TotalDamage / CurrentLightTeamCount)",
              "constants": [],
              "variables": [
                "Skill05P1TotalDamage",
                "CurrentLightTeamCount"
              ]
            },
            "HitSplit": 0.4,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "Sunny_Temperature",
          "value": {
            "operator": "Variables[0] (Skill04P1SunnyHeat) || RETURN",
            "displayLines": "Skill04P1SunnyHeat",
            "constants": [],
            "variables": [
              "Skill04P1SunnyHeat"
            ]
          },
          "max": 999
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1737251406\">Enemy_W4_DawnsEye_Ability04_SunnyChargeHeat</a>[<span class=\"descriptionNumberColor\">Helium Flash</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"735847061\">Modifier_Monster_W4_DawnsEye_WheaterSunnyUIController</a>"
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
          "name": "Define Custom Variable",
          "variableName": "Skill04P1SunnyHeat",
          "value": 0
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
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1155439295\">Enemy_W4_DawnsEye_Ability05Phase01</a>",
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
    "4015011_Monster_W4_DawnsEye_Ability05_Part01": {
      "fileName": "4015011_Monster_W4_DawnsEye_Ability05_Part01",
      "childAbilityList": [
        "4015011_Monster_W4_DawnsEye_Ability05P1_Camera",
        "4015011_Monster_W4_DawnsEye_Ability05_Part01",
        "4015011_Monster_W4_DawnsEye_Ability05P1_Part02"
      ],
      "skillTrigger": "Skill05P1",
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
          "ability": "Monster_W4_DawnsEye_Ability05P1_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4015011_Monster_W4_DawnsEye_Ability04P2_Part02": {
      "fileName": "4015011_Monster_W4_DawnsEye_Ability04P2_Part02",
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
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"2022265091\">Enemy_W4_DawnsEye_MainStory</a>"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1839713758\">Enemy_W4_DawnsEye_MainStoryAbility04P2</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1604668536\">Enemy_W4_DawnsEye_Ability4P2Tutorial</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Level Entity}}"
                },
                "value1": "WeatherPhase02Flag",
                "compareType": "=",
                "value2": 0
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
          "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2111915075\">Enemy_W4_DawnsEye_Ability4P2Effect</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1923265590\">Modifier_Monster_W4_DawnsEye_WheaterRain</a>"
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
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
              "modifier": "<a class=\"gModGreen\" id=\"-526594563\">Modifier_Monster_W4_DawnsEye_WheaterRainChargeBreak</a>"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Thunder_CountDark",
              "value": {
                "operator": "Variables[0] (Thunder_CountDark) || Variables[1] ({[Skill04P2[0]]}) || ADD || RETURN",
                "displayLines": "(Thunder_CountDark + {[Skill04P2[0]]})",
                "constants": [],
                "variables": [
                  "Thunder_CountDark",
                  "{[Skill04P2[0]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Thunder_CountTotal",
              "value": {
                "operator": "Variables[0] (Thunder_CountDark) || RETURN",
                "displayLines": "Thunder_CountDark",
                "constants": [],
                "variables": [
                  "Thunder_CountDark"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Thunder_CountLight",
              "value": 0
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1414068042\">Modifier_Monster_W4_DawnsEye_WheaterMarkAbility04</a>[<span class=\"descriptionNumberColor\">Ionization</span>]",
              "valuePerStack": {
                "MDF_ThunderDark": {
                  "operator": "Variables[0] (Thunder_CountDark) || RETURN",
                  "displayLines": "Thunder_CountDark",
                  "constants": [],
                  "variables": [
                    "Thunder_CountDark"
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
              "modifier": "<a class=\"gModGreen\" id=\"-2093876840\">Modifier_Monster_W4_DawnsEye_WheaterRainUIController</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Sequence",
              "Sequence": [
                {
                  "name": "Target Name",
                  "target": "{{Enemy Team All(with Unselectable)}}"
                },
                {
                  "name": "Target Filter",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "MonsterType_W4_BossPartP3"
                  }
                }
              ]
            },
            "compareType": "<",
            "value2": 2
          },
          "passed": [
            {
              "name": "Inject Ability Use",
              "condition": {
                "name": "Insert Ability Condition",
                "type": "AbilityOwnerInsertUnusedCount",
                "typeValue": 1
              },
              "conditionActive": {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 2
              },
              "abilityName": "BattleEventAbility_W4_DawnsEye_SummonMonster",
              "abilitySource": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "priorityTag": "MonsterChangeState",
              "canHitNonTargets": true,
              "allowAbilityTriggers": false
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
                  "target": "{{Level Entity}}"
                },
                "value1": "WeatherPhase02Flag",
                "compareType": "=",
                "value2": 0
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"2022265091\">Enemy_W4_DawnsEye_MainStory</a>"
              }
            ]
          }
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1604668536\">Enemy_W4_DawnsEye_Ability4P2Tutorial</a>",
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
                    "value1": "WeatherPhase02Flag",
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
                      "variableName": "WeatherPhase02Flag"
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
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 2
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Level Entity}}"
                        },
                        "value1": "WeatherPhase02Flag",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1414068042\">Modifier_Monster_W4_DawnsEye_WheaterMarkAbility04</a>[<span class=\"descriptionNumberColor\">Ionization</span>]"
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
                      "variableName": "WeatherPhase02Flag",
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
          "for": "<a class=\"gModGreen\" id=\"mod__2111915075\">Enemy_W4_DawnsEye_Ability4P2Effect</a>",
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
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "WeatherPhase02Flag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1839713758\">Enemy_W4_DawnsEye_MainStoryAbility04P2</a>",
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
    "4015011_Monster_W4_DawnsEye_Ability04P2_Part01": {
      "fileName": "4015011_Monster_W4_DawnsEye_Ability04P2_Part01",
      "childAbilityList": [
        "4015011_Monster_W4_DawnsEye_Ability04P2_Camera",
        "4015011_Monster_W4_DawnsEye_Ability04P2_Part01",
        "4015011_Monster_W4_DawnsEye_Ability04P2_Part02"
      ],
      "skillTrigger": "Skill04P2",
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
          "ability": "Monster_W4_DawnsEye_Ability04P2_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4015011_Monster_W4_DawnsEye_Ability04_Part02": {
      "fileName": "4015011_Monster_W4_DawnsEye_Ability04_Part02",
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
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"2022265091\">Enemy_W4_DawnsEye_MainStory</a>"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1856491377\">Enemy_W4_DawnsEye_MainStoryAbility04P1</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"308966909\">Enemy_W4_DawnsEye_Ability4P1Tutorial</a>"
            },
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
                "value2": 0
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
          "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1701351944\">Enemy_W4_DawnsEye_Ability4P1Effect02</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-39064349\">Modifier_Monster_W4_DawnsEye_WheaterSunny</a>"
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
            "modifier": "<a class=\"gModGreen\" id=\"-39064349\">Modifier_Monster_W4_DawnsEye_WheaterSunny</a>"
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Skill04P1SunnyHeat",
              "value": {
                "operator": "Variables[0] ({[Skill04P1[0]]}) || RETURN",
                "displayLines": "{[Skill04P1[0]]}",
                "constants": [],
                "variables": [
                  "{[Skill04P1[0]]}"
                ]
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1737251406\">Enemy_W4_DawnsEye_Ability04_SunnyChargeHeat</a>[<span class=\"descriptionNumberColor\">Helium Flash</span>]",
              "valuePerStack": {
                "MDF_Ability04P1SunnyHeat": {
                  "operator": "Variables[0] ({[Skill04P1[0]]}) || RETURN",
                  "displayLines": "{[Skill04P1[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill04P1[0]]}"
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
              "modifier": "<a class=\"gModGreen\" id=\"735847061\">Modifier_Monster_W4_DawnsEye_WheaterSunnyUIController</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-936361058\">Enemy_W4_DawnsEye_Ability4P1Effect</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Sequence",
              "Sequence": [
                {
                  "name": "Target Name",
                  "target": "{{Enemy Team All(with Unselectable)}}"
                },
                {
                  "name": "Target Filter",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "MonsterType_W4_BossPartP3"
                  }
                }
              ]
            },
            "compareType": "<",
            "value2": 2
          },
          "passed": [
            {
              "name": "Inject Ability Use",
              "condition": {
                "name": "Insert Ability Condition",
                "type": "AbilityOwnerInsertUnusedCount",
                "typeValue": 1
              },
              "conditionActive": {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
              },
              "abilityName": "BattleEventAbility_W4_DawnsEye_SummonMonster",
              "abilitySource": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "priorityTag": "MonsterChangeState",
              "canHitNonTargets": true,
              "allowAbilityTriggers": false
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
                  "target": "{{Level Entity}}"
                },
                "value1": "WeatherPhase01Flag",
                "compareType": "=",
                "value2": 0
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"2022265091\">Enemy_W4_DawnsEye_MainStory</a>"
              }
            ]
          }
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__308966909\">Enemy_W4_DawnsEye_Ability4P1Tutorial</a>",
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
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 1
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
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1737251406\">Enemy_W4_DawnsEye_Ability04_SunnyChargeHeat</a>[<span class=\"descriptionNumberColor\">Helium Flash</span>]"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1701351944\">Enemy_W4_DawnsEye_Ability4P1Effect02</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Put in Deathstate Limbo",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
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
          "latentQueue": [
            "WeatherPhase01Flag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-936361058\">Enemy_W4_DawnsEye_Ability4P1Effect</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Put in Deathstate Limbo",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
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
          "latentQueue": [
            "WeatherPhase01Flag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1856491377\">Enemy_W4_DawnsEye_MainStoryAbility04P1</a>",
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
    "4015011_Monster_W4_DawnsEye_Ability04_Part01": {
      "fileName": "4015011_Monster_W4_DawnsEye_Ability04_Part01",
      "childAbilityList": [
        "4015011_Monster_W4_DawnsEye_Ability04P1_Camera",
        "4015011_Monster_W4_DawnsEye_Ability04_Part01",
        "4015011_Monster_W4_DawnsEye_Ability04_Part02"
      ],
      "skillTrigger": "Skill04P1",
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
          "ability": "Monster_W4_DawnsEye_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4015011_Monster_W4_DawnsEye_Ability03P2_Part02": {
      "fileName": "4015011_Monster_W4_DawnsEye_Ability03P2_Part02",
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
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1923265590\">Modifier_Monster_W4_DawnsEye_WheaterRain</a>"
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Thunder_CountDark",
              "value": {
                "operator": "Variables[0] (Thunder_CountDark) || Variables[1] ({[Skill03P2[1]]}) || ADD || RETURN",
                "displayLines": "(Thunder_CountDark + {[Skill03P2[1]]})",
                "constants": [],
                "variables": [
                  "Thunder_CountDark",
                  "{[Skill03P2[1]]}"
                ]
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2093876840\">Modifier_Monster_W4_DawnsEye_WheaterRainUIController</a>"
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
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill03P2[0]]}) || RETURN",
              "displayLines": "{[Skill03P2[0]]}",
              "constants": [],
              "variables": [
                "{[Skill03P2[0]]}"
              ]
            },
            "HitSplit": 0.2,
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
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill03P2[0]]}) || RETURN",
              "displayLines": "{[Skill03P2[0]]}",
              "constants": [],
              "variables": [
                "{[Skill03P2[0]]}"
              ]
            },
            "HitSplit": 0.2,
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
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill03P2[0]]}) || RETURN",
              "displayLines": "{[Skill03P2[0]]}",
              "constants": [],
              "variables": [
                "{[Skill03P2[0]]}"
              ]
            },
            "HitSplit": 0.2,
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
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill03P2[0]]}) || RETURN",
              "displayLines": "{[Skill03P2[0]]}",
              "constants": [],
              "variables": [
                "{[Skill03P2[0]]}"
              ]
            },
            "HitSplit": 0.2,
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
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill03P2[0]]}) || RETURN",
              "displayLines": "{[Skill03P2[0]]}",
              "constants": [],
              "variables": [
                "{[Skill03P2[0]]}"
              ]
            },
            "HitSplit": 0.2,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
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
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4015011_Monster_W4_DawnsEye_Ability03P2_Part01": {
      "fileName": "4015011_Monster_W4_DawnsEye_Ability03P2_Part01",
      "childAbilityList": [
        "4015011_Monster_W4_DawnsEye_Ability03P2_Camera",
        "4015011_Monster_W4_DawnsEye_Ability03P2_Part01",
        "4015011_Monster_W4_DawnsEye_Ability03P2_Part02"
      ],
      "skillTrigger": "Skill03P2",
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
          "ability": "Monster_W4_DawnsEye_Ability03P2_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4015011_Monster_W4_DawnsEye_Ability03_Part02": {
      "fileName": "4015011_Monster_W4_DawnsEye_Ability03_Part02",
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
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-39064349\">Modifier_Monster_W4_DawnsEye_WheaterSunny</a>"
          },
          "passed": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "Sunny_Temperature",
              "value": {
                "operator": "Variables[0] ({[Skill03P1[3]]}) || RETURN",
                "displayLines": "{[Skill03P1[3]]}",
                "constants": [],
                "variables": [
                  "{[Skill03P1[3]]}"
                ]
              },
              "max": 999
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"735847061\">Modifier_Monster_W4_DawnsEye_WheaterSunnyUIController</a>"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "DamageAddHeat",
              "value": {
                "operator": "Variables[0] (Sunny_Temperature) || Variables[1] ({[SkillP05[1]]}) || SUB || Constants[0] (10) || ADD || RETURN",
                "displayLines": "((Sunny_Temperature - {[SkillP05[1]]}) + 10)",
                "constants": [
                  10
                ],
                "variables": [
                  "Sunny_Temperature",
                  "{[SkillP05[1]]}"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DamageAddHeat",
                "compareType": "<=",
                "value2": 10
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "DamageAddHeat",
                  "value": 10
                }
              ]
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
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] ({[Skill03P1[0]]}) || Variables[1] ({[Skill03P1[1]]}) || Variables[2] (DamageAddHeat) || MUL || ADD || RETURN",
              "displayLines": "({[Skill03P1[0]]} + ({[Skill03P1[1]]} * DamageAddHeat))",
              "constants": [],
              "variables": [
                "{[Skill03P1[0]]}",
                "{[Skill03P1[1]]}",
                "DamageAddHeat"
              ]
            },
            "HitSplit": 0.2,
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
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] ({[Skill03P1[0]]}) || Variables[1] ({[Skill03P1[1]]}) || Variables[2] (DamageAddHeat) || MUL || ADD || RETURN",
              "displayLines": "({[Skill03P1[0]]} + ({[Skill03P1[1]]} * DamageAddHeat))",
              "constants": [],
              "variables": [
                "{[Skill03P1[0]]}",
                "{[Skill03P1[1]]}",
                "DamageAddHeat"
              ]
            },
            "HitSplit": 0.2,
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
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] ({[Skill03P1[0]]}) || Variables[1] ({[Skill03P1[1]]}) || Variables[2] (DamageAddHeat) || MUL || ADD || RETURN",
              "displayLines": "({[Skill03P1[0]]} + ({[Skill03P1[1]]} * DamageAddHeat))",
              "constants": [],
              "variables": [
                "{[Skill03P1[0]]}",
                "{[Skill03P1[1]]}",
                "DamageAddHeat"
              ]
            },
            "HitSplit": 0.2,
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
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] ({[Skill03P1[0]]}) || Variables[1] ({[Skill03P1[1]]}) || Variables[2] (DamageAddHeat) || MUL || ADD || RETURN",
              "displayLines": "({[Skill03P1[0]]} + ({[Skill03P1[1]]} * DamageAddHeat))",
              "constants": [],
              "variables": [
                "{[Skill03P1[0]]}",
                "{[Skill03P1[1]]}",
                "DamageAddHeat"
              ]
            },
            "HitSplit": 0.2,
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
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] ({[Skill03P1[0]]}) || Variables[1] ({[Skill03P1[1]]}) || Variables[2] (DamageAddHeat) || MUL || ADD || RETURN",
              "displayLines": "({[Skill03P1[0]]} + ({[Skill03P1[1]]} * DamageAddHeat))",
              "constants": [],
              "variables": [
                "{[Skill03P1[0]]}",
                "{[Skill03P1[1]]}",
                "DamageAddHeat"
              ]
            },
            "HitSplit": 0.2,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "value1": "Sunny_Temperature",
            "compareType": ">",
            "value2": {
              "operator": "Variables[0] ({[SkillP05[1]]}) || RETURN",
              "displayLines": "{[SkillP05[1]]}",
              "constants": [],
              "variables": [
                "{[SkillP05[1]]}"
              ]
            }
          },
          "passed": [
            {
              "name": "Action Advance/Delay",
              "target": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "advanceType": "Set",
              "add": {
                "operator": "Variables[0] ({[Skill03P1[2]]}) || Variables[1] (Sunny_Temperature) || Variables[2] ({[SkillP05[1]]}) || SUB || Constants[0] (10) || ADD || MUL || RETURN",
                "displayLines": "({[Skill03P1[2]]} * ((Sunny_Temperature - {[SkillP05[1]]}) + 10))",
                "constants": [
                  10
                ],
                "variables": [
                  "{[Skill03P1[2]]}",
                  "Sunny_Temperature",
                  "{[SkillP05[1]]}"
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Action Advance/Delay",
              "target": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "advanceType": "Set",
              "add": {
                "operator": "Variables[0] ({[Skill03P1[2]]}) || Constants[0] (10) || MUL || RETURN",
                "displayLines": "({[Skill03P1[2]]} * 10)",
                "constants": [
                  10
                ],
                "variables": [
                  "{[Skill03P1[2]]}"
                ]
              }
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
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4015011_Monster_W4_DawnsEye_Ability03_Part01": {
      "fileName": "4015011_Monster_W4_DawnsEye_Ability03_Part01",
      "childAbilityList": [
        "4015011_Monster_W4_DawnsEye_Ability03P1_Camera",
        "4015011_Monster_W4_DawnsEye_Ability03_Part01",
        "4015011_Monster_W4_DawnsEye_Ability03_Part02"
      ],
      "skillTrigger": "Skill03P1",
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
          "ability": "Monster_W4_DawnsEye_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4015011_Monster_W4_DawnsEye_Ability02P2_Part02": {
      "fileName": "4015011_Monster_W4_DawnsEye_Ability02P2_Part02",
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
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1923265590\">Modifier_Monster_W4_DawnsEye_WheaterRain</a>"
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Thunder_CountDark",
              "value": {
                "operator": "Variables[0] (Thunder_CountDark) || Variables[1] ({[Skill02P2[1]]}) || ADD || RETURN",
                "displayLines": "(Thunder_CountDark + {[Skill02P2[1]]})",
                "constants": [],
                "variables": [
                  "Thunder_CountDark",
                  "{[Skill02P2[1]]}"
                ]
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2093876840\">Modifier_Monster_W4_DawnsEye_WheaterRainUIController</a>"
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
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill02P2[0]]}) || RETURN",
              "displayLines": "{[Skill02P2[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02P2[0]]}"
              ]
            },
            "HitSplit": 0.25,
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
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill02P2[0]]}) || RETURN",
              "displayLines": "{[Skill02P2[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02P2[0]]}"
              ]
            },
            "HitSplit": 0.25,
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
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill02P2[0]]}) || RETURN",
              "displayLines": "{[Skill02P2[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02P2[0]]}"
              ]
            },
            "HitSplit": 0.25,
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
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill02P2[0]]}) || RETURN",
              "displayLines": "{[Skill02P2[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02P2[0]]}"
              ]
            },
            "HitSplit": 0.25,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
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
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4015011_Monster_W4_DawnsEye_Ability02P2_Part01": {
      "fileName": "4015011_Monster_W4_DawnsEye_Ability02P2_Part01",
      "childAbilityList": [
        "4015011_Monster_W4_DawnsEye_Ability02P2_Camera",
        "4015011_Monster_W4_DawnsEye_Ability02P2_Part01",
        "4015011_Monster_W4_DawnsEye_Ability02P2_Part02"
      ],
      "skillTrigger": "Skill02P2",
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
          "ability": "Monster_W4_DawnsEye_Ability02P2_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4015011_Monster_W4_DawnsEye_Ability02_Part02": {
      "fileName": "4015011_Monster_W4_DawnsEye_Ability02_Part02",
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
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-39064349\">Modifier_Monster_W4_DawnsEye_WheaterSunny</a>"
          },
          "passed": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "Sunny_Temperature",
              "value": {
                "operator": "Variables[0] ({[Skill02P1[2]]}) || RETURN",
                "displayLines": "{[Skill02P1[2]]}",
                "constants": [],
                "variables": [
                  "{[Skill02P1[2]]}"
                ]
              },
              "max": 999
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"735847061\">Modifier_Monster_W4_DawnsEye_WheaterSunnyUIController</a>"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "DamageAddHeat",
              "value": {
                "operator": "Variables[0] (Sunny_Temperature) || Variables[1] ({[SkillP05[1]]}) || SUB || Constants[0] (10) || ADD || RETURN",
                "displayLines": "((Sunny_Temperature - {[SkillP05[1]]}) + 10)",
                "constants": [
                  10
                ],
                "variables": [
                  "Sunny_Temperature",
                  "{[SkillP05[1]]}"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DamageAddHeat",
                "compareType": "<=",
                "value2": 10
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "DamageAddHeat",
                  "value": 10
                }
              ]
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] ({[Skill02P1[0]]}) || Variables[1] ({[Skill02P1[1]]}) || Variables[2] (DamageAddHeat) || MUL || ADD || RETURN",
              "displayLines": "({[Skill02P1[0]]} + ({[Skill02P1[1]]} * DamageAddHeat))",
              "constants": [],
              "variables": [
                "{[Skill02P1[0]]}",
                "{[Skill02P1[1]]}",
                "DamageAddHeat"
              ]
            },
            "HitSplit": 0.25,
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
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] ({[Skill02P1[0]]}) || Variables[1] ({[Skill02P1[1]]}) || Variables[2] (DamageAddHeat) || MUL || ADD || RETURN",
              "displayLines": "({[Skill02P1[0]]} + ({[Skill02P1[1]]} * DamageAddHeat))",
              "constants": [],
              "variables": [
                "{[Skill02P1[0]]}",
                "{[Skill02P1[1]]}",
                "DamageAddHeat"
              ]
            },
            "HitSplit": 0.25,
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
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] ({[Skill02P1[0]]}) || Variables[1] ({[Skill02P1[1]]}) || Variables[2] (DamageAddHeat) || MUL || ADD || RETURN",
              "displayLines": "({[Skill02P1[0]]} + ({[Skill02P1[1]]} * DamageAddHeat))",
              "constants": [],
              "variables": [
                "{[Skill02P1[0]]}",
                "{[Skill02P1[1]]}",
                "DamageAddHeat"
              ]
            },
            "HitSplit": 0.25,
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
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] ({[Skill02P1[0]]}) || Variables[1] ({[Skill02P1[1]]}) || Variables[2] (DamageAddHeat) || MUL || ADD || RETURN",
              "displayLines": "({[Skill02P1[0]]} + ({[Skill02P1[1]]} * DamageAddHeat))",
              "constants": [],
              "variables": [
                "{[Skill02P1[0]]}",
                "{[Skill02P1[1]]}",
                "DamageAddHeat"
              ]
            },
            "HitSplit": 0.25,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
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
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4015011_Monster_W4_DawnsEye_Ability02_Part01": {
      "fileName": "4015011_Monster_W4_DawnsEye_Ability02_Part01",
      "childAbilityList": [
        "4015011_Monster_W4_DawnsEye_Ability02_Camera",
        "4015011_Monster_W4_DawnsEye_Ability02_Part01",
        "4015011_Monster_W4_DawnsEye_Ability02_Part02"
      ],
      "skillTrigger": "Skill02P1",
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
          "ability": "Monster_W4_DawnsEye_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4015011_Monster_W4_DawnsEye_Ability01P2_Part02": {
      "fileName": "4015011_Monster_W4_DawnsEye_Ability01P2_Part02",
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
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1923265590\">Modifier_Monster_W4_DawnsEye_WheaterRain</a>"
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Thunder_CountDark",
              "value": {
                "operator": "Variables[0] (Thunder_CountDark) || Variables[1] ({[Skill01P2[1]]}) || ADD || RETURN",
                "displayLines": "(Thunder_CountDark + {[Skill01P2[1]]})",
                "constants": [],
                "variables": [
                  "Thunder_CountDark",
                  "{[Skill01P2[1]]}"
                ]
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2093876840\">Modifier_Monster_W4_DawnsEye_WheaterRainUIController</a>"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All(Left to Right)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] ({[Skill01P2[0]]}) || RETURN",
                  "displayLines": "{[Skill01P2[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01P2[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>"
            }
          ],
          "noTargetFound": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
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
                    "DamageType": "Thunder",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill01P2[0]]}) || RETURN",
                      "displayLines": "{[Skill01P2[0]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill01P2[0]]}"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "EnergyGainPercent": "100%"
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
            "target": "{{Player Team All(Left to Right)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] ({[Skill01P2[0]]}) || RETURN",
                  "displayLines": "{[Skill01P2[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01P2[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>"
            }
          ],
          "noTargetFound": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
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
                    "DamageType": "Thunder",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill01P2[0]]}) || RETURN",
                      "displayLines": "{[Skill01P2[0]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill01P2[0]]}"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "EnergyGainPercent": "100%"
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
            "target": "{{Player Team All(Left to Right)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] ({[Skill01P2[0]]}) || RETURN",
                  "displayLines": "{[Skill01P2[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01P2[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>"
            }
          ],
          "noTargetFound": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
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
                    "DamageType": "Thunder",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill01P2[0]]}) || RETURN",
                      "displayLines": "{[Skill01P2[0]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill01P2[0]]}"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "EnergyGainPercent": "100%"
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
            "target": "{{Player Team All(Left to Right)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] ({[Skill01P2[0]]}) || RETURN",
                  "displayLines": "{[Skill01P2[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01P2[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>"
            }
          ],
          "noTargetFound": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
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
                    "DamageType": "Thunder",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill01P2[0]]}) || RETURN",
                      "displayLines": "{[Skill01P2[0]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill01P2[0]]}"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "EnergyGainPercent": "100%"
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
            "target": "{{Player Team All(Left to Right)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] ({[Skill01P2[0]]}) || RETURN",
                  "displayLines": "{[Skill01P2[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01P2[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>"
            }
          ],
          "noTargetFound": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
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
                    "DamageType": "Thunder",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill01P2[0]]}) || RETURN",
                      "displayLines": "{[Skill01P2[0]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill01P2[0]]}"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "EnergyGainPercent": "100%"
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
            "target": "{{Player Team All(Left to Right)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] ({[Skill01P2[0]]}) || RETURN",
                  "displayLines": "{[Skill01P2[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01P2[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>"
            }
          ],
          "noTargetFound": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
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
                    "DamageType": "Thunder",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill01P2[0]]}) || RETURN",
                      "displayLines": "{[Skill01P2[0]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill01P2[0]]}"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "EnergyGainPercent": "100%"
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>"
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
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-117550687\">Enemy_W4_DawnsEye_Ability01_EnhanceMessage</a>",
          "execute": [
            {
              "eventTrigger": "Action End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ]
    },
    "4015011_Monster_W4_DawnsEye_Ability01P2_Part01": {
      "fileName": "4015011_Monster_W4_DawnsEye_Ability01P2_Part01",
      "childAbilityList": [
        "4015011_Monster_W4_DawnsEye_Ability01P2_Camera",
        "4015011_Monster_W4_DawnsEye_Ability01P2_Part01",
        "4015011_Monster_W4_DawnsEye_Ability01P2_Part02"
      ],
      "skillTrigger": "Skill01P2",
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
          "ability": "Monster_W4_DawnsEye_Ability01P2_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4015011_Monster_W4_DawnsEye_Ability01_Part02": {
      "fileName": "4015011_Monster_W4_DawnsEye_Ability01_Part02",
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
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-39064349\">Modifier_Monster_W4_DawnsEye_WheaterSunny</a>"
          },
          "passed": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "Sunny_Temperature",
              "value": {
                "operator": "Variables[0] ({[Skill01P1[2]]}) || RETURN",
                "displayLines": "{[Skill01P1[2]]}",
                "constants": [],
                "variables": [
                  "{[Skill01P1[2]]}"
                ]
              },
              "max": 999
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"735847061\">Modifier_Monster_W4_DawnsEye_WheaterSunnyUIController</a>"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "DamageAddHeat",
              "value": {
                "operator": "Variables[0] (Sunny_Temperature) || Variables[1] ({[SkillP05[1]]}) || SUB || Constants[0] (10) || ADD || RETURN",
                "displayLines": "((Sunny_Temperature - {[SkillP05[1]]}) + 10)",
                "constants": [
                  10
                ],
                "variables": [
                  "Sunny_Temperature",
                  "{[SkillP05[1]]}"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DamageAddHeat",
                "compareType": "<=",
                "value2": 10
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "DamageAddHeat",
                  "value": 10
                }
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All(Left to Right)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] ({[Skill01P1[0]]}) || Variables[1] ({[Skill01P1[1]]}) || Variables[2] (DamageAddHeat) || MUL || ADD || RETURN",
                  "displayLines": "({[Skill01P1[0]]} + ({[Skill01P1[1]]} * DamageAddHeat))",
                  "constants": [],
                  "variables": [
                    "{[Skill01P1[0]]}",
                    "{[Skill01P1[1]]}",
                    "DamageAddHeat"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>"
            }
          ],
          "noTargetFound": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
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
                    "DamageType": "Fire",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill01P1[0]]}) || Variables[1] ({[Skill01P1[1]]}) || Variables[2] (DamageAddHeat) || MUL || ADD || RETURN",
                      "displayLines": "({[Skill01P1[0]]} + ({[Skill01P1[1]]} * DamageAddHeat))",
                      "constants": [],
                      "variables": [
                        "{[Skill01P1[0]]}",
                        "{[Skill01P1[1]]}",
                        "DamageAddHeat"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "EnergyGainPercent": "100%"
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
            "target": "{{Player Team All(Left to Right)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] ({[Skill01P1[0]]}) || Variables[1] ({[Skill01P1[1]]}) || Variables[2] (DamageAddHeat) || MUL || ADD || RETURN",
                  "displayLines": "({[Skill01P1[0]]} + ({[Skill01P1[1]]} * DamageAddHeat))",
                  "constants": [],
                  "variables": [
                    "{[Skill01P1[0]]}",
                    "{[Skill01P1[1]]}",
                    "DamageAddHeat"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>"
            }
          ],
          "noTargetFound": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
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
                    "DamageType": "Fire",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill01P1[0]]}) || Variables[1] ({[Skill01P1[1]]}) || Variables[2] (DamageAddHeat) || MUL || ADD || RETURN",
                      "displayLines": "({[Skill01P1[0]]} + ({[Skill01P1[1]]} * DamageAddHeat))",
                      "constants": [],
                      "variables": [
                        "{[Skill01P1[0]]}",
                        "{[Skill01P1[1]]}",
                        "DamageAddHeat"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "EnergyGainPercent": "100%"
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
            "target": "{{Player Team All(Left to Right)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] ({[Skill01P1[0]]}) || Variables[1] ({[Skill01P1[1]]}) || Variables[2] (DamageAddHeat) || MUL || ADD || RETURN",
                  "displayLines": "({[Skill01P1[0]]} + ({[Skill01P1[1]]} * DamageAddHeat))",
                  "constants": [],
                  "variables": [
                    "{[Skill01P1[0]]}",
                    "{[Skill01P1[1]]}",
                    "DamageAddHeat"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>"
            }
          ],
          "noTargetFound": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
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
                    "DamageType": "Fire",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill01P1[0]]}) || Variables[1] ({[Skill01P1[1]]}) || Variables[2] (DamageAddHeat) || MUL || ADD || RETURN",
                      "displayLines": "({[Skill01P1[0]]} + ({[Skill01P1[1]]} * DamageAddHeat))",
                      "constants": [],
                      "variables": [
                        "{[Skill01P1[0]]}",
                        "{[Skill01P1[1]]}",
                        "DamageAddHeat"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "EnergyGainPercent": "100%"
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
            "target": "{{Player Team All(Left to Right)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] ({[Skill01P1[0]]}) || Variables[1] ({[Skill01P1[1]]}) || Variables[2] (DamageAddHeat) || MUL || ADD || RETURN",
                  "displayLines": "({[Skill01P1[0]]} + ({[Skill01P1[1]]} * DamageAddHeat))",
                  "constants": [],
                  "variables": [
                    "{[Skill01P1[0]]}",
                    "{[Skill01P1[1]]}",
                    "DamageAddHeat"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>"
            }
          ],
          "noTargetFound": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
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
                    "DamageType": "Fire",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill01P1[0]]}) || Variables[1] ({[Skill01P1[1]]}) || Variables[2] (DamageAddHeat) || MUL || ADD || RETURN",
                      "displayLines": "({[Skill01P1[0]]} + ({[Skill01P1[1]]} * DamageAddHeat))",
                      "constants": [],
                      "variables": [
                        "{[Skill01P1[0]]}",
                        "{[Skill01P1[1]]}",
                        "DamageAddHeat"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "EnergyGainPercent": "100%"
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
            "target": "{{Player Team All(Left to Right)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] ({[Skill01P1[0]]}) || Variables[1] ({[Skill01P1[1]]}) || Variables[2] (DamageAddHeat) || MUL || ADD || RETURN",
                  "displayLines": "({[Skill01P1[0]]} + ({[Skill01P1[1]]} * DamageAddHeat))",
                  "constants": [],
                  "variables": [
                    "{[Skill01P1[0]]}",
                    "{[Skill01P1[1]]}",
                    "DamageAddHeat"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>"
            }
          ],
          "noTargetFound": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
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
                    "DamageType": "Fire",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill01P1[0]]}) || Variables[1] ({[Skill01P1[1]]}) || Variables[2] (DamageAddHeat) || MUL || ADD || RETURN",
                      "displayLines": "({[Skill01P1[0]]} + ({[Skill01P1[1]]} * DamageAddHeat))",
                      "constants": [],
                      "variables": [
                        "{[Skill01P1[0]]}",
                        "{[Skill01P1[1]]}",
                        "DamageAddHeat"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "EnergyGainPercent": "100%"
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
            "target": "{{Player Team All(Left to Right)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] ({[Skill01P1[0]]}) || Variables[1] ({[Skill01P1[1]]}) || Variables[2] (DamageAddHeat) || MUL || ADD || RETURN",
                  "displayLines": "({[Skill01P1[0]]} + ({[Skill01P1[1]]} * DamageAddHeat))",
                  "constants": [],
                  "variables": [
                    "{[Skill01P1[0]]}",
                    "{[Skill01P1[1]]}",
                    "DamageAddHeat"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>"
            }
          ],
          "noTargetFound": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
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
                    "DamageType": "Fire",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill01P1[0]]}) || Variables[1] ({[Skill01P1[1]]}) || Variables[2] (DamageAddHeat) || MUL || ADD || RETURN",
                      "displayLines": "({[Skill01P1[0]]} + ({[Skill01P1[1]]} * DamageAddHeat))",
                      "constants": [],
                      "variables": [
                        "{[Skill01P1[0]]}",
                        "{[Skill01P1[1]]}",
                        "DamageAddHeat"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "EnergyGainPercent": "100%"
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>"
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
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-117550687\">Enemy_W4_DawnsEye_Ability01_EnhanceMessage</a>",
          "execute": [
            {
              "eventTrigger": "Action End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ]
    },
    "4015011_Monster_W4_DawnsEye_Ability01_Part01": {
      "fileName": "4015011_Monster_W4_DawnsEye_Ability01_Part01",
      "childAbilityList": [
        "4015011_Monster_W4_DawnsEye_Ability01P1_Camera",
        "4015011_Monster_W4_DawnsEye_Ability01_Part01",
        "4015011_Monster_W4_DawnsEye_Ability01_Part02"
      ],
      "skillTrigger": "Skill01P1",
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
          "ability": "Monster_W4_DawnsEye_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4015011_Monster_W4_DawnsEye_PassiveAbility_Insert": {
      "fileName": "4015011_Monster_W4_DawnsEye_PassiveAbility_Insert",
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
          "name": "Update Displayed Energy Bar",
          "entityClass": "Enemy",
          "assignState": "False"
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
              "name": "Change Character Model"
            },
            {
              "name": "Change Battle Arena",
              "status": "Inactive",
              "arenaID": 2043101
            },
            {
              "name": "Change Battle Arena",
              "arenaID": 2043102
            }
          ],
          "failed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"357250261\">Enemy_W4_DawnsEye_Part02Effect</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2111915075\">Enemy_W4_DawnsEye_Ability4P2Effect</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-526594563\">Modifier_Monster_W4_DawnsEye_WheaterRainChargeBreak</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1414068042\">Modifier_Monster_W4_DawnsEye_WheaterMarkAbility04</a>[<span class=\"descriptionNumberColor\">Ionization</span>]"
            },
            {
              "name": "Change Character Model"
            },
            {
              "name": "Change Battle Arena",
              "status": "Inactive",
              "arenaID": 2043102
            },
            {
              "name": "Change Battle Arena",
              "arenaID": 2043202
            },
            {
              "name": "Change Character UI",
              "characterName": "Decimator, Karma of Daythunder, Eye of Twilight",
              "icon": "Monster_4015020.png"
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
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"357250261\">Enemy_W4_DawnsEye_Part02Effect</a>"
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
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1902031976\">Monster_ChangePhase_ParamEntity</a>"
                },
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
                  "partName": "Gun_L",
                  "value": {
                    "operator": "Variables[0] (PartEntity1_MonsterID) || RETURN",
                    "displayLines": "PartEntity1_MonsterID",
                    "constants": [],
                    "variables": [
                      "PartEntity1_MonsterID"
                    ]
                  },
                  "offset": 1,
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
                      "valuePerStack": {
                        "MDF_SunnyBreakCold": {
                          "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                          "displayLines": "{[SkillP01[3]]}",
                          "constants": [],
                          "variables": [
                            "{[SkillP01[3]]}"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1716068014\">Enemy_W4_DawnsEye_PartHP</a>[<span class=\"descriptionNumberColor\">All As One</span>]",
                      "valuePerStack": {
                        "MDF_SunnyBreakCold": {
                          "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                          "displayLines": "{[SkillP01[3]]}",
                          "constants": [],
                          "variables": [
                            "{[SkillP01[3]]}"
                          ]
                        },
                        "MDF_SunnyBreakColdRatio": {
                          "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                          "displayLines": "{[SkillP01[2]]}",
                          "constants": [],
                          "variables": [
                            "{[SkillP01[2]]}"
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
                      "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
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
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1902031976\">Monster_ChangePhase_ParamEntity</a>"
                },
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
                  "partName": "Gun_R",
                  "value": {
                    "operator": "Variables[0] (PartEntity3_MonsterID) || RETURN",
                    "displayLines": "PartEntity3_MonsterID",
                    "constants": [],
                    "variables": [
                      "PartEntity3_MonsterID"
                    ]
                  },
                  "offset": -1,
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
                      "valuePerStack": {
                        "MDF_SunnyBreakCold": {
                          "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                          "displayLines": "{[SkillP01[3]]}",
                          "constants": [],
                          "variables": [
                            "{[SkillP01[3]]}"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1716068014\">Enemy_W4_DawnsEye_PartHP</a>[<span class=\"descriptionNumberColor\">All As One</span>]",
                      "valuePerStack": {
                        "MDF_SunnyBreakCold": {
                          "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                          "displayLines": "{[SkillP01[3]]}",
                          "constants": [],
                          "variables": [
                            "{[SkillP01[3]]}"
                          ]
                        },
                        "MDF_SunnyBreakColdRatio": {
                          "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                          "displayLines": "{[SkillP01[2]]}",
                          "constants": [],
                          "variables": [
                            "{[SkillP01[2]]}"
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
                      "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
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
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "MonsterType_W4_BossPartP3"
                  },
                  {
                    "name": "Is Part Of Team Location",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team",
                    "location": "Left"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1785279589\">Enemy_W4_DawnsEye_WeatherEnhanced</a>[<span class=\"descriptionNumberColor\">Wingbeats</span>]"
                }
              ],
              "noTargetFound": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "operator": "Variables[0] ({[SkillP03[0]]}) || RETURN",
                    "displayLines": "{[SkillP03[0]]}",
                    "constants": [],
                    "variables": [
                      "{[SkillP03[0]]}"
                    ]
                  },
                  "refreshPositions": false,
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Variables[0] (SummonedMonsterID) || RETURN",
                        "displayLines": "SummonedMonsterID",
                        "constants": [],
                        "variables": [
                          "SummonedMonsterID"
                        ]
                      },
                      "locationType": "First"
                    }
                  ]
                },
                {
                  "name": "Set Enemy Phase",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Recently Summoned Enemies}}"
                  },
                  "phase": 2
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Recently Summoned Enemies}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1716068014\">Enemy_W4_DawnsEye_PartHP</a>[<span class=\"descriptionNumberColor\">All As One</span>]",
                  "valuePerStack": {
                    "MDF_SunnyBreakCold": {
                      "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                      "displayLines": "{[SkillP01[3]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillP01[3]]}"
                      ]
                    },
                    "MDF_SunnyBreakColdRatio": {
                      "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                      "displayLines": "{[SkillP01[2]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillP01[2]]}"
                      ]
                    }
                  },
                  "casterAssign": "CasterSelf"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Recently Summoned Enemies}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "MonsterType_W4_BossPartP3"
                  },
                  {
                    "name": "Is Part Of Team Location",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team",
                    "location": "Right"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1785279589\">Enemy_W4_DawnsEye_WeatherEnhanced</a>[<span class=\"descriptionNumberColor\">Wingbeats</span>]"
                }
              ],
              "noTargetFound": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "operator": "Variables[0] ({[SkillP03[1]]}) || RETURN",
                    "displayLines": "{[SkillP03[1]]}",
                    "constants": [],
                    "variables": [
                      "{[SkillP03[1]]}"
                    ]
                  },
                  "refreshPositions": false,
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Variables[0] (SummonedMonsterID) || RETURN",
                        "displayLines": "SummonedMonsterID",
                        "constants": [],
                        "variables": [
                          "SummonedMonsterID"
                        ]
                      },
                      "locationType": "Last"
                    }
                  ]
                },
                {
                  "name": "Set Enemy Phase",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Recently Summoned Enemies}}"
                  },
                  "phase": 2
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Recently Summoned Enemies}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1716068014\">Enemy_W4_DawnsEye_PartHP</a>[<span class=\"descriptionNumberColor\">All As One</span>]",
                  "valuePerStack": {
                    "MDF_SunnyBreakCold": {
                      "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                      "displayLines": "{[SkillP01[3]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillP01[3]]}"
                      ]
                    },
                    "MDF_SunnyBreakColdRatio": {
                      "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                      "displayLines": "{[SkillP01[2]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillP01[2]]}"
                      ]
                    }
                  },
                  "casterAssign": "CasterSelf"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Recently Summoned Enemies}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
                }
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-39064349\">Modifier_Monster_W4_DawnsEye_WheaterSunny</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1923265590\">Modifier_Monster_W4_DawnsEye_WheaterRain</a>",
              "valuePerStack": {
                "Weather_Thunder": 0,
                "Weather_ThunderChange": 0,
                "Weather_ThunderDamageLight": {
                  "operator": "Variables[0] ({[SkillP02[0]]}) || RETURN",
                  "displayLines": "{[SkillP02[0]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP02[0]]}"
                  ]
                },
                "Weather_ThunderDamageDark": {
                  "operator": "Variables[0] ({[SkillP02[1]]}) || RETURN",
                  "displayLines": "{[SkillP02[1]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP02[1]]}"
                  ]
                },
                "Weather_ThunderCount": {
                  "operator": "Variables[0] ({[SkillP02[3]]}) || RETURN",
                  "displayLines": "{[SkillP02[3]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP02[3]]}"
                  ]
                },
                "Weather_ThunderChance": {
                  "operator": "Variables[0] ({[SkillP02[2]]}) || RETURN",
                  "displayLines": "{[SkillP02[2]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP02[2]]}"
                  ]
                },
                "Weather_ThunderKillCount": {
                  "operator": "Variables[0] ({[SkillP02[4]]}) || RETURN",
                  "displayLines": "{[SkillP02[4]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP02[4]]}"
                  ]
                },
                "Weather_Ability05MaxCount": {
                  "operator": "Variables[0] ({[Skill05P2[1]]}) || RETURN",
                  "displayLines": "{[Skill05P2[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill05P2[1]]}"
                  ]
                }
              }
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
              "variableName": "AIFlag",
              "value": 1
            },
            {
              "name": "Define Custom Variable",
              "variableName": "PartEntity1_MonsterID",
              "value": {
                "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__160) || RETURN",
                "displayLines": "ENEMIES_OBJECT_UNUSED__160",
                "constants": [],
                "variables": [
                  "ENEMIES_OBJECT_UNUSED__160"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "PartEntity3_MonsterID",
              "value": {
                "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__159) || RETURN",
                "displayLines": "ENEMIES_OBJECT_UNUSED__159",
                "constants": [],
                "variables": [
                  "ENEMIES_OBJECT_UNUSED__159"
                ]
              }
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
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1186573263\">W4_DawnsEye_01_TargetChange</a>"
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
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1480712068\">W4_DawnsEye_BattleScore3</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1716068014\">Enemy_W4_DawnsEye_PartHP</a>[<span class=\"descriptionNumberColor\">All As One</span>]",
                  "casterAssign": "CasterSelf"
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
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "value": "MonsterType_W4_BossSummon",
                "invertCondition": true
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
              ],
              "failed": [
                {
                  "name": "Add Battle Event",
                  "teamName": "Player Team",
                  "eventID": 60037,
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
                      "name": "Action Advance/Delay",
                      "advanceType": "Set",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "multiBase": 1
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
              "modifier": "<a class=\"gModGreen\" id=\"1923265590\">Modifier_Monster_W4_DawnsEye_WheaterRain</a>"
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
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-440353918\">Enemy_W4_DawnsEye_BreakController</a>"
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
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "value": "Dawnseye_AllPhase",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1987146522\">Enemy_W4_DawnsEye_PartController</a>"
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
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1987146522\">Enemy_W4_DawnsEye_PartController</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Stage ID",
            "ID": 2145,
            "compareType": "=",
            "characterName": null
          },
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
        },
        {
          "name": "Define Custom Variable",
          "scope": "TargetEntity",
          "variableName": "ChangePhase_InsertController",
          "value": 0
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"2022265091\">Enemy_W4_DawnsEye_MainStory</a>"
          },
          "passed": [
            {
              "name": "Inject Ability Use",
              "condition": {
                "name": "Insert Ability Condition",
                "type": "AbilityOwnerInsertUnusedCount",
                "typeValue": 1
              },
              "abilityName": "Monster_W4_DawnsEye_MainStoryOpeningPhase02",
              "abilitySource": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "priorityTag": "MonsterChangeState",
              "canHitNonTargets": true,
              "allowAbilityTriggers": false
            }
          ]
        },
        {
          "name": "Reset Toughness",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Define Toughness Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 3
          }
        }
      ],
      "references": []
    },
    "4015011_Monster_W4_DawnsEye_PassiveAbility_InsertMainStory": {
      "fileName": "4015011_Monster_W4_DawnsEye_PassiveAbility_InsertMainStory",
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
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
        },
        {
          "name": "Inject Ability Use",
          "abilityName": "Monster_W4_DawnsEye_PassiveAbility_Insert",
          "priorityTag": "MonsterChangePhase",
          "ownerState": "Mask_AliveOrLimbo",
          "targetState": "Mask_AliveOrLimbo",
          "canHitNonTargets": true,
          "showInActionOrder": true,
          "allowAbilityTriggers": false
        }
      ],
      "references": []
    },
    "4015011_Monster_W4_DawnsEye_MainStoryOpeningPhase03": {
      "fileName": "4015011_Monster_W4_DawnsEye_MainStoryOpeningPhase03",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
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
          "name": "Remove Modifier Behavior Flag(s)",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "flagNames": []
        }
      ],
      "references": []
    },
    "4015011_Monster_W4_DawnsEye_MainStoryOpeningPhase02": {
      "fileName": "4015011_Monster_W4_DawnsEye_MainStoryOpeningPhase02",
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
          "modifier": "<a class=\"gModGreen\" id=\"1917665447\">Enemy_W4_DawnsEye_Part2LockHP</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1917665447\">Enemy_W4_DawnsEye_Part2LockHP</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 0.0009999999
                }
              ]
            },
            {
              "eventTrigger": "Locked HP Floor Reached [Owner]",
              "execute": [
                {
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertUnusedCount",
                    "typeValue": 1
                  },
                  "abilityName": "Monster_W4_DawnsEye_MainStoryOpeningPhase03",
                  "priorityTag": "MonsterDeathRattle",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
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
    "4015011_Monster_W4_DawnsEye_MainStoryOpeningPhase01": {
      "fileName": "4015011_Monster_W4_DawnsEye_MainStoryOpeningPhase01",
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
      "references": []
    },
    "4015011_Monster_W4_DawnsEye_MainStory": {
      "fileName": "4015011_Monster_W4_DawnsEye_MainStory",
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
          "modifier": "<a class=\"gModGreen\" id=\"2022265091\">Enemy_W4_DawnsEye_MainStory</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-736924202\">Enemy_W4_DawnsEye_BreakPhase01</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1481618693\">Enemy_W4_DawnsEye_LowHPPhase01</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1431285836\">Enemy_W4_DawnsEye_LowHPPhase02</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1431285836\">Enemy_W4_DawnsEye_LowHPPhase02</a>",
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
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 2
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
          "for": "<a class=\"gModGreen\" id=\"mod__1481618693\">Enemy_W4_DawnsEye_LowHPPhase01</a>",
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
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 1
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
          "for": "<a class=\"gModGreen\" id=\"mod__-736924202\">Enemy_W4_DawnsEye_BreakPhase01</a>",
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
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
          "for": "<a class=\"gModGreen\" id=\"mod__2022265091\">Enemy_W4_DawnsEye_MainStory</a>",
          "execute": [
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
    "4015011_Monster_W4_DawnsEye_PassiveAbilityInitiate2ForFX": {
      "fileName": "4015011_Monster_W4_DawnsEye_PassiveAbilityInitiate2ForFX",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Set Enemy Phase",
          "mode": "Inc",
          "applyOverride": false
        }
      ],
      "references": []
    },
    "4015011_Monster_W4_DawnsEye_PassiveAbilityInitiate6": {
      "fileName": "4015011_Monster_W4_DawnsEye_PassiveAbilityInitiate6",
      "skillTrigger": "SkillP06",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "4015011_Monster_W4_DawnsEye_PassiveAbilityInitiate5": {
      "fileName": "4015011_Monster_W4_DawnsEye_PassiveAbilityInitiate5",
      "skillTrigger": "SkillP05",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "4015011_Monster_W4_DawnsEye_PassiveAbilityInitiate4": {
      "fileName": "4015011_Monster_W4_DawnsEye_PassiveAbilityInitiate4",
      "skillTrigger": "SkillP04",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "4015011_Monster_W4_DawnsEye_PassiveAbilityInitiate3": {
      "fileName": "4015011_Monster_W4_DawnsEye_PassiveAbilityInitiate3",
      "skillTrigger": "SkillP03",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "4015011_Monster_W4_DawnsEye_PassiveAbilityInitiate2": {
      "fileName": "4015011_Monster_W4_DawnsEye_PassiveAbilityInitiate2",
      "skillTrigger": "SkillP02",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "4015011_Monster_W4_DawnsEyePart_05_PassiveAbilityInitiate": {
      "fileName": "4015011_Monster_W4_DawnsEyePart_05_PassiveAbilityInitiate",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "4015011_Monster_W4_DawnsEye_PassiveAbilityInitiate_Weekly": {
      "fileName": "4015011_Monster_W4_DawnsEye_PassiveAbilityInitiate_Weekly",
      "childAbilityList": [
        "4015011_Monster_W4_DawnsEye_PassiveAbility_Insert"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "value": "MonsterType_W4_BossSummon"
          },
          "passed": [
            {
              "name": "Preload Battle Event(s)",
              "eventID": [
                20015,
                60037
              ]
            }
          ],
          "failed": [
            {
              "name": "Preload Battle Event(s)",
              "eventID": [
                20015,
                60029
              ]
            }
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
          "name": "Create Enemy as Body Part",
          "partName": "Gun_L",
          "value": {
            "operator": "Variables[0] (PartEntity1_MonsterID) || RETURN",
            "displayLines": "PartEntity1_MonsterID",
            "constants": [],
            "variables": [
              "PartEntity1_MonsterID"
            ]
          },
          "offset": 1,
          "linkHitByPart": true
        },
        {
          "name": "Create Enemy as Body Part",
          "partName": "Gun_R",
          "value": {
            "operator": "Variables[0] (PartEntity3_MonsterID) || RETURN",
            "displayLines": "PartEntity3_MonsterID",
            "constants": [],
            "variables": [
              "PartEntity3_MonsterID"
            ]
          },
          "offset": -1,
          "type": 3,
          "linkHitByPart": true
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
          "name": "Set Enemy Phase"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1987146522\">Enemy_W4_DawnsEye_PartController</a>"
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
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] ({[SkillP03[0]]}) || RETURN",
            "displayLines": "{[SkillP03[0]]}",
            "constants": [],
            "variables": [
              "{[SkillP03[0]]}"
            ]
          },
          "refreshPositions": false,
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (SummonedMonsterID) || RETURN",
                "displayLines": "SummonedMonsterID",
                "constants": [],
                "variables": [
                  "SummonedMonsterID"
                ]
              },
              "locationType": "First"
            }
          ]
        },
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] ({[SkillP03[1]]}) || RETURN",
            "displayLines": "{[SkillP03[1]]}",
            "constants": [],
            "variables": [
              "{[SkillP03[1]]}"
            ]
          },
          "refreshPositions": false,
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (SummonedMonsterID) || RETURN",
                "displayLines": "SummonedMonsterID",
                "constants": [],
                "variables": [
                  "SummonedMonsterID"
                ]
              },
              "locationType": "Last"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Level Entity}}"
            },
            "value1": "PauseLevelForCameraPerform",
            "compareType": "=",
            "value2": 1,
            "contextScope": "TargetEntity"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1716068014\">Enemy_W4_DawnsEye_PartHP</a>[<span class=\"descriptionNumberColor\">All As One</span>]",
          "valuePerStack": {
            "MDF_SunnyBreakCold": {
              "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
              "displayLines": "{[SkillP01[3]]}",
              "constants": [],
              "variables": [
                "{[SkillP01[3]]}"
              ]
            },
            "MDF_SunnyBreakColdRatio": {
              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
              "displayLines": "{[SkillP01[2]]}",
              "constants": [],
              "variables": [
                "{[SkillP01[2]]}"
              ]
            }
          },
          "casterAssign": "CasterSelf"
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
              "valuePerStack": {
                "MDF_SunnyBreakCold": {
                  "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                  "displayLines": "{[SkillP01[3]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP01[3]]}"
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
              "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1716068014\">Enemy_W4_DawnsEye_PartHP</a>[<span class=\"descriptionNumberColor\">All As One</span>]",
              "valuePerStack": {
                "MDF_SunnyBreakCold": {
                  "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                  "displayLines": "{[SkillP01[3]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP01[3]]}"
                  ]
                },
                "MDF_SunnyBreakColdRatio": {
                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                  "displayLines": "{[SkillP01[2]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP01[2]]}"
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Stage ID",
            "ID": 2145,
            "compareType": "=",
            "characterName": null
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-39064349\">Modifier_Monster_W4_DawnsEye_WheaterSunny</a>",
              "valuePerStack": {
                "Weather_SunnyHeatInitial": {
                  "operator": "Variables[0] ({[SkillP05[1]]}) || RETURN",
                  "displayLines": "{[SkillP05[1]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP05[1]]}"
                  ]
                },
                "Weather_SunnyHeat": {
                  "operator": "Variables[0] ({[SkillP05[1]]}) || RETURN",
                  "displayLines": "{[SkillP05[1]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP05[1]]}"
                  ]
                },
                "Weather_SunnyChange": 0,
                "Weather_HeatDamage": {
                  "operator": "Variables[0] ({[SkillP04[0]]}) || RETURN",
                  "displayLines": "{[SkillP04[0]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP04[0]]}"
                  ]
                },
                "Weather_Delay": {
                  "operator": "Variables[0] ({[Skill03P1[2]]}) || RETURN",
                  "displayLines": "{[Skill03P1[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill03P1[2]]}"
                  ]
                },
                "MDF_Ability04SunnyHeatInit": {
                  "operator": "Variables[0] ({[Skill04P1[0]]}) || RETURN",
                  "displayLines": "{[Skill04P1[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill04P1[0]]}"
                  ]
                },
                "MDF_Ability04SunnyHeatColdDown": {
                  "operator": "Variables[0] ({[Skill04P1[1]]}) || RETURN",
                  "displayLines": "{[Skill04P1[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill04P1[1]]}"
                  ]
                },
                "MDF_HeatMin": {
                  "operator": "Variables[0] ({[Skill04P1[3]]}) || RETURN",
                  "displayLines": "{[Skill04P1[3]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill04P1[3]]}"
                  ]
                },
                "Weather_HeatAddPerAction": {
                  "operator": "Variables[0] ({[SkillP04[1]]}) || RETURN",
                  "displayLines": "{[SkillP04[1]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP04[1]]}"
                  ]
                },
                "Weather_AllDamageTypeAddedRatio": {
                  "operator": "Variables[0] ({[SkillP04[2]]}) || RETURN",
                  "displayLines": "{[SkillP04[2]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP04[2]]}"
                  ]
                },
                "isDev": 1
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
              "modifier": "<a class=\"gModGreen\" id=\"-39064349\">Modifier_Monster_W4_DawnsEye_WheaterSunny</a>",
              "valuePerStack": {
                "Weather_SunnyHeatInitial": {
                  "operator": "Variables[0] ({[SkillP05[1]]}) || RETURN",
                  "displayLines": "{[SkillP05[1]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP05[1]]}"
                  ]
                },
                "Weather_SunnyHeat": {
                  "operator": "Variables[0] ({[SkillP05[1]]}) || RETURN",
                  "displayLines": "{[SkillP05[1]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP05[1]]}"
                  ]
                },
                "Weather_SunnyChange": 0,
                "Weather_HeatDamage": {
                  "operator": "Variables[0] ({[SkillP04[0]]}) || RETURN",
                  "displayLines": "{[SkillP04[0]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP04[0]]}"
                  ]
                },
                "Weather_Delay": {
                  "operator": "Variables[0] ({[Skill03P1[2]]}) || RETURN",
                  "displayLines": "{[Skill03P1[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill03P1[2]]}"
                  ]
                },
                "MDF_Ability04SunnyHeatInit": {
                  "operator": "Variables[0] ({[Skill04P1[0]]}) || RETURN",
                  "displayLines": "{[Skill04P1[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill04P1[0]]}"
                  ]
                },
                "MDF_Ability04SunnyHeatColdDown": {
                  "operator": "Variables[0] ({[Skill04P1[1]]}) || RETURN",
                  "displayLines": "{[Skill04P1[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill04P1[1]]}"
                  ]
                },
                "MDF_HeatMin": {
                  "operator": "Variables[0] ({[Skill04P1[3]]}) || RETURN",
                  "displayLines": "{[Skill04P1[3]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill04P1[3]]}"
                  ]
                },
                "Weather_HeatAddPerAction": {
                  "operator": "Variables[0] ({[SkillP04[1]]}) || RETURN",
                  "displayLines": "{[SkillP04[1]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP04[1]]}"
                  ]
                },
                "Weather_AllDamageTypeAddedRatio": {
                  "operator": "Variables[0] ({[SkillP04[2]]}) || RETURN",
                  "displayLines": "{[SkillP04[2]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP04[2]]}"
                  ]
                },
                "isDev": 0
              }
            }
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-440353918\">Enemy_W4_DawnsEye_BreakController</a>",
          "valuePerStack": {
            "StanceDamage": {
              "operator": "Variables[0] ({[SkillP01[5]]}) || RETURN",
              "displayLines": "{[SkillP01[5]]}",
              "constants": [],
              "variables": [
                "{[SkillP01[5]]}"
              ]
            }
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Stage ID",
            "ID": 2145,
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-283400185\">Enemy_W4_DawnsEye_DisableLookAt</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1803162686\">Enemy_W4_DawnsEye_SoundController</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1514267306\">W4_DawnsEye_BattleScore1</a>"
        }
      ],
      "references": []
    },
    "4015011_Monster_W4_DawnsEye_PassiveAbilityInitiate": {
      "fileName": "4015011_Monster_W4_DawnsEye_PassiveAbilityInitiate",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Create Enemy as Body Part",
          "partName": "Gun_L",
          "value": {
            "operator": "Variables[0] (PartEntity1_MonsterID) || RETURN",
            "displayLines": "PartEntity1_MonsterID",
            "constants": [],
            "variables": [
              "PartEntity1_MonsterID"
            ]
          },
          "offset": 1,
          "linkHitByPart": true
        },
        {
          "name": "Create Enemy as Body Part",
          "partName": "Gun_R",
          "value": {
            "operator": "Variables[0] (PartEntity3_MonsterID) || RETURN",
            "displayLines": "PartEntity3_MonsterID",
            "constants": [],
            "variables": [
              "PartEntity3_MonsterID"
            ]
          },
          "offset": -1,
          "type": 3,
          "linkHitByPart": true
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
          "name": "Set Enemy Phase"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1987146522\">Enemy_W4_DawnsEye_PartController</a>"
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
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] ({[SkillP03[0]]}) || RETURN",
            "displayLines": "{[SkillP03[0]]}",
            "constants": [],
            "variables": [
              "{[SkillP03[0]]}"
            ]
          },
          "refreshPositions": false,
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (SummonedMonsterID) || RETURN",
                "displayLines": "SummonedMonsterID",
                "constants": [],
                "variables": [
                  "SummonedMonsterID"
                ]
              },
              "locationType": "First"
            }
          ]
        },
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] ({[SkillP03[1]]}) || RETURN",
            "displayLines": "{[SkillP03[1]]}",
            "constants": [],
            "variables": [
              "{[SkillP03[1]]}"
            ]
          },
          "refreshPositions": false,
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (SummonedMonsterID) || RETURN",
                "displayLines": "SummonedMonsterID",
                "constants": [],
                "variables": [
                  "SummonedMonsterID"
                ]
              },
              "locationType": "Last"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Level Entity}}"
            },
            "value1": "PauseLevelForCameraPerform",
            "compareType": "=",
            "value2": 1,
            "contextScope": "TargetEntity"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1716068014\">Enemy_W4_DawnsEye_PartHP</a>[<span class=\"descriptionNumberColor\">All As One</span>]",
          "valuePerStack": {
            "MDF_SunnyBreakCold": {
              "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
              "displayLines": "{[SkillP01[3]]}",
              "constants": [],
              "variables": [
                "{[SkillP01[3]]}"
              ]
            },
            "MDF_SunnyBreakColdRatio": {
              "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
              "displayLines": "{[SkillP01[2]]}",
              "constants": [],
              "variables": [
                "{[SkillP01[2]]}"
              ]
            }
          },
          "casterAssign": "CasterSelf"
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
              "valuePerStack": {
                "MDF_SunnyBreakCold": {
                  "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                  "displayLines": "{[SkillP01[3]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP01[3]]}"
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
              "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1716068014\">Enemy_W4_DawnsEye_PartHP</a>[<span class=\"descriptionNumberColor\">All As One</span>]",
              "valuePerStack": {
                "MDF_SunnyBreakCold": {
                  "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                  "displayLines": "{[SkillP01[3]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP01[3]]}"
                  ]
                },
                "MDF_SunnyBreakColdRatio": {
                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                  "displayLines": "{[SkillP01[2]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP01[2]]}"
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Stage ID",
            "ID": 2145,
            "compareType": "=",
            "characterName": null
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-39064349\">Modifier_Monster_W4_DawnsEye_WheaterSunny</a>",
              "valuePerStack": {
                "Weather_SunnyHeatInitial": {
                  "operator": "Variables[0] ({[SkillP05[1]]}) || RETURN",
                  "displayLines": "{[SkillP05[1]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP05[1]]}"
                  ]
                },
                "Weather_SunnyHeat": {
                  "operator": "Variables[0] ({[SkillP05[1]]}) || RETURN",
                  "displayLines": "{[SkillP05[1]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP05[1]]}"
                  ]
                },
                "Weather_SunnyChange": 0,
                "Weather_HeatDamage": {
                  "operator": "Variables[0] ({[SkillP04[0]]}) || RETURN",
                  "displayLines": "{[SkillP04[0]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP04[0]]}"
                  ]
                },
                "Weather_Delay": {
                  "operator": "Variables[0] ({[Skill03P1[2]]}) || RETURN",
                  "displayLines": "{[Skill03P1[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill03P1[2]]}"
                  ]
                },
                "MDF_Ability04SunnyHeatInit": {
                  "operator": "Variables[0] ({[Skill04P1[0]]}) || RETURN",
                  "displayLines": "{[Skill04P1[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill04P1[0]]}"
                  ]
                },
                "MDF_Ability04SunnyHeatColdDown": {
                  "operator": "Variables[0] ({[Skill04P1[1]]}) || RETURN",
                  "displayLines": "{[Skill04P1[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill04P1[1]]}"
                  ]
                },
                "MDF_HeatMin": {
                  "operator": "Variables[0] ({[Skill04P1[3]]}) || RETURN",
                  "displayLines": "{[Skill04P1[3]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill04P1[3]]}"
                  ]
                },
                "Weather_HeatAddPerAction": {
                  "operator": "Variables[0] ({[SkillP04[1]]}) || RETURN",
                  "displayLines": "{[SkillP04[1]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP04[1]]}"
                  ]
                },
                "Weather_AllDamageTypeAddedRatio": {
                  "operator": "Variables[0] ({[SkillP04[2]]}) || RETURN",
                  "displayLines": "{[SkillP04[2]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP04[2]]}"
                  ]
                },
                "isDev": 1
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
              "modifier": "<a class=\"gModGreen\" id=\"-39064349\">Modifier_Monster_W4_DawnsEye_WheaterSunny</a>",
              "valuePerStack": {
                "Weather_SunnyHeatInitial": {
                  "operator": "Variables[0] ({[SkillP05[1]]}) || RETURN",
                  "displayLines": "{[SkillP05[1]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP05[1]]}"
                  ]
                },
                "Weather_SunnyHeat": {
                  "operator": "Variables[0] ({[SkillP05[1]]}) || RETURN",
                  "displayLines": "{[SkillP05[1]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP05[1]]}"
                  ]
                },
                "Weather_SunnyChange": 0,
                "Weather_HeatDamage": {
                  "operator": "Variables[0] ({[SkillP04[0]]}) || RETURN",
                  "displayLines": "{[SkillP04[0]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP04[0]]}"
                  ]
                },
                "Weather_Delay": {
                  "operator": "Variables[0] ({[Skill03P1[2]]}) || RETURN",
                  "displayLines": "{[Skill03P1[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill03P1[2]]}"
                  ]
                },
                "MDF_Ability04SunnyHeatInit": {
                  "operator": "Variables[0] ({[Skill04P1[0]]}) || RETURN",
                  "displayLines": "{[Skill04P1[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill04P1[0]]}"
                  ]
                },
                "MDF_Ability04SunnyHeatColdDown": {
                  "operator": "Variables[0] ({[Skill04P1[1]]}) || RETURN",
                  "displayLines": "{[Skill04P1[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill04P1[1]]}"
                  ]
                },
                "MDF_HeatMin": {
                  "operator": "Variables[0] ({[Skill04P1[3]]}) || RETURN",
                  "displayLines": "{[Skill04P1[3]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill04P1[3]]}"
                  ]
                },
                "Weather_HeatAddPerAction": {
                  "operator": "Variables[0] ({[SkillP04[1]]}) || RETURN",
                  "displayLines": "{[SkillP04[1]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP04[1]]}"
                  ]
                },
                "Weather_AllDamageTypeAddedRatio": {
                  "operator": "Variables[0] ({[SkillP04[2]]}) || RETURN",
                  "displayLines": "{[SkillP04[2]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP04[2]]}"
                  ]
                },
                "isDev": 0
              }
            }
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-440353918\">Enemy_W4_DawnsEye_BreakController</a>",
          "valuePerStack": {
            "StanceDamage": {
              "operator": "Variables[0] ({[SkillP01[5]]}) || RETURN",
              "displayLines": "{[SkillP01[5]]}",
              "constants": [],
              "variables": [
                "{[SkillP01[5]]}"
              ]
            }
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Stage ID",
            "ID": 2145,
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-283400185\">Enemy_W4_DawnsEye_DisableLookAt</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1803162686\">Enemy_W4_DawnsEye_SoundController</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1514267306\">W4_DawnsEye_BattleScore1</a>"
        }
      ],
      "references": []
    },
    "4015011_Modifiers": {
      "fileName": "4015011_Modifiers",
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
          "latentQueue": [
            "AIFlag"
          ]
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
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1480712068\">W4_DawnsEye_BattleScore3</a>",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Skill Name",
                        "skillName": "Skill04P3"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "TotalDamageRatio",
                        "compareType": "=",
                        "value2": {
                          "operator": "Variables[0] ({[SkillP09[1]]}) || RETURN",
                          "displayLines": "{[SkillP09[1]]}",
                          "constants": [],
                          "variables": [
                            "{[SkillP09[1]]}"
                          ]
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_isSkill04",
                      "value": 1
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_isSkill04",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_isTriggerDeath",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "relatedAchievements": [
                        {
                          "title": "Divine Retribution from Up Above",
                          "desc": "When the Decimator, Karma of Daythunder, Eye of Twilight's \"Black Tide Sync Rate\" reaches the maximum, endure the attack of \"Unmaking Ashes: Godsfall\" with no ally character being knocked down",
                          "rarity": "Low",
                          "type": "Hidden until Completion"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_isSkill04",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_isTriggerDeath",
                  "value": 0
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
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_isSkill04",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"-1488863445\">Modifier_Monster_W4_DawnsEye_01_MuteSpeed</a>[<span class=\"descriptionNumberColor\">Tide-Corrosion</span>]"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_isTriggerDeath",
                      "value": 1
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
          "for": "<a class=\"gModGreen\" id=\"mod__1497489687\">W4_DawnsEye_BattleScore2</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Achievement",
                  "relatedAchievements": [
                    {
                      "title": "Battle for Dominion Over Lightning",
                      "desc": "In the battle against Sublime, Radiant, Avatar of the Sky, interrupt the enemy's \"Thunderclap, Quake of Mount and Seas\" by seizing all \"Thunderclouds\"",
                      "rarity": "Low"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1514267306\">W4_DawnsEye_BattleScore1</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "Sunny_Temperature",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 999,
                  "includeMaxValueInRange": true,
                  "whenValueChanges": [
                    {
                      "name": "Define Custom Variable with Changes to Stats",
                      "variableName": "MDF_TemperatureChangeDelta"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_TemperatureChangeDelta",
                        "compareType": "<=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "MDF_TemperatureChangeTotal",
                          "value": {
                            "operator": "Constants[0] (0) || Variables[0] (MDF_TemperatureChangeDelta) || SUB || RETURN",
                            "displayLines": "(0 - MDF_TemperatureChangeDelta)",
                            "constants": [
                              0
                            ],
                            "variables": [
                              "MDF_TemperatureChangeDelta"
                            ]
                          },
                          "max": 999
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "MDF_TemperatureChangeTotal",
                            "compareType": ">=",
                            "value2": 30
                          },
                          "passed": [
                            {
                              "name": "Achievement",
                              "relatedAchievements": [
                                {
                                  "title": "Rage Against the Dying Light",
                                  "desc": "In the battle against Sublime, Radiant, Avatar of the Sky, lower \"Temperature\" by #1",
                                  "rarity": "Low",
                                  "params": [
                                    30
                                  ]
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
            }
          ],
          "stackData": [],
          "latentQueue": [
            "AIFlag",
            "PauseLevelForCameraPerform"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__185030676\">Enemy_W4_DawnsEye_ThunderAttackPhase02</a>",
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
          "for": "<a class=\"gModGreen\" id=\"mod__357250261\">Enemy_W4_DawnsEye_Part02Effect</a>",
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
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": ">=",
                        "value2": 2
                      },
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value": "Dawnseye_AllPhase",
                        "invertCondition": true
                      }
                    ]
                  }
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
          "for": "<a class=\"gModGreen\" id=\"mod__-484779713\">Enemy_W4_DawnsEye_Ability05_HitTag</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__155112882\">Enemy_W4_DawnsEye_Ability02_EnhanceMessage</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Action End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-122136541\">Enemy_W4_DawnsEye_MainBlock</a>",
          "modifierFlags": [
            "STAT_AITargetLowerPriority",
            "MuteBreak"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
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
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]",
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
                    "name": "Enemy ID",
                    "ID": 401501,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": null,
                    "isCompareUniqueID": true
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "MonsterType_W4_BossPartLeft"
                      }
                    }
                  ]
                },
                {
                  "name": "Add to Team Target Grouping",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
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
                    "ID": 401501,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": null,
                    "isCompareUniqueID": true
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "MonsterType_W4_BossPartLeft"
                      }
                    }
                  ]
                },
                "Mark Entity as Non-Target(Unselectable)",
                {
                  "name": "Remove from Team Target Grouping",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "stayInTeam": false
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "AIFlag",
            "PauseLevelForCameraPerform"
          ],
          "description": "Currently unselectable.",
          "type": "Other",
          "statusName": "Marine Layer"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1716068014\">Enemy_W4_DawnsEye_PartHP</a>[<span class=\"descriptionNumberColor\">All As One</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Put in Deathstate Limbo",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "MonsterType_W4_BossPartP3"
                      },
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "MonsterType_W4_BossPart"
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
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-39064349\">Modifier_Monster_W4_DawnsEye_WheaterSunny</a>"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_SunnyBreakColdFinal",
                          "value": {
                            "operator": "Variables[0] (Sunny_Temperature) || RETURN",
                            "displayLines": "Sunny_Temperature",
                            "constants": [],
                            "variables": [
                              "Sunny_Temperature"
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_SunnyBreakColdFinal",
                          "value": {
                            "operator": "Variables[0] (FLOOR) || Variables[1] (MDF_SunnyBreakColdFinal) || Variables[2] (MDF_SunnyBreakColdRatio) || MUL || PARAM_1 || FUNCTION || RETURN",
                            "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((MDF_SunnyBreakColdFinal * MDF_SunnyBreakColdRatio))",
                            "constants": [],
                            "variables": [
                              "FLOOR",
                              "MDF_SunnyBreakColdFinal",
                              "MDF_SunnyBreakColdRatio"
                            ]
                          }
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "MDF_SunnyBreakColdFinal",
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] (MDF_SunnyBreakCold) || RETURN",
                              "displayLines": "MDF_SunnyBreakCold",
                              "constants": [],
                              "variables": [
                                "MDF_SunnyBreakCold"
                              ]
                            }
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable with Added Value",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "variableName": "Sunny_Temperature",
                              "context": "TargetEntity",
                              "value": {
                                "operator": "Constants[0] (0) || Variables[0] (MDF_SunnyBreakColdFinal) || SUB || RETURN",
                                "displayLines": "(0 - MDF_SunnyBreakColdFinal)",
                                "constants": [
                                  0
                                ],
                                "variables": [
                                  "MDF_SunnyBreakColdFinal"
                                ]
                              },
                              "max": 999
                            }
                          ],
                          "failed": [
                            {
                              "name": "Define Custom Variable with Added Value",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "variableName": "Sunny_Temperature",
                              "context": "TargetEntity",
                              "value": {
                                "operator": "Constants[0] (0) || Variables[0] (MDF_SunnyBreakCold) || SUB || RETURN",
                                "displayLines": "(0 - MDF_SunnyBreakCold)",
                                "constants": [
                                  0
                                ],
                                "variables": [
                                  "MDF_SunnyBreakCold"
                                ]
                              },
                              "max": 999
                            }
                          ]
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"735847061\">Modifier_Monster_W4_DawnsEye_WheaterSunnyUIController</a>",
                          "casterAssign": "TargetSelf"
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"1923265590\">Modifier_Monster_W4_DawnsEye_WheaterRain</a>"
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_CountTotal",
                              "value": {
                                "operator": "Variables[0] (Thunder_CountLight) || Variables[1] (Thunder_CountDark) || ADD || RETURN",
                                "displayLines": "(Thunder_CountLight + Thunder_CountDark)",
                                "constants": [],
                                "variables": [
                                  "Thunder_CountLight",
                                  "Thunder_CountDark"
                                ]
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
                                "modifier": "<a class=\"gModGreen\" id=\"-1414068042\">Modifier_Monster_W4_DawnsEye_WheaterMarkAbility04</a>[<span class=\"descriptionNumberColor\">Ionization</span>]"
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable with Added Value",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "variableName": "Thunder_CountLight",
                                  "context": "TargetEntity",
                                  "value": {
                                    "operator": "Variables[0] ({[SkillP02[4]]}) || RETURN",
                                    "displayLines": "{[SkillP02[4]]}",
                                    "constants": [],
                                    "variables": [
                                      "{[SkillP02[4]]}"
                                    ]
                                  },
                                  "max": {
                                    "operator": "Variables[0] (MDF_CountTotal) || RETURN",
                                    "displayLines": "MDF_CountTotal",
                                    "constants": [],
                                    "variables": [
                                      "MDF_CountTotal"
                                    ]
                                  }
                                },
                                {
                                  "name": "Define Custom Variable with Added Value",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "variableName": "Thunder_CountDark",
                                  "context": "TargetEntity",
                                  "value": {
                                    "operator": "Constants[0] (0) || Variables[0] ({[SkillP02[4]]}) || SUB || RETURN",
                                    "displayLines": "(0 - {[SkillP02[4]]})",
                                    "constants": [
                                      0
                                    ],
                                    "variables": [
                                      "{[SkillP02[4]]}"
                                    ]
                                  },
                                  "max": {
                                    "operator": "Variables[0] (MDF_CountTotal) || RETURN",
                                    "displayLines": "MDF_CountTotal",
                                    "constants": [],
                                    "variables": [
                                      "MDF_CountTotal"
                                    ]
                                  }
                                },
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-2093876840\">Modifier_Monster_W4_DawnsEye_WheaterRainUIController</a>"
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "value1": "Thunder_CountDark",
                                    "compareType": "=",
                                    "value2": 0
                                  },
                                  "passed": [
                                    {
                                      "name": "Define Custom Variable with Stat",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Caster}}"
                                      },
                                      "variableName": "MDF_BreakStance",
                                      "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                    },
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Has Modifier",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Caster}}"
                                        },
                                        "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
                                      },
                                      "passed": [
                                        {
                                          "name": "Remove Events/Bonuses",
                                          "to": {
                                            "name": "Target Name",
                                            "target": "{{Caster}}"
                                          },
                                          "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
                                        },
                                        {
                                          "name": "Trigger 0-Toughness",
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
                                          "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
                                        }
                                      ],
                                      "failed": [
                                        {
                                          "name": "Trigger 0-Toughness",
                                          "target": {
                                            "name": "Target Name",
                                            "target": "{{Caster}}"
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
                                      "modifier": "<a class=\"gModGreen\" id=\"1497489687\">W4_DawnsEye_BattleScore2</a>"
                                    }
                                  ]
                                }
                              ],
                              "failed": [
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "value1": "Thunder_CountDark",
                                    "compareType": ">=",
                                    "value2": 1
                                  },
                                  "passed": [
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "ThunderKillCount",
                                      "value": {
                                        "operator": "Variables[0] (ThunderKillCount) || Constants[0] (1) || ADD || RETURN",
                                        "displayLines": "(ThunderKillCount + 1)",
                                        "constants": [
                                          1
                                        ],
                                        "variables": [
                                          "ThunderKillCount"
                                        ]
                                      }
                                    },
                                    {
                                      "name": "Inject Ability Use",
                                      "condition": {
                                        "name": "Insert Ability Condition",
                                        "type": "AbilityOwnerInsertUnusedCount",
                                        "typeValue": 1
                                      },
                                      "conditionActive": {
                                        "name": "AND",
                                        "conditionList": [
                                          {
                                            "name": "Compare: Variable",
                                            "value1": "HP_Bars_Remaining",
                                            "compareType": "=",
                                            "value2": 2
                                          },
                                          {
                                            "name": "Compare: Variable",
                                            "value1": "ThunderKillCount",
                                            "compareType": ">=",
                                            "value2": 1
                                          },
                                          {
                                            "name": "Compare: Variable",
                                            "value1": "Thunder_CountDark",
                                            "compareType": ">=",
                                            "value2": 1
                                          }
                                        ]
                                      },
                                      "abilityName": "BattleEventAbility_W4_DawnsEye_RainKillSummon",
                                      "abilitySource": {
                                        "name": "Target Name",
                                        "target": "{{Caster}}"
                                      },
                                      "abilityTarget": {
                                        "name": "Target Name",
                                        "target": "{{Caster}}"
                                      },
                                      "priorityTag": "MonsterDeathRattle",
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
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 3
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 401502,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "characterName": null,
                        "isCompareUniqueID": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Update Modifier Description",
                      "popUpText": "When receiving DMG, \"Decimator, Karma of Daythunder, Eye of Twilight\" loses equal amount of HP."
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
                    "name": "Compare: Variable",
                    "value1": "ParameterValue",
                    "compareType": "<",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Changes to Stats",
                      "variableName": "PartLoseHpValue"
                    },
                    {
                      "name": "Consume",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "sourceTarget": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "flatConsume": {
                        "operator": "Constants[0] (0) || Variables[0] (PartLoseHpValue) || SUB || RETURN",
                        "displayLines": "(0 - PartLoseHpValue)",
                        "constants": [
                          0
                        ],
                        "variables": [
                          "PartLoseHpValue"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Was Overhealed [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "value": "MonsterType_W4_BossSummon"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "ParameterValue",
                        "compareType": "<",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Changes to Stats",
                          "variableName": "PartHPOverflow"
                        },
                        {
                          "name": "Consume",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "sourceTarget": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "flatConsume": {
                            "operator": "Constants[0] (0) || Variables[0] (PartHPOverflow) || SUB || RETURN",
                            "displayLines": "(0 - PartHPOverflow)",
                            "constants": [
                              0
                            ],
                            "variables": [
                              "PartHPOverflow"
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
              "eventTrigger": "When Stacking Modifier Instance [Owner]",
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
                              "target": "{{Modifier Holder}}"
                            },
                            "value": "MonsterType_W4_BossPartP3"
                          },
                          {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value": "MonsterType_W4_BossPart"
                          }
                        ]
                      },
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
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
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-39064349\">Modifier_Monster_W4_DawnsEye_WheaterSunny</a>"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_SunnyBreakColdFinal",
                          "value": {
                            "operator": "Variables[0] (Sunny_Temperature) || RETURN",
                            "displayLines": "Sunny_Temperature",
                            "constants": [],
                            "variables": [
                              "Sunny_Temperature"
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_SunnyBreakColdFinal",
                          "value": {
                            "operator": "Variables[0] (FLOOR) || Variables[1] (MDF_SunnyBreakColdFinal) || Variables[2] (MDF_SunnyBreakColdRatio) || MUL || PARAM_1 || FUNCTION || RETURN",
                            "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((MDF_SunnyBreakColdFinal * MDF_SunnyBreakColdRatio))",
                            "constants": [],
                            "variables": [
                              "FLOOR",
                              "MDF_SunnyBreakColdFinal",
                              "MDF_SunnyBreakColdRatio"
                            ]
                          }
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "MDF_SunnyBreakColdFinal",
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] (MDF_SunnyBreakCold) || RETURN",
                              "displayLines": "MDF_SunnyBreakCold",
                              "constants": [],
                              "variables": [
                                "MDF_SunnyBreakCold"
                              ]
                            }
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable with Added Value",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "variableName": "Sunny_Temperature",
                              "context": "TargetEntity",
                              "value": {
                                "operator": "Constants[0] (0) || Variables[0] (MDF_SunnyBreakColdFinal) || SUB || RETURN",
                                "displayLines": "(0 - MDF_SunnyBreakColdFinal)",
                                "constants": [
                                  0
                                ],
                                "variables": [
                                  "MDF_SunnyBreakColdFinal"
                                ]
                              },
                              "max": 999
                            }
                          ],
                          "failed": [
                            {
                              "name": "Define Custom Variable with Added Value",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "variableName": "Sunny_Temperature",
                              "context": "TargetEntity",
                              "value": {
                                "operator": "Constants[0] (0) || Variables[0] (MDF_SunnyBreakCold) || SUB || RETURN",
                                "displayLines": "(0 - MDF_SunnyBreakCold)",
                                "constants": [
                                  0
                                ],
                                "variables": [
                                  "MDF_SunnyBreakCold"
                                ]
                              },
                              "max": 999
                            }
                          ]
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"735847061\">Modifier_Monster_W4_DawnsEye_WheaterSunnyUIController</a>",
                          "casterAssign": "TargetSelf"
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"1923265590\">Modifier_Monster_W4_DawnsEye_WheaterRain</a>"
                              },
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-1414068042\">Modifier_Monster_W4_DawnsEye_WheaterMarkAbility04</a>[<span class=\"descriptionNumberColor\">Ionization</span>]"
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_CountTotal",
                              "value": {
                                "operator": "Variables[0] (Thunder_CountLight) || Variables[1] (Thunder_CountDark) || ADD || RETURN",
                                "displayLines": "(Thunder_CountLight + Thunder_CountDark)",
                                "constants": [],
                                "variables": [
                                  "Thunder_CountLight",
                                  "Thunder_CountDark"
                                ]
                              }
                            },
                            {
                              "name": "Define Custom Variable with Added Value",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "variableName": "Thunder_CountLight",
                              "context": "TargetEntity",
                              "value": {
                                "operator": "Variables[0] ({[SkillP02[4]]}) || RETURN",
                                "displayLines": "{[SkillP02[4]]}",
                                "constants": [],
                                "variables": [
                                  "{[SkillP02[4]]}"
                                ]
                              },
                              "max": {
                                "operator": "Variables[0] (MDF_CountTotal) || RETURN",
                                "displayLines": "MDF_CountTotal",
                                "constants": [],
                                "variables": [
                                  "MDF_CountTotal"
                                ]
                              }
                            },
                            {
                              "name": "Define Custom Variable with Added Value",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "variableName": "Thunder_CountDark",
                              "context": "TargetEntity",
                              "value": {
                                "operator": "Constants[0] (0) || Variables[0] ({[SkillP02[4]]}) || SUB || RETURN",
                                "displayLines": "(0 - {[SkillP02[4]]})",
                                "constants": [
                                  0
                                ],
                                "variables": [
                                  "{[SkillP02[4]]}"
                                ]
                              },
                              "max": {
                                "operator": "Variables[0] (MDF_CountTotal) || RETURN",
                                "displayLines": "MDF_CountTotal",
                                "constants": [],
                                "variables": [
                                  "MDF_CountTotal"
                                ]
                              }
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-2093876840\">Modifier_Monster_W4_DawnsEye_WheaterRainUIController</a>"
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "Thunder_CountDark",
                                "compareType": "=",
                                "value2": 0
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable with Stat",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "variableName": "MDF_BreakStance",
                                  "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Has Modifier",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Caster}}"
                                    },
                                    "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
                                  },
                                  "passed": [
                                    {
                                      "name": "Remove Events/Bonuses",
                                      "to": {
                                        "name": "Target Name",
                                        "target": "{{Caster}}"
                                      },
                                      "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
                                    },
                                    {
                                      "name": "Trigger 0-Toughness",
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
                                      "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Trigger 0-Toughness",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Caster}}"
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
                                  "modifier": "<a class=\"gModGreen\" id=\"1497489687\">W4_DawnsEye_BattleScore2</a>"
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
            }
          ],
          "stackData": [
            "MDF_SunnyBreakCold",
            "MDF_SunnyBreakColdRatio"
          ],
          "latentQueue": [
            "AIFlag",
            "PauseLevelForCameraPerform"
          ],
          "description": "When receiving DMG, \"Sublime, Radiant, Avatar of the Sky\" loses an equal amount of HP.",
          "type": "Other",
          "statusName": "All As One"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1514798128\">Enemy_W4_DawnsEye_SummonController</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
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
                  "variableName": "CountDown",
                  "value": -1,
                  "max": 100
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CountDown",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            },
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
                    "value1": "CountDown",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "AIFlag",
                      "value": 2
                    },
                    "Modifier Deletes Itself"
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1807935838\">Enemy_W4_DawnsEye_PartController</a>",
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
                    "modifier": "<a class=\"gModGreen\" id=\"-460192420\">Enemy_W4_DawnsEye_DamageTakenUp</a>",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Is Part Of Team Location",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "team": "Enemy Team",
                            "location": "Left"
                          }
                        ]
                      }
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
                              "target": "{{Modifier Holder}}"
                            },
                            "team": "Enemy Team",
                            "location": "Right"
                          }
                        ]
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
            "MDF_SunnyBreakCold"
          ],
          "latentQueue": [
            "AIFlag",
            "PauseLevelForCameraPerform"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1414068042\">Modifier_Monster_W4_DawnsEye_WheaterMarkAbility04</a>[<span class=\"descriptionNumberColor\">Ionization</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [
            "MDF_ThunderDark"
          ],
          "latentQueue": [
            "WeatherPhase02Flag"
          ],
          "description": "Uses \"Wrath, Rend of Eternal Sky\" in the next action and additionally deals DMG based on the number of Thunderclouds possessed. Current Thundercloud(s): <span class=\"descriptionNumberColor\">MDF_ThunderDark</span>.",
          "type": "Buff",
          "statusName": "Ionization"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-526594563\">Modifier_Monster_W4_DawnsEye_WheaterRainChargeBreak</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertUnusedCount",
                    "typeValue": 1
                  },
                  "conditionActive": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 2
                      },
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "Thunder_CountLight",
                            "compareType": ">=",
                            "value2": 1
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "Thunder_CountDark",
                            "compareType": ">=",
                            "value2": 1
                          }
                        ]
                      }
                    ]
                  },
                  "abilityName": "BattleEventAbility_W4_DawnsEye_RainChargeBreak",
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "priorityTag": "MonsterChangeState",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "WeatherPhase02Flag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1525188531\">Modifier_Monster_W4_DawnsEye_WheaterRainSubMark</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Attack Action Completed [Anyone]",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1586907692\">Modifier_Monster_W4_DawnsEye_WheaterRainSub</a>",
          "execute": [
            {
              "eventTrigger": "Deal Damage End [Owner]: Hit",
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
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1414068042\">Modifier_Monster_W4_DawnsEye_WheaterMarkAbility04</a>[<span class=\"descriptionNumberColor\">Ionization</span>]"
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "team": "Enemy Team",
                        "invertCondition": true
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1525188531\">Modifier_Monster_W4_DawnsEye_WheaterRainSubMark</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Got a Kill [Owner]"
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
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
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1414068042\">Modifier_Monster_W4_DawnsEye_WheaterMarkAbility04</a>[<span class=\"descriptionNumberColor\">Ionization</span>]"
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "team": "Enemy Team",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Team Count",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "variableName": "MDF_Count",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1525188531\">Modifier_Monster_W4_DawnsEye_WheaterRainSubMark</a>"
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_CountTotal",
                      "value": {
                        "operator": "Variables[0] (Thunder_CountLight) || Variables[1] (Thunder_CountDark) || ADD || RETURN",
                        "displayLines": "(Thunder_CountLight + Thunder_CountDark)",
                        "constants": [],
                        "variables": [
                          "Thunder_CountLight",
                          "Thunder_CountDark"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "Thunder_CountLight",
                      "context": "TargetEntity",
                      "value": {
                        "operator": "Variables[0] (MDF_Count) || RETURN",
                        "displayLines": "MDF_Count",
                        "constants": [],
                        "variables": [
                          "MDF_Count"
                        ]
                      },
                      "max": {
                        "operator": "Variables[0] (MDF_CountTotal) || RETURN",
                        "displayLines": "MDF_CountTotal",
                        "constants": [],
                        "variables": [
                          "MDF_CountTotal"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "Thunder_CountDark",
                      "context": "TargetEntity",
                      "value": {
                        "operator": "Constants[0] (0) || Variables[0] (MDF_Count) || SUB || RETURN",
                        "displayLines": "(0 - MDF_Count)",
                        "constants": [
                          0
                        ],
                        "variables": [
                          "MDF_Count"
                        ]
                      },
                      "max": {
                        "operator": "Variables[0] (MDF_CountTotal) || RETURN",
                        "displayLines": "MDF_CountTotal",
                        "constants": [],
                        "variables": [
                          "MDF_CountTotal"
                        ]
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2093876840\">Modifier_Monster_W4_DawnsEye_WheaterRainUIController</a>"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Thunder_CountDark",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Stat",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "variableName": "MDF_BreakStance",
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
                          },
                          "passed": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
                            },
                            {
                              "name": "Trigger 0-Toughness",
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
                              "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
                            }
                          ],
                          "failed": [
                            {
                              "name": "Trigger 0-Toughness",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
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
                          "modifier": "<a class=\"gModGreen\" id=\"1497489687\">W4_DawnsEye_BattleScore2</a>"
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
            },
            {
              "eventTrigger": "When Stacking Modifier Instance [Owner]"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-961317684\">Enemy_W4_DawnsEye_SummonLimboMark</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1862939413\">Modifier_Monster_W4_DawnsEye_WheaterRainTriggerBreak</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
                    },
                    {
                      "name": "Trigger 0-Toughness",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Trigger 0-Toughness",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1412292158\">Modifier_Monster_W4_DawnsEye_WheaterRainDeathrattle</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-961317684\">Enemy_W4_DawnsEye_SummonLimboMark</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2093876840\">Modifier_Monster_W4_DawnsEye_WheaterRainUIController</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1414068042\">Modifier_Monster_W4_DawnsEye_WheaterMarkAbility04</a>[<span class=\"descriptionNumberColor\">Ionization</span>]"
                  },
                  "passed": [
                    {
                      "name": "Set Aquila UI Data"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1414068042\">Modifier_Monster_W4_DawnsEye_WheaterMarkAbility04</a>[<span class=\"descriptionNumberColor\">Ionization</span>]",
                      "valuePerStack": {
                        "MDF_ThunderDark": {
                          "operator": "Variables[0] (Thunder_CountDark) || RETURN",
                          "displayLines": "Thunder_CountDark",
                          "constants": [],
                          "variables": [
                            "Thunder_CountDark"
                          ]
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Set Aquila UI Data"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1923265590\">Modifier_Monster_W4_DawnsEye_WheaterRain</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player & Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1586907692\">Modifier_Monster_W4_DawnsEye_WheaterRainSub</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2093876840\">Modifier_Monster_W4_DawnsEye_WheaterRainUIController</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Thunder_CountDark",
                  "value": 0
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2093876840\">Modifier_Monster_W4_DawnsEye_WheaterRainUIController</a>"
                }
              ]
            }
          ],
          "stackData": [
            "Weather_Thunder",
            "Weather_ThunderChange",
            "Weather_ThunderDamageLight",
            "Weather_ThunderDamageDark",
            "Weather_ThunderCount",
            "Weather_ThunderChance",
            "Weather_ThunderKillCount",
            "Weather_Skill05MaxCount"
          ],
          "latentQueue": [
            "AIFlag"
          ],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1586907692\">Modifier_Monster_W4_DawnsEye_WheaterRainSub</a>",
              "haloStatus": true
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1229754990\">Modifier_Monster_W4_DawnsEye_WheaterSunnySubMark</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__181367335\">Modifier_Monster_W4_DawnsEye_WheaterSunnySub</a>",
          "execute": [
            {
              "eventTrigger": "Deal Damage End [Owner]: Hit",
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
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1737251406\">Enemy_W4_DawnsEye_Ability04_SunnyChargeHeat</a>[<span class=\"descriptionNumberColor\">Helium Flash</span>]"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1229754990\">Modifier_Monster_W4_DawnsEye_WheaterSunnySubMark</a>",
                        "invertCondition": true
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1229754990\">Modifier_Monster_W4_DawnsEye_WheaterSunnySubMark</a>"
                    },
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "MDF_Count",
                      "value": 1,
                      "max": 100
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack Action Completed [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1737251406\">Enemy_W4_DawnsEye_Ability04_SunnyChargeHeat</a>[<span class=\"descriptionNumberColor\">Helium Flash</span>]"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "Skill04P1SunnyHeat",
                      "context": "TargetEntity",
                      "value": {
                        "operator": "Constants[0] (0) || Variables[0] (MDF_Count) || Variables[1] (MDF_Skill04SunnyHeatColdDown) || MUL || SUB || RETURN",
                        "displayLines": "(0 - (MDF_Count * MDF_Skill04SunnyHeatColdDown))",
                        "constants": [
                          0
                        ],
                        "variables": [
                          "MDF_Count",
                          "MDF_Skill04SunnyHeatColdDown"
                        ]
                      },
                      "min": {
                        "operator": "Variables[0] ({[Skill04P1[3]]}) || RETURN",
                        "displayLines": "{[Skill04P1[3]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill04P1[3]]}"
                        ]
                      },
                      "max": {
                        "operator": "Variables[0] ({[Skill04P1[0]]}) || RETURN",
                        "displayLines": "{[Skill04P1[0]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill04P1[0]]}"
                        ]
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1737251406\">Enemy_W4_DawnsEye_Ability04_SunnyChargeHeat</a>[<span class=\"descriptionNumberColor\">Helium Flash</span>]",
                      "valuePerStack": {
                        "MDF_Ability04P1SunnyHeat": {
                          "operator": "Variables[0] (Skill04P1SunnyHeat) || RETURN",
                          "displayLines": "Skill04P1SunnyHeat",
                          "constants": [],
                          "variables": [
                            "Skill04P1SunnyHeat"
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
                      "modifier": "<a class=\"gModGreen\" id=\"735847061\">Modifier_Monster_W4_DawnsEye_WheaterSunnyUIController</a>"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Skill04P1SunnyHeat",
                        "compareType": "=",
                        "value2": {
                          "operator": "Variables[0] ({[Skill04P1[3]]}) || RETURN",
                          "displayLines": "{[Skill04P1[3]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill04P1[3]]}"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Count",
                      "value": 0
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1229754990\">Modifier_Monster_W4_DawnsEye_WheaterSunnySubMark</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1201435172\">Enemy_W4_DawnsEye_Ability04_SunnyChargeHeatStatus</a>",
          "stackType": "Replace"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1737251406\">Enemy_W4_DawnsEye_Ability04_SunnyChargeHeat</a>[<span class=\"descriptionNumberColor\">Helium Flash</span>]",
          "stackType": "Replace",
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
                  "variableName": "Skill04P1SunnyHeat",
                  "value": 0
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1201435172\">Enemy_W4_DawnsEye_Ability04_SunnyChargeHeatStatus</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Put in Deathstate Limbo",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
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
          "stackData": [
            "MDF_Skill04P1SunnyHeat"
          ],
          "latentQueue": [],
          "description": "Uses \"Fury, Incineration of Dawn and Dusk\" on all targets in the next action and increases the Temperature by <span class=\"descriptionNumberColor\">MDF_Skill04P1SunnyHeat</span>.",
          "type": "Buff",
          "statusName": "Helium Flash"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__299637479\">Modifier_Monster_W4_DawnsEye_WheaterSunnyChange</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-39064349\">Modifier_Monster_W4_DawnsEye_WheaterSunny</a>",
                  "valuePerStack": {
                    "Weather_SunnyChange": {
                      "operator": "Variables[0] (Weather_SunnyChange) || RETURN",
                      "displayLines": "Weather_SunnyChange",
                      "constants": [],
                      "variables": [
                        "Weather_SunnyChange"
                      ]
                    }
                  },
                  "casterAssign": "CasterSelf"
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__55187290\">Enemy_Monster_W4_DawnsEye_WheaterSunnyAllDamageTypeAddedRatioSub</a>",
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1769039176\">Enemy_Monster_W4_DawnsEye_WheaterSunnyAllDamageTypeAddedRatio</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "CanBeAddedToServant"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variable": "Sunny_Temperature",
                  "target2": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variable2": "Weather_SunnyHeat"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Weather_SunnyHeat",
                    "compareType": ">",
                    "value2": {
                      "operator": "Variables[0] (Weather_SunnyHeatInitial) || RETURN",
                      "displayLines": "Weather_SunnyHeatInitial",
                      "constants": [],
                      "variables": [
                        "Weather_SunnyHeatInitial"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_AllDamageTypeAddedRatioCurrent",
                      "value": {
                        "operator": "Variables[0] (MDF_AllDamageTypeAddedRatio) || Variables[1] (Weather_SunnyHeat) || Variables[2] (Weather_SunnyHeatInitial) || SUB || Constants[0] (10) || ADD || MUL || RETURN",
                        "displayLines": "(MDF_AllDamageTypeAddedRatio * ((Weather_SunnyHeat - Weather_SunnyHeatInitial) + 10))",
                        "constants": [
                          10
                        ],
                        "variables": [
                          "MDF_AllDamageTypeAddedRatio",
                          "Weather_SunnyHeat",
                          "Weather_SunnyHeatInitial"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_AllDamageTypeAddedRatioCurrent",
                      "value": {
                        "operator": "Variables[0] (MDF_AllDamageTypeAddedRatio) || Constants[0] (10) || MUL || RETURN",
                        "displayLines": "(MDF_AllDamageTypeAddedRatio * 10)",
                        "constants": [
                          10
                        ],
                        "variables": [
                          "MDF_AllDamageTypeAddedRatio"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"55187290\">Enemy_Monster_W4_DawnsEye_WheaterSunnyAllDamageTypeAddedRatioSub</a>",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (MDF_AllDamageTypeAddedRatioCurrent) || RETURN",
                      "displayLines": "MDF_AllDamageTypeAddedRatioCurrent",
                      "constants": [],
                      "variables": [
                        "MDF_AllDamageTypeAddedRatioCurrent"
                      ]
                    }
                  }
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
                    "modifier": "<a class=\"gModGreen\" id=\"735847061\">Modifier_Monster_W4_DawnsEye_WheaterSunnyUIController</a>"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Copy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variable": "Sunny_Temperature",
                      "target2": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variable2": "Weather_SunnyHeat"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "Weather_SunnyHeat",
                        "compareType": ">",
                        "value2": {
                          "operator": "Variables[0] (Weather_SunnyHeatInitial) || RETURN",
                          "displayLines": "Weather_SunnyHeatInitial",
                          "constants": [],
                          "variables": [
                            "Weather_SunnyHeatInitial"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_AllDamageTypeAddedRatioCurrent",
                          "value": {
                            "operator": "Variables[0] (MDF_AllDamageTypeAddedRatio) || Variables[1] (Weather_SunnyHeat) || Variables[2] (Weather_SunnyHeatInitial) || SUB || Constants[0] (10) || ADD || MUL || RETURN",
                            "displayLines": "(MDF_AllDamageTypeAddedRatio * ((Weather_SunnyHeat - Weather_SunnyHeatInitial) + 10))",
                            "constants": [
                              10
                            ],
                            "variables": [
                              "MDF_AllDamageTypeAddedRatio",
                              "Weather_SunnyHeat",
                              "Weather_SunnyHeatInitial"
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_AllDamageTypeAddedRatioCurrent",
                          "value": {
                            "operator": "Variables[0] (MDF_AllDamageTypeAddedRatio) || Constants[0] (10) || MUL || RETURN",
                            "displayLines": "(MDF_AllDamageTypeAddedRatio * 10)",
                            "constants": [
                              10
                            ],
                            "variables": [
                              "MDF_AllDamageTypeAddedRatio"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"55187290\">Enemy_Monster_W4_DawnsEye_WheaterSunnyAllDamageTypeAddedRatioSub</a>",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (MDF_AllDamageTypeAddedRatioCurrent) || RETURN",
                          "displayLines": "MDF_AllDamageTypeAddedRatioCurrent",
                          "constants": [],
                          "variables": [
                            "MDF_AllDamageTypeAddedRatioCurrent"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_AllDamageTypeAddedRatioCurrent</span>.",
          "type": "Buff",
          "statusName": "DMG Boost"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1383289356\">Enemy_Monster_W4_DawnsEye_WheaterSunnyBurn</a>[<span class=\"descriptionNumberColor\">Solar Storm</span>]",
          "stackType": "Replace",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_DOT",
            "STAT_DOT_Burn",
            "CanBeAddedToServant"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is NOT in Auto-Battle State"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "MDF_BaseAttack",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variable": "Sunny_Temperature",
                  "target2": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variable2": "Weather_SunnyHeat"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Weather_SunnyHeat",
                    "compareType": ">",
                    "value2": {
                      "operator": "Variables[0] (Weather_SunnyHeatInitial) || RETURN",
                      "displayLines": "Weather_SunnyHeatInitial",
                      "constants": [],
                      "variables": [
                        "Weather_SunnyHeatInitial"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Fire",
                        "DamageFlat": {
                          "operator": "Variables[0] (Modifier_Burn_DamagePercentage) || Variables[1] (Weather_SunnyHeat) || Variables[2] (Weather_SunnyHeatInitial) || SUB || Constants[0] (10) || ADD || MUL || Variables[3] (MDF_BaseAttack) || MUL || RETURN",
                          "displayLines": "((Modifier_Burn_DamagePercentage * ((Weather_SunnyHeat - Weather_SunnyHeatInitial) + 10)) * MDF_BaseAttack)",
                          "constants": [
                            10
                          ],
                          "variables": [
                            "Modifier_Burn_DamagePercentage",
                            "Weather_SunnyHeat",
                            "Weather_SunnyHeatInitial",
                            "MDF_BaseAttack"
                          ]
                        },
                        "cantKill": true,
                        "Toughness": null,
                        "Tags": [
                          "Burn"
                        ],
                        "attackType": "DOT"
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Fire",
                        "DamageFlat": {
                          "operator": "Variables[0] (Modifier_Burn_DamagePercentage) || Constants[0] (10) || MUL || Variables[1] (MDF_BaseAttack) || MUL || RETURN",
                          "displayLines": "((Modifier_Burn_DamagePercentage * 10) * MDF_BaseAttack)",
                          "constants": [
                            10
                          ],
                          "variables": [
                            "Modifier_Burn_DamagePercentage",
                            "MDF_BaseAttack"
                          ]
                        },
                        "cantKill": true,
                        "Toughness": null,
                        "Tags": [
                          "Burn"
                        ],
                        "attackType": "DOT"
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          {
                            "name": "Sort by Monster Rank",
                            "byHighest": true
                          }
                        ]
                      },
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Define Custom Variable with Stat",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "variableName": "MDF_BaseAttack",
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;"
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
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variable": "Sunny_Temperature",
                  "target2": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variable2": "Weather_SunnyHeat"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Weather_SunnyHeat",
                    "compareType": ">",
                    "value2": {
                      "operator": "Variables[0] (Weather_SunnyHeatInitial) || RETURN",
                      "displayLines": "Weather_SunnyHeatInitial",
                      "constants": [],
                      "variables": [
                        "Weather_SunnyHeatInitial"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Fire",
                        "DamageFlat": {
                          "operator": "Variables[0] (Modifier_Burn_DamagePercentage) || Variables[1] (Weather_SunnyHeat) || Variables[2] (Weather_SunnyHeatInitial) || SUB || Constants[0] (10) || ADD || MUL || Variables[3] (MDF_BaseAttack) || MUL || RETURN",
                          "displayLines": "((Modifier_Burn_DamagePercentage * ((Weather_SunnyHeat - Weather_SunnyHeatInitial) + 10)) * MDF_BaseAttack)",
                          "constants": [
                            10
                          ],
                          "variables": [
                            "Modifier_Burn_DamagePercentage",
                            "Weather_SunnyHeat",
                            "Weather_SunnyHeatInitial",
                            "MDF_BaseAttack"
                          ]
                        },
                        "cantKill": true,
                        "Toughness": null,
                        "Tags": [
                          "Burn"
                        ],
                        "attackType": "DOT"
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Fire",
                        "DamageFlat": {
                          "operator": "Variables[0] (Modifier_Burn_DamagePercentage) || Constants[0] (10) || MUL || Variables[1] (MDF_BaseAttack) || MUL || RETURN",
                          "displayLines": "((Modifier_Burn_DamagePercentage * 10) * MDF_BaseAttack)",
                          "constants": [
                            10
                          ],
                          "variables": [
                            "Modifier_Burn_DamagePercentage",
                            "MDF_BaseAttack"
                          ]
                        },
                        "cantKill": true,
                        "Toughness": null,
                        "Tags": [
                          "Burn"
                        ],
                        "attackType": "DOT"
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "New Enemy Wave",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          {
                            "name": "Sort by Monster Rank",
                            "byHighest": true
                          }
                        ]
                      },
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Define Custom Variable with Stat",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "variableName": "MDF_BaseAttack",
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "description": "Takes Fire DMG based on the current Temperature at the start of each turn.",
          "type": "Other",
          "effectName": "Solar Storm",
          "statusName": "Solar Storm"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__735847061\">Modifier_Monster_W4_DawnsEye_WheaterSunnyUIController</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1737251406\">Enemy_W4_DawnsEye_Ability04_SunnyChargeHeat</a>[<span class=\"descriptionNumberColor\">Helium Flash</span>]"
                  },
                  "passed": [
                    {
                      "name": "Set Aquila UI Data"
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (Skill04P1SunnyHeat) || RETURN",
                        "displayLines": "Skill04P1SunnyHeat",
                        "constants": [],
                        "variables": [
                          "Skill04P1SunnyHeat"
                        ]
                      },
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "maximum": {
                        "operator": "Variables[0] ({[Skill04P1[0]]}) || RETURN",
                        "displayLines": "{[Skill04P1[0]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill04P1[0]]}"
                        ]
                      },
                      "assignState": "True"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Set Aquila UI Data"
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "assignState": "False"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Level Entity}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "Sunny_Temperature",
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] (Weather_SunnyHeatInitial) || Constants[0] (20) || ADD || RETURN",
                              "displayLines": "(Weather_SunnyHeatInitial + 20)",
                              "constants": [
                                20
                              ],
                              "variables": [
                                "Weather_SunnyHeatInitial"
                              ]
                            }
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
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1232483013\">Modifier_Monster_W4_DawnsEye_WheaterSunnyHeatAddPerAct</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variable": "Sunny_Temperature",
                  "target2": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variable2": "Weather_SunnyHeat"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Weather_SunnyHeat",
                  "value": {
                    "operator": "Variables[0] (Weather_SunnyHeat) || Variables[1] (Weather_HeatAddPerAction) || ADD || RETURN",
                    "displayLines": "(Weather_SunnyHeat + Weather_HeatAddPerAction)",
                    "constants": [],
                    "variables": [
                      "Weather_SunnyHeat",
                      "Weather_HeatAddPerAction"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Sunny_Temperature",
                  "value": {
                    "operator": "Variables[0] (Weather_SunnyHeat) || RETURN",
                    "displayLines": "Weather_SunnyHeat",
                    "constants": [],
                    "variables": [
                      "Weather_SunnyHeat"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"735847061\">Modifier_Monster_W4_DawnsEye_WheaterSunnyUIController</a>",
                  "casterAssign": "TargetSelf"
                }
              ],
              "priorityLevel": -10
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1982815636\">Modifier_Monster_W4_DawnsEye_WheaterSunnyForLevel</a>",
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
                    "value1": "Sunny_Temperature",
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
                      "variableName": "Sunny_Temperature"
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Sunny_Temperature",
                  "value": {
                    "operator": "Variables[0] (Weather_SunnyHeatInitial) || RETURN",
                    "displayLines": "Weather_SunnyHeatInitial",
                    "constants": [],
                    "variables": [
                      "Weather_SunnyHeatInitial"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"735847061\">Modifier_Monster_W4_DawnsEye_WheaterSunnyUIController</a>",
                  "valuePerStack": {
                    "Weather_SunnyHeatInitial": {
                      "operator": "Variables[0] (Weather_SunnyHeatInitial) || RETURN",
                      "displayLines": "Weather_SunnyHeatInitial",
                      "constants": [],
                      "variables": [
                        "Weather_SunnyHeatInitial"
                      ]
                    }
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
                    "target": "{{Player & Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1383289356\">Enemy_Monster_W4_DawnsEye_WheaterSunnyBurn</a>[<span class=\"descriptionNumberColor\">Solar Storm</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player & Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1769039176\">Enemy_Monster_W4_DawnsEye_WheaterSunnyAllDamageTypeAddedRatio</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player & Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"55187290\">Enemy_Monster_W4_DawnsEye_WheaterSunnyAllDamageTypeAddedRatioSub</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player & Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1232483013\">Modifier_Monster_W4_DawnsEye_WheaterSunnyHeatAddPerAct</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"735847061\">Modifier_Monster_W4_DawnsEye_WheaterSunnyUIController</a>"
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "Sunny_Temperature",
                      "value": {
                        "operator": "Constants[0] (0) || Variables[0] (Weather_HeatCountDown) || SUB || RETURN",
                        "displayLines": "(0 - Weather_HeatCountDown)",
                        "constants": [
                          0
                        ],
                        "variables": [
                          "Weather_HeatCountDown"
                        ]
                      },
                      "max": 999
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"735847061\">Modifier_Monster_W4_DawnsEye_WheaterSunnyUIController</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "Weather_SunnyHeatInitial",
            "Weather_HeatDamage",
            "Weather_HeatAddPerAction",
            "Weather_HeatCountDown",
            "Weather_AllDamageTypeAddedRatio"
          ],
          "latentQueue": [],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(Exclude Netherwing)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1383289356\">Enemy_Monster_W4_DawnsEye_WheaterSunnyBurn</a>[<span class=\"descriptionNumberColor\">Solar Storm</span>]",
              "haloStatus": true,
              "valuePerStack": {
                "Modifier_Burn_DamagePercentage": {
                  "operator": "Variables[0] (Weather_HeatDamage) || RETURN",
                  "displayLines": "Weather_HeatDamage",
                  "constants": [],
                  "variables": [
                    "Weather_HeatDamage"
                  ]
                },
                "Weather_SunnyHeat": {
                  "operator": "Variables[0] (Sunny_Temperature) || RETURN",
                  "displayLines": "Sunny_Temperature",
                  "constants": [],
                  "variables": [
                    "Sunny_Temperature"
                  ]
                },
                "Weather_SunnyHeatInitial": {
                  "operator": "Variables[0] (Weather_SunnyHeatInitial) || RETURN",
                  "displayLines": "Weather_SunnyHeatInitial",
                  "constants": [],
                  "variables": [
                    "Weather_SunnyHeatInitial"
                  ]
                },
                "MDF_BaseAttack": {
                  "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__163) || RETURN",
                  "displayLines": "ENEMIES_OBJECT_UNUSED__163",
                  "constants": [],
                  "variables": [
                    "ENEMIES_OBJECT_UNUSED__163"
                  ]
                },
                "MDF_AllDamageTypeAddedRatio": {
                  "operator": "Variables[0] (Weather_AllDamageTypeAddedRatio) || RETURN",
                  "displayLines": "Weather_AllDamageTypeAddedRatio",
                  "constants": [],
                  "variables": [
                    "Weather_AllDamageTypeAddedRatio"
                  ]
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(Exclude Netherwing)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1769039176\">Enemy_Monster_W4_DawnsEye_WheaterSunnyAllDamageTypeAddedRatio</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
              "haloStatus": true,
              "valuePerStack": {
                "Weather_SunnyHeat": {
                  "operator": "Variables[0] (Sunny_Temperature) || RETURN",
                  "displayLines": "Sunny_Temperature",
                  "constants": [],
                  "variables": [
                    "Sunny_Temperature"
                  ]
                },
                "Weather_SunnyHeatInitial": {
                  "operator": "Variables[0] (Weather_SunnyHeatInitial) || RETURN",
                  "displayLines": "Weather_SunnyHeatInitial",
                  "constants": [],
                  "variables": [
                    "Weather_SunnyHeatInitial"
                  ]
                },
                "MDF_AllDamageTypeAddedRatio": {
                  "operator": "Variables[0] (Weather_AllDamageTypeAddedRatio) || RETURN",
                  "displayLines": "Weather_AllDamageTypeAddedRatio",
                  "constants": [],
                  "variables": [
                    "Weather_AllDamageTypeAddedRatio"
                  ]
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Join Targets",
                "TargetList": [
                  {
                    "name": "Target Name",
                    "target": "{{Player & Enemy Team All}}"
                  },
                  {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{All Unselectable Targets}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Is Entity a Battle Event/Summon",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "invertCondition": true
                        }
                      }
                    ]
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"1232483013\">Modifier_Monster_W4_DawnsEye_WheaterSunnyHeatAddPerAct</a>",
              "haloStatus": true,
              "valuePerStack": {
                "Weather_HeatAddPerAction": {
                  "operator": "Variables[0] (Weather_HeatAddPerAction) || RETURN",
                  "displayLines": "Weather_HeatAddPerAction",
                  "constants": [],
                  "variables": [
                    "Weather_HeatAddPerAction"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-39064349\">Modifier_Monster_W4_DawnsEye_WheaterSunny</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Sunny_Temperature",
                  "value": {
                    "operator": "Variables[0] (Weather_SunnyHeatInitial) || RETURN",
                    "displayLines": "Weather_SunnyHeatInitial",
                    "constants": [],
                    "variables": [
                      "Weather_SunnyHeatInitial"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"735847061\">Modifier_Monster_W4_DawnsEye_WheaterSunnyUIController</a>",
                  "valuePerStack": {
                    "Weather_SunnyHeatInitial": {
                      "operator": "Variables[0] (Weather_SunnyHeatInitial) || RETURN",
                      "displayLines": "Weather_SunnyHeatInitial",
                      "constants": [],
                      "variables": [
                        "Weather_SunnyHeatInitial"
                      ]
                    }
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
                    "target": "{{Player & Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1383289356\">Enemy_Monster_W4_DawnsEye_WheaterSunnyBurn</a>[<span class=\"descriptionNumberColor\">Solar Storm</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player & Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1769039176\">Enemy_Monster_W4_DawnsEye_WheaterSunnyAllDamageTypeAddedRatio</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player & Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"181367335\">Modifier_Monster_W4_DawnsEye_WheaterSunnySub</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player & Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"55187290\">Enemy_Monster_W4_DawnsEye_WheaterSunnyAllDamageTypeAddedRatioSub</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player & Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1232483013\">Modifier_Monster_W4_DawnsEye_WheaterSunnyHeatAddPerAct</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"735847061\">Modifier_Monster_W4_DawnsEye_WheaterSunnyUIController</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [
            "Weather_SunnyChange"
          ],
          "latentQueue": [],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1383289356\">Enemy_Monster_W4_DawnsEye_WheaterSunnyBurn</a>[<span class=\"descriptionNumberColor\">Solar Storm</span>]",
              "haloStatus": true,
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "isDev",
                "compareType": "=",
                "value2": 0
              },
              "valuePerStack": {
                "Modifier_Burn_DamagePercentage": {
                  "operator": "Variables[0] (Weather_HeatDamage) || RETURN",
                  "displayLines": "Weather_HeatDamage",
                  "constants": [],
                  "variables": [
                    "Weather_HeatDamage"
                  ]
                },
                "Weather_SunnyHeat": {
                  "operator": "Variables[0] (Sunny_Temperature) || RETURN",
                  "displayLines": "Sunny_Temperature",
                  "constants": [],
                  "variables": [
                    "Sunny_Temperature"
                  ]
                },
                "Weather_SunnyHeatInitial": {
                  "operator": "Variables[0] (Weather_SunnyHeatInitial) || RETURN",
                  "displayLines": "Weather_SunnyHeatInitial",
                  "constants": [],
                  "variables": [
                    "Weather_SunnyHeatInitial"
                  ]
                },
                "MDF_AllDamageTypeAddedRatio": {
                  "operator": "Variables[0] (Weather_AllDamageTypeAddedRatio) || RETURN",
                  "displayLines": "Weather_AllDamageTypeAddedRatio",
                  "constants": [],
                  "variables": [
                    "Weather_AllDamageTypeAddedRatio"
                  ]
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1769039176\">Enemy_Monster_W4_DawnsEye_WheaterSunnyAllDamageTypeAddedRatio</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
              "haloStatus": true,
              "valuePerStack": {
                "Weather_SunnyHeat": {
                  "operator": "Variables[0] (Sunny_Temperature) || RETURN",
                  "displayLines": "Sunny_Temperature",
                  "constants": [],
                  "variables": [
                    "Sunny_Temperature"
                  ]
                },
                "Weather_SunnyHeatInitial": {
                  "operator": "Variables[0] (Weather_SunnyHeatInitial) || RETURN",
                  "displayLines": "Weather_SunnyHeatInitial",
                  "constants": [],
                  "variables": [
                    "Weather_SunnyHeatInitial"
                  ]
                },
                "MDF_AllDamageTypeAddedRatio": {
                  "operator": "Variables[0] (Weather_AllDamageTypeAddedRatio) || RETURN",
                  "displayLines": "Weather_AllDamageTypeAddedRatio",
                  "constants": [],
                  "variables": [
                    "Weather_AllDamageTypeAddedRatio"
                  ]
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Join Targets",
                "TargetList": [
                  {
                    "name": "Target Name",
                    "target": "{{Player & Enemy Team All}}"
                  },
                  {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{All Unselectable Targets}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Is Entity a Battle Event/Summon",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "invertCondition": true
                        }
                      }
                    ]
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"1232483013\">Modifier_Monster_W4_DawnsEye_WheaterSunnyHeatAddPerAct</a>",
              "haloStatus": true,
              "valuePerStack": {
                "Weather_HeatAddPerAction": {
                  "operator": "Variables[0] (Weather_HeatAddPerAction) || RETURN",
                  "displayLines": "Weather_HeatAddPerAction",
                  "constants": [],
                  "variables": [
                    "Weather_HeatAddPerAction"
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
              "modifier": "<a class=\"gModGreen\" id=\"181367335\">Modifier_Monster_W4_DawnsEye_WheaterSunnySub</a>",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_Ability04SunnyHeatColdDown": {
                  "operator": "Variables[0] (MDF_Skill04SunnyHeatColdDown) || RETURN",
                  "displayLines": "MDF_Skill04SunnyHeatColdDown",
                  "constants": [],
                  "variables": [
                    "MDF_Skill04SunnyHeatColdDown"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1803162686\">Enemy_W4_DawnsEye_SoundController</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle"
            },
            {
              "eventTrigger": "Leave Battle"
            },
            {
              "eventTrigger": "Enemy HP Phased",
              "execute": [
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
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "AIFlag",
            "PauseLevelForCameraPerform"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-283400185\">Enemy_W4_DawnsEye_DisableLookAt</a>",
          "execute": [
            {
              "eventTrigger": "Turn Start [Anyone]"
            }
          ],
          "stackData": [],
          "latentQueue": [
            "AIFlag",
            "PauseLevelForCameraPerform"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__694258822\">Enemy_W4_DawnsEye_BreakMuteSpeed</a>",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-440353918\">Enemy_W4_DawnsEye_BreakController</a>",
          "modifierFlags": [
            "ForceHitH"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
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
                        "compareType": "<=",
                        "value2": 3
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
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
                        },
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
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
                        }
                      ],
                      "failed": [
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
                        "value": "MonsterType_W4_BossPartLeft"
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
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          "maxTargets": 1,
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "value": "MonsterType_W4_BossPartP3"
                              },
                              {
                                "name": "Is Part Of Team Location",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "team": "Enemy Team"
                              }
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"694258822\">Enemy_W4_DawnsEye_BreakMuteSpeed</a>"
                    }
                  ]
                },
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
                        "value": "MonsterType_W4_BossPartRight"
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
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          "maxTargets": 1,
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "value": "MonsterType_W4_BossPartP3"
                              },
                              {
                                "name": "Is Part Of Team Location",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "team": "Enemy Team",
                                "location": "Max"
                              }
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"694258822\">Enemy_W4_DawnsEye_BreakMuteSpeed</a>"
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
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "searchRandom": true,
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
                      "modifier": "<a class=\"gModGreen\" id=\"694258822\">Enemy_W4_DawnsEye_BreakMuteSpeed</a>"
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
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
                        },
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
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
                        }
                      ],
                      "failed": [
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
              ]
            }
          ],
          "stackData": [
            "StanceDamage"
          ],
          "latentQueue": [
            "AIFlag",
            "PauseLevelForCameraPerform"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1987146522\">Enemy_W4_DawnsEye_PartController</a>",
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
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1514267306\">W4_DawnsEye_BattleScore1</a>"
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Join Targets",
                    "TargetList": [
                      {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Enemy Team All(with Unselectable)}}"
                          },
                          {
                            "name": "Target Filter",
                            "conditions": {
                              "name": "OR",
                              "conditionList": [
                                {
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
                            }
                          }
                        ]
                      },
                      {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Enemy Team All(with Unselectable)}}"
                          },
                          {
                            "name": "Target Filter",
                            "conditions": {
                              "name": "Enemy ID",
                              "ID": {
                                "operator": "Variables[0] (SummonedMonsterID) || RETURN",
                                "displayLines": "SummonedMonsterID",
                                "constants": [],
                                "variables": [
                                  "SummonedMonsterID"
                                ]
                              },
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "characterName": null
                            }
                          }
                        ]
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Force Entity Death",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    },
                    {
                      "name": "Mark Entity For Immediate Death",
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
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "HP_Bars_Remaining",
                            "compareType": "=",
                            "value2": 3
                          },
                          "passed": [
                            {
                              "name": "Force Entity Death",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster's Minions}}"
                              }
                            },
                            {
                              "name": "Mark Entity For Immediate Death",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster's Minions}}"
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
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"2022265091\">Enemy_W4_DawnsEye_MainStory</a>"
                          },
                          "passed": [
                            {
                              "name": "Inject Ability Use",
                              "abilityName": "Monster_W4_DawnsEye_PassiveAbility_InsertMainStory",
                              "priorityTag": "MonsterChangePhase",
                              "ownerState": "Mask_AliveOrLimbo",
                              "targetState": "Mask_AliveOrLimbo",
                              "canHitNonTargets": true,
                              "showInActionOrder": true,
                              "allowAbilityTriggers": false
                            }
                          ],
                          "failed": [
                            {
                              "name": "Inject Ability Use",
                              "abilityName": "Monster_W4_DawnsEye_PassiveAbility_Insert",
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
          "latentQueue": [
            "AIFlag"
          ]
        }
      ],
      "references": []
    },
    "4015011_Functions": {
      "fileName": "4015011_Functions",
      "abilityType": "Char. Functions",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "length": 2,
      "parse": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__839161540\">W4_DawnsEye_StartCamera</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Wave Count",
                "compareType": "=",
                "value2": 1
              }
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
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
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 401501000,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": null,
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "PauseLevelForCameraPerform",
                      "value": 1
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "PauseLevelForCameraPerform"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "PauseLevelForCameraPerform",
                      "value": 1
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "PauseLevelForCameraPerform"
                    }
                  ]
                }
              ]
            }
          ]
        },
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
    "4015011_BE_BattleEvents": {
      "fileName": "4015011_BE_BattleEvents",
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
        },
        {
          "name": "Battle Event Construction",
          "ID": 60037,
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
          "eventSpeed": 120,
          "hardLevelEvent": true,
          "eliteGroup": true,
          "actionDescription": "Removes the \"Tide-Corrosion\" state from all ally targets, adds \"Flame-Chase\" to all ally targets and restores HP."
        }
      ],
      "references": []
    }
  }
}