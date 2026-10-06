const configAbility = {
  "fileName": "30148_BattleEventAbility_Challenge_Month_48",
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
      "modifier": "<a class=\"gModGreen\" id=\"951905147\">Modifier_BattleEventAbility_Challenge_Month_48</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__951905147\">Modifier_BattleEventAbility_Challenge_Month_48</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Owner]: Pre-action Phase",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"101547145\">Elation_StartElationTime</a>",
              "variables": {
                "TryStartElationTime_OverrideElationPoint": {
                  "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
                  "displayLines": "#BattleEvent_P2_ADF",
                  "constants": [],
                  "variables": [
                    "#BattleEvent_P2_ADF"
                  ]
                },
                "TryStartElationTime_ElationTimeIsNoConsume": 1
              },
              "dynamicStringsArray": [
                {
                  "name": "TryStartElationTime_CustomTag",
                  "value": "BattleEventAbility_Challenge_Month_48"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Wave Count",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Far Left Player Entity(no Memosprite)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1941769548\">ElationTime_PeakBattle_Standard_Mark</a>",
                  "valuePerStack": {
                    "MDF_DamagePercentage": {
                      "operator": "Variables[0] (#BattleEvent_P1_ADF) || RETURN",
                      "displayLines": "#BattleEvent_P1_ADF",
                      "constants": [],
                      "variables": [
                        "#BattleEvent_P1_ADF"
                      ]
                    }
                  }
                }
              ]
            }
          ],
          "priorityLevel": -90
        }
      ]
    }
  ]
}