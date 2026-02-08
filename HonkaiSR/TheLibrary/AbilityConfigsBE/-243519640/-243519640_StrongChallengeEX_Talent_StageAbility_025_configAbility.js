const configAbility = {
  "fileName": "-243519640_StrongChallengeEX_Talent_StageAbility_025",
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
      "modifier": "<a class=\"gModGreen\" id=\"-469381721\">MStrongChallengeEX_Talent_StageAbility_LE_025</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1158886449\">MStrongChallengeEX_Talent_StageAbility_PLY_025</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "Ultimate"
                ]
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakEfficiency</span>&nbsp;",
                      "value": "MDF_Ultra_DefaultStanceBreakRatio"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "skillType": "Ultimate",
        "conditions": {
          "name": "Is Weak to Attacker",
          "weakTo": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          }
        },
        "toughnessReductionPreview": {
          "operator": "Variables[0] (MDF_Ultra_DefaultStanceBreakRatio) || RETURN",
          "displayLines": "MDF_Ultra_DefaultStanceBreakRatio",
          "constants": [],
          "variables": [
            "MDF_Ultra_DefaultStanceBreakRatio"
          ]
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-469381721\">MStrongChallengeEX_Talent_StageAbility_LE_025</a>",
      "execute": [
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Player Team"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1158886449\">MStrongChallengeEX_Talent_StageAbility_PLY_025</a>",
                  "valuePerStack": {
                    "MDF_Ultimate_DefaultStanceBreakRatio": {
                      "operator": "Variables[0] (#ADF_1) || RETURN",
                      "displayLines": "#ADF_1",
                      "constants": [],
                      "variables": [
                        "#ADF_1"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}