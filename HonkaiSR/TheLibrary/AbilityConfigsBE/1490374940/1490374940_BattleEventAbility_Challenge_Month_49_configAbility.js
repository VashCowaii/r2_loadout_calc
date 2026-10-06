const configAbility = {
  "fileName": "1490374940_BattleEventAbility_Challenge_Month_49",
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
      "modifier": "<a class=\"gModGreen\" id=\"935127528\">Modifier_BattleEventAbility_Challenge_Month_49</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__935127528\">Modifier_BattleEventAbility_Challenge_Month_49</a>",
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
                  "value": "BattleEventAbility_Challenge_Month_49"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: Start",
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
                  },
                  {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Adjust Team Punchline Value",
                  "value": {
                    "operator": "Variables[0] (#BattleEvent_P1_ADF) || RETURN",
                    "displayLines": "#BattleEvent_P1_ADF",
                    "constants": [],
                    "variables": [
                      "#BattleEvent_P1_ADF"
                    ]
                  },
                  "adjustment": "Add"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}