const configAbility = {
  "fileName": "March7thP_Mar_7th_PassiveAbility01",
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
      "to": "Caster",
      "modifier": "March7th_Passive"
    },
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "March7th_ListenEnergyBar"
    },
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "March7th_Passive_CanAttack[<span class=\"descriptionNumberColor\">Counter</span>]"
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
          "modifierName": "March7th_Passive_CanAttack[<span class=\"descriptionNumberColor\">Counter</span>]",
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
          "modifierName": "March7th_Passive_CanAttack[<span class=\"descriptionNumberColor\">Counter</span>]",
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
      "for": "March7th_ListenEnergyBar",
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
                        "target": "Use Prior Target(s) Defined",
                        "team": "TeamLight"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": "Allied Team",
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Has Flag",
                        "target": "Use Prior Target(s) Defined",
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
                        "target": "Use Prior Target(s) Defined",
                        "team": "TeamLight"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": "Allied Team",
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Has Flag",
                        "target": "Use Prior Target(s) Defined",
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
      "for": "March7th_Passive_CanAttack[<span class=\"descriptionNumberColor\">Counter</span>]",
      "counter": 3,
      "stackData": [],
      "latentQueue": [],
      "description": "Remaining Counter attempt(s).",
      "type": "Other",
      "statusName": "Counter"
    },
    {
      "name": "Modifier Construction",
      "for": "March7th_Passive",
      "execute": [
        {
          "eventTrigger": "Turn [Action-End Phase]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": "Owner of this Modifier",
              "modifier": "March7th_Passive_CanAttack[<span class=\"descriptionNumberColor\">Counter</span>]"
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
                  "modifierName": "March7th_Passive_CanAttack[<span class=\"descriptionNumberColor\">Counter</span>]",
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
                  "from": "Allied Team",
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Has Flag",
                    "target": "Use Prior Target(s) Defined",
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
                  "modifierName": "March7th_Passive_CanAttack[<span class=\"descriptionNumberColor\">Counter</span>]",
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
                  "from": "Allied Team",
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Has Flag",
                    "target": "Use Prior Target(s) Defined",
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
              "to": "All Team Members(In Context)",
              "modifier": "March7th_BPAbility_Shield_Counter"
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
                "target": "Use Prior Target(s) Defined"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "March7th_BPAbility_Shield_Counter"
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
              "to": [
                {
                  "name": "Target List",
                  "target": "All Team Members(In Context)"
                },
                {
                  "name": "Target List",
                  "target": "All Untargetable"
                }
              ],
              "modifier": "March7th_BPAbility_Shield_Counter",
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