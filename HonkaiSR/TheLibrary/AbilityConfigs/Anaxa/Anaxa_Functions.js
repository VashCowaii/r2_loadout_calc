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
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-2143749742\">function_Anaxa_AddWeakness</a>",
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
                  "variableName": "TDF_NoPhysical",
                  "scope": "ContextTaskTemplate"
                }
              ],
              "failed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "TDF_NoPhysical",
                  "resetValue": 0.0009999999,
                  "scope": "ContextTaskTemplate"
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
              "variableName": "TDF_NoPhysical",
              "resetValue": 1000,
              "scope": "ContextTaskTemplate"
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
                  "variableName": "TDF_NoWind",
                  "scope": "ContextTaskTemplate"
                }
              ],
              "failed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "TDF_NoWind",
                  "resetValue": 0.0009999999,
                  "scope": "ContextTaskTemplate"
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
              "variableName": "TDF_NoWind",
              "resetValue": 1000,
              "scope": "ContextTaskTemplate"
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
                  "variableName": "TDF_NoFire",
                  "scope": "ContextTaskTemplate"
                }
              ],
              "failed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "TDF_NoFire",
                  "resetValue": 0.0009999999,
                  "scope": "ContextTaskTemplate"
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
              "variableName": "TDF_NoFire",
              "resetValue": 1000,
              "scope": "ContextTaskTemplate"
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
                  "variableName": "TDF_NoThunder",
                  "scope": "ContextTaskTemplate"
                }
              ],
              "failed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "TDF_NoThunder",
                  "resetValue": 0.0009999999,
                  "scope": "ContextTaskTemplate"
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
              "variableName": "TDF_NoThunder",
              "resetValue": 1000,
              "scope": "ContextTaskTemplate"
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
                  "variableName": "TDF_NoIce",
                  "scope": "ContextTaskTemplate"
                }
              ],
              "failed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "TDF_NoIce",
                  "resetValue": 0.0009999999,
                  "scope": "ContextTaskTemplate"
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
              "variableName": "TDF_NoIce",
              "resetValue": 1000,
              "scope": "ContextTaskTemplate"
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
                  "variableName": "TDF_NoQuantum",
                  "scope": "ContextTaskTemplate"
                }
              ],
              "failed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "TDF_NoQuantum",
                  "resetValue": 0.0009999999,
                  "scope": "ContextTaskTemplate"
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
              "variableName": "TDF_NoQuantum",
              "resetValue": 1000,
              "scope": "ContextTaskTemplate"
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
                  "variableName": "TDF_NoImaginary",
                  "scope": "ContextTaskTemplate"
                }
              ],
              "failed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "TDF_NoImaginary",
                  "resetValue": 0.0009999999,
                  "scope": "ContextTaskTemplate"
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
              "variableName": "TDF_NoImaginary",
              "resetValue": 1000,
              "scope": "ContextTaskTemplate"
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
              "displayLines": "((((((1 - TDF_NoQuantum) - TDF_NoIce) - TDF_NoThunder) - TDF_NoFire) - TDF_NoWind) - TDF_NoPhysical)"
            }
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MAX</span>((TDF_NoPhysical - 1), 0)"
              },
              "variableName": "TDF_NoPhysical"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MAX</span>((TDF_NoWind - 1), 0)"
              },
              "variableName": "TDF_NoWind"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MAX</span>((TDF_NoFire - 1), 0)"
              },
              "variableName": "TDF_NoFire"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MAX</span>((TDF_NoThunder - 1), 0)"
              },
              "variableName": "TDF_NoThunder"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MAX</span>((TDF_NoIce - 1), 0)"
              },
              "variableName": "TDF_NoIce"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MAX</span>((TDF_NoQuantum - 1), 0)"
              },
              "variableName": "TDF_NoQuantum"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MAX</span>((TDF_NoImaginary - 1), 0)"
              },
              "variableName": "TDF_NoImaginary"
            }
          ]
        },
        {
          "name": "Random Event",
          "odds": [
            {
              "displayLines": "TDF_NoPhysical"
            },
            {
              "displayLines": "TDF_NoWind"
            },
            {
              "displayLines": "TDF_NoFire"
            },
            {
              "displayLines": "TDF_NoThunder"
            },
            {
              "displayLines": "TDF_NoIce"
            },
            {
              "displayLines": "TDF_NoQuantum"
            },
            {
              "displayLines": "TDF_NoImaginary"
            }
          ],
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Function's Target List}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1724958950\">Standard_WeakType_Physical</a>[<span class=\"descriptionNumberColor\">Additional Physical Weakness</span>]",
              "duration": {
                "displayLines": "3"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Function's Target List}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1938125975\">Standard_WeakType_Wind</a>[<span class=\"descriptionNumberColor\">Additional Wind Weakness</span>]",
              "duration": {
                "displayLines": "3"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Function's Target List}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2009288629\">Standard_WeakType_Fire</a>[<span class=\"descriptionNumberColor\">Additional Fire Weakness</span>]",
              "duration": {
                "displayLines": "3"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Function's Target List}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1930557999\">Standard_WeakType_Thunder</a>[<span class=\"descriptionNumberColor\">Additional Lightning Weakness</span>]",
              "duration": {
                "displayLines": "3"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Function's Target List}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1497676034\">Standard_WeakType_Ice</a>[<span class=\"descriptionNumberColor\">Additional Ice Weakness</span>]",
              "duration": {
                "displayLines": "3"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Function's Target List}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1012677236\">Standard_WeakType_Quantum</a>[<span class=\"descriptionNumberColor\">Additional Quantum Weakness</span>]",
              "duration": {
                "displayLines": "3"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Function's Target List}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1118024096\">Standard_WeakType_Imaginary</a>[<span class=\"descriptionNumberColor\">Additional Imaginary Weakness</span>]",
              "duration": {
                "displayLines": "3"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__662224417\">Anaxa_Ability02_SingleHit</a>",
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
              "displayLines": "0.7"
            },
            "Toughness": {
              "displayLines": "(ST Toughness Value / 2)"
            },
            "instanceTag": "Anaxa_00_BP",
            "Tags": null,
            "EnergyGainPercent": "check(value:(_count <= 4), then:1, else:0)* 100%"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1764573952\">M_Anaxa_Ability02_HitMark</a>"
        }
      ]
    }
  ],
  "references": []
}