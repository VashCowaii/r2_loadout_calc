const configAbility = {
  "fileName": "61015_Functions",
  "abilityType": "Char. Functions",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "length": 1,
  "parse": [
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__312988714\">BAttleEventAbility_AddWeakness</a>",
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
              "modifier": "<a class=\"gModGreen\" id=\"853477559\">BAttleEventAbility_Weakness_Physical</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Function's Target List}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1329707912\">BAttleEventAbility_Weakness_Wind</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Function's Target List}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-944583698\">BAttleEventAbility_Weakness_Fire</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Function's Target List}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"89731232\">BAttleEventAbility_Weakness_Thunder</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Function's Target List}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"436644401\">BAttleEventAbility_Weakness_Ice</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Function's Target List}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1163813471\">BAttleEventAbility_Weakness_Quantum</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Function's Target List}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1189881261\">BAttleEventAbility_Weakness_Imaginary</a>"
            }
          ]
        }
      ]
    }
  ],
  "references": []
}