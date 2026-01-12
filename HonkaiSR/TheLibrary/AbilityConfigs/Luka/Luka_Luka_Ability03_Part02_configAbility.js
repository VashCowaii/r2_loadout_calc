const configAbility = {
  "fileName": "Luka_Luka_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Has Flag",
            "target": "Single Target (Primary)",
            "flagName": "STAT_DOT_Bleed"
          },
          {
            "name": "Eidolon Activated",
            "eidolon": 1
          }
        ]
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Luka_Eidolon1_Sub[<span class=\"descriptionNumberColor\">Fighting Endlessly</span>]",
          "duration": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "stackLimit": 1,
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (0.15) || RETURN",
              "displayLines": "0.15",
              "constants": [],
              "variables": [
                0.15
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Luka_ReloadBullet",
      "valuePerStack": {
        "MDF_AddValue": {
          "operator": "Variables[0] (2) || RETURN",
          "displayLines": "2",
          "constants": [],
          "variables": [
            2
          ]
        }
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": "Single Target (Primary)",
      "modifier": "Luka_AllDamageTypeTakenRatio[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
      "duration": {
        "operator": "Variables[0] (3) || RETURN",
        "displayLines": "3",
        "constants": [],
        "variables": [
          3
        ]
      },
      "baseChance": {
        "operator": "Variables[0] (1) || RETURN",
        "displayLines": "1",
        "constants": [],
        "variables": [
          1
        ]
      },
      "valuePerStack": {
        "MDF_PropertyValue": {
          "operator": "Variables[0] (0.2) || RETURN",
          "displayLines": "0.2",
          "constants": [],
          "variables": [
            0.2
          ]
        }
      }
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": {
        "operator": "Variables[0] (BulletCount) || RETURN",
        "displayLines": "BulletCount",
        "constants": [],
        "variables": [
          "BulletCount"
        ]
      },
      "maximum": {
        "operator": "Constants[0] (4) || RETURN",
        "displayLines": "4",
        "constants": [
          4
        ],
        "variables": []
      },
      "assignState": "True",
      "priorState": "Active",
      "bar#": 3,
      "cooldown": 0
    },
    {
      "name": "ATK Scaling DMG",
      "target": "Single Target (Primary)",
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Physical",
        "Damage": {
          "operator": "Variables[0] (3.3) || RETURN",
          "displayLines": "3.3",
          "constants": [],
          "variables": [
            3.3
          ]
        },
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || RETURN",
          "displayLines": "ST Toughness Value",
          "constants": [],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    "Trigger: Skip Death Handling",
    "Trigger: Ability End"
  ],
  "references": []
}