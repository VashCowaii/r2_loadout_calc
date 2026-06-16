const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 20021,
  "trimCharacterName": 20021,
  "abilityList": [
    "20021_Modifiers",
    "20021_BattleEventAbility_W2_Feixiao_IF"
  ],
  "abilityObject": {
    "20021_Modifiers": {
      "fileName": "20021_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1393128044\">Monster_W2_Feixiao_IF_OnLevel</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1186924823\">Monster_W2_Feixiao_IF_UltraConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]",
          "description": "In Resonate State, removes all action bar alteration effects except for this unit's. When Weakness is Broken, all targets' actions are advanced.",
          "type": "Other",
          "effectName": "Resonate",
          "statusName": "Resonate",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Block Advance/Delay Effects",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "whitelist": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "whitelistTag": "Mask_TurnBasedAdvance"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 203204,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": null,
                    "isCompareUniqueID": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Nebula Devourer: Self}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"11003097\">Monster_W2_FeixiaoPart_HeadConnectEffect</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 203205,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": null,
                    "isCompareUniqueID": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Nebula Devourer: Self}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2121732241\">Monster_W2_FeixiaoPart_LimbConnectEffect</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 203206,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": null,
                    "isCompareUniqueID": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Nebula Devourer: Self}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-699901191\">Monster_W2_FeixiaoPart_TailConnectEffect</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Block Advance/Delay Effects",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "isLock": false
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
                },
                {
                  "name": "Define Modifier-Specific Variable",
                  "modifierName": "<a class=\"gModGreen\" id=\"-1262406841\">Monster_W2_Feixiao_IF_SummonMinions</a>",
                  "variableName": "MDF_LostConnect",
                  "value": 2
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 203204,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": null,
                    "isCompareUniqueID": true
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Nebula Devourer: Self}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"11003097\">Monster_W2_FeixiaoPart_HeadConnectEffect</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 203205,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": null,
                    "isCompareUniqueID": true
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Nebula Devourer: Self}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2121732241\">Monster_W2_FeixiaoPart_LimbConnectEffect</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 203206,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": null,
                    "isCompareUniqueID": true
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Nebula Devourer: Self}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-699901191\">Monster_W2_FeixiaoPart_TailConnectEffect</a>"
                    }
                  ]
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
                  "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1262406841\">Monster_W2_Feixiao_IF_SummonMinions</a>",
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1186924823\">Monster_W2_Feixiao_IF_UltraConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 203204,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": null,
                    "isCompareUniqueID": true
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "EnhanceHead_Flag",
                      "value": 0
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
                          "target": "{{Modifier Holder}}"
                        },
                        "characterName": null,
                        "isCompareUniqueID": true
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "EnhanceLimb_Flag",
                          "value": 0
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
                              "target": "{{Modifier Holder}}"
                            },
                            "characterName": null,
                            "isCompareUniqueID": true
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "EnhanceTail_Flag",
                              "value": 0
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
                    "value1": "MDF_LostConnect",
                    "compareType": ">=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_LostConnect",
                        "compareType": "=",
                        "value2": 1
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_LostConnect",
                      "value": 0
                    },
                    {
                      "name": "Action Advance/Delay",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "advanceType": "Set",
                      "multiAdd": "(0 - UnusedUnderThisBase_8573)"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-171858273\">Monster_W2_Feixiao_LostConnect</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__835596889\">Monster_W2_Feixiao_IF_AlreadyConnectRemove</a>",
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
                    "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_AlreadyConnect",
                      "value": 1
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_AlreadyConnect",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"734224904\">Monster_W2_Feixiao_CurrentConnect</a>",
                        "invertCondition": true
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
                      "modifier": "<a class=\"gModGreen\" id=\"1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]",
          "modifierFlags": [
            "STAT_AITargetHigherPriority"
          ],
          "latentQueue": [
            "MDF_AlreadyConnect"
          ],
          "description": "In Resonate State, removes all action bar alteration effects except for this unit's. When Weakness is Broken, all targets' actions are advanced.",
          "type": "Other",
          "effectName": "Resonate",
          "statusName": "Resonate",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Block Advance/Delay Effects",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "whitelist": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "whitelistTag": "Mask_TurnBasedAdvance"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 203204,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": null,
                    "isCompareUniqueID": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Nebula Devourer: Self}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"11003097\">Monster_W2_FeixiaoPart_HeadConnectEffect</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 203205,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": null,
                    "isCompareUniqueID": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Nebula Devourer: Self}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2121732241\">Monster_W2_FeixiaoPart_LimbConnectEffect</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 203206,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": null,
                    "isCompareUniqueID": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Nebula Devourer: Self}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-699901191\">Monster_W2_FeixiaoPart_TailConnectEffect</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Block Advance/Delay Effects",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "isLock": false
                },
                {
                  "name": "Define Modifier-Specific Variable",
                  "modifierName": "<a class=\"gModGreen\" id=\"-1262406841\">Monster_W2_Feixiao_IF_SummonMinions</a>",
                  "variableName": "MDF_LostConnect",
                  "value": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 203204,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": null,
                    "isCompareUniqueID": true
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Nebula Devourer: Self}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"11003097\">Monster_W2_FeixiaoPart_HeadConnectEffect</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 203205,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": null,
                    "isCompareUniqueID": true
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Nebula Devourer: Self}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2121732241\">Monster_W2_FeixiaoPart_LimbConnectEffect</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 203206,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": null,
                    "isCompareUniqueID": true
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Nebula Devourer: Self}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-699901191\">Monster_W2_FeixiaoPart_TailConnectEffect</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-352783921\">Monster_W2_Feixiao_IF_BattleEventController</a>",
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Battle Event List}}"
                  },
                  "searchRandom": true,
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Force Entity Death",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1186924823\">Monster_W2_Feixiao_IF_UltraConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]"
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
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__246004318\">Monster_W2_Feixiao_IF_BreakController</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Pre-Death [Owner]"
            },
            {
              "eventTrigger": "Leave Battle"
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1508080226\">Monster_W2_Feixiao_Part1Effect</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1540195907\">Monster_W2_Feixiao_Part2Effect</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1070872392\">Monster_W2_Feixiao_Part3Effect</a>"
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1540195907\">Monster_W2_Feixiao_Part2Effect</a>"
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
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1070872392\">Monster_W2_Feixiao_Part3Effect</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1497902292\">Monster_W2_Feixiao_IF_Part2</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1757126586\">Monster_W2_Feixiao_IF_PickUpMessage</a>",
          "execute": [
            {
              "eventTrigger": "Ultimate Prep-Phase [Owner]"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2029364550\">Monster_W2_Feixiao_IF_PartController</a>",
          "execute": [
            {
              "eventTrigger": "Action Phase Start [Anyone][?]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "_isReset",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Set Hit-Class",
                      "reset": true
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_isReset",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Waiting for Healing in Limbo",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "InsertCheck",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Dispel Debuffs",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "silent": true
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1540195907\">Monster_W2_Feixiao_Part2Effect</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2027662282\">Monster_W2_Feixiao_Endurance</a>"
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "InsertCheck"
                    },
                    {
                      "name": "Set Enemy Phase",
                      "mode": "Inc"
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W2_Feixiao_IF_PassiveAbility_Insert",
                      "priorityTag": "EnemyPhaseChange",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ],
              "priorityLevel": -90
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1680868349\">Monster_W2_Feixiao_IF_Status</a>",
          "execute": [
            {
              "eventTrigger": "Action Phase Start [Anyone][?]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_WaveStart",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_WaveStart",
                      "value": 1
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_DieCount",
                    "compareType": ">=",
                    "value2": 1
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_DieCount",
                    "compareType": ">=",
                    "value2": 2
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_DieCount",
                    "compareType": ">=",
                    "value2": 3
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_DieCount",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Turn [Owner]: Action-End Phase",
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Nebula Devourer: Self}}"
                  },
                  "variableName": "_TurnCount",
                  "value": -1,
                  "max": 4
                }
              ]
            },
            {
              "eventTrigger": "Entity Put Into Limbo [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Character ID",
                        "ID": 6024,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_DieCount",
                        "compareType": "=",
                        "value2": 2
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Set Target Parameter",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "paramTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}.[[getCharByChangeSource]]"
                      },
                      "variableName": "Dead_DynamicTarget03"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_DieCount",
                      "value": 3
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Character ID",
                        "ID": 6024,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_DieCount",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Set Target Parameter",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "paramTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}.[[getCharByChangeSource]]"
                      },
                      "variableName": "Dead_DynamicTarget02"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_DieCount",
                      "value": 2
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Character ID",
                        "ID": 6024,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_DieCount",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Set Target Parameter",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "paramTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}.[[getCharByChangeSource]]"
                      },
                      "variableName": "Dead_DynamicTarget01"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_DieCount",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Weakness Break [Anyone]",
              "execute": [
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
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Feixiao Parts ApocShadow}}"
                        },
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Deal Toughness DMG",
                      "value": {
                        "operator": "Variables[0] (UnusedUnderThisBase_8534) || Constants[0] (3) || MUL || RETURN",
                        "displayLines": "(UnusedUnderThisBase_8534 * 3)",
                        "constants": [
                          3
                        ],
                        "variables": [
                          "UnusedUnderThisBase_8534"
                        ]
                      },
                      "attacker": {
                        "name": "Target Name",
                        "target": "{{Enemy Feixiao ApocShadow}}"
                      },
                      "defender": {
                        "name": "Target Name",
                        "target": "{{Feixiao Parts ApocShadow}}"
                      },
                      "forceReduction": true,
                      "canDelay": true,
                      "ToughnessDMGType": {
                        "name": "Damage Type Source",
                        "sourceType": "ReadTargetType",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Preview Shows Break[?]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Enemy ID",
                        "ID": 203204,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null,
                        "isCompareUniqueID": true
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 203205,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null,
                        "isCompareUniqueID": true
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 203206,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null,
                        "isCompareUniqueID": true
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 203501,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null,
                        "isCompareUniqueID": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Modifier: UI Preview",
                      "show": "Hide",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Feixiao Parts ApocShadow}}"
                      },
                      "attacker": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "baseToughnessDMG": {
                        "operator": "Variables[0] (UnusedUnderThisBase_8534) || Constants[0] (3) || MUL || RETURN",
                        "displayLines": "(UnusedUnderThisBase_8534 * 3)",
                        "constants": [
                          3
                        ],
                        "variables": [
                          "UnusedUnderThisBase_8534"
                        ]
                      },
                      "toughnessForcedReductionPreview": 1,
                      "isForcedReduction": true,
                      "ignoreBreakBlock": true
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-27045153\">Monster_W2_Feixiao_IF_Ability09_Prepare</a>"
        }
      ],
      "references": []
    },
    "20021_BattleEventAbility_W2_Feixiao_IF": {
      "fileName": "20021_BattleEventAbility_W2_Feixiao_IF",
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
          ]
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
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    }
  },
  "enemyData": {},
  "isBattleEvent": true
}