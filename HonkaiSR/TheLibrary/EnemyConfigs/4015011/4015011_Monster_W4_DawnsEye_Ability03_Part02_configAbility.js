const configAbility = {
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
}