const configAbility = {
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
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-449226911\">Rogue_Scoring_Event_TV_Count_Modifier</a>",
      "stackType": "Replace",
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
      ],
      "stackLimit": 15,
      "addStacksPerTrigger": 1
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
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "Mr. Domescreen can use the \"Startling Broadcast\" ability. After it has been attacked, switches to the Surprise Channel state.",
      "type": "Other",
      "statusName": "Fright Channel"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-516989914\">MModifier_Monster_W3_TV_Side1</a>[<span class=\"descriptionNumberColor\">Surprise Channel</span>]",
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
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "Mr. Domescreen can use the \"Surprise Variety Show\" ability. After it has been attacked, switches to the Fright Channel state.",
      "type": "Other",
      "statusName": "Surprise Channel"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1732782012\">MModifier_Monster_W3_TV_ReduceSPEffect</a>",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1233820232\">MModifier_Monster_W3_TV_ATMark</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": []
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
      ],
      "stackData": [],
      "latentQueue": [
        "FaceChangeFlag"
      ]
    }
  ],
  "references": []
}