const configAbility = {
  "fileName": "20047_BattleEventAbility_Monster_W5_Shell_Ability01Check",
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
      "modifier": "<a class=\"gModGreen\" id=\"980695647\">MBattleEventAbility_Monster_W5_Shell_Ability01Check</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__980695647\">MBattleEventAbility_Monster_W5_Shell_Ability01Check</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Owner]: Pre-action Phase",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "W5_Shell"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Break",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "STAT_CTRL",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "DisableAction",
                    "invertCondition": true
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target List}}"
                    },
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertCount",
                        "typeValue": 1
                      },
                      "abilityName": "Monster_W5_Shell_Ability01_Part01",
                      "abilitySource": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Parameter Target List}}"
                          },
                          {
                            "name": "Return Target",
                            "value": 1
                          }
                        ]
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "priorityTag": "EnemyChangeState",
                      "allowAbilityTriggers": false
                    }
                  ],
                  "failed": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertCount",
                        "typeValue": 1
                      },
                      "abilityName": "Monster_W5_Shell_Ability01Multi_Part01",
                      "abilitySource": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Parameter Target List}}"
                          },
                          "Shuffle Targets",
                          {
                            "name": "Return Target",
                            "value": 1
                          }
                        ]
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "priorityTag": "EnemyChangeState",
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ],
              "noTargetFound": [
                {
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertCount",
                    "typeValue": 1
                  },
                  "abilityName": "Monster_W5_Shell_Restart",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "priorityTag": "EnemyChangeState",
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