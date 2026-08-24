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
      "scope": "ContextCaster",
      "variableName": "DV_FantasticStory_BaseAbility_2310_BeforeFever_P1_AtkRatio",
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
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextCaster",
      "variableName": "DV_FantasticStory_BaseAbility_2310_BeforeFever_P2_HPRatio",
      "value": {
        "operator": "Variables[0] (ADF_2_Get) || RETURN",
        "displayLines": "ADF_2_Get",
        "constants": [],
        "variables": [
          "ADF_2_Get"
        ]
      }
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextCaster",
      "variableName": "DV_FantasticStory_BaseAbility_2310_BeforeFever_P3_FeverDmgUp",
      "value": {
        "operator": "Variables[0] (ADF_3_Get) || RETURN",
        "displayLines": "ADF_3_Get",
        "constants": [],
        "variables": [
          "ADF_3_Get"
        ]
      }
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
              "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2310_BeforeFever_P1_AtkRatio) || RETURN",
              "displayLines": "DV_FantasticStory_BaseAbility_2310_BeforeFever_P1_AtkRatio",
              "constants": [],
              "variables": [
                "DV_FantasticStory_BaseAbility_2310_BeforeFever_P1_AtkRatio"
              ]
            },
            "MDF_HPRatio": {
              "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2310_BeforeFever_P2_HPRatio) || RETURN",
              "displayLines": "DV_FantasticStory_BaseAbility_2310_BeforeFever_P2_HPRatio",
              "constants": [],
              "variables": [
                "DV_FantasticStory_BaseAbility_2310_BeforeFever_P2_HPRatio"
              ]
            },
            "MDF_FeverDmgUp": {
              "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2310_BeforeFever_P3_FeverDmgUp) || RETURN",
              "displayLines": "DV_FantasticStory_BaseAbility_2310_BeforeFever_P3_FeverDmgUp",
              "constants": [],
              "variables": [
                "DV_FantasticStory_BaseAbility_2310_BeforeFever_P3_FeverDmgUp"
              ]
            }
          }
        }
      ]
    }
  ]
}