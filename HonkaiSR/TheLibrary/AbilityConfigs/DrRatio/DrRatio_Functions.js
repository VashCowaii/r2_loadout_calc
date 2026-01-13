const configAbility = {
  "fileName": "DrRatio_Functions",
  "abilityType": "Char. Functions",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "length": 1,
  "parse": [
    {
      "name": "CharacterFunctions",
      "functionName": "Dr_Ratio_InsertAbility",
      "parse": [
        {
          "name": "Find New Target",
          "from": "All Hostile Entities (AOE)",
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": "Use Prior Target(s) Defined",
            "modifier": "Dr_Ratio_Insert_Flag"
          },
          "ifTargetFound": [
            {
              "name": "Inject Ability Use",
              "condition": {
                "name": "Insert Ability Condition",
                "type": "AbilityOwnerInsertUnusedCount",
                "typeValue": 1
              },
              "abilityName": "Dr_Ratio_PassiveAbility01_Insert_Part01",
              "abilitySource": "Caster",
              "abilityTarget": "Use Prior Target(s) Defined",
              "priorityTag": "AvatarInsertAttackSelf",
              "showInActionOrder": true,
              "abortFlags": [
                "STAT_CTRL",
                "DisableAction"
              ],
              "allowAbilityTriggers": false
            }
          ],
          "noTargetFound": [
            {
              "name": "Find New Target",
              "from": "All Hostile Entities (AOE)",
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Target Exists",
                    "target": "Use Prior Target(s) Defined[SUMMONER OF]",
                    "living": true
                  },
                  {
                    "name": "Living State",
                    "state": "Anyone",
                    "target": "Use Prior Target(s) Defined[SUMMONER OF]",
                    "invertCondition": true
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertUnusedCount",
                    "typeValue": 1
                  },
                  "abilityName": "Dr_Ratio_PassiveAbility01_Insert_Part01",
                  "abilitySource": "Caster",
                  "abilityTarget": "Use Prior Target(s) Defined",
                  "priorityTag": "AvatarInsertAttackSelf",
                  "showInActionOrder": true,
                  "abortFlags": [
                    "STAT_CTRL",
                    "DisableAction"
                  ],
                  "allowAbilityTriggers": false
                }
              ],
              "noTargetFound": [
                {
                  "name": "Find New Target",
                  "from": "All Hostile Entities (AOE)",
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "Dr_Ratio_PassiveAbility01_Insert_Part01",
                      "abilitySource": "Caster",
                      "abilityTarget": "Use Prior Target(s) Defined",
                      "priorityTag": "AvatarInsertAttackSelf",
                      "showInActionOrder": true,
                      "abortFlags": [
                        "STAT_CTRL",
                        "DisableAction"
                      ],
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
  ],
  "references": []
}