const compositeAbilityObject = {
  "fullCharacterName": "March 7th - The Hunt",
  "trimCharacterName": "March7thTH",
  "abilityList": [
    "March7thTH_Mar_7th_10_Eidolon4",
    "March7thTH_Mar_7th_10_Eidolon2",
    "March7thTH_Mar_7th_10_Trace03",
    "March7thTH_Mar_7th_10_Trace02",
    "March7thTH_Mar_7th_10_Trace01",
    "March7thTH_Mar_7th_10_TechniqueEnergy",
    "March7thTH_Mar_7th_10_TechniqueInLevel",
    "March7thTH_Mar_7th_10_Ready_Special",
    "March7thTH_Mar_7th_10_PassiveAbility01",
    "March7thTH_Mar_7th_10_Ability03_Part02",
    "March7thTH_Mar_7th_10_Ability03_Part01",
    "March7thTH_Mar_7th_10_Ability03_EnterReady",
    "March7thTH_Mar_7th_10_BPExtraTurn",
    "March7thTH_Mar_7th_10_Ability02_Part02",
    "March7thTH_Mar_7th_10_Ability02_Part01",
    "March7thTH_Mar_7th_10_Ability11_Part02",
    "March7thTH_Mar_7th_10_Ability11_Part01",
    "March7thTH_Mar_7th_10_Eidolon2_Insert_Part02",
    "March7thTH_Mar_7th_10_Eidolon2_Insert_Part01",
    "March7thTH_Mar_7th_10_Eidolon2_Insert_SelectTarget",
    "March7thTH_Mar_7th_10_Ability01_Part02",
    "March7thTH_Mar_7th_10_Ability01_Part01",
    "March7thTH_Modifiers",
    "March7thTH_Functions"
  ],
  "abilityObject": {
    "March7thTH_Mar_7th_10_Eidolon4": {
      "fileName": "March7thTH_Mar_7th_10_Eidolon4",
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
          "modifier": "<a class=\"gModGreen\" id=\"-926052805\">Mar_7th_10_Eidolon4</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-926052805\">Mar_7th_10_Eidolon4</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "operator": "Variables[0] (5) || RETURN",
                    "displayLines": "5",
                    "constants": [],
                    "variables": [
                      5
                    ]
                  },
                  "isFixed": "* ERR"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "March7thTH_Mar_7th_10_Eidolon2": {
      "fileName": "March7thTH_Mar_7th_10_Eidolon2",
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
          "modifier": "<a class=\"gModGreen\" id=\"-825387091\">Mar_7th_10_Eidolon2</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-330303048\">M_Mar_7th_10_Eidolon2_Mark_Main</a>",
          "modifierFlags": [
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
                    "target": "{{Hostile Entities(AOE, with Unselectables)}} - {{Modifier Holder}}"
                  },
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-330303048\">M_Mar_7th_10_Eidolon2_Mark_Main</a>"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-330303048\">M_Mar_7th_10_Eidolon2_Mark_Main</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-825387091\">Mar_7th_10_Eidolon2</a>",
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "Skill_Flag",
                        "compareType": ">=",
                        "value2": 1
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-2014523245\">Mar_7th_10_Ability02_Master</a>[<span class=\"descriptionNumberColor\">Shifu</span>]"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1941685711\">Mar_7th_10_Eidolon2_CD</a>[<span class=\"descriptionNumberColor\">Blade Dances on Waves' Fight</span>]",
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
                      "ifTargetFound": [
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertUnusedCount",
                            "typeValue": 1
                          },
                          "abilityName": "Mar_7th_10_Eidolon2_Insert_SelectTarget",
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
                      ],
                      "noTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"126431759\">M_Mar_7th_10_InsertCheck</a>"
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
                        "modifier": "<a class=\"gModGreen\" id=\"-2014523245\">Mar_7th_10_Ability02_Master</a>[<span class=\"descriptionNumberColor\">Shifu</span>]"
                      },
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Skill Type",
                            "skillType": "Basic ATK"
                          },
                          {
                            "name": "Skill Type",
                            "skillType": "Skill"
                          }
                        ]
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target's Ability Targets}}"
                        },
                        "team": "Enemy Team"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Skill_Flag",
                      "value": 1
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target Count",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target's Ability Targets}}"
                        },
                        "compareType": "=",
                        "value2": 1,
                        "livingTargets": true
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target's Ability Targets}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-330303048\">M_Mar_7th_10_Eidolon2_Mark_Main</a>"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Hostile Entities(AOE, with Unselectables)}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-330303048\">M_Mar_7th_10_Eidolon2_Mark_Main</a>"
                        }
                      ]
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
                  "variableName": "Skill_Flag",
                  "value": 0
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "March7thTH_Mar_7th_10_Trace03": {
      "fileName": "March7thTH_Mar_7th_10_Trace03",
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
          "modifier": "<a class=\"gModGreen\" id=\"512866948\">M_Mar_7th_10_Trace03</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1794469882\">Mar_7th_10_PointB3_Break_Property</a>[<span class=\"descriptionNumberColor\">Tide Tamer</span>]",
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
                    "operator": "Variables[0] (MDF_PropertyRatio) || RETURN",
                    "displayLines": "MDF_PropertyRatio",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Increases Break Effect by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>.",
          "type": "Buff",
          "effectName": "Break Effect Boost",
          "statusName": "Tide Tamer"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-110388147\">Mar_7th_10_PointB3_Kill_Property</a>[<span class=\"descriptionNumberColor\">Tide Tamer</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyRatio) || RETURN",
                    "displayLines": "MDF_PropertyRatio",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Increases CRIT DMG by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>.",
          "type": "Buff",
          "effectName": "CRIT DMG Boost",
          "statusName": "Tide Tamer"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__512866948\">M_Mar_7th_10_Trace03</a>",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Basic ATK"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"2055743569\">Mar_7th_10_Enhance</a>"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Is_Skill11",
                      "value": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Is_Skill11",
                      "value": 0
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Is_Skill11",
                    "compareType": ">=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target Count SUM",
                        "target": {
                          "name": "Target Name",
                          "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
                        },
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-2014523245\">Mar_7th_10_Ability02_Master</a>[<span class=\"descriptionNumberColor\">Shifu</span>]"
                        }
                      },
                      "passed": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Marth 7th's Shifu}}"
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
                              "modifier": "<a class=\"gModGreen\" id=\"-110388147\">Mar_7th_10_PointB3_Kill_Property</a>[<span class=\"descriptionNumberColor\">Tide Tamer</span>]",
                              "duration": {
                                "operator": "Variables[0] (2) || RETURN",
                                "displayLines": "2",
                                "constants": [],
                                "variables": [
                                  2
                                ]
                              },
                              "valuePerStack": {
                                "MDF_PropertyRatio": {
                                  "operator": "Variables[0] (0.6) || RETURN",
                                  "displayLines": "0.6",
                                  "constants": [],
                                  "variables": [
                                    0.6
                                  ]
                                }
                              }
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1794469882\">Mar_7th_10_PointB3_Break_Property</a>[<span class=\"descriptionNumberColor\">Tide Tamer</span>]",
                              "duration": {
                                "operator": "Variables[0] (2) || RETURN",
                                "displayLines": "2",
                                "constants": [],
                                "variables": [
                                  2
                                ]
                              },
                              "valuePerStack": {
                                "MDF_PropertyRatio": {
                                  "operator": "Variables[0] (0.36) || RETURN",
                                  "displayLines": "0.36",
                                  "constants": [],
                                  "variables": [
                                    0.36
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
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "March7thTH_Mar_7th_10_Trace02": {
      "fileName": "March7thTH_Mar_7th_10_Trace02",
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
          "modifier": "<a class=\"gModGreen\" id=\"529644567\">M_Mar_7th_10_Trace02</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__529644567\">M_Mar_7th_10_Trace02</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
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
                          "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
                        },
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-2014523245\">Mar_7th_10_Ability02_Master</a>[<span class=\"descriptionNumberColor\">Shifu</span>]"
                        }
                      },
                      {
                        "name": "Is Weak to Attacker",
                        "weakTo": {
                          "name": "Target Name",
                          "target": "{{Marth 7th's Shifu}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      {
                        "name": "Is Weak to Attacker",
                        "weakTo": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
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
                      "name": "Add Flags to Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "flagName": [
                        "ForceStanceDamage"
                      ],
                      "modifierName": "<a class=\"gModGreen\" id=\"529644567\">M_Mar_7th_10_Trace02</a>"
                    },
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessReductionForced%</span>&nbsp;",
                          "value": 1
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Deal Damage End [Owner]: Any",
              "execute": [
                {
                  "name": "Remove Flags from Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "flagName": [
                    "ForceStanceDamage"
                  ],
                  "modifierName": "<a class=\"gModGreen\" id=\"529644567\">M_Mar_7th_10_Trace02</a>"
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
                    "modifier": "<a class=\"gModGreen\" id=\"-2014523245\">Mar_7th_10_Ability02_Master</a>[<span class=\"descriptionNumberColor\">Shifu</span>]"
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count SUM",
                    "target": {
                      "name": "Target Name",
                      "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
                    },
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2014523245\">Mar_7th_10_Ability02_Master</a>[<span class=\"descriptionNumberColor\">Shifu</span>]"
                    },
                    "invertCondition": true
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
    "March7thTH_Mar_7th_10_Trace01": {
      "fileName": "March7thTH_Mar_7th_10_Trace01",
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
          "modifier": "<a class=\"gModGreen\" id=\"546422186\">M_Mar_7th_10_Trace01</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__546422186\">M_Mar_7th_10_Trace01</a>",
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
                      "name": "Action Advance/Delay",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "advanceType": "Set",
                      "multiAdd": "(0 - 0.25)"
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
    "March7thTH_Mar_7th_10_TechniqueEnergy": {
      "fileName": "March7thTH_Mar_7th_10_TechniqueEnergy",
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
          "modifier": "<a class=\"gModGreen\" id=\"-321936663\">Mar_7th_10_TechniqueEnergy</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-321936663\">Mar_7th_10_TechniqueEnergy</a>",
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
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1762944127\">Mar_7th_10_GainEnergyWithCheck</a>",
                      "variables": {
                        "parameter[0]_AddValue": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
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
    "March7thTH_Mar_7th_10_TechniqueInLevel": {
      "fileName": "March7thTH_Mar_7th_10_TechniqueInLevel",
      "childAbilityList": [
        "March7thTH_Mar_7th_10_TechniqueInLevel"
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
          "modifier": "<a class=\"gModGreen\" id=\"272360968\">Mar_7th_10_TechniqueInLevel</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__272360968\">Mar_7th_10_TechniqueInLevel</a>",
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
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
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
          "latentQueue": []
        }
      ]
    },
    "March7thTH_Mar_7th_10_Ready_Special": {
      "fileName": "March7thTH_Mar_7th_10_Ready_Special",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "_has_enhanced_this_turn",
          "value": 1
        },
        {
          "name": "UI Display Event",
          "popUpText": "Master, I've Ascended!"
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "March7thTH_Mar_7th_10_PassiveAbility01": {
      "fileName": "March7thTH_Mar_7th_10_PassiveAbility01",
      "childAbilityList": [
        "March7thTH_Mar_7th_10_PassiveAbility01",
        "March7thTH_Mar_7th_10_Camera_Insert",
        "March7thTH_Mar_7th_10_Ready_Special",
        "March7thTH_Mar_7th_10_Ready_Special_Camera"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": 5,
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
          "modifier": "<a class=\"gModGreen\" id=\"1250541414\">Mar_7th_10_Passive</a>"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "EnergyBar_MaxEnergy",
          "value": {
            "operator": "Variables[0] (7) || RETURN",
            "displayLines": "7",
            "constants": [],
            "variables": [
              7
            ]
          }
        },
        {
          "name": "Read Variable Value",
          "adjustmentType": "Add to Value (Default)",
          "variableName": "EnergyBar_CurEnergy",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Adjust Variable Value",
          "adjustmentType": "Overwrite Value",
          "variableName": "EnergyBar_CurEnergy",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Skill11_BasicCount",
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
          "name": "Define Custom Variable",
          "variableName": "Skill11_FixedChance",
          "value": {
            "operator": "Variables[0] (0.6) || RETURN",
            "displayLines": "0.6",
            "constants": [],
            "variables": [
              0.6
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "scope": "ContextCaster",
          "variableName": "Skill11_DamagePercatage",
          "value": {
            "operator": "Variables[0] (0.8) || RETURN",
            "displayLines": "0.8",
            "constants": [],
            "variables": [
              0.8
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-388995203\">Mar_7th_10_Energy</a>[<span class=\"descriptionNumberColor\">Charge</span>]",
          "counter": {
            "operator": "Variables[0] (EnergyBar_CurEnergy) || RETURN",
            "displayLines": "EnergyBar_CurEnergy",
            "constants": [],
            "variables": [
              "EnergyBar_CurEnergy"
            ]
          },
          "valuePerStack": {
            "MDF_PropertyRatio": {
              "operator": "Variables[0] (0.8) || RETURN",
              "displayLines": "0.8",
              "constants": [],
              "variables": [
                0.8
              ]
            },
            "MDF_Count": {
              "operator": "Variables[0] (EnergyBar_MaxEnergy) || RETURN",
              "displayLines": "EnergyBar_MaxEnergy",
              "constants": [],
              "variables": [
                "EnergyBar_MaxEnergy"
              ]
            }
          }
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (EnergyBar_CurEnergy) || RETURN",
            "displayLines": "EnergyBar_CurEnergy",
            "constants": [],
            "variables": [
              "EnergyBar_CurEnergy"
            ]
          },
          "maximum": {
            "operator": "Variables[0] (EnergyBar_MaxEnergy) || RETURN",
            "displayLines": "EnergyBar_MaxEnergy",
            "constants": [],
            "variables": [
              "EnergyBar_MaxEnergy"
            ]
          },
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 2,
          "cooldown": 0
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1250541414\">Mar_7th_10_Passive</a>",
          "modifierFlags": [
            "CustomEvent_InfiniteRefresh"
          ],
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
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"2055743569\">Mar_7th_10_Enhance</a>"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_has_enhanced_this_turn",
                        "compareType": "<=",
                        "value2": 0,
                        "contextScope": "ContextCaster"
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
                      "conditionActive": {
                        "name": "Enemies Still Alive",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "includeNonTargets": true
                      },
                      "abilityName": "Mar_7th_10_Ready_Special",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "priorityTag": "PROG_AvatarLowest",
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
              "priorityLevel": 100
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
                        "name": "Current Turn Is",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      "Turn Owner is in Action",
                      {
                        "name": "Compare: Variable",
                        "value1": "_has_enhanced_this_turn",
                        "compareType": "<=",
                        "value2": 0,
                        "contextScope": "ContextCaster"
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
                        "modifier": "<a class=\"gModGreen\" id=\"2055743569\">Mar_7th_10_Enhance</a>"
                      },
                      "passed": [
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertUnusedCount",
                            "typeValue": 1
                          },
                          "conditionActive": {
                            "name": "Enemies Still Alive",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "includeNonTargets": true
                          },
                          "abilityName": "Mar_7th_10_Ready_Special",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "priorityTag": "PROG_AvatarLowest",
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
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1630889366\">Mar_7th_10_GetEnhance</a>"
                }
              ],
              "priorityLevel": 999999
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1630889366\">Mar_7th_10_GetEnhance</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Owner]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1630889366\">Mar_7th_10_GetEnhance</a>"
                }
              ]
            },
            {
              "eventTrigger": "New Enemy Wave",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1630889366\">Mar_7th_10_GetEnhance</a>"
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
                        "name": "Current Turn Is",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      "Turn Owner is in Action",
                      {
                        "name": "Compare: Variable",
                        "value1": "_has_enhanced_this_turn",
                        "compareType": "<=",
                        "value2": 0,
                        "contextScope": "ContextCaster"
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
                        "modifier": "<a class=\"gModGreen\" id=\"2055743569\">Mar_7th_10_Enhance</a>"
                      },
                      "passed": [
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertUnusedCount",
                            "typeValue": 1
                          },
                          "conditionActive": {
                            "name": "Enemies Still Alive",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "includeNonTargets": true
                          },
                          "abilityName": "Mar_7th_10_Ready_Special",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "priorityTag": "PROG_AvatarLowest",
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
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "EnergyBar_CurEnergy",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 99,
                  "includeMaxValueInRange": true,
                  "whenValueChanges": [
                    {
                      "name": "Define Modifier Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifierName": "<a class=\"gModGreen\" id=\"-388995203\">Mar_7th_10_Energy</a>[<span class=\"descriptionNumberColor\">Charge</span>]",
                      "value": {
                        "operator": "Variables[0] (EnergyBar_CurEnergy) || RETURN",
                        "displayLines": "EnergyBar_CurEnergy",
                        "constants": [],
                        "variables": [
                          "EnergyBar_CurEnergy"
                        ]
                      }
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (EnergyBar_CurEnergy) || RETURN",
                        "displayLines": "EnergyBar_CurEnergy",
                        "constants": [],
                        "variables": [
                          "EnergyBar_CurEnergy"
                        ]
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
                        "modifier": "<a class=\"gModGreen\" id=\"2055743569\">Mar_7th_10_Enhance</a>"
                      },
                      "passed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "priorState": "Active"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "priorState": "Normal"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__1630889366\">Mar_7th_10_GetEnhance</a>",
              "parse": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "EnergyBar_CurEnergy",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (EnergyBar_MaxEnergy) || RETURN",
                      "displayLines": "EnergyBar_MaxEnergy",
                      "constants": [],
                      "variables": [
                        "EnergyBar_MaxEnergy"
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
                      "modifier": "<a class=\"gModGreen\" id=\"2055743569\">Mar_7th_10_Enhance</a>",
                      "valuePerStack": {
                        "MDF_PropertyRatio": {
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
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "March7thTH_Mar_7th_10_Ability03_Part02": {
      "fileName": "March7thTH_Mar_7th_10_Ability03_Part02",
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
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (2.4) || RETURN",
              "displayLines": "2.4",
              "constants": [],
              "variables": [
                2.4
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1546960372\">Mar_7th_10_Ability03_Enhance_Normal</a>[<span class=\"descriptionNumberColor\">March 7th, the Apex Heroine</span>]",
          "valuePerStack": {
            "MDF_Value": {
              "operator": "Variables[0] (2) || RETURN",
              "displayLines": "2",
              "constants": [],
              "variables": [
                2
              ]
            },
            "MDF_Chance": {
              "operator": "Variables[0] (0.2) || RETURN",
              "displayLines": "0.2",
              "constants": [],
              "variables": [
                0.2
              ]
            },
            "MDF_PropertyRatio": {
              "operator": "Variables[0] (0.5) || RETURN",
              "displayLines": "0.5",
              "constants": [],
              "variables": [
                0.5
              ]
            }
          }
        },
        "Trigger: Skip Death Handling",
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1546960372\">Mar_7th_10_Ability03_Enhance_Normal</a>[<span class=\"descriptionNumberColor\">March 7th, the Apex Heroine</span>]",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "scope": "ContextCaster",
                  "variableName": "Skill11_BasicCount",
                  "value": {
                    "operator": "Variables[0] (3) || Variables[1] (MDF_Value) || ADD || RETURN",
                    "displayLines": "(3 + MDF_Value)",
                    "constants": [],
                    "variables": [
                      3,
                      "MDF_Value"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "scope": "ContextCaster",
                  "variableName": "Skill11_FixedChance",
                  "value": {
                    "operator": "Variables[0] (0.6) || Variables[1] (MDF_Chance) || ADD || RETURN",
                    "displayLines": "(0.6 + MDF_Chance)",
                    "constants": [],
                    "variables": [
                      0.6,
                      "MDF_Chance"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "scope": "ContextCaster",
                  "variableName": "Skill11_BasicCount",
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
                  "name": "Define Custom Variable",
                  "scope": "ContextCaster",
                  "variableName": "Skill11_FixedChance",
                  "value": {
                    "operator": "Variables[0] (0.6) || RETURN",
                    "displayLines": "0.6",
                    "constants": [],
                    "variables": [
                      0.6
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "scope": "ContextCaster",
                  "variableName": "Skill11_DamagePercatage",
                  "value": {
                    "operator": "Variables[0] (0.8) || RETURN",
                    "displayLines": "0.8",
                    "constants": [],
                    "variables": [
                      0.8
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Action Choice Window [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"2055743569\">Mar_7th_10_Enhance</a>"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Deal Damage Start [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Eidolon Activated",
                        "eidolon": 6
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"2055743569\">Mar_7th_10_Enhance</a>"
                      },
                      {
                        "name": "Attack Type",
                        "attackTypes": [
                          "Basic ATK"
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
                          "value": "MDF_PropertyRatio"
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
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 6
                  },
                  "passed": [
                    {
                      "name": "Update Modifier Description",
                      "popUpText": "The next Enhanced Basic ATK's initial Hits Per Action increases by <span class=\"descriptionNumberColor\">MDF_Value</span>. The fixed chance of additionally dealing DMG increases by <span class=\"descriptionNumberColor\">MDF_Chance</span>, and CRIT DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>."
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: End"
            },
            {
              "eventTrigger": "Ultimate Prep-Phase [Anyone]"
            }
          ],
          "stackData": [
            "MDF_Value",
            "MDF_Chance",
            "MDF_PropertyRatio"
          ],
          "latentQueue": [],
          "description": "Increases the next Enhanced Basic ATK's initial Hits Per Action by <span class=\"descriptionNumberColor\">MDF_Value</span>. The fixed chance of additionally dealing DMG increases by <span class=\"descriptionNumberColor\">MDF_Chance</span>.",
          "type": "Other",
          "effectName": "Enhanced Basic Attack Boost",
          "statusName": "March 7th, the Apex Heroine"
        }
      ]
    },
    "March7thTH_Mar_7th_10_Ability03_Part01": {
      "fileName": "March7thTH_Mar_7th_10_Ability03_Part01",
      "childAbilityList": [
        "March7thTH_Mar_7th_10_Ability03_EnterReady",
        "March7thTH_Mar_7th_10_Ability03_Part01",
        "March7thTH_Mar_7th_10_Ability03_Part02",
        "March7thTH_Mar_7th_10_Ability03_Camera"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": 5,
      "toughnessList": [
        30,
        0,
        0
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Mar_7th_10_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "March7thTH_Mar_7th_10_Ability03_EnterReady": {
      "fileName": "March7thTH_Mar_7th_10_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "March7thTH_Mar_7th_10_BPExtraTurn": {
      "fileName": "March7thTH_Mar_7th_10_BPExtraTurn",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit"
      ],
      "references": []
    },
    "March7thTH_Mar_7th_10_Ability02_Part02": {
      "fileName": "March7thTH_Mar_7th_10_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Animator Variable",
            "paramType": "Bool",
            "paramName": "IsRareMilk",
            "compareType": "=",
            "compareValue": true
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"591989145\">M_Mar_7th_10_AchievementFlag</a>"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2014523245\">Mar_7th_10_Ability02_Master</a>[<span class=\"descriptionNumberColor\">Shifu</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-178417190\">Mar_7th_10_Ability02_Master_SpeedUp</a>[<span class=\"descriptionNumberColor\">Master, It's Tea Time!</span>]",
          "valuePerStack": {
            "MDF_PropertyRatio": {
              "operator": "Variables[0] (0.1) || RETURN",
              "displayLines": "0.1",
              "constants": [],
              "variables": [
                0.1
              ]
            }
          }
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "valuePercent": 1,
          "ofAbilitySplit": true,
          "isFixed": "* ERR"
        },
        "Trigger: Ability End"
      ],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"7821473\">M_Mar_7th_10_AbilityPreShowModifier_Self</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"955806322\">M_Mar_7th_10_AbilityPreShowModifier_Target</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-297375959\">M_Mar_7th_10_SpecialMark_Adder</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__847986139\">M_Mar_7th_10_SpecialMark_2</a>",
          "modifierFlags": [
            "ListenBattleEventSkill",
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Toggle Skill Mark"
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
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Current Turn Owner}}"
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
                        "name": "Compare: Target Count SUM",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Player's Aim Target List}}"
                        },
                        "conditions": {
                          "name": "Compare: Target",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "target2": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          }
                        }
                      },
                      "passed": [
                        {
                          "name": "Toggle Skill Mark",
                          "toggle": true,
                          "skillTypesAllow": [
                            "Skill"
                          ],
                          "trigger": "State_Active"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Toggle Skill Mark",
                          "toggle": true,
                          "skillTypesAllow": [
                            "Skill"
                          ],
                          "trigger": "State_Normal"
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__864763758\">M_Mar_7th_10_SpecialMark_1</a>",
          "modifierFlags": [
            "ListenBattleEventSkill",
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Toggle Skill Mark"
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
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Current Turn Owner}}"
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
                        "name": "Compare: Target Count SUM",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Player's Aim Target List}}"
                        },
                        "conditions": {
                          "name": "Compare: Target",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "target2": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          }
                        }
                      },
                      "passed": [
                        {
                          "name": "Toggle Skill Mark",
                          "toggle": true,
                          "skillTypesAllow": [
                            "Skill"
                          ],
                          "trigger": "State_Active"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Toggle Skill Mark",
                          "toggle": true,
                          "skillTypesAllow": [
                            "Skill"
                          ],
                          "trigger": "State_Normal"
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-297375959\">M_Mar_7th_10_SpecialMark_Adder</a>",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "mustBeAlive2": true
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Target is Pathstrider",
                        "path": [
                          "Destruction",
                          "Erudition",
                          "The Hunt",
                          "Remembrance",
                          "Elation"
                        ],
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"864763758\">M_Mar_7th_10_SpecialMark_1</a>"
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Target is Pathstrider",
                            "path": [
                              "Harmony",
                              "Nihility",
                              "Preservation",
                              "Abundance"
                            ],
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            }
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"847986139\">M_Mar_7th_10_SpecialMark_2</a>"
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
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
                  },
                  "searchRandom": true,
                  "ifTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Target is Pathstrider",
                        "path": [
                          "Destruction",
                          "Erudition",
                          "The Hunt",
                          "Remembrance",
                          "Elation"
                        ],
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"864763758\">M_Mar_7th_10_SpecialMark_1</a>"
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Target is Pathstrider",
                            "path": [
                              "Harmony",
                              "Nihility",
                              "Preservation",
                              "Abundance"
                            ],
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            }
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"847986139\">M_Mar_7th_10_SpecialMark_2</a>"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ],
              "priorityLevel": 999999
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__955806322\">M_Mar_7th_10_AbilityPreShowModifier_Target</a>",
          "stackData": [],
          "latentQueue": [],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": {
              "name": "Target Name",
              "target": "{{Player's Aim Target List}}"
            },
            "skillType": [
              "Skill"
            ],
            "conditions": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-178417190\">Mar_7th_10_Ability02_Master_SpeedUp</a>[<span class=\"descriptionNumberColor\">Master, It's Tea Time!</span>]",
              "invertCondition": true
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": "0.1(SPD Change)"
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__7821473\">M_Mar_7th_10_AbilityPreShowModifier_Self</a>",
          "stackData": [],
          "latentQueue": [],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "skillType": [
              "Skill"
            ],
            "conditions": {
              "name": "AND",
              "conditionList": [
                {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-237230767\">Mar_7th_10_Eidolon1_SpeedUp</a>[<span class=\"descriptionNumberColor\">My Sword Stirs Starlight</span>]",
                  "invertCondition": true
                },
                {
                  "name": "Eidolon Activated",
                  "eidolon": 1
                }
              ]
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": "0.1(SPD Change)"
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__591989145\">M_Mar_7th_10_AchievementFlag</a>",
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "March7thTH_Mar_7th_10_Ability02_Part01": {
      "fileName": "March7thTH_Mar_7th_10_Ability02_Part01",
      "childAbilityList": [
        "March7thTH_Mar_7th_10_Ability02_Part01",
        "March7thTH_Mar_7th_10_Ability02_Part02",
        "March7thTH_Mar_7th_10_Ability02_Camera",
        "March7thTH_Mar_7th_10_BPExtraTurn",
        "March7thTH_Mar_7th_10_Bonus_Camera"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": 30,
      "toughnessList": [
        0,
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
          "ability": "Mar_7th_10_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "March7thTH_Mar_7th_10_Ability11_Part02": {
      "fileName": "March7thTH_Mar_7th_10_Ability11_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "_have_gain_sp",
          "value": 0
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Skill11_HitCount",
            "compareType": ">",
            "value2": {
              "operator": "Constants[0] (4) || Variables[0] (Skill11_BasicCount) || SUB || RETURN",
              "displayLines": "(4 - Skill11_BasicCount)",
              "constants": [
                4
              ],
              "variables": [
                "Skill11_BasicCount"
              ]
            },
            "contextScope": "ContextCaster"
          },
          "passed": [
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "valuePercent": 1,
              "ofAbilitySplit": true,
              "isFixed": "* ERR"
            },
            {
              "name": "Shot Fired",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1235975678\">Deal_Single_Hit</a>",
                  "variables": {
                    "parameter[1]_IsFinalHit": 0
                  }
                }
              ]
            },
            {
              "name": "Shot Fired",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1235975678\">Deal_Single_Hit</a>",
                  "variables": {
                    "parameter[1]_IsFinalHit": 0
                  }
                }
              ]
            },
            {
              "name": "Shot Fired",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1235975678\">Deal_Single_Hit</a>",
                  "variables": {
                    "parameter[1]_IsFinalHit": 0
                  }
                }
              ]
            },
            {
              "name": "Shot Fired",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1235975678\">Deal_Single_Hit</a>",
                  "variables": {
                    "parameter[1]_IsFinalHit": 1
                  }
                }
              ]
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1401872852\">Shoot_Effect</a>"
            },
            {
              "name": "Shot Fired"
            },
            {
              "name": "Looped Event",
              "maxLoops": {
                "operator": "Variables[0] (Skill11_BasicCount) || Variables[1] (Skill11_HitCount) || ADD || Constants[0] (5) || SUB || RETURN",
                "displayLines": "((Skill11_BasicCount + Skill11_HitCount) - 5)",
                "constants": [
                  5
                ],
                "variables": [
                  "Skill11_BasicCount",
                  "Skill11_HitCount"
                ]
              },
              "Event": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"78809812\">Deal_Loop_Hit</a>"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Skill11_HitCount",
                "compareType": ">",
                "value2": {
                  "operator": "Constants[0] (5) || Variables[0] (Skill11_BasicCount) || SUB || RETURN",
                  "displayLines": "(5 - Skill11_BasicCount)",
                  "constants": [
                    5
                  ],
                  "variables": [
                    "Skill11_BasicCount"
                  ]
                },
                "contextScope": "ContextCaster"
              }
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1956087107\">Deal_Loop_Hit_Final</a>"
            }
          ],
          "failed": [
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "valuePercent": 1,
              "ofAbilitySplit": true,
              "isFixed": "* ERR"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1401872852\">Shoot_Effect</a>"
            },
            {
              "name": "Shot Fired"
            },
            {
              "name": "Looped Event",
              "maxLoops": {
                "operator": "Variables[0] (Skill11_BasicCount) || Variables[1] (Skill11_HitCount) || ADD || Constants[0] (1) || SUB || RETURN",
                "displayLines": "((Skill11_BasicCount + Skill11_HitCount) - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "Skill11_BasicCount",
                  "Skill11_HitCount"
                ]
              },
              "Event": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"78809812\">Deal_Loop_Hit</a>"
                }
              ]
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1956087107\">Deal_Loop_Hit_Final</a>"
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1762944127\">Mar_7th_10_GainEnergyWithCheck</a>",
          "variables": {
            "parameter[0]_AddValue": {
              "operator": "Constants[0] (0) || Variables[0] (EnergyBar_MaxEnergy) || SUB || RETURN",
              "displayLines": "(0 - EnergyBar_MaxEnergy)",
              "constants": [
                0
              ],
              "variables": [
                "EnergyBar_MaxEnergy"
              ]
            }
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1546960372\">Mar_7th_10_Ability03_Enhance_Normal</a>[<span class=\"descriptionNumberColor\">March 7th, the Apex Heroine</span>]"
        },
        "Trigger: Ability End"
      ],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"218557064\">M_Mar_7th_10_Ability11_Preshow</a>"
        }
      ],
      "functions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1401872852\">Shoot_Effect</a>",
          "parse": []
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1235975678\">Deal_Single_Hit</a>",
          "parse": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "variableName": "_target_stance_before_attack",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Target Count SUM",
                    "target": {
                      "name": "Target Name",
                      "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
                    },
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2014523245\">Mar_7th_10_Ability02_Master</a>[<span class=\"descriptionNumberColor\">Shifu</span>]"
                    }
                  },
                  {
                    "name": "Target is Pathstrider",
                    "path": [
                      "Destruction",
                      "Erudition",
                      "The Hunt",
                      "Harmony",
                      "Nihility",
                      "Preservation",
                      "Abundance",
                      "Remembrance",
                      "Elation"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Marth 7th's Shifu}}"
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Target is Pathstrider",
                    "path": [
                      "Destruction",
                      "Erudition",
                      "The Hunt",
                      "Remembrance",
                      "Elation"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Marth 7th's Shifu}}"
                    }
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Arg1_IsFinalHit",
                "compareType": ">=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Imaginary",
                    "Damage": {
                      "operator": "Variables[0] (Skill11_DamagePercatage) || RETURN",
                      "displayLines": "Skill11_DamagePercatage",
                      "constants": [],
                      "variables": [
                        "Skill11_DamagePercatage"
                      ]
                    },
                    "Toughness": {
                      "operator": "Variables[0] (ST Toughness Value) || Variables[1] (Normal_StanceRatio) || MUL || RETURN",
                      "displayLines": "(ST Toughness Value * Normal_StanceRatio)",
                      "constants": [],
                      "variables": [
                        "ST Toughness Value",
                        "Normal_StanceRatio"
                      ]
                    },
                    "Tags": null
                  }
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Imaginary",
                    "Damage": {
                      "operator": "Variables[0] (Skill11_DamagePercatage) || RETURN",
                      "displayLines": "Skill11_DamagePercatage",
                      "constants": [],
                      "variables": [
                        "Skill11_DamagePercatage"
                      ]
                    },
                    "Toughness": {
                      "operator": "Variables[0] (ST Toughness Value) || Variables[1] (Normal_StanceRatio) || MUL || RETURN",
                      "displayLines": "(ST Toughness Value * Normal_StanceRatio)",
                      "constants": [],
                      "variables": [
                        "ST Toughness Value",
                        "Normal_StanceRatio"
                      ]
                    },
                    "Tags": null
                  }
                }
              ]
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1835349740\">Mar_7th_10_Jianshi</a>",
              "isGlobal": true,
              "variables": {
                "parameter[00]_IsAbility11": 1
              }
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__78809812\">Deal_Loop_Hit</a>",
          "parse": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "variableName": "_target_stance_before_attack",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Target Count SUM",
                    "target": {
                      "name": "Target Name",
                      "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
                    },
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2014523245\">Mar_7th_10_Ability02_Master</a>[<span class=\"descriptionNumberColor\">Shifu</span>]"
                    }
                  },
                  {
                    "name": "Target is Pathstrider",
                    "path": [
                      "Destruction",
                      "Erudition",
                      "The Hunt",
                      "Harmony",
                      "Nihility",
                      "Preservation",
                      "Abundance",
                      "Remembrance",
                      "Elation"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Marth 7th's Shifu}}"
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Target is Pathstrider",
                    "path": [
                      "Destruction",
                      "Erudition",
                      "The Hunt",
                      "Remembrance",
                      "Elation"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Marth 7th's Shifu}}"
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
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "operator": "Variables[0] (Skill11_DamagePercatage) || RETURN",
                  "displayLines": "Skill11_DamagePercatage",
                  "constants": [],
                  "variables": [
                    "Skill11_DamagePercatage"
                  ]
                },
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || Variables[1] (Normal_StanceRatio) || MUL || RETURN",
                  "displayLines": "(ST Toughness Value * Normal_StanceRatio)",
                  "constants": [],
                  "variables": [
                    "ST Toughness Value",
                    "Normal_StanceRatio"
                  ]
                },
                "Tags": null
              }
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1835349740\">Mar_7th_10_Jianshi</a>",
              "isGlobal": true,
              "variables": {
                "parameter[00]_IsAbility11": 1
              }
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1956087107\">Deal_Loop_Hit_Final</a>",
          "parse": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "variableName": "_target_stance_before_attack",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Target Count SUM",
                    "target": {
                      "name": "Target Name",
                      "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
                    },
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2014523245\">Mar_7th_10_Ability02_Master</a>[<span class=\"descriptionNumberColor\">Shifu</span>]"
                    }
                  },
                  {
                    "name": "Target is Pathstrider",
                    "path": [
                      "Destruction",
                      "Erudition",
                      "The Hunt",
                      "Harmony",
                      "Nihility",
                      "Preservation",
                      "Abundance",
                      "Remembrance",
                      "Elation"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Marth 7th's Shifu}}"
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Target is Pathstrider",
                    "path": [
                      "Destruction",
                      "Erudition",
                      "The Hunt",
                      "Remembrance",
                      "Elation"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Marth 7th's Shifu}}"
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
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "operator": "Variables[0] (Skill11_DamagePercatage) || RETURN",
                  "displayLines": "Skill11_DamagePercatage",
                  "constants": [],
                  "variables": [
                    "Skill11_DamagePercatage"
                  ]
                },
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || Variables[1] (Normal_StanceRatio) || MUL || RETURN",
                  "displayLines": "(ST Toughness Value * Normal_StanceRatio)",
                  "constants": [],
                  "variables": [
                    "ST Toughness Value",
                    "Normal_StanceRatio"
                  ]
                },
                "Tags": null
              }
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1835349740\">Mar_7th_10_Jianshi</a>",
              "isGlobal": true,
              "variables": {
                "parameter[00]_IsAbility11": 1
              }
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__218557064\">M_Mar_7th_10_Ability11_Preshow</a>",
          "stackData": [],
          "latentQueue": [
            "_have_gain_sp"
          ],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "skillType": "Basic ATK",
            "conditions": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2055743569\">Mar_7th_10_Enhance</a>"
            },
            "multiplier": {
              "operator": "Variables[0] (Normal_StanceRatio) || Variables[1] (Skill11_BasicCount) || MUL || RETURN",
              "displayLines": "(Normal_StanceRatio * Skill11_BasicCount)",
              "constants": [],
              "variables": [
                "Normal_StanceRatio",
                "Skill11_BasicCount"
              ]
            }
          }
        }
      ]
    },
    "March7thTH_Mar_7th_10_Ability11_Part01": {
      "fileName": "March7thTH_Mar_7th_10_Ability11_Part01",
      "childAbilityList": [
        "March7thTH_Mar_7th_10_Ability11_Part01",
        "March7thTH_Mar_7th_10_Ability11_Part02",
        "March7thTH_Mar_7th_10_Ability11_Camera",
        "March7thTH_Mar_7th_10_Ability11_Camera_Alt"
      ],
      "skillTrigger": "Skill11",
      "abilityType": "Basic ATK",
      "energy": 30,
      "toughnessList": [
        5,
        0,
        0
      ],
      "parse": [
        {
          "name": "Define Custom Variable",
          "scope": "ContextCaster",
          "variableName": "Skill11_HitCount",
          "value": 0
        },
        {
          "name": "Looped Event",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Random Chance",
                "chance": {
                  "operator": "Variables[0] (Skill11_FixedChance) || Variables[1] (MAR7_HUNT_OBJECT_UNUSED_3) || ADD || RETURN",
                  "displayLines": "(Skill11_FixedChance + MAR7_HUNT_OBJECT_UNUSED_3)",
                  "constants": [],
                  "variables": [
                    "Skill11_FixedChance",
                    "MAR7_HUNT_OBJECT_UNUSED_3"
                  ]
                }
              },
              {
                "name": "Compare: Variable",
                "value1": "Skill11_HitCount",
                "compareType": "<",
                "value2": {
                  "operator": "Variables[0] (3) || RETURN",
                  "displayLines": "3",
                  "constants": [],
                  "variables": [
                    3
                  ]
                },
                "contextScope": "ContextCaster"
              }
            ]
          },
          "Event": [
            {
              "name": "Define Custom Variable",
              "scope": "ContextCaster",
              "variableName": "Skill11_HitCount",
              "value": {
                "operator": "Variables[0] (Skill11_HitCount) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(Skill11_HitCount + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "Skill11_HitCount"
                ]
              }
            }
          ]
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Mar_7th_10_Ability11_Part02",
          "isTrigger": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Skill11_HitCount",
            "compareType": ">",
            "value2": {
              "operator": "Constants[0] (4) || Variables[0] (Skill11_BasicCount) || SUB || RETURN",
              "displayLines": "(4 - Skill11_BasicCount)",
              "constants": [
                4
              ],
              "variables": [
                "Skill11_BasicCount"
              ]
            },
            "contextScope": "ContextCaster"
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
    "March7thTH_Mar_7th_10_Eidolon2_Insert_Part02": {
      "fileName": "March7thTH_Mar_7th_10_Eidolon2_Insert_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"126431759\">M_Mar_7th_10_InsertCheck</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE, with Unselectables)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-330303048\">M_Mar_7th_10_Eidolon2_Mark_Main</a>"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "variableName": "_target_stance_before_attack",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1941685711\">Mar_7th_10_Eidolon2_CD</a>[<span class=\"descriptionNumberColor\">Blade Dances on Waves' Fight</span>]"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (0.6) || RETURN",
              "displayLines": "0.6",
              "constants": [],
              "variables": [
                0.6
              ]
            },
            "HitSplit": 0.4,
            "Toughness": {
              "operator": "Variables[0] (15) || Variables[1] (Normal_StanceRatio) || MUL || RETURN",
              "displayLines": "(15 * Normal_StanceRatio)",
              "constants": [],
              "variables": [
                15,
                "Normal_StanceRatio"
              ]
            },
            "Tags": null,
            "attackType": "Follow-up"
          }
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": {
            "operator": "Constants[0] (0.4) || Variables[0] (5) || MUL || RETURN",
            "displayLines": "(0.4 * 5)",
            "constants": [
              0.4
            ],
            "variables": [
              5
            ]
          },
          "isFixed": "* ERR"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (0.6) || RETURN",
              "displayLines": "0.6",
              "constants": [],
              "variables": [
                0.6
              ]
            },
            "HitSplit": 0.6,
            "Toughness": {
              "operator": "Variables[0] (15) || Variables[1] (Normal_StanceRatio) || MUL || RETURN",
              "displayLines": "(15 * Normal_StanceRatio)",
              "constants": [],
              "variables": [
                15,
                "Normal_StanceRatio"
              ]
            },
            "Tags": null,
            "attackType": "Follow-up"
          }
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": {
            "operator": "Constants[0] (0.6) || Variables[0] (5) || MUL || RETURN",
            "displayLines": "(0.6 * 5)",
            "constants": [
              0.6
            ],
            "variables": [
              5
            ]
          },
          "isFixed": "* ERR"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1835349740\">Mar_7th_10_Jianshi</a>",
          "isGlobal": true,
          "variables": {
            "parameter[00]_IsAbility11": 0
          }
        },
        "Trigger: Attack End",
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1762944127\">Mar_7th_10_GainEnergyWithCheck</a>",
          "variables": {
            "parameter[0]_AddValue": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            }
          }
        }
      ],
      "references": []
    },
    "March7thTH_Mar_7th_10_Eidolon2_Insert_Part01": {
      "fileName": "March7thTH_Mar_7th_10_Eidolon2_Insert_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Blade Dances on Waves' Fight"
        },
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
          "ability": "Mar_7th_10_Eidolon2_Insert_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "references": []
    },
    "March7thTH_Mar_7th_10_Eidolon2_Insert_SelectTarget": {
      "fileName": "March7thTH_Mar_7th_10_Eidolon2_Insert_SelectTarget",
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
                "modifier": "<a class=\"gModGreen\" id=\"-330303048\">M_Mar_7th_10_Eidolon2_Mark_Main</a>"
              }
            ]
          },
          "ifTargetFound": [
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
              "ability": "Mar_7th_10_Eidolon2_Insert_Part01",
              "isTrigger": true
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
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "inherentTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "ability": "Mar_7th_10_Eidolon2_Insert_Part01",
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
                  "modifier": "<a class=\"gModGreen\" id=\"126431759\">M_Mar_7th_10_InsertCheck</a>"
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
          "modifier": "<a class=\"gModGreen\" id=\"126431759\">M_Mar_7th_10_InsertCheck</a>"
        }
      ],
      "references": []
    },
    "March7thTH_Mar_7th_10_Ability01_Part02": {
      "fileName": "March7thTH_Mar_7th_10_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "variableName": "_target_stance_before_attack",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "HitSplit": 0.4,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || Variables[1] (Normal_StanceRatio) || MUL || RETURN",
              "displayLines": "(ST Toughness Value * Normal_StanceRatio)",
              "constants": [],
              "variables": [
                "ST Toughness Value",
                "Normal_StanceRatio"
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
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "HitSplit": 0.6,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || Variables[1] (Normal_StanceRatio) || MUL || RETURN",
              "displayLines": "(ST Toughness Value * Normal_StanceRatio)",
              "constants": [],
              "variables": [
                "ST Toughness Value",
                "Normal_StanceRatio"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1835349740\">Mar_7th_10_Jianshi</a>",
          "isGlobal": true,
          "variables": {
            "parameter[00]_IsAbility11": 0
          }
        },
        "Trigger: Attack End",
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1762944127\">Mar_7th_10_GainEnergyWithCheck</a>",
          "variables": {
            "parameter[0]_AddValue": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            }
          }
        },
        "Trigger: Ability End"
      ],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1857978623\">M_Mar_7th_10_Ability01_Preshow</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1857978623\">M_Mar_7th_10_Ability01_Preshow</a>",
          "stackData": [],
          "latentQueue": [
            "_target_stance_before_attack"
          ],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "skillType": "Basic ATK",
            "conditions": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2055743569\">Mar_7th_10_Enhance</a>",
              "invertCondition": true
            },
            "multiplier": {
              "operator": "Variables[0] (Normal_StanceRatio) || RETURN",
              "displayLines": "Normal_StanceRatio",
              "constants": [],
              "variables": [
                "Normal_StanceRatio"
              ]
            }
          }
        }
      ]
    },
    "March7thTH_Mar_7th_10_Ability01_Part01": {
      "fileName": "March7thTH_Mar_7th_10_Ability01_Part01",
      "childAbilityList": [
        "March7thTH_Mar_7th_10_Ability01_Part01",
        "March7thTH_Mar_7th_10_Ability01_Part02",
        "March7thTH_Mar_7th_10_Ability01_Camera",
        "March7thTH_Mar_7th_10_Eidolon2_Insert_SelectTarget",
        "March7thTH_Mar_7th_10_Eidolon2_Insert_Part01",
        "March7thTH_Mar_7th_10_Eidolon2_Insert_Part02"
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
          "ability": "Mar_7th_10_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "references": []
    },
    "March7thTH_Modifiers": {
      "fileName": "March7thTH_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__126431759\">M_Mar_7th_10_InsertCheck</a>",
          "modifierFlags": [
            "CustomEvent_InfiniteRefresh"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-922050191\">Mar_7th_10_InsertRetarget</a>"
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
                  "functionName": "<a class=\"gTempYellow\" id=\"-922050191\">Mar_7th_10_InsertRetarget</a>"
                }
              ],
              "priorityLevel": -55
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-922050191\">Mar_7th_10_InsertRetarget</a>"
                }
              ]
            },
            {
              "eventTrigger": "New Enemy Wave",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-922050191\">Mar_7th_10_InsertRetarget</a>"
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
                      "functionName": "<a class=\"gTempYellow\" id=\"-922050191\">Mar_7th_10_InsertRetarget</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__-922050191\">Mar_7th_10_InsertRetarget</a>",
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
                      "abilityName": "Mar_7th_10_Eidolon2_Insert_SelectTarget",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1941685711\">Mar_7th_10_Eidolon2_CD</a>[<span class=\"descriptionNumberColor\">Blade Dances on Waves' Fight</span>]",
          "execute": [
            {
              "eventTrigger": "Turn [Action-End Phase]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "_target_stance_before_attack"
          ],
          "description": "The \"Blade Dances on Waves' Fight\" effect cannot be triggered yet.",
          "type": "Other",
          "statusName": "Blade Dances on Waves' Fight"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-220132928\">M_Mar_7th_10_ForbidBP</a>",
          "execute": [
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
                    "Skill"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2037642738\">M_Mar_7th_10_MasterAttackEnergyPreshow</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "skillType": [
              "Skill",
              "Basic ATK"
            ],
            "conditions": {
              "name": "AND",
              "conditionList": [
                {
                  "name": "Compare: Variable",
                  "value1": "EnergyBar_CurEnergy",
                  "compareType": ">=",
                  "value2": {
                    "operator": "Variables[0] (EnergyBar_MaxEnergy) || Variables[1] (Gain_Energy_Value) || SUB || RETURN",
                    "displayLines": "(EnergyBar_MaxEnergy - Gain_Energy_Value)",
                    "constants": [],
                    "variables": [
                      "EnergyBar_MaxEnergy",
                      "Gain_Energy_Value"
                    ]
                  },
                  "contextScope": "ContextCaster"
                },
                {
                  "name": "Is Part Of Team",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Player Team Ability Target Lock}}"
                  },
                  "team": "Enemy Team"
                }
              ]
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": "0(Set AV)"
            }
          },
          "removalDependencies": {
            "name": "Removal Dependency",
            "dependancyName": "<a class=\"gModGreen\" id=\"-2014523245\">Mar_7th_10_Ability02_Master</a>[<span class=\"descriptionNumberColor\">Shifu</span>]",
            "casterFilter": {
              "name": "Target Name",
              "target": "{{Caster}}"
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1499889908\">M_Mar_7th_10_MasterUltraEnergyPreshow</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "skillType": [
              "Ultimate"
            ],
            "conditions": {
              "name": "AND",
              "conditionList": [
                {
                  "name": "Compare: Variable",
                  "value1": "EnergyBar_CurEnergy",
                  "compareType": ">=",
                  "value2": {
                    "operator": "Variables[0] (EnergyBar_MaxEnergy) || Variables[1] (Gain_Energy_Value) || SUB || RETURN",
                    "displayLines": "(EnergyBar_MaxEnergy - Gain_Energy_Value)",
                    "constants": [],
                    "variables": [
                      "EnergyBar_MaxEnergy",
                      "Gain_Energy_Value"
                    ]
                  },
                  "contextScope": "ContextCaster"
                }
              ]
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": "0(Set AV)"
            }
          },
          "removalDependencies": {
            "name": "Removal Dependency",
            "dependancyName": "<a class=\"gModGreen\" id=\"-2014523245\">Mar_7th_10_Ability02_Master</a>[<span class=\"descriptionNumberColor\">Shifu</span>]",
            "casterFilter": {
              "name": "Target Name",
              "target": "{{Caster}}"
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__754306422\">Mar_7th_10_Enhance_Visual</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Ultimate Prep-Phase [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "removalDependencies": {
            "name": "Removal Dependency",
            "dependancyName": "<a class=\"gModGreen\" id=\"2055743569\">Mar_7th_10_Enhance</a>",
            "casterFilter": {
              "name": "Target Name",
              "target": "{{Caster}}"
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2055743569\">Mar_7th_10_Enhance</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-220132928\">M_Mar_7th_10_ForbidBP</a>"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_has_enhanced_this_turn",
                  "value": 0
                },
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityName": "Skill01",
                  "skillSlot": "Basic ATK"
                },
                {
                  "name": "Update Ability Enhance Button",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "display": "Hide",
                  "abilityName": "Basic ATK"
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "priorState": "Normal"
                }
              ]
            },
            {
              "eventTrigger": "Action Choice Window [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"754306422\">Mar_7th_10_Enhance_Visual</a>"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyRatio) || RETURN",
                    "displayLines": "MDF_PropertyRatio",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyRatio"
                    ]
                  }
                },
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityName": "Skill11",
                  "skillSlot": "Basic ATK"
                },
                {
                  "name": "Update Ability Enhance Button",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "display": "Show",
                  "abilityName": "Basic ATK"
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "priorState": "Active"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-220132928\">M_Mar_7th_10_ForbidBP</a>"
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyRatio"
          ],
          "latentQueue": [
            "_has_enhanced_this_turn"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-237230767\">Mar_7th_10_Eidolon1_SpeedUp</a>[<span class=\"descriptionNumberColor\">My Sword Stirs Starlight</span>]",
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
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyRatio) || RETURN",
                    "displayLines": "MDF_PropertyRatio",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "When Shifu is on the field, increases SPD by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>.",
          "type": "Buff",
          "effectName": "SPD Boost",
          "statusName": "My Sword Stirs Starlight"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-178417190\">Mar_7th_10_Ability02_Master_SpeedUp</a>[<span class=\"descriptionNumberColor\">Master, It's Tea Time!</span>]",
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
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyRatio) || RETURN",
                    "displayLines": "MDF_PropertyRatio",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyRatio"
          ],
          "latentQueue": [],
          "description": "Increases SPD of %CasterName's Shifu by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>.",
          "type": "Buff",
          "statusName": "Master, It's Tea Time!",
          "removalDependencies": {
            "name": "Removal Dependency",
            "dependancyName": "<a class=\"gModGreen\" id=\"-2014523245\">Mar_7th_10_Ability02_Master</a>[<span class=\"descriptionNumberColor\">Shifu</span>]",
            "casterFilter": {
              "name": "Target Name",
              "target": "{{Caster}}"
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1861443977\">Mar_7th_10_Ability02_HaveMaster</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2014523245\">Mar_7th_10_Ability02_Master</a>[<span class=\"descriptionNumberColor\">Shifu</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
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
                    "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
                  },
                  "searchRandom": true,
                  "includeDyingTargets": true,
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
                      "modifier": "<a class=\"gModGreen\" id=\"-2014523245\">Mar_7th_10_Ability02_Master</a>[<span class=\"descriptionNumberColor\">Shifu</span>]"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Update Displayed Energy Bar"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1861443977\">Mar_7th_10_Ability02_HaveMaster</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-237230767\">Mar_7th_10_Eidolon1_SpeedUp</a>[<span class=\"descriptionNumberColor\">My Sword Stirs Starlight</span>]"
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
                  "modifier": "<a class=\"gModGreen\" id=\"1499889908\">M_Mar_7th_10_MasterUltraEnergyPreshow</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2037642738\">M_Mar_7th_10_MasterAttackEnergyPreshow</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1861443977\">Mar_7th_10_Ability02_HaveMaster</a>"
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
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-237230767\">Mar_7th_10_Eidolon1_SpeedUp</a>[<span class=\"descriptionNumberColor\">My Sword Stirs Starlight</span>]",
                      "valuePerStack": {
                        "MDF_PropertyRatio": {
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
                  "name": "IF",
                  "conditions": {
                    "name": "Target is Pathstrider",
                    "path": [
                      "Destruction",
                      "Erudition",
                      "The Hunt",
                      "Remembrance",
                      "Elation"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Normal_StanceRatio",
                      "value": 1
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Gain_Energy_Value",
                      "value": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Target is Pathstrider",
                        "path": [
                          "Harmony",
                          "Nihility",
                          "Preservation",
                          "Abundance"
                        ],
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "Update Displayed Energy Bar"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Normal_StanceRatio",
                          "value": {
                            "operator": "Constants[0] (1) || Variables[0] (1) || ADD || RETURN",
                            "displayLines": "(1 + 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              1
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Gain_Energy_Value",
                          "value": 1
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1762944127\">Mar_7th_10_GainEnergyWithCheck</a>",
                  "variables": {
                    "parameter[0]_AddValue": {
                      "operator": "Variables[0] (Gain_Energy_Value) || RETURN",
                      "displayLines": "Gain_Energy_Value",
                      "constants": [],
                      "variables": [
                        "Gain_Energy_Value"
                      ]
                    }
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_attack_flag",
                  "value": 1
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_attack_flag",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Ultimate"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_attack_flag",
                        "compareType": "<=",
                        "value2": 0,
                        "contextScope": "ContextModifier"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1762944127\">Mar_7th_10_GainEnergyWithCheck</a>",
                      "variables": {
                        "parameter[0]_AddValue": {
                          "operator": "Variables[0] (Gain_Energy_Value) || RETURN",
                          "displayLines": "Gain_Energy_Value",
                          "constants": [],
                          "variables": [
                            "Gain_Energy_Value"
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_attack_flag",
                  "value": 0
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "After using an attack or Ultimate, %CasterName gains a max of 1 Charge point each time.",
          "type": "Other",
          "effectName": "Become Shifu",
          "statusName": "Shifu"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-388995203\">Mar_7th_10_Energy</a>[<span class=\"descriptionNumberColor\">Charge</span>]",
          "counter": 1,
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RetainCountZero"
          ],
          "stackData": [
            "MDF_PropertyRatio",
            "MDF_Count"
          ],
          "latentQueue": [],
          "description": "When Charge equals to <span class=\"descriptionNumberColor\">MDF_Count</span> or more, immediately takes action and simultaneously increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>. Additionally, Basic ATK gets Enhanced.",
          "type": "Other",
          "statusName": "Charge"
        }
      ],
      "references": []
    },
    "March7thTH_Functions": {
      "fileName": "March7thTH_Functions",
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
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1835349740\">Mar_7th_10_Jianshi</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Target Count SUM",
                    "target": {
                      "name": "Target Name",
                      "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
                    },
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2014523245\">Mar_7th_10_Ability02_Master</a>[<span class=\"descriptionNumberColor\">Shifu</span>]"
                    }
                  },
                  {
                    "name": "Target is Pathstrider",
                    "path": [
                      "Destruction",
                      "Erudition",
                      "The Hunt",
                      "Harmony",
                      "Nihility",
                      "Preservation",
                      "Abundance",
                      "Remembrance",
                      "Elation"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Marth 7th's Shifu}}"
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Target is Pathstrider",
                    "path": [
                      "Destruction",
                      "Erudition",
                      "The Hunt",
                      "Remembrance",
                      "Elation"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Marth 7th's Shifu}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Arg00_IsSkill11",
                        "compareType": "<=",
                        "value2": 0
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
                        "DamageType": {
                          "name": "Damage Type Source",
                          "sourceType": "ReadTargetType",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Marth 7th's Shifu}}"
                          }
                        },
                        "Damage": {
                          "operator": "Variables[0] (0.2) || RETURN",
                          "displayLines": "0.2",
                          "constants": [],
                          "variables": [
                            0.2
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Additional DMG"
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Arg00_IsSkill11",
                        "compareType": "<=",
                        "value2": 0
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1762944127\">Mar_7th_10_GainEnergyWithCheck</a>",
          "parse": [
            {
              "name": "Adjust Variable Value",
              "adjustmentType": "Add to Value (Default)",
              "variableName": "EnergyBar_CurEnergy",
              "on": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": {
                "operator": "Variables[0] (parameter[0]_AddValue) || RETURN",
                "displayLines": "parameter[0]_AddValue",
                "constants": [],
                "variables": [
                  "parameter[0]_AddValue"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "EnergyBar_CurEnergy",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (EnergyBar_MaxEnergy) || RETURN",
                      "displayLines": "EnergyBar_MaxEnergy",
                      "constants": [],
                      "variables": [
                        "EnergyBar_MaxEnergy"
                      ]
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Current Turn Is",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Assign Advance/Delay to Current Ability Use",
                      "adjustmentValue": 0,
                      "adjustmentType": "="
                    }
                  ]
                },
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "set": 0
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2055743569\">Mar_7th_10_Enhance</a>",
                  "valuePerStack": {
                    "MDF_PropertyRatio": {
                      "operator": "Variables[0] (0.8) || RETURN",
                      "displayLines": "0.8",
                      "constants": [],
                      "variables": [
                        0.8
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
                  "modifier": "<a class=\"gModGreen\" id=\"2055743569\">Mar_7th_10_Enhance</a>"
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