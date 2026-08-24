const configAbility = {
  "fileName": "1687681259_FantasticStory_BaseAbility_2310_BaseAddOn",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextCaster",
      "variableName": "DV_FantasticStory_BaseAbility_2310_BaseAddOn_P1_Charge",
      "value": {
        "operator": "Variables[0] (ADF_1_Get) || RETURN",
        "displayLines": "ADF_1_Get",
        "constants": [],
        "variables": [
          "ADF_1_Get"
        ]
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1941271554\">Modifier_FantasticStory_BaseAbility_2310_BaseAddOn</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1941271554\">Modifier_FantasticStory_BaseAbility_2310_BaseAddOn</a>",
      "stackType": "ReplaceByCaster",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"884439899\">Modifier_FantasticStory_BaseAbility_2310_BaseAddOn_ForShow</a>[<span class=\"descriptionNumberColor\">Grit Mechanics</span>]",
          "haloStatus": true,
          "valuePerStack": {
            "DV_Charge": {
              "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2310_BaseAddOn_P1_Charge) || RETURN",
              "displayLines": "DV_FantasticStory_BaseAbility_2310_BaseAddOn_P1_Charge",
              "constants": [],
              "variables": [
                "DV_FantasticStory_BaseAbility_2310_BaseAddOn_P1_Charge"
              ]
            }
          }
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-70148078\">Modifier_FantasticStory_BaseAbility_2310_BaseAddOn_Track</a>",
          "haloStatus": true
        }
      ]
    }
  ]
}