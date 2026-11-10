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
        "displayLines": "PartEntity1_MonsterID"
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
        "displayLines": "{[SkillP01[5]]}"
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Target Part 1}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1787283303\">Enemy_AML_Boss_IF_Sign_Part1</a>"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Target Part 0}}"
      },
      "variableName": "_Part1_Alive",
      "scope": "TargetEntity"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Target Part 1}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2081849040\">Enemy_AML_Boss_IF_Part_Revive</a>",
      "valuePerStack": {
        "MDF_PartReviveDelay": {
          "displayLines": "{[SkillP01[5]]}"
        }
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Target Part 1}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1395729801\">Enemy_AML_Boss_Charge_DisableAction_Controller</a>"
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
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Target Part 1}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"532367944\">Standard_SuperArmorController</a>",
          "valuePerStack": {
            "MDF_SuperArmorDamageResistance": {
              "displayLines": "{[SkillEX01[0]]}"
            },
            "MDF_SuperArmorBreakDamageTakenRatio": {
              "displayLines": "{[SkillEX01[1]]}"
            },
            "MDF_SuperArmorBreakActionDelay": {
              "displayLines": "{[SkillEX01[2]]}"
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
        "modifier": "<a class=\"gModGreen\" id=\"-1785406995\">Enemy_AML_Boss_IF_AbilityEX02</a>"
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Target Part 1}}"
          },
          "scope": "TargetEntity",
          "value": {
            "displayLines": "{[SkillEX02[0]]}"
          },
          "variableName": "SkillEX02_P1_Core_StanceDamageValue"
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
            "target": "{{Target Part 1}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1802184614\">Enemy_AML_Boss_IF_AbilityEX03</a>"
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Target Part 1}}"
          },
          "scope": "TargetEntity",
          "value": {
            "displayLines": "{[SkillEX03[0]]}"
          },
          "variableName": "SkillEX03_P1_AttackAddedRatio"
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Target Part 1}}"
          },
          "scope": "TargetEntity",
          "value": {
            "displayLines": "{[SkillEX03[1]]}"
          },
          "variableName": "SkillEX03_P2_SpeedAddedRatio"
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Target Part 1}}"
          },
          "scope": "TargetEntity",
          "value": {
            "displayLines": "{[SkillEX03[2]]}"
          },
          "variableName": "SkillEX03_P3_HealHPRatio"
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Target Part 1}}"
          },
          "scope": "TargetEntity",
          "value": {
            "displayLines": "{[SkillEX03[3]]}"
          },
          "variableName": "SkillEX03_P4_ActionDelayRatio"
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
            "target": "{{Target Part 1}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-146543153\">Enemy_W2_Cocolia_IF_WeaknessCount</a>",
          "valuePerStack": {
            "MDF_TokenDamageReduceRatio": {
              "displayLines": "{[SkillEX04[0]]}"
            },
            "MDF_TokenDamageAddRatioPerlayer": {
              "displayLines": "{[SkillEX04[1]]}"
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
      "modifier": "<a class=\"gModGreen\" id=\"1367141952\">Enemy_AML_Boss_IF_Part_Resistance</a>"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}