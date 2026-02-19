const configAbility = {
  "fileName": "3022011_Modifiers",
  "abilityType": "Char. Modifiers",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__889164751\">Enemy_W3_SundayPart_IF_WeaknessShare</a>",
      "stackType": "Multiple",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_WeaknessShare",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueList": [
                    "Physical"
                  ]
                },
                {
                  "name": "Stack Element Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "stackType": "Delta",
                  "resistArray": [
                    {
                      "element": "Physical",
                      "value": {
                        "operator": "Constants[0] (1) || INVERT || Variables[0] (_WeakResistance) || MUL || RETURN",
                        "displayLines": "(-1 * _WeakResistance)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "_WeakResistance"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_WeaknessShare",
                "compareType": "=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueList": [
                    "Fire"
                  ]
                },
                {
                  "name": "Stack Element Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "stackType": "Delta",
                  "resistArray": [
                    {
                      "element": "Fire",
                      "value": {
                        "operator": "Constants[0] (1) || INVERT || Variables[0] (_WeakResistance) || MUL || RETURN",
                        "displayLines": "(-1 * _WeakResistance)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "_WeakResistance"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_WeaknessShare",
                "compareType": "=",
                "value2": 3
              },
              "passed": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueList": [
                    "Ice"
                  ]
                },
                {
                  "name": "Stack Element Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "stackType": "Delta",
                  "resistArray": [
                    {
                      "element": "Ice",
                      "value": {
                        "operator": "Constants[0] (1) || INVERT || Variables[0] (_WeakResistance) || MUL || RETURN",
                        "displayLines": "(-1 * _WeakResistance)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "_WeakResistance"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_WeaknessShare",
                "compareType": "=",
                "value2": 4
              },
              "passed": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueList": [
                    "Thunder"
                  ]
                },
                {
                  "name": "Stack Element Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "stackType": "Delta",
                  "resistArray": [
                    {
                      "element": "Thunder",
                      "value": {
                        "operator": "Constants[0] (1) || INVERT || Variables[0] (_WeakResistance) || MUL || RETURN",
                        "displayLines": "(-1 * _WeakResistance)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "_WeakResistance"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_WeaknessShare",
                "compareType": "=",
                "value2": 5
              },
              "passed": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueList": [
                    "Wind"
                  ]
                },
                {
                  "name": "Stack Element Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "stackType": "Delta",
                  "resistArray": [
                    {
                      "element": "Wind",
                      "value": {
                        "operator": "Constants[0] (1) || INVERT || Variables[0] (_WeakResistance) || MUL || RETURN",
                        "displayLines": "(-1 * _WeakResistance)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "_WeakResistance"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_WeaknessShare",
                "compareType": "=",
                "value2": 6
              },
              "passed": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueList": [
                    "Quantum"
                  ]
                },
                {
                  "name": "Stack Element Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "stackType": "Delta",
                  "resistArray": [
                    {
                      "element": "Quantum",
                      "value": {
                        "operator": "Constants[0] (1) || INVERT || Variables[0] (_WeakResistance) || MUL || RETURN",
                        "displayLines": "(-1 * _WeakResistance)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "_WeakResistance"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_WeaknessShare",
                "compareType": "=",
                "value2": 7
              },
              "passed": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueList": [
                    "Imaginary"
                  ]
                },
                {
                  "name": "Stack Element Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "stackType": "Delta",
                  "resistArray": [
                    {
                      "element": "Imaginary",
                      "value": {
                        "operator": "Constants[0] (1) || INVERT || Variables[0] (_WeakResistance) || MUL || RETURN",
                        "displayLines": "(-1 * _WeakResistance)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "_WeakResistance"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_WeaknessShare"
      ],
      "latentQueue": [
        "AIFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1909411233\">Enemy_W3_SundayPart_IF_AlreadyWeaknessShare</a>",
      "stackData": [],
      "latentQueue": [
        "AIFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1222159240\">Enemy_W3_SundayPart_Part1Camera</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Set Mapping Point",
              "point": "CameraRoot",
              "mapTo": "HighCameraRoot"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1396454665\">Enemy_W3_SundayPart_EntityFollowController</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1257223640\">Monster_W3_SundayPart_LittleChorus</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Ability",
              "abilityName": "Monster_W3_SundayPart_Ability01_Assist_Part02_01"
            },
            {
              "name": "Add Ability",
              "abilityName": "Monster_W3_SundayPart_Ability01_Assist_Part02_02"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "AssistSkill02_DamagePercentage",
              "value": {
                "operator": "Variables[0] (MDF_Assist_DamagePercentage) || RETURN",
                "displayLines": "MDF_Assist_DamagePercentage",
                "constants": [],
                "variables": [
                  "MDF_Assist_DamagePercentage"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "references": []
}