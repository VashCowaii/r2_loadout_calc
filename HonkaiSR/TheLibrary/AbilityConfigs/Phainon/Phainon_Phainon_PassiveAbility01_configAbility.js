const configAbility = {
  "fileName": "Phainon_Phainon_PassiveAbility01",
  "childAbilityList": [
    "Phainon_Phainon_PassiveAbility01"
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
      "name": "Automatically use Ultimate",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "Preload Battle Event(s)",
      "eventID": [
        11408
      ]
    },
    {
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "CurSpecialSP",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecial</span>&nbsp;"
    },
    {
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "Phainon_BaseSpeed",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;"
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": {
        "operator": "Variables[0] (CurSpecialSP) || Variables[1] (CurOverflowSpecialSP) || ADD || RETURN",
        "displayLines": "(CurSpecialSP + CurOverflowSpecialSP)",
        "constants": [],
        "variables": [
          "CurSpecialSP",
          "CurOverflowSpecialSP"
        ]
      },
      "activeCount": {
        "operator": "Variables[0] (12) || RETURN",
        "displayLines": "12",
        "constants": [],
        "variables": [
          12
        ]
      },
      "maximum": {
        "operator": "Variables[0] (12) || RETURN",
        "displayLines": "12",
        "constants": [],
        "variables": [
          12
        ]
      },
      "assignState": "True",
      "priorState": "Normal",
      "bar#": 4
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Phainon_PassiveAbility01"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "M_Phainon_AbilityTargetSubListener",
      "execute": [
        {
          "eventTrigger": "Being Attacked Start [Owner]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Phainon_Passive_AsAbilityTarget",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: End",
          "execute": [
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "When Modifier is Added [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Modifier Has Flag",
                    "flagName": "AttackSign"
                  },
                  {
                    "name": "Modifier Has Flag",
                    "flagName": "TeamAction"
                  },
                  {
                    "name": "Modifier Was",
                    "modifier": "Monster_Beast02_Attack_Sign[<span class=\"descriptionNumberColor\">Monitor</span>]"
                  },
                  {
                    "name": "Modifier Was",
                    "modifier": "Monster_W2_Beast02_RLElite_Attack_Sign[<span class=\"descriptionNumberColor\">Monitor</span>]"
                  },
                  {
                    "name": "Modifier Was",
                    "modifier": "Standard_AbilityTarget"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Phainon_Passive_AsAbilityTarget",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target 2}}"
                  }
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Phainon_PassiveAbility01",
      "modifierFlags": [
        "ListenBattleEventSkill"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Switch to Action/Ability Context"
            },
            {
              "name": "Update Energy Value",
              "on": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "value": 0,
              "adjustment": "Set",
              "ignoreBlock": true
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "Phainon_Ultra[<span class=\"descriptionNumberColor\">Divine Vessel</span>]",
                    "invertCondition": true
                  },
                  {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Current Ability Target",
                    "dynamic": "True"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "M_Phainon_AbilityTargetSubListener",
                      "silentAdd": true
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Is Part Of",
                            "of": {
                              "name": "Target Name",
                              "target": "{{Parameter Target's Ability Targets}}"
                            },
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "mustBeAlive2": true
                          },
                          {
                            "name": "Is Part Of",
                            "of": {
                              "name": "Target Name",
                              "target": "{{Parameter Target's Ability Sub-Targets}}"
                            },
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "mustBeAlive2": true
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "Phainon_Passive_AsAbilityTarget",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          }
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
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "CurOverflowSpecialSP",
          "from": "ContextCaster",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "whenValueChanges": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "Phainon_Ultra[<span class=\"descriptionNumberColor\">Divine Vessel</span>]",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (CurSpecialSP) || Variables[1] (CurOverflowSpecialSP) || ADD || RETURN",
                        "displayLines": "(CurSpecialSP + CurOverflowSpecialSP)",
                        "constants": [],
                        "variables": [
                          "CurSpecialSP",
                          "CurOverflowSpecialSP"
                        ]
                      },
                      "priorState": "Normal"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "CurSpecialSP",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (12) || RETURN",
                          "displayLines": "12",
                          "constants": [],
                          "variables": [
                            12
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "priorState": "Active"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "CurOverflowSpecialSP",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "Phainon_SPOverflow[<span class=\"descriptionNumberColor\">Coreflame</span>]",
                            "invertCondition": true
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "Phainon_SPOverflow[<span class=\"descriptionNumberColor\">Coreflame</span>]",
                              "valuePerStack": {
                                "MDF_Count": {
                                  "operator": "Variables[0] (CurOverflowSpecialSP) || RETURN",
                                  "displayLines": "CurOverflowSpecialSP",
                                  "constants": [],
                                  "variables": [
                                    "CurOverflowSpecialSP"
                                  ]
                                }
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "Define Modifier-Specific Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifierName": "Phainon_SPOverflow[<span class=\"descriptionNumberColor\">Coreflame</span>]",
                              "variableName": "MDF_Count",
                              "value": {
                                "operator": "Variables[0] (CurOverflowSpecialSP) || RETURN",
                                "displayLines": "CurOverflowSpecialSP",
                                "constants": [],
                                "variables": [
                                  "CurOverflowSpecialSP"
                                ]
                              }
                            }
                          ]
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
      "abilityValueChange": [
        {
          "name": "Ability Value Changes",
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecial</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "whenValueChanges": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "CurSpecialSP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecial</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "Phainon_Ultra[<span class=\"descriptionNumberColor\">Divine Vessel</span>]",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (CurSpecialSP) || Variables[1] (CurOverflowSpecialSP) || ADD || RETURN",
                        "displayLines": "(CurSpecialSP + CurOverflowSpecialSP)",
                        "constants": [],
                        "variables": [
                          "CurSpecialSP",
                          "CurOverflowSpecialSP"
                        ]
                      },
                      "priorState": "Normal"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "CurSpecialSP",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (12) || RETURN",
                          "displayLines": "12",
                          "constants": [],
                          "variables": [
                            12
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "priorState": "Active"
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
          "name": "Ability Value Changes",
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "whenValueChanges": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "Phainon_BaseSpeed",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;"
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Khaslana(Battle Event Cluster)}}"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Modifier-Specific Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifierName": "Phainon_Ability03_BattleEvent_BaseSpeed",
                      "variableName": "MDF_PropertyValue",
                      "value": {
                        "operator": "Variables[0] (CDF_SpeedConvertRatio) || Variables[1] (Phainon_BaseSpeed) || MUL || RETURN",
                        "displayLines": "(CDF_SpeedConvertRatio * Phainon_BaseSpeed)",
                        "constants": [],
                        "variables": [
                          "CDF_SpeedConvertRatio",
                          "Phainon_BaseSpeed"
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
      "latentQueue": []
    }
  ]
}