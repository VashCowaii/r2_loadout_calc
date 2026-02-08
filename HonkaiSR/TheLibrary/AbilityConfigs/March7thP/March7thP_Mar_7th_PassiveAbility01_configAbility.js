const configAbility = {
  "fileName": "March7thP_Mar_7th_PassiveAbility01",
  "childAbilityList": [
    "March7thP_Mar_7th_PassiveAbility01",
    "March7thP_Mar_7th_PassiveAbility01_InsertAbility",
    "March7thP_Mar_7th_PassiveAbility01_Camera"
  ],
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "energy": 10,
  "toughnessList": [
    10,
    0,
    0
  ],
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"189697089\">March7th_Passive</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"872238788\">March7th_ListenEnergyBar</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"300569468\">March7th_Passive_CanAttack</a>[<span class=\"descriptionNumberColor\">Counter</span>]"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 4
      },
      "passed": [
        {
          "name": "Define Modifier Variable",
          "modifierName": "<a class=\"gModGreen\" id=\"300569468\">March7th_Passive_CanAttack</a>[<span class=\"descriptionNumberColor\">Counter</span>]",
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
          "name": "Define Custom Variable",
          "scope": "ContextCaster",
          "variableName": "Mar7th_00_Passive_CounterView",
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
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (2) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(2 + 1)",
            "constants": [
              1
            ],
            "variables": [
              2
            ]
          },
          "maximum": {
            "operator": "Variables[0] (2) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(2 + 1)",
            "constants": [
              1
            ],
            "variables": [
              2
            ]
          },
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 3,
          "cooldown": 0
        }
      ],
      "failed": [
        {
          "name": "Define Modifier Variable",
          "modifierName": "<a class=\"gModGreen\" id=\"300569468\">March7th_Passive_CanAttack</a>[<span class=\"descriptionNumberColor\">Counter</span>]",
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
          "name": "Define Custom Variable",
          "scope": "ContextCaster",
          "variableName": "Mar7th_00_Passive_CounterView",
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
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "maximum": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 3,
          "cooldown": 0
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__872238788\">March7th_ListenEnergyBar</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier is Added [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Mar7th_00_Passive_CounterView",
                "compareType": ">=",
                "value2": 0.5,
                "contextScope": "ContextCaster"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Player Team"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "Shield"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "priorState": "Active"
                        }
                      ],
                      "noTargetFound": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "priorState": "Normal"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Losing Modifier [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Mar7th_00_Passive_CounterView",
                "compareType": ">=",
                "value2": 0.5,
                "contextScope": "ContextCaster"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Player Team"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "Shield"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "priorState": "Active"
                        }
                      ],
                      "noTargetFound": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "priorState": "Normal"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__300569468\">March7th_Passive_CanAttack</a>[<span class=\"descriptionNumberColor\">Counter</span>]",
      "counter": 3,
      "stackData": [],
      "latentQueue": [],
      "description": "Remaining Counter attempt(s).",
      "type": "Other",
      "statusName": "Counter"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__189697089\">March7th_Passive</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Action-End Phase]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"300569468\">March7th_Passive_CanAttack</a>[<span class=\"descriptionNumberColor\">Counter</span>]"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 4
              },
              "passed": [
                {
                  "name": "Define Modifier Variable",
                  "modifierName": "<a class=\"gModGreen\" id=\"300569468\">March7th_Passive_CanAttack</a>[<span class=\"descriptionNumberColor\">Counter</span>]",
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
                  "name": "Define Custom Variable",
                  "scope": "ContextCaster",
                  "variableName": "Mar7th_00_Passive_CounterView",
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
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Shield"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (2) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(2 + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          2
                        ]
                      },
                      "maximum": {
                        "operator": "Variables[0] (2) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(2 + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          2
                        ]
                      },
                      "assignState": "True",
                      "priorState": "Active",
                      "bar#": 3,
                      "cooldown": 0
                    }
                  ],
                  "noTargetFound": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (2) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(2 + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          2
                        ]
                      },
                      "maximum": {
                        "operator": "Variables[0] (2) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(2 + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          2
                        ]
                      },
                      "assignState": "True",
                      "priorState": "Normal",
                      "bar#": 3,
                      "cooldown": 0
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Define Modifier Variable",
                  "modifierName": "<a class=\"gModGreen\" id=\"300569468\">March7th_Passive_CanAttack</a>[<span class=\"descriptionNumberColor\">Counter</span>]",
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
                  "name": "Define Custom Variable",
                  "scope": "ContextCaster",
                  "variableName": "Mar7th_00_Passive_CounterView",
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
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Shield"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "maximum": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "assignState": "True",
                      "priorState": "Active",
                      "bar#": 3,
                      "cooldown": 0
                    }
                  ],
                  "noTargetFound": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "maximum": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "assignState": "True",
                      "priorState": "Normal",
                      "bar#": 3,
                      "cooldown": 0
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"944962578\">March7th_BPAbility_Shield_Counter</a>"
            }
          ]
        },
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Teammate",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"944962578\">March7th_BPAbility_Shield_Counter</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Join Targets",
                "TargetList": [
                  {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  {
                    "name": "Target Name",
                    "target": "{{All Unselectable Targets}}"
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"944962578\">March7th_BPAbility_Shield_Counter</a>",
              "onlyRemoveOwnersInstance": true
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Mar7th_00_Passive_CounterView",
              "value": 0
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 4
              },
              "passed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 0,
                  "maximum": {
                    "operator": "Variables[0] (2) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(2 + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      2
                    ]
                  },
                  "assignState": "True",
                  "priorState": "Normal",
                  "bar#": 3,
                  "cooldown": 0
                }
              ],
              "failed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 0,
                  "maximum": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "assignState": "True",
                  "priorState": "Normal",
                  "bar#": 3,
                  "cooldown": 0
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}