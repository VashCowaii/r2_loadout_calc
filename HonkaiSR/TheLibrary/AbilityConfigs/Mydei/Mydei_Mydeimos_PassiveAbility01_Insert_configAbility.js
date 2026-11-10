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
        "displayLines": "-MYDEI_OBJECT_UNUSED_8[100]"
      }
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "DV_CanTransfer"
    },
    "Deleted bullshit",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1763336434\">Mydeimos_Transfer</a>[<span class=\"descriptionNumberColor\">Vendetta</span>]"
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
        "displayLines": "0.25"
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
      "multiAdd": -1
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
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  }
}