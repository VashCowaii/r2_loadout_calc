const configAbility = {
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
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceWind</span>&nbsp;",
                          "value": "(0 - MDF_PropertyValue)"
                        }
                      ]
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
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistancePhysical</span>&nbsp;",
                          "value": "(0 - MDF_PropertyValue)"
                        }
                      ]
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
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceFire</span>&nbsp;",
                          "value": "(0 - MDF_PropertyValue)"
                        }
                      ]
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
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceLightning</span>&nbsp;",
                          "value": "(0 - MDF_PropertyValue)"
                        }
                      ]
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
}