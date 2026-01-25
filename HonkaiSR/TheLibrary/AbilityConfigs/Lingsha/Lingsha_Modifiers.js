const configAbility = {
  "fileName": "Lingsha_Modifiers",
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
      "for": "Lingsha_Eidolon6_AllDamageTypeResistance[<span class=\"descriptionNumberColor\">Arcadia Under Deep Seclusion</span>]",
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
      ],
      "description": "All-Type RES decreases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Debuff",
      "effectName": "All-Type RES Reduction",
      "statusName": "Arcadia Under Deep Seclusion"
    },
    {
      "name": "Modifier Construction",
      "for": "Lingsha_Eidolon6_Listen",
      "stackData": [],
      "latentQueue": [],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE, with Unselectables)}}"
          },
          "modifier": "Lingsha_Eidolon6_AllDamageTypeResistance[<span class=\"descriptionNumberColor\">Arcadia Under Deep Seclusion</span>]",
          "aliveOnly": "False",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (0.2) || RETURN",
              "displayLines": "0.2",
              "constants": [],
              "variables": [
                0.2
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Lingsha_Eidolon2_BreakDamageAttackRatio[<span class=\"descriptionNumberColor\">Leisure in Carmine Smokeveil</span>]",
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
      ],
      "stackData": [
        "MDF_PropertyValue"
      ],
      "latentQueue": [],
      "description": "Break Effect increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "Break Effect Boost",
      "statusName": "Leisure in Carmine Smokeveil"
    },
    {
      "name": "Modifier Construction",
      "for": "Lingsha_Eidolon1_DefenceRatioDown[<span class=\"descriptionNumberColor\">Bloom on Vileward Bouquet</span>]",
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
              "modifier": "Lingsha_Eidolon1_PassiveStackProperty"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ],
      "description": "DEF decreases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Debuff",
      "effectName": "DEF Reduction",
      "statusName": "Bloom on Vileward Bouquet"
    },
    {
      "name": "Modifier Construction",
      "for": "Lingsha_Eidolon1_PassiveStackProperty",
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
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Lingsha_Eidolon1_ListenBreak",
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
              "modifier": "Lingsha_Eidolon1_PassiveStackProperty",
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
              "modifier": "Lingsha_Eidolon1_DefenceRatioDown[<span class=\"descriptionNumberColor\">Bloom on Vileward Bouquet</span>]",
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
      ],
      "stackData": [
        "Rank01_MDF_PropertyValue"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Lingsha_Eidolon1_Listen",
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
      ],
      "stackData": [
        "MDF_PropertyValue"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Lingsha_PointB3_CD[<span class=\"descriptionNumberColor\">Ember's Echo</span>]",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "stackData": [],
      "latentQueue": [
        "BattleEvent_Lingsha_00_PointB3"
      ],
      "description": "The Trace \"Ember's Echo\" effect's auto-trigger is still on cooldown.",
      "type": "Other",
      "statusName": "Ember's Echo",
      "duration": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Lingsha_PointB3_OnListen",
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
                    "team": "TeamLight"
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
                        "modifier": "Lingsha_PointB3_CD[<span class=\"descriptionNumberColor\">Ember's Echo</span>]",
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
                              "priorityTag": "AvatarInsertAttackSelf",
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
                      "priorityTag": "AvatarInsertAttackSelf",
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
                      "priorityTag": "AvatarInsertAttackSelf",
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
                    "team": "TeamDark"
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
                      "priorityTag": "AvatarInsertAttackSelf",
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
      ],
      "stackData": [
        "MDF_HPRatio",
        "MDF_LifeTime"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Lingsha_BPAbility_BattleEvent_LifeTime",
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
          "eventTrigger": "Turn [Pre-action Phase]",
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
      ],
      "stackData": [
        "_AttackTime"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Lingsha_BreakDamageUp[<span class=\"descriptionNumberColor\">Befog</span>]",
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
      ],
      "stackData": [
        "MDF_PropertyValue"
      ],
      "latentQueue": [],
      "description": "Break DMG taken increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Debuff",
      "effectName": "Befog",
      "statusName": "Befog"
    }
  ],
  "references": []
}