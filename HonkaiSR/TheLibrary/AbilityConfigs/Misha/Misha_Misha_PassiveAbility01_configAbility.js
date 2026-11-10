const configAbility = {
  "fileName": "Misha_Misha_PassiveAbility01",
  "childAbilityList": [
    "Misha_Misha_PassiveAbility01"
  ],
  "skillTrigger": "SkillP01",
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
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"6214973\">M_Misha_Passive_Sub_EnergyBar</a>"
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "3"
      },
      "variableName": "EnergyBar_BasicUltraAttack"
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "10"
      },
      "variableName": "EnergyBar_MaxUltraAttack"
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "EnergyBar_ExtraUltraAttack"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"728153787\">Misha_EnergyCount</a>[<span class=\"descriptionNumberColor\">G—Gonna Be Late!</span>]",
      "counter": {
        "displayLines": "(EnergyBar_ExtraUltraAttack + EnergyBar_BasicUltraAttack)"
      },
      "valuePerStack": {
        "BasicAttack": {
          "displayLines": "EnergyBar_BasicUltraAttack"
        }
      }
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": {
        "displayLines": "(EnergyBar_ExtraUltraAttack + EnergyBar_BasicUltraAttack)"
      },
      "maximum": {
        "displayLines": "EnergyBar_MaxUltraAttack"
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
          "value": {
            "displayLines": "(0.6 + 0.06)"
          },
          "variableName": "Skill03_DamagePercentage"
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "0.6"
          },
          "variableName": "Skill03_DamagePercentage"
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__728153787\">Misha_EnergyCount</a>[<span class=\"descriptionNumberColor\">G—Gonna Be Late!</span>]",
      "counter": 1,
      "stackType": "ReplaceByCaster",
      "stackData": [
        "BasicAttack"
      ],
      "description": "The Ultimate's Hits Per Action.",
      "type": "Other",
      "statusName": "G—Gonna Be Late!",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"728153787\">Misha_EnergyCount</a>[<span class=\"descriptionNumberColor\">G—Gonna Be Late!</span>]",
              "counter": {
                "displayLines": "BasicAttack"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__6214973\">M_Misha_Passive_Sub_EnergyBar</a>",
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
                    "target1": {
                      "name": "Target Name",
                      "target": "{{Caster}}.[[getTeamMembers]].[[removeBattleEvents]]"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
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
                  "value": {
                    "displayLines": "-_BPAddValue"
                  },
                  "variableName": "_BPAddValue"
                },
                {
                  "name": "Looped Event",
                  "maxLoops": {
                    "displayLines": "_BPAddValue"
                  },
                  "execute": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "displayLines": "2"
                      },
                      "isFixed": "* ERR"
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(EnergyBar_ExtraUltraAttack + (_BPAddValue * 1))"
                  },
                  "variableName": "EnergyBar_ExtraUltraAttack"
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
          "scope": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": -1,
              "maxValue": {
                "displayLines": "EnergyBar_MaxUltraAttack"
              },
              "includeMaxValueInRange": true,
              "onChange": [
                {
                  "name": "Define Modifier Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifierName": "<a class=\"gModGreen\" id=\"728153787\">Misha_EnergyCount</a>[<span class=\"descriptionNumberColor\">G—Gonna Be Late!</span>]",
                  "value": {
                    "displayLines": "(EnergyBar_ExtraUltraAttack + EnergyBar_BasicUltraAttack)"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "EnergyBar_MaxUltraAttack",
                    "compareType": "<=",
                    "value2": {
                      "displayLines": "(EnergyBar_ExtraUltraAttack + EnergyBar_BasicUltraAttack)"
                    },
                    "contextScope": "ContextCaster"
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "displayLines": "(EnergyBar_ExtraUltraAttack + EnergyBar_BasicUltraAttack)"
                      },
                      "maximum": {
                        "displayLines": "EnergyBar_MaxUltraAttack"
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
                        "displayLines": "(EnergyBar_ExtraUltraAttack + EnergyBar_BasicUltraAttack)"
                      },
                      "maximum": {
                        "displayLines": "EnergyBar_MaxUltraAttack"
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
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  }
}