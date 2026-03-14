const configAbility = {
  "fileName": "Sparxie_Sparxie_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 4
      },
      "passed": [
        {
          "name": "Adjust Team Punchline Value",
          "value": {
            "operator": "Variables[0] (5) || RETURN",
            "displayLines": "5",
            "constants": [],
            "variables": [
              5
            ]
          },
          "adjustment": "Add"
        }
      ]
    },
    {
      "name": "Adjust Team Punchline Value",
      "value": {
        "operator": "Variables[0] (2) || Variables[1] (Sparxie_SkillTree_PointB2_UltraEPAddValue) || ADD || RETURN",
        "displayLines": "(2 + Sparxie_SkillTree_PointB2_UltraEPAddValue)",
        "constants": [],
        "variables": [
          2,
          "Sparxie_SkillTree_PointB2_UltraEPAddValue"
        ]
      },
      "adjustment": "Add"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Dazzling! Persona Kaleidoscope"
      },
      "passed": [
        {
          "name": "Adjust Variable Value",
          "adjustmentType": "Add to Value (Default)",
          "variableName": "Sparxie_EnergyPoint",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": {
            "operator": "Variables[0] (Sparxie_SkillTree_PointB2_UltraBPAddValue) || RETURN",
            "displayLines": "Sparxie_SkillTree_PointB2_UltraBPAddValue",
            "constants": [],
            "variables": [
              "Sparxie_SkillTree_PointB2_UltraBPAddValue"
            ]
          }
        },
        {
          "name": "Modify Skill-Point Extras",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "function": "Set",
          "value": {
            "operator": "Variables[0] (Sparxie_EnergyPoint) || RETURN",
            "displayLines": "Sparxie_EnergyPoint",
            "constants": [],
            "variables": [
              "Sparxie_EnergyPoint"
            ]
          },
          "silentChange": true
        }
      ]
    },
    {
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "_CurrentElationDamage",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">ElationDMGMulti[?]</span>&nbsp;"
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
          "operator": "Variables[0] (_CurrentElationDamage) || Variables[1] (0.6) || MUL || Variables[2] (0.5) || ADD || RETURN",
          "displayLines": "((_CurrentElationDamage * 0.6) + 0.5)",
          "constants": [],
          "variables": [
            "_CurrentElationDamage",
            0.6,
            0.5
          ]
        },
        "Toughness": {
          "operator": "Variables[0] (AOE Toughness Value) || RETURN",
          "displayLines": "AOE Toughness Value",
          "constants": [],
          "variables": [
            "AOE Toughness Value"
          ]
        },
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Flag",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "flagName": "STAT_ElationEchoPoint"
      },
      "passed": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "DamageElation": {
              "operator": "Variables[0] (0.48) || RETURN",
              "displayLines": "0.48",
              "constants": [],
              "variables": [
                0.48
              ]
            },
            "dmgFormula": "Elation Scaling",
            "Toughness": null,
            "instanceTag": "Sparxie_ElationPursued_EPDamage",
            "Tags": null,
            "attackType": "Elation DMG"
          }
        }
      ]
    },
    "Trigger: Attack End",
    "Trigger: Skip Death Handling",
    "Trigger: Ability End"
  ],
  "references": []
}