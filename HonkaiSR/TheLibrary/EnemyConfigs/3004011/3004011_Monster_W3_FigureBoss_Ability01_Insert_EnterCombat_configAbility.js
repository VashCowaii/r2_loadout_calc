const configAbility = {
  "fileName": "3004011_Monster_W3_FigureBoss_Ability01_Insert_EnterCombat",
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
                "value": "W3_Figure_00"
              },
              {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "W3_Figure_01"
              },
              {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "W3_Figure_02"
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
          "modifier": "<a class=\"gModGreen\" id=\"-900182182\">Monster_W3_FigureBoss_Standard_Basic</a>[<span class=\"descriptionNumberColor\">\"Puppets of the Order\"</span>]"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"941590351\">Monster_W3_FigureBoss_Standard_TheChosenOne</a>[<span class=\"descriptionNumberColor\">Impresario</span>]",
      "valuePerStack": {
        "MDF_BreakDelayRatio": {
          "operator": "Variables[0] (P1_BreakDelayRatio) || RETURN",
          "displayLines": "P1_BreakDelayRatio",
          "constants": [],
          "variables": [
            "P1_BreakDelayRatio"
          ]
        },
        "MDF_ChosenOneSpeedUp": {
          "operator": "Variables[0] (P2_ChosenOneSpeedUp) || RETURN",
          "displayLines": "P2_ChosenOneSpeedUp",
          "constants": [],
          "variables": [
            "P2_ChosenOneSpeedUp"
          ]
        },
        "MDF_ExploreDamagePercentage": {
          "operator": "Variables[0] (P3_ExploreDamagePercentage) || RETURN",
          "displayLines": "P3_ExploreDamagePercentage",
          "constants": [],
          "variables": [
            "P3_ExploreDamagePercentage"
          ]
        },
        "MDF_ExploreDelayRatio": {
          "operator": "Variables[0] (P4_ExploreDelayRatio) || RETURN",
          "displayLines": "P4_ExploreDelayRatio",
          "constants": [],
          "variables": [
            "P4_ExploreDelayRatio"
          ]
        },
        "MDF_ExploreDamageUpRatio": {
          "operator": "Variables[0] (P5_ExploreDamageUpRatio) || RETURN",
          "displayLines": "P5_ExploreDamageUpRatio",
          "constants": [],
          "variables": [
            "P5_ExploreDamageUpRatio"
          ]
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
                "value": "W3_Figure_00"
              },
              {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "W3_Figure_01"
              },
              {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "W3_Figure_02"
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
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}