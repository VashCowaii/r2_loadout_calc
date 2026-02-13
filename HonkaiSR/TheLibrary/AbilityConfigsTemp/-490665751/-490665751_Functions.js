const configAbility = {
  "fileName": "-490665751_Functions",
  "abilityType": "Char. Functions",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "length": 3,
  "parse": [
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__2033536184\">InfiniteWave_SummonMonster</a>",
      "parse": [
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
                "name": "Infinite Enemy Waves Remain"
              }
            ]
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Insert_Flag",
                "compareType": "=",
                "value2": 0,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Insert_Flag",
                  "value": 1
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "BattleEventAbility_SummonMonsterInfinite_Insert",
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "priorityTag": "MonsterSummon",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1491565886\">InfiniteWave_SummonMonster2</a>",
      "parse": [
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
                "name": "Infinite Enemy Waves Remain"
              }
            ]
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Insert_Flag",
                "compareType": "=",
                "value2": 0,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Insert_Flag",
                  "value": 1
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "BattleEventAbility_SummonMonsterInfinite_Insert2",
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "priorityTag": "MonsterSummon",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__269952436\">InfiniteWave_SummonMonster_Fuyan</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "ManuallySummon_Flag",
                    "compareType": ">",
                    "value2": 0,
                    "contextScope": "ContextTaskTemplate"
                  },
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
              {
                "name": "Infinite Enemy Waves Remain",
                "totalRank": 5
              }
            ]
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "ManuallySummon_Flag",
                "compareType": "=",
                "value2": 0,
                "contextScope": "ContextTaskTemplate"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Insert_Flag",
                "compareType": "=",
                "value2": 0,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Insert_Flag",
                  "value": 1
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "BattleEventAbility_SummonMonsterInfinite_Fuyan_Insert",
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "priorityTag": "MonsterSummon",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "references": []
}