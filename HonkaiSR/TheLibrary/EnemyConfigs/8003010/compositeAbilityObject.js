const compositeAbilityObject = {
  "fullCharacterName": 8003010,
  "trimCharacterName": 8003010,
  "abilityList": [
    "8003010_Monster_XP_Elite01_01_Ability06_Part02",
    "8003010_Monster_XP_Elite01_01_Ability06_Part01",
    "8003010_Monster_XP_Elite01_01_Ability05_Part02",
    "8003010_Monster_XP_Elite01_01_Ability05_Part01",
    "8003010_Monster_XP_Elite01_01_Ability03_Part02",
    "8003010_Monster_XP_Elite01_01_Ability03_Part01",
    "8003010_Monster_XP_Elite01_01_Ability02_Part02",
    "8003010_Monster_XP_Elite01_01_Ability02_Part01",
    "8003010_Monster_XP_Elite01_01_Ability04_Part02",
    "8003010_Monster_XP_Elite01_01_Ability04_Part01",
    "8003010_Monster_XP_Elite01_01_Ability01_Part02",
    "8003010_Monster_XP_Elite01_01_Ability01_Part01",
    "8003010_Monster_XP_Elite01_01_PassiveAbility01",
    "8003010_Modifiers"
  ],
  "abilityObject": {
    "8003010_Monster_XP_Elite01_01_Ability06_Part02": {
      "fileName": "8003010_Monster_XP_Elite01_01_Ability06_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (UnusedUnderThisBase_109) || RETURN",
              "displayLines": "UnusedUnderThisBase_109",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_109"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (UnusedUnderThisBase_157) || RETURN",
              "displayLines": "UnusedUnderThisBase_157",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_157"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "50%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8003010_Monster_XP_Elite01_01_Ability06_Part01": {
      "fileName": "8003010_Monster_XP_Elite01_01_Ability06_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_XP_Elite01_01_Ability06_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8003010_Monster_XP_Elite01_01_Ability05_Part02": {
      "fileName": "8003010_Monster_XP_Elite01_01_Ability05_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "valueType": "LifeTime",
              "variableName": "CurrentFrozenLifeTime",
              "modifierName": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]",
              "multiplier": 1
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]",
              "duration": {
                "operator": "Variables[0] (CurrentFrozenLifeTime) || Variables[1] (UnusedUnderThisBase_155) || ADD || RETURN",
                "displayLines": "(CurrentFrozenLifeTime + UnusedUnderThisBase_155)",
                "constants": [],
                "variables": [
                  "CurrentFrozenLifeTime",
                  "UnusedUnderThisBase_155"
                ]
              },
              "baseChance": {
                "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
                "displayLines": "{[Skill01[2]]}",
                "constants": [],
                "variables": [
                  "{[Skill01[2]]}"
                ]
              },
              "valuePerStack": {
                "Modifier_Frozen_DamagePercentage": {
                  "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
                  "displayLines": "{[Skill01[4]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[4]]}"
                  ]
                }
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "operator": "Variables[0] (UnusedUnderThisBase_156) || RETURN",
                  "displayLines": "UnusedUnderThisBase_156",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_156"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8003010_Monster_XP_Elite01_01_Ability05_Part01": {
      "fileName": "8003010_Monster_XP_Elite01_01_Ability05_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_XP_Elite01_01_Ability05_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8003010_Monster_XP_Elite01_01_Ability03_Part02": {
      "fileName": "8003010_Monster_XP_Elite01_01_Ability03_Part02",
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
    },
    "8003010_Monster_XP_Elite01_01_Ability03_Part01": {
      "fileName": "8003010_Monster_XP_Elite01_01_Ability03_Part01",
      "childAbilityList": [
        "8003010_Monster_XP_Elite01_01_Ability03_Camera",
        "8003010_Monster_XP_Elite01_01_Ability03_Part01",
        "8003010_Monster_XP_Elite01_01_Ability03_Part02"
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
          "ability": "Monster_XP_Elite01_01_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8003010_Monster_XP_Elite01_01_Ability02_Part02": {
      "fileName": "8003010_Monster_XP_Elite01_01_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-557071994\">XP_Ice_Elite_Powerful_Modifier</a>[<span class=\"descriptionNumberColor\">Freezing Point</span>]",
          "valuePerStack": {
            "Modifier_AllDamageTypeResistance": {
              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
              "displayLines": "{[Skill02[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}"
              ]
            },
            "Modifier_StanceWeakAddedRatio": {
              "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
              "displayLines": "{[Skill02[1]]}",
              "constants": [],
              "variables": [
                "{[Skill02[1]]}"
              ]
            },
            "Modifier_Stance": {
              "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
              "displayLines": "{[Skill02[2]]}",
              "constants": [],
              "variables": [
                "{[Skill02[2]]}"
              ]
            }
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "StanceBreak_Sign",
          "value": 1
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8003010_Monster_XP_Elite01_01_Ability02_Part01": {
      "fileName": "8003010_Monster_XP_Elite01_01_Ability02_Part01",
      "childAbilityList": [
        "8003010_Monster_XP_Elite01_01_Ability02_Camera",
        "8003010_Monster_XP_Elite01_01_Ability02_Part01",
        "8003010_Monster_XP_Elite01_01_Ability02_Part02"
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
          "ability": "Monster_XP_Elite01_01_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8003010_Monster_XP_Elite01_01_Ability04_Part02": {
      "fileName": "8003010_Monster_XP_Elite01_01_Ability04_Part02",
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
              "name": "Shot Fired",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
                      "displayLines": "{[Skill01[1]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill01[1]]}"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "100%"
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]",
                  "duration": {
                    "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
                    "displayLines": "{[Skill01[3]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill01[3]]}"
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
                    "displayLines": "{[Skill01[2]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill01[2]]}"
                    ]
                  },
                  "valuePerStack": {
                    "Modifier_Frozen_DamagePercentage": {
                      "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
                      "displayLines": "{[Skill01[4]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill01[4]]}"
                      ]
                    }
                  }
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Shot Fired",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Projectile's Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
                      "displayLines": "{[Skill01[0]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill01[0]]}"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "100%"
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8003010_Monster_XP_Elite01_01_Ability04_Part01": {
      "fileName": "8003010_Monster_XP_Elite01_01_Ability04_Part01",
      "childAbilityList": [
        "8003010_Monster_XP_Elite01_01_Ability04_Camera",
        "8003010_Monster_XP_Elite01_01_Ability04_Part01",
        "8003010_Monster_XP_Elite01_01_Ability04_Part02"
      ],
      "skillTrigger": "Skill04",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_XP_Elite01_01_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8003010_Monster_XP_Elite01_01_Ability01_Part02": {
      "fileName": "8003010_Monster_XP_Elite01_01_Ability01_Part02",
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
              "name": "Shot Fired",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
                      "displayLines": "{[Skill01[1]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill01[1]]}"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "EnergyGainPercent": "100%"
                  }
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Shot Fired",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Projectile's Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
                      "displayLines": "{[Skill01[0]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill01[0]]}"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "100%"
                  }
                }
              ]
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
                "value1": "Phase_Flag",
                "compareType": "=",
                "value2": 2,
                "contextScope": "TargetEntity"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]"
              }
            ]
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
                  "displayLines": "{[Skill01[4]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[4]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8003010_Monster_XP_Elite01_01_Ability01_Part01": {
      "fileName": "8003010_Monster_XP_Elite01_01_Ability01_Part01",
      "childAbilityList": [
        "8003010_Monster_XP_Elite01_01_Ability01_Camera",
        "8003010_Monster_XP_Elite01_01_Ability01_Part01",
        "8003010_Monster_XP_Elite01_01_Ability01_Part02"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_XP_Elite01_01_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8003010_Monster_XP_Elite01_01_PassiveAbility01": {
      "fileName": "8003010_Monster_XP_Elite01_01_PassiveAbility01",
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
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1910872171\">Enemy_W1_WRMecha_01_MuteHitFly</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1499710733\">XP_Elite_Ice_ListenStanceBreakModifier</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-561802374\">NoWeakAndResistance</a>"
        }
      ],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1068246674\">HideMonsterHUD</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1499710733\">XP_Elite_Ice_ListenStanceBreakModifier</a>",
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "StanceBreak_Sign",
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
                      "modifier": "<a class=\"gModGreen\" id=\"-557071994\">XP_Ice_Elite_Powerful_Modifier</a>[<span class=\"descriptionNumberColor\">Freezing Point</span>]"
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "StanceBreak_Sign"
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "Monster_XP_Elite01_01_AIFlag",
                      "value": 1
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "_HasBeenBroken_",
                      "value": 1
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
                      "variableName": "Monster_XP_Elite01_01_AIFlag",
                      "value": 1
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-561802374\">NoWeakAndResistance</a>"
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-561802374\">NoWeakAndResistance</a>"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1910872171\">Enemy_W1_WRMecha_01_MuteHitFly</a>",
          "modifierFlags": [
            "MuteHitFly"
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1068246674\">HideMonsterHUD</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]"
            },
            {
              "eventTrigger": "Action Choice Window [Owner]"
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "8003010_Modifiers": {
      "fileName": "8003010_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-557071994\">XP_Ice_Elite_Powerful_Modifier</a>[<span class=\"descriptionNumberColor\">Freezing Point</span>]",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Phase_Flag",
                  "value": 1
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Phase_Flag",
                  "value": 2
                }
              ]
            }
          ],
          "stackData": [
            "Modifier_AllDamageTypeResistance",
            "Modifier_StanceWeakAddedRatio",
            "Modifier_Stance"
          ],
          "latentQueue": [],
          "description": "Ice Out of Space's attack mode is enhanced.",
          "type": "Other",
          "effectName": "Freezing Point",
          "statusName": "Freezing Point"
        }
      ],
      "references": []
    }
  }
}