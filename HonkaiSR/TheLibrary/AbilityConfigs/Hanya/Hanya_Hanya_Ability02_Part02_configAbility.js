const configAbility = {
  "fileName": "Hanya_Hanya_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Shot Fired"
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
          "operator": "Variables[0] (2.4) || RETURN",
          "displayLines": "2.4",
          "constants": [],
          "variables": [
            2.4
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
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Ability Value",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
        "compareType": ">",
        "value2": 0
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "ZhanYinCount",
          "value": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "ZhanYinCount_01",
          "value": 0
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (ZhanYinCount) || RETURN",
            "displayLines": "ZhanYinCount",
            "constants": [],
            "variables": [
              "ZhanYinCount"
            ]
          },
          "maximum": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "assignState": "True",
          "priorState": "Active",
          "bar#": 3,
          "cooldown": 0
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "WHanya_BpZhanYin[<span class=\"descriptionNumberColor\">Burden</span>]",
          "valuePerStack": {
            "MDF_Lifetime": {
              "operator": "Variables[0] (2) || RETURN",
              "displayLines": "2",
              "constants": [],
              "variables": [
                2
              ]
            },
            "MDF_DamageUp": {
              "operator": "Variables[0] (0.3) || RETURN",
              "displayLines": "0.3",
              "constants": [],
              "variables": [
                0.3
              ]
            },
            "MDF_DamageUpExtra": {
              "operator": "Variables[0] (0.1) || RETURN",
              "displayLines": "0.1",
              "constants": [],
              "variables": [
                0.1
              ]
            },
            "MDF_RecoverCount": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "MDF_BPRecover": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "WHanya_BpZhanYin_Self"
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}