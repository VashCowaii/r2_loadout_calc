const configAbility = {
  "fileName": "BlackSwanv0_BlackSwan_PassiveAbility01",
  "childAbilityList": [
    "BlackSwanv0_BlackSwan_PassiveAbility01"
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
      "modifier": "<a class=\"gModGreen\" id=\"-1065923980\">M_BlackSwan_P01_ListenAddPoison</a>"
    },
    {
      "name": "Define Custom Variable",
      "scope": "ContextCaster",
      "value": {
        "displayLines": "50"
      },
      "variableName": "Max_DOT_Layer"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 4
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"600807065\">M_BlackSwan_Eidolon4_Listener</a>"
        }
      ]
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
          "value": {
            "displayLines": "0.5"
          },
          "variableName": "Rank06_Chance"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "1"
          },
          "variableName": "Rank06_Extra_Layer"
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "Rank06_Chance"
        },
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "Rank06_Extra_Layer"
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__600807065\">M_BlackSwan_Eidolon4_Listener</a>",
      "execute": [
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Target Exists",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target 2}}"
                }
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
                      },
                      {
                        "name": "NOT",
                        "conditions": {
                          "name": "Is Part Of Team",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target 2}}"
                          },
                          "team": "Enemy Team"
                        }
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"488421404\">BlackSwan_DOT_Enhance</a>[<span class=\"descriptionNumberColor\">Epiphany</span>]",
                        "justAddedOrActive": true,
                        "includePreDeath": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1409864339\">M_BlackSwan_DOT_Eidolon4_HaveAddedSP</a>",
                        "invertCondition": true,
                        "justAddedOrActive": true,
                        "casterFilter": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "displayLines": "8"
                      },
                      "isFixed": "* ERR"
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
      "for": "<a class=\"gModGreen\" id=\"mod__2022067398\">M_BlackSwan_P01_ListenAddPoison_SubOnEnemy_Part1Mark</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1387323269\">M_BlackSwan_P01_ListenAddPoison_SubOnEnemy_ListenPhase1Mark</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Owner]: Pre-action Phase",
          "priorityLevel": 200,
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2022067398\">M_BlackSwan_P01_ListenAddPoison_SubOnEnemy_Part1Mark</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1560122736\">M_BlackSwan_P01_ListenAddPoison_SubOnEnemy</a>",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "ListenBattleEventSkill"
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
              "modifier": "<a class=\"gModGreen\" id=\"1387323269\">M_BlackSwan_P01_ListenAddPoison_SubOnEnemy_ListenPhase1Mark</a>"
            }
          ]
        },
        {
          "eventTrigger": "Turn [Owner]: Pre-action Phase",
          "priorityLevel": -11,
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2022067398\">M_BlackSwan_P01_ListenAddPoison_SubOnEnemy_Part1Mark</a>"
            }
          ]
        },
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Current Turn Owner}}"
                        }
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"2022067398\">M_BlackSwan_P01_ListenAddPoison_SubOnEnemy_Part1Mark</a>",
                        "justAddedOrActive": true
                      }
                    ]
                  },
                  {
                    "name": "Attack Type",
                    "attackTypes": [
                      "DOT"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-658722874\">M_BlackSwan_P01_AddDOTFlag</a>"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1065923980\">M_BlackSwan_P01_ListenAddPoison</a>",
      "execute": [
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
                  "modifier": "<a class=\"gModGreen\" id=\"1560122736\">M_BlackSwan_P01_ListenAddPoison_SubOnEnemy</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking Modifier Instance [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"-658722874\">M_BlackSwan_P01_AddDOTFlag</a>"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Random Chance",
                    "chance": {
                      "displayLines": "Rank06_Chance"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(1 + Rank06_Extra_Layer)"
                      },
                      "variableName": "Rank06_Weighted_Stack_Layer"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "1"
                      },
                      "variableName": "Rank06_Weighted_Stack_Layer"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-288826770\">M_BlackSwan_ForbidEffectFlag</a>",
                    "justAddedOrActive": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2037361233\">BlackSwan_DOT</a>[<span class=\"descriptionNumberColor\">Arcana</span>]",
                      "baseChance": {
                        "displayLines": "0.65"
                      },
                      "stackLimit": {
                        "displayLines": "Max_DOT_Layer"
                      },
                      "valuePerStack": {
                        "Basic_DamagePercentage": {
                          "displayLines": "2.4"
                        },
                        "ExtraLayer_DamagePercentage": {
                          "displayLines": "0.12"
                        },
                        "SecondLayer": {
                          "displayLines": "3"
                        },
                        "Spread_DamagePercentage": {
                          "displayLines": "1.8"
                        },
                        "ThirdLayer": {
                          "displayLines": "7"
                        },
                        "DefenceIgnore": {
                          "displayLines": "0.2"
                        },
                        "Cast_By_Level": 0
                      },
                      "addStacksPerTrigger": {
                        "displayLines": "Rank06_Weighted_Stack_Layer"
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2037361233\">BlackSwan_DOT</a>[<span class=\"descriptionNumberColor\">Arcana</span>]",
                      "baseChance": {
                        "displayLines": "0.65"
                      },
                      "stackLimit": {
                        "displayLines": "Max_DOT_Layer"
                      },
                      "valuePerStack": {
                        "Basic_DamagePercentage": {
                          "displayLines": "2.4"
                        },
                        "ExtraLayer_DamagePercentage": {
                          "displayLines": "0.12"
                        },
                        "SecondLayer": {
                          "displayLines": "3"
                        },
                        "Spread_DamagePercentage": {
                          "displayLines": "1.8"
                        },
                        "ThirdLayer": {
                          "displayLines": "7"
                        },
                        "DefenceIgnore": {
                          "displayLines": "0.2"
                        },
                        "Cast_By_Level": 0
                      },
                      "addStacksPerTrigger": {
                        "displayLines": "Rank06_Weighted_Stack_Layer"
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
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  }
}