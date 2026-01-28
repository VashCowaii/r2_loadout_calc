const configAbility = {
  "fileName": "Mydei_Mydeimos_PassiveAbility01_InsertExit",
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
            "name": "Trace Activated",
            "conditionList": "Earth and Water"
          },
          {
            "name": "Compare: Variable",
            "value1": "DV_Tree01_ReviveCount",
            "compareType": ">",
            "value2": 0
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "DV_Tree01_ReviveCount",
          "value": {
            "operator": "Variables[0] (DV_Tree01_ReviveCount) || Constants[0] (1) || SUB || RETURN",
            "displayLines": "(DV_Tree01_ReviveCount - 1)",
            "constants": [
              1
            ],
            "variables": [
              "DV_Tree01_ReviveCount"
            ]
          }
        },
        {
          "name": "Define Modifier Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifierName": "Mydeimos_Trace01[<span class=\"descriptionNumberColor\">Earth and Water</span>]",
          "function": "Add"
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
            "operator": "Variables[0] (DV_HealRatio) || RETURN",
            "displayLines": "DV_HealRatio",
            "constants": [],
            "variables": [
              "DV_HealRatio"
            ]
          },
          "formula": "Heal from Target MaxHP"
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "DV_ReviveCount",
          "value": 0
        },
        {
          "name": "Adjust Variable Value",
          "adjustmentType": "Overwrite Value",
          "variableName": "_EnergyBar_CurrentValue",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": 0
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": 0,
          "maximum": {
            "operator": "Variables[0] (MYDEI_OBJECT_UNUSED_8[100]) || RETURN",
            "displayLines": "MYDEI_OBJECT_UNUSED_8[100]",
            "constants": [],
            "variables": [
              "MYDEI_OBJECT_UNUSED_8[100]"
            ]
          },
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 4
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
            "operator": "Variables[0] (DV_HealRatio) || RETURN",
            "displayLines": "DV_HealRatio",
            "constants": [],
            "variables": [
              "DV_HealRatio"
            ]
          },
          "formula": "Heal from Target MaxHP"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "Mydeimos_Transfer[<span class=\"descriptionNumberColor\">Vendetta</span>]"
        }
      ]
    }
  ],
  "references": []
}