const configAbility = {
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
}