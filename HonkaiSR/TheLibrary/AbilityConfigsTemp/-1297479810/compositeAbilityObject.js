const compositeAbilityObject = {
  "fullCharacterName": -1297479810,
  "trimCharacterName": -1297479810,
  "abilityList": [
    "-1297479810_Functions"
  ],
  "abilityObject": {
    "-1297479810_Functions": {
      "fileName": "-1297479810_Functions",
      "abilityType": "Char. Functions",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "length": 4,
      "parse": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__225382388\">GT_StageAbility_Chess_Origin_System_Init</a>",
          "parse": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "scope": "TargetEntity",
              "variableName": "TP_DynamicValue_Origin_MemberCount"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "scope": "TargetEntity",
              "variableName": "TP_DynamicValue_Origin_ActiveLevel"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "scope": "TargetEntity",
              "variableName": "TP_DynamicValue_Origin"
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-5531294\">GT_StageAbility_Chess_Origin_System_EnterBattle</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Wave Count",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)}}"
                  },
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-741732955\">TP_Modifier_Origin_Member</a>"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "variableName": "TP_DynamicValue_Origin_MemberCount",
                      "context": "TargetEntity",
                      "value": 1,
                      "max": 100
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "value1": "TP_DynamicValue_Origin_MemberCount",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (GP_Chess_Origin_MemberCount_0201) || RETURN",
                      "displayLines": "GP_Chess_Origin_MemberCount_0201",
                      "constants": [],
                      "variables": [
                        "GP_Chess_Origin_MemberCount_0201"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "TP_DynamicValue_Origin_ActiveLevel",
                      "value": 4
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "TP_DynamicValue_Origin",
                      "value": {
                        "operator": "Variables[0] (GP_Chess_Origin_MemberCount_0201) || RETURN",
                        "displayLines": "GP_Chess_Origin_MemberCount_0201",
                        "constants": [],
                        "variables": [
                          "GP_Chess_Origin_MemberCount_0201"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Level Entity}}"
                        },
                        "value1": "TP_DynamicValue_Origin_MemberCount",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (GP_Chess_Origin_MemberCount_0107) || RETURN",
                          "displayLines": "GP_Chess_Origin_MemberCount_0107",
                          "constants": [],
                          "variables": [
                            "GP_Chess_Origin_MemberCount_0107"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "TP_DynamicValue_Origin_ActiveLevel",
                          "value": 3
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "TP_DynamicValue_Origin",
                          "value": {
                            "operator": "Variables[0] (GP_Chess_Origin_MemberCount_0107) || RETURN",
                            "displayLines": "GP_Chess_Origin_MemberCount_0107",
                            "constants": [],
                            "variables": [
                              "GP_Chess_Origin_MemberCount_0107"
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Level Entity}}"
                            },
                            "value1": "TP_DynamicValue_Origin_MemberCount",
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] (GP_Chess_Origin_MemberCount_0106) || RETURN",
                              "displayLines": "GP_Chess_Origin_MemberCount_0106",
                              "constants": [],
                              "variables": [
                                "GP_Chess_Origin_MemberCount_0106"
                              ]
                            }
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "TP_DynamicValue_Origin_ActiveLevel",
                              "value": 2
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "TP_DynamicValue_Origin",
                              "value": {
                                "operator": "Variables[0] (GP_Chess_Origin_MemberCount_0106) || RETURN",
                                "displayLines": "GP_Chess_Origin_MemberCount_0106",
                                "constants": [],
                                "variables": [
                                  "GP_Chess_Origin_MemberCount_0106"
                                ]
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Level Entity}}"
                                },
                                "value1": "TP_DynamicValue_Origin_MemberCount",
                                "compareType": ">=",
                                "value2": {
                                  "operator": "Variables[0] (GP_Chess_Origin_MemberCount_0105) || RETURN",
                                  "displayLines": "GP_Chess_Origin_MemberCount_0105",
                                  "constants": [],
                                  "variables": [
                                    "GP_Chess_Origin_MemberCount_0105"
                                  ]
                                }
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "TP_DynamicValue_Origin_ActiveLevel",
                                  "value": 1
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "TP_DynamicValue_Origin",
                                  "value": {
                                    "operator": "Variables[0] (GP_Chess_Origin_MemberCount_0105) || RETURN",
                                    "displayLines": "GP_Chess_Origin_MemberCount_0105",
                                    "constants": [],
                                    "variables": [
                                      "GP_Chess_Origin_MemberCount_0105"
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
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "scope": "ContextAbility",
                  "variableName": "TP_Temp"
                },
                {
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "variable": "TP_DynamicValue_Origin_ActiveLevel",
                  "target2": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "variable2": "TP_Temp"
                },
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (TP_Temp) || RETURN",
                    "displayLines": "TP_Temp",
                    "constants": [],
                    "variables": [
                      "TP_Temp"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "Add Stage Ability",
                          "abilityName": "TP_StageAbility_Origin",
                          "parameters": {
                            "ADF_1": 2
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2,
                      "execute": [
                        {
                          "name": "Add Stage Ability",
                          "abilityName": "TP_StageAbility_Origin",
                          "parameters": {
                            "ADF_1": 4
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 3,
                      "execute": [
                        {
                          "name": "Add Stage Ability",
                          "abilityName": "TP_StageAbility_Origin",
                          "parameters": {
                            "ADF_1": 8
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 4,
                      "execute": [
                        {
                          "name": "Add Stage Ability",
                          "abilityName": "TP_StageAbility_Origin",
                          "parameters": {
                            "ADF_1": 16
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
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-2020630137\">GT_StageAbility_Chess_Origin_Bonus_01</a>",
          "parse": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)}}"
              },
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-741732955\">TP_Modifier_Origin_Member</a>"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-785771241\">TP_Modifier_Bonus</a>",
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (BonusLayer) || RETURN",
                    "displayLines": "BonusLayer",
                    "constants": [],
                    "variables": [
                      "BonusLayer"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-2003852518\">GT_StageAbility_Chess_Origin_Bonus_02</a>",
          "parse": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)}}"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-785771241\">TP_Modifier_Bonus</a>",
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (BonusLayer) || RETURN",
                    "displayLines": "BonusLayer",
                    "constants": [],
                    "variables": [
                      "BonusLayer"
                    ]
                  }
                }
              ]
            }
          ]
        }
      ],
      "references": []
    }
  }
}