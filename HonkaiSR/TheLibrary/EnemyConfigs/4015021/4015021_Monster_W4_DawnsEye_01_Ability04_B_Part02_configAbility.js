const configAbility = {
  "fileName": "4015021_Monster_W4_DawnsEye_01_Ability04_B_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "_IsStoryTri",
        "compareType": "=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1145840580\">Modifier_Monster_W4_DawnsEye_01_B_HardLockHp</a>"
        }
      ]
    },
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
        "name": "Compare: Variable",
        "value1": "_IsStoryTri",
        "compareType": "=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Show BattleEvent Button",
          "show": true
        },
        {
          "name": "WAIT FOR",
          "condition": {
            "name": "Has Queued Ult"
          }
        }
      ],
      "failed": [
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
            "EnergyGainPercent": "40%"
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
            "EnergyGainPercent": "40%"
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
            "EnergyGainPercent": "40%"
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
            "EnergyGainPercent": "40%"
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
  "whenAdded": [
    {
      "name": "Preload Battle Event(s)",
      "eventID": [
        60027
      ]
    },
    {
      "name": "Add Battle Event",
      "teamName": "Player Team",
      "eventID": 60027,
      "variables": null,
      "whenCreated": [
        "Show BattleEvent Button"
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1742396906\">Modifier_Monster_W4_DawnsEye_01_B_StoryMusic</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1145840580\">Modifier_Monster_W4_DawnsEye_01_B_HardLockHp</a>",
      "valuePerStack": {
        "MDF_LockHp": {
          "operator": "Variables[0] ({[SkillP10[0]]}) || RETURN",
          "displayLines": "{[SkillP10[0]]}",
          "constants": [],
          "variables": [
            "{[SkillP10[0]]}"
          ]
        }
      }
    }
  ],
  "references": []
}