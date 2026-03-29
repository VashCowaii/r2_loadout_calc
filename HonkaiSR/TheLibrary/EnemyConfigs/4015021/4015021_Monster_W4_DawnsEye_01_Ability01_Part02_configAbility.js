const configAbility = {
  "fileName": "4015021_Monster_W4_DawnsEye_01_Ability01_Part02",
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
}