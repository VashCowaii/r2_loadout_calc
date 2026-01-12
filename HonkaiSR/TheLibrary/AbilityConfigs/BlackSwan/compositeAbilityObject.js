const compositeAbilityObject = {
  "fullCharacterName": "Black Swan",
  "trimCharacterName": "BlackSwan",
  "abilityList": [
    "BlackSwan_BlackSwan_Eidolon6",
    "BlackSwan_BlackSwan_Eidolon2",
    "BlackSwan_BlackSwan_Eidolon1",
    "BlackSwan_BlackSwan_Trace03",
    "BlackSwan_BlackSwan_Trace02",
    "BlackSwan_BlackSwan_TechniqueInLevel_Insert",
    "BlackSwan_BlackSwan_TechniqueInLevel",
    "BlackSwan_BlackSwan_PassiveAbility01",
    "BlackSwan_BlackSwan_Ability03_Part02",
    "BlackSwan_BlackSwan_Ability03_Part01",
    "BlackSwan_BlackSwan_Ability03_Cutin",
    "BlackSwan_BlackSwan_Ability02_Part02",
    "BlackSwan_BlackSwan_Ability02_Part01",
    "BlackSwan_BlackSwan_Ability01_Part02",
    "BlackSwan_BlackSwan_Ability01_Part01",
    "BlackSwan_Modifiers"
  ],
  "abilityObject": {
    "BlackSwan_BlackSwan_Eidolon6": {
      "fileName": "BlackSwan_BlackSwan_Eidolon6",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "BlackSwan_Eidolon6"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "M_BlackSwan_Eidolon6_AddDOTFlag"
        },
        {
          "name": "Modifier Construction",
          "for": "BlackSwan_Eidolon6_SubOnEnemy",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_count",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked Start [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of",
                        "of": "All Teammates + Unselectable (Excluding Owner) [INCLUDE battle events]",
                        "target": "Use Prior Target(s) Defined",
                        "mustBeAlive2": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_count",
                        "compareType": "<=",
                        "value2": 0,
                        "contextScope": "ContextModifier"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_count",
                      "value": 1
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "M_BlackSwan_Eidolon6_AddDOTFlag"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack Action Completed [Anyone]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_count",
                  "value": 0
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "BlackSwan_Eidolon6",
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
                      "modifier": "BlackSwan_Eidolon6_SubOnEnemy"
                    }
                  ]
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
                    "modifier": "M_BlackSwan_Eidolon6_AddDOTFlag"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "M_BlackSwan_Eidolon6_AddDOTFlag"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Random Chance",
                        "chance": {
                          "operator": "Variables[0] (Rank06_Chance) || RETURN",
                          "displayLines": "Rank06_Chance",
                          "constants": [],
                          "variables": [
                            "Rank06_Chance"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Rank06_Weighted_Stack_Layer",
                          "value": {
                            "operator": "Constants[0] (1) || Variables[0] (Rank06_Extra_Layer) || ADD || RETURN",
                            "displayLines": "(1 + Rank06_Extra_Layer)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "Rank06_Extra_Layer"
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Rank06_Weighted_Stack_Layer",
                          "value": {
                            "operator": "Constants[0] (1) || RETURN",
                            "displayLines": "1",
                            "constants": [
                              1
                            ],
                            "variables": []
                          }
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "BlackSwan_DOT[<span class=\"descriptionNumberColor\">Arcana</span>]",
                      "baseChance": {
                        "operator": "Variables[0] (0.65) || RETURN",
                        "displayLines": "0.65",
                        "constants": [],
                        "variables": [
                          0.65
                        ]
                      },
                      "stackLimit": {
                        "operator": "Variables[0] (Max_DOT_Layer) || RETURN",
                        "displayLines": "Max_DOT_Layer",
                        "constants": [],
                        "variables": [
                          "Max_DOT_Layer"
                        ]
                      },
                      "valuePerStack": {
                        "Basic_DamagePercentage": {
                          "operator": "Variables[0] (2.4) || RETURN",
                          "displayLines": "2.4",
                          "constants": [],
                          "variables": [
                            2.4
                          ]
                        },
                        "ExtraLayer_DamagePercentage": {
                          "operator": "Variables[0] (0.12) || RETURN",
                          "displayLines": "0.12",
                          "constants": [],
                          "variables": [
                            0.12
                          ]
                        },
                        "SecondLayer": {
                          "operator": "Variables[0] (3) || RETURN",
                          "displayLines": "3",
                          "constants": [],
                          "variables": [
                            3
                          ]
                        },
                        "Spread_DamagePercentage": {
                          "operator": "Variables[0] (1.8) || RETURN",
                          "displayLines": "1.8",
                          "constants": [],
                          "variables": [
                            1.8
                          ]
                        },
                        "ThirdLayer": {
                          "operator": "Variables[0] (7) || RETURN",
                          "displayLines": "7",
                          "constants": [],
                          "variables": [
                            7
                          ]
                        },
                        "DefenceIgnore": {
                          "operator": "Variables[0] (0.2) || RETURN",
                          "displayLines": "0.2",
                          "constants": [],
                          "variables": [
                            0.2
                          ]
                        },
                        "Cast_By_Level": 0
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (Rank06_Weighted_Stack_Layer) || RETURN",
                        "displayLines": "Rank06_Weighted_Stack_Layer",
                        "constants": [],
                        "variables": [
                          "Rank06_Weighted_Stack_Layer"
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
        }
      ]
    },
    "BlackSwan_BlackSwan_Eidolon2": {
      "fileName": "BlackSwan_BlackSwan_Eidolon2",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "BlackSwan_Eidolon2"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "BlackSwan_Eidolon2",
          "execute": [
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Target Exists",
                    "target": "Use Secondary Prior Target(s) Defined"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Is Part Of Team",
                            "target": "Use Prior Target(s) Defined",
                            "team": "TeamDark"
                          },
                          {
                            "name": "NOT",
                            "condition": {
                              "name": "Is Part Of Team",
                              "target": "Use Secondary Prior Target(s) Defined",
                              "team": "TeamDark"
                            }
                          },
                          {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "Has Modifier",
                                "target": "Use Prior Target(s) Defined",
                                "modifier": "M_BlackSwan_DOTFlag",
                                "justAddedOrActive": true
                              },
                              {
                                "name": "Has Modifier",
                                "target": "Use Prior Target(s) Defined",
                                "modifier": "M_BlackSwan_P01_AddDOTFlag",
                                "justAddedOrActive": true
                              },
                              {
                                "name": "Has Modifier",
                                "target": "Use Prior Target(s) Defined",
                                "modifier": "M_BlackSwan_Tree02_AddDOTFlag",
                                "justAddedOrActive": true
                              }
                            ]
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Find New Target",
                          "from": "Use [ADJACENT TARGETS OF] Prior Target(s) Defined",
                          "searchRandom": true,
                          "maxTargets": 2,
                          "ifTargetFound": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Random Chance",
                                "chance": {
                                  "operator": "Variables[0] (Rank06_Chance) || RETURN",
                                  "displayLines": "Rank06_Chance",
                                  "constants": [],
                                  "variables": [
                                    "Rank06_Chance"
                                  ]
                                }
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "Rank06_Weighted_Stack_Layer",
                                  "value": {
                                    "operator": "Variables[0] (6) || Variables[1] (Rank06_Extra_Layer) || ADD || RETURN",
                                    "displayLines": "(6 + Rank06_Extra_Layer)",
                                    "constants": [],
                                    "variables": [
                                      6,
                                      "Rank06_Extra_Layer"
                                    ]
                                  }
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "Rank06_Weighted_Stack_Layer",
                                  "value": {
                                    "operator": "Variables[0] (6) || RETURN",
                                    "displayLines": "6",
                                    "constants": [],
                                    "variables": [
                                      6
                                    ]
                                  }
                                }
                              ]
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": "Use Prior Target(s) Defined",
                              "modifier": "BlackSwan_DOT[<span class=\"descriptionNumberColor\">Arcana</span>]",
                              "baseChance": {
                                "operator": "Variables[0] (1) || RETURN",
                                "displayLines": "1",
                                "constants": [],
                                "variables": [
                                  1
                                ]
                              },
                              "stackLimit": {
                                "operator": "Variables[0] (Max_DOT_Layer) || RETURN",
                                "displayLines": "Max_DOT_Layer",
                                "constants": [],
                                "variables": [
                                  "Max_DOT_Layer"
                                ]
                              },
                              "valuePerStack": {
                                "Basic_DamagePercentage": {
                                  "operator": "Variables[0] (2.4) || RETURN",
                                  "displayLines": "2.4",
                                  "constants": [],
                                  "variables": [
                                    2.4
                                  ]
                                },
                                "ExtraLayer_DamagePercentage": {
                                  "operator": "Variables[0] (0.12) || RETURN",
                                  "displayLines": "0.12",
                                  "constants": [],
                                  "variables": [
                                    0.12
                                  ]
                                },
                                "SecondLayer": {
                                  "operator": "Variables[0] (3) || RETURN",
                                  "displayLines": "3",
                                  "constants": [],
                                  "variables": [
                                    3
                                  ]
                                },
                                "Spread_DamagePercentage": {
                                  "operator": "Variables[0] (1.8) || RETURN",
                                  "displayLines": "1.8",
                                  "constants": [],
                                  "variables": [
                                    1.8
                                  ]
                                },
                                "ThirdLayer": {
                                  "operator": "Variables[0] (7) || RETURN",
                                  "displayLines": "7",
                                  "constants": [],
                                  "variables": [
                                    7
                                  ]
                                },
                                "DefenceIgnore": {
                                  "operator": "Variables[0] (0.2) || RETURN",
                                  "displayLines": "0.2",
                                  "constants": [],
                                  "variables": [
                                    0.2
                                  ]
                                },
                                "Cast_By_Level": 0
                              },
                              "addStacksPerTrigger": {
                                "operator": "Variables[0] (Rank06_Weighted_Stack_Layer) || RETURN",
                                "displayLines": "Rank06_Weighted_Stack_Layer",
                                "constants": [],
                                "variables": [
                                  "Rank06_Weighted_Stack_Layer"
                                ]
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
    "BlackSwan_BlackSwan_Eidolon1": {
      "fileName": "BlackSwan_BlackSwan_Eidolon1",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "BlackSwan_Eidolon1"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "BlackSwan_Eidolon1_ThunderResistanceDown[<span class=\"descriptionNumberColor\">Seven Pillars of Wisdom</span>]",
          "stackType": "EntityUnique",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceLightningBonus</span>&nbsp;",
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
          "description": "Lightning RES -<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "statusName": "Seven Pillars of Wisdom"
        },
        {
          "name": "Modifier Construction",
          "for": "BlackSwan_Eidolon1_FireResistanceDown[<span class=\"descriptionNumberColor\">Seven Pillars of Wisdom</span>]",
          "stackType": "EntityUnique",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceFireBonus</span>&nbsp;",
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
          "description": "Fire RES -<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "statusName": "Seven Pillars of Wisdom"
        },
        {
          "name": "Modifier Construction",
          "for": "BlackSwan_Eidolon1_PhysicalResistanceDown[<span class=\"descriptionNumberColor\">Seven Pillars of Wisdom</span>]",
          "stackType": "EntityUnique",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistancePhysicalBonus</span>&nbsp;",
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
          "description": "Physical RES -<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "statusName": "Seven Pillars of Wisdom"
        },
        {
          "name": "Modifier Construction",
          "for": "BlackSwan_Eidolon1_WindResistanceDown[<span class=\"descriptionNumberColor\">Seven Pillars of Wisdom</span>]",
          "stackType": "EntityUnique",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceWindBonus</span>&nbsp;",
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
          "description": "Wind RES -<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "statusName": "Seven Pillars of Wisdom"
        },
        {
          "name": "Modifier Construction",
          "for": "BlackSwan_Eidolon1_SubOnEnemy",
          "stackType": "EntityUnique",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": "Owner of this Modifier",
                        "modifier": "BlackSwan_DOT[<span class=\"descriptionNumberColor\">Arcana</span>]"
                      },
                      {
                        "name": "Has Modifier",
                        "target": "Owner of this Modifier",
                        "modifier": "BlackSwan_DOT_Enhance[<span class=\"descriptionNumberColor\">Epiphany</span>]"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "BlackSwan_Eidolon1_WindResistanceDown[<span class=\"descriptionNumberColor\">Seven Pillars of Wisdom</span>]",
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
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "BlackSwan_Eidolon1_PhysicalResistanceDown[<span class=\"descriptionNumberColor\">Seven Pillars of Wisdom</span>]",
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
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "BlackSwan_Eidolon1_FireResistanceDown[<span class=\"descriptionNumberColor\">Seven Pillars of Wisdom</span>]",
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
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "BlackSwan_Eidolon1_ThunderResistanceDown[<span class=\"descriptionNumberColor\">Seven Pillars of Wisdom</span>]",
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
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": "Owner of this Modifier",
                    "flagName": "STAT_DOT_Poison"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "BlackSwan_Eidolon1_WindResistanceDown[<span class=\"descriptionNumberColor\">Seven Pillars of Wisdom</span>]",
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
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": "Owner of this Modifier",
                    "flagName": "STAT_DOT_Bleed"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "BlackSwan_Eidolon1_PhysicalResistanceDown[<span class=\"descriptionNumberColor\">Seven Pillars of Wisdom</span>]",
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
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": "Owner of this Modifier",
                    "flagName": "STAT_DOT_Burn"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "BlackSwan_Eidolon1_FireResistanceDown[<span class=\"descriptionNumberColor\">Seven Pillars of Wisdom</span>]",
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
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": "Owner of this Modifier",
                    "flagName": "STAT_DOT_Electric"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "BlackSwan_Eidolon1_ThunderResistanceDown[<span class=\"descriptionNumberColor\">Seven Pillars of Wisdom</span>]",
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
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "BlackSwan_Eidolon1_WindResistanceDown[<span class=\"descriptionNumberColor\">Seven Pillars of Wisdom</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "BlackSwan_Eidolon1_PhysicalResistanceDown[<span class=\"descriptionNumberColor\">Seven Pillars of Wisdom</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "BlackSwan_Eidolon1_FireResistanceDown[<span class=\"descriptionNumberColor\">Seven Pillars of Wisdom</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "BlackSwan_Eidolon1_ThunderResistanceDown[<span class=\"descriptionNumberColor\">Seven Pillars of Wisdom</span>]"
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": "Owner of this Modifier",
                    "flagName": "STAT_DOT_Poison"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": "Owner of this Modifier",
                        "modifier": "BlackSwan_Eidolon1_WindResistanceDown[<span class=\"descriptionNumberColor\">Seven Pillars of Wisdom</span>]",
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Adjust Target Stats",
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceWind</span>&nbsp;",
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
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "BlackSwan_Eidolon1_WindResistanceDown[<span class=\"descriptionNumberColor\">Seven Pillars of Wisdom</span>]",
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
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "BlackSwan_Eidolon1_WindResistanceDown[<span class=\"descriptionNumberColor\">Seven Pillars of Wisdom</span>]"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": "Owner of this Modifier",
                    "flagName": "STAT_DOT_Bleed"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": "Owner of this Modifier",
                        "modifier": "BlackSwan_Eidolon1_PhysicalResistanceDown[<span class=\"descriptionNumberColor\">Seven Pillars of Wisdom</span>]",
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Adjust Target Stats",
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistancePhysical</span>&nbsp;",
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
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "BlackSwan_Eidolon1_PhysicalResistanceDown[<span class=\"descriptionNumberColor\">Seven Pillars of Wisdom</span>]",
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
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "BlackSwan_Eidolon1_PhysicalResistanceDown[<span class=\"descriptionNumberColor\">Seven Pillars of Wisdom</span>]"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": "Owner of this Modifier",
                    "flagName": "STAT_DOT_Burn"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": "Owner of this Modifier",
                        "modifier": "BlackSwan_Eidolon1_FireResistanceDown[<span class=\"descriptionNumberColor\">Seven Pillars of Wisdom</span>]",
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Adjust Target Stats",
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceFire</span>&nbsp;",
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
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "BlackSwan_Eidolon1_FireResistanceDown[<span class=\"descriptionNumberColor\">Seven Pillars of Wisdom</span>]",
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
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "BlackSwan_Eidolon1_FireResistanceDown[<span class=\"descriptionNumberColor\">Seven Pillars of Wisdom</span>]"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": "Owner of this Modifier",
                    "flagName": "STAT_DOT_Electric"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": "Owner of this Modifier",
                        "modifier": "BlackSwan_Eidolon1_ThunderResistanceDown[<span class=\"descriptionNumberColor\">Seven Pillars of Wisdom</span>]",
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Adjust Target Stats",
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceLightning</span>&nbsp;",
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
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "BlackSwan_Eidolon1_ThunderResistanceDown[<span class=\"descriptionNumberColor\">Seven Pillars of Wisdom</span>]",
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
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "BlackSwan_Eidolon1_ThunderResistanceDown[<span class=\"descriptionNumberColor\">Seven Pillars of Wisdom</span>]"
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Was",
                        "modifier": "BlackSwan_DOT_Enhance[<span class=\"descriptionNumberColor\">Epiphany</span>]"
                      },
                      {
                        "name": "Has Modifier",
                        "target": "Owner of this Modifier",
                        "modifier": "BlackSwan_DOT[<span class=\"descriptionNumberColor\">Arcana</span>]"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "BlackSwan_Eidolon1_WindResistanceDown[<span class=\"descriptionNumberColor\">Seven Pillars of Wisdom</span>]",
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
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "BlackSwan_Eidolon1_PhysicalResistanceDown[<span class=\"descriptionNumberColor\">Seven Pillars of Wisdom</span>]",
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
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "BlackSwan_Eidolon1_FireResistanceDown[<span class=\"descriptionNumberColor\">Seven Pillars of Wisdom</span>]",
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
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "BlackSwan_Eidolon1_ThunderResistanceDown[<span class=\"descriptionNumberColor\">Seven Pillars of Wisdom</span>]",
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
            },
            {
              "eventTrigger": "When Losing Modifier [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "NOT",
                    "condition": {
                      "name": "Has Flag",
                      "target": "Owner of this Modifier",
                      "flagName": "STAT_DOT_Poison"
                    }
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "BlackSwan_Eidolon1_WindResistanceDown[<span class=\"descriptionNumberColor\">Seven Pillars of Wisdom</span>]"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "NOT",
                    "condition": {
                      "name": "Has Flag",
                      "target": "Owner of this Modifier",
                      "flagName": "STAT_DOT_Bleed"
                    }
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "BlackSwan_Eidolon1_PhysicalResistanceDown[<span class=\"descriptionNumberColor\">Seven Pillars of Wisdom</span>]"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "NOT",
                    "condition": {
                      "name": "Has Flag",
                      "target": "Owner of this Modifier",
                      "flagName": "STAT_DOT_Burn"
                    }
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "BlackSwan_Eidolon1_FireResistanceDown[<span class=\"descriptionNumberColor\">Seven Pillars of Wisdom</span>]"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "NOT",
                    "condition": {
                      "name": "Has Flag",
                      "target": "Owner of this Modifier",
                      "flagName": "STAT_DOT_Electric"
                    }
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "BlackSwan_Eidolon1_ThunderResistanceDown[<span class=\"descriptionNumberColor\">Seven Pillars of Wisdom</span>]"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Apply DOT Modifier [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Was",
                        "modifier": "BlackSwan_DOT[<span class=\"descriptionNumberColor\">Arcana</span>]"
                      },
                      {
                        "name": "Has Modifier",
                        "target": "Owner of this Modifier",
                        "modifier": "BlackSwan_DOT_Enhance[<span class=\"descriptionNumberColor\">Epiphany</span>]"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "BlackSwan_Eidolon1_WindResistanceDown[<span class=\"descriptionNumberColor\">Seven Pillars of Wisdom</span>]",
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
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "BlackSwan_Eidolon1_PhysicalResistanceDown[<span class=\"descriptionNumberColor\">Seven Pillars of Wisdom</span>]",
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
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "BlackSwan_Eidolon1_FireResistanceDown[<span class=\"descriptionNumberColor\">Seven Pillars of Wisdom</span>]",
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
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "BlackSwan_Eidolon1_ThunderResistanceDown[<span class=\"descriptionNumberColor\">Seven Pillars of Wisdom</span>]",
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
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Has Flag",
                    "flagName": "STAT_DOT_Poison"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "BlackSwan_Eidolon1_WindResistanceDown[<span class=\"descriptionNumberColor\">Seven Pillars of Wisdom</span>]",
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
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Has Flag",
                    "flagName": "STAT_DOT_Bleed"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "BlackSwan_Eidolon1_PhysicalResistanceDown[<span class=\"descriptionNumberColor\">Seven Pillars of Wisdom</span>]",
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
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Has Flag",
                    "flagName": "STAT_DOT_Burn"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "BlackSwan_Eidolon1_FireResistanceDown[<span class=\"descriptionNumberColor\">Seven Pillars of Wisdom</span>]",
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
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Has Flag",
                    "flagName": "STAT_DOT_Electric"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "BlackSwan_Eidolon1_ThunderResistanceDown[<span class=\"descriptionNumberColor\">Seven Pillars of Wisdom</span>]",
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
          "for": "BlackSwan_Eidolon1",
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
                      "modifier": "BlackSwan_Eidolon1_SubOnEnemy",
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
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "All Hostile Entities (AOE)",
                  "modifier": "BlackSwan_Eidolon1_SubOnEnemy",
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
              ],
              "priorityLevel": -80
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "BlackSwan_BlackSwan_Trace03": {
      "fileName": "BlackSwan_BlackSwan_Trace03",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "M_BlackSwan_Trace03"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "M_BlackSwan_Trace03_Sub",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_PropertyRatio",
                    "compareType": ">",
                    "value2": {
                      "operator": "Variables[0] (0.72) || RETURN",
                      "displayLines": "0.72",
                      "constants": [],
                      "variables": [
                        0.72
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_PropertyRatio",
                      "value": {
                        "operator": "Variables[0] (0.72) || RETURN",
                        "displayLines": "0.72",
                        "constants": [],
                        "variables": [
                          0.72
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "M_BlackSwan_Trace03",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": "Caster",
                  "variableName": "CasterStatusProbability",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRate</span>&nbsp;"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "M_BlackSwan_Trace03_Sub",
                  "valuePerStack": {
                    "MDF_PropertyRatio": {
                      "operator": "Variables[0] (CasterStatusProbability) || Variables[1] (0.6) || MUL || RETURN",
                      "displayLines": "(CasterStatusProbability * 0.6)",
                      "constants": [],
                      "variables": [
                        "CasterStatusProbability",
                        0.6
                      ]
                    }
                  }
                }
              ],
              "priorityLevel": -80
            }
          ],
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRate</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": -999,
                  "maxValue": 999,
                  "whenValueChanges": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": "Caster",
                      "variableName": "CasterStatusProbability",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRate</span>&nbsp;"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "M_BlackSwan_Trace03_Sub",
                      "valuePerStack": {
                        "MDF_PropertyRatio": {
                          "operator": "Variables[0] (CasterStatusProbability) || Variables[1] (0.6) || MUL || RETURN",
                          "displayLines": "(CasterStatusProbability * 0.6)",
                          "constants": [],
                          "variables": [
                            "CasterStatusProbability",
                            0.6
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
    "BlackSwan_BlackSwan_Trace02": {
      "fileName": "BlackSwan_BlackSwan_Trace02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "M_BlackSwan_Trace02"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "M_BlackSwan_Tree02_AddDOTFlag",
          "stackType": "Replace",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "KeepOnDeathrattle"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "M_BlackSwan_Tree02_ListenAddPoison_SubOnEnemy",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_count",
                  "value": 999
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "_count",
                        "compareType": "<",
                        "value2": {
                          "operator": "Variables[0] (_maxLimit) || RETURN",
                          "displayLines": "_maxLimit",
                          "constants": [],
                          "variables": [
                            "_maxLimit"
                          ]
                        },
                        "contextScope": "ContextModifier"
                      },
                      {
                        "name": "Attack Type",
                        "attackTypes": [
                          "DOT"
                        ],
                        "target": "Use Prior Target(s) Defined"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "M_BlackSwan_Tree02_AddDOTFlag"
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
                    "name": "Is Part Of",
                    "of": "All Team Members(In Context, with Untargetable + Battle Events/Summon)",
                    "target": "Use Prior Target(s) Defined",
                    "mustBeAlive2": true
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_count",
                      "value": 0
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
                  "variableName": "_count",
                  "value": 999
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of",
                        "of": "All Team Members(In Context, with Untargetable + Battle Events/Summon)",
                        "target": "Use Prior Target(s) Defined",
                        "mustBeAlive2": true
                      },
                      {
                        "name": "Is Part Of",
                        "of": "All Hostile Entities (AOE)(ALL)",
                        "target": "Use [LIST OF] Prior Target(s) Defined",
                        "mustBeAlive2": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_count",
                      "value": 0
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
                  "variableName": "_count",
                  "value": 999
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: Aborted",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_count",
                  "value": 999
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "M_BlackSwan_Trace02_AddDotOnCreate",
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
                      "name": "IF",
                      "conditions": {
                        "name": "Random Chance",
                        "chance": {
                          "operator": "Variables[0] (Rank06_Chance) || RETURN",
                          "displayLines": "Rank06_Chance",
                          "constants": [],
                          "variables": [
                            "Rank06_Chance"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Rank06_Weighted_Stack_Layer",
                          "value": {
                            "operator": "Constants[0] (1) || Variables[0] (Rank06_Extra_Layer) || ADD || RETURN",
                            "displayLines": "(1 + Rank06_Extra_Layer)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "Rank06_Extra_Layer"
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Rank06_Weighted_Stack_Layer",
                          "value": {
                            "operator": "Constants[0] (1) || RETURN",
                            "displayLines": "1",
                            "constants": [
                              1
                            ],
                            "variables": []
                          }
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "BlackSwan_DOT[<span class=\"descriptionNumberColor\">Arcana</span>]",
                      "baseChance": {
                        "operator": "Variables[0] (0.65) || RETURN",
                        "displayLines": "0.65",
                        "constants": [],
                        "variables": [
                          0.65
                        ]
                      },
                      "stackLimit": {
                        "operator": "Variables[0] (Max_DOT_Layer) || RETURN",
                        "displayLines": "Max_DOT_Layer",
                        "constants": [],
                        "variables": [
                          "Max_DOT_Layer"
                        ]
                      },
                      "valuePerStack": {
                        "Basic_DamagePercentage": {
                          "operator": "Variables[0] (2.4) || RETURN",
                          "displayLines": "2.4",
                          "constants": [],
                          "variables": [
                            2.4
                          ]
                        },
                        "ExtraLayer_DamagePercentage": {
                          "operator": "Variables[0] (0.12) || RETURN",
                          "displayLines": "0.12",
                          "constants": [],
                          "variables": [
                            0.12
                          ]
                        },
                        "SecondLayer": {
                          "operator": "Variables[0] (3) || RETURN",
                          "displayLines": "3",
                          "constants": [],
                          "variables": [
                            3
                          ]
                        },
                        "Spread_DamagePercentage": {
                          "operator": "Variables[0] (1.8) || RETURN",
                          "displayLines": "1.8",
                          "constants": [],
                          "variables": [
                            1.8
                          ]
                        },
                        "ThirdLayer": {
                          "operator": "Variables[0] (7) || RETURN",
                          "displayLines": "7",
                          "constants": [],
                          "variables": [
                            7
                          ]
                        },
                        "DefenceIgnore": {
                          "operator": "Variables[0] (0.2) || RETURN",
                          "displayLines": "0.2",
                          "constants": [],
                          "variables": [
                            0.2
                          ]
                        },
                        "Cast_By_Level": 0
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (Rank06_Weighted_Stack_Layer) || RETURN",
                        "displayLines": "Rank06_Weighted_Stack_Layer",
                        "constants": [],
                        "variables": [
                          "Rank06_Weighted_Stack_Layer"
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
          "for": "M_BlackSwan_Trace02",
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
                      "modifier": "M_BlackSwan_Tree02_ListenAddPoison_SubOnEnemy",
                      "valuePerStack": {
                        "_maxLimit": {
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
                      "from": "All Hostile Entities (AOE)(ALL)",
                      "searchRandom": true,
                      "maxTargets": 99,
                      "ifTargetFound": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Random Chance",
                            "chance": {
                              "operator": "Variables[0] (Rank06_Chance) || RETURN",
                              "displayLines": "Rank06_Chance",
                              "constants": [],
                              "variables": [
                                "Rank06_Chance"
                              ]
                            }
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "Rank06_Weighted_Stack_Layer",
                              "value": {
                                "operator": "Constants[0] (1) || Variables[0] (Rank06_Extra_Layer) || ADD || RETURN",
                                "displayLines": "(1 + Rank06_Extra_Layer)",
                                "constants": [
                                  1
                                ],
                                "variables": [
                                  "Rank06_Extra_Layer"
                                ]
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "Rank06_Weighted_Stack_Layer",
                              "value": {
                                "operator": "Constants[0] (1) || RETURN",
                                "displayLines": "1",
                                "constants": [
                                  1
                                ],
                                "variables": []
                              }
                            }
                          ]
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Use Prior Target(s) Defined",
                          "modifier": "BlackSwan_DOT[<span class=\"descriptionNumberColor\">Arcana</span>]",
                          "baseChance": {
                            "operator": "Variables[0] (0.65) || RETURN",
                            "displayLines": "0.65",
                            "constants": [],
                            "variables": [
                              0.65
                            ]
                          },
                          "stackLimit": {
                            "operator": "Variables[0] (Max_DOT_Layer) || RETURN",
                            "displayLines": "Max_DOT_Layer",
                            "constants": [],
                            "variables": [
                              "Max_DOT_Layer"
                            ]
                          },
                          "valuePerStack": {
                            "Basic_DamagePercentage": {
                              "operator": "Variables[0] (2.4) || RETURN",
                              "displayLines": "2.4",
                              "constants": [],
                              "variables": [
                                2.4
                              ]
                            },
                            "ExtraLayer_DamagePercentage": {
                              "operator": "Variables[0] (0.12) || RETURN",
                              "displayLines": "0.12",
                              "constants": [],
                              "variables": [
                                0.12
                              ]
                            },
                            "SecondLayer": {
                              "operator": "Variables[0] (3) || RETURN",
                              "displayLines": "3",
                              "constants": [],
                              "variables": [
                                3
                              ]
                            },
                            "Spread_DamagePercentage": {
                              "operator": "Variables[0] (1.8) || RETURN",
                              "displayLines": "1.8",
                              "constants": [],
                              "variables": [
                                1.8
                              ]
                            },
                            "ThirdLayer": {
                              "operator": "Variables[0] (7) || RETURN",
                              "displayLines": "7",
                              "constants": [],
                              "variables": [
                                7
                              ]
                            },
                            "DefenceIgnore": {
                              "operator": "Variables[0] (0.2) || RETURN",
                              "displayLines": "0.2",
                              "constants": [],
                              "variables": [
                                0.2
                              ]
                            },
                            "Cast_By_Level": 0
                          },
                          "addStacksPerTrigger": {
                            "operator": "Variables[0] (Rank06_Weighted_Stack_Layer) || RETURN",
                            "displayLines": "Rank06_Weighted_Stack_Layer",
                            "constants": [],
                            "variables": [
                              "Rank06_Weighted_Stack_Layer"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "M_BlackSwan_Trace02_AddDotOnCreate"
                    }
                  ]
                }
              ],
              "priorityLevel": -80
            },
            {
              "eventTrigger": "When Stacking Modifier Instance [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "M_BlackSwan_Tree02_AddDOTFlag"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Random Chance",
                        "chance": {
                          "operator": "Variables[0] (Rank06_Chance) || RETURN",
                          "displayLines": "Rank06_Chance",
                          "constants": [],
                          "variables": [
                            "Rank06_Chance"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Rank06_Weighted_Stack_Layer",
                          "value": {
                            "operator": "Constants[0] (1) || Variables[0] (Rank06_Extra_Layer) || ADD || RETURN",
                            "displayLines": "(1 + Rank06_Extra_Layer)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "Rank06_Extra_Layer"
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Rank06_Weighted_Stack_Layer",
                          "value": {
                            "operator": "Constants[0] (1) || RETURN",
                            "displayLines": "1",
                            "constants": [
                              1
                            ],
                            "variables": []
                          }
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "BlackSwan_DOT[<span class=\"descriptionNumberColor\">Arcana</span>]",
                      "baseChance": {
                        "operator": "Variables[0] (0.65) || RETURN",
                        "displayLines": "0.65",
                        "constants": [],
                        "variables": [
                          0.65
                        ]
                      },
                      "stackLimit": {
                        "operator": "Variables[0] (Max_DOT_Layer) || RETURN",
                        "displayLines": "Max_DOT_Layer",
                        "constants": [],
                        "variables": [
                          "Max_DOT_Layer"
                        ]
                      },
                      "valuePerStack": {
                        "Basic_DamagePercentage": {
                          "operator": "Variables[0] (2.4) || RETURN",
                          "displayLines": "2.4",
                          "constants": [],
                          "variables": [
                            2.4
                          ]
                        },
                        "ExtraLayer_DamagePercentage": {
                          "operator": "Variables[0] (0.12) || RETURN",
                          "displayLines": "0.12",
                          "constants": [],
                          "variables": [
                            0.12
                          ]
                        },
                        "SecondLayer": {
                          "operator": "Variables[0] (3) || RETURN",
                          "displayLines": "3",
                          "constants": [],
                          "variables": [
                            3
                          ]
                        },
                        "Spread_DamagePercentage": {
                          "operator": "Variables[0] (1.8) || RETURN",
                          "displayLines": "1.8",
                          "constants": [],
                          "variables": [
                            1.8
                          ]
                        },
                        "ThirdLayer": {
                          "operator": "Variables[0] (7) || RETURN",
                          "displayLines": "7",
                          "constants": [],
                          "variables": [
                            7
                          ]
                        },
                        "DefenceIgnore": {
                          "operator": "Variables[0] (0.2) || RETURN",
                          "displayLines": "0.2",
                          "constants": [],
                          "variables": [
                            0.2
                          ]
                        },
                        "Cast_By_Level": 0
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (Rank06_Weighted_Stack_Layer) || RETURN",
                        "displayLines": "Rank06_Weighted_Stack_Layer",
                        "constants": [],
                        "variables": [
                          "Rank06_Weighted_Stack_Layer"
                        ]
                      },
                      "success": [
                        {
                          "name": "Define Modifier-Specific Variable",
                          "target": "Use Prior Target(s) Defined",
                          "modifierName": "M_BlackSwan_Tree02_ListenAddPoison_SubOnEnemy",
                          "adjustmentType": "+",
                          "variableName": "_count",
                          "value": 1
                        }
                      ]
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "M_BlackSwan_Tree02_AddDOTFlag"
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
    "BlackSwan_BlackSwan_TechniqueInLevel_Insert": {
      "fileName": "BlackSwan_BlackSwan_TechniqueInLevel_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "scope": "ContextCaster",
          "variableName": "MazeSkill_Triggered",
          "value": 1
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_can_continue",
          "value": {
            "operator": "Constants[0] (1) || RETURN",
            "displayLines": "1",
            "constants": [
              1
            ],
            "variables": []
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_loop_count",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_current_chance",
          "value": {
            "operator": "Variables[0] (1.5) || RETURN",
            "displayLines": "1.5",
            "constants": [],
            "variables": [
              1.5
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "M_BlackSwan_Maze_Flag"
        },
        {
          "name": "Looped Event",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "_can_continue",
                "compareType": ">=",
                "value2": 1,
                "contextScope": "ContextAbility"
              },
              {
                "name": "Compare: Variable",
                "value1": "_loop_count",
                "compareType": "<",
                "value2": 99,
                "contextScope": "ContextAbility"
              }
            ]
          },
          "Event": [
            {
              "name": "Define Custom Variable",
              "variableName": "_loop_count",
              "value": {
                "operator": "Variables[0] (_loop_count) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(_loop_count + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "_loop_count"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_can_continue",
              "value": {
                "operator": "Constants[0] (0) || RETURN",
                "displayLines": "0",
                "constants": [
                  0
                ],
                "variables": []
              }
            },
            {
              "name": "Find New Target",
              "from": "All Hostile Entities (AOE)",
              "conditions": {
                "name": "Has Modifier",
                "target": "Use Prior Target(s) Defined",
                "modifier": "M_BlackSwan_Maze_StopAddDot",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Random Chance",
                    "chance": {
                      "operator": "Variables[0] (Rank06_Chance) || RETURN",
                      "displayLines": "Rank06_Chance",
                      "constants": [],
                      "variables": [
                        "Rank06_Chance"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Rank06_Weighted_Stack_Layer",
                      "value": {
                        "operator": "Constants[0] (1) || Variables[0] (Rank06_Extra_Layer) || ADD || RETURN",
                        "displayLines": "(1 + Rank06_Extra_Layer)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "Rank06_Extra_Layer"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Rank06_Weighted_Stack_Layer",
                      "value": {
                        "operator": "Constants[0] (1) || RETURN",
                        "displayLines": "1",
                        "constants": [
                          1
                        ],
                        "variables": []
                      }
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "BlackSwan_DOT[<span class=\"descriptionNumberColor\">Arcana</span>]",
                  "baseChance": {
                    "operator": "Variables[0] (_current_chance) || RETURN",
                    "displayLines": "_current_chance",
                    "constants": [],
                    "variables": [
                      "_current_chance"
                    ]
                  },
                  "stackLimit": {
                    "operator": "Variables[0] (Max_DOT_Layer) || RETURN",
                    "displayLines": "Max_DOT_Layer",
                    "constants": [],
                    "variables": [
                      "Max_DOT_Layer"
                    ]
                  },
                  "valuePerStack": {
                    "Basic_DamagePercentage": {
                      "operator": "Variables[0] (2.4) || RETURN",
                      "displayLines": "2.4",
                      "constants": [],
                      "variables": [
                        2.4
                      ]
                    },
                    "ExtraLayer_DamagePercentage": {
                      "operator": "Variables[0] (0.12) || RETURN",
                      "displayLines": "0.12",
                      "constants": [],
                      "variables": [
                        0.12
                      ]
                    },
                    "SecondLayer": {
                      "operator": "Variables[0] (3) || RETURN",
                      "displayLines": "3",
                      "constants": [],
                      "variables": [
                        3
                      ]
                    },
                    "Spread_DamagePercentage": {
                      "operator": "Variables[0] (1.8) || RETURN",
                      "displayLines": "1.8",
                      "constants": [],
                      "variables": [
                        1.8
                      ]
                    },
                    "ThirdLayer": {
                      "operator": "Variables[0] (7) || RETURN",
                      "displayLines": "7",
                      "constants": [],
                      "variables": [
                        7
                      ]
                    },
                    "DefenceIgnore": {
                      "operator": "Variables[0] (0.2) || RETURN",
                      "displayLines": "0.2",
                      "constants": [],
                      "variables": [
                        0.2
                      ]
                    },
                    "Cast_By_Level": 0
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (Rank06_Weighted_Stack_Layer) || RETURN",
                    "displayLines": "Rank06_Weighted_Stack_Layer",
                    "constants": [],
                    "variables": [
                      "Rank06_Weighted_Stack_Layer"
                    ]
                  },
                  "success": [
                    {
                      "name": "Define Custom Variable",
                      "scope": "ContextAbility",
                      "variableName": "_can_continue",
                      "value": {
                        "operator": "Constants[0] (1) || RETURN",
                        "displayLines": "1",
                        "constants": [
                          1
                        ],
                        "variables": []
                      }
                    }
                  ],
                  "failed": []
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_current_chance",
              "value": {
                "operator": "Variables[0] (_current_chance) || Variables[1] (0.5) || MUL || RETURN",
                "displayLines": "(_current_chance * 0.5)",
                "constants": [],
                "variables": [
                  "_current_chance",
                  0.5
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_can_continue",
                "compareType": ">=",
                "value2": 1,
                "contextScope": "ContextAbility"
              }
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": "All Hostile Entities (AOE)",
          "modifier": "M_BlackSwan_Maze_StopAddDot"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": "Caster",
          "modifier": "M_BlackSwan_Maze_Flag"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "M_BlackSwan_Maze_Flag",
          "stackData": [],
          "latentQueue": [
            "MazeSkill_Triggered",
            "_can_continue"
          ]
        }
      ]
    },
    "BlackSwan_BlackSwan_TechniqueInLevel": {
      "fileName": "BlackSwan_BlackSwan_TechniqueInLevel",
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
          "modifier": "StageAbility_Maze_BlackSwan_Modifier"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "M_BlackSwan_Maze_StopAddDot"
        },
        {
          "name": "Modifier Construction",
          "for": "StageAbility_Maze_BlackSwan_Modifier",
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
                        "target": "Owner of this Modifier",
                        "value1": "MazeSkill_Triggered",
                        "compareType": "<",
                        "value2": 1,
                        "contextScope": "ContextCaster"
                      },
                      {
                        "name": "Enemies Still Alive",
                        "target": "Caster",
                        "includeNonTargets": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "BlackSwan_TechniqueInLevel_Insert",
                      "abilitySource": "Caster",
                      "abilityTarget": "All Hostile Entities (AOE)",
                      "priorityTag": "AvatarBuffSelf",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ],
              "priorityLevel": -55
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "BlackSwan_BlackSwan_PassiveAbility01": {
      "fileName": "BlackSwan_BlackSwan_PassiveAbility01",
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
          "modifier": "M_BlackSwan_P01_ListenAddPoison"
        },
        {
          "name": "Define Custom Variable",
          "scope": "ContextCaster",
          "variableName": "Max_DOT_Layer",
          "value": {
            "operator": "Variables[0] (50) || RETURN",
            "displayLines": "50",
            "constants": [],
            "variables": [
              50
            ]
          }
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
              "to": "Caster",
              "modifier": "M_BlackSwan_Eidolon4_Listener"
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
              "variableName": "Rank06_Chance",
              "value": {
                "operator": "Variables[0] (0.5) || RETURN",
                "displayLines": "0.5",
                "constants": [],
                "variables": [
                  0.5
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Rank06_Extra_Layer",
              "value": {
                "operator": "Variables[0] (1) || RETURN",
                "displayLines": "1",
                "constants": [],
                "variables": [
                  1
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Rank06_Chance",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Rank06_Extra_Layer",
              "value": 0
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "M_BlackSwan_Eidolon4_Listener",
          "execute": [
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Target Exists",
                    "target": "Use Secondary Prior Target(s) Defined"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Is Part Of Team",
                            "target": "Use Prior Target(s) Defined",
                            "team": "TeamDark"
                          },
                          {
                            "name": "NOT",
                            "condition": {
                              "name": "Is Part Of Team",
                              "target": "Use Secondary Prior Target(s) Defined",
                              "team": "TeamDark"
                            }
                          },
                          {
                            "name": "Has Modifier",
                            "target": "Use Prior Target(s) Defined",
                            "modifier": "BlackSwan_DOT_Enhance[<span class=\"descriptionNumberColor\">Epiphany</span>]",
                            "justAddedOrActive": true,
                            "includePreDeath": true
                          },
                          {
                            "name": "Has Modifier",
                            "target": "Use Prior Target(s) Defined",
                            "modifier": "M_BlackSwan_DOT_Eidolon4_HaveAddedSP",
                            "invertCondition": true,
                            "justAddedOrActive": true,
                            "casterFilter": "Caster"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Update Energy",
                          "on": "Caster",
                          "value": {
                            "operator": "Variables[0] (8) || RETURN",
                            "displayLines": "8",
                            "constants": [],
                            "variables": [
                              8
                            ]
                          },
                          "isFixed": "* ERR"
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
          "for": "M_BlackSwan_P01_ListenAddPoison_SubOnEnemy_Part1Mark"
        },
        {
          "name": "Modifier Construction",
          "for": "M_BlackSwan_P01_ListenAddPoison_SubOnEnemy_ListenPhase1Mark",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "M_BlackSwan_P01_ListenAddPoison_SubOnEnemy_Part1Mark"
                }
              ],
              "priorityLevel": 200
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "M_BlackSwan_P01_ListenAddPoison_SubOnEnemy",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "M_BlackSwan_P01_ListenAddPoison_SubOnEnemy_ListenPhase1Mark"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "M_BlackSwan_P01_ListenAddPoison_SubOnEnemy_Part1Mark"
                }
              ],
              "priorityLevel": -11
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Target",
                            "target": "Owner of this Modifier",
                            "target2": "Current Turn Owner"
                          },
                          {
                            "name": "Has Modifier",
                            "target": "Owner of this Modifier",
                            "modifier": "M_BlackSwan_P01_ListenAddPoison_SubOnEnemy_Part1Mark",
                            "justAddedOrActive": true
                          }
                        ]
                      },
                      {
                        "name": "Attack Type",
                        "attackTypes": [
                          "DOT"
                        ],
                        "target": "Use Prior Target(s) Defined"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "M_BlackSwan_P01_AddDOTFlag"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "M_BlackSwan_P01_ListenAddPoison",
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
                      "modifier": "M_BlackSwan_P01_ListenAddPoison_SubOnEnemy"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking Modifier Instance [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "M_BlackSwan_P01_AddDOTFlag"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Random Chance",
                        "chance": {
                          "operator": "Variables[0] (Rank06_Chance) || RETURN",
                          "displayLines": "Rank06_Chance",
                          "constants": [],
                          "variables": [
                            "Rank06_Chance"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Rank06_Weighted_Stack_Layer",
                          "value": {
                            "operator": "Constants[0] (1) || Variables[0] (Rank06_Extra_Layer) || ADD || RETURN",
                            "displayLines": "(1 + Rank06_Extra_Layer)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "Rank06_Extra_Layer"
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Rank06_Weighted_Stack_Layer",
                          "value": {
                            "operator": "Constants[0] (1) || RETURN",
                            "displayLines": "1",
                            "constants": [
                              1
                            ],
                            "variables": []
                          }
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": "Use Prior Target(s) Defined",
                        "modifier": "M_BlackSwan_ForbidEffectFlag",
                        "justAddedOrActive": true
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Use Prior Target(s) Defined",
                          "modifier": "BlackSwan_DOT[<span class=\"descriptionNumberColor\">Arcana</span>]",
                          "baseChance": {
                            "operator": "Variables[0] (0.65) || RETURN",
                            "displayLines": "0.65",
                            "constants": [],
                            "variables": [
                              0.65
                            ]
                          },
                          "stackLimit": {
                            "operator": "Variables[0] (Max_DOT_Layer) || RETURN",
                            "displayLines": "Max_DOT_Layer",
                            "constants": [],
                            "variables": [
                              "Max_DOT_Layer"
                            ]
                          },
                          "valuePerStack": {
                            "Basic_DamagePercentage": {
                              "operator": "Variables[0] (2.4) || RETURN",
                              "displayLines": "2.4",
                              "constants": [],
                              "variables": [
                                2.4
                              ]
                            },
                            "ExtraLayer_DamagePercentage": {
                              "operator": "Variables[0] (0.12) || RETURN",
                              "displayLines": "0.12",
                              "constants": [],
                              "variables": [
                                0.12
                              ]
                            },
                            "SecondLayer": {
                              "operator": "Variables[0] (3) || RETURN",
                              "displayLines": "3",
                              "constants": [],
                              "variables": [
                                3
                              ]
                            },
                            "Spread_DamagePercentage": {
                              "operator": "Variables[0] (1.8) || RETURN",
                              "displayLines": "1.8",
                              "constants": [],
                              "variables": [
                                1.8
                              ]
                            },
                            "ThirdLayer": {
                              "operator": "Variables[0] (7) || RETURN",
                              "displayLines": "7",
                              "constants": [],
                              "variables": [
                                7
                              ]
                            },
                            "DefenceIgnore": {
                              "operator": "Variables[0] (0.2) || RETURN",
                              "displayLines": "0.2",
                              "constants": [],
                              "variables": [
                                0.2
                              ]
                            },
                            "Cast_By_Level": 0
                          },
                          "addStacksPerTrigger": {
                            "operator": "Variables[0] (Rank06_Weighted_Stack_Layer) || RETURN",
                            "displayLines": "Rank06_Weighted_Stack_Layer",
                            "constants": [],
                            "variables": [
                              "Rank06_Weighted_Stack_Layer"
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Use Prior Target(s) Defined",
                          "modifier": "BlackSwan_DOT[<span class=\"descriptionNumberColor\">Arcana</span>]",
                          "baseChance": {
                            "operator": "Variables[0] (0.65) || RETURN",
                            "displayLines": "0.65",
                            "constants": [],
                            "variables": [
                              0.65
                            ]
                          },
                          "stackLimit": {
                            "operator": "Variables[0] (Max_DOT_Layer) || RETURN",
                            "displayLines": "Max_DOT_Layer",
                            "constants": [],
                            "variables": [
                              "Max_DOT_Layer"
                            ]
                          },
                          "valuePerStack": {
                            "Basic_DamagePercentage": {
                              "operator": "Variables[0] (2.4) || RETURN",
                              "displayLines": "2.4",
                              "constants": [],
                              "variables": [
                                2.4
                              ]
                            },
                            "ExtraLayer_DamagePercentage": {
                              "operator": "Variables[0] (0.12) || RETURN",
                              "displayLines": "0.12",
                              "constants": [],
                              "variables": [
                                0.12
                              ]
                            },
                            "SecondLayer": {
                              "operator": "Variables[0] (3) || RETURN",
                              "displayLines": "3",
                              "constants": [],
                              "variables": [
                                3
                              ]
                            },
                            "Spread_DamagePercentage": {
                              "operator": "Variables[0] (1.8) || RETURN",
                              "displayLines": "1.8",
                              "constants": [],
                              "variables": [
                                1.8
                              ]
                            },
                            "ThirdLayer": {
                              "operator": "Variables[0] (7) || RETURN",
                              "displayLines": "7",
                              "constants": [],
                              "variables": [
                                7
                              ]
                            },
                            "DefenceIgnore": {
                              "operator": "Variables[0] (0.2) || RETURN",
                              "displayLines": "0.2",
                              "constants": [],
                              "variables": [
                                0.2
                              ]
                            },
                            "Cast_By_Level": 0
                          },
                          "addStacksPerTrigger": {
                            "operator": "Variables[0] (Rank06_Weighted_Stack_Layer) || RETURN",
                            "displayLines": "Rank06_Weighted_Stack_Layer",
                            "constants": [],
                            "variables": [
                              "Rank06_Weighted_Stack_Layer"
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
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "BlackSwan_BlackSwan_Ability03_Part02": {
      "fileName": "BlackSwan_BlackSwan_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Looped Event",
          "maxLoops": 6,
          "Event": []
        },
        {
          "name": "Add Events/Bonuses",
          "to": "All Hostile Entities (AOE)",
          "modifier": "BlackSwan_DOT_Enhance[<span class=\"descriptionNumberColor\">Epiphany</span>]",
          "counter": {
            "operator": "Variables[0] (1) || RETURN",
            "displayLines": "1",
            "constants": [],
            "variables": [
              1
            ]
          },
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
              "operator": "Variables[0] (0.25) || RETURN",
              "displayLines": "0.25",
              "constants": [],
              "variables": [
                0.25
              ]
            },
            "MDF_ResistanceDown": {
              "operator": "Variables[0] (0.1) || RETURN",
              "displayLines": "0.1",
              "constants": [],
              "variables": [
                0.1
              ]
            },
            "MDF_Count": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "SecondLayer": {
              "operator": "Variables[0] (3) || RETURN",
              "displayLines": "3",
              "constants": [],
              "variables": [
                3
              ]
            },
            "ThirdLayer": {
              "operator": "Variables[0] (7) || RETURN",
              "displayLines": "7",
              "constants": [],
              "variables": [
                7
              ]
            }
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": "All Hostile Entities (AOE)",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (1.2) || RETURN",
              "displayLines": "1.2",
              "constants": [],
              "variables": [
                1.2
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
        "Trigger: Ability End"
      ],
      "references": []
    },
    "BlackSwan_BlackSwan_Ability03_Part01": {
      "fileName": "BlackSwan_BlackSwan_Ability03_Part01",
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
          "ability": "BlackSwan_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "BlackSwan_BlackSwan_Ability03_Cutin": {
      "fileName": "BlackSwan_BlackSwan_Ability03_Cutin",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "BlackSwan_BlackSwan_Ability02_Part02": {
      "fileName": "BlackSwan_BlackSwan_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (0.9) || RETURN",
              "displayLines": "0.9",
              "constants": [],
              "variables": [
                0.9
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
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (0.9) || RETURN",
              "displayLines": "0.9",
              "constants": [],
              "variables": [
                0.9
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
        {
          "name": "Use Custom Character Function",
          "functionName": "AddDot",
          "variables": {
            "Arg01": {
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
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Viscera's Disquiet"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": "Single Target (Primary)",
                "flagName": "STAT_DOT_Poison"
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "AddDot",
                  "variables": {
                    "Arg01": {
                      "operator": "Variables[0] (0.65) || RETURN",
                      "displayLines": "0.65",
                      "constants": [],
                      "variables": [
                        0.65
                      ]
                    }
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": "Single Target (Primary)",
                "flagName": "STAT_DOT_Bleed"
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "AddDot",
                  "variables": {
                    "Arg01": {
                      "operator": "Variables[0] (0.65) || RETURN",
                      "displayLines": "0.65",
                      "constants": [],
                      "variables": [
                        0.65
                      ]
                    }
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": "Single Target (Primary)",
                "flagName": "STAT_DOT_Burn"
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "AddDot",
                  "variables": {
                    "Arg01": {
                      "operator": "Variables[0] (0.65) || RETURN",
                      "displayLines": "0.65",
                      "constants": [],
                      "variables": [
                        0.65
                      ]
                    }
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": "Single Target (Primary)",
                "flagName": "STAT_DOT_Electric"
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "AddDot",
                  "variables": {
                    "Arg01": {
                      "operator": "Variables[0] (0.65) || RETURN",
                      "displayLines": "0.65",
                      "constants": [],
                      "variables": [
                        0.65
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": "Blast (Adjacent)",
          "searchRandom": true,
          "maxTargets": 2,
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Random Chance",
                "chance": {
                  "operator": "Variables[0] (Rank06_Chance) || RETURN",
                  "displayLines": "Rank06_Chance",
                  "constants": [],
                  "variables": [
                    "Rank06_Chance"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Rank06_Weighted_Stack_Layer",
                  "value": {
                    "operator": "Constants[0] (1) || Variables[0] (Rank06_Extra_Layer) || ADD || RETURN",
                    "displayLines": "(1 + Rank06_Extra_Layer)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "Rank06_Extra_Layer"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Rank06_Weighted_Stack_Layer",
                  "value": {
                    "operator": "Constants[0] (1) || RETURN",
                    "displayLines": "1",
                    "constants": [
                      1
                    ],
                    "variables": []
                  }
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": "Use Prior Target(s) Defined",
              "modifier": "BlackSwan_DOT[<span class=\"descriptionNumberColor\">Arcana</span>]",
              "baseChance": {
                "operator": "Variables[0] (1) || RETURN",
                "displayLines": "1",
                "constants": [],
                "variables": [
                  1
                ]
              },
              "stackLimit": {
                "operator": "Variables[0] (Max_DOT_Layer) || RETURN",
                "displayLines": "Max_DOT_Layer",
                "constants": [],
                "variables": [
                  "Max_DOT_Layer"
                ]
              },
              "valuePerStack": {
                "Basic_DamagePercentage": {
                  "operator": "Variables[0] (2.4) || RETURN",
                  "displayLines": "2.4",
                  "constants": [],
                  "variables": [
                    2.4
                  ]
                },
                "ExtraLayer_DamagePercentage": {
                  "operator": "Variables[0] (0.12) || RETURN",
                  "displayLines": "0.12",
                  "constants": [],
                  "variables": [
                    0.12
                  ]
                },
                "SecondLayer": {
                  "operator": "Variables[0] (3) || RETURN",
                  "displayLines": "3",
                  "constants": [],
                  "variables": [
                    3
                  ]
                },
                "Spread_DamagePercentage": {
                  "operator": "Variables[0] (1.8) || RETURN",
                  "displayLines": "1.8",
                  "constants": [],
                  "variables": [
                    1.8
                  ]
                },
                "ThirdLayer": {
                  "operator": "Variables[0] (7) || RETURN",
                  "displayLines": "7",
                  "constants": [],
                  "variables": [
                    7
                  ]
                },
                "DefenceIgnore": {
                  "operator": "Variables[0] (0.2) || RETURN",
                  "displayLines": "0.2",
                  "constants": [],
                  "variables": [
                    0.2
                  ]
                },
                "Cast_By_Level": 0
              },
              "addStacksPerTrigger": {
                "operator": "Variables[0] (Rank06_Weighted_Stack_Layer) || RETURN",
                "displayLines": "Rank06_Weighted_Stack_Layer",
                "constants": [],
                "variables": [
                  "Rank06_Weighted_Stack_Layer"
                ]
              }
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Single Target (Primary)",
          "modifier": "BlackSwan_DefenceDown[<span class=\"descriptionNumberColor\">Decadence, False Twilight</span>]",
          "duration": {
            "operator": "Variables[0] (3) || RETURN",
            "displayLines": "3",
            "constants": [],
            "variables": [
              3
            ]
          },
          "baseChance": {
            "operator": "Variables[0] (1) || RETURN",
            "displayLines": "1",
            "constants": [],
            "variables": [
              1
            ]
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (0.208) || RETURN",
              "displayLines": "0.208",
              "constants": [],
              "variables": [
                0.208
              ]
            }
          }
        },
        {
          "name": "Find New Target",
          "from": "Blast (Adjacent)",
          "searchRandom": true,
          "maxTargets": 2,
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": "Use Prior Target(s) Defined",
              "modifier": "BlackSwan_DefenceDown[<span class=\"descriptionNumberColor\">Decadence, False Twilight</span>]",
              "duration": {
                "operator": "Variables[0] (3) || RETURN",
                "displayLines": "3",
                "constants": [],
                "variables": [
                  3
                ]
              },
              "baseChance": {
                "operator": "Variables[0] (1) || RETURN",
                "displayLines": "1",
                "constants": [],
                "variables": [
                  1
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.208) || RETURN",
                  "displayLines": "0.208",
                  "constants": [],
                  "variables": [
                    0.208
                  ]
                }
              }
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "BlackSwan_DefenceDown[<span class=\"descriptionNumberColor\">Decadence, False Twilight</span>]",
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
                  "target": "Owner of this Modifier",
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
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": [],
          "description": "DEF -<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "DEF Reduction",
          "statusName": "Decadence, False Twilight"
        }
      ]
    },
    "BlackSwan_BlackSwan_Ability02_Part01": {
      "fileName": "BlackSwan_BlackSwan_Ability02_Part01",
      "abilityType": "Skill",
      "energy": 30,
      "toughnessList": [
        20,
        0,
        10
      ],
      "parse": [
        {
          "name": "Trigger Ability",
          "from": "Caster",
          "ability": "BlackSwan_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "BlackSwan_BlackSwan_Ability01_Part02": {
      "fileName": "BlackSwan_BlackSwan_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (0.6) || RETURN",
              "displayLines": "0.6",
              "constants": [],
              "variables": [
                0.6
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
              "DamageType": "Wind"
            },
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "Is Part Of Team",
            "target": "Single Target (Primary)",
            "team": "TeamDark"
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "AddDot",
              "variables": {
                "Arg01": {
                  "operator": "Variables[0] (0.65) || RETURN",
                  "displayLines": "0.65",
                  "constants": [],
                  "variables": [
                    0.65
                  ]
                }
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": "Single Target (Primary)",
                "flagName": "STAT_DOT_Poison"
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "AddDot",
                  "variables": {
                    "Arg01": {
                      "operator": "Variables[0] (0.65) || RETURN",
                      "displayLines": "0.65",
                      "constants": [],
                      "variables": [
                        0.65
                      ]
                    }
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": "Single Target (Primary)",
                "flagName": "STAT_DOT_Bleed"
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "AddDot",
                  "variables": {
                    "Arg01": {
                      "operator": "Variables[0] (0.65) || RETURN",
                      "displayLines": "0.65",
                      "constants": [],
                      "variables": [
                        0.65
                      ]
                    }
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": "Single Target (Primary)",
                "flagName": "STAT_DOT_Burn"
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "AddDot",
                  "variables": {
                    "Arg01": {
                      "operator": "Variables[0] (0.65) || RETURN",
                      "displayLines": "0.65",
                      "constants": [],
                      "variables": [
                        0.65
                      ]
                    }
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": "Single Target (Primary)",
                "flagName": "STAT_DOT_Electric"
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "AddDot",
                  "variables": {
                    "Arg01": {
                      "operator": "Variables[0] (0.65) || RETURN",
                      "displayLines": "0.65",
                      "constants": [],
                      "variables": [
                        0.65
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "BlackSwan_BlackSwan_Ability01_Part01": {
      "fileName": "BlackSwan_BlackSwan_Ability01_Part01",
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
          "ability": "BlackSwan_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "BlackSwan_Modifiers": {
      "fileName": "BlackSwan_Modifiers",
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
          "for": "M_BlackSwan_DOT_Eidolon4_HaveAddedSP",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "KeepOnDeathrattle"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "M_BlackSwan_P01_AddDOTFlag",
          "stackType": "Replace",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "KeepOnDeathrattle"
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "M_BlackSwan_Maze_StopAddDot",
          "counter": 1,
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "KeepOnDeathrattle"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "M_BlackSwan_ForbidEffectFlag",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": "Owner of this Modifier",
                    "modifier": "BlackSwan_DOT_Enhance[<span class=\"descriptionNumberColor\">Epiphany</span>]"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "M_BlackSwan_DOT_Eidolon4_AddSP",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Update Energy",
                  "on": "Caster",
                  "value": {
                    "operator": "Variables[0] (Rank04_SPAdded) || RETURN",
                    "displayLines": "Rank04_SPAdded",
                    "constants": [],
                    "variables": [
                      "Rank04_SPAdded"
                    ]
                  },
                  "isFixed": "* ERR"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "M_BlackSwan_DOT_Eidolon4_HaveAddedSP"
                },
                "Modifier Deletes Itself"
              ],
              "priorityLevel": -10
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "BlackSwan_DOT_Enhance[<span class=\"descriptionNumberColor\">Epiphany</span>]",
          "counter": 1,
          "stackType": "Replace",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "FixedPerformTime",
            "RetainCountZero",
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Flags from Modifier",
                  "target": "Owner of this Modifier",
                  "flagName": [
                    "STAT_DOT_Burn",
                    "STAT_DOT_Bleed",
                    "STAT_DOT_Electric"
                  ],
                  "modifierName": "BlackSwan_DOT[<span class=\"descriptionNumberColor\">Arcana</span>]"
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Current Turn Is",
                    "target": "Owner of this Modifier"
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
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 4
                  },
                  "passed": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": "Owner of this Modifier",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">EffectRES</span>&nbsp;",
                      "value": {
                        "operator": "Constants[0] (0) || Variables[0] (MDF_ResistanceDown) || SUB || RETURN",
                        "displayLines": "(0 - MDF_ResistanceDown)",
                        "constants": [
                          0
                        ],
                        "variables": [
                          "MDF_ResistanceDown"
                        ]
                      }
                    },
                    {
                      "name": "Update Modifier Description",
                      "popUpText": "Reduces Effect RES by #2[i]%. DMG received increases by #1[i]% during this unit's turn. While afflicted with Arcana, this unit is also considered to be simultaneously inflicted with Wind Shear, Bleed, Burn, and Shock. Additionally, after Arcana causes DMG at the start of each turn, its stacks do not reset. This effect can trigger #3[i] more time(s)."
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "M_BlackSwan_DOT_Eidolon4_HaveAddedSP"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "M_BlackSwan_DOT_Eidolon4_AddSP",
                      "valuePerStack": {
                        "Eidolon4_SPAdded": {
                          "operator": "Variables[0] (8) || RETURN",
                          "displayLines": "8",
                          "constants": [],
                          "variables": [
                            8
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": "Owner of this Modifier",
                  "variableName": "MDF_Count",
                  "multiplier": 1
                },
                {
                  "name": "Add Flags to Modifier",
                  "target": "Owner of this Modifier",
                  "flagName": [
                    "STAT_DOT_Burn",
                    "STAT_DOT_Bleed",
                    "STAT_DOT_Electric"
                  ],
                  "modifierName": "BlackSwan_DOT[<span class=\"descriptionNumberColor\">Arcana</span>]"
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyValue",
            "MDF_ResistanceDown",
            "MDF_Count",
            "SecondLayer",
            "ThirdLayer"
          ],
          "latentQueue": [],
          "description": "The DMG received increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> during this unit's turn. While in Arcana state, this unit is also considered to be simultaneously inflicted with Wind Shear, Bleed, Burn, and Shock. Additionally, after Arcana causes DMG at the start of each turn, its stacks do not reset. This effect can trigger <span class=\"descriptionNumberColor\">MDF_Count</span> more time(s).",
          "type": "Debuff",
          "effectName": "Epiphany",
          "statusName": "Epiphany",
          "duration": 2
        },
        {
          "name": "Modifier Construction",
          "for": "M_BlackSwan_DOTFlag",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": "Owner of this Modifier",
                    "modifier": "BlackSwan_DOT[<span class=\"descriptionNumberColor\">Arcana</span>]",
                    "invertCondition": true
                  },
                  "passed": [
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": "Owner of this Modifier",
                        "modifier": "BlackSwan_DOT[<span class=\"descriptionNumberColor\">Arcana</span>]",
                        "invertCondition": true
                      },
                      {
                        "name": "Target Exists",
                        "target": "Owner of this Modifier",
                        "living": true
                      }
                    ]
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
          "for": "M_BlackSwan_DOT_DefenceIgnore",
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
                      "DOT"
                    ],
                    "target": "Use Prior Target(s) Defined"
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "on": "Defender",
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
            }
          ],
          "duration": 1
        },
        {
          "name": "Modifier Construction",
          "for": "BlackSwan_DOT[<span class=\"descriptionNumberColor\">Arcana</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_DOT",
            "DynamicInjectLoop"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "M_BlackSwan_P01_AddDOTFlag"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": "Owner of this Modifier",
                  "scope": "ContextModifier",
                  "valueType": "Layer",
                  "variableName": "Dot_Layer_Count",
                  "multiplier": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Target Exists",
                        "target": "Snapshot Entity's Real Owner",
                        "living": true
                      },
                      {
                        "name": "Compare: Variable",
                        "target": "Owner of this Modifier",
                        "value1": "Cast_By_Level",
                        "compareType": ">=",
                        "value2": 1,
                        "contextScope": "ContextModifier"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "M_BlackSwan_ForbidEffectFlag"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": "Owner of this Modifier",
                        "value1": "Dot_Layer_Count",
                        "compareType": "<",
                        "value2": {
                          "operator": "Variables[0] (SecondLayer) || RETURN",
                          "displayLines": "SecondLayer",
                          "constants": [],
                          "variables": [
                            "SecondLayer"
                          ]
                        },
                        "contextScope": "ContextModifier"
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": "Owner of this Modifier",
                            "modifier": "BlackSwan_DOT_Enhance[<span class=\"descriptionNumberColor\">Epiphany</span>]"
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Body-Types",
                            "target": "Owner of this Modifier",
                            "types": [
                              "LittleMonster",
                              "MiddleMonster"
                            ]
                          },
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Has Body-Types",
                                "target": "Owner of this Modifier",
                                "types": [
                                  "LargeMonster"
                                ]
                              }
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": "Owner of this Modifier",
                            "value1": "Dot_Layer_Count",
                            "compareType": "<",
                            "value2": {
                              "operator": "Variables[0] (ThirdLayer) || RETURN",
                              "displayLines": "ThirdLayer",
                              "constants": [],
                              "variables": [
                                "ThirdLayer"
                              ]
                            },
                            "contextScope": "ContextModifier"
                          },
                          "passed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": "Owner of this Modifier",
                                "modifier": "BlackSwan_DOT_Enhance[<span class=\"descriptionNumberColor\">Epiphany</span>]"
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": "Owner of this Modifier",
                                "modifier": "BlackSwan_DOT_Enhance[<span class=\"descriptionNumberColor\">Epiphany</span>]"
                              }
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": "Owner of this Modifier",
                        "value1": "Dot_Layer_Count",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (ThirdLayer) || RETURN",
                          "displayLines": "ThirdLayer",
                          "constants": [],
                          "variables": [
                            "ThirdLayer"
                          ]
                        },
                        "contextScope": "ContextModifier"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Owner of this Modifier",
                          "modifier": "M_BlackSwan_DOT_DefenceIgnore",
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (DefenceIgnore) || RETURN",
                              "displayLines": "DefenceIgnore",
                              "constants": [],
                              "variables": [
                                "DefenceIgnore"
                              ]
                            }
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": "[ADJACENT TARGETS OF] Owner of this Modifier",
                          "modifier": "M_BlackSwan_DOT_DefenceIgnore",
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (DefenceIgnore) || RETURN",
                              "displayLines": "DefenceIgnore",
                              "constants": [],
                              "variables": [
                                "DefenceIgnore"
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
                        "target": "Owner of this Modifier",
                        "value1": "Dot_Layer_Count",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (ThirdLayer) || RETURN",
                          "displayLines": "ThirdLayer",
                          "constants": [],
                          "variables": [
                            "ThirdLayer"
                          ]
                        },
                        "contextScope": "ContextModifier"
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": "Owner of this Modifier",
                            "modifier": "BlackSwan_DOT_Enhance[<span class=\"descriptionNumberColor\">Epiphany</span>]"
                          },
                          "passed": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": "Owner of this Modifier",
                              "AttackScaling": {
                                "DamageType": "Wind",
                                "Damage": {
                                  "operator": "Variables[0] (Basic_DamagePercentage) || Variables[1] (Dot_Layer_Count) || Variables[2] (ExtraLayer_DamagePercentage) || MUL || ADD || RETURN",
                                  "displayLines": "(Basic_DamagePercentage + (Dot_Layer_Count * ExtraLayer_DamagePercentage))",
                                  "constants": [],
                                  "variables": [
                                    "Basic_DamagePercentage",
                                    "Dot_Layer_Count",
                                    "ExtraLayer_DamagePercentage"
                                  ]
                                },
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "DOT"
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": "Owner of this Modifier",
                              "AttackScaling": {
                                "DamageType": "Wind",
                                "Damage": {
                                  "operator": "Variables[0] (Basic_DamagePercentage) || Variables[1] (Dot_Layer_Count) || Variables[2] (ExtraLayer_DamagePercentage) || MUL || ADD || RETURN",
                                  "displayLines": "(Basic_DamagePercentage + (Dot_Layer_Count * ExtraLayer_DamagePercentage))",
                                  "constants": [],
                                  "variables": [
                                    "Basic_DamagePercentage",
                                    "Dot_Layer_Count",
                                    "ExtraLayer_DamagePercentage"
                                  ]
                                },
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "DOT"
                              }
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": "Owner of this Modifier",
                            "modifier": "BlackSwan_DOT_Enhance[<span class=\"descriptionNumberColor\">Epiphany</span>]"
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": "Owner of this Modifier",
                            "value1": "Dot_Layer_Count",
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] (SecondLayer) || RETURN",
                              "displayLines": "SecondLayer",
                              "constants": [],
                              "variables": [
                                "SecondLayer"
                              ]
                            },
                            "contextScope": "ContextModifier"
                          },
                          "passed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": "Owner of this Modifier",
                                "modifier": "BlackSwan_DOT_Enhance[<span class=\"descriptionNumberColor\">Epiphany</span>]"
                              },
                              "passed": [
                                {
                                  "name": "ATK Scaling DMG",
                                  "target": "Owner of this Modifier",
                                  "AttackScaling": {
                                    "DamageType": "Wind",
                                    "Damage": {
                                      "operator": "Variables[0] (Basic_DamagePercentage) || Variables[1] (Dot_Layer_Count) || Variables[2] (ExtraLayer_DamagePercentage) || MUL || ADD || RETURN",
                                      "displayLines": "(Basic_DamagePercentage + (Dot_Layer_Count * ExtraLayer_DamagePercentage))",
                                      "constants": [],
                                      "variables": [
                                        "Basic_DamagePercentage",
                                        "Dot_Layer_Count",
                                        "ExtraLayer_DamagePercentage"
                                      ]
                                    },
                                    "Toughness": null,
                                    "Tags": null,
                                    "attackType": "DOT"
                                  }
                                }
                              ],
                              "failed": [
                                {
                                  "name": "ATK Scaling DMG",
                                  "target": "Owner of this Modifier",
                                  "AttackScaling": {
                                    "DamageType": "Wind",
                                    "Damage": {
                                      "operator": "Variables[0] (Basic_DamagePercentage) || Variables[1] (Dot_Layer_Count) || Variables[2] (ExtraLayer_DamagePercentage) || MUL || ADD || RETURN",
                                      "displayLines": "(Basic_DamagePercentage + (Dot_Layer_Count * ExtraLayer_DamagePercentage))",
                                      "constants": [],
                                      "variables": [
                                        "Basic_DamagePercentage",
                                        "Dot_Layer_Count",
                                        "ExtraLayer_DamagePercentage"
                                      ]
                                    },
                                    "Toughness": null,
                                    "Tags": null,
                                    "attackType": "DOT"
                                  }
                                }
                              ]
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": "Owner of this Modifier",
                                "modifier": "BlackSwan_DOT_Enhance[<span class=\"descriptionNumberColor\">Epiphany</span>]"
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": "Owner of this Modifier",
                                "modifier": "BlackSwan_DOT_Enhance[<span class=\"descriptionNumberColor\">Epiphany</span>]"
                              },
                              "passed": [
                                {
                                  "name": "ATK Scaling DMG",
                                  "target": "Owner of this Modifier",
                                  "AttackScaling": {
                                    "DamageType": "Wind",
                                    "Damage": {
                                      "operator": "Variables[0] (Basic_DamagePercentage) || Variables[1] (Dot_Layer_Count) || Variables[2] (ExtraLayer_DamagePercentage) || MUL || ADD || RETURN",
                                      "displayLines": "(Basic_DamagePercentage + (Dot_Layer_Count * ExtraLayer_DamagePercentage))",
                                      "constants": [],
                                      "variables": [
                                        "Basic_DamagePercentage",
                                        "Dot_Layer_Count",
                                        "ExtraLayer_DamagePercentage"
                                      ]
                                    },
                                    "Toughness": null,
                                    "Tags": null,
                                    "attackType": "DOT"
                                  }
                                }
                              ],
                              "failed": [
                                {
                                  "name": "ATK Scaling DMG",
                                  "target": "Owner of this Modifier",
                                  "AttackScaling": {
                                    "DamageType": "Wind",
                                    "Damage": {
                                      "operator": "Variables[0] (Basic_DamagePercentage) || Variables[1] (Dot_Layer_Count) || Variables[2] (ExtraLayer_DamagePercentage) || MUL || ADD || RETURN",
                                      "displayLines": "(Basic_DamagePercentage + (Dot_Layer_Count * ExtraLayer_DamagePercentage))",
                                      "constants": [],
                                      "variables": [
                                        "Basic_DamagePercentage",
                                        "Dot_Layer_Count",
                                        "ExtraLayer_DamagePercentage"
                                      ]
                                    },
                                    "Toughness": null,
                                    "Tags": null,
                                    "attackType": "DOT"
                                  }
                                }
                              ]
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": "Owner of this Modifier",
                                "modifier": "BlackSwan_DOT_Enhance[<span class=\"descriptionNumberColor\">Epiphany</span>]"
                              }
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": "Owner of this Modifier",
                        "value1": "Dot_Layer_Count",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (SecondLayer) || RETURN",
                          "displayLines": "SecondLayer",
                          "constants": [],
                          "variables": [
                            "SecondLayer"
                          ]
                        },
                        "contextScope": "ContextModifier"
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": "Owner of this Modifier",
                            "modifier": "BlackSwan_DOT_Enhance[<span class=\"descriptionNumberColor\">Epiphany</span>]"
                          },
                          "passed": [
                            {
                              "name": "Remove Flags from Modifier",
                              "target": "Owner of this Modifier",
                              "flagName": [
                                "STAT_DOT_Poison",
                                "STAT_DOT_Burn",
                                "STAT_DOT_Bleed",
                                "STAT_DOT_Electric"
                              ],
                              "modifierName": "BlackSwan_DOT[<span class=\"descriptionNumberColor\">Arcana</span>]"
                            },
                            {
                              "name": "ATK Scaling DMG",
                              "target": "[ADJACENT TARGETS OF] Owner of this Modifier",
                              "AttackScaling": {
                                "DamageType": "Wind",
                                "Damage": {
                                  "operator": "Variables[0] (Spread_DamagePercentage) || RETURN",
                                  "displayLines": "Spread_DamagePercentage",
                                  "constants": [],
                                  "variables": [
                                    "Spread_DamagePercentage"
                                  ]
                                },
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "DOT"
                              }
                            },
                            {
                              "name": "Add Flags to Modifier",
                              "target": "Owner of this Modifier",
                              "flagName": [
                                "STAT_DOT_Poison",
                                "STAT_DOT_Burn",
                                "STAT_DOT_Bleed",
                                "STAT_DOT_Electric"
                              ],
                              "modifierName": "BlackSwan_DOT[<span class=\"descriptionNumberColor\">Arcana</span>]"
                            }
                          ],
                          "failed": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": "[ADJACENT TARGETS OF] Owner of this Modifier",
                              "AttackScaling": {
                                "DamageType": "Wind",
                                "Damage": {
                                  "operator": "Variables[0] (Spread_DamagePercentage) || RETURN",
                                  "displayLines": "Spread_DamagePercentage",
                                  "constants": [],
                                  "variables": [
                                    "Spread_DamagePercentage"
                                  ]
                                },
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "DOT"
                              }
                            }
                          ]
                        },
                        {
                          "name": "Find New Target",
                          "from": "[ADJACENT TARGETS OF] Owner of this Modifier",
                          "maxTargets": 2,
                          "ifTargetFound": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": "Use Prior Target(s) Defined",
                              "modifier": "M_BlackSwan_P01_AddDOTFlag"
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "target": "Owner of this Modifier",
                                "value1": "Dot_Layer_Count",
                                "compareType": ">=",
                                "value2": {
                                  "operator": "Variables[0] (ThirdLayer) || RETURN",
                                  "displayLines": "ThirdLayer",
                                  "constants": [],
                                  "variables": [
                                    "ThirdLayer"
                                  ]
                                },
                                "contextScope": "ContextModifier"
                              },
                              "passed": [
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Has Modifier",
                                    "target": "Owner of this Modifier",
                                    "modifier": "BlackSwan_DOT_Enhance[<span class=\"descriptionNumberColor\">Epiphany</span>]"
                                  }
                                }
                              ],
                              "failed": [
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Has Modifier",
                                    "target": "Owner of this Modifier",
                                    "modifier": "BlackSwan_DOT_Enhance[<span class=\"descriptionNumberColor\">Epiphany</span>]"
                                  }
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "M_BlackSwan_DOT_DefenceIgnore"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "[ADJACENT TARGETS OF] Owner of this Modifier",
                      "modifier": "M_BlackSwan_DOT_DefenceIgnore"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "M_BlackSwan_ForbidEffectFlag"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "M_BlackSwan_ForbidEffectFlag"
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": "Owner of this Modifier",
                      "AttackScaling": {
                        "DamageType": "Wind",
                        "Damage": {
                          "operator": "Variables[0] (Basic_DamagePercentage) || Variables[1] (Dot_Layer_Count) || Variables[2] (ExtraLayer_DamagePercentage) || MUL || ADD || RETURN",
                          "displayLines": "(Basic_DamagePercentage + (Dot_Layer_Count * ExtraLayer_DamagePercentage))",
                          "constants": [],
                          "variables": [
                            "Basic_DamagePercentage",
                            "Dot_Layer_Count",
                            "ExtraLayer_DamagePercentage"
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "DOT"
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": "Owner of this Modifier",
                        "modifier": "BlackSwan_DOT_Enhance[<span class=\"descriptionNumberColor\">Epiphany</span>]"
                      }
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "M_BlackSwan_ForbidEffectFlag"
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
                        "modifier": "BlackSwan_DOT_Enhance[<span class=\"descriptionNumberColor\">Epiphany</span>]"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": "Owner of this Modifier",
                        "value1": "BlackSwan_DOT_Enhance[<span class=\"descriptionNumberColor\">Epiphany</span>]",
                        "compareType": ">=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "target": "Owner of this Modifier",
                      "variableName": "_enhance_count",
                      "modifierName": "BlackSwan_DOT_Enhance[<span class=\"descriptionNumberColor\">Epiphany</span>]",
                      "multiplier": 1
                    },
                    {
                      "name": "Define Modifier Variable",
                      "modifierName": "BlackSwan_DOT_Enhance[<span class=\"descriptionNumberColor\">Epiphany</span>]",
                      "value": {
                        "operator": "Variables[0] (_enhance_count) || Constants[0] (1) || SUB || RETURN",
                        "displayLines": "(_enhance_count - 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "_enhance_count"
                        ]
                      }
                    },
                    {
                      "name": "Define Modifier-Specific Variable",
                      "modifierName": "BlackSwan_DOT_Enhance[<span class=\"descriptionNumberColor\">Epiphany</span>]",
                      "variableName": "MDF_Count",
                      "value": {
                        "operator": "Variables[0] (_enhance_count) || Constants[0] (1) || SUB || RETURN",
                        "displayLines": "(_enhance_count - 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "_enhance_count"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "M_BlackSwan_ForbidEffectFlag"
                    },
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "target": "Owner of this Modifier",
                      "scope": "ContextModifier",
                      "valueType": "Layer",
                      "variableName": "Dot_Layer_Count",
                      "multiplier": 1
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "BlackSwan_DOT[<span class=\"descriptionNumberColor\">Arcana</span>]",
                      "addStacksPerTrigger": {
                        "operator": "Constants[0] (1) || Variables[0] (ExtraLayer_DamagePercentage) || SUB || RETURN",
                        "displayLines": "(1 - ExtraLayer_DamagePercentage)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "ExtraLayer_DamagePercentage"
                        ]
                      },
                      "silentAdd": true
                    },
                    {
                      "name": "UI Display Event (On Entity)",
                      "target": "Owner of this Modifier",
                      "popUpText": "Reset Arcana Stacks"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "M_BlackSwan_ForbidEffectFlag"
                    }
                  ]
                }
              ],
              "priorityLevel": 90
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": "Owner of this Modifier",
                  "scope": "ContextModifier",
                  "valueType": "MaxLayer",
                  "variableName": "MDF_MaxLayer",
                  "multiplier": 1
                },
                {
                  "name": "Add Flags to Modifier",
                  "target": "Owner of this Modifier",
                  "flagName": [
                    "STAT_DOT_Poison"
                  ],
                  "modifierName": "BlackSwan_DOT[<span class=\"descriptionNumberColor\">Arcana</span>]",
                  "casterFilter": "Caster"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": "Owner of this Modifier",
                    "modifier": "BlackSwan_DOT_Enhance[<span class=\"descriptionNumberColor\">Epiphany</span>]",
                    "justAddedOrActive": true
                  },
                  "passed": [
                    {
                      "name": "Add Flags to Modifier",
                      "target": "Owner of this Modifier",
                      "flagName": [
                        "STAT_DOT_Burn",
                        "STAT_DOT_Bleed",
                        "STAT_DOT_Electric"
                      ],
                      "modifierName": "BlackSwan_DOT[<span class=\"descriptionNumberColor\">Arcana</span>]"
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "M_BlackSwan_DOTFlag"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": "Owner of this Modifier",
                        "modifier": "M_BlackSwan_ForbidEffectFlag",
                        "invertCondition": true,
                        "justAddedOrActive": true
                      },
                      {
                        "name": "Compare: Variable",
                        "target": "Owner of this Modifier",
                        "value1": "Cast_By_Level",
                        "compareType": "<=",
                        "value2": 0,
                        "contextScope": "ContextModifier"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": "Owner of this Modifier",
                        "modifier": "BlackSwan_DOT_Enhance[<span class=\"descriptionNumberColor\">Epiphany</span>]"
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": "Owner of this Modifier",
                            "value1": null,
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] (ThirdLayer) || RETURN",
                              "displayLines": "ThirdLayer",
                              "constants": [],
                              "variables": [
                                "ThirdLayer"
                              ]
                            },
                            "valueType": "Layer"
                          },
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "target": "Owner of this Modifier",
                                "value1": null,
                                "compareType": ">=",
                                "value2": {
                                  "operator": "Variables[0] (SecondLayer) || RETURN",
                                  "displayLines": "SecondLayer",
                                  "constants": [],
                                  "variables": [
                                    "SecondLayer"
                                  ]
                                },
                                "valueType": "Layer"
                              }
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": "Owner of this Modifier",
                            "value1": null,
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] (ThirdLayer) || RETURN",
                              "displayLines": "ThirdLayer",
                              "constants": [],
                              "variables": [
                                "ThirdLayer"
                              ]
                            },
                            "valueType": "Layer"
                          },
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "target": "Owner of this Modifier",
                                "value1": null,
                                "compareType": ">=",
                                "value2": {
                                  "operator": "Variables[0] (SecondLayer) || RETURN",
                                  "displayLines": "SecondLayer",
                                  "constants": [],
                                  "variables": [
                                    "SecondLayer"
                                  ]
                                },
                                "valueType": "Layer"
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
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": "Owner of this Modifier",
                  "scope": "ContextModifier",
                  "valueType": "Layer",
                  "variableName": "Dot_Layer_Count",
                  "multiplier": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": "Owner of this Modifier",
                    "modifier": "BlackSwan_DOT_Enhance[<span class=\"descriptionNumberColor\">Epiphany</span>]"
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": "Owner of this Modifier",
                      "AttackScaling": {
                        "DamageType": "Wind",
                        "Damage": {
                          "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (Basic_DamagePercentage) || Variables[2] (Dot_Layer_Count) || Variables[3] (ExtraLayer_DamagePercentage) || MUL || ADD || MUL || RETURN",
                          "displayLines": "(DOT_TriggerRatio * (Basic_DamagePercentage + (Dot_Layer_Count * ExtraLayer_DamagePercentage)))",
                          "constants": [],
                          "variables": [
                            "DOT_TriggerRatio",
                            "Basic_DamagePercentage",
                            "Dot_Layer_Count",
                            "ExtraLayer_DamagePercentage"
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "DOT"
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": "Owner of this Modifier",
                      "AttackScaling": {
                        "DamageType": "Wind",
                        "Damage": {
                          "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (Basic_DamagePercentage) || Variables[2] (Dot_Layer_Count) || Variables[3] (ExtraLayer_DamagePercentage) || MUL || ADD || MUL || RETURN",
                          "displayLines": "(DOT_TriggerRatio * (Basic_DamagePercentage + (Dot_Layer_Count * ExtraLayer_DamagePercentage)))",
                          "constants": [],
                          "variables": [
                            "DOT_TriggerRatio",
                            "Basic_DamagePercentage",
                            "Dot_Layer_Count",
                            "ExtraLayer_DamagePercentage"
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "DOT"
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "stackData": [
            "Basic_DamagePercentage",
            "ExtraLayer_DamagePercentage",
            "SecondLayer",
            "Spread_DamagePercentage",
            "ThirdLayer",
            "DefenceIgnore",
            "Cast_By_Level"
          ],
          "latentQueue": [],
          "description": "Takes Wind DMG at the start of each turn. Being afflicted with Arcana will also be considered as suffering from Wind Shear. This state stacks up to <span class=\"descriptionNumberColor\">MDF_MaxLayer</span> times.",
          "type": "Debuff",
          "effectName": "Arcana",
          "statusName": "Arcana"
        }
      ],
      "references": []
    }
  }
}