const configAbility = {
  "fileName": "4035010_Modifiers",
  "abilityType": "Char. Modifiers",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-403999961\">W4_IronTombCore_BattleScore3</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier is Added [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"-2078801645\">Enemy_W4_IronTombCorePart_Break</a>[<span class=\"descriptionNumberColor\">Grave Wound</span>]"
              },
              "passed": [
                {
                  "name": "Achievement",
                  "matchTags": true,
                  "relatedAchievements": [
                    {
                      "title": "Binary Collapse",
                      "desc": "In the battle with Anti-Creator, Hatred Inundate, inflict the \"Grave Wound\" state on Imprisoned Mythos or Manipulated Logos #1 time(s)",
                      "rarity": "Low",
                      "params": [
                        1
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
      "for": "<a class=\"gModGreen\" id=\"mod__-420777580\">W4_IronTombCore_BattleScore2</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "IronTombCore_BattleScore2_Flag"
            }
          ]
        },
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "IronTombCore_BattleScore2_Flag",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Achievement",
                  "matchTags": true,
                  "relatedAchievements": [
                    {
                      "title": "Do Not Let Hatred Blot Out The Stars",
                      "desc": "Win the battle against Anti-Creator, Hatred Inundate, while keeping \"Amphorean Hatred\" at no higher than #1%",
                      "rarity": "Low",
                      "params": [
                        66
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
          "variableName": "_WorldErosion02",
          "from": "ContextCaster",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 67,
              "maxValue": 100,
              "includeMaxValueInRange": true,
              "whenEnteringRange": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "IronTombCore_BattleScore2_Flag",
                  "value": 1
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
      "for": "<a class=\"gModGreen\" id=\"mod__211705252\">MScoring_30231_TargetCharacterID_04</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Trailblazer}}"
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "CharacterID_30231_Flag04",
                  "value": 8001
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable with Varying Data",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "targetWrite": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "variableName": "CharacterID_30231_Flag04",
                  "value": "TargetCharacterID"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__194927633\">MScoring_30231_TargetCharacterID_03</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Trailblazer}}"
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "CharacterID_30231_Flag03",
                  "value": 8001
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable with Varying Data",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "targetWrite": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "variableName": "CharacterID_30231_Flag03",
                  "value": "TargetCharacterID"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__178150014\">MScoring_30231_TargetCharacterID_02</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Trailblazer}}"
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "CharacterID_30231_Flag02",
                  "value": 8001
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable with Varying Data",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "targetWrite": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "variableName": "CharacterID_30231_Flag02",
                  "value": "TargetCharacterID"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__161372395\">MScoring_30231_TargetCharacterID_01</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Trailblazer}}"
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "CharacterID_30231_Flag01",
                  "value": 8001
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable with Varying Data",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "targetWrite": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "variableName": "CharacterID_30231_Flag01",
                  "value": "TargetCharacterID"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__13940540\">MScoring_30231_Listen_Sub</a>",
      "modifierFlags": [
        "ListenBattleEventSkill"
      ],
      "execute": [
        {
          "eventTrigger": "Ability Use [Owner]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Ability Targets of Modifier Holder}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Trailblazer}}"
                    }
                  },
                  {
                    "name": "Character ID",
                    "ID": 1413,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Ability Targets of Modifier Holder}}"
                    },
                    "characterName": "Evernight"
                  },
                  {
                    "name": "Character ID",
                    "ID": 1414,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Ability Targets of Modifier Holder}}"
                    },
                    "characterName": "Dan Heng • Permansor Terrae"
                  },
                  {
                    "name": "Character ID",
                    "ID": 1402,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Ability Targets of Modifier Holder}}"
                    },
                    "characterName": "Aglaea"
                  },
                  {
                    "name": "Character ID",
                    "ID": 1403,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Ability Targets of Modifier Holder}}"
                    },
                    "characterName": "Tribbie"
                  },
                  {
                    "name": "Character ID",
                    "ID": 1404,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Ability Targets of Modifier Holder}}"
                    },
                    "characterName": "Mydei"
                  },
                  {
                    "name": "Character ID",
                    "ID": 1407,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Ability Targets of Modifier Holder}}"
                    },
                    "characterName": "Castorice"
                  },
                  {
                    "name": "Character ID",
                    "ID": 1405,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Ability Targets of Modifier Holder}}"
                    },
                    "characterName": "Anaxa"
                  },
                  {
                    "name": "Character ID",
                    "ID": 1409,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Ability Targets of Modifier Holder}}"
                    },
                    "characterName": "Hyacine"
                  },
                  {
                    "name": "Character ID",
                    "ID": 1406,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Ability Targets of Modifier Holder}}"
                    },
                    "characterName": "Cipher"
                  },
                  {
                    "name": "Character ID",
                    "ID": 1412,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Ability Targets of Modifier Holder}}"
                    },
                    "characterName": "Cerydra"
                  },
                  {
                    "name": "Character ID",
                    "ID": 1410,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Ability Targets of Modifier Holder}}"
                    },
                    "characterName": "Hysilens"
                  },
                  {
                    "name": "Character ID",
                    "ID": 1415,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Ability Targets of Modifier Holder}}"
                    },
                    "characterName": "Cyrene"
                  },
                  {
                    "name": "Character ID",
                    "ID": 1408,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Ability Targets of Modifier Holder}}"
                    },
                    "characterName": "Phainon"
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "CharacterID_30231_Flag01",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "CharacterID_30231_Flag02",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "CharacterID_30231_Flag03",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "CharacterID_30231_Flag04",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Ability Targets of Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"161372395\">MScoring_30231_TargetCharacterID_01</a>"
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Ability Targets of Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"178150014\">MScoring_30231_TargetCharacterID_02</a>"
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Ability Targets of Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"194927633\">MScoring_30231_TargetCharacterID_03</a>"
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Ability Targets of Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"211705252\">MScoring_30231_TargetCharacterID_04</a>"
                          }
                        ]
                      },
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Ability Targets of Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"161372395\">MScoring_30231_TargetCharacterID_01</a>"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "CharacterID_30231_Flag01",
                            "compareType": ">=",
                            "value2": 1
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "CharacterID_30231_Flag02",
                            "compareType": "=",
                            "value2": 0
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "CharacterID_30231_Flag03",
                            "compareType": "=",
                            "value2": 0
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "CharacterID_30231_Flag04",
                            "compareType": "=",
                            "value2": 0
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Ability Targets of Modifier Holder}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"161372395\">MScoring_30231_TargetCharacterID_01</a>"
                              },
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Ability Targets of Modifier Holder}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"178150014\">MScoring_30231_TargetCharacterID_02</a>"
                              },
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Ability Targets of Modifier Holder}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"194927633\">MScoring_30231_TargetCharacterID_03</a>"
                              },
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Ability Targets of Modifier Holder}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"211705252\">MScoring_30231_TargetCharacterID_04</a>"
                              }
                            ]
                          },
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Ability Targets of Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"178150014\">MScoring_30231_TargetCharacterID_02</a>"
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Compare: Variable",
                                "value1": "CharacterID_30231_Flag01",
                                "compareType": ">=",
                                "value2": 1
                              },
                              {
                                "name": "Compare: Variable",
                                "value1": "CharacterID_30231_Flag02",
                                "compareType": ">=",
                                "value2": 1
                              },
                              {
                                "name": "Compare: Variable",
                                "value1": "CharacterID_30231_Flag03",
                                "compareType": "=",
                                "value2": 0
                              },
                              {
                                "name": "Compare: Variable",
                                "value1": "CharacterID_30231_Flag04",
                                "compareType": "=",
                                "value2": 0
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "OR",
                                "conditionList": [
                                  {
                                    "name": "Has Modifier",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Ability Targets of Modifier Holder}}"
                                    },
                                    "modifier": "<a class=\"gModGreen\" id=\"161372395\">MScoring_30231_TargetCharacterID_01</a>"
                                  },
                                  {
                                    "name": "Has Modifier",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Ability Targets of Modifier Holder}}"
                                    },
                                    "modifier": "<a class=\"gModGreen\" id=\"178150014\">MScoring_30231_TargetCharacterID_02</a>"
                                  },
                                  {
                                    "name": "Has Modifier",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Ability Targets of Modifier Holder}}"
                                    },
                                    "modifier": "<a class=\"gModGreen\" id=\"194927633\">MScoring_30231_TargetCharacterID_03</a>"
                                  },
                                  {
                                    "name": "Has Modifier",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Ability Targets of Modifier Holder}}"
                                    },
                                    "modifier": "<a class=\"gModGreen\" id=\"211705252\">MScoring_30231_TargetCharacterID_04</a>"
                                  }
                                ]
                              },
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Ability Targets of Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"194927633\">MScoring_30231_TargetCharacterID_03</a>"
                                }
                              ]
                            }
                          ],
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "AND",
                                "conditionList": [
                                  {
                                    "name": "Compare: Variable",
                                    "value1": "CharacterID_30231_Flag01",
                                    "compareType": ">=",
                                    "value2": 1
                                  },
                                  {
                                    "name": "Compare: Variable",
                                    "value1": "CharacterID_30231_Flag02",
                                    "compareType": ">=",
                                    "value2": 1
                                  },
                                  {
                                    "name": "Compare: Variable",
                                    "value1": "CharacterID_30231_Flag03",
                                    "compareType": ">=",
                                    "value2": 1
                                  },
                                  {
                                    "name": "Compare: Variable",
                                    "value1": "CharacterID_30231_Flag04",
                                    "compareType": "=",
                                    "value2": 0
                                  }
                                ]
                              },
                              "passed": [
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "OR",
                                    "conditionList": [
                                      {
                                        "name": "Has Modifier",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Ability Targets of Modifier Holder}}"
                                        },
                                        "modifier": "<a class=\"gModGreen\" id=\"161372395\">MScoring_30231_TargetCharacterID_01</a>"
                                      },
                                      {
                                        "name": "Has Modifier",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Ability Targets of Modifier Holder}}"
                                        },
                                        "modifier": "<a class=\"gModGreen\" id=\"178150014\">MScoring_30231_TargetCharacterID_02</a>"
                                      },
                                      {
                                        "name": "Has Modifier",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Ability Targets of Modifier Holder}}"
                                        },
                                        "modifier": "<a class=\"gModGreen\" id=\"194927633\">MScoring_30231_TargetCharacterID_03</a>"
                                      },
                                      {
                                        "name": "Has Modifier",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Ability Targets of Modifier Holder}}"
                                        },
                                        "modifier": "<a class=\"gModGreen\" id=\"211705252\">MScoring_30231_TargetCharacterID_04</a>"
                                      }
                                    ]
                                  },
                                  "failed": [
                                    {
                                      "name": "Add Events/Bonuses",
                                      "to": {
                                        "name": "Target Name",
                                        "target": "{{Ability Targets of Modifier Holder}}"
                                      },
                                      "modifier": "<a class=\"gModGreen\" id=\"211705252\">MScoring_30231_TargetCharacterID_04</a>"
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
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-370444723\">W4_IronTombCore_BattleScore1</a>",
      "modifierFlags": [
        "ListenBattleEventSkill"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "CharacterID_30231_Flag01"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "CharacterID_30231_Flag02"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "CharacterID_30231_Flag03"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "CharacterID_30231_Flag04"
            }
          ]
        },
        {
          "eventTrigger": "Leave Battle",
          "execute": [
            {
              "name": "IF",
              "conditions": "Battle was Victory",
              "passed": [
                {
                  "name": "Assign Value to Stat",
                  "variableName": "30231_TargetCharacterID01",
                  "value": {
                    "operator": "Variables[0] (CharacterID_30231_Flag01) || RETURN",
                    "displayLines": "CharacterID_30231_Flag01",
                    "constants": [],
                    "variables": [
                      "CharacterID_30231_Flag01"
                    ]
                  }
                },
                {
                  "name": "Assign Value to Stat",
                  "variableName": "30231_TargetCharacterID02",
                  "value": {
                    "operator": "Variables[0] (CharacterID_30231_Flag02) || RETURN",
                    "displayLines": "CharacterID_30231_Flag02",
                    "constants": [],
                    "variables": [
                      "CharacterID_30231_Flag02"
                    ]
                  }
                },
                {
                  "name": "Assign Value to Stat",
                  "variableName": "30231_TargetCharacterID03",
                  "value": {
                    "operator": "Variables[0] (CharacterID_30231_Flag03) || RETURN",
                    "displayLines": "CharacterID_30231_Flag03",
                    "constants": [],
                    "variables": [
                      "CharacterID_30231_Flag03"
                    ]
                  }
                },
                {
                  "name": "Assign Value to Stat",
                  "variableName": "30231_TargetCharacterID04",
                  "value": {
                    "operator": "Variables[0] (CharacterID_30231_Flag04) || RETURN",
                    "displayLines": "CharacterID_30231_Flag04",
                    "constants": [],
                    "variables": [
                      "CharacterID_30231_Flag04"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Battle Event/Summon Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Battle Event ID",
                "ID": 60032,
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
                  "modifier": "<a class=\"gModGreen\" id=\"13940540\">MScoring_30231_Listen_Sub</a>"
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
      "for": "<a class=\"gModGreen\" id=\"mod__1626881642\">Enemy_W4_IronTombCore_Main_P3_AvatarDamageAdded</a>[<span class=\"descriptionNumberColor\">Chronicled \"Love\"</span>]",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">BaseDMGMultiplier</span>&nbsp;",
              "value": {
                "operator": "Constants[0] (1) || Variables[0] (MDF_1) || ADD || RETURN",
                "displayLines": "(1 + MDF_1)",
                "constants": [
                  1
                ],
                "variables": [
                  "MDF_1"
                ]
              }
            }
          ]
        }
      ],
      "description": "Cyrene's \"Love\" greatly increases DMG dealt by the target.",
      "type": "Buff",
      "statusName": "Chronicled \"Love\""
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1529513281\">Enemy_W4_IronTombCore_Main_P3_AvatarDamageAdded_Listener</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)}}.[[removeBattleEvents]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1626881642\">Enemy_W4_IronTombCore_Main_P3_AvatarDamageAdded</a>[<span class=\"descriptionNumberColor\">Chronicled \"Love\"</span>]",
              "valuePerStack": {
                "MDF_1": {
                  "operator": "Variables[0] ({[PassiveSkill03[1]]}) || RETURN",
                  "displayLines": "{[PassiveSkill03[1]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill03[1]]}"
                  ]
                }
              },
              "casterAssign": "TargetSelf"
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
                "team": "Player Team"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1626881642\">Enemy_W4_IronTombCore_Main_P3_AvatarDamageAdded</a>[<span class=\"descriptionNumberColor\">Chronicled \"Love\"</span>]",
                  "valuePerStack": {
                    "MDF_1": {
                      "operator": "Variables[0] ({[PassiveSkill03[1]]}) || RETURN",
                      "displayLines": "{[PassiveSkill03[1]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill03[1]]}"
                      ]
                    }
                  },
                  "casterAssign": "TargetSelf"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "_IsWeek",
        "_PhaseCheck",
        "_Trigger1",
        "_Trigger2"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-470333037\">Enemy_W4_IronTombCore_Main_P3_HpRatioAdded</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HP%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill03[0]]}) || RETURN",
                "displayLines": "{[PassiveSkill03[0]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill03[0]]}"
                ]
              }
            },
            {
              "name": "Divide BossHP into Bars",
              "barCount": 99999
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "_IsWeek",
        "_PhaseCheck",
        "_Trigger1",
        "_Trigger2",
        "AIFlag",
        "_WorldLevel"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2081954099\">Enemy_W4_IronTombCore_BlackBlood</a>[<span class=\"descriptionNumberColor\">Descent into Chaos</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBlock%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_DirtyHPRatio) || RETURN",
                "displayLines": "MDF_DirtyHPRatio",
                "constants": [],
                "variables": [
                  "MDF_DirtyHPRatio"
                ]
              }
            }
          ]
        }
      ],
      "description": "Maximum Restorable HP and Maximum Recoverable Skill Points are reduced. This effect can be weakened when \"Amphorean Hatred\" decreases.",
      "type": "Debuff",
      "statusName": "Descent into Chaos"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-453954106\">Enemy_W4_IronTombCorePart_DamageTransfer</a>[<span class=\"descriptionNumberColor\">Damage Resonance</span>]",
      "stackData": [],
      "latentQueue": [],
      "description": "When the target takes damage, \"Anti-Creator\" will also take the same damage.",
      "type": "Other",
      "statusName": "Damage Resonance"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1372521903\">MModifier_W4_IronTombCore_TimeLock</a>[<span class=\"descriptionNumberColor\">Action Lock</span>]",
      "stackType": "Replace",
      "modifierFlags": [
        "AvatarBreak",
        "STAT_CTRL",
        "DisableAction"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1788054251\">MModifier_W4_IronTombCore_TimeLock_AddAbility</a>",
              "casterAssign": "TargetSelf"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-827834429\">MModifier_W4_IronTombCore_TimeLock_UIEff</a>"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-827834429\">MModifier_W4_IronTombCore_TimeLock_UIEff</a>"
            },
            {
              "name": "Block Advance/Delay Effects",
              "on": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "whitelist": {
                "name": "Target Name",
                "target": "{{No Target}}"
              },
              "whitelistTag": 17,
              "isLock": false
            }
          ]
        },
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_Layers",
              "value": 100
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "_ActionDelayBase",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">ActionDelay</span>&nbsp;",
              "context": "ContextModifier"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "_ActionDelayBefore",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">ActionDelay</span>&nbsp;",
              "context": "ContextModifier"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "_SPMax",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
            },
            {
              "name": "Disable Abilities",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "abilityTypes": [
                "Ultimate"
              ],
              "text": "Ability cannot be used"
            },
            {
              "name": "Block Advance/Delay Effects",
              "on": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "whitelist": {
                "name": "Target Name",
                "target": "{{No Target}}"
              },
              "whitelistTag": 17
            }
          ]
        },
        {
          "eventTrigger": "Energy Change",
          "execute": [
            {
              "name": "Define Custom Variable with Changes to Stats",
              "variableName": "_SPDelta",
              "type": "RawDelta"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "_SPDelta",
                    "compareType": ">",
                    "value2": 0,
                    "contextScope": "ContextModifier"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "_SPMax",
                    "compareType": ">",
                    "value2": 0,
                    "contextScope": "ContextModifier"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_Layers",
                  "context": "ContextModifier",
                  "value": {
                    "operator": "Variables[0] (_SPDelta) || INVERT || Variables[1] (_SPMax) || DIV || Constants[0] (100) || MUL || Variables[2] (MDF_SPConvert) || MUL || RETURN",
                    "displayLines": "(((-_SPDelta / _SPMax) * 100) * MDF_SPConvert)",
                    "constants": [
                      100
                    ],
                    "variables": [
                      "_SPDelta",
                      "_SPMax",
                      "MDF_SPConvert"
                    ]
                  },
                  "max": 100
                }
              ]
            }
          ]
        }
      ],
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "MDF_Layers",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": 0,
              "includeMaxValueInRange": true,
              "whenEnteringRange": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_IsInsert",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_IsInsert",
                      "value": 1
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W4_IronTombCore_TimeLock_Off",
                      "priorityTag": "AvatarBuffSelf",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
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
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">ActionDelay</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": 999999,
              "includeMaxValueInRange": true,
              "whenValueChanges": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_ActionDelayAfter",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ActionDelay</span>&nbsp;",
                  "context": "ContextModifier"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "_ActionDelayBefore",
                        "compareType": ">",
                        "value2": {
                          "operator": "Variables[0] (_ActionDelayAfter) || RETURN",
                          "displayLines": "_ActionDelayAfter",
                          "constants": [],
                          "variables": [
                            "_ActionDelayAfter"
                          ]
                        }
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "_ActionDelayBase",
                        "compareType": ">",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_Layers",
                      "context": "ContextModifier",
                      "value": {
                        "operator": "Variables[0] (_ActionDelayBefore) || Variables[1] (_ActionDelayAfter) || SUB || INVERT || Variables[2] (_ActionDelayBase) || DIV || Constants[0] (100) || MUL || Variables[3] (MDF_ActionDelayConvert) || MUL || RETURN",
                        "displayLines": "(((-(_ActionDelayBefore - _ActionDelayAfter) / _ActionDelayBase) * 100) * MDF_ActionDelayConvert)",
                        "constants": [
                          100
                        ],
                        "variables": [
                          "_ActionDelayBefore",
                          "_ActionDelayAfter",
                          "_ActionDelayBase",
                          "MDF_ActionDelayConvert"
                        ]
                      },
                      "max": 100
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_ActionDelayBefore",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ActionDelay</span>&nbsp;",
                  "context": "ContextModifier"
                }
              ]
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": 0,
              "includeMaxValueInRange": true,
              "whenEnteringRange": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_IsInsert",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_IsInsert",
                      "value": 1
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W4_IronTombCore_TimeLock_Off",
                      "priorityTag": "AvatarBuffSelf",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "useEntitySnapshot": true,
      "stackData": [
        "MDF_SPConvert",
        "MDF_ActionDelayConvert"
      ],
      "latentQueue": [],
      "description": "This target's action value will not change because of the end of any target's turn. This target can reduce the \"Unlock Value\" through action advance effects or Energy regeneration. When the \"Unlock Value\" is depleted, this state will be dispelled.",
      "type": "Debuff",
      "effectName": "Action Lock",
      "statusName": "Action Lock"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1788054251\">MModifier_W4_IronTombCore_TimeLock_AddAbility</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Ability",
              "abilityName": "Monster_W4_IronTombCore_TimeLock_Off"
            },
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-827834429\">MModifier_W4_IronTombCore_TimeLock_UIEff</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__748047683\">MModifier_W4_IronTombCore_HateUpStatus_02</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 3
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1488270067\">Enemy_W4_IronTombCore_Main_P3</a>"
                  }
                ]
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__764825302\">MModifier_W4_IronTombCore_HateUpStatus_01</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 3
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1488270067\">Enemy_W4_IronTombCore_Main_P3</a>"
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1914142012\">MModifier_W4_IronTombCore_BlackBP</a>",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"764825302\">MModifier_W4_IronTombCore_HateUpStatus_01</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"748047683\">MModifier_W4_IronTombCore_HateUpStatus_02</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2081954099\">Enemy_W4_IronTombCore_BlackBlood</a>[<span class=\"descriptionNumberColor\">Descent into Chaos</span>]"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Skill Point Lock-Out",
              "amount": {
                "operator": "Variables[0] (_PhaseLock) || RETURN",
                "displayLines": "_PhaseLock",
                "constants": [],
                "variables": [
                  "_PhaseLock"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_BPMaxCost",
                "compareType": ">=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"748047683\">MModifier_W4_IronTombCore_HateUpStatus_02</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"764825302\">MModifier_W4_IronTombCore_HateUpStatus_01</a>"
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_BPMaxCost",
                    "compareType": ">=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"764825302\">MModifier_W4_IronTombCore_HateUpStatus_01</a>"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"748047683\">MModifier_W4_IronTombCore_HateUpStatus_02</a>"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_BPMaxCost",
        "MDF_DirtyHPRatio_PerLayer"
      ],
      "latentQueue": [
        "_PhaseLock",
        "#PassiveSkill01_P3_Percentage",
        "#PassiveSkill01_P2_Percentage",
        "#PassiveSkill01_P1_Percentage"
      ],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2081954099\">Enemy_W4_IronTombCore_BlackBlood</a>[<span class=\"descriptionNumberColor\">Descent into Chaos</span>]",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_DirtyHPRatio": {
              "operator": "Variables[0] (MDF_DirtyHPRatio_PerLayer) || RETURN",
              "displayLines": "MDF_DirtyHPRatio_PerLayer",
              "constants": [],
              "variables": [
                "MDF_DirtyHPRatio_PerLayer"
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__608068418\">MModifier_W4_IronTombCorePart_Ability07_Charge_DisableAction</a>",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "DisableAction"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Set Action-State",
              "on": null,
              "stateName": "IronTombCorePart_Charge_Departed"
            },
            {
              "name": "Create AV Link",
              "from": {
                "name": "Target Name",
                "target": "{{Irontomb: Core}}"
              },
              "to": {
                "name": "Target Name",
                "target": "{{Irontomb: Part 1}} + {{Irontomb: Part 2}}"
              },
              "linkOrder": 1,
              "isStart": true,
              "linkFollowerModifications": {
                "OnBreak": "Bit_AutoForceSync"
              },
              "linkOwnerModifications": {
                "OnBreak": "Bit_AutoForceSync"
              }
            },
            {
              "name": "Force-Sync AV Link",
              "from": {
                "name": "Target Name",
                "target": "{{Irontomb: Core}}"
              },
              "to": {
                "name": "Target Name",
                "target": "{{Irontomb: Part 1}} + {{Irontomb: Part 2}}"
              }
            }
          ]
        },
        {
          "eventTrigger": "Turn Start [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Irontomb: Part 1}}"
                    },
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
                      "target": "{{Irontomb: Part 2}}"
                    },
                    "invertCondition": true
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Irontomb: Core}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"187835282\">MModifier_W4_IronTombCore_Ability07_Charge</a>[<span class=\"descriptionNumberColor\">Resist and Destroy</span>]",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Set Action-State",
              "on": null,
              "stateName": "IronTombCorePart_Charge_Departed",
              "state": false
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1262350181\">MModifier_W4_IronTombCorePart_Ability07_Charge</a>",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Irontomb: Part 1}}"
                }
              },
              "passed": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "Phase0"
                }
              ],
              "failed": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "Phase0"
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
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"608068418\">MModifier_W4_IronTombCorePart_Ability07_Charge_DisableAction</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2078801645\">Enemy_W4_IronTombCorePart_Break</a>[<span class=\"descriptionNumberColor\">Grave Wound</span>]"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Irontomb: Part 1}}"
                }
              },
              "passed": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "Phase3"
                }
              ],
              "failed": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "Phase3"
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
      "for": "<a class=\"gModGreen\" id=\"mod__1381137894\">MModifier_W4_IronTombCore_Ability07_MuteBreak</a>",
      "modifierFlags": [
        "MuteBreak"
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-141772826\">MModifier_W4_IronTombCore_Ability07_BlockDamage</a>",
      "modifierFlags": [
        "Stealth",
        "Endurance"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            "Mark Entity as Non-Target(Unselectable)",
            {
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "action": "Protected",
              "valueList": [
                "Physical",
                "Fire",
                "Ice",
                "Thunder",
                "Wind",
                "Quantum",
                "Imaginary"
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
      "for": "<a class=\"gModGreen\" id=\"mod__187835282\">MModifier_W4_IronTombCore_Ability07_Charge</a>[<span class=\"descriptionNumberColor\">Resist and Destroy</span>]",
      "modifierFlags": [
        "ListenBattleEventSkill"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Irontomb: Part 1}} + {{Irontomb: Part 2}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1262350181\">MModifier_W4_IronTombCorePart_Ability07_Charge</a>"
            },
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "phase": "Phase1"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-141772826\">MModifier_W4_IronTombCore_Ability07_BlockDamage</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1381137894\">MModifier_W4_IronTombCore_Ability07_MuteBreak</a>"
            },
            {
              "name": "Assign Target Battle-Location",
              "target": {
                "name": "Target Name",
                "target": "{{Irontomb: Part 2}}"
              },
              "casterOverride": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "spot": "AfterCaster"
            },
            {
              "name": "Assign Target Battle-Location",
              "target": {
                "name": "Target Name",
                "target": "{{Irontomb: Part 1}}"
              },
              "casterOverride": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "spot": "BeforeCaster"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Irontomb: Phantom}}"
                },
                "value1": "_PhaseLock",
                "compareType": "=",
                "value2": 1
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
            },
            {
              "name": "Assign Target Battle-Location",
              "target": {
                "name": "Target Name",
                "target": "{{Irontomb: Part 1}}"
              },
              "casterOverride": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "spot": "AfterCaster"
            },
            {
              "name": "Assign Target Battle-Location",
              "target": {
                "name": "Target Name",
                "target": "{{Irontomb: Part 2}}"
              },
              "casterOverride": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "spot": "BeforeCaster"
            },
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "phase": "Phase2"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier is Added [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"-2078801645\">Enemy_W4_IronTombCorePart_Break</a>[<span class=\"descriptionNumberColor\">Grave Wound</span>]"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Team Count",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "variableName": "_CorePartBreakCount",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-2078801645\">Enemy_W4_IronTombCorePart_Break</a>[<span class=\"descriptionNumberColor\">Grave Wound</span>]"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "_CorePartBreakCount",
                        "compareType": ">=",
                        "value2": 2
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_InsertFlag",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_InsertFlag",
                      "value": 1
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W4_IronTombCore_Ability082_Part01",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "priorityTag": "MonsterBuffSelf",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
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
      "description": "\"Anti-Creator\" enters Charging state, and will use \"Resist and Destroy\" in the next action. Dispel the Charging state by dealing a killing blow to \"Mythos\" and \"Logos.\"",
      "type": "Other",
      "statusName": "Resist and Destroy"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-304646724\">Enemy_W4_IronTombCorePart_STATSuperArmor</a>",
      "modifierFlags": [
        "STAT_SuperArmor"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2078801645\">Enemy_W4_IronTombCorePart_Break</a>[<span class=\"descriptionNumberColor\">Grave Wound</span>]",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Irontomb: Core}}"
              },
              "variableName": "_BreakCheck",
              "value": -1,
              "max": 2
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Irontomb: Part 1}}"
                }
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Irontomb: Part 2}}"
                }
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-304646724\">Enemy_W4_IronTombCorePart_STATSuperArmor</a>"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Irontomb: Core}}"
              },
              "variableName": "_BreakCheck",
              "value": 1,
              "max": 2
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Irontomb: Part 1}}"
                }
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Irontomb: Part 2}}"
                }
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-304646724\">Enemy_W4_IronTombCorePart_STATSuperArmor</a>"
            }
          ]
        }
      ],
      "description": "Target cannot take action.",
      "type": "Other",
      "effectName": "Grave Wound",
      "statusName": "Grave Wound"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__667872386\">Enemy_W4_IronTombCore_WorldErosionCtl</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Set IronTomb Progress",
              "display": {
                "operator": "Variables[0] (_WorldErosion02) || RETURN",
                "displayLines": "_WorldErosion02",
                "constants": [],
                "variables": [
                  "_WorldErosion02"
                ]
              },
              "warningTheshold": {
                "operator": "Variables[0] ({[PassiveSkill01[0]]}) || Constants[0] (100) || MUL || RETURN",
                "displayLines": "({[PassiveSkill01[0]]} * 100)",
                "constants": [
                  100
                ],
                "variables": [
                  "{[PassiveSkill01[0]]}"
                ]
              },
              "errorThreshold": {
                "operator": "Variables[0] ({[PassiveSkill01[1]]}) || Constants[0] (100) || MUL || RETURN",
                "displayLines": "({[PassiveSkill01[1]]} * 100)",
                "constants": [
                  100
                ],
                "variables": [
                  "{[PassiveSkill01[1]]}"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_WorldErosionIndex",
                "compareType": "=",
                "value2": 0
              }
            }
          ]
        }
      ],
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "_WorldErosionIndex",
          "from": "ContextCaster",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": 2,
              "includeMaxValueInRange": true,
              "whenValueChanges": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_WorldErosionIndex",
                    "compareType": "=",
                    "value2": 0
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_WorldErosionIndex",
                        "compareType": "=",
                        "value2": 1
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Variable Value Changes",
          "variableName": "_WorldErosion02",
          "from": "ContextCaster",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": 100,
              "includeMaxValueInRange": true,
              "whenValueChanges": [
                {
                  "name": "Set IronTomb Progress",
                  "display": {
                    "operator": "Variables[0] (_WorldErosion02) || RETURN",
                    "displayLines": "_WorldErosion02",
                    "constants": [],
                    "variables": [
                      "_WorldErosion02"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "_WorldErosion",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] ({[PassiveSkill01[2]]}) || Constants[0] (100) || MUL || RETURN",
                          "displayLines": "({[PassiveSkill01[2]]} * 100)",
                          "constants": [
                            100
                          ],
                          "variables": [
                            "{[PassiveSkill01[2]]}"
                          ]
                        }
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "#PassiveSkill01_P3_Percentage",
                        "compareType": ">=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "_Trigger3",
                            "compareType": "=",
                            "value2": 0
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1399635214\">Enemy_W4_IronTombCore_Main_Ability07Tag</a>",
                            "invertCondition": true
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W4_IronTombCore_WorldErosion_Insert",
                          "priorityTag": "MonsterChangePhase",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "allowAbilityTriggers": false
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1914142012\">MModifier_W4_IronTombCore_BlackBP</a>",
                          "valuePerStack": {
                            "MDF_BPMaxCost": 4,
                            "MDF_DirtyHPRatio_PerLayer": {
                              "operator": "Constants[0] (4) || Variables[0] ({[PassiveSkill01[4]]}) || MUL || RETURN",
                              "displayLines": "(4 * {[PassiveSkill01[4]]})",
                              "constants": [
                                4
                              ],
                              "variables": [
                                "{[PassiveSkill01[4]]}"
                              ]
                            }
                          }
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Trigger3",
                      "value": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Trigger3",
                      "value": 0
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "_WorldErosion",
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] ({[PassiveSkill01[1]]}) || Constants[0] (100) || MUL || RETURN",
                              "displayLines": "({[PassiveSkill01[1]]} * 100)",
                              "constants": [
                                100
                              ],
                              "variables": [
                                "{[PassiveSkill01[1]]}"
                              ]
                            }
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "#PassiveSkill01_P2_Percentage",
                            "compareType": ">=",
                            "value2": 0
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Compare: Variable",
                                "value1": "_Trigger2",
                                "compareType": "=",
                                "value2": 0
                              },
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"1399635214\">Enemy_W4_IronTombCore_Main_Ability07Tag</a>",
                                "invertCondition": true
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Inject Ability Use",
                              "abilityName": "Monster_W4_IronTombCore_WorldErosion_Insert",
                              "priorityTag": "MonsterChangePhase",
                              "canHitNonTargets": true,
                              "showInActionOrder": true,
                              "allowAbilityTriggers": false
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1914142012\">MModifier_W4_IronTombCore_BlackBP</a>",
                              "valuePerStack": {
                                "MDF_BPMaxCost": 2,
                                "MDF_DirtyHPRatio_PerLayer": {
                                  "operator": "Constants[0] (2) || Variables[0] ({[PassiveSkill01[4]]}) || MUL || RETURN",
                                  "displayLines": "(2 * {[PassiveSkill01[4]]})",
                                  "constants": [
                                    2
                                  ],
                                  "variables": [
                                    "{[PassiveSkill01[4]]}"
                                  ]
                                }
                              }
                            }
                          ]
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_Trigger2",
                          "value": 1
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_Trigger2",
                          "value": 0
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Compare: Variable",
                                "value1": "_WorldErosion",
                                "compareType": ">=",
                                "value2": {
                                  "operator": "Variables[0] ({[PassiveSkill01[0]]}) || Constants[0] (100) || MUL || RETURN",
                                  "displayLines": "({[PassiveSkill01[0]]} * 100)",
                                  "constants": [
                                    100
                                  ],
                                  "variables": [
                                    "{[PassiveSkill01[0]]}"
                                  ]
                                }
                              },
                              {
                                "name": "Compare: Variable",
                                "value1": "#PassiveSkill01_P1_Percentage",
                                "compareType": ">=",
                                "value2": 0
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "AND",
                                "conditionList": [
                                  {
                                    "name": "Compare: Variable",
                                    "value1": "_Trigger1",
                                    "compareType": "=",
                                    "value2": 0
                                  },
                                  {
                                    "name": "Has Modifier",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Caster}}"
                                    },
                                    "modifier": "<a class=\"gModGreen\" id=\"1399635214\">Enemy_W4_IronTombCore_Main_Ability07Tag</a>",
                                    "invertCondition": true
                                  }
                                ]
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
                                    "modifier": "<a class=\"gModGreen\" id=\"848031818\">Enemy_W4_IronTombCore_WorldErosion_MainMark</a>",
                                    "invertCondition": true
                                  },
                                  "passed": [
                                    {
                                      "name": "Inject Ability Use",
                                      "abilityName": "Monster_W4_IronTombCore_WorldErosion_Insert",
                                      "priorityTag": "MonsterChangePhase",
                                      "canHitNonTargets": true,
                                      "showInActionOrder": true,
                                      "allowAbilityTriggers": false
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Inject Ability Use",
                                      "abilityName": "Monster_W4_IronTombCore_Main_WorldErosion_Insert",
                                      "priorityTag": "PROG_MonsterLowest",
                                      "ownerState": "Mask_AliveOrLimbo",
                                      "targetState": "Mask_AliveOrLimbo",
                                      "canHitNonTargets": true,
                                      "showInActionOrder": true,
                                      "allowAbilityTriggers": false
                                    },
                                    {
                                      "name": "Remove Events/Bonuses",
                                      "to": {
                                        "name": "Target Name",
                                        "target": "{{Modifier Holder}}"
                                      },
                                      "modifier": "<a class=\"gModGreen\" id=\"848031818\">Enemy_W4_IronTombCore_WorldErosion_MainMark</a>"
                                    }
                                  ]
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1914142012\">MModifier_W4_IronTombCore_BlackBP</a>",
                                  "valuePerStack": {
                                    "MDF_BPMaxCost": 1,
                                    "MDF_DirtyHPRatio_PerLayer": {
                                      "operator": "Variables[0] ({[PassiveSkill01[4]]}) || RETURN",
                                      "displayLines": "{[PassiveSkill01[4]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[PassiveSkill01[4]]}"
                                      ]
                                    }
                                  }
                                }
                              ]
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "_Trigger1",
                              "value": 1
                            }
                          ],
                          "failed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "_Trigger1",
                              "value": 0
                            },
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1914142012\">MModifier_W4_IronTombCore_BlackBP</a>"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_WorldErosionIndex",
                    "compareType": "=",
                    "value2": 0
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_WorldErosionIndex",
                        "compareType": "=",
                        "value2": 1
                      }
                    }
                  ]
                }
              ]
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": 100,
              "maxValue": 100,
              "includeMaxValueInRange": true,
              "whenEnteringRange": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1399635214\">Enemy_W4_IronTombCore_Main_Ability07Tag</a>",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W4_IronTombCore_Ability09_Part01",
                      "priorityTag": "LevelPerformMonster",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
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
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2029275245\">Enemy_W4_IronTombCore_P3_PartController</a>",
      "execute": [
        {
          "eventTrigger": "Waiting for Healing in Limbo",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "InsertCheck02",
                "compareType": "=",
                "value2": 1,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1500971197\">W4_IronTombCore_RemoveAllCharge</a>"
                },
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "silent": true
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "InsertCheck02"
                },
                {
                  "name": "Set Enemy Phase",
                  "mode": "Inc"
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W4_IronTombCore_PassiveAbility_Insert02",
                  "priorityTag": "MonsterChangePhase",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
                }
              ]
            }
          ],
          "priorityLevel": -90
        }
      ],
      "stackData": [],
      "latentQueue": [
        "_PhaseCheck",
        "InsertCheck",
        "AIFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1187676843\">Enemy_W4_IronTombCore_PartController</a>",
      "execute": [
        {
          "eventTrigger": "Waiting for Healing in Limbo",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "InsertCheck",
                "compareType": "=",
                "value2": 1,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1500971197\">W4_IronTombCore_RemoveAllCharge</a>"
                },
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "silent": true
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "InsertCheck"
                },
                {
                  "name": "Set Enemy Phase",
                  "mode": "Inc"
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W4_IronTombCore_PassiveAbility_Insert",
                  "priorityTag": "MonsterChangePhase",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
                }
              ]
            }
          ],
          "priorityLevel": -90
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2003232733\">Enemy_W4_IronTombCore_BreakDisableAction</a>",
      "modifierFlags": [
        "DisableAction"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1258256002\">Enemy_W4_IronTombCore_Status</a>",
      "modifierFlags": [
        "STAT_AITargetKeepActionDelay"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-350975020\">W4_IronTombCore_CalWorldErosionCtl</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1488270067\">Enemy_W4_IronTombCore_Main_P3</a>",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"667872386\">Enemy_W4_IronTombCore_WorldErosionCtl</a>"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Skill08_DamagePercentage",
                  "value": {
                    "operator": "Variables[0] ({[Skill08[0]]}) || RETURN",
                    "displayLines": "{[Skill08[0]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill08[0]]}"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Skill08_DamagePercentage",
                  "value": {
                    "operator": "Variables[0] (UnusedUnderThisBase_30) || RETURN",
                    "displayLines": "UnusedUnderThisBase_30",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_30"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-350975020\">W4_IronTombCore_CalWorldErosionCtl</a>"
            }
          ]
        },
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-350975020\">W4_IronTombCore_CalWorldErosionCtl</a>"
            }
          ]
        },
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "Mark Entity For Immediate Death",
              "target": {
                "name": "Target Name",
                "target": "{{BattleEvent60031}}"
              }
            },
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Name",
                "target": "{{BattleEvent60031}}"
              }
            },
            {
              "name": "Mark Entity For Immediate Death",
              "target": {
                "name": "Target Name",
                "target": "{{BattleEvent60032}}"
              }
            },
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Name",
                "target": "{{BattleEvent60032}}"
              }
            },
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Name",
                "target": "{{Irontomb: Phantom}}"
              }
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1451515069\">Enemy_W4_TieMu_DisableHeadLookAt</a>"
            }
          ]
        },
        {
          "eventTrigger": "Leave Battle"
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"458513520\">Enemy_W4_IronTombCore_BreakState</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1488270067\">Enemy_W4_IronTombCore_Main_P3</a>",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Irontomb: Part 1}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-2078801645\">Enemy_W4_IronTombCorePart_Break</a>[<span class=\"descriptionNumberColor\">Grave Wound</span>]",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Irontomb: Part 1}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "AIFlag",
                      "value": 1
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Irontomb: Part 2}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-2078801645\">Enemy_W4_IronTombCorePart_Break</a>[<span class=\"descriptionNumberColor\">Grave Wound</span>]",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Irontomb: Part 2}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "AIFlag",
                      "value": 1
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 11
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Irontomb: Part 1}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-2078801645\">Enemy_W4_IronTombCorePart_Break</a>[<span class=\"descriptionNumberColor\">Grave Wound</span>]",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Irontomb: Part 1}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "AIFlag",
                      "value": 11
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Irontomb: Part 2}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-2078801645\">Enemy_W4_IronTombCorePart_Break</a>[<span class=\"descriptionNumberColor\">Grave Wound</span>]",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Irontomb: Part 2}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "AIFlag",
                      "value": 11
                    }
                  ]
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Irontomb: Part 1}} + {{Irontomb: Part 2}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2003232733\">Enemy_W4_IronTombCore_BreakDisableAction</a>"
            },
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Irontomb: Part 1}}"
              },
              "phase": "Phase2"
            },
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Irontomb: Part 2}}"
              },
              "phase": "Phase2"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1500971197\">W4_IronTombCore_RemoveAllCharge</a>"
            }
          ]
        },
        {
          "eventTrigger": "End Broken State [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"458513520\">Enemy_W4_IronTombCore_BreakState</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Irontomb: Part 1}} + {{Irontomb: Part 2}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2003232733\">Enemy_W4_IronTombCore_BreakDisableAction</a>"
            }
          ]
        },
        {
          "eventTrigger": "Departed State: Begin [Anyone]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-350975020\">W4_IronTombCore_CalWorldErosionCtl</a>"
            }
          ]
        },
        {
          "eventTrigger": "Departed State: End [Anyone]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-350975020\">W4_IronTombCore_CalWorldErosionCtl</a>"
            }
          ]
        }
      ],
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "_CorePartBreakCount",
          "from": "ContextCaster",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": 0,
              "includeMaxValueInRange": true,
              "whenEnteringRange": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}} + {{Irontomb: Part 1}} + {{Irontomb: Part 2}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"471853411\">Standard_Monster_AllDamageReduce</a>[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}} + {{Irontomb: Part 1}} + {{Irontomb: Part 2}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"471853411\">Standard_Monster_AllDamageReduce</a>[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] ({[PassiveSkill02[0]]}) || RETURN",
                      "displayLines": "{[PassiveSkill02[0]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill02[0]]}"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": 1,
              "maxValue": 1,
              "includeMaxValueInRange": true,
              "whenEnteringRange": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}} + {{Irontomb: Part 1}} + {{Irontomb: Part 2}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"471853411\">Standard_Monster_AllDamageReduce</a>[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}} + {{Irontomb: Part 1}} + {{Irontomb: Part 2}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"471853411\">Standard_Monster_AllDamageReduce</a>[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] ({[PassiveSkill02[1]]}) || RETURN",
                      "displayLines": "{[PassiveSkill02[1]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill02[1]]}"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": 2,
              "maxValue": 2,
              "includeMaxValueInRange": true,
              "whenEnteringRange": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}} + {{Irontomb: Part 1}} + {{Irontomb: Part 2}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"471853411\">Standard_Monster_AllDamageReduce</a>[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]"
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
      "for": "<a class=\"gModGreen\" id=\"mod__458513520\">Enemy_W4_IronTombCore_BreakState</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]"
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "references": []
}