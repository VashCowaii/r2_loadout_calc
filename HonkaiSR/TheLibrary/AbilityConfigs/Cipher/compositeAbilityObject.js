const compositeAbilityObject = {
  "fullCharacterName": "Cipher",
  "trimCharacterName": "Cipher",
  "abilityList": [
    "Cipher_Cipher_TechniqueInLevel_Insert",
    "Cipher_Cipher_TechniqueInLevel",
    "Cipher_Cipher_PassiveAbility01",
    "Cipher_Cipher_PassiveAbility01_Insert_Part02",
    "Cipher_Cipher_PassiveAbility01_Insert_Part01",
    "Cipher_Cipher_PassiveAbility01_Insert_Bonuser",
    "Cipher_Cipher_Ability03_Part02",
    "Cipher_Cipher_Ability03_Part01",
    "Cipher_Cipher_Ability03_EnterReady",
    "Cipher_Cipher_Ability02_Part02",
    "Cipher_Cipher_Ability02_Part01",
    "Cipher_Cipher_Ability01_Part02",
    "Cipher_Cipher_Ability01_Part01",
    "Cipher_Modifiers"
  ],
  "abilityObject": {
    "Cipher_Cipher_TechniqueInLevel_Insert": {
      "fileName": "Cipher_Cipher_TechniqueInLevel_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "scope": "ContextCaster",
          "variableName": "MazeSkill_Triggered",
          "value": 1
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
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] (1) || RETURN",
                  "displayLines": "1",
                  "constants": [],
                  "variables": [
                    1
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Technique"
              }
            }
          ]
        },
        "Trigger: Attack End"
      ],
      "references": []
    },
    "Cipher_Cipher_TechniqueInLevel": {
      "fileName": "Cipher_Cipher_TechniqueInLevel",
      "childAbilityList": [
        "Cipher_Cipher_TechniqueInLevel",
        "Cipher_Cipher_TechniqueInLevel_Insert"
      ],
      "skillTrigger": "SkillMaze",
      "abilityType": "Technique",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"377231131\">StageAbility_Maze_Cipher_Modifier</a>",
          "valuePerStack": {}
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__377231131\">StageAbility_Maze_Cipher_Modifier</a>",
          "modifierFlags": [
            "CustomEvent_InfiniteRefresh"
          ],
          "execute": [
            {
              "eventTrigger": "Enter Battle",
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
                        "value1": "MazeSkill_Triggered",
                        "compareType": "<",
                        "value2": 1,
                        "contextScope": "ContextCaster"
                      },
                      {
                        "name": "Enemies Still Alive",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "includeNonTargets": true
                      },
                      {
                        "name": "Technique Modifies Current Wave"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Wave Count",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "Cipher_TechniqueInLevel_Insert",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "priorityTag": "AvatarInsertAttackSelf",
                      "canHitNonTargets": true,
                      "abortFlags": [
                        "STAT_CTRL",
                        "DisableAction"
                      ],
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ],
              "priorityLevel": -55
            },
            {
              "eventTrigger": "Custom Event",
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
                        "value1": "MazeSkill_Triggered",
                        "compareType": "<",
                        "value2": 1,
                        "contextScope": "ContextCaster"
                      },
                      {
                        "name": "Enemies Still Alive",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "includeNonTargets": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "Cipher_TechniqueInLevel_Insert",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "priorityTag": "AvatarInsertAttackSelf",
                      "canHitNonTargets": true,
                      "abortFlags": [
                        "STAT_CTRL",
                        "DisableAction"
                      ],
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "New Enemy Wave",
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
                        "value1": "MazeSkill_Triggered",
                        "compareType": "<",
                        "value2": 1,
                        "contextScope": "ContextCaster"
                      },
                      {
                        "name": "Enemies Still Alive",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "includeNonTargets": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "Cipher_TechniqueInLevel_Insert",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "priorityTag": "AvatarInsertAttackSelf",
                      "canHitNonTargets": true,
                      "abortFlags": [
                        "STAT_CTRL",
                        "DisableAction"
                      ],
                      "allowAbilityTriggers": false
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
    "Cipher_Cipher_PassiveAbility01": {
      "fileName": "Cipher_Cipher_PassiveAbility01",
      "childAbilityList": [
        "Cipher_Cipher_PassiveAbility01",
        "Cipher_Cipher_PassiveAbility01_Insert_Bonuser",
        "Cipher_Cipher_PassiveAbility01_Insert_Part01",
        "Cipher_Cipher_PassiveAbility01_Insert_Part02",
        "Cipher_Cipher_PassiveAbility01_Insert_Camera"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": 5,
      "toughnessList": [
        20,
        0,
        0
      ],
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "Passive_Trigger_Count",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Passive_Max_Count",
          "value": {
            "operator": "Variables[0] (1) || RETURN",
            "displayLines": "1",
            "constants": [],
            "variables": [
              1
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 2
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"441310455\">Cipher_Eidolon2</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Rank01_FinalRatio",
              "value": {
                "operator": "Variables[0] (1.5) || RETURN",
                "displayLines": "1.5",
                "constants": [],
                "variables": [
                  1.5
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Rank01_FinalRatio",
              "value": 1
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 4
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Rank04_DamagePercentage",
              "value": {
                "operator": "Variables[0] (0.5) || RETURN",
                "displayLines": "0.5",
                "constants": [],
                "variables": [
                  0.5
                ]
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"374199979\">Cipher_Eidolon6</a>",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (3.5) || RETURN",
                  "displayLines": "3.5",
                  "constants": [],
                  "variables": [
                    3.5
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
          "modifier": "<a class=\"gModGreen\" id=\"1663627639\">Cipher_Mark_Listen</a>"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Insert_Count",
          "value": 1
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2063646932\">Cipher_BpKuoSan_Self</a>[<span class=\"descriptionNumberColor\">Patron</span>]"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Snapshot Stat Source}}"
          },
          "variableName": "MDF_CasterAttack",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "SkillP01_FinalDamage",
          "value": {
            "operator": "Constants[0] (0) || RETURN",
            "displayLines": "0",
            "constants": [
              0
            ],
            "variables": []
          }
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (SkillP01_FinalDamage) || Constants[0] (1000) || DIV || RETURN",
            "displayLines": "(SkillP01_FinalDamage / 1000)",
            "constants": [
              1000
            ],
            "variables": [
              "SkillP01_FinalDamage"
            ]
          },
          "maximum": {
            "operator": "Constants[0] (99999) || RETURN",
            "displayLines": "99999",
            "constants": [
              99999
            ],
            "variables": []
          },
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 4,
          "cooldown": 0
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Empyrean Strides"
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "PointB1_Add_2",
              "value": {
                "operator": "Variables[0] (1) || RETURN",
                "displayLines": "1",
                "constants": [],
                "variables": [
                  1
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "PointB1_Add_1",
              "value": {
                "operator": "Variables[0] (0.5) || RETURN",
                "displayLines": "0.5",
                "constants": [],
                "variables": [
                  0.5
                ]
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1516019857\">Cipher_PointB1_ListenSpeedChange</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "300 Rogues"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1617793657\">Cipher_PointB2_ListenNoKuosan</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Sleight of Sky"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-362400486\">Cipher_PointB3_Aura</a>"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-556818185\">Cipher_Insert_Listen</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2063646932\">Cipher_BpKuoSan_Self</a>[<span class=\"descriptionNumberColor\">Patron</span>]",
          "modifierFlags": [
            "CustomEvent_InfiniteRefresh"
          ],
          "execute": [
            {
              "eventTrigger": "Action Phase Start [Anyone][?]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Target Count SUM",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Enemy Team All}}"
                        },
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"291142985\">Cipher_BpKuoSan</a>[<span class=\"descriptionNumberColor\">Patron</span>]"
                        },
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}.[[livingOrLimbo]]"
                          },
                          "Shuffle Targets",
                          {
                            "name": "Sort by Stat",
                            "stat": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;",
                            "sortByHighest": true
                          },
                          {
                            "name": "Return Target",
                            "value": 1
                          }
                        ]
                      },
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"291142985\">Cipher_BpKuoSan</a>[<span class=\"descriptionNumberColor\">Patron</span>]",
                          "valuePerStack": {}
                        }
                      ]
                    }
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
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"291142985\">Cipher_BpKuoSan</a>[<span class=\"descriptionNumberColor\">Patron</span>]"
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}.[[livingOrLimbo]]"
                          },
                          {
                            "name": "Target Filter",
                            "conditions": {
                              "name": "Compare: Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "value1": "CurrentHP%",
                              "compareType": ">",
                              "value2": 0
                            }
                          },
                          "Shuffle Targets",
                          {
                            "name": "Sort by Stat",
                            "stat": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;",
                            "sortByHighest": true
                          },
                          {
                            "name": "Return Target",
                            "value": 1
                          }
                        ]
                      },
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"291142985\">Cipher_BpKuoSan</a>[<span class=\"descriptionNumberColor\">Patron</span>]",
                          "valuePerStack": {}
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
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"291142985\">Cipher_BpKuoSan</a>[<span class=\"descriptionNumberColor\">Patron</span>]"
                  },
                  "noTargetFound": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}.[[livingOrLimbo]]"
                          },
                          "Shuffle Targets",
                          {
                            "name": "Sort by Stat",
                            "stat": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;",
                            "sortByHighest": true
                          },
                          {
                            "name": "Return Target",
                            "value": 1
                          }
                        ]
                      },
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"291142985\">Cipher_BpKuoSan</a>[<span class=\"descriptionNumberColor\">Patron</span>]",
                          "valuePerStack": {}
                        }
                      ]
                    }
                  ]
                }
              ],
              "priorityLevel": -80
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"291142985\">Cipher_BpKuoSan</a>[<span class=\"descriptionNumberColor\">Patron</span>]"
                  },
                  "noTargetFound": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}.[[livingOrLimbo]]"
                          },
                          "Shuffle Targets",
                          {
                            "name": "Sort by Stat",
                            "stat": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;",
                            "sortByHighest": true
                          },
                          {
                            "name": "Return Target",
                            "value": 1
                          }
                        ]
                      },
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"291142985\">Cipher_BpKuoSan</a>[<span class=\"descriptionNumberColor\">Patron</span>]",
                          "valuePerStack": {}
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "<span class=\"descriptionNumberColor\">SkillP01_FinalDamage</span> DMG has been tallied.",
          "type": "Other",
          "statusName": "Patron"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1617793657\">Cipher_PointB2_ListenNoKuosan</a>",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Anyone]: Any",
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
                        "modifier": "<a class=\"gModGreen\" id=\"291142985\">Cipher_BpKuoSan</a>[<span class=\"descriptionNumberColor\">Patron</span>]",
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
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Is Part Of Team",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target 2}}"
                            },
                            "team": "Player Team"
                          },
                          {
                            "name": "Is Part Of Team",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target 2}}.[[getSourceCreator]]"
                            },
                            "team": "Player Team"
                          }
                        ]
                      },
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Is Entity Type",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target 2}}"
                            },
                            "type": "Character",
                            "livingState": "Mask_NotDestroyed"
                          },
                          {
                            "name": "Is Entity Type",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target 2}}"
                            },
                            "type": "Memosprite"
                          },
                          {
                            "name": "Is Entity Type",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target 2}}.[[getSourceCreator]]"
                            },
                            "type": "Character",
                            "livingState": "Mask_NotDestroyed"
                          },
                          {
                            "name": "Is Entity Type",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target 2}}.[[getSourceCreator]]"
                            },
                            "type": "Memosprite"
                          }
                        ]
                      },
                      {
                        "name": "Attack Type",
                        "attackTypes": [
                          "True DMG"
                        ],
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target 2}}"
                        },
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Damage Data",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target 2}}"
                      },
                      "variableName": "_TMP_Damage",
                      "value": "Result_FinalDamageBase"
                    },
                    {
                      "name": "Define Custom Variable with Damage Data",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target 2}}"
                      },
                      "variableName": "_TMP_OverflowDamage",
                      "value": "Result_OverflowHPDamage"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_TMP_Damage",
                      "value": {
                        "operator": "Variables[0] (_TMP_Damage) || Variables[1] (_TMP_OverflowDamage) || SUB || RETURN",
                        "displayLines": "(_TMP_Damage - _TMP_OverflowDamage)",
                        "constants": [],
                        "variables": [
                          "_TMP_Damage",
                          "_TMP_OverflowDamage"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_TMP_Rate",
                      "value": {
                        "operator": "Variables[0] (0.08) || RETURN",
                        "displayLines": "0.08",
                        "constants": [],
                        "variables": [
                          0.08
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Damage Tags",
                            "damageTag": [
                              "Cipher's Insert"
                            ]
                          },
                          {
                            "name": "Compare: Target",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target 2}}"
                            },
                            "target2": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            }
                          },
                          {
                            "name": "Eidolon Activated",
                            "eidolon": 6
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_TMP_Rate",
                          "value": {
                            "operator": "Variables[0] (_TMP_Rate) || Variables[1] (0.16) || ADD || RETURN",
                            "displayLines": "(_TMP_Rate + 0.16)",
                            "constants": [],
                            "variables": [
                              "_TMP_Rate",
                              0.16
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_TMP_Damage",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "SkillP01_CurrentDamge",
                          "value": {
                            "operator": "Constants[0] (0) || Variables[0] (_TMP_Damage) || SUB || RETURN",
                            "displayLines": "(0 - _TMP_Damage)",
                            "constants": [
                              0
                            ],
                            "variables": [
                              "_TMP_Damage"
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "SkillP01_FinalDamage",
                          "value": {
                            "operator": "Variables[0] (SkillP01_FinalDamage) || Variables[1] (SkillP01_CurrentDamge) || INVERT || Variables[2] (_TMP_Rate) || MUL || Variables[3] (0.12) || DIV || Variables[3] (0.12) || Variables[4] (Rank01_FinalRatio) || MUL || MUL || ADD || RETURN",
                            "displayLines": "(SkillP01_FinalDamage + (((-SkillP01_CurrentDamge * _TMP_Rate) / 0.12) * (0.12 * Rank01_FinalRatio)))",
                            "constants": [],
                            "variables": [
                              "SkillP01_FinalDamage",
                              "SkillP01_CurrentDamge",
                              "_TMP_Rate",
                              0.12,
                              "Rank01_FinalRatio"
                            ]
                          }
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Trace Activated",
                                "conditionList": "Empyrean Strides"
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable with Stat",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "variableName": "PointB1_Speed",
                              "value": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;"
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "PointB1_Speed",
                                "compareType": ">=",
                                "value2": {
                                  "operator": "Variables[0] (OBJECT_[170]) || RETURN",
                                  "displayLines": "OBJECT_[170]",
                                  "constants": [],
                                  "variables": [
                                    "OBJECT_[170]"
                                  ]
                                }
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "PointB1_Ratio",
                                  "value": {
                                    "operator": "Variables[0] (PointB1_Add_2) || RETURN",
                                    "displayLines": "PointB1_Add_2",
                                    "constants": [],
                                    "variables": [
                                      "PointB1_Add_2"
                                    ]
                                  }
                                }
                              ],
                              "failed": [
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "value1": "PointB1_Speed",
                                    "compareType": ">=",
                                    "value2": {
                                      "operator": "Variables[0] (OBJECT_[140]) || RETURN",
                                      "displayLines": "OBJECT_[140]",
                                      "constants": [],
                                      "variables": [
                                        "OBJECT_[140]"
                                      ]
                                    }
                                  },
                                  "passed": [
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "PointB1_Ratio",
                                      "value": {
                                        "operator": "Variables[0] (PointB1_Add_1) || RETURN",
                                        "displayLines": "PointB1_Add_1",
                                        "constants": [],
                                        "variables": [
                                          "PointB1_Add_1"
                                        ]
                                      }
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "PointB1_Ratio",
                                      "value": 0
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "SkillP01_FinalDamage",
                              "value": {
                                "operator": "Variables[0] (SkillP01_FinalDamage) || Variables[1] (SkillP01_CurrentDamge) || INVERT || Variables[2] (_TMP_Rate) || MUL || Variables[3] (0.12) || DIV || Variables[4] (PointB1_Ratio) || MUL || Variables[3] (0.12) || Variables[5] (Rank01_FinalRatio) || MUL || MUL || ADD || RETURN",
                                "displayLines": "(SkillP01_FinalDamage + ((((-SkillP01_CurrentDamge * _TMP_Rate) / 0.12) * PointB1_Ratio) * (0.12 * Rank01_FinalRatio)))",
                                "constants": [],
                                "variables": [
                                  "SkillP01_FinalDamage",
                                  "SkillP01_CurrentDamge",
                                  "_TMP_Rate",
                                  0.12,
                                  "PointB1_Ratio",
                                  "Rank01_FinalRatio"
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
                                "name": "Compare: Target",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target 2}}"
                                },
                                "target2": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                }
                              },
                              {
                                "name": "Attack Type",
                                "attackTypes": [
                                  "Technique"
                                ],
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target 2}}"
                                }
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "SkillP01_FinalDamage",
                              "value": {
                                "operator": "Variables[0] (SkillP01_FinalDamage) || Variables[1] (SkillP01_CurrentDamge) || INVERT || Variables[2] (_TMP_Rate) || MUL || Variables[3] (0.12) || DIV || Variables[4] (2) || MUL || Variables[3] (0.12) || Variables[5] (Rank01_FinalRatio) || MUL || MUL || ADD || RETURN",
                                "displayLines": "(SkillP01_FinalDamage + ((((-SkillP01_CurrentDamge * _TMP_Rate) / 0.12) * 2) * (0.12 * Rank01_FinalRatio)))",
                                "constants": [],
                                "variables": [
                                  "SkillP01_FinalDamage",
                                  "SkillP01_CurrentDamge",
                                  "_TMP_Rate",
                                  0.12,
                                  2,
                                  "Rank01_FinalRatio"
                                ]
                              }
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (SkillP01_FinalDamage) || Constants[0] (1000) || DIV || RETURN",
                        "displayLines": "(SkillP01_FinalDamage / 1000)",
                        "constants": [
                          1000
                        ],
                        "variables": [
                          "SkillP01_FinalDamage"
                        ]
                      },
                      "maximum": {
                        "operator": "Constants[0] (99999) || RETURN",
                        "displayLines": "99999",
                        "constants": [
                          99999
                        ],
                        "variables": []
                      },
                      "assignState": "True",
                      "priorState": "Normal",
                      "bar#": 4,
                      "cooldown": 0
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
          "for": "<a class=\"gModGreen\" id=\"mod__-556818185\">Cipher_Insert_Listen</a>",
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Anyone]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Insert_Flag",
                  "value": 0
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
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"4491835\">Cipher_BpKuoSan_Insert_CD</a>[<span class=\"descriptionNumberColor\">The Hospitable Dolosian</span>]",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-556818185\">Cipher_Insert_Listen</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"232969841\">Cipher_BpKuoSan_Insert_Hit</a>"
                      },
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "mustBeAlive2": true
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
                            "name": "Compare: Variable",
                            "value1": "Insert_Exec",
                            "compareType": "=",
                            "value2": 0
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertUnusedCount",
                            "typeValue": 1
                          },
                          "abilityName": "Cipher_PassiveAbility01_Insert_Bonuser",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Hostile Entities(AOE)}}"
                          },
                          "priorityTag": "AvatarInsertAttackSelf",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "abortFlags": [
                            "STAT_CTRL",
                            "DisableAction"
                          ],
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"232969841\">Cipher_BpKuoSan_Insert_Hit</a>"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__374199979\">Cipher_Eidolon6</a>",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Damage Tags",
                    "damageTag": [
                      "Cipher's Insert"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                          "value": "MDF_PropertyValue"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-362400486\">Cipher_PointB3_Aura</a>",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Attack Type",
                        "attackTypes": [
                          "Follow-up"
                        ]
                      },
                      {
                        "name": "Has Damage Tags",
                        "damageTag": [
                          "Cipher's Insert"
                        ]
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageSUM</span>&nbsp;",
                          "value": "1"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1113671218\">Cipher_PointB3_Debuff</a>[<span class=\"descriptionNumberColor\">Sleight of Sky</span>]",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.4) || RETURN",
                  "displayLines": "0.4",
                  "constants": [],
                  "variables": [
                    0.4
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1663627639\">Cipher_Mark_Listen</a>",
          "stackData": [],
          "latentQueue": [],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"875942501\">Cipher_SpecialMark02</a>",
              "haloStatus": true
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1516019857\">Cipher_PointB1_ListenSpeedChange</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "_CUR_SPEED",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_CUR_SPEED",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (OBJECT_[170]) || RETURN",
                      "displayLines": "OBJECT_[170]",
                      "constants": [],
                      "variables": [
                        "OBJECT_[170]"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1951153647\">Cipher_PointB1_ListenSpeedChange_Bonus</a>",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.5) || RETURN",
                          "displayLines": "0.5",
                          "constants": [],
                          "variables": [
                            0.5
                          ]
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_CUR_SPEED",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (OBJECT_[140]) || RETURN",
                          "displayLines": "OBJECT_[140]",
                          "constants": [],
                          "variables": [
                            "OBJECT_[140]"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1951153647\">Cipher_PointB1_ListenSpeedChange_Bonus</a>",
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (0.25) || RETURN",
                              "displayLines": "0.25",
                              "constants": [],
                              "variables": [
                                0.25
                              ]
                            }
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1951153647\">Cipher_PointB1_ListenSpeedChange_Bonus</a>"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": -99999,
                  "maxValue": 99999,
                  "whenValueChanges": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "_CUR_SPEED",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_CUR_SPEED",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (OBJECT_[170]) || RETURN",
                          "displayLines": "OBJECT_[170]",
                          "constants": [],
                          "variables": [
                            "OBJECT_[170]"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1951153647\">Cipher_PointB1_ListenSpeedChange_Bonus</a>",
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (0.5) || RETURN",
                              "displayLines": "0.5",
                              "constants": [],
                              "variables": [
                                0.5
                              ]
                            }
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "_CUR_SPEED",
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] (OBJECT_[140]) || RETURN",
                              "displayLines": "OBJECT_[140]",
                              "constants": [],
                              "variables": [
                                "OBJECT_[140]"
                              ]
                            }
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1951153647\">Cipher_PointB1_ListenSpeedChange_Bonus</a>",
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] (0.25) || RETURN",
                                  "displayLines": "0.25",
                                  "constants": [],
                                  "variables": [
                                    0.25
                                  ]
                                }
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1951153647\">Cipher_PointB1_ListenSpeedChange_Bonus</a>"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1951153647\">Cipher_PointB1_ListenSpeedChange_Bonus</a>",
          "stackType": "ReplaceByCaster",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                    "displayLines": "MDF_PropertyValue",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": [
            "_CUR_SPEED"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__441310455\">Cipher_Eidolon2</a>",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Hit",
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
                      "modifier": "<a class=\"gModGreen\" id=\"-309291538\">Cipher_Eidolon2_Debuff</a>[<span class=\"descriptionNumberColor\">In the Fray, Nab On a Spree</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "baseChance": {
                        "operator": "Variables[0] (1.2) || RETURN",
                        "displayLines": "1.2",
                        "constants": [],
                        "variables": [
                          1.2
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.3) || RETURN",
                          "displayLines": "0.3",
                          "constants": [],
                          "variables": [
                            0.3
                          ]
                        }
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
                        "modifier": "<a class=\"gModGreen\" id=\"-309291538\">Cipher_Eidolon2_Debuff</a>[<span class=\"descriptionNumberColor\">In the Fray, Nab On a Spree</span>]",
                        "casterFilter": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      },
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_First",
                          "value": 0
                        }
                      ]
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
                            "modifier": "<a class=\"gModGreen\" id=\"-309291538\">Cipher_Eidolon2_Debuff</a>[<span class=\"descriptionNumberColor\">In the Fray, Nab On a Spree</span>]",
                            "justAddedOrActive": true,
                            "casterFilter": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            }
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "MDF_First",
                            "compareType": "=",
                            "value2": 0
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Adjust Target Stats",
                          "modifiedValuesArray": [
                            {
                              "on": "Defender",
                              "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                              "value": "0.3"
                            }
                          ]
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_First",
                          "value": 1
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
    "Cipher_Cipher_PassiveAbility01_Insert_Part02": {
      "fileName": "Cipher_Cipher_PassiveAbility01_Insert_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1467539794\">Cipher_Eidolon1_Bonus</a>[<span class=\"descriptionNumberColor\">Read the Room, Seek the Glee</span>]",
              "duration": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.8) || RETURN",
                  "displayLines": "0.8",
                  "constants": [],
                  "variables": [
                    0.8
                  ]
                }
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
          "modifier": "<a class=\"gModGreen\" id=\"-315567514\">Cipher_BpKuoSan_Insert_Bonuser</a>"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Insert_Exec",
          "value": 1
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (1.5) || RETURN",
              "displayLines": "1.5",
              "constants": [],
              "variables": [
                1.5
              ]
            },
            "HitSplit": 0.2,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": [
              "Cipher's Insert"
            ],
            "attackType": "Follow-up",
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
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (1.5) || RETURN",
              "displayLines": "1.5",
              "constants": [],
              "variables": [
                1.5
              ]
            },
            "HitSplit": 0.1,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": [
              "Cipher's Insert"
            ],
            "attackType": "Follow-up",
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
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (1.5) || RETURN",
              "displayLines": "1.5",
              "constants": [],
              "variables": [
                1.5
              ]
            },
            "HitSplit": 0.1,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": [
              "Cipher's Insert"
            ],
            "attackType": "Follow-up",
            "EnergyGainPercent": "100%"
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
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (1.5) || RETURN",
              "displayLines": "1.5",
              "constants": [],
              "variables": [
                1.5
              ]
            },
            "HitSplit": 0.6,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": [
              "Cipher's Insert"
            ],
            "attackType": "Follow-up",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Define Custom Variable",
          "variableName": "Insert_Exec",
          "value": 0
        },
        "Trigger: Skip Death Handling"
      ],
      "references": []
    },
    "Cipher_Cipher_PassiveAbility01_Insert_Part01": {
      "fileName": "Cipher_Cipher_PassiveAbility01_Insert_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "The Hospitable Dolosian"
        },
        "Deleted bullshit",
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
          "ability": "Cipher_PassiveAbility01_Insert_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Cipher_Cipher_PassiveAbility01_Insert_Bonuser": {
      "fileName": "Cipher_Cipher_PassiveAbility01_Insert_Bonuser",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Target Exists",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "living": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"291142985\">Cipher_BpKuoSan</a>[<span class=\"descriptionNumberColor\">Patron</span>]"
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable",
              "variableName": "Passive_Trigger_Count",
              "value": {
                "operator": "Variables[0] (Passive_Trigger_Count) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(Passive_Trigger_Count + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "Passive_Trigger_Count"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Passive_Trigger_Count",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (Passive_Max_Count) || RETURN",
                  "displayLines": "Passive_Max_Count",
                  "constants": [],
                  "variables": [
                    "Passive_Max_Count"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"4491835\">Cipher_BpKuoSan_Insert_CD</a>[<span class=\"descriptionNumberColor\">The Hospitable Dolosian</span>]"
                }
              ]
            },
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "inherentTarget": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "ability": "Cipher_PassiveAbility01_Insert_Part01",
              "isTrigger": true
            }
          ],
          "noTargetFound": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}.[[livingOrLimbo]]"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Compare: Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "value1": "CurrentHP%",
                      "compareType": ">",
                      "value2": 0
                    }
                  },
                  "Shuffle Targets",
                  {
                    "name": "Sort by Stat",
                    "stat": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;",
                    "sortByHighest": true
                  },
                  {
                    "name": "Return Target",
                    "value": 1
                  }
                ]
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Target Exists",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "living": true
              },
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Passive_Trigger_Count",
                  "value": {
                    "operator": "Variables[0] (Passive_Trigger_Count) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(Passive_Trigger_Count + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "Passive_Trigger_Count"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Passive_Trigger_Count",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (Passive_Max_Count) || RETURN",
                      "displayLines": "Passive_Max_Count",
                      "constants": [],
                      "variables": [
                        "Passive_Max_Count"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"4491835\">Cipher_BpKuoSan_Insert_CD</a>[<span class=\"descriptionNumberColor\">The Hospitable Dolosian</span>]"
                    }
                  ]
                },
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "inherentTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "ability": "Cipher_PassiveAbility01_Insert_Part01",
                  "isTrigger": true
                }
              ],
              "noTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-315567514\">Cipher_BpKuoSan_Insert_Bonuser</a>"
                }
              ]
            }
          ]
        }
      ],
      "onAbort": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-315567514\">Cipher_BpKuoSan_Insert_Bonuser</a>"
        }
      ],
      "references": []
    },
    "Cipher_Cipher_Ability03_Part02": {
      "fileName": "Cipher_Cipher_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"291142985\">Cipher_BpKuoSan</a>[<span class=\"descriptionNumberColor\">Patron</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"291142985\">Cipher_BpKuoSan</a>[<span class=\"descriptionNumberColor\">Patron</span>]",
          "valuePerStack": {}
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Snapshot Stat Source}}"
          },
          "variableName": "MDF_CasterAttack",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (1.2) || RETURN",
              "displayLines": "1.2",
              "constants": [],
              "variables": [
                1.2
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || Variables[1] (Blast Toughness Value) || SUB || RETURN",
              "displayLines": "(ST Toughness Value - Blast Toughness Value)",
              "constants": [],
              "variables": [
                "ST Toughness Value",
                "Blast Toughness Value"
              ]
            },
            "Tags": null
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": {}
            },
            "DamageFlat": {
              "operator": "Variables[0] (SkillP01_FinalDamage) || Constants[0] (0.2) || MUL || Variables[1] (0.25) || MUL || RETURN",
              "displayLines": "((SkillP01_FinalDamage * 0.2) * 0.25)",
              "constants": [
                0.2
              ],
              "variables": [
                "SkillP01_FinalDamage",
                0.25
              ]
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "attackType": "True DMG"
          },
          "isConvertedDMG": true
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": {}
            },
            "DamageFlat": {
              "operator": "Variables[0] (SkillP01_FinalDamage) || Constants[0] (0.2) || MUL || Variables[1] (0.25) || MUL || RETURN",
              "displayLines": "((SkillP01_FinalDamage * 0.2) * 0.25)",
              "constants": [
                0.2
              ],
              "variables": [
                "SkillP01_FinalDamage",
                0.25
              ]
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "attackType": "True DMG"
          },
          "isConvertedDMG": true
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": {}
            },
            "DamageFlat": {
              "operator": "Variables[0] (SkillP01_FinalDamage) || Constants[0] (0.2) || MUL || Variables[1] (0.25) || MUL || RETURN",
              "displayLines": "((SkillP01_FinalDamage * 0.2) * 0.25)",
              "constants": [
                0.2
              ],
              "variables": [
                "SkillP01_FinalDamage",
                0.25
              ]
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "attackType": "True DMG"
          },
          "isConvertedDMG": true
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": {}
            },
            "DamageFlat": {
              "operator": "Variables[0] (SkillP01_FinalDamage) || Constants[0] (0.2) || MUL || Variables[1] (0.25) || MUL || RETURN",
              "displayLines": "((SkillP01_FinalDamage * 0.2) * 0.25)",
              "constants": [
                0.2
              ],
              "variables": [
                "SkillP01_FinalDamage",
                0.25
              ]
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "attackType": "True DMG"
          },
          "isConvertedDMG": true
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": {}
            },
            "DamageFlat": {
              "operator": "Variables[0] (SkillP01_FinalDamage) || Constants[0] (0.2) || MUL || Variables[1] (0.25) || MUL || RETURN",
              "displayLines": "((SkillP01_FinalDamage * 0.2) * 0.25)",
              "constants": [
                0.2
              ],
              "variables": [
                "SkillP01_FinalDamage",
                0.25
              ]
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "attackType": "True DMG"
          },
          "isConvertedDMG": true
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{ST and Blast}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (0.4) || RETURN",
              "displayLines": "0.4",
              "constants": [],
              "variables": [
                0.4
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (Blast Toughness Value) || RETURN",
              "displayLines": "Blast Toughness Value",
              "constants": [],
              "variables": [
                "Blast Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{ST and Blast}}"
          },
          "variableName": "S03_Alive_Count",
          "livingTargets": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "S03_Alive_Count",
            "compareType": ">=",
            "value2": 1
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{ST and Blast}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Living State",
                      "state": "Mask_AliveOnly",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    }
                  }
                ]
              },
              "AttackScaling": {
                "DamageType": {
                  "name": "Damage Type Source",
                  "sourceType": {}
                },
                "DamageFlat": {
                  "operator": "Variables[0] (SkillP01_FinalDamage) || Variables[1] (0.75) || MUL || Variables[2] (S03_Alive_Count) || DIV || RETURN",
                  "displayLines": "((SkillP01_FinalDamage * 0.75) / S03_Alive_Count)",
                  "constants": [],
                  "variables": [
                    "SkillP01_FinalDamage",
                    0.75,
                    "S03_Alive_Count"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "attackType": "True DMG"
              },
              "isConvertedDMG": true
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable with Team Count",
              "target": {
                "name": "Target Name",
                "target": "{{ST and Blast}}"
              },
              "variableName": "S03_Alive_Count"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{ST and Blast}}"
              },
              "AttackScaling": {
                "DamageType": {
                  "name": "Damage Type Source",
                  "sourceType": {}
                },
                "DamageFlat": {
                  "operator": "Variables[0] (SkillP01_FinalDamage) || Variables[1] (0.75) || MUL || Variables[2] (S03_Alive_Count) || DIV || RETURN",
                  "displayLines": "((SkillP01_FinalDamage * 0.75) / S03_Alive_Count)",
                  "constants": [],
                  "variables": [
                    "SkillP01_FinalDamage",
                    0.75,
                    "S03_Alive_Count"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "attackType": "True DMG"
              },
              "isConvertedDMG": true
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Define Custom Variable",
          "variableName": "Insert_Count",
          "value": 1
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Rank06_RecordedTotal",
              "value": {
                "operator": "Variables[0] (SkillP01_TotalDamage) || RETURN",
                "displayLines": "SkillP01_TotalDamage",
                "constants": [],
                "variables": [
                  "SkillP01_TotalDamage"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Rank06_RecordedFinal",
              "value": {
                "operator": "Variables[0] (SkillP01_FinalDamage) || RETURN",
                "displayLines": "SkillP01_FinalDamage",
                "constants": [],
                "variables": [
                  "SkillP01_FinalDamage"
                ]
              }
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "SkillP01_TotalDamage",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "SkillP01_FinalDamage",
          "value": 0
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "SkillP01_TotalDamage",
              "value": {
                "operator": "Variables[0] (Rank06_RecordedTotal) || Variables[1] (0.2) || MUL || RETURN",
                "displayLines": "(Rank06_RecordedTotal * 0.2)",
                "constants": [],
                "variables": [
                  "Rank06_RecordedTotal",
                  0.2
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "SkillP01_FinalDamage",
              "value": {
                "operator": "Variables[0] (Rank06_RecordedFinal) || Variables[1] (0.2) || MUL || RETURN",
                "displayLines": "(Rank06_RecordedFinal * 0.2)",
                "constants": [],
                "variables": [
                  "Rank06_RecordedFinal",
                  0.2
                ]
              }
            }
          ]
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (SkillP01_FinalDamage) || Constants[0] (1000) || DIV || RETURN",
            "displayLines": "(SkillP01_FinalDamage / 1000)",
            "constants": [
              1000
            ],
            "variables": [
              "SkillP01_FinalDamage"
            ]
          },
          "maximum": {
            "operator": "Constants[0] (99999) || RETURN",
            "displayLines": "99999",
            "constants": [
              99999
            ],
            "variables": []
          },
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 4,
          "cooldown": 0
        },
        "Trigger: Skip Death Handling",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Cipher_Cipher_Ability03_Part01": {
      "fileName": "Cipher_Cipher_Ability03_Part01",
      "childAbilityList": [
        "Cipher_Cipher_Ability03_Camera",
        "Cipher_Cipher_Ability03_Part01",
        "Cipher_Cipher_Ability03_Part02",
        "Cipher_Cipher_Ability03_EnterReady"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": 5,
      "toughnessList": [
        30,
        0,
        20
      ],
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Cipher_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "Cipher_Cipher_Ability03_EnterReady": {
      "fileName": "Cipher_Cipher_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Cipher_Cipher_Ability02_Part02": {
      "fileName": "Cipher_Cipher_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"291142985\">Cipher_BpKuoSan</a>[<span class=\"descriptionNumberColor\">Patron</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"291142985\">Cipher_BpKuoSan</a>[<span class=\"descriptionNumberColor\">Patron</span>]",
          "valuePerStack": {}
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{ST and Blast}}"
          },
          "searchRandom": true,
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1685549745\">Cipher_BP_Debuff</a>[<span class=\"descriptionNumberColor\">Hey, Jackpot for the Taking</span>]",
              "duration": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "baseChance": {
                "operator": "Variables[0] (1.2) || RETURN",
                "displayLines": "1.2",
                "constants": [],
                "variables": [
                  1.2
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.1) || RETURN",
                  "displayLines": "0.1",
                  "constants": [],
                  "variables": [
                    0.1
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
          "modifier": "<a class=\"gModGreen\" id=\"116163492\">Cipher_BP_Bonus</a>[<span class=\"descriptionNumberColor\">Hey, Jackpot for the Taking</span>]",
          "duration": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (0.3) || RETURN",
              "displayLines": "0.3",
              "constants": [],
              "variables": [
                0.3
              ]
            }
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (2) || RETURN",
              "displayLines": "2",
              "constants": [],
              "variables": [
                2
              ]
            },
            "HitSplit": 0.1,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
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
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (1) || Constants[0] (0.1) || MUL || RETURN",
              "displayLines": "(1 * 0.1)",
              "constants": [
                0.1
              ],
              "variables": [
                1
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (Blast Toughness Value) || Constants[0] (0.1) || MUL || RETURN",
              "displayLines": "(Blast Toughness Value * 0.1)",
              "constants": [
                0.1
              ],
              "variables": [
                "Blast Toughness Value"
              ]
            },
            "Tags": null
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (2) || RETURN",
              "displayLines": "2",
              "constants": [],
              "variables": [
                2
              ]
            },
            "HitSplit": 0.1,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
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
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (1) || Constants[0] (0.1) || MUL || RETURN",
              "displayLines": "(1 * 0.1)",
              "constants": [
                0.1
              ],
              "variables": [
                1
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (Blast Toughness Value) || Constants[0] (0.1) || MUL || RETURN",
              "displayLines": "(Blast Toughness Value * 0.1)",
              "constants": [
                0.1
              ],
              "variables": [
                "Blast Toughness Value"
              ]
            },
            "Tags": null
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (2) || RETURN",
              "displayLines": "2",
              "constants": [],
              "variables": [
                2
              ]
            },
            "HitSplit": 0.1,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
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
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (1) || Constants[0] (0.1) || MUL || RETURN",
              "displayLines": "(1 * 0.1)",
              "constants": [
                0.1
              ],
              "variables": [
                1
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (Blast Toughness Value) || Constants[0] (0.1) || MUL || RETURN",
              "displayLines": "(Blast Toughness Value * 0.1)",
              "constants": [
                0.1
              ],
              "variables": [
                "Blast Toughness Value"
              ]
            },
            "Tags": null
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (2) || RETURN",
              "displayLines": "2",
              "constants": [],
              "variables": [
                2
              ]
            },
            "HitSplit": 0.1,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
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
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (1) || Constants[0] (0.1) || MUL || RETURN",
              "displayLines": "(1 * 0.1)",
              "constants": [
                0.1
              ],
              "variables": [
                1
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (Blast Toughness Value) || Constants[0] (0.1) || MUL || RETURN",
              "displayLines": "(Blast Toughness Value * 0.1)",
              "constants": [
                0.1
              ],
              "variables": [
                "Blast Toughness Value"
              ]
            },
            "Tags": null
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (2) || RETURN",
              "displayLines": "2",
              "constants": [],
              "variables": [
                2
              ]
            },
            "HitSplit": 0.1,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
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
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (1) || Constants[0] (0.1) || MUL || RETURN",
              "displayLines": "(1 * 0.1)",
              "constants": [
                0.1
              ],
              "variables": [
                1
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (Blast Toughness Value) || Constants[0] (0.1) || MUL || RETURN",
              "displayLines": "(Blast Toughness Value * 0.1)",
              "constants": [
                0.1
              ],
              "variables": [
                "Blast Toughness Value"
              ]
            },
            "Tags": null
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
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (2) || RETURN",
              "displayLines": "2",
              "constants": [],
              "variables": [
                2
              ]
            },
            "HitSplit": 0.5,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
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
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (1) || Constants[0] (0.5) || MUL || RETURN",
              "displayLines": "(1 * 0.5)",
              "constants": [
                0.5
              ],
              "variables": [
                1
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (Blast Toughness Value) || Constants[0] (0.5) || MUL || RETURN",
              "displayLines": "(Blast Toughness Value * 0.5)",
              "constants": [
                0.5
              ],
              "variables": [
                "Blast Toughness Value"
              ]
            },
            "Tags": null
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Cipher_Cipher_Ability02_Part01": {
      "fileName": "Cipher_Cipher_Ability02_Part01",
      "childAbilityList": [
        "Cipher_Cipher_Ability02_Camera",
        "Cipher_Cipher_Ability02_Part01",
        "Cipher_Cipher_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": 30,
      "toughnessList": [
        20,
        0,
        10
      ],
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Cipher_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "Cipher_Cipher_Ability01_Part02": {
      "fileName": "Cipher_Cipher_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Cipher_Cipher_Ability01_Part01": {
      "fileName": "Cipher_Cipher_Ability01_Part01",
      "childAbilityList": [
        "Cipher_Cipher_Ability01_Camera",
        "Cipher_Cipher_Ability01_Part01",
        "Cipher_Cipher_Ability01_Part02"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Basic ATK",
      "energy": 20,
      "toughnessList": [
        10,
        0,
        0
      ],
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Cipher_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "references": []
    },
    "Cipher_Modifiers": {
      "fileName": "Cipher_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__825609644\">Cipher_SpecialMark01</a>",
          "stackType": "Replace",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 10,
                  "conditions": {
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
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"825609644\">Cipher_SpecialMark01</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "Toggle Skill Mark"
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "Toggle Skill Mark"
                }
              ]
            },
            {
              "eventTrigger": "Update Target Selected(UI) [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Current Action Owner}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Toggle Skill Mark"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Toggle Skill Mark",
                      "toggle": true
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__875942501\">Cipher_SpecialMark02</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "Toggle Skill Mark"
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "Toggle Skill Mark"
                }
              ]
            },
            {
              "eventTrigger": "Update Target Selected(UI) [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Current Action Owner}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Player's Aim Primary-Target}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"291142985\">Cipher_BpKuoSan</a>[<span class=\"descriptionNumberColor\">Patron</span>]"
                          },
                          "passed": [
                            {
                              "name": "Toggle Skill Mark",
                              "toggle": true,
                              "skillTypesAllow": [
                                "Basic ATK",
                                "Skill",
                                "Ultimate"
                              ]
                            }
                          ],
                          "failed": [
                            {
                              "name": "Toggle Skill Mark",
                              "toggle": true,
                              "skillTypesAllow": [
                                "Skill",
                                "Ultimate"
                              ]
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
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"291142985\">Cipher_BpKuoSan</a>[<span class=\"descriptionNumberColor\">Patron</span>]"
                          },
                          "passed": [
                            {
                              "name": "Toggle Skill Mark",
                              "toggle": true,
                              "skillTypesAllow": [
                                "Basic ATK"
                              ]
                            }
                          ],
                          "failed": [
                            {
                              "name": "Toggle Skill Mark"
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Toggle Skill Mark"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Active Ability Chosen [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Current Action Owner}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Player's Aim Primary-Target}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"291142985\">Cipher_BpKuoSan</a>[<span class=\"descriptionNumberColor\">Patron</span>]"
                          },
                          "passed": [
                            {
                              "name": "Toggle Skill Mark",
                              "toggle": true,
                              "skillTypesAllow": [
                                "Basic ATK",
                                "Skill",
                                "Ultimate"
                              ]
                            }
                          ],
                          "failed": [
                            {
                              "name": "Toggle Skill Mark",
                              "toggle": true,
                              "skillTypesAllow": [
                                "Skill",
                                "Ultimate"
                              ]
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
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"291142985\">Cipher_BpKuoSan</a>[<span class=\"descriptionNumberColor\">Patron</span>]"
                          },
                          "passed": [
                            {
                              "name": "Toggle Skill Mark",
                              "toggle": true,
                              "skillTypesAllow": [
                                "Basic ATK"
                              ]
                            }
                          ],
                          "failed": [
                            {
                              "name": "Toggle Skill Mark"
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Toggle Skill Mark"
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
          "for": "<a class=\"gModGreen\" id=\"mod__838995685\">Cipher_Ability03_Force_Preshow</a>",
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "skillType": "Ultimate",
            "toughnessForcedReductionPreview": 1,
            "showAsForcedReduction": true
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1154380754\">Cipher_Ability03_Force</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "ForceStanceDamage"
          ],
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessReductionForced%</span>&nbsp;",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-315567514\">Cipher_BpKuoSan_Insert_Bonuser</a>",
          "modifierFlags": [
            "CustomEvent_InfiniteRefresh"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-2003903269\">Cipher_InsertRetargetSelf</a>"
                }
              ]
            },
            {
              "eventTrigger": "Action Choice Window [Anyone]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-2003903269\">Cipher_InsertRetargetSelf</a>"
                }
              ],
              "priorityLevel": -55
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-2003903269\">Cipher_InsertRetargetSelf</a>"
                }
              ]
            },
            {
              "eventTrigger": "New Enemy Wave",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-2003903269\">Cipher_InsertRetargetSelf</a>"
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "invertCondition": true
                      },
                      {
                        "name": "Living State",
                        "state": "Mask_AliveOrRevivable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-2003903269\">Cipher_InsertRetargetSelf</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__-2003903269\">Cipher_InsertRetargetSelf</a>",
              "parse": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Target Exists",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "living": true
                  },
                  "ifTargetFound": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "Cipher_PassiveAbility01_Insert_Bonuser",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "priorityTag": "AvatarInsertAttackSelf",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "abortFlags": [
                        "STAT_CTRL",
                        "DisableAction"
                      ],
                      "allowAbilityTriggers": false
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
          "for": "<a class=\"gModGreen\" id=\"mod__4491835\">Cipher_BpKuoSan_Insert_CD</a>[<span class=\"descriptionNumberColor\">The Hospitable Dolosian</span>]",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Passive_Trigger_Count",
                  "value": 0
                },
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "Talent's Follow-Up ATK cannot yet be triggered.",
          "type": "Other",
          "statusName": "The Hospitable Dolosian"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1385569030\">Cipher_PointB2_CD</a>",
          "duration": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__291142985\">Cipher_BpKuoSan</a>[<span class=\"descriptionNumberColor\">Patron</span>]",
          "modifierFlags": [
            "KeepOnDeathrattle",
            "STAT_AITargetHigherPriority",
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 10,
                  "conditions": {
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
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"291142985\">Cipher_BpKuoSan</a>[<span class=\"descriptionNumberColor\">Patron</span>]"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"825609644\">Cipher_SpecialMark01</a>"
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"825609644\">Cipher_SpecialMark01</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"291142985\">Cipher_BpKuoSan</a>[<span class=\"descriptionNumberColor\">Patron</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"825609644\">Cipher_SpecialMark01</a>"
                }
              ]
            },
            {
              "eventTrigger": "Take Damage End [Owner]: Hit",
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
                        "modifier": "<a class=\"gModGreen\" id=\"-556818185\">Cipher_Insert_Listen</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Player Team"
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
                      "modifier": "<a class=\"gModGreen\" id=\"232969841\">Cipher_BpKuoSan_Insert_Hit</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "OR",
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
                            "name": "Is Part Of Team",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}.[[getSourceCreator]]"
                            },
                            "team": "Player Team"
                          }
                        ]
                      },
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Is Entity Type",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "type": "Character",
                            "livingState": "Mask_NotDestroyed"
                          },
                          {
                            "name": "Is Entity Type",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "type": "Memosprite"
                          },
                          {
                            "name": "Is Entity Type",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}.[[getSourceCreator]]"
                            },
                            "type": "Character",
                            "livingState": "Mask_NotDestroyed"
                          },
                          {
                            "name": "Is Entity Type",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}.[[getSourceCreator]]"
                            },
                            "type": "Memosprite"
                          }
                        ]
                      },
                      {
                        "name": "Attack Type",
                        "attackTypes": [
                          "True DMG"
                        ],
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
                      "name": "Define Custom Variable with Damage Data",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "_TMP_Damage",
                      "value": "Result_FinalDamageBase",
                      "context": "ContextModifier"
                    },
                    {
                      "name": "Define Custom Variable with Damage Data",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "_TMP_OverflowDamage",
                      "value": "Result_OverflowHPDamage",
                      "context": "ContextModifier"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_TMP_Damage",
                      "value": {
                        "operator": "Variables[0] (_TMP_Damage) || Variables[1] (_TMP_OverflowDamage) || SUB || RETURN",
                        "displayLines": "(_TMP_Damage - _TMP_OverflowDamage)",
                        "constants": [],
                        "variables": [
                          "_TMP_Damage",
                          "_TMP_OverflowDamage"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_TMP_Rate",
                      "value": {
                        "operator": "Variables[0] (0.12) || RETURN",
                        "displayLines": "0.12",
                        "constants": [],
                        "variables": [
                          0.12
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Damage Tags",
                            "damageTag": [
                              "Cipher's Insert"
                            ]
                          },
                          {
                            "name": "Compare: Target",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "target2": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            }
                          },
                          {
                            "name": "Eidolon Activated",
                            "eidolon": 6
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_TMP_Rate",
                          "value": {
                            "operator": "Variables[0] (_TMP_Rate) || Variables[1] (0.16) || ADD || RETURN",
                            "displayLines": "(_TMP_Rate + 0.16)",
                            "constants": [],
                            "variables": [
                              "_TMP_Rate",
                              0.16
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_TMP_Damage",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "SkillP01_CurrentDamge",
                          "value": {
                            "operator": "Constants[0] (0) || Variables[0] (_TMP_Damage) || SUB || RETURN",
                            "displayLines": "(0 - _TMP_Damage)",
                            "constants": [
                              0
                            ],
                            "variables": [
                              "_TMP_Damage"
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "SkillP01_FinalDamage",
                          "value": {
                            "operator": "Variables[0] (SkillP01_FinalDamage) || Variables[1] (SkillP01_CurrentDamge) || INVERT || Variables[2] (_TMP_Rate) || MUL || Variables[3] (0.12) || DIV || Variables[3] (0.12) || Variables[4] (Rank01_FinalRatio) || MUL || MUL || ADD || RETURN",
                            "displayLines": "(SkillP01_FinalDamage + (((-SkillP01_CurrentDamge * _TMP_Rate) / 0.12) * (0.12 * Rank01_FinalRatio)))",
                            "constants": [],
                            "variables": [
                              "SkillP01_FinalDamage",
                              "SkillP01_CurrentDamge",
                              "_TMP_Rate",
                              0.12,
                              "Rank01_FinalRatio"
                            ]
                          }
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Trace Activated",
                                "conditionList": "Empyrean Strides"
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable with Stat",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "variableName": "PointB1_Speed",
                              "value": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;"
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "PointB1_Speed",
                                "compareType": ">=",
                                "value2": {
                                  "operator": "Variables[0] (OBJECT_[170]) || RETURN",
                                  "displayLines": "OBJECT_[170]",
                                  "constants": [],
                                  "variables": [
                                    "OBJECT_[170]"
                                  ]
                                }
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "PointB1_Ratio",
                                  "value": {
                                    "operator": "Variables[0] (PointB1_Add_2) || RETURN",
                                    "displayLines": "PointB1_Add_2",
                                    "constants": [],
                                    "variables": [
                                      "PointB1_Add_2"
                                    ]
                                  }
                                }
                              ],
                              "failed": [
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "value1": "PointB1_Speed",
                                    "compareType": ">=",
                                    "value2": {
                                      "operator": "Variables[0] (OBJECT_[140]) || RETURN",
                                      "displayLines": "OBJECT_[140]",
                                      "constants": [],
                                      "variables": [
                                        "OBJECT_[140]"
                                      ]
                                    }
                                  },
                                  "passed": [
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "PointB1_Ratio",
                                      "value": {
                                        "operator": "Variables[0] (PointB1_Add_1) || RETURN",
                                        "displayLines": "PointB1_Add_1",
                                        "constants": [],
                                        "variables": [
                                          "PointB1_Add_1"
                                        ]
                                      }
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "PointB1_Ratio",
                                      "value": 0
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "SkillP01_FinalDamage",
                              "value": {
                                "operator": "Variables[0] (SkillP01_FinalDamage) || Variables[1] (SkillP01_CurrentDamge) || INVERT || Variables[2] (PointB1_Ratio) || MUL || Variables[3] (_TMP_Rate) || MUL || Variables[4] (0.12) || DIV || Variables[4] (0.12) || Variables[5] (Rank01_FinalRatio) || MUL || MUL || ADD || RETURN",
                                "displayLines": "(SkillP01_FinalDamage + ((((-SkillP01_CurrentDamge * PointB1_Ratio) * _TMP_Rate) / 0.12) * (0.12 * Rank01_FinalRatio)))",
                                "constants": [],
                                "variables": [
                                  "SkillP01_FinalDamage",
                                  "SkillP01_CurrentDamge",
                                  "PointB1_Ratio",
                                  "_TMP_Rate",
                                  0.12,
                                  "Rank01_FinalRatio"
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
                                "name": "Compare: Target",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "target2": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                }
                              },
                              {
                                "name": "Attack Type",
                                "attackTypes": [
                                  "Technique"
                                ],
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                }
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "SkillP01_FinalDamage",
                              "value": {
                                "operator": "Variables[0] (SkillP01_FinalDamage) || Variables[1] (SkillP01_CurrentDamge) || INVERT || Variables[2] (2) || MUL || Variables[3] (_TMP_Rate) || MUL || Variables[4] (0.12) || DIV || Variables[4] (0.12) || Variables[5] (Rank01_FinalRatio) || MUL || MUL || ADD || RETURN",
                                "displayLines": "(SkillP01_FinalDamage + ((((-SkillP01_CurrentDamge * 2) * _TMP_Rate) / 0.12) * (0.12 * Rank01_FinalRatio)))",
                                "constants": [],
                                "variables": [
                                  "SkillP01_FinalDamage",
                                  "SkillP01_CurrentDamge",
                                  2,
                                  "_TMP_Rate",
                                  0.12,
                                  "Rank01_FinalRatio"
                                ]
                              }
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (SkillP01_FinalDamage) || Constants[0] (1000) || DIV || RETURN",
                        "displayLines": "(SkillP01_FinalDamage / 1000)",
                        "constants": [
                          1000
                        ],
                        "variables": [
                          "SkillP01_FinalDamage"
                        ]
                      },
                      "maximum": {
                        "operator": "Constants[0] (99999) || RETURN",
                        "displayLines": "99999",
                        "constants": [
                          99999
                        ],
                        "variables": []
                      },
                      "assignState": "True",
                      "priorState": "Normal",
                      "bar#": 4,
                      "cooldown": 0
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Entity Left Battle [Owner]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}.[[livingOrLimbo]]"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Compare: Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "value1": "CurrentHP%",
                          "compareType": ">",
                          "value2": 0
                        }
                      },
                      "Shuffle Targets",
                      {
                        "name": "Sort by Stat",
                        "stat": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;",
                        "sortByHighest": true
                      },
                      {
                        "name": "Return Target",
                        "value": 1
                      }
                    ]
                  },
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"291142985\">Cipher_BpKuoSan</a>[<span class=\"descriptionNumberColor\">Patron</span>]",
                      "valuePerStack": {}
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"291142985\">Cipher_BpKuoSan</a>[<span class=\"descriptionNumberColor\">Patron</span>]"
                }
              ]
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
                        "name": "Is Entity a Battle Event/Summon",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "invertCondition": true
                      },
                      {
                        "name": "Eidolon Activated",
                        "eidolon": 4
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Quantum",
                        "Damage": {
                          "operator": "Variables[0] (Rank04_DamagePercentage) || RETURN",
                          "displayLines": "Rank04_DamagePercentage",
                          "constants": [],
                          "variables": [
                            "Rank04_DamagePercentage"
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Additional DMG"
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Unselectable Adjustment [Owner]: Start",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}.[[livingOrLimbo]]"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Compare: Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "value1": "CurrentHP%",
                          "compareType": ">",
                          "value2": 0
                        }
                      },
                      "Shuffle Targets",
                      {
                        "name": "Sort by Stat",
                        "stat": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;",
                        "sortByHighest": true
                      },
                      {
                        "name": "Return Target",
                        "value": 1
                      }
                    ]
                  },
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"291142985\">Cipher_BpKuoSan</a>[<span class=\"descriptionNumberColor\">Patron</span>]",
                      "valuePerStack": {}
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"291142985\">Cipher_BpKuoSan</a>[<span class=\"descriptionNumberColor\">Patron</span>]"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "While the \"Patron\" state is active, a tally of the DMG dealt by ally targets will be kept by Cipher. And Cipher's Ultimate will deal True DMG based on this tally.",
          "type": "Debuff",
          "effectName": "Become a Patron",
          "statusName": "Patron"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__31554455\">Cipher_BpKuoSan_Adj</a>",
          "modifierFlags": [
            "KeepOnDeathrattle",
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "Toggle Skill Mark"
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "Toggle Skill Mark"
                }
              ]
            },
            {
              "eventTrigger": "Update Target Selected(UI) [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Targets Adjacent to Modifier Holder(v2)}}"
                        },
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
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"291142985\">Cipher_BpKuoSan</a>[<span class=\"descriptionNumberColor\">Patron</span>]"
                              }
                            }
                          ]
                        },
                        "mustBeAlive2": true
                      },
                      {
                        "name": "Trace Activated",
                        "conditionList": "300 Rogues"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Toggle Skill Mark",
                      "toggle": true
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Active Ability Chosen [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Targets Adjacent to Modifier Holder(v2)}}"
                        },
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
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"291142985\">Cipher_BpKuoSan</a>[<span class=\"descriptionNumberColor\">Patron</span>]"
                              }
                            }
                          ]
                        },
                        "mustBeAlive2": true
                      },
                      {
                        "name": "Trace Activated",
                        "conditionList": "300 Rogues"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Toggle Skill Mark",
                      "toggle": true
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-989192431\">Cipher_BpKuoSan_Insert_Hit_PointB1</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__232969841\">Cipher_BpKuoSan_Insert_Hit</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1369337828\">Cipher_PointB1_Debuff</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Skill"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                          "value": "MDF_PropertyValue"
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
          "for": "<a class=\"gModGreen\" id=\"mod__116163492\">Cipher_BP_Bonus</a>[<span class=\"descriptionNumberColor\">Hey, Jackpot for the Taking</span>]",
          "stackType": "ReplaceByCaster",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                    "displayLines": "MDF_PropertyValue",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": [],
          "description": "ATK increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "statusName": "Hey, Jackpot for the Taking"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1685549745\">Cipher_BP_Debuff</a>[<span class=\"descriptionNumberColor\">Hey, Jackpot for the Taking</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_Fatigue"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Weaken%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                    "displayLines": "MDF_PropertyValue",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": [],
          "description": "DMG dealt to allies decreases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "Weaken",
          "statusName": "Hey, Jackpot for the Taking"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1113671218\">Cipher_PointB3_Debuff</a>[<span class=\"descriptionNumberColor\">Sleight of Sky</span>]",
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
                    "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                    "displayLines": "MDF_PropertyValue",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": [],
          "description": "DMG received increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "Vulnerability",
          "statusName": "Sleight of Sky"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-235690437\">Cipher_PointB1_InsertBonus</a>",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Follow-up"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                          "value": "MDF_PropertyValue"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1912968422\">Cipher_Eidolon6_Debuff</a>",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAll</span>&nbsp;",
                      "value": "(0 - MDF_PropertyValue)"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1467539794\">Cipher_Eidolon1_Bonus</a>[<span class=\"descriptionNumberColor\">Read the Room, Seek the Glee</span>]",
          "stackType": "ReplaceByCaster",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                    "displayLines": "MDF_PropertyValue",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": [],
          "description": "ATK increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "ATK Boost",
          "statusName": "Read the Room, Seek the Glee"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-309291538\">Cipher_Eidolon2_Debuff</a>[<span class=\"descriptionNumberColor\">In the Fray, Nab On a Spree</span>]",
          "stackType": "ReplaceByCaster",
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
                    "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                    "displayLines": "MDF_PropertyValue",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": [],
          "description": "DMG received increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "Vulnerability",
          "statusName": "In the Fray, Nab On a Spree"
        }
      ],
      "references": []
    }
  }
}