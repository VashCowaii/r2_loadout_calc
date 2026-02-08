const configAbility = {
  "fileName": "2004010_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-879407781\">Monster_W2_Kafka_CharmTargetMark</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        }
      ],
      "stackData": [],
      "latentQueue": [
        "PursuitCheck"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-954638742\">Monster_W2_Kafka_CharmMark</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__64191029\">Monster_W2_Kafka_CharmOneAttack</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1442954604\">Monster_W2_Kafka_EnhanceElectricDamage</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__808819939\">Monster_W2_Kafka_CharmDisableAction</a>",
      "modifierFlags": [
        "DisableAction"
      ],
      "duration": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1239633217\">Monster_W2_Kafka_Charm</a>[<span class=\"descriptionNumberColor\">Dominated</span>]",
      "stackType": "Refresh",
      "modifierFlags": [
        "STAT_CTRL",
        "AvatarBreak",
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "UI Display Event (On Entity)",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "popUpText": "Dominated",
              "living": true
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Player Team All}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": "<=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"808819939\">Monster_W2_Kafka_CharmDisableAction</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Controlled Action [Owner]: Start",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "NOT",
                      "condition": {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "mustBeAlive2": true
                      }
                    }
                  }
                ]
              },
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-879407781\">Monster_W2_Kafka_CharmTargetMark</a>"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "PursuitCheck",
                  "value": 1
                },
                {
                  "name": "Use Controlled Ability",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Action End [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-879407781\">Monster_W2_Kafka_CharmTargetMark</a>"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "PursuitCheck"
            },
            "Reset Triggers: Attack"
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Disable Abilities",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "abilityTypes": [
                "Ultimate"
              ],
              "text": "Ability cannot be used"
            }
          ]
        }
      ],
      "description": "Makes a single target unable to take action. Target will use Basic ATK to attack a random ally of theirs. If an ability is cast on the target to remove a debuff, the Dominated status will be removed first.",
      "type": "Debuff",
      "effectName": "Dominated",
      "statusName": "Dominated"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2042396368\">Monster_W2_Kafka_CharmControl</a>",
      "execute": [
        {
          "eventTrigger": "Dealt Damage while Crowd/Mind Controlled [Anyone]",
          "execute": [
            {
              "name": "Define Custom Variable with Ability Hits",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target 2}}"
              },
              "variableName": "SkillMaxHit"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] (UnusedUnderThisBase_15) || Variables[1] (SkillMaxHit) || DIV || RETURN",
                  "displayLines": "(UnusedUnderThisBase_15 / SkillMaxHit)",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_15",
                    "SkillMaxHit"
                  ]
                },
                "Toughness": null,
                "keepDMGType": true,
                "inheritTargetFrom": {
                  "name": "Target Name",
                  "target": "{{Parameter Target 2}}"
                },
                "Tags": null,
                "attackType": "Additional DMG"
              }
            },
            "Trigger: Attack End"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__364934476\">Monster_W2_Kafka_EnhanceElectricMark</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1442954604\">Monster_W2_Kafka_EnhanceElectricDamage</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Trigger Modifier Event",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "DOT_TriggerRatio",
              "eventType": "DOT_Electric",
              "value": 1
            },
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "duration": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__318325310\">Monster_W2_Kafka_Enhance</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "Deal Damage End [Owner]: Hit",
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
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1935319413\">Standard_DOT_Electric</a>[<span class=\"descriptionNumberColor\">Shock</span>]"
                  },
                  {
                    "name": "NOT",
                    "condition": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-879407781\">Monster_W2_Kafka_CharmTargetMark</a>"
                    }
                  },
                  {
                    "name": "NOT",
                    "condition": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"64191029\">Monster_W2_Kafka_CharmOneAttack</a>"
                    }
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
                  "modifier": "<a class=\"gModGreen\" id=\"64191029\">Monster_W2_Kafka_CharmOneAttack</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"64191029\">Monster_W2_Kafka_CharmOneAttack</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1082518094\">Monster_W2_Kafka_Pursuit</a>",
      "modifierFlags": [
        "ListenBattleEventSkill"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "PursuitCount",
              "value": {
                "operator": "Variables[0] (MDF_Count) || RETURN",
                "displayLines": "MDF_Count",
                "constants": [],
                "variables": [
                  "MDF_Count"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Dealt Damage while Crowd/Mind Controlled [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "PursuitCheck",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "STAT_DOT_Electric"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "PursuitCount",
                    "compareType": ">",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W2_Kafka_Ability06_Part01",
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "priorityTag": "MonsterInsertAttackSelf",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "STAT_CTRL",
                    "DisableAction",
                    "Break"
                  ],
                  "allowAbilityTriggers": false
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "PursuitCheck",
                  "value": 1
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "PursuitCount",
                  "context": "TargetEntity",
                  "value": -1,
                  "max": 10
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Action End [Owner]",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "PursuitCount",
              "value": {
                "operator": "Variables[0] (MDF_Count) || RETURN",
                "displayLines": "MDF_Count",
                "constants": [],
                "variables": [
                  "MDF_Count"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Current Action Holder's Team",
                    "team": "Enemy Team"
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Current Action Target List}}"
                    },
                    "team": "Player Team"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Current Action Target List}}"
                    },
                    "flagName": "STAT_DOT_Electric"
                  },
                  {
                    "name": "NOT",
                    "condition": {
                      "name": "Current Action Holder Is",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      }
                    }
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "PursuitCount",
                    "compareType": ">",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Current Action Target List}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": ">",
                    "value2": 0
                  },
                  {
                    "name": "Is Current Ability Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Hostile Entities(AOE)}}"
                    },
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W2_Kafka_Ability06_Part01",
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Current Action Target List}}"
                  },
                  "priorityTag": "MonsterInsertAttackSelf",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "STAT_CTRL",
                    "DisableAction",
                    "Break"
                  ],
                  "allowAbilityTriggers": false
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "PursuitCount",
                  "context": "TargetEntity",
                  "value": -1,
                  "max": 10
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_Count"
      ],
      "latentQueue": [
        "DisPelCount"
      ]
    }
  ],
  "references": []
}