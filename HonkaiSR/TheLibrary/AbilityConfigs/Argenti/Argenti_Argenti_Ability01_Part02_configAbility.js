const configAbility = {
  "fileName": "Argenti_Argenti_Ability01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "value": {
        "operator": "Variables[0] (3) || RETURN",
        "displayLines": "3",
        "constants": [],
        "variables": [
          3
        ]
      },
      "isFixed": "* ERR"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "MDF_Layer",
        "compareType": "<",
        "value2": {
          "operator": "Variables[0] (MDF_MaxCount) || RETURN",
          "displayLines": "MDF_MaxCount",
          "constants": [],
          "variables": [
            "MDF_MaxCount"
          ]
        }
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Argenti_Passive_Charge[<span class=\"descriptionNumberColor\">Apotheosis</span>]",
          "stackLimit": {
            "operator": "Variables[0] (MDF_MaxCount) || RETURN",
            "displayLines": "MDF_MaxCount",
            "constants": [],
            "variables": [
              "MDF_MaxCount"
            ]
          }
        }
      ]
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Physical",
        "Damage": {
          "operator": "Variables[0] (1) || RETURN",
          "displayLines": "1",
          "constants": [],
          "variables": [
            1
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
    "Trigger: Ability End"
  ],
  "references": []
}