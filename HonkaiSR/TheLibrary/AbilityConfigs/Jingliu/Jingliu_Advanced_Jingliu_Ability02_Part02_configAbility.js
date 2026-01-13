const configAbility = {
  "fileName": "Jingliu_Advanced_Jingliu_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Adjust Variable Value",
      "adjustmentType": "Add to Value (Default)",
      "variableName": "Jingliu_MoonFlag",
      "on": "Caster",
      "value": {
        "operator": "Variables[0] (1) || RETURN",
        "displayLines": "1",
        "constants": [],
        "variables": [
          1
        ]
      }
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": {
        "operator": "Variables[0] (Jingliu_MoonFlag) || RETURN",
        "displayLines": "Jingliu_MoonFlag",
        "constants": [],
        "variables": [
          "Jingliu_MoonFlag"
        ]
      },
      "maximum": {
        "operator": "Variables[0] (Jingliu_MoonFlagMax) || RETURN",
        "displayLines": "Jingliu_MoonFlagMax",
        "constants": [],
        "variables": [
          "Jingliu_MoonFlagMax"
        ]
      },
      "assignState": "True",
      "priorState": "Normal",
      "bar#": 3,
      "cooldown": 0
    },
    {
      "name": "Shot Fired",
      "execute": [
        {
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (1.5) || RETURN",
              "displayLines": "1.5",
              "constants": [],
              "variables": [
                1.5
              ]
            },
            "dmgFormula": "Max HP Scaling",
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
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Sword Champion"
      },
      "passed": [
        {
          "name": "Update Energy",
          "on": "Owner of this Modifier",
          "value": {
            "operator": "Variables[0] (15) || RETURN",
            "displayLines": "15",
            "constants": [],
            "variables": [
              15
            ]
          },
          "isFixed": "* ERR"
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}