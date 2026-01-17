const configAbility = {
  "fileName": "Anaxa_Functions",
  "abilityType": "Char. Functions",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "length": 2,
  "parse": [
    {
      "name": "CharacterFunctions",
      "functionName": "function_Anaxa_AddWeakness",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Weakness",
            "target": {
              "name": "Target Name",
              "target": "{{Function's Target List}}"
            },
            "DamageType": "Physical",
            "weaknessFilter": "All"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Weakness",
                "target": {
                  "name": "Target Name",
                  "target": "{{Function's Target List}}"
                },
                "DamageType": "Physical",
                "weaknessFilter": "AllDefault"
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "ContextTaskTemplate",
                  "variableName": "TDF_NoPhysical"
                }
              ],
              "failed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "ContextTaskTemplate",
                  "variableName": "TDF_NoPhysical",
                  "value": 0.0009999999
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "ContextTaskTemplate",
              "variableName": "TDF_NoPhysical",
              "value": 1000
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Weakness",
            "target": {
              "name": "Target Name",
              "target": "{{Function's Target List}}"
            },
            "DamageType": "Wind",
            "weaknessFilter": "All"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Weakness",
                "target": {
                  "name": "Target Name",
                  "target": "{{Function's Target List}}"
                },
                "DamageType": "Wind",
                "weaknessFilter": "AllDefault"
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "ContextTaskTemplate",
                  "variableName": "TDF_NoWind"
                }
              ],
              "failed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "ContextTaskTemplate",
                  "variableName": "TDF_NoWind",
                  "value": 0.0009999999
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "ContextTaskTemplate",
              "variableName": "TDF_NoWind",
              "value": 1000
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Weakness",
            "target": {
              "name": "Target Name",
              "target": "{{Function's Target List}}"
            },
            "DamageType": "Fire",
            "weaknessFilter": "All"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Weakness",
                "target": {
                  "name": "Target Name",
                  "target": "{{Function's Target List}}"
                },
                "DamageType": "Fire",
                "weaknessFilter": "AllDefault"
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "ContextTaskTemplate",
                  "variableName": "TDF_NoFire"
                }
              ],
              "failed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "ContextTaskTemplate",
                  "variableName": "TDF_NoFire",
                  "value": 0.0009999999
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "ContextTaskTemplate",
              "variableName": "TDF_NoFire",
              "value": 1000
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Weakness",
            "target": {
              "name": "Target Name",
              "target": "{{Function's Target List}}"
            },
            "DamageType": "Thunder",
            "weaknessFilter": "All"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Weakness",
                "target": {
                  "name": "Target Name",
                  "target": "{{Function's Target List}}"
                },
                "DamageType": "Thunder",
                "weaknessFilter": "AllDefault"
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "ContextTaskTemplate",
                  "variableName": "TDF_NoThunder"
                }
              ],
              "failed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "ContextTaskTemplate",
                  "variableName": "TDF_NoThunder",
                  "value": 0.0009999999
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "ContextTaskTemplate",
              "variableName": "TDF_NoThunder",
              "value": 1000
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Weakness",
            "target": {
              "name": "Target Name",
              "target": "{{Function's Target List}}"
            },
            "DamageType": "Ice",
            "weaknessFilter": "All"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Weakness",
                "target": {
                  "name": "Target Name",
                  "target": "{{Function's Target List}}"
                },
                "DamageType": "Ice",
                "weaknessFilter": "AllDefault"
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "ContextTaskTemplate",
                  "variableName": "TDF_NoIce"
                }
              ],
              "failed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "ContextTaskTemplate",
                  "variableName": "TDF_NoIce",
                  "value": 0.0009999999
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "ContextTaskTemplate",
              "variableName": "TDF_NoIce",
              "value": 1000
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Weakness",
            "target": {
              "name": "Target Name",
              "target": "{{Function's Target List}}"
            },
            "DamageType": "Quantum",
            "weaknessFilter": "All"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Weakness",
                "target": {
                  "name": "Target Name",
                  "target": "{{Function's Target List}}"
                },
                "DamageType": "Quantum",
                "weaknessFilter": "AllDefault"
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "ContextTaskTemplate",
                  "variableName": "TDF_NoQuantum"
                }
              ],
              "failed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "ContextTaskTemplate",
                  "variableName": "TDF_NoQuantum",
                  "value": 0.0009999999
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "ContextTaskTemplate",
              "variableName": "TDF_NoQuantum",
              "value": 1000
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Weakness",
            "target": {
              "name": "Target Name",
              "target": "{{Function's Target List}}"
            },
            "DamageType": "Imaginary",
            "weaknessFilter": "All"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Weakness",
                "target": {
                  "name": "Target Name",
                  "target": "{{Function's Target List}}"
                },
                "DamageType": "Imaginary",
                "weaknessFilter": "AllDefault"
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "ContextTaskTemplate",
                  "variableName": "TDF_NoImaginary"
                }
              ],
              "failed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "ContextTaskTemplate",
                  "variableName": "TDF_NoImaginary",
                  "value": 0.0009999999
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "ContextTaskTemplate",
              "variableName": "TDF_NoImaginary",
              "value": 1000
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "TDF_NoImaginary",
            "compareType": ">=",
            "value2": {
              "operator": "Constants[0] (1) || Variables[0] (TDF_NoQuantum) || SUB || Variables[1] (TDF_NoIce) || SUB || Variables[2] (TDF_NoThunder) || SUB || Variables[3] (TDF_NoFire) || SUB || Variables[4] (TDF_NoWind) || SUB || Variables[5] (TDF_NoPhysical) || SUB || RETURN",
              "displayLines": "((((((1 - TDF_NoQuantum) - TDF_NoIce) - TDF_NoThunder) - TDF_NoFire) - TDF_NoWind) - TDF_NoPhysical)",
              "constants": [
                1
              ],
              "variables": [
                "TDF_NoQuantum",
                "TDF_NoIce",
                "TDF_NoThunder",
                "TDF_NoFire",
                "TDF_NoWind",
                "TDF_NoPhysical"
              ]
            }
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "TDF_NoPhysical",
              "value": {
                "operator": "Variables[0] (MAX) || Variables[1] (TDF_NoPhysical) || Constants[0] (1) || SUB || Constants[1] (0) || PARAM_2 || FUNCTION || RETURN",
                "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MAX</span>((TDF_NoPhysical - 1), 0)",
                "constants": [
                  1,
                  0
                ],
                "variables": [
                  "MAX",
                  "TDF_NoPhysical"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "TDF_NoWind",
              "value": {
                "operator": "Variables[0] (MAX) || Variables[1] (TDF_NoWind) || Constants[0] (1) || SUB || Constants[1] (0) || PARAM_2 || FUNCTION || RETURN",
                "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MAX</span>((TDF_NoWind - 1), 0)",
                "constants": [
                  1,
                  0
                ],
                "variables": [
                  "MAX",
                  "TDF_NoWind"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "TDF_NoFire",
              "value": {
                "operator": "Variables[0] (MAX) || Variables[1] (TDF_NoFire) || Constants[0] (1) || SUB || Constants[1] (0) || PARAM_2 || FUNCTION || RETURN",
                "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MAX</span>((TDF_NoFire - 1), 0)",
                "constants": [
                  1,
                  0
                ],
                "variables": [
                  "MAX",
                  "TDF_NoFire"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "TDF_NoThunder",
              "value": {
                "operator": "Variables[0] (MAX) || Variables[1] (TDF_NoThunder) || Constants[0] (1) || SUB || Constants[1] (0) || PARAM_2 || FUNCTION || RETURN",
                "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MAX</span>((TDF_NoThunder - 1), 0)",
                "constants": [
                  1,
                  0
                ],
                "variables": [
                  "MAX",
                  "TDF_NoThunder"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "TDF_NoIce",
              "value": {
                "operator": "Variables[0] (MAX) || Variables[1] (TDF_NoIce) || Constants[0] (1) || SUB || Constants[1] (0) || PARAM_2 || FUNCTION || RETURN",
                "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MAX</span>((TDF_NoIce - 1), 0)",
                "constants": [
                  1,
                  0
                ],
                "variables": [
                  "MAX",
                  "TDF_NoIce"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "TDF_NoQuantum",
              "value": {
                "operator": "Variables[0] (MAX) || Variables[1] (TDF_NoQuantum) || Constants[0] (1) || SUB || Constants[1] (0) || PARAM_2 || FUNCTION || RETURN",
                "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MAX</span>((TDF_NoQuantum - 1), 0)",
                "constants": [
                  1,
                  0
                ],
                "variables": [
                  "MAX",
                  "TDF_NoQuantum"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "TDF_NoImaginary",
              "value": {
                "operator": "Variables[0] (MAX) || Variables[1] (TDF_NoImaginary) || Constants[0] (1) || SUB || Constants[1] (0) || PARAM_2 || FUNCTION || RETURN",
                "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MAX</span>((TDF_NoImaginary - 1), 0)",
                "constants": [
                  1,
                  0
                ],
                "variables": [
                  "MAX",
                  "TDF_NoImaginary"
                ]
              }
            }
          ]
        },
        {
          "name": "Random Event",
          "odds": [
            {
              "operator": "Variables[0] (TDF_NoPhysical) || RETURN",
              "displayLines": "TDF_NoPhysical",
              "constants": [],
              "variables": [
                "TDF_NoPhysical"
              ]
            },
            {
              "operator": "Variables[0] (TDF_NoWind) || RETURN",
              "displayLines": "TDF_NoWind",
              "constants": [],
              "variables": [
                "TDF_NoWind"
              ]
            },
            {
              "operator": "Variables[0] (TDF_NoFire) || RETURN",
              "displayLines": "TDF_NoFire",
              "constants": [],
              "variables": [
                "TDF_NoFire"
              ]
            },
            {
              "operator": "Variables[0] (TDF_NoThunder) || RETURN",
              "displayLines": "TDF_NoThunder",
              "constants": [],
              "variables": [
                "TDF_NoThunder"
              ]
            },
            {
              "operator": "Variables[0] (TDF_NoIce) || RETURN",
              "displayLines": "TDF_NoIce",
              "constants": [],
              "variables": [
                "TDF_NoIce"
              ]
            },
            {
              "operator": "Variables[0] (TDF_NoQuantum) || RETURN",
              "displayLines": "TDF_NoQuantum",
              "constants": [],
              "variables": [
                "TDF_NoQuantum"
              ]
            },
            {
              "operator": "Variables[0] (TDF_NoImaginary) || RETURN",
              "displayLines": "TDF_NoImaginary",
              "constants": [],
              "variables": [
                "TDF_NoImaginary"
              ]
            }
          ],
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Function's Target List}}"
              },
              "modifier": "Standard_WeakType_Physical[<span class=\"descriptionNumberColor\">Additional Physical Weakness</span>]",
              "duration": {
                "operator": "Variables[0] (3) || RETURN",
                "displayLines": "3",
                "constants": [],
                "variables": [
                  3
                ]
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Function's Target List}}"
              },
              "modifier": "Standard_WeakType_Wind[<span class=\"descriptionNumberColor\">Additional Wind Weakness</span>]",
              "duration": {
                "operator": "Variables[0] (3) || RETURN",
                "displayLines": "3",
                "constants": [],
                "variables": [
                  3
                ]
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Function's Target List}}"
              },
              "modifier": "Standard_WeakType_Fire[<span class=\"descriptionNumberColor\">Additional Fire Weakness</span>]",
              "duration": {
                "operator": "Variables[0] (3) || RETURN",
                "displayLines": "3",
                "constants": [],
                "variables": [
                  3
                ]
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Function's Target List}}"
              },
              "modifier": "Standard_WeakType_Thunder[<span class=\"descriptionNumberColor\">Additional Lightning Weakness</span>]",
              "duration": {
                "operator": "Variables[0] (3) || RETURN",
                "displayLines": "3",
                "constants": [],
                "variables": [
                  3
                ]
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Function's Target List}}"
              },
              "modifier": "Standard_WeakType_Ice[<span class=\"descriptionNumberColor\">Additional Ice Weakness</span>]",
              "duration": {
                "operator": "Variables[0] (3) || RETURN",
                "displayLines": "3",
                "constants": [],
                "variables": [
                  3
                ]
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Function's Target List}}"
              },
              "modifier": "Standard_WeakType_Quantum[<span class=\"descriptionNumberColor\">Additional Quantum Weakness</span>]",
              "duration": {
                "operator": "Variables[0] (3) || RETURN",
                "displayLines": "3",
                "constants": [],
                "variables": [
                  3
                ]
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Function's Target List}}"
              },
              "modifier": "Standard_WeakType_Imaginary[<span class=\"descriptionNumberColor\">Additional Imaginary Weakness</span>]",
              "duration": {
                "operator": "Variables[0] (3) || RETURN",
                "displayLines": "3",
                "constants": [],
                "variables": [
                  3
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "Anaxa_Ability02_SingleHit",
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (0.7) || RETURN",
              "displayLines": "0.7",
              "constants": [],
              "variables": [
                0.7
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || Constants[0] (2) || DIV || RETURN",
              "displayLines": "(ST Toughness Value / 2)",
              "constants": [
                2
              ],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "instanceTag": "Anaxa_00_BP",
            "Tags": null
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "M_Anaxa_Ability02_HitMark"
        }
      ]
    }
  ],
  "references": []
}