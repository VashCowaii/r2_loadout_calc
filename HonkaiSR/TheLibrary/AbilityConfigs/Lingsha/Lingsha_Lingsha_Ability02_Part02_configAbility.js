const configAbility = {
  "fileName": "Lingsha_Lingsha_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
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
          "operator": "Variables[0] (0.8) || RETURN",
          "displayLines": "0.8",
          "constants": [],
          "variables": [
            0.8
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
      }
    },
    "Trigger: Attack End",
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "Lingsha_BENum",
        "compareType": ">=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "Lingsha_AttackTime",
          "value": {
            "operator": "Variables[0] (Lingsha_AttackTime) || Variables[1] (3) || ADD || RETURN",
            "displayLines": "(Lingsha_AttackTime + 3)",
            "constants": [],
            "variables": [
              "Lingsha_AttackTime",
              3
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Self-Made Battle-Events}}"
          },
          "modifier": "Lingsha_BPAbility_BattleEvent_LifeTime",
          "counter": {
            "operator": "Variables[0] (Lingsha_AttackTime) || RETURN",
            "displayLines": "Lingsha_AttackTime",
            "constants": [],
            "variables": [
              "Lingsha_AttackTime"
            ]
          },
          "valuePerStack": {
            "_AttackTime": {
              "operator": "Variables[0] (Lingsha_AttackTime) || RETURN",
              "displayLines": "Lingsha_AttackTime",
              "constants": [],
              "variables": [
                "Lingsha_AttackTime"
              ]
            }
          },
          "casterAssign": "TargetSelf"
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "Lingsha_AttackTime",
          "value": {
            "operator": "Variables[0] (Lingsha_AttackTime) || Variables[1] (3) || ADD || RETURN",
            "displayLines": "(Lingsha_AttackTime + 3)",
            "constants": [],
            "variables": [
              "Lingsha_AttackTime",
              3
            ]
          }
        },
        {
          "name": "Add Battle Event",
          "teamName": "Player Team",
          "eventID": 11222,
          "variables": {
            "BattleEvent_Lingsha_BaseSpeed": {
              "operator": "Variables[0] (90) || RETURN",
              "displayLines": "90",
              "constants": [],
              "variables": [
                90
              ]
            },
            "BattleEvent_Lingsha_AttackTime": {
              "operator": "Variables[0] (Lingsha_AttackTime) || RETURN",
              "displayLines": "Lingsha_AttackTime",
              "constants": [],
              "variables": [
                "Lingsha_AttackTime"
              ]
            },
            "BattleEvent_Lingsha_IndexID": {
              "operator": "Variables[0] (BattleEvent_Lingsha_IndexID) || RETURN",
              "displayLines": "BattleEvent_Lingsha_IndexID",
              "constants": [],
              "variables": [
                "BattleEvent_Lingsha_IndexID"
              ]
            },
            "BattleEvent_Lingsha_PointB3": 0
          }
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (Lingsha_AttackTime) || RETURN",
            "displayLines": "Lingsha_AttackTime",
            "constants": [],
            "variables": [
              "Lingsha_AttackTime"
            ]
          },
          "maximum": {
            "operator": "Variables[0] (5) || RETURN",
            "displayLines": "5",
            "constants": [],
            "variables": [
              5
            ]
          },
          "assignState": "True",
          "priorState": "Active",
          "bar#": 4
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Lingsha_Eidolon6_Listen"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Ember's Echo"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Self-Made Battle-Events}}"
              },
              "modifier": "Lingsha_PointB3_OnListen",
              "valuePerStack": {
                "MDF_HPRatio": {
                  "operator": "Variables[0] (0.6) || RETURN",
                  "displayLines": "0.6",
                  "constants": [],
                  "variables": [
                    0.6
                  ]
                },
                "MDF_LifeTime": {
                  "operator": "Variables[0] (2) || RETURN",
                  "displayLines": "2",
                  "constants": [],
                  "variables": [
                    2
                  ]
                }
              },
              "casterAssign": "TargetSelf"
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Lingsha_BENum",
          "value": {
            "operator": "Variables[0] (Lingsha_BENum) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(Lingsha_BENum + 1)",
            "constants": [
              1
            ],
            "variables": [
              "Lingsha_BENum"
            ]
          }
        }
      ]
    },
    {
      "name": "Heal",
      "target": {
        "name": "Target Name",
        "target": "{{All Team Members}}"
      },
      "healPercent": {
        "operator": "Variables[0] (0.14) || RETURN",
        "displayLines": "0.14",
        "constants": [],
        "variables": [
          0.14
        ]
      },
      "healFlat": {
        "operator": "Variables[0] (420) || RETURN",
        "displayLines": "420",
        "constants": [],
        "variables": [
          420
        ]
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "Lingsha_BENum",
        "compareType": ">=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Action Advance/Delay",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Self-Made Battle-Events}}"
          },
          "advanceType": "Advance",
          "value": "-0.2"
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}