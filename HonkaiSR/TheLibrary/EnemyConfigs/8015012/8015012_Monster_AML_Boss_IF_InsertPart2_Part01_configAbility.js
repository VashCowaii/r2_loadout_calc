const configAbility = {
  "fileName": "8015012_Monster_AML_Boss_IF_InsertPart2_Part01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Create Enemy as Body Part",
      "partName": "Middle",
      "value": {
        "operator": "Variables[0] (PartEntity2_MonsterID) || RETURN",
        "displayLines": "PartEntity2_MonsterID",
        "constants": [],
        "variables": [
          "PartEntity2_MonsterID"
        ]
      },
      "offset": -2,
      "type": 2
    },
    {
      "name": "Action Advance/Delay",
      "advanceType": "Set",
      "target": {
        "name": "Target Name",
        "target": "{{Target Part 2}}"
      },
      "set": {
        "operator": "Variables[0] ({[SkillP01[5]]}) || RETURN",
        "displayLines": "{[SkillP01[5]]}",
        "constants": [],
        "variables": [
          "{[SkillP01[5]]}"
        ]
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Target Part 2}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1804060922\">Enemy_AML_Boss_IF_Sign_Part2</a>"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Target Part 0}}"
      },
      "scope": "TargetEntity",
      "variableName": "_Part2_Alive"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Target Part 2}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2081849040\">Enemy_AML_Boss_IF_Part_Revive</a>",
      "valuePerStack": {
        "MDF_PartReviveDelay": {
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
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Target Part 0}}"
        },
        "value1": "HP_Bars_Remaining",
        "compareType": "=",
        "value2": 2
      },
      "passed": [
        {
          "name": "Set Enemy Phase",
          "phase": 2
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
        "modifier": "<a class=\"gModGreen\" id=\"-1835739852\">Enemy_AML_Boss_IF_AbilityEX01</a>"
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
        "modifier": "<a class=\"gModGreen\" id=\"-1785406995\">Enemy_AML_Boss_IF_AbilityEX02</a>"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Target Part 2}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-909037772\">Enemy_AML_Boss_Part2_IF_AbilityP01_WeaknessControll</a>"
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
        "modifier": "<a class=\"gModGreen\" id=\"-1802184614\">Enemy_AML_Boss_IF_AbilityEX03</a>"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Target Part 2}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1802184614\">Enemy_AML_Boss_IF_AbilityEX03</a>"
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Target Part 2}}"
          },
          "scope": "TargetEntity",
          "variableName": "SkillEX03_P1_AttackAddedRatio",
          "value": {
            "operator": "Variables[0] ({[SkillEX03[0]]}) || RETURN",
            "displayLines": "{[SkillEX03[0]]}",
            "constants": [],
            "variables": [
              "{[SkillEX03[0]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Target Part 2}}"
          },
          "scope": "TargetEntity",
          "variableName": "SkillEX03_P2_SpeedAddedRatio",
          "value": {
            "operator": "Variables[0] ({[SkillEX03[1]]}) || RETURN",
            "displayLines": "{[SkillEX03[1]]}",
            "constants": [],
            "variables": [
              "{[SkillEX03[1]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Target Part 2}}"
          },
          "scope": "TargetEntity",
          "variableName": "SkillEX03_P3_HealHPRatio",
          "value": {
            "operator": "Variables[0] ({[SkillEX03[2]]}) || RETURN",
            "displayLines": "{[SkillEX03[2]]}",
            "constants": [],
            "variables": [
              "{[SkillEX03[2]]}"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Target Part 2}}"
          },
          "scope": "TargetEntity",
          "variableName": "SkillEX03_P4_ActionDelayRatio",
          "value": {
            "operator": "Variables[0] ({[SkillEX03[3]]}) || RETURN",
            "displayLines": "{[SkillEX03[3]]}",
            "constants": [],
            "variables": [
              "{[SkillEX03[3]]}"
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
        "modifier": "<a class=\"gModGreen\" id=\"-1886072709\">Enemy_AML_Boss_IF_AbilityEX04</a>"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Target Part 2}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-146543153\">Enemy_W2_Cocolia_IF_WeaknessCount</a>",
          "valuePerStack": {
            "MDF_TokenDamageReduceRatio": {
              "operator": "Variables[0] ({[SkillEX04[0]]}) || RETURN",
              "displayLines": "{[SkillEX04[0]]}",
              "constants": [],
              "variables": [
                "{[SkillEX04[0]]}"
              ]
            },
            "MDF_TokenDamageAddRatioPerlayer": {
              "operator": "Variables[0] ({[SkillEX04[1]]}) || RETURN",
              "displayLines": "{[SkillEX04[1]]}",
              "constants": [],
              "variables": [
                "{[SkillEX04[1]]}"
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
        "target": "{{Target Part 2}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1367141952\">Enemy_AML_Boss_IF_Part_Resistance</a>"
    }
  ],
  "references": []
}