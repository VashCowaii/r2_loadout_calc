const configAbility = {
  "fileName": "3014023_Monster_W3_Death_Ability05_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "BonusAttackCounter",
      "value": {
        "operator": "Variables[0] (BonusAttackCounter) || Constants[0] (1) || ADD || RETURN",
        "displayLines": "(BonusAttackCounter + 1)",
        "constants": [
          1
        ],
        "variables": [
          "BonusAttackCounter"
        ]
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"690221189\">Modifier_W3_Death_HuntingMode3</a>[<span class=\"descriptionNumberColor\">Sunset</span>]"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"606573810\">Monster_W3_Death_AllDamageUp</a>[<span class=\"descriptionNumberColor\">Biting Obituary</span>]"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{All Team Members}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": ">=",
            "value2": 5
          },
          {
            "name": "Stage Type",
            "stageType": "FightFest"
          }
        ]
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-393984788\">Enemy_W3_Death_FightFest_LockHP</a>"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "DamageFlat": {
              "displayLines": 1000000
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "DOT"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-393984788\">Enemy_W3_Death_FightFest_LockHP</a>"
        },
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "Bullet_Flag",
          "context": "TargetEntity",
          "value": -1
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1900940108\">Modifier_W3_Death_HuntingMode</a>"
        }
      ],
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{All Team Members}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": ">=",
            "value2": 5
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "mortalWound": true,
                "Toughness": null,
                "instanceTag": "MortallyWonded",
                "Tags": null,
                "attackType": "DOT"
              }
            },
            "Trigger: Attack End",
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "Bullet_Flag",
              "context": "TargetEntity",
              "value": -1
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1900940108\">Modifier_W3_Death_HuntingMode</a>"
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1985441632\">Monster_W3_Death_LockHP</a>"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "mortalWound": true,
                "Toughness": null,
                "instanceTag": "MortallyWonded",
                "Tags": null,
                "attackType": "DOT"
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1985441632\">Monster_W3_Death_LockHP</a>"
            },
            "Trigger: Attack End",
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "Bullet_Flag",
              "context": "TargetEntity",
              "value": -1
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1900940108\">Modifier_W3_Death_HuntingMode</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1295202561\">W3_Death_AddMoifierSuccess</a>",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W3_Death_Ability08_Insert",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "priorityTag": "MonsterInsertAttackOthers",
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
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-393984788\">Enemy_W3_Death_FightFest_LockHP</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Lock HP",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "lockHolder": "<a class=\"gModGreen\" id=\"-739114828\">Monster_W3_Death_FightFest_LockHP</a>"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Lock HP",
              "threshold": {
                "operator": "Constants[0] (0.000010000076) || RETURN",
                "displayLines": "0.000010000076",
                "constants": [
                  0.000010000076
                ],
                "variables": []
              },
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "lockHolder": "<a class=\"gModGreen\" id=\"-739114828\">Monster_W3_Death_FightFest_LockHP</a>"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "Bullet_Flag"
      ]
    }
  ]
}