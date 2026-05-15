const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 3002010,
  "trimCharacterName": 3002010,
  "abilityList": [
    "3002010_Modifiers",
    "3002010_Monster_W3_TV_PassiveAbilityInitiate",
    "3002010_Monster_W3_TV_Ability03_Part02",
    "3002010_Monster_W3_TV_Ability03_Part01",
    "3002010_Monster_W3_TV_Ability02_Part02",
    "3002010_Monster_W3_TV_Ability02_Part01",
    "3002010_Monster_W3_TV_Ability01_Part02",
    "3002010_Monster_W3_TV_Ability01_Part01"
  ],
  "abilityObject": {
    "3002010_Modifiers": {
      "fileName": "3002010_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-541813617\">W3_TV_BattleScore1</a>",
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
                  "variableName": "TV_AchievementFlag"
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
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
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-516989914\">MModifier_Monster_W3_TV_Side1</a>[<span class=\"descriptionNumberColor\">Surprise Channel</span>]"
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Target Right of Caster}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-516989914\">MModifier_Monster_W3_TV_Side1</a>[<span class=\"descriptionNumberColor\">Surprise Channel</span>]"
                              },
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Target Left of Caster}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-516989914\">MModifier_Monster_W3_TV_Side1</a>[<span class=\"descriptionNumberColor\">Surprise Channel</span>]"
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Achievement",
                              "relatedAchievements": [
                                {
                                  "title": "National Sensation",
                                  "desc": "Switch #1[i] Dreamjolt Troupe's Mr. Domescreens to the Surprise Channel consecutively in a single battle",
                                  "rarity": "Low",
                                  "params": [
                                    3
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
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-516989914\">MModifier_Monster_W3_TV_Side1</a>[<span class=\"descriptionNumberColor\">Surprise Channel</span>]"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Target Right of Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-516989914\">MModifier_Monster_W3_TV_Side1</a>[<span class=\"descriptionNumberColor\">Surprise Channel</span>]"
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Target Left of Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-516989914\">MModifier_Monster_W3_TV_Side1</a>[<span class=\"descriptionNumberColor\">Surprise Channel</span>]"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Achievement",
                          "relatedAchievements": [
                            {
                              "title": "National Sensation",
                              "desc": "Switch #1[i] Dreamjolt Troupe's Mr. Domescreens to the Surprise Channel consecutively in a single battle",
                              "rarity": "Low",
                              "params": [
                                3
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
              "eventTrigger": "Attack DMG End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-516989914\">MModifier_Monster_W3_TV_Side1</a>[<span class=\"descriptionNumberColor\">Surprise Channel</span>]"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Target Right of Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-516989914\">MModifier_Monster_W3_TV_Side1</a>[<span class=\"descriptionNumberColor\">Surprise Channel</span>]"
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Target Left of Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-516989914\">MModifier_Monster_W3_TV_Side1</a>[<span class=\"descriptionNumberColor\">Surprise Channel</span>]"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Achievement",
                          "relatedAchievements": [
                            {
                              "title": "National Sensation",
                              "desc": "Switch #1[i] Dreamjolt Troupe's Mr. Domescreens to the Surprise Channel consecutively in a single battle",
                              "rarity": "Low",
                              "params": [
                                3
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
          "for": "<a class=\"gModGreen\" id=\"mod__-449226911\">Rogue_Scoring_Event_TV_Count_Modifier</a>",
          "stackType": "Replace",
          "stackLimit": 15,
          "addStacksPerTrigger": 1,
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_Count",
                    "compareType": "<",
                    "value2": 15
                  }
                },
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "MDF_Count",
                  "modifierName": "<a class=\"gModGreen\" id=\"-449226911\">Rogue_Scoring_Event_TV_Count_Modifier</a>",
                  "multiplier": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_Count",
                    "compareType": "=",
                    "value2": 15
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-968991614\">MModifier_Monster_W3_TV_Side2Scot</a>[<span class=\"descriptionNumberColor\">Curse</span>]",
          "description": "Skott can use the \"Curse\" ability. After he has been attacked, switches to the \"Succor\" state.",
          "type": "Other",
          "statusName": "Curse"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1317365887\">MModifier_Monster_W3_TV_Side1Scot</a>[<span class=\"descriptionNumberColor\">Succor</span>]",
          "description": "Skott can use the \"Succor\" ability. After he has been attacked, switches to the \"Curse\" state.",
          "type": "Other",
          "statusName": "Succor"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-533767533\">MModifier_Monster_W3_TV_Side2</a>[<span class=\"descriptionNumberColor\">Fright Channel</span>]",
          "description": "Mr. Domescreen can use the \"Startling Broadcast\" ability. After it has been attacked, switches to the Surprise Channel state.",
          "type": "Other",
          "statusName": "Fright Channel",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Enemy ID",
                        "ID": 300201000,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "characterName": null
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 300201000,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "characterName": null
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Update Modifier Description",
                      "popUpText": "Ternary Assimilation Units can use the \"Startling Broadcast\" ability. After getting attacked, switches to the \"Surprise Channel\" state."
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "Theater_Rogue"
                  },
                  "passed": [
                    {
                      "name": "Override Modifier Name",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifierName": "<a class=\"gModGreen\" id=\"-533767533\">MModifier_Monster_W3_TV_Side2</a>[<span class=\"descriptionNumberColor\">Fright Channel</span>]",
                      "modifierNameUpdate": "<a class=\"gModGreen\" id=\"-968991614\">MModifier_Monster_W3_TV_Side2Scot</a>[<span class=\"descriptionNumberColor\">Curse</span>]"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-516989914\">MModifier_Monster_W3_TV_Side1</a>[<span class=\"descriptionNumberColor\">Surprise Channel</span>]",
          "description": "Mr. Domescreen can use the \"Surprise Variety Show\" ability. After it has been attacked, switches to the Fright Channel state.",
          "type": "Other",
          "statusName": "Surprise Channel",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Enemy ID",
                        "ID": 300201000,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "characterName": null
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 300201000,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "characterName": null
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Update Modifier Description",
                      "popUpText": "Ternary Assimilation Units can use the \"Surprise Variety Show\" ability. After getting attacked, switches to the \"Fright Channel\" state."
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "Theater_Rogue"
                  },
                  "passed": [
                    {
                      "name": "Override Modifier Name",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifierName": "<a class=\"gModGreen\" id=\"-516989914\">MModifier_Monster_W3_TV_Side1</a>[<span class=\"descriptionNumberColor\">Surprise Channel</span>]",
                      "modifierNameUpdate": "<a class=\"gModGreen\" id=\"1317365887\">MModifier_Monster_W3_TV_Side1Scot</a>[<span class=\"descriptionNumberColor\">Succor</span>]"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1732782012\">MModifier_Monster_W3_TV_ReduceSPEffect</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1233820232\">MModifier_Monster_W3_TV_ATMark</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-823586997\">Enemy_W3_TV_Flop</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 0
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "FlopSide",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Update Override Controller",
                      "controller": "Override1"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-533767533\">MModifier_Monster_W3_TV_Side2</a>[<span class=\"descriptionNumberColor\">Fright Channel</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-516989914\">MModifier_Monster_W3_TV_Side1</a>[<span class=\"descriptionNumberColor\">Surprise Channel</span>]"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1233820232\">MModifier_Monster_W3_TV_ATMark</a>"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "scope": "TargetEntity",
                          "variableName": "AIFlag",
                          "value": 1
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "FlopSide",
                    "compareType": "=",
                    "value2": -1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Update Override Controller",
                      "controller": "Override2"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-516989914\">MModifier_Monster_W3_TV_Side1</a>[<span class=\"descriptionNumberColor\">Surprise Channel</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-533767533\">MModifier_Monster_W3_TV_Side2</a>[<span class=\"descriptionNumberColor\">Fright Channel</span>]"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "3002010_Monster_W3_TV_PassiveAbilityInitiate": {
      "fileName": "3002010_Monster_W3_TV_PassiveAbilityInitiate",
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"127034680\">Monster_W3_TV_FlopHandler</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "FlopSide",
            "compareType": "=",
            "value2": 1,
            "contextScope": "TargetEntity"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-516989914\">MModifier_Monster_W3_TV_Side1</a>[<span class=\"descriptionNumberColor\">Surprise Channel</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-823586997\">Enemy_W3_TV_Flop</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Animator Variable",
                "paramType": "Int",
                "paramName": "Side",
                "compareType": "=",
                "compareValue": 1
              }
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-533767533\">MModifier_Monster_W3_TV_Side2</a>[<span class=\"descriptionNumberColor\">Fright Channel</span>]"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-541813617\">W3_TV_BattleScore1</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "value": "Theater_Rogue"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1105160976\">Monster_W3_TV_SoundController</a>"
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1105160976\">Monster_W3_TV_SoundController</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__127034680\">Monster_W3_TV_FlopHandler</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "Take Damage End [Owner]: Hit"
            },
            {
              "eventTrigger": "Being Attacked Start [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "flagName": "STAT_CTRL"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "flagName": "STAT_CTRL_Stun"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "flagName": "STAT_CTRL_Frozen"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "flagName": "STAT_Confine"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "flagName": "Break"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "scope": "TargetEntity",
                      "variableName": "FlopSide",
                      "value": -1
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "scope": "TargetEntity",
                      "variableName": "FlopSide",
                      "value": {
                        "operator": "Variables[0] (FlopSide) || INVERT || RETURN",
                        "displayLines": "-FlopSide",
                        "constants": [],
                        "variables": [
                          "FlopSide"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "FaceChangeFlag",
                  "value": 1
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-823586997\">Enemy_W3_TV_Flop</a>"
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "STAT_Confine"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "STAT_CTRL_Frozen"
                      }
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "FaceChangeFlag",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Modifier Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "STAT_CTRL"
                      },
                      {
                        "name": "Modifier Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "Break"
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
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "flagName": "STAT_CTRL"
                          },
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "flagName": "Break"
                          }
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking Modifier Instance [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Modifier Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "STAT_CTRL"
                      },
                      {
                        "name": "Modifier Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "Break"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "scope": "TargetEntity",
                      "variableName": "FlopSide",
                      "value": -1
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-823586997\">Enemy_W3_TV_Flop</a>"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Modifier Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "Break"
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
    "3002010_Monster_W3_TV_Ability03_Part02": {
      "fileName": "3002010_Monster_W3_TV_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Define Custom Variable",
          "scope": "TargetEntity",
          "variableName": "AIFlag",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "scope": "TargetEntity",
          "variableName": "FlopSide",
          "value": {
            "operator": "Variables[0] (FlopSide) || INVERT || RETURN",
            "displayLines": "-FlopSide",
            "constants": [],
            "variables": [
              "FlopSide"
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "value": "Theater_Rogue"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "FlopSide",
            "compareType": "=",
            "value2": -1,
            "contextScope": "TargetEntity"
          },
          "passed": [
            {
              "name": "Update Override Controller",
              "controller": "Override2"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-516989914\">MModifier_Monster_W3_TV_Side1</a>[<span class=\"descriptionNumberColor\">Surprise Channel</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-533767533\">MModifier_Monster_W3_TV_Side2</a>[<span class=\"descriptionNumberColor\">Fright Channel</span>]"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "3002010_Monster_W3_TV_Ability03_Part01": {
      "fileName": "3002010_Monster_W3_TV_Ability03_Part01",
      "childAbilityList": [
        "3002010_Monster_W3_TV_Ability03_Part01",
        "3002010_Monster_W3_TV_Ability03_Part02",
        "3002010_Monster_W3_TV_Ability03_Camera"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W3_TV_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "3002010_Monster_W3_TV_Ability02_Part02": {
      "fileName": "3002010_Monster_W3_TV_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
              "displayLines": "{[Skill02[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)v2}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1732782012\">MModifier_Monster_W3_TV_ReduceSPEffect</a>"
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)v2}}"
          },
          "valuePercent": {
            "operator": "Variables[0] ({[Skill02[1]]}) || INVERT || RETURN",
            "displayLines": "-{[Skill02[1]]}",
            "constants": [],
            "variables": [
              "{[Skill02[1]]}"
            ]
          },
          "isFixed": "(Fixed)"
        },
        {
          "name": "UI Display Event (On Entity)",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)v2}}"
          },
          "popUpText": "Energy Reduced",
          "living": true
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "3002010_Monster_W3_TV_Ability02_Part01": {
      "fileName": "3002010_Monster_W3_TV_Ability02_Part01",
      "childAbilityList": [
        "3002010_Monster_W3_TV_Ability02_Part01",
        "3002010_Monster_W3_TV_Ability02_Part02",
        "3002010_Monster_W3_TV_Ability02_Camera"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W3_TV_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "3002010_Monster_W3_TV_Ability01_Part02": {
      "fileName": "3002010_Monster_W3_TV_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "valuePercent": {
            "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
            "displayLines": "{[Skill01[0]]}",
            "constants": [],
            "variables": [
              "{[Skill01[0]]}"
            ]
          },
          "isFixed": "* ERR"
        },
        {
          "name": "UI Display Event (On Entity)",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "popUpText": "Energy Regenerated",
          "living": true
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "3002010_Monster_W3_TV_Ability01_Part01": {
      "fileName": "3002010_Monster_W3_TV_Ability01_Part01",
      "childAbilityList": [
        "3002010_Monster_W3_TV_Ability01_Part01",
        "3002010_Monster_W3_TV_Ability01_Part02",
        "3002010_Monster_W3_TV_Ability01_Camera"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W3_TV_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      },
      "references": []
    }
  }
}