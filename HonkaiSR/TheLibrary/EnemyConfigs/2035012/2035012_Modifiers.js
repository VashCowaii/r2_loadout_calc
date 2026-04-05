const configAbility = {
  "fileName": "2035012_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1393128044\">Monster_W2_Feixiao_IF_OnLevel</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1186924823\">Monster_W2_Feixiao_IF_UltraConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]",
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
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "In Resonate State, removes all action bar alteration effects except for this unit's. When Weakness is Broken, all targets' actions are advanced.",
      "type": "Other",
      "effectName": "Resonate",
      "statusName": "Resonate"
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
                  "multiAdd": "(0 - {[PassiveSkill01[1]]})"
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
      ],
      "stackData": [],
      "latentQueue": []
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
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1912631465\">Monster_W2_Feixiao_IF_AlreadyConnect</a>[<span class=\"descriptionNumberColor\">Resonate</span>]",
      "modifierFlags": [
        "STAT_AITargetHigherPriority"
      ],
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
      ],
      "stackData": [],
      "latentQueue": [
        "MDF_AlreadyConnect"
      ],
      "description": "In Resonate State, removes all action bar alteration effects except for this unit's. When Weakness is Broken, all targets' actions are advanced.",
      "type": "Other",
      "effectName": "Resonate",
      "statusName": "Resonate"
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
      ],
      "stackData": [],
      "latentQueue": []
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
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1497902292\">Monster_W2_Feixiao_IF_Part2</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1757126586\">Monster_W2_Feixiao_IF_PickUpMessage</a>",
      "execute": [
        {
          "eventTrigger": "Ultimate Prep-Phase [Owner]"
        }
      ],
      "stackData": [],
      "latentQueue": []
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
      ],
      "stackData": [],
      "latentQueue": []
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
          "eventTrigger": "Turn [Action-End Phase]",
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
                    "operator": "Variables[0] ({[PassiveSkill04[1]]}) || Constants[0] (3) || MUL || RETURN",
                    "displayLines": "({[PassiveSkill04[1]]} * 3)",
                    "constants": [
                      3
                    ],
                    "variables": [
                      "{[PassiveSkill04[1]]}"
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
                    "operator": "Variables[0] ({[PassiveSkill04[1]]}) || Constants[0] (3) || MUL || RETURN",
                    "displayLines": "({[PassiveSkill04[1]]} * 3)",
                    "constants": [
                      3
                    ],
                    "variables": [
                      "{[PassiveSkill04[1]]}"
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
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-27045153\">Monster_W2_Feixiao_IF_Ability09_Prepare</a>"
    }
  ],
  "references": []
}