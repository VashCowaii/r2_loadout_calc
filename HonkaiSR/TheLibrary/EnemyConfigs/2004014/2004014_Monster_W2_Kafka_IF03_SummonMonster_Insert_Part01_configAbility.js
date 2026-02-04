const configAbility = {
  "fileName": "2004014_Monster_W2_Kafka_IF03_SummonMonster_Insert_Part01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "UI Display Event",
      "popUpText": "Soulcaller"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "InsertCheck",
      "value": 1
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "HP_Bars_Remaining",
        "compareType": "=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] ({[SkillIF01[4]]}) || RETURN",
            "displayLines": "{[SkillIF01[4]]}",
            "constants": [],
            "variables": [
              "{[SkillIF01[4]]}"
            ]
          },
          "enemyList": [
            {
              "name": "Create Enemy from Custom",
              "value": "ENEMIES_OBJECT_UNUSED__19",
              "summonLocation": "BeforeCaster"
            }
          ]
        },
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] ({[SkillIF01[5]]}) || RETURN",
            "displayLines": "{[SkillIF01[5]]}",
            "constants": [],
            "variables": [
              "{[SkillIF01[5]]}"
            ]
          },
          "enemyList": [
            {
              "name": "Create Enemy from Custom",
              "value": "ENEMIES_OBJECT_UNUSED__21",
              "summonLocation": "AfterCaster"
            }
          ]
        },
        "Deleted bullshit"
      ],
      "failed": [
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] ({[SkillEX04[1]]}) || RETURN",
            "displayLines": "{[SkillEX04[1]]}",
            "constants": [],
            "variables": [
              "{[SkillEX04[1]]}"
            ]
          },
          "enemyList": [
            {
              "name": "Create Enemy from Custom",
              "value": "ENEMIES_OBJECT_UNUSED__20",
              "summonLocation": "BeforeCaster"
            }
          ]
        },
        {
          "name": "Create Enemies",
          "delayPercent": {
            "operator": "Variables[0] ({[SkillEX04[0]]}) || RETURN",
            "displayLines": "{[SkillEX04[0]]}",
            "constants": [],
            "variables": [
              "{[SkillEX04[0]]}"
            ]
          },
          "enemyList": [
            {
              "name": "Create Enemy from Custom",
              "value": "ENEMIES_OBJECT_UNUSED__22",
              "summonLocation": "AfterCaster"
            }
          ]
        },
        "Deleted bullshit"
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "searchRandom": true,
      "ifTargetFound": [
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": {
                  "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__19) || RETURN",
                  "displayLines": "ENEMIES_OBJECT_UNUSED__19",
                  "constants": [],
                  "variables": [
                    "ENEMIES_OBJECT_UNUSED__19"
                  ]
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": null
              },
              {
                "name": "Enemy ID",
                "ID": {
                  "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__20) || RETURN",
                  "displayLines": "ENEMIES_OBJECT_UNUSED__20",
                  "constants": [],
                  "variables": [
                    "ENEMIES_OBJECT_UNUSED__20"
                  ]
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": null
              }
            ]
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Enemy_W2_Kafka_IF_Weakness_Physical"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Enemy_W2_Kafka_IF_Weakness_Imaginary"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": {
                  "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__21) || RETURN",
                  "displayLines": "ENEMIES_OBJECT_UNUSED__21",
                  "constants": [],
                  "variables": [
                    "ENEMIES_OBJECT_UNUSED__21"
                  ]
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": null
              },
              {
                "name": "Enemy ID",
                "ID": {
                  "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__22) || RETURN",
                  "displayLines": "ENEMIES_OBJECT_UNUSED__22",
                  "constants": [],
                  "variables": [
                    "ENEMIES_OBJECT_UNUSED__22"
                  ]
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": null
              }
            ]
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Enemy_W2_Kafka_IF_Weakness_Fire"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Enemy_W2_Kafka_IF_Weakness_Wind"
            }
          ]
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "modifier": "Standard_Servant[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "modifier": "Monster_W2_Kafka_IF03_SummonHitDamageSplit",
      "casterAssign": "CasterSelf"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "modifier": "Enemy_W2_Kafka_IF_SummonDeathrattle",
      "valuePerStack": {
        "MDF_KillBonus": {
          "operator": "Variables[0] ({[SkillIF01[2]]}) || RETURN",
          "displayLines": "{[SkillIF01[2]]}",
          "constants": [],
          "variables": [
            "{[SkillIF01[2]]}"
          ]
        }
      },
      "casterAssign": "CasterSelf"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "AIFlag",
      "value": 1
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Enemy_W2_Kafka_IF_SummonDeathrattle",
      "modifierFlags": [
        "KeepOnDeathrattle",
        "Deathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Ability",
              "abilityName": "Monster_Boss_Kafka_IF_Summon_Death_Insert"
            },
            {
              "name": "Add Ability",
              "abilityName": "Monster_Boss_Kafka_IF_Summon_Death_NoInsert"
            },
            {
              "name": "Add Ability",
              "abilityName": "Monster_Boss_Kafka_IF_Summon_Death_Camera"
            }
          ]
        },
        {
          "eventTrigger": "Was Killed (Queued) [Owner]",
          "execute": [
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "silent": true
            },
            {
              "name": "Mark Entity For Immediate Death"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Summoner of Modifier Holder}}"
                },
                "value1": "SummonDeathInsertCheck",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "checkOverride": {
                    "name": "Condition Priority",
                    "overridePriority": "MonsterForceKill",
                    "condition": {
                      "name": "Compare: Ability Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Summoner of Modifier Holder}}"
                      },
                      "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                      "compareType": "<=",
                      "value2": 0
                    }
                  },
                  "abilityName": "Monster_Boss_Kafka_IF_Summon_Death_Insert",
                  "priorityTag": "MonsterDeathRattle",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "variableName": "SummonDeathInsertCheck",
                  "value": 1
                }
              ],
              "failed": [
                {
                  "name": "Inject Ability Use",
                  "checkOverride": {
                    "name": "Condition Priority",
                    "overridePriority": "MonsterForceKill",
                    "condition": {
                      "name": "Compare: Ability Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Summoner of Modifier Holder}}"
                      },
                      "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                      "compareType": "<=",
                      "value2": 0
                    }
                  },
                  "abilityName": "Monster_Boss_Kafka_IF_Summon_Death_NoInsert",
                  "priorityTag": "MonsterDeathRattle",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_KillBonus"
      ],
      "latentQueue": [
        "InsertCheck"
      ]
    }
  ]
}