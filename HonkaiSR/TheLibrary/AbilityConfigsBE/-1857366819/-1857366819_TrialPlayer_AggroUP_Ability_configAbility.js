const configAbility = {
  "fileName": "-1857366819_TrialPlayer_AggroUP_Ability",
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
      "modifier": "<a class=\"gModGreen\" id=\"-1584307616\">Modifier_AggroUP</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1584307616\">Modifier_AggroUP</a>",
      "modifierFlags": [
        "ListenBattleEventSkill"
      ],
      "execute": [
        {
          "eventTrigger": "Take Damage End [Owner]: Hit",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "isBeHit",
              "value": 1
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">Aggro%</span>&nbsp;",
              "value": 6
            },
            {
              "name": "Define Custom Variable",
              "variableName": "isBeHit",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "BeHitTime",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "BeHitTime",
                "compareType": ">=",
                "value2": 3
              },
              "passed": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Aggro%</span>&nbsp;",
                  "value": -10
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "isBeHit",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "isBeHit",
                      "value": {
                        "operator": "Variables[0] (BeHitTime) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(BeHitTime + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "BeHitTime"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "isBeHit",
                      "value": 0
                    }
                  ]
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