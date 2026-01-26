const configAbility = {
  "fileName": "Rappa_Rappa_PassiveAbility01",
  "childAbilityList": [
    "Rappa_Rappa_PassiveAbility01"
  ],
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": [
    2,
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
      "modifier": "Rappa_Passive_Modifier"
    },
    {
      "name": "Read Variable Value",
      "adjustmentType": "Add to Value (Default)",
      "variableName": "_AR_STATE_LIFETIME",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "Adjust Variable Value",
      "adjustmentType": "Overwrite Value",
      "variableName": "_AR_STATE_LIFETIME",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "value": 0
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": 0,
      "maximum": {
        "operator": "Variables[0] (3) || RETURN",
        "displayLines": "3",
        "constants": [],
        "variables": [
          3
        ]
      },
      "assignState": "True",
      "priorState": "Normal",
      "bar#": 3
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 6
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_PassiveBreakCountBase",
          "value": {
            "operator": "Variables[0] (0) || Variables[1] (5) || ADD || RETURN",
            "displayLines": "(0 + 5)",
            "constants": [],
            "variables": [
              0,
              5
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_PassiveBreakCountMax",
          "value": {
            "operator": "Variables[0] (10) || Variables[1] (5) || ADD || RETURN",
            "displayLines": "(10 + 5)",
            "constants": [],
            "variables": [
              10,
              5
            ]
          }
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "_PassiveBreakCountBase",
          "value": {
            "operator": "Variables[0] (0) || RETURN",
            "displayLines": "0",
            "constants": [],
            "variables": [
              0
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_PassiveBreakCountMax",
          "value": {
            "operator": "Variables[0] (10) || RETURN",
            "displayLines": "10",
            "constants": [],
            "variables": [
              10
            ]
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "_PassiveBreakCountBase",
        "compareType": ">",
        "value2": 0
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Rappa_Break_Modifier_ForShow[<span class=\"descriptionNumberColor\">Ninja Tech: Endurance Gauge</span>]",
          "stackLimit": {
            "operator": "Variables[0] (_PassiveBreakCountMax) || RETURN",
            "displayLines": "_PassiveBreakCountMax",
            "constants": [],
            "variables": [
              "_PassiveBreakCountMax"
            ]
          },
          "addStacksPerTrigger": {
            "operator": "Variables[0] (_PassiveBreakCountBase) || RETURN",
            "displayLines": "_PassiveBreakCountBase",
            "constants": [],
            "variables": [
              "_PassiveBreakCountBase"
            ]
          }
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Rappa_Break_Modifier",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Exo-Toughness",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                }
              },
              "failed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Template_Rappa_PassiveBreak"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Entering Exo-Toughness Bar [Owner]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Template_Rappa_PassiveBreak"
            }
          ]
        },
        {
          "eventTrigger": "Being Exo-Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Template_Rappa_PassiveBreak"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Rappa_Passive_Modifier",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Turn Start [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Current Turn Is",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "flagName": "STAT_DOT"
                  }
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Current Turn Is",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "invertCondition": true
              }
            }
          ]
        },
        {
          "eventTrigger": "Action Choice Window [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Current Turn Is",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "invertCondition": true
                  }
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Turn End [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Current Turn Is",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "flagName": "STAT_DOT"
                  }
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "Ninjutsu Inscription: Withered Leaf"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Rappa_Trace03"
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "P6_Real_Ratio",
              "value": {
                "operator": "Variables[0] (0.5) || RETURN",
                "displayLines": "0.5",
                "constants": [],
                "variables": [
                  0.5
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Rappa_Break_Modifier"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Current Action Holder Is",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "invertCondition": true
              }
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "Rappa_Break_Modifier"
            }
          ],
          "priorityLevel": -80
        },
        {
          "eventTrigger": "Ultimate Prep-Phase [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                }
              }
            }
          ]
        },
        {
          "eventTrigger": "Extra Action/Turn [Anyone]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Current Action Holder Is",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "invertCondition": true
              }
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Current Action Holder Is",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "invertCondition": true
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}