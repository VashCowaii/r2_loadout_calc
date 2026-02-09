const configAbility = {
  "fileName": "8003011_Monster_XP_Elite01_01_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "Phase_Flag",
        "compareType": "=",
        "value2": 2,
        "contextScope": "TargetEntity"
      },
      "passed": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[1]]}) || Constants[0] (0.3) || MUL || RETURN",
              "displayLines": "({[Skill03[1]]} * 0.3)",
              "constants": [
                0.3
              ],
              "variables": [
                "{[Skill03[1]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "30%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[1]]}) || Constants[0] (0.3) || MUL || RETURN",
              "displayLines": "({[Skill03[1]]} * 0.3)",
              "constants": [
                0.3
              ],
              "variables": [
                "{[Skill03[1]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "30%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[1]]}) || Constants[0] (0.4) || MUL || RETURN",
              "displayLines": "({[Skill03[1]]} * 0.4)",
              "constants": [
                0.4
              ],
              "variables": [
                "{[Skill03[1]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "40%"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "value1": "Current_Living_Enemies",
            "compareType": ">",
            "value2": 2
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Enemy ID",
                "ID": 8003011,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Ice Out of Space (Bug)"
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 2,
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]",
                      "duration": {
                        "operator": "Variables[0] ({[Skill03[3]]}) || RETURN",
                        "displayLines": "{[Skill03[3]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill03[3]]}"
                        ]
                      },
                      "baseChance": {
                        "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
                        "displayLines": "{[Skill03[2]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill03[2]]}"
                        ]
                      },
                      "valuePerStack": {
                        "Modifier_Frozen_DamagePercentage": {
                          "operator": "Variables[0] ({[Skill03[4]]}) || RETURN",
                          "displayLines": "{[Skill03[4]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill03[4]]}"
                          ]
                        }
                      },
                      "success": [
                        {
                          "name": "Action Advance/Delay",
                          "advanceType": "Set",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "multiBase": {
                            "operator": "Variables[0] ({[Skill03[5]]}) || RETURN",
                            "displayLines": "{[Skill03[5]]}",
                            "constants": [],
                            "variables": [
                              "{[Skill03[5]]}"
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
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 2,
                  "conditions": {
                    "name": "NOT",
                    "condition": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]"
                    }
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]",
                      "duration": {
                        "operator": "Variables[0] ({[Skill03[3]]}) || RETURN",
                        "displayLines": "{[Skill03[3]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill03[3]]}"
                        ]
                      },
                      "baseChance": {
                        "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
                        "displayLines": "{[Skill03[2]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill03[2]]}"
                        ]
                      },
                      "valuePerStack": {
                        "Modifier_Frozen_DamagePercentage": {
                          "operator": "Variables[0] ({[Skill03[4]]}) || RETURN",
                          "displayLines": "{[Skill03[4]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill03[4]]}"
                          ]
                        }
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
                "name": "Enemy ID",
                "ID": 8003011,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Ice Out of Space (Bug)"
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]",
                      "duration": {
                        "operator": "Variables[0] ({[Skill03[3]]}) || RETURN",
                        "displayLines": "{[Skill03[3]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill03[3]]}"
                        ]
                      },
                      "baseChance": {
                        "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
                        "displayLines": "{[Skill03[2]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill03[2]]}"
                        ]
                      },
                      "valuePerStack": {
                        "Modifier_Frozen_DamagePercentage": {
                          "operator": "Variables[0] ({[Skill03[4]]}) || RETURN",
                          "displayLines": "{[Skill03[4]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill03[4]]}"
                          ]
                        }
                      },
                      "success": [
                        {
                          "name": "Action Advance/Delay",
                          "advanceType": "Set",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "multiBase": {
                            "operator": "Variables[0] ({[Skill03[5]]}) || RETURN",
                            "displayLines": "{[Skill03[5]]}",
                            "constants": [],
                            "variables": [
                              "{[Skill03[5]]}"
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
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "NOT",
                    "condition": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]"
                    }
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]",
                      "duration": {
                        "operator": "Variables[0] ({[Skill03[3]]}) || RETURN",
                        "displayLines": "{[Skill03[3]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill03[3]]}"
                        ]
                      },
                      "baseChance": {
                        "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
                        "displayLines": "{[Skill03[2]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill03[2]]}"
                        ]
                      },
                      "valuePerStack": {
                        "Modifier_Frozen_DamagePercentage": {
                          "operator": "Variables[0] ({[Skill03[4]]}) || RETURN",
                          "displayLines": "{[Skill03[4]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill03[4]]}"
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
      ],
      "failed": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || Constants[0] (0.3) || MUL || RETURN",
              "displayLines": "({[Skill03[0]]} * 0.3)",
              "constants": [
                0.3
              ],
              "variables": [
                "{[Skill03[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "30%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || Constants[0] (0.3) || MUL || RETURN",
              "displayLines": "({[Skill03[0]]} * 0.3)",
              "constants": [
                0.3
              ],
              "variables": [
                "{[Skill03[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "30%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || Constants[0] (0.4) || MUL || RETURN",
              "displayLines": "({[Skill03[0]]} * 0.4)",
              "constants": [
                0.4
              ],
              "variables": [
                "{[Skill03[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "40%"
          }
        }
      ]
    },
    "Trigger: Attack End",
    "Trigger: Ability End"
  ],
  "references": []
}