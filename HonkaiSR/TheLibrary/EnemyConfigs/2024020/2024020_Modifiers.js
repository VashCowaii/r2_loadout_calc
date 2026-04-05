const configAbility = {
  "fileName": "2024020_Modifiers",
  "abilityType": "Char. Modifiers",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__288555768\">Monster_Fuyan_LockHP</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Lock HP",
              "threshold": 1
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1940788756\">Enemy_Fuyan_MonsterDieListener</a>",
      "modifierFlags": [
        "KeepOnDeathrattle",
        "Deathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"288555768\">Monster_Fuyan_LockHP</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]",
                    "invertCondition": true,
                    "includePreDeath": true
                  },
                  {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "invertCondition": true
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
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "DeathCount",
                  "value": {
                    "operator": "Variables[0] (DeathCount) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(DeathCount + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "DeathCount"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "ADF_MaxHPValue",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "ADF_HPDamageRatioValue",
                  "value": {
                    "operator": "Constants[0] (1) || Variables[0] (MonsterCount) || DIV || Constants[1] (0.0009999999) || ADD || RETURN",
                    "displayLines": "((1 / MonsterCount) + 0.0009999999)",
                    "constants": [
                      1,
                      0.0009999999
                    ],
                    "variables": [
                      "MonsterCount"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "ADF_CurrentHPValue",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "ADF_CurrentHPValue",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (ADF_MaxHPValue) || Variables[1] (ADF_HPDamageRatioValue) || MUL || Variables[2] (DeathCount) || MUL || RETURN",
                      "displayLines": "((ADF_MaxHPValue * ADF_HPDamageRatioValue) * DeathCount)",
                      "constants": [],
                      "variables": [
                        "ADF_MaxHPValue",
                        "ADF_HPDamageRatioValue",
                        "DeathCount"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_Fuyan_Hit_Part01",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "priorityTag": "CharacterAttackFromSelf",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
                    }
                  ],
                  "failed": [
                    {
                      "name": "Trigger Ability",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "ability": "Monster_Fuyan_Hit_Part01"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "AchievementCount",
              "value": 0
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 8001010,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Flamespawn"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "AchievementCount",
                      "value": {
                        "operator": "Variables[0] (AchievementCount) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(AchievementCount + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "AchievementCount"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "AchievementCount",
                "compareType": ">",
                "value2": 3
              },
              "passed": [
                {
                  "name": "Achievement",
                  "relatedAchievements": [
                    {
                      "title": "Inferno",
                      "desc": "Have #1[i] Flamespawns simultaneously on the field during the \"Illusory Maze: Cirrus\" challenge",
                      "rarity": "Low",
                      "type": "Hidden until Completion",
                      "params": [
                        4
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Was Killed (Queued) [Owner]",
          "execute": [
            {
              "name": "Mark Entity For Immediate Death"
            },
            {
              "name": "Inject Ability Use",
              "abilityName": "Monster_Fuyan_Die",
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "priorityTag": "EnemyDeathEffect",
              "ownerState": "Mask_AliveOrLimbo",
              "targetState": "Mask_AliveOrLimbo",
              "canHitNonTargets": true,
              "allowAbilityTriggers": false
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "mustBeAlive2": true,
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Parameter Target's Attack Targets}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-51927245\">Enemy_Fuyan_Unselectable</a>",
      "modifierFlags": [
        "ImmuneDebuff"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            "Mark Entity as Non-Target(Unselectable)",
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;",
              "value": 0
            },
            {
              "name": "Boss Bar Display",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "display": true
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"429388357\">Modifier_Heliobus_Suiyang_Ability_StealBP_Enemy</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1278953211\">Modifier_Heliobus_Suiyang_Ability_ActionBonus_Enemy</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-210455569\">Modifier_Heliobus_Suiyang_Ability_DeathBonus_Enemy</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"87920602\">Modifier_Heliobus_Suiyang_Ability_DamageBurn_Enemy</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1274529835\">Modifier_Heliobus_Suiyang_Ability_AttackUp_Enemy</a>"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1988405555\">Enemy_Fuyan_Born</a>",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Monster_Fuyan_Born_Part02",
              "isTrigger": true
            }
          ],
          "priorityLevel": -90
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1642513753\">Enemy_Fuyan_EffectController</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "references": []
}