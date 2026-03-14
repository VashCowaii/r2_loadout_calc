const configAbility = {
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
}