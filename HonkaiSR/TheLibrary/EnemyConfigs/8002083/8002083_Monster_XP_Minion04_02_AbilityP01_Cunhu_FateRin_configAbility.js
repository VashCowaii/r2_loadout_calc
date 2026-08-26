const configAbility = {
  "fileName": "8002083_Monster_XP_Minion04_02_AbilityP01_Cunhu_FateRin",
  "childAbilityList": [
    "8002083_Monster_XP_Minion04_02_AbilityP01_Cunhu_FateRin",
    "8002083_Monster_XP_Minion04_02_AbilityP01_InsertAbility_EnterBattle_Cunhu_FateRin"
  ],
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1412870174\">Enemy_XP_Minion04_02_P01_EnterBattle_FateRin</a>"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1412870174\">Enemy_XP_Minion04_02_P01_EnterBattle_FateRin</a>",
      "execute": [
        {
          "eventTrigger": "Entity Left Battle [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                }
              }
            }
          ]
        },
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-415257268\">Enemy_XP_Minion04_02_Cunhu_Caster_FateRin</a>"
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
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Cunhu_CurrentCount"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"132567949\">Enemy_XP_Minion04_02_Cunhu_Bonus_FateRin</a>[<span class=\"descriptionNumberColor\">P—Protect You</span>]"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "variableName": "Cunhu_CurrentCount",
                      "modifierName": "<a class=\"gModGreen\" id=\"132567949\">Enemy_XP_Minion04_02_Cunhu_Bonus_FateRin</a>[<span class=\"descriptionNumberColor\">P—Protect You</span>]",
                      "multiplier": 1
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"132567949\">Enemy_XP_Minion04_02_Cunhu_Bonus_FateRin</a>[<span class=\"descriptionNumberColor\">P—Protect You</span>]",
                      "counter": {
                        "operator": "Variables[0] (Cunhu_CurrentCount) || RETURN",
                        "displayLines": "Cunhu_CurrentCount",
                        "constants": [],
                        "variables": [
                          "Cunhu_CurrentCount"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Exit Broken-State",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              }
            },
            {
              "name": "Inject Ability Use",
              "abilityName": "Monster_XP_Minion04_02_AbilityP01_InsertAbility_EnterBattle_Cunhu_FateRin",
              "abilitySource": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "priorityTag": "EnemyBattleCry",
              "canHitNonTargets": true,
              "showInActionOrder": true,
              "allowAbilityTriggers": false
            }
          ],
          "priorityLevel": -55
        }
      ]
    }
  ]
}