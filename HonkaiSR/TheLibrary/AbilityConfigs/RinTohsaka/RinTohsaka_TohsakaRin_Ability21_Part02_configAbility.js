const configAbility = {
  "fileName": "RinTohsaka_TohsakaRin_Ability21_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "TMP_Round"
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "TMP_Gem_Cost"
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "TMP_Shadow_Gem_Cost"
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "TMP_Gem_Num"
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "TMP_Shadow_Gem_Num"
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "TMP_Flag"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "EnergyBar_GemNum_Shadow",
        "compareType": ">",
        "value2": 0
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "EnergyBar_GemNum_Shadow"
          },
          "variableName": "TMP_Shadow_Gem_Num"
        },
        {
          "name": "Define Custom Variable",
          "value": 0.1,
          "variableName": "TMP_Interval"
        },
        {
          "name": "Looped Event",
          "maxLoops": 3,
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "displayLines": "0.9"
                },
                "HitSplit": 0.25,
                "Toughness": {
                  "displayLines": "AOE Toughness Value"
                },
                "Tags": null,
                "EnergyGainPercent": "100%"
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
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "displayLines": "0.9"
            },
            "HitSplit": 0.25,
            "Toughness": {
              "displayLines": "AOE Toughness Value"
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Looped Event",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "TMP_Round",
                "compareType": "<",
                "value2": {
                  "displayLines": "33"
                }
              },
              {
                "name": "Compare: Variable",
                "value1": "TMP_Shadow_Gem_Num",
                "compareType": ">=",
                "value2": {
                  "displayLines": "EnergyBar_CostGemNum"
                }
              }
            ]
          },
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "TMP_Flag",
                "compareType": "<",
                "value2": 2
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(TMP_Flag + 1)"
                  },
                  "variableName": "TMP_Flag"
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "TMP_Flag"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "TMP_Interval",
                "compareType": ">",
                "value2": {
                  "displayLines": "0.021"
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(TMP_Interval - 0.011)"
                  },
                  "variableName": "TMP_Interval"
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(TMP_Round + 1)"
              },
              "variableName": "TMP_Round"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(TMP_Shadow_Gem_Num - EnergyBar_CostGemNum)"
              },
              "variableName": "TMP_Shadow_Gem_Num"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(TMP_Shadow_Gem_Cost + EnergyBar_CostGemNum)"
              },
              "variableName": "TMP_Shadow_Gem_Cost"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1893750937\">Standard_Windfury_AbilityNoNeed</a>"
              },
              "failed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "displayLines": "TMP_Shadow_Gem_Num"
                  },
                  "priorState": "Normal"
                }
              ]
            },
            {
              "name": "Looped Event",
              "maxLoops": 1,
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
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Quantum",
                        "Damage": {
                          "displayLines": "0.9"
                        },
                        "Toughness": {
                          "displayLines": "ST Toughness Value"
                        },
                        "Tags": null
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Adjust Variable Value",
          "adjustmentType": "Overwrite Value",
          "variableName": "EnergyBar_GemNum_Shadow",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": 0
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "EnergyBar_GemNum_Shadow",
            "compareType": ">",
            "value2": 0
          },
          "passed": [
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "displayLines": "EnergyBar_GemNum_Shadow"
              },
              "priorState": "Normal"
            }
          ],
          "failed": [
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "displayLines": "EnergyBar_GemNum"
              },
              "priorState": "Normal"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "failed": [
        {
          "name": "Looped Event",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "CurrentSkillPoints",
            "compareType": ">",
            "value2": {
              "displayLines": "2"
            }
          },
          "maxLoops": 333,
          "execute": [
            {
              "name": "Skill Points Modification",
              "adjustmentValue": -1,
              "adjustmentType": "+"
            },
            {
              "name": "Adjust Variable Value",
              "adjustmentType": "Add to Value (Default)",
              "variableName": "EnergyBar_GemNum",
              "on": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": {
                "displayLines": "2"
              }
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "displayLines": "EnergyBar_GemNum"
              }
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "EnergyBar_GemNum"
          },
          "variableName": "TMP_Gem_Num"
        },
        {
          "name": "Define Custom Variable",
          "value": 0.1,
          "variableName": "TMP_Interval"
        },
        {
          "name": "Looped Event",
          "maxLoops": 3,
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "displayLines": "0.9"
                },
                "HitSplit": 0.25,
                "Toughness": {
                  "displayLines": "AOE Toughness Value"
                },
                "Tags": null,
                "EnergyGainPercent": "100%"
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
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "displayLines": "0.9"
            },
            "HitSplit": 0.25,
            "Toughness": {
              "displayLines": "AOE Toughness Value"
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Looped Event",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "TMP_Round",
                "compareType": "<",
                "value2": {
                  "displayLines": "33"
                }
              },
              {
                "name": "Compare: Variable",
                "value1": "TMP_Gem_Num",
                "compareType": ">=",
                "value2": {
                  "displayLines": "EnergyBar_CostGemNum"
                }
              },
              {
                "name": "Compare: Target List Entities",
                "target": {
                  "name": "Target Name",
                  "target": "{{Enemy Team All}}"
                },
                "conditions": {
                  "name": "Compare: Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "value1": "CurrentHP",
                  "compareType": ">",
                  "value2": 0
                }
              }
            ]
          },
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "TMP_Flag",
                "compareType": "<",
                "value2": 2
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(TMP_Flag + 1)"
                  },
                  "variableName": "TMP_Flag"
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "TMP_Flag"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "TMP_Interval",
                "compareType": ">",
                "value2": {
                  "displayLines": "0.021"
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(TMP_Interval - 0.011)"
                  },
                  "variableName": "TMP_Interval"
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(TMP_Round + 1)"
              },
              "variableName": "TMP_Round"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(TMP_Gem_Num - EnergyBar_CostGemNum)"
              },
              "variableName": "TMP_Gem_Num"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(TMP_Gem_Cost + EnergyBar_CostGemNum)"
              },
              "variableName": "TMP_Gem_Cost"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1893750937\">Standard_Windfury_AbilityNoNeed</a>"
              },
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(TohsakaRin_00_Achievement_Gemstone + EnergyBar_CostGemNum)"
                  },
                  "variableName": "TohsakaRin_00_Achievement_Gemstone"
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "displayLines": "TMP_Gem_Num"
                  },
                  "priorState": "Normal"
                }
              ]
            },
            {
              "name": "Looped Event",
              "maxLoops": 1,
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
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Quantum",
                        "Damage": {
                          "displayLines": "0.9"
                        },
                        "Toughness": {
                          "displayLines": "ST Toughness Value"
                        },
                        "Tags": null
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Adjust Variable Value",
          "adjustmentType": "Add to Value (Default)",
          "variableName": "EnergyBar_GemNum",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": {
            "displayLines": "(0 - TMP_Gem_Cost)"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1161328360\">TohsakaRin_Eidolon1_Enhance</a>"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1893750937\">Standard_Windfury_AbilityNoNeed</a>",
                "invertCondition": true
              },
              {
                "name": "Compare: Variable",
                "value1": "TMP_Gem_Cost",
                "compareType": ">=",
                "value2": {
                  "displayLines": "30"
                }
              }
            ]
          },
          "passed": [
            {
              "name": "Adjust Variable Value",
              "adjustmentType": "Add to Value (Default)",
              "variableName": "EnergyBar_GemNum_Shadow",
              "on": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": {
                "displayLines": "TMP_Gem_Cost"
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "EnergyBar_GemNum_Shadow",
            "compareType": ">",
            "value2": 0
          },
          "passed": [
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "displayLines": "EnergyBar_GemNum_Shadow"
              },
              "priorState": "Normal"
            }
          ],
          "failed": [
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "displayLines": "EnergyBar_GemNum"
              },
              "priorState": "Normal"
            }
          ]
        },
        "Trigger: Ability End"
      ]
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}