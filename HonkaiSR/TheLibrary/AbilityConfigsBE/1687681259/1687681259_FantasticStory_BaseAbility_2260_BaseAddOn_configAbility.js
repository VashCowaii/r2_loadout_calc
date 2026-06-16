const configAbility = {
  "fileName": "1687681259_FantasticStory_BaseAbility_2260_BaseAddOn",
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
      "variableName": "DV_FantasticStory_BaseAbility_2260_BaseAddOn_P1_Ratio",
      "value": {
        "operator": "Variables[0] (ADF_1_Get) || Constants[0] (100) || DIV || RETURN",
        "displayLines": "(ADF_1_Get / 100)",
        "constants": [
          100
        ],
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
      "variableName": "DV_FantasticStory_BaseAbility_2260_BaseAddOn_P2_MaxTrigger",
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
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"785773494\">Modifier_FantasticStory_BaseAbility_2260_BaseAddOn</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__785773494\">Modifier_FantasticStory_BaseAbility_2260_BaseAddOn</a>",
      "stackType": "ReplaceByCaster",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1976624211\">Modifier_FantasticStory_BaseAbility_2260_BaseAddOn_ForShow</a>[<span class=\"descriptionNumberColor\">Grit Mechanics</span>]",
          "haloStatus": true,
          "valuePerStack": {
            "DV_Ratio": {
              "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2260_BaseAddOn_P1_Ratio) || Constants[0] (100) || MUL || RETURN",
              "displayLines": "(DV_FantasticStory_BaseAbility_2260_BaseAddOn_P1_Ratio * 100)",
              "constants": [
                100
              ],
              "variables": [
                "DV_FantasticStory_BaseAbility_2260_BaseAddOn_P1_Ratio"
              ]
            },
            "DV_MaxTrigger": {
              "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2260_BaseAddOn_P2_MaxTrigger) || RETURN",
              "displayLines": "DV_FantasticStory_BaseAbility_2260_BaseAddOn_P2_MaxTrigger",
              "constants": [],
              "variables": [
                "DV_FantasticStory_BaseAbility_2260_BaseAddOn_P2_MaxTrigger"
              ]
            }
          }
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2031644054\">Modifier_FantasticStory_BaseAbility_2260_BaseAddOn_Track</a>",
          "haloStatus": true
        }
      ]
    }
  ]
}