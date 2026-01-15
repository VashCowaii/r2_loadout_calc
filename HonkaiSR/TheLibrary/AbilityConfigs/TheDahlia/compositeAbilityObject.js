const compositeAbilityObject = {
  "fullCharacterName": "The Dahlia",
  "trimCharacterName": "TheDahlia",
  "abilityList": [
    "TheDahlia_Constance_Eidolon6",
    "TheDahlia_Constance_Eidolon2",
    "TheDahlia_Constance_Trace03",
    "TheDahlia_Constance_TechniqueInLevel",
    "TheDahlia_Constance_PassiveAbility01",
    "TheDahlia_Constance_Insert_Part02",
    "TheDahlia_Constance_Insert_Part01",
    "TheDahlia_Constance_Insert_SelectTarget",
    "TheDahlia_Constance_Ability03_Part02",
    "TheDahlia_Constance_Ability03_Part01",
    "TheDahlia_Constance_Ability03_EnterReady",
    "TheDahlia_Constance_Ability02_Part02",
    "TheDahlia_Constance_Ability02_Part01",
    "TheDahlia_Constance_Ability01_Part02",
    "TheDahlia_Constance_Ability01_Part01",
    "TheDahlia_Modifiers"
  ],
  "abilityObject": {
    "TheDahlia_Constance_Eidolon6": {
      "fileName": "TheDahlia_Constance_Eidolon6",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Constance_Eidolon6"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Constance_Eidolon6",
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "TheDahlia_Constance_Eidolon2": {
      "fileName": "TheDahlia_Constance_Eidolon2",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Constance_Eidolon2"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Constance_Eidolon2_Bonus_OnCharacterCreate",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": "Use Prior Target(s) Defined",
                    "team": "TeamDark"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "Constance_Ultimate_Weakness[<span class=\"descriptionNumberColor\">Wilt</span>]",
                      "duration": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyRatio": {
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
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Constance_Eidolon2",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": "All Hostile Entities (AOE)(ALL)",
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "Constance_Ultimate_Weakness[<span class=\"descriptionNumberColor\">Wilt</span>]",
                      "duration": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyRatio": {
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
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "Constance_Eidolon2_Bonus_OnCharacterCreate"
                },
                "Modifier Deletes Itself"
              ],
              "priorityLevel": -80
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "TheDahlia_Constance_Trace03": {
      "fileName": "TheDahlia_Constance_Trace03",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Constance_Trace03"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "_M_Constance_Tree03_SpdPreShow",
          "stackType": "ReplaceByCaster",
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": "Owner of this Modifier",
            "conditions": {
              "name": "AND",
              "conditionList": [
                {
                  "name": "Has Weakness Preview",
                  "target": "Use Prior Target(s) Defined",
                  "DamageType": "AllType",
                  "weaknessFilter": "All",
                  "anyMatchingTarget": true
                },
                {
                  "name": "Has Modifier",
                  "target": "Owner of this Modifier",
                  "modifier": "Constance_Tree03_Property[<span class=\"descriptionNumberColor\">Outgrow the Old, Espouse the New</span>]",
                  "invertCondition": true
                }
              ]
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": "0.3(SPD Change)"
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "_M_Constance_Tree03_StancePreShow",
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "isPercentofMaxToughness": true,
            "addedValue": {
              "operator": "Variables[0] (20) || Constants[0] (3) || MUL || RETURN",
              "displayLines": "(20 * 3)",
              "constants": [
                3
              ],
              "variables": [
                20
              ]
            },
            "maxToughness": 999,
            "conditions": {
              "name": "AND",
              "conditionList": [
                {
                  "name": "Has Weakness Preview",
                  "target": "Use Prior Target(s) Defined",
                  "DamageType": "AllType",
                  "weaknessFilter": "All",
                  "anyMatchingTarget": true
                },
                {
                  "name": "Has Element",
                  "target": "Owner of this Modifier",
                  "DamageType": {
                    "name": "Damage Type Source",
                    "sourceType": "Fire"
                  }
                },
                {
                  "name": "Is Entity Type",
                  "target": "Owner of this Modifier",
                  "type": "Character"
                }
              ]
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "Constance_Tree03_Property[<span class=\"descriptionNumberColor\">Outgrow the Old, Espouse the New</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_SpeedUp"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
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
          "description": "SPD increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "SPD Boost",
          "statusName": "Outgrow the Old, Espouse the New"
        },
        {
          "name": "Modifier Construction",
          "for": "_M_Constance_Tree03_AddWeaknessListener_DuringAttack",
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ],
              "priorityLevel": -100
            },
            {
              "eventTrigger": "Apply Modifier [From Owner] (Success)",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Entity Type",
                        "target": "Owner of this Modifier",
                        "type": "Battle Event",
                        "invertCondition": true
                      },
                      {
                        "name": "Modifier Has Flag",
                        "flagName": "STAT_AttachWeakness"
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
                            "name": "Has Element",
                            "target": "Owner of this Modifier",
                            "DamageType": {
                              "name": "Damage Type Source",
                              "sourceType": "Fire"
                            }
                          },
                          {
                            "name": "Is Entity Type",
                            "target": "Owner of this Modifier",
                            "type": "Character"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Use Prior Target(s) Defined",
                          "modifier": "Constance_PointB3_AddWeaknessMark",
                          "referenceModifier": "MReference_Empty",
                          "casterAssign": "CasterSelf"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Owner of this Modifier",
                          "modifier": "Constance_PointB3_SPAddMark",
                          "referenceModifier": "MReference_Empty"
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
          "for": "_M_Constance_Tree03_AddWeaknessListener",
          "execute": [
            {
              "eventTrigger": "Action Choice Window [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Entity Type",
                    "target": "Owner of this Modifier",
                    "type": "Battle Event"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "[CREATOR OF] Owner of this Modifier",
                      "modifier": "_M_Constance_Tree03_AddWeaknessListener_DuringAttack"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "[CREATOR OF] Owner of this Modifier",
                      "modifier": "Constance_PointB3_SPAddMark"
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "_M_Constance_Tree03_AddWeaknessListener_DuringAttack"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Constance_PointB3_SPAddMark"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": "All Hostile Entities (AOE)(ALL)",
                  "modifier": "Constance_PointB3_AddWeaknessMark"
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": "Ability Target List",
                  "includeDyingTargets": true,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": "Use Prior Target(s) Defined",
                        "modifier": "Constance_PointB3_AddWeaknessMark",
                        "casterFilter": "Owner of this Modifier"
                      },
                      {
                        "name": "Has Element",
                        "target": "Owner of this Modifier",
                        "DamageType": {
                          "name": "Damage Type Source",
                          "sourceType": "Fire"
                        }
                      },
                      {
                        "name": "Is Entity Type",
                        "target": "Owner of this Modifier",
                        "type": "Character"
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Deal Toughness DMG",
                      "value": {
                        "operator": "Variables[0] (20) || Constants[0] (3) || MUL || RETURN",
                        "displayLines": "(20 * 3)",
                        "constants": [
                          3
                        ],
                        "variables": [
                          20
                        ]
                      },
                      "attacker": "Owner of this Modifier",
                      "ignoreAttackerBonuses": true,
                      "canDelay": true,
                      "livingState": "Mask_AliveOrLimbo",
                      "ToughnessDMGType": "Fire"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "Constance_PointB3_AddWeaknessMark"
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
                        "target": "Owner of this Modifier",
                        "modifier": "Constance_PointB3_SPAddMark"
                      },
                      {
                        "name": "Has Element",
                        "target": "Owner of this Modifier",
                        "DamageType": {
                          "name": "Damage Type Source",
                          "sourceType": "Fire"
                        }
                      },
                      {
                        "name": "Is Entity Type",
                        "target": "Owner of this Modifier",
                        "type": "Character"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": "Owner of this Modifier",
                      "variableName": "_maxSP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": "Owner of this Modifier",
                      "variableName": "_curSP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": "Owner of this Modifier",
                      "variableName": "_maxAddSP",
                      "value": {
                        "operator": "Variables[0] (MAX) || Constants[0] (0) || Variables[1] (_maxSP) || Variables[2] (0.5) || MUL || Variables[3] (_curSP) || SUB || PARAM_2 || FUNCTION || RETURN",
                        "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MAX</span>(0, ((_maxSP * 0.5) - _curSP))",
                        "constants": [
                          0
                        ],
                        "variables": [
                          "MAX",
                          "_maxSP",
                          0.5,
                          "_curSP"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": "Owner of this Modifier",
                        "value1": "_maxAddSP",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (_maxSP) || Variables[1] (0.1) || MUL || RETURN",
                          "displayLines": "(_maxSP * 0.1)",
                          "constants": [],
                          "variables": [
                            "_maxSP",
                            0.1
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Update Energy",
                          "on": "Owner of this Modifier",
                          "valuePercent": {
                            "operator": "Variables[0] (0.1) || RETURN",
                            "displayLines": "0.1",
                            "constants": [],
                            "variables": [
                              0.1
                            ]
                          },
                          "isFixed": "(Fixed)"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Update Energy",
                          "on": "Owner of this Modifier",
                          "value": {
                            "operator": "Variables[0] (_maxAddSP) || RETURN",
                            "displayLines": "_maxAddSP",
                            "constants": [],
                            "variables": [
                              "_maxAddSP"
                            ]
                          },
                          "isFixed": "(Fixed)"
                        }
                      ]
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "Constance_PointB3_SPAddMark"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Action Start [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "All Hostile Entities (AOE)(ALL)",
                  "modifier": "Constance_PointB3_AddWeaknessMark",
                  "removeToBeAdded": true
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Constance_PointB3_SPAddMark"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": "All Team Members(In Context, with Untargetable + Battle Events)",
                  "modifier": "_M_Constance_Tree03_AddWeaknessListener_DuringAttack"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Entity Type",
                    "target": "Owner of this Modifier",
                    "type": "Battle Event"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "[CREATOR OF] Owner of this Modifier",
                      "modifier": "Constance_PointB3_SPAddMark"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "[CREATOR OF] Owner of this Modifier",
                      "modifier": "_M_Constance_Tree03_AddWeaknessListener_DuringAttack"
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "_M_Constance_Tree03_AddWeaknessListener_DuringAttack"
                }
              ]
            },
            {
              "eventTrigger": "Action Completed [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "_M_Constance_Tree03_AddWeaknessListener_DuringAttack"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Constance_PointB3_SPAddMark"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Entity Type",
                    "target": "Owner of this Modifier",
                    "type": "Battle Event"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "[CREATOR OF] Owner of this Modifier",
                      "modifier": "_M_Constance_Tree03_AddWeaknessListener_DuringAttack"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "[CREATOR OF] Owner of this Modifier",
                      "modifier": "Constance_PointB3_SPAddMark"
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": "All Hostile Entities (AOE)(ALL)",
                  "modifier": "Constance_PointB3_AddWeaknessMark"
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "_M_Constance_Tree03_AddWeaknessListener_DuringAttack"
                }
              ],
              "priorityLevel": -85
            },
            {
              "eventTrigger": "Ultimate Prep-Phase [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "All Hostile Entities (AOE)(ALL)",
                  "modifier": "Constance_PointB3_AddWeaknessMark"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Constance_PointB3_SPAddMark"
                }
              ]
            },
            {
              "eventTrigger": "Apply Modifier [From Owner] (Success)",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Entity Type",
                        "target": "Owner of this Modifier",
                        "type": "Battle Event",
                        "invertCondition": true
                      },
                      {
                        "name": "Modifier Has Flag",
                        "flagName": "STAT_AttachWeakness"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "Constance_Tree03_Property[<span class=\"descriptionNumberColor\">Outgrow the Old, Espouse the New</span>]",
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
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Constance_Trace03",
          "stackData": [],
          "latentQueue": [],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": "All Team Members(In Context, with Untargetable + Battle Events)",
              "modifier": "_M_Constance_Tree03_AddWeaknessListener",
              "haloStatus": true,
              "includeBattleEvent": true
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": "All Team Members(In Context, with Untargetable + Battle Events)",
              "modifier": "_M_Constance_Tree03_StancePreShow",
              "haloStatus": true,
              "includeBattleEvent": true
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": "All Team Members(In Context, with Untargetable)",
              "modifier": "_M_Constance_Tree03_SpdPreShow",
              "haloStatus": true,
              "includeBattleEvent": true
            }
          ]
        }
      ]
    },
    "TheDahlia_Constance_TechniqueInLevel": {
      "fileName": "TheDahlia_Constance_TechniqueInLevel",
      "childAbilityList": [
        "TheDahlia_Constance_TechniqueInLevel"
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
          "to": "Caster",
          "modifier": "StageAbility_Maze_Constance_Modifier"
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "StageAbility_Maze_Constance_Modifier_SuperBreakTrigger"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "_M_Constance_TechniqueUsage_SuperBreak",
          "modifierFlags": [
            "STAT_SuperBreakBuff"
          ],
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "DealSuperBreakDamage_DamagePerformance",
                  "target": "All Hostile Entities (AOE)",
                  "variables": {
                    "value_0_DamagePercentage": {
                      "operator": "Variables[0] (MDF_DamagePercentage) || RETURN",
                      "displayLines": "MDF_DamagePercentage",
                      "constants": [],
                      "variables": [
                        "MDF_DamagePercentage"
                      ]
                    }
                  },
                  "damageSequence": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "PursuedDamage_PerformanceDelay",
                      "target": "Use Prior Target(s) Defined"
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": "Use Prior Target(s) Defined",
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": {
                          "name": "Damage Type Source",
                          "sourceType": "ReadTargetType",
                          "target": "Owner of this Modifier"
                        },
                        "DamageBreak": {
                          "operator": "Variables[0] (value_0_DamagePercentage) || RETURN",
                          "displayLines": "value_0_DamagePercentage",
                          "constants": [],
                          "variables": [
                            "value_0_DamagePercentage"
                          ]
                        },
                        "dmgFormula": "Break DMG Scaling",
                        "dmgFormulaFinal": "Pure (No DMG%)",
                        "Toughness": null,
                        "Tags": [
                          "Super Break"
                        ],
                        "attackType": "Break DMG"
                      }
                    }
                  ]
                },
                "Modifier Deletes Itself"
              ],
              "priorityLevel": 100
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "_M_Constance_TechniqueUsage_SuperBreakTriggerFlag"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "_M_Constance_TechniqueUsage_SuperBreakTriggerFlag"
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "DealSuperBreakDamage_DamagePerformance",
                      "target": "All Hostile Entities (AOE)",
                      "variables": {
                        "value_0_DamagePercentage": {
                          "operator": "Variables[0] (MDF_DamagePercentage) || RETURN",
                          "displayLines": "MDF_DamagePercentage",
                          "constants": [],
                          "variables": [
                            "MDF_DamagePercentage"
                          ]
                        }
                      },
                      "damageSequence": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "PursuedDamage_PerformanceDelay",
                          "target": "Use Prior Target(s) Defined"
                        },
                        {
                          "name": "ATK Scaling DMG",
                          "target": "Use Prior Target(s) Defined",
                          "canPhase": true,
                          "AttackScaling": {
                            "DamageType": {
                              "name": "Damage Type Source",
                              "sourceType": "ReadTargetType",
                              "target": "Owner of this Modifier"
                            },
                            "DamageBreak": {
                              "operator": "Variables[0] (value_0_DamagePercentage) || RETURN",
                              "displayLines": "value_0_DamagePercentage",
                              "constants": [],
                              "variables": [
                                "value_0_DamagePercentage"
                              ]
                            },
                            "dmgFormula": "Break DMG Scaling",
                            "dmgFormulaFinal": "Pure (No DMG%)",
                            "Toughness": null,
                            "Tags": [
                              "Super Break"
                            ],
                            "attackType": "Break DMG"
                          }
                        }
                      ]
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "StageAbility_Maze_Constance_Modifier_SuperBreakTrigger",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": "All Team Members(In Context, with Untargetable)",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": "Use Prior Target(s) Defined",
                    "modifier": "_M_Constance_TechniqueUsage_SuperBreak"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "_M_Constance_TechniqueUsage_SuperBreakTriggerFlag",
                      "referenceModifier": "MReference_Empty"
                    }
                  ]
                },
                "Modifier Deletes Itself"
              ],
              "priorityLevel": -59
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "StageAbility_Maze_Constance_Modifier",
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
                      "modifier": "Constance_Aura[<span class=\"descriptionNumberColor\">Lick... Enkindled Betrayal</span>]",
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
                          "operator": "Variables[0] (0.5) || RETURN",
                          "displayLines": "0.5",
                          "constants": [],
                          "variables": [
                            0.5
                          ]
                        }
                      }
                    },
                    {
                      "name": "Find New Target",
                      "from": "All Team Members(In Context, with Untargetable)",
                      "conditions": {
                        "name": "Has Flag",
                        "target": "Use Prior Target(s) Defined",
                        "flagName": "STAT_TriggerBattleCharacter"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Use Prior Target(s) Defined",
                          "modifier": "_M_Constance_TechniqueUsage_SuperBreak",
                          "valuePerStack": {
                            "MDF_DamagePercentage": {
                              "operator": "Variables[0] (0.6) || RETURN",
                              "displayLines": "0.6",
                              "constants": [],
                              "variables": [
                                0.6
                              ]
                            }
                          },
                          "casterAssign": "TargetSelf"
                        }
                      ]
                    },
                    "Modifier Deletes Itself"
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
    "TheDahlia_Constance_PassiveAbility01": {
      "fileName": "TheDahlia_Constance_PassiveAbility01",
      "childAbilityList": [
        "TheDahlia_Constance_PassiveAbility01",
        "TheDahlia_Constance_Insert_SelectTarget",
        "TheDahlia_Constance_Insert_Camera",
        "TheDahlia_Constance_Insert_Part01",
        "TheDahlia_Constance_Insert_Part02"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": 2,
      "toughnessList": [
        3,
        0,
        0
      ],
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Constance_Passive"
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Constance_Ultimate_AddWeaknessPreShow"
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
              "variableName": "Rank01_Activated",
              "value": 1
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Rank01_Activated",
              "value": 0
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Constance_ReduceStanceTriggerCD",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Get Revived [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Sub-Target in HP-Share Group",
                    "target": "Owner of this Modifier"
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": "All Enemies(All)",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Is Sub-Target in HP-Share Group",
                            "target": "Use Prior Target(s) Defined"
                          },
                          {
                            "name": "Compare: Target",
                            "target": "Use Prior Target(s) Defined",
                            "target2": "Owner of this Modifier",
                            "invertCondition": true
                          }
                        ]
                      },
                      "ifTargetFound": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": "Use Prior Target(s) Defined",
                          "modifier": "Constance_ReduceStanceTriggerCD",
                          "removeToBeAdded": true
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Constance_ReduceStanceTriggerCD",
                  "removeToBeAdded": true
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Constance_Eidolon1_ReduceStance",
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": "Ability Target List",
                  "includeDyingTargets": true,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Flag",
                            "target": "Use Prior Target(s) Defined",
                            "flagName": "MuteBreak"
                          },
                          {
                            "name": "Compare: Ability Value",
                            "target": "Use Prior Target(s) Defined",
                            "value1": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;",
                            "compareType": ">",
                            "value2": 0
                          }
                        ],
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": "Use Prior Target(s) Defined",
                        "modifier": "Constance_ReduceStanceTriggerCD",
                        "invertCondition": true
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": "Use Prior Target(s) Defined",
                      "variableName": "MDF_TargetMaxStanceValue",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
                      "warningType": "MaxToughness"
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": "Owner of this Modifier",
                      "scope": "ContextModifier",
                      "variableName": "MDF_StanceValue",
                      "value": {
                        "operator": "Variables[0] (MDF_TargetMaxStanceValue) || Variables[1] (MDF_StanceRatio) || MUL || RETURN",
                        "displayLines": "(MDF_TargetMaxStanceValue * MDF_StanceRatio)",
                        "constants": [],
                        "variables": [
                          "MDF_TargetMaxStanceValue",
                          "MDF_StanceRatio"
                        ]
                      }
                    },
                    {
                      "name": "Deal Toughness DMG",
                      "value": {
                        "operator": "Variables[0] (MDF_StanceValue) || RETURN",
                        "displayLines": "MDF_StanceValue",
                        "constants": [],
                        "variables": [
                          "MDF_StanceValue"
                        ]
                      },
                      "attacker": "Owner of this Modifier",
                      "forceReduction": true,
                      "ignoreAttackerBonuses": true,
                      "canDelay": true,
                      "livingState": "Mask_AliveOrLimbo",
                      "ToughnessDMGType": {
                        "name": "Damage Type Source",
                        "sourceType": {}
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "Constance_ReduceStanceTriggerCD"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Constance_StancePreview",
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "isPercentofMaxToughness": true,
            "addedPercent": {
              "operator": "Variables[0] (MDF_StanceRatio) || RETURN",
              "displayLines": "MDF_StanceRatio",
              "constants": [],
              "variables": [
                "MDF_StanceRatio"
              ]
            },
            "maxToughness": {
              "operator": "Variables[0] (MDF_MinStanceValue) || Constants[0] (3) || MUL || RETURN",
              "displayLines": "(MDF_MinStanceValue * 3)",
              "constants": [
                3
              ],
              "variables": [
                "MDF_MinStanceValue"
              ]
            },
            "minToughness": {
              "operator": "Variables[0] (MDF_MaxStanceValue) || Constants[0] (3) || MUL || RETURN",
              "displayLines": "(MDF_MaxStanceValue * 3)",
              "constants": [
                3
              ],
              "variables": [
                "MDF_MaxStanceValue"
              ]
            },
            "conditions": {
              "name": "AND",
              "conditionList": [
                {
                  "name": "AND",
                  "conditionList": [
                    {
                      "name": "Has Flag",
                      "target": "Use Prior Target(s) Defined",
                      "flagName": "MuteBreak"
                    },
                    {
                      "name": "Compare: Ability Value",
                      "target": "Use Prior Target(s) Defined",
                      "value1": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;",
                      "compareType": ">",
                      "value2": 0
                    }
                  ],
                  "invertCondition": true
                },
                {
                  "name": "Has Modifier",
                  "target": "Use Prior Target(s) Defined",
                  "modifier": "Constance_ReduceStanceTriggerCD",
                  "invertCondition": true
                }
              ]
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "_M_Constance_Aura_ElementDamage",
          "stackType": "Replace",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": "Ability Target List",
                  "ifTargetFound": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "DealSuperBreakDamage_DamagePerformance",
                      "target": "Use Prior Target(s) Defined",
                      "variables": {
                        "value_0_DamagePercentage": {
                          "operator": "Variables[0] (MDF_SuperBreakDamagePercentage) || RETURN",
                          "displayLines": "MDF_SuperBreakDamagePercentage",
                          "constants": [],
                          "variables": [
                            "MDF_SuperBreakDamagePercentage"
                          ]
                        }
                      },
                      "damageSequence": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "PursuedDamage_PerformanceDelay",
                          "target": "Use Prior Target(s) Defined"
                        },
                        {
                          "name": "ATK Scaling DMG",
                          "target": "Use Prior Target(s) Defined",
                          "canPhase": true,
                          "AttackScaling": {
                            "DamageType": {
                              "name": "Damage Type Source",
                              "sourceType": "ReadTargetType",
                              "target": "Owner of this Modifier"
                            },
                            "DamageBreak": {
                              "operator": "Variables[0] (value_0_DamagePercentage) || RETURN",
                              "displayLines": "value_0_DamagePercentage",
                              "constants": [],
                              "variables": [
                                "value_0_DamagePercentage"
                              ]
                            },
                            "dmgFormula": "Break DMG Scaling",
                            "dmgFormulaFinal": "Pure (No DMG%)",
                            "Toughness": null,
                            "Tags": [
                              "Super Break"
                            ],
                            "attackType": "Break DMG"
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
          "for": "Constance_Eidolon1_SuperBreak[<span class=\"descriptionNumberColor\">When a Bud Readies to Bloom</span>]",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "STAT_SuperBreakBuff"
          ],
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "_M_Constance_Aura_ElementDamage",
                  "valuePerStack": {
                    "MDF_SuperBreakDamagePercentage": {
                      "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                      "displayLines": "MDF_PropertyValue",
                      "constants": [],
                      "variables": [
                        "MDF_PropertyValue"
                      ]
                    }
                  },
                  "casterAssign": "TargetSelf"
                }
              ],
              "priorityLevel": 100
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "Constance_Dancer[<span class=\"descriptionNumberColor\">Dance Partner</span>]"
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "description": "After attacking a Weakness Broken enemy target, converts the Toughness Reduction of this attack into 1 instance of <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> Super Break DMG.",
          "type": "Buff",
          "statusName": "When a Bud Readies to Bloom"
        },
        {
          "name": "Modifier Construction",
          "for": "Constance_DancerSuperBreak",
          "modifierFlags": [
            "STAT_SuperBreakBuff"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Modifier-Specific Variable",
                  "modifierName": "Constance_Dancer[<span class=\"descriptionNumberColor\">Dance Partner</span>]",
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
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "_M_Constance_Aura_ElementDamage",
                  "valuePerStack": {
                    "MDF_SuperBreakDamagePercentage": {
                      "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                      "displayLines": "MDF_PropertyValue",
                      "constants": [],
                      "variables": [
                        "MDF_PropertyValue"
                      ]
                    }
                  },
                  "casterAssign": "TargetSelf"
                }
              ],
              "priorityLevel": 100
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Constance_Dancer_UITOP",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": "Owner of this Modifier",
                    "target2": "Caster"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Constance_Dancer[<span class=\"descriptionNumberColor\">Dance Partner</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": "Owner of this Modifier",
                    "target2": "Caster",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "All Teammates + Unselectable (Excluding Owner, and Owner of this Modifier)",
                      "modifier": "Constance_Dancer[<span class=\"descriptionNumberColor\">Dance Partner</span>]"
                    }
                  ]
                }
              ]
            }
          ],
          "description": "After attacking a Weakness Broken enemy target, converts the Toughness Reduction of this attack into 1 instance of <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> Super Break DMG.",
          "type": "Buff",
          "statusName": "Dance Partner",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": "Owner of this Modifier",
              "modifier": "Constance_DancerSuperBreak",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (Rank01_Activated) || Variables[1] (0.6) || Variables[2] (0.4) || ADD || Variables[1] (0.6) || CHECK || RETURN",
                  "displayLines": "check(value:Rank01_Activated, then:(0.6 + 0.4), else:0.6)",
                  "constants": [],
                  "variables": [
                    "Rank01_Activated",
                    0.6,
                    0.4
                  ]
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": "Owner of this Modifier",
              "modifier": "Constance_Dancer_UITOP"
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": "Owner of this Modifier",
              "modifier": "Constance_StancePreview",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 1
              },
              "valuePerStack": {
                "MDF_StanceRatio": {
                  "operator": "Variables[0] (0.25) || RETURN",
                  "displayLines": "0.25",
                  "constants": [],
                  "variables": [
                    0.25
                  ]
                },
                "MDF_MinStanceValue": {
                  "operator": "Variables[0] (10) || RETURN",
                  "displayLines": "10",
                  "constants": [],
                  "variables": [
                    10
                  ]
                },
                "MDF_MaxStanceValue": {
                  "operator": "Variables[0] (300) || RETURN",
                  "displayLines": "300",
                  "constants": [],
                  "variables": [
                    300
                  ]
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": "Owner of this Modifier",
              "modifier": "Constance_Eidolon1_ReduceStance",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 1
              },
              "valuePerStack": {
                "MDF_StanceRatio": {
                  "operator": "Variables[0] (0.25) || RETURN",
                  "displayLines": "0.25",
                  "constants": [],
                  "variables": [
                    0.25
                  ]
                },
                "MDF_MinStanceValue": {
                  "operator": "Variables[0] (10) || RETURN",
                  "displayLines": "10",
                  "constants": [],
                  "variables": [
                    10
                  ]
                },
                "MDF_MaxStanceValue": {
                  "operator": "Variables[0] (300) || RETURN",
                  "displayLines": "300",
                  "constants": [],
                  "variables": [
                    300
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "_M_Constance_ListenInsert_SubOnEnemy",
          "execute": [
            {
              "eventTrigger": "Being Attacked End [Owner]",
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
                        "name": "Has Modifier",
                        "target": "Caster",
                        "modifier": "Constance_InsertCD[<span class=\"descriptionNumberColor\">Who's Afraid of Constance?</span>]",
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Target",
                        "target": "Use Prior Target(s) Defined",
                        "target2": "Caster",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": "Use Prior Target(s) Defined",
                        "modifier": "Constance_Dancer[<span class=\"descriptionNumberColor\">Dance Partner</span>]"
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
                          "abilityName": "Constance_Insert_SelectTarget",
                          "abilitySource": "Caster",
                          "abilityTarget": "All Hostile Entities (AOE)",
                          "priorityTag": "AvatarInsertAttackSelf",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "abortFlags": [
                            "DisableAction",
                            "STAT_CTRL"
                          ],
                          "allowAbilityTriggers": false
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Caster",
                          "modifier": "_M_Constance_InsertCheck"
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
          "for": "_M_Constance_DancerManager",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Constance_Dancer[<span class=\"descriptionNumberColor\">Dance Partner</span>]"
                },
                {
                  "name": "Find New Target",
                  "from": "All Team Members(In Context, with Untargetable, exclude Owner)",
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Has Flag",
                    "target": "Use Prior Target(s) Defined",
                    "flagName": "STAT_TriggerBattleCharacter"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "Constance_Dancer[<span class=\"descriptionNumberColor\">Dance Partner</span>]"
                    }
                  ],
                  "noTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "All Teammates + Unselectable (Living, Excluding Owner) [Sort by Break Effect][Reverse][1]",
                      "modifier": "Constance_Dancer[<span class=\"descriptionNumberColor\">Dance Partner</span>]"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": "Owner of this Modifier",
                    "value1": "Rank01_Activated",
                    "compareType": ">=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Teammates + Unselectable (Excluding Owner, Memosprites, and Dahlia's Dance Partners)",
                      "modifier": "Constance_Eidolon1_SuperBreak[<span class=\"descriptionNumberColor\">When a Bud Readies to Bloom</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.6) || RETURN",
                          "displayLines": "0.6",
                          "constants": [],
                          "variables": [
                            0.6
                          ]
                        }
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of",
                        "of": "All Teammates + Unselectable (Excluding Owner)",
                        "target": "Use Prior Target(s) Defined",
                        "mustBeAlive2": true
                      },
                      {
                        "name": "Compare: Variable",
                        "target": "Dahlia's Dance Partners [Exclude Caster]",
                        "value1": "TeamCharacterCount",
                        "compareType": "<=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "All Teammates + Unselectable (Living, Excluding Owner) [Sort by Break Effect][Reverse][1]",
                      "modifier": "Constance_Dancer[<span class=\"descriptionNumberColor\">Dance Partner</span>]"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of",
                        "of": "All Team Members(In Context, with Untargetable, NO Memosprites)",
                        "target": "Use Prior Target(s) Defined",
                        "mustBeAlive2": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": "Use Prior Target(s) Defined",
                        "modifier": "Constance_Dancer[<span class=\"descriptionNumberColor\">Dance Partner</span>]",
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Variable",
                        "target": "Owner of this Modifier",
                        "value1": "Rank01_Activated",
                        "compareType": ">=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "Constance_Eidolon1_SuperBreak[<span class=\"descriptionNumberColor\">When a Bud Readies to Bloom</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.6) || RETURN",
                          "displayLines": "0.6",
                          "constants": [],
                          "variables": [
                            0.6
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Was",
                        "modifier": "Constance_Dancer[<span class=\"descriptionNumberColor\">Dance Partner</span>]"
                      },
                      {
                        "name": "Living State",
                        "state": "Mask_AliveOrLimbo",
                        "target": "Caster"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": "Dahlia's Dance Partners [Exclude Caster]",
                        "value1": "TeamCharacterCount",
                        "compareType": "<=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "All Teammates + Unselectable (Living, Excluding Owner) [Sort by Break Effect][Reverse][1]",
                      "modifier": "Constance_Dancer[<span class=\"descriptionNumberColor\">Dance Partner</span>]"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Constance_Ultimate_AddWeaknessPreShow",
          "stackData": [],
          "latentQueue": [],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "skillType": "Ultimate",
            "addedDisplayWeakness": {
              "TargetType": "TargetAlias",
              "TargetAlias": "Constance_Dancers",
              "Sequence": [],
              "TargetList": []
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "Constance_Eidolon2_PropertyValue[<span class=\"descriptionNumberColor\">Fresh, Ethereal, and Beloved</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
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
          "description": "Decreases All-Type RES by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>",
          "type": "Debuff",
          "effectName": "All-Type RES Reduction",
          "statusName": "Fresh, Ethereal, and Beloved"
        },
        {
          "name": "Modifier Construction",
          "for": "Constance_Eidolon2_Halo",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "All Hostile Entities (AOE)(ALL)",
                  "modifier": "Constance_Eidolon2_PropertyValue[<span class=\"descriptionNumberColor\">Fresh, Ethereal, and Beloved</span>]",
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
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of",
                    "of": "All Hostile Entities (AOE)(ALL)",
                    "target": "Use Prior Target(s) Defined",
                    "mustBeAlive2": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "Constance_Eidolon2_PropertyValue[<span class=\"descriptionNumberColor\">Fresh, Ethereal, and Beloved</span>]",
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
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Constance_MonsterPhaseChangeControl",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "CustomEvent_MonsterChangePhaseTrigger"
          ],
          "execute": [
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": "All Enemies(All)",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Is Sub-Target in HP-Share Group",
                        "target": "Use Prior Target(s) Defined"
                      },
                      {
                        "name": "Has Modifier",
                        "target": "Use Prior Target(s) Defined",
                        "modifier": "Enemy_Standard_ChangephaseMark"
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "Constance_ReduceStanceTriggerCD",
                      "removeToBeAdded": true
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Constance_Eidolon6_Property[<span class=\"descriptionNumberColor\">And Yet, Always, Deathly Beautiful</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
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
          "description": "Break Effect increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "statusName": "And Yet, Always, Deathly Beautiful"
        },
        {
          "name": "Modifier Construction",
          "for": "Constance_Eidolon6_PropertyListen",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Dahlia's Dance Partners",
                  "modifier": "Constance_Eidolon6_Property[<span class=\"descriptionNumberColor\">And Yet, Always, Deathly Beautiful</span>]",
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
                }
              ],
              "priorityLevel": -80
            },
            {
              "eventTrigger": "When Modifier is Added [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "Constance_Dancer[<span class=\"descriptionNumberColor\">Dance Partner</span>]"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "Constance_Eidolon6_Property[<span class=\"descriptionNumberColor\">And Yet, Always, Deathly Beautiful</span>]",
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
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Constance_Tree01_Property[<span class=\"descriptionNumberColor\">Yet Another Funeral</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": "Caster",
                  "variableName": "MDF_PropertyValueCaster",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
                  "context": "ContextModifier"
                },
                {
                  "name": "Define Custom Variable",
                  "target": "Owner of this Modifier",
                  "scope": "ContextModifier",
                  "variableName": "MDF_PropertyValue",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValueCaster) || Variables[1] (0.24) || MUL || Variables[2] (0.5) || ADD || RETURN",
                    "displayLines": "((MDF_PropertyValueCaster * 0.24) + 0.5)",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValueCaster",
                      0.24,
                      0.5
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakConverted</span>&nbsp;",
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
          "description": "Break Effect increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "Break Effect Boost",
          "statusName": "Yet Another Funeral"
        },
        {
          "name": "Modifier Construction",
          "for": "Constance_ListenTrace01",
          "execute": [
            {
              "eventTrigger": "Receiving Heal End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of",
                        "of": "All Teammates + Battle Events(Excluding Owner)",
                        "target": "Use Prior Target(s) Defined(REAL SOURCE OF)",
                        "mustBeAlive2": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": "Owner of this Modifier",
                        "modifier": "_M_Constance_Tree01_CD",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "_M_Constance_Tree01_CD",
                      "referenceModifier": "MReference_Mark_RemoveOnTurnEnd"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "All Team Members(In Context, with Untargetable, NO Memosprites)[Exclude Caster]",
                      "modifier": "Constance_Tree01_Property[<span class=\"descriptionNumberColor\">Yet Another Funeral</span>]",
                      "duration": {
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
                      "to": "All Team Members(In Context, with Untargetable, NO Memosprites)[Exclude Caster]",
                      "modifier": "Constance_Tree01_Property[<span class=\"descriptionNumberColor\">Yet Another Funeral</span>]",
                      "duration": {
                        "operator": "Variables[0] (1) || RETURN",
                        "displayLines": "1",
                        "constants": [],
                        "variables": [
                          1
                        ]
                      }
                    }
                  ]
                }
              ],
              "priorityLevel": -80
            },
            {
              "eventTrigger": "Created Shield [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of",
                        "of": "All Teammates + Battle Events(Excluding Owner)",
                        "target": "Use Prior Target(s) Defined(REAL SOURCE OF)",
                        "mustBeAlive2": true
                      },
                      {
                        "name": "Compare: Target",
                        "target": "Use Secondary Prior Target(s) Defined",
                        "target2": "Owner of this Modifier"
                      },
                      {
                        "name": "Has Modifier",
                        "target": "Owner of this Modifier",
                        "modifier": "_M_Constance_Tree01_CD",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "_M_Constance_Tree01_CD",
                      "referenceModifier": "MReference_Mark_RemoveOnTurnEnd"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "All Team Members(In Context, with Untargetable, NO Memosprites)[Exclude Caster]",
                      "modifier": "Constance_Tree01_Property[<span class=\"descriptionNumberColor\">Yet Another Funeral</span>]",
                      "duration": {
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
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Constance_Passive",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
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
                      "name": "Update Energy",
                      "on": "Caster",
                      "value": {
                        "operator": "Variables[0] (35) || RETURN",
                        "displayLines": "35",
                        "constants": [],
                        "variables": [
                          35
                        ]
                      },
                      "isFixed": "* ERR"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "_M_Constance_DancerManager"
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
              "to": "Caster",
              "modifier": "Constance_MonsterPhaseChangeControl",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 1
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": "Caster",
              "modifier": "Constance_Eidolon6_PropertyListen",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 6
              },
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
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": "Caster",
              "modifier": "Constance_ListenTrace01",
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "Yet Another Funeral"
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": "Caster",
              "modifier": "Constance_Eidolon2_Halo",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 2
              },
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
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": "All Hostile Entities (AOE)(ALL)",
              "modifier": "_M_Constance_ListenInsert_SubOnEnemy",
              "aliveOnly": "False",
              "haloStatus": true
            }
          ]
        }
      ]
    },
    "TheDahlia_Constance_Insert_Part02": {
      "fileName": "TheDahlia_Constance_Insert_Part02",
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
              "to": "All Hostile Entities (AOE)",
              "modifier": "Constance_Eidolon4_Property[<span class=\"descriptionNumberColor\">Pity Its Heart Gnawed by Worms</span>]",
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
                  "operator": "Variables[0] (0.12) || RETURN",
                  "displayLines": "0.12",
                  "constants": [],
                  "variables": [
                    0.12
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Constance_InsertCD[<span class=\"descriptionNumberColor\">Who's Afraid of Constance?</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": "Caster",
          "modifier": "_M_Constance_InsertCheck"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Lament, Lost Soul"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": "Caster",
                "modifier": "Constance_Tree02_CD[<span class=\"descriptionNumberColor\">Lament, Lost Soul</span>]",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Skill Points Modification",
                  "adjustmentValue": 1,
                  "adjustmentType": "+"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "Constance_Tree02_CD[<span class=\"descriptionNumberColor\">Lament, Lost Soul</span>]",
                  "counter": {
                    "operator": "Variables[0] (2) || Constants[0] (1) || SUB || RETURN",
                    "displayLines": "(2 - 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      2
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Define Modifier Variable",
                  "target": "Caster",
                  "modifierName": "Constance_Tree02_CD[<span class=\"descriptionNumberColor\">Lament, Lost Soul</span>]",
                  "function": "Add"
                }
              ]
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "scope": "ContextAbility",
          "variableName": "ADF_AttackGap",
          "value": {
            "operator": "Constants[0] (0.1) || Variables[0] (5) || DIV || RETURN",
            "displayLines": "(0.1 / 5)",
            "constants": [
              0.1
            ],
            "variables": [
              5
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "ADF_FirstHit",
          "value": 1
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
              "variableName": "ADF_BounceCount",
              "value": {
                "operator": "Variables[0] (5) || Variables[1] (5) || ADD || RETURN",
                "displayLines": "(5 + 5)",
                "constants": [],
                "variables": [
                  5,
                  5
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "ADF_BounceCount",
              "value": {
                "operator": "Variables[0] (5) || RETURN",
                "displayLines": "5",
                "constants": [],
                "variables": [
                  5
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
              "name": "Use Custom Character Function",
              "functionName": "ReduceNextActionDelay",
              "target": "Dahlia's Dance Partners",
              "variables": {
                "parameter[0]_NormalizedValue": {
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
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (ADF_BounceCount) || RETURN",
            "displayLines": "ADF_BounceCount",
            "constants": [],
            "variables": [
              "ADF_BounceCount"
            ]
          },
          "Event": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Bounce_SelectTarget",
              "target": "All Hostile Entities (AOE)",
              "paramSequence": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "ADF_FirstHit",
                    "compareType": ">=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "ADF_FirstHit",
                      "value": 0
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "_M_Constance_Insert_StanceRecorded"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": "Use Prior Target(s) Defined",
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "Damage": {
                      "operator": "Variables[0] (0.3) || RETURN",
                      "displayLines": "0.3",
                      "constants": [],
                      "variables": [
                        0.3
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
                    "ToughnessDMGType": {
                      "DamageType": "Fire"
                    },
                    "instanceTag": "Constance_InsertHit",
                    "Tags": null,
                    "attackType": "Follow-up",
                    "EnergyGainPercent": "100%"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": "Use Prior Target(s) Defined",
                    "modifier": "_M_Constance_Insert_StanceRecorded"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Copy",
                      "target": "Use Prior Target(s) Defined",
                      "modifier": "_M_Constance_Insert_StanceRecorded",
                      "variable": "MDF_TotalStanceDamage",
                      "target2": null,
                      "variable2": "ADF_StanceValue",
                      "scope": "ContextAbility"
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "DealSuperBreakDamage",
                      "target": "Use Prior Target(s) Defined",
                      "variables": {
                        "value_0_DamagePercentage": {
                          "operator": "Variables[0] (2) || RETURN",
                          "displayLines": "2",
                          "constants": [],
                          "variables": [
                            2
                          ]
                        },
                        "StanceValue": {
                          "operator": "Variables[0] (ADF_StanceValue) || RETURN",
                          "displayLines": "ADF_StanceValue",
                          "constants": [],
                          "variables": [
                            "ADF_StanceValue"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "_M_Constance_Insert_StanceRecorded"
                    }
                  ]
                }
              ]
            }
          ]
        },
        "Trigger: Attack End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "_M_Constance_Insert_StanceRecorded",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Taking Toughness DMG [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Flag",
                        "target": "Owner of this Modifier",
                        "flagName": "Break"
                      },
                      {
                        "name": "Has Flag",
                        "target": "Use Prior Target(s) Defined",
                        "flagName": "STAT_ForceSuperBreakDamage"
                      },
                      {
                        "name": "Has Flag",
                        "target": "Owner of this Modifier",
                        "flagName": "STAT_ForceSuperBreakDamage"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Varying Data",
                      "target": null,
                      "variableName": "MDF_HitStanceDamage",
                      "value": "ParamValue2"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_TotalStanceDamage",
                      "value": {
                        "operator": "Variables[0] (MDF_TotalStanceDamage) || Variables[1] (MDF_HitStanceDamage) || ADD || RETURN",
                        "displayLines": "(MDF_TotalStanceDamage + MDF_HitStanceDamage)",
                        "constants": [],
                        "variables": [
                          "MDF_TotalStanceDamage",
                          "MDF_HitStanceDamage"
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
            "ADF_AttackGap",
            "ADF_FirstHit"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Constance_Tree02_CD[<span class=\"descriptionNumberColor\">Lament, Lost Soul</span>]",
          "stackData": [],
          "latentQueue": [],
          "description": "After using Talent's Follow-Up ATK <span class=\"descriptionNumberColor\">MDF_Count</span> more time(s), the Skill Point recovery effect from \"Lament, Lost Soul\" can be triggered again.",
          "type": "Other",
          "statusName": "Lament, Lost Soul"
        },
        {
          "name": "Modifier Construction",
          "for": "Constance_Eidolon4_Property[<span class=\"descriptionNumberColor\">Pity Its Heart Gnawed by Worms</span>]",
          "stackType": "ReplaceByCaster",
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
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": [],
          "description": "DMG taken increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "Vulnerability",
          "statusName": "Pity Its Heart Gnawed by Worms"
        }
      ]
    },
    "TheDahlia_Constance_Insert_Part01": {
      "fileName": "TheDahlia_Constance_Insert_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Who's Afraid of Constance?"
        },
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": "Caster",
          "inherentTarget": "Single Target (Primary)",
          "ability": "Constance_Insert_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "TheDahlia_Constance_Insert_SelectTarget": {
      "fileName": "TheDahlia_Constance_Insert_SelectTarget",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Enemies Still Alive",
            "target": "Caster"
          },
          "passed": [
            {
              "name": "Trigger Ability",
              "from": "Caster",
              "inherentTarget": "All Hostile Entities (AOE)",
              "ability": "Constance_Insert_Part01",
              "isTrigger": true
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "_M_Constance_InsertCheck"
            }
          ]
        }
      ],
      "onAbort": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "_M_Constance_InsertCheck"
        }
      ],
      "references": []
    },
    "TheDahlia_Constance_Ability03_Part02": {
      "fileName": "TheDahlia_Constance_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "All Hostile Entities (AOE)",
          "modifier": "Constance_Ultimate_Weakness[<span class=\"descriptionNumberColor\">Wilt</span>]",
          "duration": {
            "operator": "Variables[0] (4) || RETURN",
            "displayLines": "4",
            "constants": [],
            "variables": [
              4
            ]
          },
          "valuePerStack": {
            "MDF_PropertyRatio": {
              "operator": "Variables[0] (0.18) || RETURN",
              "displayLines": "0.18",
              "constants": [],
              "variables": [
                0.18
              ]
            }
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemies Still Alive",
            "target": "Caster"
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": "All Hostile Entities (AOE)(Living)",
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] (3) || RETURN",
                  "displayLines": "3",
                  "constants": [],
                  "variables": [
                    3
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
                "Tags": null,
                "EnergyGainPercent": "100%"
              },
              "distributeEqually": true
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": "All Hostile Entities (AOE)",
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] (3) || RETURN",
                  "displayLines": "3",
                  "constants": [],
                  "variables": [
                    3
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
                "Tags": null,
                "EnergyGainPercent": "100%"
              },
              "distributeEqually": true
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Skip Death Handling",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "TheDahlia_Constance_Ability03_Part01": {
      "fileName": "TheDahlia_Constance_Ability03_Part01",
      "childAbilityList": [
        "TheDahlia_Constance_Ability03_Camera",
        "TheDahlia_Constance_Ability03_EnterReady",
        "TheDahlia_Constance_Ability03_Part01",
        "TheDahlia_Constance_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": 5,
      "toughnessList": [
        0,
        20,
        0
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": "Caster",
          "ability": "Constance_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "TheDahlia_Constance_Ability03_EnterReady": {
      "fileName": "TheDahlia_Constance_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "TheDahlia_Constance_Ability02_Part02": {
      "fileName": "TheDahlia_Constance_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Constance_Aura[<span class=\"descriptionNumberColor\">Lick... Enkindled Betrayal</span>]",
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
              "operator": "Variables[0] (0.5) || RETURN",
              "displayLines": "0.5",
              "constants": [],
              "variables": [
                0.5
              ]
            }
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (1.6) || RETURN",
              "displayLines": "1.6",
              "constants": [],
              "variables": [
                1.6
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
        {
          "name": "ATK Scaling DMG",
          "target": "Blast (Adjacent)",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (1.6) || RETURN",
              "displayLines": "1.6",
              "constants": [],
              "variables": [
                1.6
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
            "Tags": null
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "TheDahlia_Constance_Ability02_Part01": {
      "fileName": "TheDahlia_Constance_Ability02_Part01",
      "childAbilityList": [
        "TheDahlia_Constance_Ability02_Camera",
        "TheDahlia_Constance_Ability02_Part01",
        "TheDahlia_Constance_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": 30,
      "toughnessList": [
        10,
        0,
        10
      ],
      "parse": [
        {
          "name": "Trigger Ability",
          "from": "Caster",
          "ability": "Constance_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "TheDahlia_Constance_Ability01_Part02": {
      "fileName": "TheDahlia_Constance_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
          "AttackScaling": {
            "DamageType": "Fire",
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
    "TheDahlia_Constance_Ability01_Part01": {
      "fileName": "TheDahlia_Constance_Ability01_Part01",
      "childAbilityList": [
        "TheDahlia_Constance_Ability01_Camera",
        "TheDahlia_Constance_Ability01_Part01",
        "TheDahlia_Constance_Ability01_Part02"
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
          "from": "Caster",
          "ability": "Constance_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "TheDahlia_Modifiers": {
      "fileName": "TheDahlia_Modifiers",
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
          "for": "_M_Constance_InsertCheck",
          "modifierFlags": [
            "CustomEvent_InfiniteRefresh"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Constance_InsertRetargetSelf"
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
                  "functionName": "Constance_InsertRetargetSelf"
                }
              ],
              "priorityLevel": -55
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Constance_InsertRetargetSelf"
                }
              ]
            },
            {
              "eventTrigger": "New Enemy Wave",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Constance_InsertRetargetSelf"
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
                        "target": "Use Prior Target(s) Defined",
                        "target2": "Caster",
                        "invertCondition": true
                      },
                      {
                        "name": "Living State",
                        "state": "Mask_AliveOrRevivable",
                        "target": "Caster"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Constance_InsertRetargetSelf"
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "Constance_InsertRetargetSelf",
              "parse": [
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
                      "abilityName": "Constance_Insert_SelectTarget",
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
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Constance_InsertCD[<span class=\"descriptionNumberColor\">Who's Afraid of Constance?</span>]",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": "Owner of this Modifier",
                    "modifier": "Constance_Aura[<span class=\"descriptionNumberColor\">Lick... Enkindled Betrayal</span>]"
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "priorState": "Active",
                      "cooldown": 0
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "priorState": "Normal",
                      "cooldown": 0
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Turn [Action-End Phase]",
              "execute": [
                "Modifier Deletes Itself"
              ],
              "priorityLevel": 100
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Update Displayed Energy Bar",
                  "priorState": "CoolDown",
                  "cooldown": 1
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "Talent's Follow-Up ATK cannot be triggered yet.",
          "type": "Other",
          "statusName": "Who's Afraid of Constance?"
        },
        {
          "name": "Modifier Construction",
          "for": "Constance_Ultimate_Weakness_Sub_Imaginary",
          "stackType": "EntityUnique",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Modify Weaknesses",
                  "target": "Owner of this Modifier",
                  "action": "Attach",
                  "valueList": [
                    "Imaginary"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Constance_Ultimate_Weakness_Sub_Quantum",
          "stackType": "EntityUnique",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Modify Weaknesses",
                  "target": "Owner of this Modifier",
                  "action": "Attach",
                  "valueList": [
                    "Quantum"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Constance_Ultimate_Weakness_Sub_Wind",
          "stackType": "EntityUnique",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Modify Weaknesses",
                  "target": "Owner of this Modifier",
                  "action": "Attach",
                  "valueList": [
                    "Wind"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Constance_Ultimate_Weakness_Sub_Thunder",
          "stackType": "EntityUnique",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Modify Weaknesses",
                  "target": "Owner of this Modifier",
                  "action": "Attach",
                  "valueList": [
                    "Thunder"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Constance_Ultimate_Weakness_Sub_Ice",
          "stackType": "EntityUnique",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Modify Weaknesses",
                  "target": "Owner of this Modifier",
                  "action": "Attach",
                  "valueList": [
                    "Ice"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Constance_Ultimate_Weakness_Sub_Fire",
          "stackType": "EntityUnique",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Modify Weaknesses",
                  "target": "Owner of this Modifier",
                  "action": "Attach",
                  "valueList": [
                    "Fire"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Constance_Ultimate_Weakness_Sub_Physical",
          "stackType": "EntityUnique",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Modify Weaknesses",
                  "target": "Owner of this Modifier",
                  "action": "Attach",
                  "valueList": [
                    "Physical"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Constance_Ultimate_Weakness[<span class=\"descriptionNumberColor\">Wilt</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_AttachWeakness",
            "STAT_DefenceDown"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyRatio) || SUB || RETURN",
                    "displayLines": "(0 - MDF_PropertyRatio)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "MDF_PropertyRatio"
                    ]
                  }
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "_T_Constance_RefreshWeakness"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "Constance_Dancer[<span class=\"descriptionNumberColor\">Dance Partner</span>]"
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "_T_Constance_RefreshWeakness"
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "_T_Constance_RefreshWeakness",
              "parse": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Constance_Ultimate_Weakness_Sub_Physical",
                  "onlyRemoveOwnersInstance": true
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Constance_Ultimate_Weakness_Sub_Fire",
                  "onlyRemoveOwnersInstance": true
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Constance_Ultimate_Weakness_Sub_Ice",
                  "onlyRemoveOwnersInstance": true
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Constance_Ultimate_Weakness_Sub_Thunder",
                  "onlyRemoveOwnersInstance": true
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Constance_Ultimate_Weakness_Sub_Wind",
                  "onlyRemoveOwnersInstance": true
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Constance_Ultimate_Weakness_Sub_Quantum",
                  "onlyRemoveOwnersInstance": true
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Constance_Ultimate_Weakness_Sub_Imaginary",
                  "onlyRemoveOwnersInstance": true
                },
                {
                  "name": "Find New Target",
                  "from": "Dahlia's Dance Partners",
                  "includeDyingTargets": true,
                  "ifTargetFound": [
                    {
                      "name": "SWITCH",
                      "source": {
                        "name": "Damage Type Source",
                        "sourceType": "ReadTargetType",
                        "target": "Use Prior Target(s) Defined"
                      },
                      "caseEvents": [
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": "Physical",
                          "execute": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": "Owner of this Modifier",
                              "modifier": "Constance_Ultimate_Weakness_Sub_Physical",
                              "silentAdd": true
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": "Fire",
                          "execute": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": "Owner of this Modifier",
                              "modifier": "Constance_Ultimate_Weakness_Sub_Fire",
                              "silentAdd": true
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": "Ice",
                          "execute": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": "Owner of this Modifier",
                              "modifier": "Constance_Ultimate_Weakness_Sub_Ice",
                              "silentAdd": true
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": "Thunder",
                          "execute": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": "Owner of this Modifier",
                              "modifier": "Constance_Ultimate_Weakness_Sub_Thunder",
                              "silentAdd": true
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": "Wind",
                          "execute": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": "Owner of this Modifier",
                              "modifier": "Constance_Ultimate_Weakness_Sub_Wind",
                              "silentAdd": true
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": "Quantum",
                          "execute": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": "Owner of this Modifier",
                              "modifier": "Constance_Ultimate_Weakness_Sub_Quantum",
                              "silentAdd": true
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": "Imaginary",
                          "execute": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": "Owner of this Modifier",
                              "modifier": "Constance_Ultimate_Weakness_Sub_Imaginary",
                              "silentAdd": true
                            }
                          ]
                        }
                      ],
                      "defaultEvents": []
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyRatio"
          ],
          "latentQueue": [],
          "description": "DEF decreases by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>. Gains Weaknesses of all Dance Partners' Types.",
          "type": "Debuff",
          "effectName": "Wilt",
          "statusName": "Wilt"
        },
        {
          "name": "Modifier Construction",
          "for": "Constance_Aura_OnEnemy[<span class=\"descriptionNumberColor\">Lick... Enkindled Betrayal</span>]",
          "modifierFlags": [
            "STAT_ForceSuperBreakDamage"
          ],
          "description": "Toughness Reduction taken when not Weakness Broken can also be converted to Super Break DMG.",
          "type": "Debuff",
          "statusName": "Lick... Enkindled Betrayal"
        },
        {
          "name": "Modifier Construction",
          "for": "Constance_Aura[<span class=\"descriptionNumberColor\">Lick... Enkindled Betrayal</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (MDF_Aura_Lifetime) || RETURN",
                    "displayLines": "MDF_Aura_Lifetime",
                    "constants": [],
                    "variables": [
                      "MDF_Aura_Lifetime"
                    ]
                  },
                  "priorState": "Active"
                },
                {
                  "name": "Define Custom Variable",
                  "scope": "AITag",
                  "variableName": "BPSkillPriority",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 0,
                  "priorState": "Normal"
                },
                {
                  "name": "Define Custom Variable",
                  "scope": "AITag",
                  "variableName": "BPSkillPriority",
                  "value": 1
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
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
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "MDF_Aura_Lifetime",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (MDF_Aura_Lifetime) || RETURN",
                        "displayLines": "MDF_Aura_Lifetime",
                        "constants": [],
                        "variables": [
                          "MDF_Aura_Lifetime"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": "Owner of this Modifier",
                        "value1": "MDF_Aura_Lifetime",
                        "compareType": "<=",
                        "value2": 1,
                        "contextScope": "ContextModifier"
                      }
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
          "description": "Weakness Break Efficiency increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>. Toughness Reduction taken by enemy targets that are not Weakness Broken can also be converted to Super Break DMG.",
          "type": "Buff",
          "statusName": "Lick... Enkindled Betrayal",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": "All Hostile Entities (AOE)(ALL)",
              "modifier": "Constance_Aura_OnEnemy[<span class=\"descriptionNumberColor\">Lick... Enkindled Betrayal</span>]",
              "aliveOnly": "False",
              "haloStatus": true
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": "All Teammates + Unselectable (Excluding Owner)",
              "modifier": "Constance_Aura_OnTeam[<span class=\"descriptionNumberColor\">Lick... Enkindled Betrayal</span>]",
              "refModifier": "MReference_StanceBreakAddedRatio",
              "aliveOnly": "False",
              "haloStatus": true,
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
            }
          ]
        }
      ],
      "references": []
    }
  }
}