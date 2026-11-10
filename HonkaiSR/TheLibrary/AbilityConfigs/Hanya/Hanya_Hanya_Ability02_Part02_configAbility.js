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
          "displayLines": "2.4"
        },
        "Toughness": {
          "displayLines": "ST Toughness Value"
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
          "value": {
            "displayLines": "2"
          },
          "variableName": "ZhanYinCount"
        },
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "ZhanYinCount_01"
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "displayLines": "ZhanYinCount"
          },
          "maximum": {
            "displayLines": "2"
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
          "modifier": "<a class=\"gModGreen\" id=\"1376832164\">WHanya_BpZhanYin</a>[<span class=\"descriptionNumberColor\">Burden</span>]",
          "valuePerStack": {
            "MDF_Lifetime": {
              "displayLines": "2"
            },
            "MDF_DamageUp": {
              "displayLines": "0.3"
            },
            "MDF_DamageUpExtra": {
              "displayLines": "0.1"
            },
            "MDF_RecoverCount": {
              "displayLines": "1"
            },
            "MDF_BPRecover": {
              "displayLines": "1"
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1118030779\">WHanya_BpZhanYin_Self</a>"
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}