const configAbility = {
  "fileName": "TheDahlia_Constance_Trace03",
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
      "modifier": "<a class=\"gModGreen\" id=\"-2073058540\">Constance_Trace03</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1372103601\">_M_Constance_Tree03_SpdPreShow</a>",
      "stackType": "ReplaceByCaster",
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": {
          "name": "Target Name",
          "target": "{{Modifier Holder}}"
        },
        "conditions": {
          "name": "AND",
          "conditionList": [
            {
              "name": "Has Weakness Preview",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "DamageType": "AllType",
              "weaknessFilter": "All",
              "anyMatchingTarget": true
            },
            {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"922171575\">Constance_Tree03_Property</a>[<span class=\"descriptionNumberColor\">Outgrow the Old, Espouse the New</span>]",
              "invertCondition": true
            }
          ]
        },
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": "0.3(SPD Change)"
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1550002034\">_M_Constance_Tree03_StancePreShow</a>",
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "isPercentofMaxToughness": true,
        "addedValue": {
          "operator": "Variables[0] (20) || Constants[0] (3) || MUL || RETURN",
          "displayLines": "(20 * 3)",
          "constants": [
            3
          ],
          "variables": [
            20
          ]
        },
        "maxToughness": 999,
        "conditions": {
          "name": "AND",
          "conditionList": [
            {
              "name": "Has Weakness Preview",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "DamageType": "AllType",
              "weaknessFilter": "All",
              "anyMatchingTarget": true
            },
            {
              "name": "Has Element",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "DamageType": {
                "name": "Damage Type Source",
                "sourceType": "Fire"
              }
            },
            {
              "name": "Is Entity Type",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "type": "Character"
            }
          ]
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__922171575\">Constance_Tree03_Property</a>[<span class=\"descriptionNumberColor\">Outgrow the Old, Espouse the New</span>]",
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
      "description": "SPD increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "SPD Boost",
      "statusName": "Outgrow the Old, Espouse the New"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-25137602\">_M_Constance_Tree03_AddWeaknessListener_DuringAttack</a>",
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ],
          "priorityLevel": -100
        },
        {
          "eventTrigger": "Apply Modifier [From Owner] (Success)",
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
                      "target": "{{Modifier Holder}}"
                    },
                    "type": "Battle Event",
                    "invertCondition": true
                  },
                  {
                    "name": "Modifier Has Flag",
                    "flagName": "STAT_AttachWeakness"
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Element",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "DamageType": {
                          "name": "Damage Type Source",
                          "sourceType": "Fire"
                        }
                      },
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "type": "Character"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1477912473\">Constance_PointB3_AddWeaknessMark</a>",
                      "referenceModifier": "<a class=\"gModGreen\" id=\"1832901043\">MReference_Empty</a>",
                      "casterAssign": "CasterSelf"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1314243171\">Constance_PointB3_SPAddMark</a>",
                      "referenceModifier": "<a class=\"gModGreen\" id=\"1832901043\">MReference_Empty</a>"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1302015690\">_M_Constance_Tree03_AddWeaknessListener</a>",
      "execute": [
        {
          "eventTrigger": "Action Choice Window [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Entity Type",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "type": "Battle Event"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}.[[getCreator]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-25137602\">_M_Constance_Tree03_AddWeaknessListener_DuringAttack</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}.[[getCreator]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1314243171\">Constance_PointB3_SPAddMark</a>"
                }
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-25137602\">_M_Constance_Tree03_AddWeaknessListener_DuringAttack</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1314243171\">Constance_PointB3_SPAddMark</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE, with Unselectables)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1477912473\">Constance_PointB3_AddWeaknessMark</a>"
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Attack Targets of Modifier Holder}}"
              },
              "includeDyingTargets": true,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1477912473\">Constance_PointB3_AddWeaknessMark</a>",
                    "casterFilter": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  },
                  {
                    "name": "Has Element",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "Fire"
                    }
                  },
                  {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "type": "Character"
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Deal Toughness DMG",
                  "value": {
                    "operator": "Variables[0] (20) || Constants[0] (3) || MUL || RETURN",
                    "displayLines": "(20 * 3)",
                    "constants": [
                      3
                    ],
                    "variables": [
                      20
                    ]
                  },
                  "attacker": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "ignoreAttackerBonuses": true,
                  "canDelay": true,
                  "livingState": "Mask_AliveOrLimbo",
                  "ToughnessDMGType": "Fire"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1477912473\">Constance_PointB3_AddWeaknessMark</a>"
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
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1314243171\">Constance_PointB3_SPAddMark</a>"
                  },
                  {
                    "name": "Has Element",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "Fire"
                    }
                  },
                  {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "type": "Character"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_maxSP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_curSP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_maxAddSP",
                  "value": {
                    "operator": "Variables[0] (MAX) || Constants[0] (0) || Variables[1] (_maxSP) || Variables[2] (0.5) || MUL || Variables[3] (_curSP) || SUB || PARAM_2 || FUNCTION || RETURN",
                    "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MAX</span>(0, ((_maxSP * 0.5) - _curSP))",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "MAX",
                      "_maxSP",
                      0.5,
                      "_curSP"
                    ]
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
                    "value1": "_maxAddSP",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (_maxSP) || Variables[1] (0.1) || MUL || RETURN",
                      "displayLines": "(_maxSP * 0.1)",
                      "constants": [],
                      "variables": [
                        "_maxSP",
                        0.1
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "valuePercent": {
                        "operator": "Variables[0] (0.1) || RETURN",
                        "displayLines": "0.1",
                        "constants": [],
                        "variables": [
                          0.1
                        ]
                      },
                      "isFixed": "(Fixed)"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": {
                        "operator": "Variables[0] (_maxAddSP) || RETURN",
                        "displayLines": "_maxAddSP",
                        "constants": [],
                        "variables": [
                          "_maxAddSP"
                        ]
                      },
                      "isFixed": "(Fixed)"
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1314243171\">Constance_PointB3_SPAddMark</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Action Start [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE, with Unselectables)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1477912473\">Constance_PointB3_AddWeaknessMark</a>",
              "removeToBeAdded": true
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1314243171\">Constance_PointB3_SPAddMark</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectables}}.[[addBattleEvents]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-25137602\">_M_Constance_Tree03_AddWeaknessListener_DuringAttack</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Is Entity Type",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "type": "Battle Event"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}.[[getCreator]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1314243171\">Constance_PointB3_SPAddMark</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}.[[getCreator]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-25137602\">_M_Constance_Tree03_AddWeaknessListener_DuringAttack</a>"
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-25137602\">_M_Constance_Tree03_AddWeaknessListener_DuringAttack</a>"
            }
          ]
        },
        {
          "eventTrigger": "Action Completed [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-25137602\">_M_Constance_Tree03_AddWeaknessListener_DuringAttack</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1314243171\">Constance_PointB3_SPAddMark</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Is Entity Type",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "type": "Battle Event"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}.[[getCreator]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-25137602\">_M_Constance_Tree03_AddWeaknessListener_DuringAttack</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}.[[getCreator]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1314243171\">Constance_PointB3_SPAddMark</a>"
                }
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE, with Unselectables)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1477912473\">Constance_PointB3_AddWeaknessMark</a>"
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-25137602\">_M_Constance_Tree03_AddWeaknessListener_DuringAttack</a>"
            }
          ],
          "priorityLevel": -85
        },
        {
          "eventTrigger": "Ultimate Prep-Phase [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE, with Unselectables)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1477912473\">Constance_PointB3_AddWeaknessMark</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1314243171\">Constance_PointB3_SPAddMark</a>"
            }
          ]
        },
        {
          "eventTrigger": "Apply Modifier [From Owner] (Success)",
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
                      "target": "{{Modifier Holder}}"
                    },
                    "type": "Battle Event",
                    "invertCondition": true
                  },
                  {
                    "name": "Modifier Has Flag",
                    "flagName": "STAT_AttachWeakness"
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
                  "modifier": "<a class=\"gModGreen\" id=\"922171575\">Constance_Tree03_Property</a>[<span class=\"descriptionNumberColor\">Outgrow the Old, Espouse the New</span>]",
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
                      "operator": "Variables[0] (0.3) || RETURN",
                      "displayLines": "0.3",
                      "constants": [],
                      "variables": [
                        0.3
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
      "for": "<a class=\"gModGreen\" id=\"mod__-2073058540\">Constance_Trace03</a>",
      "stackData": [],
      "latentQueue": [],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members with Unselectables}}.[[addBattleEvents]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1302015690\">_M_Constance_Tree03_AddWeaknessListener</a>",
          "haloStatus": true,
          "includeBattleEvent": true
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members with Unselectables}}.[[addBattleEvents]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1550002034\">_M_Constance_Tree03_StancePreShow</a>",
          "haloStatus": true,
          "includeBattleEvent": true
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members with Unselectables}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1372103601\">_M_Constance_Tree03_SpdPreShow</a>",
          "haloStatus": true,
          "includeBattleEvent": true
        }
      ]
    }
  ]
}