const compositeAbilityObject = {
  "fullCharacterName": "Tribbie",
  "trimCharacterName": "Tribbie",
  "abilityList": [
    "Tribbie_Tribbie_Insert",
    "Tribbie_Tribbie_TechniqueInLevel",
    "Tribbie_Tribbie_PassiveAbility01",
    "Tribbie_Tribbie_Ability03_Part02",
    "Tribbie_Tribbie_Ability03_Part01",
    "Tribbie_Tribbie_Ability03_EnterReady",
    "Tribbie_Tribbie_Ability02_Part02",
    "Tribbie_Tribbie_Ability02_Part01",
    "Tribbie_Tribbie_Ability01_Part02",
    "Tribbie_Tribbie_Ability01_Part01",
    "Tribbie_Modifiers"
  ],
  "abilityObject": {
    "Tribbie_Tribbie_Insert": {
      "fileName": "Tribbie_Tribbie_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "Tribbie_Eidolon6_Bonus_Active",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (7.29) || RETURN",
                  "displayLines": "7.29",
                  "constants": [],
                  "variables": [
                    7.29
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "UI Display Event",
          "popUpText": "Busy as Tribbie"
        },
        {
          "name": "ATK Scaling DMG",
          "target": "All Hostile Entities (AOE)",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (0.18) || RETURN",
              "displayLines": "0.18",
              "constants": [],
              "variables": [
                0.18
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "Tags": null,
            "attackType": "Follow-up",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Define Custom Variable",
          "variableName": "OnInsertAbort_Flg",
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
              "name": "Remove Events/Bonuses",
              "to": "Caster",
              "modifier": "Tribbie_Eidolon6_Bonus_Active"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Lamb Outside the Wall..."
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "Tribbie_PointB1_DamageUpModifier[<span class=\"descriptionNumberColor\">Lamb Outside the Wall...</span>]",
              "duration": {
                "operator": "Variables[0] (3) || RETURN",
                "displayLines": "3",
                "constants": [],
                "variables": [
                  3
                ]
              },
              "stackLimit": {
                "operator": "Variables[0] (3) || RETURN",
                "displayLines": "3",
                "constants": [],
                "variables": [
                  3
                ]
              }
            }
          ]
        }
      ],
      "onAbort": [
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Flag",
                "target": "Caster",
                "flagName": "STAT_CTRL",
                "invertCondition": true
              },
              {
                "name": "Has Flag",
                "target": "Caster",
                "flagName": "DisableAction",
                "invertCondition": true
              },
              {
                "name": "Living State",
                "state": "Mask_AliveOnly",
                "target": "Caster"
              },
              {
                "name": "Compare: Variable",
                "value1": "OnInsertAbort_Flg",
                "compareType": "=",
                "value2": 1
              }
            ]
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Enemies Still Alive",
                "target": "Caster",
                "includeNonTargets": true
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertUnusedCount",
                    "typeValue": 1
                  },
                  "abilityName": "Tribbie_Insert",
                  "abilitySource": "Caster",
                  "abilityTarget": "All Hostile Entities (AOE)",
                  "priorityTag": "AvatarInsertAttackSelf",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "STAT_CTRL",
                    "DisableAction"
                  ],
                  "allowAbilityTriggers": false
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "OnInsertAbort_Flg",
                  "value": 0
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "Tribbie_Tribbie_TechniqueInLevel": {
      "fileName": "Tribbie_Tribbie_TechniqueInLevel",
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
          "to": "Caster",
          "modifier": "Tribbie_Maze_Modifier"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Tribbie_Maze_Modifier",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Wave Count",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "Tribbie_SKL02_Bonus[<span class=\"descriptionNumberColor\">Numinosity</span>]",
                      "duration": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.24) || RETURN",
                          "displayLines": "0.24",
                          "constants": [],
                          "variables": [
                            0.24
                          ]
                        }
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Energy_Layer",
                      "value": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
                        ]
                      }
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (Energy_Layer) || RETURN",
                        "displayLines": "Energy_Layer",
                        "constants": [],
                        "variables": [
                          "Energy_Layer"
                        ]
                      },
                      "priorState": "Active"
                    }
                  ]
                }
              ],
              "priorityLevel": -80
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Tribbie_Tribbie_PassiveAbility01": {
      "fileName": "Tribbie_Tribbie_PassiveAbility01",
      "abilityType": "Talent",
      "energy": 5,
      "toughnessList": [
        0,
        5,
        0
      ],
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Pebble at Crossroads?"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "Tribbie_PointB3_AddSpModifier"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 2
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_PursuedDamage",
              "value": {
                "operator": "Variables[0] (0.12) || Variables[1] (1.2) || MUL || RETURN",
                "displayLines": "(0.12 * 1.2)",
                "constants": [],
                "variables": [
                  0.12,
                  1.2
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_PursuedDamage",
              "value": {
                "operator": "Variables[0] (0.12) || RETURN",
                "displayLines": "0.12",
                "constants": [],
                "variables": [
                  0.12
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
              "to": "Caster",
              "modifier": "Tribbie_Eidolon6_Bonus[<span class=\"descriptionNumberColor\">Morrow of Star Shine</span>]",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (7.29) || RETURN",
                  "displayLines": "7.29",
                  "constants": [],
                  "variables": [
                    7.29
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Tribbie_Passive_Listen"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Energy_Layer",
          "value": 0
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": 0,
          "maximum": {
            "operator": "Variables[0] (3) || RETURN",
            "displayLines": "3",
            "constants": [],
            "variables": [
              3
            ]
          },
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 3,
          "cooldown": 0
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Tribbie_Passive_Listen",
          "modifierFlags": [
            "CustomEvent_InfiniteRefresh"
          ],
          "execute": [
            {
              "eventTrigger": "Action Phase Start [Owner][?]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": "Caster",
                    "modifier": "Tribbie_SKL02_Bonus[<span class=\"descriptionNumberColor\">Numinosity</span>]"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "valueType": "LifeTime",
                      "variableName": "Skill02_EnergyBarCount",
                      "modifierName": "Tribbie_SKL02_Bonus[<span class=\"descriptionNumberColor\">Numinosity</span>]",
                      "multiplier": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Skill02_EnergyBarCount",
                      "value": 0
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Skill02_EnergyBarCount",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (Skill02_EnergyBarCount) || RETURN",
                        "displayLines": "Skill02_EnergyBarCount",
                        "constants": [],
                        "variables": [
                          "Skill02_EnergyBarCount"
                        ]
                      },
                      "assignState": "True",
                      "priorState": "Active"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": 0,
                      "assignState": "True",
                      "priorState": "Normal"
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
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Skill Type",
                            "skillType": "Ultimate"
                          },
                          {
                            "name": "Has Flag",
                            "target": "Owner of this Modifier",
                            "flagName": "STAT_CTRL",
                            "invertCondition": true
                          },
                          {
                            "name": "Has Flag",
                            "target": "Owner of this Modifier",
                            "flagName": "DisableAction",
                            "invertCondition": true
                          },
                          {
                            "name": "Is Part Of",
                            "of": "Caster",
                            "target": "Use Prior Target(s) Defined",
                            "mustBeAlive2": true,
                            "invertCondition": true
                          }
                        ]
                      },
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Eidolon Activated",
                            "eidolon": 6
                          },
                          {
                            "name": "Skill Type",
                            "skillType": "Ultimate"
                          },
                          {
                            "name": "Has Flag",
                            "target": "Owner of this Modifier",
                            "flagName": "STAT_CTRL",
                            "invertCondition": true
                          },
                          {
                            "name": "Has Flag",
                            "target": "Owner of this Modifier",
                            "flagName": "DisableAction",
                            "invertCondition": true
                          },
                          {
                            "name": "Is Part Of",
                            "of": "Caster",
                            "target": "Use Prior Target(s) Defined",
                            "mustBeAlive2": true
                          }
                        ]
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": "Use Prior Target(s) Defined",
                            "modifier": "Tribbie_CanTriggerInsertTag[<span class=\"descriptionNumberColor\">Busy as Tribbie</span>]"
                          },
                          {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Eidolon Activated",
                                "eidolon": 6
                              },
                              {
                                "name": "Is Part Of",
                                "of": "Caster",
                                "target": "Use Prior Target(s) Defined",
                                "mustBeAlive2": true
                              }
                            ]
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": "Use Prior Target(s) Defined",
                          "modifier": "Tribbie_CanTriggerInsertTag[<span class=\"descriptionNumberColor\">Busy as Tribbie</span>]"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "OnInsertAbort_Flg",
                          "value": 1
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Enemies Still Alive",
                            "target": "Caster"
                          },
                          "passed": [
                            {
                              "name": "Inject Ability Use",
                              "condition": {
                                "name": "Insert Ability Condition",
                                "type": "AbilityOwnerInsertUnusedCount",
                                "typeValue": 1
                              },
                              "abilityName": "Tribbie_Insert",
                              "abilitySource": "Caster",
                              "abilityTarget": "All Hostile Entities (AOE)",
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
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Wave Count",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Allied Team(ALL) [Exclude Owner and battle mechanics, NO Memosprites]",
                      "modifier": "Tribbie_CanTriggerInsertTag[<span class=\"descriptionNumberColor\">Busy as Tribbie</span>]"
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Flag",
                        "target": "Caster",
                        "flagName": "STAT_CTRL",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Flag",
                        "target": "Caster",
                        "flagName": "DisableAction",
                        "invertCondition": true
                      },
                      {
                        "name": "Living State",
                        "state": "Mask_AliveOnly",
                        "target": "Caster"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "OnInsertAbort_Flg",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Enemies Still Alive",
                        "target": "Caster"
                      },
                      "passed": [
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertUnusedCount",
                            "typeValue": 1
                          },
                          "abilityName": "Tribbie_Insert",
                          "abilitySource": "Caster",
                          "abilityTarget": "All Hostile Entities (AOE)",
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
                        "name": "Has Flag",
                        "target": "Caster",
                        "flagName": "STAT_CTRL",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Flag",
                        "target": "Caster",
                        "flagName": "DisableAction",
                        "invertCondition": true
                      },
                      {
                        "name": "Living State",
                        "state": "Mask_AliveOnly",
                        "target": "Caster"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "OnInsertAbort_Flg",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Enemies Still Alive",
                        "target": "Caster"
                      },
                      "passed": [
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertUnusedCount",
                            "typeValue": 1
                          },
                          "abilityName": "Tribbie_Insert",
                          "abilitySource": "Caster",
                          "abilityTarget": "All Hostile Entities (AOE)",
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
                        "name": "Has Flag",
                        "target": "Caster",
                        "flagName": "STAT_CTRL",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Flag",
                        "target": "Caster",
                        "flagName": "DisableAction",
                        "invertCondition": true
                      },
                      {
                        "name": "Living State",
                        "state": "Mask_AliveOnly",
                        "target": "Caster"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "OnInsertAbort_Flg",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Enemies Still Alive",
                        "target": "Caster"
                      },
                      "passed": [
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertUnusedCount",
                            "typeValue": 1
                          },
                          "abilityName": "Tribbie_Insert",
                          "abilitySource": "Caster",
                          "abilityTarget": "All Hostile Entities (AOE)",
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
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Tribbie_PointB3_AddSpAura",
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable with Attack Targets",
                  "target": "Owner of this Modifier",
                  "variableName": "MDF_AttackCount"
                },
                {
                  "name": "Update Energy",
                  "on": "Caster",
                  "value": {
                    "operator": "Variables[0] (MDF_AttackCount) || Variables[1] (MDF_PropertyValue) || MUL || RETURN",
                    "displayLines": "(MDF_AttackCount * MDF_PropertyValue)",
                    "constants": [],
                    "variables": [
                      "MDF_AttackCount",
                      "MDF_PropertyValue"
                    ]
                  },
                  "isFixed": "* ERR"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Tribbie_PointB3_AddSpModifier",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Wave Count",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": "Caster",
                      "value": {
                        "operator": "Variables[0] (30) || RETURN",
                        "displayLines": "30",
                        "constants": [],
                        "variables": [
                          30
                        ]
                      },
                      "isFixed": "* ERR"
                    }
                  ]
                }
              ],
              "priorityLevel": -80
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": "Allied Team(ALL, exclude Owner) [Exclude battle mechanics]",
              "modifier": "Tribbie_PointB3_AddSpAura",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (1.5) || RETURN",
                  "displayLines": "1.5",
                  "constants": [],
                  "variables": [
                    1.5
                  ]
                }
              }
            }
          ]
        }
      ]
    },
    "Tribbie_Tribbie_Ability03_Part02": {
      "fileName": "Tribbie_Tribbie_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Allied Team(ALL) [Exclude Owner and battle mechanics, NO Memosprites]",
          "modifier": "Tribbie_CanTriggerInsertTag[<span class=\"descriptionNumberColor\">Busy as Tribbie</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Tribbie_SKL03_Bonus[<span class=\"descriptionNumberColor\">Guess Who Lives Here</span>]",
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
            },
            "MDF_PropertyValue2": {
              "operator": "Variables[0] (MDF_PursuedDamage) || RETURN",
              "displayLines": "MDF_PursuedDamage",
              "constants": [],
              "variables": [
                "MDF_PursuedDamage"
              ]
            },
            "MDF_PointB2_Value": {
              "operator": "Variables[0] (0.09) || RETURN",
              "displayLines": "0.09",
              "constants": [],
              "variables": [
                0.09
              ]
            }
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": "All Hostile Entities (AOE)",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (0.3) || RETURN",
              "displayLines": "0.3",
              "constants": [],
              "variables": [
                0.3
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "Tags": null,
            "attackType": "Ultimate",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Tribbie_Tribbie_Ability03_Part01": {
      "fileName": "Tribbie_Tribbie_Ability03_Part01",
      "abilityType": "Ultimate",
      "energy": 5,
      "toughnessList": [
        0,
        20,
        0
      ],
      "parse": [
        {
          "name": "Trigger Ability",
          "from": "Caster",
          "ability": "Tribbie_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "Tribbie_Tribbie_Ability03_EnterReady": {
      "fileName": "Tribbie_Tribbie_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Tribbie_Tribbie_Ability02_Part02": {
      "fileName": "Tribbie_Tribbie_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": "Allied Team TARGETS (Left to Right",
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_EffectRandom",
                "compareType": "=",
                "value2": 1
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_EffectRandom",
                "compareType": "=",
                "value2": 2
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_EffectRandom",
                "compareType": "=",
                "value2": 3
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_EffectRandom",
                "compareType": "=",
                "value2": 4
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_EffectRandom",
              "value": {
                "operator": "Variables[0] (MDF_EffectRandom) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(MDF_EffectRandom + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "MDF_EffectRandom"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_EffectRandom",
                "compareType": ">",
                "value2": 4
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_EffectRandom",
                  "value": {
                    "operator": "Variables[0] (MDF_EffectRandom) || Constants[0] (4) || SUB || RETURN",
                    "displayLines": "(MDF_EffectRandom - 4)",
                    "constants": [
                      4
                    ],
                    "variables": [
                      "MDF_EffectRandom"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Tribbie_SKL02_Bonus[<span class=\"descriptionNumberColor\">Numinosity</span>]",
          "duration": {
            "operator": "Variables[0] (3) || RETURN",
            "displayLines": "3",
            "constants": [],
            "variables": [
              3
            ]
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (0.24) || RETURN",
              "displayLines": "0.24",
              "constants": [],
              "variables": [
                0.24
              ]
            }
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Energy_Layer",
          "value": {
            "operator": "Variables[0] (3) || RETURN",
            "displayLines": "3",
            "constants": [],
            "variables": [
              3
            ]
          }
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (Energy_Layer) || RETURN",
            "displayLines": "Energy_Layer",
            "constants": [],
            "variables": [
              "Energy_Layer"
            ]
          },
          "priorState": "Active"
        },
        {
          "name": "Update Energy",
          "on": "Caster",
          "valuePercent": 1,
          "ofAbilitySplit": true,
          "isFixed": "* ERR"
        },
        "Trigger: Ability End",
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_EffectRandom",
          "value": 1
        }
      ],
      "references": []
    },
    "Tribbie_Tribbie_Ability02_Part01": {
      "fileName": "Tribbie_Tribbie_Ability02_Part01",
      "abilityType": "Skill",
      "energy": 30,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": "Caster",
          "ability": "Tribbie_Ability02_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Tribbie_Tribbie_Ability01_Part02": {
      "fileName": "Tribbie_Tribbie_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": "Single Target (Primary)",
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] (0.3) || RETURN",
                  "displayLines": "0.3",
                  "constants": [],
                  "variables": [
                    0.3
                  ]
                },
                "dmgFormula": "Max HP Scaling",
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
              "target": "Blast (Adjacent)",
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] (0.15) || RETURN",
                  "displayLines": "0.15",
                  "constants": [],
                  "variables": [
                    0.15
                  ]
                },
                "dmgFormula": "Max HP Scaling",
                "Toughness": {
                  "operator": "Variables[0] (Blast Toughness Value) || RETURN",
                  "displayLines": "Blast Toughness Value",
                  "constants": [],
                  "variables": [
                    "Blast Toughness Value"
                  ]
                },
                "Tags": null
              }
            },
            "Trigger: Attack End"
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Tribbie_Tribbie_Ability01_Part01": {
      "fileName": "Tribbie_Tribbie_Ability01_Part01",
      "abilityType": "Basic ATK",
      "energy": 20,
      "toughnessList": [
        10,
        0,
        5
      ],
      "parse": [
        {
          "name": "Trigger Ability",
          "from": "Caster",
          "ability": "Tribbie_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "Tribbie_Modifiers": {
      "fileName": "Tribbie_Modifiers",
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
          "for": "Tribbie_CanTriggerInsertTag[<span class=\"descriptionNumberColor\">Busy as Tribbie</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "After using Ultimate, Tribbie can launch Follow-Up ATK.",
          "type": "Other",
          "statusName": "Busy as Tribbie"
        },
        {
          "name": "Modifier Construction",
          "for": "Tribbie_SKL03_Bonus_Debuff[<span class=\"descriptionNumberColor\">Guess Who Lives Here</span>]",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
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
          "description": "Received DMG increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "Vulnerability",
          "statusName": "Guess Who Lives Here"
        },
        {
          "name": "Modifier Construction",
          "for": "Tribbie_SKL03_Bonus_Buff",
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
                        "name": "Has Modifier",
                        "target": "Use Prior Target(s) Defined",
                        "modifier": "Tribbie_SKL03_Bonus_Mark",
                        "invertCondition": true
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": "Use Prior Target(s) Defined",
                        "team": "TeamDark"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Attacked",
                      "value": 1
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "Tribbie_SKL03_Bonus_Mark"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack Start [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Count",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Attacked",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "PERF_CNT",
                  "value": 0
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": "All Enemies(All)",
                  "modifier": "Tribbie_SKL03_Bonus_Mark"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": "All Enemies(All)",
                  "modifier": "Tribbie_SKL03_Bonus_HighestHPMark"
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_Attacked",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Attack Targets",
                      "target": "Owner of this Modifier",
                      "variableName": "MDF_Count"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Eidolon Activated",
                        "eidolon": 2
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_Count",
                          "value": {
                            "operator": "Variables[0] (MDF_Count) || Variables[1] (1) || ADD || RETURN",
                            "displayLines": "(MDF_Count + 1)",
                            "constants": [],
                            "variables": [
                              "MDF_Count",
                              1
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Count",
                      "value": {
                        "operator": "Variables[0] (MDF_Count) || Variables[1] (MDF_ExtraLoopCount) || ADD || RETURN",
                        "displayLines": "(MDF_Count + MDF_ExtraLoopCount)",
                        "constants": [],
                        "variables": [
                          "MDF_Count",
                          "MDF_ExtraLoopCount"
                        ]
                      }
                    },
                    {
                      "name": "Find New Target",
                      "from": [
                        {
                          "name": "Target List",
                          "target": "All Enemies(All)"
                        },
                        {
                          "name": "Target Filter",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": "Use Prior Target(s) Defined",
                            "modifier": "Tribbie_SKL03_Bonus_Mark",
                            "justAddedOrActive": true
                          }
                        },
                        "Shuffle Targets",
                        {
                          "name": "Sort by Stat",
                          "stat": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                          "living": true,
                          "sortByHighest": true
                        },
                        {
                          "name": "Return Target",
                          "value": 1
                        }
                      ],
                      "searchRandom": true,
                      "includeDyingTargets": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Use Prior Target(s) Defined",
                          "modifier": "Tribbie_SKL03_Bonus_HighestHPMark"
                        },
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "PursuedDamage_PerformanceDelay",
                          "target": "Ability Target List"
                        },
                        {
                          "name": "Find New Target",
                          "from": [
                            {
                              "name": "Target List",
                              "target": "All Enemies(All)"
                            },
                            {
                              "name": "Target Filter",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": "Use Prior Target(s) Defined",
                                "modifier": "Tribbie_SKL03_Bonus_Mark",
                                "justAddedOrActive": true
                              }
                            }
                          ],
                          "searchRandom": true,
                          "conditions": {
                            "name": "Has Modifier",
                            "target": "Use Prior Target(s) Defined",
                            "modifier": "Tribbie_SKL03_Bonus_HighestHPMark",
                            "invertCondition": true
                          },
                          "ifTargetFound": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Target",
                                "target": "Use Prior Target(s) Defined",
                                "target2": "Highest HP Target(Tribbie)"
                              },
                              "passed": [
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Eidolon Activated",
                                    "eidolon": 2
                                  },
                                  "passed": [
                                    {
                                      "name": "Shot Fired"
                                    },
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
                                  "name": "Shot Fired"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "name": "Looped Event",
                          "maxLoops": {
                            "operator": "Variables[0] (MDF_Count) || RETURN",
                            "displayLines": "MDF_Count",
                            "constants": [],
                            "variables": [
                              "MDF_Count"
                            ]
                          },
                          "Event": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": "Use Prior Target(s) Defined",
                              "canPhase": true,
                              "AttackScaling": {
                                "DamageType": "Quantum",
                                "Damage": {
                                  "operator": "Variables[0] (MDF_PropertyValue2) || RETURN",
                                  "displayLines": "MDF_PropertyValue2",
                                  "constants": [],
                                  "variables": [
                                    "MDF_PropertyValue2"
                                  ]
                                },
                                "dmgFormula": "Max HP Scaling",
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Additional DMG"
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
          "name": "Modifier Construction",
          "for": "Tribbie_SKL03_Eidolon1Listener",
          "execute": [
            {
              "eventTrigger": "Deal Damage End [Anyone]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": "Use Prior Target(s) Defined",
                        "team": "TeamLight"
                      },
                      {
                        "name": "Is Entity Type",
                        "target": "Use Prior Target(s) Defined",
                        "type": "Battle Event",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Damage Data",
                      "target": "Use Prior Target(s) Defined",
                      "variableName": "MDF_TempDamage",
                      "value": "Result_FinalDamageBase",
                      "context": "ContextCaster"
                    },
                    {
                      "name": "Define Custom Variable",
                      "scope": "ContextCaster",
                      "variableName": "MDF_Rank01ExtraDamage",
                      "value": {
                        "operator": "Variables[0] (MDF_Rank01ExtraDamage) || Variables[1] (MDF_TempDamage) || ADD || RETURN",
                        "displayLines": "(MDF_Rank01ExtraDamage + MDF_TempDamage)",
                        "constants": [],
                        "variables": [
                          "MDF_Rank01ExtraDamage",
                          "MDF_TempDamage"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack Start [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": "Use Prior Target(s) Defined",
                        "team": "TeamLight"
                      },
                      {
                        "name": "Is Entity Type",
                        "target": "Use Prior Target(s) Defined",
                        "type": "Battle Event",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "scope": "ContextCaster",
                      "variableName": "MDF_Rank01ExtraDamage",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "scope": "ContextCaster",
                      "variableName": "MDF_TempDamage",
                      "value": 0
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": "Use Prior Target(s) Defined",
                        "team": "TeamLight"
                      },
                      {
                        "name": "Is Entity Type",
                        "target": "Use Prior Target(s) Defined",
                        "type": "Battle Event",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "scope": "ContextCaster",
                      "variableName": "MDF_Rank01ExtraDamage",
                      "value": {
                        "operator": "Variables[0] (MDF_Rank01ExtraDamage) || Variables[1] (0.24) || MUL || RETURN",
                        "displayLines": "(MDF_Rank01ExtraDamage * 0.24)",
                        "constants": [],
                        "variables": [
                          "MDF_Rank01ExtraDamage",
                          0.24
                        ]
                      }
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": "Highest HP Target(Tribbie)",
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Physical",
                        "Damage": {
                          "operator": "Variables[0] (MDF_Rank01ExtraDamage) || RETURN",
                          "displayLines": "MDF_Rank01ExtraDamage",
                          "constants": [],
                          "variables": [
                            "MDF_Rank01ExtraDamage"
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
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Tribbie_SKL03_Bonus_AttackCount",
          "counter": 1
        },
        {
          "name": "Modifier Construction",
          "for": "Tribbie_SKL03_Bonus_HighestHPMark",
          "stackData": [],
          "latentQueue": [
            "MDF_Attacked",
            "PERF_CNT"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Tribbie_SKL03_Bonus_Mark",
          "stackData": [],
          "latentQueue": [
            "MDF_Attacked"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Tribbie_SKL03_PointB2[<span class=\"descriptionNumberColor\">Glass Ball with Wings!</span>]",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Allied Team(ALL) NO Memosprites",
                  "modifier": "Tribbie_SKL03_PointB2_ListenHPChange"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Allied Team(ALL) NO Memosprites",
                  "modifier": "Tribbie_SKL03_PointB2_ListenHPChange"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_TotalBaseHP",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_MaxHP",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_HPConvert",
                  "value": 0
                },
                {
                  "name": "Find New Target",
                  "from": "Allied Team(ALL)",
                  "conditions": {
                    "name": "Is Entity Type",
                    "target": "Use Prior Target(s) Defined",
                    "type": "Character"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": "Use Prior Target(s) Defined",
                      "variableName": "MDF_MaxHP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": "Use Prior Target(s) Defined",
                      "variableName": "MDF_HPConvert",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPConverted</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_TotalBaseHP",
                      "value": {
                        "operator": "Variables[0] (MDF_TotalBaseHP) || Variables[1] (MDF_MaxHP) || ADD || Variables[2] (MDF_HPConvert) || SUB || RETURN",
                        "displayLines": "((MDF_TotalBaseHP + MDF_MaxHP) - MDF_HPConvert)",
                        "constants": [],
                        "variables": [
                          "MDF_TotalBaseHP",
                          "MDF_MaxHP",
                          "MDF_HPConvert"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PropertyValue",
                  "value": {
                    "operator": "Variables[0] (MDF_TotalBaseHP) || Variables[1] (0.09) || MUL || RETURN",
                    "displayLines": "(MDF_TotalBaseHP * 0.09)",
                    "constants": [],
                    "variables": [
                      "MDF_TotalBaseHP",
                      0.09
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPConverted</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                    "displayLines": "MDF_PropertyValue",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  },
                  "isRefresh": true
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "MDF_PropertyValue",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 1000000000,
                  "includeMaxValueInRange": true,
                  "whenValueChanges": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": "Owner of this Modifier",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPConverted</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                        "displayLines": "MDF_PropertyValue",
                        "constants": [],
                        "variables": [
                          "MDF_PropertyValue"
                        ]
                      },
                      "isRefresh": true
                    }
                  ]
                }
              ]
            }
          ],
          "description": "Max HP increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "Max HP Boost",
          "statusName": "Glass Ball with Wings!"
        },
        {
          "name": "Modifier Construction",
          "for": "Tribbie_SKL03_PointB2_ListenHPChange",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_TotalHPChange",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_MaxHP",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_HPConvert",
                  "value": 0
                },
                {
                  "name": "Find New Target",
                  "from": "Allied Team(ALL) [Exclude battle mechanics and Owner of this Modifier]",
                  "conditions": {
                    "name": "Is Entity Type",
                    "target": "Use Prior Target(s) Defined",
                    "type": "Character"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": "Use Prior Target(s) Defined",
                      "variableName": "MDF_MaxHP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": "Use Prior Target(s) Defined",
                      "variableName": "MDF_HPConvert",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPConverted</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_TotalHPChange",
                      "value": {
                        "operator": "Variables[0] (MDF_TotalHPChange) || Variables[1] (MDF_MaxHP) || ADD || Variables[2] (MDF_HPConvert) || SUB || RETURN",
                        "displayLines": "((MDF_TotalHPChange + MDF_MaxHP) - MDF_HPConvert)",
                        "constants": [],
                        "variables": [
                          "MDF_TotalHPChange",
                          "MDF_MaxHP",
                          "MDF_HPConvert"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PropertyValue",
                  "value": {
                    "operator": "Variables[0] (MDF_TotalHPChange) || Variables[1] (0.09) || MUL || RETURN",
                    "displayLines": "(MDF_TotalHPChange * 0.09)",
                    "constants": [],
                    "variables": [
                      "MDF_TotalHPChange",
                      0.09
                    ]
                  }
                },
                {
                  "name": "Define Modifier-Specific Variable",
                  "target": "Caster",
                  "modifierName": "Tribbie_SKL03_PointB2[<span class=\"descriptionNumberColor\">Glass Ball with Wings!</span>]",
                  "variableName": "MDF_PropertyValue",
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
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">HP%</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 1000000000,
                  "whenValueChanges": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_TotalHPChange",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_MaxHP",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_HPConvert",
                      "value": 0
                    },
                    {
                      "name": "Find New Target",
                      "from": "Allied Team(ALL)",
                      "conditions": {
                        "name": "Is Entity Type",
                        "target": "Use Prior Target(s) Defined",
                        "type": "Character"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Define Custom Variable with Stat",
                          "target": "Use Prior Target(s) Defined",
                          "variableName": "MDF_MaxHP",
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                        },
                        {
                          "name": "Define Custom Variable with Stat",
                          "target": "Use Prior Target(s) Defined",
                          "variableName": "MDF_HPConvert",
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPConverted</span>&nbsp;"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_TotalHPChange",
                          "value": {
                            "operator": "Variables[0] (MDF_TotalHPChange) || Variables[1] (MDF_MaxHP) || ADD || Variables[2] (MDF_HPConvert) || SUB || RETURN",
                            "displayLines": "((MDF_TotalHPChange + MDF_MaxHP) - MDF_HPConvert)",
                            "constants": [],
                            "variables": [
                              "MDF_TotalHPChange",
                              "MDF_MaxHP",
                              "MDF_HPConvert"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_PropertyValue",
                      "value": {
                        "operator": "Variables[0] (MDF_TotalHPChange) || Variables[1] (0.09) || MUL || RETURN",
                        "displayLines": "(MDF_TotalHPChange * 0.09)",
                        "constants": [],
                        "variables": [
                          "MDF_TotalHPChange",
                          0.09
                        ]
                      }
                    },
                    {
                      "name": "Define Modifier-Specific Variable",
                      "target": "Caster",
                      "modifierName": "Tribbie_SKL03_PointB2[<span class=\"descriptionNumberColor\">Glass Ball with Wings!</span>]",
                      "variableName": "MDF_PropertyValue",
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
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">HPFlat</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 1000000000,
                  "whenValueChanges": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_TotalHPChange",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_MaxHP",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_HPConvert",
                      "value": 0
                    },
                    {
                      "name": "Find New Target",
                      "from": "Allied Team(ALL)",
                      "conditions": {
                        "name": "Is Entity Type",
                        "target": "Use Prior Target(s) Defined",
                        "type": "Character"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Define Custom Variable with Stat",
                          "target": "Use Prior Target(s) Defined",
                          "variableName": "MDF_MaxHP",
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                        },
                        {
                          "name": "Define Custom Variable with Stat",
                          "target": "Use Prior Target(s) Defined",
                          "variableName": "MDF_HPConvert",
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPConverted</span>&nbsp;"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_TotalHPChange",
                          "value": {
                            "operator": "Variables[0] (MDF_TotalHPChange) || Variables[1] (MDF_MaxHP) || ADD || Variables[2] (MDF_HPConvert) || SUB || RETURN",
                            "displayLines": "((MDF_TotalHPChange + MDF_MaxHP) - MDF_HPConvert)",
                            "constants": [],
                            "variables": [
                              "MDF_TotalHPChange",
                              "MDF_MaxHP",
                              "MDF_HPConvert"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_PropertyValue",
                      "value": {
                        "operator": "Variables[0] (MDF_TotalHPChange) || Variables[1] (0.09) || MUL || RETURN",
                        "displayLines": "(MDF_TotalHPChange * 0.09)",
                        "constants": [],
                        "variables": [
                          "MDF_TotalHPChange",
                          0.09
                        ]
                      }
                    },
                    {
                      "name": "Define Modifier-Specific Variable",
                      "target": "Caster",
                      "modifierName": "Tribbie_SKL03_PointB2[<span class=\"descriptionNumberColor\">Glass Ball with Wings!</span>]",
                      "variableName": "MDF_PropertyValue",
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
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Tribbie_SKL03_Bonus[<span class=\"descriptionNumberColor\">Guess Who Lives Here</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            }
          ],
          "stackData": [
            "MDF_PropertyValue",
            "MDF_PropertyValue2",
            "MDF_PointB2_Value"
          ],
          "latentQueue": [],
          "description": "While the Zone exists, increases all enemies' DMG taken by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>, and all allies deal Additional DMG when attacking enemies.",
          "type": "Other",
          "effectName": "Guess Who Lives Here",
          "statusName": "Guess Who Lives Here",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": "All Hostile Entities (AOE)(ALL)",
              "modifier": "Tribbie_SKL03_Bonus_Debuff[<span class=\"descriptionNumberColor\">Guess Who Lives Here</span>]",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                  "displayLines": "MDF_PropertyValue",
                  "constants": [],
                  "variables": [
                    "MDF_PropertyValue"
                  ]
                },
                "MDF_PropertyValue2": {
                  "operator": "Variables[0] (MDF_PropertyValue2) || RETURN",
                  "displayLines": "MDF_PropertyValue2",
                  "constants": [],
                  "variables": [
                    "MDF_PropertyValue2"
                  ]
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": "All Team Members(In Context, with Untargetable)",
              "modifier": "Tribbie_SKL03_Bonus_Buff",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_PropertyValue2": {
                  "operator": "Variables[0] (MDF_PropertyValue2) || RETURN",
                  "displayLines": "MDF_PropertyValue2",
                  "constants": [],
                  "variables": [
                    "MDF_PropertyValue2"
                  ]
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": "Caster",
              "modifier": "Tribbie_SKL03_Eidolon1Listener",
              "haloStatus": true,
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 1
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": "Caster",
              "modifier": "Tribbie_SKL03_PointB2[<span class=\"descriptionNumberColor\">Glass Ball with Wings!</span>]",
              "haloStatus": true,
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "Glass Ball with Wings!"
              }
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Tribbie_SKL02_Bonus_Buff[<span class=\"descriptionNumberColor\">Numinosity</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAllPEN</span>&nbsp;",
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
          "description": "All-Type RES PEN increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "All-Type RES PEN Boost",
          "statusName": "Numinosity"
        },
        {
          "name": "Modifier Construction",
          "for": "Tribbie_Eidolon4_Bonus[<span class=\"descriptionNumberColor\">Peace of Empathy Bond</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                      "value": "(0 - MDF_PropertyValue)"
                    }
                  ]
                }
              ]
            }
          ],
          "description": "When dealing DMG, ignores <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> of the enemy target's DEF.",
          "type": "Buff",
          "effectName": "Peace of Empathy Bond",
          "statusName": "Peace of Empathy Bond"
        },
        {
          "name": "Modifier Construction",
          "for": "Tribbie_SKL02_Bonus[<span class=\"descriptionNumberColor\">Numinosity</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAllPEN</span>&nbsp;",
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
          "description": "All-Type RES PEN increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "All-Type RES PEN Boost",
          "statusName": "Numinosity",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": "Allied Team(ALL) [Exclude Owner]",
              "modifier": "Tribbie_SKL02_Bonus_Buff[<span class=\"descriptionNumberColor\">Numinosity</span>]",
              "haloStatus": true,
              "includeBattleEvent": true,
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                  "displayLines": "MDF_PropertyValue",
                  "constants": [],
                  "variables": [
                    "MDF_PropertyValue"
                  ]
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": "Allied Team(ALL)",
              "modifier": "Tribbie_Eidolon4_Bonus[<span class=\"descriptionNumberColor\">Peace of Empathy Bond</span>]",
              "haloStatus": true,
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 4
              },
              "includeBattleEvent": true,
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.18) || RETURN",
                  "displayLines": "0.18",
                  "constants": [],
                  "variables": [
                    0.18
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Tribbie_PointB1_DamageUpModifier[<span class=\"descriptionNumberColor\">Lamb Outside the Wall...</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": "Owner of this Modifier",
                  "valueType": "Layer",
                  "variableName": "_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PropertyValue",
                  "value": {
                    "operator": "Variables[0] (_Layer) || Variables[1] (0.72) || MUL || RETURN",
                    "displayLines": "(_Layer * 0.72)",
                    "constants": [],
                    "variables": [
                      "_Layer",
                      0.72
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
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
          "stackData": [],
          "latentQueue": [
            "OnInsertAbort_Flg"
          ],
          "description": "Each stack increases DMG dealt by <span class=\"descriptionNumberColor\">#SkillTree_PointB1_P1_Ratio</span>. This effect stacks up to <span class=\"descriptionNumberColor\">#SkillTree_PointB1_P2_MaxLayer</span> time(s).",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "Lamb Outside the Wall...",
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "Tribbie_Eidolon6_Bonus_Active",
          "stackType": "ReplaceByCaster",
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
          "for": "Tribbie_Eidolon6_Bonus[<span class=\"descriptionNumberColor\">Morrow of Star Shine</span>]",
          "stackType": "ReplaceByCaster",
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": [],
          "description": "The DMG dealt by Talent's Follow-Up ATK increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "statusName": "Morrow of Star Shine"
        }
      ],
      "references": []
    }
  }
}