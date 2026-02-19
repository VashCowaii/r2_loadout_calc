const configAbility = {
  "fileName": "4015021_Monster_W4_DawnsEye_01_Ability04_Part02",
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
}