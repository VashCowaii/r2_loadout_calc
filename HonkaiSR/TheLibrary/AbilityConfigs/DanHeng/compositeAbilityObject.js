const compositeAbilityObject = {
  "fullCharacterName": "Dan Heng",
  "trimCharacterName": "DanHeng",
  "abilityList": [
    "DanHeng_DanHeng_Eidolon1",
    "DanHeng_DanHeng_Trace02",
    "DanHeng_DanHeng_Trace01",
    "DanHeng_DanHeng_TechniqueInLevel",
    "DanHeng_DanHeng_PassiveAbility01_Enhance_Part02",
    "DanHeng_DanHeng_PassiveAbility01_Enhance_Part01",
    "DanHeng_DanHeng_PassiveAbility01",
    "DanHeng_DanHeng_Ability03_Part02",
    "DanHeng_DanHeng_Ability03_Part01",
    "DanHeng_DanHeng_Ability03_EnterReady",
    "DanHeng_DanHeng_Ability02_Part02",
    "DanHeng_DanHeng_Ability02_Part01",
    "DanHeng_DanHeng_Ability01_Part02",
    "DanHeng_DanHeng_Ability01_Part01",
    "DanHeng_Modifiers"
  ],
  "abilityObject": {
    "DanHeng_DanHeng_Eidolon1": {
      "fileName": "DanHeng_DanHeng_Eidolon1",
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
          "modifier": "DanHeng_Eidolon1"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "DanHeng_Eidolon1",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Ability Target TAKING DMG}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (0.5) || RETURN",
                      "displayLines": "0.5",
                      "constants": [],
                      "variables": [
                        0.5
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateSUM</span>&nbsp;",
                          "value": "0.12"
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
    "DanHeng_DanHeng_Trace02": {
      "fileName": "DanHeng_DanHeng_Trace02",
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
          "modifier": "M_DanHeng_Tree02"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "DanHeng_PointB2_SpeedUp[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
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
          "description": "SPD +<span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>.",
          "type": "Buff",
          "effectName": "SPD Boost",
          "statusName": "SPD Boost"
        },
        {
          "name": "Modifier Construction",
          "for": "M_DanHeng_Tree02",
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Random Chance",
                    "chance": {
                      "operator": "Variables[0] (0.5) || RETURN",
                      "displayLines": "0.5",
                      "constants": [],
                      "variables": [
                        0.5
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "DanHeng_PointB2_SpeedUp[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
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
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "DanHeng_DanHeng_Trace01": {
      "fileName": "DanHeng_DanHeng_Trace01",
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
          "modifier": "DanHeng_LowHP_AggroDown",
          "valuePerStack": {
            "MDF_HPRatio": {
              "operator": "Variables[0] (0.5) || RETURN",
              "displayLines": "0.5",
              "constants": [],
              "variables": [
                0.5
              ]
            },
            "MDF_AggroDown": {
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
      "references": [
        {
          "name": "Modifier Construction",
          "for": "DanHeng_Trace_AggroDown[<span class=\"descriptionNumberColor\">Hidden Dragon</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Aggro%</span>&nbsp;",
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
          "description": "Lowers the chances of being attacked by enemies.",
          "type": "Buff",
          "effectName": "Aggro Chance Reduction",
          "statusName": "Hidden Dragon"
        },
        {
          "name": "Modifier Construction",
          "for": "DanHeng_LowHP_AggroDown",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
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
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "DanHeng_Trace_AggroDown[<span class=\"descriptionNumberColor\">Hidden Dragon</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (MDF_AggroDown) || RETURN",
                          "displayLines": "MDF_AggroDown",
                          "constants": [],
                          "variables": [
                            "MDF_AggroDown"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "HP Change [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
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
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "DanHeng_Trace_AggroDown[<span class=\"descriptionNumberColor\">Hidden Dragon</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (MDF_AggroDown) || RETURN",
                          "displayLines": "MDF_AggroDown",
                          "constants": [],
                          "variables": [
                            "MDF_AggroDown"
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
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "DanHeng_Trace_AggroDown[<span class=\"descriptionNumberColor\">Hidden Dragon</span>]",
                      "onlyRemoveOwnersInstance": true
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_HPRatio",
            "MDF_AggroDown"
          ],
          "latentQueue": []
        }
      ]
    },
    "DanHeng_DanHeng_TechniqueInLevel": {
      "fileName": "DanHeng_DanHeng_TechniqueInLevel",
      "childAbilityList": [
        "DanHeng_DanHeng_TechniqueInLevel"
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
          "modifier": "Technique_DanHeng_Modifier"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "DanHeng_TechniqueUsage_AttackRatioUp[<span class=\"descriptionNumberColor\">Splitting Spearhead</span>]",
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
          "description": "ATK +<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "ATK Boost",
          "statusName": "Splitting Spearhead"
        },
        {
          "name": "Modifier Construction",
          "for": "Technique_DanHeng_Modifier",
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
                      "modifier": "DanHeng_TechniqueUsage_AttackRatioUp[<span class=\"descriptionNumberColor\">Splitting Spearhead</span>]",
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
    "DanHeng_DanHeng_PassiveAbility01_Enhance_Part02": {
      "fileName": "DanHeng_DanHeng_PassiveAbility01_Enhance_Part02",
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
          "modifier": "DanHeng_Passive_SelfBeingTargetEnhance[<span class=\"descriptionNumberColor\">Superiority of Reach</span>]",
          "valuePerStack": {
            "DanHeng_PassivePene": {
              "operator": "Variables[0] (0.36) || RETURN",
              "displayLines": "0.36",
              "constants": [],
              "variables": [
                0.36
              ]
            }
          }
        }
      ],
      "references": []
    },
    "DanHeng_DanHeng_PassiveAbility01_Enhance_Part01": {
      "fileName": "DanHeng_DanHeng_PassiveAbility01_Enhance_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Enemies Still Alive",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "includeNonTargets": true
          },
          "passed": [
            "Deleted bullshit",
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "DanHeng_PassiveAbility01_Enhance_Part02",
              "isTrigger": true
            }
          ]
        }
      ],
      "references": []
    },
    "DanHeng_DanHeng_PassiveAbility01": {
      "fileName": "DanHeng_DanHeng_PassiveAbility01",
      "childAbilityList": [
        "DanHeng_DanHeng_PassiveAbility01",
        "DanHeng_DanHeng_PassiveAbility01_Enhance_Part01",
        "DanHeng_DanHeng_PassiveAbility01_Enhance_Part02",
        "DanHeng_DanHeng_PassiveAbility01_Enhance_Camera"
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
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Faster Than Light"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "AbilityPreShowModifier"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "AbilityPreShowModifier2"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "DanHeng_CheckSelfBeingTarget"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "DanHeng_Passive_BeginTargetEnhance[<span class=\"descriptionNumberColor\">Superiority of Reach</span>]"
        },
        {
          "name": "Update Displayed Energy Bar",
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 1,
          "cooldown": 0
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "DanHeng_CheckSelfBeingTarget",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "Ability Use [Anyone]: End",
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
                            "name": "Skill Type",
                            "skillType": "Basic ATK"
                          },
                          {
                            "name": "Skill Type",
                            "skillType": "Skill"
                          },
                          {
                            "name": "Skill Type",
                            "skillType": "Ultimate"
                          },
                          {
                            "name": "Skill Type",
                            "skillType": "Memosprite"
                          }
                        ]
                      },
                      {
                        "name": "NOT",
                        "condition": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "DanHeng_Passive_BeginTargetEnhanceCD[<span class=\"descriptionNumberColor\">Superiority of Reach</span>]"
                        }
                      },
                      {
                        "name": "NOT",
                        "condition": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "DanHeng_Passive_SelfBeingTargetEnhance[<span class=\"descriptionNumberColor\">Superiority of Reach</span>]"
                        }
                      },
                      {
                        "name": "NOT",
                        "condition": {
                          "name": "Is Part Of",
                          "of": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "mustBeAlive2": true
                        }
                      },
                      {
                        "name": "Is Teammate",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Is Part Of",
                            "of": {
                              "name": "Target Name",
                              "target": "{{Parameter Target's Ability Targets}}"
                            },
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "mustBeAlive2": true
                          },
                          {
                            "name": "Is Part Of",
                            "of": {
                              "name": "Target Name",
                              "target": "{{Parameter Target's Ability Sub-Targets}}"
                            },
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "mustBeAlive2": true
                          }
                        ]
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
                      "modifier": "DanHeng_Passive_SelfBeingTargetEnhance[<span class=\"descriptionNumberColor\">Superiority of Reach</span>]",
                      "valuePerStack": {
                        "DanHeng_PassivePene": {
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
                      "name": "Update Displayed Energy Bar",
                      "assignState": "True",
                      "priorState": "Active",
                      "bar#": 1,
                      "cooldown": 0
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "DanHeng_Passive_BeginTargetEnhance[<span class=\"descriptionNumberColor\">Superiority of Reach</span>]"
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
                        "name": "NOT",
                        "condition": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "DanHeng_Passive_BeginTargetEnhanceCD[<span class=\"descriptionNumberColor\">Superiority of Reach</span>]"
                        }
                      },
                      {
                        "name": "NOT",
                        "condition": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "DanHeng_Passive_SelfBeingTargetEnhance[<span class=\"descriptionNumberColor\">Superiority of Reach</span>]"
                        }
                      },
                      {
                        "name": "NOT",
                        "condition": {
                          "name": "Is Part Of",
                          "of": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "mustBeAlive2": true
                        }
                      },
                      {
                        "name": "Is Teammate",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Parameter Target List}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "mustBeAlive2": true
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
                      "modifier": "DanHeng_Passive_SelfBeingTargetEnhance[<span class=\"descriptionNumberColor\">Superiority of Reach</span>]",
                      "valuePerStack": {
                        "DanHeng_PassivePene": {
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
                      "name": "Update Displayed Energy Bar",
                      "assignState": "True",
                      "priorState": "Active",
                      "bar#": 1,
                      "cooldown": 0
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "DanHeng_Passive_BeginTargetEnhance[<span class=\"descriptionNumberColor\">Superiority of Reach</span>]"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: Aborted",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "NOT",
                        "condition": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "DanHeng_Passive_BeginTargetEnhanceCD[<span class=\"descriptionNumberColor\">Superiority of Reach</span>]"
                        }
                      },
                      {
                        "name": "NOT",
                        "condition": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "DanHeng_Passive_SelfBeingTargetEnhance[<span class=\"descriptionNumberColor\">Superiority of Reach</span>]"
                        }
                      },
                      {
                        "name": "NOT",
                        "condition": {
                          "name": "Is Part Of",
                          "of": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "mustBeAlive2": true
                        }
                      },
                      {
                        "name": "Is Teammate",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Parameter Target List}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "mustBeAlive2": true
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
                      "modifier": "DanHeng_Passive_SelfBeingTargetEnhance[<span class=\"descriptionNumberColor\">Superiority of Reach</span>]",
                      "valuePerStack": {
                        "DanHeng_PassivePene": {
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
                      "name": "Update Displayed Energy Bar",
                      "assignState": "True",
                      "priorState": "Active",
                      "bar#": 1,
                      "cooldown": 0
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "DanHeng_Passive_BeginTargetEnhance[<span class=\"descriptionNumberColor\">Superiority of Reach</span>]"
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
          "for": "AbilityPreShowModifier2",
          "stackData": [],
          "latentQueue": [],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "skillType": [
              "Skill"
            ],
            "conditions": {
              "name": "NOT",
              "condition": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "DanHeng_BPAbility_SpeedDown[<span class=\"descriptionNumberColor\">Slow</span>]"
              }
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": "-0.12(SPD Change)"
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "AbilityPreShowModifier",
          "stackData": [],
          "latentQueue": [],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "conditions": {
              "name": "NOT",
              "condition": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "DanHeng_PointB2_SpeedUp[<span class=\"descriptionNumberColor\">SPD Boost</span>]"
              }
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": "0.2(SPD Change)"
            }
          }
        }
      ]
    },
    "DanHeng_DanHeng_Ability03_Part02": {
      "fileName": "DanHeng_DanHeng_Ability03_Part02",
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
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "DanHeng_Eidolon4_Trigger"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "flagName": "STAT_SpeedDown"
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
                "DamageType": "Wind",
                "Damage": {
                  "operator": "Variables[0] (4) || Variables[1] (1.2) || ADD || RETURN",
                  "displayLines": "(4 + 1.2)",
                  "constants": [],
                  "variables": [
                    4,
                    1.2
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
                "DamageType": "Wind",
                "Damage": {
                  "operator": "Variables[0] (4) || RETURN",
                  "displayLines": "4",
                  "constants": [],
                  "variables": [
                    4
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
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 4
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "DanHeng_Eidolon4_Trigger"
            }
          ]
        },
        "Trigger: Skip Death Handling",
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "DanHeng_Eidolon4_Trigger",
          "execute": [
            {
              "eventTrigger": "Got a Kill [Owner]",
              "execute": [
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "set": 0
                }
              ]
            },
            {
              "eventTrigger": "Got a Queued Kill [Owner]",
              "execute": [
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "set": 0
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "DanHeng_DanHeng_Ability03_Part01": {
      "fileName": "DanHeng_DanHeng_Ability03_Part01",
      "childAbilityList": [
        "DanHeng_DanHeng_Ability03_Camera",
        "DanHeng_DanHeng_Ability03_EnterReady",
        "DanHeng_DanHeng_Ability03_Part01",
        "DanHeng_DanHeng_Ability03_Part02"
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
          "ability": "DanHeng_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "DanHeng_DanHeng_Ability03_EnterReady": {
      "fileName": "DanHeng_DanHeng_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "DanHeng_DanHeng_Ability02_Part02": {
      "fileName": "DanHeng_DanHeng_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Eidolon Activated",
                "eidolon": 6
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_RankSpeedDown",
              "value": {
                "operator": "Variables[0] (0.08) || RETURN",
                "displayLines": "0.08",
                "constants": [],
                "variables": [
                  0.08
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_RankSpeedDown",
              "value": 0
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "DanHeng_Ability02_CheckCritical_Modifier",
          "valuePerStack": {
            "MDF_Chance": {
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
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (2.6) || RETURN",
              "displayLines": "2.6",
              "constants": [],
              "variables": [
                2.6
              ]
            },
            "HitSplit": 0.3,
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
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (2.6) || RETURN",
              "displayLines": "2.6",
              "constants": [],
              "variables": [
                2.6
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
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (2.6) || RETURN",
              "displayLines": "2.6",
              "constants": [],
              "variables": [
                2.6
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
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (2.6) || RETURN",
              "displayLines": "2.6",
              "constants": [],
              "variables": [
                2.6
              ]
            },
            "HitSplit": 0.4,
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
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "DanHeng_Ability02_CheckCritical_Modifier"
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "DanHeng_BPAbility_SpeedDown[<span class=\"descriptionNumberColor\">Slow</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_SpeedDown"
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
          "description": "SPD -<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "Slow",
          "statusName": "Slow"
        },
        {
          "name": "Modifier Construction",
          "for": "DanHeng_Ability02_CheckCritical_Modifier",
          "execute": [
            {
              "eventTrigger": "Deal Damage End [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is a Crit"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "modifier": "DanHeng_BPAbility_SpeedDown[<span class=\"descriptionNumberColor\">Slow</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "baseChance": {
                        "operator": "Variables[0] (MDF_Chance) || RETURN",
                        "displayLines": "MDF_Chance",
                        "constants": [],
                        "variables": [
                          "MDF_Chance"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.12) || Variables[1] (_RankSpeedDown) || ADD || RETURN",
                          "displayLines": "(0.12 + _RankSpeedDown)",
                          "constants": [],
                          "variables": [
                            0.12,
                            "_RankSpeedDown"
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
            "MDF_Chance"
          ],
          "latentQueue": []
        }
      ]
    },
    "DanHeng_DanHeng_Ability02_Part01": {
      "fileName": "DanHeng_DanHeng_Ability02_Part01",
      "childAbilityList": [
        "DanHeng_DanHeng_Ability02_Camera",
        "DanHeng_DanHeng_Ability02_Part01",
        "DanHeng_DanHeng_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
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
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "DanHeng_Ability02_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "DanHeng_DanHeng_Ability01_Part02": {
      "fileName": "DanHeng_DanHeng_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "High Gale"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "DanHeng_Tree03_DamageAddedRatio"
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "HitSplit": 0.45,
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
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "HitSplit": 0.55,
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
            "name": "Trace Activated",
            "conditionList": "High Gale"
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "DanHeng_Tree03_DamageAddedRatio"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "DanHeng_Tree03_DamageAddedRatio",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Ability Target TAKING DMG}}"
                    },
                    "flagName": "STAT_SpeedDown"
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                          "value": "0.4"
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
    "DanHeng_DanHeng_Ability01_Part01": {
      "fileName": "DanHeng_DanHeng_Ability01_Part01",
      "childAbilityList": [
        "DanHeng_DanHeng_Ability01_Camera",
        "DanHeng_DanHeng_Ability01_Part01",
        "DanHeng_DanHeng_Ability01_Part02"
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
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "DanHeng_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "DanHeng_Modifiers": {
      "fileName": "DanHeng_Modifiers",
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
          "for": "DanHeng_Passive_SelfBeingTargetEnhance[<span class=\"descriptionNumberColor\">Superiority of Reach</span>]",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Basic ATK"
                      },
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
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceWindPEN</span>&nbsp;",
                          "value": "DanHeng_PassivePene"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
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
                        "skillType": "Ultimate"
                      }
                    ]
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
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "DanHeng_Passive_BeginTargetEnhanceCD[<span class=\"descriptionNumberColor\">Superiority of Reach</span>]",
                          "duration": {
                            "operator": "Variables[0] (2) || Constants[0] (1) || SUB || RETURN",
                            "displayLines": "(2 - 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              2
                            ]
                          },
                          "immediateEffect": true
                        },
                        {
                          "name": "Update Displayed Energy Bar",
                          "assignState": "True",
                          "priorState": "CoolDown",
                          "bar#": 1,
                          "cooldown": {
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
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "DanHeng_Passive_BeginTargetEnhanceCD[<span class=\"descriptionNumberColor\">Superiority of Reach</span>]",
                          "duration": {
                            "operator": "Variables[0] (2) || RETURN",
                            "displayLines": "2",
                            "constants": [],
                            "variables": [
                              2
                            ]
                          },
                          "immediateEffect": true
                        },
                        {
                          "name": "Update Displayed Energy Bar",
                          "assignState": "True",
                          "priorState": "CoolDown",
                          "bar#": 1,
                          "cooldown": {
                            "operator": "Variables[0] (2) || RETURN",
                            "displayLines": "2",
                            "constants": [],
                            "variables": [
                              2
                            ]
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
                      "modifier": "DanHeng_Passive_SelfBeingTargetEnhance[<span class=\"descriptionNumberColor\">Superiority of Reach</span>]"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
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
                  "passed": [
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
                          "modifier": "DanHeng_Passive_BeginTargetEnhanceCD[<span class=\"descriptionNumberColor\">Superiority of Reach</span>]",
                          "duration": {
                            "operator": "Variables[0] (2) || Constants[0] (1) || SUB || RETURN",
                            "displayLines": "(2 - 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              2
                            ]
                          }
                        },
                        {
                          "name": "Update Displayed Energy Bar",
                          "assignState": "True",
                          "priorState": "CoolDown",
                          "bar#": 1,
                          "cooldown": {
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
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "DanHeng_Passive_BeginTargetEnhanceCD[<span class=\"descriptionNumberColor\">Superiority of Reach</span>]",
                          "duration": {
                            "operator": "Variables[0] (2) || RETURN",
                            "displayLines": "2",
                            "constants": [],
                            "variables": [
                              2
                            ]
                          }
                        },
                        {
                          "name": "Update Displayed Energy Bar",
                          "assignState": "True",
                          "priorState": "CoolDown",
                          "bar#": 1,
                          "cooldown": {
                            "operator": "Variables[0] (2) || RETURN",
                            "displayLines": "2",
                            "constants": [],
                            "variables": [
                              2
                            ]
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
                      "modifier": "DanHeng_Passive_SelfBeingTargetEnhance[<span class=\"descriptionNumberColor\">Superiority of Reach</span>]"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "DanHeng_PassivePene"
          ],
          "latentQueue": [],
          "description": "Wind RES PEN +<span class=\"descriptionNumberColor\">DanHeng_PassivePene</span>.",
          "type": "Buff",
          "effectName": "Wind RES PEN",
          "statusName": "Superiority of Reach"
        },
        {
          "name": "Modifier Construction",
          "for": "DanHeng_Passive_BeginTargetEnhanceCD[<span class=\"descriptionNumberColor\">Superiority of Reach</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "DanHeng_Passive_BeginTargetEnhance[<span class=\"descriptionNumberColor\">Superiority of Reach</span>]"
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "assignState": "True",
                  "priorState": "Normal",
                  "bar#": 1,
                  "cooldown": 0
                }
              ]
            },
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "LifeTime",
                  "variableName": "DanHeng_00_Passive_BeginTargetEnhance_CD",
                  "modifierName": "DanHeng_Passive_BeginTargetEnhanceCD[<span class=\"descriptionNumberColor\">Superiority of Reach</span>]",
                  "multiplier": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DanHeng_00_Passive_BeginTargetEnhance_CD",
                    "compareType": ">=",
                    "value2": 0.5
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "assignState": "True",
                      "priorState": "CoolDown",
                      "bar#": 1,
                      "cooldown": {
                        "operator": "Variables[0] (DanHeng_00_Passive_BeginTargetEnhance_CD) || RETURN",
                        "displayLines": "DanHeng_00_Passive_BeginTargetEnhance_CD",
                        "constants": [],
                        "variables": [
                          "DanHeng_00_Passive_BeginTargetEnhance_CD"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "The effect of Talent \"Superiority of Reach\" cannot be triggered.",
          "type": "Other",
          "statusName": "Superiority of Reach",
          "duration": 2
        },
        {
          "name": "Modifier Construction",
          "for": "DanHeng_Passive_BeginTargetEnhance[<span class=\"descriptionNumberColor\">Superiority of Reach</span>]",
          "stackType": "ReplaceByCaster",
          "stackData": [],
          "latentQueue": [],
          "description": "The effect of Talent \"Superiority of Reach\" can now be triggered.",
          "type": "Other",
          "statusName": "Superiority of Reach"
        }
      ],
      "references": []
    }
  }
}