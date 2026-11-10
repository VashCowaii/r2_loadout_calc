const configAbility = {
  "fileName": "-243519640_StrongChallengeEX_Talent_StageAbility_077",
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
      "modifier": "<a class=\"gModGreen\" id=\"-703429744\">MStrongChallengeEX_Talent_StageAbility_LE_077</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1291381400\">MStrongChallengeEX_Talent_StageAbility_PLY_077</a>[<span class=\"descriptionNumberColor\">Shatterstrike</span>]",
      "description": "Increases Break DMG dealt by <span class=\"descriptionNumberColor\">MDF_PropertyValue5</span>.",
      "type": "Buff",
      "statusName": "Shatterstrike",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "Break DMG"
                ]
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakMulti</span>&nbsp;",
                      "value": "MDF_PropertyValue5"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(MDF_PropertyValue + (MDF_PropertyValue2 * MDF_PropertyValue4))"
              },
              "variableName": "MDF_PropertyValue5"
            }
          ]
        },
        {
          "eventTrigger": "Weakness Break [Anyone]",
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
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_PropertyValue4",
                  "context": "ContextModifier",
                  "value": 1,
                  "max": {
                    "displayLines": "MDF_PropertyValue3"
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(MDF_PropertyValue + (MDF_PropertyValue2 * MDF_PropertyValue4))"
                  },
                  "variableName": "MDF_PropertyValue5"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-703429744\">MStrongChallengeEX_Talent_StageAbility_LE_077</a>",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1291381400\">MStrongChallengeEX_Talent_StageAbility_PLY_077</a>[<span class=\"descriptionNumberColor\">Shatterstrike</span>]",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_PropertyValue": {
              "displayLines": "#ADF_1"
            },
            "MDF_PropertyValue2": {
              "displayLines": "#ADF_2"
            },
            "MDF_PropertyValue3": {
              "displayLines": "#ADF_3"
            },
            "MDF_PropertyValue4": {
              "displayLines": "MDF_BreakCount"
            }
          }
        }
      ],
      "execute": [
        {
          "eventTrigger": "Weakness Break [Anyone]",
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
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_BreakCount",
                  "value": 1,
                  "max": {
                    "displayLines": "#ADF_3"
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