const configAbility = {
  "fileName": "Misha_Misha_PassiveAbility01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "M_Misha_Passive_Sub_EnergyBar"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "EnergyBar_BasicUltraAttack",
      "value": {
        "operator": "Variables[0] (3) || RETURN",
        "displayLines": "3",
        "constants": [],
        "variables": [
          3
        ]
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "EnergyBar_MaxUltraAttack",
      "value": {
        "operator": "Variables[0] (10) || RETURN",
        "displayLines": "10",
        "constants": [],
        "variables": [
          10
        ]
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "EnergyBar_ExtraUltraAttack",
      "value": 0
    },
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Misha_EnergyCount[<span class=\"descriptionNumberColor\">G—Gonna Be Late!</span>]",
      "counter": {
        "operator": "Variables[0] (EnergyBar_ExtraUltraAttack) || Variables[1] (EnergyBar_BasicUltraAttack) || ADD || RETURN",
        "displayLines": "(EnergyBar_ExtraUltraAttack + EnergyBar_BasicUltraAttack)",
        "constants": [],
        "variables": [
          "EnergyBar_ExtraUltraAttack",
          "EnergyBar_BasicUltraAttack"
        ]
      },
      "valuePerStack": {
        "BasicAttack": {
          "operator": "Variables[0] (EnergyBar_BasicUltraAttack) || RETURN",
          "displayLines": "EnergyBar_BasicUltraAttack",
          "constants": [],
          "variables": [
            "EnergyBar_BasicUltraAttack"
          ]
        }
      }
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": {
        "operator": "Variables[0] (EnergyBar_ExtraUltraAttack) || Variables[1] (EnergyBar_BasicUltraAttack) || ADD || RETURN",
        "displayLines": "(EnergyBar_ExtraUltraAttack + EnergyBar_BasicUltraAttack)",
        "constants": [],
        "variables": [
          "EnergyBar_ExtraUltraAttack",
          "EnergyBar_BasicUltraAttack"
        ]
      },
      "maximum": {
        "operator": "Variables[0] (EnergyBar_MaxUltraAttack) || RETURN",
        "displayLines": "EnergyBar_MaxUltraAttack",
        "constants": [],
        "variables": [
          "EnergyBar_MaxUltraAttack"
        ]
      },
      "assignState": "True",
      "priorState": "Normal",
      "bar#": 4,
      "cooldown": 0
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 4
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "Skill03_DamagePercentage",
          "value": {
            "operator": "Variables[0] (0.6) || Variables[1] (0.06) || ADD || RETURN",
            "displayLines": "(0.6 + 0.06)",
            "constants": [],
            "variables": [
              0.6,
              0.06
            ]
          }
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "Skill03_DamagePercentage",
          "value": {
            "operator": "Variables[0] (0.6) || RETURN",
            "displayLines": "0.6",
            "constants": [],
            "variables": [
              0.6
            ]
          }
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Misha_EnergyCount[<span class=\"descriptionNumberColor\">G—Gonna Be Late!</span>]",
      "counter": 1,
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": "Owner of this Modifier",
              "modifier": "Misha_EnergyCount[<span class=\"descriptionNumberColor\">G—Gonna Be Late!</span>]",
              "counter": {
                "operator": "Variables[0] (BasicAttack) || RETURN",
                "displayLines": "BasicAttack",
                "constants": [],
                "variables": [
                  "BasicAttack"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "BasicAttack"
      ],
      "latentQueue": [],
      "description": "The Ultimate's Hits Per Action.",
      "type": "Other",
      "statusName": "G—Gonna Be Late!"
    },
    {
      "name": "Modifier Construction",
      "for": "M_Misha_Passive_Sub_EnergyBar",
      "execute": [
        {
          "eventTrigger": "Skill Point Changes",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "ParameterValue",
                    "compareType": "<",
                    "value2": 0
                  },
                  {
                    "name": "Is Part Of",
                    "of": "Caster's Entire Team [Exclude Battle Events/Summon]",
                    "target": "Use Prior Target(s) Defined",
                    "mustBeAlive2": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Varying Data",
                  "target": null,
                  "variableName": "_BPAddValue",
                  "value": "ParamValue",
                  "context": "ContextModifier"
                },
                {
                  "name": "Define Custom Variable",
                  "scope": "ContextModifier",
                  "variableName": "_BPAddValue",
                  "value": {
                    "operator": "Variables[0] (_BPAddValue) || INVERT || RETURN",
                    "displayLines": "-_BPAddValue",
                    "constants": [],
                    "variables": [
                      "_BPAddValue"
                    ]
                  }
                },
                {
                  "name": "Looped Event",
                  "maxLoops": {
                    "operator": "Variables[0] (_BPAddValue) || RETURN",
                    "displayLines": "_BPAddValue",
                    "constants": [],
                    "variables": [
                      "_BPAddValue"
                    ]
                  },
                  "Event": [
                    {
                      "name": "Update Energy",
                      "on": "Caster",
                      "value": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "isFixed": "* ERR"
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "EnergyBar_ExtraUltraAttack",
                  "value": {
                    "operator": "Variables[0] (EnergyBar_ExtraUltraAttack) || Variables[1] (_BPAddValue) || Variables[2] (1) || MUL || ADD || RETURN",
                    "displayLines": "(EnergyBar_ExtraUltraAttack + (_BPAddValue * 1))",
                    "constants": [],
                    "variables": [
                      "EnergyBar_ExtraUltraAttack",
                      "_BPAddValue",
                      1
                    ]
                  }
                }
              ]
            }
          ]
        }
      ],
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "EnergyBar_ExtraUltraAttack",
          "from": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": -1,
              "maxValue": {
                "operator": "Variables[0] (EnergyBar_MaxUltraAttack) || RETURN",
                "displayLines": "EnergyBar_MaxUltraAttack",
                "constants": [],
                "variables": [
                  "EnergyBar_MaxUltraAttack"
                ]
              },
              "includeMaxValueInRange": true,
              "whenValueChanges": [
                {
                  "name": "Define Modifier Variable",
                  "target": "Caster",
                  "modifierName": "Misha_EnergyCount[<span class=\"descriptionNumberColor\">G—Gonna Be Late!</span>]",
                  "value": {
                    "operator": "Variables[0] (EnergyBar_ExtraUltraAttack) || Variables[1] (EnergyBar_BasicUltraAttack) || ADD || RETURN",
                    "displayLines": "(EnergyBar_ExtraUltraAttack + EnergyBar_BasicUltraAttack)",
                    "constants": [],
                    "variables": [
                      "EnergyBar_ExtraUltraAttack",
                      "EnergyBar_BasicUltraAttack"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "EnergyBar_MaxUltraAttack",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (EnergyBar_ExtraUltraAttack) || Variables[1] (EnergyBar_BasicUltraAttack) || ADD || RETURN",
                      "displayLines": "(EnergyBar_ExtraUltraAttack + EnergyBar_BasicUltraAttack)",
                      "constants": [],
                      "variables": [
                        "EnergyBar_ExtraUltraAttack",
                        "EnergyBar_BasicUltraAttack"
                      ]
                    },
                    "contextScope": "ContextCaster"
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (EnergyBar_ExtraUltraAttack) || Variables[1] (EnergyBar_BasicUltraAttack) || ADD || RETURN",
                        "displayLines": "(EnergyBar_ExtraUltraAttack + EnergyBar_BasicUltraAttack)",
                        "constants": [],
                        "variables": [
                          "EnergyBar_ExtraUltraAttack",
                          "EnergyBar_BasicUltraAttack"
                        ]
                      },
                      "maximum": {
                        "operator": "Variables[0] (EnergyBar_MaxUltraAttack) || RETURN",
                        "displayLines": "EnergyBar_MaxUltraAttack",
                        "constants": [],
                        "variables": [
                          "EnergyBar_MaxUltraAttack"
                        ]
                      },
                      "assignState": "True",
                      "priorState": "Active",
                      "bar#": 4,
                      "cooldown": 0
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (EnergyBar_ExtraUltraAttack) || Variables[1] (EnergyBar_BasicUltraAttack) || ADD || RETURN",
                        "displayLines": "(EnergyBar_ExtraUltraAttack + EnergyBar_BasicUltraAttack)",
                        "constants": [],
                        "variables": [
                          "EnergyBar_ExtraUltraAttack",
                          "EnergyBar_BasicUltraAttack"
                        ]
                      },
                      "maximum": {
                        "operator": "Variables[0] (EnergyBar_MaxUltraAttack) || RETURN",
                        "displayLines": "EnergyBar_MaxUltraAttack",
                        "constants": [],
                        "variables": [
                          "EnergyBar_MaxUltraAttack"
                        ]
                      },
                      "assignState": "True",
                      "priorState": "Normal",
                      "bar#": 4,
                      "cooldown": 0
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
    }
  ]
}