const configAbility = {
  "fileName": "AventurineWaveflair_AventurineW_ElationAbility_Part12",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 6
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "In Aha-Instant"
          },
          "passed": [
            {
              "name": "Define Modifier-Specific Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifierName": "<a class=\"gModGreen\" id=\"-1333939602\">AventurineW_Passive_Energy</a>",
              "variableName": "MDF_LayerModTriggerLayer",
              "value": 0
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "Define Modifier-Specific Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifierName": "<a class=\"gModGreen\" id=\"-1333939602\">AventurineW_Passive_Energy</a>",
          "variableName": "MDF_LayerModTriggerLayer",
          "value": 0
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "scope": "ContextAbility",
      "variableName": "_CurrentDamageNumber",
      "value": 1
    },
    {
      "name": "Define Custom Variable with Modifier Values",
      "valueType": "Layer",
      "variableName": "_TempLayer_get",
      "modifierName": "<a class=\"gModGreen\" id=\"-1333939602\">AventurineW_Passive_Energy</a>",
      "multiplier": 1
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Eidolon Activated",
            "eidolon": 6
          }
        ]
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "In Aha-Instant"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1333939602\">AventurineW_Passive_Energy</a>",
              "stackLimit": {
                "operator": "Variables[0] (_MaxEnergyPoint) || RETURN",
                "displayLines": "_MaxEnergyPoint",
                "constants": [],
                "variables": [
                  "_MaxEnergyPoint"
                ]
              },
              "addStacksPerTrigger": {
                "operator": "Variables[0] (MDF_Layer) || INVERT || RETURN",
                "displayLines": "-MDF_Layer",
                "constants": [],
                "variables": [
                  "MDF_Layer"
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"2124492609\">AventurineW_Eidolon6_MarkFull</a>[<span class=\"descriptionNumberColor\">The Past in Fast Lane</span>]",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1333939602\">AventurineW_Passive_Energy</a>",
                  "stackLimit": {
                    "operator": "Variables[0] (_MaxEnergyPoint) || RETURN",
                    "displayLines": "_MaxEnergyPoint",
                    "constants": [],
                    "variables": [
                      "_MaxEnergyPoint"
                    ]
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (MDF_Layer) || INVERT || RETURN",
                    "displayLines": "-MDF_Layer",
                    "constants": [],
                    "variables": [
                      "MDF_Layer"
                    ]
                  }
                }
              ]
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1333939602\">AventurineW_Passive_Energy</a>",
          "stackLimit": {
            "operator": "Variables[0] (_MaxEnergyPoint) || RETURN",
            "displayLines": "_MaxEnergyPoint",
            "constants": [],
            "variables": [
              "_MaxEnergyPoint"
            ]
          },
          "addStacksPerTrigger": {
            "operator": "Variables[0] (MDF_Layer) || INVERT || RETURN",
            "displayLines": "-MDF_Layer",
            "constants": [],
            "variables": [
              "MDF_Layer"
            ]
          }
        }
      ]
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Quantum",
        "DamageElation": {
          "operator": "Variables[0] (0.6) || RETURN",
          "displayLines": "0.6",
          "constants": [],
          "variables": [
            0.6
          ]
        },
        "dmgFormula": "Elation Scaling",
        "HitSplit": 0.2,
        "Toughness": {
          "operator": "Variables[0] (AOE Toughness Value) || RETURN",
          "displayLines": "AOE Toughness Value",
          "constants": [],
          "variables": [
            "AOE Toughness Value"
          ]
        },
        "instanceTag": "ElationSkill_2",
        "Tags": null,
        "attackType": "Elation DMG",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "Looped Event",
      "maxLoops": {
        "operator": "Variables[0] (_TempLayer_get) || Variables[1] (10) || ADD || RETURN",
        "displayLines": "(_TempLayer_get + 10)",
        "constants": [],
        "variables": [
          "_TempLayer_get",
          10
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
                "value1": "_CurrentDamageNumber",
                "compareType": "<=",
                "value2": {
                  "operator": "Variables[0] (10) || RETURN",
                  "displayLines": "10",
                  "constants": [],
                  "variables": [
                    10
                  ]
                },
                "contextScope": "ContextAbility"
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "DamageElation": {
                      "operator": "Variables[0] (0.18) || RETURN",
                      "displayLines": "0.18",
                      "constants": [],
                      "variables": [
                        0.18
                      ]
                    },
                    "dmgFormula": "Elation Scaling",
                    "Toughness": {
                      "operator": "Variables[0] (ST Toughness Value) || RETURN",
                      "displayLines": "ST Toughness Value",
                      "constants": [],
                      "variables": [
                        "ST Toughness Value"
                      ]
                    },
                    "instanceTag": "ElationSkill_2",
                    "Tags": null,
                    "attackType": "Elation DMG"
                  }
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "_CurrentDamageNumber",
                  "context": "ContextAbility",
                  "value": 1,
                  "min": 1,
                  "max": {
                    "operator": "Variables[0] (_TempLayer_get) || Variables[1] (10) || ADD || RETURN",
                    "displayLines": "(_TempLayer_get + 10)",
                    "constants": [],
                    "variables": [
                      "_TempLayer_get",
                      10
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "DamageElation": {
                      "operator": "Variables[0] (0.21) || RETURN",
                      "displayLines": "0.21",
                      "constants": [],
                      "variables": [
                        0.21
                      ]
                    },
                    "dmgFormula": "Elation Scaling",
                    "Toughness": null,
                    "instanceTag": "ElationSkill_2",
                    "Tags": null,
                    "attackType": "Elation DMG"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Quantum",
        "DamageElation": {
          "operator": "Variables[0] (0.6) || RETURN",
          "displayLines": "0.6",
          "constants": [],
          "variables": [
            0.6
          ]
        },
        "dmgFormula": "Elation Scaling",
        "HitSplit": 0.2,
        "Toughness": {
          "operator": "Variables[0] (AOE Toughness Value) || RETURN",
          "displayLines": "AOE Toughness Value",
          "constants": [],
          "variables": [
            "AOE Toughness Value"
          ]
        },
        "instanceTag": "ElationSkill_2",
        "Tags": null,
        "attackType": "Elation DMG",
        "EnergyGainPercent": "100%"
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
        "DamageType": "Quantum",
        "DamageElation": {
          "operator": "Variables[0] (0.6) || RETURN",
          "displayLines": "0.6",
          "constants": [],
          "variables": [
            0.6
          ]
        },
        "dmgFormula": "Elation Scaling",
        "HitSplit": 0.2,
        "Toughness": {
          "operator": "Variables[0] (AOE Toughness Value) || RETURN",
          "displayLines": "AOE Toughness Value",
          "constants": [],
          "variables": [
            "AOE Toughness Value"
          ]
        },
        "instanceTag": "ElationSkill_2",
        "Tags": null,
        "attackType": "Elation DMG",
        "EnergyGainPercent": "100%"
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
        "DamageType": "Quantum",
        "DamageElation": {
          "operator": "Variables[0] (0.6) || RETURN",
          "displayLines": "0.6",
          "constants": [],
          "variables": [
            0.6
          ]
        },
        "dmgFormula": "Elation Scaling",
        "HitSplit": 0.2,
        "Toughness": {
          "operator": "Variables[0] (AOE Toughness Value) || RETURN",
          "displayLines": "AOE Toughness Value",
          "constants": [],
          "variables": [
            "AOE Toughness Value"
          ]
        },
        "instanceTag": "ElationSkill_2",
        "Tags": null,
        "attackType": "Elation DMG",
        "EnergyGainPercent": "100%"
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
        "DamageType": "Quantum",
        "DamageElation": {
          "operator": "Variables[0] (0.6) || RETURN",
          "displayLines": "0.6",
          "constants": [],
          "variables": [
            0.6
          ]
        },
        "dmgFormula": "Elation Scaling",
        "HitSplit": 0.2,
        "Toughness": {
          "operator": "Variables[0] (AOE Toughness Value) || RETURN",
          "displayLines": "AOE Toughness Value",
          "constants": [],
          "variables": [
            "AOE Toughness Value"
          ]
        },
        "instanceTag": "ElationSkill_2",
        "Tags": null,
        "attackType": "Elation DMG",
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "IF",
      "conditions": {
        "name": "In Aha-Instant"
      },
      "passed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1959346708\">AventurineW_UpGradeElationAbility_OnceMark</a>"
        }
      ]
    },
    "Trigger: Skip Death Handling",
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}