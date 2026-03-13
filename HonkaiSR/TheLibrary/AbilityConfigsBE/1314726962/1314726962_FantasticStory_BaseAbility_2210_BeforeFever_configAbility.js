const configAbility = {
  "fileName": "1314726962_FantasticStory_BaseAbility_2210_BeforeFever",
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
      "variableName": "DV_FantasticStory_BaseAbility_2210_BeforeFever_P1_MaxCount",
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
      "variableName": "DV_FantasticStory_BaseAbility_2210_BeforeFever_P2_Ratio",
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
      "variableName": "DV_FantasticStory_BaseAbility_2210_BeforeFever_P3_ElationPoint",
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
      "modifier": "<a class=\"gModGreen\" id=\"-1066119889\">Modifier_FantasticStory_BaseAbility_2210_BeforeFever</a>"
    },
    {
      "name": "Add Battle Event",
      "teamName": "Neutral Team",
      "eventID": 30505,
      "variables": {
        "Ability01_P1_HitCount": {
          "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2210_BeforeFever_P1_MaxCount) || RETURN",
          "displayLines": "DV_FantasticStory_BaseAbility_2210_BeforeFever_P1_MaxCount",
          "constants": [],
          "variables": [
            "DV_FantasticStory_BaseAbility_2210_BeforeFever_P1_MaxCount"
          ]
        },
        "Ability01_P2_DamagePercentage": {
          "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2210_BeforeFever_P2_Ratio) || RETURN",
          "displayLines": "DV_FantasticStory_BaseAbility_2210_BeforeFever_P2_Ratio",
          "constants": [],
          "variables": [
            "DV_FantasticStory_BaseAbility_2210_BeforeFever_P2_Ratio"
          ]
        }
      }
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1066119889\">Modifier_FantasticStory_BaseAbility_2210_BeforeFever</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Entity Death [Anyone]",
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
                  }
                ]
              },
              "passed": [
                {
                  "name": "Adjust Team Punchline Value",
                  "value": {
                    "operator": "Variables[0] (DV_FantasticStory_BaseAbility_2210_BeforeFever_P3_ElationPoint) || RETURN",
                    "displayLines": "DV_FantasticStory_BaseAbility_2210_BeforeFever_P3_ElationPoint",
                    "constants": [],
                    "variables": [
                      "DV_FantasticStory_BaseAbility_2210_BeforeFever_P3_ElationPoint"
                    ]
                  },
                  "adjustment": "Add"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1855869842\">Modifier_FantasticStory_BaseAbility_2210_BeforeFever_ForShow</a>[<span class=\"descriptionNumberColor\">Concordant Truce</span>]",
          "haloStatus": true
        }
      ]
    }
  ]
}