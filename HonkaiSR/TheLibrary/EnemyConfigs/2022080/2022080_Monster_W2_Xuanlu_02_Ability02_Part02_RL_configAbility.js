const configAbility = {
  "fileName": "2022080_Monster_W2_Xuanlu_02_Ability02_Part02_RL",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1848268909\">Enemy_W2_Xuanlu_02_Counter_RL</a>[<span class=\"descriptionNumberColor\">Retaliation</span>]"
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1848268909\">Enemy_W2_Xuanlu_02_Counter_RL</a>[<span class=\"descriptionNumberColor\">Retaliation</span>]",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "Turn End [Anyone]",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "CounterCheck",
              "value": 1
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Being Attacked End [Owner]",
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
                    "name": "Compare: Variable",
                    "value1": "CounterCheck",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  {
                    "name": "NOT",
                    "condition": {
                      "name": "Has Param Flag",
                      "flagName": "IsFakeAvatarAttack"
                    }
                  },
                  {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Currency Wars Full OffFieldList}}"
                    },
                    "mustBeAlive2": true,
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "CounterCheck"
                },
                {
                  "name": "Inject Ability Use",
                  "checkOverride": {
                    "name": "Condition Priority",
                    "overridePriority": "MonsterForceKill",
                    "condition": {
                      "name": "Compare: Ability Value",
                      "target": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          {
                            "name": "Target Filter",
                            "conditions": {
                              "name": "Check Boolean Value",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "value": "MonsterType_Xuanlu"
                            }
                          }
                        ]
                      },
                      "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                      "compareType": "<=",
                      "value2": 0
                    }
                  },
                  "abilityName": "Monster_W2_Xuanlu_02_AbilityP03_Part01_RL",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "priorityTag": "EnemyAttackFromSelf",
                  "showInActionOrder": true,
                  "abortFlags": [
                    "DisableAction",
                    "STAT_CTRL",
                    "Break"
                  ],
                  "allowAbilityTriggers": false
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "When attacked by an enemy, deals DMG to that enemy.",
      "type": "Buff",
      "effectName": "Counter",
      "statusName": "Retaliation"
    }
  ]
}