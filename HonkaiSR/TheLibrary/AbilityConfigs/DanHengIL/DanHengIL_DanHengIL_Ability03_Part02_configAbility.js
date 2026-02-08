const configAbility = {
  "fileName": "DanHengIL_DanHengIL_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "Flag_AttackCount",
      "value": 0
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] (3) || RETURN",
          "displayLines": "3",
          "constants": [],
          "variables": [
            3
          ]
        },
        "HitSplit": 0.3,
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
      "name": "Looped Event",
      "maxLoops": 2,
      "Event": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "searchRandom": true,
          "includeDyingTargets": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1340732042\">DanHengIL_Ability03Target</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "operator": "Variables[0] (1.4) || RETURN",
                  "displayLines": "1.4",
                  "constants": [],
                  "variables": [
                    1.4
                  ]
                },
                "HitSplit": 0.3,
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
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1340732042\">DanHengIL_Ability03Target</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Flag_AttackCount",
      "value": {
        "operator": "Variables[0] (Flag_AttackCount) || Constants[0] (1) || ADD || RETURN",
        "displayLines": "(Flag_AttackCount + 1)",
        "constants": [
          1
        ],
        "variables": [
          "Flag_AttackCount"
        ]
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1340732042\">DanHengIL_Ability03Target</a>"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] (3) || RETURN",
          "displayLines": "3",
          "constants": [],
          "variables": [
            3
          ]
        },
        "HitSplit": 0.3,
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
      "name": "Looped Event",
      "maxLoops": 2,
      "Event": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "searchRandom": true,
          "includeDyingTargets": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1340732042\">DanHengIL_Ability03Target</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "operator": "Variables[0] (1.4) || RETURN",
                  "displayLines": "1.4",
                  "constants": [],
                  "variables": [
                    1.4
                  ]
                },
                "HitSplit": 0.3,
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
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1340732042\">DanHengIL_Ability03Target</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Flag_AttackCount",
      "value": {
        "operator": "Variables[0] (Flag_AttackCount) || Constants[0] (1) || ADD || RETURN",
        "displayLines": "(Flag_AttackCount + 1)",
        "constants": [
          1
        ],
        "variables": [
          "Flag_AttackCount"
        ]
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1340732042\">DanHengIL_Ability03Target</a>"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] (3) || RETURN",
          "displayLines": "3",
          "constants": [],
          "variables": [
            3
          ]
        },
        "HitSplit": 0.4,
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
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] (1.4) || RETURN",
          "displayLines": "1.4",
          "constants": [],
          "variables": [
            1.4
          ]
        },
        "HitSplit": 0.4,
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
    {
      "name": "Define Custom Variable",
      "variableName": "Flag_AttackCount",
      "value": {
        "operator": "Variables[0] (Flag_AttackCount) || Constants[0] (1) || ADD || RETURN",
        "displayLines": "(Flag_AttackCount + 1)",
        "constants": [
          1
        ],
        "variables": [
          "Flag_AttackCount"
        ]
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1340732042\">DanHengIL_Ability03Target</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 2
      },
      "passed": [
        {
          "name": "Adjust Variable Value",
          "adjustmentType": "Add to Value (Default)",
          "variableName": "BPExChange",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": {
            "operator": "Variables[0] (2) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(2 + 1)",
            "constants": [
              1
            ],
            "variables": [
              2
            ]
          }
        },
        {
          "name": "Modify Skill-Point Extras",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "function": "Set",
          "value": {
            "operator": "Variables[0] (BPExChange) || RETURN",
            "displayLines": "BPExChange",
            "constants": [],
            "variables": [
              "BPExChange"
            ]
          },
          "silentChange": true
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (BPExChange) || RETURN",
            "displayLines": "BPExChange",
            "constants": [],
            "variables": [
              "BPExChange"
            ]
          },
          "maximum": {
            "operator": "Variables[0] (3) || RETURN",
            "displayLines": "3",
            "constants": [],
            "variables": [
              3
            ]
          },
          "assignState": "False",
          "bar#": 6,
          "cooldown": 0
        },
        {
          "name": "Define Modifier Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifierName": "<a class=\"gModGreen\" id=\"115521753\">DanHengIL_BPCostChange</a>[<span class=\"descriptionNumberColor\">Squama Sacrosancta</span>]",
          "value": {
            "operator": "Variables[0] (BPExChange) || RETURN",
            "displayLines": "BPExChange",
            "constants": [],
            "variables": [
              "BPExChange"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"115521753\">DanHengIL_BPCostChange</a>[<span class=\"descriptionNumberColor\">Squama Sacrosancta</span>]",
          "counter": {
            "operator": "Variables[0] (2) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(2 + 1)",
            "constants": [
              1
            ],
            "variables": [
              2
            ]
          },
          "valuePerStack": {
            "MDF_BPExChange": {
              "operator": "Variables[0] (2) || Constants[0] (1) || ADD || RETURN",
              "displayLines": "(2 + 1)",
              "constants": [
                1
              ],
              "variables": [
                2
              ]
            },
            "MDF_MaxLayer": {
              "operator": "Variables[0] (3) || RETURN",
              "displayLines": "3",
              "constants": [],
              "variables": [
                3
              ]
            }
          }
        },
        {
          "name": "Action Advance/Delay",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "advanceType": "Advance",
          "multiAdd": -1
        }
      ],
      "failed": [
        {
          "name": "Adjust Variable Value",
          "adjustmentType": "Add to Value (Default)",
          "variableName": "BPExChange",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          }
        },
        {
          "name": "Modify Skill-Point Extras",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "function": "Set",
          "value": {
            "operator": "Variables[0] (BPExChange) || RETURN",
            "displayLines": "BPExChange",
            "constants": [],
            "variables": [
              "BPExChange"
            ]
          },
          "silentChange": true
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (BPExChange) || RETURN",
            "displayLines": "BPExChange",
            "constants": [],
            "variables": [
              "BPExChange"
            ]
          },
          "maximum": {
            "operator": "Variables[0] (3) || RETURN",
            "displayLines": "3",
            "constants": [],
            "variables": [
              3
            ]
          },
          "assignState": "False",
          "bar#": 6,
          "cooldown": 0
        },
        {
          "name": "Define Modifier Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifierName": "<a class=\"gModGreen\" id=\"115521753\">DanHengIL_BPCostChange</a>[<span class=\"descriptionNumberColor\">Squama Sacrosancta</span>]",
          "value": {
            "operator": "Variables[0] (BPExChange) || RETURN",
            "displayLines": "BPExChange",
            "constants": [],
            "variables": [
              "BPExChange"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"115521753\">DanHengIL_BPCostChange</a>[<span class=\"descriptionNumberColor\">Squama Sacrosancta</span>]",
          "counter": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "valuePerStack": {
            "MDF_BPExChange": {
              "operator": "Variables[0] (2) || RETURN",
              "displayLines": "2",
              "constants": [],
              "variables": [
                2
              ]
            },
            "MDF_MaxLayer": {
              "operator": "Variables[0] (3) || RETURN",
              "displayLines": "3",
              "constants": [],
              "variables": [
                3
              ]
            }
          }
        }
      ]
    },
    "Trigger: Skip Death Handling",
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1340732042\">DanHengIL_Ability03Target</a>",
      "stackData": [],
      "latentQueue": []
    }
  ]
}