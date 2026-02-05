const configAbility = {
  "fileName": "8002069_Monster_XP_Minion04_02_AbilityP01_Xuwu",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Enemy_XP_Minion04_02_P01_Xuwu"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Enemy_XP_Minion04_02_P01_Xuwu_00"
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_XP_Minion04_02_P01_Xuwu",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "Enemy_XP_Minion04_02_P01_Xuwu_00"
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_XP_Minion04_02_AbilityP01_InsertAbility_Xuwu",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "priorityTag": "MonsterInsertAttackSelf",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "STAT_CTRL",
                    "Break",
                    "DisableAction"
                  ],
                  "allowAbilityTriggers": false
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Enemy_XP_Minion04_02_P01_Xuwu_00"
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