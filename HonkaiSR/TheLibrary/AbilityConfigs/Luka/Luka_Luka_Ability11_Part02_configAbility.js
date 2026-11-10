const configAbility = {
  "fileName": "Luka_Luka_Ability11_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "flagName": "STAT_DOT_Bleed"
          },
          {
            "name": "Eidolon Activated",
            "eidolon": 1
          }
        ]
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-632542414\">Luka_Eidolon1_Sub</a>[<span class=\"descriptionNumberColor\">Fighting Endlessly</span>]",
          "duration": {
            "displayLines": "2"
          },
          "stackLimit": 1,
          "valuePerStack": {
            "MDF_PropertyValue": {
              "displayLines": "0.15"
            }
          }
        }
      ]
    },
    {
      "name": "Adjust Variable Value",
      "adjustmentType": "Add to Value (Default)",
      "variableName": "BulletCount",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "value": {
        "displayLines": "-2"
      }
    },
    {
      "name": "Define Custom Variable",
      "value": 3,
      "variableName": "PunchCount"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Crush Fighting Will"
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Random Chance",
                "chance": {
                  "displayLines": "0.5"
                }
              },
              {
                "name": "Compare: Variable",
                "value1": "_PointB3_Trigger",
                "compareType": "=",
                "value2": 0
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": 1,
              "variableName": "_PointB3_FirstPunch"
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(PunchCount - 1)"
              },
              "variableName": "PunchCount"
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(PunchCount - 1)"
          },
          "variableName": "PunchCount"
        }
      ]
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": {
        "displayLines": "BulletCount"
      },
      "maximum": {
        "displayLines": "4"
      },
      "assignState": "True",
      "priorState": "Normal",
      "bar#": 3,
      "cooldown": 0
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Physical",
        "Damage": {
          "displayLines": "0.2"
        },
        "Toughness": {
          "displayLines": "((ST Toughness Value * 0.5) * 0.4)"
        },
        "Tags": null
      }
    },
    {
      "name": "Define Custom Variable",
      "value": 1,
      "variableName": "HitCount"
    },
    {
      "name": "Looped Event",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Compare: Variable",
            "value1": "PunchCount",
            "compareType": ">",
            "value2": 0
          }
        ]
      },
      "execute": [
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Crush Fighting Will"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Random Chance",
                    "chance": {
                      "displayLines": "0.5"
                    }
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "_PointB3_Trigger",
                    "compareType": "=",
                    "value2": 0
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "_PointB3_FirstPunch",
                    "compareType": "=",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "_PointB3_Trigger"
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(PunchCount - 1)"
                  },
                  "variableName": "PunchCount"
                },
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "_PointB3_Trigger"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(PunchCount - 1)"
              },
              "variableName": "PunchCount"
            }
          ]
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "displayLines": "BulletCount"
          },
          "maximum": {
            "displayLines": "4"
          },
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 3,
          "cooldown": 0
        },
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_PointB3_Trigger",
            "compareType": "=",
            "value2": 1,
            "contextScope": "ContextAbility"
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "displayLines": "0.2"
                },
                "Toughness": null,
                "Tags": null
              }
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_PointB3_FirstPunch",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "_PointB3_FirstPunch"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "Damage": {
                      "displayLines": "0.2"
                    },
                    "Toughness": null,
                    "Tags": null
                  }
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "Damage": {
                      "displayLines": "0.2"
                    },
                    "Toughness": {
                      "displayLines": "((ST Toughness Value * 0.5) * 0.3)"
                    },
                    "Tags": null
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(HitCount + 1)"
          },
          "variableName": "HitCount"
        }
      ]
    },
    "Deleted bullshit",
    "Deleted bullshit",
    {
      "name": "Update Displayed Energy Bar",
      "value": {
        "displayLines": "BulletCount"
      },
      "maximum": {
        "displayLines": "4"
      },
      "assignState": "True",
      "bar#": 3,
      "cooldown": 0
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Physical",
        "Damage": {
          "displayLines": "0.8"
        },
        "Toughness": {
          "displayLines": "(ST Toughness Value * 0.5)"
        },
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Flag",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "flagName": "STAT_DOT_Bleed"
      },
      "passed": [
        {
          "name": "Trigger Modifier Event",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "variableName": "DOT_TriggerRatio",
          "eventType": "DOT_Bleed",
          "value": {
            "displayLines": "0.85"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "failed": [
            "Trigger: Attack End"
          ]
        }
      ],
      "failed": [
        "Trigger: Attack End"
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "flagName": "STAT_DOT_Bleed"
          }
        ]
      },
      "passed": [
        {
          "name": "Looped Event",
          "maxLoops": {
            "displayLines": "(HitCount - 1)"
          },
          "execute": [
            {
              "name": "Trigger Modifier Event",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "variableName": "DOT_TriggerRatio",
              "eventType": "DOT_Bleed",
              "value": {
                "displayLines": "0.08"
              }
            }
          ]
        },
        {
          "name": "Trigger Modifier Event",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "variableName": "DOT_TriggerRatio",
          "eventType": "DOT_Bleed",
          "value": {
            "displayLines": "0.08"
          }
        },
        "Trigger: Attack End"
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "BulletCount",
        "compareType": "<",
        "value2": 2
      },
      "passed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1816734330\">Luka_ChangeAttack</a>"
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