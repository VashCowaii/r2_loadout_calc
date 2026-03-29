const configAbility = {
  "fileName": "YaoGuang_YaoGuang_Eidolon6",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"696981361\">YaoGuang_Eidolon6</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__696981361\">YaoGuang_Eidolon6</a>",
      "stackType": "ReplaceByCaster",
      "stackData": [],
      "latentQueue": [],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-986503251\">G_YaoGuang_Eidolon6_Bonus</a>[<span class=\"descriptionNumberColor\">Ferried Along the Astral Arc</span>]",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (0.25) || RETURN",
              "displayLines": "0.25",
              "constants": [],
              "variables": [
                0.25
              ]
            }
          }
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  }
}