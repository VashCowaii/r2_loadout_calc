const configAbility = {
  "fileName": "Cyrene_Cyrene_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"1682831339\">Cyrene_ChargeEnergy</a>",
      "variables": {
        "parameter[0]_AddValue": {
          "operator": "Variables[0] (3) || RETURN",
          "displayLines": "3",
          "constants": [],
          "variables": [
            3
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
      "modifier": "<a class=\"gModGreen\" id=\"-1356425425\">Cyrene_Ability02_Bonus_Main</a>[<span class=\"descriptionNumberColor\">Bloom, Elysium of Beyond</span>]",
      "duration": {
        "operator": "Variables[0] (FieldLifeTime) || RETURN",
        "displayLines": "FieldLifeTime",
        "constants": [],
        "variables": [
          "FieldLifeTime"
        ]
      },
      "valuePerStack": {
        "MDF_OriginDamagePercentage": {
          "operator": "Variables[0] (0.24) || RETURN",
          "displayLines": "0.24",
          "constants": [],
          "variables": [
            0.24
          ]
        }
      }
    },
    "Trigger: Ability End"
  ],
  "references": []
}