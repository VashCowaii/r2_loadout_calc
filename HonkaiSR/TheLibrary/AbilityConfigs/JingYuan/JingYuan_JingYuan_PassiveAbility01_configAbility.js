const configAbility = {
  "fileName": "JingYuan_JingYuan_PassiveAbility01",
  "childAbilityList": [
    "JingYuan_JingYuan_PassiveAbility01",
    "JingYuan_JingYuan_Passive_Insert",
    "JingYuan_JingYuan_Passive_Insert_Camera",
    "JingYuan_JingYuan_Passive_Insert_Ability"
  ],
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": [
    5,
    0,
    0
  ],
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "JingYuan_ListenFlag"
    },
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "JingYuan_Trace02"
    },
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "JingYuan_BattleEvent_ATKCount[<span class=\"descriptionNumberColor\">Prana Extirpated</span>]",
      "stackLimit": {
        "operator": "Variables[0] (10) || RETURN",
        "displayLines": "10",
        "constants": [],
        "variables": [
          10
        ]
      },
      "addStacksPerTrigger": {
        "operator": "Variables[0] (3) || RETURN",
        "displayLines": "3",
        "constants": [],
        "variables": [
          3
        ]
      }
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": {
        "operator": "Variables[0] (3) || RETURN",
        "displayLines": "3",
        "constants": [],
        "variables": [
          3
        ]
      },
      "maximum": {
        "operator": "Variables[0] (10) || RETURN",
        "displayLines": "10",
        "constants": [],
        "variables": [
          10
        ]
      },
      "assignState": "True",
      "priorState": "Normal",
      "bar#": 4,
      "cooldown": 0
    },
    {
      "name": "Add Battle Event",
      "teamName": "Allied Team",
      "eventID": 11203,
      "statSource": "Caster",
      "variables": {
        "BattleEvent_JingYuan_BaseSpeed": {
          "operator": "Variables[0] (60) || RETURN",
          "displayLines": "60",
          "constants": [],
          "variables": [
            60
          ]
        }
      }
    },
    {
      "name": "Show Attack Time",
      "time": {
        "operator": "Variables[0] (3) || RETURN",
        "displayLines": "3",
        "constants": [],
        "variables": [
          3
        ]
      },
      "enhanced": {
        "operator": "Variables[0] (EnergyBar_UltraATKCount) || RETURN",
        "displayLines": "EnergyBar_UltraATKCount",
        "constants": [],
        "variables": [
          "EnergyBar_UltraATKCount"
        ]
      },
      "on": null,
      "show": true
    },
    {
      "name": "Add Events/Bonuses",
      "to": "Caster's own Created Battle Event/Summon",
      "modifier": "JingYuan_BattleEvent_ATKCountShowText",
      "valuePerStack": {
        "ATKCount": {
          "operator": "Variables[0] (3) || RETURN",
          "displayLines": "3",
          "constants": [],
          "variables": [
            3
          ]
        }
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "JingYuan_Ability02_PreShow"
    },
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "JingYuan_Ability03_PreShow"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "JingYuan_Ability03_PreShow",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "#Skill03_P2_AddATKCount",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (10) || Variables[1] (EnergyBar_ATKCount) || SUB || RETURN",
                  "displayLines": "(10 - EnergyBar_ATKCount)",
                  "constants": [],
                  "variables": [
                    10,
                    "EnergyBar_ATKCount"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_AddLayer",
                  "value": {
                    "operator": "Variables[0] (10) || Variables[1] (EnergyBar_ATKCount) || SUB || RETURN",
                    "displayLines": "(10 - EnergyBar_ATKCount)",
                    "constants": [],
                    "variables": [
                      10,
                      "EnergyBar_ATKCount"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_AddLayer",
                  "value": {
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
        }
      ],
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "EnergyBar_ATKCount",
          "from": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "whenValueChanges": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "#Skill03_P2_AddATKCount",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (10) || Variables[1] (EnergyBar_ATKCount) || SUB || RETURN",
                      "displayLines": "(10 - EnergyBar_ATKCount)",
                      "constants": [],
                      "variables": [
                        10,
                        "EnergyBar_ATKCount"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_AddLayer",
                      "value": {
                        "operator": "Variables[0] (10) || Variables[1] (EnergyBar_ATKCount) || SUB || RETURN",
                        "displayLines": "(10 - EnergyBar_ATKCount)",
                        "constants": [],
                        "variables": [
                          10,
                          "EnergyBar_ATKCount"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_AddLayer",
                      "value": {
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
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": "Caster's own Created Battle Event/Summon",
        "skillType": [
          "Ultimate"
        ],
        "conditions": {
          "name": "Compare: Variable",
          "value1": "_AddLayer",
          "compareType": ">",
          "value2": 0
        },
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": "(10 * _AddLayer)(SPD Change)"
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "JingYuan_Ability02_PreShow",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "#Skill02_P2_AddATKCount",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (10) || Variables[1] (EnergyBar_ATKCount) || SUB || RETURN",
                  "displayLines": "(10 - EnergyBar_ATKCount)",
                  "constants": [],
                  "variables": [
                    10,
                    "EnergyBar_ATKCount"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_AddLayer",
                  "value": {
                    "operator": "Variables[0] (10) || Variables[1] (EnergyBar_ATKCount) || SUB || RETURN",
                    "displayLines": "(10 - EnergyBar_ATKCount)",
                    "constants": [],
                    "variables": [
                      10,
                      "EnergyBar_ATKCount"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_AddLayer",
                  "value": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
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
          "variableName": "EnergyBar_ATKCount",
          "from": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "whenValueChanges": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "#Skill02_P2_AddATKCount",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (10) || Variables[1] (EnergyBar_ATKCount) || SUB || RETURN",
                      "displayLines": "(10 - EnergyBar_ATKCount)",
                      "constants": [],
                      "variables": [
                        10,
                        "EnergyBar_ATKCount"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_AddLayer",
                      "value": {
                        "operator": "Variables[0] (10) || Variables[1] (EnergyBar_ATKCount) || SUB || RETURN",
                        "displayLines": "(10 - EnergyBar_ATKCount)",
                        "constants": [],
                        "variables": [
                          10,
                          "EnergyBar_ATKCount"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_AddLayer",
                      "value": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
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
      "stackData": [],
      "latentQueue": [],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": "Caster's own Created Battle Event/Summon",
        "skillType": [
          "Skill"
        ],
        "conditions": {
          "name": "Compare: Variable",
          "value1": "_AddLayer",
          "compareType": ">",
          "value2": 0
        },
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": "(10 * _AddLayer)(SPD Change)"
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "JingYuan_Trace02",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Trace Activated",
                    "conditionList": "Savant Providence"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "Wave Count",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Update Energy",
                  "on": "Caster",
                  "value": {
                    "operator": "Variables[0] (15) || RETURN",
                    "displayLines": "15",
                    "constants": [],
                    "variables": [
                      15
                    ]
                  },
                  "isFixed": "* ERR"
                }
              ]
            }
          ],
          "priorityLevel": -80
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "JingYuan_ListenFlag",
      "stackData": [],
      "latentQueue": []
    }
  ]
}