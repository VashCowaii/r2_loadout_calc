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
          "displayLines": "0.8"
        },
        "Toughness": {
          "displayLines": "AOE Toughness Value"
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
          "value": {
            "displayLines": "(Lingsha_AttackTime + 3)"
          },
          "variableName": "Lingsha_AttackTime"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Fuyuan}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1876847773\">Lingsha_BPAbility_BattleEvent_LifeTime</a>",
          "counter": {
            "displayLines": "Lingsha_AttackTime"
          },
          "valuePerStack": {
            "_AttackTime": {
              "displayLines": "Lingsha_AttackTime"
            }
          },
          "casterAssign": "TargetSelf"
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(Lingsha_AttackTime + 3)"
          },
          "variableName": "Lingsha_AttackTime"
        },
        {
          "name": "Add Battle Event",
          "teamName": "Player Team",
          "eventID": 11222,
          "variables": {
            "BattleEvent_Lingsha_BaseSpeed": {
              "displayLines": "90"
            },
            "BattleEvent_Lingsha_AttackTime": {
              "displayLines": "Lingsha_AttackTime"
            },
            "BattleEvent_Lingsha_IndexID": {
              "displayLines": "BattleEvent_Lingsha_IndexID"
            },
            "BattleEvent_Lingsha_PointB3": 0
          }
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "displayLines": "Lingsha_AttackTime"
          },
          "maximum": {
            "displayLines": "5"
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
              "modifier": "<a class=\"gModGreen\" id=\"-1458980452\">Lingsha_Eidolon6_Listen</a>"
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
                "target": "{{Fuyuan}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"210278197\">Lingsha_PointB3_OnListen</a>",
              "valuePerStack": {
                "MDF_HPRatio": {
                  "displayLines": "0.6"
                },
                "MDF_LifeTime": {
                  "displayLines": "2"
                }
              },
              "casterAssign": "TargetSelf"
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(Lingsha_BENum + 1)"
          },
          "variableName": "Lingsha_BENum"
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
        "displayLines": "0.14"
      },
      "healFlat": {
        "displayLines": "420"
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
            "target": "{{Fuyuan}}"
          },
          "advanceType": "Advance",
          "multiAdd": "-0.2"
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}