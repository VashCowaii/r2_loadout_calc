const configAbility = {
  "fileName": "1004011_BattleEventAbility_CocoliaP1_RL_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "UI Display Event",
      "popUpText": "Doomsday Ice Cascade"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Ice",
        "Damage": {
          "operator": "Variables[0] (MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage) || Constants[0] (0.2) || MUL || RETURN",
          "displayLines": "(MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage * 0.2)",
          "constants": [
            0.2
          ],
          "variables": [
            "MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Additional DMG",
        "hitOwner": {
          "name": "Target Name",
          "target": "{{Enemy Teams}}"
        },
        "EnergyGainPercent": "33%"
      }
    },
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "value": {
        "operator": "Variables[0] (MDF_CocoliaP1_00_RL_BattleEvent_SPAdd) || Constants[0] (0.2) || MUL || RETURN",
        "displayLines": "(MDF_CocoliaP1_00_RL_BattleEvent_SPAdd * 0.2)",
        "constants": [
          0.2
        ],
        "variables": [
          "MDF_CocoliaP1_00_RL_BattleEvent_SPAdd"
        ]
      },
      "isFixed": "* ERR"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Ice",
        "Damage": {
          "operator": "Variables[0] (MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage) || Constants[0] (0.2) || MUL || RETURN",
          "displayLines": "(MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage * 0.2)",
          "constants": [
            0.2
          ],
          "variables": [
            "MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Additional DMG",
        "hitOwner": {
          "name": "Target Name",
          "target": "{{Enemy Teams}}"
        },
        "EnergyGainPercent": "33%"
      }
    },
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "value": {
        "operator": "Variables[0] (MDF_CocoliaP1_00_RL_BattleEvent_SPAdd) || Constants[0] (0.2) || MUL || RETURN",
        "displayLines": "(MDF_CocoliaP1_00_RL_BattleEvent_SPAdd * 0.2)",
        "constants": [
          0.2
        ],
        "variables": [
          "MDF_CocoliaP1_00_RL_BattleEvent_SPAdd"
        ]
      },
      "isFixed": "* ERR"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Ice",
        "Damage": {
          "operator": "Variables[0] (MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage) || Constants[0] (0.2) || MUL || RETURN",
          "displayLines": "(MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage * 0.2)",
          "constants": [
            0.2
          ],
          "variables": [
            "MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Additional DMG",
        "hitOwner": {
          "name": "Target Name",
          "target": "{{Enemy Teams}}"
        },
        "EnergyGainPercent": "34%"
      }
    },
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "value": {
        "operator": "Variables[0] (MDF_CocoliaP1_00_RL_BattleEvent_SPAdd) || Constants[0] (0.2) || MUL || RETURN",
        "displayLines": "(MDF_CocoliaP1_00_RL_BattleEvent_SPAdd * 0.2)",
        "constants": [
          0.2
        ],
        "variables": [
          "MDF_CocoliaP1_00_RL_BattleEvent_SPAdd"
        ]
      },
      "isFixed": "* ERR"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Ice",
        "Damage": {
          "operator": "Variables[0] (MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage) || Constants[0] (0.2) || MUL || RETURN",
          "displayLines": "(MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage * 0.2)",
          "constants": [
            0.2
          ],
          "variables": [
            "MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Additional DMG",
        "hitOwner": {
          "name": "Target Name",
          "target": "{{Enemy Teams}}"
        },
        "EnergyGainPercent": "33%"
      }
    },
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "value": {
        "operator": "Variables[0] (MDF_CocoliaP1_00_RL_BattleEvent_SPAdd) || Constants[0] (0.2) || MUL || RETURN",
        "displayLines": "(MDF_CocoliaP1_00_RL_BattleEvent_SPAdd * 0.2)",
        "constants": [
          0.2
        ],
        "variables": [
          "MDF_CocoliaP1_00_RL_BattleEvent_SPAdd"
        ]
      },
      "isFixed": "* ERR"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Ice",
        "Damage": {
          "operator": "Variables[0] (MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage) || Constants[0] (0.2) || MUL || RETURN",
          "displayLines": "(MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage * 0.2)",
          "constants": [
            0.2
          ],
          "variables": [
            "MDF_CocoliaP1_00_RL_BattleEvent_DamagePercentage"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Additional DMG",
        "hitOwner": {
          "name": "Target Name",
          "target": "{{Enemy Teams}}"
        },
        "EnergyGainPercent": "33%"
      }
    },
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "value": {
        "operator": "Variables[0] (MDF_CocoliaP1_00_RL_BattleEvent_SPAdd) || Constants[0] (0.2) || MUL || RETURN",
        "displayLines": "(MDF_CocoliaP1_00_RL_BattleEvent_SPAdd * 0.2)",
        "constants": [
          0.2
        ],
        "variables": [
          "MDF_CocoliaP1_00_RL_BattleEvent_SPAdd"
        ]
      },
      "isFixed": "* ERR"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "MDF_CocoliaP1_00_RL_BattleEvent_Count",
        "compareType": "=",
        "value2": 0
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_CocoliaP1_00_RL_BattleEvent_Count",
          "value": 1
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "NOT",
            "condition": {
              "name": "Has Flag",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "flagName": "STAT_CTRL_Frozen"
            }
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]",
              "duration": 1,
              "baseChance": 1,
              "valuePerStack": {
                "Modifier_Frozen_DamagePercentage": {
                  "operator": "Variables[0] (MDF_CocoliaP1_00_RL_BattleEvent_FrozenDamagePerTurn) || RETURN",
                  "displayLines": "MDF_CocoliaP1_00_RL_BattleEvent_FrozenDamagePerTurn",
                  "constants": [],
                  "variables": [
                    "MDF_CocoliaP1_00_RL_BattleEvent_FrozenDamagePerTurn"
                  ]
                }
              }
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "NOT",
            "condition": {
              "name": "Has Flag",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "flagName": "STAT_CTRL_Frozen"
            }
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]",
              "duration": 1,
              "baseChance": 1,
              "valuePerStack": {
                "Modifier_Frozen_DamagePercentage": {
                  "operator": "Variables[0] (MDF_CocoliaP1_00_RL_BattleEvent_FrozenDamagePerTurn) || RETURN",
                  "displayLines": "MDF_CocoliaP1_00_RL_BattleEvent_FrozenDamagePerTurn",
                  "constants": [],
                  "variables": [
                    "MDF_CocoliaP1_00_RL_BattleEvent_FrozenDamagePerTurn"
                  ]
                }
              }
            }
          ]
        }
      ]
    },
    "Trigger: Attack End"
  ],
  "references": []
}