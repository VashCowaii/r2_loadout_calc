const configAbility = {
  "fileName": "Phainon_Phainon_Ability22_v2_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Dispel Debuffs",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "Define Custom Variable",
      "scope": "ContextAbility",
      "value": {
        "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(Skill22_Energy, 4)"
      },
      "variableName": "Count"
    },
    {
      "name": "Define Custom Variable",
      "scope": "ContextAbility",
      "value": 0,
      "variableName": "_count"
    },
    {
      "name": "Define Custom Variable",
      "scope": "ContextAbility",
      "value": {
        "displayLines": "((PHAINON_OBJECT_UNUSED_1 - PHAINON_OBJECT_UNUSED_2) / ((4 * Count) - 1))"
      },
      "variableName": "_delta_frame"
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "Skill22_Energy"
      },
      "variableName": "_prev_energy"
    },
    {
      "name": "Adjust Variable Value",
      "adjustmentType": "Add to Value (Default)",
      "variableName": "Skill22_Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "value": {
        "displayLines": "(0 - Count)"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Eidolon Activated",
            "eidolon": 2
          },
          {
            "name": "Compare: Variable",
            "value1": "_prev_energy",
            "compareType": ">=",
            "value2": {
              "displayLines": "(Skill22_Energy + 4)"
            }
          }
        ]
      },
      "passed": [
        {
          "name": "Inject Extra-Turn",
          "actionTag": [
            "Phainon_Free_Ability22"
          ],
          "canInjectUltimates": true,
          "afterInjection": []
        }
      ]
    },
    {
      "name": "Looped Event",
      "maxLoops": {
        "displayLines": "(4 * Count)"
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
              "name": "Define Custom Variable",
              "scope": "ContextAbility",
              "value": {
                "displayLines": "(_count + 1)"
              },
              "variableName": "_count"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "displayLines": "0.45"
                },
                "Toughness": {
                  "displayLines": "ST Toughness Value"
                },
                "instanceTag": "Phainon_Skill22",
                "Tags": null
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"423192378\">M_Phainon_Ability22_v2_TargetTimeslow</a>",
      "silentAdd": true
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
          "name": "Define Custom Variable with Team Count",
          "variableName": "ADF_TargetCount",
          "scope": "ContextAbility",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}.[[living]]"
          },
          "living": true
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}.[[living]]"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "displayLines": "4.5"
            },
            "HitSplit": {
              "displayLines": "(1 / ADF_TargetCount)"
            },
            "Toughness": {
              "displayLines": "AOE Toughness Value"
            },
            "instanceTag": "Phainon_Skill22",
            "Tags": null
          }
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable with Team Count",
          "variableName": "ADF_TargetCount",
          "scope": "ContextAbility",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "displayLines": "4.5"
            },
            "HitSplit": {
              "displayLines": "(1 / ADF_TargetCount)"
            },
            "Toughness": {
              "displayLines": "AOE Toughness Value"
            },
            "instanceTag": "Phainon_Skill22",
            "Tags": null
          }
        }
      ]
    },
    "Trigger: Attack End",
    "Trigger: Ability End"
  ],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"45709795\">M_Phainon_Ability22_Insert</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__423192378\">M_Phainon_Ability22_v2_TargetTimeslow</a>",
      "latentQueue": [
        "_delta_frame",
        "_prev_energy"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Ability Use [Anyone]: End",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__45709795\">M_Phainon_Ability22_Insert</a>",
      "latentQueue": [
        "_delta_frame",
        "_prev_energy"
      ],
      "execute": [
        {
          "eventTrigger": "Extra Turn Action Injection: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Parameter String",
                "value2": "Phainon_Free_Ability22"
              },
              "passed": [
                {
                  "name": "UI Display Event",
                  "popUpText": "Sky and Earth Churn Mortal Froth"
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}