const compositeAbilityObject = {
  "fullCharacterName": "Moze",
  "trimCharacterName": "Moze",
  "abilityList": [
    "Moze_Moze_TechniqueInLevel",
    "Moze_Moze_Insert_Part01_Eidolon6Extra",
    "Moze_Moze_Insert_Part01",
    "Moze_Moze_PassiveAbility01",
    "Moze_Moze_Ability03_Part02",
    "Moze_Moze_Ability03_Part01",
    "Moze_Moze_Ability03_EnterReady",
    "Moze_Moze_Ability02_Part02",
    "Moze_Moze_Ability02_Part01",
    "Moze_Moze_Ability01_Part02",
    "Moze_Moze_Ability01_Part01",
    "Moze_Modifiers"
  ],
  "abilityObject": {
    "Moze_Moze_TechniqueInLevel": {
      "fileName": "Moze_Moze_TechniqueInLevel",
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
          "modifier": "Moze_TechniqueUsage"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Moze_TechniqueUsage_DamageUpModifier[<span class=\"descriptionNumberColor\">Bated Wings</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
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
          "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "Bated Wings",
          "duration": 1
        },
        {
          "name": "Modifier Construction",
          "for": "Moze_TechniqueUsage",
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
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "Moze_TechniqueUsage_DamageUpModifier[<span class=\"descriptionNumberColor\">Bated Wings</span>]",
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
    "Moze_Moze_Insert_Part01_Eidolon6Extra": {
      "fileName": "Moze_Moze_Insert_Part01_Eidolon6Extra",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Moze_InInsert_Tag"
        },
        {
          "name": "UI Display Event",
          "popUpText": "Cascading Featherblade"
        },
        "Deleted bullshit",
        {
          "name": "Trigger Multiple Functions",
          "functionList": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Moze_Insert_Part01_Effect"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "Moze_Insert_Part01_LoopDamage",
              "baseDelay": {
                "operator": "Variables[0] (MOZE_OBJECT_UNUSED_2) || RETURN",
                "displayLines": "MOZE_OBJECT_UNUSED_2",
                "constants": [],
                "variables": [
                  "MOZE_OBJECT_UNUSED_2"
                ]
              },
              "delayInterval": {
                "operator": "Variables[0] (MOZE_OBJECT_UNUSED_2) || RETURN",
                "displayLines": "MOZE_OBJECT_UNUSED_2",
                "constants": [],
                "variables": [
                  "MOZE_OBJECT_UNUSED_2"
                ]
              },
              "parallelCount": {
                "operator": "Variables[0] (MOZE_OBJECT_UNUSED_1) || RETURN",
                "displayLines": "MOZE_OBJECT_UNUSED_1",
                "constants": [],
                "variables": [
                  "MOZE_OBJECT_UNUSED_1"
                ]
              }
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] (MDF_InsertDamagePercentage) || RETURN",
              "displayLines": "MDF_InsertDamagePercentage",
              "constants": [],
              "variables": [
                "MDF_InsertDamagePercentage"
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
            "name": "Trace Activated",
            "conditionList": "Nightfeather"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": "Caster",
                "modifier": "Moze_Point01_CD[<span class=\"descriptionNumberColor\">Nightfeather</span>]",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "Moze_Point01_CD[<span class=\"descriptionNumberColor\">Nightfeather</span>]",
                  "duration": {
                    "operator": "Variables[0] (1) || RETURN",
                    "displayLines": "1",
                    "constants": [],
                    "variables": [
                      1
                    ]
                  }
                },
                {
                  "name": "Skill Points Modification",
                  "adjustmentValue": {
                    "operator": "Variables[0] (1) || RETURN",
                    "displayLines": "1",
                    "constants": [],
                    "variables": [
                      1
                    ]
                  },
                  "adjustmentType": "+"
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": "Caster",
            "modifier": "Moze_Ability02_InShadowModifier",
            "invertCondition": true
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": "Caster",
          "modifier": "Moze_InInsert_Tag"
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
                  "name": "Find New Target",
                  "from": "All Enemies (AOE)",
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Living State",
                    "state": "Mask_AliveOnly",
                    "target": "Use Prior Target(s) Defined"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "Moze_Insert_Part01_Eidolon6Extra",
                      "abilitySource": "Caster",
                      "abilityTarget": "Use Prior Target(s) Defined",
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
              "name": "Define Custom Variable",
              "variableName": "OnInsertAbort_Flg",
              "value": 0
            }
          ]
        }
      ],
      "functions": [
        {
          "name": "CharacterFunctions",
          "functionName": "Moze_Insert_Part01_LoopDamage",
          "parse": [
            {
              "name": "ATK Scaling DMG",
              "target": "Single Target (Primary)",
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] (MDF_InsertDamagePercentage) || RETURN",
                  "displayLines": "MDF_InsertDamagePercentage",
                  "constants": [],
                  "variables": [
                    "MDF_InsertDamagePercentage"
                  ]
                },
                "HitSplit": 0.08,
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || RETURN",
                  "displayLines": "ST Toughness Value",
                  "constants": [],
                  "variables": [
                    "ST Toughness Value"
                  ]
                },
                "Tags": null,
                "attackType": "Follow-up",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Moze_Insert_Part01_Effect",
          "parse": []
        }
      ],
      "references": []
    },
    "Moze_Moze_Insert_Part01": {
      "fileName": "Moze_Moze_Insert_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Moze_InInsert_Tag"
        },
        {
          "name": "UI Display Event",
          "popUpText": "Cascading Featherblade"
        },
        "Deleted bullshit",
        {
          "name": "Trigger Multiple Functions",
          "functionList": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Moze_Insert_Part01_Effect"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "Moze_Insert_Part01_LoopDamage",
              "baseDelay": {
                "operator": "Variables[0] (MOZE_OBJECT_UNUSED_2) || RETURN",
                "displayLines": "MOZE_OBJECT_UNUSED_2",
                "constants": [],
                "variables": [
                  "MOZE_OBJECT_UNUSED_2"
                ]
              },
              "delayInterval": {
                "operator": "Variables[0] (MOZE_OBJECT_UNUSED_2) || RETURN",
                "displayLines": "MOZE_OBJECT_UNUSED_2",
                "constants": [],
                "variables": [
                  "MOZE_OBJECT_UNUSED_2"
                ]
              },
              "parallelCount": {
                "operator": "Variables[0] (MOZE_OBJECT_UNUSED_1) || RETURN",
                "displayLines": "MOZE_OBJECT_UNUSED_1",
                "constants": [],
                "variables": [
                  "MOZE_OBJECT_UNUSED_1"
                ]
              }
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] (MDF_InsertDamagePercentage) || RETURN",
              "displayLines": "MDF_InsertDamagePercentage",
              "constants": [],
              "variables": [
                "MDF_InsertDamagePercentage"
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
            "Tags": null,
            "attackType": "Follow-up",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_EnergyCost",
          "value": {
            "operator": "Variables[0] (MDF_EnergyCost) || Variables[1] (3) || SUB || RETURN",
            "displayLines": "(MDF_EnergyCost - 3)",
            "constants": [],
            "variables": [
              "MDF_EnergyCost",
              3
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "MDF_SkillP01_CurrentCount",
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": "Single Target (Primary)",
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] (0.3) || RETURN",
                  "displayLines": "0.3",
                  "constants": [],
                  "variables": [
                    0.3
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Additional DMG"
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "MDF_SkillP01_CurrentCount",
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": "Caster",
              "modifier": "Moze_Ability02_InShadowModifier"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": "Single Target (Primary)",
              "modifier": "Moze_Ability02_ShadowTargetModifier[<span class=\"descriptionNumberColor\">Prey</span>]"
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Nightfeather"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": "Caster",
                "modifier": "Moze_Point01_CD[<span class=\"descriptionNumberColor\">Nightfeather</span>]",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "Moze_Point01_CD[<span class=\"descriptionNumberColor\">Nightfeather</span>]",
                  "duration": {
                    "operator": "Variables[0] (1) || RETURN",
                    "displayLines": "1",
                    "constants": [],
                    "variables": [
                      1
                    ]
                  }
                },
                {
                  "name": "Skill Points Modification",
                  "adjustmentValue": {
                    "operator": "Variables[0] (1) || RETURN",
                    "displayLines": "1",
                    "constants": [],
                    "variables": [
                      1
                    ]
                  },
                  "adjustmentType": "+"
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "MDF_SkillP01_CurrentCount",
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 1
              },
              "passed": [
                {
                  "name": "Update Energy",
                  "on": "Caster",
                  "value": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "isFixed": "* ERR"
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": "Caster",
            "modifier": "Moze_Ability02_InShadowModifier"
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": "Caster",
          "modifier": "Moze_InInsert_Tag"
        },
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
                "value1": "MDF_EnergyCost",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (3) || RETURN",
                  "displayLines": "3",
                  "constants": [],
                  "variables": [
                    3
                  ]
                }
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
              "abilityName": "Moze_Insert_Part01",
              "abilitySource": "Caster",
              "abilityTarget": "Single Target (Primary)",
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
      ],
      "functions": [
        {
          "name": "CharacterFunctions",
          "functionName": "Moze_Insert_Part01_LoopDamage",
          "parse": [
            {
              "name": "ATK Scaling DMG",
              "target": "Single Target (Primary)",
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] (MDF_InsertDamagePercentage) || RETURN",
                  "displayLines": "MDF_InsertDamagePercentage",
                  "constants": [],
                  "variables": [
                    "MDF_InsertDamagePercentage"
                  ]
                },
                "HitSplit": 0.08,
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || RETURN",
                  "displayLines": "ST Toughness Value",
                  "constants": [],
                  "variables": [
                    "ST Toughness Value"
                  ]
                },
                "Tags": null,
                "attackType": "Follow-up",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Moze_Insert_Part01_Effect",
          "parse": []
        }
      ],
      "references": []
    },
    "Moze_Moze_PassiveAbility01": {
      "fileName": "Moze_Moze_PassiveAbility01",
      "abilityType": "Talent",
      "energy": 10,
      "toughnessList": [
        10,
        0,
        0
      ],
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_MaxEnergy",
          "value": {
            "operator": "Variables[0] (9) || RETURN",
            "displayLines": "9",
            "constants": [],
            "variables": [
              9
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_SkillP01_CurrentCount",
          "value": 0
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Moze_ListenUnstageModifier"
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
              "variableName": "MDF_InsertDamagePercentage",
              "value": {
                "operator": "Variables[0] (1.6) || Variables[1] (0.25) || ADD || RETURN",
                "displayLines": "(1.6 + 0.25)",
                "constants": [],
                "variables": [
                  1.6,
                  0.25
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_InsertDamagePercentage",
              "value": {
                "operator": "Variables[0] (1.6) || RETURN",
                "displayLines": "1.6",
                "constants": [],
                "variables": [
                  1.6
                ]
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Vengewise"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "Moze_Eidolon1_PreChangeUltraToInsertModifier"
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
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "Moze_Eidolon1_AddSPModifier"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Moze_PassiveModifier"
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": 0,
          "maximum": {
            "operator": "Variables[0] (MDF_MaxEnergy) || RETURN",
            "displayLines": "MDF_MaxEnergy",
            "constants": [],
            "variables": [
              "MDF_MaxEnergy"
            ]
          },
          "assignState": "True",
          "priorState": "Disable",
          "bar#": 2
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Moze_OnlyMozeOnStageModifier",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "All Enemies (AOE)",
                  "modifier": "Moze_Ability02_ShadowTargetModifier[<span class=\"descriptionNumberColor\">Prey</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Caster",
                  "modifier": "Moze_Ability02_InShadowModifier"
                },
                {
                  "name": "Disable Abilities",
                  "target": "Owner of this Modifier",
                  "abilityTypes": [
                    "Skill"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Moze_ListenUnstageModifier",
          "execute": [
            {
              "eventTrigger": "Action Choice Window [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_OnStageMember",
                  "value": 0
                },
                {
                  "name": "Find New Target",
                  "from": "Allied Team",
                  "searchRandom": true,
                  "includeDyingTargets": true,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Character ID",
                        "ID": 1223,
                        "target": "Use Prior Target(s) Defined",
                        "characterName": "Moze",
                        "invertCondition": true
                      },
                      {
                        "name": "Is Entity Type",
                        "target": "Use Prior Target(s) Defined",
                        "type": "Character"
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_OnStageMember",
                      "value": {
                        "operator": "Variables[0] (MDF_OnStageMember) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(MDF_OnStageMember + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "MDF_OnStageMember"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_OnStageMember",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "Moze_OnlyMozeOnStageModifier"
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": "Owner of this Modifier",
                        "modifier": "Monster_W3_Aventurine_Gambling",
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": "Owner of this Modifier",
                          "modifier": "Moze_OnlyMozeOnStageModifier"
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
                  "name": "Define Custom Variable",
                  "variableName": "MDF_OnStageMember",
                  "value": 0
                },
                {
                  "name": "Find New Target",
                  "from": "Allied Team",
                  "searchRandom": true,
                  "includeDyingTargets": true,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Character ID",
                        "ID": 1223,
                        "target": "Use Prior Target(s) Defined",
                        "characterName": "Moze",
                        "invertCondition": true
                      },
                      {
                        "name": "Is Entity Type",
                        "target": "Use Prior Target(s) Defined",
                        "type": "Character"
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_OnStageMember",
                      "value": {
                        "operator": "Variables[0] (MDF_OnStageMember) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(MDF_OnStageMember + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "MDF_OnStageMember"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_OnStageMember",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "Moze_OnlyMozeOnStageModifier"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_OnStageMember",
                  "value": 0
                },
                {
                  "name": "Find New Target",
                  "from": "Allied Team",
                  "searchRandom": true,
                  "includeDyingTargets": true,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Character ID",
                        "ID": 1223,
                        "target": "Use Prior Target(s) Defined",
                        "characterName": "Moze",
                        "invertCondition": true
                      },
                      {
                        "name": "Is Entity Type",
                        "target": "Use Prior Target(s) Defined",
                        "type": "Character"
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_OnStageMember",
                      "value": {
                        "operator": "Variables[0] (MDF_OnStageMember) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(MDF_OnStageMember + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "MDF_OnStageMember"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_OnStageMember",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "Moze_OnlyMozeOnStageModifier"
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_DisableListener",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": "Owner of this Modifier",
                          "modifier": "Moze_OnlyMozeOnStageModifier"
                        }
                      ]
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
                    "modifier": "Monster_W3_Aventurine_Gambling"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DisableListener",
                      "value": 1
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "Moze_OnlyMozeOnStageModifier"
                    }
                  ]
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
                    "modifier": "Monster_W3_Aventurine_Gambling"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_OnStageMember",
                      "value": 0
                    },
                    {
                      "name": "Find New Target",
                      "from": "Allied Team",
                      "searchRandom": true,
                      "includeDyingTargets": true,
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Character ID",
                            "ID": 1223,
                            "target": "Use Prior Target(s) Defined",
                            "characterName": "Moze",
                            "invertCondition": true
                          },
                          {
                            "name": "Is Entity Type",
                            "target": "Use Prior Target(s) Defined",
                            "type": "Character"
                          }
                        ]
                      },
                      "ifTargetFound": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_OnStageMember",
                          "value": {
                            "operator": "Variables[0] (MDF_OnStageMember) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(MDF_OnStageMember + 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "MDF_OnStageMember"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_OnStageMember",
                        "compareType": "=",
                        "value2": 0
                      },
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_DisableListener",
                          "value": 0
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": "Owner of this Modifier",
                          "modifier": "Moze_OnlyMozeOnStageModifier"
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
                  "name": "Define Custom Variable",
                  "variableName": "MDF_OnStageMember",
                  "value": 0
                },
                {
                  "name": "Find New Target",
                  "from": "Allied Team",
                  "searchRandom": true,
                  "includeDyingTargets": true,
                  "conditions": {
                    "name": "Character ID",
                    "ID": 1223,
                    "target": "Use Prior Target(s) Defined",
                    "characterName": "Moze",
                    "invertCondition": true
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_OnStageMember",
                      "value": {
                        "operator": "Variables[0] (MDF_OnStageMember) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(MDF_OnStageMember + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "MDF_OnStageMember"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_OnStageMember",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "Moze_OnlyMozeOnStageModifier"
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_DisableListener",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": "Owner of this Modifier",
                          "modifier": "Moze_OnlyMozeOnStageModifier"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: Aborted",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_OnStageMember",
                  "value": 0
                },
                {
                  "name": "Find New Target",
                  "from": "Allied Team",
                  "searchRandom": true,
                  "includeDyingTargets": true,
                  "conditions": {
                    "name": "Character ID",
                    "ID": 1223,
                    "target": "Use Prior Target(s) Defined",
                    "characterName": "Moze",
                    "invertCondition": true
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_OnStageMember",
                      "value": {
                        "operator": "Variables[0] (MDF_OnStageMember) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(MDF_OnStageMember + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "MDF_OnStageMember"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_OnStageMember",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "Moze_OnlyMozeOnStageModifier"
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_DisableListener",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": "Owner of this Modifier",
                          "modifier": "Moze_OnlyMozeOnStageModifier"
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
          "for": "Moze_PassiveModifier",
          "modifierFlags": [
            "CustomEvent_InfiniteRefresh"
          ],
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]"
            },
            {
              "eventTrigger": "Action Phase Start [Owner][?]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_ActionEnd",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Action Choice Window [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable with Team Count",
                  "target": "Allied Team",
                  "variableName": "MDF_ActivePlayer",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Target is Unselectable",
                        "target": "Use Prior Target(s) Defined",
                        "invertCondition": true
                      },
                      {
                        "name": "Is Entity a Battle Event/Summon",
                        "target": "Use Prior Target(s) Defined",
                        "invertCondition": true
                      }
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Action End [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_ActionEnd",
                  "value": 1
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
                    "target": "Use Prior Target(s) Defined",
                    "modifier": "Moze_Ability02_ShadowTargetModifier[<span class=\"descriptionNumberColor\">Prey</span>]"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Caster",
                      "modifier": "Moze_Ability02_InShadowModifier"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "Moze_Ability02_ShadowTargetModifier[<span class=\"descriptionNumberColor\">Prey</span>]"
                    }
                  ]
                },
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
                        "name": "Target is Unselectable",
                        "target": "Use Prior Target(s) Defined",
                        "invertCondition": true
                      },
                      {
                        "name": "Is Entity a Battle Event/Summon",
                        "target": "Use Prior Target(s) Defined",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_ActivePlayer",
                      "value": {
                        "operator": "Variables[0] (MDF_ActivePlayer) || Constants[0] (1) || SUB || RETURN",
                        "displayLines": "(MDF_ActivePlayer - 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "MDF_ActivePlayer"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_ActivePlayer",
                        "compareType": "<=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": "All Enemies (AOE)",
                          "modifier": "Moze_Ability02_ShadowTargetModifier[<span class=\"descriptionNumberColor\">Prey</span>]"
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": "Caster",
                          "modifier": "Moze_Ability02_InShadowModifier"
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
                    "name": "Trace Activated",
                    "conditionList": "Daggerhold"
                  },
                  "passed": [
                    {
                      "name": "Action Advance/Delay",
                      "target": "Caster",
                      "advanceType": "Advance",
                      "value": "-0.3"
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
                          "name": "Find New Target",
                          "from": "All Enemies (AOE)",
                          "searchRandom": true,
                          "maxTargets": 1,
                          "conditions": {
                            "name": "Living State",
                            "state": "Mask_AliveOnly",
                            "target": "Use Prior Target(s) Defined"
                          },
                          "ifTargetFound": [
                            {
                              "name": "Inject Ability Use",
                              "condition": {
                                "name": "Insert Ability Condition",
                                "type": "AbilityOwnerInsertUnusedCount",
                                "typeValue": 1
                              },
                              "abilityName": "Moze_Insert_Part01_Eidolon6Extra",
                              "abilitySource": "Caster",
                              "abilityTarget": "Use Prior Target(s) Defined",
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
              "eventTrigger": "When Losing Modifier [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "Moze_Ability02_InShadowModifier"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": "Use Prior Target(s) Defined",
                      "variableName": "MDF_BaseSpeed",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": "Use Prior Target(s) Defined",
                      "variableName": "MDF_SpeedDelta",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Daggerhold"
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Compare: Target",
                                "target": "Current Turn Owner",
                                "target2": "Caster"
                              },
                              {
                                "name": "Compare: Variable",
                                "value1": "MDF_ActionEnd",
                                "compareType": "=",
                                "value2": 1,
                                "invertCondition": true
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Assign Advance/Delay to Current Ability Use",
                              "adjustmentValue": {
                                "operator": "Variables[0] (0.2) || INVERT || RETURN",
                                "displayLines": "-0.2",
                                "constants": [],
                                "variables": [
                                  0.2
                                ]
                              },
                              "adjustmentType": "Advance"
                            }
                          ],
                          "failed": [
                            {
                              "name": "Action Advance/Delay",
                              "target": "Use Prior Target(s) Defined",
                              "advanceType": "Advance",
                              "value": "-0.2"
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
                        "target": "Caster",
                        "includeNonTargets": true
                      },
                      "passed": [
                        {
                          "name": "Find New Target",
                          "from": "All Enemies (AOE)",
                          "searchRandom": true,
                          "maxTargets": 1,
                          "conditions": {
                            "name": "Living State",
                            "state": "Mask_AliveOnly",
                            "target": "Use Prior Target(s) Defined"
                          },
                          "ifTargetFound": [
                            {
                              "name": "Inject Ability Use",
                              "condition": {
                                "name": "Insert Ability Condition",
                                "type": "AbilityOwnerInsertUnusedCount",
                                "typeValue": 1
                              },
                              "abilityName": "Moze_Insert_Part01_Eidolon6Extra",
                              "abilitySource": "Caster",
                              "abilityTarget": "Use Prior Target(s) Defined",
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
                  "name": "Define Custom Variable",
                  "variableName": "OnInsertAbort_Flg",
                  "value": 0
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Caster",
                  "modifier": "Moze_Ability02_InShadowModifier"
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
                        "target": "Caster",
                        "includeNonTargets": true
                      },
                      "passed": [
                        {
                          "name": "Find New Target",
                          "from": "All Enemies (AOE)",
                          "searchRandom": true,
                          "maxTargets": 1,
                          "conditions": {
                            "name": "Living State",
                            "state": "Mask_AliveOnly",
                            "target": "Use Prior Target(s) Defined"
                          },
                          "ifTargetFound": [
                            {
                              "name": "Inject Ability Use",
                              "condition": {
                                "name": "Insert Ability Condition",
                                "type": "AbilityOwnerInsertUnusedCount",
                                "typeValue": 1
                              },
                              "abilityName": "Moze_Insert_Part01_Eidolon6Extra",
                              "abilitySource": "Caster",
                              "abilityTarget": "Use Prior Target(s) Defined",
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
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Moze_Eidolon1_ChangeUltraToInsertModifier",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Attack-Type Extension",
                  "target": "Owner of this Modifier",
                  "typeToExtend": "Ultimate",
                  "isRemove": true
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Attack-Type Extension",
                  "target": "Owner of this Modifier",
                  "typeToExtend": "Ultimate",
                  "extendTypeTo": "Follow-up"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Moze_Eidolon1_PreChangeUltraToInsertModifier",
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Moze_Eidolon1_ChangeUltraToInsertModifier"
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "Moze_Eidolon1_ChangeUltraToInsertModifier"
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
          "for": "Moze_Eidolon1_AddSPModifier",
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
                        "operator": "Variables[0] (20) || RETURN",
                        "displayLines": "20",
                        "constants": [],
                        "variables": [
                          20
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
          "latentQueue": []
        }
      ]
    },
    "Moze_Moze_Ability03_Part02": {
      "fileName": "Moze_Moze_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 4
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "Moze_Ability03_DamageAddModifier[<span class=\"descriptionNumberColor\">Heathprowler</span>]",
              "duration": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "valuePerStack": {
                "MDF_DamageAddRatio": {
                  "operator": "Variables[0] (0.3) || RETURN",
                  "displayLines": "0.3",
                  "constants": [],
                  "variables": [
                    0.3
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] (2.7) || RETURN",
              "displayLines": "2.7",
              "constants": [],
              "variables": [
                2.7
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
        {
          "name": "IF",
          "conditions": {
            "name": "Living State",
            "state": "Mask_AliveOnly",
            "target": "Single Target (Primary)"
          },
          "passed": [
            {
              "name": "Inject Ability Use",
              "condition": {
                "name": "Insert Ability Condition",
                "type": "AbilityOwnerInsertUnusedCount",
                "typeValue": 1
              },
              "abilityName": "Moze_Insert_Part01_Eidolon6Extra",
              "abilitySource": "Caster",
              "abilityTarget": "Single Target (Primary)",
              "priorityTag": "AvatarInsertAttackSelf",
              "canHitNonTargets": true,
              "showInActionOrder": true,
              "abortFlags": [
                "STAT_CTRL",
                "DisableAction"
              ],
              "allowAbilityTriggers": false
            }
          ],
          "failed": [
            {
              "name": "Find New Target",
              "from": "All Enemies (AOE)",
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Living State",
                "state": "Mask_AliveOnly",
                "target": "Use Prior Target(s) Defined"
              },
              "ifTargetFound": [
                {
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertUnusedCount",
                    "typeValue": 1
                  },
                  "abilityName": "Moze_Insert_Part01_Eidolon6Extra",
                  "abilitySource": "Caster",
                  "abilityTarget": "Use Prior Target(s) Defined",
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
          "name": "Find New Target",
          "from": "All Enemies (AOE)",
          "searchRandom": true,
          "includeDyingTargets": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": "Use Prior Target(s) Defined",
            "modifier": "Moze_Ability02_ShadowTargetModifier[<span class=\"descriptionNumberColor\">Prey</span>]"
          }
        },
        "Trigger: Skip Death Handling",
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Moze_Ability03_DamageAddModifier[<span class=\"descriptionNumberColor\">Heathprowler</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_DamageAddRatio) || RETURN",
                    "displayLines": "MDF_DamageAddRatio",
                    "constants": [],
                    "variables": [
                      "MDF_DamageAddRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_DamageAddRatio"
          ],
          "latentQueue": [],
          "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_DamageAddRatio</span>.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "Heathprowler"
        },
        {
          "name": "Modifier Construction",
          "for": "M_Moze_Ultimate_AddRegardAsAttackType",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Attack-Type Extension",
                  "target": "Owner of this Modifier",
                  "typeToExtend": "Ultimate",
                  "isRemove": true
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Attack-Type Extension",
                  "target": "Owner of this Modifier",
                  "typeToExtend": "Ultimate",
                  "extendTypeTo": "Follow-up"
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Anyone]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "M_Moze_Ultimate_AddRegardAsAttackType"
                }
              ]
            }
          ],
          "duration": 1
        }
      ]
    },
    "Moze_Moze_Ability03_Part01": {
      "fileName": "Moze_Moze_Ability03_Part01",
      "abilityType": "Ultimate",
      "energy": 5,
      "toughnessList": [
        30,
        0,
        0
      ],
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "OnInsertAbort_Flg",
          "value": 1
        },
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": "Caster",
          "ability": "Moze_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Moze_Moze_Ability03_EnterReady": {
      "fileName": "Moze_Moze_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": "Caster",
            "modifier": "Moze_Ability02_InShadowModifier"
          }
        }
      ],
      "references": []
    },
    "Moze_Moze_Ability02_Part02": {
      "fileName": "Moze_Moze_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Single Target (Primary)",
          "modifier": "Moze_Ability02_ShadowTargetModifier[<span class=\"descriptionNumberColor\">Prey</span>]"
        },
        {
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] (1.5) || RETURN",
              "displayLines": "1.5",
              "constants": [],
              "variables": [
                1.5
              ]
            },
            "HitSplit": 0.15,
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
          "target": "Single Target (Primary)",
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] (1.5) || RETURN",
              "displayLines": "1.5",
              "constants": [],
              "variables": [
                1.5
              ]
            },
            "HitSplit": 0.15,
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
          "target": "Single Target (Primary)",
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] (1.5) || RETURN",
              "displayLines": "1.5",
              "constants": [],
              "variables": [
                1.5
              ]
            },
            "HitSplit": 0.7,
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
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Living State",
                "state": "Mask_AliveOrRevivable",
                "target": "Single Target (Primary)"
              },
              {
                "name": "Target is Unselectable",
                "target": "Single Target (Primary)",
                "invertCondition": true
              }
            ]
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "Moze_Ability02_InShadowModifier"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Living State",
            "state": "Mask_AliveOnly",
            "target": "Single Target (Primary)",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_EnergyCost",
              "value": 0
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Moze_Moze_Ability02_Part01": {
      "fileName": "Moze_Moze_Ability02_Part01",
      "abilityType": "Skill",
      "energy": 30,
      "toughnessList": [
        20,
        0,
        0
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": "Caster",
          "ability": "Moze_Ability02_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Moze_Moze_Ability01_Part02": {
      "fileName": "Moze_Moze_Ability01_Part02",
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
                "DamageType": "Thunder",
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
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Moze_Moze_Ability01_Part01": {
      "fileName": "Moze_Moze_Ability01_Part01",
      "abilityType": "Basic ATK",
      "energy": 20,
      "toughnessList": [
        10,
        0,
        0
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": "Caster",
          "ability": "Moze_Ability01_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Moze_Modifiers": {
      "fileName": "Moze_Modifiers",
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
          "for": "Moze_Ability02_InShadowModifier",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "Stealth"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_SkillP01_CurrentCount",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_EnergyCost",
                  "value": 0
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (MDF_SkillP01_CurrentCount) || RETURN",
                    "displayLines": "MDF_SkillP01_CurrentCount",
                    "constants": [],
                    "variables": [
                      "MDF_SkillP01_CurrentCount"
                    ]
                  },
                  "maximum": {
                    "operator": "Variables[0] (MDF_MaxEnergy) || RETURN",
                    "displayLines": "MDF_MaxEnergy",
                    "constants": [],
                    "variables": [
                      "MDF_MaxEnergy"
                    ]
                  },
                  "assignState": "True",
                  "priorState": "Disable",
                  "bar#": 2
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                "Assign DEPARTED(Modifier: Standard_Departed)",
                {
                  "name": "Disable Abilities",
                  "target": "Owner of this Modifier",
                  "abilityTypes": [
                    "Basic ATK",
                    "Skill"
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_SkillP01_CurrentCount",
                  "value": {
                    "operator": "Variables[0] (MDF_MaxEnergy) || RETURN",
                    "displayLines": "MDF_MaxEnergy",
                    "constants": [],
                    "variables": [
                      "MDF_MaxEnergy"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_EnergyCost",
                  "value": 0
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (MDF_SkillP01_CurrentCount) || RETURN",
                    "displayLines": "MDF_SkillP01_CurrentCount",
                    "constants": [],
                    "variables": [
                      "MDF_SkillP01_CurrentCount"
                    ]
                  },
                  "maximum": {
                    "operator": "Variables[0] (MDF_MaxEnergy) || RETURN",
                    "displayLines": "MDF_MaxEnergy",
                    "constants": [],
                    "variables": [
                      "MDF_MaxEnergy"
                    ]
                  },
                  "assignState": "True",
                  "priorState": "Normal",
                  "bar#": 2
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Moze_InInsert_Tag",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Moze_Eidolon1_DeBonus[<span class=\"descriptionNumberColor\">Vengewise</span>]",
          "modifierFlags": [
            "BlockInfect"
          ],
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Follow-up"
                    ],
                    "target": "Use Prior Target(s) Defined"
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "on": "Defender",
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
              ]
            }
          ],
          "description": "Follow-Up ATK DMG taken increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "Follow-Up ATK DMG Vulnerability",
          "statusName": "Vengewise"
        },
        {
          "name": "Modifier Construction",
          "for": "Moze_Point01_CD[<span class=\"descriptionNumberColor\">Nightfeather</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "stackData": [],
          "latentQueue": [],
          "description": "The Trace \"Nightfeather\" effect's auto-trigger is still on cooldown.",
          "type": "Other",
          "statusName": "Nightfeather"
        },
        {
          "name": "Modifier Construction",
          "for": "Moze_Ability02_ShadowTargetModifier[<span class=\"descriptionNumberColor\">Prey</span>]",
          "modifierFlags": [
            "KeepOnDeathrattle",
            "BlockInfect",
            "RemoveWhenOwnerUnstage"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Moze_Eidolon1_DeBonus[<span class=\"descriptionNumberColor\">Vengewise</span>]"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": "Owner of this Modifier",
                    "value1": "CurrentHP",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Caster",
                      "modifier": "Moze_Ability02_InShadowModifier"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": "Owner of this Modifier",
                    "flagName": "Deathrattle",
                    "invertCondition": true
                  }
                },
                {
                  "name": "Toggle Skill Mark"
                }
              ]
            },
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_SkillP01_CurrentCount",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Caster",
                      "modifier": "Moze_Ability02_InShadowModifier"
                    },
                    "Modifier Deletes Itself"
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
                    "name": "Eidolon Activated",
                    "eidolon": 2
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageSUM</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (MDF_TotalDamage) || RETURN",
                        "displayLines": "MDF_TotalDamage",
                        "constants": [],
                        "variables": [
                          "MDF_TotalDamage"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 2
                  },
                  "passed": [
                    {
                      "name": "Update Modifier Description",
                      "popUpText": "This unit is marked as the Prey. After every attack it receives, it will receive Lightning Additional DMG equal to #1[i]% of Moze's ATK, and Moze will consume 1 point of Charge. When ally targets attack the enemy marked as \"Prey,\" the CRIT DMG dealt increases by #2[i]%."
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_TotalDamage",
                      "value": {
                        "operator": "Variables[0] (0.4) || RETURN",
                        "displayLines": "0.4",
                        "constants": [],
                        "variables": [
                          0.4
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Vengewise"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "Moze_Eidolon1_DeBonus[<span class=\"descriptionNumberColor\">Vengewise</span>]",
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
                    "name": "Is Part Of Team",
                    "target": "Use Prior Target(s) Defined",
                    "team": "TeamLight"
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "PursuedDamage_PerformanceDelay",
                      "target": "Owner of this Modifier"
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": "Owner of this Modifier",
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Thunder",
                        "Damage": {
                          "operator": "Variables[0] (0.3) || RETURN",
                          "displayLines": "0.3",
                          "constants": [],
                          "variables": [
                            0.3
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Additional DMG"
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Eidolon Activated",
                        "eidolon": 1
                      },
                      "passed": [
                        {
                          "name": "Update Energy",
                          "on": "Caster",
                          "value": {
                            "operator": "Variables[0] (2) || RETURN",
                            "displayLines": "2",
                            "constants": [],
                            "variables": [
                              2
                            ]
                          },
                          "isFixed": "* ERR"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": "Use Prior Target(s) Defined",
                        "modifier": "Moze_InInsert_Tag",
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_SkillP01_CurrentCount",
                          "value": {
                            "operator": "Variables[0] (MDF_SkillP01_CurrentCount) || Constants[0] (1) || SUB || RETURN",
                            "displayLines": "(MDF_SkillP01_CurrentCount - 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "MDF_SkillP01_CurrentCount"
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_EnergyCost",
                          "value": {
                            "operator": "Variables[0] (MDF_EnergyCost) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(MDF_EnergyCost + 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "MDF_EnergyCost"
                            ]
                          }
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "MDF_SkillP01_CurrentCount",
                            "compareType": "<=",
                            "value2": 0
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_SkillP01_CurrentCount",
                              "value": 0
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "Compare: Variable",
                                "value1": "MDF_EnergyCost",
                                "compareType": "=",
                                "value2": {
                                  "operator": "Variables[0] (3) || Constants[0] (1) || SUB || RETURN",
                                  "displayLines": "(3 - 1)",
                                  "constants": [
                                    1
                                  ],
                                  "variables": [
                                    3
                                  ]
                                }
                              },
                              {
                                "name": "Compare: Variable",
                                "value1": "MDF_EnergyCost",
                                "compareType": "=",
                                "value2": {
                                  "operator": "Variables[0] (3) || Constants[0] (2) || ADD || RETURN",
                                  "displayLines": "(3 + 2)",
                                  "constants": [
                                    2
                                  ],
                                  "variables": [
                                    3
                                  ]
                                }
                              },
                              {
                                "name": "Compare: Variable",
                                "value1": "MDF_EnergyCost",
                                "compareType": "=",
                                "value2": {
                                  "operator": "Variables[0] (3) || Constants[0] (5) || ADD || RETURN",
                                  "displayLines": "(3 + 5)",
                                  "constants": [
                                    5
                                  ],
                                  "variables": [
                                    3
                                  ]
                                }
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Update Displayed Energy Bar",
                              "value": {
                                "operator": "Variables[0] (MDF_SkillP01_CurrentCount) || RETURN",
                                "displayLines": "MDF_SkillP01_CurrentCount",
                                "constants": [],
                                "variables": [
                                  "MDF_SkillP01_CurrentCount"
                                ]
                              },
                              "maximum": {
                                "operator": "Variables[0] (MDF_MaxEnergy) || RETURN",
                                "displayLines": "MDF_MaxEnergy",
                                "constants": [],
                                "variables": [
                                  "MDF_MaxEnergy"
                                ]
                              },
                              "assignState": "True",
                              "priorState": "Active",
                              "bar#": 2
                            }
                          ],
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "MDF_SkillP01_CurrentCount",
                                "compareType": ">=",
                                "value2": 1
                              },
                              "passed": [
                                {
                                  "name": "Update Displayed Energy Bar",
                                  "value": {
                                    "operator": "Variables[0] (MDF_SkillP01_CurrentCount) || RETURN",
                                    "displayLines": "MDF_SkillP01_CurrentCount",
                                    "constants": [],
                                    "variables": [
                                      "MDF_SkillP01_CurrentCount"
                                    ]
                                  },
                                  "maximum": {
                                    "operator": "Variables[0] (MDF_MaxEnergy) || RETURN",
                                    "displayLines": "MDF_MaxEnergy",
                                    "constants": [],
                                    "variables": [
                                      "MDF_MaxEnergy"
                                    ]
                                  },
                                  "assignState": "True",
                                  "priorState": "Normal",
                                  "bar#": 2
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Update Displayed Energy Bar",
                                  "value": {
                                    "operator": "Variables[0] (MDF_SkillP01_CurrentCount) || RETURN",
                                    "displayLines": "MDF_SkillP01_CurrentCount",
                                    "constants": [],
                                    "variables": [
                                      "MDF_SkillP01_CurrentCount"
                                    ]
                                  },
                                  "maximum": {
                                    "operator": "Variables[0] (MDF_MaxEnergy) || RETURN",
                                    "displayLines": "MDF_MaxEnergy",
                                    "constants": [],
                                    "variables": [
                                      "MDF_MaxEnergy"
                                    ]
                                  },
                                  "assignState": "True",
                                  "priorState": "Disable",
                                  "bar#": 2
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "MDF_EnergyCost",
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] (3) || RETURN",
                              "displayLines": "3",
                              "constants": [],
                              "variables": [
                                3
                              ]
                            }
                          },
                          "passed": [
                            {
                              "name": "Inject Ability Use",
                              "condition": {
                                "name": "Insert Ability Condition",
                                "type": "AbilityOwnerInsertUnusedCount",
                                "typeValue": 1
                              },
                              "abilityName": "Moze_Insert_Part01",
                              "abilitySource": "Caster",
                              "abilityTarget": "Owner of this Modifier",
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
                        "name": "Compare: Target Count SUM",
                        "target": "Current Visual Target(All)",
                        "conditions": {
                          "name": "Compare: Target",
                          "target": "Owner of this Modifier",
                          "target2": "Use Prior Target(s) Defined"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Toggle Skill Mark",
                      "toggle": true,
                      "trigger": "State_Active"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Toggle Skill Mark",
                      "toggle": true,
                      "trigger": "State_Normal"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Active Ability Chosen [Anyone]",
              "execute": [
                {
                  "name": "Toggle Skill Mark",
                  "toggle": true
                }
              ]
            },
            {
              "eventTrigger": "Member Removed from Team [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": "Use Prior Target(s) Defined",
                    "modifier": "Moze_Ability02_ShadowTargetModifier[<span class=\"descriptionNumberColor\">Prey</span>]"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Caster",
                      "modifier": "Moze_Ability02_InShadowModifier"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "Moze_Ability02_ShadowTargetModifier[<span class=\"descriptionNumberColor\">Prey</span>]"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Get Revived [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_EnergyCost",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (3) || RETURN",
                      "displayLines": "3",
                      "constants": [],
                      "variables": [
                        3
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "Moze_Insert_Part01",
                      "abilitySource": "Caster",
                      "abilityTarget": "Owner of this Modifier",
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
              "eventTrigger": "Unselectable Adjustment [Owner]: Start",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Caster",
                  "modifier": "Moze_Ability02_InShadowModifier"
                },
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "This unit is marked as \"Prey.\" After every time it receives an attack, it will receive Lightning Additional DMG equal to <span class=\"descriptionNumberColor\">#SkillP01_P1_ExtraDamagePercentage</span> of Moze's ATK, and Moze will consume 1 point of Charge.",
          "type": "Debuff",
          "effectName": "Prey",
          "statusName": "Prey"
        },
        {
          "name": "Modifier Construction",
          "for": "Moze_InsertAction_Modifier",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Update Ability Properties",
                  "abilityTagList": [
                    "Skill02"
                  ],
                  "propertyList": [
                    {
                      "name": "Ability Property Action",
                      "propertyName": "Skill Point Cost",
                      "propertyAction": "Remove",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Update Ability Properties",
                  "abilityTagList": [
                    "Skill02"
                  ],
                  "propertyList": [
                    {
                      "name": "Ability Property Action",
                      "propertyName": "Skill Point Cost",
                      "propertyAction": "Remove"
                    }
                  ]
                },
                {
                  "name": "Disable Abilities",
                  "target": "Owner of this Modifier",
                  "abilityTypes": [
                    "Basic ATK"
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Skill"
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ]
        }
      ],
      "references": []
    }
  }
}