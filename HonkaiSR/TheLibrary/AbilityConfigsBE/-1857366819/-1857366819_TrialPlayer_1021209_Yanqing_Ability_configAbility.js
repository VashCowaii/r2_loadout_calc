const configAbility = {
  "fileName": "-1857366819_TrialPlayer_1021209_Yanqing_Ability",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"224735379\">TrialPlayer_1021209_Yanqing_AttackFlag_Modifier</a>",
      "immediateEffect": true
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1426857351\">TrialPlayer_1021209_Yanqing_Talk_Modifier</a>",
      "immediateEffect": true
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1426857351\">TrialPlayer_1021209_Yanqing_Talk_Modifier</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "ContextModifier",
              "variableName": "MDF_KillTalk",
              "value": {
                "operator": "Constants[0] (1) || RETURN",
                "displayLines": "1",
                "constants": [
                  1
                ],
                "variables": []
              }
            }
          ]
        },
        {
          "eventTrigger": "Got a Kill [Owner]",
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
                    "value1": "MDF_KillTalk",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextModifier"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_ActionTime",
                    "compareType": ">",
                    "value2": 3,
                    "contextScope": "ContextModifier"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "ContextModifier",
                  "variableName": "MDF_KillTalk",
                  "value": {
                    "operator": "Variables[0] (MDF_KillTalk) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(MDF_KillTalk + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "MDF_KillTalk"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack Start [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "MDF_ActionTime",
                "compareType": "=",
                "value2": {
                  "operator": "Constants[0] (0) || RETURN",
                  "displayLines": "0",
                  "constants": [
                    0
                  ],
                  "variables": []
                },
                "contextScope": "ContextModifier"
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_ActionTime",
                    "compareType": "=",
                    "value2": {
                      "operator": "Constants[0] (1) || RETURN",
                      "displayLines": "1",
                      "constants": [
                        1
                      ],
                      "variables": []
                    },
                    "contextScope": "ContextModifier"
                  }
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "ContextModifier",
              "variableName": "MDF_ActionTime",
              "value": {
                "operator": "Variables[0] (MDF_ActionTime) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(MDF_ActionTime + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "MDF_ActionTime"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-246667125\">TrialPlayer_1021209_Yanqing_Flag_Modifier</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__224735379\">TrialPlayer_1021209_Yanqing_AttackFlag_Modifier</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-246667125\">TrialPlayer_1021209_Yanqing_Flag_Modifier</a>",
              "onlyRemoveOwnersInstance": true,
              "removeAllInstances": true
            }
          ]
        },
        {
          "eventTrigger": "Deal Damage End [Owner]: Hit",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-246667125\">TrialPlayer_1021209_Yanqing_Flag_Modifier</a>"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}