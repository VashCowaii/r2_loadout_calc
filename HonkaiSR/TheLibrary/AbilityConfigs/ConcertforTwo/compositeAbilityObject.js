const compositeAbilityObject = {
  "fullCharacterName": "Concert for Two",
  "trimCharacterName": "ConcertforTwo",
  "abilityList": [
    "ConcertforTwo_Ability21043"
  ],
  "fixedStats": {
    "1": {
      "DEF%": 0.16
    },
    "2": {
      "DEF%": 0.2
    },
    "3": {
      "DEF%": 0.24
    },
    "4": {
      "DEF%": 0.28
    },
    "5": {
      "DEF%": 0.32
    }
  },
  "abilityObject": {
    "ConcertforTwo_Ability21043": {
      "fileName": "ConcertforTwo_Ability21043",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "LC_21043_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "LC_21043_Sub[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_DmgAddValue",
                  "value": {
                    "operator": "Variables[0] (MDF_DmgAddNum) || Variables[1] (0.04) || MUL || RETURN",
                    "displayLines": "(MDF_DmgAddNum * 0.04)",
                    "constants": [],
                    "variables": [
                      "MDF_DmgAddNum",
                      0.04
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_DmgAddValue) || RETURN",
                    "displayLines": "MDF_DmgAddValue",
                    "constants": [],
                    "variables": [
                      "MDF_DmgAddValue"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_DmgAddValue</span>.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "DMG Boost"
        },
        {
          "name": "Modifier Construction",
          "for": "LC_21043_Main",
          "execute": [
            {
              "eventTrigger": "When Modifier is Added [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "Shield"
                      },
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
                      "name": "Define Custom Variable",
                      "variableName": "MDF_PreDmgAddNum",
                      "value": {
                        "operator": "Variables[0] (MDF_DmgAddNum) || RETURN",
                        "displayLines": "MDF_DmgAddNum",
                        "constants": [],
                        "variables": [
                          "MDF_DmgAddNum"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DmgAddNum",
                      "value": {
                        "operator": "Constants[0] (0) || RETURN",
                        "displayLines": "0",
                        "constants": [
                          0
                        ],
                        "variables": []
                      }
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
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
                          "name": "Define Custom Variable",
                          "variableName": "MDF_DmgAddNum",
                          "value": {
                            "operator": "Variables[0] (MDF_DmgAddNum) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(MDF_DmgAddNum + 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "MDF_DmgAddNum"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_DmgAddNum",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "LC_21043_Sub[<span class=\"descriptionNumberColor\">DMG Boost</span>]"
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "MDF_DmgAddNum",
                            "compareType": "=",
                            "value2": {
                              "operator": "Variables[0] (MDF_PreDmgAddNum) || RETURN",
                              "displayLines": "MDF_PreDmgAddNum",
                              "constants": [],
                              "variables": [
                                "MDF_PreDmgAddNum"
                              ]
                            }
                          },
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "LC_21043_Sub[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                              "valuePerStack": {
                                "MDF_DmgAddNum": {
                                  "operator": "Variables[0] (MDF_DmgAddNum) || RETURN",
                                  "displayLines": "MDF_DmgAddNum",
                                  "constants": [],
                                  "variables": [
                                    "MDF_DmgAddNum"
                                  ]
                                },
                                "MDF_PreDmgAddNum": {
                                  "operator": "Variables[0] (MDF_PreDmgAddNum) || RETURN",
                                  "displayLines": "MDF_PreDmgAddNum",
                                  "constants": [],
                                  "variables": [
                                    "MDF_PreDmgAddNum"
                                  ]
                                }
                              }
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "Shield"
                      },
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
                      "name": "Define Custom Variable",
                      "variableName": "MDF_PreDmgAddNum",
                      "value": {
                        "operator": "Variables[0] (MDF_DmgAddNum) || RETURN",
                        "displayLines": "MDF_DmgAddNum",
                        "constants": [],
                        "variables": [
                          "MDF_DmgAddNum"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DmgAddNum",
                      "value": {
                        "operator": "Constants[0] (0) || RETURN",
                        "displayLines": "0",
                        "constants": [
                          0
                        ],
                        "variables": []
                      }
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
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
                          "name": "Define Custom Variable",
                          "variableName": "MDF_DmgAddNum",
                          "value": {
                            "operator": "Variables[0] (MDF_DmgAddNum) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(MDF_DmgAddNum + 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "MDF_DmgAddNum"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_DmgAddNum",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "LC_21043_Sub[<span class=\"descriptionNumberColor\">DMG Boost</span>]"
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "MDF_DmgAddNum",
                            "compareType": "=",
                            "value2": {
                              "operator": "Variables[0] (MDF_PreDmgAddNum) || RETURN",
                              "displayLines": "MDF_PreDmgAddNum",
                              "constants": [],
                              "variables": [
                                "MDF_PreDmgAddNum"
                              ]
                            }
                          },
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "LC_21043_Sub[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                              "valuePerStack": {
                                "MDF_DmgAddNum": {
                                  "operator": "Variables[0] (MDF_DmgAddNum) || RETURN",
                                  "displayLines": "MDF_DmgAddNum",
                                  "constants": [],
                                  "variables": [
                                    "MDF_DmgAddNum"
                                  ]
                                },
                                "MDF_PreDmgAddNum": {
                                  "operator": "Variables[0] (MDF_PreDmgAddNum) || RETURN",
                                  "displayLines": "MDF_PreDmgAddNum",
                                  "constants": [],
                                  "variables": [
                                    "MDF_PreDmgAddNum"
                                  ]
                                }
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
          "stackData": [],
          "latentQueue": []
        }
      ],
      "isLightcone": true,
      "desc": "Increases the wearer's DEF by #1[i]%. For every on-field character that has a Shield, the DMG dealt by the wearer increases by #2[i]%.",
      "params": [
        [
          0.16,
          0.04
        ],
        [
          0.2,
          0.05
        ],
        [
          0.24,
          0.06
        ],
        [
          0.28,
          0.07
        ],
        [
          0.32,
          0.08
        ]
      ]
    }
  },
  "isLightcone": true
}