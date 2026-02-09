const configAbility = {
  "fileName": "1490374940_Functions",
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
                  "variableName": "TDF_NoPhysical"
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
                  "variableName": "TDF_NoWind"
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
                  "variableName": "TDF_NoFire"
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
                  "variableName": "TDF_NoThunder"
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
                  "variableName": "TDF_NoIce"
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
                  "variableName": "TDF_NoQuantum"
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
                  "variableName": "TDF_NoImaginary"
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