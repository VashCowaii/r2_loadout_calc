const configAbility = {
  "fileName": "-243519640_StrongChallengeEX_Talent_StageAbility_026",
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
      "modifier": "<a class=\"gModGreen\" id=\"-452604102\">MStrongChallengeEX_Talent_StageAbility_LE_026</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1142108830\">MStrongChallengeEX_Talent_StageAbility_PLY_026</a>",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
              "statValue": {
                "displayLines": "MDF_PropertyValue"
              }
            }
          ]
        },
        {
          "eventTrigger": "Caused Weakness Break [Owner]",
          "execute": [
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "value": {
                "displayLines": "MDF_FixedAddValue"
              },
              "isFixed": "(Fixed)"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-452604102\">MStrongChallengeEX_Talent_StageAbility_LE_026</a>",
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
                    "team": "Player Team"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1142108830\">MStrongChallengeEX_Talent_StageAbility_PLY_026</a>",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "displayLines": "#ADF_1"
                    },
                    "MDF_FixedAddValue": {
                      "displayLines": "#ADF_2"
                    }
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}