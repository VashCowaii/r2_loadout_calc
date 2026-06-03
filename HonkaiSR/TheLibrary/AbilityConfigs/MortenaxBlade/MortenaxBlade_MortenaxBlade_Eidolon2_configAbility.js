const configAbility = {
  "fileName": "MortenaxBlade_MortenaxBlade_Eidolon2",
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
      "modifier": "<a class=\"gModGreen\" id=\"1805989258\">MortenaxBlade_Eidolon2</a>",
      "valuePerStack": {
        "MDF_PropertyValue": {
          "operator": "Variables[0] (0.75) || RETURN",
          "displayLines": "0.75",
          "constants": [],
          "variables": [
            0.75
          ]
        }
      }
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1805989258\">MortenaxBlade_Eidolon2</a>",
      "stackType": "ReplaceByCaster",
      "stackData": [
        "MDF_PropertyValue"
      ],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)}}.[[removeBattleEvents]] - {{Player Team All(with Unselectable)}}.[[getMemosprite]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1514536546\">G_MortenaxBlade_Eidolon2_ToMember</a>[<span class=\"descriptionNumberColor\">Ash Was My Heart, Yet the Flame Stayed</span>]",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
              "displayLines": "MDF_PropertyValue",
              "constants": [],
              "variables": [
                "MDF_PropertyValue"
              ]
            }
          }
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)}}.[[getMemosprite]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1517379816\">G_MortenaxBlade_Eidolon2_ToOtherMember</a>[<span class=\"descriptionNumberColor\">Ash Was My Heart, Yet the Flame Stayed</span>]",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
              "displayLines": "MDF_PropertyValue",
              "constants": [],
              "variables": [
                "MDF_PropertyValue"
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