const compositeAbilityObject = {
  "fullCharacterName": 8012203,
  "trimCharacterName": 8012203,
  "abilityList": [
    "8012203_Monster_W2_HuanlongPart_PassiveAbility_Insert_Part01",
    "8012203_Monster_W2_HuanlongPart_Ability01_Part02",
    "8012203_Monster_W2_HuanlongPart_Ability01_Part01",
    "8012203_Monster_W2_HuanlongPart_Passive01",
    "8012203_Modifiers"
  ],
  "abilityObject": {
    "8012203_Monster_W2_HuanlongPart_PassiveAbility_Insert_Part01": {
      "fileName": "8012203_Monster_W2_HuanlongPart_PassiveAbility_Insert_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Animation Event",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "state": "PassiveSkill01",
          "passed": [
            {
              "name": "Animation Task"
            },
            {
              "name": "Animation Task",
              "passed": [
                {
                  "name": "Skill Points Modification",
                  "adjustmentValue": {
                    "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                    "displayLines": "{[PassiveSkill01[0]]}",
                    "constants": [],
                    "variables": [
                      "{[PassiveSkill01[0]]}"
                    ]
                  },
                  "adjustmentType": "+"
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "8012203_Monster_W2_HuanlongPart_Ability01_Part02": {
      "fileName": "8012203_Monster_W2_HuanlongPart_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Skill Points Modification",
          "adjustmentValue": {
            "operator": "Constants[0] (0) || Variables[0] ({[Skill01[0]]}) || SUB || RETURN",
            "displayLines": "(0 - {[Skill01[0]]})",
            "constants": [
              0
            ],
            "variables": [
              "{[Skill01[0]]}"
            ]
          },
          "adjustmentType": "+"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8012203_Monster_W2_HuanlongPart_Ability01_Part01": {
      "fileName": "8012203_Monster_W2_HuanlongPart_Ability01_Part01",
      "childAbilityList": [
        "8012203_Monster_W2_HuanlongPart_Ability01_Camera",
        "8012203_Monster_W2_HuanlongPart_Ability01_Part01",
        "8012203_Monster_W2_HuanlongPart_Ability01_Part02"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_HuanlongPart_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8012203_Monster_W2_HuanlongPart_Passive01": {
      "fileName": "8012203_Monster_W2_HuanlongPart_Passive01",
      "skillTrigger": "PassiveSkill02",
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
          "modifier": "<a class=\"gModGreen\" id=\"1933235803\">Monster_W2_HuanlongPart_Deathrattle</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": 8012201,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Abundance Lotus"
              },
              {
                "name": "Enemy ID",
                "ID": 8012203,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Abundance Lotus"
              }
            ]
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1471440713\">Monster_W2_HuanlongPart_Heal</a>[<span class=\"descriptionNumberColor\">Vigor</span>]",
              "valuePerStack": {
                "MDF_HealRatio": {
                  "operator": "Variables[0] ({[PassiveSkill02[0]]}) || RETURN",
                  "displayLines": "{[PassiveSkill02[0]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill02[0]]}"
                  ]
                }
              }
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1471440713\">Monster_W2_HuanlongPart_Heal</a>[<span class=\"descriptionNumberColor\">Vigor</span>]",
              "valuePerStack": {
                "MDF_HealRatio": {
                  "operator": "Variables[0] ({[PassiveSkill02[0]]}) || RETURN",
                  "displayLines": "{[PassiveSkill02[0]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill02[0]]}"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"621938580\">Monster_W2_HuanlongPart_Break</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-268148846\">Monster_W2_HuanlongPart_MuteHitFly</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__621938580\">Monster_W2_HuanlongPart_Break</a>",
          "execute": [
            {
              "eventTrigger": "Action Choice Window [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "BreakRecover",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "BreakRecover",
                  "value": 1
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1933235803\">Monster_W2_HuanlongPart_Deathrattle</a>",
          "modifierFlags": [
            "Deathrattle",
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Was Killed (Queued) [Owner]",
              "execute": [
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "silent": true
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "CurrentHP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W2_HuanlongPart_PassiveAbility_Insert_Part01",
                      "priorityTag": "MonsterForceKill",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
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
                      "abilityName": "Monster_W2_HuanlongPart_PassiveAbility_Insert_Part01",
                      "priorityTag": "MonsterDeathRattle",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                },
                {
                  "name": "Mark Entity For Immediate Death"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-268148846\">Monster_W2_HuanlongPart_MuteHitFly</a>",
          "modifierFlags": [
            "MuteHitFly",
            "KeepOnDeathrattle"
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "8012203_Modifiers": {
      "fileName": "8012203_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1471440713\">Monster_W2_HuanlongPart_Heal</a>[<span class=\"descriptionNumberColor\">Vigor</span>]",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "STAT_CTRL",
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "BreakRecover",
                        "compareType": "=",
                        "value2": 0,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Heal",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "healPercent": {
                        "operator": "Variables[0] (MDF_HealRatio) || RETURN",
                        "displayLines": "MDF_HealRatio",
                        "constants": [],
                        "variables": [
                          "MDF_HealRatio"
                        ]
                      },
                      "formula": "Heal from Healer's MaxHP"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_HealRatio"
          ],
          "latentQueue": [],
          "description": "Every action taken restores <span class=\"descriptionNumberColor\">MDF_HealRatio</span> HP.",
          "type": "Buff",
          "effectName": "Vigor",
          "statusName": "Vigor"
        }
      ],
      "references": []
    }
  }
}