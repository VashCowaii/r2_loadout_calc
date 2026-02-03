const configAbility = {
  "fileName": "8015012_Monster_AML_Boss_IF_InsertPart1_Part01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Create Enemy as Body Part",
      "partName": "R_Hand",
      "value": {
        "operator": "Variables[0] (PartEntity1_MonsterID) || RETURN",
        "displayLines": "PartEntity1_MonsterID",
        "constants": [],
        "variables": [
          "PartEntity1_MonsterID"
        ]
      },
      "offset": -3
    },
    {
      "name": "Action Advance/Delay",
      "advanceType": "Set",
      "target": {
        "name": "Target Name",
        "target": "{{Target Part 1}}"
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
        "target": "{{Target Part 1}}"
      },
      "modifier": "Enemy_AML_Boss_IF_Sign_Part1"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Target Part 0}}"
      },
      "scope": "TargetEntity",
      "variableName": "_Part1_Alive"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Target Part 1}}"
      },
      "modifier": "Enemy_AML_Boss_IF_Part_Revive",
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
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Target Part 1}}"
      },
      "modifier": "Enemy_AML_Boss_Charge_DisableAction_Controller"
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
        "modifier": "Enemy_AML_Boss_IF_AbilityEX01"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Target Part 1}}"
          },
          "modifier": "Standard_SuperArmorController",
          "valuePerStack": {
            "MDF_SuperArmorDamageResistance": {
              "operator": "Variables[0] ({[SkillEX01[0]]}) || RETURN",
              "displayLines": "{[SkillEX01[0]]}",
              "constants": [],
              "variables": [
                "{[SkillEX01[0]]}"
              ]
            },
            "MDF_SuperArmorBreakDamageTakenRatio": {
              "operator": "Variables[0] ({[SkillEX01[1]]}) || RETURN",
              "displayLines": "{[SkillEX01[1]]}",
              "constants": [],
              "variables": [
                "{[SkillEX01[1]]}"
              ]
            },
            "MDF_SuperArmorBreakActionDelay": {
              "operator": "Variables[0] ({[SkillEX01[2]]}) || RETURN",
              "displayLines": "{[SkillEX01[2]]}",
              "constants": [],
              "variables": [
                "{[SkillEX01[2]]}"
              ]
            }
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
        "modifier": "Enemy_AML_Boss_IF_AbilityEX02"
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Target Part 1}}"
          },
          "scope": "TargetEntity",
          "variableName": "SkillEX02_P1_Core_StanceDamageValue",
          "value": {
            "operator": "Variables[0] ({[SkillEX02[0]]}) || RETURN",
            "displayLines": "{[SkillEX02[0]]}",
            "constants": [],
            "variables": [
              "{[SkillEX02[0]]}"
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
        "modifier": "Enemy_AML_Boss_IF_AbilityEX03"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Target Part 1}}"
          },
          "modifier": "Enemy_AML_Boss_IF_AbilityEX03"
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Target Part 1}}"
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
            "target": "{{Target Part 1}}"
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
            "target": "{{Target Part 1}}"
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
            "target": "{{Target Part 1}}"
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
        "modifier": "Enemy_AML_Boss_IF_AbilityEX04"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Target Part 1}}"
          },
          "modifier": "Enemy_W2_Cocolia_IF_WeaknessCount",
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
        "target": "{{Target Part 1}}"
      },
      "modifier": "Enemy_AML_Boss_IF_Part_Resistance"
    }
  ],
  "references": []
}