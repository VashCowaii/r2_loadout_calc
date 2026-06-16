const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 11222,
  "trimCharacterName": 11222,
  "abilityList": [
    "11222_Modifiers",
    "11222_Lingsha_BPAbility_BattleEvent_Part01",
    "11222_Lingsha_BE_PassiveAbility",
    "11222_Functions"
  ],
  "abilityObject": {
    "11222_Modifiers": {
      "fileName": "11222_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1203114075\">Lingsha_Eidolon6_AllDamageTypeResistance</a>[<span class=\"descriptionNumberColor\">Arcadia Under Deep Seclusion</span>]",
          "description": "All-Type RES decreases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "All-Type RES Reduction",
          "statusName": "Arcadia Under Deep Seclusion",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAll</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                    "displayLines": "(0 - MDF_PropertyValue)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1458980452\">Lingsha_Eidolon6_Listen</a>",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE, with Unselectables)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1203114075\">Lingsha_Eidolon6_AllDamageTypeResistance</a>[<span class=\"descriptionNumberColor\">Arcadia Under Deep Seclusion</span>]",
              "aliveOnly": "False",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (UnusedUnderThisBase_5287) || RETURN",
                  "displayLines": "UnusedUnderThisBase_5287",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_5287"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-962483629\">Lingsha_Eidolon2_BreakDamageAttackRatio</a>[<span class=\"descriptionNumberColor\">Leisure in Carmine Smokeveil</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Break Effect increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "Break Effect Boost",
          "statusName": "Leisure in Carmine Smokeveil",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-127930650\">Lingsha_Eidolon1_DefenceRatioDown</a>[<span class=\"descriptionNumberColor\">Bloom on Vileward Bouquet</span>]",
          "description": "DEF decreases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "DEF Reduction",
          "statusName": "Bloom on Vileward Bouquet",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-350940925\">Lingsha_Eidolon1_PassiveStackProperty</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-350940925\">Lingsha_Eidolon1_PassiveStackProperty</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_DefenceDown"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                    "displayLines": "(0 - MDF_PropertyValue)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1709120566\">Lingsha_Eidolon1_ListenBreak</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: Start [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-350940925\">Lingsha_Eidolon1_PassiveStackProperty</a>",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (Rank01_MDF_PropertyValue) || RETURN",
                      "displayLines": "Rank01_MDF_PropertyValue",
                      "constants": [],
                      "variables": [
                        "Rank01_MDF_PropertyValue"
                      ]
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-127930650\">Lingsha_Eidolon1_DefenceRatioDown</a>[<span class=\"descriptionNumberColor\">Bloom on Vileward Bouquet</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (Rank01_MDF_PropertyValue) || RETURN",
                      "displayLines": "Rank01_MDF_PropertyValue",
                      "constants": [],
                      "variables": [
                        "Rank01_MDF_PropertyValue"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1721297245\">Lingsha_Eidolon1_Listen</a>",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakEfficiency</span>&nbsp;",
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__551246003\">Lingsha_PointB3_CD</a>[<span class=\"descriptionNumberColor\">Ember's Echo</span>]",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "description": "The Trace \"Ember's Echo\" effect's auto-trigger is still on cooldown.",
          "type": "Other",
          "statusName": "Ember's Echo",
          "duration": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__210278197\">Lingsha_PointB3_OnListen</a>",
          "modifierFlags": [
            "CustomEvent_InfiniteRefresh"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "HP Change [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "ParameterValue",
                        "compareType": "<",
                        "value2": 0
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
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{All Team Members}}"
                      },
                      "searchRandom": true,
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "CurrentHP",
                        "compareType": ">",
                        "value2": 0
                      },
                      "ifTargetFound": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Battle Event's Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"551246003\">Lingsha_PointB3_CD</a>[<span class=\"descriptionNumberColor\">Ember's Echo</span>]",
                            "invertCondition": true
                          },
                          "passed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "AND",
                                "conditionList": [
                                  {
                                    "name": "Compare: Variable",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "value1": "CurrentHP%",
                                    "compareType": "<=",
                                    "value2": {
                                      "operator": "Variables[0] (MDF_HPRatio) || RETURN",
                                      "displayLines": "MDF_HPRatio",
                                      "constants": [],
                                      "variables": [
                                        "MDF_HPRatio"
                                      ]
                                    }
                                  },
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Battle Event's Caster}}"
                                    },
                                    "flagName": "STAT_CTRL_UnOperable",
                                    "invertCondition": true,
                                    "justAddedOrLiving": true
                                  }
                                ]
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "BattleEvent_Lingsha_00_PointB3",
                                  "value": 1
                                },
                                {
                                  "name": "Inject Ability Use",
                                  "condition": {
                                    "name": "Insert Ability Condition",
                                    "type": "AbilityOwnerInsertUnusedCount",
                                    "typeValue": 1
                                  },
                                  "conditionActive": {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Battle Event's Caster}}"
                                    },
                                    "flagName": "STAT_CTRL_UnOperable",
                                    "invertCondition": true,
                                    "justAddedOrLiving": true
                                  },
                                  "abilityName": "Lingsha_BPAbility_BattleEvent_Part01",
                                  "abilitySource": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "abilityTarget": {
                                    "name": "Target Name",
                                    "target": "{{Hostile Entities(AOE)}}"
                                  },
                                  "priorityTag": "CharacterAttackFromSelf",
                                  "ownerState": "Mask_AliveOrRevivable",
                                  "canHitNonTargets": true,
                                  "showInActionOrder": true,
                                  "abortFlags": [
                                    "DisableAction",
                                    "STAT_CTRL"
                                  ],
                                  "allowAbilityTriggers": false
                                }
                              ]
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
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "BattleEvent_Lingsha_00_PointB3",
                    "compareType": ">=",
                    "value2": 1
                  },
                  "passed": [
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
                          "abilityName": "Lingsha_BPAbility_BattleEvent_Part01",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Hostile Entities(AOE)}}"
                          },
                          "priorityTag": "CharacterAttackFromSelf",
                          "ownerState": "Mask_AliveOrRevivable",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "allowAbilityTriggers": false
                        }
                      ]
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
                    "name": "Compare: Variable",
                    "value1": "BattleEvent_Lingsha_00_PointB3",
                    "compareType": ">=",
                    "value2": 1
                  },
                  "passed": [
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
                          "abilityName": "Lingsha_BPAbility_BattleEvent_Part01",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Hostile Entities(AOE)}}"
                          },
                          "priorityTag": "CharacterAttackFromSelf",
                          "ownerState": "Mask_AliveOrRevivable",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Get Revived [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "BattleEvent_Lingsha_00_PointB3",
                        "compareType": ">=",
                        "value2": 1
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
                          "abilityName": "Lingsha_BPAbility_BattleEvent_Part01",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Hostile Entities(AOE)}}"
                          },
                          "priorityTag": "CharacterAttackFromSelf",
                          "ownerState": "Mask_AliveOrRevivable",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "allowAbilityTriggers": false
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
          "for": "<a class=\"gModGreen\" id=\"mod__1876847773\">Lingsha_BPAbility_BattleEvent_LifeTime</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 0,
                  "target": {
                    "name": "Target Name",
                    "target": "{{Battle Event's Caster}}"
                  },
                  "priorState": "Normal"
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Battle Event's Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Lingsha_AttackTime",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
              "execute": [
                {
                  "name": "Define Modifier Variable",
                  "modifierName": null,
                  "function": "Add"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_AttackTime",
                  "value": {
                    "operator": "Variables[0] (_AttackTime) || Constants[0] (1) || SUB || RETURN",
                    "displayLines": "(_AttackTime - 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "_AttackTime"
                    ]
                  }
                },
                {
                  "name": "Show Attack Time",
                  "time": {
                    "operator": "Variables[0] (_AttackTime) || RETURN",
                    "displayLines": "_AttackTime",
                    "constants": [],
                    "variables": [
                      "_AttackTime"
                    ]
                  },
                  "on": null,
                  "show": true
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Battle Event's Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Lingsha_AttackTime",
                  "value": {
                    "operator": "Variables[0] (_AttackTime) || RETURN",
                    "displayLines": "_AttackTime",
                    "constants": [],
                    "variables": [
                      "_AttackTime"
                    ]
                  }
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (_AttackTime) || RETURN",
                    "displayLines": "_AttackTime",
                    "constants": [],
                    "variables": [
                      "_AttackTime"
                    ]
                  },
                  "target": {
                    "name": "Target Name",
                    "target": "{{Battle Event's Caster}}"
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_AttackTime",
                  "multiplier": 1
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (_AttackTime) || RETURN",
                    "displayLines": "_AttackTime",
                    "constants": [],
                    "variables": [
                      "_AttackTime"
                    ]
                  },
                  "target": {
                    "name": "Target Name",
                    "target": "{{Battle Event's Caster}}"
                  }
                },
                {
                  "name": "Show Attack Time",
                  "time": {
                    "operator": "Variables[0] (_AttackTime) || RETURN",
                    "displayLines": "_AttackTime",
                    "constants": [],
                    "variables": [
                      "_AttackTime"
                    ]
                  },
                  "on": null,
                  "show": true
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-637709984\">Lingsha_BreakDamageUp</a>[<span class=\"descriptionNumberColor\">Befog</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Break DMG taken increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "Befog",
          "statusName": "Befog",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Break DMG"
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
        }
      ],
      "references": []
    },
    "11222_Lingsha_BPAbility_BattleEvent_Part01": {
      "fileName": "11222_Lingsha_BPAbility_BattleEvent_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Battle Event's Caster}}"
          },
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "Lingsha_BPAbility_BattleEvent_Part02",
          "isTrigger": true
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "11222_Lingsha_BE_PassiveAbility": {
      "fileName": "11222_Lingsha_BE_PassiveAbility",
      "childAbilityList": [
        "11222_Lingsha_BE_PassiveAbility",
        "11222_Lingsha_BPAbility_BattleEvent_Part01",
        "11222_Lingsha_BPAbility_BattleEvent_Camera"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1795719445\">Lingsha_BPAbility_BattleEvent</a>",
          "counter": {
            "operator": "Variables[0] (BattleEvent_Lingsha_PointB3) || RETURN",
            "displayLines": "BattleEvent_Lingsha_PointB3",
            "constants": [],
            "variables": [
              "BattleEvent_Lingsha_PointB3"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1876847773\">Lingsha_BPAbility_BattleEvent_LifeTime</a>",
          "counter": {
            "operator": "Variables[0] (BattleEvent_Lingsha_AttackTime) || RETURN",
            "displayLines": "BattleEvent_Lingsha_AttackTime",
            "constants": [],
            "variables": [
              "BattleEvent_Lingsha_AttackTime"
            ]
          },
          "valuePerStack": {
            "_AttackTime": {
              "operator": "Variables[0] (BattleEvent_Lingsha_AttackTime) || RETURN",
              "displayLines": "BattleEvent_Lingsha_AttackTime",
              "constants": [],
              "variables": [
                "BattleEvent_Lingsha_AttackTime"
              ]
            }
          }
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1795719445\">Lingsha_BPAbility_BattleEvent</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Battle Event's Caster}}"
                  },
                  "variableName": "Lingsha_BENum",
                  "context": "TargetEntity",
                  "value": -1,
                  "max": 100
                }
              ]
            },
            {
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
              "execute": [
                {
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertUnusedCount",
                    "typeValue": 1
                  },
                  "abilityName": "Lingsha_BPAbility_BattleEvent_Part01",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "priorityTag": "CharacterAttackFromSelf",
                  "ownerState": "Mask_AliveOrRevivable",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
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
                    "target": "{{Caster}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (BattleEvent_Lingsha_BaseSpeed) || RETURN",
                    "displayLines": "BattleEvent_Lingsha_BaseSpeed",
                    "constants": [],
                    "variables": [
                      "BattleEvent_Lingsha_BaseSpeed"
                    ]
                  }
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "11222_Functions": {
      "fileName": "11222_Functions",
      "abilityType": "Char. Functions",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "length": 2,
      "parse": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1849801979\">Lingsha_Passive_Target</a>",
          "parse": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "searchRandom": true,
              "includeDyingTargets": true,
              "maxTargets": 1,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Weakness",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "DamageType": "Fire"
                  },
                  {
                    "name": "Compare: Ability Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;",
                    "compareType": ">",
                    "value2": 0
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "CurrentHP",
                    "compareType": ">",
                    "value2": 0
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "Damage": {
                      "operator": "Variables[0] (UnusedUnderThisBase_5277) || RETURN",
                      "displayLines": "UnusedUnderThisBase_5277",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_5277"
                      ]
                    },
                    "Toughness": {
                      "operator": "Variables[0] (AOE Toughness Value) || RETURN",
                      "displayLines": "AOE Toughness Value",
                      "constants": [],
                      "variables": [
                        "AOE Toughness Value"
                      ]
                    },
                    "Tags": [
                      "Summon-Tag DMG"
                    ],
                    "attackType": "Follow-up"
                  }
                }
              ],
              "noTargetFound": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "searchRandom": true,
                  "includeDyingTargets": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Weakness",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "DamageType": "Fire"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "CurrentHP",
                        "compareType": ">",
                        "value2": 0
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Fire",
                        "Damage": {
                          "operator": "Variables[0] (UnusedUnderThisBase_5277) || RETURN",
                          "displayLines": "UnusedUnderThisBase_5277",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_5277"
                          ]
                        },
                        "Toughness": {
                          "operator": "Variables[0] (AOE Toughness Value) || RETURN",
                          "displayLines": "AOE Toughness Value",
                          "constants": [],
                          "variables": [
                            "AOE Toughness Value"
                          ]
                        },
                        "Tags": [
                          "Summon-Tag DMG"
                        ],
                        "attackType": "Follow-up"
                      }
                    }
                  ],
                  "noTargetFound": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "searchRandom": true,
                      "includeDyingTargets": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "CurrentHP",
                        "compareType": ">",
                        "value2": 0
                      },
                      "ifTargetFound": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Fire",
                            "Damage": {
                              "operator": "Variables[0] (UnusedUnderThisBase_5277) || RETURN",
                              "displayLines": "UnusedUnderThisBase_5277",
                              "constants": [],
                              "variables": [
                                "UnusedUnderThisBase_5277"
                              ]
                            },
                            "Toughness": {
                              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
                              "displayLines": "AOE Toughness Value",
                              "constants": [],
                              "variables": [
                                "AOE Toughness Value"
                              ]
                            },
                            "Tags": [
                              "Summon-Tag DMG"
                            ],
                            "attackType": "Follow-up"
                          }
                        }
                      ],
                      "noTargetFound": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Hostile Entities(AOE)}}"
                          },
                          "searchRandom": true,
                          "includeDyingTargets": true,
                          "maxTargets": 1,
                          "ifTargetFound": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Fire",
                                "Damage": {
                                  "operator": "Variables[0] (UnusedUnderThisBase_5277) || RETURN",
                                  "displayLines": "UnusedUnderThisBase_5277",
                                  "constants": [],
                                  "variables": [
                                    "UnusedUnderThisBase_5277"
                                  ]
                                },
                                "Toughness": {
                                  "operator": "Variables[0] (AOE Toughness Value) || RETURN",
                                  "displayLines": "AOE Toughness Value",
                                  "constants": [],
                                  "variables": [
                                    "AOE Toughness Value"
                                  ]
                                },
                                "Tags": [
                                  "Summon-Tag DMG"
                                ],
                                "attackType": "Follow-up"
                              }
                            }
                          ]
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
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__988152442\">Lingsha_Passive_Target_Eidolon6</a>",
          "parse": [
            {
              "name": "Looped Event",
              "maxLoops": {
                "operator": "Variables[0] (UnusedUnderThisBase_5280) || RETURN",
                "displayLines": "UnusedUnderThisBase_5280",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_5280"
                ]
              },
              "Event": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "searchRandom": true,
                  "includeDyingTargets": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Weakness",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "DamageType": "Fire"
                      },
                      {
                        "name": "Compare: Ability Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;",
                        "compareType": ">",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "CurrentHP",
                        "compareType": ">",
                        "value2": 0
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Fire",
                        "Damage": {
                          "operator": "Variables[0] (UnusedUnderThisBase_5292) || RETURN",
                          "displayLines": "UnusedUnderThisBase_5292",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_5292"
                          ]
                        },
                        "Toughness": {
                          "operator": "Variables[0] (Lingsha_Rank06_StanceDamage) || RETURN",
                          "displayLines": "Lingsha_Rank06_StanceDamage",
                          "constants": [],
                          "variables": [
                            "Lingsha_Rank06_StanceDamage"
                          ]
                        },
                        "Tags": [
                          "Summon-Tag DMG"
                        ],
                        "attackType": "Follow-up"
                      }
                    }
                  ],
                  "noTargetFound": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "searchRandom": true,
                      "includeDyingTargets": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Weakness",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "DamageType": "Fire"
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value1": "CurrentHP",
                            "compareType": ">",
                            "value2": 0
                          }
                        ]
                      },
                      "ifTargetFound": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Fire",
                            "Damage": {
                              "operator": "Variables[0] (UnusedUnderThisBase_5292) || RETURN",
                              "displayLines": "UnusedUnderThisBase_5292",
                              "constants": [],
                              "variables": [
                                "UnusedUnderThisBase_5292"
                              ]
                            },
                            "Toughness": {
                              "operator": "Variables[0] (Lingsha_Rank06_StanceDamage) || RETURN",
                              "displayLines": "Lingsha_Rank06_StanceDamage",
                              "constants": [],
                              "variables": [
                                "Lingsha_Rank06_StanceDamage"
                              ]
                            },
                            "Tags": [
                              "Summon-Tag DMG"
                            ],
                            "attackType": "Follow-up"
                          }
                        }
                      ],
                      "noTargetFound": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Hostile Entities(AOE)}}"
                          },
                          "searchRandom": true,
                          "includeDyingTargets": true,
                          "maxTargets": 1,
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value1": "CurrentHP",
                            "compareType": ">",
                            "value2": 0
                          },
                          "ifTargetFound": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Fire",
                                "Damage": {
                                  "operator": "Variables[0] (UnusedUnderThisBase_5292) || RETURN",
                                  "displayLines": "UnusedUnderThisBase_5292",
                                  "constants": [],
                                  "variables": [
                                    "UnusedUnderThisBase_5292"
                                  ]
                                },
                                "Toughness": {
                                  "operator": "Variables[0] (Lingsha_Rank06_StanceDamage) || RETURN",
                                  "displayLines": "Lingsha_Rank06_StanceDamage",
                                  "constants": [],
                                  "variables": [
                                    "Lingsha_Rank06_StanceDamage"
                                  ]
                                },
                                "Tags": [
                                  "Summon-Tag DMG"
                                ],
                                "attackType": "Follow-up"
                              }
                            }
                          ],
                          "noTargetFound": [
                            {
                              "name": "Find New Target",
                              "from": {
                                "name": "Target Name",
                                "target": "{{Hostile Entities(AOE)}}"
                              },
                              "searchRandom": true,
                              "includeDyingTargets": true,
                              "maxTargets": 1,
                              "ifTargetFound": [
                                {
                                  "name": "ATK Scaling DMG",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "AttackScaling": {
                                    "DamageType": "Fire",
                                    "Damage": {
                                      "operator": "Variables[0] (UnusedUnderThisBase_5292) || RETURN",
                                      "displayLines": "UnusedUnderThisBase_5292",
                                      "constants": [],
                                      "variables": [
                                        "UnusedUnderThisBase_5292"
                                      ]
                                    },
                                    "Toughness": {
                                      "operator": "Variables[0] (Lingsha_Rank06_StanceDamage) || RETURN",
                                      "displayLines": "Lingsha_Rank06_StanceDamage",
                                      "constants": [],
                                      "variables": [
                                        "Lingsha_Rank06_StanceDamage"
                                      ]
                                    },
                                    "Tags": [
                                      "Summon-Tag DMG"
                                    ],
                                    "attackType": "Follow-up"
                                  }
                                }
                              ]
                            }
                          ]
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
      "references": []
    }
  },
  "enemyData": {
    "SkillP01": {
      "skillID": 1122204,
      "trigger": "SkillP01",
      "name": "",
      "type": "Talent",
      "slot": "Talent",
      "desc": "",
      "energyCost": null,
      "energyRegen": null,
      "energyRate": 0.5,
      "toughnessReductionDisplayed": null,
      "skillPointCost": 0,
      "skillPointGain": 0,
      "params": {
        "1": [
          1.1
        ]
      },
      "skillEffect": "Passive",
      "maxLevel": 1,
      "configAbilityList": [
        "Avatar_Lingsha_00_BE_PassiveSkill",
        "Avatar_Lingsha_00_BPSkill_BattleEvent_Phase01",
        "Avatar_Lingsha_00_BPSkill_BattleEvent_Camera"
      ],
      "toughnessList": [
        0,
        0,
        0
      ],
      "hitSplits": []
    }
  },
  "isBattleEvent": true
}