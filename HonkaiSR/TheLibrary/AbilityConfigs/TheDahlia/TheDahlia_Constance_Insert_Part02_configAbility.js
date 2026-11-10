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
            "displayLines": "2"
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "displayLines": "0.12"
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
                "displayLines": "(2 - 1)"
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
      "value": {
        "displayLines": "(0.1 / 5)"
      },
      "variableName": "ADF_AttackGap"
    },
    {
      "name": "Define Custom Variable",
      "value": 1,
      "variableName": "ADF_FirstHit"
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
          "value": {
            "displayLines": "(5 + 5)"
          },
          "variableName": "ADF_BounceCount"
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "5"
          },
          "variableName": "ADF_BounceCount"
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
              "displayLines": "0.2"
            }
          }
        }
      ]
    },
    {
      "name": "Looped Event",
      "maxLoops": {
        "displayLines": "ADF_BounceCount"
      },
      "execute": [
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
                  "value": 0,
                  "variableName": "ADF_FirstHit"
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
                  "displayLines": "0.3"
                },
                "Toughness": {
                  "displayLines": "ST Toughness Value"
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
                    "DamagePercentage": {
                      "displayLines": "2"
                    },
                    "StanceValue": {
                      "displayLines": "ADF_StanceValue"
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
      "latentQueue": [
        "ADF_AttackGap",
        "ADF_FirstHit"
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
                    "flagName": "FORCE_SUPERBREAK"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "FORCE_SUPERBREAK"
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
                  "value": {
                    "displayLines": "(MDF_TotalStanceDamage + MDF_HitStanceDamage)"
                  },
                  "variableName": "MDF_TotalStanceDamage"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1367019028\">Constance_Tree02_CD</a>[<span class=\"descriptionNumberColor\">Lament, Lost Soul</span>]",
      "description": "After using Talent's Follow-Up ATK <span class=\"descriptionNumberColor\">MDF_Count</span> more time(s), the Skill Point recovery effect from \"Lament, Lost Soul\" can be triggered again.",
      "type": "Other",
      "statusName": "Lament, Lost Soul"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-380368106\">Constance_Eidolon4_Property</a>[<span class=\"descriptionNumberColor\">Pity Its Heart Gnawed by Worms</span>]",
      "stackType": "ReplaceByCaster",
      "stackData": [
        "MDF_PropertyValue"
      ],
      "description": "DMG taken increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Debuff",
      "effectName": "Vulnerability",
      "statusName": "Pity Its Heart Gnawed by Worms",
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
                "displayLines": "MDF_PropertyValue"
              }
            }
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  }
}