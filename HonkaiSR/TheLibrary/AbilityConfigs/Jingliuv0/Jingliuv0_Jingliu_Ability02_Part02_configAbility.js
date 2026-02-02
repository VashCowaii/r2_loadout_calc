const configAbility = {
  "fileName": "Jingliuv0_Jingliu_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Adjust Variable Value",
      "adjustmentType": "Add to Value (Default)",
      "variableName": "Jingliu_MoonFlag",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
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
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (2) || RETURN",
              "displayLines": "2",
              "constants": [],
              "variables": [
                2
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
          "name": "IF",
          "conditions": {
            "name": "Is Extra-Turn"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Current Turn Is",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Jingliu_Trace02_ModifyAction"
                }
              ],
              "failed": [
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "advanceType": "Advance",
                  "multi": "-15"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Assign Advance/Delay to Current Ability Use",
              "adjustmentValue": {
                "operator": "Variables[0] (15) || INVERT || RETURN",
                "displayLines": "-15",
                "constants": [],
                "variables": [
                  15
                ]
              },
              "adjustmentType": "Advance"
            }
          ]
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}