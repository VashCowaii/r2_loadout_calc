const configAbility = {
  "fileName": "3004012_Monster_W3_DollElite_Standard_Ability01_Insert_EnterCombat",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "searchRandom": true,
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "OR",
            "conditionList": [
              {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "variableName": "W3_Figure_00"
              },
              {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "variableName": "W3_Figure_01"
              },
              {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "variableName": "W3_Figure_02"
              }
            ]
          }
        ]
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1336534629\">Enemy_W3_DollElite_Commnon_Basic</a>[<span class=\"descriptionNumberColor\">\"Puppets of the Order\"</span>]"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-607059020\">Enemy_W3_DollElite_Commnon_TheChosenOne</a>[<span class=\"descriptionNumberColor\">Impresario</span>]",
      "valuePerStack": {
        "MDF_BreakDelayRatio": {
          "displayLines": "P1_BreakDelayRatio"
        },
        "MDF_ChosenOneSpeedUp": {
          "displayLines": "P2_ChosenOneSpeedUp"
        },
        "MDF_ExploreDamagePercentage": {
          "displayLines": "P3_ExploreDamagePercentage"
        },
        "MDF_ExploreDelayRatio": {
          "displayLines": "P4_ExploreDelayRatio"
        },
        "MDF_ExploreDamageUpRatio": {
          "displayLines": "P5_ExploreDamageUpRatio"
        }
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Enemy ID",
        "ID": 300401000,
        "target": {
          "name": "Add Target by Unique Identifier",
          "identifier": "DollBoss"
        },
        "characterName": null
      },
      "passed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "variableName": "W3_Figure_00"
              },
              {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "variableName": "W3_Figure_01"
              },
              {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "variableName": "W3_Figure_02"
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1202391577\">Enemy_W3_FigureBoss_SaveModel</a>"
            }
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1202391577\">Enemy_W3_FigureBoss_SaveModel</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ]
    }
  ]
}