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
            "displayLines": "5"
          },
          "adjustment": "Add"
        }
      ]
    },
    {
      "name": "Adjust Team Punchline Value",
      "value": {
        "displayLines": "(2 + Sparxie_SkillTree_PointB2_UltraEPAddValue)"
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
            "displayLines": "Sparxie_SkillTree_PointB2_UltraBPAddValue"
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
            "displayLines": "Sparxie_EnergyPoint"
          },
          "silentChange": true
        }
      ]
    },
    {
      "name": "Define Custom Variable with Stat",
      "variableName": "_CurrentElationDamage",
      "readTarget": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "value": "&nbsp;<span class=\"descriptionNumberColor\">ElationDMGSUM</span>&nbsp;"
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
          "displayLines": "((_CurrentElationDamage * 0.6) + 0.5)"
        },
        "Toughness": {
          "displayLines": "AOE Toughness Value"
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
        "flagName": "ElationEchoPoint"
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
              "displayLines": "0.48"
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
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}