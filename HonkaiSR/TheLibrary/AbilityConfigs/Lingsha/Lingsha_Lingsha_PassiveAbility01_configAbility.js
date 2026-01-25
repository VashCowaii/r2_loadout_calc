const configAbility = {
  "fileName": "Lingsha_Lingsha_PassiveAbility01",
  "childAbilityList": [
    "Lingsha_Lingsha_PassiveAbility01",
    "Lingsha_Lingsha_BPAbility_BattleEvent_Part02"
  ],
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": [
    0,
    10,
    0
  ],
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Lingsha_Passive"
    },
    {
      "name": "Preload Battle Event(s)",
      "eventID": [
        11222
      ]
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": 0,
      "maximum": {
        "operator": "Variables[0] (5) || RETURN",
        "displayLines": "5",
        "constants": [],
        "variables": [
          5
        ]
      },
      "assignState": "True",
      "priorState": "Normal",
      "bar#": 4
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Vermilion Waft"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Lingsha_PointB1_OnListen"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Lingsha_Olisten_BE_Create"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Lingsha_Ability_ModifyBEAction"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Lingsha_Ultimate_ModifyBEAction"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 1
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Lingsha_Eidolon1_Listen",
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
          "variableName": "Lingsha_Rank06_StanceDamage",
          "value": {
            "operator": "Variables[0] (5) || Constants[0] (3) || MUL || RETURN",
            "displayLines": "(5 * 3)",
            "constants": [
              3
            ],
            "variables": [
              5
            ]
          }
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Lingsha_Ultimate_ModifyBEAction",
      "stackData": [],
      "latentQueue": [],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": {
          "name": "Target Name",
          "target": "{{Fuyuan}}"
        },
        "skillType": [
          "Ultimate"
        ],
        "conditions": {
          "name": "Compare: Variable",
          "value1": "Lingsha_BENum",
          "compareType": ">=",
          "value2": 1
        },
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": {
            "operator": "Variables[0] (1) || INVERT || RETURN",
            "displayLines": "-1",
            "constants": [],
            "variables": [
              1
            ]
          }
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "Lingsha_Ability_ModifyBEAction",
      "stackData": [],
      "latentQueue": [],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": {
          "name": "Target Name",
          "target": "{{Fuyuan}}"
        },
        "skillType": [
          "Skill"
        ],
        "conditions": {
          "name": "Compare: Variable",
          "value1": "Lingsha_BENum",
          "compareType": ">=",
          "value2": 1
        },
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": {
            "operator": "Variables[0] (0.2) || INVERT || RETURN",
            "displayLines": "-0.2",
            "constants": [],
            "variables": [
              0.2
            ]
          }
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "Lingsha_Olisten_BE_Create",
      "stackData": [],
      "latentQueue": [],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "entityType": "BattleEvent",
        "entityID": 11222,
        "skillType": [
          "Skill"
        ],
        "conditions": {
          "name": "Compare: Variable",
          "value1": "Lingsha_BENum",
          "compareType": "<=",
          "value2": 0
        },
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": {
            "operator": "Variables[0] (0.2) || INVERT || RETURN",
            "displayLines": "-0.2",
            "constants": [],
            "variables": [
              0.2
            ]
          }
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "Lingsha_PointB1_Sub2",
      "stackType": "ReplaceByCaster",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HealingOutgoingConverted</span>&nbsp;",
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
      "for": "Lingsha_PointB1_Sub",
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
              "variableName": "Lingsha_BaseAttack",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;"
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">AttackConverted</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyRatio) || Variables[1] (Lingsha_BaseAttack) || MUL || RETURN",
                "displayLines": "(MDF_PropertyRatio * Lingsha_BaseAttack)",
                "constants": [],
                "variables": [
                  "MDF_PropertyRatio",
                  "Lingsha_BaseAttack"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Lingsha_PointB1_OnListen",
      "modifierFlags": [
        "ListenBattleEventSkill"
      ],
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
              "variableName": "Lingsha_BreakDamageAdded",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Lingsha_PointB1_Sub",
              "valuePerStack": {
                "MDF_PropertyRatio": {
                  "operator": "Variables[0] (MIN) || Variables[1] (Lingsha_BreakDamageAdded) || Variables[2] (0.25) || MUL || Variables[3] (0.5) || PARAM_2 || FUNCTION || RETURN",
                  "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>((Lingsha_BreakDamageAdded * 0.25), 0.5)",
                  "constants": [],
                  "variables": [
                    "MIN",
                    "Lingsha_BreakDamageAdded",
                    0.25,
                    0.5
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
              "modifier": "Lingsha_PointB1_Sub2",
              "valuePerStack": {
                "MDF_PropertyRatio": {
                  "operator": "Variables[0] (MIN) || Variables[1] (Lingsha_BreakDamageAdded) || Variables[2] (0.1) || MUL || Variables[3] (0.2) || PARAM_2 || FUNCTION || RETURN",
                  "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>((Lingsha_BreakDamageAdded * 0.1), 0.2)",
                  "constants": [],
                  "variables": [
                    "MIN",
                    "Lingsha_BreakDamageAdded",
                    0.1,
                    0.2
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
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": -999,
              "maxValue": 999,
              "whenValueChanges": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "Lingsha_BreakDamageAdded",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Lingsha_PointB1_Sub",
                  "valuePerStack": {
                    "MDF_PropertyRatio": {
                      "operator": "Variables[0] (MIN) || Variables[1] (Lingsha_BreakDamageAdded) || Variables[2] (0.25) || MUL || Variables[3] (0.5) || PARAM_2 || FUNCTION || RETURN",
                      "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>((Lingsha_BreakDamageAdded * 0.25), 0.5)",
                      "constants": [],
                      "variables": [
                        "MIN",
                        "Lingsha_BreakDamageAdded",
                        0.25,
                        0.5
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
                  "modifier": "Lingsha_PointB1_Sub2",
                  "valuePerStack": {
                    "MDF_PropertyRatio": {
                      "operator": "Variables[0] (MIN) || Variables[1] (Lingsha_BreakDamageAdded) || Variables[2] (0.1) || MUL || Variables[3] (0.2) || PARAM_2 || FUNCTION || RETURN",
                      "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>((Lingsha_BreakDamageAdded * 0.1), 0.2)",
                      "constants": [],
                      "variables": [
                        "MIN",
                        "Lingsha_BreakDamageAdded",
                        0.1,
                        0.2
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
    },
    {
      "name": "Modifier Construction",
      "for": "Lingsha_Passive",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Self-Made Battle-Events}}"
              },
              "ignoreHPLossTriggers": true,
              "ignoreDeathTriggers": true
            }
          ]
        },
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
                "team": "TeamDark"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Lingsha_Eidolon1_PassiveStackProperty"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Lingsha_Eidolon1_ListenBreak",
                      "valuePerStack": {
                        "Eidolon1_MDF_PropertyValue": {
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
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 1
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE, with Unselectables)}}"
                  },
                  "modifier": "Lingsha_Eidolon1_PassiveStackProperty"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE, with Unselectables)}}"
                  },
                  "modifier": "Lingsha_Eidolon1_ListenBreak",
                  "valuePerStack": {
                    "Eidolon1_MDF_PropertyValue": {
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
          ],
          "priorityLevel": -80
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}