const configAbility = {
  "fileName": "-1097634517_BattleEventAbility_RealityShow_Boss",
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
      "modifier": "<a class=\"gModGreen\" id=\"-1130428441\">BattleEventAbility_RealityShow_Boss_Modifier</a>"
    }
  ],
  "functions": [
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__805445188\">BattleEventAbility_RealityShow_Boss_ReportLeftDelay</a>",
      "parse": [
        {
          "name": "Define Custom Variable with Varying Data",
          "target": null,
          "variableName": "_LeftDelay"
        },
        {
          "name": "Set Warning Countdown",
          "countdownTime": {
            "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MAX</span>((_LeftDelay - 1), 0)"
          }
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1130428441\">BattleEventAbility_RealityShow_Boss_Modifier</a>",
      "modifierFlags": [
        "STAT_TurnCountAccumulator"
      ],
      "execute": [
        {
          "eventTrigger": "Turn [Owner]: Pre-action Phase",
          "priorityLevel": -12,
          "execute": [
            "Increment Cycles Counter",
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"805445188\">BattleEventAbility_RealityShow_Boss_ReportLeftDelay</a>"
            }
          ]
        },
        {
          "eventTrigger": "Turn [Anyone]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "CyclesRemaining[?]",
                "compareType": "<="
              },
              "passed": [
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "set": 0
                },
                {
                  "name": "Lock Target AV",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": "Has Specific Result",
              "passed": [
                {
                  "name": "Lock Target AV",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "priorityLevel": -90,
          "execute": [
            {
              "name": "Action Advance/Delay",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "advanceType": "Delay",
              "multiAdd": 0.5
            },
            {
              "name": "Set Warning Countdown",
              "countdownTime": {
                "displayLines": "(#BattleEvent_P1_ADF - 1)"
              }
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"805445188\">BattleEventAbility_RealityShow_Boss_ReportLeftDelay</a>"
            }
          ]
        }
      ]
    }
  ]
}