const configAbility = {
  "fileName": "-243519640_StrongChallengeEX_Talent_StageAbility_081",
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
      "modifier": "<a class=\"gModGreen\" id=\"-604588411\">MStrongChallengeEX_Talent_StageAbility_LE_081</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1435721852\">MStrongChallengeEX_Talent_StageAbility_PLY_081_Extra</a>[<span class=\"descriptionNumberColor\">Whirlwind Turn</span>]",
      "stackType": "Replace",
      "description": "SPD increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue2</span>.",
      "type": "Buff",
      "statusName": "Whirlwind Turn",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "statValue": {
                "displayLines": "MDF_PropertyValue2"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1392885757\">MStrongChallengeEX_Talent_StageAbility_PLY_081</a>",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Attack Targets of Modifier Holder}}"
              },
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable with Varying Value SUM",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "_DotNumber",
                  "value": "STAT_DOT",
                  "valueType": "Amount"
                },
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
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "_DotNumber",
                        "compareType": ">=",
                        "value2": {
                          "displayLines": "MDF_PropertyValue"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": 1,
                      "variableName": "TriggerFlag"
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "TriggerFlag",
                    "compareType": ">=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1435721852\">MStrongChallengeEX_Talent_StageAbility_PLY_081_Extra</a>[<span class=\"descriptionNumberColor\">Whirlwind Turn</span>]",
                  "duration": {
                    "displayLines": "MDF_PropertyValue3"
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue2": {
                      "displayLines": "MDF_PropertyValue2"
                    }
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "TriggerFlag"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-604588411\">MStrongChallengeEX_Talent_StageAbility_LE_081</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"1392885757\">MStrongChallengeEX_Talent_StageAbility_PLY_081</a>",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "displayLines": "#ADF_1"
                    },
                    "MDF_PropertyValue2": {
                      "displayLines": "#ADF_2"
                    },
                    "MDF_PropertyValue3": {
                      "displayLines": "#ADF_3"
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