const configAbility = {
  "fileName": "MortenaxBlade_MortenaxBlade_PassiveAbility_Exit",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-476778637\">G_MortenaxBlade_Super</a>[<span class=\"descriptionNumberColor\">Infinite Fury</span>]"
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": {
        "operator": "Variables[0] (G_EnergyCount) || RETURN",
        "displayLines": "G_EnergyCount",
        "constants": [],
        "variables": [
          "G_EnergyCount"
        ]
      },
      "priorState": "Disable"
    },
    {
      "name": "Automatically use Ultimate",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"66427170\">G_MortenaxBlade_AbilityChange01</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2094246819\">G_MortenaxBlade_BanBP</a>"
    },
    {
      "name": "Dispel Debuffs",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "silent": true
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "value1": "CurrentHP%",
        "compareType": "<=",
        "value2": 0
      },
      "passed": [
        {
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "healer": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "healPercent": {
            "operator": "Variables[0] (0.5) || RETURN",
            "displayLines": "0.5",
            "constants": [],
            "variables": [
              0.5
            ]
          },
          "formula": "Heal from Target MaxHP"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Trace Activated",
            "conditionList": "Bone, Hardened ad Nauseam"
          },
          {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "value1": "Energy%",
            "compareType": "<",
            "value2": {
              "operator": "Variables[0] (0.75) || RETURN",
              "displayLines": "0.75",
              "constants": [],
              "variables": [
                0.75
              ]
            }
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "_MaxSP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;",
          "context": "ContextAbility"
        },
        {
          "name": "Update Energy Value",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": {
            "operator": "Variables[0] (_MaxSP) || Variables[1] (0.75) || MUL || RETURN",
            "displayLines": "(_MaxSP * 0.75)",
            "constants": [],
            "variables": [
              "_MaxSP",
              0.75
            ]
          },
          "adjustment": "Set"
        }
      ]
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  }
}