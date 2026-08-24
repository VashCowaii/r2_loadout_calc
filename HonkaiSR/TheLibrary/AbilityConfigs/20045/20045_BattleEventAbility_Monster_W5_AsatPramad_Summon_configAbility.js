const configAbility = {
  "fileName": "20045_BattleEventAbility_Monster_W5_AsatPramad_Summon",
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
      "modifier": "<a class=\"gModGreen\" id=\"1964937388\">MBattleEventAbility_Monster_W5_AsatPramad_SummonMonster</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1964937388\">MBattleEventAbility_Monster_W5_AsatPramad_SummonMonster</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Owner]: Pre-action Phase",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Enemy Team All}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": "<",
                "value2": 5
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Asat Pramad: 2}}"
                  },
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "BattleEventAbility_Monster_W5_AsatPramad_SummonMonster",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Asat Pramad: 2}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Asat Pramad: 2}}"
                      },
                      "priorityTag": "EnemyChangeState",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
                    }
                  ],
                  "noTargetFound": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "BattleEventAbility_Monster_W5_AsatPramad_SummonMonster",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Asat Pramad: 0}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Asat Pramad: 0}}"
                      },
                      "priorityTag": "EnemyChangeState",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}