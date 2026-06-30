const configAbility = {
  "fileName": "-1457052340_FantasticStory_Wave_Ability_0003",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"395811813\">MFantasticStory_Wave_Ability_0003</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-57518302\">MFantasticStory_Wave_Ability_0003_Enemy</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (#ADF_1) || RETURN",
                "displayLines": "#ADF_1",
                "constants": [],
                "variables": [
                  "#ADF_1"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HP%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (#ADF_2) || RETURN",
                "displayLines": "#ADF_2",
                "constants": [],
                "variables": [
                  "#ADF_2"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__395811813\">MFantasticStory_Wave_Ability_0003</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-57518302\">MFantasticStory_Wave_Ability_0003_Enemy</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "New Enemy Wave",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-57518302\">MFantasticStory_Wave_Ability_0003_Enemy</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-57518302\">MFantasticStory_Wave_Ability_0003_Enemy</a>"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}