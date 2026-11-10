const configAbility = {
  "fileName": "-825953332_FantasticStory_BaseAbility_2110_EnterFever",
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
      "variableName": "DV_FantasticStory_BaseAbility_2110_EnterFever_P1_Ratio",
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
      "variableName": "DV_FantasticStory_BaseAbility_2110_EnterFever_P2_Ratio",
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
      "variableName": "DV_FantasticStory_BaseAbility_2110_EnterFever_P3_Ratio",
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
      "modifier": "<a class=\"gModGreen\" id=\"-153051417\">Modifier_FantasticStory_BaseAbility_2110_EnterFever</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-153051417\">Modifier_FantasticStory_BaseAbility_2110_EnterFever</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1923363748\">Modifier_FantasticStory_BaseAbility_2110_aura</a>"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-277929062\">Modifier_FantasticStory_BaseAbility_2110_EnterFever_sub</a>[<span class=\"descriptionNumberColor\">Surging Grit</span>]",
                  "valuePerStack": {
                    "DV_Ratio_Get": {
                      "displayLines": "DV_FantasticStory_BaseAbility_2110_EnterFever_P2_Ratio"
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "priorityLevel": -90,
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Wave Count",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "variableName": "EntityCurrentSP",
                  "scope": "TargetEntity"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "variableName": "EntityStockSP",
                  "scope": "TargetEntity"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "variableName": "EntityMaxSP",
                  "scope": "TargetEntity"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Modifier is Added [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"1923363748\">Modifier_FantasticStory_BaseAbility_2110_aura</a>"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-277929062\">Modifier_FantasticStory_BaseAbility_2110_EnterFever_sub</a>[<span class=\"descriptionNumberColor\">Surging Grit</span>]",
                  "valuePerStack": {
                    "DV_Ratio_Get": {
                      "displayLines": "DV_FantasticStory_BaseAbility_2110_EnterFever_P2_Ratio"
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Losing Modifier [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"1923363748\">Modifier_FantasticStory_BaseAbility_2110_aura</a>"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-277929062\">Modifier_FantasticStory_BaseAbility_2110_EnterFever_sub</a>[<span class=\"descriptionNumberColor\">Surging Grit</span>]"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}