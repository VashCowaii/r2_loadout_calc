const compositeAbilityObject = {
  "fullCharacterName": 2004014,
  "trimCharacterName": 2004014,
  "abilityList": [
    "2004014_BattleEventAbility_W2_Kafka_RL_Insert",
    "2004014_BattleEventAbility_W2_Kafka_RL",
    "2004014_Monster_W2_Kafka_RL_PassiveAbility_Insert2",
    "2004014_Monster_W2_Kafka_RL_PassiveAbility_Insert",
    "2004014_Monster_W2_Kafka_RL_Ability07_Part02",
    "2004014_Monster_W2_Kafka_RL_Ability07_Part01",
    "2004014_Monster_W2_Kafka_RL_Ability04_Part02",
    "2004014_Monster_W2_Kafka_RL_Ability04_Part01",
    "2004014_Monster_W2_Kafka_RL_Passive01",
    "2004014_Monster_W3_Dinosaur_01_Ability04_Part02_Assist",
    "2004014_Monster_W3_Dinosaur_01_Ability04_Part01_Assist",
    "2004014_Monster_W3_Dinosaur_Ability06_Part02Crazy_Assist",
    "2004014_Monster_W3_Dinosaur_Ability06_Part01_Assist",
    "2004014_Monster_XP_Elite01_01_Ability02_Part02_Assist",
    "2004014_Monster_XP_Elite01_01_Ability02_Part01_Assist",
    "2004014_Monster_XP_Elite01_Ability03_Part02_Assist",
    "2004014_Monster_XP_Elite01_Ability03_Part01_Assist",
    "2004014_Monster_W2_Kafka_AbilityIF01_Part02",
    "2004014_Monster_W2_Kafka_AbilityIF01_Part01",
    "2004014_Monster_Boss_Kafka_IF_Summon_Death_NoInsert",
    "2004014_Monster_Boss_Kafka_IF_Summon_Death_Insert",
    "2004014_Monster_W2_Kafka_IF03_SummonMonster_Insert_Part01",
    "2004014_Monster_W2_Kafka_Ability06_Part02_IF",
    "2004014_Monster_W2_Kafka_Ability06_Part01_IF",
    "2004014_Monster_W2_Kafka_IF03_Passive01",
    "2004014_Monster_W2_Kafka_IF_EX05_PassiveAbility",
    "2004014_Monster_W2_Kafka_IF_EX04_PassiveAbility",
    "2004014_Monster_W2_Kafka_IF_EX03_PassiveAbility",
    "2004014_Monster_W2_Kafka_IF_EX02_PassiveAbility",
    "2004014_Monster_W2_Kafka_IF_EX01_PassiveAbility",
    "2004014_Monster_W2_Kafka_IF_PassiveAbility01_Insert_Part01",
    "2004014_BattleEventAbility_W2_Kafka_IF_Insert",
    "2004014_BattleEventAbility_W2_Kafka_IF",
    "2004014_Monster_W2_Kafka_IF_PassiveAbility_Insert2",
    "2004014_Monster_W2_Kafka_IF_PassiveAbility_Insert",
    "2004014_Monster_W2_Kafka_IF_Ability10_Part02",
    "2004014_Monster_W2_Kafka_IF_Ability10_Part01",
    "2004014_Monster_W2_Kafka_IF_Ability08_Part02",
    "2004014_Monster_W2_Kafka_IF_Ability08_Part01",
    "2004014_Monster_W2_Kafka_IF_Ability07_Insert_Part02",
    "2004014_Monster_W2_Kafka_IF_Ability07_Insert_Part01",
    "2004014_Monster_W2_Kafka_IF_Ability07_Part02",
    "2004014_Monster_W2_Kafka_IF_Ability07_Part01",
    "2004014_Monster_W2_Kafka_IF_Ability04_Part02",
    "2004014_Monster_W2_Kafka_IF_Ability04_Part01",
    "2004014_Monster_W2_Kafka_IF_Ability03_Insert_Part02",
    "2004014_Monster_W2_Kafka_IF_Ability03_Insert_Part01",
    "2004014_Monster_W2_Kafka_IF_Passive02",
    "2004014_Monster_W2_Kafka_IF_Passive01",
    "2004014_Monster_W2_Kafka_IF02_Ability08_Part02",
    "2004014_Monster_W2_Kafka_IF02_Ability08_Part01",
    "2004014_Monster_W2_Kafka_IF02_Ability02_Part02",
    "2004014_Monster_W2_Kafka_IF02_Ability02_Part01",
    "2004014_Monster_W2_Kafka_IF02_Passive01",
    "2004014_Monster_W2_Kafka_Ability07_Part02",
    "2004014_Monster_W2_Kafka_Ability07_Part01",
    "2004014_Monster_W2_Kafka_Ability06_Part02",
    "2004014_Monster_W2_Kafka_Ability06_Part01",
    "2004014_Monster_W2_Kafka_Ability05_Part02",
    "2004014_Monster_W2_Kafka_Ability05_Part01",
    "2004014_Monster_W2_Kafka_Ability04_Part02",
    "2004014_Monster_W2_Kafka_Ability04_Part01",
    "2004014_Monster_W2_Kafka_Ability03_Part02",
    "2004014_Monster_W2_Kafka_Ability03_Part01",
    "2004014_Monster_W2_Kafka_Ability02_Part02",
    "2004014_Monster_W2_Kafka_Ability02_Part01",
    "2004014_Monster_W2_Kafka_Ability01_Part02",
    "2004014_Monster_W2_Kafka_Ability01_Part01",
    "2004014_Monster_W2_Kafka_Passive01",
    "2004014_Monster_W2_Kafka_PassiveAbility_BGM",
    "2004014_Modifiers",
    "2004014_BE_BattleEvents"
  ],
  "abilityObject": {
    "2004014_BattleEventAbility_W2_Kafka_RL_Insert": {
      "fileName": "2004014_BattleEventAbility_W2_Kafka_RL_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Revelation"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Monster_W2_Kafka_RL_MindControl_True[<span class=\"descriptionNumberColor\">Psychological Suggestion</span>]"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Monster_W2_Kafka_RL_MindControl_TrueEffect[<span class=\"descriptionNumberColor\">Psychological Suggestion Revelation</span>]"
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_W2_Kafka_RL_MindControl_True[<span class=\"descriptionNumberColor\">Psychological Suggestion</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_W2_Kafka_RL_MindControl_TrueEffect[<span class=\"descriptionNumberColor\">Psychological Suggestion Revelation</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Standard_MindControl[<span class=\"descriptionNumberColor\">Dominated</span>]",
              "duration": {
                "operator": "Variables[0] ({[Skill07[1]]}) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "({[Skill07[1]]} + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "{[Skill07[1]]}"
                ]
              },
              "baseChance": {
                "operator": "Variables[0] ({[Skill07[2]]}) || RETURN",
                "displayLines": "{[Skill07[2]]}",
                "constants": [],
                "variables": [
                  "{[Skill07[2]]}"
                ]
              },
              "valuePerStack": {
                "MDF_MindControlDamagePercentage": {
                  "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                  "displayLines": "{[Skill05[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill05[1]]}"
                  ]
                },
                "MDF_MaxDamageRatio": {
                  "operator": "Variables[0] ({[Skill05[2]]}) || RETURN",
                  "displayLines": "{[Skill05[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill05[2]]}"
                  ]
                },
                "MDF_MinDamageRatio": {
                  "operator": "Variables[0] ({[Skill05[3]]}) || RETURN",
                  "displayLines": "{[Skill05[3]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill05[3]]}"
                  ]
                }
              },
              "success": [
                {
                  "name": "Define Custom Variable",
                  "scope": "TargetEntity",
                  "variableName": "MindControlSuccess",
                  "value": 1
                }
              ]
            },
            {
              "name": "Action Advance/Delay",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "advanceType": "Advance",
              "multiAdd": -1
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "MindControlSuccess",
            "compareType": "=",
            "value2": 1,
            "contextScope": "TargetEntity"
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "scope": "TargetEntity",
              "variableName": "MindControlSuccess",
              "value": 0
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "Monster_W2_Kafka_RL_MindControl_False[<span class=\"descriptionNumberColor\">Psychological Suggestion</span>]"
        },
        {
          "name": "Define Custom Variable",
          "scope": "TargetEntity",
          "variableName": "BattleEventFlag",
          "value": 0
        }
      ],
      "references": []
    },
    "2004014_BattleEventAbility_W2_Kafka_RL": {
      "fileName": "2004014_BattleEventAbility_W2_Kafka_RL",
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
          "modifier": "Modifier_W2_Kafka_RL_BattleEvent"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Modifier_W2_Kafka_RL_BattleEvent_BaseSpeed"
        },
        {
          "name": "Action Advance/Delay",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "advanceType": "Set",
          "multiAdd": "MDF_W2_Kafka_00_RL_BattleEvent_ActionDelay"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Modifier_W2_Kafka_RL_BattleEvent_BaseSpeed",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_W2_Kafka_00_RL_BattleEvent_BaseSpeed) || RETURN",
                    "displayLines": "MDF_W2_Kafka_00_RL_BattleEvent_BaseSpeed",
                    "constants": [],
                    "variables": [
                      "MDF_W2_Kafka_00_RL_BattleEvent_BaseSpeed"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Modifier_W2_Kafka_RL_BattleEvent",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "BattleEventAbility_W2_Kafka_RL_Insert",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Battle Event's Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "priorityTag": "MonsterInsertAttackSelf",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                },
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "2004014_Monster_W2_Kafka_RL_PassiveAbility_Insert2": {
      "fileName": "2004014_Monster_W2_Kafka_RL_PassiveAbility_Insert2",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "silent": true
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Monster_ChangePhase"
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "multiBase": 0
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Kafka_RL_Part03EnhanceEffect"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Kafka_RL_Part03WeaponEnhanceEffect"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Kafka_RL_Endurance"
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
        },
        {
          "name": "Define Custom Variable",
          "scope": "TargetEntity",
          "variableName": "BattleEventFlag",
          "value": 0
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Battle Event List}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "Modifier_W2_Kafka_RL_BattleEvent"
          },
          "ifTargetFound": [
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Kafka_RL_PartController"
        }
      ],
      "references": []
    },
    "2004014_Monster_W2_Kafka_RL_PassiveAbility_Insert": {
      "fileName": "2004014_Monster_W2_Kafka_RL_PassiveAbility_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "silent": true
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "multiBase": 0
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Monster_ChangePhase"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Kafka_RL_Endurance"
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
      "references": []
    },
    "2004014_Monster_W2_Kafka_RL_Ability07_Part02": {
      "fileName": "2004014_Monster_W2_Kafka_RL_Ability07_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Define Custom Variable",
          "scope": "TargetEntity",
          "variableName": "BattleEventFlag",
          "value": 1
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "MindControlCount"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "Monster_W2_Kafka_RL_MindControl_True[<span class=\"descriptionNumberColor\">Psychological Suggestion</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "Monster_W2_Kafka_RL_MindControl_TrueEffect[<span class=\"descriptionNumberColor\">Psychological Suggestion Revelation</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "Monster_W2_Kafka_RL_MindControl_False[<span class=\"descriptionNumberColor\">Psychological Suggestion</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "Standard_MindControl[<span class=\"descriptionNumberColor\">Dominated</span>]"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "ShowHint04"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Battle Event List}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "Modifier_W2_Kafka_RL_BattleEvent"
          },
          "ifTargetFound": [
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "FinalPhase",
                "compareType": "=",
                "value2": 1,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MindControlCount",
                    "compareType": "<",
                    "value2": 4,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Monster_W2_Kafka_RL_MindControl_True[<span class=\"descriptionNumberColor\">Psychological Suggestion</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Standard_AbilityTarget"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MindControlCount",
                        "compareType": "<",
                        "value2": 3,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Monster_W2_Kafka_RL_MindControl_True[<span class=\"descriptionNumberColor\">Psychological Suggestion</span>]"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Standard_AbilityTarget"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MindControlCount",
                        "compareType": "<",
                        "value2": 2,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Monster_W2_Kafka_RL_MindControl_True[<span class=\"descriptionNumberColor\">Psychological Suggestion</span>]"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Standard_AbilityTarget"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "MindControlCount",
              "context": "TargetEntity",
              "value": 1,
              "max": 4
            }
          ]
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "BaseSpeed",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "FinalPhase",
            "compareType": "=",
            "value2": 1,
            "contextScope": "TargetEntity"
          },
          "passed": [
            {
              "name": "Add Battle Event",
              "teamName": "Enemy Team",
              "eventID": 20002,
              "statSource": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variables": {
                "MDF_W2_Kafka_RL_BattleEvent_ActionDelay": {
                  "operator": "Variables[0] (FinalPhase) || RETURN",
                  "displayLines": "FinalPhase",
                  "constants": [],
                  "variables": [
                    "FinalPhase"
                  ]
                },
                "MDF_W2_Kafka_RL_BattleEvent_BaseSpeed": {
                  "operator": "Variables[0] (BaseSpeed) || RETURN",
                  "displayLines": "BaseSpeed",
                  "constants": [],
                  "variables": [
                    "BaseSpeed"
                  ]
                }
              }
            }
          ],
          "failed": [
            {
              "name": "Add Battle Event",
              "teamName": "Enemy Team",
              "eventID": 20002,
              "statSource": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variables": {
                "MDF_W2_Kafka_RL_BattleEvent_ActionDelay": {
                  "operator": "Variables[0] ({[Skill07[0]]}) || RETURN",
                  "displayLines": "{[Skill07[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill07[0]]}"
                  ]
                },
                "MDF_W2_Kafka_RL_BattleEvent_BaseSpeed": {
                  "operator": "Variables[0] (BaseSpeed) || RETURN",
                  "displayLines": "BaseSpeed",
                  "constants": [],
                  "variables": [
                    "BaseSpeed"
                  ]
                }
              }
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "2004014_Monster_W2_Kafka_RL_Ability07_Part01": {
      "fileName": "2004014_Monster_W2_Kafka_RL_Ability07_Part01",
      "childAbilityList": [
        "2004014_Monster_W2_Kafka_RL_Ability07_Part01",
        "2004014_Monster_W2_Kafka_RL_Ability07_Part02",
        "2004014_Monster_W2_Kafka_RL_Ability07_Camera"
      ],
      "skillTrigger": "Skill07",
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
          "ability": "Monster_W2_Kafka_RL_Ability07_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2004014_Monster_W2_Kafka_RL_Ability04_Part02": {
      "fileName": "2004014_Monster_W2_Kafka_RL_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 3
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_W2_Kafka_RL_Part03WeaponEnhanceEffect"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemies by Aggro OR Random}}"
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
              "modifier": "Monster_W2_Kafka_RL_Ability04_Target"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                  "displayLines": "{[Skill04[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill04[0]]}"
                  ]
                },
                "HitSplit": 0.1,
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                  "displayLines": "{[Skill04[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill04[0]]}"
                  ]
                },
                "HitSplit": 0.1,
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                  "displayLines": "{[Skill04[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill04[0]]}"
                  ]
                },
                "HitSplit": 0.1,
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                  "displayLines": "{[Skill04[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill04[0]]}"
                  ]
                },
                "HitSplit": 0.1,
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                  "displayLines": "{[Skill04[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill04[0]]}"
                  ]
                },
                "HitSplit": 0.1,
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                  "displayLines": "{[Skill04[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill04[0]]}"
                  ]
                },
                "HitSplit": 0.1,
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                  "displayLines": "{[Skill04[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill04[0]]}"
                  ]
                },
                "HitSplit": 0.1,
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                  "displayLines": "{[Skill04[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill04[0]]}"
                  ]
                },
                "HitSplit": 0.1,
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                  "displayLines": "{[Skill04[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill04[0]]}"
                  ]
                },
                "HitSplit": 0.1,
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                  "displayLines": "{[Skill04[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill04[0]]}"
                  ]
                },
                "HitSplit": 0.1,
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Standard_DOT_Electric[<span class=\"descriptionNumberColor\">Shock</span>]"
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "ElectricFlag",
                  "value": 1
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Standard_DOT_Electric[<span class=\"descriptionNumberColor\">Shock</span>]",
              "duration": {
                "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
                "displayLines": "{[Skill01[2]]}",
                "constants": [],
                "variables": [
                  "{[Skill01[2]]}"
                ]
              },
              "baseChance": {
                "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
                "displayLines": "{[Skill01[1]]}",
                "constants": [],
                "variables": [
                  "{[Skill01[1]]}"
                ]
              },
              "immediateEffect": true,
              "valuePerStack": {
                "Modifier_Electric_DamagePercentage": {
                  "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
                  "displayLines": "{[Skill01[3]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[3]]}"
                  ]
                }
              },
              "stackFlag": "CharacterSkill"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "ElectricFlag",
                "compareType": "=",
                "value2": 1,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_W2_Kafka_EnhanceElectricDamage"
                }
              ]
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "ElectricFlag"
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Kafka Skill4 Other Targets}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill04[1]]}) || RETURN",
              "displayLines": "{[Skill04[1]]}",
              "constants": [],
              "variables": [
                "{[Skill04[1]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Kafka Skill4 Other Targets}}"
          },
          "modifier": "Monster_W2_Kafka_EnhanceElectricDamage"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "Monster_W2_Kafka_RL_Ability04_Target"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 3
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_W2_Kafka_RL_Part03WeaponEnhanceEffect"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "2004014_Monster_W2_Kafka_RL_Ability04_Part01": {
      "fileName": "2004014_Monster_W2_Kafka_RL_Ability04_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Kafka_RL_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2004014_Monster_W2_Kafka_RL_Passive01": {
      "fileName": "2004014_Monster_W2_Kafka_RL_Passive01",
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
          "modifier": "Monster_W2_Kafka_BattleScore1"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "DisPelCount"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "OneMorePerTurn"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Kafka_RL_Pursuit"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Kafka_AIChange"
        },
        {
          "name": "Boss Bar Display",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "display": true
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Kafka_RL_PartController"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Kafka_RL_Power",
          "valuePerStack": {
            "MDF_DamageUpRatio_PerLayer": {
              "operator": "Variables[0] (UnusedUnderThisBase_14) || RETURN",
              "displayLines": "UnusedUnderThisBase_14",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_14"
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Kafka_RL_LowHP",
          "valuePerStack": {
            "MDF_LowHPRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_17) || RETURN",
              "displayLines": "UnusedUnderThisBase_17",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_17"
              ]
            }
          }
        }
      ],
      "whenAdded": [],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_AIChange",
          "stackData": [],
          "latentQueue": [
            "DisPelCount"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_BattleScore1",
          "execute": [
            {
              "eventTrigger": "Modifier Cleansed [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Was",
                        "modifier": "Standard_MindControl[<span class=\"descriptionNumberColor\">Dominated</span>]"
                      },
                      {
                        "name": "Is Teammate",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "DisPelCount",
                      "context": "TargetEntity",
                      "value": 1,
                      "max": 3
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DisPelCount",
                        "compareType": ">=",
                        "value2": 3,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Achievement",
                          "matchTags": true,
                          "relatedAchievements": [
                            {
                              "title": "Will of Steel",
                              "desc": "In a single battle against Boss Kafka, dispel Dominated 3 times",
                              "rarity": "Low",
                              "type": "Hidden until Completion"
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
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "2004014_Monster_W3_Dinosaur_01_Ability04_Part02_Assist": {
      "fileName": "2004014_Monster_W3_Dinosaur_01_Ability04_Part02_Assist",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "2004014_Monster_W3_Dinosaur_01_Ability04_Part01_Assist": {
      "fileName": "2004014_Monster_W3_Dinosaur_01_Ability04_Part01_Assist",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "AIFlag_IF",
          "value": 2
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W3_Dinosaur_01_MonsterAssistBonus[<span class=\"descriptionNumberColor\">Terrathorn</span>]",
          "stackLimit": {
            "operator": "Variables[0] (AIFlag_IF) || RETURN",
            "displayLines": "AIFlag_IF",
            "constants": [],
            "variables": [
              "AIFlag_IF"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_W3_Dinosaur_01_Standard_Growth[<span class=\"descriptionNumberColor\">Obscure Blaze</span>]",
          "addStacksPerTrigger": 1
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_W3_Dinosaur_01_Standard_Growth[<span class=\"descriptionNumberColor\">Obscure Blaze</span>]",
          "addStacksPerTrigger": 1
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_W3_Dinosaur_01_Standard_Growth[<span class=\"descriptionNumberColor\">Obscure Blaze</span>]",
          "addStacksPerTrigger": 1
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "value1": "Enemy_W3_Dinosaur_01_Standard_Growth[<span class=\"descriptionNumberColor\">Obscure Blaze</span>]",
            "compareType": "<",
            "value2": 5,
            "valueType": "Layer"
          }
        }
      ],
      "references": []
    },
    "2004014_Monster_W3_Dinosaur_Ability06_Part02Crazy_Assist": {
      "fileName": "2004014_Monster_W3_Dinosaur_Ability06_Part02Crazy_Assist",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "2004014_Monster_W3_Dinosaur_Ability06_Part01_Assist": {
      "fileName": "2004014_Monster_W3_Dinosaur_Ability06_Part01_Assist",
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
          "modifier": "Monster_W3_Dinosaur_MonsterAssistBonus"
        },
        {
          "name": "Remove Modifier Behavior Flag(s)",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "flagNames": []
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "OneMorePerTurn"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "scope": "TargetEntity",
          "variableName": "Crazy_Flag",
          "value": 1
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "MModifier_Monster_W3_Dinosaur_Fury[<span class=\"descriptionNumberColor\">Boil</span>]"
          },
          "passed": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "Vibrate_Count",
              "context": "TargetEntity",
              "value": {
                "operator": "Variables[0] (UnusedUnderThisBase_19) || INVERT || RETURN",
                "displayLines": "-UnusedUnderThisBase_19",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_19"
                ]
              },
              "max": {
                "operator": "Variables[0] (UnusedUnderThisBase_20) || RETURN",
                "displayLines": "UnusedUnderThisBase_20",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_20"
                ]
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "MModifier_Monster_W3_Dinosaur_MonsterEnergyBar",
              "valuePerStack": {
                "MDF_MaxCount": {
                  "operator": "Variables[0] (UnusedUnderThisBase_20) || RETURN",
                  "displayLines": "UnusedUnderThisBase_20",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_20"
                  ]
                },
                "MDF_PartFlag": 1
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "Vibrate_Count",
              "value": 0
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "MModifier_Monster_W3_Dinosaur_AttackUpRatio[<span class=\"descriptionNumberColor\">Stove Heating</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "MModifier_Monster_W3_Dinosaur_MonsterEnergyBar",
              "valuePerStack": {
                "MDF_MaxCount": {
                  "operator": "Variables[0] (UnusedUnderThisBase_20) || RETURN",
                  "displayLines": "UnusedUnderThisBase_20",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_20"
                  ]
                },
                "MDF_PartFlag": 1
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "OneMore"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "MModifier_Monster_W3_Dinosaur_Calm[<span class=\"descriptionNumberColor\">Simmer</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "MModifier_Monster_W3_Dinosaur_Fury[<span class=\"descriptionNumberColor\">Boil</span>]"
            },
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "multiBase": {
                "operator": "Variables[0] (UnusedUnderThisBase_21) || Constants[0] (1) || SUB || RETURN",
                "displayLines": "(UnusedUnderThisBase_21 - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "UnusedUnderThisBase_21"
                ]
              }
            }
          ]
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "scope": "TargetEntity",
          "variableName": "AIFlag",
          "value": 8
        }
      ],
      "references": []
    },
    "2004014_Monster_XP_Elite01_01_Ability02_Part02_Assist": {
      "fileName": "2004014_Monster_XP_Elite01_01_Ability02_Part02_Assist",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "2004014_Monster_XP_Elite01_01_Ability02_Part01_Assist": {
      "fileName": "2004014_Monster_XP_Elite01_01_Ability02_Part01_Assist",
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
          "modifier": "OneMorePerTurn"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "OneMore"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_XP_Elite01_01_MonsterAssistBonus[<span class=\"descriptionNumberColor\">Crystallite</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "XP_Ice_Elite_Powerful_Modifier[<span class=\"descriptionNumberColor\">Freezing Point</span>]",
          "valuePerStack": {
            "Modifier_AllDamageTypeResistance": {
              "operator": "Variables[0] (UnusedUnderThisBase_26) || RETURN",
              "displayLines": "UnusedUnderThisBase_26",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_26"
              ]
            },
            "Modifier_StanceWeakAddedRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_25) || RETURN",
              "displayLines": "UnusedUnderThisBase_25",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_25"
              ]
            },
            "Modifier_Stance": {
              "operator": "Variables[0] (UnusedUnderThisBase_24) || RETURN",
              "displayLines": "UnusedUnderThisBase_24",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_24"
              ]
            }
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "StanceBreak_Sign",
          "value": 1
        }
      ],
      "references": []
    },
    "2004014_Monster_XP_Elite01_Ability03_Part02_Assist": {
      "fileName": "2004014_Monster_XP_Elite01_Ability03_Part02_Assist",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "2004014_Monster_XP_Elite01_Ability03_Part01_Assist": {
      "fileName": "2004014_Monster_XP_Elite01_Ability03_Part01_Assist",
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
          "modifier": "OneMorePerTurn"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "OneMore"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_XP_Elite01_MonsterAssistBonus"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "XP_Fire_Elite_Burning_Modifier_2[<span class=\"descriptionNumberColor\">Spontaneous Combustion</span>]",
          "valuePerStack": {
            "Modifier_StanceWeakAddedRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_22) || RETURN",
              "displayLines": "UnusedUnderThisBase_22",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_22"
              ]
            },
            "Modifier_Stance": {
              "operator": "Variables[0] (UnusedUnderThisBase_23) || RETURN",
              "displayLines": "UnusedUnderThisBase_23",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_23"
              ]
            }
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "StanceBreak_Sign",
          "value": 1
        }
      ],
      "references": []
    },
    "2004014_Monster_W2_Kafka_AbilityIF01_Part02": {
      "fileName": "2004014_Monster_W2_Kafka_AbilityIF01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
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
              "target": "{{Ability Target(ST)}}"
            },
            "characterName": null
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "Monster_W2_Kafka_IF03_SummonKillBonus01[<span class=\"descriptionNumberColor\">Madden</span>]",
              "valuePerStack": {
                "MDF_KillBonus": {
                  "operator": "Variables[0] ({[SkillIF01[2]]}) || RETURN",
                  "displayLines": "{[SkillIF01[2]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillIF01[2]]}"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
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
              "target": "{{Ability Target(ST)}}"
            },
            "characterName": null
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "Monster_W2_Kafka_IF03_SummonKillBonus02[<span class=\"descriptionNumberColor\">Madden</span>]",
              "valuePerStack": {
                "MDF_KillBonus": {
                  "operator": "Variables[0] ({[SkillIF01[2]]}) || RETURN",
                  "displayLines": "{[SkillIF01[2]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillIF01[2]]}"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 2
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "Enemy_W2_Kafka_IF_EX04_Boss"
              }
            ]
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster's Minions}}"
                },
                "compareType": "=",
                "value2": 2,
                "livingTargets": true
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
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
                      "target": "{{Ability Target(ST)}}"
                    },
                    "characterName": null
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
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
                      "target": "{{Ability Target(ST)}}"
                    },
                    "characterName": null
                  }
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
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
              },
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
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
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "Break",
                        "invertCondition": true
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
                      "modifier": "Monster_W2_Kafka_IF03_SummonKillBonus03[<span class=\"descriptionNumberColor\">Madden</span>]",
                      "valuePerStack": {
                        "MDF_KillBonus": {
                          "operator": "Variables[0] ({[SkillIF01[2]]}) || RETURN",
                          "displayLines": "{[SkillIF01[2]]}",
                          "constants": [],
                          "variables": [
                            "{[SkillIF01[2]]}"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
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
              },
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
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
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "Break",
                        "invertCondition": true
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
                      "modifier": "Monster_W2_Kafka_IF03_SummonKillBonus04[<span class=\"descriptionNumberColor\">Madden</span>]",
                      "valuePerStack": {
                        "MDF_KillBonus": {
                          "operator": "Variables[0] ({[SkillIF01[2]]}) || RETURN",
                          "displayLines": "{[SkillIF01[2]]}",
                          "constants": [],
                          "variables": [
                            "{[SkillIF01[2]]}"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
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
                  "target": "{{Ability Target(ST)}}"
                },
                "characterName": null
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "modifier": "Monster_W2_Kafka_IF03_SummonKillBonus03[<span class=\"descriptionNumberColor\">Madden</span>]",
                  "valuePerStack": {
                    "MDF_KillBonus": {
                      "operator": "Variables[0] ({[SkillIF01[2]]}) || RETURN",
                      "displayLines": "{[SkillIF01[2]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillIF01[2]]}"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
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
                  "target": "{{Ability Target(ST)}}"
                },
                "characterName": null
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "modifier": "Monster_W2_Kafka_IF03_SummonKillBonus04[<span class=\"descriptionNumberColor\">Madden</span>]",
                  "valuePerStack": {
                    "MDF_KillBonus": {
                      "operator": "Variables[0] ({[SkillIF01[2]]}) || RETURN",
                      "displayLines": "{[SkillIF01[2]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillIF01[2]]}"
                      ]
                    }
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
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 1
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "Enemy_W2_Kafka_IF_EX04_Boss"
              }
            }
          ]
        }
      ],
      "references": []
    },
    "2004014_Monster_W2_Kafka_AbilityIF01_Part01": {
      "fileName": "2004014_Monster_W2_Kafka_AbilityIF01_Part01",
      "childAbilityList": [
        "2004014_Monster_W2_Kafka_AbilityIF01_Part01",
        "2004014_Monster_W2_Kafka_AbilityIF01_Part02",
        "2004014_Monster_W2_Kafka_AbilityIF01_Camera",
        "2004014_Monster_W2_Kafka_AbilityIF01_L_Camera",
        "2004014_Monster_W2_Kafka_AbilityIF01_R_Camera"
      ],
      "skillTrigger": "SkillIF01",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 1
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "Enemy_W2_Kafka_IF_EX04_Boss"
          },
          "passed": [
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
                  "name": "IF",
                  "conditions": {
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
                      "target": "{{Ability Target(ST)}}"
                    },
                    "characterName": null
                  },
                  "passed": [
                    "Deleted bullshit"
                  ],
                  "failed": [
                    "Deleted bullshit"
                  ]
                }
              ],
              "failed": [
                "Deleted bullshit"
              ]
            }
          ],
          "failed": [
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
                      "target": "{{Ability Target(ST)}}"
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
                      "target": "{{Ability Target(ST)}}"
                    },
                    "characterName": null
                  }
                ]
              },
              "passed": [
                "Deleted bullshit"
              ],
              "failed": [
                "Deleted bullshit"
              ]
            }
          ]
        },
        {
          "name": "UI Display Event",
          "popUpText": "Puppet Understudy"
        },
        {
          "name": "Trigger Joint-Attack Ability",
          "abilityList": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "inherentTarget": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "ability": "Monster_W2_Kafka_AbilityIF01_Part02"
            },
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "conditions": {
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
                  "target": "{{Ability Target(ST)}}"
                },
                "characterName": null
              },
              "ability": "Monster_XP_Elite01_Ability03_Part01_Assist"
            },
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "conditions": {
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
                  "target": "{{Ability Target(ST)}}"
                },
                "characterName": null
              },
              "ability": "Monster_XP_Elite01_01_Ability02_Part01_Assist"
            },
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "conditions": {
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
                  "target": "{{Ability Target(ST)}}"
                },
                "characterName": null
              },
              "ability": "Monster_W3_Dinosaur_Ability06_Part01_Assist"
            },
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "conditions": {
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
                  "target": "{{Ability Target(ST)}}"
                },
                "characterName": null
              },
              "ability": "Monster_W3_Dinosaur_01_Ability04_Part01_Assist"
            },
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Add Target by Enemy ID",
                "ID": 301301201,
                "characterName": "Memory Zone Meme \"Shell of Faded Rage\""
              },
              "conditions": {
                "name": "AND",
                "conditionList": [
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
                      "target": "{{Ability Target(ST)}}"
                    },
                    "characterName": null
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "Enemy_W2_Kafka_IF_EX04_Boss"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Add Target by Enemy ID",
                      "ID": 301301201,
                      "characterName": "Memory Zone Meme \"Shell of Faded Rage\""
                    },
                    "flagName": "STAT_CTRL",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Add Target by Enemy ID",
                      "ID": 301301201,
                      "characterName": "Memory Zone Meme \"Shell of Faded Rage\""
                    },
                    "flagName": "DisableAction",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Add Target by Enemy ID",
                      "ID": 301301201,
                      "characterName": "Memory Zone Meme \"Shell of Faded Rage\""
                    },
                    "flagName": "Break",
                    "invertCondition": true
                  }
                ]
              },
              "ability": "Monster_W3_Dinosaur_01_Ability04_Part01_Assist"
            },
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Add Target by Enemy ID",
                "ID": 300301401,
                "characterName": "Dreamjolt Troupe's Beyond Overcooked"
              },
              "conditions": {
                "name": "AND",
                "conditionList": [
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
                      "target": "{{Ability Target(ST)}}"
                    },
                    "characterName": null
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "Enemy_W2_Kafka_IF_EX04_Boss"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Add Target by Enemy ID",
                      "ID": 300301401,
                      "characterName": "Dreamjolt Troupe's Beyond Overcooked"
                    },
                    "flagName": "STAT_CTRL",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Add Target by Enemy ID",
                      "ID": 300301401,
                      "characterName": "Dreamjolt Troupe's Beyond Overcooked"
                    },
                    "flagName": "DisableAction",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Add Target by Enemy ID",
                      "ID": 300301401,
                      "characterName": "Dreamjolt Troupe's Beyond Overcooked"
                    },
                    "flagName": "Break",
                    "invertCondition": true
                  }
                ]
              },
              "ability": "Monster_W3_Dinosaur_Ability06_Part01_Assist"
            }
          ]
        }
      ],
      "references": []
    },
    "2004014_Monster_Boss_Kafka_IF_Summon_Death_NoInsert": {
      "fileName": "2004014_Monster_Boss_Kafka_IF_Summon_Death_NoInsert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "2004014_Monster_Boss_Kafka_IF_Summon_Death_Insert": {
      "fileName": "2004014_Monster_Boss_Kafka_IF_Summon_Death_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Ability Value",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            },
            "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
            "compareType": ">",
            "value2": 0
          },
          "passed": [
            "Deleted bullshit",
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Compare: Target",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "target2": {
                        "name": "Target Name",
                        "target": "{{Caster's Summoner}}"
                      },
                      "invertCondition": true
                    }
                  }
                ]
              },
              "searchRandom": true,
              "includeDyingTargets": true,
              "conditions": {
                "name": "Compare: Ability Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                "compareType": "<=",
                "value2": 0
              },
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Summoner}}"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
                  }
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Compare: Target",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "target2": {
                        "name": "Target Name",
                        "target": "{{Caster's Summoner}}"
                      },
                      "invertCondition": true
                    }
                  }
                ]
              },
              "searchRandom": true,
              "includeDyingTargets": true
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "modifier": "Enemy_W2_Kafka_IF_Weakness_Physical"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "modifier": "Enemy_W2_Kafka_IF_Weakness_Fire"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "modifier": "Enemy_W2_Kafka_IF_Weakness_Wind"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "modifier": "Enemy_W2_Kafka_IF_Weakness_Imaginary"
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "variableName": "SummonDeathInsertCheck",
          "value": 0
        }
      ],
      "references": []
    },
    "2004014_Monster_W2_Kafka_IF03_SummonMonster_Insert_Part01": {
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
    },
    "2004014_Monster_W2_Kafka_Ability06_Part02_IF": {
      "fileName": "2004014_Monster_W2_Kafka_Ability06_Part02_IF",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 3
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_W2_Kafka_RL_Part03WeaponEnhanceEffect"
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "Standard_MindControl_Target"
        },
        "Reset Triggers: Attack",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
              "displayLines": "{[Skill06[0]]}",
              "constants": [],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "HitSplit": 0.15,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
              "displayLines": "{[Skill06[0]]}",
              "constants": [],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "HitSplit": 0.15,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
              "displayLines": "{[Skill06[0]]}",
              "constants": [],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "HitSplit": 0.15,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
              "displayLines": "{[Skill06[0]]}",
              "constants": [],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "HitSplit": 0.15,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
              "displayLines": "{[Skill06[0]]}",
              "constants": [],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "HitSplit": 0.15,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
              "displayLines": "{[Skill06[0]]}",
              "constants": [],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "HitSplit": 0.25,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "Monster_W2_Kafka_EnhanceElectricDamage"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "scope": "TargetEntity",
          "variableName": "PursuitCheck"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 3
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_W2_Kafka_RL_Part03WeaponEnhanceEffect"
            }
          ]
        }
      ],
      "references": []
    },
    "2004014_Monster_W2_Kafka_Ability06_Part01_IF": {
      "fileName": "2004014_Monster_W2_Kafka_Ability06_Part01_IF",
      "childAbilityList": [
        "2004014_Monster_W2_Kafka_Ability06_Part01_IF",
        "2004014_Monster_W2_Kafka_Ability06_Part02_IF",
        "2004014_Monster_W2_Kafka_Ability06_Camera"
      ],
      "skillTrigger": "Skill06",
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
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "Monster_W2_Kafka_Ability06_Part02_IF",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2004014_Monster_W2_Kafka_IF03_Passive01": {
      "fileName": "2004014_Monster_W2_Kafka_IF03_Passive01",
      "childAbilityList": [
        "2004014_Monster_W2_Kafka_IF03_Passive01"
      ],
      "skillTrigger": "PassiveSkill01",
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
          "modifier": "Monster_W2_Kafka_BattleScore1"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "DisPelCount"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Kafka_IF02_Pursuit"
        },
        {
          "name": "Boss Bar Display",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "display": true
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Kafka_IF03_PartController"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Kafka_IF03_Summon"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Kafka_IF03_MonsterAssistControl"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_W2_Cocolia_IF_SoftFrenzyController",
          "valuePerStack": {
            "MDF_FrenzyStartDelay": {
              "operator": "Variables[0] ({[SkillEX05[0]]}) || RETURN",
              "displayLines": "{[SkillEX05[0]]}",
              "constants": [],
              "variables": [
                "{[SkillEX05[0]]}"
              ]
            },
            "MDF_FrenzyIntervalDelay": {
              "operator": "Variables[0] ({[SkillEX05[1]]}) || RETURN",
              "displayLines": "{[SkillEX05[1]]}",
              "constants": [],
              "variables": [
                "{[SkillEX05[1]]}"
              ]
            },
            "MDF_MaxFrenzyLayer": {
              "operator": "Variables[0] ({[SkillEX05[2]]}) || RETURN",
              "displayLines": "{[SkillEX05[2]]}",
              "constants": [],
              "variables": [
                "{[SkillEX05[2]]}"
              ]
            },
            "MDF_TokenDMGAddRatioPerLayer": {
              "operator": "Variables[0] ({[SkillEX05[3]]}) || RETURN",
              "displayLines": "{[SkillEX05[3]]}",
              "constants": [],
              "variables": [
                "{[SkillEX05[3]]}"
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Kafka_IF03_SummonControl",
          "valuePerStack": {
            "MDF_WeakDMGReduceRatio": {
              "operator": "Variables[0] ({[SkillEX01[3]]}) || RETURN",
              "displayLines": "{[SkillEX01[3]]}",
              "constants": [],
              "variables": [
                "{[SkillEX01[3]]}"
              ]
            },
            "MDF_WeakStatusProbReduceRatio": {
              "operator": "Variables[0] ({[SkillEX01[4]]}) || RETURN",
              "displayLines": "{[SkillEX01[4]]}",
              "constants": [],
              "variables": [
                "{[SkillEX01[4]]}"
              ]
            },
            "MDF_WeakStanceSliceRatio": {
              "operator": "Variables[0] ({[SkillEX01[5]]}) || RETURN",
              "displayLines": "{[SkillEX01[5]]}",
              "constants": [],
              "variables": [
                "{[SkillEX01[5]]}"
              ]
            },
            "MDF_BreakDMGTokenAddRatio": {
              "operator": "Variables[0] ({[SkillEX02[1]]}) || RETURN",
              "displayLines": "{[SkillEX02[1]]}",
              "constants": [],
              "variables": [
                "{[SkillEX02[1]]}"
              ]
            },
            "MDF_BreakDelayRatio": {
              "operator": "Variables[0] ({[SkillEX02[2]]}) || RETURN",
              "displayLines": "{[SkillEX02[2]]}",
              "constants": [],
              "variables": [
                "{[SkillEX02[2]]}"
              ]
            },
            "MDF_FrenzyDMGTokenAddRatio": {
              "operator": "Variables[0] ({[SkillEX02[3]]}) || RETURN",
              "displayLines": "{[SkillEX02[3]]}",
              "constants": [],
              "variables": [
                "{[SkillEX02[3]]}"
              ]
            },
            "MDF_FrenzySpeedAddRatio": {
              "operator": "Variables[0] ({[SkillEX02[4]]}) || RETURN",
              "displayLines": "{[SkillEX02[4]]}",
              "constants": [],
              "variables": [
                "{[SkillEX02[4]]}"
              ]
            },
            "MDF_FrenzyStanceSliceRatio": {
              "operator": "Variables[0] ({[SkillEX02[5]]}) || RETURN",
              "displayLines": "{[SkillEX02[5]]}",
              "constants": [],
              "variables": [
                "{[SkillEX02[5]]}"
              ]
            },
            "MDF_StanceDMGPerTeamMate": {
              "operator": "Variables[0] ({[SkillEX02[0]]}) || RETURN",
              "displayLines": "{[SkillEX02[0]]}",
              "constants": [],
              "variables": [
                "{[SkillEX02[0]]}"
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Kafka_IF03_CancelMindControlBEOnBeingBreak",
          "casterAssign": "CasterSelf"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "MModifier_Kafka_IF_BattleAlert"
        }
      ],
      "whenAdded": [],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_IF02_ListenMonsterActionModifier",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_HasTarget",
                  "value": 0
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "Monster_W2_Kafka_IF02_Ability08_ExecuteTag"
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Monster_Company_Coin[<span class=\"descriptionNumberColor\">Performance Points</span>]"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Monster_Company_Coin_Elite[<span class=\"descriptionNumberColor\">Performance Points</span>]"
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_HasTarget",
                      "value": 1
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Monster_W2_Kafka_IF02_Ability08_ExecuteTag"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_HasTarget",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "JustinBreak",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "Monster_W2_Kafka_IF02_ContainJXDTag"
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "AIFlag",
                          "value": 3
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_HasTarget",
                          "value": 0
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "JustinBreak",
                          "value": 0
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_BattleScore1",
          "execute": [
            {
              "eventTrigger": "Modifier Cleansed [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Was",
                        "modifier": "Standard_MindControl[<span class=\"descriptionNumberColor\">Dominated</span>]"
                      },
                      {
                        "name": "Is Teammate",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "DisPelCount",
                      "context": "TargetEntity",
                      "value": 1,
                      "max": 3
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DisPelCount",
                        "compareType": ">=",
                        "value2": 3,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Achievement",
                          "matchTags": true,
                          "relatedAchievements": [
                            {
                              "title": "Will of Steel",
                              "desc": "In a single battle against Boss Kafka, dispel Dominated 3 times",
                              "rarity": "Low",
                              "type": "Hidden until Completion"
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
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_IF02_BEFrozen",
          "modifierFlags": [
            "MuteSpeed"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_IF02_BreakListen",
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "JustinBreak",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_IF03_CancelMindControlBEOnBeingBreak",
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Caster's Battle-Events}}"
                      },
                      "searchRandom": true,
                      "ifTargetFound": [
                        {
                          "name": "Force Entity Death",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster's Battle-Events}}"
                          }
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          "modifier": "Monster_W2_Kafka_RL_MindControl_True[<span class=\"descriptionNumberColor\">Psychological Suggestion</span>]"
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          "modifier": "Monster_W2_Kafka_RL_MindControl_TrueEffect[<span class=\"descriptionNumberColor\">Psychological Suggestion Revelation</span>]"
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          "modifier": "Monster_W2_Kafka_RL_MindControl_False[<span class=\"descriptionNumberColor\">Psychological Suggestion</span>]"
                        },
                        {
                          "name": "Define Custom Variable",
                          "scope": "TargetEntity",
                          "variableName": "BattleEventFlag",
                          "value": 0
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "DisPelCount"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "MModifier_Kafka_IF_BattleAlert",
          "execute": [
            {
              "eventTrigger": "Entity Death [Anyone]",
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
                        "team": "Enemy Team"
                      },
                      {
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "compareType": "=",
                        "value2": 3
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder's Team Members(Exclude Self)}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "noTargetFound": [
                        {
                          "name": "Update Enemy InfoPanel"
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
                      "name": "Update Enemy InfoPanel",
                      "text": "Defeat summoned enemies to weaken the boss",
                      "type": "Warning"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "DisPelCount"
          ]
        }
      ]
    },
    "2004014_Monster_W2_Kafka_IF_EX05_PassiveAbility": {
      "fileName": "2004014_Monster_W2_Kafka_IF_EX05_PassiveAbility",
      "skillTrigger": "SkillEX05",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "2004014_Monster_W2_Kafka_IF_EX04_PassiveAbility": {
      "fileName": "2004014_Monster_W2_Kafka_IF_EX04_PassiveAbility",
      "skillTrigger": "SkillEX04",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HardLevel",
            "compareType": ">=",
            "value2": 4
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Enemy_W2_Kafka_IF_EX04_Boss"
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Enemy_W2_Kafka_IF_EX04_Boss",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "2004014_Monster_W2_Kafka_IF_EX03_PassiveAbility": {
      "fileName": "2004014_Monster_W2_Kafka_IF_EX03_PassiveAbility",
      "skillTrigger": "SkillEX03",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HardLevel",
            "compareType": ">=",
            "value2": 3
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Enemy_W2_Kafka_IF_EX03_Boss"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Enemy_W2_Kafka_IF_EnemyCount",
              "valuePerStack": {
                "MDF_ShowValue1": {
                  "operator": "Variables[0] ({[SkillEX03[0]]}) || RETURN",
                  "displayLines": "{[SkillEX03[0]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillEX03[0]]}"
                  ]
                },
                "MDF_ShowValue2": {
                  "operator": "Variables[0] ({[SkillEX03[0]]}) || RETURN",
                  "displayLines": "{[SkillEX03[0]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillEX03[0]]}"
                  ]
                }
              }
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Enemy_W2_Kafka_IF_EX03_Boss",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "2004014_Monster_W2_Kafka_IF_EX02_PassiveAbility": {
      "fileName": "2004014_Monster_W2_Kafka_IF_EX02_PassiveAbility",
      "skillTrigger": "SkillEX02",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HardLevel",
            "compareType": ">=",
            "value2": 2
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Enemy_W2_Kafka_IF_EX02_Boss"
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Enemy_W2_Kafka_IF_EX02_Boss",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "2004014_Monster_W2_Kafka_IF_EX01_PassiveAbility": {
      "fileName": "2004014_Monster_W2_Kafka_IF_EX01_PassiveAbility",
      "skillTrigger": "SkillEX01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HardLevel",
            "compareType": ">=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Enemy_W2_Cocolia_IF_SuperArmorController",
              "valuePerStack": {
                "MDF_IF_BOSS_BreakDelay": {
                  "operator": "Variables[0] ({[SkillEX01[2]]}) || RETURN",
                  "displayLines": "{[SkillEX01[2]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillEX01[2]]}"
                  ]
                },
                "MDF_IF_BOSS_WeaknessDMGUpRatio": {
                  "operator": "Variables[0] ({[SkillEX01[1]]}) || RETURN",
                  "displayLines": "{[SkillEX01[1]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillEX01[1]]}"
                  ]
                },
                "MDF_IF_BOSS_Standard_Defence": {
                  "operator": "Variables[0] ({[SkillEX01[0]]}) || RETURN",
                  "displayLines": "{[SkillEX01[0]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillEX01[0]]}"
                  ]
                }
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Enemy_W2_Kafka_IF_WeaknessSplit",
              "valuePerStack": {
                "MDF_MaxSummonNum": 2,
                "MDF_StanceWeaknessList": 1725,
                "_CurrWeaknessList": 1725
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Enemy_W2_Kafka_IF_AssistController",
              "valuePerStack": {
                "MDF_DotMaxCount": {
                  "operator": "Variables[0] ({[SkillIF01[0]]}) || RETURN",
                  "displayLines": "{[SkillIF01[0]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillIF01[0]]}"
                  ]
                },
                "MDF_DotConsume": {
                  "operator": "Variables[0] ({[SkillIF01[1]]}) || RETURN",
                  "displayLines": "{[SkillIF01[1]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillIF01[1]]}"
                  ]
                },
                "MDF_DotCurCount": {
                  "operator": "Variables[0] ({[SkillIF01[3]]}) || RETURN",
                  "displayLines": "{[SkillIF01[3]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillIF01[3]]}"
                  ]
                }
              }
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Enemy_W2_Kafka_IF_AssistController",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase] [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Current Turn Is",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_DotCurCount",
                      "value": 1,
                      "max": {
                        "operator": "Variables[0] (MDF_DotMaxCount) || RETURN",
                        "displayLines": "MDF_DotMaxCount",
                        "constants": [],
                        "variables": [
                          "MDF_DotMaxCount"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Current Turn Is",
                        "target": {
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
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_DotCurCount",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (MDF_DotConsume) || RETURN",
                          "displayLines": "MDF_DotConsume",
                          "constants": [],
                          "variables": [
                            "MDF_DotConsume"
                          ]
                        }
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_DotCurCount",
                        "compareType": "<",
                        "value2": {
                          "operator": "Variables[0] (MDF_DotMaxCount) || RETURN",
                          "displayLines": "MDF_DotMaxCount",
                          "constants": [],
                          "variables": [
                            "MDF_DotMaxCount"
                          ]
                        }
                      },
                      {
                        "name": "Is Entity a Battle Event/Summon",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
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
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "Monster_W2_Kafka_IF03_SummonKillBonus01[<span class=\"descriptionNumberColor\">Madden</span>]",
                            "invertCondition": true
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "Monster_W2_Kafka_IF03_SummonKillBonus02[<span class=\"descriptionNumberColor\">Madden</span>]",
                            "invertCondition": true
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "Monster_W2_Kafka_IF03_SummonKillBonus03[<span class=\"descriptionNumberColor\">Madden</span>]",
                            "invertCondition": true
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "Monster_W2_Kafka_IF03_SummonKillBonus04[<span class=\"descriptionNumberColor\">Madden</span>]",
                            "invertCondition": true
                          },
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
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "flagName": "DisableAction",
                            "invertCondition": true
                          },
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "flagName": "Break",
                            "invertCondition": true
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W2_Kafka_AbilityIF01_Part01",
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "priorityTag": "MonsterInsertAttackSelf",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "allowAbilityTriggers": false
                        },
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "MDF_DotCurCount",
                          "value": {
                            "operator": "Variables[0] (MDF_DotConsume) || INVERT || RETURN",
                            "displayLines": "-MDF_DotConsume",
                            "constants": [],
                            "variables": [
                              "MDF_DotConsume"
                            ]
                          },
                          "max": {
                            "operator": "Variables[0] (MDF_DotMaxCount) || RETURN",
                            "displayLines": "MDF_DotMaxCount",
                            "constants": [],
                            "variables": [
                              "MDF_DotMaxCount"
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Current Turn Is",
                        "target": {
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
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_DotCurCount",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (MDF_DotConsume) || RETURN",
                          "displayLines": "MDF_DotConsume",
                          "constants": [],
                          "variables": [
                            "MDF_DotConsume"
                          ]
                        }
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_DotCurCount",
                        "compareType": "=",
                        "value2": {
                          "operator": "Variables[0] (MDF_DotMaxCount) || RETURN",
                          "displayLines": "MDF_DotMaxCount",
                          "constants": [],
                          "variables": [
                            "MDF_DotMaxCount"
                          ]
                        }
                      },
                      {
                        "name": "Is Entity a Battle Event/Summon",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
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
                              "target": "{{Modifier Holder}}"
                            },
                            "flagName": "STAT_CTRL",
                            "invertCondition": true
                          },
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "flagName": "DisableAction",
                            "invertCondition": true
                          },
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "flagName": "Break",
                            "invertCondition": true
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W2_Kafka_AbilityIF01_Part01",
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "priorityTag": "MonsterInsertAttackSelf",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "allowAbilityTriggers": false
                        },
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "MDF_DotCurCount",
                          "value": {
                            "operator": "Variables[0] (MDF_DotConsume) || INVERT || RETURN",
                            "displayLines": "-MDF_DotConsume",
                            "constants": [],
                            "variables": [
                              "MDF_DotConsume"
                            ]
                          },
                          "max": {
                            "operator": "Variables[0] (MDF_DotMaxCount) || RETURN",
                            "displayLines": "MDF_DotMaxCount",
                            "constants": [],
                            "variables": [
                              "MDF_DotMaxCount"
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
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [
            "MDF_DotMaxCount",
            "MDF_DotConsume",
            "MDF_DotCurCount"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W2_Kafka_IF_AssistController_Save[<span class=\"descriptionNumberColor\">Threads of the Puppet</span>]",
          "description": "Consumes Threads of the Puppet to apply Madden to summons.",
          "type": "Other",
          "statusName": "Threads of the Puppet"
        }
      ]
    },
    "2004014_Monster_W2_Kafka_IF_PassiveAbility01_Insert_Part01": {
      "fileName": "2004014_Monster_W2_Kafka_IF_PassiveAbility01_Insert_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "WAIT FOR",
          "condition": {
            "name": "Death Animation Completed",
            "team": "Enemy Team",
            "type": "Team Characters"
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Insert_Flag"
        },
        {
          "name": "Looped Event",
          "maxLoops": 4,
          "Event": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "team": "Enemy Team",
                "location": "Left"
              },
              "passed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": 0.5,
                  "refreshPositions": false,
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Constants[0] (8032010) || RETURN",
                        "displayLines": "8032010",
                        "constants": [
                          8032010
                        ],
                        "variables": []
                      },
                      "locationType": "First"
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Recently Summoned Enemies}}"
                  },
                  "modifier": "Monster_W2_Kafka_IF_SummonRotation_DarkTeamCenter"
                }
              ],
              "failed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": 0.5,
                  "refreshPositions": false,
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Constants[0] (8032010) || RETURN",
                        "displayLines": "8032010",
                        "constants": [
                          8032010
                        ],
                        "variables": []
                      },
                      "locationType": "Last"
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Recently Summoned Enemies}}"
                  },
                  "modifier": "Monster_W2_Kafka_IF_SummonRotation_DarkTeamCenter"
                }
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "Monster_W2_Kafka_IF_SummonRotation_DarkTeamCenter"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_W2_Kafka_IF_BeControled"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_W2_Kafka_IF_SummonRotation_DarkTeamCenter"
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_IF_BeControled",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": [
            "Insert_Flag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_IF_SummonRotation_DarkTeamCenter",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": [
            "Insert_Flag"
          ]
        }
      ]
    },
    "2004014_BattleEventAbility_W2_Kafka_IF_Insert": {
      "fileName": "2004014_BattleEventAbility_W2_Kafka_IF_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Revelation"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Monster_W2_Kafka_IF_MindControl_True"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Monster_W2_Kafka_IF_MindControl_TrueEffect"
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_W2_Kafka_IF_MindControl_True"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_W2_Kafka_IF_MindControl_TrueEffect"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Standard_MindControl[<span class=\"descriptionNumberColor\">Dominated</span>]",
              "duration": {
                "operator": "Variables[0] ({[Skill07[1]]}) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "({[Skill07[1]]} + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "{[Skill07[1]]}"
                ]
              },
              "baseChance": {
                "operator": "Variables[0] ({[Skill07[2]]}) || RETURN",
                "displayLines": "{[Skill07[2]]}",
                "constants": [],
                "variables": [
                  "{[Skill07[2]]}"
                ]
              },
              "valuePerStack": {
                "MDF_MindControlDamagePercentage": {
                  "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                  "displayLines": "{[Skill05[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill05[1]]}"
                  ]
                },
                "MDF_MaxDamageRatio": {
                  "operator": "Variables[0] ({[Skill05[2]]}) || RETURN",
                  "displayLines": "{[Skill05[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill05[2]]}"
                  ]
                },
                "MDF_MinDamageRatio": {
                  "operator": "Variables[0] ({[Skill05[3]]}) || RETURN",
                  "displayLines": "{[Skill05[3]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill05[3]]}"
                  ]
                }
              },
              "success": [
                {
                  "name": "Define Custom Variable",
                  "scope": "TargetEntity",
                  "variableName": "MindControlSuccess",
                  "value": 1
                }
              ]
            },
            {
              "name": "Action Advance/Delay",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "advanceType": "Advance",
              "multiAdd": -1
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "MindControlSuccess",
            "compareType": "=",
            "value2": 1,
            "contextScope": "TargetEntity"
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "scope": "TargetEntity",
              "variableName": "MindControlSuccess",
              "value": 0
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "Monster_W2_Kafka_IF_MindControl_False"
        }
      ],
      "references": []
    },
    "2004014_BattleEventAbility_W2_Kafka_IF": {
      "fileName": "2004014_BattleEventAbility_W2_Kafka_IF",
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
          "modifier": "Modifier_W2_Kafka_RL_BattleEvent"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Modifier_W2_Kafka_RL_BattleEvent_BaseSpeed"
        },
        {
          "name": "Action Advance/Delay",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "advanceType": "Set",
          "multiAdd": "MDF_W2_Kafka_00_RL_BattleEvent_ActionDelay"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Modifier_W2_Kafka_RL_BattleEvent_BaseSpeed",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_W2_Kafka_00_RL_BattleEvent_BaseSpeed) || RETURN",
                    "displayLines": "MDF_W2_Kafka_00_RL_BattleEvent_BaseSpeed",
                    "constants": [],
                    "variables": [
                      "MDF_W2_Kafka_00_RL_BattleEvent_BaseSpeed"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Modifier_W2_Kafka_RL_BattleEvent",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "BattleEventAbility_W2_Kafka_IF_Insert",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Battle Event's Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "priorityTag": "MonsterInsertAttackSelf",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                },
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "2004014_Monster_W2_Kafka_IF_PassiveAbility_Insert2": {
      "fileName": "2004014_Monster_W2_Kafka_IF_PassiveAbility_Insert2",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "silent": true
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Monster_ChangePhase"
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "multiBase": 0
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Kafka_IF_Part03EnhanceEffect"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Kafka_IF_Part03WeaponEnhanceEffect"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Kafka_IF_Endurance"
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
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Battle Event List}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "Modifier_W2_Kafka_RL_BattleEvent"
          },
          "ifTargetFound": [
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Kafka_IF_PartController"
        }
      ],
      "references": []
    },
    "2004014_Monster_W2_Kafka_IF_PassiveAbility_Insert": {
      "fileName": "2004014_Monster_W2_Kafka_IF_PassiveAbility_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "silent": true
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "multiBase": 0
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Monster_ChangePhase"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Kafka_IF_Endurance"
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
      "references": []
    },
    "2004014_Monster_W2_Kafka_IF_Ability10_Part02": {
      "fileName": "2004014_Monster_W2_Kafka_IF_Ability10_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Looped Event",
          "maxLoops": 4,
          "Event": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "team": "Enemy Team",
                "location": "Left"
              },
              "passed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": 0,
                  "refreshPositions": false,
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Constants[0] (8032010) || RETURN",
                        "displayLines": "8032010",
                        "constants": [
                          8032010
                        ],
                        "variables": []
                      },
                      "locationType": "First"
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Recently Summoned Enemies}}"
                  },
                  "modifier": "Monster_W2_Kafka_IF_SummonRotation"
                }
              ],
              "failed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": 0,
                  "refreshPositions": false,
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Constants[0] (8032010) || RETURN",
                        "displayLines": "8032010",
                        "constants": [
                          8032010
                        ],
                        "variables": []
                      },
                      "locationType": "Last"
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Recently Summoned Enemies}}"
                  },
                  "modifier": "Monster_W2_Kafka_IF_SummonRotation"
                }
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "Monster_W2_Kafka_IF_SummonRotation"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_W2_Kafka_IF_BeControled"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_W2_Kafka_IF_BPAdd"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_W2_Kafka_IF_SummonRotation"
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "Monster_W2_Kafka_IF_SummonRotation"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "Monster_W2_Kafka_IF_StartRotation"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "Monster_W2_Kafka_IF_SummonRotation"
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_IF_BPAdd",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "Skill Points Modification",
                  "adjustmentValue": {
                    "operator": "Constants[0] (1) || RETURN",
                    "displayLines": "1",
                    "constants": [
                      1
                    ],
                    "variables": []
                  },
                  "adjustmentType": "+"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_IF_BeControled",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_IF_StartRotation",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "2004014_Monster_W2_Kafka_IF_Ability10_Part01": {
      "fileName": "2004014_Monster_W2_Kafka_IF_Ability10_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Kafka_IF_Ability10_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2004014_Monster_W2_Kafka_IF_Ability08_Part02": {
      "fileName": "2004014_Monster_W2_Kafka_IF_Ability08_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Is Part Of Team",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Enemy Team"
          },
          "ifTargetFound": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_Company_Coin[<span class=\"descriptionNumberColor\">Performance Points</span>]"
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "CoinCount",
              "context": "TargetEntity",
              "value": 1,
              "max": 99
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "displayLines": 3
                },
                "dmgFormula": "Max HP Scaling",
                "HitSplit": 0.1,
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "displayLines": 3
                },
                "dmgFormula": "Max HP Scaling",
                "HitSplit": 0.1,
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "displayLines": 3
                },
                "dmgFormula": "Max HP Scaling",
                "HitSplit": 0.1,
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "Monster_Company_Coin[<span class=\"descriptionNumberColor\">Performance Points</span>]"
          },
          "ifTargetFound": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_Company_Coin[<span class=\"descriptionNumberColor\">Performance Points</span>]"
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "CoinCount",
              "context": "TargetEntity",
              "value": 1,
              "max": 99
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "displayLines": 3
                },
                "dmgFormula": "Max HP Scaling",
                "HitSplit": 0.1,
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "displayLines": 3
                },
                "dmgFormula": "Max HP Scaling",
                "HitSplit": 0.1,
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "displayLines": 3
                },
                "dmgFormula": "Max HP Scaling",
                "HitSplit": 0.1,
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "Monster_Company_Coin[<span class=\"descriptionNumberColor\">Performance Points</span>]"
          },
          "ifTargetFound": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_Company_Coin[<span class=\"descriptionNumberColor\">Performance Points</span>]"
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "CoinCount",
              "context": "TargetEntity",
              "value": 1,
              "max": 99
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "displayLines": 3
                },
                "dmgFormula": "Max HP Scaling",
                "HitSplit": 0.1,
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "displayLines": 3
                },
                "dmgFormula": "Max HP Scaling",
                "HitSplit": 0.1,
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "Monster_Company_Coin[<span class=\"descriptionNumberColor\">Performance Points</span>]"
          },
          "ifTargetFound": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_Company_Coin[<span class=\"descriptionNumberColor\">Performance Points</span>]"
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "CoinCount",
              "context": "TargetEntity",
              "value": 1,
              "max": 99
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "displayLines": 3
                },
                "dmgFormula": "Max HP Scaling",
                "HitSplit": 0.1,
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "displayLines": 3
                },
                "dmgFormula": "Max HP Scaling",
                "HitSplit": 0.1,
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Standard_DOT_Electric[<span class=\"descriptionNumberColor\">Shock</span>]"
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "ElectricFlag",
                  "value": 1
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_W2_Kafka_EnhanceElectricDamage"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "ElectricFlag"
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (ElectricFlag) || RETURN",
            "displayLines": "ElectricFlag",
            "constants": [],
            "variables": [
              "ElectricFlag"
            ]
          },
          "Event": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_Company_Coin_Elite[<span class=\"descriptionNumberColor\">Performance Points</span>]"
            }
          ]
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "CoinCount"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "2004014_Monster_W2_Kafka_IF_Ability08_Part01": {
      "fileName": "2004014_Monster_W2_Kafka_IF_Ability08_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Kafka_IF_Ability08_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2004014_Monster_W2_Kafka_IF_Ability07_Insert_Part02": {
      "fileName": "2004014_Monster_W2_Kafka_IF_Ability07_Insert_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable with HP%",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "_CasterHPRatio"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Target Has Lowest/Highest Value",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "partOf": {
              "name": "Target Name",
              "target": "{{All Team Members(Exclude Self)}}"
            },
            "compareValue": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent%</span>&nbsp;",
            "minOrMax": "Max"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with HP%",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_TargetHPRatio"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_TargetHPRatio",
                "compareType": ">",
                "value2": {
                  "operator": "Variables[0] (_CasterHPRatio) || RETURN",
                  "displayLines": "_CasterHPRatio",
                  "constants": [],
                  "variables": [
                    "_CasterHPRatio"
                  ]
                }
              }
            }
          ]
        }
      ],
      "references": []
    },
    "2004014_Monster_W2_Kafka_IF_Ability07_Insert_Part01": {
      "fileName": "2004014_Monster_W2_Kafka_IF_Ability07_Insert_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Kafka_IF_Ability07_Insert_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2004014_Monster_W2_Kafka_IF_Ability07_Part02": {
      "fileName": "2004014_Monster_W2_Kafka_IF_Ability07_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "MindControlCount"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "Monster_W2_Kafka_IF_MindControl_True"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "Monster_W2_Kafka_IF_MindControl_TrueEffect"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "Monster_W2_Kafka_IF_MindControl_False"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "Standard_MindControl[<span class=\"descriptionNumberColor\">Dominated</span>]"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "ShowHint04"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "FinalPhase",
                "compareType": "=",
                "value2": 1,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MindControlCount",
                    "compareType": "<",
                    "value2": 4,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Monster_W2_Kafka_IF_MindControl_True"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MindControlCount",
                        "compareType": "<",
                        "value2": 3,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Monster_W2_Kafka_IF_MindControl_True"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MindControlCount",
                        "compareType": "<",
                        "value2": 2,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Monster_W2_Kafka_IF_MindControl_True"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "MindControlCount",
              "context": "TargetEntity",
              "value": 1,
              "max": 4
            }
          ]
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "BaseSpeed",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "FinalPhase",
            "compareType": "=",
            "value2": 1,
            "contextScope": "TargetEntity"
          },
          "passed": [
            {
              "name": "Add Battle Event",
              "teamName": "Enemy Team",
              "eventID": 20002,
              "statSource": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variables": {
                "MDF_W2_Kafka_RL_BattleEvent_ActionDelay": {
                  "operator": "Variables[0] (FinalPhase) || RETURN",
                  "displayLines": "FinalPhase",
                  "constants": [],
                  "variables": [
                    "FinalPhase"
                  ]
                },
                "MDF_W2_Kafka_RL_BattleEvent_BaseSpeed": {
                  "operator": "Variables[0] (BaseSpeed) || RETURN",
                  "displayLines": "BaseSpeed",
                  "constants": [],
                  "variables": [
                    "BaseSpeed"
                  ]
                }
              }
            }
          ],
          "failed": [
            {
              "name": "Add Battle Event",
              "teamName": "Enemy Team",
              "eventID": 20002,
              "statSource": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variables": {
                "MDF_W2_Kafka_RL_BattleEvent_ActionDelay": {
                  "operator": "Variables[0] ({[Skill07[0]]}) || RETURN",
                  "displayLines": "{[Skill07[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill07[0]]}"
                  ]
                },
                "MDF_W2_Kafka_RL_BattleEvent_BaseSpeed": {
                  "operator": "Variables[0] (BaseSpeed) || RETURN",
                  "displayLines": "BaseSpeed",
                  "constants": [],
                  "variables": [
                    "BaseSpeed"
                  ]
                }
              }
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "2004014_Monster_W2_Kafka_IF_Ability07_Part01": {
      "fileName": "2004014_Monster_W2_Kafka_IF_Ability07_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Kafka_IF_Ability07_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2004014_Monster_W2_Kafka_IF_Ability04_Part02": {
      "fileName": "2004014_Monster_W2_Kafka_IF_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 3
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_W2_Kafka_IF_Part03WeaponEnhanceEffect"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemies by Aggro OR Random}}"
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
              "modifier": "Monster_W2_Kafka_IF_Ability04_Target"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                  "displayLines": "{[Skill04[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill04[0]]}"
                  ]
                },
                "HitSplit": 0.1,
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                  "displayLines": "{[Skill04[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill04[0]]}"
                  ]
                },
                "HitSplit": 0.1,
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                  "displayLines": "{[Skill04[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill04[0]]}"
                  ]
                },
                "HitSplit": 0.1,
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                  "displayLines": "{[Skill04[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill04[0]]}"
                  ]
                },
                "HitSplit": 0.1,
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                  "displayLines": "{[Skill04[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill04[0]]}"
                  ]
                },
                "HitSplit": 0.1,
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                  "displayLines": "{[Skill04[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill04[0]]}"
                  ]
                },
                "HitSplit": 0.1,
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                  "displayLines": "{[Skill04[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill04[0]]}"
                  ]
                },
                "HitSplit": 0.1,
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                  "displayLines": "{[Skill04[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill04[0]]}"
                  ]
                },
                "HitSplit": 0.1,
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                  "displayLines": "{[Skill04[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill04[0]]}"
                  ]
                },
                "HitSplit": 0.1,
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                  "displayLines": "{[Skill04[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill04[0]]}"
                  ]
                },
                "HitSplit": 0.1,
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Standard_DOT_Electric[<span class=\"descriptionNumberColor\">Shock</span>]"
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "ElectricFlag",
                  "value": 1
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Standard_DOT_Electric[<span class=\"descriptionNumberColor\">Shock</span>]",
              "duration": {
                "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
                "displayLines": "{[Skill01[2]]}",
                "constants": [],
                "variables": [
                  "{[Skill01[2]]}"
                ]
              },
              "baseChance": {
                "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
                "displayLines": "{[Skill01[1]]}",
                "constants": [],
                "variables": [
                  "{[Skill01[1]]}"
                ]
              },
              "immediateEffect": true,
              "valuePerStack": {
                "Modifier_Electric_DamagePercentage": {
                  "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
                  "displayLines": "{[Skill01[3]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[3]]}"
                  ]
                }
              },
              "stackFlag": "CharacterSkill"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "ElectricFlag",
                "compareType": "=",
                "value2": 1,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_W2_Kafka_EnhanceElectricDamage"
                }
              ]
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "ElectricFlag"
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Kafka Skill4 Other Targets}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill04[1]]}) || RETURN",
              "displayLines": "{[Skill04[1]]}",
              "constants": [],
              "variables": [
                "{[Skill04[1]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Kafka Skill4 Other Targets}}"
          },
          "modifier": "Monster_W2_Kafka_EnhanceElectricDamage"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "Monster_W2_Kafka_IF_Ability04_Target"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 3
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_W2_Kafka_IF_Part03WeaponEnhanceEffect"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "2004014_Monster_W2_Kafka_IF_Ability04_Part01": {
      "fileName": "2004014_Monster_W2_Kafka_IF_Ability04_Part01",
      "childAbilityList": [
        "2004014_Monster_W2_Kafka_IF_Ability04_Part01",
        "2004014_Monster_W2_Kafka_IF_Ability04_Part02",
        "2004014_Monster_W2_Kafka_IF_Ability04_Camera"
      ],
      "skillTrigger": "Skill04",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Kafka_IF_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2004014_Monster_W2_Kafka_IF_Ability03_Insert_Part02": {
      "fileName": "2004014_Monster_W2_Kafka_IF_Ability03_Insert_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
              "displayLines": "{[Skill03[0]]}",
              "constants": [],
              "variables": [
                "{[Skill03[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "Standard_DOT_Electric[<span class=\"descriptionNumberColor\">Shock</span>]"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_W2_Kafka_EnhanceElectricDamage"
            }
          ]
        }
      ],
      "references": []
    },
    "2004014_Monster_W2_Kafka_IF_Ability03_Insert_Part01": {
      "fileName": "2004014_Monster_W2_Kafka_IF_Ability03_Insert_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Kafka_IF_Ability03_Insert_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2004014_Monster_W2_Kafka_IF_Passive02": {
      "fileName": "2004014_Monster_W2_Kafka_IF_Passive02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "Monster_W2_Kafka_IF_Suicide"
        }
      ],
      "whenAdded": [],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_IF_Suicide",
          "execute": [
            {
              "eventTrigger": "Action End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 9004074,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": null
                  },
                  "passed": [
                    {
                      "name": "Remove from Team Target Grouping",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "stayInTeam": false
                    },
                    {
                      "name": "Entity Exit Stage",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "reason": "Vanish",
                      "living": false
                    },
                    {
                      "name": "Destroy Battle Entity",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "2004014_Monster_W2_Kafka_IF_Passive01": {
      "fileName": "2004014_Monster_W2_Kafka_IF_Passive01",
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
          "modifier": "Monster_W2_Kafka_BattleScore1"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "DisPelCount"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "OneMorePerTurn"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Kafka_IF_HPRatioTriggerAOE"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Kafka_IF_Pursuit"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Kafka_AIChange"
        },
        {
          "name": "Boss Bar Display",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "display": true
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Kafka_IF_PartController"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Kafka_IF_Power",
          "valuePerStack": {
            "MDF_DamageUpRatio_PerLayer": {
              "operator": "Variables[0] (UnusedUnderThisBase_14) || RETURN",
              "displayLines": "UnusedUnderThisBase_14",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_14"
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Kafka_IF_LowHP",
          "valuePerStack": {
            "MDF_LowHPRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_17) || RETURN",
              "displayLines": "UnusedUnderThisBase_17",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_17"
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Kafka_IF_SummonControl"
        }
      ],
      "whenAdded": [],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_AIChange",
          "stackData": [],
          "latentQueue": [
            "DisPelCount"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_BattleScore1",
          "execute": [
            {
              "eventTrigger": "Modifier Cleansed [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Was",
                        "modifier": "Standard_MindControl[<span class=\"descriptionNumberColor\">Dominated</span>]"
                      },
                      {
                        "name": "Is Teammate",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "DisPelCount",
                      "context": "TargetEntity",
                      "value": 1,
                      "max": 3
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DisPelCount",
                        "compareType": ">=",
                        "value2": 3,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Achievement",
                          "matchTags": true,
                          "relatedAchievements": [
                            {
                              "title": "Will of Steel",
                              "desc": "In a single battle against Boss Kafka, dispel Dominated 3 times",
                              "rarity": "Low",
                              "type": "Hidden until Completion"
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
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "2004014_Monster_W2_Kafka_IF02_Ability08_Part02": {
      "fileName": "2004014_Monster_W2_Kafka_IF02_Ability08_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "Monster_W2_Kafka_IF02_Ability08_ExecuteTag"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_W2_Kafka_IF_SummonRotation"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_StackCount",
              "value": {
                "operator": "Variables[0] (MDF_StackCount) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(MDF_StackCount + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "MDF_StackCount"
                ]
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "Monster_W2_Kafka_IF02_Ability08_ExecuteTag"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "Monster_W2_Kafka_IF02_Ability08_ExecuteTag"
          },
          "ifTargetFound": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_Company_Coin[<span class=\"descriptionNumberColor\">Performance Points</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_Company_Coin_Elite[<span class=\"descriptionNumberColor\">Performance Points</span>]"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Monster_W2_Kafka_IF02_LeftMonsterTag"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "searchRandom": true,
          "maxTargets": 2,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "Monster_W2_Kafka_IF02_Ability08_ExecuteTag"
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Monster_W2_Kafka_IF02_LeftMonsterTag"
              },
              "passed": [
                {
                  "name": "Shot Fired"
                }
              ],
              "failed": [
                {
                  "name": "Shot Fired"
                }
              ]
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_Company_Coin_Elite[<span class=\"descriptionNumberColor\">Performance Points</span>]",
          "valuePerStack": {
            "MDF_DamageUpRatio_PerLayer": {
              "operator": "Variables[0] (UnusedUnderThisBase_28) || RETURN",
              "displayLines": "UnusedUnderThisBase_28",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_28"
              ]
            },
            "Shield_InitValue": 0
          }
        },
        {
          "name": "Define Modifier Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifierName": "Monster_Company_Coin_Elite[<span class=\"descriptionNumberColor\">Performance Points</span>]",
          "value": {
            "operator": "Variables[0] (MDF_StackCount) || RETURN",
            "displayLines": "MDF_StackCount",
            "constants": [],
            "variables": [
              "MDF_StackCount"
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "Monster_W2_Kafka_IF02_P2ShieldBrokenTag"
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
              "variableName": "AIFlag",
              "value": 3
            }
          ],
          "failed": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "AIFlag",
              "value": 6
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "MDF_StackCount",
            "compareType": "=",
            "value2": 1
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "Monster_W2_Kafka_IF02_Ability08_ExecuteTag"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "Monster_W2_Kafka_IF_SummonRotation"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_StackCount",
          "value": 0
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_IF02_MonsterCoinTag"
        }
      ]
    },
    "2004014_Monster_W2_Kafka_IF02_Ability08_Part01": {
      "fileName": "2004014_Monster_W2_Kafka_IF02_Ability08_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Kafka_IF02_Ability08_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2004014_Monster_W2_Kafka_IF02_Ability02_Part02": {
      "fileName": "2004014_Monster_W2_Kafka_IF02_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 3
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_W2_Kafka_RL_Part03WeaponEnhanceEffect"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "Monster_W2_Kafka_IF02_ContainJXDTag"
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Monster_W2_Kafka_IF02_Ability08_ExecuteTag"
              },
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_StackCount",
                  "value": {
                    "operator": "Variables[0] (MDF_StackCount) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(MDF_StackCount + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "MDF_StackCount"
                    ]
                  }
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Monster_W2_Kafka_IF02_Ability08_ExecuteTag"
              },
              "ifTargetFound": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_Company_Coin[<span class=\"descriptionNumberColor\">Performance Points</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_Company_Coin_Elite[<span class=\"descriptionNumberColor\">Performance Points</span>]"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Monster_W2_Kafka_IF02_LeftMonsterTag"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_Left",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_Left",
                          "value": 1
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Monster_W2_Kafka_IF02_SecondMonsterTag"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_Right",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_Right",
                          "value": 1
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Monster_W2_Kafka_IF02_SecondMonsterTag"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Monster_W2_Kafka_IF02_Ability08_ExecuteTag"
              },
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Monster_W2_Kafka_IF02_LeftMonsterTag"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Monster_W2_Kafka_IF02_SecondMonsterTag"
                      },
                      "passed": [
                        {
                          "name": "Shot Fired"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Shot Fired"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Monster_W2_Kafka_IF02_SecondMonsterTag"
                      },
                      "passed": [
                        {
                          "name": "Shot Fired"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Shot Fired"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "Looped Event",
              "maxLoops": {
                "operator": "Variables[0] (MDF_StackCount) || RETURN",
                "displayLines": "MDF_StackCount",
                "constants": [],
                "variables": [
                  "MDF_StackCount"
                ]
              },
              "Event": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Monster_Company_Coin_Elite[<span class=\"descriptionNumberColor\">Performance Points</span>]",
                  "valuePerStack": {
                    "MDF_DamageUpRatio_PerLayer": {
                      "operator": "Variables[0] (UnusedUnderThisBase_28) || RETURN",
                      "displayLines": "UnusedUnderThisBase_28",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_28"
                      ]
                    },
                    "Shield_InitValue": 0
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_StackCount",
                "compareType": "=",
                "value2": 1
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_StackCount",
                    "compareType": "=",
                    "value2": 2
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_StackCount",
                        "compareType": ">=",
                        "value2": 3
                      }
                    }
                  ]
                }
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "Monster_W2_Kafka_IF02_Ability08_ExecuteTag"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "Monster_W2_Kafka_IF02_SecondMonsterTag"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_W2_Kafka_IF02_ContainJXDTag"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_StackCount",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_Left",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_Right",
              "value": 0
            }
          ]
        },
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": 2004011,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Stellaron Hunter: Kafka (Complete)"
              },
              {
                "name": "Enemy ID",
                "ID": 2004012,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Stellaron Hunter: Kafka (Complete)"
              },
              {
                "name": "Enemy ID",
                "ID": 2004013,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Stellaron Hunter: Kafka (Illusion)"
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
              "modifier": "Monster_W2_Kafka_RL_MeleeAttack",
              "valuePerStack": {
                "MDF_DamageUpRatio_PerLayer": {
                  "operator": "Variables[0] (UnusedUnderThisBase_14) || RETURN",
                  "displayLines": "UnusedUnderThisBase_14",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_14"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 3
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_W2_Kafka_RL_Part03EnhanceEffect"
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
              "displayLines": "{[Skill02[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}"
              ]
            },
            "HitSplit": 0.2,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
              "displayLines": "{[Skill02[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}"
              ]
            },
            "HitSplit": 0.3,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
              "displayLines": "{[Skill02[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}"
              ]
            },
            "HitSplit": 0.5,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
              "displayLines": "{[Skill02[1]]}",
              "constants": [],
              "variables": [
                "{[Skill02[1]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "Standard_DOT_Electric[<span class=\"descriptionNumberColor\">Shock</span>]"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_W2_Kafka_EnhanceElectricMark"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "modifier": "Standard_DOT_Electric[<span class=\"descriptionNumberColor\">Shock</span>]"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Targets Adjacent(Blast)}}"
              },
              "modifier": "Standard_DOT_Electric[<span class=\"descriptionNumberColor\">Shock</span>]",
              "duration": {
                "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
                "displayLines": "{[Skill01[2]]}",
                "constants": [],
                "variables": [
                  "{[Skill01[2]]}"
                ]
              },
              "baseChance": 1,
              "immediateEffect": true,
              "valuePerStack": {
                "Modifier_Electric_DamagePercentage": {
                  "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
                  "displayLines": "{[Skill01[3]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[3]]}"
                  ]
                }
              },
              "stackFlag": "CharacterSkill"
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "modifier": "Standard_DOT_Electric[<span class=\"descriptionNumberColor\">Shock</span>]"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "Monster_W2_Kafka_EnhanceElectricMark"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "Monster_W2_Kafka_EnhanceElectricMark"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_W2_Kafka_EnhanceElectricDamage"
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Kafka_RL_MeleeAttack"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "Monster_W2_Kafka_EnhanceElectricMark"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 3
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_W2_Kafka_RL_Part03WeaponEnhanceEffect"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_W2_Kafka_RL_Part03EnhanceEffect"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "2004014_Monster_W2_Kafka_IF02_Ability02_Part01": {
      "fileName": "2004014_Monster_W2_Kafka_IF02_Ability02_Part01",
      "childAbilityList": [
        "2004014_Monster_W2_Kafka_IF02_Ability02_Part01",
        "2004014_Monster_W2_Kafka_IF02_Ability02_Part02",
        "2004014_Monster_W2_Kafka_Ability02_Camera",
        "2004014_Monster_W2_Kafka_IF02_Ability02_Camera"
      ],
      "skillTrigger": "Skill02",
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
          "ability": "Monster_W2_Kafka_IF02_Ability02_Part02",
          "isTrigger": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "Monster_W2_Kafka_IF02_ContainJXDTag"
          },
          "passed": [
            "Deleted bullshit"
          ],
          "failed": [
            "Deleted bullshit"
          ]
        }
      ],
      "references": []
    },
    "2004014_Monster_W2_Kafka_IF02_Passive01": {
      "fileName": "2004014_Monster_W2_Kafka_IF02_Passive01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Preload Battle Event(s)",
          "eventID": [
            20005
          ]
        },
        {
          "name": "Add Battle Event",
          "eventID": 20005,
          "variables": null,
          "whenCreated": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_W2_Kafka_IF02_BattleEventSummon"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Kafka_IF02_ListenMonsterActionModifier"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Kafka_IF02_BreakListen"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Kafka_BattleScore1"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "DisPelCount"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "OneMorePerTurn"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Kafka_IF_HPRatioTriggerAOE"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Kafka_IF_Pursuit"
        },
        {
          "name": "Boss Bar Display",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "display": true
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Kafka_IF02_PartController"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Kafka_IF_Power",
          "valuePerStack": {
            "MDF_DamageUpRatio_PerLayer": {
              "operator": "Variables[0] (UnusedUnderThisBase_14) || RETURN",
              "displayLines": "UnusedUnderThisBase_14",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_14"
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Kafka_IF_LowHP",
          "valuePerStack": {
            "MDF_LowHPRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_17) || RETURN",
              "displayLines": "UnusedUnderThisBase_17",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_17"
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_IF_BOSS_Standard_BreakBonus"
        }
      ],
      "whenAdded": [],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_IF02_ListenMonsterActionModifier",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_HasTarget",
                  "value": 0
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "Monster_W2_Kafka_IF02_Ability08_ExecuteTag"
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Monster_Company_Coin[<span class=\"descriptionNumberColor\">Performance Points</span>]"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Monster_Company_Coin_Elite[<span class=\"descriptionNumberColor\">Performance Points</span>]"
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_HasTarget",
                      "value": 1
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Monster_W2_Kafka_IF02_Ability08_ExecuteTag"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_HasTarget",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "JustinBreak",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "Monster_W2_Kafka_IF02_ContainJXDTag"
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "AIFlag",
                          "value": 3
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_HasTarget",
                          "value": 0
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "JustinBreak",
                          "value": 0
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
          "for": "Monster_W2_Kafka_BattleScore1",
          "execute": [
            {
              "eventTrigger": "Modifier Cleansed [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Was",
                        "modifier": "Standard_MindControl[<span class=\"descriptionNumberColor\">Dominated</span>]"
                      },
                      {
                        "name": "Is Teammate",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "DisPelCount",
                      "context": "TargetEntity",
                      "value": 1,
                      "max": 3
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DisPelCount",
                        "compareType": ">=",
                        "value2": 3,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Achievement",
                          "matchTags": true,
                          "relatedAchievements": [
                            {
                              "title": "Will of Steel",
                              "desc": "In a single battle against Boss Kafka, dispel Dominated 3 times",
                              "rarity": "Low",
                              "type": "Hidden until Completion"
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
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_IF02_BEFrozen",
          "modifierFlags": [
            "MuteSpeed"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_IF02_BreakBebuff",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                  "value": 3
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_IF02_BreakListen",
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "JustinBreak",
                  "value": 1
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "2004014_Monster_W2_Kafka_Ability07_Part02": {
      "fileName": "2004014_Monster_W2_Kafka_Ability07_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "Monster_W2_Kafka_CharmTargetMark"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "Monster_W2_Kafka_CharmMark"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
              "displayLines": "{[Skill05[1]]}",
              "constants": [],
              "variables": [
                "{[Skill05[1]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "Monster_W2_Kafka_CharmMark"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "Monster_W2_Kafka_CharmTargetMark"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "PursuitCheck"
        }
      ],
      "references": []
    },
    "2004014_Monster_W2_Kafka_Ability07_Part01": {
      "fileName": "2004014_Monster_W2_Kafka_Ability07_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "Monster_W2_Kafka_Ability07_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2004014_Monster_W2_Kafka_Ability06_Part02": {
      "fileName": "2004014_Monster_W2_Kafka_Ability06_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 3
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_W2_Kafka_RL_Part03WeaponEnhanceEffect"
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "Standard_MindControl_Target"
        },
        "Reset Triggers: Attack",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
              "displayLines": "{[Skill06[0]]}",
              "constants": [],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "HitSplit": 0.15,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
              "displayLines": "{[Skill06[0]]}",
              "constants": [],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "HitSplit": 0.15,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
              "displayLines": "{[Skill06[0]]}",
              "constants": [],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "HitSplit": 0.15,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
              "displayLines": "{[Skill06[0]]}",
              "constants": [],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "HitSplit": 0.15,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
              "displayLines": "{[Skill06[0]]}",
              "constants": [],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "HitSplit": 0.15,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
              "displayLines": "{[Skill06[0]]}",
              "constants": [],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "HitSplit": 0.25,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "Monster_W2_Kafka_EnhanceElectricDamage"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "scope": "TargetEntity",
          "variableName": "PursuitCheck"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 3
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_W2_Kafka_RL_Part03WeaponEnhanceEffect"
            }
          ]
        }
      ],
      "references": []
    },
    "2004014_Monster_W2_Kafka_Ability06_Part01": {
      "fileName": "2004014_Monster_W2_Kafka_Ability06_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "Monster_W2_Kafka_Ability06_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2004014_Monster_W2_Kafka_Ability05_Part02": {
      "fileName": "2004014_Monster_W2_Kafka_Ability05_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "UI Display Event",
          "popUpText": "Spirit Whisper"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "Standard_MindControl[<span class=\"descriptionNumberColor\">Dominated</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill05[0]]}) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "({[Skill05[0]]} + 1)",
            "constants": [
              1
            ],
            "variables": [
              "{[Skill05[0]]}"
            ]
          },
          "baseChance": {
            "operator": "Variables[0] ({[Skill05[4]]}) || RETURN",
            "displayLines": "{[Skill05[4]]}",
            "constants": [],
            "variables": [
              "{[Skill05[4]]}"
            ]
          },
          "valuePerStack": {
            "MDF_MindControlDamagePercentage": {
              "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
              "displayLines": "{[Skill05[1]]}",
              "constants": [],
              "variables": [
                "{[Skill05[1]]}"
              ]
            },
            "MDF_MaxDamageRatio": {
              "operator": "Variables[0] ({[Skill05[2]]}) || RETURN",
              "displayLines": "{[Skill05[2]]}",
              "constants": [],
              "variables": [
                "{[Skill05[2]]}"
              ]
            },
            "MDF_MinDamageRatio": {
              "operator": "Variables[0] ({[Skill05[3]]}) || RETURN",
              "displayLines": "{[Skill05[3]]}",
              "constants": [],
              "variables": [
                "{[Skill05[3]]}"
              ]
            }
          },
          "success": []
        },
        {
          "name": "Action Advance/Delay",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "advanceType": "Advance",
          "multiAdd": -1
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "2004014_Monster_W2_Kafka_Ability05_Part01": {
      "fileName": "2004014_Monster_W2_Kafka_Ability05_Part01",
      "childAbilityList": [
        "2004014_Monster_W2_Kafka_Ability05_Part01",
        "2004014_Monster_W2_Kafka_Ability05_Part02",
        "2004014_Monster_W2_Kafka_Ability05_Camera"
      ],
      "skillTrigger": "Skill05",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Kafka_Ability05_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "2004014_Monster_W2_Kafka_Ability04_Part02": {
      "fileName": "2004014_Monster_W2_Kafka_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "2004014_Monster_W2_Kafka_Ability04_Part01": {
      "fileName": "2004014_Monster_W2_Kafka_Ability04_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Kafka_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2004014_Monster_W2_Kafka_Ability03_Part02": {
      "fileName": "2004014_Monster_W2_Kafka_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
              "displayLines": "{[Skill03[0]]}",
              "constants": [],
              "variables": [
                "{[Skill03[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "Standard_DOT_Electric[<span class=\"descriptionNumberColor\">Shock</span>]"
          },
          "ignoreParallelWarning": true,
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_W2_Kafka_EnhanceElectricDamage"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "2004014_Monster_W2_Kafka_Ability03_Part01": {
      "fileName": "2004014_Monster_W2_Kafka_Ability03_Part01",
      "childAbilityList": [
        "2004014_Monster_W2_Kafka_Ability03_Part01",
        "2004014_Monster_W2_Kafka_Ability03_Part02",
        "2004014_Monster_W2_Kafka_Ability03_Camera",
        "2004014_Monster_W2_Kafka_IF_Ability03_Insert_Part01",
        "2004014_Monster_W2_Kafka_IF_Ability03_Insert_Part02",
        "2004014_Monster_W2_Kafka_IF_Ability03_Camera"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Kafka_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2004014_Monster_W2_Kafka_Ability02_Part02": {
      "fileName": "2004014_Monster_W2_Kafka_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 3
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_W2_Kafka_RL_Part03WeaponEnhanceEffect"
            }
          ]
        },
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": 2004011,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Stellaron Hunter: Kafka (Complete)",
                "isBaseCompare": true
              },
              {
                "name": "Enemy ID",
                "ID": 2004012,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Stellaron Hunter: Kafka (Complete)",
                "isBaseCompare": true
              },
              {
                "name": "Enemy ID",
                "ID": 2004013,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Stellaron Hunter: Kafka (Illusion)",
                "isBaseCompare": true
              },
              {
                "name": "Enemy ID",
                "ID": 2004015,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Stellaron Hunter: Kafka",
                "isBaseCompare": true
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
              "modifier": "Monster_W2_Kafka_RL_MeleeAttack",
              "valuePerStack": {
                "MDF_DamageUpRatio_PerLayer": {
                  "operator": "Variables[0] (UnusedUnderThisBase_14) || RETURN",
                  "displayLines": "UnusedUnderThisBase_14",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_14"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 3
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_W2_Kafka_RL_Part03EnhanceEffect"
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
              "displayLines": "{[Skill02[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}"
              ]
            },
            "HitSplit": 0.2,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
              "displayLines": "{[Skill02[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}"
              ]
            },
            "HitSplit": 0.3,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
              "displayLines": "{[Skill02[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}"
              ]
            },
            "HitSplit": 0.5,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
              "displayLines": "{[Skill02[1]]}",
              "constants": [],
              "variables": [
                "{[Skill02[1]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "Standard_DOT_Electric[<span class=\"descriptionNumberColor\">Shock</span>]"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_W2_Kafka_EnhanceElectricMark"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "modifier": "Standard_DOT_Electric[<span class=\"descriptionNumberColor\">Shock</span>]"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Targets Adjacent(Blast)}}"
              },
              "modifier": "Standard_DOT_Electric[<span class=\"descriptionNumberColor\">Shock</span>]",
              "duration": {
                "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
                "displayLines": "{[Skill01[2]]}",
                "constants": [],
                "variables": [
                  "{[Skill01[2]]}"
                ]
              },
              "baseChance": 1,
              "immediateEffect": true,
              "valuePerStack": {
                "Modifier_Electric_DamagePercentage": {
                  "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
                  "displayLines": "{[Skill01[3]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[3]]}"
                  ]
                }
              },
              "stackFlag": "CharacterSkill"
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "modifier": "Standard_DOT_Electric[<span class=\"descriptionNumberColor\">Shock</span>]"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "Monster_W2_Kafka_EnhanceElectricMark"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "Monster_W2_Kafka_EnhanceElectricMark"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Monster_W2_Kafka_EnhanceElectricDamage"
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Kafka_RL_MeleeAttack"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "Monster_W2_Kafka_EnhanceElectricMark"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 3
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_W2_Kafka_RL_Part03WeaponEnhanceEffect"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_W2_Kafka_RL_Part03EnhanceEffect"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "2004014_Monster_W2_Kafka_Ability02_Part01": {
      "fileName": "2004014_Monster_W2_Kafka_Ability02_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Kafka_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "2004014_Monster_W2_Kafka_Ability01_Part02": {
      "fileName": "2004014_Monster_W2_Kafka_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": 2004011,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Stellaron Hunter: Kafka (Complete)",
                "isBaseCompare": true
              },
              {
                "name": "Enemy ID",
                "ID": 2004012,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Stellaron Hunter: Kafka (Complete)",
                "isBaseCompare": true
              },
              {
                "name": "Enemy ID",
                "ID": 2004013,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Stellaron Hunter: Kafka (Illusion)",
                "isBaseCompare": true
              },
              {
                "name": "Enemy ID",
                "ID": 2004015,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Stellaron Hunter: Kafka",
                "isBaseCompare": true
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
              "modifier": "Monster_W2_Kafka_RL_MeleeAttack",
              "valuePerStack": {
                "MDF_DamageUpRatio_PerLayer": {
                  "operator": "Variables[0] (UnusedUnderThisBase_14) || RETURN",
                  "displayLines": "UnusedUnderThisBase_14",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_14"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[0]]}) || Constants[0] (0.5) || MUL || RETURN",
              "displayLines": "({[Skill01[0]]} * 0.5)",
              "constants": [
                0.5
              ],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "50%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[0]]}) || Constants[0] (0.5) || MUL || RETURN",
              "displayLines": "({[Skill01[0]]} * 0.5)",
              "constants": [
                0.5
              ],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "50%"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "modifier": "Standard_DOT_Electric[<span class=\"descriptionNumberColor\">Shock</span>]"
          },
          "passed": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "ElectricFlag",
              "value": 1
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "Standard_DOT_Electric[<span class=\"descriptionNumberColor\">Shock</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
            "displayLines": "{[Skill01[2]]}",
            "constants": [],
            "variables": [
              "{[Skill01[2]]}"
            ]
          },
          "baseChance": {
            "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
            "displayLines": "{[Skill01[1]]}",
            "constants": [],
            "variables": [
              "{[Skill01[1]]}"
            ]
          },
          "immediateEffect": true,
          "valuePerStack": {
            "Modifier_Electric_DamagePercentage": {
              "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
              "displayLines": "{[Skill01[3]]}",
              "constants": [],
              "variables": [
                "{[Skill01[3]]}"
              ]
            }
          },
          "stackFlag": "CharacterSkill"
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "ElectricFlag",
            "compareType": "=",
            "value2": 1,
            "contextScope": "TargetEntity"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "Monster_W2_Kafka_EnhanceElectricDamage"
            }
          ]
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "ElectricFlag"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Kafka_RL_MeleeAttack"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "2004014_Monster_W2_Kafka_Ability01_Part01": {
      "fileName": "2004014_Monster_W2_Kafka_Ability01_Part01",
      "childAbilityList": [
        "2004014_Monster_W2_Kafka_Ability01_Part01",
        "2004014_Monster_W2_Kafka_Ability01_Part02",
        "2004014_Monster_W2_Kafka_Ability01_Camera"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W2_Kafka_Ability01_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "2004014_Monster_W2_Kafka_Passive01": {
      "fileName": "2004014_Monster_W2_Kafka_Passive01",
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
          "modifier": "Monster_W2_Kafka_BattleScore1"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "DisPelCount"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "OneMorePerTurn"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Kafka_Pursuit",
          "valuePerStack": {
            "MDF_Count": {
              "operator": "Variables[0] (UnusedUnderThisBase_16) || RETURN",
              "displayLines": "UnusedUnderThisBase_16",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_16"
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_Kafka_AIChange"
        },
        {
          "name": "Boss Bar Display",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "display": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 200401010,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Stellaron Hunter: Kafka"
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "searchRandom": true,
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Character ID",
                    "ID": 1001,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "March 7th"
                  },
                  {
                    "name": "Character ID",
                    "ID": 1101,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Bronya"
                  },
                  {
                    "name": "Character ID",
                    "ID": 1105,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Natasha"
                  },
                  {
                    "name": "Character ID",
                    "ID": 1203,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Luocha"
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Monster_W2_Kafka_TargetFilter"
                }
              ]
            }
          ]
        }
      ],
      "whenAdded": [],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_TargetFilter",
          "stackData": [],
          "latentQueue": [
            "DisPelCount"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_AIChange",
          "stackData": [],
          "latentQueue": [
            "DisPelCount"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_BattleScore1",
          "execute": [
            {
              "eventTrigger": "Modifier Cleansed [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Was",
                        "modifier": "Standard_MindControl[<span class=\"descriptionNumberColor\">Dominated</span>]"
                      },
                      {
                        "name": "Is Teammate",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "DisPelCount",
                      "context": "TargetEntity",
                      "value": 1,
                      "max": 3
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DisPelCount",
                        "compareType": ">=",
                        "value2": 3,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Achievement",
                          "matchTags": true,
                          "relatedAchievements": [
                            {
                              "title": "Will of Steel",
                              "desc": "In a single battle against Boss Kafka, dispel Dominated 3 times",
                              "rarity": "Low",
                              "type": "Hidden until Completion"
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
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "2004014_Monster_W2_Kafka_PassiveAbility_BGM": {
      "fileName": "2004014_Monster_W2_Kafka_PassiveAbility_BGM",
      "childAbilityList": [
        "2004014_Monster_W2_Kafka_PassiveAbility_BGM"
      ],
      "skillTrigger": "Passive_BGM",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "modifier": "Enemy_W2_Kafka_ResetStageBGM"
        }
      ],
      "whenAdded": [
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Stage Type",
                "stageType": "Challenge"
              },
              {
                "name": "Stage Type",
                "stageType": "VerseSimulation"
              },
              {
                "name": "Stage Type",
                "stageType": "StrongChallengeActivity"
              },
              {
                "name": "Stage Type",
                "stageType": "RogueRelic"
              },
              {
                "name": "Stage Type",
                "stageType": "GridFightActivity"
              }
            ]
          }
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Enemy_W2_Kafka_ResetStageBGM",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Varying Data",
                  "target": null,
                  "variableName": "MDF_WaveIndex",
                  "value": "CurWaveIndex"
                }
              ]
            },
            {
              "eventTrigger": "New Enemy Wave",
              "execute": [
                {
                  "name": "Define Custom Variable with Varying Data",
                  "target": null,
                  "variableName": "MDF_WaveIndex2",
                  "value": "CurWaveIndex"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_WaveIndex",
                    "compareType": "NOT=",
                    "value2": {
                      "operator": "Variables[0] (MDF_WaveIndex2) || RETURN",
                      "displayLines": "MDF_WaveIndex2",
                      "constants": [],
                      "variables": [
                        "MDF_WaveIndex2"
                      ]
                    }
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "2004014_Modifiers": {
      "fileName": "2004014_Modifiers",
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
          "for": "Monster_W2_Kafka_RL_Part03WeaponEnhanceEffect",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_RL_Part03EnhanceEffect",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_RL_LowHP",
          "execute": [
            {
              "eventTrigger": "HP Change [Owner]",
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
                        "value1": "CurrentHP%",
                        "compareType": "<=",
                        "value2": {
                          "operator": "Variables[0] (MDF_LowHPRatio) || RETURN",
                          "displayLines": "MDF_LowHPRatio",
                          "constants": [],
                          "variables": [
                            "MDF_LowHPRatio"
                          ]
                        }
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 3
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "FinalPhase",
                      "value": 1
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "FinalPhaseFirstCheck",
                      "value": 1
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "AIFlag",
                      "value": 1
                    },
                    {
                      "name": "Action Advance/Delay",
                      "advanceType": "Set",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "multiBase": 0
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "CurrentHP%",
                        "compareType": "<=",
                        "value2": 0
                      }
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_LowHPRatio"
          ],
          "latentQueue": [
            "DisPelCount"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_RL_MindControlCheck",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Monster_W2_Kafka_RL_MindControl_True[<span class=\"descriptionNumberColor\">Psychological Suggestion</span>]"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Monster_W2_Kafka_RL_MindControl_TrueEffect[<span class=\"descriptionNumberColor\">Psychological Suggestion Revelation</span>]"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                          "value": 1
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked Start [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Monster_W2_Kafka_RL_MindControl_True[<span class=\"descriptionNumberColor\">Psychological Suggestion</span>]"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Monster_W2_Kafka_RL_MindControl_TrueEffect[<span class=\"descriptionNumberColor\">Psychological Suggestion Revelation</span>]"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Monster_W2_Kafka_RL_MindControlStanceResistance"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Monster_W2_Kafka_RL_MindControl_True[<span class=\"descriptionNumberColor\">Psychological Suggestion</span>]"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Monster_W2_Kafka_RL_MindControl_TrueEffect[<span class=\"descriptionNumberColor\">Psychological Suggestion Revelation</span>]"
                      }
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Monster_W2_Kafka_RL_MindControl_True[<span class=\"descriptionNumberColor\">Psychological Suggestion</span>]"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Monster_W2_Kafka_RL_MindControl_True[<span class=\"descriptionNumberColor\">Psychological Suggestion</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Monster_W2_Kafka_RL_MindControl_TrueEffect[<span class=\"descriptionNumberColor\">Psychological Suggestion Revelation</span>]"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Monster_W2_Kafka_RL_MindControl_False[<span class=\"descriptionNumberColor\">Psychological Suggestion</span>]"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Monster_W2_Kafka_RL_MindControl_False[<span class=\"descriptionNumberColor\">Psychological Suggestion</span>]"
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
                    "value1": "ShowHint04",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "searchRandom": true,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Monster_W2_Kafka_RL_MindControl_False[<span class=\"descriptionNumberColor\">Psychological Suggestion</span>]"
                      },
                      "noTargetFound": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          "searchRandom": true,
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "Monster_W2_Kafka_RL_MindControl_True[<span class=\"descriptionNumberColor\">Psychological Suggestion</span>]"
                          },
                          "ifTargetFound": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "Monster_W2_Kafka_RL_MindControl_TrueEffect[<span class=\"descriptionNumberColor\">Psychological Suggestion Revelation</span>]"
                            }
                          ]
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          "modifier": "Monster_W2_Kafka_RL_MindControl_False[<span class=\"descriptionNumberColor\">Psychological Suggestion</span>]"
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "ShowHint04",
                          "value": 1
                        }
                      ]
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
                    "value1": "ShowHint04",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "searchRandom": true,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Monster_W2_Kafka_RL_MindControl_True[<span class=\"descriptionNumberColor\">Psychological Suggestion</span>]"
                      },
                      "noTargetFound": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          "modifier": "Monster_W2_Kafka_RL_MindControl_False[<span class=\"descriptionNumberColor\">Psychological Suggestion</span>]"
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "ShowHint04",
                          "value": 1
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_RL_MindControlStanceResistance",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Toughness Reduction Resistance</span>&nbsp;",
                  "value": 1
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_RL_MindControl_False[<span class=\"descriptionNumberColor\">Psychological Suggestion</span>]",
          "modifierFlags": [
            "DispelPriorityHigh"
          ],
          "description": "Triggered at the next Revelation. Can be removed before that action.",
          "type": "Debuff",
          "effectName": "Psychological Suggestion",
          "statusName": "Psychological Suggestion"
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_RL_MindControl_TrueEffect[<span class=\"descriptionNumberColor\">Psychological Suggestion Revelation</span>]",
          "modifierFlags": [
            "DispelPriorityHigh"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Monster_W2_Kafka_RL_MindControl_True[<span class=\"descriptionNumberColor\">Psychological Suggestion</span>]"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "ShowHint04"
          ],
          "description": "Cannot deal DMG to Kafka. Will become Dominated when the next \"Revelation\" occurs. Can be dispelled.",
          "type": "Debuff",
          "effectName": "Revelation",
          "statusName": "Psychological Suggestion Revelation"
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_RL_MindControl_True[<span class=\"descriptionNumberColor\">Psychological Suggestion</span>]",
          "modifierFlags": [
            "DispelPriorityHigh",
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": [
            "BattleEventFlag",
            "MindControlCount",
            "ShowHint04",
            "FinalPhase"
          ],
          "description": "Triggered at the next Revelation. Can be removed before that action.",
          "type": "Debuff",
          "effectName": "Psychological Suggestion",
          "statusName": "Psychological Suggestion"
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_RL_DamageUp[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "ModifierLayers",
                  "multiplier": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_DamageUpRatio_PerLayer) || Variables[1] (ModifierLayers) || MUL || RETURN",
                    "displayLines": "(MDF_DamageUpRatio_PerLayer * ModifierLayers)",
                    "constants": [],
                    "variables": [
                      "MDF_DamageUpRatio_PerLayer",
                      "ModifierLayers"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_DamageUpRatio_PerLayer</span>. This effect can stack.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "DMG Boost",
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_RL_MeleeAttack",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "DamageUpFlag",
                    "compareType": ">",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Monster_W2_Kafka_RL_DamageUp[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                      "valuePerStack": {
                        "MDF_DamageUpRatio_PerLayer": {
                          "operator": "Variables[0] (MDF_DamageUpRatio_PerLayer) || RETURN",
                          "displayLines": "MDF_DamageUpRatio_PerLayer",
                          "constants": [],
                          "variables": [
                            "MDF_DamageUpRatio_PerLayer"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "DamageUpFlag"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_DamageUpRatio_PerLayer"
          ],
          "latentQueue": [],
          "duration": 1
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_RL_ListenElectric",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Attack Type",
                        "attackTypes": [
                          "DOT"
                        ],
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      {
                        "name": "Is Damage Type/Element",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "list": [
                          "Lightning"
                        ]
                      },
                      {
                        "name": "Is Joint-Attack",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "Monster_W2_Kafka_RL_MeleeAttack"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "variableName": "DamageUpFlag",
                          "context": "TargetEntity",
                          "value": 1,
                          "max": 5
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "Monster_W2_Kafka_RL_DamageUp[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                          "valuePerStack": {
                            "MDF_DamageUpRatio_PerLayer": {
                              "operator": "Variables[0] (MDF_DamageUpRatio_PerLayer) || RETURN",
                              "displayLines": "MDF_DamageUpRatio_PerLayer",
                              "constants": [],
                              "variables": [
                                "MDF_DamageUpRatio_PerLayer"
                              ]
                            }
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_RL_Power",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "Monster_W2_Kafka_RL_ListenElectric",
                  "valuePerStack": {
                    "MDF_DamageUpRatio_PerLayer": {
                      "operator": "Variables[0] (MDF_DamageUpRatio_PerLayer) || RETURN",
                      "displayLines": "MDF_DamageUpRatio_PerLayer",
                      "constants": [],
                      "variables": [
                        "MDF_DamageUpRatio_PerLayer"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Battle Event List}}"
                  },
                  "searchRandom": true,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Modifier_W2_Kafka_RL_BattleEvent"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Force Entity Death",
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
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "searchRandom": true,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Monster_W2_Kafka_RL_ListenElectric",
                    "invertCondition": true
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Monster_W2_Kafka_RL_ListenElectric",
                      "valuePerStack": {
                        "MDF_DamageUpRatio_PerLayer": {
                          "operator": "Variables[0] (MDF_DamageUpRatio_PerLayer) || RETURN",
                          "displayLines": "MDF_DamageUpRatio_PerLayer",
                          "constants": [],
                          "variables": [
                            "MDF_DamageUpRatio_PerLayer"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_DamageUpRatio_PerLayer"
          ],
          "latentQueue": [
            "DisPelCount"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_RL_Ability04_Target",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_RL_Pursuit",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
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
                    }
                  ]
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
                          "target": "{{Current Action Target List}}"
                        },
                        "value1": "CurrentHP%",
                        "compareType": ">",
                        "value2": 0
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
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "DisPelCount"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_RL_Endurance",
          "modifierFlags": [
            "Endurance"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "PhaseChange"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "Phase0"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "STAT_CTRL",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_RL_PartController",
          "execute": [
            {
              "eventTrigger": "Waiting for Healing in Limbo",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "InsertCheck",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Dispel Debuffs",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "silent": true
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "Monster_W2_Kafka_RL_Endurance"
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "InsertCheck"
                        },
                        {
                          "name": "Set Enemy Phase",
                          "mode": "Inc"
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W2_Kafka_RL_PassiveAbility_Insert",
                          "priorityTag": "MonsterChangePhase",
                          "ownerState": "Mask_AliveOrLimbo",
                          "targetState": "Mask_AliveOrLimbo",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "InsertCheck",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Dispel Debuffs",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "silent": true
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "Monster_W2_Kafka_RL_Endurance"
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "InsertCheck"
                        },
                        {
                          "name": "Set Enemy Phase",
                          "mode": "Inc"
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W2_Kafka_RL_PassiveAbility_Insert2",
                          "priorityTag": "MonsterChangePhase",
                          "ownerState": "Mask_AliveOrLimbo",
                          "targetState": "Mask_AliveOrLimbo",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ]
                }
              ],
              "priorityLevel": -90
            }
          ],
          "stackData": [],
          "latentQueue": [
            "DisPelCount"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W3_Dinosaur_01_MonsterAssistBonus[<span class=\"descriptionNumberColor\">Terrathorn</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag_IF",
                  "value": 1
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "Each hit of Bonepiercing Odium deals an additional instance of DMG. Each stack increases this instance of additional DMG.",
          "type": "Buff",
          "statusName": "Terrathorn",
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W3_Dinosaur_MonsterAssistBonus",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_XP_Elite01_01_MonsterAssistBonus[<span class=\"descriptionNumberColor\">Crystallite</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Monster_XP_Elite01_01_AIFlag",
                  "value": 1
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "XP_Ice_Elite_Powerful_Modifier[<span class=\"descriptionNumberColor\">Freezing Point</span>]"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "AIFlag",
                      "value": 1
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "Increases the action delay effect for Everwinter Rain. This effect is stackable.",
          "type": "Buff",
          "statusName": "Crystallite",
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_XP_Elite01_MonsterAssistBonus",
          "stackType": "Replace",
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
                  "variableName": "AIFlag",
                  "value": 1
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "XP_Elite_Fire_Ability07_AttackUp_Modifier[<span class=\"descriptionNumberColor\">Molten</span>]",
                  "valuePerStack": {
                    "Modifier_AttackAddedRatio": {
                      "operator": "Variables[0] (UnusedUnderThisBase_27) || RETURN",
                      "displayLines": "UnusedUnderThisBase_27",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_27"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "XP_Fire_Elite_Burning_Modifier_2[<span class=\"descriptionNumberColor\">Spontaneous Combustion</span>]"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "AIFlag",
                      "value": 1
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_IF03_MonsterAssist",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
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
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": null
                  },
                  "passed": [
                    {
                      "name": "Add Ability",
                      "abilityName": "Monster_XP_Elite01_Ability03_Part01_Assist"
                    },
                    {
                      "name": "Add Ability",
                      "abilityName": "Monster_XP_Elite01_Ability03_Part02_Assist"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
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
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": null
                  },
                  "passed": [
                    {
                      "name": "Add Ability",
                      "abilityName": "Monster_XP_Elite01_01_Ability02_Part01_Assist"
                    },
                    {
                      "name": "Add Ability",
                      "abilityName": "Monster_XP_Elite01_01_Ability02_Part02_Assist"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
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
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": null
                  },
                  "passed": [
                    {
                      "name": "Add Ability",
                      "abilityName": "Monster_W3_Dinosaur_Ability06_Part01_Assist"
                    },
                    {
                      "name": "Add Ability",
                      "abilityName": "Monster_W3_Dinosaur_Ability06_Part02Crazy_Assist"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
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
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": null
                  },
                  "passed": [
                    {
                      "name": "Add Ability",
                      "abilityName": "Monster_W3_Dinosaur_01_Ability04_Part01_Assist"
                    },
                    {
                      "name": "Add Ability",
                      "abilityName": "Monster_W3_Dinosaur_01_Ability04_Part02_Assist"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_IF03_MonsterAssistControl",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "Monster_W2_Kafka_IF03_MonsterAssist"
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Monster_W2_Kafka_IF03_MonsterAssist"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "DisPelCount"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_IF03_DoubleSpeed",
          "modifierFlags": [
            "STAT_SpeedUp"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "value": 0.5
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_IF03_PartController",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Waiting for Healing in Limbo",
              "execute": [
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
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "AIFlag",
                      "value": 1
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "AI_SkillIF01",
                      "value": 1
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "CD_SkillIF01",
                      "value": 1
                    },
                    {
                      "name": "Define Modifier-Specific Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifierName": "Monster_W2_Kafka_IF03_Summon",
                      "variableName": "MDF_Wait",
                      "value": 2
                    },
                    {
                      "name": "Define Modifier-Specific Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifierName": "Enemy_W2_Kafka_IF_AssistController",
                      "variableName": "MDF_DotCurCount",
                      "value": {
                        "operator": "Variables[0] ({[SkillIF01[3]]}) || RETURN",
                        "displayLines": "{[SkillIF01[3]]}",
                        "constants": [],
                        "variables": [
                          "{[SkillIF01[3]]}"
                        ]
                      }
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Minions of Modifier Holder}}"
                      },
                      "searchRandom": true,
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
                          }
                        ]
                      },
                      "ifTargetFound": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Enemy_W2_Kafka_IF_SummonDeathrattle"
                        },
                        {
                          "name": "Force Entity Death",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          }
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MaxMinions",
                      "value": 4
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MaxMinions_Left",
                      "value": 2
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MaxMinions_Right",
                      "value": 2
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "InsertCheck",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Dispel Debuffs",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "silent": true
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "Monster_W2_Kafka_IF_Endurance"
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "InsertCheck"
                        },
                        {
                          "name": "Set Enemy Phase",
                          "mode": "Inc"
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W2_Kafka_IF_PassiveAbility_Insert",
                          "priorityTag": "MonsterChangePhase",
                          "ownerState": "Mask_AliveOrLimbo",
                          "targetState": "Mask_AliveOrLimbo",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "allowAbilityTriggers": false
                        },
                        {
                          "name": "Inject Ability Use",
                          "conditionActive": {
                            "name": "Compare: Target Count",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Enemy Team All}}"
                            },
                            "compareType": "<=",
                            "value2": 1,
                            "livingTargets": true
                          },
                          "abilityName": "Monster_W2_Kafka_IF03_SummonMonster_Insert_Part01",
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "priorityTag": "MonsterBattleCry",
                          "canHitNonTargets": true,
                          "allowAbilityTriggers": false
                        },
                        {
                          "name": "Define Modifier-Specific Variable",
                          "modifierName": "Monster_W2_Kafka_IF03_Summon",
                          "variableName": "MDF_Wait",
                          "value": 0
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "AIFlag",
                          "value": 1
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "AI_SkillIF01",
                          "value": 1
                        }
                      ]
                    }
                  ]
                }
              ],
              "priorityLevel": -90
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
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
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Enemy_W2_Kafka_IF_SummonDeathrattle"
                    },
                    {
                      "name": "Force Entity Death",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "DisPelCount"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_IF03_Summon",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Enemy Team All}}"
                    },
                    "compareType": "<=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_Wait",
                        "compareType": "=",
                        "value2": 2
                      },
                      "passed": [
                        {
                          "name": "Inject Ability Use",
                          "conditionActive": {
                            "name": "Compare: Target Count",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Enemy Team All}}"
                            },
                            "compareType": "<=",
                            "value2": 1,
                            "livingTargets": true
                          },
                          "abilityName": "Monster_W2_Kafka_IF03_SummonMonster_Insert_Part01",
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "priorityTag": "MonsterBattleCry",
                          "canHitNonTargets": true,
                          "abortFlags": [
                            "STAT_CTRL",
                            "Break",
                            "DisableAction"
                          ],
                          "allowAbilityTriggers": false
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_Wait",
                          "value": 0
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "AIFlag",
                          "value": 1
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "AI_SkillIF01",
                          "value": 1
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_Wait",
                          "value": {
                            "operator": "Variables[0] (MDF_Wait) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(MDF_Wait + 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "MDF_Wait"
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
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Ability",
                  "abilityName": "Monster_W2_Kafka_IF_SummonMonster_Camera"
                },
                {
                  "name": "Add Ability",
                  "abilityName": "Monster_W2_Kafka_IF_SummonMonster_P2_Camera"
                },
                {
                  "name": "Add Ability",
                  "abilityName": "Monster_W2_Kafka_IF03_SummonMonster_Insert_Part01"
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Enemy Team All}}"
                    },
                    "compareType": "<=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_Wait",
                        "compareType": "=",
                        "value2": 2
                      },
                      "passed": [
                        {
                          "name": "Inject Ability Use",
                          "conditionActive": {
                            "name": "Compare: Target Count",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Enemy Team All}}"
                            },
                            "compareType": "<=",
                            "value2": 1,
                            "livingTargets": true
                          },
                          "abilityName": "Monster_W2_Kafka_IF03_SummonMonster_Insert_Part01",
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "priorityTag": "MonsterBattleCry",
                          "canHitNonTargets": true,
                          "allowAbilityTriggers": false
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_Wait",
                          "value": 0
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "AIFlag",
                          "value": 1
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "AI_SkillIF01",
                          "value": 1
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_Wait",
                          "value": {
                            "operator": "Variables[0] (MDF_Wait) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(MDF_Wait + 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "MDF_Wait"
                            ]
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "DisPelCount"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_Standard_IF_AllDamageTransfer_AllDamageTypeTaken",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AllDamageTransferRatio) || RETURN",
                    "displayLines": "MDF_AllDamageTransferRatio",
                    "constants": [],
                    "variables": [
                      "MDF_AllDamageTransferRatio"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_Standard_IF_AllDamageTransfer_AllDamageTypeAdded",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AllDamageTransferRatio) || RETURN",
                    "displayLines": "MDF_AllDamageTransferRatio",
                    "constants": [],
                    "variables": [
                      "MDF_AllDamageTransferRatio"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_Standard_IF_AllDamageTransfer_AlldamageReduce_Sub[<span class=\"descriptionNumberColor\">DMG Reduction Distribution</span>]",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Enemy_Standard_IF_AllDamageTransfer_AlldamageReduce_Sub_Real"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "Break",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Enemy_Standard_IF_AllDamageTransfer_AlldamageReduce_Sub_Real",
                      "valuePerStack": {
                        "MDF_AllDamageTransferRatio": {
                          "operator": "Variables[0] (MDF_AllDamageTransferRatio) || RETURN",
                          "displayLines": "MDF_AllDamageTransferRatio",
                          "constants": [],
                          "variables": [
                            "MDF_AllDamageTransferRatio"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Enemy_Standard_IF_AllDamageTransfer_AlldamageReduce_Sub_Real"
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Enemy_Standard_IF_AllDamageTransfer_AlldamageReduce_Sub_Real",
                  "valuePerStack": {
                    "MDF_AllDamageTransferRatio": {
                      "operator": "Variables[0] (MDF_AllDamageTransferRatio) || RETURN",
                      "displayLines": "MDF_AllDamageTransferRatio",
                      "constants": [],
                      "variables": [
                        "MDF_AllDamageTransferRatio"
                      ]
                    }
                  }
                }
              ]
            }
          ],
          "description": "When not yet Weakness Broken, reduces DMG received by <span class=\"descriptionNumberColor\">MDF_AllDamageTransferRatio</span>. Upon taking action, this effect is equally distributed to other enemy units.",
          "type": "Buff",
          "statusName": "DMG Reduction Distribution"
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_Standard_IF_AllDamageTransfer_AlldamageReduce_Sub_Real",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AllDamageTransferRatio) || RETURN",
                    "displayLines": "MDF_AllDamageTransferRatio",
                    "constants": [],
                    "variables": [
                      "MDF_AllDamageTransferRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_AllDamageTransferRatio"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_Standard_IF_AllDamageTransfer_AlldamageReduce",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Enemy_Standard_IF_AllDamageTransfer_AlldamageReduce_Real"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "Enemy_Standard_IF_AllDamageTransfer_AlldamageReduce_Sub[<span class=\"descriptionNumberColor\">DMG Reduction Distribution</span>]"
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Enemy_Standard_IF_AllDamageTransfer_AlldamageReduce",
                    "invertCondition": true
                  },
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Enemy_Standard_IF_AllDamageTransfer_AllDamageTypeAdded"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Enemy_Standard_IF_AllDamageTransfer_AllDamageTypeTaken"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Enemy_Standard_IF_AllDamageTransfer_AlldamageReduce",
                      "valuePerStack": {
                        "MDF_AllDamageTransferRatio": {
                          "operator": "Variables[0] (MDF_AllDamageTransferRatio) || RETURN",
                          "displayLines": "MDF_AllDamageTransferRatio",
                          "constants": [],
                          "variables": [
                            "MDF_AllDamageTransferRatio"
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable with Team Count",
                  "target": {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  "variableName": "MDF_CharCount",
                  "livingTargets": true
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder's Team Members(Exclude Self)}}"
                  },
                  "modifier": "Enemy_Standard_IF_AllDamageTransfer_AlldamageReduce_Sub[<span class=\"descriptionNumberColor\">DMG Reduction Distribution</span>]",
                  "valuePerStack": {
                    "MDF_AllDamageTransferRatio": {
                      "operator": "Variables[0] (MDF_AllDamageTransferRatio) || Variables[1] (MDF_CharCount) || DIV || RETURN",
                      "displayLines": "(MDF_AllDamageTransferRatio / MDF_CharCount)",
                      "constants": [],
                      "variables": [
                        "MDF_AllDamageTransferRatio",
                        "MDF_CharCount"
                      ]
                    }
                  }
                },
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "Break",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Enemy_Standard_IF_AllDamageTransfer_AlldamageReduce_Real",
                      "valuePerStack": {
                        "MDF_AllDamageTransferRatio": {
                          "operator": "Variables[0] (MDF_AllDamageTransferRatio) || RETURN",
                          "displayLines": "MDF_AllDamageTransferRatio",
                          "constants": [],
                          "variables": [
                            "MDF_AllDamageTransferRatio"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "Enemy_Standard_IF_AllDamageTransfer_AlldamageReduce_Sub[<span class=\"descriptionNumberColor\">DMG Reduction Distribution</span>]",
                    "invertCondition": true,
                    "includePreDeath": true
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "Enemy_Standard_IF_AllDamageTransfer_AlldamageReduce_Sub[<span class=\"descriptionNumberColor\">DMG Reduction Distribution</span>]"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Enemy_Standard_IF_AllDamageTransfer_AlldamageReduce_Real"
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Enemy_Standard_IF_AllDamageTransfer_AlldamageReduce_Real",
                  "valuePerStack": {
                    "MDF_AllDamageTransferRatio": {
                      "operator": "Variables[0] (MDF_AllDamageTransferRatio) || RETURN",
                      "displayLines": "MDF_AllDamageTransferRatio",
                      "constants": [],
                      "variables": [
                        "MDF_AllDamageTransferRatio"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_Standard_IF_AllDamageTransfer_AlldamageReduce_Real",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AllDamageTransferRatio) || RETURN",
                    "displayLines": "MDF_AllDamageTransferRatio",
                    "constants": [],
                    "variables": [
                      "MDF_AllDamageTransferRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_AllDamageTransferRatio"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_Standard_IF_AllDamageTransfer",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Enemy_Standard_IF_AllDamageTransfer_AlldamageReduce",
                  "valuePerStack": {
                    "MDF_AllDamageTransferRatio": {
                      "operator": "Variables[0] (MDF_AllDamageTransferRatio) || RETURN",
                      "displayLines": "MDF_AllDamageTransferRatio",
                      "constants": [],
                      "variables": [
                        "MDF_AllDamageTransferRatio"
                      ]
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
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Enemy_Standard_IF_AllDamageTransfer",
                      "valuePerStack": {
                        "MDF_AllDamageTransferRatio": {
                          "operator": "Variables[0] (MDF_AllDamageTransferRatio) || RETURN",
                          "displayLines": "MDF_AllDamageTransferRatio",
                          "constants": [],
                          "variables": [
                            "MDF_AllDamageTransferRatio"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "Enemy_Standard_IF_AllDamageTransfer_AlldamageReduce"
                  },
                  "passed": [
                    {
                      "name": "Reconstruct Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "Enemy_Standard_IF_AllDamageTransfer_AlldamageReduce",
                      "includeTargetsInLimbo": true,
                      "execute": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "Enemy_Standard_IF_AllDamageTransfer_AlldamageReduce",
                          "valuePerStack": {
                            "MDF_AllDamageTransferRatio": {
                              "operator": "Variables[0] (MDF_AllDamageTransferRatio) || RETURN",
                              "displayLines": "MDF_AllDamageTransferRatio",
                              "constants": [],
                              "variables": [
                                "MDF_AllDamageTransferRatio"
                              ]
                            }
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W2_Kafka_IF_EnemyCount_Sub[<span class=\"descriptionNumberColor\">Stellar Aegis</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "Layer",
                  "multiplier": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_TokenDMGRduceRatio) || Variables[1] (Layer) || MUL || RETURN",
                    "displayLines": "(MDF_TokenDMGRduceRatio * Layer)",
                    "constants": [],
                    "variables": [
                      "MDF_TokenDMGRduceRatio",
                      "Layer"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Decreases DMG received by <span class=\"descriptionNumberColor\">MDF_TokenDMGRduceRatio</span>. This effect is stackable.",
          "type": "Buff",
          "statusName": "Stellar Aegis",
          "stackLimit": 5,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_W2_Kafka_IF_EnemyCount",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "EnemyCount_AddModifier"
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
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
                      "name": "Use Custom Character Function",
                      "functionName": "EnemyCount_AddModifier"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
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
                      "name": "Use Custom Character Function",
                      "functionName": "EnemyCount_AddModifier"
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "EnemyCount_AddModifier",
              "parse": [
                {
                  "name": "Define Custom Variable with Team Count",
                  "target": {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  "variableName": "_TeamNumber",
                  "livingTargets": true
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "Enemy_W2_Kafka_IF_EnemyCount_Sub[<span class=\"descriptionNumberColor\">Stellar Aegis</span>]"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_TeamNumber",
                    "compareType": ">=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All(with Unselectable)}}"
                      },
                      "modifier": "Enemy_W2_Kafka_IF_EnemyCount_Sub[<span class=\"descriptionNumberColor\">Stellar Aegis</span>]",
                      "valuePerStack": {
                        "MDF_DamageAddRatio": {
                          "operator": "Variables[0] (MDF_ShowValue2) || RETURN",
                          "displayLines": "MDF_ShowValue2",
                          "constants": [],
                          "variables": [
                            "MDF_ShowValue2"
                          ]
                        },
                        "MDF_TokenDMGRduceRatio": {
                          "operator": "Variables[0] (MDF_ShowValue1) || RETURN",
                          "displayLines": "MDF_ShowValue1",
                          "constants": [],
                          "variables": [
                            "MDF_ShowValue1"
                          ]
                        }
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (_TeamNumber) || RETURN",
                        "displayLines": "_TeamNumber",
                        "constants": [],
                        "variables": [
                          "_TeamNumber"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_ShowValue1",
            "MDF_ShowValue2"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_IF03_SummonKillBonus_Sub[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_KillBonus) || RETURN",
                    "displayLines": "MDF_KillBonus",
                    "constants": [],
                    "variables": [
                      "MDF_KillBonus"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "DMG increases by <span class=\"descriptionNumberColor\">MDF_KillBonus</span>. This effect can stack.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "DMG Boost",
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_IF03_SummonKillBonus04[<span class=\"descriptionNumberColor\">Madden</span>]",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [
            "MDF_KillBonus"
          ],
          "latentQueue": [],
          "description": "Enhanced by Boss Mirage, enters Charging state, and is dispelled upon being Weakness Broken.",
          "type": "Other",
          "effectName": "Madden",
          "statusName": "Madden"
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_IF03_SummonKillBonus03[<span class=\"descriptionNumberColor\">Madden</span>]",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "MModifier_Monster_W3_Dinosaur_Fury[<span class=\"descriptionNumberColor\">Boil</span>]"
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_KillBonus"
          ],
          "latentQueue": [],
          "description": "Enhanced by Boss Mirage, enters Charging state, and is dispelled upon being Weakness Broken.",
          "type": "Other",
          "effectName": "Madden",
          "statusName": "Madden"
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_IF03_SummonKillBonus02[<span class=\"descriptionNumberColor\">Madden</span>]",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [
            "MDF_KillBonus"
          ],
          "latentQueue": [],
          "description": "Enhanced by Boss Mirage, enters Freezing Point state, and is dispelled upon being Weakness Broken.",
          "type": "Other",
          "effectName": "Madden",
          "statusName": "Madden"
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_IF03_SummonKillBonus01[<span class=\"descriptionNumberColor\">Madden</span>]",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [
            "MDF_KillBonus"
          ],
          "latentQueue": [],
          "description": "Enhanced by Boss Mirage, enters Spontaneous Combustion state, and is dispelled upon being Weakness Broken.",
          "type": "Other",
          "effectName": "Madden",
          "statusName": "Madden"
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_IF03_SummonKillBonus[<span class=\"descriptionNumberColor\">Madden</span>]",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "description": "Enhanced by Boss Mirage, enters Special Attack mode, and is dispelled upon being Weakness Broken.",
          "type": "Other",
          "effectName": "Madden",
          "statusName": "Madden"
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_IF03_SummonHitDamageSplit",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "HP Change [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "ParameterValue",
                    "compareType": "<",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Changes to Stats",
                      "variableName": "PartLoseHpValue"
                    },
                    {
                      "name": "Consume",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "sourceTarget": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "flatConsume": {
                        "operator": "Constants[0] (0) || Variables[0] (PartLoseHpValue) || SUB || RETURN",
                        "displayLines": "(0 - PartLoseHpValue)",
                        "constants": [
                          0
                        ],
                        "variables": [
                          "PartLoseHpValue"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "InsertCheck"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_IF03_SummonWeak[<span class=\"descriptionNumberColor\">Rigidity</span>]",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "Monster_W2_Kafka_IF03_SummonFenzy[<span class=\"descriptionNumberColor\">Sanguine Gaze</span>]",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Enemy_Standard_IF_WeaknessAcross"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_WeakDMGReduceRatio) || RETURN",
                    "displayLines": "MDF_WeakDMGReduceRatio",
                    "constants": [],
                    "variables": [
                      "MDF_WeakDMGReduceRatio"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRate</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (1) || INVERT || Variables[0] (MDF_WeakStatusProbReduceRatio) || MUL || RETURN",
                    "displayLines": "(-1 * MDF_WeakStatusProbReduceRatio)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "MDF_WeakStatusProbReduceRatio"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Enemy_Standard_IF_WeaknessAcross",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (MDF_WeakStanceSliceRatio) || RETURN",
                      "displayLines": "MDF_WeakStanceSliceRatio",
                      "constants": [],
                      "variables": [
                        "MDF_WeakStanceSliceRatio"
                      ]
                    }
                  }
                }
              ]
            }
          ],
          "description": "Reduces DMG dealt by <span class=\"descriptionNumberColor\">MDF_WeakDMGReduceRatio</span> and decreases Effect Hit Rate by <span class=\"descriptionNumberColor\">MDF_WeakStatusProbReduceRatio</span>.",
          "type": "Debuff",
          "effectName": "Rigidity",
          "statusName": "Rigidity"
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_IF03_SummonFenzy[<span class=\"descriptionNumberColor\">Sanguine Gaze</span>]",
          "modifierFlags": [
            "STAT_SpeedUp"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_FrenzyDMGTokenAddRatio) || RETURN",
                    "displayLines": "MDF_FrenzyDMGTokenAddRatio",
                    "constants": [],
                    "variables": [
                      "MDF_FrenzyDMGTokenAddRatio"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_FrenzySpeedAddRatio) || RETURN",
                    "displayLines": "MDF_FrenzySpeedAddRatio",
                    "constants": [],
                    "variables": [
                      "MDF_FrenzySpeedAddRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Increases DMG received by <span class=\"descriptionNumberColor\">MDF_FrenzyDMGTokenAddRatio</span> and increases SPD by <span class=\"descriptionNumberColor\">MDF_FrenzySpeedAddRatio</span>.",
          "type": "Other",
          "effectName": "Sanguine Gaze",
          "statusName": "Sanguine Gaze"
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_IF03_SummonBreakShow[<span class=\"descriptionNumberColor\">Action delayed after Break</span>]",
          "description": "Action is additionally delayed after being Weakness Broken.",
          "type": "Other",
          "statusName": "Action delayed after Break"
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_IF03_SummonBreak",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_BreakDMGTokenAddRatio) || RETURN",
                    "displayLines": "MDF_BreakDMGTokenAddRatio",
                    "constants": [],
                    "variables": [
                      "MDF_BreakDMGTokenAddRatio"
                    ]
                  }
                },
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "advanceType": "Set",
                  "multiAdd": "MDF_BreakDelayRatio"
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_IF03_SummonControl",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
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
                        "team": "Enemy Team"
                      },
                      {
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "compareType": "=",
                        "value2": 3
                      },
                      {
                        "name": "Is Entity a Battle Event/Summon",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Caster's Minions}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "compareType": "=",
                            "value2": 3
                          }
                        ]
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Monster_W2_Kafka_IF03_SummonFenzy[<span class=\"descriptionNumberColor\">Sanguine Gaze</span>]",
                          "valuePerStack": {
                            "MDF_FrenzyDMGTokenAddRatio": {
                              "operator": "Variables[0] (MDF_FrenzyDMGTokenAddRatio) || RETURN",
                              "displayLines": "MDF_FrenzyDMGTokenAddRatio",
                              "constants": [],
                              "variables": [
                                "MDF_FrenzyDMGTokenAddRatio"
                              ]
                            },
                            "MDF_FrenzySpeedAddRatio": {
                              "operator": "Variables[0] (MDF_FrenzySpeedAddRatio) || RETURN",
                              "displayLines": "MDF_FrenzySpeedAddRatio",
                              "constants": [],
                              "variables": [
                                "MDF_FrenzySpeedAddRatio"
                              ]
                            },
                            "MDF_FrenzyStanceSliceRatio": {
                              "operator": "Variables[0] (MDF_FrenzyStanceSliceRatio) || RETURN",
                              "displayLines": "MDF_FrenzyStanceSliceRatio",
                              "constants": [],
                              "variables": [
                                "MDF_FrenzyStanceSliceRatio"
                              ]
                            }
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Weakness Break [Anyone]",
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
                        "team": "Enemy Team"
                      },
                      {
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "compareType": "=",
                        "value2": 3
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
                      "modifier": "Monster_W2_Kafka_IF03_SummonBreak",
                      "valuePerStack": {
                        "MDF_BreakDMGTokenAddRatio": {
                          "operator": "Variables[0] (MDF_BreakDMGTokenAddRatio) || RETURN",
                          "displayLines": "MDF_BreakDMGTokenAddRatio",
                          "constants": [],
                          "variables": [
                            "MDF_BreakDMGTokenAddRatio"
                          ]
                        },
                        "MDF_BreakDelayRatio": {
                          "operator": "Variables[0] (MDF_BreakDelayRatio) || RETURN",
                          "displayLines": "MDF_BreakDelayRatio",
                          "constants": [],
                          "variables": [
                            "MDF_BreakDelayRatio"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "OneMorePerTurn"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "Enemy_W2_Cocolia_IF_SummonDie"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "Target__Toughness",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Deal Toughness DMG",
                          "value": {
                            "operator": "Variables[0] (MDF_StanceDMGPerTeamMate) || RETURN",
                            "displayLines": "MDF_StanceDMGPerTeamMate",
                            "constants": [],
                            "variables": [
                              "MDF_StanceDMGPerTeamMate"
                            ]
                          },
                          "defender": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "canDelay": true,
                          "ToughnessDMGType": {
                            "name": "Damage Type Source",
                            "sourceType": {}
                          }
                        }
                      ]
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Enemy_W2_Cocolia_IF_SummonDie"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_WeakDMGReduceRatio",
            "MDF_WeakStatusProbReduceRatio",
            "MDF_WeakStanceSliceRatio",
            "MDF_BreakDMGTokenAddRatio",
            "MDF_BreakDelayRatio",
            "MDF_FrenzyDMGTokenAddRatio",
            "MDF_FrenzySpeedAddRatio",
            "MDF_FrenzyStanceSliceRatio",
            "MDF_StanceDMGPerTeamMate"
          ],
          "latentQueue": [
            "DisPelCount"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_IF03_Pursuit",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
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
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "flagName": "STAT_DOT_Electric"
                          },
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "flagName": "STAT_DOT_Burn"
                          },
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "flagName": "STAT_CTRL_Frozen"
                          }
                        ]
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W2_Kafka_Ability06_Part01_IF",
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
                    }
                  ]
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
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Current Action Target List}}"
                            },
                            "flagName": "STAT_DOT_Electric"
                          },
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Current Action Target List}}"
                            },
                            "flagName": "STAT_DOT_Burn"
                          },
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Current Action Target List}}"
                            },
                            "flagName": "STAT_CTRL_Frozen"
                          }
                        ]
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
                          "target": "{{Current Action Target List}}"
                        },
                        "value1": "CurrentHP%",
                        "compareType": ">",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W2_Kafka_Ability06_Part01_IF",
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
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_IF02_Pursuit",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
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
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W2_Kafka_Ability06_Part01_IF",
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
                    }
                  ]
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
                          "target": "{{Current Action Target List}}"
                        },
                        "value1": "CurrentHP%",
                        "compareType": ">",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W2_Kafka_Ability06_Part01_IF",
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
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "DisPelCount"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_IF_Part03WeaponEnhanceEffect",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_IF_Part03EnhanceEffect",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_IF_LowHP",
          "execute": [
            {
              "eventTrigger": "HP Change [Owner]",
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
                        "value1": "CurrentHP%",
                        "compareType": "<=",
                        "value2": {
                          "operator": "Variables[0] (MDF_LowHPRatio) || RETURN",
                          "displayLines": "MDF_LowHPRatio",
                          "constants": [],
                          "variables": [
                            "MDF_LowHPRatio"
                          ]
                        }
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 3
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "FinalPhase",
                      "value": 1
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "AIFlag",
                      "value": 1
                    },
                    {
                      "name": "Action Advance/Delay",
                      "advanceType": "Set",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "multiBase": 0
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "CurrentHP%",
                        "compareType": "<=",
                        "value2": 0
                      }
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_LowHPRatio"
          ],
          "latentQueue": [
            "DisPelCount"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_IF_MindControlCheck",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Monster_W2_Kafka_IF_MindControl_True"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Monster_W2_Kafka_IF_MindControl_TrueEffect"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                          "value": 1
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked Start [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Monster_W2_Kafka_IF_MindControl_True"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Monster_W2_Kafka_IF_MindControl_TrueEffect"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Monster_W2_Kafka_IF_MindControlStanceResistance"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Monster_W2_Kafka_IF_MindControl_True"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Monster_W2_Kafka_IF_MindControl_TrueEffect"
                      }
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Monster_W2_Kafka_IF_MindControl_True"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Monster_W2_Kafka_IF_MindControl_True"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Monster_W2_Kafka_IF_MindControl_TrueEffect"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Monster_W2_Kafka_IF_MindControl_False"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Monster_W2_Kafka_IF_MindControl_False"
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
                    "value1": "ShowHint04",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "searchRandom": true,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Monster_W2_Kafka_IF_MindControl_False"
                      },
                      "noTargetFound": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          "searchRandom": true,
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "Monster_W2_Kafka_IF_MindControl_True"
                          },
                          "ifTargetFound": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "Monster_W2_Kafka_IF_MindControl_TrueEffect"
                            }
                          ]
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          "modifier": "Monster_W2_Kafka_IF_MindControl_False"
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "ShowHint04",
                          "value": 1
                        }
                      ]
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
                    "value1": "ShowHint04",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "searchRandom": true,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Monster_W2_Kafka_IF_MindControl_True"
                      },
                      "noTargetFound": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          "modifier": "Monster_W2_Kafka_IF_MindControl_False"
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "ShowHint04",
                          "value": 1
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_IF_MindControlStanceResistance",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Toughness Reduction Resistance</span>&nbsp;",
                  "value": 1
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_IF_MindControl_False",
          "modifierFlags": [
            "DispelPriorityHigh"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_IF_MindControl_TrueEffect",
          "modifierFlags": [
            "DispelPriorityHigh"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Monster_W2_Kafka_IF_MindControl_True"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "ShowHint04"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_IF_MindControl_True",
          "modifierFlags": [
            "DispelPriorityHigh"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": [
            "MindControlCount",
            "ShowHint04",
            "FinalPhase"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_IF_DamageUp",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "ModifierLayers",
                  "multiplier": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_DamageUpRatio_PerLayer) || Variables[1] (ModifierLayers) || MUL || RETURN",
                    "displayLines": "(MDF_DamageUpRatio_PerLayer * ModifierLayers)",
                    "constants": [],
                    "variables": [
                      "MDF_DamageUpRatio_PerLayer",
                      "ModifierLayers"
                    ]
                  }
                }
              ]
            }
          ],
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_IF_MeleeAttack",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "DamageUpFlag",
                    "compareType": ">",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Monster_W2_Kafka_RL_DamageUp[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                      "valuePerStack": {
                        "MDF_DamageUpRatio_PerLayer": {
                          "operator": "Variables[0] (MDF_DamageUpRatio_PerLayer) || RETURN",
                          "displayLines": "MDF_DamageUpRatio_PerLayer",
                          "constants": [],
                          "variables": [
                            "MDF_DamageUpRatio_PerLayer"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "DamageUpFlag"
                    }
                  ]
                }
              ]
            }
          ],
          "duration": 1
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_IF_ListenElectric",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Attack Type",
                        "attackTypes": [
                          "DOT"
                        ],
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      {
                        "name": "Is Damage Type/Element",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "list": [
                          "Lightning"
                        ]
                      },
                      {
                        "name": "Is Joint-Attack",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "Monster_W2_Kafka_IF_MeleeAttack"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "variableName": "DamageUpFlag",
                          "context": "TargetEntity",
                          "value": 1,
                          "max": 5
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "Monster_W2_Kafka_RL_DamageUp[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                          "valuePerStack": {
                            "MDF_DamageUpRatio_PerLayer": {
                              "operator": "Variables[0] (MDF_DamageUpRatio_PerLayer) || RETURN",
                              "displayLines": "MDF_DamageUpRatio_PerLayer",
                              "constants": [],
                              "variables": [
                                "MDF_DamageUpRatio_PerLayer"
                              ]
                            }
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_IF_Power",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "Monster_W2_Kafka_IF_ListenElectric",
                  "valuePerStack": {
                    "MDF_DamageUpRatio_PerLayer": {
                      "operator": "Variables[0] (MDF_DamageUpRatio_PerLayer) || RETURN",
                      "displayLines": "MDF_DamageUpRatio_PerLayer",
                      "constants": [],
                      "variables": [
                        "MDF_DamageUpRatio_PerLayer"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "searchRandom": true,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Monster_W2_Kafka_IF_ListenElectric",
                    "invertCondition": true
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Monster_W2_Kafka_IF_ListenElectric",
                      "valuePerStack": {
                        "MDF_DamageUpRatio_PerLayer": {
                          "operator": "Variables[0] (MDF_DamageUpRatio_PerLayer) || RETURN",
                          "displayLines": "MDF_DamageUpRatio_PerLayer",
                          "constants": [],
                          "variables": [
                            "MDF_DamageUpRatio_PerLayer"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_DamageUpRatio_PerLayer"
          ],
          "latentQueue": [
            "DisPelCount"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_IF_Ability04_Target",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_IF_Pursuit",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
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
                    }
                  ]
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
                          "target": "{{Current Action Target List}}"
                        },
                        "value1": "CurrentHP%",
                        "compareType": ">",
                        "value2": 0
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
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "DisPelCount"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_IF_Endurance",
          "modifierFlags": [
            "Endurance"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "PhaseChange"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "Phase0"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "STAT_CTRL",
                  "value": 1
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "DisPelCount",
            "AIFlag",
            "AI_SkillIF01",
            "CD_SkillIF01",
            "MDF_DotCurCount",
            "MaxMinions_Right",
            "InsertCheck"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_IF_PartController",
          "execute": [
            {
              "eventTrigger": "Waiting for Healing in Limbo",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "InsertCheck",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Dispel Debuffs",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "silent": true
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "Monster_W2_Kafka_IF_Endurance"
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "InsertCheck"
                        },
                        {
                          "name": "Set Enemy Phase",
                          "mode": "Inc"
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W2_Kafka_IF_PassiveAbility_Insert",
                          "priorityTag": "MonsterChangePhase",
                          "ownerState": "Mask_AliveOrLimbo",
                          "targetState": "Mask_AliveOrLimbo",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "InsertCheck",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Dispel Debuffs",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "silent": true
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "Monster_W2_Kafka_IF_Endurance"
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "InsertCheck"
                        },
                        {
                          "name": "Set Enemy Phase",
                          "mode": "Inc"
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W2_Kafka_IF_PassiveAbility_Insert2",
                          "priorityTag": "MonsterChangePhase",
                          "ownerState": "Mask_AliveOrLimbo",
                          "targetState": "Mask_AliveOrLimbo",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ]
                }
              ],
              "priorityLevel": -90
            }
          ],
          "stackData": [],
          "latentQueue": [
            "DisPelCount"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_IF_HPRatioTriggerAOE",
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
                  "scope": "ContextAbility",
                  "variableName": "Kafka_AOEFlag",
                  "value": 1
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "ContextAbility",
                  "variableName": "Kafka_HPExchangeFlag",
                  "value": 1
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "ContextAbility",
                  "variableName": "Kafka_SummonFlag",
                  "value": 1
                }
              ]
            },
            {
              "eventTrigger": "HP Change [Owner]"
            }
          ],
          "stackData": [],
          "latentQueue": [
            "DisPelCount"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_IF_SummonControl",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "SummonCount"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Entity Death [Anyone]"
            }
          ],
          "stackData": [],
          "latentQueue": [
            "DisPelCount"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_IF02_ContainJXDTag",
          "stackData": [],
          "latentQueue": [
            "MDF_HasTarget",
            "JustinBreak"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_IF_SummonRotation",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_IF02_P2ShieldBrokenTag"
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_IF02_P2ShieldModifier",
          "modifierFlags": [
            "MuteBreak"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (MDF_CurrentCount) || RETURN",
                    "displayLines": "MDF_CurrentCount",
                    "constants": [],
                    "variables": [
                      "MDF_CurrentCount"
                    ]
                  },
                  "entityClass": "Enemy",
                  "maximum": 6,
                  "assignState": "True"
                },
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Protected",
                  "valueList": [
                    "Physical",
                    "Fire",
                    "Ice",
                    "Thunder",
                    "Wind",
                    "Quantum",
                    "Imaginary"
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Enemy ID",
                        "ID": 8032020,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Grunt: Security Personnel"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 8032010,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Grunt: Field Personnel"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_CurrentCount",
                      "value": {
                        "operator": "Variables[0] (MDF_CurrentCount) || Constants[0] (1) || SUB || RETURN",
                        "displayLines": "(MDF_CurrentCount - 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "MDF_CurrentCount"
                        ]
                      }
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (MDF_CurrentCount) || RETURN",
                        "displayLines": "MDF_CurrentCount",
                        "constants": [],
                        "variables": [
                          "MDF_CurrentCount"
                        ]
                      },
                      "entityClass": "Enemy",
                      "maximum": 6
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_CurrentCount",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": 0,
                          "entityClass": "Enemy",
                          "maximum": 6,
                          "assignState": "False"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "Monster_W2_Kafka_IF02_P2ShieldBrokenTag"
                        },
                        "Modifier Deletes Itself"
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_IF02_PartController",
          "execute": [
            {
              "eventTrigger": "Waiting for Healing in Limbo",
              "execute": [
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
                      "name": "Action Advance/Delay",
                      "target": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Battle Event List}}"
                          },
                          {
                            "name": "Target Filter",
                            "conditions": {
                              "name": "Battle Event ID",
                              "ID": 20005,
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              }
                            }
                          }
                        ]
                      },
                      "advanceType": "Advance",
                      "multiAdd": -1
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "AIFlag",
                      "value": 2
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Enemy ID",
                            "ID": {
                              "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__24) || RETURN",
                              "displayLines": "ENEMIES_OBJECT_UNUSED__24",
                              "constants": [],
                              "variables": [
                                "ENEMIES_OBJECT_UNUSED__24"
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
                              "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__25) || RETURN",
                              "displayLines": "ENEMIES_OBJECT_UNUSED__25",
                              "constants": [],
                              "variables": [
                                "ENEMIES_OBJECT_UNUSED__25"
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
                      "ifTargetFound": [
                        {
                          "name": "Force Entity Death",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          }
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MaxMinions",
                      "value": 4
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MaxMinions_Left",
                      "value": 2
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MaxMinions_Right",
                      "value": 2
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "InsertCheck",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Dispel Debuffs",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "silent": true
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "Monster_W2_Kafka_IF_Endurance"
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "InsertCheck"
                        },
                        {
                          "name": "Set Enemy Phase",
                          "mode": "Inc"
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W2_Kafka_IF_PassiveAbility_Insert",
                          "priorityTag": "MonsterChangePhase",
                          "ownerState": "Mask_AliveOrLimbo",
                          "targetState": "Mask_AliveOrLimbo",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ]
                }
              ],
              "priorityLevel": -90
            }
          ],
          "stackData": [],
          "latentQueue": [
            "DisPelCount"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_IF02_Ability08_ExecuteTag",
          "stackData": [],
          "latentQueue": [
            "MDF_HasTarget"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_IF02_SecondMonsterTag",
          "stackData": [],
          "latentQueue": [
            "MDF_Right",
            "MDF_Left"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_IF02_RightMonsterTag"
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_IF02_LeftMonsterTag"
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_IF02_BattleEventSummon",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_LoopCount",
                  "value": {
                    "operator": "Variables[0] (MaxMinions) || Variables[1] (MDF_PosL) || SUB || Variables[2] (MDF_PosR ) || SUB || RETURN",
                    "displayLines": "((MaxMinions - MDF_PosL) - MDF_PosR )",
                    "constants": [],
                    "variables": [
                      "MaxMinions",
                      "MDF_PosL",
                      "MDF_PosR "
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_LoopCount",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    "Deleted bullshit",
                    {
                      "name": "Looped Event",
                      "maxLoops": {
                        "operator": "Variables[0] (MDF_LoopCount) || RETURN",
                        "displayLines": "MDF_LoopCount",
                        "constants": [],
                        "variables": [
                          "MDF_LoopCount"
                        ]
                      },
                      "Event": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "MDF_PosL",
                            "compareType": "<",
                            "value2": {
                              "operator": "Variables[0] (MaxMinions_Left) || RETURN",
                              "displayLines": "MaxMinions_Left",
                              "constants": [],
                              "variables": [
                                "MaxMinions_Left"
                              ]
                            }
                          },
                          "passed": [
                            {
                              "name": "Create Enemies",
                              "delayPercent": 0,
                              "enemyList": [
                                {
                                  "name": "Enemy Entry",
                                  "enemyID": {
                                    "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__24) || RETURN",
                                    "displayLines": "ENEMIES_OBJECT_UNUSED__24",
                                    "constants": [],
                                    "variables": [
                                      "ENEMIES_OBJECT_UNUSED__24"
                                    ]
                                  },
                                  "locationType": "First"
                                }
                              ]
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_PosL",
                              "value": {
                                "operator": "Variables[0] (MDF_PosL) || Constants[0] (1) || ADD || RETURN",
                                "displayLines": "(MDF_PosL + 1)",
                                "constants": [
                                  1
                                ],
                                "variables": [
                                  "MDF_PosL"
                                ]
                              }
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Recently Summoned Enemies}}"
                              },
                              "modifier": "Monster_W2_Kafka_IF02_LeftMonsterTag"
                            }
                          ],
                          "failed": [
                            {
                              "name": "Create Enemies",
                              "delayPercent": 0,
                              "enemyList": [
                                {
                                  "name": "Enemy Entry",
                                  "enemyID": {
                                    "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__25) || RETURN",
                                    "displayLines": "ENEMIES_OBJECT_UNUSED__25",
                                    "constants": [],
                                    "variables": [
                                      "ENEMIES_OBJECT_UNUSED__25"
                                    ]
                                  },
                                  "locationType": "Last"
                                }
                              ]
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_PosR",
                              "value": {
                                "operator": "Variables[0] (MDF_PosR ) || Constants[0] (1) || ADD || RETURN",
                                "displayLines": "(MDF_PosR  + 1)",
                                "constants": [
                                  1
                                ],
                                "variables": [
                                  "MDF_PosR "
                                ]
                              }
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Recently Summoned Enemies}}"
                              },
                              "modifier": "Monster_W2_Kafka_IF02_RightMonsterTag"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Ability",
                  "abilityName": "BattleEventAbility_SummonMonsterInfinite_Camera"
                },
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "advanceType": "Advance",
                  "multiAdd": -1
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Monster_W2_Kafka_IF02_LeftMonsterTag"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_PosL",
                      "value": {
                        "operator": "Variables[0] (MDF_PosL) || Constants[0] (1) || SUB || RETURN",
                        "displayLines": "(MDF_PosL - 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "MDF_PosL"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_PosR",
                      "value": {
                        "operator": "Variables[0] (MDF_PosR ) || Constants[0] (1) || SUB || RETURN",
                        "displayLines": "(MDF_PosR  - 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "MDF_PosR "
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": {
                      "operator": "Variables[0] (MDF_PosR) || RETURN",
                      "displayLines": "MDF_PosR",
                      "constants": [],
                      "variables": [
                        "MDF_PosR"
                      ]
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": null
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "OneMorePerTurn"
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
          "for": "Monster_W2_Kafka_CharmTargetMark",
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
          "for": "Monster_W2_Kafka_CharmMark",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_CharmOneAttack",
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
                  "modifier": "Monster_W2_Kafka_EnhanceElectricDamage"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_CharmDisableAction",
          "modifierFlags": [
            "DisableAction"
          ],
          "duration": 1
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_Charm[<span class=\"descriptionNumberColor\">Dominated</span>]",
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
                      "modifier": "Monster_W2_Kafka_CharmDisableAction"
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
                      "modifier": "Monster_W2_Kafka_CharmTargetMark"
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
                  "modifier": "Monster_W2_Kafka_CharmTargetMark"
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
          "for": "Monster_W2_Kafka_CharmControl",
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
          "for": "Monster_W2_Kafka_EnhanceElectricMark",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_EnhanceElectricDamage",
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
          "for": "Monster_W2_Kafka_Enhance",
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
                        "modifier": "Standard_DOT_Electric[<span class=\"descriptionNumberColor\">Shock</span>]"
                      },
                      {
                        "name": "NOT",
                        "condition": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Monster_W2_Kafka_CharmTargetMark"
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
                          "modifier": "Monster_W2_Kafka_CharmOneAttack"
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
                      "modifier": "Monster_W2_Kafka_CharmOneAttack"
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
                  "modifier": "Monster_W2_Kafka_CharmOneAttack"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Monster_W2_Kafka_Pursuit",
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
    },
    "2004014_BE_BattleEvents": {
      "fileName": "2004014_BE_BattleEvents",
      "abilityType": "Char. B.Events",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Battle Event Construction",
          "ID": 20002,
          "team": "Enemy Team",
          "eventType": "Assist",
          "abilityList": [
            "BattleEventAbility_W2_Kafka_RL",
            "BattleEventAbility_W2_Kafka_RL_Insert"
          ],
          "overridesArray": [
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
              "value": 100
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CharacterLevel</span>&nbsp;",
              "value": 1
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateSUM</span>&nbsp;",
              "value": 1
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageSUM</span>&nbsp;",
              "value": 1
            }
          ]
        },
        {
          "name": "Battle Event Construction",
          "ID": 20005,
          "team": "Neutral Team",
          "eventType": "Assist",
          "abilityList": null,
          "overridesArray": [
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
              "value": 100
            }
          ],
          "eventSpeed": 100,
          "hardLevelEvent": true
        }
      ],
      "references": []
    }
  }
}