const configAbility = {
  "fileName": "-1097634517_BattleEventAbility_SummonMonsterInfinite_RandomDelay",
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
      "modifier": "<a class=\"gModGreen\" id=\"2035793596\">BattleEventAbility_SummonMonsterInfinite_RandomDelay_Modifier</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Level Entity}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1528480436\">Modifier_Infinite_Summon_Level</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1528480436\">Modifier_Infinite_Summon_Level</a>",
      "execute": [
        {
          "eventTrigger": "Batch: Enemy Arrival",
          "execute": [
            {
              "name": "UI Display Event (On Entity)",
              "target": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2035793596\">BattleEventAbility_SummonMonsterInfinite_RandomDelay_Modifier</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "Insert_Flag",
              "scope": "TargetEntity"
            },
            {
              "name": "Add Ability",
              "abilityName": "BattleEventAbility_SummonMonsterInfinite_RandomDelay_Insert"
            },
            {
              "name": "Add Ability",
              "abilityName": "BattleEventAbility_SummonMonsterInfinite_Camera"
            }
          ]
        },
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"723446133\">InfiniteWave_SummonMonster_RandomDelay</a>",
              "isGlobal": true
            }
          ]
        },
        {
          "eventTrigger": "Entity Left Battle [Anyone]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"723446133\">InfiniteWave_SummonMonster_RandomDelay</a>",
              "isGlobal": true
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "priorityLevel": -90,
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "ifTargetFound": [
                {
                  "name": "Define Variable with Random Value",
                  "scope": "ContextAbility",
                  "variableName": "_RandomADF",
                  "min": {
                    "displayLines": "#BattleEvent_P1_ADF"
                  },
                  "max": {
                    "displayLines": "#BattleEvent_P2_ADF"
                  }
                },
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "multiBase": {
                    "displayLines": "_RandomADF"
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  }
}