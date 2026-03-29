const configAbility = {
  "fileName": "YaoGuang_YaoGuang_Eidolon1",
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
      "modifier": "<a class=\"gModGreen\" id=\"713758980\">YaoGuang_Eidolon1</a>"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "G_Rank01_AddedElationPoint",
      "value": {
        "operator": "Variables[0] (40) || Variables[1] (20) || SUB || RETURN",
        "displayLines": "(40 - 20)",
        "constants": [],
        "variables": [
          40,
          20
        ]
      }
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__713758980\">YaoGuang_Eidolon1</a>",
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
          "modifier": "<a class=\"gModGreen\" id=\"-848491430\">G_YaoGuang_Eidolon1_Bonus</a>[<span class=\"descriptionNumberColor\">Chuckle Chimes Where Jade Falls</span>]",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (0.2) || RETURN",
              "displayLines": "0.2",
              "constants": [],
              "variables": [
                0.2
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