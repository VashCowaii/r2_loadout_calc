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
              "variableName": "MDF_PropertyValue5",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue) || Variables[1] (MDF_PropertyValue2) || Variables[2] (MDF_PropertyValue4) || MUL || ADD || RETURN",
                "displayLines": "(MDF_PropertyValue + (MDF_PropertyValue2 * MDF_PropertyValue4))",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue",
                  "MDF_PropertyValue2",
                  "MDF_PropertyValue4"
                ]
              }
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
                    "operator": "Variables[0] (MDF_PropertyValue3) || RETURN",
                    "displayLines": "MDF_PropertyValue3",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue3"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PropertyValue5",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || Variables[1] (MDF_PropertyValue2) || Variables[2] (MDF_PropertyValue4) || MUL || ADD || RETURN",
                    "displayLines": "(MDF_PropertyValue + (MDF_PropertyValue2 * MDF_PropertyValue4))",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue",
                      "MDF_PropertyValue2",
                      "MDF_PropertyValue4"
                    ]
                  }
                }
              ]
            }
          ]
        }
      ],
      "description": "Increases Break DMG dealt by <span class=\"descriptionNumberColor\">MDF_PropertyValue5</span>.",
      "type": "Buff",
      "statusName": "Shatterstrike"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-703429744\">MStrongChallengeEX_Talent_StageAbility_LE_077</a>",
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
                    "operator": "Variables[0] (#ADF_3) || RETURN",
                    "displayLines": "#ADF_3",
                    "constants": [],
                    "variables": [
                      "#ADF_3"
                    ]
                  }
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
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1291381400\">MStrongChallengeEX_Talent_StageAbility_PLY_077</a>[<span class=\"descriptionNumberColor\">Shatterstrike</span>]",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (#ADF_1) || RETURN",
              "displayLines": "#ADF_1",
              "constants": [],
              "variables": [
                "#ADF_1"
              ]
            },
            "MDF_PropertyValue2": {
              "operator": "Variables[0] (#ADF_2) || RETURN",
              "displayLines": "#ADF_2",
              "constants": [],
              "variables": [
                "#ADF_2"
              ]
            },
            "MDF_PropertyValue3": {
              "operator": "Variables[0] (#ADF_3) || RETURN",
              "displayLines": "#ADF_3",
              "constants": [],
              "variables": [
                "#ADF_3"
              ]
            },
            "MDF_PropertyValue4": {
              "operator": "Variables[0] (MDF_BreakCount) || RETURN",
              "displayLines": "MDF_BreakCount",
              "constants": [],
              "variables": [
                "MDF_BreakCount"
              ]
            }
          }
        }
      ]
    }
  ]
}