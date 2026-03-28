const entityPageType = "char"
const compositeAbilityObject = {
  "fullCharacterName": "Black Swan",
  "trimCharacterName": "BlackSwan",
  "abilityList": [
    "BlackSwan_Advanced_BlackSwan_Eidolon6",
    "BlackSwan_Advanced_BlackSwan_Eidolon2",
    "BlackSwan_Advanced_BlackSwan_Eidolon1",
    "BlackSwan_Advanced_BlackSwan_Trace03",
    "BlackSwan_Advanced_BlackSwan_Trace02",
    "BlackSwan_Advanced_BlackSwan_Trace01",
    "BlackSwan_Advanced_BlackSwan_TechniqueInLevel_Insert",
    "BlackSwan_Advanced_BlackSwan_TechniqueInLevel",
    "BlackSwan_Advanced_BlackSwan_PassiveAbility01",
    "BlackSwan_Advanced_BlackSwan_Ability03_Part02",
    "BlackSwan_Advanced_BlackSwan_Ability03_Part01",
    "BlackSwan_Advanced_BlackSwan_Ability02_Part02",
    "BlackSwan_Advanced_BlackSwan_Ability02_Part01",
    "BlackSwan_Advanced_BlackSwan_Ability01_Part02",
    "BlackSwan_Advanced_BlackSwan_Ability01_Part01",
    "BlackSwan_Modifiers",
    "BlackSwan_Functions"
  ],
  "abilityObject": {
    "BlackSwan_Advanced_BlackSwan_Eidolon6": {
      "fileName": "BlackSwan_Advanced_BlackSwan_Eidolon6",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1096424693\">Advanced_BlackSwan_Eidolon6</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1750541211\">Advanced_BlackSwan_Eidolon6_SubOnEnemy</a>",
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
                        "of": {
                          "name": "Target Name",
                          "target": "{{All Team Members(Exclude Self)}}.[[addBattleEvents]]"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
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
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1854270895\">M_Advanced_BlackSwan_Eidolon6_AddDOTFlag</a>",
                      "referenceModifier": "<a class=\"gModGreen\" id=\"1832901043\">MReference_Empty</a>"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1096424693\">Advanced_BlackSwan_Eidolon6</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier is Added [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-1854270895\">M_Advanced_BlackSwan_Eidolon6_AddDOTFlag</a>"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1854270895\">M_Advanced_BlackSwan_Eidolon6_AddDOTFlag</a>"
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"632471047\">function_Advanced_BlackSwan_AddDOT</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variables": {
                        "parameter[0]_AddLayer": 1,
                        "parameter[1]_Chance": {
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
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE, with Unselectables)}}.[[removeBattleEvents]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1750541211\">Advanced_BlackSwan_Eidolon6_SubOnEnemy</a>",
              "haloStatus": true
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "BlackSwan_Advanced_BlackSwan_Eidolon2": {
      "fileName": "BlackSwan_Advanced_BlackSwan_Eidolon2",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1029314217\">Advanced_BlackSwan_Eidolon2</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1069012711\">Advanced_BlackSwan_Eidolon2_AddDotOnCreate</a>",
          "execute": [
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
                    "team": "Enemy Team"
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"632471047\">function_Advanced_BlackSwan_AddDOT</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variables": {
                        "parameter[0]_AddLayer": {
                          "operator": "Variables[0] (30) || RETURN",
                          "displayLines": "30",
                          "constants": [],
                          "variables": [
                            30
                          ]
                        },
                        "parameter[1]_Chance": {
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
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1029314217\">Advanced_BlackSwan_Eidolon2</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"632471047\">function_Advanced_BlackSwan_AddDOT</a>",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE, with Unselectables)}}"
                  },
                  "variables": {
                    "parameter[0]_AddLayer": {
                      "operator": "Variables[0] (30) || RETURN",
                      "displayLines": "30",
                      "constants": [],
                      "variables": [
                        30
                      ]
                    },
                    "parameter[1]_Chance": {
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1069012711\">Advanced_BlackSwan_Eidolon2_AddDotOnCreate</a>"
                },
                "Modifier Deletes Itself"
              ],
              "priorityLevel": -80
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "BlackSwan_Advanced_BlackSwan_Eidolon1": {
      "fileName": "BlackSwan_Advanced_BlackSwan_Eidolon1",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1012536598\">Advanced_BlackSwan_Eidolon1</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1004290042\">Advanced_BlackSwan_Eidolon1_ThunderResistanceDown</a>",
          "stackType": "EntityUnique",
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
                  "modifierName": "<a class=\"gModGreen\" id=\"-1004290042\">Advanced_BlackSwan_Eidolon1_ThunderResistanceDown</a>",
                  "modifierNameUpdate": "<a class=\"gModGreen\" id=\"-1059820745\">BlackSwan_Eidolon1_ThunderResistanceDown</a>[<span class=\"descriptionNumberColor\">Seven Pillars of Wisdom</span>]"
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-105360526\">Advanced_BlackSwan_Eidolon1_FireResistanceDown</a>",
          "stackType": "EntityUnique",
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
                  "modifierName": "<a class=\"gModGreen\" id=\"-105360526\">Advanced_BlackSwan_Eidolon1_FireResistanceDown</a>",
                  "modifierNameUpdate": "<a class=\"gModGreen\" id=\"757395769\">BlackSwan_Eidolon1_FireResistanceDown</a>[<span class=\"descriptionNumberColor\">Seven Pillars of Wisdom</span>]"
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1029321993\">Advanced_BlackSwan_Eidolon1_PhysicalResistanceDown</a>",
          "stackType": "EntityUnique",
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
                  "modifierName": "<a class=\"gModGreen\" id=\"-1029321993\">Advanced_BlackSwan_Eidolon1_PhysicalResistanceDown</a>",
                  "modifierNameUpdate": "<a class=\"gModGreen\" id=\"184250140\">BlackSwan_Eidolon1_PhysicalResistanceDown</a>[<span class=\"descriptionNumberColor\">Seven Pillars of Wisdom</span>]"
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-666436048\">Advanced_BlackSwan_Eidolon1_WindResistanceDown</a>",
          "stackType": "EntityUnique",
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
                  "modifierName": "<a class=\"gModGreen\" id=\"-666436048\">Advanced_BlackSwan_Eidolon1_WindResistanceDown</a>",
                  "modifierNameUpdate": "<a class=\"gModGreen\" id=\"-698439125\">BlackSwan_Eidolon1_WindResistanceDown</a>[<span class=\"descriptionNumberColor\">Seven Pillars of Wisdom</span>]"
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-426669390\">Advanced_BlackSwan_Eidolon1_SubOnEnemy</a>",
          "stackType": "EntityUnique",
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"866598290\">Advanced_BlackSwan_DOT</a>[<span class=\"descriptionNumberColor\">Arcana</span>]"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-666436048\">Advanced_BlackSwan_Eidolon1_WindResistanceDown</a>",
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
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1029321993\">Advanced_BlackSwan_Eidolon1_PhysicalResistanceDown</a>",
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
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-105360526\">Advanced_BlackSwan_Eidolon1_FireResistanceDown</a>",
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
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1004290042\">Advanced_BlackSwan_Eidolon1_ThunderResistanceDown</a>",
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
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "STAT_DOT_Poison"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-666436048\">Advanced_BlackSwan_Eidolon1_WindResistanceDown</a>",
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
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "STAT_DOT_Bleed"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1029321993\">Advanced_BlackSwan_Eidolon1_PhysicalResistanceDown</a>",
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
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "STAT_DOT_Burn"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-105360526\">Advanced_BlackSwan_Eidolon1_FireResistanceDown</a>",
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
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "STAT_DOT_Electric"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1004290042\">Advanced_BlackSwan_Eidolon1_ThunderResistanceDown</a>",
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
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "STAT_DOT_Poison"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-666436048\">Advanced_BlackSwan_Eidolon1_WindResistanceDown</a>",
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
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-666436048\">Advanced_BlackSwan_Eidolon1_WindResistanceDown</a>",
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
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-666436048\">Advanced_BlackSwan_Eidolon1_WindResistanceDown</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "STAT_DOT_Bleed"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1029321993\">Advanced_BlackSwan_Eidolon1_PhysicalResistanceDown</a>",
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
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1029321993\">Advanced_BlackSwan_Eidolon1_PhysicalResistanceDown</a>",
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
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1029321993\">Advanced_BlackSwan_Eidolon1_PhysicalResistanceDown</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "STAT_DOT_Burn"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-105360526\">Advanced_BlackSwan_Eidolon1_FireResistanceDown</a>",
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
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-105360526\">Advanced_BlackSwan_Eidolon1_FireResistanceDown</a>",
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
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-105360526\">Advanced_BlackSwan_Eidolon1_FireResistanceDown</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "STAT_DOT_Electric"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1004290042\">Advanced_BlackSwan_Eidolon1_ThunderResistanceDown</a>",
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
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1004290042\">Advanced_BlackSwan_Eidolon1_ThunderResistanceDown</a>",
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
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1004290042\">Advanced_BlackSwan_Eidolon1_ThunderResistanceDown</a>"
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
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "flagName": "STAT_DOT_Poison"
                    }
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-666436048\">Advanced_BlackSwan_Eidolon1_WindResistanceDown</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "NOT",
                    "condition": {
                      "name": "Has Flag",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "flagName": "STAT_DOT_Bleed"
                    }
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1029321993\">Advanced_BlackSwan_Eidolon1_PhysicalResistanceDown</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "NOT",
                    "condition": {
                      "name": "Has Flag",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "flagName": "STAT_DOT_Burn"
                    }
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-105360526\">Advanced_BlackSwan_Eidolon1_FireResistanceDown</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "NOT",
                    "condition": {
                      "name": "Has Flag",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "flagName": "STAT_DOT_Electric"
                    }
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1004290042\">Advanced_BlackSwan_Eidolon1_ThunderResistanceDown</a>"
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
                        "modifier": "<a class=\"gModGreen\" id=\"866598290\">Advanced_BlackSwan_DOT</a>[<span class=\"descriptionNumberColor\">Arcana</span>]"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-666436048\">Advanced_BlackSwan_Eidolon1_WindResistanceDown</a>",
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
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1029321993\">Advanced_BlackSwan_Eidolon1_PhysicalResistanceDown</a>",
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
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-105360526\">Advanced_BlackSwan_Eidolon1_FireResistanceDown</a>",
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
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1004290042\">Advanced_BlackSwan_Eidolon1_ThunderResistanceDown</a>",
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
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-666436048\">Advanced_BlackSwan_Eidolon1_WindResistanceDown</a>",
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
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1029321993\">Advanced_BlackSwan_Eidolon1_PhysicalResistanceDown</a>",
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
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-105360526\">Advanced_BlackSwan_Eidolon1_FireResistanceDown</a>",
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
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1004290042\">Advanced_BlackSwan_Eidolon1_ThunderResistanceDown</a>",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1012536598\">Advanced_BlackSwan_Eidolon1</a>",
          "stackData": [],
          "latentQueue": [],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE, with Unselectables)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-426669390\">Advanced_BlackSwan_Eidolon1_SubOnEnemy</a>",
              "aliveOnly": "False",
              "haloStatus": true,
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
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "BlackSwan_Advanced_BlackSwan_Trace03": {
      "fileName": "BlackSwan_Advanced_BlackSwan_Trace03",
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
          "modifier": "<a class=\"gModGreen\" id=\"-2025048276\">M_Advanced_BlackSwan_Trace03</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-465998500\">Advanced_BlackSwan_Trace03_SubListener</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "CasterStatusProbability",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRate</span>&nbsp;"
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
                    "of": {
                      "name": "Target Name",
                      "target": "{{All Team Members with Unselectables}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "mustBeAlive2": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-909282596\">Advanced_BlackSwan_Trace03_Sub</a>[<span class=\"descriptionNumberColor\">Candleflame's Portent</span>]",
                      "referenceModifier": "<a class=\"gModGreen\" id=\"1337385649\">MReference_AllDamageTypeAddedRatio</a>",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (MIN) || Variables[1] (0.72) || Variables[2] (CasterStatusProbability) || Variables[3] (0.6) || MUL || PARAM_2 || FUNCTION || RETURN",
                          "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(0.72, (CasterStatusProbability * 0.6))",
                          "constants": [],
                          "variables": [
                            "MIN",
                            0.72,
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
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRate</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "CasterStatusProbability",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRate</span>&nbsp;"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{All Team Members with Unselectables}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-909282596\">Advanced_BlackSwan_Trace03_Sub</a>[<span class=\"descriptionNumberColor\">Candleflame's Portent</span>]",
                      "referenceModifier": "<a class=\"gModGreen\" id=\"1337385649\">MReference_AllDamageTypeAddedRatio</a>",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (MIN) || Variables[1] (0.72) || Variables[2] (CasterStatusProbability) || Variables[3] (0.6) || MUL || PARAM_2 || FUNCTION || RETURN",
                          "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(0.72, (CasterStatusProbability * 0.6))",
                          "constants": [],
                          "variables": [
                            "MIN",
                            0.72,
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2025048276\">M_Advanced_BlackSwan_Trace03</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "CasterStatusProbability",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRate</span>&nbsp;"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members with Unselectables}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-909282596\">Advanced_BlackSwan_Trace03_Sub</a>[<span class=\"descriptionNumberColor\">Candleflame's Portent</span>]",
                  "referenceModifier": "<a class=\"gModGreen\" id=\"1337385649\">MReference_AllDamageTypeAddedRatio</a>",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (MIN) || Variables[1] (0.72) || Variables[2] (CasterStatusProbability) || Variables[3] (0.6) || MUL || PARAM_2 || FUNCTION || RETURN",
                      "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(0.72, (CasterStatusProbability * 0.6))",
                      "constants": [],
                      "variables": [
                        "MIN",
                        0.72,
                        "CasterStatusProbability",
                        0.6
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
                  "modifier": "<a class=\"gModGreen\" id=\"-465998500\">Advanced_BlackSwan_Trace03_SubListener</a>"
                },
                "Modifier Deletes Itself"
              ],
              "priorityLevel": -80
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "BlackSwan_Advanced_BlackSwan_Trace02": {
      "fileName": "BlackSwan_Advanced_BlackSwan_Trace02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-2008270657\">M_Advanced_BlackSwan_Trace02</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1372749734\">M_Advanced_BlackSwan_Trace02_AfterEnterBattleListener</a>",
          "execute": [
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
                    "team": "Enemy Team"
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"632471047\">function_Advanced_BlackSwan_AddDOT</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variables": {
                        "parameter[0]_AddLayer": 1,
                        "parameter[1]_Chance": {
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1783045717\">Advanced_BlackSwan_DefenceDown</a>[<span class=\"descriptionNumberColor\">Decadence, False Twilight</span>]",
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
                      "referenceModifier": "<a class=\"gModGreen\" id=\"779501689\">MReference_DefenceRatioDown</a>",
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
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Name",
                    "skillName": [
                      "Skill01",
                      "Skill03"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Attack Targets of Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1783045717\">Advanced_BlackSwan_DefenceDown</a>[<span class=\"descriptionNumberColor\">Decadence, False Twilight</span>]",
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
                      "referenceModifier": "<a class=\"gModGreen\" id=\"779501689\">MReference_DefenceRatioDown</a>",
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
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2008270657\">M_Advanced_BlackSwan_Trace02</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"632471047\">function_Advanced_BlackSwan_AddDOT</a>",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE, with Unselectables)}}"
                  },
                  "variables": {
                    "parameter[0]_AddLayer": 1,
                    "parameter[1]_Chance": {
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE, with Unselectables)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1783045717\">Advanced_BlackSwan_DefenceDown</a>[<span class=\"descriptionNumberColor\">Decadence, False Twilight</span>]",
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
                  "referenceModifier": "<a class=\"gModGreen\" id=\"779501689\">MReference_DefenceRatioDown</a>",
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1372749734\">M_Advanced_BlackSwan_Trace02_AfterEnterBattleListener</a>"
                },
                "Modifier Deletes Itself"
              ],
              "priorityLevel": -80
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "BlackSwan_Advanced_BlackSwan_Trace01": {
      "fileName": "BlackSwan_Advanced_BlackSwan_Trace01",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1991493038\">M_Advanced_BlackSwan_Trace01</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2105380374\">M_Advanced_BlackSwan_Trace01_SubOnEnemy</a>",
          "execute": [
            {
              "eventTrigger": "Being Attacked End [Owner]",
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
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"632471047\">function_Advanced_BlackSwan_AddDOT</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variables": {
                        "parameter[0]_AddLayer": {
                          "operator": "Variables[0] (5) || RETURN",
                          "displayLines": "5",
                          "constants": [],
                          "variables": [
                            5
                          ]
                        },
                        "parameter[1]_Chance": {
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
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1991493038\">M_Advanced_BlackSwan_Trace01</a>",
          "stackData": [],
          "latentQueue": [],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE, with Unselectables)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2105380374\">M_Advanced_BlackSwan_Trace01_SubOnEnemy</a>",
              "aliveOnly": "False",
              "haloStatus": true
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "BlackSwan_Advanced_BlackSwan_TechniqueInLevel_Insert": {
      "fileName": "BlackSwan_Advanced_BlackSwan_TechniqueInLevel_Insert",
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
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1474232906\">M_Advanced_BlackSwan_Maze_Flag</a>"
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
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-560490418\">M_Advanced_BlackSwan_Maze_StopAddDot</a>",
                "invertCondition": true
              },
              "ifTargetFound": [
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
                        "modifier": "<a class=\"gModGreen\" id=\"803699563\">Advanced_BlackSwan_DOT_Enhance</a>[<span class=\"descriptionNumberColor\">Epiphany</span>]"
                      },
                      {
                        "name": "Random Chance",
                        "chance": {
                          "operator": "Variables[0] (0.5) || RETURN",
                          "displayLines": "0.5",
                          "constants": [],
                          "variables": [
                            0.5
                          ]
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Result_Stack_Layer",
                      "value": 2
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Result_Stack_Layer",
                      "value": 1
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
                      "variableName": "Result_Stack_Layer",
                      "value": {
                        "operator": "Variables[0] (Result_Stack_Layer) || Variables[1] (1) || ADD || RETURN",
                        "displayLines": "(Result_Stack_Layer + 1)",
                        "constants": [],
                        "variables": [
                          "Result_Stack_Layer",
                          1
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"866598290\">Advanced_BlackSwan_DOT</a>[<span class=\"descriptionNumberColor\">Arcana</span>]",
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
                    "Spread_DamagePercentage": {
                      "operator": "Variables[0] (1.8) || RETURN",
                      "displayLines": "1.8",
                      "constants": [],
                      "variables": [
                        1.8
                      ]
                    },
                    "ThresholdLayer": {
                      "operator": "Variables[0] (DOT_Layer_Threshold) || RETURN",
                      "displayLines": "DOT_Layer_Threshold",
                      "constants": [],
                      "variables": [
                        "DOT_Layer_Threshold"
                      ]
                    },
                    "DefenceIgnore": {
                      "operator": "Variables[0] (0.2) || RETURN",
                      "displayLines": "0.2",
                      "constants": [],
                      "variables": [
                        0.2
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (Result_Stack_Layer) || RETURN",
                    "displayLines": "Result_Stack_Layer",
                    "constants": [],
                    "variables": [
                      "Result_Stack_Layer"
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
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-560490418\">M_Advanced_BlackSwan_Maze_StopAddDot</a>"
                    }
                  ]
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
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-560490418\">M_Advanced_BlackSwan_Maze_StopAddDot</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1474232906\">M_Advanced_BlackSwan_Maze_Flag</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-560490418\">M_Advanced_BlackSwan_Maze_StopAddDot</a>",
          "stackData": [],
          "latentQueue": [
            "MazeSkill_Triggered",
            "_can_continue"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1474232906\">M_Advanced_BlackSwan_Maze_Flag</a>",
          "stackData": [],
          "latentQueue": [
            "MazeSkill_Triggered",
            "_can_continue"
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "BlackSwan_Advanced_BlackSwan_TechniqueInLevel": {
      "fileName": "BlackSwan_Advanced_BlackSwan_TechniqueInLevel",
      "childAbilityList": [
        "BlackSwan_Advanced_BlackSwan_TechniqueInLevel",
        "BlackSwan_Advanced_BlackSwan_TechniqueInLevel_Insert"
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
          "modifier": "<a class=\"gModGreen\" id=\"1317961344\">StageAbility_Maze_BlackSwan_Modifier</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1317961344\">StageAbility_Maze_BlackSwan_Modifier</a>",
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MazeSkill_Triggered",
                        "compareType": "<",
                        "value2": 1,
                        "contextScope": "ContextCaster"
                      },
                      {
                        "name": "Enemies Still Alive",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "includeNonTargets": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Advanced_BlackSwan_TechniqueInLevel_Insert",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "priorityTag": "AvatarBuffSelf",
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
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "BlackSwan_Advanced_BlackSwan_PassiveAbility01": {
      "fileName": "BlackSwan_Advanced_BlackSwan_PassiveAbility01",
      "childAbilityList": [
        "BlackSwan_Advanced_BlackSwan_PassiveAbility01"
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
          "modifier": "<a class=\"gModGreen\" id=\"969774839\">M_Advanced_BlackSwan_P01_ListenAddPoison</a>"
        },
        {
          "name": "Define Custom Variable",
          "scope": "ContextCaster",
          "variableName": "Max_DOT_Layer",
          "value": 999
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
              "variableName": "Have_Rank04",
              "value": 1
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-201907162\">M_Advanced_BlackSwan_Eidolon4_Listener</a>"
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Have_Rank04",
              "value": 0
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "DOT_Layer_Threshold",
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
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "DOT_Layer_Threshold",
              "value": {
                "operator": "Variables[0] (DOT_Layer_Threshold) || Variables[1] (30) || ADD || RETURN",
                "displayLines": "(DOT_Layer_Threshold + 30)",
                "constants": [],
                "variables": [
                  "DOT_Layer_Threshold",
                  30
                ]
              }
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-201907162\">M_Advanced_BlackSwan_Eidolon4_Listener</a>",
          "execute": [
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Target Exists",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target 2}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Is Part Of Team",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "team": "Enemy Team"
                          },
                          {
                            "name": "NOT",
                            "condition": {
                              "name": "Is Part Of Team",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target 2}}"
                              },
                              "team": "Enemy Team"
                            }
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"803699563\">Advanced_BlackSwan_DOT_Enhance</a>[<span class=\"descriptionNumberColor\">Epiphany</span>]",
                            "justAddedOrActive": true,
                            "includePreDeath": true
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1015025143\">M_Advanced_BlackSwan_P01_ListenAddPoison_SubOnEnemy</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "ListenBattleEventSkill"
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
                      "DOT"
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
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1745362459\">M_Advanced_BlackSwan_P01_AddDOTFlag</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__969774839\">M_Advanced_BlackSwan_P01_ListenAddPoison</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking Modifier Instance [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"1745362459\">M_Advanced_BlackSwan_P01_AddDOTFlag</a>"
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"632471047\">function_Advanced_BlackSwan_AddDOT</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variables": {
                        "parameter[0]_AddLayer": 1,
                        "parameter[1]_Chance": {
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
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE, with Unselectables)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1015025143\">M_Advanced_BlackSwan_P01_ListenAddPoison_SubOnEnemy</a>",
              "aliveOnly": "False",
              "haloStatus": true
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "BlackSwan_Advanced_BlackSwan_Ability03_Part02": {
      "fileName": "BlackSwan_Advanced_BlackSwan_Ability03_Part02",
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
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"803699563\">Advanced_BlackSwan_DOT_Enhance</a>[<span class=\"descriptionNumberColor\">Epiphany</span>]",
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
              "operator": "Variables[0] (0.25) || Variables[1] (Have_Rank04) || Variables[2] (0.2) || Constants[0] (0) || CHECK || ADD || RETURN",
              "displayLines": "(0.25 + check(value:Have_Rank04, then:0.2, else:0))",
              "constants": [
                0
              ],
              "variables": [
                0.25,
                "Have_Rank04",
                0.2
              ]
            },
            "MDF_Chance": {
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
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
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
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "BlackSwan_Advanced_BlackSwan_Ability03_Part01": {
      "fileName": "BlackSwan_Advanced_BlackSwan_Ability03_Part01",
      "childAbilityList": [
        "BlackSwan_BlackSwan_Ability03_Camera",
        "BlackSwan_Advanced_BlackSwan_Ability03_Part01",
        "BlackSwan_Advanced_BlackSwan_Ability03_Part02",
        "BlackSwan_BlackSwan_Ability03_Cutin"
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
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Advanced_BlackSwan_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "BlackSwan_Advanced_BlackSwan_Ability02_Part02": {
      "fileName": "BlackSwan_Advanced_BlackSwan_Ability02_Part02",
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
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{ST and Blast}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1783045717\">Advanced_BlackSwan_DefenceDown</a>[<span class=\"descriptionNumberColor\">Decadence, False Twilight</span>]",
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
          "referenceModifier": "<a class=\"gModGreen\" id=\"779501689\">MReference_DefenceRatioDown</a>",
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
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "BlackSwan_Advanced_BlackSwan_Ability02_Part01": {
      "fileName": "BlackSwan_Advanced_BlackSwan_Ability02_Part01",
      "childAbilityList": [
        "BlackSwan_BlackSwan_Ability02_Camera",
        "BlackSwan_Advanced_BlackSwan_Ability02_Part01",
        "BlackSwan_Advanced_BlackSwan_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
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
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Advanced_BlackSwan_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "BlackSwan_Advanced_BlackSwan_Ability01_Part02": {
      "fileName": "BlackSwan_Advanced_BlackSwan_Ability01_Part02",
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
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "BlackSwan_Advanced_BlackSwan_Ability01_Part01": {
      "fileName": "BlackSwan_Advanced_BlackSwan_Ability01_Part01",
      "childAbilityList": [
        "BlackSwan_BlackSwan_Ability01_Camera",
        "BlackSwan_Advanced_BlackSwan_Ability01_Part01",
        "BlackSwan_Advanced_BlackSwan_Ability01_Part02"
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
          "ability": "Advanced_BlackSwan_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
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
          "for": "<a class=\"gModGreen\" id=\"mod__1745362459\">M_Advanced_BlackSwan_P01_AddDOTFlag</a>",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1945456695\">M_Advanced_BlackSwan_ForbidEffectFlag</a>",
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
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"803699563\">Advanced_BlackSwan_DOT_Enhance</a>[<span class=\"descriptionNumberColor\">Epiphany</span>]"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2069898695\">M_Advanced_BlackSwan_DOT_Eidolon4_AddSP</a>",
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
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "operator": "Variables[0] (Rank04_SPAdded) || RETURN",
                    "displayLines": "Rank04_SPAdded",
                    "constants": [],
                    "variables": [
                      "Rank04_SPAdded"
                    ]
                  },
                  "isFixed": "* ERR"
                }
              ],
              "priorityLevel": -10
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__803699563\">Advanced_BlackSwan_DOT_Enhance</a>[<span class=\"descriptionNumberColor\">Epiphany</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "KeepOnDeathrattle"
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
            "MDF_PropertyValue",
            "MDF_Chance"
          ],
          "latentQueue": [],
          "description": "DMG taken increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>. When enemy targets are inflicted with \"Arcana,\" there is a <span class=\"descriptionNumberColor\">MDF_Chance</span> fixed chance to additionally increase the number of \"Arcana\" stacked this time by 1. And the number of \"Arcana\" stacks will not be halved after dealing DMG at the start of the turn.",
          "type": "Debuff",
          "effectName": "Epiphany",
          "statusName": "Epiphany",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2069898695\">M_Advanced_BlackSwan_DOT_Eidolon4_AddSP</a>",
              "haloStatus": true,
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 4
              },
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
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1001703260\">M_Advanced_BlackSwan_DOTFlag_RemainOnDeathRattle</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "KeepOnDeathrattle"
          ],
          "execute": [
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"866598290\">Advanced_BlackSwan_DOT</a>[<span class=\"descriptionNumberColor\">Arcana</span>]",
                        "invertCondition": true
                      },
                      {
                        "name": "Target Exists",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
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
          "for": "<a class=\"gModGreen\" id=\"mod__866598290\">Advanced_BlackSwan_DOT</a>[<span class=\"descriptionNumberColor\">Arcana</span>]",
          "stackType": "ReplaceByCaster",
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
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1745362459\">M_Advanced_BlackSwan_P01_AddDOTFlag</a>"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Dot_Layer_Count",
                  "value": {
                    "operator": "Variables[0] (MDF_Layer) || RETURN",
                    "displayLines": "MDF_Layer",
                    "constants": [],
                    "variables": [
                      "MDF_Layer"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1945456695\">M_Advanced_BlackSwan_ForbidEffectFlag</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Body-Types",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
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
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Dot_Layer_Count",
                    "compareType": "<",
                    "value2": {
                      "operator": "Variables[0] (ThresholdLayer) || RETURN",
                      "displayLines": "ThresholdLayer",
                      "constants": [],
                      "variables": [
                        "ThresholdLayer"
                      ]
                    },
                    "contextScope": "ContextModifier"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"803699563\">Advanced_BlackSwan_DOT_Enhance</a>[<span class=\"descriptionNumberColor\">Epiphany</span>]"
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"803699563\">Advanced_BlackSwan_DOT_Enhance</a>[<span class=\"descriptionNumberColor\">Epiphany</span>]"
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Dot_Layer_Count",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (ThresholdLayer) || RETURN",
                      "displayLines": "ThresholdLayer",
                      "constants": [],
                      "variables": [
                        "ThresholdLayer"
                      ]
                    },
                    "contextScope": "ContextModifier"
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Wind",
                        "Damage": {
                          "operator": "Variables[0] (Basic_DamagePercentage) || Variables[1] (ExtraLayer_DamagePercentage) || Variables[2] (Dot_Layer_Count) || MUL || ADD || RETURN",
                          "displayLines": "(Basic_DamagePercentage + (ExtraLayer_DamagePercentage * Dot_Layer_Count))",
                          "constants": [],
                          "variables": [
                            "Basic_DamagePercentage",
                            "ExtraLayer_DamagePercentage",
                            "Dot_Layer_Count"
                          ]
                        },
                        "Toughness": null,
                        "instanceTag": "BlackSwan_DOT",
                        "Tags": null,
                        "attackType": "DOT"
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"803699563\">Advanced_BlackSwan_DOT_Enhance</a>[<span class=\"descriptionNumberColor\">Epiphany</span>]"
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Wind",
                        "Damage": {
                          "operator": "Variables[0] (Basic_DamagePercentage) || Variables[1] (ExtraLayer_DamagePercentage) || Variables[2] (Dot_Layer_Count) || MUL || ADD || RETURN",
                          "displayLines": "(Basic_DamagePercentage + (ExtraLayer_DamagePercentage * Dot_Layer_Count))",
                          "constants": [],
                          "variables": [
                            "Basic_DamagePercentage",
                            "ExtraLayer_DamagePercentage",
                            "Dot_Layer_Count"
                          ]
                        },
                        "Toughness": null,
                        "instanceTag": "BlackSwan_DOT",
                        "Tags": null,
                        "attackType": "DOT"
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"803699563\">Advanced_BlackSwan_DOT_Enhance</a>[<span class=\"descriptionNumberColor\">Epiphany</span>]"
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_Layer",
                    "compareType": ">",
                    "value2": {
                      "operator": "Variables[0] (ThresholdLayer) || RETURN",
                      "displayLines": "ThresholdLayer",
                      "constants": [],
                      "variables": [
                        "ThresholdLayer"
                      ]
                    },
                    "contextScope": "ContextModifier"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Active: Fast-Forward Animations"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"866598290\">Advanced_BlackSwan_DOT</a>[<span class=\"descriptionNumberColor\">Arcana</span>]",
                          "addStacksPerTrigger": {
                            "operator": "Variables[0] (ThresholdLayer) || Variables[1] (MDF_Layer) || SUB || RETURN",
                            "displayLines": "(ThresholdLayer - MDF_Layer)",
                            "constants": [],
                            "variables": [
                              "ThresholdLayer",
                              "MDF_Layer"
                            ]
                          },
                          "silentAdd": true
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"866598290\">Advanced_BlackSwan_DOT</a>[<span class=\"descriptionNumberColor\">Arcana</span>]",
                          "addStacksPerTrigger": {
                            "operator": "Variables[0] (ThresholdLayer) || Variables[1] (MDF_Layer) || SUB || RETURN",
                            "displayLines": "(ThresholdLayer - MDF_Layer)",
                            "constants": [],
                            "variables": [
                              "ThresholdLayer",
                              "MDF_Layer"
                            ]
                          },
                          "silentAdd": true
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Remove Flags from Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "flagName": [
                    "STAT_DOT_Poison",
                    "STAT_DOT_Burn",
                    "STAT_DOT_Bleed",
                    "STAT_DOT_Electric"
                  ],
                  "modifierName": "<a class=\"gModGreen\" id=\"866598290\">Advanced_BlackSwan_DOT</a>[<span class=\"descriptionNumberColor\">Arcana</span>]"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Targets Adjacent to Modifier Holder(v2)}}"
                  },
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
                    "instanceTag": "BlackSwan_DOT",
                    "Tags": null,
                    "attackType": "DOT"
                  }
                },
                {
                  "name": "Add Flags to Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "flagName": [
                    "STAT_DOT_Poison",
                    "STAT_DOT_Burn",
                    "STAT_DOT_Bleed",
                    "STAT_DOT_Electric"
                  ],
                  "modifierName": "<a class=\"gModGreen\" id=\"866598290\">Advanced_BlackSwan_DOT</a>[<span class=\"descriptionNumberColor\">Arcana</span>]"
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Targets Adjacent to Modifier Holder(v2)}}"
                  },
                  "maxTargets": 2,
                  "ifTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "Dot_Layer_Count",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (ThresholdLayer) || RETURN",
                          "displayLines": "ThresholdLayer",
                          "constants": [],
                          "variables": [
                            "ThresholdLayer"
                          ]
                        },
                        "contextScope": "ContextModifier"
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"803699563\">Advanced_BlackSwan_DOT_Enhance</a>[<span class=\"descriptionNumberColor\">Epiphany</span>]"
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"803699563\">Advanced_BlackSwan_DOT_Enhance</a>[<span class=\"descriptionNumberColor\">Epiphany</span>]"
                          }
                        }
                      ]
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
                    "modifier": "<a class=\"gModGreen\" id=\"803699563\">Advanced_BlackSwan_DOT_Enhance</a>[<span class=\"descriptionNumberColor\">Epiphany</span>]",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"866598290\">Advanced_BlackSwan_DOT</a>[<span class=\"descriptionNumberColor\">Arcana</span>]",
                      "addStacksPerTrigger": {
                        "operator": "Constants[0] (0) || Variables[0] (CEIL) || Variables[1] (MDF_Layer) || Constants[1] (2) || DIV || PARAM_1 || FUNCTION || SUB || RETURN",
                        "displayLines": "(0 - &nbsp;<span class=\"descriptionFunctionColor\">CEIL</span>((MDF_Layer / 2)))",
                        "constants": [
                          0,
                          2
                        ],
                        "variables": [
                          "CEIL",
                          "MDF_Layer"
                        ]
                      },
                      "silentAdd": true
                    },
                    {
                      "name": "UI Display Event (On Entity)",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "popUpText": "\"Arcana\" Stacks Halved"
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1945456695\">M_Advanced_BlackSwan_ForbidEffectFlag</a>"
                }
              ],
              "priorityLevel": 90
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has DMG Instance Tag",
                    "tag": "BlackSwan_DOT"
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                          "value": "(0 - DefenceIgnore)"
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
                  "name": "Add Flags to Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "flagName": [
                    "STAT_DOT_Poison",
                    "STAT_DOT_Burn",
                    "STAT_DOT_Bleed",
                    "STAT_DOT_Electric"
                  ],
                  "modifierName": "<a class=\"gModGreen\" id=\"866598290\">Advanced_BlackSwan_DOT</a>[<span class=\"descriptionNumberColor\">Arcana</span>]",
                  "casterFilter": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1001703260\">M_Advanced_BlackSwan_DOTFlag_RemainOnDeathRattle</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1945456695\">M_Advanced_BlackSwan_ForbidEffectFlag</a>",
                    "invertCondition": true,
                    "justAddedOrActive": true
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"803699563\">Advanced_BlackSwan_DOT_Enhance</a>[<span class=\"descriptionNumberColor\">Epiphany</span>]"
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
                            "value1": null,
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] (ThresholdLayer) || RETURN",
                              "displayLines": "ThresholdLayer",
                              "constants": [],
                              "variables": [
                                "ThresholdLayer"
                              ]
                            },
                            "valueType": "Layer"
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": null,
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] (ThresholdLayer) || RETURN",
                              "displayLines": "ThresholdLayer",
                              "constants": [],
                              "variables": [
                                "ThresholdLayer"
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
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Dot_Layer_Count",
                  "value": {
                    "operator": "Variables[0] (MDF_Layer) || RETURN",
                    "displayLines": "MDF_Layer",
                    "constants": [],
                    "variables": [
                      "MDF_Layer"
                    ]
                  }
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "Damage": {
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (Basic_DamagePercentage) || Variables[2] (ExtraLayer_DamagePercentage) || Variables[3] (Dot_Layer_Count) || MUL || ADD || MUL || RETURN",
                      "displayLines": "(DOT_TriggerRatio * (Basic_DamagePercentage + (ExtraLayer_DamagePercentage * Dot_Layer_Count)))",
                      "constants": [],
                      "variables": [
                        "DOT_TriggerRatio",
                        "Basic_DamagePercentage",
                        "ExtraLayer_DamagePercentage",
                        "Dot_Layer_Count"
                      ]
                    },
                    "Toughness": null,
                    "instanceTag": "BlackSwan_DOT",
                    "Tags": null,
                    "attackType": "DOT"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_Layer",
                    "compareType": ">",
                    "value2": {
                      "operator": "Variables[0] (ThresholdLayer) || RETURN",
                      "displayLines": "ThresholdLayer",
                      "constants": [],
                      "variables": [
                        "ThresholdLayer"
                      ]
                    },
                    "contextScope": "ContextModifier"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Active: Fast-Forward Animations"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"866598290\">Advanced_BlackSwan_DOT</a>[<span class=\"descriptionNumberColor\">Arcana</span>]",
                          "addStacksPerTrigger": {
                            "operator": "Variables[0] (ThresholdLayer) || Variables[1] (MDF_Layer) || SUB || RETURN",
                            "displayLines": "(ThresholdLayer - MDF_Layer)",
                            "constants": [],
                            "variables": [
                              "ThresholdLayer",
                              "MDF_Layer"
                            ]
                          },
                          "silentAdd": true
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"866598290\">Advanced_BlackSwan_DOT</a>[<span class=\"descriptionNumberColor\">Arcana</span>]",
                          "addStacksPerTrigger": {
                            "operator": "Variables[0] (ThresholdLayer) || Variables[1] (MDF_Layer) || SUB || RETURN",
                            "displayLines": "(ThresholdLayer - MDF_Layer)",
                            "constants": [],
                            "variables": [
                              "ThresholdLayer",
                              "MDF_Layer"
                            ]
                          },
                          "silentAdd": true
                        }
                      ]
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
                    "modifier": "<a class=\"gModGreen\" id=\"803699563\">Advanced_BlackSwan_DOT_Enhance</a>[<span class=\"descriptionNumberColor\">Epiphany</span>]"
                  }
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "stackData": [
            "Basic_DamagePercentage",
            "ExtraLayer_DamagePercentage",
            "Spread_DamagePercentage",
            "ThresholdLayer",
            "DefenceIgnore"
          ],
          "latentQueue": [
            "MazeSkill_Triggered",
            "_can_continue"
          ],
          "description": "Takes Wind DMG at the start of each turn. While in the \"Arcana\" state, will also be considered as suffering from Wind Shear, Bleed, Burn, and Shock.",
          "type": "Debuff",
          "effectName": "Arcana",
          "statusName": "Arcana"
        }
      ],
      "references": []
    },
    "BlackSwan_Functions": {
      "fileName": "BlackSwan_Functions",
      "abilityType": "Char. Functions",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "length": 1,
      "parse": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__632471047\">function_Advanced_BlackSwan_AddDOT</a>",
          "parse": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Function's Target List}}"
              },
              "includeDyingTargets": true,
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Result_Stack_Layer",
                  "value": {
                    "operator": "Variables[0] (parameter[0]_AddLayer) || RETURN",
                    "displayLines": "parameter[0]_AddLayer",
                    "constants": [],
                    "variables": [
                      "parameter[0]_AddLayer"
                    ]
                  }
                },
                {
                  "name": "Looped Event",
                  "maxLoops": {
                    "operator": "Variables[0] (parameter[0]_AddLayer) || RETURN",
                    "displayLines": "parameter[0]_AddLayer",
                    "constants": [],
                    "variables": [
                      "parameter[0]_AddLayer"
                    ]
                  },
                  "Event": [
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
                            "modifier": "<a class=\"gModGreen\" id=\"803699563\">Advanced_BlackSwan_DOT_Enhance</a>[<span class=\"descriptionNumberColor\">Epiphany</span>]"
                          },
                          {
                            "name": "Random Chance",
                            "chance": {
                              "operator": "Variables[0] (0.5) || RETURN",
                              "displayLines": "0.5",
                              "constants": [],
                              "variables": [
                                0.5
                              ]
                            }
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Result_Stack_Layer",
                          "value": {
                            "operator": "Variables[0] (Result_Stack_Layer) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(Result_Stack_Layer + 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "Result_Stack_Layer"
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
                          "name": "Define Custom Variable",
                          "variableName": "Result_Stack_Layer",
                          "value": {
                            "operator": "Variables[0] (Result_Stack_Layer) || Variables[1] (1) || ADD || RETURN",
                            "displayLines": "(Result_Stack_Layer + 1)",
                            "constants": [],
                            "variables": [
                              "Result_Stack_Layer",
                              1
                            ]
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1945456695\">M_Advanced_BlackSwan_ForbidEffectFlag</a>",
                    "justAddedOrActive": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"866598290\">Advanced_BlackSwan_DOT</a>[<span class=\"descriptionNumberColor\">Arcana</span>]",
                      "baseChance": {
                        "operator": "Variables[0] (parameter[1]_Chance) || RETURN",
                        "displayLines": "parameter[1]_Chance",
                        "constants": [],
                        "variables": [
                          "parameter[1]_Chance"
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
                        "Spread_DamagePercentage": {
                          "operator": "Variables[0] (1.8) || RETURN",
                          "displayLines": "1.8",
                          "constants": [],
                          "variables": [
                            1.8
                          ]
                        },
                        "ThresholdLayer": {
                          "operator": "Variables[0] (DOT_Layer_Threshold) || RETURN",
                          "displayLines": "DOT_Layer_Threshold",
                          "constants": [],
                          "variables": [
                            "DOT_Layer_Threshold"
                          ]
                        },
                        "DefenceIgnore": {
                          "operator": "Variables[0] (0.2) || RETURN",
                          "displayLines": "0.2",
                          "constants": [],
                          "variables": [
                            0.2
                          ]
                        }
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (Result_Stack_Layer) || RETURN",
                        "displayLines": "Result_Stack_Layer",
                        "constants": [],
                        "variables": [
                          "Result_Stack_Layer"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"866598290\">Advanced_BlackSwan_DOT</a>[<span class=\"descriptionNumberColor\">Arcana</span>]",
                      "baseChance": {
                        "operator": "Variables[0] (parameter[1]_Chance) || RETURN",
                        "displayLines": "parameter[1]_Chance",
                        "constants": [],
                        "variables": [
                          "parameter[1]_Chance"
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
                        "Spread_DamagePercentage": {
                          "operator": "Variables[0] (1.8) || RETURN",
                          "displayLines": "1.8",
                          "constants": [],
                          "variables": [
                            1.8
                          ]
                        },
                        "ThresholdLayer": {
                          "operator": "Variables[0] (DOT_Layer_Threshold) || RETURN",
                          "displayLines": "DOT_Layer_Threshold",
                          "constants": [],
                          "variables": [
                            "DOT_Layer_Threshold"
                          ]
                        },
                        "DefenceIgnore": {
                          "operator": "Variables[0] (0.2) || RETURN",
                          "displayLines": "0.2",
                          "constants": [],
                          "variables": [
                            0.2
                          ]
                        }
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (Result_Stack_Layer) || RETURN",
                        "displayLines": "Result_Stack_Layer",
                        "constants": [],
                        "variables": [
                          "Result_Stack_Layer"
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
      "references": []
    }
  }
}