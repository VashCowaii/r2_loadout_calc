const compositeAbilityObject = {
  "fullCharacterName": 4012070,
  "trimCharacterName": 4012070,
  "abilityList": [
    "4012070_Monster_W4_PolluxPart_L_PassiveAbility_Initiate",
    "4012070_Monster_W4_PolluxPart_PassiveAbility_Initiate",
    "4012070_Monster_W4_PolluxPart_Ability02_L_Part02",
    "4012070_Monster_W4_PolluxPart_Ability02_L_Part01",
    "4012070_Monster_W4_PolluxPart_Ability02_Part02",
    "4012070_Monster_W4_PolluxPart_Ability02_Part01",
    "4012070_Monster_W4_PolluxPart_Ability01_L_Part02",
    "4012070_Monster_W4_PolluxPart_Ability01_L_Part01",
    "4012070_Monster_W4_PolluxPart_Ability01_Part02",
    "4012070_Monster_W4_PolluxPart_Ability01_Part01",
    "4012070_Functions"
  ],
  "abilityObject": {
    "4012070_Monster_W4_PolluxPart_L_PassiveAbility_Initiate": {
      "fileName": "4012070_Monster_W4_PolluxPart_L_PassiveAbility_Initiate",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W4_PolluxPart_Status"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Monster_W4_PolluxPart_Status",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 0.0000010000076
                }
              ]
            },
            {
              "eventTrigger": "Deal Damage End [Owner]: Any",
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
                        "modifier": "Monster_W4_Pollux_ThirstBlood[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
                        "invertCondition": true
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Player Team"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Monster_W4_Pollux_ThirstBlood[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
                      "valuePerStack": {
                        "MDF_DamagePercentage": {
                          "operator": "Variables[0] (ThirstBlood_Dot_DamagePercentage) || RETURN",
                          "displayLines": "ThirstBlood_Dot_DamagePercentage",
                          "constants": [],
                          "variables": [
                            "ThirstBlood_Dot_DamagePercentage"
                          ]
                        },
                        "MDF_DamageHpAddedRatio": {
                          "operator": "Variables[0] (ThirstBlood_DamageHpAddedRatio) || RETURN",
                          "displayLines": "ThirstBlood_DamageHpAddedRatio",
                          "constants": [],
                          "variables": [
                            "ThirstBlood_DamageHpAddedRatio"
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
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "variable": "#PassiveSkill01_P1_ThirstBlood_DamageHpAddedRatio",
                  "target2": null,
                  "variable2": "ThirstBlood_DamageHpAddedRatio"
                },
                {
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "variable": "#PassiveSkill01_P2_ThirstBlood_Dot_DamagePercentage",
                  "target2": null,
                  "variable2": "ThirstBlood_Dot_DamagePercentage"
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "Monster_W4_PolluxPart_Shield[<span class=\"descriptionNumberColor\">Overdue Obituary</span>]"
                  }
                }
              ]
            },
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster's Summoner}}"
                        },
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 3
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster's Summoner}}"
                        },
                        "modifier": "Monster_W4_Pollux_RLBoss_Status"
                      }
                    ]
                  },
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Monster_W4_PolluxPart_Shield[<span class=\"descriptionNumberColor\">Overdue Obituary</span>]"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "4012070_Monster_W4_PolluxPart_PassiveAbility_Initiate": {
      "fileName": "4012070_Monster_W4_PolluxPart_PassiveAbility_Initiate",
      "skillTrigger": "Passive",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W4_PolluxPart_Status"
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase1"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Monster_W4_PolluxPart_Status",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 0.0000010000076
                }
              ]
            },
            {
              "eventTrigger": "Deal Damage End [Owner]: Any",
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
                        "modifier": "Monster_W4_Pollux_ThirstBlood[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
                        "invertCondition": true
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Player Team"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Monster_W4_Pollux_ThirstBlood[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
                      "valuePerStack": {
                        "MDF_DamagePercentage": {
                          "operator": "Variables[0] (ThirstBlood_Dot_DamagePercentage) || RETURN",
                          "displayLines": "ThirstBlood_Dot_DamagePercentage",
                          "constants": [],
                          "variables": [
                            "ThirstBlood_Dot_DamagePercentage"
                          ]
                        },
                        "MDF_DamageHpAddedRatio": {
                          "operator": "Variables[0] (ThirstBlood_DamageHpAddedRatio) || RETURN",
                          "displayLines": "ThirstBlood_DamageHpAddedRatio",
                          "constants": [],
                          "variables": [
                            "ThirstBlood_DamageHpAddedRatio"
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
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "variable": "#PassiveSkill01_P1_ThirstBlood_DamageHpAddedRatio",
                  "target2": null,
                  "variable2": "ThirstBlood_DamageHpAddedRatio"
                },
                {
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "variable": "#PassiveSkill01_P2_ThirstBlood_Dot_DamagePercentage",
                  "target2": null,
                  "variable2": "ThirstBlood_Dot_DamagePercentage"
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "Monster_W4_PolluxPart_Shield[<span class=\"descriptionNumberColor\">Overdue Obituary</span>]"
                  }
                }
              ]
            },
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster's Summoner}}"
                        },
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 3
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster's Summoner}}"
                        },
                        "modifier": "Monster_W4_Pollux_RLBoss_Status"
                      }
                    ]
                  },
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Monster_W4_PolluxPart_Shield[<span class=\"descriptionNumberColor\">Overdue Obituary</span>]"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "4012070_Monster_W4_PolluxPart_Ability02_L_Part02": {
      "fileName": "4012070_Monster_W4_PolluxPart_Ability02_L_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "CurrentHP%",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
                  "displayLines": "{[Skill02[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[2]]}"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "_MaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                      "displayLines": "{[Skill02[3]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill02[3]]}"
                      ]
                    },
                    "DamageFlat": {
                      "operator": "Variables[0] (_MaxHP) || Variables[1] ({[Skill02[1]]}) || MUL || RETURN",
                      "displayLines": "(_MaxHP * {[Skill02[1]]})",
                      "constants": [],
                      "variables": [
                        "_MaxHP",
                        "{[Skill02[1]]}"
                      ]
                    },
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": null,
                    "behaviorTag": "DirectlyLoseHpHit",
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
                }
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "CurrentHP%",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
                  "displayLines": "{[Skill02[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[2]]}"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "_MaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                      "displayLines": "{[Skill02[3]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill02[3]]}"
                      ]
                    },
                    "DamageFlat": {
                      "operator": "Variables[0] (_MaxHP) || Variables[1] ({[Skill02[1]]}) || MUL || RETURN",
                      "displayLines": "(_MaxHP * {[Skill02[1]]})",
                      "constants": [],
                      "variables": [
                        "_MaxHP",
                        "{[Skill02[1]]}"
                      ]
                    },
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": null,
                    "behaviorTag": "DirectlyLoseHpHit",
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
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Target Left of Ability Target(ST)}}"
          },
          "maxTargets": 1
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Target Right of Ability Target(ST)}}"
          },
          "maxTargets": 1
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Monster_W4_PolluxPart_Strengthen_EggAbsorb_FX"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Monster_W4_PolluxPart_Strengthen_EggAbsorb"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4012070_Monster_W4_PolluxPart_Ability02_L_Part01": {
      "fileName": "4012070_Monster_W4_PolluxPart_Ability02_L_Part01",
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
          "ability": "Monster_W4_PolluxPart_Ability02_L_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4012070_Monster_W4_PolluxPart_Ability02_Part02": {
      "fileName": "4012070_Monster_W4_PolluxPart_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "CurrentHP%",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
                  "displayLines": "{[Skill02[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[2]]}"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "_MaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                      "displayLines": "{[Skill02[3]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill02[3]]}"
                      ]
                    },
                    "DamageFlat": {
                      "operator": "Variables[0] (_MaxHP) || Variables[1] ({[Skill02[1]]}) || MUL || RETURN",
                      "displayLines": "(_MaxHP * {[Skill02[1]]})",
                      "constants": [],
                      "variables": [
                        "_MaxHP",
                        "{[Skill02[1]]}"
                      ]
                    },
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": null,
                    "behaviorTag": "DirectlyLoseHpHit",
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
                }
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "CurrentHP%",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
                  "displayLines": "{[Skill02[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[2]]}"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "_MaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                      "displayLines": "{[Skill02[3]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill02[3]]}"
                      ]
                    },
                    "DamageFlat": {
                      "operator": "Variables[0] (_MaxHP) || Variables[1] ({[Skill02[1]]}) || MUL || RETURN",
                      "displayLines": "(_MaxHP * {[Skill02[1]]})",
                      "constants": [],
                      "variables": [
                        "_MaxHP",
                        "{[Skill02[1]]}"
                      ]
                    },
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": null,
                    "behaviorTag": "DirectlyLoseHpHit",
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
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Target Left of Ability Target(ST)}}"
          },
          "maxTargets": 1
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Target Right of Ability Target(ST)}}"
          },
          "maxTargets": 1
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Monster_W4_PolluxPart_Strengthen_EggAbsorb_FX"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Monster_W4_PolluxPart_Strengthen_EggAbsorb"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4012070_Monster_W4_PolluxPart_Ability02_Part01": {
      "fileName": "4012070_Monster_W4_PolluxPart_Ability02_Part01",
      "childAbilityList": [
        "4012070_Monster_W4_PolluxPart_Ability02_Part01",
        "4012070_Monster_W4_PolluxPart_Ability02_Part02",
        "4012070_Monster_W4_PolluxPart_Ability02_Camera"
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
          "ability": "Monster_W4_PolluxPart_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4012070_Monster_W4_PolluxPart_Ability01_L_Part02": {
      "fileName": "4012070_Monster_W4_PolluxPart_Ability01_L_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
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
        "Trigger: Attack End",
        {
          "name": "Use Custom Character Function",
          "functionName": "Monster_W4_PolluxPart_Strengthen_EggAbsorb_FX"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Monster_W4_PolluxPart_Strengthen_EggAbsorb"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4012070_Monster_W4_PolluxPart_Ability01_L_Part01": {
      "fileName": "4012070_Monster_W4_PolluxPart_Ability01_L_Part01",
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
          "ability": "Monster_W4_PolluxPart_Ability01_L_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4012070_Monster_W4_PolluxPart_Ability01_Part02": {
      "fileName": "4012070_Monster_W4_PolluxPart_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
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
        "Trigger: Attack End",
        {
          "name": "Use Custom Character Function",
          "functionName": "Monster_W4_PolluxPart_Strengthen_EggAbsorb_FX"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Monster_W4_PolluxPart_Strengthen_EggAbsorb"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4012070_Monster_W4_PolluxPart_Ability01_Part01": {
      "fileName": "4012070_Monster_W4_PolluxPart_Ability01_Part01",
      "childAbilityList": [
        "4012070_Monster_W4_PolluxPart_Ability01_Part01",
        "4012070_Monster_W4_PolluxPart_Ability01_Part02",
        "4012070_Monster_W4_PolluxPart_Ability01_Camera"
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
          "ability": "Monster_W4_PolluxPart_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4012070_Functions": {
      "fileName": "4012070_Functions",
      "abilityType": "Char. Functions",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "length": 2,
      "parse": [
        {
          "name": "CharacterFunctions",
          "functionName": "Monster_W4_PolluxPart_Strengthen_EggAbsorb_FX",
          "parse": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
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
                    "modifier": "Monster_W4_Pollux_Strengthen[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Monster_W4_Pollux_EnergyBar"
                  }
                ]
              }
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Monster_W4_PolluxPart_Strengthen_EggAbsorb",
          "parse": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
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
                    "modifier": "Monster_W4_Pollux_Strengthen[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Monster_W4_Pollux_EnergyBar"
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "variable": "_EnergyValue",
                  "target2": null,
                  "variable2": "_EnergyValue"
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (_EnergyValue) || RETURN",
                    "displayLines": "_EnergyValue",
                    "constants": [],
                    "variables": [
                      "_EnergyValue"
                    ]
                  },
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "maximum": 1
                }
              ]
            }
          ]
        }
      ],
      "references": []
    }
  }
}