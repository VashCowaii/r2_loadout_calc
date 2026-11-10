const configAbility = {
  "fileName": "1687681259_FantasticStory_BaseAbility_2310_BeforeFever",
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
      "variableName": "DV_FantasticStory_BaseAbility_2310_BeforeFever_P1_AtkRatio",
      "resetValue": {
        "displayLines": "ADF_1_Get"
      },
      "scope": "ContextCaster"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "DV_FantasticStory_BaseAbility_2310_BeforeFever_P2_HPRatio",
      "resetValue": {
        "displayLines": "ADF_2_Get"
      },
      "scope": "ContextCaster"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "DV_FantasticStory_BaseAbility_2310_BeforeFever_P3_FeverDmgUp",
      "resetValue": {
        "displayLines": "ADF_3_Get"
      },
      "scope": "ContextCaster"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1675056280\">Modifier_FantasticStory_BaseAbility_2310_BeforeFever</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1675056280\">Modifier_FantasticStory_BaseAbility_2310_BeforeFever</a>",
      "stackType": "ReplaceByCaster",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"300898857\">Modifier_FantasticStory_BaseAbility_2310_BeforeFever_ForShow</a>[<span class=\"descriptionNumberColor\">Concordant Truce</span>]",
          "haloStatus": true
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1434809141\">Modifier_FantasticStory_BaseAbility_2310_BeforeFever_Sub</a>",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_AtkRatio": {
              "displayLines": "DV_FantasticStory_BaseAbility_2310_BeforeFever_P1_AtkRatio"
            },
            "MDF_HPRatio": {
              "displayLines": "DV_FantasticStory_BaseAbility_2310_BeforeFever_P2_HPRatio"
            },
            "MDF_FeverDmgUp": {
              "displayLines": "DV_FantasticStory_BaseAbility_2310_BeforeFever_P3_FeverDmgUp"
            }
          }
        }
      ]
    }
  ]
}