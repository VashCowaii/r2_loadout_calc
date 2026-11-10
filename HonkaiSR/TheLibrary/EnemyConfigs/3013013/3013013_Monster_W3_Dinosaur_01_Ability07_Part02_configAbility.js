const configAbility = {
  "fileName": "3013013_Monster_W3_Dinosaur_01_Ability07_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "IF",
      "conditions": {
        "name": "Enemy ID",
        "ID": 3013013,
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "characterName": "Memory Zone Meme \"Shell of Faded Rage\" (Bug)",
        "isBaseCompare": true
      },
      "passed": [
        {
          "name": "Define Custom Variable with Modifier Values",
          "valueType": "Layer",
          "variableName": "MDF_Growth_Layer",
          "modifierName": "<a class=\"gModGreen\" id=\"-340009422\">Enemy_W3_Dinosaur_01_Standard_Growth_Enhance</a>[<span class=\"descriptionNumberColor\">Scorchbone Inferno</span>]",
          "multiplier": 1
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable with Modifier Values",
          "valueType": "Layer",
          "variableName": "MDF_Growth_Layer",
          "modifierName": "<a class=\"gModGreen\" id=\"-1395319081\">Enemy_W3_Dinosaur_01_Standard_Growth</a>[<span class=\"descriptionNumberColor\">Obscure Blaze</span>]",
          "multiplier": 1
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "Monster_W3_Dinosaur_01_Skill07_CurrentHitCount_i"
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "operator": "Variables[0] (MDF_Growth_Layer) || Variables[1] ({[Skill07[1]]}) || ADD || RETURN",
        "displayLines": "(MDF_Growth_Layer + {[Skill07[1]]})",
        "constants": [],
        "variables": [
          "MDF_Growth_Layer",
          "{[Skill07[1]]}"
        ]
      },
      "variableName": "Monster_W3_Dinosaur_01_Skill07_HitCount"
    },
    {
      "name": "Define Custom Variable",
      "value": 0.3,
      "variableName": "Monster_W3_Dinosaur_01_Skill07_SumTime"
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "operator": "Variables[0] (Monster_W3_Dinosaur_01_Skill07_HitCount) || Variables[1] (Monster_W3_Dinosaur_01_Skill07_SumTime) || Constants[0] (1) || SUB || DIV || RETURN",
        "displayLines": "(Monster_W3_Dinosaur_01_Skill07_HitCount / (Monster_W3_Dinosaur_01_Skill07_SumTime - 1))",
        "constants": [
          1
        ],
        "variables": [
          "Monster_W3_Dinosaur_01_Skill07_HitCount",
          "Monster_W3_Dinosaur_01_Skill07_SumTime"
        ]
      },
      "variableName": "Monster_W3_Dinosaur_01_Skill07_DeltaTime"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1974630244\">Enemy_W3_Dinosaur_01_Ability07_HitTag</a>"
    },
    {
      "name": "Looped Event",
      "maxLoops": {
        "operator": "Variables[0] (Monster_W3_Dinosaur_01_Skill07_SumTime) || RETURN",
        "displayLines": "Monster_W3_Dinosaur_01_Skill07_SumTime",
        "constants": [],
        "variables": [
          "Monster_W3_Dinosaur_01_Skill07_SumTime"
        ]
      },
      "execute": [
        {
          "name": "Random Event",
          "odds": [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
          ],
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "EffRandomYaw",
              "resetValue": 30
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "EffRandomYaw",
              "resetValue": 60
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "EffRandomYaw",
              "resetValue": 90
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "EffRandomYaw",
              "resetValue": 120
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "EffRandomYaw",
              "resetValue": 150
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "EffRandomYaw",
              "resetValue": 180
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "EffRandomYaw",
              "resetValue": 210
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "EffRandomYaw",
              "resetValue": 240
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "EffRandomYaw",
              "resetValue": 270
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "EffRandomYaw",
              "resetValue": 300
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "EffRandomYaw",
              "resetValue": 330
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "EffRandomYaw",
              "resetValue": 360
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "operator": "Variables[0] (Monster_W3_Dinosaur_01_Skill07_CurrentHitCount_i) || Constants[0] (3) || MOD || RETURN",
            "displayLines": "(Monster_W3_Dinosaur_01_Skill07_CurrentHitCount_i % 3)",
            "constants": [
              3
            ],
            "variables": [
              "Monster_W3_Dinosaur_01_Skill07_CurrentHitCount_i"
            ]
          },
          "variableName": "Monster_W3_Dinosaur_01_Skill07_CurrentHitCount_i_Eff_Loop"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Monster_W3_Dinosaur_01_Skill07_CurrentHitCount_i_Eff_Loop",
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Monster_W3_Dinosaur_01_Skill07_CurrentHitCount_i",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemies by Taunt OR Random Aggro}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Player Team All}}"
                        },
                        "value1": "TeamCharacterCount",
                        "compareType": "=",
                        "value2": 1,
                        "conditions": {
                          "name": "Living State",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "livingState": "Mask_AliveOnly"
                        }
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1974630244\">Enemy_W3_Dinosaur_01_Ability07_HitTag</a>",
                        "invertCondition": true
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1974630244\">Enemy_W3_Dinosaur_01_Ability07_HitTag</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1974630244\">Enemy_W3_Dinosaur_01_Ability07_HitTag</a>"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Enemy ID",
                        "ID": 3013013,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "characterName": "Memory Zone Meme \"Shell of Faded Rage\" (Bug)",
                        "isBaseCompare": true
                      },
                      "passed": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Quantum",
                            "Damage": {
                              "operator": "Variables[0] ({[Skill07[0]]}) || RETURN",
                              "displayLines": "{[Skill07[0]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill07[0]]}"
                              ]
                            },
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Basic ATK",
                            "EnergyGainPercent": "100%"
                          }
                        },
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Targets Adjacent to Parameter Target}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Quantum",
                            "Damage": {
                              "operator": "Variables[0] ({[Skill07[0]]}) || RETURN",
                              "displayLines": "{[Skill07[0]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill07[0]]}"
                              ]
                            },
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Basic ATK",
                            "EnergyGainPercent": "100%"
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Quantum",
                            "Damage": {
                              "operator": "Variables[0] ({[Skill07[0]]}) || RETURN",
                              "displayLines": "{[Skill07[0]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill07[0]]}"
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
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Player Team All}}"
                        },
                        "value1": "TeamCharacterCount",
                        "compareType": "=",
                        "value2": 1,
                        "conditions": {
                          "name": "Living State",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "livingState": "Mask_AliveOnly"
                        }
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1974630244\">Enemy_W3_Dinosaur_01_Ability07_HitTag</a>",
                        "invertCondition": true
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1974630244\">Enemy_W3_Dinosaur_01_Ability07_HitTag</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1974630244\">Enemy_W3_Dinosaur_01_Ability07_HitTag</a>"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Enemy ID",
                        "ID": 3013013,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "characterName": "Memory Zone Meme \"Shell of Faded Rage\" (Bug)",
                        "isBaseCompare": true
                      },
                      "passed": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Quantum",
                            "Damage": {
                              "operator": "Variables[0] ({[Skill07[0]]}) || RETURN",
                              "displayLines": "{[Skill07[0]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill07[0]]}"
                              ]
                            },
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Basic ATK",
                            "EnergyGainPercent": "100%"
                          }
                        },
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Targets Adjacent to Parameter Target}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Quantum",
                            "Damage": {
                              "operator": "Variables[0] ({[Skill07[0]]}) || RETURN",
                              "displayLines": "{[Skill07[0]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill07[0]]}"
                              ]
                            },
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Basic ATK",
                            "EnergyGainPercent": "100%"
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Quantum",
                            "Damage": {
                              "operator": "Variables[0] ({[Skill07[0]]}) || RETURN",
                              "displayLines": "{[Skill07[0]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill07[0]]}"
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
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Monster_W3_Dinosaur_01_Skill07_CurrentHitCount_i_Eff_Loop",
            "compareType": "=",
            "value2": 1
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
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": "=",
                    "value2": 1,
                    "conditions": {
                      "name": "Living State",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "livingState": "Mask_AliveOnly"
                    }
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1974630244\">Enemy_W3_Dinosaur_01_Ability07_HitTag</a>",
                    "invertCondition": true
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1974630244\">Enemy_W3_Dinosaur_01_Ability07_HitTag</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1974630244\">Enemy_W3_Dinosaur_01_Ability07_HitTag</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 3013013,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Memory Zone Meme \"Shell of Faded Rage\" (Bug)",
                    "isBaseCompare": true
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Quantum",
                        "Damage": {
                          "operator": "Variables[0] ({[Skill07[0]]}) || RETURN",
                          "displayLines": "{[Skill07[0]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill07[0]]}"
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Basic ATK",
                        "EnergyGainPercent": "100%"
                      }
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Targets Adjacent to Parameter Target}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Quantum",
                        "Damage": {
                          "operator": "Variables[0] ({[Skill07[0]]}) || RETURN",
                          "displayLines": "{[Skill07[0]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill07[0]]}"
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Basic ATK",
                        "EnergyGainPercent": "100%"
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Quantum",
                        "Damage": {
                          "operator": "Variables[0] ({[Skill07[0]]}) || RETURN",
                          "displayLines": "{[Skill07[0]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill07[0]]}"
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
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Monster_W3_Dinosaur_01_Skill07_CurrentHitCount_i_Eff_Loop",
            "compareType": "=",
            "value2": 2
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
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": "=",
                    "value2": 1,
                    "conditions": {
                      "name": "Living State",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "livingState": "Mask_AliveOnly"
                    }
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1974630244\">Enemy_W3_Dinosaur_01_Ability07_HitTag</a>",
                    "invertCondition": true
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1974630244\">Enemy_W3_Dinosaur_01_Ability07_HitTag</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1974630244\">Enemy_W3_Dinosaur_01_Ability07_HitTag</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 3013013,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Memory Zone Meme \"Shell of Faded Rage\" (Bug)",
                    "isBaseCompare": true
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Quantum",
                        "Damage": {
                          "operator": "Variables[0] ({[Skill07[0]]}) || RETURN",
                          "displayLines": "{[Skill07[0]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill07[0]]}"
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Basic ATK",
                        "EnergyGainPercent": "100%"
                      }
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Targets Adjacent to Parameter Target}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Quantum",
                        "Damage": {
                          "operator": "Variables[0] ({[Skill07[0]]}) || RETURN",
                          "displayLines": "{[Skill07[0]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill07[0]]}"
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Basic ATK",
                        "EnergyGainPercent": "100%"
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Quantum",
                        "Damage": {
                          "operator": "Variables[0] ({[Skill07[0]]}) || RETURN",
                          "displayLines": "{[Skill07[0]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill07[0]]}"
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
            }
          ]
        },
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "Monster_W3_Dinosaur_01_Skill07_CurrentHitCount_i",
          "context": "TargetEntity",
          "value": 1,
          "max": 100
        }
      ]
    },
    "Trigger: Attack End",
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1974630244\">Enemy_W3_Dinosaur_01_Ability07_HitTag</a>",
      "latentQueue": [
        "Monster_W3_Dinosaur_01_Skill07_DeltaTime",
        "EffRandomYaw",
        "Monster_W3_Dinosaur_01_Skill07_CurrentHitCount_i_Eff_Loop"
      ]
    }
  ]
}