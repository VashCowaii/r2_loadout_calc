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
      "variableName": "DV_FantasticStory_BaseAbility_2310_BaseAddOn_P1_Charge",
      "resetValue": {
        "displayLines": "ADF_1_Get"
      },
      "scope": "ContextCaster"
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
              "displayLines": "DV_FantasticStory_BaseAbility_2310_BaseAddOn_P1_Charge"
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