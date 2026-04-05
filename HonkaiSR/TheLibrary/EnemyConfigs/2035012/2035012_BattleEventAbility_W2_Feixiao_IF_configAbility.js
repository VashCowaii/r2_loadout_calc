const configAbility = {
  "fileName": "2035012_BattleEventAbility_W2_Feixiao_IF",
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
      "modifier": "<a class=\"gModGreen\" id=\"-1414974048\">Modifier_W2_Feixiao_BattleEvent</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1175406165\">Modifier_W2_Feixiao_BattleEvent_BaseSpeed</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Enemy Feixiao: Self}}"
        },
        "value1": "BattleEventPartFlag",
        "compareType": "=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Advance/Delay up to Target",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "targetRef": {
            "name": "Target Name",
            "target": "{{Feixiao Parts: Head}}"
          },
          "isStartingAV": true
        }
      ],
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Enemy Feixiao: Self}}"
            },
            "value1": "BattleEventPartFlag",
            "compareType": "=",
            "value2": 2
          },
          "passed": [
            {
              "name": "Advance/Delay up to Target",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "targetRef": {
                "name": "Target Name",
                "target": "{{Feixiao Parts: Claws}}"
              },
              "isStartingAV": true
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Enemy Feixiao: Self}}"
                },
                "value1": "BattleEventPartFlag",
                "compareType": "=",
                "value2": 3
              },
              "passed": [
                {
                  "name": "Advance/Delay up to Target",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "targetRef": {
                    "name": "Target Name",
                    "target": "{{Feixiao Parts: Tail}}"
                  },
                  "isStartingAV": true
                }
              ]
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
          "target": "{{Enemy Feixiao: Self}}"
        },
        "value1": "BattleEventPartFlag",
        "compareType": "=",
        "value2": 0
      },
      "passed": [
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "set": {
            "operator": "Variables[0] (MDF_W2_Feixiao_BattleEvent_ActionDelay) || RETURN",
            "displayLines": "MDF_W2_Feixiao_BattleEvent_ActionDelay",
            "constants": [],
            "variables": [
              "MDF_W2_Feixiao_BattleEvent_ActionDelay"
            ]
          }
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Enemy Feixiao: Self}}"
      },
      "variableName": "BattleEventPartFlag",
      "value": 0
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Sequence",
          "Sequence": [
            {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            {
              "name": "Adjust Relative to Action Bar, Adjacent Targets",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1262406841\">Monster_W2_Feixiao_IF_SummonMinions</a>"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]",
                    "invertCondition": true
                  },
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
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-898477955\">StanceBreakState</a>",
                    "invertCondition": true
                  }
                ]
              },
              "lessThanMax": 0
            }
          ]
        },
        "value1": "TeamCharacterCount",
        "compareType": ">",
        "value2": 1
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1847577011\">Monster_W2_Feixiao_AfterConnect</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              {
                "name": "Adjust Relative to Action Bar, Adjacent Targets",
                "conditions": {
                  "name": "AND",
                  "conditionList": [
                    {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1262406841\">Monster_W2_Feixiao_IF_SummonMinions</a>"
                    },
                    {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]",
                      "invertCondition": true
                    },
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
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-898477955\">StanceBreakState</a>",
                      "invertCondition": true
                    }
                  ]
                },
                "lessThanMax": 0
              }
            ]
          },
          "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
        }
      ],
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Sequence",
              "Sequence": [
                {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                {
                  "name": "Adjust Relative to Action Bar, Adjacent Targets",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1262406841\">Monster_W2_Feixiao_IF_SummonMinions</a>"
                      },
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
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-898477955\">StanceBreakState</a>",
                        "invertCondition": true
                      }
                    ]
                  },
                  "lessThanMax": 0
                }
              ]
            },
            "value1": "TeamCharacterCount",
            "compareType": ">",
            "value2": 1
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1847577011\">Monster_W2_Feixiao_AfterConnect</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  {
                    "name": "Adjust Relative to Action Bar, Adjacent Targets",
                    "conditions": {
                      "name": "AND",
                      "conditionList": [
                        {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1262406841\">Monster_W2_Feixiao_IF_SummonMinions</a>"
                        },
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
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-898477955\">StanceBreakState</a>",
                          "invertCondition": true
                        }
                      ]
                    },
                    "lessThanMax": 0
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  {
                    "name": "Adjust Relative to Action Bar, Adjacent Targets",
                    "conditions": {
                      "name": "AND",
                      "conditionList": [
                        {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1262406841\">Monster_W2_Feixiao_IF_SummonMinions</a>"
                        },
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
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-898477955\">StanceBreakState</a>",
                          "invertCondition": true
                        }
                      ]
                    },
                    "lessThanMax": 0
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  {
                    "name": "Adjust Relative to Action Bar, Adjacent Targets",
                    "conditions": {
                      "name": "Is Part Of Team",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "team": "Enemy Team"
                    },
                    "greaterThanMax": 0
                  }
                ]
              },
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1847577011\">Monster_W2_Feixiao_AfterConnect</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1175406165\">Modifier_W2_Feixiao_BattleEvent_BaseSpeed</a>",
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
                "operator": "Variables[0] (MDF_W2_Feixiao_BattleEvent_BaseSpeed) || RETURN",
                "displayLines": "MDF_W2_Feixiao_BattleEvent_BaseSpeed",
                "constants": [],
                "variables": [
                  "MDF_W2_Feixiao_BattleEvent_BaseSpeed"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1414974048\">Modifier_W2_Feixiao_BattleEvent</a>",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemies by Aggro to Battle Event's Caster}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          {
                            "name": "Adjust Relative to Action Bar, Adjacent Targets",
                            "conditions": {
                              "name": "Is Part Of Team",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "team": "Enemy Team"
                            },
                            "lessThanMax": 0
                          }
                        ]
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"734224904\">Monster_W2_Feixiao_CurrentConnect</a>"
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
                        "modifier": "<a class=\"gModGreen\" id=\"734224904\">Monster_W2_Feixiao_CurrentConnect</a>"
                      },
                      "ifTargetFound": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Enemy ID",
                            "ID": 203204,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "characterName": null,
                            "isCompareUniqueID": true
                          },
                          "passed": [
                            {
                              "name": "Inject Ability Use",
                              "abilityName": "Monster_W2_Feixiao_IF_Ability04_Part01",
                              "abilitySource": {
                                "name": "Target Name",
                                "target": "{{Battle Event's Caster}}"
                              },
                              "priorityTag": "EnemyAttackFromSelf",
                              "canHitNonTargets": true,
                              "allowAbilityTriggers": false
                            }
                          ],
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Enemy ID",
                                "ID": 203205,
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "characterName": null,
                                "isCompareUniqueID": true
                              },
                              "passed": [
                                {
                                  "name": "Inject Ability Use",
                                  "abilityName": "Monster_W2_Feixiao_IF_Ability05_Part01",
                                  "abilitySource": {
                                    "name": "Target Name",
                                    "target": "{{Battle Event's Caster}}"
                                  },
                                  "priorityTag": "EnemyAttackFromSelf",
                                  "canHitNonTargets": true,
                                  "allowAbilityTriggers": false
                                }
                              ],
                              "failed": [
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Enemy ID",
                                    "ID": 203206,
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "characterName": null,
                                    "isCompareUniqueID": true
                                  },
                                  "passed": [
                                    {
                                      "name": "Inject Ability Use",
                                      "abilityName": "Monster_W2_Feixiao_IF_Ability06_Part01",
                                      "abilitySource": {
                                        "name": "Target Name",
                                        "target": "{{Battle Event's Caster}}"
                                      },
                                      "priorityTag": "EnemyAttackFromSelf",
                                      "canHitNonTargets": true,
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
                  "failed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W2_Feixiao_IF_AbilityP01_Part01",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Battle Event's Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "priorityTag": "EnemyAttackFromSelf",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            },
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
            }
          ]
        },
        {
          "eventTrigger": "Action Choice Window [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"969983868\">Monster_W2_Feixiao_BeforeConnect</a>"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Sequence",
                      "Sequence": [
                        {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        {
                          "name": "Adjust Relative to Action Bar, Adjacent Targets",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
                          },
                          "greaterThanMax": 0
                        }
                      ]
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"969983868\">Monster_W2_Feixiao_BeforeConnect</a>"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
                        "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]",
                        "casterFilter": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      "ifTargetFound": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1847577011\">Monster_W2_Feixiao_AfterConnect</a>"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Sequence",
                          "Sequence": [
                            {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            {
                              "name": "Adjust Relative to Action Bar, Adjacent Targets",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
                              },
                              "lessThanMax": 0
                            }
                          ]
                        },
                        "value1": "TeamCharacterCount",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1847577011\">Monster_W2_Feixiao_AfterConnect</a>"
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
                            "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]",
                            "casterFilter": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            }
                          },
                          "ifTargetFound": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
          "eventTrigger": "Ultimate Prep-Phase [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"969983868\">Monster_W2_Feixiao_BeforeConnect</a>"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Sequence",
                      "Sequence": [
                        {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        {
                          "name": "Adjust Relative to Action Bar, Adjacent Targets",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
                          },
                          "greaterThanMax": 0
                        }
                      ]
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"969983868\">Monster_W2_Feixiao_BeforeConnect</a>"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
                        "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]",
                        "casterFilter": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      "ifTargetFound": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1847577011\">Monster_W2_Feixiao_AfterConnect</a>"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Sequence",
                          "Sequence": [
                            {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            {
                              "name": "Adjust Relative to Action Bar, Adjacent Targets",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
                              },
                              "lessThanMax": 0
                            }
                          ]
                        },
                        "value1": "TeamCharacterCount",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1847577011\">Monster_W2_Feixiao_AfterConnect</a>"
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
                            "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]",
                            "casterFilter": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            }
                          },
                          "ifTargetFound": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
          "eventTrigger": "Extra Action/Turn [Anyone]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"969983868\">Monster_W2_Feixiao_BeforeConnect</a>"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Sequence",
                      "Sequence": [
                        {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        {
                          "name": "Adjust Relative to Action Bar, Adjacent Targets",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
                          },
                          "greaterThanMax": 0
                        }
                      ]
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"969983868\">Monster_W2_Feixiao_BeforeConnect</a>"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
                        "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]",
                        "casterFilter": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      "ifTargetFound": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1847577011\">Monster_W2_Feixiao_AfterConnect</a>"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Sequence",
                          "Sequence": [
                            {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            {
                              "name": "Adjust Relative to Action Bar, Adjacent Targets",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
                              },
                              "lessThanMax": 0
                            }
                          ]
                        },
                        "value1": "TeamCharacterCount",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1847577011\">Monster_W2_Feixiao_AfterConnect</a>"
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
                            "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]",
                            "casterFilter": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            }
                          },
                          "ifTargetFound": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
          "eventTrigger": "AV Forcibly Changed [Global]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"969983868\">Monster_W2_Feixiao_BeforeConnect</a>"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Sequence",
                      "Sequence": [
                        {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        {
                          "name": "Adjust Relative to Action Bar, Adjacent Targets",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
                          },
                          "greaterThanMax": 0
                        }
                      ]
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": "=",
                    "value2": 0,
                    "conditions": {
                      "name": "Is Entity a Battle Event/Summon",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "invertCondition": true
                    }
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"969983868\">Monster_W2_Feixiao_BeforeConnect</a>"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
                        "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]",
                        "casterFilter": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      "ifTargetFound": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1847577011\">Monster_W2_Feixiao_AfterConnect</a>"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Sequence",
                          "Sequence": [
                            {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            {
                              "name": "Adjust Relative to Action Bar, Adjacent Targets",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
                              },
                              "lessThanMax": 0
                            }
                          ]
                        },
                        "value1": "TeamCharacterCount",
                        "compareType": "=",
                        "value2": 0,
                        "conditions": {
                          "name": "Is Entity a Battle Event/Summon",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "invertCondition": true
                        }
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1847577011\">Monster_W2_Feixiao_AfterConnect</a>"
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
                            "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]",
                            "casterFilter": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            }
                          },
                          "ifTargetFound": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
      "stackData": [],
      "latentQueue": []
    }
  ]
}