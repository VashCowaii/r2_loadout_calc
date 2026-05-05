const configAbility = {
  "fileName": "3003016_Modifiers",
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
                  "operator": "Variables[0] (UnusedUnderThisBase_612) || RETURN",
                  "displayLines": "UnusedUnderThisBase_612",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_612"
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
                          "operator": "Variables[0] (UnusedUnderThisBase_612) || Constants[0] (3) || DIV || Constants[1] (2) || MUL || RETURN",
                          "displayLines": "((UnusedUnderThisBase_612 / 3) * 2)",
                          "constants": [
                            3,
                            2
                          ],
                          "variables": [
                            "UnusedUnderThisBase_612"
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
                              "operator": "Variables[0] (UnusedUnderThisBase_612) || Constants[0] (3) || DIV || RETURN",
                              "displayLines": "(UnusedUnderThisBase_612 / 3)",
                              "constants": [
                                3
                              ],
                              "variables": [
                                "UnusedUnderThisBase_612"
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
                      "operator": "Variables[0] (UnusedUnderThisBase_20) || Constants[0] (1) || SUB || RETURN",
                      "displayLines": "(UnusedUnderThisBase_20 - 1)",
                      "constants": [
                        1
                      ],
                      "variables": [
                        "UnusedUnderThisBase_20"
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
                  "operator": "Variables[0] (UnusedUnderThisBase_612) || RETURN",
                  "displayLines": "UnusedUnderThisBase_612",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_612"
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
                          "operator": "Variables[0] (UnusedUnderThisBase_612) || Constants[0] (3) || DIV || Constants[1] (2) || MUL || RETURN",
                          "displayLines": "((UnusedUnderThisBase_612 / 3) * 2)",
                          "constants": [
                            3,
                            2
                          ],
                          "variables": [
                            "UnusedUnderThisBase_612"
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
                              "operator": "Variables[0] (UnusedUnderThisBase_612) || Constants[0] (3) || DIV || RETURN",
                              "displayLines": "(UnusedUnderThisBase_612 / 3)",
                              "constants": [
                                3
                              ],
                              "variables": [
                                "UnusedUnderThisBase_612"
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
                  "operator": "Variables[0] (UnusedUnderThisBase_612) || RETURN",
                  "displayLines": "UnusedUnderThisBase_612",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_612"
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
                        "operator": "Variables[0] (UnusedUnderThisBase_612) || RETURN",
                        "displayLines": "UnusedUnderThisBase_612",
                        "constants": [],
                        "variables": [
                          "UnusedUnderThisBase_612"
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
                        "operator": "Variables[0] (UnusedUnderThisBase_612) || RETURN",
                        "displayLines": "UnusedUnderThisBase_612",
                        "constants": [],
                        "variables": [
                          "UnusedUnderThisBase_612"
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
                          "operator": "Variables[0] (UnusedUnderThisBase_612) || RETURN",
                          "displayLines": "UnusedUnderThisBase_612",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_612"
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
                              "operator": "Variables[0] (UnusedUnderThisBase_612) || Constants[0] (3) || DIV || RETURN",
                              "displayLines": "(UnusedUnderThisBase_612 / 3)",
                              "constants": [
                                3
                              ],
                              "variables": [
                                "UnusedUnderThisBase_612"
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
                              "operator": "Variables[0] (UnusedUnderThisBase_612) || Constants[0] (3) || DIV || Constants[1] (2) || MUL || RETURN",
                              "displayLines": "((UnusedUnderThisBase_612 / 3) * 2)",
                              "constants": [
                                3,
                                2
                              ],
                              "variables": [
                                "UnusedUnderThisBase_612"
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
                              "operator": "Variables[0] (UnusedUnderThisBase_612) || RETURN",
                              "displayLines": "UnusedUnderThisBase_612",
                              "constants": [],
                              "variables": [
                                "UnusedUnderThisBase_612"
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
                          "operator": "Variables[0] (UnusedUnderThisBase_612) || RETURN",
                          "displayLines": "UnusedUnderThisBase_612",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_612"
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
                            "operator": "Variables[0] (UnusedUnderThisBase_20) || RETURN",
                            "displayLines": "UnusedUnderThisBase_20",
                            "constants": [],
                            "variables": [
                              "UnusedUnderThisBase_20"
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
                            "operator": "Variables[0] (UnusedUnderThisBase_20) || RETURN",
                            "displayLines": "UnusedUnderThisBase_20",
                            "constants": [],
                            "variables": [
                              "UnusedUnderThisBase_20"
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
                              "operator": "Variables[0] (UnusedUnderThisBase_20) || RETURN",
                              "displayLines": "UnusedUnderThisBase_20",
                              "constants": [],
                              "variables": [
                                "UnusedUnderThisBase_20"
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
                                  "operator": "Variables[0] (UnusedUnderThisBase_20) || RETURN",
                                  "displayLines": "UnusedUnderThisBase_20",
                                  "constants": [],
                                  "variables": [
                                    "UnusedUnderThisBase_20"
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
                                  "operator": "Variables[0] (UnusedUnderThisBase_20) || RETURN",
                                  "displayLines": "UnusedUnderThisBase_20",
                                  "constants": [],
                                  "variables": [
                                    "UnusedUnderThisBase_20"
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
                        "operator": "Variables[0] (UnusedUnderThisBase_612) || RETURN",
                        "displayLines": "UnusedUnderThisBase_612",
                        "constants": [],
                        "variables": [
                          "UnusedUnderThisBase_612"
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
                        "operator": "Variables[0] (UnusedUnderThisBase_612) || RETURN",
                        "displayLines": "UnusedUnderThisBase_612",
                        "constants": [],
                        "variables": [
                          "UnusedUnderThisBase_612"
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
                          "operator": "Variables[0] (UnusedUnderThisBase_612) || RETURN",
                          "displayLines": "UnusedUnderThisBase_612",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_612"
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
                              "operator": "Variables[0] (UnusedUnderThisBase_612) || Constants[0] (3) || DIV || RETURN",
                              "displayLines": "(UnusedUnderThisBase_612 / 3)",
                              "constants": [
                                3
                              ],
                              "variables": [
                                "UnusedUnderThisBase_612"
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
                              "operator": "Variables[0] (UnusedUnderThisBase_612) || Constants[0] (3) || DIV || Constants[1] (2) || MUL || RETURN",
                              "displayLines": "((UnusedUnderThisBase_612 / 3) * 2)",
                              "constants": [
                                3,
                                2
                              ],
                              "variables": [
                                "UnusedUnderThisBase_612"
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
                              "operator": "Variables[0] (UnusedUnderThisBase_612) || RETURN",
                              "displayLines": "UnusedUnderThisBase_612",
                              "constants": [],
                              "variables": [
                                "UnusedUnderThisBase_612"
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
                          "operator": "Variables[0] (UnusedUnderThisBase_612) || RETURN",
                          "displayLines": "UnusedUnderThisBase_612",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_612"
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
                              "operator": "Variables[0] (UnusedUnderThisBase_20) || RETURN",
                              "displayLines": "UnusedUnderThisBase_20",
                              "constants": [],
                              "variables": [
                                "UnusedUnderThisBase_20"
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
                            "operator": "Variables[0] (UnusedUnderThisBase_20) || RETURN",
                            "displayLines": "UnusedUnderThisBase_20",
                            "constants": [],
                            "variables": [
                              "UnusedUnderThisBase_20"
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
                            "operator": "Variables[0] (UnusedUnderThisBase_20) || RETURN",
                            "displayLines": "UnusedUnderThisBase_20",
                            "constants": [],
                            "variables": [
                              "UnusedUnderThisBase_20"
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
                              "operator": "Variables[0] (UnusedUnderThisBase_20) || RETURN",
                              "displayLines": "UnusedUnderThisBase_20",
                              "constants": [],
                              "variables": [
                                "UnusedUnderThisBase_20"
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
                                  "operator": "Variables[0] (UnusedUnderThisBase_20) || RETURN",
                                  "displayLines": "UnusedUnderThisBase_20",
                                  "constants": [],
                                  "variables": [
                                    "UnusedUnderThisBase_20"
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
                                  "operator": "Variables[0] (UnusedUnderThisBase_20) || RETURN",
                                  "displayLines": "UnusedUnderThisBase_20",
                                  "constants": [],
                                  "variables": [
                                    "UnusedUnderThisBase_20"
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
                      "operator": "Variables[0] (UnusedUnderThisBase_263) || RETURN",
                      "displayLines": "UnusedUnderThisBase_263",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_263"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-720232452\">MModifier_Monster_W3_Theater_RLBoss_StanceDamage</a>",
      "stackType": "Replace"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1129261000\">MModifier_Monster_W3_Theater_RLBoss_AllDamageTypeAddedRatio</a>[<span class=\"descriptionNumberColor\">Oil to the Banabana</span>]",
      "stackType": "Replace",
      "stackData": [
        "MDF_PropertyValue"
      ],
      "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>. This effect is stackable.",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "Oil to the Banabana",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
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
      "for": "<a class=\"gModGreen\" id=\"mod__1877150008\">Enemy_W3_Theater_IF_ImmuneDebuff</a>",
      "modifierFlags": [
        "ImmuneDebuff"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1090299931\">MModifier_W3_Theater_IF_UltraDamageReduce</a>",
      "stackType": "Replace",
      "stackLimit": 5,
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-685472168\">MModifier_W3_Theater_IF_UltraDamageReduce_TriggerFlag</a>"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "MDF_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                      "value": "(MDF_DamageReduce * MDF_Layer)"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-685472168\">MModifier_W3_Theater_IF_UltraDamageReduce_TriggerFlag</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__629494345\">Enemy_W3_Theater_IF_HintToastController</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "UI Display Event",
              "popUpText": "Accumulate attacks to the full to reduce the boss's Toughness"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier is Added [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-373657900\">MModifier_Monster_W3_Theater_IF_Side_Negative</a>[<span class=\"descriptionNumberColor\">Classroom Channel</span>]"
                  }
                ]
              },
              "passed": [
                {
                  "name": "UI Display Event",
                  "popUpText": "Accumulate attacks to the full to reduce the boss's Toughness"
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
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-373657900\">MModifier_Monster_W3_Theater_IF_Side_Negative</a>[<span class=\"descriptionNumberColor\">Classroom Channel</span>]"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Enemy Team All}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": "=",
                    "value2": 0,
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-373657900\">MModifier_Monster_W3_Theater_IF_Side_Negative</a>[<span class=\"descriptionNumberColor\">Classroom Channel</span>]"
                    }
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
      "for": "<a class=\"gModGreen\" id=\"mod__1480644115\">MModifier_Monster_W3_Theater_IF_Side_Negative_Count_Trigger</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__890205763\">Enemy_W3_Theater_IF_BattleEvent</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "ENEMIES_OBJECT_UNUSED__114"
                  },
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "Break"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "STAT_CTRL"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1974471772\">MModifier_Monster_W3_Theater_IF_Side_Positive</a>[<span class=\"descriptionNumberColor\">Off-Class Channel</span>]"
                      }
                    ]
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertCount",
                    "typeValue": 1
                  },
                  "abilityName": "Monster_W3_Theater_IF_Insert_RestartPhase2",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "priorityTag": "EnemyChangeState",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                }
              ],
              "noTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Check Boolean Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "value": "MonsterType_W3_Dinosaur_00"
                        }
                      }
                    ]
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-685472168\">MModifier_W3_Theater_IF_UltraDamageReduce_TriggerFlag</a>"
                },
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Check Boolean Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "value": "MonsterType_W3_Dinosaur_00"
                        }
                      }
                    ]
                  },
                  "ability": "Monster_W3_Dinosaur_02_Ultimate_Part00",
                  "isTrigger": true
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Add Target by Unique Identifier",
                    "identifier": "TheaterCore"
                  },
                  "variableName": "W3_Theater_00_BattleScore1_Flag",
                  "value": 1
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-618537723\">Enemy_Monster_W3_Theater_Part02Recover</a>"
                },
                "Wait for Pending Ability Completions",
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "MonsterType_W1_Mecha01_02"
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-685472168\">MModifier_W3_Theater_IF_UltraDamageReduce_TriggerFlag</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1090299931\">MModifier_W3_Theater_IF_UltraDamageReduce</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SpeedOverride</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (BE_P1_BESpeed) || RETURN",
                "displayLines": "BE_P1_BESpeed",
                "constants": [],
                "variables": [
                  "BE_P1_BESpeed"
                ]
              }
            },
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "multiBase": {
                "operator": "Variables[0] (BE_P3_InitDelay) || RETURN",
                "displayLines": "BE_P3_InitDelay",
                "constants": [],
                "variables": [
                  "BE_P3_InitDelay"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Weakness Break [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "ENEMIES_OBJECT_UNUSED__114"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Add Target by Unique Identifier",
                      "identifier": "TheaterCore"
                    },
                    "value": "MonsterType_W3_Theater"
                  },
                  "passed": [
                    {
                      "name": "Action Advance/Delay",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "advanceType": "Set",
                      "multiAdd": "P2_BreakDelayRatioPerFigure"
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1090299931\">MModifier_W3_Theater_IF_UltraDamageReduce</a>",
                  "stackLimit": 99,
                  "valuePerStack": {
                    "MDF_DamageReduce": {
                      "operator": "Variables[0] (MDF_BEBreakDamageReduce) || RETURN",
                      "displayLines": "MDF_BEBreakDamageReduce",
                      "constants": [],
                      "variables": [
                        "MDF_BEBreakDamageReduce"
                      ]
                    }
                  },
                  "addStacksPerTrigger": 1
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Add Target by Unique Identifier",
                      "identifier": "TheaterCore"
                    },
                    "value": "MonsterType_W3_Theater",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1013818127\">MModifier_Monster_W3_Theater_IF_HourglassCharge</a>[<span class=\"descriptionNumberColor\">Regular Examination</span>]"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "set": {
                    "operator": "Constants[0] (1000) || Variables[0] (BE_P1_BESpeed) || DIV || Variables[1] (BE_P3_InitDelay) || MUL || Constants[1] (15) || ADD || RETURN",
                    "displayLines": "(((1000 / BE_P1_BESpeed) * BE_P3_InitDelay) + 15)",
                    "constants": [
                      1000,
                      15
                    ],
                    "variables": [
                      "BE_P1_BESpeed",
                      "BE_P3_InitDelay"
                    ]
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__168509453\">Enemy_W3_Theater_IF_DuringChangePhase</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-831498858\">MModifier_Monster_W3_Theater_IF_Part2</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1450423939\">MModifier_Monster_W3_Theater_IF_HourglassTrigger</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2083560746\">MModifier_W3_Theater_IF_HourglassTrigger_Flop</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-396183840\">Enemy_W3_Dinosaur_02_IF_StanceBreakRatioUp</a>[<span class=\"descriptionNumberColor\">Weakness Break Efficiency Boost</span>]",
      "stackType": "ReplaceByCaster",
      "stackData": [
        "MDF_PropertyValue"
      ],
      "description": "Weakness Break Efficiency increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "Weakness Break Efficiency Boost",
      "statusName": "Weakness Break Efficiency Boost",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakEfficiency</span>&nbsp;",
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
      "for": "<a class=\"gModGreen\" id=\"mod__1371722317\">MModifier_Monster_W3_Theater_IF_DuringAbility</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-831657031\">Enemy_W3_Theater_IF_AbilityEX04</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-814879412\">Enemy_W3_Theater_IF_AbilityEX03</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-798101793\">Enemy_W3_Theater_IF_AbilityEX02</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-781324174\">Enemy_W3_Theater_IF_AbilityEX01</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1991654587\">Enemy_W3_Dinosaur_02_Break_Listener</a>",
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
              "modifier": "<a class=\"gModGreen\" id=\"-373657900\">MModifier_Monster_W3_Theater_IF_Side_Negative</a>[<span class=\"descriptionNumberColor\">Classroom Channel</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1974471772\">MModifier_Monster_W3_Theater_IF_Side_Positive</a>[<span class=\"descriptionNumberColor\">Off-Class Channel</span>]"
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
      "for": "<a class=\"gModGreen\" id=\"mod__393225449\">MModifier_Monster_W3_Theater_IF_MinionsSuperArmorBreak</a>[<span class=\"descriptionNumberColor\">Prolonged Class</span>]",
      "modifierFlags": [
        "STAT_SuperArmorBreak",
        "STAT_AITargetKeepActionDelay"
      ],
      "description": "When Blaznana Monkey Trick is in the \"Safeguard Breach\" state, increases this unit's DMG taken by <span class=\"descriptionNumberColor\">MDF_AllDamageTypeTakenRatio</span>.",
      "type": "Debuff",
      "effectName": "Prolonged Class",
      "statusName": "Prolonged Class",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-237425029\">StanceBreakState_Effect</a>"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AllDamageTypeTakenRatio) || RETURN",
                "displayLines": "MDF_AllDamageTypeTakenRatio",
                "constants": [],
                "variables": [
                  "MDF_AllDamageTypeTakenRatio"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "When Modifier is Added [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"-237425029\">StanceBreakState_Effect</a>"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-237425029\">StanceBreakState_Effect</a>"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1242309858\">MModifier_Monster_W3_Theater_IF_MinionsSuperArmor</a>[<span class=\"descriptionNumberColor\">Homework In-Class</span>]",
      "modifierFlags": [],
      "description": "When Blaznana Monkey Trick is in the \"Steadfast Safeguard\" state, reduces this unit's DMG received by <span class=\"descriptionNumberColor\">MDF_AllDamageReduce</span>.",
      "type": "Buff",
      "effectName": "Homework In-Class",
      "statusName": "Homework In-Class",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Set Hit-Class",
              "reset": true
            }
          ]
        },
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "APOC_BOOL_OBJECT_UNUSED_26"
                  },
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "APOC_BOOL_OBJECT_UNUSED_25"
                  },
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "APOC_BOOL_OBJECT_UNUSED_24"
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "APOC_BOOL_OBJECT_UNUSED_26"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "APOC_BOOL_OBJECT_UNUSED_25"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "APOC_BOOL_OBJECT_UNUSED_24"
                  }
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Body-Types",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "types": "Thin"
                      },
                      {
                        "name": "Has Body-Types",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "types": [
                          "LargeMonster",
                          "LargeAvatar",
                          "LargeFakeAvatar"
                        ],
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "compareType": "<",
                        "value2": 5
                      }
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Body-Types",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "types": "Thin"
                          },
                          {
                            "name": "Has Body-Types",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "types": [
                              "LargeMonster",
                              "LargeAvatar",
                              "LargeFakeAvatar"
                            ]
                          },
                          {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "compareType": "<",
                            "value2": 5
                          }
                        ]
                      },
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Body-Types",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "types": "Thin",
                            "invertCondition": true
                          },
                          {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "compareType": "<",
                            "value2": 5
                          }
                        ]
                      }
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "compareType": ">=",
                        "value2": 5
                      }
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AllDamageReduce) || RETURN",
                "displayLines": "MDF_AllDamageReduce",
                "constants": [],
                "variables": [
                  "MDF_AllDamageReduce"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1954613914\">MModifier_Monster_W3_Theater_IF_MinionsSuperArmorController</a>",
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
              "modifier": "<a class=\"gModGreen\" id=\"1242309858\">MModifier_Monster_W3_Theater_IF_MinionsSuperArmor</a>[<span class=\"descriptionNumberColor\">Homework In-Class</span>]",
              "valuePerStack": {
                "MDF_AllDamageReduce": {
                  "operator": "Variables[0] (MDF_MinionsSuperArmor_AllDamageReduce) || RETURN",
                  "displayLines": "MDF_MinionsSuperArmor_AllDamageReduce",
                  "constants": [],
                  "variables": [
                    "MDF_MinionsSuperArmor_AllDamageReduce"
                  ]
                }
              }
            }
          ]
        },
        {
          "eventTrigger": "Weakness Break [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1013818127\">MModifier_Monster_W3_Theater_IF_HourglassCharge</a>[<span class=\"descriptionNumberColor\">Regular Examination</span>]"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1242309858\">MModifier_Monster_W3_Theater_IF_MinionsSuperArmor</a>[<span class=\"descriptionNumberColor\">Homework In-Class</span>]"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "End Broken State [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1013818127\">MModifier_Monster_W3_Theater_IF_HourglassCharge</a>[<span class=\"descriptionNumberColor\">Regular Examination</span>]"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"393225449\">MModifier_Monster_W3_Theater_IF_MinionsSuperArmorBreak</a>[<span class=\"descriptionNumberColor\">Prolonged Class</span>]"
                },
                {
                  "name": "Exit Broken-State",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-627803266\">Standard_SuperArmor_IF</a>[<span class=\"descriptionNumberColor\">Steadfast Safeguard</span>]"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1242309858\">MModifier_Monster_W3_Theater_IF_MinionsSuperArmor</a>[<span class=\"descriptionNumberColor\">Homework In-Class</span>]",
                      "valuePerStack": {
                        "MDF_AllDamageReduce": {
                          "operator": "Variables[0] (MDF_MinionsSuperArmor_AllDamageReduce) || RETURN",
                          "displayLines": "MDF_MinionsSuperArmor_AllDamageReduce",
                          "constants": [],
                          "variables": [
                            "MDF_MinionsSuperArmor_AllDamageReduce"
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "Remove Modifier Behavior Flag(s)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "flagNames": []
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 1
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "FlopSide",
                  "value": -1
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1974471772\">MModifier_Monster_W3_Theater_IF_Side_Positive</a>[<span class=\"descriptionNumberColor\">Off-Class Channel</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-373657900\">MModifier_Monster_W3_Theater_IF_Side_Negative</a>[<span class=\"descriptionNumberColor\">Classroom Channel</span>]",
                  "casterAssign": "TargetSelf"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1013818127\">MModifier_Monster_W3_Theater_IF_HourglassCharge</a>[<span class=\"descriptionNumberColor\">Regular Examination</span>]",
      "description": "When enemy units in the \"Classroom Channel\" state are switched to \"Off-Class Channel\" via either Breaking their Weaknesses or accumulating the tally, reduces the Toughness of \"Blaznana Monkey Trick\". When all enemy units are Weakness Broken, attacking any enemy units can reduce the Toughness of \"Blaznana Monkey Trick\" by a minor amount. When \"Blaznana Monkey Trick\" is Weakness Broken, all enemy targets will be Broken, and the \"Blaznana Monkey Trick\" will enter the \"Safeguard Breach\" state.",
      "type": "Other",
      "statusName": "Regular Examination",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value": "MonsterType_W3_Theater"
              },
              "passed": [
                {
                  "name": "Update Modifier Description",
                  "popUpText": "When enemy units in the \"Off-Class Channel\" state use the corresponding abilities, reduces the Toughness of \"Wonder Forest's Banacademic Office Staff (Complete)\". When \"Wonder Forest's Banacademic Office Staff (Complete)\" is Weakness Broken, deals DMG to this unit and action delays all Banacademic Office members."
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "End Broken State [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"714067831\">Standard_SuperArmorBreak_IF</a>[<span class=\"descriptionNumberColor\">Safeguard Breach</span>]"
                  },
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "MonsterType_W3_Theater"
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
                ]
              },
              "passed": [
                {
                  "name": "Exit Broken-State",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Reset Toughness",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
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
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"-2083560746\">MModifier_W3_Theater_IF_HourglassTrigger_Flop</a>"
                      }
                    ]
                  },
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "MonsterType_W3_Theater",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "MonsterType_W3_Dinosaur_00"
                  },
                  "passed": [
                    {
                      "name": "Deal Toughness DMG",
                      "value": {
                        "operator": "Variables[0] (MDF_DamageStanceValue_Dinosaur) || RETURN",
                        "displayLines": "MDF_DamageStanceValue_Dinosaur",
                        "constants": [],
                        "variables": [
                          "MDF_DamageStanceValue_Dinosaur"
                        ]
                      },
                      "defender": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "forceReduction": true,
                      "canDelay": true,
                      "ToughnessDMGType": "Imaginary"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "MonsterType_W3_TV_00"
                  },
                  "passed": [
                    {
                      "name": "Deal Toughness DMG",
                      "value": {
                        "operator": "Variables[0] (MDF_DamageStanceValue_TV) || RETURN",
                        "displayLines": "MDF_DamageStanceValue_TV",
                        "constants": [],
                        "variables": [
                          "MDF_DamageStanceValue_TV"
                        ]
                      },
                      "defender": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "forceReduction": true,
                      "canDelay": true,
                      "ToughnessDMGType": "Imaginary"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "MonsterType_W1_Mecha01_02"
                  },
                  "passed": [
                    {
                      "name": "Deal Toughness DMG",
                      "value": {
                        "operator": "Variables[0] (MDF_DamageStanceValue_Mecha) || RETURN",
                        "displayLines": "MDF_DamageStanceValue_Mecha",
                        "constants": [],
                        "variables": [
                          "MDF_DamageStanceValue_Mecha"
                        ]
                      },
                      "defender": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "forceReduction": true,
                      "canDelay": true,
                      "ToughnessDMGType": "Imaginary"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "MonsterType_W3_Clock_00"
                  },
                  "passed": [
                    {
                      "name": "Deal Toughness DMG",
                      "value": {
                        "operator": "Variables[0] (MDF_DamageStanceValue_Clock) || RETURN",
                        "displayLines": "MDF_DamageStanceValue_Clock",
                        "constants": [],
                        "variables": [
                          "MDF_DamageStanceValue_Clock"
                        ]
                      },
                      "defender": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "forceReduction": true,
                      "canDelay": true,
                      "ToughnessDMGType": "Imaginary"
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"1450423939\">MModifier_Monster_W3_Theater_IF_HourglassTrigger</a>"
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Enemy Team All}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": "=",
                    "value2": 0,
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-373657900\">MModifier_Monster_W3_Theater_IF_Side_Negative</a>[<span class=\"descriptionNumberColor\">Classroom Channel</span>]"
                    }
                  },
                  "passed": [
                    {
                      "name": "Deal Toughness DMG",
                      "value": {
                        "operator": "Variables[0] (MDF_DamageStanceValue_2) || RETURN",
                        "displayLines": "MDF_DamageStanceValue_2",
                        "constants": [],
                        "variables": [
                          "MDF_DamageStanceValue_2"
                        ]
                      },
                      "defender": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "forceReduction": true,
                      "canDelay": true,
                      "ToughnessDMGType": "Imaginary"
                    }
                  ]
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
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "MonsterType_W3_Theater"
                  },
                  {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-720232452\">MModifier_Monster_W3_Theater_RLBoss_StanceDamage</a>"
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "MonsterType_W3_Dinosaur_00"
                  },
                  "passed": [
                    {
                      "name": "Deal Toughness DMG",
                      "value": {
                        "operator": "Variables[0] (MDF_DamageStanceValue_Dinosaur) || RETURN",
                        "displayLines": "MDF_DamageStanceValue_Dinosaur",
                        "constants": [],
                        "variables": [
                          "MDF_DamageStanceValue_Dinosaur"
                        ]
                      },
                      "defender": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "forceReduction": true,
                      "canDelay": true,
                      "ToughnessDMGType": "Imaginary"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "MonsterType_W3_TV_00"
                  },
                  "passed": [
                    {
                      "name": "Deal Toughness DMG",
                      "value": {
                        "operator": "Variables[0] (MDF_DamageStanceValue_TV) || RETURN",
                        "displayLines": "MDF_DamageStanceValue_TV",
                        "constants": [],
                        "variables": [
                          "MDF_DamageStanceValue_TV"
                        ]
                      },
                      "defender": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "forceReduction": true,
                      "canDelay": true,
                      "ToughnessDMGType": "Imaginary"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "MonsterType_W1_Mecha01_02"
                  },
                  "passed": [
                    {
                      "name": "Deal Toughness DMG",
                      "value": {
                        "operator": "Variables[0] (MDF_DamageStanceValue_Mecha) || RETURN",
                        "displayLines": "MDF_DamageStanceValue_Mecha",
                        "constants": [],
                        "variables": [
                          "MDF_DamageStanceValue_Mecha"
                        ]
                      },
                      "defender": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "forceReduction": true,
                      "canDelay": true,
                      "ToughnessDMGType": "Imaginary"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "MonsterType_W3_Clock_00"
                  },
                  "passed": [
                    {
                      "name": "Deal Toughness DMG",
                      "value": {
                        "operator": "Variables[0] (MDF_DamageStanceValue_Clock) || RETURN",
                        "displayLines": "MDF_DamageStanceValue_Clock",
                        "constants": [],
                        "variables": [
                          "MDF_DamageStanceValue_Clock"
                        ]
                      },
                      "defender": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "forceReduction": true,
                      "canDelay": true,
                      "ToughnessDMGType": "Imaginary"
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
      "for": "<a class=\"gModGreen\" id=\"mod__268137515\">MModifier_Monster_W3_Theater_IF_FlopHandler_TV</a>",
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
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "FaceChangeFlag",
                "compareType": "=",
                "value2": 1,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "DoingFlop",
                  "value": 1
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "FaceChangeFlag",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Action Start [Anyone]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "DoingFlop",
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
                    "flagName": "Break"
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
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"168509453\">Enemy_W3_Theater_IF_DuringChangePhase</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "FlopSide",
                        "compareType": "=",
                        "value2": -1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "MonsterType_W3_Theater",
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Inject Ability Use",
                          "conditionActive": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"1974471772\">MModifier_Monster_W3_Theater_IF_Side_Positive</a>[<span class=\"descriptionNumberColor\">Off-Class Channel</span>]"
                              }
                            ]
                          },
                          "checkOverride": {
                            "name": "Condition Priority",
                            "overridePriority": "MonsterForceKill",
                            "condition": {
                              "name": "Compare: Ability Value",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                              "compareType": "<=",
                              "value2": 0
                            }
                          },
                          "abilityName": "Monster_W3_TV_02_IF_Ability01_Insert_SelectTarget",
                          "priorityTag": "EnemyBuffOthers_Elation",
                          "ownerState": "Mask_AliveOrLimbo",
                          "targetState": "Mask_AliveOrLimbo",
                          "canHitNonTargets": true,
                          "allowAbilityTriggers": false
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "scope": "TargetEntity",
                      "variableName": "FlopSide",
                      "value": 1
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-521198824\">MModifier_Monster_W3_Theater_IF_Flop</a>"
                    }
                  ]
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
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1938387265\">MModifier_Monster_W3_Theater_IF_FlopHandler_Clock</a>",
      "execute": [
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
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "FaceChangeFlag",
                "compareType": "=",
                "value2": 1,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "DoingFlop",
                  "value": 1
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "FaceChangeFlag",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Action Start [Anyone]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "DoingFlop",
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
                    "flagName": "Break"
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
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"168509453\">Enemy_W3_Theater_IF_DuringChangePhase</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "FlopSide",
                        "compareType": "=",
                        "value2": -1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "MonsterType_W3_Theater",
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Inject Ability Use",
                          "conditionActive": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"1974471772\">MModifier_Monster_W3_Theater_IF_Side_Positive</a>[<span class=\"descriptionNumberColor\">Off-Class Channel</span>]"
                              }
                            ]
                          },
                          "checkOverride": {
                            "name": "Condition Priority",
                            "overridePriority": "MonsterForceKill",
                            "condition": {
                              "name": "Compare: Ability Value",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                              "compareType": "<=",
                              "value2": 0
                            }
                          },
                          "abilityName": "Monster_W3_Clock_02_IF_Ability03_Insert_Part01",
                          "priorityTag": "EnemyBuffOthers_Elation",
                          "ownerState": "Mask_AliveOrLimbo",
                          "targetState": "Mask_AliveOrLimbo",
                          "canHitNonTargets": true,
                          "allowAbilityTriggers": false
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "scope": "TargetEntity",
                      "variableName": "FlopSide",
                      "value": 1
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-521198824\">MModifier_Monster_W3_Theater_IF_Flop</a>"
                    }
                  ]
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
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__566459392\">MModifier_Monster_W3_Theater_IF_FlopHandler_Mecha01</a>",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
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
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "FaceChangeFlag",
                "compareType": "=",
                "value2": 1,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "DoingFlop",
                  "value": 1
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "FaceChangeFlag",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Action Start [Anyone]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "DoingFlop",
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
                    "flagName": "Break"
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
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"168509453\">Enemy_W3_Theater_IF_DuringChangePhase</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "FlopSide",
                        "compareType": "=",
                        "value2": -1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "MonsterType_W3_Theater",
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Inject Ability Use",
                          "conditionActive": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"1974471772\">MModifier_Monster_W3_Theater_IF_Side_Positive</a>[<span class=\"descriptionNumberColor\">Off-Class Channel</span>]"
                              }
                            ]
                          },
                          "checkOverride": {
                            "name": "Condition Priority",
                            "overridePriority": "MonsterForceKill",
                            "condition": {
                              "name": "Compare: Ability Value",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                              "compareType": "<=",
                              "value2": 0
                            }
                          },
                          "abilityName": "Monster_W1_Mecha01_03_IF_Ability01_Insert_Part01",
                          "priorityTag": "EnemyBuffOthers_Elation",
                          "ownerState": "Mask_AliveOrLimbo",
                          "targetState": "Mask_AliveOrLimbo",
                          "canHitNonTargets": true,
                          "allowAbilityTriggers": false
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "scope": "TargetEntity",
                      "variableName": "FlopSide",
                      "value": 1
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-521198824\">MModifier_Monster_W3_Theater_IF_Flop</a>"
                    }
                  ]
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
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-36763018\">MModifier_Monster_W3_Theater_IF_FlopHandler_Dinosaur</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
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
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "FaceChangeFlag",
                "compareType": "=",
                "value2": 1,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "DoingFlop",
                  "value": 1
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "FaceChangeFlag",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Action Start [Anyone]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "DoingFlop",
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
                    "flagName": "Break"
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
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"168509453\">Enemy_W3_Theater_IF_DuringChangePhase</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "FlopSide",
                        "compareType": "=",
                        "value2": -1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "MonsterType_W3_Theater",
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Inject Ability Use",
                          "conditionActive": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"1974471772\">MModifier_Monster_W3_Theater_IF_Side_Positive</a>[<span class=\"descriptionNumberColor\">Off-Class Channel</span>]"
                              }
                            ]
                          },
                          "checkOverride": {
                            "name": "Condition Priority",
                            "overridePriority": "MonsterForceKill",
                            "condition": {
                              "name": "Compare: Ability Value",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                              "compareType": "<=",
                              "value2": 0
                            }
                          },
                          "abilityName": "Monster_W3_Dinosaur_02_IF_Ability09_Insert_Part01",
                          "priorityTag": "EnemyBuffOthers_Elation",
                          "ownerState": "Mask_AliveOrLimbo",
                          "targetState": "Mask_AliveOrLimbo",
                          "canHitNonTargets": true,
                          "allowAbilityTriggers": false
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "scope": "TargetEntity",
                      "variableName": "FlopSide",
                      "value": 1
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-521198824\">MModifier_Monster_W3_Theater_IF_Flop</a>"
                    }
                  ]
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
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-521198824\">MModifier_Monster_W3_Theater_IF_Flop</a>",
      "stackType": "Replace",
      "latentQueue": [
        "FaceChangeFlag",
        "DoingFlop"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-467122101\">MModifier_Monster_W3_Theater_IF_FaceLock</a>",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 1
                }
              ]
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
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-373657900\">MModifier_Monster_W3_Theater_IF_Side_Negative</a>[<span class=\"descriptionNumberColor\">Classroom Channel</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1974471772\">MModifier_Monster_W3_Theater_IF_Side_Positive</a>[<span class=\"descriptionNumberColor\">Off-Class Channel</span>]"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "MonsterType_W3_TV_00"
                  }
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
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1974471772\">MModifier_Monster_W3_Theater_IF_Side_Positive</a>[<span class=\"descriptionNumberColor\">Off-Class Channel</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-373657900\">MModifier_Monster_W3_Theater_IF_Side_Negative</a>[<span class=\"descriptionNumberColor\">Classroom Channel</span>]"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "MonsterType_W3_TV_00"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-467122101\">MModifier_Monster_W3_Theater_IF_FaceLock</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "Negative_Count",
              "value": 0
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value": "MonsterType_W3_TV_00"
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "MonsterType_W3_Clock_00"
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "MonsterType_W1_Mecha01_02"
                      },
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value": "MonsterType_W3_Dinosaur_00"
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2042117256\">MModifier_Monster_W3_Theater_IF_Side_Negative_Count</a>"
            },
            {
              "name": "Update Displayed Energy Bar",
              "entityClass": "Enemy",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "assignState": "True",
              "state": "Active"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Update Displayed Energy Bar",
              "entityClass": "Enemy",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "assignState": "False"
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked End [Owner]"
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
              "modifier": "<a class=\"gModGreen\" id=\"-1218613881\">MModifier_Monster_W3_Theater_IF_Side_Noise_Count</a>"
            },
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1218613881\">MModifier_Monster_W3_Theater_IF_Side_Noise_Count</a>",
      "latentQueue": [
        "Negative_Count"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "ForbidFlag",
              "value": 1
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "Being Attacked Start [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "ForbidFlag",
                "compareType": "=",
                "value2": 0,
                "contextScope": "ContextModifier"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1450423939\">MModifier_Monster_W3_Theater_IF_HourglassTrigger</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "ForbidFlag",
                "compareType": "=",
                "value2": 0,
                "contextScope": "ContextModifier"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1450423939\">MModifier_Monster_W3_Theater_IF_HourglassTrigger</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked Completed [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "ForbidFlag",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "End Broken State [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "Negative_Count",
              "value": 0
            },
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2042117256\">MModifier_Monster_W3_Theater_IF_Side_Negative_Count</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "ContextModifier",
              "variableName": "MDF_Negative_Count",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "Negative_Count",
              "value": 0
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value": "MonsterType_W3_Theater"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Add Target by Unique Identifier",
                      "identifier": "TheaterCore"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Negative_Count_Max",
                      "value": {
                        "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
                        "displayLines": "{[SkillP01[0]]}",
                        "constants": [],
                        "variables": [
                          "{[SkillP01[0]]}"
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
                          "name": "Add Target by Unique Identifier",
                          "identifier": "TheaterCore"
                        },
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 2
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_Negative_Count_Max",
                          "value": {
                            "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                            "displayLines": "{[SkillP01[2]]}",
                            "constants": [],
                            "variables": [
                              "{[SkillP01[2]]}"
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
                              "name": "Add Target by Unique Identifier",
                              "identifier": "TheaterCore"
                            },
                            "value1": "HP_Bars_Remaining",
                            "compareType": "=",
                            "value2": 3
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_Negative_Count_Max",
                              "value": {
                                "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                                "displayLines": "{[SkillP01[3]]}",
                                "constants": [],
                                "variables": [
                                  "{[SkillP01[3]]}"
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
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Negative_Count_Max",
                  "value": {
                    "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
                    "displayLines": "{[SkillP01[0]]}",
                    "constants": [],
                    "variables": [
                      "{[SkillP01[0]]}"
                    ]
                  }
                }
              ]
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (MDF_Negative_Count_Max) || RETURN",
                "displayLines": "MDF_Negative_Count_Max",
                "constants": [],
                "variables": [
                  "MDF_Negative_Count_Max"
                ]
              },
              "entityClass": "Enemy",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "maximum": {
                "operator": "Variables[0] (POSTTRIM_UNKNOWN_1) || RETURN",
                "displayLines": "POSTTRIM_UNKNOWN_1",
                "constants": [],
                "variables": [
                  "POSTTRIM_UNKNOWN_1"
                ]
              },
              "assignState": "True",
              "state": "Normal"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (MDF_Negative_Count_Max) || RETURN",
                "displayLines": "MDF_Negative_Count_Max",
                "constants": [],
                "variables": [
                  "MDF_Negative_Count_Max"
                ]
              },
              "entityClass": "Enemy",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "maximum": {
                "operator": "Variables[0] (POSTTRIM_UNKNOWN_1) || RETURN",
                "displayLines": "POSTTRIM_UNKNOWN_1",
                "constants": [],
                "variables": [
                  "POSTTRIM_UNKNOWN_1"
                ]
              },
              "assignState": "False",
              "state": "Normal"
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "ReadytoFlop",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-814879412\">Enemy_W3_Theater_IF_AbilityEX03</a>"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_Negative_Count",
                  "context": "ContextModifier",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] ({[SkillP01[1]]}) || SUB || RETURN",
                    "displayLines": "(0 - {[SkillP01[1]]})",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "{[SkillP01[1]]}"
                    ]
                  },
                  "max": 100
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Negative_Count",
                  "value": {
                    "operator": "Variables[0] (MDF_Negative_Count_Max) || RETURN",
                    "displayLines": "MDF_Negative_Count_Max",
                    "constants": [],
                    "variables": [
                      "MDF_Negative_Count_Max"
                    ]
                  }
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (MDF_Negative_Count_Max) || RETURN",
                    "displayLines": "MDF_Negative_Count_Max",
                    "constants": [],
                    "variables": [
                      "MDF_Negative_Count_Max"
                    ]
                  },
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": {
                    "operator": "Variables[0] (POSTTRIM_UNKNOWN_1) || RETURN",
                    "displayLines": "POSTTRIM_UNKNOWN_1",
                    "constants": [],
                    "variables": [
                      "POSTTRIM_UNKNOWN_1"
                    ]
                  },
                  "assignState": "True",
                  "state": "Normal"
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "ReadytoFlop",
                  "value": 0
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked End [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "ContextModifier",
              "variableName": "MDF_Negative_Count",
              "value": {
                "operator": "Variables[0] (MDF_Negative_Count_Max) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(MDF_Negative_Count_Max + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "MDF_Negative_Count_Max"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "Negative_Count",
              "value": {
                "operator": "Variables[0] (MDF_Negative_Count_Max) || RETURN",
                "displayLines": "MDF_Negative_Count_Max",
                "constants": [],
                "variables": [
                  "MDF_Negative_Count_Max"
                ]
              }
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (MDF_Negative_Count_Max) || RETURN",
                "displayLines": "MDF_Negative_Count_Max",
                "constants": [],
                "variables": [
                  "MDF_Negative_Count_Max"
                ]
              },
              "entityClass": "Enemy",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "maximum": {
                "operator": "Variables[0] (POSTTRIM_UNKNOWN_1) || RETURN",
                "displayLines": "POSTTRIM_UNKNOWN_1",
                "constants": [],
                "variables": [
                  "POSTTRIM_UNKNOWN_1"
                ]
              },
              "assignState": "True",
              "state": "Normal"
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "ContextModifier",
              "variableName": "MDF_Negative_Count_Diff",
              "value": {
                "operator": "Variables[0] (POSTTRIM_UNKNOWN_1) || Variables[1] (MDF_Negative_Count_Max) || SUB || RETURN",
                "displayLines": "(POSTTRIM_UNKNOWN_1 - MDF_Negative_Count_Max)",
                "constants": [],
                "variables": [
                  "POSTTRIM_UNKNOWN_1",
                  "MDF_Negative_Count_Max"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "MDF_Negative_Count_Diff",
                "compareType": "=",
                "value2": 1,
                "contextScope": "ContextModifier"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "ReadytoFlop",
                  "value": 1
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
                "value1": "MDF_Negative_Count_Diff",
                "compareType": "=",
                "value2": 0,
                "contextScope": "ContextModifier"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "MonsterType_W3_Theater"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "scope": "TargetEntity",
                      "variableName": "FlopSide",
                      "value": 1
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
                      "modifier": "<a class=\"gModGreen\" id=\"-521198824\">MModifier_Monster_W3_Theater_IF_Flop</a>"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_CurrentStance",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "Break",
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Deal Toughness DMG",
                          "value": {
                            "operator": "Variables[0] (MDF_CurrentStance) || RETURN",
                            "displayLines": "MDF_CurrentStance",
                            "constants": [],
                            "variables": [
                              "MDF_CurrentStance"
                            ]
                          },
                          "attacker": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "defender": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "forceReduction": true,
                          "canDelay": true,
                          "ToughnessDMGType": "Imaginary"
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
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1218613881\">MModifier_Monster_W3_Theater_IF_Side_Noise_Count</a>"
            },
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-373657900\">MModifier_Monster_W3_Theater_IF_Side_Negative</a>[<span class=\"descriptionNumberColor\">Classroom Channel</span>]",
      "latentQueue": [
        "DoingFlop",
        "FaceChangeFlag",
        "AIFlag"
      ],
      "description": "\"Banacademic Office\" members can use \"Classroom Channel\" abilities. When the tally reaches the maximum, switches to \"Off-Class Channel\" and enters the Weakness Broken state.",
      "type": "Other",
      "statusName": "Classroom Channel",
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
              "modifier": "<a class=\"gModGreen\" id=\"2042117256\">MModifier_Monster_W3_Theater_IF_Side_Negative_Count</a>"
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
              "modifier": "<a class=\"gModGreen\" id=\"2042117256\">MModifier_Monster_W3_Theater_IF_Side_Negative_Count</a>"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Update Override Controller",
              "controller": "Override2"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value": "MonsterType_W3_Theater"
              },
              "passed": [
                {
                  "name": "Update Modifier Description",
                  "popUpText": "Banacademic Office members can use \"Classroom Channel\" abilities. When the tally number reaches the maximum, they switch to \"Off-Class Channel\" mode."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1974471772\">MModifier_Monster_W3_Theater_IF_Side_Positive</a>[<span class=\"descriptionNumberColor\">Off-Class Channel</span>]",
      "latentQueue": [
        "DoingFlop",
        "FaceChangeFlag",
        "AIFlag"
      ],
      "description": "Banacademic Office members can use \"Off-Class Channel\" abilities. After they are attacked, they will not switch channels.",
      "type": "Other",
      "statusName": "Off-Class Channel",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
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
              "name": "IF",
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value": "MonsterType_W3_Dinosaur_00",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "Negative_Count",
              "value": 0
            },
            {
              "name": "Update Override Controller",
              "controller": "Override1"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value": "MonsterType_W3_Theater"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "MonsterType_W3_Dinosaur_00",
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
                      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
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
                    "value": "MonsterType_W3_TV_00"
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "MonsterType_W3_Clock_00"
                      },
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value": "MonsterType_W1_Mecha01_02"
                          },
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value": "MonsterType_W3_Dinosaur_00"
                              }
                            }
                          ]
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "MonsterType_W3_Dinosaur_00",
                        "invertCondition": true
                      },
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "MonsterType_W3_TV_00",
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
                      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": 0,
              "entityClass": "Enemy",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "maximum": 1,
              "assignState": "True",
              "state": "Normal"
            }
          ]
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
              "modifier": "<a class=\"gModGreen\" id=\"-1218613881\">MModifier_Monster_W3_Theater_IF_Side_Noise_Count</a>"
            }
          ]
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