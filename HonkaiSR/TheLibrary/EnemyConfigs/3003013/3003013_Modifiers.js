const configAbility = {
  "fileName": "3003013_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__1710207042\">W3_Dinosaur_BattleScore1</a>",
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
              "variableName": "Dinosaur_KillCount"
            }
          ]
        },
        {
          "eventTrigger": "Got a Kill [Owner]",
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
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "Dinosaur_KillCount",
                  "value": 1,
                  "max": 2
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Dinosaur_KillCount",
                    "compareType": ">=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "relatedAchievements": [
                        {
                          "title": "Good Night Kitchen",
                          "desc": "Defeat at least 2 enemies using \"Kitchen Mishap\" from Dreamjolt Troupe's Beyond Overcooked in a single battle",
                          "rarity": "Low"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1775080957\">MModifier_Monster_W3_Dinosaur_Effect_Smoke3</a>",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-2093476766\">MModifier_Monster_W3_Dinosaur_Effect_Fire3</a>",
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
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "flagName": "STAT_CTRL_Frozen"
              },
              "passed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2076699147\">MModifier_Monster_W3_Dinosaur_Effect_Fire2</a>",
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
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "flagName": "STAT_CTRL_Frozen"
              },
              "passed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2127032004\">MModifier_Monster_W3_Dinosaur_Effect_Fire1</a>",
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
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "flagName": "STAT_CTRL_Frozen"
              },
              "passed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1125933732\">MModifier_Monster_W3_Dinosaur_Break_Listener_RL</a>",
      "execute": [
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-286852615\">MModifier_Monster_W3_Dinosaur_DOT_Listener</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-689930966\">MModifier_Monster_W3_Dinosaur_Attack_Listener</a>"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "Vibrate_Count"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "Crazy_Flag"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"308728299\">MModifier_Monster_W3_Dinosaur_AttackUpRatio</a>[<span class=\"descriptionNumberColor\">Stove Heating</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"308728299\">MModifier_Monster_W3_Dinosaur_AttackUpRatio</a>[<span class=\"descriptionNumberColor\">Stove Heating</span>]"
            },
            {
              "name": "Update Displayed Energy Bar",
              "entityClass": "Enemy",
              "assignState": "False"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2127032004\">MModifier_Monster_W3_Dinosaur_Effect_Fire1</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2076699147\">MModifier_Monster_W3_Dinosaur_Effect_Fire2</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2093476766\">MModifier_Monster_W3_Dinosaur_Effect_Fire3</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1775080957\">MModifier_Monster_W3_Dinosaur_Effect_Smoke3</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1583693402\">MModifier_Monster_W3_Dinosaur_Calm</a>[<span class=\"descriptionNumberColor\">Simmer</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1287806639\">MModifier_Monster_W3_Dinosaur_Fury</a>[<span class=\"descriptionNumberColor\">Boil</span>]"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                }
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1364752860\">W1_Mecha02_AttackBonus_Effect</a>"
            }
          ]
        },
        {
          "eventTrigger": "Toughness Reset [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-689930966\">MModifier_Monster_W3_Dinosaur_Attack_Listener</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-286852615\">MModifier_Monster_W3_Dinosaur_DOT_Listener</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"237937646\">MModifier_Monster_W3_Dinosaur_MonsterEnergyBar</a>",
              "valuePerStack": {
                "MDF_MaxCount": {
                  "operator": "Variables[0] (UnusedUnderThisBase_9585) || RETURN",
                  "displayLines": "UnusedUnderThisBase_9585",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_9585"
                  ]
                },
                "MDF_PartFlag": 0
              }
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "AIFlag",
              "value": 1
            }
          ]
        },
        {
          "eventTrigger": "When Losing Modifier [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "flagName": "STAT_CTRL_Frozen",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Crazy_Flag",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2127032004\">MModifier_Monster_W3_Dinosaur_Effect_Fire1</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2076699147\">MModifier_Monster_W3_Dinosaur_Effect_Fire2</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2093476766\">MModifier_Monster_W3_Dinosaur_Effect_Fire3</a>"
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "Vibrate_Count",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (UnusedUnderThisBase_9585) || Constants[0] (3) || DIV || Constants[1] (2) || MUL || RETURN",
                          "displayLines": "((UnusedUnderThisBase_9585 / 3) * 2)",
                          "constants": [
                            3,
                            2
                          ],
                          "variables": [
                            "UnusedUnderThisBase_9585"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-2127032004\">MModifier_Monster_W3_Dinosaur_Effect_Fire1</a>"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-2076699147\">MModifier_Monster_W3_Dinosaur_Effect_Fire2</a>"
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "Vibrate_Count",
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] (UnusedUnderThisBase_9585) || Constants[0] (3) || DIV || RETURN",
                              "displayLines": "(UnusedUnderThisBase_9585 / 3)",
                              "constants": [
                                3
                              ],
                              "variables": [
                                "UnusedUnderThisBase_9585"
                              ]
                            }
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-2127032004\">MModifier_Monster_W3_Dinosaur_Effect_Fire1</a>"
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
          "eventTrigger": "When Stacking Modifier Instance [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Has Flag",
                "flagName": "STAT_CTRL_Frozen"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2127032004\">MModifier_Monster_W3_Dinosaur_Effect_Fire1</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2076699147\">MModifier_Monster_W3_Dinosaur_Effect_Fire2</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2093476766\">MModifier_Monster_W3_Dinosaur_Effect_Fire3</a>"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__578972033\">MModifier_Monster_W3_Dinosaur_Break_Listener</a>",
      "execute": [
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "Vibrate_Count",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (UnusedUnderThisBase_9587) || Constants[0] (1) || SUB || RETURN",
                      "displayLines": "(UnusedUnderThisBase_9587 - 1)",
                      "constants": [
                        1
                      ],
                      "variables": [
                        "UnusedUnderThisBase_9587"
                      ]
                    }
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "Crazy_Flag",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              "failed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-286852615\">MModifier_Monster_W3_Dinosaur_DOT_Listener</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-689930966\">MModifier_Monster_W3_Dinosaur_Attack_Listener</a>"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Vibrate_Count"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Crazy_Flag"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"308728299\">MModifier_Monster_W3_Dinosaur_AttackUpRatio</a>[<span class=\"descriptionNumberColor\">Stove Heating</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"308728299\">MModifier_Monster_W3_Dinosaur_AttackUpRatio</a>[<span class=\"descriptionNumberColor\">Stove Heating</span>]"
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "entityClass": "Enemy",
                  "assignState": "False"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2127032004\">MModifier_Monster_W3_Dinosaur_Effect_Fire1</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2076699147\">MModifier_Monster_W3_Dinosaur_Effect_Fire2</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2093476766\">MModifier_Monster_W3_Dinosaur_Effect_Fire3</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1775080957\">MModifier_Monster_W3_Dinosaur_Effect_Smoke3</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1583693402\">MModifier_Monster_W3_Dinosaur_Calm</a>[<span class=\"descriptionNumberColor\">Simmer</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1287806639\">MModifier_Monster_W3_Dinosaur_Fury</a>[<span class=\"descriptionNumberColor\">Boil</span>]"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1364752860\">W1_Mecha02_AttackBonus_Effect</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Toughness Reset [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-689930966\">MModifier_Monster_W3_Dinosaur_Attack_Listener</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-286852615\">MModifier_Monster_W3_Dinosaur_DOT_Listener</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"237937646\">MModifier_Monster_W3_Dinosaur_MonsterEnergyBar</a>",
              "valuePerStack": {
                "MDF_MaxCount": {
                  "operator": "Variables[0] (UnusedUnderThisBase_9585) || RETURN",
                  "displayLines": "UnusedUnderThisBase_9585",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_9585"
                  ]
                },
                "MDF_PartFlag": 0
              }
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "AIFlag",
              "value": 1
            }
          ]
        },
        {
          "eventTrigger": "When Losing Modifier [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "flagName": "STAT_CTRL_Frozen",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Crazy_Flag",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2127032004\">MModifier_Monster_W3_Dinosaur_Effect_Fire1</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2076699147\">MModifier_Monster_W3_Dinosaur_Effect_Fire2</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2093476766\">MModifier_Monster_W3_Dinosaur_Effect_Fire3</a>"
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "Vibrate_Count",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (UnusedUnderThisBase_9585) || Constants[0] (3) || DIV || Constants[1] (2) || MUL || RETURN",
                          "displayLines": "((UnusedUnderThisBase_9585 / 3) * 2)",
                          "constants": [
                            3,
                            2
                          ],
                          "variables": [
                            "UnusedUnderThisBase_9585"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-2127032004\">MModifier_Monster_W3_Dinosaur_Effect_Fire1</a>"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-2076699147\">MModifier_Monster_W3_Dinosaur_Effect_Fire2</a>"
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "Vibrate_Count",
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] (UnusedUnderThisBase_9585) || Constants[0] (3) || DIV || RETURN",
                              "displayLines": "(UnusedUnderThisBase_9585 / 3)",
                              "constants": [
                                3
                              ],
                              "variables": [
                                "UnusedUnderThisBase_9585"
                              ]
                            }
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-2127032004\">MModifier_Monster_W3_Dinosaur_Effect_Fire1</a>"
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
          "eventTrigger": "When Stacking Modifier Instance [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Has Flag",
                "flagName": "STAT_CTRL_Frozen"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2127032004\">MModifier_Monster_W3_Dinosaur_Effect_Fire1</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2076699147\">MModifier_Monster_W3_Dinosaur_Effect_Fire2</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2093476766\">MModifier_Monster_W3_Dinosaur_Effect_Fire3</a>"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-689930966\">MModifier_Monster_W3_Dinosaur_Attack_Listener</a>",
      "latentQueue": [
        "Crazy_Flag"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "Vibrate_Count"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1583693402\">MModifier_Monster_W3_Dinosaur_Calm</a>[<span class=\"descriptionNumberColor\">Simmer</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"237937646\">MModifier_Monster_W3_Dinosaur_MonsterEnergyBar</a>",
              "valuePerStack": {
                "MDF_MaxCount": {
                  "operator": "Variables[0] (UnusedUnderThisBase_9585) || RETURN",
                  "displayLines": "UnusedUnderThisBase_9585",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_9585"
                  ]
                },
                "MDF_PartFlag": 0
              }
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                }
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Crazy_Flag",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "Vibrate_Count",
                      "context": "TargetEntity",
                      "value": 1,
                      "max": {
                        "operator": "Variables[0] (UnusedUnderThisBase_9585) || RETURN",
                        "displayLines": "UnusedUnderThisBase_9585",
                        "constants": [],
                        "variables": [
                          "UnusedUnderThisBase_9585"
                        ]
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"308728299\">MModifier_Monster_W3_Dinosaur_AttackUpRatio</a>[<span class=\"descriptionNumberColor\">Stove Heating</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (UnusedUnderThisBase_9585) || RETURN",
                        "displayLines": "UnusedUnderThisBase_9585",
                        "constants": [],
                        "variables": [
                          "UnusedUnderThisBase_9585"
                        ]
                      },
                      "valuePerStack": {
                        "Modifier_AttackUp_AttackUpLayer": {
                          "operator": "Variables[0] (Vibrate_Count) || RETURN",
                          "displayLines": "Vibrate_Count",
                          "constants": [],
                          "variables": [
                            "Vibrate_Count"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"237937646\">MModifier_Monster_W3_Dinosaur_MonsterEnergyBar</a>",
                      "valuePerStack": {
                        "MDF_MaxCount": {
                          "operator": "Variables[0] (UnusedUnderThisBase_9585) || RETURN",
                          "displayLines": "UnusedUnderThisBase_9585",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_9585"
                          ]
                        },
                        "MDF_PartFlag": 0
                      }
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
                            "value1": "Vibrate_Count",
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] (UnusedUnderThisBase_9585) || Constants[0] (3) || DIV || RETURN",
                              "displayLines": "(UnusedUnderThisBase_9585 / 3)",
                              "constants": [
                                3
                              ],
                              "variables": [
                                "UnusedUnderThisBase_9585"
                              ]
                            },
                            "contextScope": "TargetEntity"
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-2127032004\">MModifier_Monster_W3_Dinosaur_Effect_Fire1</a>",
                            "invertCondition": true
                          },
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "flagName": "STAT_CTRL_Frozen",
                            "invertCondition": true
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
                          "modifier": "<a class=\"gModGreen\" id=\"-2127032004\">MModifier_Monster_W3_Dinosaur_Effect_Fire1</a>"
                        }
                      ]
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
                            "value1": "Vibrate_Count",
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] (UnusedUnderThisBase_9585) || Constants[0] (3) || DIV || Constants[1] (2) || MUL || RETURN",
                              "displayLines": "((UnusedUnderThisBase_9585 / 3) * 2)",
                              "constants": [
                                3,
                                2
                              ],
                              "variables": [
                                "UnusedUnderThisBase_9585"
                              ]
                            },
                            "contextScope": "TargetEntity"
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-2076699147\">MModifier_Monster_W3_Dinosaur_Effect_Fire2</a>",
                            "invertCondition": true
                          },
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "flagName": "STAT_CTRL_Frozen",
                            "invertCondition": true
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
                          "modifier": "<a class=\"gModGreen\" id=\"-2076699147\">MModifier_Monster_W3_Dinosaur_Effect_Fire2</a>"
                        }
                      ]
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
                            "value1": "Vibrate_Count",
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] (UnusedUnderThisBase_9585) || RETURN",
                              "displayLines": "UnusedUnderThisBase_9585",
                              "constants": [],
                              "variables": [
                                "UnusedUnderThisBase_9585"
                              ]
                            },
                            "contextScope": "TargetEntity"
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-2093476766\">MModifier_Monster_W3_Dinosaur_Effect_Fire3</a>",
                            "invertCondition": true
                          },
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "flagName": "STAT_CTRL_Frozen",
                            "invertCondition": true
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
                          "modifier": "<a class=\"gModGreen\" id=\"-2093476766\">MModifier_Monster_W3_Dinosaur_Effect_Fire3</a>"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "Vibrate_Count",
                        "compareType": "=",
                        "value2": {
                          "operator": "Variables[0] (UnusedUnderThisBase_9585) || RETURN",
                          "displayLines": "UnusedUnderThisBase_9585",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_9585"
                          ]
                        },
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Remove Modifier Behavior Flag(s)",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "flagNames": []
                        },
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertUnusedCount",
                            "typeValue": 1
                          },
                          "conditionActive": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Has Flag",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "flagName": "STAT_CTRL",
                                "invertCondition": true
                              },
                              {
                                "name": "Has Flag",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "flagName": "Break",
                                "invertCondition": true
                              }
                            ]
                          },
                          "abilityName": "Monster_W3_Dinosaur_Ability06_Insert_Part01",
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "priorityTag": "EnemyChangeState",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "abortFlags": [
                            "STAT_CTRL",
                            "Break"
                          ],
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 5
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 7
                          }
                        ]
                      },
                      "failed": [
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "variableName": "Vibrate_Count",
                          "context": "TargetEntity",
                          "value": 1,
                          "max": {
                            "operator": "Variables[0] (UnusedUnderThisBase_9587) || RETURN",
                            "displayLines": "UnusedUnderThisBase_9587",
                            "constants": [],
                            "variables": [
                              "UnusedUnderThisBase_9587"
                            ]
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"308728299\">MModifier_Monster_W3_Dinosaur_AttackUpRatio</a>[<span class=\"descriptionNumberColor\">Stove Heating</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] (UnusedUnderThisBase_9587) || RETURN",
                            "displayLines": "UnusedUnderThisBase_9587",
                            "constants": [],
                            "variables": [
                              "UnusedUnderThisBase_9587"
                            ]
                          },
                          "valuePerStack": {
                            "Modifier_AttackUp_AttackUpLayer": {
                              "operator": "Variables[0] (Vibrate_Count) || RETURN",
                              "displayLines": "Vibrate_Count",
                              "constants": [],
                              "variables": [
                                "Vibrate_Count"
                              ]
                            }
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"237937646\">MModifier_Monster_W3_Dinosaur_MonsterEnergyBar</a>",
                          "valuePerStack": {
                            "MDF_MaxCount": {
                              "operator": "Variables[0] (UnusedUnderThisBase_9587) || RETURN",
                              "displayLines": "UnusedUnderThisBase_9587",
                              "constants": [],
                              "variables": [
                                "UnusedUnderThisBase_9587"
                              ]
                            },
                            "MDF_PartFlag": 1
                          }
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
                                "value1": "Vibrate_Count",
                                "compareType": ">=",
                                "value2": {
                                  "operator": "Variables[0] (UnusedUnderThisBase_9587) || RETURN",
                                  "displayLines": "UnusedUnderThisBase_9587",
                                  "constants": [],
                                  "variables": [
                                    "UnusedUnderThisBase_9587"
                                  ]
                                },
                                "contextScope": "TargetEntity"
                              },
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-1775080957\">MModifier_Monster_W3_Dinosaur_Effect_Smoke3</a>",
                                "invertCondition": true
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
                              "modifier": "<a class=\"gModGreen\" id=\"-1775080957\">MModifier_Monster_W3_Dinosaur_Effect_Smoke3</a>"
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Compare: Variable",
                                "value1": "Vibrate_Count",
                                "compareType": "=",
                                "value2": {
                                  "operator": "Variables[0] (UnusedUnderThisBase_9587) || RETURN",
                                  "displayLines": "UnusedUnderThisBase_9587",
                                  "constants": [],
                                  "variables": [
                                    "UnusedUnderThisBase_9587"
                                  ]
                                },
                                "contextScope": "TargetEntity"
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Remove Modifier Behavior Flag(s)",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "flagNames": []
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-23950311\">MModifier_Monster_W3_Dinosaur_ATMark</a>"
                              },
                              "passed": [
                                {
                                  "name": "Inject Ability Use",
                                  "condition": {
                                    "name": "Insert Ability Condition",
                                    "type": "AbilityOwnerInsertUnusedCount",
                                    "typeValue": 1
                                  },
                                  "abilityName": "Monster_W3_Dinosaur_Ability05_ActivityTelevision_Insert_Part01",
                                  "abilityTarget": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "priorityTag": "EnemyChangeState",
                                  "canHitNonTargets": true,
                                  "showInActionOrder": true,
                                  "allowAbilityTriggers": false
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Inject Ability Use",
                                  "condition": {
                                    "name": "Insert Ability Condition",
                                    "type": "AbilityOwnerInsertUnusedCount",
                                    "typeValue": 1
                                  },
                                  "abilityName": "Monster_W3_Dinosaur_Ability05_Insert_Part01",
                                  "abilityTarget": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "priorityTag": "EnemyChangeState",
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
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-286852615\">MModifier_Monster_W3_Dinosaur_DOT_Listener</a>",
      "latentQueue": [
        "Crazy_Flag"
      ],
      "execute": [
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "DOT"
                ],
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Crazy_Flag",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "Vibrate_Count",
                      "context": "TargetEntity",
                      "value": 1,
                      "max": {
                        "operator": "Variables[0] (UnusedUnderThisBase_9585) || RETURN",
                        "displayLines": "UnusedUnderThisBase_9585",
                        "constants": [],
                        "variables": [
                          "UnusedUnderThisBase_9585"
                        ]
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"308728299\">MModifier_Monster_W3_Dinosaur_AttackUpRatio</a>[<span class=\"descriptionNumberColor\">Stove Heating</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (UnusedUnderThisBase_9585) || RETURN",
                        "displayLines": "UnusedUnderThisBase_9585",
                        "constants": [],
                        "variables": [
                          "UnusedUnderThisBase_9585"
                        ]
                      },
                      "valuePerStack": {
                        "Modifier_AttackUp_AttackUpLayer": {
                          "operator": "Variables[0] (Vibrate_Count) || RETURN",
                          "displayLines": "Vibrate_Count",
                          "constants": [],
                          "variables": [
                            "Vibrate_Count"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"237937646\">MModifier_Monster_W3_Dinosaur_MonsterEnergyBar</a>",
                      "valuePerStack": {
                        "MDF_MaxCount": {
                          "operator": "Variables[0] (UnusedUnderThisBase_9585) || RETURN",
                          "displayLines": "UnusedUnderThisBase_9585",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_9585"
                          ]
                        },
                        "MDF_PartFlag": 0
                      }
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
                            "value1": "Vibrate_Count",
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] (UnusedUnderThisBase_9585) || Constants[0] (3) || DIV || RETURN",
                              "displayLines": "(UnusedUnderThisBase_9585 / 3)",
                              "constants": [
                                3
                              ],
                              "variables": [
                                "UnusedUnderThisBase_9585"
                              ]
                            },
                            "contextScope": "TargetEntity"
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-2127032004\">MModifier_Monster_W3_Dinosaur_Effect_Fire1</a>",
                            "invertCondition": true
                          },
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "flagName": "STAT_CTRL_Frozen",
                            "invertCondition": true
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
                          "modifier": "<a class=\"gModGreen\" id=\"-2127032004\">MModifier_Monster_W3_Dinosaur_Effect_Fire1</a>"
                        }
                      ]
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
                            "value1": "Vibrate_Count",
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] (UnusedUnderThisBase_9585) || Constants[0] (3) || DIV || Constants[1] (2) || MUL || RETURN",
                              "displayLines": "((UnusedUnderThisBase_9585 / 3) * 2)",
                              "constants": [
                                3,
                                2
                              ],
                              "variables": [
                                "UnusedUnderThisBase_9585"
                              ]
                            },
                            "contextScope": "TargetEntity"
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-2076699147\">MModifier_Monster_W3_Dinosaur_Effect_Fire2</a>",
                            "invertCondition": true
                          },
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "flagName": "STAT_CTRL_Frozen",
                            "invertCondition": true
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
                          "modifier": "<a class=\"gModGreen\" id=\"-2076699147\">MModifier_Monster_W3_Dinosaur_Effect_Fire2</a>"
                        }
                      ]
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
                            "value1": "Vibrate_Count",
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] (UnusedUnderThisBase_9585) || RETURN",
                              "displayLines": "UnusedUnderThisBase_9585",
                              "constants": [],
                              "variables": [
                                "UnusedUnderThisBase_9585"
                              ]
                            },
                            "contextScope": "TargetEntity"
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-2093476766\">MModifier_Monster_W3_Dinosaur_Effect_Fire3</a>",
                            "invertCondition": true
                          },
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "flagName": "STAT_CTRL_Frozen",
                            "invertCondition": true
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
                          "modifier": "<a class=\"gModGreen\" id=\"-2093476766\">MModifier_Monster_W3_Dinosaur_Effect_Fire3</a>"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "Vibrate_Count",
                        "compareType": "=",
                        "value2": {
                          "operator": "Variables[0] (UnusedUnderThisBase_9585) || RETURN",
                          "displayLines": "UnusedUnderThisBase_9585",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_9585"
                          ]
                        },
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Remove Modifier Behavior Flag(s)",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "flagNames": []
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Current Action Holder Is",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            }
                          },
                          "passed": [
                            {
                              "name": "Declare Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "scope": "TargetEntity",
                              "variableName": "AIFlag",
                              "value": 7
                            }
                          ],
                          "failed": [
                            {
                              "name": "Inject Ability Use",
                              "condition": {
                                "name": "Insert Ability Condition",
                                "type": "AbilityOwnerInsertUnusedCount",
                                "typeValue": 1
                              },
                              "conditionActive": {
                                "name": "AND",
                                "conditionList": [
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Modifier Holder}}"
                                    },
                                    "flagName": "STAT_CTRL",
                                    "invertCondition": true
                                  },
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Modifier Holder}}"
                                    },
                                    "flagName": "Break",
                                    "invertCondition": true
                                  }
                                ]
                              },
                              "abilityName": "Monster_W3_Dinosaur_Ability06_Insert_Part01",
                              "abilityTarget": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "priorityTag": "EnemyChangeState",
                              "canHitNonTargets": true,
                              "showInActionOrder": true,
                              "abortFlags": [
                                "STAT_CTRL",
                                "Break"
                              ],
                              "allowAbilityTriggers": false
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 5
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 7
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "Vibrate_Count",
                            "compareType": "=",
                            "value2": {
                              "operator": "Variables[0] (UnusedUnderThisBase_9587) || RETURN",
                              "displayLines": "UnusedUnderThisBase_9587",
                              "constants": [],
                              "variables": [
                                "UnusedUnderThisBase_9587"
                              ]
                            },
                            "contextScope": "TargetEntity"
                          }
                        ]
                      },
                      "failed": [
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "variableName": "Vibrate_Count",
                          "context": "TargetEntity",
                          "value": 1,
                          "max": {
                            "operator": "Variables[0] (UnusedUnderThisBase_9587) || RETURN",
                            "displayLines": "UnusedUnderThisBase_9587",
                            "constants": [],
                            "variables": [
                              "UnusedUnderThisBase_9587"
                            ]
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"308728299\">MModifier_Monster_W3_Dinosaur_AttackUpRatio</a>[<span class=\"descriptionNumberColor\">Stove Heating</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] (UnusedUnderThisBase_9587) || RETURN",
                            "displayLines": "UnusedUnderThisBase_9587",
                            "constants": [],
                            "variables": [
                              "UnusedUnderThisBase_9587"
                            ]
                          },
                          "valuePerStack": {
                            "Modifier_AttackUp_AttackUpLayer": {
                              "operator": "Variables[0] (Vibrate_Count) || RETURN",
                              "displayLines": "Vibrate_Count",
                              "constants": [],
                              "variables": [
                                "Vibrate_Count"
                              ]
                            }
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"237937646\">MModifier_Monster_W3_Dinosaur_MonsterEnergyBar</a>",
                          "valuePerStack": {
                            "MDF_MaxCount": {
                              "operator": "Variables[0] (UnusedUnderThisBase_9587) || RETURN",
                              "displayLines": "UnusedUnderThisBase_9587",
                              "constants": [],
                              "variables": [
                                "UnusedUnderThisBase_9587"
                              ]
                            },
                            "MDF_PartFlag": 1
                          }
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
                                "value1": "Vibrate_Count",
                                "compareType": ">=",
                                "value2": {
                                  "operator": "Variables[0] (UnusedUnderThisBase_9587) || RETURN",
                                  "displayLines": "UnusedUnderThisBase_9587",
                                  "constants": [],
                                  "variables": [
                                    "UnusedUnderThisBase_9587"
                                  ]
                                },
                                "contextScope": "TargetEntity"
                              },
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-1775080957\">MModifier_Monster_W3_Dinosaur_Effect_Smoke3</a>",
                                "invertCondition": true
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
                              "modifier": "<a class=\"gModGreen\" id=\"-1775080957\">MModifier_Monster_W3_Dinosaur_Effect_Smoke3</a>"
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Compare: Variable",
                                "value1": "Vibrate_Count",
                                "compareType": "=",
                                "value2": {
                                  "operator": "Variables[0] (UnusedUnderThisBase_9587) || RETURN",
                                  "displayLines": "UnusedUnderThisBase_9587",
                                  "constants": [],
                                  "variables": [
                                    "UnusedUnderThisBase_9587"
                                  ]
                                },
                                "contextScope": "TargetEntity"
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Remove Modifier Behavior Flag(s)",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "flagNames": []
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Current Action Holder Is",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                }
                              },
                              "passed": [
                                {
                                  "name": "Declare Custom Variable",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "scope": "TargetEntity",
                                  "variableName": "AIFlag",
                                  "value": 6
                                }
                              ],
                              "failed": [
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Has Modifier",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Modifier Holder}}"
                                    },
                                    "modifier": "<a class=\"gModGreen\" id=\"-23950311\">MModifier_Monster_W3_Dinosaur_ATMark</a>"
                                  },
                                  "passed": [
                                    {
                                      "name": "Inject Ability Use",
                                      "condition": {
                                        "name": "Insert Ability Condition",
                                        "type": "AbilityOwnerInsertUnusedCount",
                                        "typeValue": 1
                                      },
                                      "abilityName": "Monster_W3_Dinosaur_Ability05_ActivityTelevision_Insert_Part01",
                                      "abilityTarget": {
                                        "name": "Target Name",
                                        "target": "{{Modifier Holder}}"
                                      },
                                      "priorityTag": "EnemyChangeState",
                                      "canHitNonTargets": true,
                                      "showInActionOrder": true,
                                      "allowAbilityTriggers": false
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Inject Ability Use",
                                      "condition": {
                                        "name": "Insert Ability Condition",
                                        "type": "AbilityOwnerInsertUnusedCount",
                                        "typeValue": 1
                                      },
                                      "abilityName": "Monster_W3_Dinosaur_Ability05_Insert_Part01",
                                      "abilityTarget": {
                                        "name": "Target Name",
                                        "target": "{{Modifier Holder}}"
                                      },
                                      "priorityTag": "EnemyChangeState",
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
      "for": "<a class=\"gModGreen\" id=\"mod__1193792195\">MModifier_Monster_W3_Dinosaur_RLElite_SpeedUp</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_SpeedUp"
      ],
      "description": "Increase SPD by<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "SPD Boost",
      "statusName": "SPD Boost",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                "displayLines": "MDF_PropertyValue",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__255894171\">MModifier_Monster_W3_Dinosaur_RLElite_SpeedUpListener</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier is Added [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"-1287806639\">MModifier_Monster_W3_Dinosaur_Fury</a>[<span class=\"descriptionNumberColor\">Boil</span>]"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1193792195\">MModifier_Monster_W3_Dinosaur_RLElite_SpeedUp</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (UnusedUnderThisBase_9582) || RETURN",
                      "displayLines": "UnusedUnderThisBase_9582",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_9582"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Losing Modifier [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"-1287806639\">MModifier_Monster_W3_Dinosaur_Fury</a>[<span class=\"descriptionNumberColor\">Boil</span>]"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1193792195\">MModifier_Monster_W3_Dinosaur_RLElite_SpeedUp</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1287806639\">MModifier_Monster_W3_Dinosaur_Fury</a>[<span class=\"descriptionNumberColor\">Boil</span>]",
      "description": "When this unit is attacked or takes DoT, gain 1 stack of Stove Heating.",
      "type": "Other",
      "statusName": "Boil"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1583693402\">MModifier_Monster_W3_Dinosaur_Calm</a>[<span class=\"descriptionNumberColor\">Simmer</span>]",
      "latentQueue": [
        "Crazy_Flag"
      ],
      "description": "When this unit is attacked or takes DoT, gain 1 stack of Stove Heating.",
      "type": "Other",
      "statusName": "Simmer"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__237937646\">MModifier_Monster_W3_Dinosaur_MonsterEnergyBar</a>",
      "stackType": "ReplaceByCaster",
      "stackData": [
        "MDF_MaxCount",
        "MDF_PhaseFlag"
      ],
      "latentQueue": [
        "Crazy_Flag",
        "AIFlag"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "MDF_PhaseFlag",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (Vibrate_Count) || RETURN",
                    "displayLines": "Vibrate_Count",
                    "constants": [],
                    "variables": [
                      "Vibrate_Count"
                    ]
                  },
                  "entityClass": "Enemy",
                  "maximum": {
                    "operator": "Variables[0] (MDF_MaxCount) || RETURN",
                    "displayLines": "MDF_MaxCount",
                    "constants": [],
                    "variables": [
                      "MDF_MaxCount"
                    ]
                  },
                  "assignState": "True",
                  "state": "Normal"
                }
              ],
              "failed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (Vibrate_Count) || RETURN",
                    "displayLines": "Vibrate_Count",
                    "constants": [],
                    "variables": [
                      "Vibrate_Count"
                    ]
                  },
                  "entityClass": "Enemy",
                  "maximum": {
                    "operator": "Variables[0] (MDF_MaxCount) || RETURN",
                    "displayLines": "MDF_MaxCount",
                    "constants": [],
                    "variables": [
                      "MDF_MaxCount"
                    ]
                  },
                  "assignState": "True",
                  "state": "Active"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-992878048\">MModifier_Monster_W3_Dinosaur_OverHit</a>[<span class=\"descriptionNumberColor\">Stove Overheating</span>]",
      "stackType": "ReplaceByCaster",
      "description": "<span class=\"descriptionNumberColor\">MDF_OverHitLayer</span> stack(s) of Stove Overheating has been applied.",
      "type": "Other",
      "effectName": "Stove Overheating",
      "statusName": "Stove Overheating",
      "addStacksPerTrigger": 1,
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__308728299\">MModifier_Monster_W3_Dinosaur_AttackUpRatio</a>[<span class=\"descriptionNumberColor\">Stove Heating</span>]",
      "stackType": "ReplaceByCaster",
      "stackData": [
        "Modifier_AttackUp_AttackUpLayer"
      ],
      "latentQueue": [
        "Crazy_Flag",
        "AIFlag"
      ],
      "description": "<span class=\"descriptionNumberColor\">Modifier_AttackUp_AttackUpLayer</span> stack(s) of Stove Heating has been applied.",
      "type": "Other",
      "effectName": "Stove Heating",
      "statusName": "Stove Heating",
      "addStacksPerTrigger": 1,
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_PropertyValue",
              "value": {
                "operator": "Variables[0] ({[PassiveSkillInitiate[0]]}) || RETURN",
                "displayLines": "{[PassiveSkillInitiate[0]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkillInitiate[0]]}"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1761981801\">MModifier_Monster_W3_Dinosaur_SpeedDownRatio</a>[<span class=\"descriptionNumberColor\">Slow</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_SpeedDown"
      ],
      "stackData": [
        "MDF_PropertyValue"
      ],
      "description": "Decreases SPD by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Debuff",
      "effectName": "Slow",
      "statusName": "Slow",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "value": {
                "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                "displayLines": "(0 - MDF_PropertyValue)",
                "constants": [
                  0
                ],
                "variables": [
                  "MDF_PropertyValue"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__244013415\">MModifier_Monster_W3_Dinosaur_ExplodeMark</a>",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-323083725\">MModifier_Monster_W3_Dinosaur_02_Break_Listener</a>",
      "execute": [
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "Vibrate_Count"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "Crazy_Flag"
            },
            {
              "name": "Update Displayed Energy Bar",
              "entityClass": "Enemy",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "assignState": "False"
            },
            {
              "name": "Define Custom Variable",
              "scope": "TargetEntity",
              "variableName": "FlopSide",
              "value": 1
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"665202517\">MModifier_Monster_W3_TV_02_Side2</a>[<span class=\"descriptionNumberColor\">Classroom Channel</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"614869660\">MModifier_Monster_W3_TV_02_Side1</a>[<span class=\"descriptionNumberColor\">Off-Class Channel</span>]"
            }
          ]
        },
        {
          "eventTrigger": "Toughness Reset [Owner]",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "AIFlag"
            }
          ]
        },
        {
          "eventTrigger": "When Losing Modifier [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "flagName": "STAT_CTRL_Frozen",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Crazy_Flag",
                    "compareType": "=",
                    "value2": 1
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
                "name": "Modifier Has Flag",
                "flagName": "STAT_CTRL_Frozen"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1792784435\">Enemy_W3_Dinosaur_02_AttackRatioUp</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
      "stackType": "ReplaceByCaster",
      "stackData": [
        "MDF_PropertyValue"
      ],
      "description": "Increases ATK by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>. This effect can stack.",
      "type": "Buff",
      "effectName": "ATK Boost",
      "statusName": "ATK Boost",
      "addStacksPerTrigger": 1,
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "MDF_Layer",
              "multiplier": 1
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue) || Variables[1] (MDF_Layer) || MUL || RETURN",
                "displayLines": "(MDF_PropertyValue * MDF_Layer)",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue",
                  "MDF_Layer"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1809911628\">Enemy_W3_Dinosaur_02_Burn</a>[<span class=\"descriptionNumberColor\">Burn</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "modifierFlags": [
        "STAT_DOT",
        "STAT_DOT_Burn"
      ],
      "useEntitySnapshot": true,
      "stackData": [
        "Modifier_Burn_DamagePercentage"
      ],
      "description": "Takes Fire DMG at the beginning of each turn for a certain number of turns.",
      "type": "Debuff",
      "effectName": "Burn",
      "statusName": "Burn",
      "stackLimit": 1,
      "addStacksPerTrigger": 1,
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is NOT in Auto-Battle State"
              }
            }
          ]
        },
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] (Modifier_Burn_DamagePercentage) || Variables[1] (ModifierLayers) || MUL || RETURN",
                  "displayLines": "(Modifier_Burn_DamagePercentage * ModifierLayers)",
                  "constants": [],
                  "variables": [
                    "Modifier_Burn_DamagePercentage",
                    "ModifierLayers"
                  ]
                },
                "DamageExtra": {
                  "operator": "Variables[0] (Modifier_Burn_DamagePercentage_Defence) || RETURN",
                  "displayLines": "Modifier_Burn_DamagePercentage_Defence",
                  "constants": [],
                  "variables": [
                    "Modifier_Burn_DamagePercentage_Defence"
                  ]
                },
                "DamageFlat": {
                  "operator": "Variables[0] (Modifier_Burn_DamageValue) || RETURN",
                  "displayLines": "Modifier_Burn_DamageValue",
                  "constants": [],
                  "variables": [
                    "Modifier_Burn_DamageValue"
                  ]
                },
                "dmgFormulaExtra": "DEF Scaling",
                "Toughness": null,
                "Tags": [
                  "Burn"
                ],
                "attackType": "DOT"
              }
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueType": "Layer",
              "variableName": "ModifierLayers",
              "multiplier": 1
            }
          ]
        },
        {
          "eventTrigger": "Custom Event",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (Modifier_Burn_DamagePercentage) || MUL || Variables[2] (ModifierLayers) || MUL || RETURN",
                  "displayLines": "((DOT_TriggerRatio * Modifier_Burn_DamagePercentage) * ModifierLayers)",
                  "constants": [],
                  "variables": [
                    "DOT_TriggerRatio",
                    "Modifier_Burn_DamagePercentage",
                    "ModifierLayers"
                  ]
                },
                "DamageExtra": {
                  "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (Modifier_Burn_DamagePercentage_Defence) || MUL || RETURN",
                  "displayLines": "(DOT_TriggerRatio * Modifier_Burn_DamagePercentage_Defence)",
                  "constants": [],
                  "variables": [
                    "DOT_TriggerRatio",
                    "Modifier_Burn_DamagePercentage_Defence"
                  ]
                },
                "DamageFlat": {
                  "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (Modifier_Burn_DamageValue) || MUL || RETURN",
                  "displayLines": "(DOT_TriggerRatio * Modifier_Burn_DamageValue)",
                  "constants": [],
                  "variables": [
                    "DOT_TriggerRatio",
                    "Modifier_Burn_DamageValue"
                  ]
                },
                "dmgFormulaExtra": "DEF Scaling",
                "Toughness": null,
                "Tags": [
                  "Burn"
                ],
                "attackType": "DOT"
              }
            }
          ]
        }
      ]
    }
  ],
  "references": []
}