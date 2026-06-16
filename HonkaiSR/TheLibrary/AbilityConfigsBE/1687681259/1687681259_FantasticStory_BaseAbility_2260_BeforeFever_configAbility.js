const configAbility = {
  "fileName": "1687681259_FantasticStory_BaseAbility_2260_BeforeFever",
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
      "variableName": "DV_FantasticStory_BaseAbility_2260_BeforeFever_P1_StatusResDown",
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
      "variableName": "DV_FantasticStory_BaseAbility_2260_BeforeFever_P2_DmgTakenUp",
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
      "variableName": "DV_FantasticStory_BaseAbility_2260_BeforeFever_P3_DebuffThreshold",
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
      "modifier": "<a class=\"gModGreen\" id=\"743348896\">Modifier_FantasticStory_BaseAbility_2260_BeforeFever</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__743348896\">Modifier_FantasticStory_BaseAbility_2260_BeforeFever</a>",
      "stackType": "ReplaceByCaster",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1886108113\">Modifier_FantasticStory_BaseAbility_2260_BeforeFever_ForShow</a>[<span class=\"descriptionNumberColor\">Concordant Truce</span>]",
          "haloStatus": true
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-369186009\">Modifier_FantasticStory_BaseAbility_2260_BeforeFever_StatusRes</a>",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_StatusResDown": {
              "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2260_BeforeFever_P1_StatusResDown) || RETURN",
              "displayLines": "DV_FantasticStory_BaseAbility_2260_BeforeFever_P1_StatusResDown",
              "constants": [],
              "variables": [
                "DV_FantasticStory_BaseAbility_2260_BeforeFever_P1_StatusResDown"
              ]
            },
            "MDF_DmgTakenUp": {
              "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2260_BeforeFever_P2_DmgTakenUp) || RETURN",
              "displayLines": "DV_FantasticStory_BaseAbility_2260_BeforeFever_P2_DmgTakenUp",
              "constants": [],
              "variables": [
                "DV_FantasticStory_BaseAbility_2260_BeforeFever_P2_DmgTakenUp"
              ]
            },
            "MDF_DebuffThreshold": {
              "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2260_BeforeFever_P3_DebuffThreshold) || RETURN",
              "displayLines": "DV_FantasticStory_BaseAbility_2260_BeforeFever_P3_DebuffThreshold",
              "constants": [],
              "variables": [
                "DV_FantasticStory_BaseAbility_2260_BeforeFever_P3_DebuffThreshold"
              ]
            }
          }
        }
      ]
    }
  ]
}