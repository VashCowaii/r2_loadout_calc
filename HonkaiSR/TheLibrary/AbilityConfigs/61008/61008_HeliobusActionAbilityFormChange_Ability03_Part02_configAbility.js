const configAbility = {
  "fileName": "61008_HeliobusActionAbilityFormChange_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Deleted bullshit",
    {
      "name": "UI Display Event",
      "popUpText": "Suppression: Incarnate Morph"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Random Chance",
        "chance": 0.25
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_ChangeCount",
          "value": 1
        }
      ],
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Random Chance",
            "chance": 0.66
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_ChangeCount",
              "value": 2
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_ChangeCount",
              "value": 3
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
      "maxTargets": {
        "operator": "Variables[0] (_ChangeCount) || RETURN",
        "displayLines": "_ChangeCount",
        "constants": [],
        "variables": [
          "_ChangeCount"
        ]
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-146489802\">Modifier_HeliobusActionAbilityFormChange</a>",
          "casterAssign": "TargetSelf"
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
        "name": "Enemy ID",
        "ID": 8002050,
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "characterName": "Sequence Trotter"
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
            "modifier": "<a class=\"gModGreen\" id=\"-1943056367\">Modifier_HeliobusActionAbilityFormChange_Enemy</a>[<span class=\"descriptionNumberColor\">Incarnate Morph</span>]",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1943056367\">Modifier_HeliobusActionAbilityFormChange_Enemy</a>[<span class=\"descriptionNumberColor\">Incarnate Morph</span>]",
              "duration": {
                "operator": "Variables[0] (#BattleEvent_P3_ADF) || RETURN",
                "displayLines": "#BattleEvent_P3_ADF",
                "constants": [],
                "variables": [
                  "#BattleEvent_P3_ADF"
                ]
              }
            }
          ]
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1744621396\">Modifier_Servant_AllGeneration</a>",
      "modifierFlags": [
        "KeepOnDeathrattle",
        "ListenUnStage"
      ],
      "useEntitySnapshot": true,
      "execute": [
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Related Summoned Entity",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "allGenerated": true
              },
              "passed": [
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abortInsertedAbilities": true
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1943056367\">Modifier_HeliobusActionAbilityFormChange_Enemy</a>[<span class=\"descriptionNumberColor\">Incarnate Morph</span>]",
      "modifierFlags": [
        "STAT_CTRL"
      ],
      "description": "Turn into a harmless Trotter. The DMG it receives is guaranteed to be CRIT Hit, and the CRIT DMG it receives increases by <span class=\"descriptionNumberColor\">#BattleEvent_P4_ADF</span>.",
      "type": "Debuff",
      "effectName": "Incarnate Morph",
      "statusName": "Incarnate Morph",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Change Enemy Name",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "from": {
                "name": "Target Name",
                "target": "{{Summoner of Modifier Holder}}"
              }
            },
            {
              "name": "Copy Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "source": {
                "name": "Target Name",
                "target": "{{Summoner of Modifier Holder}}"
              },
              "dispelFilter": "AnyStatus",
              "copyType": "Override",
              "filterList": [
                "Debuff",
                "Buff",
                "Other"
              ]
            },
            {
              "name": "Copy Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "from": {
                "name": "Target Name",
                "target": "{{Summoner of Modifier Holder}}"
              }
            },
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "typeOverride": "Buff"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Summoner of Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]",
                "includePreDeath": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1744621396\">Modifier_Servant_AllGeneration</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Summoner of Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1744621396\">Modifier_Servant_AllGeneration</a>"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1744621396\">Modifier_Servant_AllGeneration</a>"
                }
              ]
            },
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueType": "LifeTime",
              "variableName": "LifeTimeCheck",
              "multiplier": 1
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Inject Ability Use",
              "abilityName": "HeliobusActionAbilityFormChange_Revert",
              "abilitySource": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "priorityTag": "CharacterAttackFromSelf",
              "canHitNonTargets": true,
              "allowAbilityTriggers": false
            }
          ]
        },
        {
          "eventTrigger": "Take Damage Start [Owner]: Hit",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_CriticalDamage",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageSUM</span>&nbsp;"
            },
            {
              "name": "Adjust Target Stats",
              "modifiedValuesArray": [
                {
                  "on": "Attacker",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateSUM</span>&nbsp;",
                  "value": 1
                }
              ]
            },
            {
              "name": "Adjust Target Stats",
              "modifiedValuesArray": [
                {
                  "on": "Attacker",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageSUM</span>&nbsp;",
                  "value": "#BattleEvent_P4_ADF"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{All Summoners of Modifier Holder}}"
              },
              "searchRandom": true,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1943056367\">Modifier_HeliobusActionAbilityFormChange_Enemy</a>[<span class=\"descriptionNumberColor\">Incarnate Morph</span>]"
              },
              "ifTargetFound": [
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Summoner of Parameter Target}}"
                  }
                }
              ]
            },
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Name",
                "target": "{{Summoner of Modifier Holder}}"
              }
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "LifeTimeCheck",
              "value": {
                "operator": "Variables[0] (LifeTimeCheck) || Constants[0] (1) || SUB || RETURN",
                "displayLines": "(LifeTimeCheck - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "LifeTimeCheck"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "LifeTimeCheck",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1943056367\">Modifier_HeliobusActionAbilityFormChange_Enemy</a>[<span class=\"descriptionNumberColor\">Incarnate Morph</span>]"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-146489802\">Modifier_HeliobusActionAbilityFormChange</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": 8002050,
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "characterName": "Sequence Trotter"
              },
              "passed": [
                {
                  "name": "Achievement",
                  "relatedAchievements": [
                    {
                      "title": "Ghosty Scythe of Vice",
                      "desc": "Transform a Trotter into a Trotter with exorcismics",
                      "rarity": "Low",
                      "type": "Hidden until Completion"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Entity Exit Stage",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "reason": "FormChange"
            },
            {
              "name": "Create Enemies",
              "delayPercent": 0,
              "refreshPositions": false,
              "propertyListIherit": [
                "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;",
                "&nbsp;<span class=\"descriptionNumberColor\">DEFBase</span>&nbsp;",
                "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;"
              ],
              "inheritDelay": true,
              "inheritWeakness": true,
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": 8002050,
                  "locationType": "FormationRecord"
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "All Enemy Team Members"
  }
}