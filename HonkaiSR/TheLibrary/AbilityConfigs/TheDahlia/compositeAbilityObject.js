const compositeAbilityObject = {
  "fullCharacterName": "The Dahlia",
  "trimCharacterName": "TheDahlia",
  "abilityList": [
    "TheDahlia_Constance_Eidolon6",
    "TheDahlia_Constance_Eidolon2",
    "TheDahlia_Constance_Trace03",
    "TheDahlia_Constance_TechniqueInLevel",
    "TheDahlia_Constance_PassiveAbility01",
    "TheDahlia_Constance_Insert_Part02",
    "TheDahlia_Constance_Insert_Part01",
    "TheDahlia_Constance_Insert_SelectTarget",
    "TheDahlia_Constance_Ability03_Part02",
    "TheDahlia_Constance_Ability03_Part01",
    "TheDahlia_Constance_Ability03_EnterReady",
    "TheDahlia_Constance_Ability02_Part02",
    "TheDahlia_Constance_Ability02_Part01",
    "TheDahlia_Constance_Ability01_Part02",
    "TheDahlia_Constance_Ability01_Part01",
    "TheDahlia_Modifiers"
  ],
  "abilityObject": {
    "TheDahlia_Constance_Eidolon6": {
      "fileName": "TheDahlia_Constance_Eidolon6",
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
          "modifier": "<a class=\"gModGreen\" id=\"-919146628\">Constance_Eidolon6</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-919146628\">Constance_Eidolon6</a>",
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "TheDahlia_Constance_Eidolon2": {
      "fileName": "TheDahlia_Constance_Eidolon2",
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
          "modifier": "<a class=\"gModGreen\" id=\"-986257104\">Constance_Eidolon2</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1789407747\">Constance_Eidolon2_Bonus_OnCharacterCreate</a>",
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1539081164\">Constance_Ultimate_Weakness</a>[<span class=\"descriptionNumberColor\">Wilt</span>]",
                      "duration": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyRatio": {
                          "operator": "Variables[0] (0.18) || RETURN",
                          "displayLines": "0.18",
                          "constants": [],
                          "variables": [
                            0.18
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
          "for": "<a class=\"gModGreen\" id=\"mod__-986257104\">Constance_Eidolon2</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE, with Unselectables)}}"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1539081164\">Constance_Ultimate_Weakness</a>[<span class=\"descriptionNumberColor\">Wilt</span>]",
                      "duration": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyRatio": {
                          "operator": "Variables[0] (0.18) || RETURN",
                          "displayLines": "0.18",
                          "constants": [],
                          "variables": [
                            0.18
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1789407747\">Constance_Eidolon2_Bonus_OnCharacterCreate</a>"
                },
                "Modifier Deletes Itself"
              ],
              "priorityLevel": -80
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "TheDahlia_Constance_Trace03": {
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
    },
    "TheDahlia_Constance_TechniqueInLevel": {
      "fileName": "TheDahlia_Constance_TechniqueInLevel",
      "childAbilityList": [
        "TheDahlia_Constance_TechniqueInLevel"
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
          "modifier": "<a class=\"gModGreen\" id=\"-1768728326\">StageAbility_Maze_Constance_Modifier</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"661250191\">StageAbility_Maze_Constance_Modifier_SuperBreakTrigger</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-72763137\">_M_Constance_TechniqueUsage_SuperBreak</a>",
          "modifierFlags": [
            "STAT_SuperBreakBuff"
          ],
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"2132906314\">DealSuperBreakDamage_DamagePerformance</a>",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "variables": {
                    "value_0_DamagePercentage": {
                      "operator": "Variables[0] (MDF_DamagePercentage) || RETURN",
                      "displayLines": "MDF_DamagePercentage",
                      "constants": [],
                      "variables": [
                        "MDF_DamagePercentage"
                      ]
                    }
                  },
                  "damageSequence": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1466558420\">PursuedDamage_PerformanceDelay</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": {
                          "name": "Damage Type Source",
                          "sourceType": "ReadTargetType",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          }
                        },
                        "DamageBreak": {
                          "operator": "Variables[0] (value_0_DamagePercentage) || RETURN",
                          "displayLines": "value_0_DamagePercentage",
                          "constants": [],
                          "variables": [
                            "value_0_DamagePercentage"
                          ]
                        },
                        "dmgFormula": "Break DMG Scaling",
                        "dmgFormulaFinal": "Pure (No DMG%)",
                        "Toughness": null,
                        "Tags": [
                          "Super Break"
                        ],
                        "attackType": "Break DMG"
                      }
                    }
                  ]
                },
                "Modifier Deletes Itself"
              ],
              "priorityLevel": 100
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"465880923\">_M_Constance_TechniqueUsage_SuperBreakTriggerFlag</a>"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"465880923\">_M_Constance_TechniqueUsage_SuperBreakTriggerFlag</a>"
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"2132906314\">DealSuperBreakDamage_DamagePerformance</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "variables": {
                        "value_0_DamagePercentage": {
                          "operator": "Variables[0] (MDF_DamagePercentage) || RETURN",
                          "displayLines": "MDF_DamagePercentage",
                          "constants": [],
                          "variables": [
                            "MDF_DamagePercentage"
                          ]
                        }
                      },
                      "damageSequence": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"1466558420\">PursuedDamage_PerformanceDelay</a>",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          }
                        },
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "canPhase": true,
                          "AttackScaling": {
                            "DamageType": {
                              "name": "Damage Type Source",
                              "sourceType": "ReadTargetType",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              }
                            },
                            "DamageBreak": {
                              "operator": "Variables[0] (value_0_DamagePercentage) || RETURN",
                              "displayLines": "value_0_DamagePercentage",
                              "constants": [],
                              "variables": [
                                "value_0_DamagePercentage"
                              ]
                            },
                            "dmgFormula": "Break DMG Scaling",
                            "dmgFormulaFinal": "Pure (No DMG%)",
                            "Toughness": null,
                            "Tags": [
                              "Super Break"
                            ],
                            "attackType": "Break DMG"
                          }
                        }
                      ]
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__661250191\">StageAbility_Maze_Constance_Modifier_SuperBreakTrigger</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{All Team Members with Unselectables}}"
                  },
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-72763137\">_M_Constance_TechniqueUsage_SuperBreak</a>"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"465880923\">_M_Constance_TechniqueUsage_SuperBreakTriggerFlag</a>",
                      "referenceModifier": "<a class=\"gModGreen\" id=\"1832901043\">MReference_Empty</a>"
                    }
                  ]
                },
                "Modifier Deletes Itself"
              ],
              "priorityLevel": -59
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1768728326\">StageAbility_Maze_Constance_Modifier</a>",
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
                      "modifier": "<a class=\"gModGreen\" id=\"-2139860773\">Constance_Aura</a>[<span class=\"descriptionNumberColor\">Lick... Enkindled Betrayal</span>]",
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
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{All Team Members with Unselectables}}"
                      },
                      "conditions": {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "STAT_TriggerBattleCharacter"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-72763137\">_M_Constance_TechniqueUsage_SuperBreak</a>",
                          "valuePerStack": {
                            "MDF_DamagePercentage": {
                              "operator": "Variables[0] (0.6) || RETURN",
                              "displayLines": "0.6",
                              "constants": [],
                              "variables": [
                                0.6
                              ]
                            }
                          },
                          "casterAssign": "TargetSelf"
                        }
                      ]
                    },
                    "Modifier Deletes Itself"
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
    "TheDahlia_Constance_PassiveAbility01": {
      "fileName": "TheDahlia_Constance_PassiveAbility01",
      "childAbilityList": [
        "TheDahlia_Constance_PassiveAbility01",
        "TheDahlia_Constance_Insert_SelectTarget",
        "TheDahlia_Constance_Insert_Camera",
        "TheDahlia_Constance_Insert_Part01",
        "TheDahlia_Constance_Insert_Part02"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": 2,
      "toughnessList": [
        3,
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
          "modifier": "<a class=\"gModGreen\" id=\"-2129474083\">Constance_Passive</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-157877441\">Constance_Ultimate_AddWeaknessPreShow</a>"
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": 0,
          "maximum": {
            "operator": "Variables[0] (3) || RETURN",
            "displayLines": "3",
            "constants": [],
            "variables": [
              3
            ]
          },
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 3,
          "cooldown": 0
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Rank01_Activated",
              "value": 1
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Rank01_Activated",
              "value": 0
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-534697171\">Constance_ReduceStanceTriggerCD</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Get Revived [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Sub-Target in HP-Share Group",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All(with Unselectable)}}"
                      },
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Is Sub-Target in HP-Share Group",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            }
                          },
                          {
                            "name": "Compare: Target",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "target2": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "invertCondition": true
                          }
                        ]
                      },
                      "ifTargetFound": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-534697171\">Constance_ReduceStanceTriggerCD</a>",
                          "removeToBeAdded": true
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-534697171\">Constance_ReduceStanceTriggerCD</a>",
                  "removeToBeAdded": true
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1348225368\">Constance_Eidolon1_ReduceStance</a>",
          "execute": [
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
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "flagName": "MuteBreak"
                          },
                          {
                            "name": "Compare: Ability Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value1": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;",
                            "compareType": ">",
                            "value2": 0
                          }
                        ],
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-534697171\">Constance_ReduceStanceTriggerCD</a>",
                        "invertCondition": true
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "MDF_TargetMaxStanceValue",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
                      "warningType": "MaxToughness"
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "ContextModifier",
                      "variableName": "MDF_StanceValue",
                      "value": {
                        "operator": "Variables[0] (MDF_TargetMaxStanceValue) || Variables[1] (MDF_StanceRatio) || MUL || RETURN",
                        "displayLines": "(MDF_TargetMaxStanceValue * MDF_StanceRatio)",
                        "constants": [],
                        "variables": [
                          "MDF_TargetMaxStanceValue",
                          "MDF_StanceRatio"
                        ]
                      }
                    },
                    {
                      "name": "Deal Toughness DMG",
                      "value": {
                        "operator": "Variables[0] (MDF_StanceValue) || RETURN",
                        "displayLines": "MDF_StanceValue",
                        "constants": [],
                        "variables": [
                          "MDF_StanceValue"
                        ]
                      },
                      "attacker": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "forceReduction": true,
                      "ignoreAttackerBonuses": true,
                      "canDelay": true,
                      "livingState": "Mask_AliveOrLimbo",
                      "ToughnessDMGType": {
                        "name": "Damage Type Source",
                        "sourceType": {}
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-534697171\">Constance_ReduceStanceTriggerCD</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-935652084\">Constance_StancePreview</a>",
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "isPercentofMaxToughness": true,
            "addedPercent": {
              "operator": "Variables[0] (MDF_StanceRatio) || RETURN",
              "displayLines": "MDF_StanceRatio",
              "constants": [],
              "variables": [
                "MDF_StanceRatio"
              ]
            },
            "maxToughness": {
              "operator": "Variables[0] (MDF_MinStanceValue) || Constants[0] (3) || MUL || RETURN",
              "displayLines": "(MDF_MinStanceValue * 3)",
              "constants": [
                3
              ],
              "variables": [
                "MDF_MinStanceValue"
              ]
            },
            "minToughness": {
              "operator": "Variables[0] (MDF_MaxStanceValue) || Constants[0] (3) || MUL || RETURN",
              "displayLines": "(MDF_MaxStanceValue * 3)",
              "constants": [
                3
              ],
              "variables": [
                "MDF_MaxStanceValue"
              ]
            },
            "conditions": {
              "name": "AND",
              "conditionList": [
                {
                  "name": "AND",
                  "conditionList": [
                    {
                      "name": "Has Flag",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "flagName": "MuteBreak"
                    },
                    {
                      "name": "Compare: Ability Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "value1": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;",
                      "compareType": ">",
                      "value2": 0
                    }
                  ],
                  "invertCondition": true
                },
                {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-534697171\">Constance_ReduceStanceTriggerCD</a>",
                  "invertCondition": true
                }
              ]
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1409392867\">_M_Constance_Aura_ElementDamage</a>",
          "stackType": "Replace",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Attack Targets of Modifier Holder}}"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"2132906314\">DealSuperBreakDamage_DamagePerformance</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variables": {
                        "value_0_DamagePercentage": {
                          "operator": "Variables[0] (MDF_SuperBreakDamagePercentage) || RETURN",
                          "displayLines": "MDF_SuperBreakDamagePercentage",
                          "constants": [],
                          "variables": [
                            "MDF_SuperBreakDamagePercentage"
                          ]
                        }
                      },
                      "damageSequence": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"1466558420\">PursuedDamage_PerformanceDelay</a>",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          }
                        },
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "canPhase": true,
                          "AttackScaling": {
                            "DamageType": {
                              "name": "Damage Type Source",
                              "sourceType": "ReadTargetType",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              }
                            },
                            "DamageBreak": {
                              "operator": "Variables[0] (value_0_DamagePercentage) || RETURN",
                              "displayLines": "value_0_DamagePercentage",
                              "constants": [],
                              "variables": [
                                "value_0_DamagePercentage"
                              ]
                            },
                            "dmgFormula": "Break DMG Scaling",
                            "dmgFormulaFinal": "Pure (No DMG%)",
                            "Toughness": null,
                            "Tags": [
                              "Super Break"
                            ],
                            "attackType": "Break DMG"
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
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__793524292\">Constance_Eidolon1_SuperBreak</a>[<span class=\"descriptionNumberColor\">When a Bud Readies to Bloom</span>]",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "STAT_SuperBreakBuff"
          ],
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1409392867\">_M_Constance_Aura_ElementDamage</a>",
                  "valuePerStack": {
                    "MDF_SuperBreakDamagePercentage": {
                      "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                      "displayLines": "MDF_PropertyValue",
                      "constants": [],
                      "variables": [
                        "MDF_PropertyValue"
                      ]
                    }
                  },
                  "casterAssign": "TargetSelf"
                }
              ],
              "priorityLevel": 100
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"890706455\">Constance_Dancer</a>[<span class=\"descriptionNumberColor\">Dance Partner</span>]"
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "description": "After attacking a Weakness Broken enemy target, converts the Toughness Reduction of this attack into 1 instance of <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> Super Break DMG.",
          "type": "Buff",
          "statusName": "When a Bud Readies to Bloom"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__262562001\">Constance_DancerSuperBreak</a>",
          "modifierFlags": [
            "STAT_SuperBreakBuff"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Modifier-Specific Variable",
                  "modifierName": "<a class=\"gModGreen\" id=\"890706455\">Constance_Dancer</a>[<span class=\"descriptionNumberColor\">Dance Partner</span>]",
                  "variableName": "MDF_PropertyValue",
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
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1409392867\">_M_Constance_Aura_ElementDamage</a>",
                  "valuePerStack": {
                    "MDF_SuperBreakDamagePercentage": {
                      "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                      "displayLines": "MDF_PropertyValue",
                      "constants": [],
                      "variables": [
                        "MDF_PropertyValue"
                      ]
                    }
                  },
                  "casterAssign": "TargetSelf"
                }
              ],
              "priorityLevel": 100
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__856745501\">Constance_Dancer_UITOP</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "target2": {
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
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__890706455\">Constance_Dancer</a>[<span class=\"descriptionNumberColor\">Dance Partner</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}} - {{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"890706455\">Constance_Dancer</a>[<span class=\"descriptionNumberColor\">Dance Partner</span>]"
                    }
                  ]
                }
              ]
            }
          ],
          "description": "After attacking a Weakness Broken enemy target, converts the Toughness Reduction of this attack into 1 instance of <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> Super Break DMG.",
          "type": "Buff",
          "statusName": "Dance Partner",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"262562001\">Constance_DancerSuperBreak</a>",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (Rank01_Activated) || Variables[1] (0.6) || Variables[2] (0.4) || ADD || Variables[1] (0.6) || CHECK || RETURN",
                  "displayLines": "check(value:Rank01_Activated, then:(0.6 + 0.4), else:0.6)",
                  "constants": [],
                  "variables": [
                    "Rank01_Activated",
                    0.6,
                    0.4
                  ]
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"856745501\">Constance_Dancer_UITOP</a>"
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-935652084\">Constance_StancePreview</a>",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 1
              },
              "valuePerStack": {
                "MDF_StanceRatio": {
                  "operator": "Variables[0] (0.25) || RETURN",
                  "displayLines": "0.25",
                  "constants": [],
                  "variables": [
                    0.25
                  ]
                },
                "MDF_MinStanceValue": {
                  "operator": "Variables[0] (10) || RETURN",
                  "displayLines": "10",
                  "constants": [],
                  "variables": [
                    10
                  ]
                },
                "MDF_MaxStanceValue": {
                  "operator": "Variables[0] (300) || RETURN",
                  "displayLines": "300",
                  "constants": [],
                  "variables": [
                    300
                  ]
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1348225368\">Constance_Eidolon1_ReduceStance</a>",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 1
              },
              "valuePerStack": {
                "MDF_StanceRatio": {
                  "operator": "Variables[0] (0.25) || RETURN",
                  "displayLines": "0.25",
                  "constants": [],
                  "variables": [
                    0.25
                  ]
                },
                "MDF_MinStanceValue": {
                  "operator": "Variables[0] (10) || RETURN",
                  "displayLines": "10",
                  "constants": [],
                  "variables": [
                    10
                  ]
                },
                "MDF_MaxStanceValue": {
                  "operator": "Variables[0] (300) || RETURN",
                  "displayLines": "300",
                  "constants": [],
                  "variables": [
                    300
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-783629950\">_M_Constance_ListenInsert_SubOnEnemy</a>",
          "execute": [
            {
              "eventTrigger": "Being Attacked End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "flagName": "STAT_CTRL",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "flagName": "DisableAction",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1116970838\">Constance_InsertCD</a>[<span class=\"descriptionNumberColor\">Who's Afraid of Constance?</span>]",
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"890706455\">Constance_Dancer</a>[<span class=\"descriptionNumberColor\">Dance Partner</span>]"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Enemies Still Alive",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertUnusedCount",
                            "typeValue": 1
                          },
                          "abilityName": "Constance_Insert_SelectTarget",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Hostile Entities(AOE)}}"
                          },
                          "priorityTag": "AvatarInsertAttackSelf",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "abortFlags": [
                            "DisableAction",
                            "STAT_CTRL"
                          ],
                          "allowAbilityTriggers": false
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-2093019273\">_M_Constance_InsertCheck</a>"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1358334362\">_M_Constance_DancerManager</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"890706455\">Constance_Dancer</a>[<span class=\"descriptionNumberColor\">Dance Partner</span>]"
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{All Team Members with Unselectables}} - {{Caster}}"
                  },
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "STAT_TriggerBattleCharacter"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"890706455\">Constance_Dancer</a>[<span class=\"descriptionNumberColor\">Dance Partner</span>]"
                    }
                  ],
                  "noTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}.[[livingOrLimbo]].[[sortByBreakEffect]].[[reverse]].[[index0]]"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"890706455\">Constance_Dancer</a>[<span class=\"descriptionNumberColor\">Dance Partner</span>]"
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
                    "value1": "Rank01_Activated",
                    "compareType": ">=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}.[[removeMemosprite]] - {{Dahlia's Dance Partners}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"793524292\">Constance_Eidolon1_SuperBreak</a>[<span class=\"descriptionNumberColor\">When a Bud Readies to Bloom</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.6) || RETURN",
                          "displayLines": "0.6",
                          "constants": [],
                          "variables": [
                            0.6
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
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
                          "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "mustBeAlive2": true
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Dahlia's Dance Partners}} - {{Caster}}"
                        },
                        "value1": "TeamCharacterCount",
                        "compareType": "<=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}.[[livingOrLimbo]].[[sortByBreakEffect]].[[reverse]].[[index0]]"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"890706455\">Constance_Dancer</a>[<span class=\"descriptionNumberColor\">Dance Partner</span>]"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{All Team Members with Unselectables}}.[[removeMemosprite]]"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "mustBeAlive2": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"890706455\">Constance_Dancer</a>[<span class=\"descriptionNumberColor\">Dance Partner</span>]",
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "Rank01_Activated",
                        "compareType": ">=",
                        "value2": 1
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
                      "modifier": "<a class=\"gModGreen\" id=\"793524292\">Constance_Eidolon1_SuperBreak</a>[<span class=\"descriptionNumberColor\">When a Bud Readies to Bloom</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.6) || RETURN",
                          "displayLines": "0.6",
                          "constants": [],
                          "variables": [
                            0.6
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"890706455\">Constance_Dancer</a>[<span class=\"descriptionNumberColor\">Dance Partner</span>]"
                      },
                      {
                        "name": "Living State",
                        "state": "Mask_AliveOrLimbo",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Dahlia's Dance Partners}} - {{Caster}}"
                        },
                        "value1": "TeamCharacterCount",
                        "compareType": "<=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}.[[livingOrLimbo]].[[sortByBreakEffect]].[[reverse]].[[index0]]"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"890706455\">Constance_Dancer</a>[<span class=\"descriptionNumberColor\">Dance Partner</span>]"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-157877441\">Constance_Ultimate_AddWeaknessPreShow</a>",
          "stackData": [],
          "latentQueue": [],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "skillType": "Ultimate",
            "addedDisplayWeakness": {
              "name": "Target Name",
              "target": "{{Dahlia's Dance Partners}}"
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1624350031\">Constance_Eidolon2_PropertyValue</a>[<span class=\"descriptionNumberColor\">Fresh, Ethereal, and Beloved</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAll</span>&nbsp;",
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
          "description": "All-Type RES decreases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "All-Type RES Reduction",
          "statusName": "Fresh, Ethereal, and Beloved"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-817970553\">Constance_Eidolon2_Halo</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE, with Unselectables)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1624350031\">Constance_Eidolon2_PropertyValue</a>[<span class=\"descriptionNumberColor\">Fresh, Ethereal, and Beloved</span>]",
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
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Hostile Entities(AOE, with Unselectables)}}"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1624350031\">Constance_Eidolon2_PropertyValue</a>[<span class=\"descriptionNumberColor\">Fresh, Ethereal, and Beloved</span>]",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1614707802\">Constance_MonsterPhaseChangeControl</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "CustomEvent_MonsterChangePhaseTrigger"
          ],
          "execute": [
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Is Sub-Target in HP-Share Group",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-2049832737\">Enemy_Standard_ChangephaseMark</a>"
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-534697171\">Constance_ReduceStanceTriggerCD</a>",
                      "removeToBeAdded": true
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1127015724\">Constance_Eidolon6_Property</a>[<span class=\"descriptionNumberColor\">And Yet, Always, Deathly Beautiful</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
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
          "description": "Break Effect increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "statusName": "And Yet, Always, Deathly Beautiful"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-293054449\">Constance_Eidolon6_PropertyListen</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Dahlia's Dance Partners}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1127015724\">Constance_Eidolon6_Property</a>[<span class=\"descriptionNumberColor\">And Yet, Always, Deathly Beautiful</span>]",
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
              "priorityLevel": -80
            },
            {
              "eventTrigger": "When Modifier is Added [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"890706455\">Constance_Dancer</a>[<span class=\"descriptionNumberColor\">Dance Partner</span>]"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1127015724\">Constance_Eidolon6_Property</a>[<span class=\"descriptionNumberColor\">And Yet, Always, Deathly Beautiful</span>]",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1852842917\">Constance_Tree01_Property</a>[<span class=\"descriptionNumberColor\">Yet Another Funeral</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "MDF_PropertyValueCaster",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
                  "context": "ContextModifier"
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "ContextModifier",
                  "variableName": "MDF_PropertyValue",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValueCaster) || Variables[1] (0.24) || MUL || Variables[2] (0.5) || ADD || RETURN",
                    "displayLines": "((MDF_PropertyValueCaster * 0.24) + 0.5)",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValueCaster",
                      0.24,
                      0.5
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakConverted</span>&nbsp;",
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
          "description": "Break Effect increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "Break Effect Boost",
          "statusName": "Yet Another Funeral"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1188679067\">Constance_ListenTrace01</a>",
          "execute": [
            {
              "eventTrigger": "Receiving Heal End [Owner]",
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
                          "target": "{{Parameter Target's Source Owner}}"
                        },
                        "mustBeAlive2": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1979766411\">_M_Constance_Tree01_CD</a>",
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
                      "modifier": "<a class=\"gModGreen\" id=\"1979766411\">_M_Constance_Tree01_CD</a>",
                      "referenceModifier": "<a class=\"gModGreen\" id=\"-1664553013\">MReference_Mark_RemoveOnTurnEnd</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{All Team Members with Unselectables}}.[[removeMemosprite]] - {{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1852842917\">Constance_Tree01_Property</a>[<span class=\"descriptionNumberColor\">Yet Another Funeral</span>]",
                      "duration": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
                        ]
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{All Team Members with Unselectables}}.[[removeMemosprite]] - {{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1852842917\">Constance_Tree01_Property</a>[<span class=\"descriptionNumberColor\">Yet Another Funeral</span>]",
                      "duration": {
                        "operator": "Variables[0] (1) || RETURN",
                        "displayLines": "1",
                        "constants": [],
                        "variables": [
                          1
                        ]
                      }
                    }
                  ]
                }
              ],
              "priorityLevel": -80
            },
            {
              "eventTrigger": "Created Shield [Anyone]",
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
                          "target": "{{Parameter Target's Source Owner}}"
                        },
                        "mustBeAlive2": true
                      },
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target 2}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1979766411\">_M_Constance_Tree01_CD</a>",
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
                      "modifier": "<a class=\"gModGreen\" id=\"1979766411\">_M_Constance_Tree01_CD</a>",
                      "referenceModifier": "<a class=\"gModGreen\" id=\"-1664553013\">MReference_Mark_RemoveOnTurnEnd</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{All Team Members with Unselectables}}.[[removeMemosprite]] - {{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1852842917\">Constance_Tree01_Property</a>[<span class=\"descriptionNumberColor\">Yet Another Funeral</span>]",
                      "duration": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
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
          "for": "<a class=\"gModGreen\" id=\"mod__-2129474083\">Constance_Passive</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
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
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "operator": "Variables[0] (35) || RETURN",
                        "displayLines": "35",
                        "constants": [],
                        "variables": [
                          35
                        ]
                      },
                      "isFixed": "* ERR"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1358334362\">_M_Constance_DancerManager</a>"
                    }
                  ]
                }
              ],
              "priorityLevel": -80
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1614707802\">Constance_MonsterPhaseChangeControl</a>",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 1
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-293054449\">Constance_Eidolon6_PropertyListen</a>",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 6
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (1.5) || RETURN",
                  "displayLines": "1.5",
                  "constants": [],
                  "variables": [
                    1.5
                  ]
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1188679067\">Constance_ListenTrace01</a>",
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "Yet Another Funeral"
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-817970553\">Constance_Eidolon2_Halo</a>",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 2
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.2) || RETURN",
                  "displayLines": "0.2",
                  "constants": [],
                  "variables": [
                    0.2
                  ]
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE, with Unselectables)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-783629950\">_M_Constance_ListenInsert_SubOnEnemy</a>",
              "aliveOnly": "False",
              "haloStatus": true
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1409392867\">_M_Constance_Aura_ElementDamage</a>",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_SuperBreakDamagePercentage": 0
              }
            }
          ]
        }
      ]
    },
    "TheDahlia_Constance_Insert_Part02": {
      "fileName": "TheDahlia_Constance_Insert_Part02",
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
                "target": "{{Hostile Entities(AOE)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-380368106\">Constance_Eidolon4_Property</a>[<span class=\"descriptionNumberColor\">Pity Its Heart Gnawed by Worms</span>]",
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
                  "operator": "Variables[0] (0.12) || RETURN",
                  "displayLines": "0.12",
                  "constants": [],
                  "variables": [
                    0.12
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1116970838\">Constance_InsertCD</a>[<span class=\"descriptionNumberColor\">Who's Afraid of Constance?</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2093019273\">_M_Constance_InsertCheck</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Lament, Lost Soul"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1367019028\">Constance_Tree02_CD</a>[<span class=\"descriptionNumberColor\">Lament, Lost Soul</span>]",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Skill Points Modification",
                  "adjustmentValue": 1,
                  "adjustmentType": "+"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1367019028\">Constance_Tree02_CD</a>[<span class=\"descriptionNumberColor\">Lament, Lost Soul</span>]",
                  "counter": {
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
                  "name": "Define Modifier Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifierName": "<a class=\"gModGreen\" id=\"1367019028\">Constance_Tree02_CD</a>[<span class=\"descriptionNumberColor\">Lament, Lost Soul</span>]",
                  "function": "Add"
                }
              ]
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "scope": "ContextAbility",
          "variableName": "ADF_AttackGap",
          "value": {
            "operator": "Constants[0] (0.1) || Variables[0] (5) || DIV || RETURN",
            "displayLines": "(0.1 / 5)",
            "constants": [
              0.1
            ],
            "variables": [
              5
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "ADF_FirstHit",
          "value": 1
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
              "variableName": "ADF_BounceCount",
              "value": {
                "operator": "Variables[0] (5) || Variables[1] (5) || ADD || RETURN",
                "displayLines": "(5 + 5)",
                "constants": [],
                "variables": [
                  5,
                  5
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "ADF_BounceCount",
              "value": {
                "operator": "Variables[0] (5) || RETURN",
                "displayLines": "5",
                "constants": [],
                "variables": [
                  5
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
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1527090005\">ReduceNextActionDelay</a>",
              "target": {
                "name": "Target Name",
                "target": "{{Dahlia's Dance Partners}}"
              },
              "variables": {
                "parameter[0]_NormalizedValue": {
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
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (ADF_BounceCount) || RETURN",
            "displayLines": "ADF_BounceCount",
            "constants": [],
            "variables": [
              "ADF_BounceCount"
            ]
          },
          "Event": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"247970287\">Bounce_SelectTarget</a>",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "paramSequence": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "ADF_FirstHit",
                    "compareType": ">=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "ADF_FirstHit",
                      "value": 0
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1229984298\">_M_Constance_Insert_StanceRecorded</a>"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "Damage": {
                      "operator": "Variables[0] (0.3) || RETURN",
                      "displayLines": "0.3",
                      "constants": [],
                      "variables": [
                        0.3
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
                      "DamageType": "Fire"
                    },
                    "instanceTag": "Constance_InsertHit",
                    "Tags": null,
                    "attackType": "Follow-up",
                    "EnergyGainPercent": "100%"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1229984298\">_M_Constance_Insert_StanceRecorded</a>"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Copy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1229984298\">_M_Constance_Insert_StanceRecorded</a>",
                      "variable": "MDF_TotalStanceDamage",
                      "target2": null,
                      "variable2": "ADF_StanceValue",
                      "scope": "ContextAbility"
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"795502164\">DealSuperBreakDamage</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variables": {
                        "value_0_DamagePercentage": {
                          "operator": "Variables[0] (2) || RETURN",
                          "displayLines": "2",
                          "constants": [],
                          "variables": [
                            2
                          ]
                        },
                        "StanceValue": {
                          "operator": "Variables[0] (ADF_StanceValue) || RETURN",
                          "displayLines": "ADF_StanceValue",
                          "constants": [],
                          "variables": [
                            "ADF_StanceValue"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1229984298\">_M_Constance_Insert_StanceRecorded</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        "Trigger: Attack End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1229984298\">_M_Constance_Insert_StanceRecorded</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Taking Toughness DMG [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "Break"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "STAT_ForceSuperBreakDamage"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "STAT_ForceSuperBreakDamage"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Varying Data",
                      "target": null,
                      "variableName": "MDF_HitStanceDamage",
                      "value": "ParamValue2"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_TotalStanceDamage",
                      "value": {
                        "operator": "Variables[0] (MDF_TotalStanceDamage) || Variables[1] (MDF_HitStanceDamage) || ADD || RETURN",
                        "displayLines": "(MDF_TotalStanceDamage + MDF_HitStanceDamage)",
                        "constants": [],
                        "variables": [
                          "MDF_TotalStanceDamage",
                          "MDF_HitStanceDamage"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "ADF_AttackGap",
            "ADF_FirstHit"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1367019028\">Constance_Tree02_CD</a>[<span class=\"descriptionNumberColor\">Lament, Lost Soul</span>]",
          "stackData": [],
          "latentQueue": [],
          "description": "After using Talent's Follow-Up ATK <span class=\"descriptionNumberColor\">MDF_Count</span> more time(s), the Skill Point recovery effect from \"Lament, Lost Soul\" can be triggered again.",
          "type": "Other",
          "statusName": "Lament, Lost Soul"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-380368106\">Constance_Eidolon4_Property</a>[<span class=\"descriptionNumberColor\">Pity Its Heart Gnawed by Worms</span>]",
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
            "MDF_PropertyValue"
          ],
          "latentQueue": [],
          "description": "DMG taken increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "Vulnerability",
          "statusName": "Pity Its Heart Gnawed by Worms"
        }
      ]
    },
    "TheDahlia_Constance_Insert_Part01": {
      "fileName": "TheDahlia_Constance_Insert_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Who's Afraid of Constance?"
        },
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "Constance_Insert_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "TheDahlia_Constance_Insert_SelectTarget": {
      "fileName": "TheDahlia_Constance_Insert_SelectTarget",
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
            }
          },
          "passed": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "inherentTarget": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "ability": "Constance_Insert_Part01",
              "isTrigger": true
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2093019273\">_M_Constance_InsertCheck</a>"
            }
          ]
        }
      ],
      "onAbort": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2093019273\">_M_Constance_InsertCheck</a>"
        }
      ],
      "references": []
    },
    "TheDahlia_Constance_Ability03_Part02": {
      "fileName": "TheDahlia_Constance_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1539081164\">Constance_Ultimate_Weakness</a>[<span class=\"descriptionNumberColor\">Wilt</span>]",
          "duration": {
            "operator": "Variables[0] (4) || RETURN",
            "displayLines": "4",
            "constants": [],
            "variables": [
              4
            ]
          },
          "valuePerStack": {
            "MDF_PropertyRatio": {
              "operator": "Variables[0] (0.18) || RETURN",
              "displayLines": "0.18",
              "constants": [],
              "variables": [
                0.18
              ]
            }
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemies Still Alive",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            }
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}.[[living]]"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] (3) || RETURN",
                  "displayLines": "3",
                  "constants": [],
                  "variables": [
                    3
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
              },
              "distributeEqually": true
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] (3) || RETURN",
                  "displayLines": "3",
                  "constants": [],
                  "variables": [
                    3
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
              },
              "distributeEqually": true
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Skip Death Handling",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "TheDahlia_Constance_Ability03_Part01": {
      "fileName": "TheDahlia_Constance_Ability03_Part01",
      "childAbilityList": [
        "TheDahlia_Constance_Ability03_Camera",
        "TheDahlia_Constance_Ability03_EnterReady",
        "TheDahlia_Constance_Ability03_Part01",
        "TheDahlia_Constance_Ability03_Part02"
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
          "ability": "Constance_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "TheDahlia_Constance_Ability03_EnterReady": {
      "fileName": "TheDahlia_Constance_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "TheDahlia_Constance_Ability02_Part02": {
      "fileName": "TheDahlia_Constance_Ability02_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-2139860773\">Constance_Aura</a>[<span class=\"descriptionNumberColor\">Lick... Enkindled Betrayal</span>]",
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
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (1.6) || RETURN",
              "displayLines": "1.6",
              "constants": [],
              "variables": [
                1.6
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
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (1.6) || RETURN",
              "displayLines": "1.6",
              "constants": [],
              "variables": [
                1.6
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
        "Trigger: Ability End"
      ],
      "references": []
    },
    "TheDahlia_Constance_Ability02_Part01": {
      "fileName": "TheDahlia_Constance_Ability02_Part01",
      "childAbilityList": [
        "TheDahlia_Constance_Ability02_Camera",
        "TheDahlia_Constance_Ability02_Part01",
        "TheDahlia_Constance_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": 30,
      "toughnessList": [
        10,
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
          "ability": "Constance_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "TheDahlia_Constance_Ability01_Part02": {
      "fileName": "TheDahlia_Constance_Ability01_Part02",
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
            "DamageType": "Fire",
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
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "TheDahlia_Constance_Ability01_Part01": {
      "fileName": "TheDahlia_Constance_Ability01_Part01",
      "childAbilityList": [
        "TheDahlia_Constance_Ability01_Camera",
        "TheDahlia_Constance_Ability01_Part01",
        "TheDahlia_Constance_Ability01_Part02"
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
          "ability": "Constance_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "TheDahlia_Modifiers": {
      "fileName": "TheDahlia_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-2093019273\">_M_Constance_InsertCheck</a>",
          "modifierFlags": [
            "CustomEvent_InfiniteRefresh"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-715058594\">Constance_InsertRetargetSelf</a>"
                }
              ]
            },
            {
              "eventTrigger": "Action Choice Window [Anyone]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-715058594\">Constance_InsertRetargetSelf</a>"
                }
              ],
              "priorityLevel": -55
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-715058594\">Constance_InsertRetargetSelf</a>"
                }
              ]
            },
            {
              "eventTrigger": "New Enemy Wave",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-715058594\">Constance_InsertRetargetSelf</a>"
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
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "invertCondition": true
                      },
                      {
                        "name": "Living State",
                        "state": "Mask_AliveOrRevivable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-715058594\">Constance_InsertRetargetSelf</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__-715058594\">Constance_InsertRetargetSelf</a>",
              "parse": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemies Still Alive",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "Constance_Insert_SelectTarget",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "priorityTag": "AvatarInsertAttackSelf",
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
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1116970838\">Constance_InsertCD</a>[<span class=\"descriptionNumberColor\">Who's Afraid of Constance?</span>]",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-2139860773\">Constance_Aura</a>[<span class=\"descriptionNumberColor\">Lick... Enkindled Betrayal</span>]"
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "priorState": "Active",
                      "cooldown": 0
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "priorState": "Normal",
                      "cooldown": 0
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Turn [Action-End Phase]",
              "execute": [
                "Modifier Deletes Itself"
              ],
              "priorityLevel": 100
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Update Displayed Energy Bar",
                  "priorState": "CoolDown",
                  "cooldown": 1
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "Talent's Follow-Up ATK cannot be triggered yet.",
          "type": "Other",
          "statusName": "Who's Afraid of Constance?"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__628099091\">Constance_Ultimate_Weakness_Sub_Imaginary</a>",
          "stackType": "EntityUnique",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Imaginary"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1073816607\">Constance_Ultimate_Weakness_Sub_Quantum</a>",
          "stackType": "EntityUnique",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Quantum"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1412482872\">Constance_Ultimate_Weakness_Sub_Wind</a>",
          "stackType": "EntityUnique",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Wind"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1441945696\">Constance_Ultimate_Weakness_Sub_Thunder</a>",
          "stackType": "EntityUnique",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Thunder"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-401157135\">Constance_Ultimate_Weakness_Sub_Ice</a>",
          "stackType": "EntityUnique",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Ice"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2114479442\">Constance_Ultimate_Weakness_Sub_Fire</a>",
          "stackType": "EntityUnique",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Fire"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-447864201\">Constance_Ultimate_Weakness_Sub_Physical</a>",
          "stackType": "EntityUnique",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Physical"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1539081164\">Constance_Ultimate_Weakness</a>[<span class=\"descriptionNumberColor\">Wilt</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_AttachWeakness",
            "STAT_DefenceDown"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
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
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-29129894\">_T_Constance_RefreshWeakness</a>"
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
                    "modifier": "<a class=\"gModGreen\" id=\"890706455\">Constance_Dancer</a>[<span class=\"descriptionNumberColor\">Dance Partner</span>]"
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-29129894\">_T_Constance_RefreshWeakness</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__-29129894\">_T_Constance_RefreshWeakness</a>",
              "parse": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-447864201\">Constance_Ultimate_Weakness_Sub_Physical</a>",
                  "onlyRemoveOwnersInstance": true
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2114479442\">Constance_Ultimate_Weakness_Sub_Fire</a>",
                  "onlyRemoveOwnersInstance": true
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-401157135\">Constance_Ultimate_Weakness_Sub_Ice</a>",
                  "onlyRemoveOwnersInstance": true
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1441945696\">Constance_Ultimate_Weakness_Sub_Thunder</a>",
                  "onlyRemoveOwnersInstance": true
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1412482872\">Constance_Ultimate_Weakness_Sub_Wind</a>",
                  "onlyRemoveOwnersInstance": true
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1073816607\">Constance_Ultimate_Weakness_Sub_Quantum</a>",
                  "onlyRemoveOwnersInstance": true
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"628099091\">Constance_Ultimate_Weakness_Sub_Imaginary</a>",
                  "onlyRemoveOwnersInstance": true
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Dahlia's Dance Partners}}"
                  },
                  "includeDyingTargets": true,
                  "ifTargetFound": [
                    {
                      "name": "SWITCH",
                      "source": {
                        "name": "Damage Type Source",
                        "sourceType": "ReadTargetType",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      "caseEvents": [
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": "Physical",
                          "execute": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-447864201\">Constance_Ultimate_Weakness_Sub_Physical</a>",
                              "silentAdd": true
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": "Fire",
                          "execute": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-2114479442\">Constance_Ultimate_Weakness_Sub_Fire</a>",
                              "silentAdd": true
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": "Ice",
                          "execute": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-401157135\">Constance_Ultimate_Weakness_Sub_Ice</a>",
                              "silentAdd": true
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": "Thunder",
                          "execute": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1441945696\">Constance_Ultimate_Weakness_Sub_Thunder</a>",
                              "silentAdd": true
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": "Wind",
                          "execute": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1412482872\">Constance_Ultimate_Weakness_Sub_Wind</a>",
                              "silentAdd": true
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": "Quantum",
                          "execute": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1073816607\">Constance_Ultimate_Weakness_Sub_Quantum</a>",
                              "silentAdd": true
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": "Imaginary",
                          "execute": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"628099091\">Constance_Ultimate_Weakness_Sub_Imaginary</a>",
                              "silentAdd": true
                            }
                          ]
                        }
                      ],
                      "defaultEvents": []
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyRatio"
          ],
          "latentQueue": [],
          "description": "DEF decreases by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>. Gains Weaknesses of all Dance Partners' Types.",
          "type": "Debuff",
          "effectName": "Wilt",
          "statusName": "Wilt"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1701170235\">Constance_Aura_OnEnemy</a>[<span class=\"descriptionNumberColor\">Lick... Enkindled Betrayal</span>]",
          "modifierFlags": [
            "STAT_ForceSuperBreakDamage"
          ],
          "description": "Toughness Reduction taken when not Weakness Broken can also be converted to Super Break DMG.",
          "type": "Debuff",
          "statusName": "Lick... Enkindled Betrayal"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2139860773\">Constance_Aura</a>[<span class=\"descriptionNumberColor\">Lick... Enkindled Betrayal</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (MDF_Aura_Lifetime) || RETURN",
                    "displayLines": "MDF_Aura_Lifetime",
                    "constants": [],
                    "variables": [
                      "MDF_Aura_Lifetime"
                    ]
                  },
                  "priorState": "Active"
                },
                {
                  "name": "Define Custom Variable",
                  "scope": "AITag",
                  "variableName": "BPSkillPriority",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 0,
                  "priorState": "Normal"
                },
                {
                  "name": "Define Custom Variable",
                  "scope": "AITag",
                  "variableName": "BPSkillPriority",
                  "value": 1
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakEfficiency</span>&nbsp;",
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
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "MDF_Aura_Lifetime",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (MDF_Aura_Lifetime) || RETURN",
                        "displayLines": "MDF_Aura_Lifetime",
                        "constants": [],
                        "variables": [
                          "MDF_Aura_Lifetime"
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
                        "value1": "MDF_Aura_Lifetime",
                        "compareType": "<=",
                        "value2": 1,
                        "contextScope": "ContextModifier"
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": [],
          "description": "Weakness Break Efficiency increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>. Toughness Reduction taken by enemy targets that are not Weakness Broken can also be converted to Super Break DMG.",
          "type": "Buff",
          "statusName": "Lick... Enkindled Betrayal",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE, with Unselectables)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1701170235\">Constance_Aura_OnEnemy</a>[<span class=\"descriptionNumberColor\">Lick... Enkindled Betrayal</span>]",
              "aliveOnly": "False",
              "haloStatus": true
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-152934148\">Constance_Aura_OnTeam</a>[<span class=\"descriptionNumberColor\">Lick... Enkindled Betrayal</span>]",
              "refModifier": "<a class=\"gModGreen\" id=\"1782063048\">MReference_StanceBreakAddedRatio</a>",
              "aliveOnly": "False",
              "haloStatus": true,
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
      ],
      "references": []
    }
  }
}