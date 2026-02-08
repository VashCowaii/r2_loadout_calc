const configAbility = {
  "fileName": "-243519640_StrongChallengeEX_Talent_StageAbility_023",
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
      "modifier": "<a class=\"gModGreen\" id=\"-502936959\">MStrongChallengeEX_Talent_StageAbility_LE_023</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1192441687\">MStrongChallengeEX_Talent_StageAbility_PLY_023</a>",
      "execute": [
        {
          "eventTrigger": "Turn End [Anyone]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "_CheckTimes",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Caused Weakness Break [Owner]",
          "execute": [
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
                    "value1": "_CheckTimes",
                    "compareType": "<",
                    "value2": {
                      "operator": "Variables[0] (MDF_Times) || RETURN",
                      "displayLines": "MDF_Times",
                      "constants": [],
                      "variables": [
                        "MDF_Times"
                      ]
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-537679168\">ReduceActionDelay</a>",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variables": {
                    "parameter[0]_NormalizedValue": {
                      "operator": "Variables[0] (MDF_ActioDelayModifyValue) || RETURN",
                      "displayLines": "MDF_ActioDelayModifyValue",
                      "constants": [],
                      "variables": [
                        "MDF_ActioDelayModifyValue"
                      ]
                    }
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_CheckTimes",
                  "value": {
                    "operator": "Variables[0] (_CheckTimes) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(_CheckTimes + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "_CheckTimes"
                    ]
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-502936959\">MStrongChallengeEX_Talent_StageAbility_LE_023</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1192441687\">MStrongChallengeEX_Talent_StageAbility_PLY_023</a>",
                  "valuePerStack": {
                    "MDF_ActioDelayModifyValue": {
                      "operator": "Variables[0] (#ADF_1) || RETURN",
                      "displayLines": "#ADF_1",
                      "constants": [],
                      "variables": [
                        "#ADF_1"
                      ]
                    },
                    "MDF_Times": {
                      "operator": "Variables[0] (#ADF_2) || RETURN",
                      "displayLines": "#ADF_2",
                      "constants": [],
                      "variables": [
                        "#ADF_2"
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