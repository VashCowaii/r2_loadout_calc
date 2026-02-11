const configAbility = {
  "fileName": "8022010_Modifiers",
  "abilityType": "Char. Modifiers",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__976017528\">Monster_SW_Minion01_Split_Old</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-157441217\">Monster_SW_Minion01_SplitEffect</a>[<span class=\"descriptionNumberColor\">Propagation</span>]",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "description": "Propagate in the next turn.",
      "type": "Other",
      "effectName": "Propagation",
      "statusName": "Propagation"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1780753426\">Monster_SW_Minion01_Split</a>[<span class=\"descriptionNumberColor\">Mitosis: Warning</span>]",
      "execute": [
        {
          "eventTrigger": "Action Choice Window [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Modifier_TurnCount",
                "compareType": ">",
                "value2": 0,
                "contextScope": "ContextModifier"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "scope": "ContextModifier",
                  "variableName": "Modifier_TurnCount",
                  "value": {
                    "operator": "Variables[0] (Modifier_TurnCount) || Constants[0] (1) || SUB || RETURN",
                    "displayLines": "(Modifier_TurnCount - 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "Modifier_TurnCount"
                    ]
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Modifier_TurnCount",
                "compareType": "=",
                "value2": 0,
                "contextScope": "ContextModifier"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Enemy Team All}}"
                        },
                        "value1": "TeamCharacterCount",
                        "compareType": "<",
                        "value2": 5
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "BreakRecover",
                        "compareType": "=",
                        "value2": 0,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "scope": "ContextModifier",
                      "variableName": "Modifier_TurnCount",
                      "value": 2
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_SW_Minion01_Ability02_Part01",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "priorityTag": "MonsterReviveOthers",
                      "canHitNonTargets": true,
                      "abortFlags": [
                        "DisableAction",
                        "STAT_CTRL",
                        "Break"
                      ],
                      "allowAbilityTriggers": false
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "scope": "ContextModifier",
                      "variableName": "Modifier_TurnCount",
                      "value": 1
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Action End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "BreakRecover",
                "compareType": "=",
                "value2": 1,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "BreakRecover",
                  "value": 0
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Modifier_TurnCount",
                "compareType": "=",
                "value2": 1,
                "contextScope": "ContextModifier"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-157441217\">Monster_SW_Minion01_SplitEffect</a>[<span class=\"descriptionNumberColor\">Propagation</span>]"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "End Broken State [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "BreakRecover",
              "value": 1
            }
          ]
        },
        {
          "eventTrigger": "When Modifier is Added [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "flagName": "STAT_CTRL_Frozen_Effect"
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "Propagate after <span class=\"descriptionNumberColor\">Modifier_TurnCount</span> turn(s). Cannot propagate during the turn in which this unit recovers from Weakness Break.",
      "type": "Other",
      "effectName": "Mitosis: Warning",
      "statusName": "Mitosis: Warning"
    }
  ],
  "references": []
}