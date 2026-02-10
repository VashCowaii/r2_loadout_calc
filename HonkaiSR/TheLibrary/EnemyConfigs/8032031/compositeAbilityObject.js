const compositeAbilityObject = {
  "fullCharacterName": 8032031,
  "trimCharacterName": 8032031,
  "abilityList": [
    "8032031_Monster_W3_AventurinePart_NoDeathRattle_RL",
    "8032031_Monster_W3_AventurinePart_DeathRattle_RL",
    "8032031_Monster_W3_AventurinePart_Ability02_Part02_RL",
    "8032031_Monster_W3_AventurinePart_Ability02_Part01_RL",
    "8032031_Monster_W3_AventurinePart_01_Passive01_RL",
    "8032031_Monster_W3_AventurinePart_Passive01_RL",
    "8032031_Monster_W3_AventurinePart_Ability04_Part02",
    "8032031_Monster_W3_AventurinePart_Ability04_Part01",
    "8032031_Monster_W3_AventurinePart_Ability03_Part02",
    "8032031_Monster_W3_AventurinePart_Ability03_Part01",
    "8032031_Monster_W3_AventurinePart_Ability02_Part02",
    "8032031_Monster_W3_AventurinePart_Ability02_Part01",
    "8032031_Monster_W3_AventurinePart_Ability01_Part02",
    "8032031_Monster_W3_AventurinePart_Ability01_Part01",
    "8032031_Monster_W3_AventurinePart_Passive01",
    "8032031_Modifiers"
  ],
  "abilityObject": {
    "8032031_Monster_W3_AventurinePart_NoDeathRattle_RL": {
      "fileName": "8032031_Monster_W3_AventurinePart_NoDeathRattle_RL",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "8032031_Monster_W3_AventurinePart_DeathRattle_RL": {
      "fileName": "8032031_Monster_W3_AventurinePart_DeathRattle_RL",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Punishment of Defeat"
        },
        "Deleted bullshit",
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "DeathRattle_RL_Count"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "searchRandom": true,
          "includeDyingTargets": true,
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value1": "DeathRattle_RL",
            "compareType": "=",
            "value2": 1
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "DeathRattle_RL_Count",
              "value": 1,
              "max": 4
            },
            {
              "name": "Animation Event",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "state": "Die_Explod",
              "passed": [
                {
                  "name": "Animation Task",
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1321309283\">Monster_W3_AventurinePart_SpeedZero_RL</a>[<span class=\"descriptionNumberColor\">Forever Concealed</span>]",
                        "includePreDeath": true
                      }
                    }
                  ]
                },
                {
                  "name": "Animation Task"
                },
                {
                  "name": "Animation Task"
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Add Target by Unique Identifier",
                "identifier": "W3_Aventurine_00"
              },
              "scope": "TargetEntity",
              "variableName": "DiceDeathRattleInsertCheck",
              "value": 0
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Add Target by Unique Identifier",
            "identifier": "W3_Aventurine_00"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[0]]}) || Variables[1] (DeathRattle_RL_Count) || MUL || RETURN",
              "displayLines": "({[Skill01[0]]} * DeathRattle_RL_Count)",
              "constants": [],
              "variables": [
                "{[Skill01[0]]}",
                "DeathRattle_RL_Count"
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "Toughness": {
              "operator": "Variables[0] ({[Skill01[1]]}) || Variables[1] (DeathRattle_RL_Count) || MUL || RETURN",
              "displayLines": "({[Skill01[1]]} * DeathRattle_RL_Count)",
              "constants": [],
              "variables": [
                "{[Skill01[1]]}",
                "DeathRattle_RL_Count"
              ]
            },
            "ToughnessDMGType": {
              "DamageType": "Imaginary"
            },
            "Tags": null,
            "attackType": "Basic ATK"
          }
        },
        "Trigger: Attack End"
      ],
      "references": []
    },
    "8032031_Monster_W3_AventurinePart_Ability02_Part02_RL": {
      "fileName": "8032031_Monster_W3_AventurinePart_Ability02_Part02_RL",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-804462384\">Monster_W3_AventurinePart_OddsZero_RL</a>"
          },
          "ifTargetFound": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-804462384\">Monster_W3_AventurinePart_OddsZero_RL</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Add Target by Unique Identifier",
                  "identifier": "W3_Aventurine_00"
                },
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1833952078\">Monster_W3_AventurinePart_Odds_RL</a>",
                  "stackLimit": {
                    "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                    "displayLines": "{[Skill05[1]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill05[1]]}"
                    ]
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (GambleOdds) || RETURN",
                    "displayLines": "GambleOdds",
                    "constants": [],
                    "variables": [
                      "GambleOdds"
                    ]
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Add Target by Unique Identifier",
                  "identifier": "W3_Aventurine_00"
                },
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1833952078\">Monster_W3_AventurinePart_Odds_RL</a>",
                  "stackLimit": {
                    "operator": "Variables[0] ({[Skill05[2]]}) || RETURN",
                    "displayLines": "{[Skill05[2]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill05[2]]}"
                    ]
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (GambleOdds) || RETURN",
                    "displayLines": "GambleOdds",
                    "constants": [],
                    "variables": [
                      "GambleOdds"
                    ]
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Add Target by Unique Identifier",
                  "identifier": "W3_Aventurine_00"
                },
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 3
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1833952078\">Monster_W3_AventurinePart_Odds_RL</a>",
                  "stackLimit": {
                    "operator": "Variables[0] ({[Skill05[3]]}) || RETURN",
                    "displayLines": "{[Skill05[3]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill05[3]]}"
                    ]
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (GambleOdds) || RETURN",
                    "displayLines": "GambleOdds",
                    "constants": [],
                    "variables": [
                      "GambleOdds"
                    ]
                  }
                }
              ]
            }
          ]
        },
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
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1833952078\">Monster_W3_AventurinePart_Odds_RL</a>"
              },
              {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "DiceGamblingInsertCheck_RL",
                "compareType": "=",
                "value2": 1
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Add Target by Unique Identifier",
                  "identifier": "W3_Aventurine_00"
                },
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1833952078\">Monster_W3_AventurinePart_Odds_RL</a>",
                  "stackLimit": {
                    "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                    "displayLines": "{[Skill05[1]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill05[1]]}"
                    ]
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (GambleOdds) || RETURN",
                    "displayLines": "GambleOdds",
                    "constants": [],
                    "variables": [
                      "GambleOdds"
                    ]
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Add Target by Unique Identifier",
                  "identifier": "W3_Aventurine_00"
                },
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1833952078\">Monster_W3_AventurinePart_Odds_RL</a>",
                  "stackLimit": {
                    "operator": "Variables[0] ({[Skill05[2]]}) || RETURN",
                    "displayLines": "{[Skill05[2]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill05[2]]}"
                    ]
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (GambleOdds) || RETURN",
                    "displayLines": "GambleOdds",
                    "constants": [],
                    "variables": [
                      "GambleOdds"
                    ]
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Add Target by Unique Identifier",
                  "identifier": "W3_Aventurine_00"
                },
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 3
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1833952078\">Monster_W3_AventurinePart_Odds_RL</a>",
                  "stackLimit": {
                    "operator": "Variables[0] ({[Skill05[3]]}) || RETURN",
                    "displayLines": "{[Skill05[3]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill05[3]]}"
                    ]
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (GambleOdds) || RETURN",
                    "displayLines": "GambleOdds",
                    "constants": [],
                    "variables": [
                      "GambleOdds"
                    ]
                  }
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "scope": "TargetEntity",
              "variableName": "DiceGamblingInsertCheck_RL",
              "value": 0
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1833952078\">Monster_W3_AventurinePart_Odds_RL</a>"
          }
        }
      ],
      "references": []
    },
    "8032031_Monster_W3_AventurinePart_Ability02_Part01_RL": {
      "fileName": "8032031_Monster_W3_AventurinePart_Ability02_Part01_RL",
      "childAbilityList": [
        "8032031_Monster_W3_AventurinePart_Ability02_Camera_RL",
        "8032031_Monster_W3_AventurinePart_Ability02_Part01_RL",
        "8032031_Monster_W3_AventurinePart_Ability02_Part02_RL"
      ],
      "skillTrigger": "Skill05",
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
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target Group}}"
          },
          "ability": "Monster_W3_AventurinePart_Ability02_Part02_RL",
          "isTrigger": true
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-804462384\">Monster_W3_AventurinePart_OddsZero_RL</a>"
              },
              {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1833952078\">Monster_W3_AventurinePart_Odds_RL</a>"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "DiceGamblingInsertCheck_RL",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              }
            ]
          }
        }
      ],
      "references": []
    },
    "8032031_Monster_W3_AventurinePart_01_Passive01_RL": {
      "fileName": "8032031_Monster_W3_AventurinePart_01_Passive01_RL",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1404216721\">Monster_W3_AventurinePart_01_BlockDamage_RL</a>[<span class=\"descriptionNumberColor\">Fickle Fortune</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"889329301\">Monster_W3_AventurinePart_01_SpeedZero</a>"
        }
      ],
      "references": []
    },
    "8032031_Monster_W3_AventurinePart_Passive01_RL": {
      "fileName": "8032031_Monster_W3_AventurinePart_Passive01_RL",
      "skillTrigger": "PassiveSkill01",
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
          "modifier": "<a class=\"gModGreen\" id=\"-804462384\">Monster_W3_AventurinePart_OddsZero_RL</a>"
        }
      ],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1404216721\">Monster_W3_AventurinePart_01_BlockDamage_RL</a>[<span class=\"descriptionNumberColor\">Fickle Fortune</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1321309283\">Monster_W3_AventurinePart_SpeedZero_RL</a>[<span class=\"descriptionNumberColor\">Forever Concealed</span>]"
        },
        {
          "name": "Assign Unique Name",
          "uniqueName": "W3_AventurinePart_00_RL",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        }
      ],
      "references": []
    },
    "8032031_Monster_W3_AventurinePart_Ability04_Part02": {
      "fileName": "8032031_Monster_W3_AventurinePart_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "silent": true
        },
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Reset Toughness",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "AvatarDiceResult",
          "value": 0
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1454354819\">Monster_W3_Aventurine_Gambling</a>[<span class=\"descriptionNumberColor\">Gamble</span>]"
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "valueType": "Layer",
                  "variableName": "AvatarDiceResult",
                  "modifierName": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                  "multiplier": 1
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Add Target by Unique Identifier",
              "identifier": "W3_Aventurine_00"
            },
            "value1": "DiceResult",
            "compareType": "<",
            "value2": {
              "operator": "Variables[0] (AvatarDiceResult) || RETURN",
              "displayLines": "AvatarDiceResult",
              "constants": [],
              "variables": [
                "AvatarDiceResult"
              ]
            }
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "SpecialDie",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "SpecialDie",
              "value": 0
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "searchRandom": true,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>"
              },
              "noTargetFound": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "WaitInsert",
                  "value": 0
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Summoner}}"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"126188110\">Monster_W3_AventurinePart_SpeedZero</a>[<span class=\"descriptionNumberColor\">Fickle Fortune</span>]"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Mark Entity For Immediate Death",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          }
                        },
                        {
                          "name": "Force Entity Death",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          }
                        }
                      ]
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster's Summoner}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"949876985\">Monster_W3_Aventurine_Result</a>"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster's Summoner}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1868976135\">Monster_W3_Aventurine_WeakProtect</a>"
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"549807086\">Monster_W3_Aventurine_Ability04_NoGambling</a>[<span class=\"descriptionNumberColor\">Look, Don't Speak</span>]"
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "variableName": "DiceResult",
                  "value": 0
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1639857943\">Monster_W3_Aventurine_GlobalMainIntensity</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1871436959\">Monster_W3_Aventurine_Unselectable</a>"
                },
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "phase": "Phase1"
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "8032031_Monster_W3_AventurinePart_Ability04_Part01": {
      "fileName": "8032031_Monster_W3_AventurinePart_Ability04_Part01",
      "childAbilityList": [
        "8032031_Monster_W3_AventurinePart_Ability04_Camera",
        "8032031_Monster_W3_AventurinePart_Ability04_Part01",
        "8032031_Monster_W3_AventurinePart_Ability04_Part02"
      ],
      "skillTrigger": "Skill04",
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
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "Monster_W3_AventurinePart_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8032031_Monster_W3_AventurinePart_Ability03_Part02": {
      "fileName": "8032031_Monster_W3_AventurinePart_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "silent": true
        },
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Reset Toughness",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        }
      ],
      "references": []
    },
    "8032031_Monster_W3_AventurinePart_Ability03_Part01": {
      "fileName": "8032031_Monster_W3_AventurinePart_Ability03_Part01",
      "childAbilityList": [
        "8032031_Monster_W3_AventurinePart_Ability03_Part01",
        "8032031_Monster_W3_AventurinePart_Ability03_Part02"
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
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "Monster_W3_AventurinePart_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "8032031_Monster_W3_AventurinePart_Ability02_Part02": {
      "fileName": "8032031_Monster_W3_AventurinePart_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"718327308\">Monster_W3_AventurinePart_Speed</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1657959613\">Monster_W3_AventurinePart_BlockDamage</a>"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "DiceGamblingInsertCheck",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1404216721\">Monster_W3_AventurinePart_01_BlockDamage_RL</a>[<span class=\"descriptionNumberColor\">Fickle Fortune</span>]"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "DiceGamblingInsertCheck",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "silent": true
            },
            {
              "name": "Exit Broken-State",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
            {
              "name": "Reset Toughness",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1657959613\">Monster_W3_AventurinePart_BlockDamage</a>"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "DiceGamblingInsertCheck",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1404216721\">Monster_W3_AventurinePart_01_BlockDamage_RL</a>[<span class=\"descriptionNumberColor\">Fickle Fortune</span>]"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "DiceGamblingInsertCheck",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-34127136\">Monster_W3_AventurinePart_Result</a>"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1604729097\">Monster_W3_AventurinePart_ResultTarget</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1657959613\">Monster_W3_AventurinePart_BlockDamage</a>"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "DiceGamblingInsertCheck",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1404216721\">Monster_W3_AventurinePart_01_BlockDamage_RL</a>[<span class=\"descriptionNumberColor\">Fickle Fortune</span>]"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "DiceGamblingInsertCheck",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-34127136\">Monster_W3_AventurinePart_Result</a>"
            },
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "phase": "Phase1"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"288143778\">Monster_W3_AventurinePart_DeathRattle_RL</a>[<span class=\"descriptionNumberColor\">Influx of Fortuity</span>]"
              },
              "passed": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "phase": "Phase3"
                }
              ]
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1604729097\">Monster_W3_AventurinePart_ResultTarget</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1657959613\">Monster_W3_AventurinePart_BlockDamage</a>"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "DiceGamblingInsertCheck",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1404216721\">Monster_W3_AventurinePart_01_BlockDamage_RL</a>[<span class=\"descriptionNumberColor\">Fickle Fortune</span>]"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "DiceGamblingInsertCheck",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              }
            ]
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Aventurine: Self and Team Members}}"
          },
          "searchRandom": true,
          "ifTargetFound": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "scope": "TargetEntity",
              "variableName": "DiceGamblingInsertCheck",
              "value": 0
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Active: Fast-Forward Animations"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1657959613\">Monster_W3_AventurinePart_BlockDamage</a>"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1404216721\">Monster_W3_AventurinePart_01_BlockDamage_RL</a>[<span class=\"descriptionNumberColor\">Fickle Fortune</span>]"
              }
            ]
          }
        }
      ],
      "references": []
    },
    "8032031_Monster_W3_AventurinePart_Ability02_Part01": {
      "fileName": "8032031_Monster_W3_AventurinePart_Ability02_Part01",
      "childAbilityList": [
        "8032031_Monster_W3_AventurinePart_Ability02_Camera",
        "8032031_Monster_W3_AventurinePart_Ability02_Part01",
        "8032031_Monster_W3_AventurinePart_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1657959613\">Monster_W3_AventurinePart_BlockDamage</a>"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "DiceGamblingInsertCheck",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1404216721\">Monster_W3_AventurinePart_01_BlockDamage_RL</a>[<span class=\"descriptionNumberColor\">Fickle Fortune</span>]"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "DiceGamblingInsertCheck",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              }
            ]
          }
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "Monster_W3_AventurinePart_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8032031_Monster_W3_AventurinePart_Ability01_Part02": {
      "fileName": "8032031_Monster_W3_AventurinePart_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8032031_Monster_W3_AventurinePart_Ability01_Part01": {
      "fileName": "8032031_Monster_W3_AventurinePart_Ability01_Part01",
      "childAbilityList": [
        "8032031_Monster_W3_AventurinePart_Ability01_Camera",
        "8032031_Monster_W3_AventurinePart_Ability01_Part01",
        "8032031_Monster_W3_AventurinePart_Ability01_Part02"
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
          "ability": "Monster_W3_AventurinePart_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8032031_Monster_W3_AventurinePart_Passive01": {
      "fileName": "8032031_Monster_W3_AventurinePart_Passive01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1657959613\">Monster_W3_AventurinePart_BlockDamage</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"126188110\">Monster_W3_AventurinePart_SpeedZero</a>[<span class=\"descriptionNumberColor\">Fickle Fortune</span>]"
        }
      ],
      "references": []
    },
    "8032031_Modifiers": {
      "fileName": "8032031_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-96862504\">Monster_W3_AventurinePart_Odds_EnergyBar_RL</a>[<span class=\"descriptionNumberColor\">Odds</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (MDF_Layer) || RETURN",
                    "displayLines": "MDF_Layer",
                    "constants": [],
                    "variables": [
                      "MDF_Layer"
                    ]
                  },
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": {
                    "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                    "displayLines": "MDF_MaxLayer",
                    "constants": [],
                    "variables": [
                      "MDF_MaxLayer"
                    ]
                  },
                  "assignState": "True",
                  "state": "Active"
                }
              ]
            }
          ],
          "description": "Current Odds — 1:<span class=\"descriptionNumberColor\">MDF_Layer</span>. Highest Odds — 1:<span class=\"descriptionNumberColor\">MDF_MaxLayer</span>.",
          "type": "Other",
          "effectName": "Double Odds",
          "statusName": "Odds"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-409704654\">Monster_W3_AventurinePart_OddsHP_RL</a>",
          "stackType": "Multiple",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "GambleWinner",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Heal",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "healer": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "healPercent": {
                        "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__67) || RETURN",
                        "displayLines": "ENEMIES_OBJECT_UNUSED__67",
                        "constants": [],
                        "variables": [
                          "ENEMIES_OBJECT_UNUSED__67"
                        ]
                      },
                      "formula": "Heal from Target MaxHP"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1833952078\">Monster_W3_AventurinePart_Odds_RL</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Add Target by Unique Identifier",
                    "identifier": "W3_Aventurine_00"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-96862504\">Monster_W3_AventurinePart_Odds_EnergyBar_RL</a>[<span class=\"descriptionNumberColor\">Odds</span>]"
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Add Target by Unique Identifier",
                    "identifier": "W3_Aventurine_00"
                  },
                  "assignState": "False",
                  "state": "Disable"
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "assignState": "False",
                  "state": "Disable"
                }
              ]
            },
            {
              "eventTrigger": "Take Damage End [Owner]: Hit",
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
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1454354819\">Monster_W3_Aventurine_Gambling</a>[<span class=\"descriptionNumberColor\">Gamble</span>]"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "DiceGamblingInsertCheck_RL",
                        "compareType": "=",
                        "value2": 0,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "<a class=\"gModGreen\" id=\"-1833952078\">Monster_W3_AventurinePart_Odds_RL</a>",
                        "compareType": "<",
                        "value2": {
                          "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                          "displayLines": "MDF_MaxLayer",
                          "constants": [],
                          "variables": [
                            "MDF_MaxLayer"
                          ]
                        },
                        "valueType": "Layer"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W3_AventurinePart_Ability02_Part01_RL",
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "priorityTag": "MonsterChangePhase",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "DiceGamblingInsertCheck_RL",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "GambleOdds",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "MDF_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "MaxLayer",
                  "variableName": "MDF_MaxLayer",
                  "multiplier": 1
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Add Target by Unique Identifier",
                    "identifier": "W3_Aventurine_00"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-96862504\">Monster_W3_AventurinePart_Odds_EnergyBar_RL</a>[<span class=\"descriptionNumberColor\">Odds</span>]",
                  "valuePerStack": {
                    "MDF_Layer": {
                      "operator": "Variables[0] (MDF_Layer) || RETURN",
                      "displayLines": "MDF_Layer",
                      "constants": [],
                      "variables": [
                        "MDF_Layer"
                      ]
                    },
                    "MDF_MaxLayer": {
                      "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                      "displayLines": "MDF_MaxLayer",
                      "constants": [],
                      "variables": [
                        "MDF_MaxLayer"
                      ]
                    }
                  }
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (MDF_Layer) || RETURN",
                    "displayLines": "MDF_Layer",
                    "constants": [],
                    "variables": [
                      "MDF_Layer"
                    ]
                  },
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": {
                    "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                    "displayLines": "MDF_MaxLayer",
                    "constants": [],
                    "variables": [
                      "MDF_MaxLayer"
                    ]
                  },
                  "assignState": "True",
                  "state": "Active"
                },
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (GambleOdds) || RETURN",
                    "displayLines": "GambleOdds",
                    "constants": [],
                    "variables": [
                      "GambleOdds"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 4
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 8
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 16
                    }
                  ],
                  "defaultEvents": []
                },
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (GambleOdds) || RETURN",
                    "displayLines": "GambleOdds",
                    "constants": [],
                    "variables": [
                      "GambleOdds"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 4
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 8
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 16
                    }
                  ],
                  "defaultEvents": []
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "DiceGamblingInsertCheck_RL"
          ],
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-804462384\">Monster_W3_AventurinePart_OddsZero_RL</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__889329301\">Monster_W3_AventurinePart_01_SpeedZero</a>",
          "modifierFlags": [
            "MuteSpeed"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Block Advance/Delay Effects",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "isLock": false
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Block Advance/Delay Effects",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "whitelist": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "whitelistTag": "Mask_TurnBasedAdvance"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1321309283\">Monster_W3_AventurinePart_SpeedZero_RL</a>[<span class=\"descriptionNumberColor\">Forever Concealed</span>]",
          "modifierFlags": [
            "MuteSpeed"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Block Advance/Delay Effects",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "isLock": false
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Block Advance/Delay Effects",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "whitelist": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "whitelistTag": "Mask_TurnBasedAdvance"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "When this unit is attacked by a target that has entered the Gamble, the Gamble's odds are doubled.",
          "type": "Other",
          "statusName": "Forever Concealed"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__288143778\">Monster_W3_AventurinePart_DeathRattle_RL</a>[<span class=\"descriptionNumberColor\">Influx of Fortuity</span>]",
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
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1321309283\">Monster_W3_AventurinePart_SpeedZero_RL</a>[<span class=\"descriptionNumberColor\">Forever Concealed</span>]"
                  }
                }
              ]
            }
          ],
          "description": "When this unit is attacked by a target that has entered the Gamble, this unit always generates a roll of 6, and uses Punishment of Defeat when the Gamble ends.",
          "type": "Other",
          "effectName": "Influx of Fortuity",
          "statusName": "Influx of Fortuity"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1404216721\">Monster_W3_AventurinePart_01_BlockDamage_RL</a>[<span class=\"descriptionNumberColor\">Fickle Fortune</span>]",
          "modifierFlags": [
            "MuteAttachWeakness",
            "Deathrattle",
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Take Damage End [Owner]: Hit",
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
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1454354819\">Monster_W3_Aventurine_Gambling</a>[<span class=\"descriptionNumberColor\">Gamble</span>]"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "DiceGamblingInsertCheck",
                        "compareType": "=",
                        "value2": 0,
                        "contextScope": "TargetEntity"
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
                      "modifier": "<a class=\"gModGreen\" id=\"718327308\">Monster_W3_AventurinePart_Speed</a>"
                    },
                    {
                      "name": "Change Character Transformation",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "phase": "Phase2"
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "DiceGamblingInsertCheck",
                      "value": 1
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Add Target by Unique Identifier",
                          "identifier": "W3_Aventurine_00"
                        },
                        "value1": "DiceGamblingInsertCheck",
                        "compareType": "=",
                        "value2": 0,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W3_AventurinePart_Ability02_Part01",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "priorityTag": "MonsterChangePhase",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "allowAbilityTriggers": false
                        },
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Add Target by Unique Identifier",
                            "identifier": "W3_Aventurine_00"
                          },
                          "scope": "TargetEntity",
                          "variableName": "DiceGamblingInsertCheck",
                          "value": 1
                        }
                      ]
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
                  "variableName": "DeathRattle_RL",
                  "value": 0
                },
                {
                  "name": "Lock HP",
                  "threshold": 0.0009999999
                },
                {
                  "name": "Stack Target Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "STAT_CTRL",
                  "value": 1
                }
              ]
            },
            {
              "eventTrigger": "Was Killed (Queued) [Owner]",
              "execute": [
                {
                  "name": "Mark Entity For Immediate Death"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Living State",
                        "state": "Mask_AliveOnly",
                        "target": {
                          "name": "Add Target by Unique Identifier",
                          "identifier": "W3_Aventurine_00"
                        }
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "DeathRattle_RL",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Add Target by Unique Identifier",
                          "identifier": "W3_Aventurine_00"
                        },
                        "value1": "ChangePhaseCheck_RL",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Add Target by Unique Identifier",
                          "identifier": "W3_Aventurine_00"
                        },
                        "value1": "DiceDeathRattleInsertCheck",
                        "compareType": "=",
                        "value2": 0,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "<a class=\"gModGreen\" id=\"288143778\">Monster_W3_AventurinePart_DeathRattle_RL</a>[<span class=\"descriptionNumberColor\">Influx of Fortuity</span>]",
                          "priorityTag": "MonsterDeathRattle",
                          "ownerState": "Mask_AliveOrLimbo",
                          "targetState": "Mask_AliveOrLimbo",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "allowAbilityTriggers": false
                        },
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Add Target by Unique Identifier",
                            "identifier": "W3_Aventurine_00"
                          },
                          "scope": "TargetEntity",
                          "variableName": "DiceDeathRattleInsertCheck",
                          "value": 1
                        }
                      ],
                      "failed": [
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_W3_AventurinePart_NoDeathRattle_RL",
                          "priorityTag": "MonsterDeathRattle",
                          "ownerState": "Mask_AliveOrLimbo",
                          "targetState": "Mask_AliveOrLimbo",
                          "canHitNonTargets": true,
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W3_AventurinePart_NoDeathRattle_RL",
                      "priorityTag": "MonsterDeathRattle",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Locked HP Floor Reached [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "DeathRattle_RL",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DeathRattle_RL",
                      "value": 1
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"288143778\">Monster_W3_AventurinePart_DeathRattle_RL</a>[<span class=\"descriptionNumberColor\">Influx of Fortuity</span>]"
                    },
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
          "latentQueue": [],
          "description": "The minimum HP is 1. When attacked by a target that has entered the gamble, this unit gains a random number from 1 to 6. when its health drops to 1, this unit gains the Influx of Fortuity effect.",
          "type": "Other",
          "statusName": "Fickle Fortune"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2114595919\">Monster_W3_AventurinePart_ResultCountZero</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "Action Choice Window [Owner]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Add Target by Unique Identifier",
                    "identifier": "W3_Aventurine_00"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                        "compareType": "=",
                        "value2": 1,
                        "valueType": "Layer"
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
                        "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                        "compareType": "=",
                        "value2": 2,
                        "valueType": "Layer"
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
                        "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                        "compareType": "=",
                        "value2": 3,
                        "valueType": "Layer"
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
                        "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                        "compareType": "=",
                        "value2": 4,
                        "valueType": "Layer"
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
                        "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                        "compareType": "=",
                        "value2": 5,
                        "valueType": "Layer"
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
                        "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                        "compareType": "=",
                        "value2": 6,
                        "valueType": "Layer"
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
                        "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                        "compareType": "=",
                        "value2": 7,
                        "valueType": "Layer"
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
                        "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                        "compareType": "=",
                        "value2": 8,
                        "valueType": "Layer"
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
                        "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                        "compareType": "=",
                        "value2": 9,
                        "valueType": "Layer"
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
                        "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                        "compareType": ">",
                        "value2": 9,
                        "valueType": "Layer"
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-2085167186\">Monster_W3_Aventurine_RL</a>"
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value1": "HP_Bars_Remaining",
                            "compareType": "=",
                            "value2": 3
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Modifier Values",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "valueType": "Layer",
                          "variableName": "MDF_DiceResult_RL",
                          "multiplier": 1
                        },
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "MDF_DiceResult_RL",
                          "value": {
                            "operator": "Variables[0] (WHOLE) || Variables[1] (MDF_DiceResult_RL) || Constants[0] (10) || DIV || PARAM_1 || FUNCTION || RETURN",
                            "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">WHOLE</span>((MDF_DiceResult_RL / 10))",
                            "constants": [
                              10
                            ],
                            "variables": [
                              "WHOLE",
                              "MDF_DiceResult_RL"
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
                            "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                            "compareType": ">=",
                            "value2": 100,
                            "valueType": "Layer"
                          },
                          "failed": [
                            {
                              "name": "SWITCH",
                              "switchValue": {
                                "operator": "Variables[0] (MDF_DiceResult_RL) || RETURN",
                                "displayLines": "MDF_DiceResult_RL",
                                "constants": [],
                                "variables": [
                                  "MDF_DiceResult_RL"
                                ]
                              },
                              "caseEvents": [
                                {
                                  "name": "SWITCH CONDITON",
                                  "caseValueIs": 9
                                },
                                {
                                  "name": "SWITCH CONDITON",
                                  "caseValueIs": 8
                                },
                                {
                                  "name": "SWITCH CONDITON",
                                  "caseValueIs": 7
                                },
                                {
                                  "name": "SWITCH CONDITON",
                                  "caseValueIs": 6
                                },
                                {
                                  "name": "SWITCH CONDITON",
                                  "caseValueIs": 5
                                },
                                {
                                  "name": "SWITCH CONDITON",
                                  "caseValueIs": 4
                                },
                                {
                                  "name": "SWITCH CONDITON",
                                  "caseValueIs": 3
                                },
                                {
                                  "name": "SWITCH CONDITON",
                                  "caseValueIs": 2
                                },
                                {
                                  "name": "SWITCH CONDITON",
                                  "caseValueIs": 1
                                }
                              ],
                              "defaultEvents": []
                            }
                          ]
                        },
                        {
                          "name": "Define Custom Variable with Modifier Values",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "valueType": "Layer",
                          "variableName": "MDF_DiceResult_RL",
                          "multiplier": 1
                        },
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "MDF_DiceResult_RL",
                          "value": {
                            "operator": "Variables[0] (MDF_DiceResult_RL) || Constants[0] (10) || MOD || RETURN",
                            "displayLines": "(MDF_DiceResult_RL % 10)",
                            "constants": [
                              10
                            ],
                            "variables": [
                              "MDF_DiceResult_RL"
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
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                                "compareType": "<=",
                                "value2": 99,
                                "valueType": "Layer"
                              },
                              {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                                "compareType": ">=",
                                "value2": 10,
                                "valueType": "Layer"
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "SWITCH",
                              "switchValue": {
                                "operator": "Variables[0] (MDF_DiceResult_RL) || RETURN",
                                "displayLines": "MDF_DiceResult_RL",
                                "constants": [],
                                "variables": [
                                  "MDF_DiceResult_RL"
                                ]
                              },
                              "caseEvents": [
                                {
                                  "name": "SWITCH CONDITON",
                                  "caseValueIs": 0
                                },
                                {
                                  "name": "SWITCH CONDITON",
                                  "caseValueIs": 1
                                },
                                {
                                  "name": "SWITCH CONDITON",
                                  "caseValueIs": 2
                                },
                                {
                                  "name": "SWITCH CONDITON",
                                  "caseValueIs": 3
                                },
                                {
                                  "name": "SWITCH CONDITON",
                                  "caseValueIs": 4
                                },
                                {
                                  "name": "SWITCH CONDITON",
                                  "caseValueIs": 5
                                },
                                {
                                  "name": "SWITCH CONDITON",
                                  "caseValueIs": 6
                                },
                                {
                                  "name": "SWITCH CONDITON",
                                  "caseValueIs": 7
                                },
                                {
                                  "name": "SWITCH CONDITON",
                                  "caseValueIs": 8
                                },
                                {
                                  "name": "SWITCH CONDITON",
                                  "caseValueIs": 9
                                }
                              ],
                              "defaultEvents": []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "valueType": "Layer",
                      "variableName": "MDF_CurrentDiceResult",
                      "multiplier": 1
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "DiceResult",
                        "compareType": "<",
                        "value2": {
                          "operator": "Variables[0] (MDF_CurrentDiceResult) || RETURN",
                          "displayLines": "MDF_CurrentDiceResult",
                          "constants": [],
                          "variables": [
                            "MDF_CurrentDiceResult"
                          ]
                        }
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
                  "name": "Find New Target",
                  "from": {
                    "name": "Add Target by Unique Identifier",
                    "identifier": "W3_Aventurine_00"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Is Entity Type",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "type": "Memosprite",
                            "invertCondition": true
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-2085167186\">Monster_W3_Aventurine_RL</a>",
                            "invertCondition": true
                          }
                        ]
                      },
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-2085167186\">Monster_W3_Aventurine_RL</a>"
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value1": "HP_Bars_Remaining",
                            "compareType": "=",
                            "value2": 3,
                            "invertCondition": true
                          },
                          {
                            "name": "Is Entity Type",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "type": "Memosprite",
                            "invertCondition": true
                          }
                        ]
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                        "compareType": "=",
                        "value2": 1,
                        "valueType": "Layer"
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
                        "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                        "compareType": "=",
                        "value2": 2,
                        "valueType": "Layer"
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
                        "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                        "compareType": "=",
                        "value2": 3,
                        "valueType": "Layer"
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
                        "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                        "compareType": "=",
                        "value2": 4,
                        "valueType": "Layer"
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
                        "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                        "compareType": "=",
                        "value2": 5,
                        "valueType": "Layer"
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
                        "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                        "compareType": "=",
                        "value2": 6,
                        "valueType": "Layer"
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
                        "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                        "compareType": "=",
                        "value2": 7,
                        "valueType": "Layer"
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
                        "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                        "compareType": "=",
                        "value2": 8,
                        "valueType": "Layer"
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
                        "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                        "compareType": "=",
                        "value2": 9,
                        "valueType": "Layer"
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
                        "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                        "compareType": ">",
                        "value2": 9,
                        "valueType": "Layer"
                      }
                    },
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "valueType": "Layer",
                      "variableName": "MDF_CurrentDiceResult",
                      "multiplier": 1
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "DiceResult",
                        "compareType": "<",
                        "value2": {
                          "operator": "Variables[0] (MDF_CurrentDiceResult) || RETURN",
                          "displayLines": "MDF_CurrentDiceResult",
                          "constants": [],
                          "variables": [
                            "MDF_CurrentDiceResult"
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Add Target by Unique Identifier",
                    "identifier": "W3_Aventurine_00"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-2085167186\">Monster_W3_Aventurine_RL</a>"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 3
                      },
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "type": "Memosprite",
                        "invertCondition": true
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                        "compareType": "=",
                        "value2": 1,
                        "valueType": "Layer"
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
                        "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                        "compareType": "=",
                        "value2": 2,
                        "valueType": "Layer"
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
                        "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                        "compareType": "=",
                        "value2": 3,
                        "valueType": "Layer"
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
                        "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                        "compareType": "=",
                        "value2": 4,
                        "valueType": "Layer"
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
                        "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                        "compareType": "=",
                        "value2": 5,
                        "valueType": "Layer"
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
                        "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                        "compareType": "=",
                        "value2": 6,
                        "valueType": "Layer"
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
                        "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                        "compareType": "=",
                        "value2": 7,
                        "valueType": "Layer"
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
                        "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                        "compareType": "=",
                        "value2": 8,
                        "valueType": "Layer"
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
                        "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                        "compareType": "=",
                        "value2": 9,
                        "valueType": "Layer"
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-2085167186\">Monster_W3_Aventurine_RL</a>"
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value1": "HP_Bars_Remaining",
                            "compareType": "=",
                            "value2": 3
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Modifier Values",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "valueType": "Layer",
                          "variableName": "MDF_DiceResult_RL",
                          "multiplier": 1
                        },
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "MDF_DiceResult_RL",
                          "value": {
                            "operator": "Variables[0] (WHOLE) || Variables[1] (MDF_DiceResult_RL) || Constants[0] (10) || DIV || PARAM_1 || FUNCTION || RETURN",
                            "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">WHOLE</span>((MDF_DiceResult_RL / 10))",
                            "constants": [
                              10
                            ],
                            "variables": [
                              "WHOLE",
                              "MDF_DiceResult_RL"
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
                            "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                            "compareType": ">=",
                            "value2": 100,
                            "valueType": "Layer"
                          },
                          "failed": [
                            {
                              "name": "SWITCH",
                              "switchValue": {
                                "operator": "Variables[0] (MDF_DiceResult_RL) || RETURN",
                                "displayLines": "MDF_DiceResult_RL",
                                "constants": [],
                                "variables": [
                                  "MDF_DiceResult_RL"
                                ]
                              },
                              "caseEvents": [
                                {
                                  "name": "SWITCH CONDITON",
                                  "caseValueIs": 9
                                },
                                {
                                  "name": "SWITCH CONDITON",
                                  "caseValueIs": 8
                                },
                                {
                                  "name": "SWITCH CONDITON",
                                  "caseValueIs": 7
                                },
                                {
                                  "name": "SWITCH CONDITON",
                                  "caseValueIs": 6
                                },
                                {
                                  "name": "SWITCH CONDITON",
                                  "caseValueIs": 5
                                },
                                {
                                  "name": "SWITCH CONDITON",
                                  "caseValueIs": 4
                                },
                                {
                                  "name": "SWITCH CONDITON",
                                  "caseValueIs": 3
                                },
                                {
                                  "name": "SWITCH CONDITON",
                                  "caseValueIs": 2
                                },
                                {
                                  "name": "SWITCH CONDITON",
                                  "caseValueIs": 1
                                }
                              ],
                              "defaultEvents": []
                            }
                          ]
                        },
                        {
                          "name": "Define Custom Variable with Modifier Values",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "valueType": "Layer",
                          "variableName": "MDF_DiceResult_RL",
                          "multiplier": 1
                        },
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "MDF_DiceResult_RL",
                          "value": {
                            "operator": "Variables[0] (MDF_DiceResult_RL) || Constants[0] (10) || MOD || RETURN",
                            "displayLines": "(MDF_DiceResult_RL % 10)",
                            "constants": [
                              10
                            ],
                            "variables": [
                              "MDF_DiceResult_RL"
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
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                                "compareType": "<=",
                                "value2": 99,
                                "valueType": "Layer"
                              },
                              {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                                "compareType": ">=",
                                "value2": 10,
                                "valueType": "Layer"
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "SWITCH",
                              "switchValue": {
                                "operator": "Variables[0] (MDF_DiceResult_RL) || RETURN",
                                "displayLines": "MDF_DiceResult_RL",
                                "constants": [],
                                "variables": [
                                  "MDF_DiceResult_RL"
                                ]
                              },
                              "caseEvents": [
                                {
                                  "name": "SWITCH CONDITON",
                                  "caseValueIs": 0
                                },
                                {
                                  "name": "SWITCH CONDITON",
                                  "caseValueIs": 1
                                },
                                {
                                  "name": "SWITCH CONDITON",
                                  "caseValueIs": 2
                                },
                                {
                                  "name": "SWITCH CONDITON",
                                  "caseValueIs": 3
                                },
                                {
                                  "name": "SWITCH CONDITON",
                                  "caseValueIs": 4
                                },
                                {
                                  "name": "SWITCH CONDITON",
                                  "caseValueIs": 5
                                },
                                {
                                  "name": "SWITCH CONDITON",
                                  "caseValueIs": 6
                                },
                                {
                                  "name": "SWITCH CONDITON",
                                  "caseValueIs": 7
                                },
                                {
                                  "name": "SWITCH CONDITON",
                                  "caseValueIs": 8
                                },
                                {
                                  "name": "SWITCH CONDITON",
                                  "caseValueIs": 9
                                }
                              ],
                              "defaultEvents": []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "valueType": "Layer",
                      "variableName": "MDF_CurrentDiceResult",
                      "multiplier": 1
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-2085167186\">Monster_W3_Aventurine_RL</a>"
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value1": "HP_Bars_Remaining",
                            "compareType": "=",
                            "value2": 3
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
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "DiceResult",
                        "compareType": "<",
                        "value2": {
                          "operator": "Variables[0] (MDF_CurrentDiceResult) || RETURN",
                          "displayLines": "MDF_CurrentDiceResult",
                          "constants": [],
                          "variables": [
                            "MDF_CurrentDiceResult"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ultimate Prep-Phase [Owner]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Add Target by Unique Identifier",
                    "identifier": "W3_Aventurine_00"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                        "compareType": "=",
                        "value2": 1,
                        "valueType": "Layer"
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
                        "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                        "compareType": "=",
                        "value2": 2,
                        "valueType": "Layer"
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
                        "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                        "compareType": "=",
                        "value2": 3,
                        "valueType": "Layer"
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
                        "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                        "compareType": "=",
                        "value2": 4,
                        "valueType": "Layer"
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
                        "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                        "compareType": "=",
                        "value2": 5,
                        "valueType": "Layer"
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
                        "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                        "compareType": "=",
                        "value2": 6,
                        "valueType": "Layer"
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
                        "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                        "compareType": "=",
                        "value2": 7,
                        "valueType": "Layer"
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
                        "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                        "compareType": "=",
                        "value2": 8,
                        "valueType": "Layer"
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
                        "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                        "compareType": "=",
                        "value2": 9,
                        "valueType": "Layer"
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
                        "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                        "compareType": ">",
                        "value2": 9,
                        "valueType": "Layer"
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-2085167186\">Monster_W3_Aventurine_RL</a>"
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value1": "HP_Bars_Remaining",
                            "compareType": "=",
                            "value2": 3
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Modifier Values",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "valueType": "Layer",
                          "variableName": "MDF_DiceResult_RL",
                          "multiplier": 1
                        },
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "MDF_DiceResult_RL",
                          "value": {
                            "operator": "Variables[0] (WHOLE) || Variables[1] (MDF_DiceResult_RL) || Constants[0] (10) || DIV || PARAM_1 || FUNCTION || RETURN",
                            "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">WHOLE</span>((MDF_DiceResult_RL / 10))",
                            "constants": [
                              10
                            ],
                            "variables": [
                              "WHOLE",
                              "MDF_DiceResult_RL"
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
                            "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                            "compareType": ">=",
                            "value2": 100,
                            "valueType": "Layer"
                          },
                          "failed": [
                            {
                              "name": "SWITCH",
                              "switchValue": {
                                "operator": "Variables[0] (MDF_DiceResult_RL) || RETURN",
                                "displayLines": "MDF_DiceResult_RL",
                                "constants": [],
                                "variables": [
                                  "MDF_DiceResult_RL"
                                ]
                              },
                              "caseEvents": [
                                {
                                  "name": "SWITCH CONDITON",
                                  "caseValueIs": 9
                                },
                                {
                                  "name": "SWITCH CONDITON",
                                  "caseValueIs": 8
                                },
                                {
                                  "name": "SWITCH CONDITON",
                                  "caseValueIs": 7
                                },
                                {
                                  "name": "SWITCH CONDITON",
                                  "caseValueIs": 6
                                },
                                {
                                  "name": "SWITCH CONDITON",
                                  "caseValueIs": 5
                                },
                                {
                                  "name": "SWITCH CONDITON",
                                  "caseValueIs": 4
                                },
                                {
                                  "name": "SWITCH CONDITON",
                                  "caseValueIs": 3
                                },
                                {
                                  "name": "SWITCH CONDITON",
                                  "caseValueIs": 2
                                },
                                {
                                  "name": "SWITCH CONDITON",
                                  "caseValueIs": 1
                                }
                              ],
                              "defaultEvents": []
                            }
                          ]
                        },
                        {
                          "name": "Define Custom Variable with Modifier Values",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "valueType": "Layer",
                          "variableName": "MDF_DiceResult_RL",
                          "multiplier": 1
                        },
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "MDF_DiceResult_RL",
                          "value": {
                            "operator": "Variables[0] (MDF_DiceResult_RL) || Constants[0] (10) || MOD || RETURN",
                            "displayLines": "(MDF_DiceResult_RL % 10)",
                            "constants": [
                              10
                            ],
                            "variables": [
                              "MDF_DiceResult_RL"
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
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                                "compareType": "<=",
                                "value2": 99,
                                "valueType": "Layer"
                              },
                              {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value1": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                                "compareType": ">=",
                                "value2": 10,
                                "valueType": "Layer"
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "SWITCH",
                              "switchValue": {
                                "operator": "Variables[0] (MDF_DiceResult_RL) || RETURN",
                                "displayLines": "MDF_DiceResult_RL",
                                "constants": [],
                                "variables": [
                                  "MDF_DiceResult_RL"
                                ]
                              },
                              "caseEvents": [
                                {
                                  "name": "SWITCH CONDITON",
                                  "caseValueIs": 0
                                },
                                {
                                  "name": "SWITCH CONDITON",
                                  "caseValueIs": 1
                                },
                                {
                                  "name": "SWITCH CONDITON",
                                  "caseValueIs": 2
                                },
                                {
                                  "name": "SWITCH CONDITON",
                                  "caseValueIs": 3
                                },
                                {
                                  "name": "SWITCH CONDITON",
                                  "caseValueIs": 4
                                },
                                {
                                  "name": "SWITCH CONDITON",
                                  "caseValueIs": 5
                                },
                                {
                                  "name": "SWITCH CONDITON",
                                  "caseValueIs": 6
                                },
                                {
                                  "name": "SWITCH CONDITON",
                                  "caseValueIs": 7
                                },
                                {
                                  "name": "SWITCH CONDITON",
                                  "caseValueIs": 8
                                },
                                {
                                  "name": "SWITCH CONDITON",
                                  "caseValueIs": 9
                                }
                              ],
                              "defaultEvents": []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "valueType": "Layer",
                      "variableName": "MDF_CurrentDiceResult",
                      "multiplier": 1
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "DiceResult",
                        "compareType": "<",
                        "value2": {
                          "operator": "Variables[0] (MDF_CurrentDiceResult) || RETURN",
                          "displayLines": "MDF_CurrentDiceResult",
                          "constants": [],
                          "variables": [
                            "MDF_CurrentDiceResult"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackLimit": 999,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-34127136\">Monster_W3_AventurinePart_Result</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "team": "Enemy Team"
                      },
                      {
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "compareType": "=",
                        "value2": 4
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "DiceResult",
                      "value": {
                        "operator": "Variables[0] (MDF_DiceResult) || RETURN",
                        "displayLines": "MDF_DiceResult",
                        "constants": [],
                        "variables": [
                          "MDF_DiceResult"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Add Target by Unique Identifier",
                          "identifier": "W3_Aventurine_00"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-2085167186\">Monster_W3_Aventurine_RL</a>"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Add Target by Unique Identifier",
                          "identifier": "W3_Aventurine_00"
                        },
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 3
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1604729097\">Monster_W3_AventurinePart_ResultTarget</a>"
                          },
                          {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"1454354819\">Monster_W3_Aventurine_Gambling</a>[<span class=\"descriptionNumberColor\">Gamble</span>]"
                              },
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-505266167\">Monster_W3_Aventurine_Gambling_Servant</a>[<span class=\"descriptionNumberColor\">Gamble</span>]"
                              }
                            ]
                          }
                        ]
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                          "addStacksPerTrigger": {
                            "operator": "Variables[0] (MDF_DiceResult) || RETURN",
                            "displayLines": "MDF_DiceResult",
                            "constants": [],
                            "variables": [
                              "MDF_DiceResult"
                            ]
                          }
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1604729097\">Monster_W3_AventurinePart_ResultTarget</a>"
                          },
                          {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"1454354819\">Monster_W3_Aventurine_Gambling</a>[<span class=\"descriptionNumberColor\">Gamble</span>]"
                              },
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-505266167\">Monster_W3_Aventurine_Gambling_Servant</a>[<span class=\"descriptionNumberColor\">Gamble</span>]"
                              }
                            ]
                          }
                        ]
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-699513905\">Monster_W3_AventurinePart_ResultCount</a>",
                          "addStacksPerTrigger": {
                            "operator": "Variables[0] (MDF_DiceResult) || RETURN",
                            "displayLines": "MDF_DiceResult",
                            "constants": [],
                            "variables": [
                              "MDF_DiceResult"
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
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Monster Rank",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "compareType": "=",
                    "value2": 4
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "Compare: Variable",
                                "value1": "DiceResult",
                                "compareType": "=",
                                "value2": 5
                              },
                              {
                                "name": "Random Chance",
                                "chance": 0.2449
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_DiceResult",
                              "value": 1
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Monster Rank",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "compareType": "<",
                                "value2": 5
                              }
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
                                    "value1": "DiceResult",
                                    "compareType": "=",
                                    "value2": 4
                                  },
                                  {
                                    "name": "Random Chance",
                                    "chance": 0.4054
                                  }
                                ]
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "MDF_DiceResult",
                                  "value": 2
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Monster Rank",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Modifier Holder}}"
                                    },
                                    "compareType": "<",
                                    "value2": 5
                                  }
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
                                        "value1": "DiceResult",
                                        "compareType": "=",
                                        "value2": 3
                                      },
                                      {
                                        "name": "Random Chance",
                                        "chance": 0.6818
                                      }
                                    ]
                                  },
                                  "passed": [
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "MDF_DiceResult",
                                      "value": 3
                                    },
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Compare: Monster Rank",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Modifier Holder}}"
                                        },
                                        "compareType": "<",
                                        "value2": 5
                                      }
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
                                            "value1": "DiceResult",
                                            "compareType": "=",
                                            "value2": 2
                                          },
                                          {
                                            "name": "Random Chance",
                                            "chance": 0.7143
                                          }
                                        ]
                                      },
                                      "passed": [
                                        {
                                          "name": "Define Custom Variable",
                                          "variableName": "MDF_DiceResult",
                                          "value": 4
                                        },
                                        {
                                          "name": "IF",
                                          "conditions": {
                                            "name": "Compare: Monster Rank",
                                            "target": {
                                              "name": "Target Name",
                                              "target": "{{Modifier Holder}}"
                                            },
                                            "compareType": "<",
                                            "value2": 5
                                          }
                                        }
                                      ],
                                      "failed": [
                                        {
                                          "name": "IF",
                                          "conditions": {
                                            "name": "Random Chance",
                                            "chance": 1
                                          },
                                          "passed": [
                                            {
                                              "name": "Define Custom Variable",
                                              "variableName": "MDF_DiceResult",
                                              "value": 5
                                            },
                                            {
                                              "name": "IF",
                                              "conditions": {
                                                "name": "Compare: Monster Rank",
                                                "target": {
                                                  "name": "Target Name",
                                                  "target": "{{Modifier Holder}}"
                                                },
                                                "compareType": "<",
                                                "value2": 5
                                              }
                                            }
                                          ],
                                          "failed": [
                                            {
                                              "name": "Define Custom Variable",
                                              "variableName": "MDF_DiceResult",
                                              "value": 6
                                            },
                                            {
                                              "name": "IF",
                                              "conditions": {
                                                "name": "Compare: Monster Rank",
                                                "target": {
                                                  "name": "Target Name",
                                                  "target": "{{Modifier Holder}}"
                                                },
                                                "compareType": "<",
                                                "value2": 5
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
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "HP_Bars_Remaining",
                            "compareType": "=",
                            "value2": 2
                          },
                          "passed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Random Chance",
                                "chance": 0
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "MDF_DiceResult",
                                  "value": 1
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Monster Rank",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Modifier Holder}}"
                                    },
                                    "compareType": "<",
                                    "value2": 5
                                  }
                                }
                              ],
                              "failed": [
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Random Chance",
                                    "chance": 0.2
                                  },
                                  "passed": [
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "MDF_DiceResult",
                                      "value": 2
                                    },
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Compare: Monster Rank",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Modifier Holder}}"
                                        },
                                        "compareType": "<",
                                        "value2": 5
                                      }
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
                                            "value1": "DiceResult",
                                            "compareType": "=",
                                            "value2": 6
                                          },
                                          {
                                            "name": "Random Chance",
                                            "chance": 0.25
                                          }
                                        ]
                                      },
                                      "passed": [
                                        {
                                          "name": "Define Custom Variable",
                                          "variableName": "MDF_DiceResult",
                                          "value": 3
                                        },
                                        {
                                          "name": "IF",
                                          "conditions": {
                                            "name": "Compare: Monster Rank",
                                            "target": {
                                              "name": "Target Name",
                                              "target": "{{Modifier Holder}}"
                                            },
                                            "compareType": "<",
                                            "value2": 5
                                          }
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
                                                "value1": "DiceResult",
                                                "compareType": "=",
                                                "value2": 5
                                              },
                                              {
                                                "name": "Random Chance",
                                                "chance": 0.3333
                                              }
                                            ]
                                          },
                                          "passed": [
                                            {
                                              "name": "Define Custom Variable",
                                              "variableName": "MDF_DiceResult",
                                              "value": 4
                                            },
                                            {
                                              "name": "IF",
                                              "conditions": {
                                                "name": "Compare: Monster Rank",
                                                "target": {
                                                  "name": "Target Name",
                                                  "target": "{{Modifier Holder}}"
                                                },
                                                "compareType": "<",
                                                "value2": 5
                                              }
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
                                                    "value1": "DiceResult",
                                                    "compareType": "=",
                                                    "value2": 4
                                                  },
                                                  {
                                                    "name": "Random Chance",
                                                    "chance": 0.5
                                                  }
                                                ]
                                              },
                                              "passed": [
                                                {
                                                  "name": "Define Custom Variable",
                                                  "variableName": "MDF_DiceResult",
                                                  "value": 5
                                                },
                                                {
                                                  "name": "IF",
                                                  "conditions": {
                                                    "name": "Compare: Monster Rank",
                                                    "target": {
                                                      "name": "Target Name",
                                                      "target": "{{Modifier Holder}}"
                                                    },
                                                    "compareType": "<",
                                                    "value2": 5
                                                  }
                                                }
                                              ],
                                              "failed": [
                                                {
                                                  "name": "Define Custom Variable",
                                                  "variableName": "MDF_DiceResult",
                                                  "value": 6
                                                },
                                                {
                                                  "name": "IF",
                                                  "conditions": {
                                                    "name": "Compare: Monster Rank",
                                                    "target": {
                                                      "name": "Target Name",
                                                      "target": "{{Modifier Holder}}"
                                                    },
                                                    "compareType": "<",
                                                    "value2": 5
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
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Random Chance",
                                "chance": 0
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "MDF_DiceResult",
                                  "value": 1
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Has Modifier",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Modifier Holder}}"
                                    },
                                    "modifier": "<a class=\"gModGreen\" id=\"653450113\">Monster_W3_Aventurine_TargetDice_RL</a>"
                                  },
                                  "passed": [
                                    {
                                      "name": "Looped Event",
                                      "maxLoops": {
                                        "operator": "Variables[0] (MDF_MaxLoopCount_RL) || Constants[0] (1) || SUB || RETURN",
                                        "displayLines": "(MDF_MaxLoopCount_RL - 1)",
                                        "constants": [
                                          1
                                        ],
                                        "variables": [
                                          "MDF_MaxLoopCount_RL"
                                        ]
                                      },
                                      "Event": [
                                        {
                                          "name": "Define Custom Variable",
                                          "variableName": "MDF_DiceResult",
                                          "value": {
                                            "operator": "Variables[0] (MDF_DiceResult) || Constants[0] (1) || ADD || RETURN",
                                            "displayLines": "(MDF_DiceResult + 1)",
                                            "constants": [
                                              1
                                            ],
                                            "variables": [
                                              "MDF_DiceResult"
                                            ]
                                          }
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
                                    "name": "Random Chance",
                                    "chance": 0
                                  },
                                  "passed": [
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "MDF_DiceResult",
                                      "value": 2
                                    },
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Has Modifier",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Modifier Holder}}"
                                        },
                                        "modifier": "<a class=\"gModGreen\" id=\"653450113\">Monster_W3_Aventurine_TargetDice_RL</a>"
                                      },
                                      "passed": [
                                        {
                                          "name": "Looped Event",
                                          "maxLoops": {
                                            "operator": "Variables[0] (MDF_MaxLoopCount_RL) || Constants[0] (1) || SUB || RETURN",
                                            "displayLines": "(MDF_MaxLoopCount_RL - 1)",
                                            "constants": [
                                              1
                                            ],
                                            "variables": [
                                              "MDF_MaxLoopCount_RL"
                                            ]
                                          },
                                          "Event": [
                                            {
                                              "name": "Define Custom Variable",
                                              "variableName": "MDF_DiceResult",
                                              "value": {
                                                "operator": "Variables[0] (MDF_DiceResult) || Constants[0] (2) || ADD || RETURN",
                                                "displayLines": "(MDF_DiceResult + 2)",
                                                "constants": [
                                                  2
                                                ],
                                                "variables": [
                                                  "MDF_DiceResult"
                                                ]
                                              }
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
                                            "name": "Random Chance",
                                            "chance": 0
                                          }
                                        ]
                                      },
                                      "passed": [
                                        {
                                          "name": "Define Custom Variable",
                                          "variableName": "MDF_DiceResult",
                                          "value": 3
                                        },
                                        {
                                          "name": "IF",
                                          "conditions": {
                                            "name": "Has Modifier",
                                            "target": {
                                              "name": "Target Name",
                                              "target": "{{Modifier Holder}}"
                                            },
                                            "modifier": "<a class=\"gModGreen\" id=\"653450113\">Monster_W3_Aventurine_TargetDice_RL</a>"
                                          },
                                          "passed": [
                                            {
                                              "name": "Looped Event",
                                              "maxLoops": {
                                                "operator": "Variables[0] (MDF_MaxLoopCount_RL) || Constants[0] (1) || SUB || RETURN",
                                                "displayLines": "(MDF_MaxLoopCount_RL - 1)",
                                                "constants": [
                                                  1
                                                ],
                                                "variables": [
                                                  "MDF_MaxLoopCount_RL"
                                                ]
                                              },
                                              "Event": [
                                                {
                                                  "name": "Define Custom Variable",
                                                  "variableName": "MDF_DiceResult",
                                                  "value": {
                                                    "operator": "Variables[0] (MDF_DiceResult) || Constants[0] (3) || ADD || RETURN",
                                                    "displayLines": "(MDF_DiceResult + 3)",
                                                    "constants": [
                                                      3
                                                    ],
                                                    "variables": [
                                                      "MDF_DiceResult"
                                                    ]
                                                  }
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
                                                "name": "Random Chance",
                                                "chance": 0.33
                                              }
                                            ]
                                          },
                                          "passed": [
                                            {
                                              "name": "Define Custom Variable",
                                              "variableName": "MDF_DiceResult",
                                              "value": 4
                                            },
                                            {
                                              "name": "IF",
                                              "conditions": {
                                                "name": "Has Modifier",
                                                "target": {
                                                  "name": "Target Name",
                                                  "target": "{{Modifier Holder}}"
                                                },
                                                "modifier": "<a class=\"gModGreen\" id=\"653450113\">Monster_W3_Aventurine_TargetDice_RL</a>"
                                              },
                                              "passed": [
                                                {
                                                  "name": "Looped Event",
                                                  "maxLoops": {
                                                    "operator": "Variables[0] (MDF_MaxLoopCount_RL) || Constants[0] (1) || SUB || RETURN",
                                                    "displayLines": "(MDF_MaxLoopCount_RL - 1)",
                                                    "constants": [
                                                      1
                                                    ],
                                                    "variables": [
                                                      "MDF_MaxLoopCount_RL"
                                                    ]
                                                  },
                                                  "Event": [
                                                    {
                                                      "name": "Define Custom Variable",
                                                      "variableName": "MDF_DiceResult",
                                                      "value": {
                                                        "operator": "Variables[0] (MDF_DiceResult) || Constants[0] (4) || ADD || RETURN",
                                                        "displayLines": "(MDF_DiceResult + 4)",
                                                        "constants": [
                                                          4
                                                        ],
                                                        "variables": [
                                                          "MDF_DiceResult"
                                                        ]
                                                      }
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
                                                    "name": "Random Chance",
                                                    "chance": 0.5
                                                  }
                                                ]
                                              },
                                              "passed": [
                                                {
                                                  "name": "Define Custom Variable",
                                                  "variableName": "MDF_DiceResult",
                                                  "value": 5
                                                },
                                                {
                                                  "name": "IF",
                                                  "conditions": {
                                                    "name": "Has Modifier",
                                                    "target": {
                                                      "name": "Target Name",
                                                      "target": "{{Modifier Holder}}"
                                                    },
                                                    "modifier": "<a class=\"gModGreen\" id=\"653450113\">Monster_W3_Aventurine_TargetDice_RL</a>"
                                                  },
                                                  "passed": [
                                                    {
                                                      "name": "Looped Event",
                                                      "maxLoops": {
                                                        "operator": "Variables[0] (MDF_MaxLoopCount_RL) || Constants[0] (1) || SUB || RETURN",
                                                        "displayLines": "(MDF_MaxLoopCount_RL - 1)",
                                                        "constants": [
                                                          1
                                                        ],
                                                        "variables": [
                                                          "MDF_MaxLoopCount_RL"
                                                        ]
                                                      },
                                                      "Event": [
                                                        {
                                                          "name": "Define Custom Variable",
                                                          "variableName": "MDF_DiceResult",
                                                          "value": {
                                                            "operator": "Variables[0] (MDF_DiceResult) || Constants[0] (5) || ADD || RETURN",
                                                            "displayLines": "(MDF_DiceResult + 5)",
                                                            "constants": [
                                                              5
                                                            ],
                                                            "variables": [
                                                              "MDF_DiceResult"
                                                            ]
                                                          }
                                                        }
                                                      ]
                                                    }
                                                  ]
                                                }
                                              ],
                                              "failed": [
                                                {
                                                  "name": "Define Custom Variable",
                                                  "variableName": "MDF_DiceResult",
                                                  "value": 6
                                                },
                                                {
                                                  "name": "IF",
                                                  "conditions": {
                                                    "name": "Has Modifier",
                                                    "target": {
                                                      "name": "Target Name",
                                                      "target": "{{Modifier Holder}}"
                                                    },
                                                    "modifier": "<a class=\"gModGreen\" id=\"653450113\">Monster_W3_Aventurine_TargetDice_RL</a>"
                                                  },
                                                  "passed": [
                                                    {
                                                      "name": "Looped Event",
                                                      "maxLoops": {
                                                        "operator": "Variables[0] (MDF_MaxLoopCount_RL) || Constants[0] (1) || SUB || RETURN",
                                                        "displayLines": "(MDF_MaxLoopCount_RL - 1)",
                                                        "constants": [
                                                          1
                                                        ],
                                                        "variables": [
                                                          "MDF_MaxLoopCount_RL"
                                                        ]
                                                      },
                                                      "Event": [
                                                        {
                                                          "name": "Define Custom Variable",
                                                          "variableName": "MDF_DiceResult",
                                                          "value": {
                                                            "operator": "Variables[0] (MDF_DiceResult) || Constants[0] (6) || ADD || RETURN",
                                                            "displayLines": "(MDF_DiceResult + 6)",
                                                            "constants": [
                                                              6
                                                            ],
                                                            "variables": [
                                                              "MDF_DiceResult"
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
                                  ]
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
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "DeathRattle_RL",
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
                          "scope": "ContextModifier",
                          "variableName": "MDF_DiceResult",
                          "value": 6
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Random Chance",
                            "chance": 0.1667
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_DiceResult",
                              "value": 1
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Monster Rank",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "compareType": "<",
                                "value2": 4
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Random Chance",
                                "chance": 0.2
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "MDF_DiceResult",
                                  "value": 2
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Monster Rank",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Modifier Holder}}"
                                    },
                                    "compareType": "<",
                                    "value2": 4
                                  }
                                }
                              ],
                              "failed": [
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Random Chance",
                                    "chance": 0.25
                                  },
                                  "passed": [
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "MDF_DiceResult",
                                      "value": 3
                                    },
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Compare: Monster Rank",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Modifier Holder}}"
                                        },
                                        "compareType": "<",
                                        "value2": 4
                                      }
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Random Chance",
                                        "chance": 0.3333
                                      },
                                      "passed": [
                                        {
                                          "name": "Define Custom Variable",
                                          "variableName": "MDF_DiceResult",
                                          "value": 4
                                        },
                                        {
                                          "name": "IF",
                                          "conditions": {
                                            "name": "Compare: Monster Rank",
                                            "target": {
                                              "name": "Target Name",
                                              "target": "{{Modifier Holder}}"
                                            },
                                            "compareType": "<",
                                            "value2": 4
                                          }
                                        }
                                      ],
                                      "failed": [
                                        {
                                          "name": "IF",
                                          "conditions": {
                                            "name": "Random Chance",
                                            "chance": 0.5
                                          },
                                          "passed": [
                                            {
                                              "name": "Define Custom Variable",
                                              "variableName": "MDF_DiceResult",
                                              "value": 5
                                            },
                                            {
                                              "name": "IF",
                                              "conditions": {
                                                "name": "Compare: Monster Rank",
                                                "target": {
                                                  "name": "Target Name",
                                                  "target": "{{Modifier Holder}}"
                                                },
                                                "compareType": "<",
                                                "value2": 4
                                              }
                                            }
                                          ],
                                          "failed": [
                                            {
                                              "name": "Define Custom Variable",
                                              "variableName": "MDF_DiceResult",
                                              "value": 6
                                            },
                                            {
                                              "name": "IF",
                                              "conditions": {
                                                "name": "Compare: Monster Rank",
                                                "target": {
                                                  "name": "Target Name",
                                                  "target": "{{Modifier Holder}}"
                                                },
                                                "compareType": "<",
                                                "value2": 4
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
                      ]
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "compareType": "=",
                        "value2": 4
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1925458192\">Monster_W3_Aventurine_GamblingAbility</a>"
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "DiceResult",
                      "value": {
                        "operator": "Variables[0] (DiceResult) || Variables[1] (MDF_DiceResult) || ADD || RETURN",
                        "displayLines": "(DiceResult + MDF_DiceResult)",
                        "constants": [],
                        "variables": [
                          "DiceResult",
                          "MDF_DiceResult"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "DiceGamblingInsertCheck"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1430761430\">Monster_W3_AventurinePart_LuckyResult</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "DiceResult",
                  "value": {
                    "operator": "Variables[0] (MDF_DiceResult) || RETURN",
                    "displayLines": "MDF_DiceResult",
                    "constants": [],
                    "variables": [
                      "MDF_DiceResult"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_DiceResult",
                  "value": 6
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1604729097\">Monster_W3_AventurinePart_ResultTarget</a>",
          "stackData": [],
          "latentQueue": [
            "DiceGamblingInsertCheck"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__126188110\">Monster_W3_AventurinePart_SpeedZero</a>[<span class=\"descriptionNumberColor\">Fickle Fortune</span>]",
          "modifierFlags": [
            "MuteSpeed"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Block Advance/Delay Effects",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "isLock": false
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Block Advance/Delay Effects",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "whitelist": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "whitelistTag": "Mask_TurnBasedAdvance"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "Immune to DMG. When this unit is attacked by a target that has entered the Gamble, apply 1 random number (between 1 and 6) to the target.",
          "type": "Other",
          "statusName": "Fickle Fortune"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1657959613\">Monster_W3_AventurinePart_BlockDamage</a>",
          "modifierFlags": [
            "BlockDamage",
            "MuteAttachWeakness"
          ],
          "execute": [
            {
              "eventTrigger": "Take Damage End [Owner]: Hit",
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
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1454354819\">Monster_W3_Aventurine_Gambling</a>[<span class=\"descriptionNumberColor\">Gamble</span>]"
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-505266167\">Monster_W3_Aventurine_Gambling_Servant</a>[<span class=\"descriptionNumberColor\">Gamble</span>]"
                          }
                        ]
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "DiceGamblingInsertCheck",
                        "compareType": "=",
                        "value2": 0,
                        "contextScope": "TargetEntity"
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
                      "modifier": "<a class=\"gModGreen\" id=\"718327308\">Monster_W3_AventurinePart_Speed</a>"
                    },
                    {
                      "name": "Change Character Transformation",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "phase": "Phase2"
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "DiceGamblingInsertCheck",
                      "value": 1
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Add Target by Unique Identifier",
                          "identifier": "W3_Aventurine_00"
                        },
                        "value1": "DiceGamblingInsertCheck",
                        "compareType": "=",
                        "value2": 0,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Is Entity Type",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "type": "Memosprite"
                          },
                          "passed": [
                            {
                              "name": "Inject Ability Use",
                              "abilityName": "Monster_W3_AventurinePart_Ability02_Part01",
                              "abilitySource": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "abilityTarget": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}.[[getSummoner]]"
                              },
                              "priorityTag": "MonsterChangePhase",
                              "canHitNonTargets": true,
                              "showInActionOrder": true,
                              "allowAbilityTriggers": false
                            }
                          ],
                          "failed": [
                            {
                              "name": "Inject Ability Use",
                              "abilityName": "Monster_W3_AventurinePart_Ability02_Part01",
                              "abilitySource": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "abilityTarget": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "priorityTag": "MonsterChangePhase",
                              "canHitNonTargets": true,
                              "showInActionOrder": true,
                              "allowAbilityTriggers": false
                            }
                          ]
                        },
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Add Target by Unique Identifier",
                            "identifier": "W3_Aventurine_00"
                          },
                          "scope": "TargetEntity",
                          "variableName": "DiceGamblingInsertCheck",
                          "value": 1
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "STAT_CTRL",
                  "value": 1
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__718327308\">Monster_W3_AventurinePart_Speed</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": [
            "DiceGamblingInsertCheck"
          ]
        }
      ],
      "references": []
    }
  }
}