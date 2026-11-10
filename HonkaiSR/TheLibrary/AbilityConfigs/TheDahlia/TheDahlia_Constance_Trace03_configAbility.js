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
          "displayLines": "(20 * 3)"
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
              "DamageType": "Fire"
            },
            {
              "name": "Is Entity Type",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "entityType": "Character"
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
      "description": "SPD increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "SPD Boost",
      "statusName": "Outgrow the Old, Espouse the New",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "statValue": {
                "displayLines": "MDF_PropertyValue"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-25137602\">_M_Constance_Tree03_AddWeaknessListener_DuringAttack</a>",
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "priorityLevel": -100,
          "execute": [
            "Modifier Deletes Itself"
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
                    "entityType": "Battle Event",
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
                        "DamageType": "Fire"
                      },
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "entityType": "Character"
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
                "entityType": "Battle Event"
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
                    "DamageType": "Fire"
                  },
                  {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "entityType": "Character"
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Deal Toughness DMG",
                  "value": {
                    "displayLines": "(20 * 3)"
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
                    "DamageType": "Fire"
                  },
                  {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "entityType": "Character"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "_maxSP",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "_curSP",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": {
                    "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MAX</span>(0, ((_maxSP * 0.5) - _curSP))"
                  },
                  "variableName": "_maxAddSP"
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
                      "displayLines": "(_maxSP * 0.1)"
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
                        "displayLines": "0.1"
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
                        "displayLines": "_maxAddSP"
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
                "entityType": "Battle Event"
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
                "entityType": "Battle Event"
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
          "priorityLevel": -85,
          "execute": [
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
                    "entityType": "Battle Event",
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
                    "displayLines": "2"
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "displayLines": "0.3"
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
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  }
}