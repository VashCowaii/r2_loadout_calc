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
          "displayLines": "3"
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
        "displayLines": "FieldLifeTime"
      },
      "valuePerStack": {
        "MDF_OriginDamagePercentage": {
          "displayLines": "0.24"
        }
      }
    },
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}