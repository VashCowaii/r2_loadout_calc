const configAbility = {
  "fileName": "DanHengIL_DanHengIL_Ability12_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Update Displayed Energy Bar"
    },
    {
      "name": "Adjust Variable Value",
      "adjustmentType": "Add to Value (Default)",
      "variableName": "BPExChange",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "value": -2
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "BPExChange",
        "compareType": "<=",
        "value2": 0
      },
      "passed": [
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
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"115521753\">DanHengIL_BPCostChange</a>[<span class=\"descriptionNumberColor\">Squama Sacrosancta</span>]"
        }
      ],
      "failed": [
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
        }
      ]
    },
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
          "operator": "Variables[0] (3.8) || Constants[0] (0.2) || MUL || RETURN",
          "displayLines": "(3.8 * 0.2)",
          "constants": [
            0.2
          ],
          "variables": [
            3.8
          ]
        },
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.2) || MUL || RETURN",
          "displayLines": "(ST Toughness Value * 0.2)",
          "constants": [
            0.2
          ],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "Tags": null,
        "EnergyGainPercent": "20%"
      }
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
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] (3.8) || Constants[0] (0.2) || MUL || RETURN",
          "displayLines": "(3.8 * 0.2)",
          "constants": [
            0.2
          ],
          "variables": [
            3.8
          ]
        },
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.2) || MUL || RETURN",
          "displayLines": "(ST Toughness Value * 0.2)",
          "constants": [
            0.2
          ],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "Tags": null,
        "EnergyGainPercent": "20%"
      }
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
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] (3.8) || Constants[0] (0.2) || MUL || RETURN",
          "displayLines": "(3.8 * 0.2)",
          "constants": [
            0.2
          ],
          "variables": [
            3.8
          ]
        },
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.2) || MUL || RETURN",
          "displayLines": "(ST Toughness Value * 0.2)",
          "constants": [
            0.2
          ],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "Tags": null,
        "EnergyGainPercent": "20%"
      }
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
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1955464894\">DanHengIL_Ability02_CriticalDamage</a>[<span class=\"descriptionNumberColor\">Outroar</span>]",
      "duration": {
        "operator": "Variables[0] (SkillRank_Rank04_LifeTime) || RETURN",
        "displayLines": "SkillRank_Rank04_LifeTime",
        "constants": [],
        "variables": [
          "SkillRank_Rank04_LifeTime"
        ]
      },
      "immediateEffect": true,
      "stackLimit": {
        "operator": "Variables[0] (4) || RETURN",
        "displayLines": "4",
        "constants": [],
        "variables": [
          4
        ]
      },
      "valuePerStack": {
        "MDF_AddCriticalDamage": {
          "operator": "Variables[0] (0.12) || RETURN",
          "displayLines": "0.12",
          "constants": [],
          "variables": [
            0.12
          ]
        },
        "MDF_MaxLayer": {
          "operator": "Variables[0] (4) || RETURN",
          "displayLines": "4",
          "constants": [],
          "variables": [
            4
          ]
        }
      }
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
          "operator": "Variables[0] (3.8) || Constants[0] (0.2) || MUL || RETURN",
          "displayLines": "(3.8 * 0.2)",
          "constants": [
            0.2
          ],
          "variables": [
            3.8
          ]
        },
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.2) || MUL || RETURN",
          "displayLines": "(ST Toughness Value * 0.2)",
          "constants": [
            0.2
          ],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "Tags": null,
        "EnergyGainPercent": "20%"
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
            "modifier": "<a class=\"gModGreen\" id=\"-216777096\">DanHengIL_Ability12Target</a>",
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
                  "operator": "Variables[0] (0.6) || RETURN",
                  "displayLines": "0.6",
                  "constants": [],
                  "variables": [
                    0.6
                  ]
                },
                "HitSplit": 0.5,
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
              "modifier": "<a class=\"gModGreen\" id=\"-216777096\">DanHengIL_Ability12Target</a>"
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
      "modifier": "<a class=\"gModGreen\" id=\"-216777096\">DanHengIL_Ability12Target</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1955464894\">DanHengIL_Ability02_CriticalDamage</a>[<span class=\"descriptionNumberColor\">Outroar</span>]",
      "duration": {
        "operator": "Variables[0] (SkillRank_Rank04_LifeTime) || RETURN",
        "displayLines": "SkillRank_Rank04_LifeTime",
        "constants": [],
        "variables": [
          "SkillRank_Rank04_LifeTime"
        ]
      },
      "immediateEffect": true,
      "stackLimit": {
        "operator": "Variables[0] (4) || RETURN",
        "displayLines": "4",
        "constants": [],
        "variables": [
          4
        ]
      },
      "valuePerStack": {
        "MDF_AddCriticalDamage": {
          "operator": "Variables[0] (0.12) || RETURN",
          "displayLines": "0.12",
          "constants": [],
          "variables": [
            0.12
          ]
        },
        "MDF_MaxLayer": {
          "operator": "Variables[0] (4) || RETURN",
          "displayLines": "4",
          "constants": [],
          "variables": [
            4
          ]
        }
      }
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
          "operator": "Variables[0] (3.8) || Constants[0] (0.2) || MUL || RETURN",
          "displayLines": "(3.8 * 0.2)",
          "constants": [
            0.2
          ],
          "variables": [
            3.8
          ]
        },
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.2) || MUL || RETURN",
          "displayLines": "(ST Toughness Value * 0.2)",
          "constants": [
            0.2
          ],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "Tags": null,
        "EnergyGainPercent": "20%"
      }
    },
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
        "name": "NOT",
        "condition": {
          "name": "Has Modifier",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-216777096\">DanHengIL_Ability12Target</a>"
        }
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
              "operator": "Variables[0] (0.6) || RETURN",
              "displayLines": "0.6",
              "constants": [],
              "variables": [
                0.6
              ]
            },
            "HitSplit": 0.5,
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
          "modifier": "<a class=\"gModGreen\" id=\"-216777096\">DanHengIL_Ability12Target</a>"
        }
      ]
    },
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
        "name": "NOT",
        "condition": {
          "name": "Has Modifier",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-216777096\">DanHengIL_Ability12Target</a>"
        }
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
              "operator": "Variables[0] (0.6) || RETURN",
              "displayLines": "0.6",
              "constants": [],
              "variables": [
                0.6
              ]
            },
            "HitSplit": 0.5,
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
        }
      ]
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
      "modifier": "<a class=\"gModGreen\" id=\"-216777096\">DanHengIL_Ability12Target</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1633577543\">DanHengIL_BPCost_1</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1683910400\">DanHengIL_BPCost_2</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1667132781\">DanHengIL_BPCost_3</a>"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "EXSkill01",
      "value": 0
    },
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-216777096\">DanHengIL_Ability12Target</a>",
      "stackData": [],
      "latentQueue": []
    }
  ]
}