const entityPageType = "lc"
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
          "modifier": "<a class=\"gModGreen\" id=\"363283471\">LC_21043_Main</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1373377156\">LC_21043_Sub</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
          "stackType": "Replace",
          "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_DmgAddValue</span>.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "DMG Boost",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(MDF_DmgAddNum * 0.04)"
                  },
                  "variableName": "MDF_DmgAddValue"
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "statValue": {
                    "displayLines": "MDF_DmgAddValue"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__363283471\">LC_21043_Main</a>",
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
                      "value": {
                        "displayLines": "MDF_DmgAddNum"
                      },
                      "variableName": "MDF_PreDmgAddNum"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "0"
                      },
                      "variableName": "MDF_DmgAddNum"
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
                          "value": {
                            "displayLines": "(MDF_DmgAddNum + 1)"
                          },
                          "variableName": "MDF_DmgAddNum"
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
                          "modifier": "<a class=\"gModGreen\" id=\"1373377156\">LC_21043_Sub</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]"
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
                              "displayLines": "MDF_PreDmgAddNum"
                            }
                          },
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1373377156\">LC_21043_Sub</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                              "valuePerStack": {
                                "MDF_DmgAddNum": {
                                  "displayLines": "MDF_DmgAddNum"
                                },
                                "MDF_PreDmgAddNum": {
                                  "displayLines": "MDF_PreDmgAddNum"
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
                      "value": {
                        "displayLines": "MDF_DmgAddNum"
                      },
                      "variableName": "MDF_PreDmgAddNum"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "0"
                      },
                      "variableName": "MDF_DmgAddNum"
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
                          "value": {
                            "displayLines": "(MDF_DmgAddNum + 1)"
                          },
                          "variableName": "MDF_DmgAddNum"
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
                          "modifier": "<a class=\"gModGreen\" id=\"1373377156\">LC_21043_Sub</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]"
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
                              "displayLines": "MDF_PreDmgAddNum"
                            }
                          },
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1373377156\">LC_21043_Sub</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                              "valuePerStack": {
                                "MDF_DmgAddNum": {
                                  "displayLines": "MDF_DmgAddNum"
                                },
                                "MDF_PreDmgAddNum": {
                                  "displayLines": "MDF_PreDmgAddNum"
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
          ]
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