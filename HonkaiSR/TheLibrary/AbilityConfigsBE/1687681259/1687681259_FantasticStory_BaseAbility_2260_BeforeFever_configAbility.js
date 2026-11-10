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
      "variableName": "DV_FantasticStory_BaseAbility_2260_BeforeFever_P1_StatusResDown",
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
      "variableName": "DV_FantasticStory_BaseAbility_2260_BeforeFever_P2_DmgTakenUp",
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
      "variableName": "DV_FantasticStory_BaseAbility_2260_BeforeFever_P3_DebuffThreshold",
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
              "displayLines": "DV_FantasticStory_BaseAbility_2260_BeforeFever_P1_StatusResDown"
            },
            "MDF_DmgTakenUp": {
              "displayLines": "DV_FantasticStory_BaseAbility_2260_BeforeFever_P2_DmgTakenUp"
            },
            "MDF_DebuffThreshold": {
              "displayLines": "DV_FantasticStory_BaseAbility_2260_BeforeFever_P3_DebuffThreshold"
            }
          }
        }
      ]
    }
  ]
}