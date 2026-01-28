const compositeAbilityObject = {
  "fullCharacterName": "Cyrene",
  "trimCharacterName": "Cyrene",
  "summonName": "Demiurge",
  "trimSummonName": "Demiurge",
  "abilityList": [
    "Cyrene_Cyrene_FemaleMaster",
    "Cyrene_Cyrene_MaleMaster",
    "Cyrene_Cyrene_TechniqueInLevel",
    "Cyrene_Cyrene_Eidolon1",
    "Cyrene_Cyrene_PassiveAbility_1",
    "Cyrene_Cyrene_Ability31_Part02",
    "Cyrene_Cyrene_Ability31_Part01",
    "Cyrene_Cyrene_Ability31_EnterReady",
    "Cyrene_Cyrene_Ability03_Part02",
    "Cyrene_Cyrene_Ability03_Part01",
    "Cyrene_Cyrene_Ability03_EnterReady",
    "Cyrene_Cyrene_Ability02_Part02",
    "Cyrene_Cyrene_Ability02_Part01",
    "Cyrene_Cyrene_Ability11_Part02",
    "Cyrene_Cyrene_Ability11_Part01",
    "Cyrene_Cyrene_Ability01_Part02",
    "Cyrene_Cyrene_Ability01_Part01",
    "Cyrene_Modifiers",
    "Cyrene_Functions",
    "Demiurge_Servant_CyreneServant_Ability02_VisualPrepare",
    "Demiurge_Servant_CyreneServant_Ability01_VisualPrepare",
    "Demiurge_Servant_CyreneServant_FormationReset",
    "Demiurge_Servant_CyreneServant_EnterBattle",
    "Demiurge_Servant_CyreneServant_BattleCry",
    "Demiurge_Servant_CyreneServant_PassiveAbility01",
    "Demiurge_Servant_CyreneServant_AbilityCY14",
    "Demiurge_Servant_CyreneServant_AbilityCY13",
    "Demiurge_Servant_CyreneServant_AbilityCY12",
    "Demiurge_Servant_CyreneServant_AbilityCY11",
    "Demiurge_Servant_CyreneServant_AbilityCY10",
    "Demiurge_Servant_CyreneServant_AbilityCY09",
    "Demiurge_Servant_CyreneServant_AbilityCY08",
    "Demiurge_Servant_CyreneServant_AbilityCY07",
    "Demiurge_Servant_CyreneServant_AbilityCY06",
    "Demiurge_Servant_CyreneServant_AbilityCY05",
    "Demiurge_Servant_CyreneServant_AbilityCY04",
    "Demiurge_Servant_CyreneServant_AbilityCY03",
    "Demiurge_Servant_CyreneServant_AbilityCY02",
    "Demiurge_Servant_CyreneServant_AbilityCY01",
    "Demiurge_Servant_CyreneServant_Ability11_Part02",
    "Demiurge_Servant_CyreneServant_Ability11_Part01",
    "Demiurge_Servant_CyreneServant_Ability02_Part02",
    "Demiurge_Servant_CyreneServant_Ability02_Part01",
    "Demiurge_Servant_CyreneServant_Ability02_Ready",
    "Demiurge_Servant_CyreneServant_Ability01_Part02",
    "Demiurge_Servant_CyreneServant_Ability01_Part01",
    "Demiurge_Servant_CyreneServant_Ability01_Ready",
    "Demiurge_Modifiers",
    "Demiurge_Functions"
  ],
  "abilityObject": {
    "Cyrene_Cyrene_FemaleMaster": {
      "fileName": "Cyrene_Cyrene_FemaleMaster",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "Cyrene_Passive_FemaleMaster"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Cyrene_Passive_FemaleMaster",
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Cyrene_Cyrene_MaleMaster": {
      "fileName": "Cyrene_Cyrene_MaleMaster",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "Cyrene_Passive_MaleMaster"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Cyrene_Passive_MaleMaster",
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Cyrene_Cyrene_TechniqueInLevel": {
      "fileName": "Cyrene_Cyrene_TechniqueInLevel",
      "childAbilityList": [
        "Cyrene_Cyrene_TechniqueInLevel"
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
          "modifier": "StageAbility_Maze_Cyrene_Modifier"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "StageAbility_Maze_Cyrene_Modifier",
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
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Cyrene_Ability02_Bonus_Main[<span class=\"descriptionNumberColor\">Bloom, Elysium of Beyond</span>]",
                      "duration": {
                        "operator": "Variables[0] (FieldLifeTime) || RETURN",
                        "displayLines": "FieldLifeTime",
                        "constants": [],
                        "variables": [
                          "FieldLifeTime"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_OriginDamagePercentage": {
                          "operator": "Variables[0] (0.24) || RETURN",
                          "displayLines": "0.24",
                          "constants": [],
                          "variables": [
                            0.24
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
    "Cyrene_Cyrene_Eidolon1": {
      "fileName": "Cyrene_Cyrene_Eidolon1",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [],
      "references": []
    },
    "Cyrene_Cyrene_PassiveAbility_1": {
      "fileName": "Cyrene_Cyrene_PassiveAbility_1",
      "childAbilityList": [
        "Cyrene_Cyrene_PassiveAbility_1"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Change Character UI"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "FieldLifeTime",
          "value": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Cyrene_AbilityPreloadCtrl"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Cyrene_PassiveAbility"
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (CurSpecialSP) || Variables[1] (CurOverflowSpecialSP) || ADD || RETURN",
            "displayLines": "(CurSpecialSP + CurOverflowSpecialSP)",
            "constants": [],
            "variables": [
              "CurSpecialSP",
              "CurOverflowSpecialSP"
            ]
          },
          "displaySubType": "PureNum",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "assignState": "True",
          "bar#": "Number"
        },
        {
          "name": "Automatically use Ultimate",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Causality in Trichotomy"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Cyrene_PointB3"
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
              "name": "Define Custom Variable",
              "scope": "AITag",
              "variableName": "DamageCarry",
              "value": 10
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Cyrene_Ability03_LackOfSP",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Use Operation",
                  "opMask": "Mask_UIOperate"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Use Operation",
                  "opMask": "Mask_UIOperate"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "_M_Cyrene_Phainon_ForbidAutoUltraBeforeCyreneUltra",
          "modifierFlags": [
            900,
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "Memosprite_CyreneServant_AmazingBonus"
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Cyrene_PassiveAbility",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "Cyrene_Ability03[<span class=\"descriptionNumberColor\">Ripples of Past Reverie</span>]"
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Switch to Action/Ability Context",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Update Energy Value",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": 0,
                  "adjustment": "Set",
                  "ignoreBlock": true
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "SpecialSPNeed",
                  "value": 24
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_FirstTimeMax",
                  "value": 0
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMaxSpecialOverflow</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (27) || Constants[0] (24) || SUB || RETURN",
                    "displayLines": "(27 - 24)",
                    "constants": [
                      24
                    ],
                    "variables": [
                      27
                    ]
                  },
                  "isRefresh": true
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
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "type": "Memosprite"
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Player Team"
                      },
                      {
                        "name": "Trace Activated",
                        "conditionList": "Child of Remembrance"
                      },
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Caster's Memosprite}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "mustBeAlive2": true,
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
                      "modifier": "Cyrene_Passive_Teamate[<span class=\"descriptionNumberColor\">Future</span>]",
                      "valuePerStack": {
                        "MDF_SPAdd": {
                          "operator": "Variables[0] (1) || RETURN",
                          "displayLines": "1",
                          "constants": [],
                          "variables": [
                            1
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Action Completed [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]-{{Caster}}-{{Caster}}.[[getMemosprite]]"
                  },
                  "modifier": "Cyrene_Passive_Teamate[<span class=\"descriptionNumberColor\">Future</span>]",
                  "valuePerStack": {
                    "MDF_SPAdd": {
                      "operator": "Variables[0] (1) || RETURN",
                      "displayLines": "1",
                      "constants": [],
                      "variables": [
                        1
                      ]
                    }
                  }
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: Start"
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
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster's Memosprite}}"
                      },
                      "modifier": "Memosprite_CyreneServant_Energy[<span class=\"descriptionNumberColor\">Story</span>]",
                      "addStacksPerTrigger": 1,
                      "casterAssign": "TargetSelf"
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
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)V2}}"
                      },
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Character ID",
                        "ID": 1408,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Phainon"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "_M_Cyrene_Phainon_ForbidAutoUltraBeforeCyreneUltra"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Ripples Across Time"
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "Cyrene_ChrysosCheck"
                        },
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{{{Cyrene}}'s All Player Characters}}-{{Caster}}"
                          },
                          "conditions": {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "Target is Pathstrider",
                                "path": [
                                  "Remembrance"
                                ],
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                }
                              },
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "ChrysosMark"
                              }
                            ]
                          },
                          "ifTargetFound": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "ChrysosCount",
                              "value": {
                                "operator": "Variables[0] (ChrysosCount) || Constants[0] (1) || ADD || RETURN",
                                "displayLines": "(ChrysosCount + 1)",
                                "constants": [
                                  1
                                ],
                                "variables": [
                                  "ChrysosCount"
                                ]
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH",
                          "switchValue": {
                            "operator": "Variables[0] (ChrysosCount) || RETURN",
                            "displayLines": "ChrysosCount",
                            "constants": [],
                            "variables": [
                              "ChrysosCount"
                            ]
                          },
                          "caseEvents": [
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 1,
                              "execute": [
                                {
                                  "name": "Use Custom Character Function",
                                  "functionName": "Cyrene_ChargeEnergy",
                                  "variables": {
                                    "parameter[0]_AddValue": {
                                      "operator": "Variables[0] (2) || RETURN",
                                      "displayLines": "2",
                                      "constants": [],
                                      "variables": [
                                        2
                                      ]
                                    }
                                  }
                                }
                              ]
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 2,
                              "execute": [
                                {
                                  "name": "Use Custom Character Function",
                                  "functionName": "Cyrene_ChargeEnergy",
                                  "variables": {
                                    "parameter[0]_AddValue": {
                                      "operator": "Variables[0] (3) || RETURN",
                                      "displayLines": "3",
                                      "constants": [],
                                      "variables": [
                                        3
                                      ]
                                    }
                                  }
                                }
                              ]
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 3,
                              "execute": [
                                {
                                  "name": "Use Custom Character Function",
                                  "functionName": "Cyrene_ChargeEnergy",
                                  "variables": {
                                    "parameter[0]_AddValue": {
                                      "operator": "Variables[0] (6) || RETURN",
                                      "displayLines": "6",
                                      "constants": [],
                                      "variables": [
                                        6
                                      ]
                                    }
                                  }
                                }
                              ]
                            }
                          ],
                          "defaultEvents": []
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
                          "name": "Use Custom Character Function",
                          "functionName": "Cyrene_ChargeEnergy",
                          "variables": {
                            "parameter[0]_AddValue": {
                              "operator": "Variables[0] (12) || RETURN",
                              "displayLines": "12",
                              "constants": [],
                              "variables": [
                                12
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
                        "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]-{{Caster}}-{{Caster}}.[[getMemosprite]]"
                      },
                      "modifier": "Cyrene_Passive_Teamate[<span class=\"descriptionNumberColor\">Future</span>]",
                      "valuePerStack": {
                        "MDF_SPAdd": {
                          "operator": "Variables[0] (1) || RETURN",
                          "displayLines": "1",
                          "constants": [],
                          "variables": [
                            1
                          ]
                        }
                      }
                    }
                  ]
                }
              ],
              "priorityLevel": -80
            },
            {
              "eventTrigger": "Update Target Selected(UI) [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player's Aim Target List}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  }
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "CurSpecialSP",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (CurSpecialSP) || Variables[1] (CurOverflowSpecialSP) || ADD || RETURN",
                        "displayLines": "(CurSpecialSP + CurOverflowSpecialSP)",
                        "constants": [],
                        "variables": [
                          "CurSpecialSP",
                          "CurOverflowSpecialSP"
                        ]
                      },
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster's Memosprite}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "CurSpecialSP",
                      "value": {
                        "operator": "Variables[0] (CurSpecialSP) || RETURN",
                        "displayLines": "CurSpecialSP",
                        "constants": [],
                        "variables": [
                          "CurSpecialSP"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "name": "Variable Value Changes",
              "variableName": "CurOverflowSpecialSP",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (CurSpecialSP) || Variables[1] (CurOverflowSpecialSP) || ADD || RETURN",
                        "displayLines": "(CurSpecialSP + CurOverflowSpecialSP)",
                        "constants": [],
                        "variables": [
                          "CurSpecialSP",
                          "CurOverflowSpecialSP"
                        ]
                      },
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
              "name": "Variable Value Changes",
              "variableName": "SpecialSPNeed",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "CurSpecialSP",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (SpecialSPNeed) || RETURN",
                          "displayLines": "SpecialSPNeed",
                          "constants": [],
                          "variables": [
                            "SpecialSPNeed"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "Cyrene_Ability03_LackOfSP"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "MDF_FirstTimeMax",
                            "compareType": "=",
                            "value2": 0
                          },
                          "passed": [
                            {
                              "name": "Dispel Debuffs",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              }
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_FirstTimeMax",
                              "value": 1
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "TutorialSwitch",
                            "compareType": "=",
                            "value2": 0
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "TutorialSwitch",
                              "value": 1
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
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecial</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "triggerClampedChanges": true,
                  "whenValueChanges": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "CurSpecialSP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecial</span>&nbsp;"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecial</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": {
                    "operator": "Variables[0] (SpecialSPNeed) || RETURN",
                    "displayLines": "SpecialSPNeed",
                    "constants": [],
                    "variables": [
                      "SpecialSPNeed"
                    ]
                  },
                  "whenEnteringRange": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Cyrene_Ability03_LackOfSP"
                    }
                  ],
                  "whenLeavingRange": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Cyrene_Ability03_LackOfSP"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_FirstTimeMax",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Dispel Debuffs",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_FirstTimeMax",
                          "value": 1
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "TutorialSwitch",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "TutorialSwitch",
                          "value": 1
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecialOverflow</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "triggerClampedChanges": true,
                  "whenValueChanges": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "CurOverflowSpecialSP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecialOverflow</span>&nbsp;"
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
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "modifier": "Cyrene_Passive_Sub[<span class=\"descriptionNumberColor\">Hearts Gather as One</span>]",
              "aliveOnly": "True",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_DamageIncrease": {
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
          "for": "Cyrene_AbilityPreloadCtrl",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                "Deleted bullshit"
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
                      "target": "{{Caster}}"
                    },
                    "modifier": "Cyrene_Ability03[<span class=\"descriptionNumberColor\">Ripples of Past Reverie</span>]"
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
              "eventTrigger": "Enter Battle",
              "execute": [
                "Deleted bullshit"
              ]
            },
            {
              "eventTrigger": "Leave Battle"
            },
            {
              "eventTrigger": "Ultimate Prep-Phase [Owner]",
              "execute": [
                "Deleted bullshit"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Cyrene_Cyrene_Ability31_Part02": {
      "fileName": "Cyrene_Cyrene_Ability31_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Use Custom Character Function",
          "functionName": "Cyrene_ExtraSpecialSPReturn",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}.[[getTeamMembers]].[[removeMemosprite]].[[removeUnselectable]].[[living]]"
            },
            "compareType": ">=",
            "value2": 2
          },
          "passed": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Memosprite}}"
              },
              "ability": "Servant_CyreneServant_Ability02_Ready",
              "isTrigger": true
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Is Auto-Battle"
              }
            }
          ],
          "failed": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Memosprite}}"
              },
              "ability": "Servant_CyreneServant_Ability01_Ready",
              "isTrigger": true
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Cyrene_Cyrene_Ability31_Part01": {
      "fileName": "Cyrene_Cyrene_Ability31_Part01",
      "childAbilityList": [
        "Cyrene_Cyrene_Ability31_Camera",
        "Cyrene_Cyrene_Ability31_EnterReady",
        "Cyrene_Cyrene_Ability31_Part01",
        "Cyrene_Cyrene_Ability31_Part02"
      ],
      "skillTrigger": "Skill31",
      "abilityType": "Ultimate",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Use Custom Character Function",
          "functionName": "Cyrene_Preload_ServantReadyEffect",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variables": {
            "_IsPreload": 1
          }
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Cyrene_Ability31_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "Cyrene_Cyrene_Ability31_EnterReady": {
      "fileName": "Cyrene_Cyrene_Ability31_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Cyrene_Cyrene_Ability03_Part02": {
      "fileName": "Cyrene_Cyrene_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "SpecialSPNeed",
          "value": 12
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Cyrene_ExtraSpecialSPReturn",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Summon Memosprite",
          "memoID": 11415
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Memosprites and Self)}}"
          },
          "valuePercent": 1,
          "isFixed": "(Fixed)",
          "isSetToValue": true,
          "ignoreBlock": true
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Memosprites and Self)}}"
          },
          "valuePercent": 1,
          "isFixed": "(Fixed)",
          "isSetToValue": true,
          "ignoreBlock": true,
          "isSpecialEnergy": true
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Cyrene_Ability03[<span class=\"descriptionNumberColor\">Ripples of Past Reverie</span>]"
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Memosprite}}"
          },
          "scope": "TargetEntity",
          "variableName": "CurSpecialSP",
          "value": {
            "operator": "Variables[0] (CurSpecialSP) || RETURN",
            "displayLines": "CurSpecialSP",
            "constants": [],
            "variables": [
              "CurSpecialSP"
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}.[[getTeamMembers]].[[removeMemosprite]].[[removeUnselectable]].[[living]]"
            },
            "compareType": ">=",
            "value2": 2
          },
          "passed": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Memosprite}}"
              },
              "ability": "Servant_CyreneServant_Ability02_Ready",
              "isTrigger": true
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Is Auto-Battle"
              }
            }
          ],
          "failed": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Memosprite}}"
              },
              "ability": "Servant_CyreneServant_Ability01_Ready",
              "isTrigger": true
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
              "name": "Action Advance/Delay",
              "target": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "advanceType": "Advance",
              "value": "-1"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Cyrene_Ability02_Bonus_Main[<span class=\"descriptionNumberColor\">Bloom, Elysium of Beyond</span>]",
          "valuePerStack": {
            "MDF_OriginDamagePercentage": {
              "operator": "Variables[0] (0.24) || RETURN",
              "displayLines": "0.24",
              "constants": [],
              "variables": [
                0.24
              ]
            }
          }
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Cyrene_Cyrene_Ability03_Part01": {
      "fileName": "Cyrene_Cyrene_Ability03_Part01",
      "childAbilityList": [
        "Cyrene_Cyrene_Ability03_Camera",
        "Cyrene_Cyrene_Ability03_B_Camera",
        "Cyrene_Cyrene_Ability03_Slow_Camera",
        "Cyrene_Cyrene_Ability03_Slow_Camera_Timeline",
        "Cyrene_Cyrene_Ability03_Slow_Camera2_Timeline",
        "Cyrene_Cyrene_Ability03_EnterReady",
        "Cyrene_Cyrene_Ability03_Part01",
        "Cyrene_Cyrene_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Use Custom Character Function",
          "functionName": "Cyrene_Preload_ServantReadyEffect",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variables": {
            "_IsPreload": 1
          }
        },
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Cyrene_Ability03_Part02",
          "isTrigger": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Gender is",
            "gender": "GENDER_MAN"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Is Auto-Battle"
          },
          "passed": [
            "Deleted bullshit"
          ],
          "failed": [
            "Deleted bullshit",
            {
              "name": "Define Custom Variable",
              "variableName": "RingTrigger",
              "value": 0
            },
            "Quick-Time-Event"
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "RingTrigger",
          "value": 1
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "Cyrene_Cyrene_Ability03_EnterReady": {
      "fileName": "Cyrene_Cyrene_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Cyrene_Cyrene_Ability02_Part02": {
      "fileName": "Cyrene_Cyrene_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Use Custom Character Function",
          "functionName": "Cyrene_ChargeEnergy",
          "variables": {
            "parameter[0]_AddValue": {
              "operator": "Variables[0] (3) || RETURN",
              "displayLines": "3",
              "constants": [],
              "variables": [
                3
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
          "modifier": "Cyrene_Ability02_Bonus_Main[<span class=\"descriptionNumberColor\">Bloom, Elysium of Beyond</span>]",
          "duration": {
            "operator": "Variables[0] (FieldLifeTime) || RETURN",
            "displayLines": "FieldLifeTime",
            "constants": [],
            "variables": [
              "FieldLifeTime"
            ]
          },
          "valuePerStack": {
            "MDF_OriginDamagePercentage": {
              "operator": "Variables[0] (0.24) || RETURN",
              "displayLines": "0.24",
              "constants": [],
              "variables": [
                0.24
              ]
            }
          }
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Cyrene_Cyrene_Ability02_Part01": {
      "fileName": "Cyrene_Cyrene_Ability02_Part01",
      "childAbilityList": [
        "Cyrene_Cyrene_Ability02_Camera",
        "Cyrene_Cyrene_Ability02_Part01",
        "Cyrene_Cyrene_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": [
        0,
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
          "ability": "Cyrene_Ability02_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Cyrene_Cyrene_Ability11_Part02": {
      "fileName": "Cyrene_Cyrene_Ability11_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Use Custom Character Function",
          "functionName": "Cyrene_ChargeEnergy",
          "variables": {
            "parameter[0]_AddValue": {
              "operator": "Variables[0] (3) || RETURN",
              "displayLines": "3",
              "constants": [],
              "variables": [
                3
              ]
            }
          }
        },
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "variableName": "EnemyCount",
          "livingTargets": true
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
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
              "displayLines": 15
            },
            "Tags": null
          }
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (EnemyCount) || RETURN",
            "displayLines": "EnemyCount",
            "constants": [],
            "variables": [
              "EnemyCount"
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
              "maxTargets": 2,
              "conditions": {
                "name": "NOT",
                "condition": {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Cyrene_AbilityTarget"
                }
              },
              "ifTargetFound": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "Damage": {
                      "operator": "Variables[0] (0.3) || RETURN",
                      "displayLines": "0.3",
                      "constants": [],
                      "variables": [
                        0.3
                      ]
                    },
                    "dmgFormula": "Max HP Scaling",
                    "HitSplit": 0.3,
                    "Toughness": {
                      "operator": "Variables[0] (AOE Toughness Value) || RETURN",
                      "displayLines": "AOE Toughness Value",
                      "constants": [],
                      "variables": [
                        "AOE Toughness Value"
                      ]
                    },
                    "Tags": null
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Cyrene_AbilityTarget"
                }
              ]
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (0.3) || RETURN",
              "displayLines": "0.3",
              "constants": [],
              "variables": [
                0.3
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "HitSplit": 0.7,
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "Tags": null
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Cyrene_AbilityTarget",
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Anyone]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Cyrene_Cyrene_Ability11_Part01": {
      "fileName": "Cyrene_Cyrene_Ability11_Part01",
      "childAbilityList": [
        "Cyrene_Cyrene_Ability11_Camera",
        "Cyrene_Cyrene_Ability11_Charm_Camera",
        "Cyrene_Cyrene_Ability11_Part01",
        "Cyrene_Cyrene_Ability11_Part02"
      ],
      "skillTrigger": "Skill11",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": [
        10,
        5,
        0
      ],
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "flagName": "Charm"
          },
          "passed": [
            "Deleted bullshit"
          ],
          "failed": [
            "Deleted bullshit"
          ]
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Cyrene_Ability11_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Cyrene_Cyrene_Ability01_Part02": {
      "fileName": "Cyrene_Cyrene_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Use Custom Character Function",
          "functionName": "Cyrene_ChargeEnergy",
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
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "operator": "Variables[0] (0.5) || RETURN",
                  "displayLines": "0.5",
                  "constants": [],
                  "variables": [
                    0.5
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
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Cyrene_Cyrene_Ability01_Part01": {
      "fileName": "Cyrene_Cyrene_Ability01_Part01",
      "childAbilityList": [
        "Cyrene_Cyrene_Ability01_Camera",
        "Cyrene_Cyrene_Ability01_Part01",
        "Cyrene_Cyrene_Ability01_Part02"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": [
        10,
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
          "ability": "Cyrene_Ability01_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Cyrene_Modifiers": {
      "fileName": "Cyrene_Modifiers",
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
          "for": "Cyrene_Eidolon2_1",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Memosprite}}"
                  },
                  "variable": "CurAmazingCount",
                  "target2": null,
                  "variable2": "MDF_Count"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PropertyValue",
                  "value": {
                    "operator": "Variables[0] (MDF_Count) || Variables[1] (0.06) || MUL || RETURN",
                    "displayLines": "(MDF_Count * 0.06)",
                    "constants": [],
                    "variables": [
                      "MDF_Count",
                      0.06
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_PropertyValue",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (0.24) || RETURN",
                      "displayLines": "0.24",
                      "constants": [],
                      "variables": [
                        0.24
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_PropertyValue",
                      "value": {
                        "operator": "Variables[0] (0.24) || RETURN",
                        "displayLines": "0.24",
                        "constants": [],
                        "variables": [
                          0.24
                        ]
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
                  "modifier": "Cyrene_Ability02_Bonus_Main[<span class=\"descriptionNumberColor\">Bloom, Elysium of Beyond</span>]",
                  "valuePerStack": {
                    "MDF_OriginDamagePercentage": {
                      "operator": "Variables[0] (0.24) || RETURN",
                      "displayLines": "0.24",
                      "constants": [],
                      "variables": [
                        0.24
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
          "for": "Cyrene_PointB3_Sub3[<span class=\"descriptionNumberColor\">Causality in Trichotomy</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "RemoveWhenCasterDead"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_DamageIncrease) || RETURN",
                    "displayLines": "MDF_DamageIncrease",
                    "constants": [],
                    "variables": [
                      "MDF_DamageIncrease"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_DamageIncrease</span>.",
          "type": "Buff",
          "statusName": "Causality in Trichotomy"
        },
        {
          "name": "Modifier Construction",
          "for": "Cyrene_PointB3_Sub2[<span class=\"descriptionNumberColor\">Causality in Trichotomy</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_AddValue",
                  "value": {
                    "operator": "Variables[0] (FLOOR) || Variables[1] (MDF_PropertyValue) || PARAM_1 || FUNCTION || Variables[2] (0.02) || MUL || RETURN",
                    "displayLines": "(&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>(MDF_PropertyValue) * 0.02)",
                    "constants": [],
                    "variables": [
                      "FLOOR",
                      "MDF_PropertyValue",
                      0.02
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceIcePEN</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (_AddValue) || RETURN",
                    "displayLines": "_AddValue",
                    "constants": [],
                    "variables": [
                      "_AddValue"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Ice RES PEN increases by <span class=\"descriptionNumberColor\">_AddValue</span>.",
          "type": "Buff",
          "statusName": "Causality in Trichotomy"
        },
        {
          "name": "Modifier Construction",
          "for": "ChrysosMark"
        },
        {
          "name": "Modifier Construction",
          "for": "Cyrene_PointB3",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Cyrene_PointB3_CheckSpeed"
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
                    "team": "Player Team"
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Cyrene_PointB3_CheckSpeed"
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
                  "whenValueChanges": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Cyrene_PointB3_CheckSpeed"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Cyrene_PointB3_CheckSpeed"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Cyrene_PointB3_CheckSpeed"
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
          "for": "Cyrene_Passive_Sub[<span class=\"descriptionNumberColor\">Hearts Gather as One</span>]",
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
                    "operator": "Variables[0] (MDF_DamageIncrease) || RETURN",
                    "displayLines": "MDF_DamageIncrease",
                    "constants": [],
                    "variables": [
                      "MDF_DamageIncrease"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_DamageIncrease"
          ],
          "latentQueue": [],
          "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_DamageIncrease</span>.",
          "type": "Buff",
          "statusName": "Hearts Gather as One"
        },
        {
          "name": "Modifier Construction",
          "for": "Cyrene_Ability03_Sub",
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
                    "operator": "Variables[0] (MDF_CritChance) || RETURN",
                    "displayLines": "MDF_CritChance",
                    "constants": [],
                    "variables": [
                      "MDF_CritChance"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Cyrene_Ability03[<span class=\"descriptionNumberColor\">Ripples of Past Reverie</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "Phase1"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "FieldLifeTime",
                  "value": -1
                },
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityName": "Skill11",
                  "skillSlot": "Basic ATK"
                },
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityName": "Skill31",
                  "skillSlot": "Ultimate",
                  "enableSecondaryType": "ControlSkill03"
                },
                {
                  "name": "Update Ability Enhance Button",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "display": "Show",
                  "abilityName": "Basic ATK"
                },
                {
                  "name": "Change Character UI"
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (CurSpecialSP) || Variables[1] (CurOverflowSpecialSP) || ADD || RETURN",
                    "displayLines": "(CurSpecialSP + CurOverflowSpecialSP)",
                    "constants": [],
                    "variables": [
                      "CurSpecialSP",
                      "CurOverflowSpecialSP"
                    ]
                  },
                  "displaySubType": "PureNum",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "assignState": "True",
                  "bar#": "Number"
                },
                {
                  "name": "Disable Abilities",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityTypes": [
                    "Skill"
                  ]
                },
                {
                  "name": "Set Shield State/Value"
                },
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "Phase2"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "Basic ATK is replaced with Enhanced Basic ATK, and the Zone effect from the Skill has no duration limit. Increases this unit's and Demiurge's CRIT Rate by <span class=\"descriptionNumberColor\">#Skill03_P3_CritChance</span>.",
          "type": "Buff",
          "statusName": "Ripples of Past Reverie",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}+{{Caster's Memosprite}}"
              },
              "modifier": "Cyrene_Ability03_Sub",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_CritChance": {
                  "operator": "Variables[0] (0.5) || RETURN",
                  "displayLines": "0.5",
                  "constants": [],
                  "variables": [
                    0.5
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Cyrene_Ability02_Bonus[<span class=\"descriptionNumberColor\">Bloom, Elysium of Beyond</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any"
            },
            {
              "eventTrigger": "Deal Damage End [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Post-DMG Effect(like True DMG)",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Damage Data",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "_originalDamage",
                      "value": "Result_FinalDamageBase",
                      "context": "ContextModifier"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "_originalDamage",
                        "compareType": ">",
                        "value2": 0,
                        "contextScope": "ContextModifier"
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
                            "modifier": "Cyrene_Eidolon2_1"
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable with Copy",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "Cyrene_Eidolon2_1",
                              "variable": "MDF_PropertyValue",
                              "target2": null,
                              "variable2": "MDF_ExtraDamagePercentage"
                            }
                          ]
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_BasicDamagePercentage",
                          "value": {
                            "operator": "Variables[0] (MDF_OriginDamagePercentage) || Variables[1] (MDF_ExtraDamagePercentage) || ADD || RETURN",
                            "displayLines": "(MDF_OriginDamagePercentage + MDF_ExtraDamagePercentage)",
                            "constants": [],
                            "variables": [
                              "MDF_OriginDamagePercentage",
                              "MDF_ExtraDamagePercentage"
                            ]
                          }
                        },
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "canPhase": true,
                          "AttackScaling": {
                            "DamageType": {
                              "name": "Damage Type Source",
                              "sourceType": {}
                            },
                            "Damage": {
                              "operator": "Variables[0] (MDF_BasicDamagePercentage) || Variables[1] (_originalDamage) || MUL || RETURN",
                              "displayLines": "(MDF_BasicDamagePercentage * _originalDamage)",
                              "constants": [],
                              "variables": [
                                "MDF_BasicDamagePercentage",
                                "_originalDamage"
                              ]
                            },
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "True DMG"
                          },
                          "overrideDamageOwner": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "isConvertedDMG": true,
                          "dealAfterOriginialHit": true
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
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "Cyrene_Eidolon2_1"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Copy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Cyrene_Eidolon2_1",
                      "variable": "MDF_PropertyValue",
                      "target2": null,
                      "variable2": "MDF_ExtraDamagePercentage"
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_BasicDamagePercentage",
                  "value": {
                    "operator": "Variables[0] (MDF_OriginDamagePercentage) || Variables[1] (MDF_ExtraDamagePercentage) || ADD || RETURN",
                    "displayLines": "(MDF_OriginDamagePercentage + MDF_ExtraDamagePercentage)",
                    "constants": [],
                    "variables": [
                      "MDF_OriginDamagePercentage",
                      "MDF_ExtraDamagePercentage"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "For every 1 instance of DMG dealt, additionally deals 1 instance of True DMG equal to <span class=\"descriptionNumberColor\">MDF_BasicDamagePercentage</span> of the original DMG.",
          "type": "Buff",
          "statusName": "Bloom, Elysium of Beyond"
        },
        {
          "name": "Modifier Construction",
          "for": "Cyrene_Ability02_Bonus_Main[<span class=\"descriptionNumberColor\">Bloom, Elysium of Beyond</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "Deal Damage End [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Post-DMG Effect(like True DMG)",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Damage Data",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "_originalDamage",
                      "value": "Result_FinalDamageBase",
                      "context": "ContextModifier"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "_originalDamage",
                        "compareType": ">",
                        "value2": 0,
                        "contextScope": "ContextModifier"
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
                            "modifier": "Cyrene_Eidolon2_1"
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable with Copy",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "Cyrene_Eidolon2_1",
                              "variable": "MDF_PropertyValue",
                              "target2": null,
                              "variable2": "MDF_ExtraDamagePercentage"
                            }
                          ]
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_BasicDamagePercentage",
                          "value": {
                            "operator": "Variables[0] (MDF_OriginDamagePercentage) || Variables[1] (MDF_ExtraDamagePercentage) || ADD || RETURN",
                            "displayLines": "(MDF_OriginDamagePercentage + MDF_ExtraDamagePercentage)",
                            "constants": [],
                            "variables": [
                              "MDF_OriginDamagePercentage",
                              "MDF_ExtraDamagePercentage"
                            ]
                          }
                        },
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "canPhase": true,
                          "AttackScaling": {
                            "DamageType": {
                              "name": "Damage Type Source",
                              "sourceType": {}
                            },
                            "Damage": {
                              "operator": "Variables[0] (MDF_BasicDamagePercentage) || Variables[1] (_originalDamage) || MUL || RETURN",
                              "displayLines": "(MDF_BasicDamagePercentage * _originalDamage)",
                              "constants": [],
                              "variables": [
                                "MDF_BasicDamagePercentage",
                                "_originalDamage"
                              ]
                            },
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "True DMG"
                          },
                          "overrideDamageOwner": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "isConvertedDMG": true,
                          "dealAfterOriginialHit": true
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
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "Cyrene_Ability03[<span class=\"descriptionNumberColor\">Ripples of Past Reverie</span>]"
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
                    "modifier": "Cyrene_Eidolon2_1"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Copy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Cyrene_Eidolon2_1",
                      "variable": "MDF_PropertyValue",
                      "target2": null,
                      "variable2": "MDF_ExtraDamagePercentage"
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_BasicDamagePercentage",
                  "value": {
                    "operator": "Variables[0] (MDF_OriginDamagePercentage) || Variables[1] (MDF_ExtraDamagePercentage) || ADD || RETURN",
                    "displayLines": "(MDF_OriginDamagePercentage + MDF_ExtraDamagePercentage)",
                    "constants": [],
                    "variables": [
                      "MDF_OriginDamagePercentage",
                      "MDF_ExtraDamagePercentage"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_OriginDamagePercentage"
          ],
          "latentQueue": [],
          "description": "For every 1 instance of DMG dealt, additionally deals 1 instance of True DMG equal to <span class=\"descriptionNumberColor\">MDF_BasicDamagePercentage</span> of the original DMG.",
          "type": "Buff",
          "statusName": "Bloom, Elysium of Beyond",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]-{{Caster}}"
              },
              "modifier": "Cyrene_Ability02_Bonus[<span class=\"descriptionNumberColor\">Bloom, Elysium of Beyond</span>]",
              "aliveOnly": "True",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_OriginDamagePercentage": {
                  "operator": "Variables[0] (0.24) || RETURN",
                  "displayLines": "0.24",
                  "constants": [],
                  "variables": [
                    0.24
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Cyrene_Passive_Teamate_ThanksGift",
          "modifierFlags": [
            "ServantInherit_ModifierContinuation",
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
                    "target": "{{Player Team All(with Unselectable)V2}}"
                  },
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Character ID",
                    "ID": 1415,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Cyrene"
                  },
                  "ifTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_Switch",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Varying Data",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "MDF_ID",
                          "value": "TargetCharacterID"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Unique Name",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "uniqueName": "Cyrene_TargetCount_{MDF_ID}",
                            "invertCondition": true
                          },
                          "passed": [
                            {
                              "name": "Assign Unique Name",
                              "uniqueName": "Cyrene_TargetCount_{MDF_ID}",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "unknownBoolean": true
                            },
                            {
                              "name": "Define Custom Variable with Added Value",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "variableName": "CurInsertHitCount",
                              "context": "ContextCaster",
                              "value": 1
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_Switch",
                              "value": 1
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
          "for": "Cyrene_Passive_Teamate[<span class=\"descriptionNumberColor\">Future</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Cyrene_ChargeEnergy",
                  "variables": {
                    "parameter[0]_AddValue": {
                      "operator": "Variables[0] (MDF_SPAdd) || RETURN",
                      "displayLines": "MDF_SPAdd",
                      "constants": [],
                      "variables": [
                        "MDF_SPAdd"
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
                  "modifier": "Cyrene_Passive_Teamate_ThanksGift"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Trace Activated",
                        "conditionList": "Child of Remembrance",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "type": "Memosprite"
                      }
                    ]
                  },
                  "failed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Cyrene_ChargeEnergy",
                  "variables": {
                    "parameter[0]_AddValue": {
                      "operator": "Variables[0] (MDF_SPAdd) || RETURN",
                      "displayLines": "MDF_SPAdd",
                      "constants": [],
                      "variables": [
                        "MDF_SPAdd"
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
                  "modifier": "Cyrene_Passive_Teamate_ThanksGift"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Trace Activated",
                        "conditionList": "Child of Remembrance",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "type": "Memosprite"
                      }
                    ]
                  },
                  "failed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_SPAdd"
          ],
          "latentQueue": [
            "MDF_FirstTimeMax"
          ],
          "description": "When taking action, grants Cyrene \"Recollection.\"",
          "type": "Other",
          "statusName": "Future"
        }
      ],
      "references": []
    },
    "Cyrene_Functions": {
      "fileName": "Cyrene_Functions",
      "abilityType": "Char. Functions",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "length": 5,
      "parse": [
        {
          "name": "CharacterFunctions",
          "functionName": "Cyrene_PointB3_CheckSpeed",
          "parse": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "_CurrentSpeed",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_CurrentSpeed",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (180) || RETURN",
                  "displayLines": "180",
                  "constants": [],
                  "variables": [
                    180
                  ]
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                  },
                  "modifier": "Cyrene_PointB3_Sub3[<span class=\"descriptionNumberColor\">Causality in Trichotomy</span>]",
                  "valuePerStack": {
                    "MDF_DamageIncrease": {
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
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_CurrentSpeedConvert",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">SpeedConverted</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_CurrentSpeed",
                  "value": {
                    "operator": "Variables[0] (_CurrentSpeed) || Variables[1] (_CurrentSpeedConvert) || SUB || RETURN",
                    "displayLines": "(_CurrentSpeed - _CurrentSpeedConvert)",
                    "constants": [],
                    "variables": [
                      "_CurrentSpeed",
                      "_CurrentSpeedConvert"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_CurrentSpeed",
                  "value": {
                    "operator": "Variables[0] (_CurrentSpeed) || Variables[1] (180) || SUB || RETURN",
                    "displayLines": "(_CurrentSpeed - 180)",
                    "constants": [],
                    "variables": [
                      "_CurrentSpeed",
                      180
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_CurrentSpeed",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (60) || RETURN",
                      "displayLines": "60",
                      "constants": [],
                      "variables": [
                        60
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_CurrentSpeed",
                      "value": {
                        "operator": "Variables[0] (60) || RETURN",
                        "displayLines": "60",
                        "constants": [],
                        "variables": [
                          60
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_CurrentSpeed",
                    "compareType": ">=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}+{{Modifier Holder}}.[[getMemosprite]]"
                      },
                      "modifier": "Cyrene_PointB3_Sub2[<span class=\"descriptionNumberColor\">Causality in Trichotomy</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (_CurrentSpeed) || RETURN",
                          "displayLines": "_CurrentSpeed",
                          "constants": [],
                          "variables": [
                            "_CurrentSpeed"
                          ]
                        },
                        "MDF_DamageIncrease": {
                          "operator": "Variables[0] (0.2) || RETURN",
                          "displayLines": "0.2",
                          "constants": [],
                          "variables": [
                            0.2
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
                        "target": "{{Modifier Holder}}+{{Modifier Holder}}.[[getMemosprite]]"
                      },
                      "modifier": "Cyrene_PointB3_Sub2[<span class=\"descriptionNumberColor\">Causality in Trichotomy</span>]"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}"
                  },
                  "modifier": "Cyrene_PointB3_Sub3[<span class=\"descriptionNumberColor\">Causality in Trichotomy</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}+{{Modifier Holder}}.[[getMemosprite]]"
                  },
                  "modifier": "Cyrene_PointB3_Sub2[<span class=\"descriptionNumberColor\">Causality in Trichotomy</span>]"
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Cyrene_ChrysosCheck",
          "parse": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{{{Cyrene}}'s All Player Characters}}-{{Caster}}"
              },
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Target is Pathstrider",
                    "path": [
                      "Remembrance"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  {
                    "name": "Is Part Of Group",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "group": "Chrysos"
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
                  "modifier": "ChrysosMark"
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Cyrene_ChargeEnergy",
          "parse": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "_CurSpecialSP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecial</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "_MaxSpecialSP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">MaxSpecialEnergy</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "scope": "ContextTaskTemplate",
              "variableName": "_ExtraSpecialSP",
              "value": {
                "operator": "Variables[0] (MAX) || Variables[1] (_CurSpecialSP) || Variables[2] (parameter[0]_AddValue) || ADD || Variables[3] (_MaxSpecialSP) || SUB || Constants[0] (0) || PARAM_2 || FUNCTION || RETURN",
                "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MAX</span>(((_CurSpecialSP + parameter[0]_AddValue) - _MaxSpecialSP), 0)",
                "constants": [
                  0
                ],
                "variables": [
                  "MAX",
                  "_CurSpecialSP",
                  "parameter[0]_AddValue",
                  "_MaxSpecialSP"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_ExtraSpecialSP",
                "compareType": ">",
                "value2": 0,
                "contextScope": "ContextTaskTemplate"
              },
              "passed": [
                {
                  "name": "Define Custom Property",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecialOverflow</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (_ExtraSpecialSP) || RETURN",
                    "displayLines": "_ExtraSpecialSP",
                    "constants": [],
                    "variables": [
                      "_ExtraSpecialSP"
                    ]
                  }
                }
              ]
            },
            {
              "name": "Update Energy",
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
              },
              "isFixed": "(Fixed)",
              "ignoreBlock": true,
              "isSpecialEnergy": true
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Cyrene_ExtraSpecialSPReturn",
          "parse": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "_CurExtraSpecialSP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecialOverflow</span>&nbsp;"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "Cyrene_ChargeEnergy",
              "variables": {
                "parameter[0]_AddValue": {
                  "operator": "Variables[0] (_CurExtraSpecialSP) || RETURN",
                  "displayLines": "_CurExtraSpecialSP",
                  "constants": [],
                  "variables": [
                    "_CurExtraSpecialSP"
                  ]
                }
              }
            },
            {
              "name": "Define Custom Property",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecialOverflow</span>&nbsp;",
              "value": 0,
              "function": "="
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Cyrene_Preload_ServantReadyEffect",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_IsPreload",
                "compareType": "=",
                "value2": 1
              }
            }
          ]
        }
      ],
      "references": []
    },
    "Demiurge_Servant_CyreneServant_Ability02_VisualPrepare": {
      "fileName": "Demiurge_Servant_CyreneServant_Ability02_VisualPrepare",
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
          "ability": "Servant_CyreneServant_FormationReset",
          "isTrigger": true
        },
        {
          "name": "Define Custom Variable",
          "variableName": "#CL_HasBeenInVeiwMode",
          "value": 1
        },
        "Deleted bullshit",
        {
          "name": "Use Custom Character Function",
          "functionName": "Servant_CyreneServant_AbilityReady_MirrorSetup"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Servant_CyreneServant_AbilityReady_LightTeamMirrorChosenEffect"
        }
      ],
      "references": []
    },
    "Demiurge_Servant_CyreneServant_Ability01_VisualPrepare": {
      "fileName": "Demiurge_Servant_CyreneServant_Ability01_VisualPrepare",
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
          "ability": "Servant_CyreneServant_FormationReset",
          "isTrigger": true
        },
        {
          "name": "Define Custom Variable",
          "variableName": "#CL_HasBeenInVeiwMode",
          "value": 1
        },
        "Deleted bullshit",
        {
          "name": "Use Custom Character Function",
          "functionName": "Servant_CyreneServant_AbilityReady_MirrorSetup"
        }
      ],
      "references": []
    },
    "Demiurge_Servant_CyreneServant_FormationReset": {
      "fileName": "Demiurge_Servant_CyreneServant_FormationReset",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Demiurge_Servant_CyreneServant_EnterBattle": {
      "fileName": "Demiurge_Servant_CyreneServant_EnterBattle",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Demiurge_Servant_CyreneServant_BattleCry": {
      "fileName": "Demiurge_Servant_CyreneServant_BattleCry",
      "childAbilityList": [
        "Demiurge_Servant_CyreneServant_BattleCry"
      ],
      "skillTrigger": "SkillP03",
      "abilityType": "Talent",
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
          "modifier": "Memosprite_CyreneServant_BattleCry"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Memosprite_CyreneServant_BattleCry",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "dispelCount": 99,
                  "toRemove": [
                    "STAT_CTRL"
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
    "Demiurge_Servant_CyreneServant_PassiveAbility01": {
      "fileName": "Demiurge_Servant_CyreneServant_PassiveAbility01",
      "childAbilityList": [
        "Demiurge_Servant_CyreneServant_PassiveAbility01",
        "Demiurge_Servant_CyreneServant_EnterBattle"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
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
          "modifier": "Memosprite_CyreneServant_Energy[<span class=\"descriptionNumberColor\">Story</span>]",
          "addStacksPerTrigger": 1
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "modifier": "Memosprite_CyreneServant_AmazingBonus"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "modifier": "Cyrene_UITop"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Memosprite_CyreneServant_PassiveAbility01"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Memosprite_CyreneServant_PreShowForDanHengPT"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Memosprite_CyreneServant_PreShowForMydeimos"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Memosprite_CyreneServant_PreShowForMydeimos",
          "stackData": [],
          "latentQueue": [],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": {
              "name": "Target Name",
              "target": "{{Player's Aim Target List}}"
            },
            "conditions": {
              "name": "AND",
              "conditionList": [
                {
                  "name": "Character ID",
                  "ID": 1404,
                  "target": {
                    "name": "Target Name",
                    "target": "{{Player's Aim Target List}}"
                  },
                  "characterName": "Mydei"
                },
                {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Player's Aim Target List}}"
                  },
                  "modifier": "Mydeimos_Transfer[<span class=\"descriptionNumberColor\">Vendetta</span>]",
                  "invertCondition": true
                }
              ]
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": -1
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_CyreneServant_PreShowForDanHengPT",
          "stackData": [],
          "latentQueue": [],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": {
              "name": "Target Name",
              "target": "{{Souldragon}}"
            },
            "conditions": {
              "name": "Character ID",
              "ID": 1414,
              "target": {
                "name": "Target Name",
                "target": "{{Player's Aim Target List}}"
              },
              "characterName": "Dan Heng • Permansor Terrae"
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": -1
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_CyreneServant_Ability01CostCaster",
          "stackType": "ReplaceByCaster",
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "CurAmazingCount",
              "from": "ContextOwner"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_CyreneServant_PassiveAbility01_HPIncrease",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HP%</span>&nbsp;",
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
          "for": "Memosprite_CyreneServant_PassiveAbility01",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "Endurance"
          ],
          "execute": [
            {
              "eventTrigger": "Action Choice Window [Owner]"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "HPSync"
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SpeedOverride</span>&nbsp;",
                  "value": 0
                },
                {
                  "name": "Set Action-State",
                  "on": null,
                  "stateName": "Cyrene_Summon",
                  "state": false
                },
                "Mark Entity as Non-Target(Unselectable)",
                {
                  "name": "Block Advance/Delay Effects",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                }
              ]
            },
            {
              "eventTrigger": "HP Change [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Caster's Summoner}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "HPSync"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Name",
                    "skillName": "Skill01"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target Count",
                        "target": {
                          "name": "Target Sequence",
                          "Sequence": [
                            {
                              "name": "Target Name",
                              "target": "{{Player Team All}}.[[removeMemosprite]]"
                            },
                            {
                              "name": "Target Filter",
                              "conditions": {
                                "name": "Target is Pathstrider",
                                "path": [
                                  "Remembrance"
                                ],
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                }
                              }
                            }
                          ]
                        },
                        "compareType": ">=",
                        "value2": 4
                      }
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
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Summoner}}"
                    },
                    "value1": "TutorialSwitch",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster's Summoner}}"
                      },
                      "variableName": "TutorialSwitch",
                      "value": 2
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Name",
                    "skillName": "Skill01"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "Skill01Count",
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
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "Memosprite_CyreneServant_Eidolon4_Count[<span class=\"descriptionNumberColor\">Please Write On, With a Smile</span>]",
                          "valuePerStack": {
                            "MDF_Count": {
                              "operator": "Variables[0] (Skill01Count) || RETURN",
                              "displayLines": "Skill01Count",
                              "constants": [],
                              "variables": [
                                "Skill01Count"
                              ]
                            },
                            "MDF_Damage": {
                              "operator": "Variables[0] (Skill01Count) || Variables[1] (0.06) || MUL || RETURN",
                              "displayLines": "(Skill01Count * 0.06)",
                              "constants": [],
                              "variables": [
                                "Skill01Count",
                                0.06
                              ]
                            }
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Decrement Buff Durations",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Memosprite_CyreneServant_Ability02Disable"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Ability Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster's Summoner}}"
                        },
                        "value1": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecial</span>&nbsp;",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (CurAmazingCount) || RETURN",
                          "displayLines": "CurAmazingCount",
                          "constants": [],
                          "variables": [
                            "CurAmazingCount"
                          ]
                        }
                      },
                      {
                        "name": "Compare: Ability Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster's Summoner}}"
                        },
                        "value1": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecial</span>&nbsp;",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (12) || RETURN",
                          "displayLines": "12",
                          "constants": [],
                          "variables": [
                            12
                          ]
                        }
                      }
                    ]
                  }
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
                        "name": "Skill Name",
                        "skillName": "Skill02",
                        "useActive": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "#CL_MirrorSetupFlag",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "ContextOwner"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Servant_CyreneServant_AbilityReady_LightTeamMirrorChosenEffect"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Enter View-Mode [Anyone]"
            },
            {
              "eventTrigger": "Exit View-Mode [Anyone]",
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
                    },
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "#CL_HasBeenInVeiwMode",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "#CL_HasBeenInVeiwMode",
                          "value": 0
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Update Target ViewMode(UI) [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Targets Entering Selection}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "#CL_HasBeenInVeiwMode",
                      "value": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Targets Entering Selection}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Caster's Summoner}}"
                        }
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "#CL_HasBeenInVeiwMode",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "#CL_HasBeenInVeiwMode",
                          "value": 0
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
              "variableName": "CurSpecialSP",
              "from": "ContextOwner"
            }
          ],
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
              "Memosprite"
            ],
            "conditions": {
              "name": "Character ID",
              "ID": 1405,
              "target": {
                "name": "Target Name",
                "target": "{{Player's Aim Target List}}"
              },
              "characterName": "Anaxa"
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": "0(Set AV)"
            }
          },
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}+{{Caster's Summoner}}"
              },
              "modifier": "Memosprite_CyreneServant_PassiveAbility01_HPIncrease",
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
            }
          ]
        }
      ]
    },
    "Demiurge_Servant_CyreneServant_AbilityCY14": {
      "fileName": "Demiurge_Servant_CyreneServant_AbilityCY14",
      "childAbilityList": [
        "Demiurge_Servant_CyreneServant_AbilityCY14"
      ],
      "skillTrigger": "SkillCY14",
      "abilityType": "Memosprite",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [],
      "references": []
    },
    "Demiurge_Servant_CyreneServant_AbilityCY13": {
      "fileName": "Demiurge_Servant_CyreneServant_AbilityCY13",
      "childAbilityList": [
        "Demiurge_Servant_CyreneServant_AbilityCY13"
      ],
      "skillTrigger": "SkillCY13",
      "abilityType": "Memosprite",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [],
      "references": []
    },
    "Demiurge_Servant_CyreneServant_AbilityCY12": {
      "fileName": "Demiurge_Servant_CyreneServant_AbilityCY12",
      "childAbilityList": [
        "Demiurge_Servant_CyreneServant_AbilityCY12"
      ],
      "skillTrigger": "SkillCY12",
      "abilityType": "Memosprite",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [],
      "references": []
    },
    "Demiurge_Servant_CyreneServant_AbilityCY11": {
      "fileName": "Demiurge_Servant_CyreneServant_AbilityCY11",
      "childAbilityList": [
        "Demiurge_Servant_CyreneServant_AbilityCY11"
      ],
      "skillTrigger": "SkillCY11",
      "abilityType": "Memosprite",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [],
      "references": []
    },
    "Demiurge_Servant_CyreneServant_AbilityCY10": {
      "fileName": "Demiurge_Servant_CyreneServant_AbilityCY10",
      "childAbilityList": [
        "Demiurge_Servant_CyreneServant_AbilityCY10"
      ],
      "skillTrigger": "SkillCY10",
      "abilityType": "Memosprite",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [],
      "references": []
    },
    "Demiurge_Servant_CyreneServant_AbilityCY09": {
      "fileName": "Demiurge_Servant_CyreneServant_AbilityCY09",
      "childAbilityList": [
        "Demiurge_Servant_CyreneServant_AbilityCY09"
      ],
      "skillTrigger": "SkillCY09",
      "abilityType": "Memosprite",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [],
      "references": []
    },
    "Demiurge_Servant_CyreneServant_AbilityCY08": {
      "fileName": "Demiurge_Servant_CyreneServant_AbilityCY08",
      "childAbilityList": [
        "Demiurge_Servant_CyreneServant_AbilityCY08"
      ],
      "skillTrigger": "SkillCY08",
      "abilityType": "Memosprite",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [],
      "references": []
    },
    "Demiurge_Servant_CyreneServant_AbilityCY07": {
      "fileName": "Demiurge_Servant_CyreneServant_AbilityCY07",
      "childAbilityList": [
        "Demiurge_Servant_CyreneServant_AbilityCY07"
      ],
      "skillTrigger": "SkillCY07",
      "abilityType": "Memosprite",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [],
      "references": []
    },
    "Demiurge_Servant_CyreneServant_AbilityCY06": {
      "fileName": "Demiurge_Servant_CyreneServant_AbilityCY06",
      "childAbilityList": [
        "Demiurge_Servant_CyreneServant_AbilityCY06"
      ],
      "skillTrigger": "SkillCY06",
      "abilityType": "Memosprite",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [],
      "references": []
    },
    "Demiurge_Servant_CyreneServant_AbilityCY05": {
      "fileName": "Demiurge_Servant_CyreneServant_AbilityCY05",
      "childAbilityList": [
        "Demiurge_Servant_CyreneServant_AbilityCY05"
      ],
      "skillTrigger": "SkillCY05",
      "abilityType": "Memosprite",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [],
      "references": []
    },
    "Demiurge_Servant_CyreneServant_AbilityCY04": {
      "fileName": "Demiurge_Servant_CyreneServant_AbilityCY04",
      "childAbilityList": [
        "Demiurge_Servant_CyreneServant_AbilityCY04"
      ],
      "skillTrigger": "SkillCY04",
      "abilityType": "Memosprite",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [],
      "references": []
    },
    "Demiurge_Servant_CyreneServant_AbilityCY03": {
      "fileName": "Demiurge_Servant_CyreneServant_AbilityCY03",
      "childAbilityList": [
        "Demiurge_Servant_CyreneServant_AbilityCY03"
      ],
      "skillTrigger": "SkillCY03",
      "abilityType": "Memosprite",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [],
      "references": []
    },
    "Demiurge_Servant_CyreneServant_AbilityCY02": {
      "fileName": "Demiurge_Servant_CyreneServant_AbilityCY02",
      "childAbilityList": [
        "Demiurge_Servant_CyreneServant_AbilityCY02"
      ],
      "skillTrigger": "SkillCY02",
      "abilityType": "Memosprite",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [],
      "references": []
    },
    "Demiurge_Servant_CyreneServant_AbilityCY01": {
      "fileName": "Demiurge_Servant_CyreneServant_AbilityCY01",
      "childAbilityList": [
        "Demiurge_Servant_CyreneServant_AbilityCY01"
      ],
      "skillTrigger": "SkillCY01",
      "abilityType": "Memosprite",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [],
      "references": []
    },
    "Demiurge_Servant_CyreneServant_Ability11_Part02": {
      "fileName": "Demiurge_Servant_CyreneServant_Ability11_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Demiurge_Servant_CyreneServant_Ability11_Part01": {
      "fileName": "Demiurge_Servant_CyreneServant_Ability11_Part01",
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
          "ability": "Servant_CyreneServant_Ability11_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Demiurge_Servant_CyreneServant_Ability02_Part02": {
      "fileName": "Demiurge_Servant_CyreneServant_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable with Varying Data",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "variableName": "_TargetCharacterID",
          "value": "TargetCharacterID",
          "context": "ContextAbility"
        },
        {
          "name": "Define Custom Variable with Varying Data",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "variableName": "TargetCharacterID",
          "value": "TargetCharacterID"
        },
        {
          "name": "SWITCH",
          "switchValue": {
            "operator": "Variables[0] (TargetCharacterID) || RETURN",
            "displayLines": "TargetCharacterID",
            "constants": [],
            "variables": [
              "TargetCharacterID"
            ]
          },
          "caseEvents": [
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 1402
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 1403
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 1404
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 1405
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 1406
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 1407
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 1408
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 1409
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 1410
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 1412
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 1413
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 1414
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 8007
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 8008
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Is Part Of Group",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "group": "Chrysos",
            "invertCondition": true
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Character ID",
            "ID": 1409,
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "characterName": "Hyacine"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "Memosprite_CyreneServant_AmazingBonus_Hyacine[<span class=\"descriptionNumberColor\">Ode to Sky</span>]",
              "valuePerStack": {
                "MDF_HyacineRatio": {
                  "operator": "Variables[0] (0.72) || RETURN",
                  "displayLines": "0.72",
                  "constants": [],
                  "variables": [
                    0.72
                  ]
                }
              },
              "addStacksPerTrigger": 2
            },
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "value": {
                "operator": "Variables[0] (24) || RETURN",
                "displayLines": "24",
                "constants": [],
                "variables": [
                  24
                ]
              },
              "isFixed": "(Fixed)"
            }
          ],
          "failed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}"
              },
              "conditions": {
                "name": "Character ID",
                "ID": 1409,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": "Hyacine"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Memosprite_CyreneServant_AmazingBonus_Hyacine[<span class=\"descriptionNumberColor\">Ode to Sky</span>]",
                  "valuePerStack": {
                    "MDF_HyacineRatio": {
                      "operator": "Variables[0] (0.72) || RETURN",
                      "displayLines": "0.72",
                      "constants": [],
                      "variables": [
                        0.72
                      ]
                    }
                  },
                  "addStacksPerTrigger": 2
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Character ID",
            "ID": 1410,
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "characterName": "Hysilens"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "Memosprite_CyreneServant_AmazingBonus_Harscyline[<span class=\"descriptionNumberColor\">Ode to Ocean</span>]",
              "valuePerStack": {
                "MDF_HarscylineRatio": {
                  "operator": "Variables[0] (1.2) || RETURN",
                  "displayLines": "1.2",
                  "constants": [],
                  "variables": [
                    1.2
                  ]
                },
                "MDF_DotRatio1": {
                  "operator": "Variables[0] (0.6) || RETURN",
                  "displayLines": "0.6",
                  "constants": [],
                  "variables": [
                    0.6
                  ]
                },
                "MDF_DotRatio2": {
                  "operator": "Variables[0] (0.8) || RETURN",
                  "displayLines": "0.8",
                  "constants": [],
                  "variables": [
                    0.8
                  ]
                }
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "Memosprite_CyreneServant_AmazingBonus_Harscyline_Sub[<span class=\"descriptionNumberColor\">Flowing Warmth</span>]",
              "valuePerStack": {
                "MDF_SPAdd": {
                  "operator": "Variables[0] (60) || RETURN",
                  "displayLines": "60",
                  "constants": [],
                  "variables": [
                    60
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Character ID",
            "ID": 1413,
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "characterName": "Evernight"
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "variableName": "S02_ExtraRatio",
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
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "Memosprite_CyreneServant_AmazingBonus_Evernight[<span class=\"descriptionNumberColor\">Ode to Time</span>]",
              "valuePerStack": {
                "MDF_EverNightRatio": {
                  "operator": "Variables[0] (0.18) || RETURN",
                  "displayLines": "0.18",
                  "constants": [],
                  "variables": [
                    0.18
                  ]
                },
                "MDF_ExtraPoint": {
                  "operator": "Variables[0] (1) || RETURN",
                  "displayLines": "1",
                  "constants": [],
                  "variables": [
                    1
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Character ID",
            "ID": 1414,
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "characterName": "Dan Heng • Permansor Terrae"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "Memosprite_CyreneServant_AmazingBonus_DanHengPT[<span class=\"descriptionNumberColor\">Ode to Earth</span>]",
              "valuePerStack": {
                "MDF_DamageIncrease": {
                  "operator": "Variables[0] (0.24) || RETURN",
                  "displayLines": "0.24",
                  "constants": [],
                  "variables": [
                    0.24
                  ]
                },
                "MDF_DanHengPT_ExtraDamageCount": {
                  "operator": "Variables[0] (3) || RETURN",
                  "displayLines": "3",
                  "constants": [],
                  "variables": [
                    3
                  ]
                },
                "MDF_DamageRatio": {
                  "operator": "Variables[0] (0.8) || RETURN",
                  "displayLines": "0.8",
                  "constants": [],
                  "variables": [
                    0.8
                  ]
                }
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "DanHengPT_LongLingAttackExtraDamage",
              "valuePerStack": {
                "MDF_Count": {
                  "operator": "Variables[0] (3) || RETURN",
                  "displayLines": "3",
                  "constants": [],
                  "variables": [
                    3
                  ]
                },
                "MDF_DanHengPT_ExtraDamageCount": {
                  "operator": "Variables[0] (3) || RETURN",
                  "displayLines": "3",
                  "constants": [],
                  "variables": [
                    3
                  ]
                },
                "MDF_DamageRatio": {
                  "operator": "Variables[0] (0.8) || RETURN",
                  "displayLines": "0.8",
                  "constants": [],
                  "variables": [
                    0.8
                  ]
                }
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "DanHengPT_LongLingExtraShield",
              "valuePerStack": {
                "MDF_ShieldRatio": {
                  "operator": "Variables[0] (1.5) || RETURN",
                  "displayLines": "1.5",
                  "constants": [],
                  "variables": [
                    1.5
                  ]
                }
              }
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Character ID",
                      "ID": 1414,
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "characterName": "Dan Heng • Permansor Terrae"
                    }
                  }
                ]
              },
              "modifier": "Memosprite_CyreneServant_AmazingBonus_DanHengPT[<span class=\"descriptionNumberColor\">Ode to Earth</span>]",
              "valuePerStack": {
                "MDF_DamageIncrease": {
                  "operator": "Variables[0] (0.24) || RETURN",
                  "displayLines": "0.24",
                  "constants": [],
                  "variables": [
                    0.24
                  ]
                },
                "MDF_DanHengPT_ExtraDamageCount": {
                  "operator": "Variables[0] (3) || RETURN",
                  "displayLines": "3",
                  "constants": [],
                  "variables": [
                    3
                  ]
                },
                "MDF_DamageRatio": {
                  "operator": "Variables[0] (0.8) || RETURN",
                  "displayLines": "0.8",
                  "constants": [],
                  "variables": [
                    0.8
                  ]
                }
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Character ID",
                      "ID": 1414,
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "characterName": "Dan Heng • Permansor Terrae"
                    }
                  }
                ]
              },
              "modifier": "DanHengPT_LongLingAttackExtraDamage",
              "valuePerStack": {
                "MDF_Count": {
                  "operator": "Variables[0] (3) || RETURN",
                  "displayLines": "3",
                  "constants": [],
                  "variables": [
                    3
                  ]
                },
                "MDF_DanHengPT_ExtraDamageCount": {
                  "operator": "Variables[0] (3) || RETURN",
                  "displayLines": "3",
                  "constants": [],
                  "variables": [
                    3
                  ]
                },
                "MDF_DamageRatio": {
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
          "name": "IF",
          "conditions": {
            "name": "Character ID",
            "ID": 1407,
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "characterName": "Castorice"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "Memosprite_CyreneServant_AmazingBonus_Castorice[<span class=\"descriptionNumberColor\">Ode to Life and Death</span>]",
              "valuePerStack": {
                "MDF_SuicideRatioBase": {
                  "operator": "Variables[0] (0.0024) || RETURN",
                  "displayLines": "0.0024",
                  "constants": [],
                  "variables": [
                    0.0024
                  ]
                },
                "MDF_SuicideRatioBase2": {
                  "operator": "Variables[0] (0.0048) || RETURN",
                  "displayLines": "0.0048",
                  "constants": [],
                  "variables": [
                    0.0048
                  ]
                },
                "MDF_MaxEnergy": {
                  "operator": "Variables[0] (2) || RETURN",
                  "displayLines": "2",
                  "constants": [],
                  "variables": [
                    2
                  ]
                },
                "MDF_EnergyRatio": {
                  "operator": "Variables[0] (0) || RETURN",
                  "displayLines": "0",
                  "constants": [],
                  "variables": [
                    0
                  ]
                },
                "MDF_TargetCount": {
                  "operator": "Variables[0] (2) || RETURN",
                  "displayLines": "2",
                  "constants": [],
                  "variables": [
                    2
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Character ID",
            "ID": 1408,
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "characterName": "Phainon"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "Memosprite_CyreneServant_AmazingBonus_Phainon[<span class=\"descriptionNumberColor\">Ode to Worldbearing</span>]",
              "valuePerStack": {
                "MDF_DamageIncrease": {
                  "operator": "Variables[0] (0.16) || RETURN",
                  "displayLines": "0.16",
                  "constants": [],
                  "variables": [
                    0.16
                  ]
                },
                "MDF_LoseHP": {
                  "operator": "Variables[0] (0.15) || RETURN",
                  "displayLines": "0.15",
                  "constants": [],
                  "variables": [
                    0.15
                  ]
                },
                "MDF_Loop": {
                  "operator": "Variables[0] (5) || RETURN",
                  "displayLines": "5",
                  "constants": [],
                  "variables": [
                    5
                  ]
                },
                "MDF_DamagePercentage": {
                  "operator": "Variables[0] (0.1) || RETURN",
                  "displayLines": "0.1",
                  "constants": [],
                  "variables": [
                    0.1
                  ]
                },
                "MDF_EnergyNeed": {
                  "operator": "Variables[0] (12) || RETURN",
                  "displayLines": "12",
                  "constants": [],
                  "variables": [
                    12
                  ]
                },
                "MDF_PropertyRatio": {
                  "operator": "Variables[0] (0.12) || RETURN",
                  "displayLines": "0.12",
                  "constants": [],
                  "variables": [
                    0.12
                  ]
                },
                "MDF_PropertyRatioMax": {
                  "operator": "Variables[0] (0.72) || RETURN",
                  "displayLines": "0.72",
                  "constants": [],
                  "variables": [
                    0.72
                  ]
                },
                "MDF_Kindling": {
                  "operator": "Variables[0] (6) || RETURN",
                  "displayLines": "6",
                  "constants": [],
                  "variables": [
                    6
                  ]
                },
                "MDF_ChargeEnergy": {
                  "operator": "Variables[0] (4) || RETURN",
                  "displayLines": "4",
                  "constants": [],
                  "variables": [
                    4
                  ]
                }
              },
              "casterAssign": "TargetSelf"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Character ID",
                "ID": 8007,
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "characterName": "Trailblazer - Remembrance[M]"
              },
              {
                "name": "Character ID",
                "ID": 8008,
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "characterName": "Trailblazer - Remembrance[F]"
              }
            ]
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "Memosprite_CyreneServant_AmazingBonus_Player[<span class=\"descriptionNumberColor\">Ode to Genesis</span>]",
              "valuePerStack": {
                "MDF_HPTransferRatio": {
                  "operator": "Variables[0] (0.16) || RETURN",
                  "displayLines": "0.16",
                  "constants": [],
                  "variables": [
                    0.16
                  ]
                },
                "MDF_CritTranferRatio": {
                  "operator": "Variables[0] (0.72) || RETURN",
                  "displayLines": "0.72",
                  "constants": [],
                  "variables": [
                    0.72
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Character ID",
            "ID": 1403,
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "characterName": "Tribbie"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "Memosprite_CyreneServant_AmazingBonus_Tribbie[<span class=\"descriptionNumberColor\">Ode to Passage</span>]",
              "valuePerStack": {
                "MDF_TribbieLoopCount": {
                  "operator": "Variables[0] (1) || RETURN",
                  "displayLines": "1",
                  "constants": [],
                  "variables": [
                    1
                  ]
                },
                "MDF_IgnoreDef": {
                  "operator": "Variables[0] (0.12) || RETURN",
                  "displayLines": "0.12",
                  "constants": [],
                  "variables": [
                    0.12
                  ]
                },
                "MDF_TargetCount": {
                  "operator": "Variables[0] (3) || RETURN",
                  "displayLines": "3",
                  "constants": [],
                  "variables": [
                    3
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Character ID",
            "ID": 1404,
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "characterName": "Mydei"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "modifier": "Memosprite_CyreneServant_AmazingBonus_Mydeimos"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "variableName": "_AmazingBuff_Mydeimos_ModifierCount",
                  "modifierName": "Memosprite_CyreneServant_AmazingBonus_Mydeimos",
                  "multiplier": 1
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "modifier": "Memosprite_CyreneServant_AmazingBonus_Mydeimos",
                  "counter": {
                    "operator": "Variables[0] (_AmazingBuff_Mydeimos_ModifierCount) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(_AmazingBuff_Mydeimos_ModifierCount + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "_AmazingBuff_Mydeimos_ModifierCount"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_CritDamage": {
                      "operator": "Variables[0] (2) || RETURN",
                      "displayLines": "2",
                      "constants": [],
                      "variables": [
                        2
                      ]
                    },
                    "MDF_ActionDelay": {
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
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "modifier": "Memosprite_CyreneServant_AmazingBonus_Mydeimos",
                  "counter": 1,
                  "valuePerStack": {
                    "MDF_CritDamage": {
                      "operator": "Variables[0] (2) || RETURN",
                      "displayLines": "2",
                      "constants": [],
                      "variables": [
                        2
                      ]
                    },
                    "MDF_ActionDelay": {
                      "operator": "Variables[0] (1) || RETURN",
                      "displayLines": "1",
                      "constants": [],
                      "variables": [
                        1
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
            "name": "Character ID",
            "ID": 1402,
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "characterName": "Aglaea"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "Memosprite_CyreneServant_AmazingBonus_Aglaea[<span class=\"descriptionNumberColor\">Ode to Romance</span>]",
              "valuePerStack": {
                "MDF_DamageIncrease": {
                  "operator": "Variables[0] (0.72) || RETURN",
                  "displayLines": "0.72",
                  "constants": [],
                  "variables": [
                    0.72
                  ]
                },
                "MDF_IgnoreDef": {
                  "operator": "Variables[0] (0.36) || RETURN",
                  "displayLines": "0.36",
                  "constants": [],
                  "variables": [
                    0.36
                  ]
                }
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "Memosprite_CyreneServant_AmazingBonus_Aglaea_Sub2[<span class=\"descriptionNumberColor\">Romantic</span>]",
              "valuePerStack": {
                "MDF_SPAdd": {
                  "operator": "Variables[0] (70) || RETURN",
                  "displayLines": "70",
                  "constants": [],
                  "variables": [
                    70
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Character ID",
            "ID": 1405,
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "characterName": "Anaxa"
          },
          "passed": [
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
            },
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "value": 0
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "Memosprite_CyreneServant_AmazingBonus_Anaxa[<span class=\"descriptionNumberColor\">Ode to Reason</span>]",
              "duration": 1,
              "valuePerStack": {
                "MDF_AnaxaCount": {
                  "operator": "Variables[0] (3) || RETURN",
                  "displayLines": "3",
                  "constants": [],
                  "variables": [
                    3
                  ]
                },
                "MDF_DamageIncrease": {
                  "operator": "Variables[0] (0.4) || RETURN",
                  "displayLines": "0.4",
                  "constants": [],
                  "variables": [
                    0.4
                  ]
                },
                "MDF_AttackAddRatio": {
                  "operator": "Variables[0] (0.6) || RETURN",
                  "displayLines": "0.6",
                  "constants": [],
                  "variables": [
                    0.6
                  ]
                }
              },
              "casterAssign": "TargetSelf"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "Memosprite_CyreneServant_AmazingBonus_Anaxa_HaloMain",
              "valuePerStack": {
                "MDF_AnaxaCount": {
                  "operator": "Variables[0] (3) || RETURN",
                  "displayLines": "3",
                  "constants": [],
                  "variables": [
                    3
                  ]
                },
                "MDF_DamageIncrease": {
                  "operator": "Variables[0] (0.4) || RETURN",
                  "displayLines": "0.4",
                  "constants": [],
                  "variables": [
                    0.4
                  ]
                },
                "MDF_AttackAddRatio": {
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
        {
          "name": "IF",
          "conditions": {
            "name": "Character ID",
            "ID": 1406,
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "characterName": "Cipher"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "Memosprite_CyreneServant_AmazingBonus_Cipher[<span class=\"descriptionNumberColor\">Ode to Trickery</span>]",
              "valuePerStack": {
                "MDF_DamageIncrease": {
                  "operator": "Variables[0] (0.36) || RETURN",
                  "displayLines": "0.36",
                  "constants": [],
                  "variables": [
                    0.36
                  ]
                },
                "MDF_DefDown": {
                  "operator": "Variables[0] (0.2) || RETURN",
                  "displayLines": "0.2",
                  "constants": [],
                  "variables": [
                    0.2
                  ]
                },
                "MDF_DefDown2": {
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
          "name": "IF",
          "conditions": {
            "name": "Character ID",
            "ID": 1412,
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "characterName": "Cerydra"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "Memosprite_CyreneServant_AmazingBonus_Cerydra[<span class=\"descriptionNumberColor\">Ode to Law</span>]",
              "valuePerStack": {
                "MDF_DamageIncrease": {
                  "operator": "Variables[0] (0.3) || RETURN",
                  "displayLines": "0.3",
                  "constants": [],
                  "variables": [
                    0.3
                  ]
                },
                "MDF_ExtraPoint": {
                  "operator": "Variables[0] (1) || RETURN",
                  "displayLines": "1",
                  "constants": [],
                  "variables": [
                    1
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Is Part Of Group",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "group": "Chrysos",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "Memosprite_CyreneServant_AmazingBonus_Normal[<span class=\"descriptionNumberColor\">This Ode, to All Lives</span>]",
              "duration": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "valuePerStack": {
                "MDF_IncreaseRatio": {
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
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Demiurge_Servant_CyreneServant_Ability02_Part01": {
      "fileName": "Demiurge_Servant_CyreneServant_Ability02_Part01",
      "childAbilityList": [
        "Demiurge_Servant_CyreneServant_Ability02_Part01",
        "Demiurge_Servant_CyreneServant_Ability02_Part02",
        "Demiurge_Servant_CyreneServant_Ability02_Camera",
        "Demiurge_Servant_CyreneServant_Ability02_Ready",
        "Demiurge_Servant_CyreneServant_Ability02_Ready_Camera",
        "Demiurge_Servant_CyreneServant_Ability02_VisualPrepare"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Memosprite",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Use Custom Character Function",
          "functionName": "Cyrene_Preload_ServantReadyEffect",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "variables": {
            "_IsPreload": 0
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "#CL_HasBeenInVeiwMode",
          "value": 0
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Servant_CyreneServant_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "Demiurge_Servant_CyreneServant_Ability02_Ready": {
      "fileName": "Demiurge_Servant_CyreneServant_Ability02_Ready",
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
          "ability": "Servant_CyreneServant_Ability02_VisualPrepare",
          "isTrigger": true
        },
        {
          "name": "Inject Extra-Turn",
          "actionTag": null,
          "skillType": "ControlSkill02",
          "abilityName": "Servant_CyreneServant_FormationReset",
          "afterInjection": [],
          "priorityTag": "Character_HighPriorityAction"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            },
            "value1": "TutorialSwitch",
            "compareType": "=",
            "value2": 1
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster's Summoner}}"
                },
                "value1": "TutorialSwitch",
                "compareType": "=",
                "value2": 2
              }
            }
          ]
        }
      ],
      "references": []
    },
    "Demiurge_Servant_CyreneServant_Ability01_Part02": {
      "fileName": "Demiurge_Servant_CyreneServant_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable with Copy",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "variable": "CurInsertHitCount",
          "target2": null,
          "variable2": "HitCount",
          "scope": "ContextAbility"
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
              "variableName": "HitRatio",
              "value": {
                "operator": "Variables[0] (0.6) || Variables[1] (Skill01Count) || Variables[2] (0.06) || MUL || ADD || RETURN",
                "displayLines": "(0.6 + (Skill01Count * 0.06))",
                "constants": [],
                "variables": [
                  0.6,
                  "Skill01Count",
                  0.06
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "HitRatio",
              "value": {
                "operator": "Variables[0] (0.6) || RETURN",
                "displayLines": "0.6",
                "constants": [],
                "variables": [
                  0.6
                ]
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "IsInRank01Action",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "IsInRank01Action",
              "value": 0
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "_M_Cyrene_Eidolon1_Ability01Prepare"
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
                  "variableName": "HitCount",
                  "value": {
                    "operator": "Variables[0] (HitCount) || Variables[1] (12) || ADD || RETURN",
                    "displayLines": "(HitCount + 12)",
                    "constants": [],
                    "variables": [
                      "HitCount",
                      12
                    ]
                  }
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "ServantCyrene_ChargeEnergy",
                  "variables": {
                    "parameter[0]_AddValue": {
                      "operator": "Variables[0] (6) || RETURN",
                      "displayLines": "6",
                      "constants": [],
                      "variables": [
                        6
                      ]
                    }
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
                  "functionName": "ServantCyrene_Eidolon6"
                }
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Memosprite_CyreneServant_Energy[<span class=\"descriptionNumberColor\">Story</span>]"
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "IsInPlayerAction",
                    "compareType": "=",
                    "value2": 1
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "_M_Cyrene_Player_Ability01Prepare"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "IsInPlayerAction",
                  "value": 0
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_M_Cyrene_Player_Ability01Prepare",
                    "compareType": ">",
                    "value2": 1,
                    "valueType": "Layer"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "_M_Cyrene_Player_Ability01Prepare",
                      "addStacksPerTrigger": -1
                    }
                  ],
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "_M_Cyrene_Player_Ability01Prepare"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target Group}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (0.6) || RETURN",
              "displayLines": "0.6",
              "constants": [],
              "variables": [
                0.6
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
            "Tags": null
          }
        },
        {
          "name": "Clear DMG Numbers(UI)",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          }
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (HitCount) || RETURN",
            "displayLines": "HitCount",
            "constants": [],
            "variables": [
              "HitCount"
            ]
          },
          "Event": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Bounce_SelectTarget",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "paramSequence": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "Damage": {
                      "operator": "Variables[0] (HitRatio) || RETURN",
                      "displayLines": "HitRatio",
                      "constants": [],
                      "variables": [
                        "HitRatio"
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
                    "Tags": null
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}"
          },
          "conditions": {
            "name": "Character ID",
            "ID": 1409,
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": "Hyacine"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Memosprite_CyreneServant_AmazingBonus_Hyacine[<span class=\"descriptionNumberColor\">Ode to Sky</span>]",
              "valuePerStack": {
                "MDF_HyacineRatio": {
                  "operator": "Variables[0] (0.72) || RETURN",
                  "displayLines": "0.72",
                  "constants": [],
                  "variables": [
                    0.72
                  ]
                }
              },
              "addStacksPerTrigger": 2
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Character ID",
                  "ID": 1414,
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "characterName": "Dan Heng • Permansor Terrae"
                }
              }
            ]
          },
          "modifier": "Memosprite_CyreneServant_AmazingBonus_DanHengPT[<span class=\"descriptionNumberColor\">Ode to Earth</span>]",
          "valuePerStack": {
            "MDF_DamageIncrease": {
              "operator": "Variables[0] (0.24) || RETURN",
              "displayLines": "0.24",
              "constants": [],
              "variables": [
                0.24
              ]
            },
            "MDF_DanHengPT_ExtraDamageCount": {
              "operator": "Variables[0] (3) || RETURN",
              "displayLines": "3",
              "constants": [],
              "variables": [
                3
              ]
            },
            "MDF_DamageRatio": {
              "operator": "Variables[0] (0.8) || RETURN",
              "displayLines": "0.8",
              "constants": [],
              "variables": [
                0.8
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Character ID",
                  "ID": 1414,
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "characterName": "Dan Heng • Permansor Terrae"
                }
              }
            ]
          },
          "modifier": "DanHengPT_LongLingAttackExtraDamage",
          "valuePerStack": {
            "MDF_Count": {
              "operator": "Variables[0] (3) || RETURN",
              "displayLines": "3",
              "constants": [],
              "variables": [
                3
              ]
            },
            "MDF_DanHengPT_ExtraDamageCount": {
              "operator": "Variables[0] (3) || RETURN",
              "displayLines": "3",
              "constants": [],
              "variables": [
                3
              ]
            },
            "MDF_DamageRatio": {
              "operator": "Variables[0] (0.8) || RETURN",
              "displayLines": "0.8",
              "constants": [],
              "variables": [
                0.8
              ]
            }
          }
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Memosprite_CyreneServant_Ability01_Debuff",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
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
      ]
    },
    "Demiurge_Servant_CyreneServant_Ability01_Part01": {
      "fileName": "Demiurge_Servant_CyreneServant_Ability01_Part01",
      "childAbilityList": [
        "Demiurge_Servant_CyreneServant_Ability01_Part01",
        "Demiurge_Servant_CyreneServant_Ability01_Part02",
        "Demiurge_Servant_CyreneServant_Ability01_Camera",
        "Demiurge_Servant_CyreneServant_Ability01_Ready",
        "Demiurge_Servant_CyreneServant_Ability01_Ready_Camera",
        "Demiurge_Servant_CyreneServant_Ability01_VisualPrepare"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Memosprite",
      "energy": null,
      "toughnessList": [
        10,
        0,
        0
      ],
      "parse": [
        {
          "name": "Use Custom Character Function",
          "functionName": "Cyrene_Preload_ServantReadyEffect",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "variables": {
            "_IsPreload": 0
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "#CL_HasBeenInVeiwMode",
          "value": 0
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Servant_CyreneServant_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "Demiurge_Servant_CyreneServant_Ability01_Ready": {
      "fileName": "Demiurge_Servant_CyreneServant_Ability01_Ready",
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
          "parameters": {
            "_AnimStartNormalizedTime": 0
          },
          "ability": "Servant_CyreneServant_Ability01_VisualPrepare",
          "isTrigger": true
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Memosprite_CyreneServant_Ability02Disable"
        },
        {
          "name": "Inject Extra-Turn",
          "actionTag": null,
          "abilityName": "Servant_CyreneServant_FormationReset",
          "afterInjection": [],
          "priorityTag": "Character_HighPriorityAction"
        }
      ],
      "references": []
    },
    "Demiurge_Modifiers": {
      "fileName": "Demiurge_Modifiers",
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
          "for": "Memosprite_CyreneServant_Eidolon6_Sub[<span class=\"descriptionNumberColor\">Remembrance, Sung in Ripples ♪</span>]",
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
          "description": "DEF decreases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "statusName": "Remembrance, Sung in Ripples ♪"
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_CyreneServant_Eidolon6",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}.[[removeBattleEvents]]"
              },
              "modifier": "Memosprite_CyreneServant_Eidolon6_Sub[<span class=\"descriptionNumberColor\">Remembrance, Sung in Ripples ♪</span>]",
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
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_CyreneServant_AmazingBonus_DanHengPT_Sub[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "RemoveWhenCasterDead"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_DamageIncrease) || RETURN",
                    "displayLines": "MDF_DamageIncrease",
                    "constants": [],
                    "variables": [
                      "MDF_DamageIncrease"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Character ID",
                    "ID": 1414,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Dan Heng • Permansor Terrae"
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_DamageIncrease</span>.",
          "type": "Buff",
          "statusName": "DMG Boost"
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_CyreneServant_AmazingBonus_DanHengPT[<span class=\"descriptionNumberColor\">Ode to Earth</span>]",
          "stackType": "Replace",
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
                    "name": "Compare: Variable",
                    "value1": "MDF_DanHengPT_ExtraDamageCount",
                    "compareType": ">=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Update Modifier Description",
                      "popUpText": "DMG dealt by the \"Bondmate's\" increases by <span class=\"descriptionNumberColor\">MDF_DamageIncrease</span>. The next <span class=\"descriptionNumberColor\">MDF_DanHengPT_ExtraDamageCount</span> attack(s) from \"Souldragon\" deals Additional DMG of the corresponding Type equal to <span class=\"descriptionNumberColor\">MDF_DamageRatio</span> of the Bondmate's Shield Effect."
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Modifier Description",
                      "popUpText": "DMG dealt by \"Bondmate\" increases by <span class=\"descriptionNumberColor\">MDF_DamageIncrease</span>."
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]"
            },
            {
              "eventTrigger": "When Modifier is Added [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "DanHengPT_LongLing[<span class=\"descriptionNumberColor\">Bondmate</span>]"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)V2}}"
                      },
                      "modifier": "Memosprite_CyreneServant_AmazingBonus_DanHengPT_Sub[<span class=\"descriptionNumberColor\">DMG Boost</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Bondmate}}"
                      },
                      "modifier": "Memosprite_CyreneServant_AmazingBonus_DanHengPT_Sub[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                      "valuePerStack": {
                        "MDF_DamageIncrease": {
                          "operator": "Variables[0] (MDF_DamageIncrease) || RETURN",
                          "displayLines": "MDF_DamageIncrease",
                          "constants": [],
                          "variables": [
                            "MDF_DamageIncrease"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "DanHengPT_ExtraDamageCount",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Define Custom Variable with Copy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variable": "DanHengPT_ExtraDamageCount",
                      "target2": null,
                      "variable2": "MDF_DanHengPT_ExtraDamageCount"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_DanHengPT_ExtraDamageCount",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Update Modifier Description",
                          "popUpText": "DMG dealt by \"Bondmate\" increases by <span class=\"descriptionNumberColor\">MDF_DamageIncrease</span>."
                        }
                      ],
                      "failed": [
                        {
                          "name": "Update Modifier Description",
                          "popUpText": "DMG dealt by the \"Bondmate's\" increases by <span class=\"descriptionNumberColor\">MDF_DamageIncrease</span>. The next <span class=\"descriptionNumberColor\">MDF_DanHengPT_ExtraDamageCount</span> attack(s) from \"Souldragon\" deals Additional DMG of the corresponding Type equal to <span class=\"descriptionNumberColor\">MDF_DamageRatio</span> of the Bondmate's Shield Effect."
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_DamageIncrease",
            "MDF_DanHengPT_ExtraDamageCount",
            "MDF_DamageRatio"
          ],
          "latentQueue": [
            "IsInRank01Action",
            "IsInPlayerAction"
          ],
          "description": "DMG dealt by \"Bondmate\" increases by <span class=\"descriptionNumberColor\">MDF_DamageIncrease</span>.",
          "type": "Buff",
          "effectName": "Ode to Earth",
          "statusName": "Ode to Earth",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Memosprite_CyreneServant_AmazingBonus"
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Cyrene_UITop"
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Bondmate}}"
              },
              "modifier": "Memosprite_CyreneServant_AmazingBonus_DanHengPT_Sub[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_DamageIncrease": {
                  "operator": "Variables[0] (MDF_DamageIncrease) || RETURN",
                  "displayLines": "MDF_DamageIncrease",
                  "constants": [],
                  "variables": [
                    "MDF_DamageIncrease"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_CyreneServant_AmazingBonus_Evernight[<span class=\"descriptionNumberColor\">Ode to Time</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "ContextOwner",
                  "variableName": "S02_ExtraRatio",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Deal Damage Start [Anyone]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Skill Name",
                        "skillName": "Skill11"
                      },
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}.[[getMemosprite]]"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                          "value": "MDF_EverNightRatio"
                        }
                      ]
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
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Skill"
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Ultimate"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Copy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variable": "_Evernight_00_Extra_Energy",
                      "target2": null,
                      "variable2": "Evernight_00_Extra_Energy"
                    },
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "_Partner_Count_Show",
                      "context": "ContextOwner",
                      "value": {
                        "operator": "Variables[0] (MDF_ExtraPoint) || Variables[1] (Evernight_00_Extra_Energy) || ADD || RETURN",
                        "displayLines": "(MDF_ExtraPoint + Evernight_00_Extra_Energy)",
                        "constants": [],
                        "variables": [
                          "MDF_ExtraPoint",
                          "Evernight_00_Extra_Energy"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}.[[getMemosprite]]"
                      },
                      "variableName": "_Partner_Count",
                      "value": {
                        "operator": "Variables[0] (MDF_ExtraPoint) || Variables[1] (Evernight_00_Extra_Energy) || ADD || RETURN",
                        "displayLines": "(MDF_ExtraPoint + Evernight_00_Extra_Energy)",
                        "constants": [],
                        "variables": [
                          "MDF_ExtraPoint",
                          "Evernight_00_Extra_Energy"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_EverNightRatio",
            "MDF_ExtraPoint"
          ],
          "latentQueue": [],
          "description": "When Evey uses the Memosprite Skill \"Dream, Dissolving, as Dew,\" DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_EverNightRatio</span>. After Evernight uses Skill/Ultimate, gains <span class=\"descriptionNumberColor\">MDF_ExtraPoint</span> additional \"Memoria.\"",
          "type": "Buff",
          "effectName": "Ode to Time",
          "statusName": "Ode to Time",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Memosprite_CyreneServant_AmazingBonus"
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Cyrene_UITop"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_CyreneServant_AmazingBonus_Phainon_Dot",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_DamageIncrease) || RETURN",
                    "displayLines": "MDF_DamageIncrease",
                    "constants": [],
                    "variables": [
                      "MDF_DamageIncrease"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Character ID",
                    "ID": 1415,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Cyrene"
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Extra Action/Turn [Owner]: Start ",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_Switch",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Consume",
                      "consumeFrom": "CurrentHP",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "consumePercent": {
                        "operator": "Variables[0] (MDF_LoseHP) || RETURN",
                        "displayLines": "MDF_LoseHP",
                        "constants": [],
                        "variables": [
                          "MDF_LoseHP"
                        ]
                      },
                      "DamageType": {
                        "name": "Damage Type Source",
                        "sourceType": "Fire"
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Switch",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Extra Action/Turn [Owner]: End",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Switch",
                  "value": 0
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "stackLimit": 1,
          "addStacksPerTrigger": 1,
          "removalDependencies": {
            "name": "Removal Dependency",
            "dependancyName": "Phainon_Ultra[<span class=\"descriptionNumberColor\">Divine Vessel</span>]"
          }
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_CyreneServant_AmazingBonus_Phainon_Sub[<span class=\"descriptionNumberColor\">Eternal Ignition</span>]",
          "execute": [
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Character ID",
                    "ID": 1415,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Cyrene"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Memosprite_CyreneServant_AmazingBonus_Phainon_Property[<span class=\"descriptionNumberColor\">CRIT DMG Boost</span>]"
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "description": "Khaslana will maintain the \"Divine Vessel\" state: With the blessing of companions, flames shall thoroughly illuminate the darkness.",
          "type": "Buff",
          "statusName": "Eternal Ignition",
          "removalDependencies": {
            "name": "Removal Dependency",
            "dependancyName": "Phainon_Ultra[<span class=\"descriptionNumberColor\">Divine Vessel</span>]"
          }
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_CyreneServant_AmazingBonus_Phainon[<span class=\"descriptionNumberColor\">Ode to Worldbearing</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Phainon_Passive_ChargeEnergyToGainSP",
                  "variables": {
                    "parameter[0]_AddValue": {
                      "operator": "Variables[0] (MDF_Kindling) || RETURN",
                      "displayLines": "MDF_Kindling",
                      "constants": [],
                      "variables": [
                        "MDF_Kindling"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Character ID",
                    "ID": 1415,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Cyrene"
                  },
                  "passed": [
                    "Modifier Deletes Itself"
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
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "Phainon_Ultra[<span class=\"descriptionNumberColor\">Divine Vessel</span>]"
                  },
                  "passed": [
                    {
                      "name": "Looped Event",
                      "maxLoops": {
                        "operator": "Variables[0] (MDF_Loop) || RETURN",
                        "displayLines": "MDF_Loop",
                        "constants": [],
                        "variables": [
                          "MDF_Loop"
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
                          "maxTargets": 1,
                          "ifTargetFound": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "canPhase": true,
                              "AttackScaling": {
                                "DamageType": "Fire",
                                "Damage": {
                                  "operator": "Variables[0] (MDF_DamagePercentage) || RETURN",
                                  "displayLines": "MDF_DamagePercentage",
                                  "constants": [],
                                  "variables": [
                                    "MDF_DamagePercentage"
                                  ]
                                },
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Additional DMG",
                                "EnergyGainPercent": "100%"
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
              "eventTrigger": "Ultimate Prep-Phase [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variable": "CurSpecialSP",
                  "target2": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variable2": "MDF_CurSpecialSP",
                  "scope": "ContextModifier"
                },
                {
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variable": "CurOverflowSpecialSP",
                  "target2": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variable2": "MDF_CurOverflowSpecialSP",
                  "scope": "ContextModifier"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurSpecialSP",
                    "compareType": ">",
                    "value2": {
                      "operator": "Variables[0] (MDF_EnergyNeed) || Variables[1] (CurOverflowSpecialSP) || SUB || RETURN",
                      "displayLines": "(MDF_EnergyNeed - CurOverflowSpecialSP)",
                      "constants": [],
                      "variables": [
                        "MDF_EnergyNeed",
                        "CurOverflowSpecialSP"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_FinalRatio",
                      "value": {
                        "operator": "Variables[0] (MDF_PropertyRatio) || Variables[1] (MDF_CurSpecialSP) || Variables[2] (MDF_CurOverflowSpecialSP) || ADD || Variables[3] (MDF_EnergyNeed) || SUB || MUL || RETURN",
                        "displayLines": "(MDF_PropertyRatio * ((MDF_CurSpecialSP + MDF_CurOverflowSpecialSP) - MDF_EnergyNeed))",
                        "constants": [],
                        "variables": [
                          "MDF_PropertyRatio",
                          "MDF_CurSpecialSP",
                          "MDF_CurOverflowSpecialSP",
                          "MDF_EnergyNeed"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_FinalRatio",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (MDF_PropertyRatioMax) || RETURN",
                          "displayLines": "MDF_PropertyRatioMax",
                          "constants": [],
                          "variables": [
                            "MDF_PropertyRatioMax"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_FinalRatio",
                          "value": {
                            "operator": "Variables[0] (MDF_PropertyRatioMax) || RETURN",
                            "displayLines": "MDF_PropertyRatioMax",
                            "constants": [],
                            "variables": [
                              "MDF_PropertyRatioMax"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Memosprite_CyreneServant_AmazingBonus_Phainon_Property[<span class=\"descriptionNumberColor\">CRIT DMG Boost</span>]",
                      "referenceModifier": "MReference_CriticalDamageUp",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (MDF_FinalRatio) || RETURN",
                          "displayLines": "MDF_FinalRatio",
                          "constants": [],
                          "variables": [
                            "MDF_FinalRatio"
                          ]
                        }
                      }
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
                    "modifier": "Phainon_Ultra[<span class=\"descriptionNumberColor\">Divine Vessel</span>]"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Memosprite_CyreneServant_AmazingBonus_Phainon_Property[<span class=\"descriptionNumberColor\">CRIT DMG Boost</span>]"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking Modifier Instance [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "Phainon_Ultra[<span class=\"descriptionNumberColor\">Divine Vessel</span>]"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Memosprite_CyreneServant_AmazingBonus_Phainon_Dot",
                      "valuePerStack": {
                        "MDF_LoseHP": {
                          "operator": "Variables[0] (MDF_LoseHP) || RETURN",
                          "displayLines": "MDF_LoseHP",
                          "constants": [],
                          "variables": [
                            "MDF_LoseHP"
                          ]
                        },
                        "MDF_DamageIncrease": {
                          "operator": "Variables[0] (MDF_DamageIncrease) || RETURN",
                          "displayLines": "MDF_DamageIncrease",
                          "constants": [],
                          "variables": [
                            "MDF_DamageIncrease"
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
                      "modifier": "Memosprite_CyreneServant_AmazingBonus_Phainon_Sub[<span class=\"descriptionNumberColor\">Eternal Ignition</span>]"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_DamageIncrease",
            "MDF_LoseHP",
            "MDF_Loop",
            "MDF_DamagePercentage",
            "MDF_EnergyNeed",
            "MDF_PropertyRatio",
            "MDF_PropertyRatioMax",
            "MDF_Kindling",
            "MDF_ChargeEnergy"
          ],
          "latentQueue": [],
          "description": "Gains \"Eternal Ignition\" when transforming. While holding \"Eternal Ignition,\" increases CRIT Rate by <span class=\"descriptionNumberColor\">MDF_DamageIncrease</span>, and consumes HP equal to <span class=\"descriptionNumberColor\">MDF_LoseHP</span> of the current HP at the start of the extra turn. After using an attack, deals extra Fire Additional DMG to one random enemy.",
          "type": "Buff",
          "effectName": "Ode to Worldbearing",
          "statusName": "Ode to Worldbearing",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Memosprite_CyreneServant_AmazingBonus"
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Cyrene_UITop"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_CyreneServant_AmazingBonus_Cipher_Sub2",
          "stackType": "Replace"
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_CyreneServant_AmazingBonus_Cipher_Sub[<span class=\"descriptionNumberColor\">Ode to Trickery</span>]",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "STAT_DefenceDown"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "Cipher_BpKuoSan[<span class=\"descriptionNumberColor\">Patron</span>]"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_FinalDefDown",
                      "value": {
                        "operator": "Variables[0] (MDF_DefDown) || RETURN",
                        "displayLines": "MDF_DefDown",
                        "constants": [],
                        "variables": [
                          "MDF_DefDown"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_FinalDefDown",
                      "value": {
                        "operator": "Variables[0] (MDF_DefDown2) || RETURN",
                        "displayLines": "MDF_DefDown2",
                        "constants": [],
                        "variables": [
                          "MDF_DefDown2"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (MDF_FinalDefDown) || SUB || RETURN",
                    "displayLines": "(0 - MDF_FinalDefDown)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "MDF_FinalDefDown"
                    ]
                  },
                  "isRefresh": true
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
                    "modifier": "Cipher_BpKuoSan[<span class=\"descriptionNumberColor\">Patron</span>]"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_FinalDefDown",
                      "value": {
                        "operator": "Variables[0] (MDF_DefDown) || RETURN",
                        "displayLines": "MDF_DefDown",
                        "constants": [],
                        "variables": [
                          "MDF_DefDown"
                        ]
                      }
                    },
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                      "value": {
                        "operator": "Constants[0] (0) || Variables[0] (MDF_FinalDefDown) || SUB || RETURN",
                        "displayLines": "(0 - MDF_FinalDefDown)",
                        "constants": [
                          0
                        ],
                        "variables": [
                          "MDF_FinalDefDown"
                        ]
                      },
                      "isRefresh": true
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
                    "modifier": "Cipher_BpKuoSan[<span class=\"descriptionNumberColor\">Patron</span>]"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_FinalDefDown",
                      "value": {
                        "operator": "Variables[0] (MDF_DefDown2) || RETURN",
                        "displayLines": "MDF_DefDown2",
                        "constants": [],
                        "variables": [
                          "MDF_DefDown2"
                        ]
                      }
                    },
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                      "value": {
                        "operator": "Constants[0] (0) || Variables[0] (MDF_FinalDefDown) || SUB || RETURN",
                        "displayLines": "(0 - MDF_FinalDefDown)",
                        "constants": [
                          0
                        ],
                        "variables": [
                          "MDF_FinalDefDown"
                        ]
                      },
                      "isRefresh": true
                    }
                  ]
                }
              ]
            }
          ],
          "description": "DEF decreases by <span class=\"descriptionNumberColor\">MDF_FinalDefDown</span>.",
          "type": "Debuff",
          "effectName": "DEF Reduction",
          "statusName": "Ode to Trickery"
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_CyreneServant_AmazingBonus_Cipher[<span class=\"descriptionNumberColor\">Ode to Trickery</span>]",
          "modifierFlags": [
            "RemoveWhenCasterDead"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_DamageIncrease) || RETURN",
                    "displayLines": "MDF_DamageIncrease",
                    "constants": [],
                    "variables": [
                      "MDF_DamageIncrease"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_DamageIncrease",
            "MDF_DefDown",
            "MDF_DefDown2"
          ],
          "latentQueue": [],
          "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_DamageIncrease</span>.",
          "type": "Buff",
          "effectName": "Ode to Trickery",
          "statusName": "Ode to Trickery",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE, with Unselectables)}}"
              },
              "modifier": "Memosprite_CyreneServant_AmazingBonus_Cipher_Sub[<span class=\"descriptionNumberColor\">Ode to Trickery</span>]",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_DefDown": {
                  "operator": "Variables[0] (MDF_DefDown) || RETURN",
                  "displayLines": "MDF_DefDown",
                  "constants": [],
                  "variables": [
                    "MDF_DefDown"
                  ]
                },
                "MDF_DefDown2": {
                  "operator": "Variables[0] (MDF_DefDown2) || RETURN",
                  "displayLines": "MDF_DefDown2",
                  "constants": [],
                  "variables": [
                    "MDF_DefDown2"
                  ]
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Memosprite_CyreneServant_AmazingBonus"
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Cyrene_UITop"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_CyreneServant_AmazingBonus_Anaxa_Halo[<span class=\"descriptionNumberColor\">True Knowledge</span>]",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Skill"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                          "value": "MDF_DamageIncrease"
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
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AttackAddRatio) || RETURN",
                    "displayLines": "MDF_AttackAddRatio",
                    "constants": [],
                    "variables": [
                      "MDF_AttackAddRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "ATK increases by <span class=\"descriptionNumberColor\">MDF_AttackAddRatio</span> and Skill DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_DamageIncrease</span>.",
          "type": "Buff",
          "statusName": "True Knowledge"
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_CyreneServant_AmazingBonus_Anaxa_Sub",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Character ID",
                    "ID": 1415,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Cyrene"
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]].[[removeMemosprite]]"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Target is Pathstrider",
                      "path": [
                        "Erudition"
                      ],
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    }
                  }
                ]
              },
              "modifier": "Memosprite_CyreneServant_AmazingBonus_Anaxa_Halo[<span class=\"descriptionNumberColor\">True Knowledge</span>]",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_DamageIncrease": {
                  "operator": "Variables[0] (MDF_DamageIncrease) || RETURN",
                  "displayLines": "MDF_DamageIncrease",
                  "constants": [],
                  "variables": [
                    "MDF_DamageIncrease"
                  ]
                },
                "MDF_AttackAddRatio": {
                  "operator": "Variables[0] (MDF_AttackAddRatio) || RETURN",
                  "displayLines": "MDF_AttackAddRatio",
                  "constants": [],
                  "variables": [
                    "MDF_AttackAddRatio"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_CyreneServant_AmazingBonus_Anaxa_HaloMain",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Character ID",
                    "ID": 1415,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Cyrene"
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Skill"
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Basic ATK"
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
                      "modifier": "Memosprite_CyreneServant_AmazingBonus_Anaxa_Sub",
                      "duration": 1,
                      "valuePerStack": {
                        "MDF_DamageIncrease": {
                          "operator": "Variables[0] (MDF_DamageIncrease) || RETURN",
                          "displayLines": "MDF_DamageIncrease",
                          "constants": [],
                          "variables": [
                            "MDF_DamageIncrease"
                          ]
                        },
                        "MDF_AttackAddRatio": {
                          "operator": "Variables[0] (MDF_AttackAddRatio) || RETURN",
                          "displayLines": "MDF_AttackAddRatio",
                          "constants": [],
                          "variables": [
                            "MDF_AttackAddRatio"
                          ]
                        }
                      }
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_AnaxaCount",
            "MDF_DamageIncrease",
            "MDF_AttackAddRatio"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_CyreneServant_AmazingBonus_Anaxa[<span class=\"descriptionNumberColor\">Ode to Reason</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "Skill02_ExtraHitCount",
                  "context": "TargetEntity",
                  "value": {
                    "operator": "Variables[0] (MDF_AnaxaCount) || RETURN",
                    "displayLines": "MDF_AnaxaCount",
                    "constants": [],
                    "variables": [
                      "MDF_AnaxaCount"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "Skill02_ExtraHitCount",
                  "context": "TargetEntity",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (MDF_AnaxaCount) || SUB || RETURN",
                    "displayLines": "(0 - MDF_AnaxaCount)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "MDF_AnaxaCount"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Character ID",
                    "ID": 1415,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Cyrene"
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_AnaxaCount",
            "MDF_DamageIncrease",
            "MDF_AttackAddRatio"
          ],
          "latentQueue": [],
          "description": "The number of DMG instances dealt by the Skill increases by <span class=\"descriptionNumberColor\">MDF_AnaxaCount</span>.",
          "type": "Buff",
          "effectName": "Ode to Reason",
          "statusName": "Ode to Reason",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Memosprite_CyreneServant_AmazingBonus"
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Cyrene_UITop"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_CyreneServant_AmazingBonus_Cerydra_Sub[<span class=\"descriptionNumberColor\">CRIT DMG Boost</span>]",
          "modifierFlags": [
            "RemoveWhenCasterDead"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_DamageIncrease) || RETURN",
                    "displayLines": "MDF_DamageIncrease",
                    "constants": [],
                    "variables": [
                      "MDF_DamageIncrease"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">MDF_DamageIncrease</span>.",
          "type": "Buff",
          "statusName": "CRIT DMG Boost",
          "removalDependencies": {
            "name": "Removal Dependency",
            "dependancyName": "Cerydra_Ability02_Target"
          }
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_CyreneServant_AmazingBonus_Cerydra[<span class=\"descriptionNumberColor\">Ode to Law</span>]",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_WindfuryCostFixValue",
                  "context": "TargetEntity",
                  "value": {
                    "operator": "Variables[0] (MDF_ExtraPoint) || INVERT || RETURN",
                    "displayLines": "-MDF_ExtraPoint",
                    "constants": [],
                    "variables": [
                      "MDF_ExtraPoint"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_WindfuryCostFixValue",
                  "context": "TargetEntity",
                  "value": {
                    "operator": "Variables[0] (MDF_ExtraPoint) || RETURN",
                    "displayLines": "MDF_ExtraPoint",
                    "constants": [],
                    "variables": [
                      "MDF_ExtraPoint"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Modifier Was",
                        "modifier": "Cerydra_Ability02_Target_Lv1[<span class=\"descriptionNumberColor\">Military Merit</span>]"
                      },
                      {
                        "name": "Modifier Was",
                        "modifier": "Cerydra_Ability02_Target_Lv2[<span class=\"descriptionNumberColor\">Peerage</span>]"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)V2}}"
                      },
                      "modifier": "Memosprite_CyreneServant_AmazingBonus_Cerydra_Sub[<span class=\"descriptionNumberColor\">CRIT DMG Boost</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Cerydra's Promotion Target}}"
                      },
                      "modifier": "Memosprite_CyreneServant_AmazingBonus_Cerydra_Sub[<span class=\"descriptionNumberColor\">CRIT DMG Boost</span>]",
                      "valuePerStack": {
                        "MDF_DamageIncrease": {
                          "operator": "Variables[0] (MDF_DamageIncrease) || RETURN",
                          "displayLines": "MDF_DamageIncrease",
                          "constants": [],
                          "variables": [
                            "MDF_DamageIncrease"
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
            "MDF_DamageIncrease",
            "MDF_ExtraPoint"
          ],
          "latentQueue": [],
          "description": "The character with \"Military Merit\" has <span class=\"descriptionNumberColor\">MDF_DamageIncrease</span> increased CRIT DMG. After Coup de Main ends, Cerydra gains <span class=\"descriptionNumberColor\">MDF_ExtraPoint</span> Charge.",
          "type": "Buff",
          "effectName": "Ode to Law",
          "statusName": "Ode to Law",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Memosprite_CyreneServant_AmazingBonus"
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Cerydra's Promotion Target}}"
              },
              "modifier": "Memosprite_CyreneServant_AmazingBonus_Cerydra_Sub[<span class=\"descriptionNumberColor\">CRIT DMG Boost</span>]",
              "valuePerStack": {
                "MDF_DamageIncrease": {
                  "operator": "Variables[0] (MDF_DamageIncrease) || RETURN",
                  "displayLines": "MDF_DamageIncrease",
                  "constants": [],
                  "variables": [
                    "MDF_DamageIncrease"
                  ]
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Cyrene_UITop"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_CyreneServant_AmazingBonus_Harscyline_Sub[<span class=\"descriptionNumberColor\">Flowing Warmth</span>]",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": {
                    "operator": "Variables[0] (MDF_SPAdd) || RETURN",
                    "displayLines": "MDF_SPAdd",
                    "constants": [],
                    "variables": [
                      "MDF_SPAdd"
                    ]
                  },
                  "isFixed": "* ERR"
                },
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [
            "MDF_SPAdd"
          ],
          "latentQueue": [],
          "description": "After attacking, regenerates <span class=\"descriptionNumberColor\">MDF_SPAdd</span> Energy.",
          "type": "Buff",
          "statusName": "Flowing Warmth"
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_CyreneServant_AmazingBonus_Harscyline[<span class=\"descriptionNumberColor\">Ode to Ocean</span>]",
          "modifierFlags": [
            "RemoveWhenCasterDead"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_HarscylineRatio) || RETURN",
                    "displayLines": "MDF_HarscylineRatio",
                    "constants": [],
                    "variables": [
                      "MDF_HarscylineRatio"
                    ]
                  }
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
                    "skillType": "Basic ATK"
                  },
                  "passed": [
                    {
                      "name": "Trigger Modifier Event",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Attack Targets of Modifier Holder}}"
                      },
                      "variableName": "DOT_TriggerRatio",
                      "eventType": "DOT",
                      "value": {
                        "operator": "Variables[0] (MDF_DotRatio1) || RETURN",
                        "displayLines": "MDF_DotRatio1",
                        "constants": [],
                        "variables": [
                          "MDF_DotRatio1"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Skill Type",
                        "skillType": "Skill"
                      },
                      "passed": [
                        {
                          "name": "Trigger Modifier Event",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Attack Targets of Modifier Holder}}"
                          },
                          "variableName": "DOT_TriggerRatio",
                          "eventType": "DOT",
                          "value": {
                            "operator": "Variables[0] (MDF_DotRatio2) || RETURN",
                            "displayLines": "MDF_DotRatio2",
                            "constants": [],
                            "variables": [
                              "MDF_DotRatio2"
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
          "stackData": [
            "MDF_HarscylineRatio",
            "MDF_DotRatio1",
            "MDF_DotRatio2"
          ],
          "latentQueue": [],
          "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_HarscylineRatio</span>. After using Basic ATK/Skill to attack enemy targets, DoT debuffs additionally produces 1 instance of DMG.",
          "type": "Buff",
          "effectName": "Ode to Ocean",
          "statusName": "Ode to Ocean",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Memosprite_CyreneServant_AmazingBonus"
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Cyrene_UITop"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_CyreneServant_AmazingBonus_Aglaea_Sub2[<span class=\"descriptionNumberColor\">Romantic</span>]",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": {
                    "operator": "Variables[0] (MDF_SPAdd) || RETURN",
                    "displayLines": "MDF_SPAdd",
                    "constants": [],
                    "variables": [
                      "MDF_SPAdd"
                    ]
                  },
                  "isFixed": "* ERR"
                },
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}.[[getMemosprite]]"
                    }
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": {
                        "operator": "Variables[0] (MDF_SPAdd) || RETURN",
                        "displayLines": "MDF_SPAdd",
                        "constants": [],
                        "variables": [
                          "MDF_SPAdd"
                        ]
                      },
                      "isFixed": "* ERR"
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_SPAdd"
          ],
          "latentQueue": [],
          "description": "Regenerates <span class=\"descriptionNumberColor\">MDF_SPAdd</span> Energy after Aglaea or Garmentmaker attacks.",
          "type": "Buff",
          "statusName": "Romantic"
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_CyreneServant_AmazingBonus_Aglaea_Sub",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
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
                      "value": "(0 - MDF_IgnoreDef)"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_DamageIncrease) || RETURN",
                    "displayLines": "MDF_DamageIncrease",
                    "constants": [],
                    "variables": [
                      "MDF_DamageIncrease"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_CyreneServant_AmazingBonus_Aglaea[<span class=\"descriptionNumberColor\">Ode to Romance</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                      "value": "(0 - MDF_IgnoreDef)"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_DamageIncrease) || RETURN",
                    "displayLines": "MDF_DamageIncrease",
                    "constants": [],
                    "variables": [
                      "MDF_DamageIncrease"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}.[[getMemosprite]]"
                    },
                    "modifier": "Memosprite_AglaeaServant_Passive"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Copy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}.[[getMemosprite]]"
                      },
                      "modifier": "Memosprite_AglaeaServant_Passive",
                      "variable": "_MaxLayer",
                      "target2": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variable2": "_MaxLayer"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}.[[getMemosprite]]"
                      },
                      "modifier": "Memosprite_AglaeaServant_AddSpeed[<span class=\"descriptionNumberColor\">A Body Brewed by Tears</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (_MaxLayer) || RETURN",
                        "displayLines": "_MaxLayer",
                        "constants": [],
                        "variables": [
                          "_MaxLayer"
                        ]
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (_MaxLayer) || RETURN",
                        "displayLines": "_MaxLayer",
                        "constants": [],
                        "variables": [
                          "_MaxLayer"
                        ]
                      },
                      "casterAssign": "TargetSelf"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "Aglaea_Ability03[<span class=\"descriptionNumberColor\">Supreme Stance</span>]"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "Memosprite_AglaeaServant_SummonerAddSpeed[<span class=\"descriptionNumberColor\">A Body Brewed by Tears</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] (_MaxLayer) || RETURN",
                            "displayLines": "_MaxLayer",
                            "constants": [],
                            "variables": [
                              "_MaxLayer"
                            ]
                          },
                          "addStacksPerTrigger": {
                            "operator": "Variables[0] (_MaxLayer) || RETURN",
                            "displayLines": "_MaxLayer",
                            "constants": [],
                            "variables": [
                              "_MaxLayer"
                            ]
                          },
                          "casterAssign": "TargetSelf"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: End"
            },
            {
              "eventTrigger": "When Losing Modifier [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "Aglaea_Ability03[<span class=\"descriptionNumberColor\">Supreme Stance</span>]"
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_DamageIncrease",
            "MDF_IgnoreDef"
          ],
          "latentQueue": [],
          "description": "DMG dealt by Aglaea and Garmentmaker increases by <span class=\"descriptionNumberColor\">MDF_DamageIncrease</span> and ignores <span class=\"descriptionNumberColor\">MDF_IgnoreDef</span> of targets' DEF.",
          "type": "Buff",
          "effectName": "Ode to Romance",
          "statusName": "Ode to Romance",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}.[[getMemosprite]]"
              },
              "modifier": "Memosprite_CyreneServant_AmazingBonus_Aglaea_Sub",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_DamageIncrease": {
                  "operator": "Variables[0] (MDF_DamageIncrease) || RETURN",
                  "displayLines": "MDF_DamageIncrease",
                  "constants": [],
                  "variables": [
                    "MDF_DamageIncrease"
                  ]
                },
                "MDF_IgnoreDef": {
                  "operator": "Variables[0] (MDF_IgnoreDef) || RETURN",
                  "displayLines": "MDF_IgnoreDef",
                  "constants": [],
                  "variables": [
                    "MDF_IgnoreDef"
                  ]
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Memosprite_CyreneServant_AmazingBonus"
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Cyrene_UITop"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_CyreneServant_AmazingBonus_Mydeimos_ListenWindfury",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Extra Turn Action Injection: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Parameter String",
                    "compareType": "=",
                    "value2": "ActionTag_Windfury"
                  },
                  "passed": [
                    {
                      "name": "Update Ability Binding",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "abilityName": "Skill22",
                      "skillSlot": "Basic ATK",
                      "enableSecondaryType": "ControlSkill02"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_IsWindfurySkill",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Extra Action/Turn [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Parameter String",
                    "compareType": "=",
                    "value2": "ActionTag_Windfury"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_IsWindfurySkill",
                      "value": 0
                    },
                    "Modifier Deletes Itself"
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
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Modifier Was",
                        "modifier": "Standard_Windfury_ModifyAbilityPropertyByType_Normal"
                      },
                      {
                        "name": "Modifier Was",
                        "modifier": "Standard_Windfury_ModifyAbilityPropertyByType_Skill"
                      }
                    ]
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Energy/Special Cost Value Change [Owner]: Before",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "Change_In_Current_Value",
                        "changeIndex": 1,
                        "compareType": "<",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "_IsWindfurySkill",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Override Special Cost Deductions",
                      "overrideValue": 0
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_CyreneServant_AmazingBonus_Mydeimos_OnWaveMonster",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "CustomEvent_InfiniteRefresh"
          ],
          "execute": [
            {
              "eventTrigger": "Action Choice Window [Anyone]",
              "execute": [
                "Modifier Deletes Itself",
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Memosprite_CyreneServant_AmazingBonus_Mydeimos"
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Memosprite_CyreneServant_AmazingBonus_Mydeimos_InsertActionCheck"
                }
              ],
              "priorityLevel": -55
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Memosprite_CyreneServant_AmazingBonus_Mydeimos_InsertActionCheck"
                }
              ]
            },
            {
              "eventTrigger": "New Enemy Wave",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Memosprite_CyreneServant_AmazingBonus_Mydeimos_InsertActionCheck"
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Living State",
                    "state": "Mask_AliveOrRevivable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Memosprite_CyreneServant_AmazingBonus_Mydeimos_InsertActionCheck"
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "Memosprite_CyreneServant_AmazingBonus_Mydeimos_InsertActionCheck",
              "parse": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "Mydeimos_Transfer[<span class=\"descriptionNumberColor\">Vendetta</span>]"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "valueType": "Layer",
                      "variableName": "MDF_Layer",
                      "multiplier": 1
                    },
                    {
                      "name": "Looped Event",
                      "maxLoops": {
                        "operator": "Variables[0] (MDF_Layer) || RETURN",
                        "displayLines": "MDF_Layer",
                        "constants": [],
                        "variables": [
                          "MDF_Layer"
                        ]
                      },
                      "Event": [
                        {
                          "name": "Inject Extra-Turn",
                          "actionTag": "CyreneGivenMydeimos",
                          "skillIndex": 4,
                          "forceAction": true,
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "afterInjection": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "Memosprite_CyreneServant_AmazingBonus_Mydeimos_OnWaveMonster"
                            }
                          ],
                          "abortFlags": [
                            "STAT_MydeimosRemoveTransfer"
                          ]
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "Memosprite_CyreneServant_AmazingBonus_Mydeimos_OnWaveMonster",
                          "addStacksPerTrigger": -1
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Layer",
                      "value": 0
                    }
                  ],
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Memosprite_CyreneServant_AmazingBonus_Mydeimos"
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_CyreneServant_AmazingBonus_Mydeimos_Sub[<span class=\"descriptionNumberColor\">Ode to Strife</span>]",
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
                    "operator": "Variables[0] (MDF_CritDamage) || RETURN",
                    "displayLines": "MDF_CritDamage",
                    "constants": [],
                    "variables": [
                      "MDF_CritDamage"
                    ]
                  }
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
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "_BPSkill21_Plus",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Update Ability Binding",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "abilityName": "Skill22",
                      "skillSlot": "Basic ATK",
                      "enableSecondaryType": "ControlSkill02"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "Standard_Windfury"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Memosprite_CyreneServant_AmazingBonus_Mydeimos_ListenWindfury"
                    }
                  ]
                },
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Energy/Special Cost Value Change [Owner]: Before",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Change_In_Current_Value",
                    "changeIndex": 1,
                    "compareType": "<",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Override Special Cost Deductions",
                      "overrideValue": 0
                    }
                  ]
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "Memosprite_CyreneServant_AmazingBonus_Mydeimos[Counter]",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Change_In_Current_Value",
                        "compareType": "<",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "_BPSkill21_Plus",
                          "value": 1
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">MDF_CritDamage</span>.",
          "type": "Buff",
          "effectName": "Ode to Strife",
          "statusName": "Ode to Strife"
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_CyreneServant_AmazingBonus_Mydeimos",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "toRemove": [
                    "STAT_CTRL"
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "Mydeimos_Transfer[<span class=\"descriptionNumberColor\">Vendetta</span>]"
                  },
                  "passed": [
                    {
                      "name": "Inject Extra-Turn",
                      "actionTag": "CyreneGivenMydeimos",
                      "skillIndex": 4,
                      "forceAction": true,
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "afterInjection": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "Memosprite_CyreneServant_AmazingBonus_Mydeimos_OnWaveMonster"
                        }
                      ],
                      "abortFlags": [
                        "STAT_MydeimosRemoveTransfer"
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Action Advance/Delay",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "advanceType": "Set",
                      "value": "-MDF_ActionDelay"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_NoTransferFlag",
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
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "Mydeimos_Transfer[<span class=\"descriptionNumberColor\">Vendetta</span>]",
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_NoTransferFlag",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Modifier Variable",
                      "modifierName": null,
                      "function": "Add"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_NoTransferFlag",
                      "value": 0
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Extra Action/Turn [Owner]: Start ",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Parameter String",
                    "compareType": "=",
                    "value2": "CyreneGivenMydeimos"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Memosprite_CyreneServant_AmazingBonus_Mydeimos_Sub[<span class=\"descriptionNumberColor\">Ode to Strife</span>]",
                      "valuePerStack": {
                        "MDF_CritDamage": {
                          "operator": "Variables[0] (MDF_CritDamage) || RETURN",
                          "displayLines": "MDF_CritDamage",
                          "constants": [],
                          "variables": [
                            "MDF_CritDamage"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Extra Action/Turn [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Parameter String",
                    "compareType": "=",
                    "value2": "CyreneGivenMydeimos"
                  },
                  "passed": [
                    {
                      "name": "Define Modifier Variable",
                      "modifierName": null,
                      "function": "Add"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_CritDamage",
            "MDF_ActionDelay"
          ],
          "latentQueue": [],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Memosprite_CyreneServant_AmazingBonus"
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Cyrene_UITop"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_CyreneServant_AmazingBonus_Tribbie[<span class=\"descriptionNumberColor\">Ode to Passage</span>]",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "ContextOwner",
                  "variableName": "MDF_ExtraLoopCount",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                      "value": "(0 - MDF_IgnoreDef)"
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
                        "name": "Attack Type",
                        "attackTypes": [
                          "Follow-up"
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
                          "target": "{{Modifier Holder}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "ContextOwner",
                      "variableName": "MDF_ExtraLoopCount",
                      "value": {
                        "operator": "Variables[0] (MDF_TribbieLoopCount) || RETURN",
                        "displayLines": "MDF_TribbieLoopCount",
                        "constants": [],
                        "variables": [
                          "MDF_TribbieLoopCount"
                        ]
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
                      "scope": "ContextOwner",
                      "variableName": "MDF_ExtraLoopCount",
                      "value": 0
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_TribbieLoopCount",
            "MDF_IgnoreDef",
            "MDF_TargetCount"
          ],
          "latentQueue": [],
          "description": "DMG dealt ignores <span class=\"descriptionNumberColor\">MDF_IgnoreDef</span> of the enemy's DEF. When Tribbie launches Follow-Up ATK and triggers the Additional DMG from Tribbie's Zone, it will further deal <span class=\"descriptionNumberColor\">MDF_TribbieLoopCount</span> instance(s) of Additional DMG.",
          "type": "Buff",
          "effectName": "Ode to Passage",
          "statusName": "Ode to Passage",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Memosprite_CyreneServant_AmazingBonus"
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Cyrene_UITop"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "_M_Cyrene_Player_InsertActionCheck",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "CustomEvent_InfiniteRefresh"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "_T_Cyrene_Player_InsertRetarget"
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
                  "functionName": "_T_Cyrene_Player_InsertRetarget"
                }
              ],
              "priorityLevel": -55
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "_T_Cyrene_Player_InsertRetarget"
                }
              ]
            },
            {
              "eventTrigger": "New Enemy Wave",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "_T_Cyrene_Player_InsertRetarget"
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
                      "functionName": "_T_Cyrene_Player_InsertRetarget"
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "_T_Cyrene_Player_InsertRetarget",
              "parse": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemies Still Alive",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
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
                          "name": "Looped Event",
                          "maxLoops": {
                            "operator": "Variables[0] (MDF_Layer) || RETURN",
                            "displayLines": "MDF_Layer",
                            "constants": [],
                            "variables": [
                              "MDF_Layer"
                            ]
                          },
                          "Event": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "_M_Cyrene_Player_Ability01Prepare",
                              "addStacksPerTrigger": 1
                            },
                            {
                              "name": "Inject Extra-Turn",
                              "actionTag": "CyreneServant_Ability01_PlayerExtra",
                              "forceAction": true,
                              "abilityName": "Servant_CyreneServant_FormationReset",
                              "castTarget": {
                                "name": "Target Name",
                                "target": "{{Hostile Entities(AOE)}}"
                              },
                              "afterInjection": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "_M_Cyrene_Player_Ability01Prepare",
                                  "addStacksPerTrigger": -1
                                },
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "_M_Cyrene_Player_InsertActionCheck",
                                  "addStacksPerTrigger": 1
                                }
                              ],
                              "ignoreCost": true
                            }
                          ]
                        },
                        "Modifier Deletes Itself"
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackLimit": 99999
        },
        {
          "name": "Modifier Construction",
          "for": "_M_Cyrene_Player_Ability01Prepare",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "Extra Turn Action Injection: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Parameter String",
                    "compareType": "=",
                    "value2": "CyreneServant_Ability01_PlayerExtra"
                  },
                  "passed": [
                    {
                      "name": "UI Display Event",
                      "popUpText": "Ode to Genesis"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Extra Action/Turn [Owner]: Start ",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Parameter String",
                    "compareType": "=",
                    "value2": "CyreneServant_Ability01_PlayerExtra"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "IsInPlayerAction",
                      "value": 1
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "stackLimit": 99999
        },
        {
          "name": "Modifier Construction",
          "for": "_M_Cyrene_Player_PropertySyncer",
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">HP%</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "_T_AmazingBonus_Player_AttackSyncer"
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
                  "whenValueChanges": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "_T_AmazingBonus_Player_AttackSyncer"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "_T_AmazingBonus_Player_AttackSyncer"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "CasterCritRatio",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;"
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)V2}}"
                      },
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Memosprite_CyreneServant_AmazingBonus_Player[<span class=\"descriptionNumberColor\">Ode to Genesis</span>]"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Define Modifier-Specific Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifierName": "Memosprite_CyreneServant_AmazingBonus_Player[<span class=\"descriptionNumberColor\">Ode to Genesis</span>]",
                          "variableName": "MDF_CritAddRatio",
                          "value": {
                            "operator": "Variables[0] (0.72) || Variables[1] (CasterCritRatio) || MUL || RETURN",
                            "displayLines": "(0.72 * CasterCritRatio)",
                            "constants": [],
                            "variables": [
                              0.72,
                              "CasterCritRatio"
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
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "_T_AmazingBonus_Player_AttackSyncer",
              "parse": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "CasterHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "CasterHPConvert",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPConverted</span>&nbsp;"
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}"
                  },
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Memosprite_CyreneServant_AmazingBonus_Player[<span class=\"descriptionNumberColor\">Ode to Genesis</span>]"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Modifier-Specific Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifierName": "Memosprite_CyreneServant_AmazingBonus_Player[<span class=\"descriptionNumberColor\">Ode to Genesis</span>]",
                      "variableName": "MDF_AttackAddRatio",
                      "value": {
                        "operator": "Variables[0] (0.16) || Variables[1] (CasterHP) || Variables[2] (CasterHPConvert) || SUB || MUL || RETURN",
                        "displayLines": "(0.16 * (CasterHP - CasterHPConvert))",
                        "constants": [],
                        "variables": [
                          0.16,
                          "CasterHP",
                          "CasterHPConvert"
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
          "for": "Memosprite_CyreneServant_AmazingBonus_PlayerServant",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Override Modifier Name",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifierName": "Memosprite_CyreneServant_AmazingBonus_PlayerServant",
                  "modifierNameUpdate": "Memosprite_CyreneServant_AmazingBonus_Player[<span class=\"descriptionNumberColor\">Ode to Genesis</span>]"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "variableName": "CasterHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "variableName": "CasterHPConvert",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPConverted</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_AttackAddRatio",
                  "value": {
                    "operator": "Variables[0] (MDF_HPTransferRatio) || Variables[1] (CasterHP) || Variables[2] (CasterHPConvert) || SUB || MUL || RETURN",
                    "displayLines": "(MDF_HPTransferRatio * (CasterHP - CasterHPConvert))",
                    "constants": [],
                    "variables": [
                      "MDF_HPTransferRatio",
                      "CasterHP",
                      "CasterHPConvert"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">AttackConverted</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AttackAddRatio) || RETURN",
                    "displayLines": "MDF_AttackAddRatio",
                    "constants": [],
                    "variables": [
                      "MDF_AttackAddRatio"
                    ]
                  },
                  "isRefresh": true
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "variableName": "CasterCritRatio",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_CritAddRatio",
                  "value": {
                    "operator": "Variables[0] (MDF_CritTranferRatio) || Variables[1] (CasterCritRatio) || MUL || RETURN",
                    "displayLines": "(MDF_CritTranferRatio * CasterCritRatio)",
                    "constants": [],
                    "variables": [
                      "MDF_CritTranferRatio",
                      "CasterCritRatio"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateConverted</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_CritAddRatio) || RETURN",
                    "displayLines": "MDF_CritAddRatio",
                    "constants": [],
                    "variables": [
                      "MDF_CritAddRatio"
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
              "variableName": "MDF_AttackAddRatio",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">AttackConverted</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (MDF_AttackAddRatio) || RETURN",
                        "displayLines": "MDF_AttackAddRatio",
                        "constants": [],
                        "variables": [
                          "MDF_AttackAddRatio"
                        ]
                      },
                      "isRefresh": true
                    }
                  ]
                }
              ]
            },
            {
              "name": "Variable Value Changes",
              "variableName": "MDF_CritAddRatio",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateConverted</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (MDF_CritAddRatio) || RETURN",
                        "displayLines": "MDF_CritAddRatio",
                        "constants": [],
                        "variables": [
                          "MDF_CritAddRatio"
                        ]
                      },
                      "isRefresh": true
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_CyreneServant_AmazingBonus_Player[<span class=\"descriptionNumberColor\">Ode to Genesis</span>]",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "variableName": "CasterHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "variableName": "CasterHPConvert",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPConverted</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_AttackAddRatio",
                  "value": {
                    "operator": "Variables[0] (MDF_HPTransferRatio) || Variables[1] (CasterHP) || Variables[2] (CasterHPConvert) || SUB || MUL || RETURN",
                    "displayLines": "(MDF_HPTransferRatio * (CasterHP - CasterHPConvert))",
                    "constants": [],
                    "variables": [
                      "MDF_HPTransferRatio",
                      "CasterHP",
                      "CasterHPConvert"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">AttackConverted</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AttackAddRatio) || RETURN",
                    "displayLines": "MDF_AttackAddRatio",
                    "constants": [],
                    "variables": [
                      "MDF_AttackAddRatio"
                    ]
                  },
                  "isRefresh": true
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "variableName": "CasterCritRatio",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_CritAddRatio",
                  "value": {
                    "operator": "Variables[0] (MDF_CritTranferRatio) || Variables[1] (CasterCritRatio) || MUL || RETURN",
                    "displayLines": "(MDF_CritTranferRatio * CasterCritRatio)",
                    "constants": [],
                    "variables": [
                      "MDF_CritTranferRatio",
                      "CasterCritRatio"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateConverted</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_CritAddRatio) || RETURN",
                    "displayLines": "MDF_CritAddRatio",
                    "constants": [],
                    "variables": [
                      "MDF_CritAddRatio"
                    ]
                  },
                  "isRefresh": true
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Name",
                    "skillName": "Skill11"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "_M_Cyrene_Player_Ability01Prepare",
                      "addStacksPerTrigger": 1
                    },
                    {
                      "name": "Inject Extra-Turn",
                      "actionTag": "CyreneServant_Ability01_PlayerExtra",
                      "forceAction": true,
                      "abilityName": "Servant_CyreneServant_FormationReset",
                      "castTarget": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "afterInjection": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "_M_Cyrene_Player_Ability01Prepare",
                          "addStacksPerTrigger": -1
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "_M_Cyrene_Player_InsertActionCheck",
                          "addStacksPerTrigger": 1
                        }
                      ],
                      "ignoreCost": true
                    }
                  ]
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "MDF_AttackAddRatio",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">AttackConverted</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (MDF_AttackAddRatio) || RETURN",
                        "displayLines": "MDF_AttackAddRatio",
                        "constants": [],
                        "variables": [
                          "MDF_AttackAddRatio"
                        ]
                      },
                      "isRefresh": true
                    },
                    {
                      "name": "Define Modifier-Specific Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}.[[getMemosprite]]"
                      },
                      "modifierName": "Memosprite_CyreneServant_AmazingBonus_PlayerServant",
                      "variableName": "MDF_AttackAddRatio",
                      "value": {
                        "operator": "Variables[0] (MDF_AttackAddRatio) || RETURN",
                        "displayLines": "MDF_AttackAddRatio",
                        "constants": [],
                        "variables": [
                          "MDF_AttackAddRatio"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "name": "Variable Value Changes",
              "variableName": "MDF_CritAddRatio",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateConverted</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (MDF_CritAddRatio) || RETURN",
                        "displayLines": "MDF_CritAddRatio",
                        "constants": [],
                        "variables": [
                          "MDF_CritAddRatio"
                        ]
                      },
                      "isRefresh": true
                    },
                    {
                      "name": "Define Modifier-Specific Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}.[[getMemosprite]]"
                      },
                      "modifierName": "Memosprite_CyreneServant_AmazingBonus_PlayerServant",
                      "variableName": "MDF_CritAddRatio",
                      "value": {
                        "operator": "Variables[0] (MDF_CritAddRatio) || RETURN",
                        "displayLines": "MDF_CritAddRatio",
                        "constants": [],
                        "variables": [
                          "MDF_CritAddRatio"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_HPTransferRatio",
            "MDF_CritTranferRatio"
          ],
          "latentQueue": [],
          "description": "ATK increases by <span class=\"descriptionNumberColor\">MDF_AttackAddRatio</span>, CRIT Rate increases by <span class=\"descriptionNumberColor\">MDF_CritAddRatio</span>. After using Enhanced Basic ATK, Demiurge immediately gains 1 extra turn and automatically uses \"Minuet of Blooms and Plumes.\"",
          "type": "Buff",
          "effectName": "Ode to Genesis",
          "statusName": "Ode to Genesis",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Memosprite_CyreneServant_AmazingBonus"
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Cyrene_UITop"
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}.[[getMemosprite]]"
              },
              "modifier": "Memosprite_CyreneServant_AmazingBonus_PlayerServant",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_HPTransferRatio": {
                  "operator": "Variables[0] (MDF_HPTransferRatio) || RETURN",
                  "displayLines": "MDF_HPTransferRatio",
                  "constants": [],
                  "variables": [
                    "MDF_HPTransferRatio"
                  ]
                },
                "MDF_CritTranferRatio": {
                  "operator": "Variables[0] (MDF_CritTranferRatio) || RETURN",
                  "displayLines": "MDF_CritTranferRatio",
                  "constants": [],
                  "variables": [
                    "MDF_CritTranferRatio"
                  ]
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "modifier": "_M_Cyrene_Player_PropertySyncer"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_CyreneServant_AmazingBonus_Castorice_Sub[<span class=\"descriptionNumberColor\">Ode to Life and Death</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "SkillP04_P1_ExtraAddPercentage",
                  "context": "TargetEntity",
                  "value": {
                    "operator": "Variables[0] (_FinalSuicideRatio) || INVERT || RETURN",
                    "displayLines": "-_FinalSuicideRatio",
                    "constants": [],
                    "variables": [
                      "_FinalSuicideRatio"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Enemy Team All}}.[[removeUnselectable]]"
                    },
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (MDF_TargetCount) || RETURN",
                      "displayLines": "MDF_TargetCount",
                      "constants": [],
                      "variables": [
                        "MDF_TargetCount"
                      ]
                    },
                    "livingTargets": true
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_FinalSuicideRatio",
                      "value": {
                        "operator": "Variables[0] (MDF_SuicideRatioBase) || Variables[1] (MDF_SuicideRatioBase2) || ADD || Variables[2] (MDF_ExtraSP_PercentCount) || MUL || RETURN",
                        "displayLines": "((MDF_SuicideRatioBase + MDF_SuicideRatioBase2) * MDF_ExtraSP_PercentCount)",
                        "constants": [],
                        "variables": [
                          "MDF_SuicideRatioBase",
                          "MDF_SuicideRatioBase2",
                          "MDF_ExtraSP_PercentCount"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_FinalSuicideRatio",
                      "value": {
                        "operator": "Variables[0] (MDF_SuicideRatioBase) || Variables[1] (MDF_ExtraSP_PercentCount) || MUL || RETURN",
                        "displayLines": "(MDF_SuicideRatioBase * MDF_ExtraSP_PercentCount)",
                        "constants": [],
                        "variables": [
                          "MDF_SuicideRatioBase",
                          "MDF_ExtraSP_PercentCount"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "SkillP04_P1_ExtraAddPercentage",
                  "context": "TargetEntity",
                  "value": {
                    "operator": "Variables[0] (_FinalSuicideRatio) || RETURN",
                    "displayLines": "_FinalSuicideRatio",
                    "constants": [],
                    "variables": [
                      "_FinalSuicideRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "The multiplier increases by <span class=\"descriptionNumberColor\">_FinalSuicideRatio</span> for the DMG dealt when triggering the ability effect of the Talent \"Wings Sweep the Ruins.\"",
          "type": "Buff",
          "statusName": "Ode to Life and Death"
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_CyreneServant_AmazingBonus_Castorice_MaxSP",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_MaxSpecialSP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">MaxSpecialEnergy</span>&nbsp;"
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMaxSpecialOverflow</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (_MaxSpecialSP) || Variables[1] (MDF_ExtraRatio) || MUL || RETURN",
                    "displayLines": "(_MaxSpecialSP * MDF_ExtraRatio)",
                    "constants": [],
                    "variables": [
                      "_MaxSpecialSP",
                      "MDF_ExtraRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">MaxSpecialEnergy</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "_MaxSpecialSP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">MaxSpecialEnergy</span>&nbsp;"
                    },
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMaxSpecialOverflow</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (_MaxSpecialSP) || Variables[1] (MDF_ExtraRatio) || MUL || RETURN",
                        "displayLines": "(_MaxSpecialSP * MDF_ExtraRatio)",
                        "constants": [],
                        "variables": [
                          "_MaxSpecialSP",
                          "MDF_ExtraRatio"
                        ]
                      },
                      "isRefresh": true
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Cyrene_UITop",
          "stackType": "Replace",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
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
          "for": "Memosprite_CyreneServant_AmazingBonus_Castorice[<span class=\"descriptionNumberColor\">Ode to Life and Death</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
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
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}.[[getMemosprite]]"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "state": "Mask_AliveOnly"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "_ExtraSP_PercentCount",
                        "compareType": ">",
                        "value2": 0
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
                      "modifier": "Memosprite_CyreneServant_AmazingBonus_Castorice_Sub[<span class=\"descriptionNumberColor\">Ode to Life and Death</span>]",
                      "valuePerStack": {
                        "MDF_ExtraSP_PercentCount": {
                          "operator": "Variables[0] (_ExtraSP_PercentCount) || RETURN",
                          "displayLines": "_ExtraSP_PercentCount",
                          "constants": [],
                          "variables": [
                            "_ExtraSP_PercentCount"
                          ]
                        },
                        "MDF_SuicideRatioBase": {
                          "operator": "Variables[0] (MDF_SuicideRatioBase) || RETURN",
                          "displayLines": "MDF_SuicideRatioBase",
                          "constants": [],
                          "variables": [
                            "MDF_SuicideRatioBase"
                          ]
                        },
                        "MDF_SuicideRatioBase2": {
                          "operator": "Variables[0] (MDF_SuicideRatioBase2) || RETURN",
                          "displayLines": "MDF_SuicideRatioBase2",
                          "constants": [],
                          "variables": [
                            "MDF_SuicideRatioBase2"
                          ]
                        },
                        "MDF_TargetCount": {
                          "operator": "Variables[0] (MDF_TargetCount) || RETURN",
                          "displayLines": "MDF_TargetCount",
                          "constants": [],
                          "variables": [
                            "MDF_TargetCount"
                          ]
                        }
                      }
                    }
                  ]
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
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "_CurExtraSpecialSP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecialOverflow</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "_MaxSpecialSP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">MaxSpecialEnergy</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "_ExtraSP_PercentCount",
                      "value": {
                        "operator": "Variables[0] (_CurExtraSpecialSP) || Variables[1] (_MaxSpecialSP) || DIV || Constants[0] (100) || MUL || RETURN",
                        "displayLines": "((_CurExtraSpecialSP / _MaxSpecialSP) * 100)",
                        "constants": [
                          100
                        ],
                        "variables": [
                          "_CurExtraSpecialSP",
                          "_MaxSpecialSP"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable with Clamp Configuration",
                      "context": "ContextModifier",
                      "roundBy": "Floor",
                      "ignoreBelow": 0.00010000006,
                      "variableName": "_ExtraSP_PercentCount"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_SuicideRatioBase",
            "MDF_SuicideRatioBase2",
            "MDF_MaxEnergy",
            "MDF_EnergyRatio",
            "MDF_TargetCount"
          ],
          "latentQueue": [],
          "description": "Castorice's Newbud can overflow up to <span class=\"descriptionNumberColor\">MDF_MaxEnergy</span>. When summoning Netherwing, consume all overflowing \"Newbud.\" Based on the amount of overflow consumed, increases the multiplier for the DMG dealt when this summoned Netherwing triggers the ability effect of its Talent \"Wings Sweep the Ruins.\"",
          "type": "Buff",
          "effectName": "Ode to Life and Death",
          "statusName": "Ode to Life and Death",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Memosprite_CyreneServant_AmazingBonus"
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Memosprite_CyreneServant_AmazingBonus_Castorice_MaxSP",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_ExtraRatio": {
                  "operator": "Variables[0] (MDF_MaxEnergy) || Constants[0] (1) || SUB || RETURN",
                  "displayLines": "(MDF_MaxEnergy - 1)",
                  "constants": [
                    1
                  ],
                  "variables": [
                    "MDF_MaxEnergy"
                  ]
                },
                "MDF_ReturnRatio": {
                  "operator": "Variables[0] (MDF_EnergyRatio) || RETURN",
                  "displayLines": "MDF_EnergyRatio",
                  "constants": [],
                  "variables": [
                    "MDF_EnergyRatio"
                  ]
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Cyrene_UITop"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_CyreneServant_AmazingBonus_Hyacine[<span class=\"descriptionNumberColor\">Ode to Sky</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "ExtraHealRatio",
                  "context": "ContextOwner",
                  "value": {
                    "operator": "Variables[0] (MDF_HyacineRatio) || RETURN",
                    "displayLines": "MDF_HyacineRatio",
                    "constants": [],
                    "variables": [
                      "MDF_HyacineRatio"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "ExtraHealRatio",
                  "context": "ContextOwner",
                  "value": {
                    "operator": "Constants[0] (1) || INVERT || Variables[0] (MDF_HyacineRatio) || MUL || RETURN",
                    "displayLines": "(-1 * MDF_HyacineRatio)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "MDF_HyacineRatio"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Skill"
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Ultimate"
                      }
                    ]
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
                        "value1": "Memosprite_CyreneServant_AmazingBonus_Hyacine[<span class=\"descriptionNumberColor\">Ode to Sky</span>]",
                        "compareType": ">",
                        "value2": 1,
                        "valueType": "Layer"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "Memosprite_CyreneServant_AmazingBonus_Hyacine[<span class=\"descriptionNumberColor\">Ode to Sky</span>]",
                          "valuePerStack": {
                            "MDF_HyacineRatio": {
                              "operator": "Variables[0] (0.72) || RETURN",
                              "displayLines": "0.72",
                              "constants": [],
                              "variables": [
                                0.72
                              ]
                            }
                          },
                          "addStacksPerTrigger": -1
                        }
                      ],
                      "failed": [
                        "Modifier Deletes Itself"
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_HyacineRatio"
          ],
          "latentQueue": [
            "IsInRank01Action",
            "IsInPlayerAction"
          ],
          "description": "The amount of Hyacine's healing included in the healing tally of Little Ica's Memosprite Skill is additionally increased by an amount equal to <span class=\"descriptionNumberColor\">MDF_HyacineRatio</span> of the current healing amount. After Hyacine uses Skill/Ultimate, consumes 1 stack of \"Ode to Sky.\"",
          "type": "Buff",
          "effectName": "Ode to Sky",
          "statusName": "Ode to Sky",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Memosprite_CyreneServant_AmazingBonus",
              "haloStatus": true
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Cyrene_UITop"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_CyreneServant_AmazingBonus_Normal[<span class=\"descriptionNumberColor\">This Ode, to All Lives</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "RemoveWhenCasterDead"
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
                  "modifier": "Memosprite_CyreneServant_AmazingBonus"
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
                    "operator": "Variables[0] (MDF_IncreaseRatio) || RETURN",
                    "displayLines": "MDF_IncreaseRatio",
                    "constants": [],
                    "variables": [
                      "MDF_IncreaseRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_IncreaseRatio"
          ],
          "latentQueue": [],
          "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_IncreaseRatio</span>.",
          "type": "Buff",
          "statusName": "This Ode, to All Lives",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Memosprite_CyreneServant_AmazingBonus"
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}.[[getMemosprite]]"
              },
              "modifier": "Memosprite_CyreneServant_AmazingBonus_Normal_Sub[<span class=\"descriptionNumberColor\">This Ode, to All Lives</span>]",
              "refModifier": "MReference_AllDamageTypeAddedRatio",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (MDF_IncreaseRatio) || RETURN",
                  "displayLines": "MDF_IncreaseRatio",
                  "constants": [],
                  "variables": [
                    "MDF_IncreaseRatio"
                  ]
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Cyrene_UITop"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_CyreneServant_AmazingBonus",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 2,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Cyrene}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Memosprite_Cyrene_Eidolon2_ThanksGift"
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
          "for": "Memosprite_Cyrene_Eidolon2_ThanksGift",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Demiurge}}"
                  },
                  "variableName": "CurAmazingCount",
                  "context": "TargetEntity",
                  "value": 1
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Cyrene}}"
                  },
                  "modifier": "Cyrene_Eidolon2_1",
                  "casterAssign": "TargetSelf"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_CyreneServant_SummonerAbility03Disable",
          "stackType": "ReplaceByCaster",
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
                    "Ultimate"
                  ],
                  "text": "Ability cannot be used"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_CyreneServant_Ability21Disable",
          "stackType": "ReplaceByCaster",
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
                  "abilityTypes": null,
                  "text": "Ability cannot be used",
                  "controlTypes": [
                    "ControlSkill04"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_CyreneServant_Ability02Disable",
          "stackType": "ReplaceByCaster",
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
                  "abilityTypes": null,
                  "text": "Ability cannot be used",
                  "controlTypes": [
                    "ControlSkill02"
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
          "for": "Memosprite_CyreneServant_Ability01Disable",
          "stackType": "ReplaceByCaster",
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
                  "abilityTypes": null,
                  "text": "Ability cannot be used",
                  "controlTypes": [
                    "ControlSkill01"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_CyreneServant_Passive_Memory[<span class=\"descriptionNumberColor\">Engraved</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}.[[getMemosprite]]"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "MDF_CyreneHP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DamageValue",
                      "value": {
                        "operator": "Variables[0] (MDF_CyreneHP) || Variables[1] (MDF_Damage) || MUL || RETURN",
                        "displayLines": "(MDF_CyreneHP * MDF_Damage)",
                        "constants": [],
                        "variables": [
                          "MDF_CyreneHP",
                          "MDF_Damage"
                        ]
                      }
                    },
                    {
                      "name": "Looped Event",
                      "maxLoops": {
                        "operator": "Variables[0] (MDF_Layer) || RETURN",
                        "displayLines": "MDF_Layer",
                        "constants": [],
                        "variables": [
                          "MDF_Layer"
                        ]
                      },
                      "Event": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Parameter Target's Attack Targets}}.[[sortByHPCurrent]].[[reverse]]"
                          },
                          "maxTargets": 1,
                          "ifTargetFound": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "canPhase": true,
                              "AttackScaling": {
                                "DamageType": "Ice",
                                "Damage": {
                                  "operator": "Variables[0] (MDF_Damage) || RETURN",
                                  "displayLines": "MDF_Damage",
                                  "constants": [],
                                  "variables": [
                                    "MDF_Damage"
                                  ]
                                },
                                "dmgFormula": "Max HP Scaling",
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Additional DMG",
                                "EnergyGainPercent": "100%"
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
                              "maxTargets": 1,
                              "ifTargetFound": [
                                {
                                  "name": "ATK Scaling DMG",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "canPhase": true,
                                  "AttackScaling": {
                                    "DamageType": "Ice",
                                    "Damage": {
                                      "operator": "Variables[0] (MDF_Damage) || RETURN",
                                      "displayLines": "MDF_Damage",
                                      "constants": [],
                                      "variables": [
                                        "MDF_Damage"
                                      ]
                                    },
                                    "dmgFormula": "Max HP Scaling",
                                    "Toughness": null,
                                    "Tags": null,
                                    "attackType": "Additional DMG",
                                    "EnergyGainPercent": "100%"
                                  }
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "description": "Missing Description",
          "type": "Debuff",
          "statusName": "Engraved"
        },
        {
          "name": "Modifier Construction",
          "for": "_M_Cyrene_Eidolon1_Ability01Prepare",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "Extra Turn Action Injection: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Parameter String",
                    "compareType": "=",
                    "value2": "CyreneServant_Ability01_Eidolon1"
                  },
                  "passed": [
                    {
                      "name": "UI Display Event",
                      "popUpText": "Ode to Ego"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Extra Action/Turn [Owner]: Start ",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Parameter String",
                    "compareType": "=",
                    "value2": "CyreneServant_Ability01_Eidolon1"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "IsInRank01Action",
                      "value": 1
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_CyreneServant_Eidolon4_Count[<span class=\"descriptionNumberColor\">Please Write On, With a Smile</span>]",
          "stackType": "ReplaceByCaster",
          "stackData": [
            "MDF_Count",
            "MDF_Damage"
          ],
          "latentQueue": [
            "TutorialSwitch"
          ],
          "description": "The multiplier for the bounce DMG of the Memosprite Skill \"Ode to Ego\" increases by <span class=\"descriptionNumberColor\">MDF_Damage</span>.",
          "type": "Buff",
          "statusName": "Please Write On, With a Smile"
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_CyreneServant_Energy[<span class=\"descriptionNumberColor\">Story</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "CustomEvent_InfiniteRefresh"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "_T_Cyrene_Eidolon1_EnergyCheck"
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "_T_Cyrene_Eidolon1_EnergyCheck"
                }
              ],
              "priorityLevel": -55
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "_T_Cyrene_Eidolon1_EnergyCheck"
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Owner]"
            },
            {
              "eventTrigger": "New Enemy Wave",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "_T_Cyrene_Eidolon1_EnergyCheck"
                }
              ]
            }
          ],
          "modifierFunctions": [],
          "stackData": [],
          "latentQueue": [],
          "description": "Upon reaching <span class=\"descriptionNumberColor\">#SkillCY14_P2_EnergyCost</span> points, immediately gains 1 extra turn and automatically uses \"Minuet of Blooms and Plumes.\"",
          "type": "Other",
          "effectName": "Story",
          "statusName": "Story"
        },
        {
          "name": "Modifier Construction",
          "for": "Memosprite_CyreneServant_NegativeHP",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                "Allow NEGATIVE HP",
                {
                  "name": "Define Custom Property",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "&nbsp;<span class=\"descriptionNumberColor\">HPNegative</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                    "displayLines": "MDF_PropertyValue",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  },
                  "function": "="
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "Demiurge_Functions": {
      "fileName": "Demiurge_Functions",
      "abilityType": "Char. Functions",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "length": 8,
      "parse": [
        {
          "name": "CharacterFunctions",
          "functionName": "_T_Cyrene_Eidolon1_EnergyCheck",
          "parse": [
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
                    "value1": null,
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (3) || RETURN",
                      "displayLines": "3",
                      "constants": [],
                      "variables": [
                        3
                      ]
                    },
                    "valueType": "Layer"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "_M_Cyrene_Eidolon1_Ability01Prepare",
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "_M_Cyrene_Eidolon1_Ability01Prepare"
                },
                {
                  "name": "Inject Extra-Turn",
                  "actionTag": "CyreneServant_Ability01_Eidolon1",
                  "forceAction": true,
                  "abilityName": "Servant_CyreneServant_FormationReset",
                  "conditions": {
                    "name": "Insert Ability Condition",
                    "type": "SameTagInsertUnusedCount",
                    "typeValue": 1
                  },
                  "castTarget": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "afterInjection": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "_M_Cyrene_Eidolon1_Ability01Prepare"
                    }
                  ],
                  "ignoreCost": true
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "HPSync",
          "parse": [
            {
              "name": "Define Custom Variable with HP%",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "variableName": "CasterSummonerHPRatio"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "CasterHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "variableName": "CasterSummonerMaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Is NegativeHP Enabled",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster's Summoner}}"
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "variableName": "CasterSummonerNegativeHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPNegative</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "CasterSummonerNegativeHP",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Set HP Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "setValue": 1
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "CasterSummonerNegativeHPRatio",
                      "value": {
                        "operator": "Variables[0] (CasterSummonerNegativeHP) || Variables[1] (CasterSummonerMaxHP) || DIV || RETURN",
                        "displayLines": "(CasterSummonerNegativeHP / CasterSummonerMaxHP)",
                        "constants": [],
                        "variables": [
                          "CasterSummonerNegativeHP",
                          "CasterSummonerMaxHP"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "CasterNegativeHP",
                      "value": {
                        "operator": "Variables[0] (CasterSummonerNegativeHPRatio) || Variables[1] (CasterHP) || MUL || RETURN",
                        "displayLines": "(CasterSummonerNegativeHPRatio * CasterHP)",
                        "constants": [],
                        "variables": [
                          "CasterSummonerNegativeHPRatio",
                          "CasterHP"
                        ]
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Memosprite_CyreneServant_NegativeHP",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (CasterNegativeHP) || RETURN",
                          "displayLines": "CasterNegativeHP",
                          "constants": [],
                          "variables": [
                            "CasterNegativeHP"
                          ]
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Memosprite_CyreneServant_NegativeHP",
                      "valuePerStack": {
                        "MDF_PropertyValue": 0
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "CasterSummonerHPRatio",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Stat",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "variableName": "CasterHP",
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                        },
                        {
                          "name": "Set HP Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "setValue": 1
                        }
                      ],
                      "failed": [
                        {
                          "name": "Set HP Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "setValue": {
                            "operator": "Variables[0] (CasterSummonerHPRatio) || Variables[1] (CasterHP) || MUL || RETURN",
                            "displayLines": "(CasterSummonerHPRatio * CasterHP)",
                            "constants": [],
                            "variables": [
                              "CasterSummonerHPRatio",
                              "CasterHP"
                            ]
                          }
                        }
                      ]
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Memosprite_CyreneServant_NegativeHP"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "CasterSummonerHPRatio",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "CasterHP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                    },
                    {
                      "name": "Set HP Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "setValue": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "Set HP Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "setValue": {
                        "operator": "Variables[0] (CasterSummonerHPRatio) || Variables[1] (CasterHP) || MUL || RETURN",
                        "displayLines": "(CasterSummonerHPRatio * CasterHP)",
                        "constants": [],
                        "variables": [
                          "CasterSummonerHPRatio",
                          "CasterHP"
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
          "name": "CharacterFunctions",
          "functionName": "Servant_CyreneServant_AbilityManage",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Ability Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster's Summoner}}"
                },
                "value1": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecial</span>&nbsp;",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (CurAmazingCount) || RETURN",
                  "displayLines": "CurAmazingCount",
                  "constants": [],
                  "variables": [
                    "CurAmazingCount"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Memosprite_CyreneServant_Ability01Disable"
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Memosprite_CyreneServant_Ability01Disable"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Ability Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster's Summoner}}"
                },
                "value1": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecial</span>&nbsp;",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (12) || RETURN",
                  "displayLines": "12",
                  "constants": [],
                  "variables": [
                    12
                  ]
                }
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Memosprite_CyreneServant_Ability02Disable"
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Memosprite_CyreneServant_Ability02Disable"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Ability Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Summoner}}"
                    },
                    "value1": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecial</span>&nbsp;",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (CurAmazingCount) || RETURN",
                      "displayLines": "CurAmazingCount",
                      "constants": [],
                      "variables": [
                        "CurAmazingCount"
                      ]
                    }
                  },
                  {
                    "name": "Compare: Ability Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Summoner}}"
                    },
                    "value1": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecial</span>&nbsp;",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (12) || RETURN",
                      "displayLines": "12",
                      "constants": [],
                      "variables": [
                        12
                      ]
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}.[[getSummoner]]"
                  },
                  "modifier": "Memosprite_CyreneServant_SummonerAbility03Disable"
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}.[[getSummoner]]"
                  },
                  "modifier": "Memosprite_CyreneServant_SummonerAbility03Disable"
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Servant_CyreneServant_AbilityReady_LightTeamMirrorSetupEffect",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Group",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "group": "Chrysos"
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
                "modifier": "Memosprite_CyreneServant_AmazingBonus"
              }
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Servant_CyreneServant_AbilityReady_LightTeamMirrorChosenEffect",
          "parse": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Demiurge's Player Team Mirror}}"
              },
              "maxTargets": 3,
              "conditions": {
                "name": "Living State",
                "state": "Mask_AliveOnly",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variable": "CyreneIndex",
                  "target2": null,
                  "variable2": "Index",
                  "scope": "ContextTaskTemplate"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Player's Aim Target List}}"
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Servant_CyreneServant_AbilityReady_MirrorSetup",
          "parse": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "ContextTaskTemplate",
              "variableName": "LightTeamCount"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "ContextTaskTemplate",
              "variableName": "DarkTeamCount"
            },
            {
              "name": "Define Custom Variable with Team Count",
              "target": {
                "name": "Target Name",
                "target": "{{Demiurge's Player Team Mirror}}"
              },
              "variableName": "#CL_LightTeamNumber",
              "livingTargets": true,
              "context": "ContextCaster"
            },
            {
              "name": "SWITCH",
              "switchValue": {
                "operator": "Variables[0] (Index) || RETURN",
                "displayLines": "Index",
                "constants": [],
                "variables": [
                  "Index"
                ]
              },
              "caseEvents": [
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 1,
                  "execute": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Demiurge's Player Team Mirror}}"
                      },
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Define Custom Variable",
                          "scope": "ContextTaskTemplate",
                          "variableName": "LightTeamCount",
                          "value": 2
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "CyreneIndex",
                          "value": 2
                        },
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "Servant_CyreneServant_AbilityReady_LightTeamMirrorSetupEffect",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "variables": {
                            "Index": {
                              "operator": "Variables[0] (LightTeamCount) || RETURN",
                              "displayLines": "LightTeamCount",
                              "constants": [],
                              "variables": [
                                "LightTeamCount"
                              ]
                            }
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 2,
                  "execute": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Demiurge's Player Team Mirror}}"
                      },
                      "maxTargets": 2,
                      "ifTargetFound": [
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "variableName": "LightTeamCount",
                          "context": "ContextTaskTemplate",
                          "value": 1,
                          "max": 3
                        },
                        {
                          "name": "SWITCH",
                          "switchValue": {
                            "operator": "Variables[0] (LightTeamCount) || RETURN",
                            "displayLines": "LightTeamCount",
                            "constants": [],
                            "variables": [
                              "LightTeamCount"
                            ]
                          },
                          "caseEvents": [
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 1,
                              "execute": [
                                {
                                  "name": "Declare Custom Variable",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "scope": "TargetEntity",
                                  "variableName": "CyreneIndex",
                                  "value": 1
                                },
                                {
                                  "name": "Use Custom Character Function",
                                  "functionName": "Servant_CyreneServant_AbilityReady_LightTeamMirrorSetupEffect",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "variables": {
                                    "Index": {
                                      "operator": "Variables[0] (LightTeamCount) || RETURN",
                                      "displayLines": "LightTeamCount",
                                      "constants": [],
                                      "variables": [
                                        "LightTeamCount"
                                      ]
                                    }
                                  }
                                }
                              ]
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 2,
                              "execute": [
                                {
                                  "name": "Declare Custom Variable",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "scope": "TargetEntity",
                                  "variableName": "CyreneIndex",
                                  "value": 3
                                },
                                {
                                  "name": "Use Custom Character Function",
                                  "functionName": "Servant_CyreneServant_AbilityReady_LightTeamMirrorSetupEffect",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "variables": {
                                    "Index": 3
                                  }
                                }
                              ]
                            }
                          ],
                          "defaultEvents": []
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 3,
                  "execute": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Demiurge's Player Team Mirror}}"
                      },
                      "maxTargets": 3,
                      "ifTargetFound": [
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "variableName": "LightTeamCount",
                          "context": "ContextTaskTemplate",
                          "value": 1,
                          "max": 3
                        },
                        {
                          "name": "SWITCH",
                          "switchValue": {
                            "operator": "Variables[0] (LightTeamCount) || RETURN",
                            "displayLines": "LightTeamCount",
                            "constants": [],
                            "variables": [
                              "LightTeamCount"
                            ]
                          },
                          "caseEvents": [
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 1,
                              "execute": [
                                {
                                  "name": "Declare Custom Variable",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "scope": "TargetEntity",
                                  "variableName": "CyreneIndex",
                                  "value": 1
                                },
                                {
                                  "name": "Use Custom Character Function",
                                  "functionName": "Servant_CyreneServant_AbilityReady_LightTeamMirrorSetupEffect",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "variables": {
                                    "Index": {
                                      "operator": "Variables[0] (LightTeamCount) || RETURN",
                                      "displayLines": "LightTeamCount",
                                      "constants": [],
                                      "variables": [
                                        "LightTeamCount"
                                      ]
                                    }
                                  }
                                }
                              ]
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 2,
                              "execute": [
                                {
                                  "name": "Declare Custom Variable",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "scope": "TargetEntity",
                                  "variableName": "CyreneIndex",
                                  "value": 2
                                },
                                {
                                  "name": "Use Custom Character Function",
                                  "functionName": "Servant_CyreneServant_AbilityReady_LightTeamMirrorSetupEffect",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "variables": {
                                    "Index": {
                                      "operator": "Variables[0] (LightTeamCount) || RETURN",
                                      "displayLines": "LightTeamCount",
                                      "constants": [],
                                      "variables": [
                                        "LightTeamCount"
                                      ]
                                    }
                                  }
                                }
                              ]
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 3,
                              "execute": [
                                {
                                  "name": "Declare Custom Variable",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "scope": "TargetEntity",
                                  "variableName": "CyreneIndex",
                                  "value": 3
                                },
                                {
                                  "name": "Use Custom Character Function",
                                  "functionName": "Servant_CyreneServant_AbilityReady_LightTeamMirrorSetupEffect",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "variables": {
                                    "Index": {
                                      "operator": "Variables[0] (LightTeamCount) || RETURN",
                                      "displayLines": "LightTeamCount",
                                      "constants": [],
                                      "variables": [
                                        "LightTeamCount"
                                      ]
                                    }
                                  }
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
              "defaultEvents": []
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}.[[removeBattleEvents]].[[regardPartAsOwner]]"
              },
              "maxTargets": 5,
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "DarkTeamCount",
                  "context": "ContextTaskTemplate",
                  "value": 1
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "scope": "ContextOwner",
              "variableName": "#CL_MirrorSetupFlag",
              "value": 1
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "ServantCyrene_ChargeEnergy",
          "parse": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "variableName": "_CurSpecialSP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecial</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "variableName": "_MaxSpecialSP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">MaxSpecialEnergy</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "scope": "ContextTaskTemplate",
              "variableName": "_ExtraSpecialSP",
              "value": {
                "operator": "Variables[0] (MAX) || Variables[1] (_CurSpecialSP) || Variables[2] (parameter[0]_AddValue) || ADD || Variables[3] (_MaxSpecialSP) || SUB || Constants[0] (0) || PARAM_2 || FUNCTION || RETURN",
                "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MAX</span>(((_CurSpecialSP + parameter[0]_AddValue) - _MaxSpecialSP), 0)",
                "constants": [
                  0
                ],
                "variables": [
                  "MAX",
                  "_CurSpecialSP",
                  "parameter[0]_AddValue",
                  "_MaxSpecialSP"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_ExtraSpecialSP",
                "compareType": ">",
                "value2": 0,
                "contextScope": "ContextTaskTemplate"
              },
              "passed": [
                {
                  "name": "Define Custom Property",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "variableName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecialOverflow</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (_ExtraSpecialSP) || RETURN",
                    "displayLines": "_ExtraSpecialSP",
                    "constants": [],
                    "variables": [
                      "_ExtraSpecialSP"
                    ]
                  }
                }
              ]
            },
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "value": {
                "operator": "Variables[0] (parameter[0]_AddValue) || RETURN",
                "displayLines": "parameter[0]_AddValue",
                "constants": [],
                "variables": [
                  "parameter[0]_AddValue"
                ]
              },
              "isFixed": "(Fixed)",
              "ignoreBlock": true,
              "isSpecialEnergy": true
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "ServantCyrene_Eidolon6",
          "parse": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "Rank04Count",
              "value": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Rank04Count",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Memosprite_CyreneServant_Eidolon6",
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
              ],
              "failed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "ReduceActionDelay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "variables": {
                    "parameter[0]_NormalizedValue": {
                      "operator": "Variables[0] (0.24) || RETURN",
                      "displayLines": "0.24",
                      "constants": [],
                      "variables": [
                        0.24
                      ]
                    }
                  }
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