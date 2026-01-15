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
          "to": "All Hostile Entities (AOE)",
          "modifier": "Constance_Eidolon4_Property[<span class=\"descriptionNumberColor\">Pity Its Heart Gnawed by Worms</span>]",
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
      "to": "Caster",
      "modifier": "Constance_InsertCD[<span class=\"descriptionNumberColor\">Who's Afraid of Constance?</span>]"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": "Caster",
      "modifier": "_M_Constance_InsertCheck"
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
            "target": "Caster",
            "modifier": "Constance_Tree02_CD[<span class=\"descriptionNumberColor\">Lament, Lost Soul</span>]",
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
              "to": "Caster",
              "modifier": "Constance_Tree02_CD[<span class=\"descriptionNumberColor\">Lament, Lost Soul</span>]",
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
              "target": "Caster",
              "modifierName": "Constance_Tree02_CD[<span class=\"descriptionNumberColor\">Lament, Lost Soul</span>]",
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
          "functionName": "ReduceNextActionDelay",
          "target": "Dahlia's Dance Partners",
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
          "functionName": "Bounce_SelectTarget",
          "target": "All Hostile Entities (AOE)",
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
              "to": "Use Prior Target(s) Defined",
              "modifier": "_M_Constance_Insert_StanceRecorded"
            },
            {
              "name": "ATK Scaling DMG",
              "target": "Use Prior Target(s) Defined",
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
                "target": "Use Prior Target(s) Defined",
                "modifier": "_M_Constance_Insert_StanceRecorded"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Copy",
                  "target": "Use Prior Target(s) Defined",
                  "modifier": "_M_Constance_Insert_StanceRecorded",
                  "variable": "MDF_TotalStanceDamage",
                  "target2": null,
                  "variable2": "ADF_StanceValue",
                  "scope": "ContextAbility"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "DealSuperBreakDamage",
                  "target": "Use Prior Target(s) Defined",
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
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "_M_Constance_Insert_StanceRecorded"
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
      "for": "_M_Constance_Insert_StanceRecorded",
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
                    "target": "Owner of this Modifier",
                    "flagName": "Break"
                  },
                  {
                    "name": "Has Flag",
                    "target": "Use Prior Target(s) Defined",
                    "flagName": "STAT_ForceSuperBreakDamage"
                  },
                  {
                    "name": "Has Flag",
                    "target": "Owner of this Modifier",
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
      "for": "Constance_Tree02_CD[<span class=\"descriptionNumberColor\">Lament, Lost Soul</span>]",
      "stackData": [],
      "latentQueue": [],
      "description": "After using Talent's Follow-Up ATK <span class=\"descriptionNumberColor\">MDF_Count</span> more time(s), the Skill Point recovery effect from \"Lament, Lost Soul\" can be triggered again.",
      "type": "Other",
      "statusName": "Lament, Lost Soul"
    },
    {
      "name": "Modifier Construction",
      "for": "Constance_Eidolon4_Property[<span class=\"descriptionNumberColor\">Pity Its Heart Gnawed by Worms</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
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