const configAbility = {
  "fileName": "Mydei_Mydeimos_PassiveAbility01_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Adjust Variable Value",
      "adjustmentType": "Add to Value (Default)",
      "variableName": "_EnergyBar_CurrentValue",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "value": {
        "operator": "Variables[0] (MYDEI_OBJECT_UNUSED_8[100]) || INVERT || RETURN",
        "displayLines": "-MYDEI_OBJECT_UNUSED_8[100]",
        "constants": [],
        "variables": [
          "MYDEI_OBJECT_UNUSED_8[100]"
        ]
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "DV_CanTransfer",
      "value": 0
    },
    "Deleted bullshit",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Mydeimos_Transfer[<span class=\"descriptionNumberColor\">Vendetta</span>]"
    },
    {
      "name": "Update Displayed Energy Bar",
      "priorState": "Normal",
      "bar#": 4
    },
    {
      "name": "Heal",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "healPercent": {
        "operator": "Variables[0] (0.25) || RETURN",
        "displayLines": "0.25",
        "constants": [],
        "variables": [
          0.25
        ]
      },
      "formula": "Heal from Target MaxHP"
    },
    {
      "name": "Action Advance/Delay",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "advanceType": "Advance",
      "value": -1
    },
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
          "name": "Assign Advance/Delay to Current Ability Use",
          "adjustmentValue": -1,
          "adjustmentType": "Advance"
        }
      ]
    }
  ],
  "references": []
}