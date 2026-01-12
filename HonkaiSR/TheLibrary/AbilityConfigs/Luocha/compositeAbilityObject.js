const compositeAbilityObject = {
  "fullCharacterName": "Luocha",
  "trimCharacterName": "Luocha",
  "abilityList": [
    "Luocha_Luocha_Trace03",
    "Luocha_Luocha_TechniqueInLevel",
    "Luocha_Luocha_Passive01_InsertAbility",
    "Luocha_Luocha_Ability02_InsertAbility",
    "Luocha_Luocha_PassiveAbility01",
    "Luocha_Luocha_Ability03_Part02",
    "Luocha_Luocha_Ability03_Part01",
    "Luocha_Luocha_Ability03_EnterReady",
    "Luocha_Luocha_Ability02_Part02",
    "Luocha_Luocha_Ability02_Part01",
    "Luocha_Luocha_Ability01_Part02",
    "Luocha_Luocha_Ability01_Part01",
    "Luocha_Modifiers"
  ],
  "abilityObject": {
    "Luocha_Luocha_Trace03": {
      "fileName": "Luocha_Luocha_Trace03",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "M_Luocha_Trace03",
          "valuePerStack": {
            "MDF_Resistance": {
              "operator": "Variables[0] (0.7) || RETURN",
              "displayLines": "0.7",
              "constants": [],
              "variables": [
                0.7
              ]
            }
          }
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "M_Luocha_Trace03",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Resistance",
                  "target": "Caster",
                  "statName": "STAT_CTRL",
                  "value": {
                    "operator": "Variables[0] (MDF_Resistance) || RETURN",
                    "displayLines": "MDF_Resistance",
                    "constants": [],
                    "variables": [
                      "MDF_Resistance"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_Resistance"
          ],
          "latentQueue": []
        }
      ]
    },
    "Luocha_Luocha_TechniqueInLevel": {
      "fileName": "Luocha_Luocha_TechniqueInLevel",
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
          "modifier": "Technique_Luocha_Modifier"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Technique_Luocha_Modifier",
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
                      "modifier": "Luocha_Passive01Modifier[<span class=\"descriptionNumberColor\">Abyss Flower</span>]",
                      "valuePerStack": {
                        "MDF_PassiveLayer": {
                          "operator": "Variables[0] (2) || RETURN",
                          "displayLines": "2",
                          "constants": [],
                          "variables": [
                            2
                          ]
                        }
                      },
                      "addStacksPerTrigger": 2
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
    "Luocha_Luocha_Passive01_InsertAbility": {
      "fileName": "Luocha_Luocha_Passive01_InsertAbility",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "_insertCheck_",
          "value": 0
        },
        {
          "name": "Update Displayed Energy Bar",
          "priorState": "Active",
          "bar#": 1
        },
        {
          "name": "UI Display Event",
          "popUpText": "Cycle of Life"
        },
        "Deleted bullshit",
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Luocha_Passive01_HealHPArea",
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
              "operator": "Variables[0] (0.18) || RETURN",
              "displayLines": "0.18",
              "constants": [],
              "variables": [
                0.18
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
            "MDF_PropertyHealValue": {
              "operator": "Variables[0] (240) || RETURN",
              "displayLines": "240",
              "constants": [],
              "variables": [
                240
              ]
            },
            "MDF_PropertyValueTraceB2": {
              "operator": "Variables[0] (0.07) || RETURN",
              "displayLines": "0.07",
              "constants": [],
              "variables": [
                0.07
              ]
            },
            "MDF_PropertyHealValueTraceB2": {
              "operator": "Variables[0] (93) || RETURN",
              "displayLines": "93",
              "constants": [],
              "variables": [
                93
              ]
            },
            "MDF_PropertyRatio_Eidolon1": {
              "operator": "Variables[0] (0.2) || RETURN",
              "displayLines": "0.2",
              "constants": [],
              "variables": [
                0.2
              ]
            },
            "MDF_LifeTime": {
              "operator": "Variables[0] (2) || RETURN",
              "displayLines": "2",
              "constants": [],
              "variables": [
                2
              ]
            }
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": "Caster",
          "modifier": "Luocha_Passive01Modifier[<span class=\"descriptionNumberColor\">Abyss Flower</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": "Caster",
          "modifier": "Luocha_Passive01_InsertMark"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Luocha_Eidolon4_Fatigue[<span class=\"descriptionNumberColor\">Weaken</span>]",
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
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Weaken%</span>&nbsp;",
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
          "description": "Deals <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span> less DMG.",
          "type": "Debuff",
          "effectName": "Weaken",
          "statusName": "Weaken"
        },
        {
          "name": "Modifier Construction",
          "for": "Luocha_Passive01_HealHPSelf[<span class=\"descriptionNumberColor\">Cycle of Life</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Heal",
                  "target": "Owner of this Modifier",
                  "healPercent": {
                    "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                    "displayLines": "MDF_PropertyValue",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  },
                  "healFlat": {
                    "operator": "Variables[0] (MDF_PropertyHealValue) || RETURN",
                    "displayLines": "MDF_PropertyHealValue",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyHealValue"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Sanctified"
                  },
                  "passed": [
                    {
                      "name": "Heal",
                      "target": "[ALL TEAMMATES OF] Owner of this Modifier",
                      "healPercent": {
                        "operator": "Variables[0] (MDF_PropertyValueSkillTreeB2) || RETURN",
                        "displayLines": "MDF_PropertyValueSkillTreeB2",
                        "constants": [],
                        "variables": [
                          "MDF_PropertyValueSkillTreeB2"
                        ]
                      },
                      "healFlat": {
                        "operator": "Variables[0] (MDF_PropertyHealValueSkillTreeB2) || RETURN",
                        "displayLines": "MDF_PropertyHealValueSkillTreeB2",
                        "constants": [],
                        "variables": [
                          "MDF_PropertyHealValueSkillTreeB2"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "description": "After using an attack on an enemy, restores HP to self.",
          "type": "Other",
          "statusName": "Cycle of Life"
        },
        {
          "name": "Modifier Construction",
          "for": "Luocha_Passive01_HealHP[<span class=\"descriptionNumberColor\">Cycle of Life</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Heal",
                  "target": "Owner of this Modifier",
                  "healPercent": {
                    "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                    "displayLines": "MDF_PropertyValue",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  },
                  "healFlat": {
                    "operator": "Variables[0] (MDF_PropertyHealValue) || RETURN",
                    "displayLines": "MDF_PropertyHealValue",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyHealValue"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Sanctified"
                  },
                  "passed": [
                    {
                      "name": "Heal",
                      "target": "[ALL TEAMMATES OF] Owner of this Modifier",
                      "healPercent": {
                        "operator": "Variables[0] (MDF_PropertyValueSkillTreeB2) || RETURN",
                        "displayLines": "MDF_PropertyValueSkillTreeB2",
                        "constants": [],
                        "variables": [
                          "MDF_PropertyValueSkillTreeB2"
                        ]
                      },
                      "healFlat": {
                        "operator": "Variables[0] (MDF_PropertyHealValueSkillTreeB2) || RETURN",
                        "displayLines": "MDF_PropertyHealValueSkillTreeB2",
                        "constants": [],
                        "variables": [
                          "MDF_PropertyHealValueSkillTreeB2"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "description": "After using an attack on an enemy, restores HP to self.",
          "type": "Other",
          "statusName": "Cycle of Life"
        },
        {
          "name": "Modifier Construction",
          "for": "Luocha_Passive01_HealHPArea",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 0,
                  "maximum": 2,
                  "priorState": "Normal",
                  "bar#": 2
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 0,
                  "maximum": 2,
                  "priorState": "Normal",
                  "bar#": 2
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyValue",
            "MDF_PropertyRatio",
            "MDF_PropertyHealValue",
            "MDF_PropertyValueSkillTreeB2",
            "MDF_PropertyHealValueSkillTreeB2",
            "MDF_PropertyRatio_Rank01",
            "MDF_LifeTime"
          ],
          "latentQueue": [
            "_insertCheck_"
          ],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": "Caster",
              "modifier": "Luocha_Passive01_HealHPSelf[<span class=\"descriptionNumberColor\">Cycle of Life</span>]",
              "duration": {
                "operator": "Variables[0] (MDF_LifeTime) || RETURN",
                "displayLines": "MDF_LifeTime",
                "constants": [],
                "variables": [
                  "MDF_LifeTime"
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                  "displayLines": "MDF_PropertyValue",
                  "constants": [],
                  "variables": [
                    "MDF_PropertyValue"
                  ]
                },
                "MDF_PropertyHealValue": {
                  "operator": "Variables[0] (MDF_PropertyHealValue) || RETURN",
                  "displayLines": "MDF_PropertyHealValue",
                  "constants": [],
                  "variables": [
                    "MDF_PropertyHealValue"
                  ]
                },
                "MDF_PropertyValueTraceB2": {
                  "operator": "Variables[0] (MDF_PropertyValueSkillTreeB2) || RETURN",
                  "displayLines": "MDF_PropertyValueSkillTreeB2",
                  "constants": [],
                  "variables": [
                    "MDF_PropertyValueSkillTreeB2"
                  ]
                },
                "MDF_PropertyHealValueTraceB2": {
                  "operator": "Variables[0] (MDF_PropertyHealValueSkillTreeB2) || RETURN",
                  "displayLines": "MDF_PropertyHealValueSkillTreeB2",
                  "constants": [],
                  "variables": [
                    "MDF_PropertyHealValueSkillTreeB2"
                  ]
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": "All Teammates + Unselectable (Excluding Owner)",
              "modifier": "Luocha_Passive01_HealHP[<span class=\"descriptionNumberColor\">Cycle of Life</span>]",
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
                "MDF_PropertyHealValue": {
                  "operator": "Variables[0] (MDF_PropertyHealValue) || RETURN",
                  "displayLines": "MDF_PropertyHealValue",
                  "constants": [],
                  "variables": [
                    "MDF_PropertyHealValue"
                  ]
                },
                "MDF_PropertyValueTraceB2": {
                  "operator": "Variables[0] (MDF_PropertyValueSkillTreeB2) || RETURN",
                  "displayLines": "MDF_PropertyValueSkillTreeB2",
                  "constants": [],
                  "variables": [
                    "MDF_PropertyValueSkillTreeB2"
                  ]
                },
                "MDF_PropertyHealValueTraceB2": {
                  "operator": "Variables[0] (MDF_PropertyHealValueSkillTreeB2) || RETURN",
                  "displayLines": "MDF_PropertyHealValueSkillTreeB2",
                  "constants": [],
                  "variables": [
                    "MDF_PropertyHealValueSkillTreeB2"
                  ]
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": "All Team Members(In Context, with Untargetable)",
              "modifier": "Luocha_Eidolon1_ATKUp[<span class=\"descriptionNumberColor\">Ablution of the Quick</span>]",
              "haloStatus": true,
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 1
              },
              "valuePerStack": {
                "MDF_PropertyRatio": {
                  "operator": "Variables[0] (MDF_PropertyRatio_Rank01) || RETURN",
                  "displayLines": "MDF_PropertyRatio_Rank01",
                  "constants": [],
                  "variables": [
                    "MDF_PropertyRatio_Rank01"
                  ]
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": "All Hostile Entities (AOE)(ALL)",
              "modifier": "Luocha_Eidolon4_Fatigue[<span class=\"descriptionNumberColor\">Weaken</span>]",
              "haloStatus": true,
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 4
              },
              "valuePerStack": {
                "MDF_PropertyRatio": {
                  "operator": "Variables[0] (MDF_PropertyRatio) || RETURN",
                  "displayLines": "MDF_PropertyRatio",
                  "constants": [],
                  "variables": [
                    "MDF_PropertyRatio"
                  ]
                }
              }
            }
          ]
        }
      ]
    },
    "Luocha_Luocha_Ability02_InsertAbility": {
      "fileName": "Luocha_Luocha_Ability02_InsertAbility",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "IsInserAbilityTrigger",
          "value": 1
        },
        {
          "name": "Find New Target",
          "from": [
            {
              "name": "Join Targets",
              "TargetList": [
                {
                  "name": "Target List",
                  "target": "All Teammates (Excluding Owner)"
                },
                {
                  "name": "Target List",
                  "target": "Caster"
                }
              ]
            },
            {
              "name": "Target Filter",
              "conditions": {
                "name": "Is Entity a Battle Event/Summon",
                "target": "Use Prior Target(s) Defined",
                "invertCondition": true
              }
            }
          ],
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Target Has Lowest/Highest Value",
                "target": "Use Prior Target(s) Defined",
                "partOf": [
                  {
                    "name": "Join Targets",
                    "TargetList": [
                      {
                        "name": "Target List",
                        "target": "All Teammates (Excluding Owner)"
                      },
                      {
                        "name": "Target List",
                        "target": "Caster"
                      }
                    ]
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Is Entity a Battle Event/Summon",
                      "target": "Use Prior Target(s) Defined",
                      "invertCondition": true
                    }
                  }
                ],
                "compareValue": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent%</span>&nbsp;",
                "minOrMax": "Min"
              },
              {
                "name": "Compare: Variable",
                "target": "Use Prior Target(s) Defined",
                "value1": "CurrentHP",
                "compareType": ">",
                "value2": 0
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": "Use Prior Target(s) Defined",
                "value1": "CurrentHP%",
                "compareType": "<=",
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
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "Luocha_Passive01_HealHPCD[<span class=\"descriptionNumberColor\">Prayer of Abyss Flower</span>]",
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
                  "name": "Remove Events/Bonuses",
                  "to": "All Team Members(In Context, with Untargetable)",
                  "modifier": "Luocha_InsertAbility02_Mark"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Caster",
                  "modifier": "Luocha_InsertAbility02_Retarget"
                },
                "Deleted bullshit",
                {
                  "name": "Trigger Ability",
                  "from": "Caster",
                  "inherentTarget": "Use Prior Target(s) Defined",
                  "ability": "Luocha_Ability02_Part02",
                  "isTrigger": true
                }
              ],
              "failed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "All Team Members(In Context, with Untargetable)",
                  "modifier": "Luocha_InsertAbility02_Mark"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Caster",
                  "modifier": "Luocha_InsertAbility02_Retarget"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "IsInserAbilityTrigger",
                  "value": 0
                }
              ]
            }
          ]
        }
      ],
      "onAbort": [
        {
          "name": "Remove Events/Bonuses",
          "to": "All Team Members(In Context, with Untargetable)",
          "modifier": "Luocha_InsertAbility02_Mark"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": "Caster",
          "modifier": "Luocha_InsertAbility02_Retarget"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "IsInserAbilityTrigger",
          "value": 0
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Flag",
                "target": "Caster",
                "flagName": "STAT_CTRL"
              },
              {
                "name": "Has Flag",
                "target": "Caster",
                "flagName": "DisableAction"
              }
            ]
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": "Caster",
                "modifier": "Luocha_Passive01_InsertMark"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Caster",
                  "modifier": "Luocha_Passive01_InsertMark"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "Luocha_Passive01_DisableActionInsertMark"
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "Luocha_Luocha_PassiveAbility01": {
      "fileName": "Luocha_Luocha_PassiveAbility01",
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
          "to": "Caster",
          "modifier": "Luocha_Passive01_QuickHealthHP",
          "valuePerStack": {
            "MDF_HPRatio": {
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
          "name": "Update Displayed Energy Bar",
          "value": 0,
          "maximum": 2,
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 2
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Luocha_InsertAbility02_Mark",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Luocha_Ability02_InsertAbility",
                  "abilitySource": "Caster",
                  "abilityTarget": "Owner of this Modifier",
                  "priorityTag": "AvatarHealOthers",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "STAT_CTRL",
                    "DisableAction"
                  ],
                  "allowAbilityTriggers": false
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Caster",
                  "modifier": "Luocha_InsertAbility02_Retarget"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Luocha_InsertAbility02_Retarget",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": [
                    {
                      "name": "Join Targets",
                      "TargetList": [
                        {
                          "name": "Target List",
                          "target": "All Teammates (Excluding Owner)"
                        },
                        {
                          "name": "Target List",
                          "target": "Caster"
                        }
                      ]
                    },
                    {
                      "name": "Target Filter",
                      "conditions": {
                        "name": "Is Entity a Battle Event/Summon",
                        "target": "Use Prior Target(s) Defined",
                        "invertCondition": true
                      }
                    }
                  ],
                  "maxTargets": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Target Has Lowest/Highest Value",
                        "target": "Use Prior Target(s) Defined",
                        "partOf": [
                          {
                            "name": "Join Targets",
                            "TargetList": [
                              {
                                "name": "Target List",
                                "target": "All Teammates (Excluding Owner)"
                              },
                              {
                                "name": "Target List",
                                "target": "Caster"
                              }
                            ]
                          },
                          {
                            "name": "Target Filter",
                            "conditions": {
                              "name": "Is Entity a Battle Event/Summon",
                              "target": "Use Prior Target(s) Defined",
                              "invertCondition": true
                            }
                          }
                        ],
                        "compareValue": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent%</span>&nbsp;",
                        "minOrMax": "Min"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": "Use Prior Target(s) Defined",
                        "value1": "CurrentHP",
                        "compareType": ">",
                        "value2": 0
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "Luocha_InsertAbility02_Mark"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Luocha_Passive01_QuickHealthHP",
          "execute": [
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
                        "name": "Is Entity a Battle Event/Summon",
                        "target": "Use Prior Target(s) Defined",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "NOT",
                        "condition": {
                          "name": "Has Modifier",
                          "target": "Caster",
                          "modifier": "Luocha_Passive01_HealHPCD[<span class=\"descriptionNumberColor\">Prayer of Abyss Flower</span>]"
                        }
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "Has Flag",
                                "target": "Caster",
                                "flagName": "STAT_CTRL"
                              },
                              {
                                "name": "Has Flag",
                                "target": "Caster",
                                "flagName": "DisableAction"
                              }
                            ]
                          },
                          "failed": [
                            {
                              "name": "Find New Target",
                              "from": [
                                {
                                  "name": "Join Targets",
                                  "TargetList": [
                                    {
                                      "name": "Target List",
                                      "target": "All Teammates (Excluding Owner)"
                                    },
                                    {
                                      "name": "Target List",
                                      "target": "Caster"
                                    }
                                  ]
                                },
                                {
                                  "name": "Target Filter",
                                  "conditions": {
                                    "name": "Is Entity a Battle Event/Summon",
                                    "target": "Use Prior Target(s) Defined",
                                    "invertCondition": true
                                  }
                                }
                              ],
                              "searchRandom": true,
                              "maxTargets": 1,
                              "conditions": {
                                "name": "AND",
                                "conditionList": [
                                  {
                                    "name": "Target Has Lowest/Highest Value",
                                    "target": "Use Prior Target(s) Defined",
                                    "partOf": [
                                      {
                                        "name": "Join Targets",
                                        "TargetList": [
                                          {
                                            "name": "Target List",
                                            "target": "All Teammates (Excluding Owner)"
                                          },
                                          {
                                            "name": "Target List",
                                            "target": "Caster"
                                          }
                                        ]
                                      },
                                      {
                                        "name": "Target Filter",
                                        "conditions": {
                                          "name": "Is Entity a Battle Event/Summon",
                                          "target": "Use Prior Target(s) Defined",
                                          "invertCondition": true
                                        }
                                      }
                                    ],
                                    "compareValue": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent%</span>&nbsp;",
                                    "minOrMax": "Min"
                                  },
                                  {
                                    "name": "Compare: Variable",
                                    "target": "Use Prior Target(s) Defined",
                                    "value1": "CurrentHP",
                                    "compareType": ">",
                                    "value2": 0
                                  },
                                  {
                                    "name": "Is Entity a Battle Event/Summon",
                                    "target": "Use Prior Target(s) Defined",
                                    "invertCondition": true
                                  }
                                ]
                              },
                              "ifTargetFound": [
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "target": "Use Prior Target(s) Defined",
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
                                      "to": "Caster",
                                      "modifier": "Luocha_InsertAbility02_Retarget"
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
            },
            {
              "eventTrigger": "Injected Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Flag",
                        "target": "Caster",
                        "flagName": "STAT_CTRL"
                      },
                      {
                        "name": "Has Flag",
                        "target": "Caster",
                        "flagName": "DisableAction"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "All Team Members(In Context, with Untargetable)",
                      "modifier": "Luocha_InsertAbility02_Mark"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "All Team Members(In Context, with Untargetable)",
                      "modifier": "Luocha_InsertAbility02_Retarget"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "IsInserAbilityTrigger",
                      "value": 0
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": "Caster",
                        "modifier": "Luocha_Passive01_InsertMark"
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": "Caster",
                          "modifier": "Luocha_Passive01_InsertMark"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Caster",
                          "modifier": "Luocha_Passive01_DisableActionInsertMark"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_HPRatio"
          ],
          "latentQueue": []
        }
      ]
    },
    "Luocha_Luocha_Ability03_Part02": {
      "fileName": "Luocha_Luocha_Ability03_Part02",
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
              "name": "IF",
              "conditions": {
                "name": "Random Chance",
                "chance": {
                  "operator": "Variables[0] (1) || RETURN",
                  "displayLines": "1",
                  "constants": [],
                  "variables": [
                    1
                  ]
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "All Hostile Entities (AOE)",
                  "modifier": "Luocha_Eidolon6_AllDamageTypeResistance[<span class=\"descriptionNumberColor\">Reunion With the Dust</span>]",
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
        },
        {
          "name": "Dispel Debuffs",
          "target": "All Hostile Entities (AOE)",
          "typeOverride": "Buff",
          "dispelCount": {
            "operator": "Variables[0] (1) || RETURN",
            "displayLines": "1",
            "constants": [],
            "variables": [
              1
            ]
          },
          "dispelOrder": "LastAdded",
          "counterKey": "BuffNumber"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": "Caster",
            "modifier": "Luocha_Passive01_HealHPArea"
          },
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "Luocha_Passive01Modifier[<span class=\"descriptionNumberColor\">Abyss Flower</span>]",
              "valuePerStack": {
                "MDF_PassiveLayer": {
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
          "name": "ATK Scaling DMG",
          "target": "All Hostile Entities (AOE)",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (2) || RETURN",
              "displayLines": "2",
              "constants": [],
              "variables": [
                2
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
          }
        },
        "Trigger: Attack End",
        "Trigger: Skip Death Handling",
        {
          "name": "Define Custom Variable",
          "variableName": "BuffNumber",
          "value": 0
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Luocha_Luocha_Ability03_Part01": {
      "fileName": "Luocha_Luocha_Ability03_Part01",
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
          "ability": "Luocha_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Luocha_Luocha_Ability03_EnterReady": {
      "fileName": "Luocha_Luocha_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Luocha_Luocha_Ability02_Part02": {
      "fileName": "Luocha_Luocha_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Cleansing Revival"
          },
          "passed": [
            {
              "name": "Dispel Debuffs",
              "target": "Single Target (Primary)",
              "dispelCount": {
                "operator": "Variables[0] (1) || RETURN",
                "displayLines": "1",
                "constants": [],
                "variables": [
                  1
                ]
              },
              "dispelOrder": "LastAdded"
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
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": "Single Target (Primary)",
                "value1": "CurrentHP%",
                "compareType": "<",
                "value2": 0.5
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "Luocha_Ability02_AddHealRatio",
                  "valuePerStack": {
                    "MDF_AddHealRatio": {
                      "operator": "Variables[0] (0.3) || RETURN",
                      "displayLines": "0.3",
                      "constants": [],
                      "variables": [
                        0.3
                      ]
                    }
                  }
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Single Target (Primary)",
                  "modifier": "Luocha_Ability02_Shield[<span class=\"descriptionNumberColor\">Shield</span>]",
                  "duration": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "valuePerStack": {
                    "MDF_ShieldPercentage": {
                      "operator": "Variables[0] (0.18) || RETURN",
                      "displayLines": "0.18",
                      "constants": [],
                      "variables": [
                        0.18
                      ]
                    },
                    "MDF_ShieldValue": {
                      "operator": "Variables[0] (240) || RETURN",
                      "displayLines": "240",
                      "constants": [],
                      "variables": [
                        240
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Heal",
          "target": "Single Target (Primary)",
          "healPercent": {
            "operator": "Variables[0] (0.6) || RETURN",
            "displayLines": "0.6",
            "constants": [],
            "variables": [
              0.6
            ]
          },
          "healFlat": {
            "operator": "Variables[0] (800) || RETURN",
            "displayLines": "800",
            "constants": [],
            "variables": [
              800
            ]
          }
        },
        {
          "name": "Update Energy",
          "on": "Caster",
          "valuePercent": 1,
          "ofAbilitySplit": true,
          "isFixed": "* ERR"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Current Action Holder Is",
            "target": "Single Target (Primary)"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": "Caster",
            "modifier": "Luocha_Passive01_HealHPArea"
          },
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "Luocha_Passive01Modifier[<span class=\"descriptionNumberColor\">Abyss Flower</span>]",
              "valuePerStack": {
                "MDF_PassiveLayer": {
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
            "name": "Compare: Variable",
            "value1": "IsInserAbilityTrigger",
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            "Trigger: Ability End"
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "IsInserAbilityTrigger",
              "value": 0
            }
          ]
        }
      ],
      "references": []
    },
    "Luocha_Luocha_Ability02_Part01": {
      "fileName": "Luocha_Luocha_Ability02_Part01",
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
          "inherentTarget": "Single Target (Primary)",
          "ability": "Luocha_Ability02_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Luocha_Luocha_Ability01_Part02": {
      "fileName": "Luocha_Luocha_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
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
          "target": "Single Target (Primary)",
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
          "target": "Single Target (Primary)",
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
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Luocha_Luocha_Ability01_Part01": {
      "fileName": "Luocha_Luocha_Ability01_Part01",
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
          "ability": "Luocha_Ability01_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Luocha_Modifiers": {
      "fileName": "Luocha_Modifiers",
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
          "for": "Luocha_Eidolon6_AllDamageTypeResistance[<span class=\"descriptionNumberColor\">Reunion With the Dust</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAll</span>&nbsp;",
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
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyRatio"
          ],
          "latentQueue": [],
          "description": "All-Type DMG RES -<span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>.",
          "type": "Debuff",
          "effectName": "All-Type RES Reduction",
          "statusName": "Reunion With the Dust"
        },
        {
          "name": "Modifier Construction",
          "for": "Luocha_Eidolon1_ATKUp[<span class=\"descriptionNumberColor\">Ablution of the Quick</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
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
          "latentQueue": [
            "_insertCheck_"
          ],
          "description": "ATK +<span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>.",
          "type": "Buff",
          "effectName": "ATK Boost",
          "statusName": "Ablution of the Quick"
        },
        {
          "name": "Modifier Construction",
          "for": "Luocha_Passive01_InsertMark",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Caster",
                  "modifier": "Luocha_Passive01_DisableActionInsertMark"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_insertCheck_",
                  "value": 1
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Luocha_Passive01_InsertAbility",
                  "abilitySource": "Caster",
                  "priorityTag": "AvatarBuffSelf",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "STAT_CTRL",
                    "DisableAction"
                  ],
                  "allowAbilityTriggers": false
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 2,
                  "maximum": 2,
                  "assignState": "True",
                  "priorState": "Normal",
                  "bar#": 2
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Type Was",
                        "statusType": "Debuff"
                      },
                      {
                        "name": "Has Flag",
                        "target": "Caster",
                        "flagName": "STAT_CTRL",
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_insertCheck_",
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
                        "type": "AbilityOwnerInsertCount",
                        "typeValue": 1
                      },
                      "abilityName": "Luocha_Passive01_InsertAbility",
                      "priorityTag": "AvatarBuffSelf",
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
          "name": "Modifier Construction",
          "for": "Luocha_Passive01Modifier[<span class=\"descriptionNumberColor\">Abyss Flower</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "HeiyuanLayer",
                  "multiplier": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "HeiyuanLayer",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (MDF_PassiveLayer) || RETURN",
                      "displayLines": "MDF_PassiveLayer",
                      "constants": [],
                      "variables": [
                        "MDF_PassiveLayer"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "Luocha_Passive01_InsertMark"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (HeiyuanLayer) || RETURN",
                        "displayLines": "HeiyuanLayer",
                        "constants": [],
                        "variables": [
                          "HeiyuanLayer"
                        ]
                      },
                      "bar#": 2
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PassiveLayer"
          ],
          "latentQueue": [],
          "description": "When the Abyss Flower is fully stacked, Luocha can consume all the stacks to deploy a Zone against the enemy.",
          "type": "Other",
          "statusName": "Abyss Flower",
          "stackLimit": 2,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "Luocha_Passive01_HealHPCD[<span class=\"descriptionNumberColor\">Prayer of Abyss Flower</span>]",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "stackData": [],
          "latentQueue": [
            "IsInserAbilityTrigger"
          ],
          "description": "Skill effect auto-trigger is on cooldown.",
          "type": "Other",
          "statusName": "Prayer of Abyss Flower",
          "duration": 1
        },
        {
          "name": "Modifier Construction",
          "for": "Luocha_Ability02_Shield[<span class=\"descriptionNumberColor\">Shield</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "Shield"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Set Shield State/Value"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Shield",
                  "target": "Owner of this Modifier"
                },
                {
                  "name": "Set Shield State/Value",
                  "reset": true
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Create Shield",
                  "target": "Owner of this Modifier",
                  "value": {
                    "operator": "Variables[0] (MDF_ShieldValue) || RETURN",
                    "displayLines": "MDF_ShieldValue",
                    "constants": [],
                    "variables": [
                      "MDF_ShieldValue"
                    ]
                  },
                  "valuePercent": {
                    "operator": "Variables[0] (MDF_ShieldPercentage) || RETURN",
                    "displayLines": "MDF_ShieldPercentage",
                    "constants": [],
                    "variables": [
                      "MDF_ShieldPercentage"
                    ]
                  },
                  "formula": "ATK Scaling (Shield)"
                }
              ]
            }
          ],
          "stackData": [
            "MDF_ShieldPercentage",
            "MDF_ShieldValue"
          ],
          "latentQueue": [],
          "description": "Gains a Shield that absorbs DMG. While the Shield persists, enemy attacks will not reduce Shielded characters' HP.",
          "type": "Buff",
          "effectName": "Shield",
          "statusName": "Shield"
        },
        {
          "name": "Modifier Construction",
          "for": "Luocha_Ability02_AddHealRatio",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Heal Target Start [Owner]",
              "execute": [
                {
                  "name": "Adjust Target Healing Stats",
                  "on": "Healer",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HealingOutgoingSUM</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AddHealRatio) || RETURN",
                    "displayLines": "MDF_AddHealRatio",
                    "constants": [],
                    "variables": [
                      "MDF_AddHealRatio"
                    ]
                  }
                },
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [
            "MDF_AddHealRatio"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Luocha_Passive01_DisableActionInsertMark",
          "execute": [
            {
              "eventTrigger": "When Losing Modifier [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": "Use Prior Target(s) Defined",
                    "target2": "Caster"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Has Flag",
                            "target": "Caster",
                            "flagName": "STAT_CTRL"
                          },
                          {
                            "name": "Has Flag",
                            "target": "Caster",
                            "flagName": "DisableAction"
                          }
                        ]
                      },
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Caster",
                          "modifier": "Luocha_Passive01_InsertMark"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "IsInserAbilityTrigger"
          ]
        }
      ],
      "references": []
    }
  }
}