const compositeAbilityObject = {
  "fullCharacterName": 4062010,
  "trimCharacterName": 4062010,
  "abilityList": [
    "4062010_Monster_W4_Turkey_Ability02_Part01_Assist",
    "4062010_Monster_W4_Turkey_Ability02_Part02",
    "4062010_Monster_W4_Turkey_Ability02_Part01",
    "4062010_Monster_W4_Turkey_Ability01_Part01_Assist_01",
    "4062010_Monster_W4_Turkey_Ability01_Part01_Assist_00",
    "4062010_Monster_W4_Turkey_Ability01_Part02",
    "4062010_Monster_W4_Turkey_Ability01_Part01",
    "4062010_Modifiers"
  ],
  "abilityObject": {
    "4062010_Monster_W4_Turkey_Ability02_Part01_Assist": {
      "fileName": "4062010_Monster_W4_Turkey_Ability02_Part01_Assist",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2090234676\">Enemy_W4_Turkey_Ability02_Power_EffectLoop</a>"
        },
        "Deleted bullshit",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1846949450\">Enemy_W4_Turkey_Ability02_Power</a>[<span class=\"descriptionNumberColor\">Hemotort Resonance</span>]"
        }
      ],
      "references": []
    },
    "4062010_Monster_W4_Turkey_Ability02_Part02": {
      "fileName": "4062010_Monster_W4_Turkey_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "conditions": {
            "name": "Enemy ID",
            "ID": 406201,
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null,
            "isCompareUniqueID": true
          },
          "ifTargetFound": [
            {
              "name": "Trigger Joint-Attack Ability",
              "abilityList": [
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Parameter Target List}}"
                      },
                      {
                        "name": "Target Index",
                        "indexType": "IndexStrict"
                      }
                    ]
                  },
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1846949450\">Enemy_W4_Turkey_Ability02_Power</a>[<span class=\"descriptionNumberColor\">Hemotort Resonance</span>]",
                    "invertCondition": true
                  },
                  "abortFlags": [
                    "STAT_CTRL",
                    "DisableAction",
                    "Break"
                  ],
                  "ability": "Monster_W4_Turkey_Ability02_Part01_Assist"
                },
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Parameter Target List}}"
                      },
                      {
                        "name": "Target Index",
                        "indexType": "IndexStrict",
                        "indexValue": 1
                      }
                    ]
                  },
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1846949450\">Enemy_W4_Turkey_Ability02_Power</a>[<span class=\"descriptionNumberColor\">Hemotort Resonance</span>]",
                    "invertCondition": true
                  },
                  "abortFlags": [
                    "STAT_CTRL",
                    "DisableAction",
                    "Break"
                  ],
                  "ability": "Monster_W4_Turkey_Ability02_Part01_Assist"
                },
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Parameter Target List}}"
                      },
                      {
                        "name": "Target Index",
                        "indexType": "IndexStrict",
                        "indexValue": 2
                      }
                    ]
                  },
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1846949450\">Enemy_W4_Turkey_Ability02_Power</a>[<span class=\"descriptionNumberColor\">Hemotort Resonance</span>]",
                    "invertCondition": true
                  },
                  "abortFlags": [
                    "STAT_CTRL",
                    "DisableAction",
                    "Break"
                  ],
                  "ability": "Monster_W4_Turkey_Ability02_Part01_Assist"
                },
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Parameter Target List}}"
                      },
                      {
                        "name": "Target Index",
                        "indexType": "IndexStrict",
                        "indexValue": 3
                      }
                    ]
                  },
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1846949450\">Enemy_W4_Turkey_Ability02_Power</a>[<span class=\"descriptionNumberColor\">Hemotort Resonance</span>]",
                    "invertCondition": true
                  },
                  "abortFlags": [
                    "STAT_CTRL",
                    "DisableAction",
                    "Break"
                  ],
                  "ability": "Monster_W4_Turkey_Ability02_Part01_Assist"
                },
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Parameter Target List}}"
                      },
                      {
                        "name": "Target Index",
                        "indexType": "IndexStrict",
                        "indexValue": 4
                      }
                    ]
                  },
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1846949450\">Enemy_W4_Turkey_Ability02_Power</a>[<span class=\"descriptionNumberColor\">Hemotort Resonance</span>]",
                    "invertCondition": true
                  },
                  "abortFlags": [
                    "STAT_CTRL",
                    "DisableAction",
                    "Break"
                  ],
                  "ability": "Monster_W4_Turkey_Ability02_Part01_Assist"
                }
              ]
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4062010_Monster_W4_Turkey_Ability02_Part01": {
      "fileName": "4062010_Monster_W4_Turkey_Ability02_Part01",
      "childAbilityList": [
        "4062010_Monster_W4_Turkey_Ability02_Part01",
        "4062010_Monster_W4_Turkey_Ability02_Part02",
        "4062010_Monster_W4_Turkey_Ability02_Camera",
        "4062010_Monster_W4_Turkey_Ability02_Part01_Assist"
      ],
      "skillTrigger": "Skill02",
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
          "ability": "Monster_W4_Turkey_Ability02_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "4062010_Monster_W4_Turkey_Ability01_Part01_Assist_01": {
      "fileName": "4062010_Monster_W4_Turkey_Ability01_Part01_Assist_01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Current Turn Owner}}"
          },
          "variableName": "Skill01_AssistCount",
          "value": 1,
          "max": 4
        }
      ],
      "references": []
    },
    "4062010_Monster_W4_Turkey_Ability01_Part01_Assist_00": {
      "fileName": "4062010_Monster_W4_Turkey_Ability01_Part01_Assist_00",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
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
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Skill01_AssistCount",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Imaginary",
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
                "EnergyGainPercent": "40%"
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Skill01_AssistCount",
            "compareType": "=",
            "value2": 2
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Imaginary",
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
                "EnergyGainPercent": "40%"
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Skill01_AssistCount",
            "compareType": "=",
            "value2": 3
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Imaginary",
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
                "EnergyGainPercent": "40%"
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Skill01_AssistCount",
            "compareType": "=",
            "value2": 4
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Imaginary",
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
                "EnergyGainPercent": "40%"
              }
            }
          ]
        },
        "Trigger: Attack End"
      ],
      "references": []
    },
    "4062010_Monster_W4_Turkey_Ability01_Part02": {
      "fileName": "4062010_Monster_W4_Turkey_Ability01_Part02",
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
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1846949450\">Enemy_W4_Turkey_Ability02_Power</a>[<span class=\"descriptionNumberColor\">Hemotort Resonance</span>]"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "STAT_CTRL",
                "invertCondition": true
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "DisableAction",
                "invertCondition": true
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "Break",
                "invertCondition": true
              }
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Skill01_AssistCount",
          "value": 0
        },
        "Deleted bullshit",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "conditions": {
            "name": "Enemy ID",
            "ID": 406201,
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null,
            "isCompareUniqueID": true
          },
          "ifTargetFound": [
            {
              "name": "Trigger Joint-Attack Ability",
              "abilityList": [
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
                  "ability": "Monster_W4_Turkey_Ability01_Part01_Assist_00"
                },
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Parameter Target List}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "AND",
                          "conditionList": [
                            {
                              "name": "Has Modifier",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1846949450\">Enemy_W4_Turkey_Ability02_Power</a>[<span class=\"descriptionNumberColor\">Hemotort Resonance</span>]"
                            },
                            {
                              "name": "Has Flag",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "flagName": "STAT_CTRL",
                              "invertCondition": true
                            },
                            {
                              "name": "Has Flag",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "flagName": "DisableAction",
                              "invertCondition": true
                            },
                            {
                              "name": "Has Flag",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "flagName": "Break",
                              "invertCondition": true
                            }
                          ]
                        }
                      },
                      {
                        "name": "Target Index",
                        "indexType": "IndexStrict"
                      }
                    ]
                  },
                  "inherentTarget": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "delay": 0.7,
                  "ability": "Monster_W4_Turkey_Ability01_Part01_Assist_01"
                },
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Parameter Target List}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "AND",
                          "conditionList": [
                            {
                              "name": "Has Modifier",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1846949450\">Enemy_W4_Turkey_Ability02_Power</a>[<span class=\"descriptionNumberColor\">Hemotort Resonance</span>]"
                            },
                            {
                              "name": "Has Flag",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "flagName": "STAT_CTRL",
                              "invertCondition": true
                            },
                            {
                              "name": "Has Flag",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "flagName": "DisableAction",
                              "invertCondition": true
                            },
                            {
                              "name": "Has Flag",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "flagName": "Break",
                              "invertCondition": true
                            }
                          ]
                        }
                      },
                      {
                        "name": "Target Index",
                        "indexType": "IndexStrict",
                        "indexValue": 1
                      }
                    ]
                  },
                  "inherentTarget": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "delay": 1.1,
                  "ability": "Monster_W4_Turkey_Ability01_Part01_Assist_01"
                },
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Parameter Target List}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "AND",
                          "conditionList": [
                            {
                              "name": "Has Modifier",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1846949450\">Enemy_W4_Turkey_Ability02_Power</a>[<span class=\"descriptionNumberColor\">Hemotort Resonance</span>]"
                            },
                            {
                              "name": "Has Flag",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "flagName": "STAT_CTRL",
                              "invertCondition": true
                            },
                            {
                              "name": "Has Flag",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "flagName": "DisableAction",
                              "invertCondition": true
                            },
                            {
                              "name": "Has Flag",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "flagName": "Break",
                              "invertCondition": true
                            }
                          ]
                        }
                      },
                      {
                        "name": "Target Index",
                        "indexType": "IndexStrict",
                        "indexValue": 2
                      }
                    ]
                  },
                  "inherentTarget": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "delay": 1.5,
                  "ability": "Monster_W4_Turkey_Ability01_Part01_Assist_01"
                },
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Parameter Target List}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "AND",
                          "conditionList": [
                            {
                              "name": "Has Modifier",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1846949450\">Enemy_W4_Turkey_Ability02_Power</a>[<span class=\"descriptionNumberColor\">Hemotort Resonance</span>]"
                            },
                            {
                              "name": "Has Flag",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "flagName": "STAT_CTRL",
                              "invertCondition": true
                            },
                            {
                              "name": "Has Flag",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "flagName": "DisableAction",
                              "invertCondition": true
                            },
                            {
                              "name": "Has Flag",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "flagName": "Break",
                              "invertCondition": true
                            }
                          ]
                        }
                      },
                      {
                        "name": "Target Index",
                        "indexType": "IndexStrict",
                        "indexValue": 3
                      }
                    ]
                  },
                  "inherentTarget": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "delay": 1.9,
                  "ability": "Monster_W4_Turkey_Ability01_Part01_Assist_01"
                }
              ]
            }
          ],
          "noTargetFound": [
            {
              "name": "Trigger Joint-Attack Ability",
              "abilityList": [
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
                  "ability": "Monster_W4_Turkey_Ability01_Part01_Assist_00"
                }
              ]
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4062010_Monster_W4_Turkey_Ability01_Part01": {
      "fileName": "4062010_Monster_W4_Turkey_Ability01_Part01",
      "childAbilityList": [
        "4062010_Monster_W4_Turkey_Ability01_Part01",
        "4062010_Monster_W4_Turkey_Ability01_Part02",
        "4062010_Monster_W4_Turkey_Ability01_Camera",
        "4062010_Monster_W4_Turkey_Ability01_Part01_Assist_00",
        "4062010_Monster_W4_Turkey_Ability01_Part01_Assist_01"
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
          "ability": "Monster_W4_Turkey_Ability01_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "4062010_Modifiers": {
      "fileName": "4062010_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__2090234676\">Enemy_W4_Turkey_Ability02_Power_EffectLoop</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1846949450\">Enemy_W4_Turkey_Ability02_Power</a>[<span class=\"descriptionNumberColor\">Hemotort Resonance</span>]",
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
                  "modifier": "<a class=\"gModGreen\" id=\"2090234676\">Enemy_W4_Turkey_Ability02_Power_EffectLoop</a>"
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "After other \"Ichor Memosprites: Pheasant\" in the \"Hemotort Resonance\" state attack, this unit will attack together with them. Dispels when Weakness is broken.",
          "type": "Other",
          "effectName": "Hemotort Resonance",
          "statusName": "Hemotort Resonance"
        }
      ],
      "references": []
    }
  }
}