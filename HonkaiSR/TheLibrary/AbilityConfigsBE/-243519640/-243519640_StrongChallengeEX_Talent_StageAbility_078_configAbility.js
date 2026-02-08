const configAbility = {
  "fileName": "-243519640_StrongChallengeEX_Talent_StageAbility_078",
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
      "modifier": "<a class=\"gModGreen\" id=\"-451765459\">MStrongChallengeEX_Talent_StageAbility_LE_078</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1274603781\">MStrongChallengeEX_Talent_StageAbility_PLY_078</a>",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team"
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                      "value": "-MDF_IgnoreDEF"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-451765459\">MStrongChallengeEX_Talent_StageAbility_LE_078</a>",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Far Left Player Entity(no Memosprite)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1274603781\">MStrongChallengeEX_Talent_StageAbility_PLY_078</a>",
              "valuePerStack": {
                "MDF_IgnoreDEF": {
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
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}