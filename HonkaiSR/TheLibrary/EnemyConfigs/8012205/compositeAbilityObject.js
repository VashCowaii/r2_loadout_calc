const compositeAbilityObject = {
  "fullCharacterName": 8012205,
  "trimCharacterName": 8012205,
  "abilityList": [
    "8012205_Monster_W2_HuanlongPart_01_IF_PassiveAbility_Insert_Part01",
    "8012205_Monster_W2_HuanlongPart_01_IF_Ability04_Part02",
    "8012205_Monster_W2_HuanlongPart_01_IF_Ability04_Part01",
    "8012205_Monster_W2_HuanlongPart_01_IF_Ability03_Part02",
    "8012205_Monster_W2_HuanlongPart_01_IF_Ability03_Part01",
    "8012205_Monster_W2_HuanlongPart_03_IF_Passive01",
    "8012205_Monster_W2_HuanlongPart_01_IF_Passive01",
    "8012205_Monster_W2_HuanlongPart_01_PassiveAbility_Insert3_Part01",
    "8012205_Monster_W2_HuanlongPart_01_PassiveAbility_Insert2_Part01",
    "8012205_Monster_W2_HuanlongPart_01_PassiveAbility_Insert_Part01",
    "8012205_Monster_W2_HuanlongPart_01_PassiveAbility_InsertAll_Part01",
    "8012205_Monster_W2_HuanlongPart_01_Ability04_Part02",
    "8012205_Monster_W2_HuanlongPart_01_Ability04_Part01",
    "8012205_Monster_W2_HuanlongPart_01_Ability03_Part02",
    "8012205_Monster_W2_HuanlongPart_01_Ability03_Part01",
    "8012205_Monster_W2_HuanlongPart_01_Ability02_Part02",
    "8012205_Monster_W2_HuanlongPart_01_Ability02_Part01",
    "8012205_Monster_W2_HuanlongPart_01_PassiveAbilityInitiate",
    "8012205_Monster_W2_HuanlongPart_IF_Recover",
    "8012205_Monster_W2_HuanlongPart_IF_PassiveAbility_Insert_Part01",
    "8012205_Monster_W2_HuanlongPart_IF_Ability01_Part02",
    "8012205_Monster_W2_HuanlongPart_IF_Ability01_Part01",
    "8012205_Monster_W2_HuanlongPart_02_IF_Passive01",
    "8012205_Monster_W2_HuanlongPart_IF_Passive01",
    "8012205_Modifiers"
  ],
  "abilityObject": {
    "8012205_Monster_W2_HuanlongPart_01_IF_PassiveAbility_Insert_Part01": {
      "fileName": "8012205_Monster_W2_HuanlongPart_01_IF_PassiveAbility_Insert_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Living State",
                "state": "Mask_AliveOnly",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster's Summoner}}"
                }
              },
              {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster's Summoner}}"
                },
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 2
              }
            ]
          },
          "passed": [
            {
              "name": "Exit Broken-State",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              }
            },
            {
              "name": "Animation Event",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "state": "PassiveSkill01",
              "passed": [
                {
                  "name": "Animation Task"
                },
                {
                  "name": "Animation Task",
                  "passed": [
                    {
                      "name": "Dispel Debuffs",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "silent": true
                    },
                    {
                      "name": "Heal",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "healPercent": {
                        "operator": "Variables[0] (UnusedUnderThisBase_219) || RETURN",
                        "displayLines": "UnusedUnderThisBase_219",
                        "constants": [],
                        "variables": [
                          "UnusedUnderThisBase_219"
                        ]
                      },
                      "formula": "Heal from Target MaxHP"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster's Summoner}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1788965070\">Monster_W2_Huanlong_IF_WeaknessProtect</a>[<span class=\"descriptionNumberColor\">Flower By Another Name</span>]"
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster's Summoner}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Physical",
                        "DamageFlat": {
                          "operator": "Variables[0] (SummonerMaxHPValue) || Variables[1] ({[PassiveSkill01[0]]}) || MUL || RETURN",
                          "displayLines": "(SummonerMaxHPValue * {[PassiveSkill01[0]]})",
                          "constants": [],
                          "variables": [
                            "SummonerMaxHPValue",
                            "{[PassiveSkill01[0]]}"
                          ]
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": {
                          "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                          "displayLines": "{[PassiveSkill01[1]]}",
                          "constants": [],
                          "variables": [
                            "{[PassiveSkill01[1]]}"
                          ]
                        },
                        "Tags": null,
                        "attackType": "Basic ATK"
                      }
                    },
                    "Trigger: Attack End",
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster's Summoner}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"497291560\">Monster_W2_HuanlongPart_01_IF_DeathRattle</a>",
                      "casterAssign": "TargetSelf"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "8012205_Monster_W2_HuanlongPart_01_IF_Ability04_Part02": {
      "fileName": "8012205_Monster_W2_HuanlongPart_01_IF_Ability04_Part02",
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
            "modifier": "<a class=\"gModGreen\" id=\"-427933075\">Monster_W2_HuanlongPart_01_IF_Activity</a>"
          },
          "ifTargetFound": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "scope": "TargetEntity",
              "variableName": "PartDecisionFlag",
              "value": 1
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
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1775073303\">Monster_W2_HuanlongPart_01_MuteHitFly</a>"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-268148846\">Monster_W2_HuanlongPart_MuteHitFly</a>"
              }
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Sequence",
              "Sequence": [
                {
                  "name": "Target Name",
                  "target": "{{Enemy Team All}}"
                },
                {
                  "name": "Target Filter",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1296858925\">Monster_W2_HuanlongPart_IF_P2_FirstMark</a>"
                  }
                }
              ]
            },
            "modifier": "<a class=\"gModGreen\" id=\"-427933075\">Monster_W2_HuanlongPart_01_IF_Activity</a>"
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team(Exclude Memosprites)}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-861835202\">Monster_W2_Huanlong_IF_Sign01</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Sequence",
              "Sequence": [
                {
                  "name": "Target Name",
                  "target": "{{Enemy Team All}}"
                },
                {
                  "name": "Target Filter",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1190585947\">Monster_W2_HuanlongPart_IF_P2_SecondMark</a>"
                  }
                }
              ]
            },
            "modifier": "<a class=\"gModGreen\" id=\"-427933075\">Monster_W2_HuanlongPart_01_IF_Activity</a>"
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team(Exclude Memosprites)}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-878612821\">Monster_W2_Huanlong_IF_Sign02</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Sequence",
              "Sequence": [
                {
                  "name": "Target Name",
                  "target": "{{Enemy Team All}}"
                },
                {
                  "name": "Target Filter",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1242033542\">Monster_W2_HuanlongPart_IF_P2_ThirdMark</a>"
                  }
                }
              ]
            },
            "modifier": "<a class=\"gModGreen\" id=\"-427933075\">Monster_W2_HuanlongPart_01_IF_Activity</a>"
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team(Exclude Memosprites)}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-895390440\">Monster_W2_Huanlong_IF_Sign03</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Sequence",
              "Sequence": [
                {
                  "name": "Target Name",
                  "target": "{{Enemy Team All}}"
                },
                {
                  "name": "Target Filter",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1084207204\">Monster_W2_HuanlongPart_IF_P2_ForthMark</a>"
                  }
                }
              ]
            },
            "modifier": "<a class=\"gModGreen\" id=\"-427933075\">Monster_W2_HuanlongPart_01_IF_Activity</a>"
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team(Exclude Memosprites)}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-777947107\">Monster_W2_Huanlong_IF_Sign04</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
              }
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-913053505\">Monster_W2_HuanlongPart_01_IF_Ability04_SetDamage</a>",
          "casterAssign": "TargetSelf"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-427933075\">Monster_W2_HuanlongPart_01_IF_Activity</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-861835202\">Monster_W2_Huanlong_IF_Sign01</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-878612821\">Monster_W2_Huanlong_IF_Sign02</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-895390440\">Monster_W2_Huanlong_IF_Sign03</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-777947107\">Monster_W2_Huanlong_IF_Sign04</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "scope": "TargetEntity",
          "variableName": "AIFlag",
          "value": 4
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "set": 0
        },
        "Trigger: Ability End",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1389512631\">Monster_W2_HuanlongPart_IF_TurnChoise</a>",
          "casterAssign": "TargetSelf"
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
                "modifier": "<a class=\"gModGreen\" id=\"1775073303\">Monster_W2_HuanlongPart_01_MuteHitFly</a>"
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-268148846\">Monster_W2_HuanlongPart_MuteHitFly</a>"
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Remove Modifier Behavior Flag(s)",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "flagNames": []
            },
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
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-913053505\">Monster_W2_HuanlongPart_01_IF_Ability04_SetDamage</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Team Count",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "variableName": "_AliveFlower_Count",
                  "livingTargets": true,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-69472783\">Monster_W2_HuanlongPart_IF_Active</a>"
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
                    "value1": "_AliveFlower_Count",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "SkillUltra_DamagePercentage",
                      "value": {
                        "operator": "Variables[0] (UnusedUnderThisBase_213) || RETURN",
                        "displayLines": "UnusedUnderThisBase_213",
                        "constants": [],
                        "variables": [
                          "UnusedUnderThisBase_213"
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
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "_AliveFlower_Count",
                    "compareType": "=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "SkillUltra_DamagePercentage",
                      "value": {
                        "operator": "Variables[0] (UnusedUnderThisBase_212) || RETURN",
                        "displayLines": "UnusedUnderThisBase_212",
                        "constants": [],
                        "variables": [
                          "UnusedUnderThisBase_212"
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
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "_AliveFlower_Count",
                    "compareType": "=",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "SkillUltra_DamagePercentage",
                      "value": {
                        "operator": "Variables[0] (UnusedUnderThisBase_211) || RETURN",
                        "displayLines": "UnusedUnderThisBase_211",
                        "constants": [],
                        "variables": [
                          "UnusedUnderThisBase_211"
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
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "_AliveFlower_Count",
                    "compareType": "=",
                    "value2": 4
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "SkillUltra_DamagePercentage",
                      "value": {
                        "operator": "Variables[0] (UnusedUnderThisBase_210) || RETURN",
                        "displayLines": "UnusedUnderThisBase_210",
                        "constants": [],
                        "variables": [
                          "UnusedUnderThisBase_210"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Sequence",
                      "Sequence": [
                        {
                          "name": "Target Name",
                          "target": "{{Enemy Team All}}"
                        },
                        {
                          "name": "Target Filter",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1296858925\">Monster_W2_HuanlongPart_IF_P2_FirstMark</a>"
                          }
                        }
                      ]
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-427933075\">Monster_W2_HuanlongPart_01_IF_Activity</a>"
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team(Exclude Memosprites)}}"
                      },
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-861835202\">Monster_W2_Huanlong_IF_Sign01</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
                      },
                      "ifTargetFound": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Imaginary",
                            "Damage": {
                              "operator": "Variables[0] (SkillUltra_DamagePercentage) || RETURN",
                              "displayLines": "SkillUltra_DamagePercentage",
                              "constants": [],
                              "variables": [
                                "SkillUltra_DamagePercentage"
                              ]
                            },
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Basic ATK",
                            "EnergyGainPercent": "100%"
                          }
                        },
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "value": 30,
                          "isFixed": "* ERR"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Sequence",
                      "Sequence": [
                        {
                          "name": "Target Name",
                          "target": "{{Enemy Team All}}"
                        },
                        {
                          "name": "Target Filter",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1190585947\">Monster_W2_HuanlongPart_IF_P2_SecondMark</a>"
                          }
                        }
                      ]
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-427933075\">Monster_W2_HuanlongPart_01_IF_Activity</a>"
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team(Exclude Memosprites)}}"
                      },
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-878612821\">Monster_W2_Huanlong_IF_Sign02</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
                      },
                      "ifTargetFound": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Imaginary",
                            "Damage": {
                              "operator": "Variables[0] (SkillUltra_DamagePercentage) || RETURN",
                              "displayLines": "SkillUltra_DamagePercentage",
                              "constants": [],
                              "variables": [
                                "SkillUltra_DamagePercentage"
                              ]
                            },
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Basic ATK",
                            "EnergyGainPercent": "100%"
                          }
                        },
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "value": 30,
                          "isFixed": "* ERR"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Sequence",
                      "Sequence": [
                        {
                          "name": "Target Name",
                          "target": "{{Enemy Team All}}"
                        },
                        {
                          "name": "Target Filter",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-1242033542\">Monster_W2_HuanlongPart_IF_P2_ThirdMark</a>"
                          }
                        }
                      ]
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-427933075\">Monster_W2_HuanlongPart_01_IF_Activity</a>"
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team(Exclude Memosprites)}}"
                      },
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-895390440\">Monster_W2_Huanlong_IF_Sign03</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
                      },
                      "ifTargetFound": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Imaginary",
                            "Damage": {
                              "operator": "Variables[0] (SkillUltra_DamagePercentage) || RETURN",
                              "displayLines": "SkillUltra_DamagePercentage",
                              "constants": [],
                              "variables": [
                                "SkillUltra_DamagePercentage"
                              ]
                            },
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Basic ATK",
                            "EnergyGainPercent": "100%"
                          }
                        },
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "value": 30,
                          "isFixed": "* ERR"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Sequence",
                      "Sequence": [
                        {
                          "name": "Target Name",
                          "target": "{{Enemy Team All}}"
                        },
                        {
                          "name": "Target Filter",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-1084207204\">Monster_W2_HuanlongPart_IF_P2_ForthMark</a>"
                          }
                        }
                      ]
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-427933075\">Monster_W2_HuanlongPart_01_IF_Activity</a>"
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team(Exclude Memosprites)}}"
                      },
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-777947107\">Monster_W2_Huanlong_IF_Sign04</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
                      },
                      "ifTargetFound": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Imaginary",
                            "Damage": {
                              "operator": "Variables[0] (SkillUltra_DamagePercentage) || RETURN",
                              "displayLines": "SkillUltra_DamagePercentage",
                              "constants": [],
                              "variables": [
                                "SkillUltra_DamagePercentage"
                              ]
                            },
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Basic ATK",
                            "EnergyGainPercent": "100%"
                          }
                        },
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "value": 30,
                          "isFixed": "* ERR"
                        }
                      ]
                    }
                  ]
                },
                "Trigger: Attack End",
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "PartDecisionFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1389512631\">Monster_W2_HuanlongPart_IF_TurnChoise</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "SummonTimes",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-129923965\">MoreOneMorePerTurn</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
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
                      "modifier": "<a class=\"gModGreen\" id=\"-129923965\">MoreOneMorePerTurn</a>"
                    }
                  ]
                },
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "PartDecisionFlag",
            "AIFlag"
          ]
        }
      ]
    },
    "8012205_Monster_W2_HuanlongPart_01_IF_Ability04_Part01": {
      "fileName": "8012205_Monster_W2_HuanlongPart_01_IF_Ability04_Part01",
      "childAbilityList": [
        "8012205_Monster_W2_HuanlongPart_01_IF_Ability04_Part01",
        "8012205_Monster_W2_HuanlongPart_01_IF_Ability04_Part02",
        "8012205_Monster_W2_HuanlongPart_01_IF_Ability04_Camera"
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
          "ability": "Monster_W2_HuanlongPart_01_IF_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8012205_Monster_W2_HuanlongPart_01_IF_Ability03_Part02": {
      "fileName": "8012205_Monster_W2_HuanlongPart_01_IF_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-410845452\">Monster_W2_HuanlongPart_01_Part2_SpecialPerform</a>"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-228419305\">Standard_BlackBlood</a>[<span class=\"descriptionNumberColor\">Prana-Siphoned</span>]",
          "duration": {
            "operator": "Variables[0] (UnusedUnderThisBase_198) || RETURN",
            "displayLines": "UnusedUnderThisBase_198",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_198"
            ]
          },
          "baseChance": {
            "operator": "Variables[0] (UnusedUnderThisBase_199) || RETURN",
            "displayLines": "UnusedUnderThisBase_199",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_199"
            ]
          },
          "valuePerStack": {
            "MDF_DirtyHPRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_197) || RETURN",
              "displayLines": "UnusedUnderThisBase_197",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_197"
              ]
            }
          },
          "success": []
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8012205_Monster_W2_HuanlongPart_01_IF_Ability03_Part01": {
      "fileName": "8012205_Monster_W2_HuanlongPart_01_IF_Ability03_Part01",
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
          "ability": "Monster_W2_HuanlongPart_01_IF_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8012205_Monster_W2_HuanlongPart_03_IF_Passive01": {
      "fileName": "8012205_Monster_W2_HuanlongPart_03_IF_Passive01",
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
          "modifier": "<a class=\"gModGreen\" id=\"2137176594\">Monster_W2_HuanlongPart_03_IF_Deathrattle</a>"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "variableName": "SummonerMaxHPValue",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1775073303\">Monster_W2_HuanlongPart_01_MuteHitFly</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"316085297\">Monster_W2_HuanlongPart_01_IF_Mark</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-265482801\">Monster_W2_HuanlongPart_01_IF_Break</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"532367944\">Standard_SuperArmorController</a>",
          "valuePerStack": {
            "MDF_SuperArmorDamageResistance": {
              "operator": "Variables[0] (UnusedUnderThisBase_216) || RETURN",
              "displayLines": "UnusedUnderThisBase_216",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_216"
              ]
            },
            "MDF_SuperArmorBreakDamageTakenRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_217) || RETURN",
              "displayLines": "UnusedUnderThisBase_217",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_217"
              ]
            },
            "MDF_SuperArmorBreakActionDelay": {
              "operator": "Variables[0] (UnusedUnderThisBase_218) || RETURN",
              "displayLines": "UnusedUnderThisBase_218",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_218"
              ]
            }
          }
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-265482801\">Monster_W2_HuanlongPart_01_IF_Break</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-69472783\">Monster_W2_HuanlongPart_IF_Active</a>"
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-69472783\">Monster_W2_HuanlongPart_IF_Active</a>"
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
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-69472783\">Monster_W2_HuanlongPart_IF_Active</a>"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2137176594\">Monster_W2_HuanlongPart_03_IF_Deathrattle</a>",
          "modifierFlags": [
            "Deathrattle",
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Was Killed (Queued) [Owner]",
              "execute": [
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "silent": true
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "CurrentHP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
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
                    "value1": "CurrentHP",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W2_HuanlongPart_01_IF_PassiveAbility_Insert_Part01",
                      "priorityTag": "MonsterForceKill",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ],
                  "failed": [
                    {
                      "name": "Inject Ability Use",
                      "checkOverride": {
                        "name": "Condition Priority",
                        "overridePriority": "MonsterForceKill",
                        "condition": {
                          "name": "Compare: Ability Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Summoner of Modifier Holder}}"
                          },
                          "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                          "compareType": "<=",
                          "value2": 0
                        }
                      },
                      "abilityName": "Monster_W2_HuanlongPart_01_IF_PassiveAbility_Insert_Part01",
                      "priorityTag": "MonsterDeathRattle",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                },
                {
                  "name": "Mark Entity For Immediate Death"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1775073303\">Monster_W2_HuanlongPart_01_MuteHitFly</a>",
          "modifierFlags": [
            "MuteHitFly"
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "8012205_Monster_W2_HuanlongPart_01_IF_Passive01": {
      "fileName": "8012205_Monster_W2_HuanlongPart_01_IF_Passive01",
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
          "modifier": "<a class=\"gModGreen\" id=\"-729917037\">Monster_W2_HuanlongPart_01_IF_OnDeathrattle</a>"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "variableName": "SummonerMaxHPValue",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1775073303\">Monster_W2_HuanlongPart_01_MuteHitFly</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-265482801\">Monster_W2_HuanlongPart_01_IF_Break</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"316085297\">Monster_W2_HuanlongPart_01_IF_Mark</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"532367944\">Standard_SuperArmorController</a>",
          "valuePerStack": {
            "MDF_SuperArmorDamageResistance": {
              "operator": "Variables[0] (UnusedUnderThisBase_216) || RETURN",
              "displayLines": "UnusedUnderThisBase_216",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_216"
              ]
            },
            "MDF_SuperArmorBreakDamageTakenRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_217) || RETURN",
              "displayLines": "UnusedUnderThisBase_217",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_217"
              ]
            },
            "MDF_SuperArmorBreakActionDelay": {
              "operator": "Variables[0] (UnusedUnderThisBase_218) || RETURN",
              "displayLines": "UnusedUnderThisBase_218",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_218"
              ]
            }
          }
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-265482801\">Monster_W2_HuanlongPart_01_IF_Break</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-69472783\">Monster_W2_HuanlongPart_IF_Active</a>"
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-69472783\">Monster_W2_HuanlongPart_IF_Active</a>"
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
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-69472783\">Monster_W2_HuanlongPart_IF_Active</a>"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-729917037\">Monster_W2_HuanlongPart_01_IF_OnDeathrattle</a>",
          "modifierFlags": [
            "Deathrattle",
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Was Killed (Queued) [Owner]",
              "execute": [
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "silent": true
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "CurrentHP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
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
                    "value1": "CurrentHP",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W2_HuanlongPart_01_IF_PassiveAbility_Insert_Part01",
                      "priorityTag": "MonsterForceKill",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ],
                  "failed": [
                    {
                      "name": "Inject Ability Use",
                      "checkOverride": {
                        "name": "Condition Priority",
                        "overridePriority": "MonsterForceKill",
                        "condition": {
                          "name": "Compare: Ability Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Summoner of Modifier Holder}}"
                          },
                          "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                          "compareType": "<=",
                          "value2": 0
                        }
                      },
                      "abilityName": "Monster_W2_HuanlongPart_01_IF_PassiveAbility_Insert_Part01",
                      "priorityTag": "MonsterDeathRattle",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                },
                {
                  "name": "Mark Entity For Immediate Death"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1775073303\">Monster_W2_HuanlongPart_01_MuteHitFly</a>",
          "modifierFlags": [
            "MuteHitFly"
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "8012205_Monster_W2_HuanlongPart_01_PassiveAbility_Insert3_Part01": {
      "fileName": "8012205_Monster_W2_HuanlongPart_01_PassiveAbility_Insert3_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
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
                "value1": "Insert2Flag",
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
                "value1": "Insert1Flag",
                "compareType": "=",
                "value2": 0,
                "contextScope": "TargetEntity"
              }
            ]
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
                "name": "Enemy ID",
                "ID": {
                  "operator": "Variables[0] (SummonerID) || RETURN",
                  "displayLines": "SummonerID",
                  "constants": [],
                  "variables": [
                    "SummonerID"
                  ]
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": null
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-616319653\">Monster_W2_HuanlongPart_01_Success</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
                  "valuePerStack": {
                    "MDF_ActionDelayRatio": {
                      "operator": "Variables[0] (UnusedUnderThisBase_214) || RETURN",
                      "displayLines": "UnusedUnderThisBase_214",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_214"
                      ]
                    },
                    "MDF_DamageTakenUpRatio_PerLayer": {
                      "operator": "Variables[0] (UnusedUnderThisBase_215) || RETURN",
                      "displayLines": "UnusedUnderThisBase_215",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_215"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "8012205_Monster_W2_HuanlongPart_01_PassiveAbility_Insert2_Part01": {
      "fileName": "8012205_Monster_W2_HuanlongPart_01_PassiveAbility_Insert2_Part01",
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
            "name": "Enemy ID",
            "ID": {
              "operator": "Variables[0] (SummonerID) || RETURN",
              "displayLines": "SummonerID",
              "constants": [],
              "variables": [
                "SummonerID"
              ]
            },
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-616319653\">Monster_W2_HuanlongPart_01_Success</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
              "valuePerStack": {
                "MDF_ActionDelayRatio": {
                  "operator": "Variables[0] (UnusedUnderThisBase_214) || RETURN",
                  "displayLines": "UnusedUnderThisBase_214",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_214"
                  ]
                },
                "MDF_DamageTakenUpRatio_PerLayer": {
                  "operator": "Variables[0] (UnusedUnderThisBase_215) || RETURN",
                  "displayLines": "UnusedUnderThisBase_215",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_215"
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
              "modifier": "<a class=\"gModGreen\" id=\"-1043458445\">Monster_W2_HuanlongPart_01_Dormancy</a>[<span class=\"descriptionNumberColor\">Repose</span>]",
              "duration": {
                "operator": "Variables[0] (UnusedUnderThisBase_196) || RETURN",
                "displayLines": "UnusedUnderThisBase_196",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_196"
                ]
              }
            }
          ]
        }
      ],
      "references": []
    },
    "8012205_Monster_W2_HuanlongPart_01_PassiveAbility_Insert_Part01": {
      "fileName": "8012205_Monster_W2_HuanlongPart_01_PassiveAbility_Insert_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "value1": "Insert2Flag",
            "compareType": "=",
            "value2": 0,
            "contextScope": "TargetEntity"
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
                "name": "Enemy ID",
                "ID": {
                  "operator": "Variables[0] (SummonerID) || RETURN",
                  "displayLines": "SummonerID",
                  "constants": [],
                  "variables": [
                    "SummonerID"
                  ]
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": null
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-616319653\">Monster_W2_HuanlongPart_01_Success</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
                  "valuePerStack": {
                    "MDF_ActionDelayRatio": {
                      "operator": "Variables[0] (UnusedUnderThisBase_214) || RETURN",
                      "displayLines": "UnusedUnderThisBase_214",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_214"
                      ]
                    },
                    "MDF_DamageTakenUpRatio_PerLayer": {
                      "operator": "Variables[0] (UnusedUnderThisBase_215) || RETURN",
                      "displayLines": "UnusedUnderThisBase_215",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_215"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "8012205_Monster_W2_HuanlongPart_01_PassiveAbility_InsertAll_Part01": {
      "fileName": "8012205_Monster_W2_HuanlongPart_01_PassiveAbility_InsertAll_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "value1": "InsertFlag",
            "compareType": "=",
            "value2": 0,
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
              "variableName": "InsertFlag",
              "value": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "Insert2Flag",
                "compareType": "=",
                "value2": 1,
                "contextScope": "TargetEntity"
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
                    "name": "Enemy ID",
                    "ID": {
                      "operator": "Variables[0] (SummonerID) || RETURN",
                      "displayLines": "SummonerID",
                      "constants": [],
                      "variables": [
                        "SummonerID"
                      ]
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": null
                  },
                  "ifTargetFound": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{All Unselectable Targets, All Team Members(Exclude Self)}}"
                      },
                      "searchRandom": true,
                      "includeDyingTargets": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Enemy ID",
                        "ID": {
                          "operator": "Variables[0] (SummonID) || RETURN",
                          "displayLines": "SummonID",
                          "constants": [],
                          "variables": [
                            "SummonID"
                          ]
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null
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
                            "value1": "InsertFlag",
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
                              "variableName": "TeammateInsertFlag",
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "TeammateInsertFlag",
                        "compareType": "=",
                        "value2": 0,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{All Unselectable Targets, All Team Members(Exclude Self)}}"
                          },
                          "searchRandom": true,
                          "includeDyingTargets": true,
                          "maxTargets": 1,
                          "conditions": {
                            "name": "Enemy ID",
                            "ID": {
                              "operator": "Variables[0] (SummonID) || RETURN",
                              "displayLines": "SummonID",
                              "constants": [],
                              "variables": [
                                "SummonID"
                              ]
                            },
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "characterName": null
                          },
                          "ifTargetFound": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "OR",
                                "conditionList": [
                                  {
                                    "name": "Compare: Variable",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "value1": "Insert1Flag",
                                    "compareType": "=",
                                    "value2": 1,
                                    "contextScope": "TargetEntity"
                                  },
                                  {
                                    "name": "Compare: Variable",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "value1": "Insert2Flag",
                                    "compareType": "=",
                                    "value2": 1,
                                    "contextScope": "TargetEntity"
                                  },
                                  {
                                    "name": "Compare: Variable",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "value1": "Insert3Flag",
                                    "compareType": "=",
                                    "value2": 1,
                                    "contextScope": "TargetEntity"
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
                                  "variableName": "TeammateInsertFlag2",
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
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "TeammateInsertFlag2",
                            "compareType": "=",
                            "value2": 1,
                            "contextScope": "TargetEntity"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-616319653\">Monster_W2_HuanlongPart_01_Success</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
                              "valuePerStack": {
                                "MDF_ActionDelayRatio": {
                                  "operator": "Variables[0] (UnusedUnderThisBase_214) || RETURN",
                                  "displayLines": "UnusedUnderThisBase_214",
                                  "constants": [],
                                  "variables": [
                                    "UnusedUnderThisBase_214"
                                  ]
                                },
                                "MDF_DamageTakenUpRatio_PerLayer": {
                                  "operator": "Variables[0] (UnusedUnderThisBase_215) || RETURN",
                                  "displayLines": "UnusedUnderThisBase_215",
                                  "constants": [],
                                  "variables": [
                                    "UnusedUnderThisBase_215"
                                  ]
                                }
                              },
                              "addStacksPerTrigger": 2
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-616319653\">Monster_W2_HuanlongPart_01_Success</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
                              "valuePerStack": {
                                "MDF_ActionDelayRatio": {
                                  "operator": "Variables[0] (UnusedUnderThisBase_214) || RETURN",
                                  "displayLines": "UnusedUnderThisBase_214",
                                  "constants": [],
                                  "variables": [
                                    "UnusedUnderThisBase_214"
                                  ]
                                },
                                "MDF_DamageTakenUpRatio_PerLayer": {
                                  "operator": "Variables[0] (UnusedUnderThisBase_215) || RETURN",
                                  "displayLines": "UnusedUnderThisBase_215",
                                  "constants": [],
                                  "variables": [
                                    "UnusedUnderThisBase_215"
                                  ]
                                }
                              }
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1043458445\">Monster_W2_HuanlongPart_01_Dormancy</a>[<span class=\"descriptionNumberColor\">Repose</span>]",
                      "duration": {
                        "operator": "Variables[0] (UnusedUnderThisBase_196) || RETURN",
                        "displayLines": "UnusedUnderThisBase_196",
                        "constants": [],
                        "variables": [
                          "UnusedUnderThisBase_196"
                        ]
                      }
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
                    "value1": "Insert1Flag",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
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
                        "name": "Enemy ID",
                        "ID": {
                          "operator": "Variables[0] (SummonerID) || RETURN",
                          "displayLines": "SummonerID",
                          "constants": [],
                          "variables": [
                            "SummonerID"
                          ]
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null
                      },
                      "ifTargetFound": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{All Unselectable Targets, All Team Members(Exclude Self)}}"
                          },
                          "searchRandom": true,
                          "includeDyingTargets": true,
                          "maxTargets": 1,
                          "conditions": {
                            "name": "Enemy ID",
                            "ID": {
                              "operator": "Variables[0] (SummonID) || RETURN",
                              "displayLines": "SummonID",
                              "constants": [],
                              "variables": [
                                "SummonID"
                              ]
                            },
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "characterName": null
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
                                "value1": "InsertFlag",
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
                                  "variableName": "TeammateInsertFlag",
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
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "TeammateInsertFlag",
                            "compareType": "=",
                            "value2": 0,
                            "contextScope": "TargetEntity"
                          },
                          "passed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Has Flag",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "flagName": "STAT_CTRL"
                              }
                            },
                            {
                              "name": "Find New Target",
                              "from": {
                                "name": "Target Name",
                                "target": "{{All Unselectable Targets, All Team Members(Exclude Self)}}"
                              },
                              "searchRandom": true,
                              "includeDyingTargets": true,
                              "maxTargets": 1,
                              "conditions": {
                                "name": "Enemy ID",
                                "ID": {
                                  "operator": "Variables[0] (SummonID) || RETURN",
                                  "displayLines": "SummonID",
                                  "constants": [],
                                  "variables": [
                                    "SummonID"
                                  ]
                                },
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "characterName": null
                              },
                              "ifTargetFound": [
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "OR",
                                    "conditionList": [
                                      {
                                        "name": "Compare: Variable",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "value1": "Insert1Flag",
                                        "compareType": "=",
                                        "value2": 1,
                                        "contextScope": "TargetEntity"
                                      },
                                      {
                                        "name": "Compare: Variable",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "value1": "Insert2Flag",
                                        "compareType": "=",
                                        "value2": 1,
                                        "contextScope": "TargetEntity"
                                      },
                                      {
                                        "name": "Compare: Variable",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "value1": "Insert3Flag",
                                        "compareType": "=",
                                        "value2": 1,
                                        "contextScope": "TargetEntity"
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
                                      "variableName": "TeammateInsertFlag2",
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
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value1": "TeammateInsertFlag2",
                                "compareType": "=",
                                "value2": 1,
                                "contextScope": "TargetEntity"
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-616319653\">Monster_W2_HuanlongPart_01_Success</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
                                  "valuePerStack": {
                                    "MDF_ActionDelayRatio": {
                                      "operator": "Variables[0] (UnusedUnderThisBase_214) || RETURN",
                                      "displayLines": "UnusedUnderThisBase_214",
                                      "constants": [],
                                      "variables": [
                                        "UnusedUnderThisBase_214"
                                      ]
                                    },
                                    "MDF_DamageTakenUpRatio_PerLayer": {
                                      "operator": "Variables[0] (UnusedUnderThisBase_215) || RETURN",
                                      "displayLines": "UnusedUnderThisBase_215",
                                      "constants": [],
                                      "variables": [
                                        "UnusedUnderThisBase_215"
                                      ]
                                    }
                                  },
                                  "addStacksPerTrigger": 2
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-616319653\">Monster_W2_HuanlongPart_01_Success</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
                                  "valuePerStack": {
                                    "MDF_ActionDelayRatio": {
                                      "operator": "Variables[0] (UnusedUnderThisBase_214) || RETURN",
                                      "displayLines": "UnusedUnderThisBase_214",
                                      "constants": [],
                                      "variables": [
                                        "UnusedUnderThisBase_214"
                                      ]
                                    },
                                    "MDF_DamageTakenUpRatio_PerLayer": {
                                      "operator": "Variables[0] (UnusedUnderThisBase_215) || RETURN",
                                      "displayLines": "UnusedUnderThisBase_215",
                                      "constants": [],
                                      "variables": [
                                        "UnusedUnderThisBase_215"
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
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "Insert3Flag",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
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
                            "name": "Enemy ID",
                            "ID": {
                              "operator": "Variables[0] (SummonerID) || RETURN",
                              "displayLines": "SummonerID",
                              "constants": [],
                              "variables": [
                                "SummonerID"
                              ]
                            },
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "characterName": null
                          },
                          "ifTargetFound": [
                            {
                              "name": "Find New Target",
                              "from": {
                                "name": "Target Name",
                                "target": "{{All Unselectable Targets, All Team Members(Exclude Self)}}"
                              },
                              "searchRandom": true,
                              "includeDyingTargets": true,
                              "maxTargets": 1,
                              "conditions": {
                                "name": "Enemy ID",
                                "ID": {
                                  "operator": "Variables[0] (SummonID) || RETURN",
                                  "displayLines": "SummonID",
                                  "constants": [],
                                  "variables": [
                                    "SummonID"
                                  ]
                                },
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "characterName": null
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
                                    "value1": "InsertFlag",
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
                                      "variableName": "TeammateInsertFlag",
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
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value1": "TeammateInsertFlag",
                                "compareType": "=",
                                "value2": 0,
                                "contextScope": "TargetEntity"
                              },
                              "passed": [
                                {
                                  "name": "Find New Target",
                                  "from": {
                                    "name": "Target Name",
                                    "target": "{{All Unselectable Targets, All Team Members(Exclude Self)}}"
                                  },
                                  "searchRandom": true,
                                  "includeDyingTargets": true,
                                  "maxTargets": 1,
                                  "conditions": {
                                    "name": "Enemy ID",
                                    "ID": {
                                      "operator": "Variables[0] (SummonID) || RETURN",
                                      "displayLines": "SummonID",
                                      "constants": [],
                                      "variables": [
                                        "SummonID"
                                      ]
                                    },
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "characterName": null
                                  },
                                  "ifTargetFound": [
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "OR",
                                        "conditionList": [
                                          {
                                            "name": "Compare: Variable",
                                            "target": {
                                              "name": "Target Name",
                                              "target": "{{Parameter Target}}"
                                            },
                                            "value1": "Insert1Flag",
                                            "compareType": "=",
                                            "value2": 1,
                                            "contextScope": "TargetEntity"
                                          },
                                          {
                                            "name": "Compare: Variable",
                                            "target": {
                                              "name": "Target Name",
                                              "target": "{{Parameter Target}}"
                                            },
                                            "value1": "Insert2Flag",
                                            "compareType": "=",
                                            "value2": 1,
                                            "contextScope": "TargetEntity"
                                          },
                                          {
                                            "name": "Compare: Variable",
                                            "target": {
                                              "name": "Target Name",
                                              "target": "{{Parameter Target}}"
                                            },
                                            "value1": "Insert3Flag",
                                            "compareType": "=",
                                            "value2": 1,
                                            "contextScope": "TargetEntity"
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
                                          "variableName": "TeammateInsertFlag2",
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
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Modifier Holder}}"
                                    },
                                    "value1": "TeammateInsertFlag2",
                                    "compareType": "=",
                                    "value2": 1,
                                    "contextScope": "TargetEntity"
                                  },
                                  "passed": [
                                    {
                                      "name": "Add Events/Bonuses",
                                      "to": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "modifier": "<a class=\"gModGreen\" id=\"-616319653\">Monster_W2_HuanlongPart_01_Success</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
                                      "valuePerStack": {
                                        "MDF_ActionDelayRatio": {
                                          "operator": "Variables[0] (UnusedUnderThisBase_214) || RETURN",
                                          "displayLines": "UnusedUnderThisBase_214",
                                          "constants": [],
                                          "variables": [
                                            "UnusedUnderThisBase_214"
                                          ]
                                        },
                                        "MDF_DamageTakenUpRatio_PerLayer": {
                                          "operator": "Variables[0] (UnusedUnderThisBase_215) || RETURN",
                                          "displayLines": "UnusedUnderThisBase_215",
                                          "constants": [],
                                          "variables": [
                                            "UnusedUnderThisBase_215"
                                          ]
                                        }
                                      },
                                      "addStacksPerTrigger": 2
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Add Events/Bonuses",
                                      "to": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "modifier": "<a class=\"gModGreen\" id=\"-616319653\">Monster_W2_HuanlongPart_01_Success</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
                                      "valuePerStack": {
                                        "MDF_ActionDelayRatio": {
                                          "operator": "Variables[0] (UnusedUnderThisBase_214) || RETURN",
                                          "displayLines": "UnusedUnderThisBase_214",
                                          "constants": [],
                                          "variables": [
                                            "UnusedUnderThisBase_214"
                                          ]
                                        },
                                        "MDF_DamageTakenUpRatio_PerLayer": {
                                          "operator": "Variables[0] (UnusedUnderThisBase_215) || RETURN",
                                          "displayLines": "UnusedUnderThisBase_215",
                                          "constants": [],
                                          "variables": [
                                            "UnusedUnderThisBase_215"
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
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "TeammateInsertFlag",
                "compareType": "=",
                "value2": 0,
                "contextScope": "TargetEntity"
              }
            }
          ]
        }
      ],
      "references": []
    },
    "8012205_Monster_W2_HuanlongPart_01_Ability04_Part02": {
      "fileName": "8012205_Monster_W2_HuanlongPart_01_Ability04_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"541144260\">Monster_W2_Huanlong_Ability08_First</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            },
            "value1": "Phase3End",
            "compareType": "=",
            "value2": 1,
            "contextScope": "TargetEntity"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1845976277\">Monster_W2_HuanlongPart_01_Activity</a>[<span class=\"descriptionNumberColor\">Bloom</span>]"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1118527556\">Monster_W2_HuanlongPart_01_RemoveActivityEffect</a>"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Unselectable Targets, All Team Members(Exclude Self)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Enemy ID",
            "ID": {
              "operator": "Variables[0] (SummonID) || RETURN",
              "displayLines": "SummonID",
              "constants": [],
              "variables": [
                "SummonID"
              ]
            },
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null
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
                "modifier": "<a class=\"gModGreen\" id=\"-1043458445\">Monster_W2_HuanlongPart_01_Dormancy</a>[<span class=\"descriptionNumberColor\">Repose</span>]"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "DormancyFlag",
                  "value": 1
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1143427895\">Monster_W2_HuanlongPart_01_Stealth</a>"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "flagName": "Break"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "BreakFlag",
                  "value": 1
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-237425029\">StanceBreakState_Effect</a>"
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
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            },
            "value1": "Phase3End",
            "compareType": "=",
            "value2": 1,
            "contextScope": "TargetEntity"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1932091323\">Monster_W2_Huanlong_Ability08_Prepare</a>"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "variableName": "MaxHPValue",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
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
            "value2": 3
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster's Summoner}}"
                },
                "value1": "Phase3End",
                "compareType": "=",
                "value2": 1,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Set HP Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "setValue": 1
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Imaginary",
                    "DamageFlat": {
                      "operator": "Variables[0] (MaxHPValue) || Variables[1] (UnusedUnderThisBase_200) || MUL || RETURN",
                      "displayLines": "(MaxHPValue * UnusedUnderThisBase_200)",
                      "constants": [],
                      "variables": [
                        "MaxHPValue",
                        "UnusedUnderThisBase_200"
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
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "DamageFlat": {
                  "operator": "Variables[0] (MaxHPValue) || Variables[1] (UnusedUnderThisBase_200) || MUL || RETURN",
                  "displayLines": "(MaxHPValue * UnusedUnderThisBase_200)",
                  "constants": [],
                  "variables": [
                    "MaxHPValue",
                    "UnusedUnderThisBase_200"
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
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1932091323\">Monster_W2_Huanlong_Ability08_Prepare</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1845976277\">Monster_W2_HuanlongPart_01_Activity</a>[<span class=\"descriptionNumberColor\">Bloom</span>]"
        },
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
            "modifier": "<a class=\"gModGreen\" id=\"1845976277\">Monster_W2_HuanlongPart_01_Activity</a>[<span class=\"descriptionNumberColor\">Bloom</span>]"
          },
          "noTargetFound": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1896373900\">Monster_W2_Huanlong_Charge</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"911555281\">Monster_W2_Huanlong_Sign</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1866067565\">Monster_W2_Huanlong_Sign02</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-921214664\">Monster_W2_Huanlong_Ability08Mark</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"541144260\">Monster_W2_Huanlong_Ability08_First</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1118527556\">Monster_W2_HuanlongPart_01_RemoveActivityEffect</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Enemy ID",
            "ID": {
              "operator": "Variables[0] (SummonID) || RETURN",
              "displayLines": "SummonID",
              "constants": [],
              "variables": [
                "SummonID"
              ]
            },
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null
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
                "value1": "DormancyFlag",
                "compareType": "=",
                "value2": 1,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "DormancyFlag",
                  "value": 0
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1143427895\">Monster_W2_HuanlongPart_01_Stealth</a>"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "BreakFlag",
                "compareType": "=",
                "value2": 1,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "BreakFlag",
                  "value": 0
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-237425029\">StanceBreakState_Effect</a>"
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
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            },
            "value1": "Phase3End",
            "compareType": "=",
            "value2": 1,
            "contextScope": "TargetEntity"
          },
          "passed": [
            {
              "name": "Inject Ability Use",
              "abilityName": "Monster_W2_Huanlong_Part3_Camera3_Insert",
              "abilitySource": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Phantylia: Main Target}}"
              },
              "priorityTag": "MonsterChangePhase",
              "ownerState": "Mask_AliveOrLimbo",
              "targetState": "Mask_AliveOrLimbo",
              "canHitNonTargets": true,
              "allowAbilityTriggers": false
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8012205_Monster_W2_HuanlongPart_01_Ability04_Part01": {
      "fileName": "8012205_Monster_W2_HuanlongPart_01_Ability04_Part01",
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
          "ability": "Monster_W2_HuanlongPart_01_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
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
            "value2": 3
          }
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
            "value2": 3
          }
        }
      ],
      "references": []
    },
    "8012205_Monster_W2_HuanlongPart_01_Ability03_Part02": {
      "fileName": "8012205_Monster_W2_HuanlongPart_01_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-410845452\">Monster_W2_HuanlongPart_01_Part2_SpecialPerform</a>"
          }
        },
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-410845452\">Monster_W2_HuanlongPart_01_Part2_SpecialPerform</a>"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-410845452\">Monster_W2_HuanlongPart_01_Part2_SpecialPerform</a>"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-410845452\">Monster_W2_HuanlongPart_01_Part2_SpecialPerform</a>"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-228419305\">Standard_BlackBlood</a>[<span class=\"descriptionNumberColor\">Prana-Siphoned</span>]",
          "duration": {
            "operator": "Variables[0] (UnusedUnderThisBase_198) || RETURN",
            "displayLines": "UnusedUnderThisBase_198",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_198"
            ]
          },
          "baseChance": {
            "operator": "Variables[0] (UnusedUnderThisBase_199) || RETURN",
            "displayLines": "UnusedUnderThisBase_199",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_199"
            ]
          },
          "valuePerStack": {
            "MDF_DirtyHPRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_197) || RETURN",
              "displayLines": "UnusedUnderThisBase_197",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_197"
              ]
            }
          },
          "success": []
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-410845452\">Monster_W2_HuanlongPart_01_Part2_SpecialPerform</a>"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"45124899\">Monster_W2_HuanlongPart_01_Part2_JingYuan</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-410845452\">Monster_W2_HuanlongPart_01_Part2_SpecialPerform</a>"
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-410845452\">Monster_W2_HuanlongPart_01_Part2_SpecialPerform</a>"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8012205_Monster_W2_HuanlongPart_01_Ability03_Part01": {
      "fileName": "8012205_Monster_W2_HuanlongPart_01_Ability03_Part01",
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
          "ability": "Monster_W2_HuanlongPart_01_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-410845452\">Monster_W2_HuanlongPart_01_Part2_SpecialPerform</a>"
          }
        }
      ],
      "references": []
    },
    "8012205_Monster_W2_HuanlongPart_01_Ability02_Part02": {
      "fileName": "8012205_Monster_W2_HuanlongPart_01_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1043458445\">Monster_W2_HuanlongPart_01_Dormancy</a>[<span class=\"descriptionNumberColor\">Repose</span>]"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "<a class=\"gModGreen\" id=\"-1043458445\">Monster_W2_HuanlongPart_01_Dormancy</a>[<span class=\"descriptionNumberColor\">Repose</span>]",
                "compareType": "=",
                "value2": 1,
                "valueType": "LifeTime"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1043458445\">Monster_W2_HuanlongPart_01_Dormancy</a>[<span class=\"descriptionNumberColor\">Repose</span>]"
                },
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "Phase0"
                },
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
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "MaxHPValue",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Set HP Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "setPercent": 1
                },
                {
                  "name": "Reset Toughness",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"569926357\">Monster_W2_HuanlongPart_01_WeakControl</a>[<span class=\"descriptionNumberColor\">Weakness Protected</span>]"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "PartDecisionFlag",
                  "value": 1
                }
              ]
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8012205_Monster_W2_HuanlongPart_01_Ability02_Part01": {
      "fileName": "8012205_Monster_W2_HuanlongPart_01_Ability02_Part01",
      "childAbilityList": [
        "8012205_Monster_W2_HuanlongPart_01_Ability02_Part01",
        "8012205_Monster_W2_HuanlongPart_01_Ability02_Part02",
        "8012205_Monster_W2_HuanlongPart_01_Ability02_Camera"
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
          "ability": "Monster_W2_HuanlongPart_01_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8012205_Monster_W2_HuanlongPart_01_PassiveAbilityInitiate": {
      "fileName": "8012205_Monster_W2_HuanlongPart_01_PassiveAbilityInitiate",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1485253143\">Monster_W2_HuanlongPart_01_Revive</a>",
          "valuePerStack": {
            "MDF_DormancyLifeTime": {
              "operator": "Variables[0] (UnusedUnderThisBase_196) || RETURN",
              "displayLines": "UnusedUnderThisBase_196",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_196"
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
          "modifier": "<a class=\"gModGreen\" id=\"569926357\">Monster_W2_HuanlongPart_01_WeakControl</a>[<span class=\"descriptionNumberColor\">Weakness Protected</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1775073303\">Monster_W2_HuanlongPart_01_MuteHitFly</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-647503843\">Monster_W2_HuanlongPart_01_InsertAbilityController</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"90629678\">Monster_W2_HuanlongPart_01_Number01</a>"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"73852059\">Monster_W2_HuanlongPart_01_Number02</a>"
            }
          ],
          "noTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"90629678\">Monster_W2_HuanlongPart_01_Number01</a>"
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1775073303\">Monster_W2_HuanlongPart_01_MuteHitFly</a>",
          "modifierFlags": [
            "MuteHitFly"
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "8012205_Monster_W2_HuanlongPart_IF_Recover": {
      "fileName": "8012205_Monster_W2_HuanlongPart_IF_Recover",
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
    "8012205_Monster_W2_HuanlongPart_IF_PassiveAbility_Insert_Part01": {
      "fileName": "8012205_Monster_W2_HuanlongPart_IF_PassiveAbility_Insert_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Living State",
                "state": "Mask_AliveOnly",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster's Summoner}}"
                }
              },
              {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster's Summoner}}"
                },
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 2
              }
            ]
          },
          "passed": [
            {
              "name": "Exit Broken-State",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              }
            },
            {
              "name": "Animation Event",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "state": "PassiveSkill01",
              "passed": [
                {
                  "name": "Animation Task"
                },
                {
                  "name": "Animation Task",
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Player Team(Exclude Memosprites)v2}}"
                      },
                      "value": {
                        "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                        "displayLines": "{[PassiveSkill01[2]]}",
                        "constants": [],
                        "variables": [
                          "{[PassiveSkill01[2]]}"
                        ]
                      },
                      "isFixed": "(Fixed)"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster's Summoner}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1788965070\">Monster_W2_Huanlong_IF_WeaknessProtect</a>[<span class=\"descriptionNumberColor\">Flower By Another Name</span>]"
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster's Summoner}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Physical",
                        "DamageFlat": {
                          "operator": "Variables[0] (SummonerMaxHPValue) || Variables[1] ({[PassiveSkill01[0]]}) || MUL || RETURN",
                          "displayLines": "(SummonerMaxHPValue * {[PassiveSkill01[0]]})",
                          "constants": [],
                          "variables": [
                            "SummonerMaxHPValue",
                            "{[PassiveSkill01[0]]}"
                          ]
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": {
                          "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                          "displayLines": "{[PassiveSkill01[1]]}",
                          "constants": [],
                          "variables": [
                            "{[PassiveSkill01[1]]}"
                          ]
                        },
                        "Tags": null,
                        "attackType": "Basic ATK"
                      }
                    },
                    "Trigger: Attack End",
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster's Summoner}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-59801071\">Monster_W2_HuanlongPart_IF_DeathRattle</a>",
                      "casterAssign": "TargetSelf"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "8012205_Monster_W2_HuanlongPart_IF_Ability01_Part02": {
      "fileName": "8012205_Monster_W2_HuanlongPart_IF_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "value": {
            "operator": "Constants[0] (1) || INVERT || Variables[0] ({[Skill01[0]]}) || MUL || RETURN",
            "displayLines": "(-1 * {[Skill01[0]]})",
            "constants": [
              1
            ],
            "variables": [
              "{[Skill01[0]]}"
            ]
          },
          "isFixed": "(Fixed)"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8012205_Monster_W2_HuanlongPart_IF_Ability01_Part01": {
      "fileName": "8012205_Monster_W2_HuanlongPart_IF_Ability01_Part01",
      "childAbilityList": [
        "8012205_Monster_W2_HuanlongPart_01_Ability03_Camera",
        "8012205_Monster_W2_HuanlongPart_IF_Ability01_Part01",
        "8012205_Monster_W2_HuanlongPart_IF_Ability01_Part02"
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
          "ability": "Monster_W2_HuanlongPart_IF_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8012205_Monster_W2_HuanlongPart_02_IF_Passive01": {
      "fileName": "8012205_Monster_W2_HuanlongPart_02_IF_Passive01",
      "skillTrigger": "PassiveSkill03",
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
          "modifier": "<a class=\"gModGreen\" id=\"2020538755\">Monster_W2_HuanlongPart_02_IF_Deathrattle</a>"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "variableName": "SummonerMaxHPValue",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"342076450\">Monster_W2_HuanlongPart_IF_Break</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1603687642\">Monster_W2_HuanlongPart_IF_Mark</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-268148846\">Monster_W2_HuanlongPart_MuteHitFly</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__342076450\">Monster_W2_HuanlongPart_IF_Break</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-69472783\">Monster_W2_HuanlongPart_IF_Active</a>"
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-69472783\">Monster_W2_HuanlongPart_IF_Active</a>"
                },
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "advanceType": "Set",
                  "multiAdd": "{[PassiveSkill03[0]]}"
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
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-69472783\">Monster_W2_HuanlongPart_IF_Active</a>"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2020538755\">Monster_W2_HuanlongPart_02_IF_Deathrattle</a>",
          "modifierFlags": [
            "Deathrattle",
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Was Killed (Queued) [Owner]",
              "execute": [
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "silent": true
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "CurrentHP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
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
                    "value1": "CurrentHP",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W2_HuanlongPart_IF_PassiveAbility_Insert_Part01",
                      "priorityTag": "MonsterForceKill",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ],
                  "failed": [
                    {
                      "name": "Inject Ability Use",
                      "checkOverride": {
                        "name": "Condition Priority",
                        "overridePriority": "MonsterForceKill",
                        "condition": {
                          "name": "Compare: Ability Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Summoner of Modifier Holder}}"
                          },
                          "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                          "compareType": "<=",
                          "value2": 0
                        }
                      },
                      "abilityName": "Monster_W2_HuanlongPart_IF_PassiveAbility_Insert_Part01",
                      "priorityTag": "MonsterDeathRattle",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                },
                {
                  "name": "Mark Entity For Immediate Death"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-268148846\">Monster_W2_HuanlongPart_MuteHitFly</a>",
          "modifierFlags": [
            "MuteHitFly"
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "8012205_Monster_W2_HuanlongPart_IF_Passive01": {
      "fileName": "8012205_Monster_W2_HuanlongPart_IF_Passive01",
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
          "modifier": "<a class=\"gModGreen\" id=\"1973630770\">Monster_W2_HuanlongPart_IF_OnDeathrattle</a>"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "variableName": "SummonerMaxHPValue",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"342076450\">Monster_W2_HuanlongPart_IF_Break</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1603687642\">Monster_W2_HuanlongPart_IF_Mark</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-268148846\">Monster_W2_HuanlongPart_MuteHitFly</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__342076450\">Monster_W2_HuanlongPart_IF_Break</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-69472783\">Monster_W2_HuanlongPart_IF_Active</a>"
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-69472783\">Monster_W2_HuanlongPart_IF_Active</a>"
                },
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "advanceType": "Set",
                  "multiAdd": "{[PassiveSkill03[0]]}"
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
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-69472783\">Monster_W2_HuanlongPart_IF_Active</a>"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1973630770\">Monster_W2_HuanlongPart_IF_OnDeathrattle</a>",
          "modifierFlags": [
            "Deathrattle",
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Was Killed (Queued) [Owner]",
              "execute": [
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "silent": true
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "CurrentHP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
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
                    "value1": "CurrentHP",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W2_HuanlongPart_IF_PassiveAbility_Insert_Part01",
                      "priorityTag": "MonsterForceKill",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ],
                  "failed": [
                    {
                      "name": "Inject Ability Use",
                      "checkOverride": {
                        "name": "Condition Priority",
                        "overridePriority": "MonsterForceKill",
                        "condition": {
                          "name": "Compare: Ability Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Summoner of Modifier Holder}}"
                          },
                          "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                          "compareType": "<=",
                          "value2": 0
                        }
                      },
                      "abilityName": "Monster_W2_HuanlongPart_IF_PassiveAbility_Insert_Part01",
                      "priorityTag": "MonsterDeathRattle",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                },
                {
                  "name": "Mark Entity For Immediate Death"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-268148846\">Monster_W2_HuanlongPart_MuteHitFly</a>",
          "modifierFlags": [
            "MuteHitFly"
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "8012205_Modifiers": {
      "fileName": "8012205_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__204047517\">Monster_W2_HuanlongPart_01_Dispel</a>",
          "execute": [
            {
              "eventTrigger": "Action Choice Window [Owner]",
              "execute": [
                {
                  "name": "Remove Modifier Behavior Flag(s)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "flagNames": []
                }
              ]
            },
            {
              "eventTrigger": "Turn [Action-End Phase]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-271124103\">Monster_W2_HuanlongPart_01_Part3End</a>",
          "modifierFlags": [
            "DisableAction"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__45124899\">Monster_W2_HuanlongPart_01_Part2_JingYuan</a>",
          "modifierFlags": [
            "AvatarBreak",
            "DisableAction"
          ],
          "stackData": [],
          "latentQueue": [],
          "duration": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-410845452\">Monster_W2_HuanlongPart_01_Part2_SpecialPerform</a>",
          "modifierFlags": [
            "Endurance"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 0.0009999999
                }
              ]
            }
          ],
          "duration": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__73852059\">Monster_W2_HuanlongPart_01_Number02</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__90629678\">Monster_W2_HuanlongPart_01_Number01</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2080496909\">Monster_W2_HuanlongPart_01_Resistance</a>",
          "execute": [
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-647503843\">Monster_W2_HuanlongPart_01_InsertAbilityController</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "STAT_CTRL_Frozen"
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
                  },
                  "passed": [
                    {
                      "name": "Change Character Transformation",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "phase": "Phase0"
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "ChangePhaseFlag",
                      "value": 0
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Action Phase Start [Anyone][?]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Insert1Flag",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Insert2Flag",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Insert3Flag",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "InsertFlag",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "InsertFlagFirst",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "TeammateInsertFlag",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "TeammateInsertFlag2",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Action Choice Window [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "Break"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "ChangePhaseFlag",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Change Character Transformation",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "phase": "Phase5"
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "ChangePhaseFlag",
                      "value": 0
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Insert1Flag",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Insert2Flag",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Insert3Flag",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "InsertFlag",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "InsertFlagFirst",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "TeammateInsertFlag",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "TeammateInsertFlag2",
                  "value": 0
                }
              ]
            },
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
                    "value1": "Insert3Flag",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "STAT_CTRL",
                        "justAddedOrLiving": true
                      },
                      "failed": [
                        {
                          "name": "Change Character Transformation",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "phase": "Phase1"
                        },
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "ChangePhaseFlag",
                          "value": 1
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "Insert1Flag",
                      "value": 1
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{All Unselectable Targets, All Team Members(Exclude Self)}}"
                      },
                      "searchRandom": true,
                      "includeDyingTargets": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1485253143\">Monster_W2_HuanlongPart_01_Revive</a>"
                      },
                      "ifTargetFound": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "value1": "Insert1Flag",
                                "compareType": "=",
                                "value2": 1,
                                "contextScope": "TargetEntity"
                              },
                              {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "value1": "Insert2Flag",
                                "compareType": "=",
                                "value2": 1,
                                "contextScope": "TargetEntity"
                              },
                              {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "value1": "Insert3Flag",
                                "compareType": "=",
                                "value2": 1,
                                "contextScope": "TargetEntity"
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
                                  "target": "{{Parameter Target}}"
                                },
                                "value1": "InsertFlagFirst",
                                "compareType": "=",
                                "value2": 0,
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
                                  "variableName": "InsertFlagFirst",
                                  "value": 1
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Summoner of Modifier Holder}}"
                                    },
                                    "value1": "CurrentHP%",
                                    "compareType": ">",
                                    "value2": 0
                                  },
                                  "passed": [
                                    {
                                      "name": "Inject Ability Use",
                                      "abilityName": "Monster_W2_HuanlongPart_01_PassiveAbility_InsertAll_Part01",
                                      "priorityTag": "MonsterChangePhase",
                                      "ownerState": "Mask_AliveOrLimbo",
                                      "targetState": "Mask_AliveOrLimbo",
                                      "canHitNonTargets": true,
                                      "allowAbilityTriggers": false
                                    }
                                  ]
                                }
                              ]
                            }
                          ],
                          "failed": [
                            {
                              "name": "Define Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "scope": "TargetEntity",
                              "variableName": "InsertFlagFirst",
                              "value": 1
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Summoner of Modifier Holder}}"
                                },
                                "value1": "CurrentHP%",
                                "compareType": ">",
                                "value2": 0
                              },
                              "passed": [
                                {
                                  "name": "Inject Ability Use",
                                  "abilityName": "Monster_W2_HuanlongPart_01_PassiveAbility_InsertAll_Part01",
                                  "priorityTag": "MonsterChangePhase",
                                  "ownerState": "Mask_AliveOrLimbo",
                                  "targetState": "Mask_AliveOrLimbo",
                                  "canHitNonTargets": true,
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
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-616319653\">Monster_W2_HuanlongPart_01_Success</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "Action Choice Window [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "ModifierLayers",
                  "multiplier": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_DamageTakenUpRatio_PerLayer) || Variables[1] (ModifierLayers) || MUL || RETURN",
                    "displayLines": "(MDF_DamageTakenUpRatio_PerLayer * ModifierLayers)",
                    "constants": [],
                    "variables": [
                      "MDF_DamageTakenUpRatio_PerLayer",
                      "ModifierLayers"
                    ]
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1896373900\">Monster_W2_Huanlong_Charge</a>"
                },
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "advanceType": "Set",
                  "multiAdd": "MDF_ActionDelayRatio"
                }
              ]
            }
          ],
          "stackData": [
            "MDF_ActionDelayRatio",
            "MDF_DamageTakenUpRatio_PerLayer"
          ],
          "latentQueue": [
            "InsertFlag",
            "Insert2Flag",
            "Insert1Flag",
            "Insert3Flag",
            "TeammateInsertFlag",
            "TeammateInsertFlag2"
          ],
          "description": "Increases DMG received by <span class=\"descriptionNumberColor\">MDF_DamageTakenUpRatio_PerLayer</span>. This effect is stackable.",
          "type": "Debuff",
          "effectName": "Vulnerability",
          "statusName": "Vulnerability",
          "duration": 1,
          "stackLimit": 2,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1118527556\">Monster_W2_HuanlongPart_01_RemoveActivityEffect</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
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
                    "value2": 3
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "Phase3End"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1845976277\">Monster_W2_HuanlongPart_01_Activity</a>[<span class=\"descriptionNumberColor\">Bloom</span>]",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "RemoveWhenCasterDead"
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
                  "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 3
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"569926357\">Monster_W2_HuanlongPart_01_WeakControl</a>[<span class=\"descriptionNumberColor\">Weakness Protected</span>]"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "PartDecisionFlag",
                  "value": 2
                },
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
                  "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"569926357\">Monster_W2_HuanlongPart_01_WeakControl</a>[<span class=\"descriptionNumberColor\">Weakness Protected</span>]"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "PartActivityCount"
                },
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
                    "modifier": "<a class=\"gModGreen\" id=\"1845976277\">Monster_W2_HuanlongPart_01_Activity</a>[<span class=\"descriptionNumberColor\">Bloom</span>]"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "PartActivityCount",
                      "context": "TargetEntity",
                      "value": 1,
                      "max": 2
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
                    "value1": "PartActivityCount",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"911555281\">Monster_W2_Huanlong_Sign</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1866067565\">Monster_W2_Huanlong_Sign02</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"90629678\">Monster_W2_HuanlongPart_01_Number01</a>"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"911555281\">Monster_W2_Huanlong_Sign</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"73852059\">Monster_W2_HuanlongPart_01_Number02</a>"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1866067565\">Monster_W2_Huanlong_Sign02</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
                    }
                  ]
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "PartDecisionFlag",
                  "value": 1
                }
              ]
            },
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
                  "variableName": "PartActivityCount"
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
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1845976277\">Monster_W2_HuanlongPart_01_Activity</a>[<span class=\"descriptionNumberColor\">Bloom</span>]"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "PartActivityCount",
                      "context": "TargetEntity",
                      "value": 1,
                      "max": 2
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"90629678\">Monster_W2_HuanlongPart_01_Number01</a>"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"911555281\">Monster_W2_Huanlong_Sign</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"73852059\">Monster_W2_HuanlongPart_01_Number02</a>"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1866067565\">Monster_W2_Huanlong_Sign02</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
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
                    "value1": "Insert3Flag",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "STAT_CTRL",
                        "justAddedOrLiving": true
                      },
                      "failed": [
                        {
                          "name": "Change Character Transformation",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "phase": "Phase1"
                        },
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "ChangePhaseFlag",
                          "value": 1
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Insert1Flag",
                  "value": 1
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{All Unselectable Targets, All Team Members(Exclude Self)}}"
                  },
                  "searchRandom": true,
                  "includeDyingTargets": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1485253143\">Monster_W2_HuanlongPart_01_Revive</a>"
                  },
                  "ifTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value1": "Insert1Flag",
                            "compareType": "=",
                            "value2": 1,
                            "contextScope": "TargetEntity"
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value1": "Insert2Flag",
                            "compareType": "=",
                            "value2": 1,
                            "contextScope": "TargetEntity"
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value1": "Insert3Flag",
                            "compareType": "=",
                            "value2": 1,
                            "contextScope": "TargetEntity"
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
                              "target": "{{Parameter Target}}"
                            },
                            "value1": "InsertFlagFirst",
                            "compareType": "=",
                            "value2": 0,
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
                              "variableName": "InsertFlagFirst",
                              "value": 1
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Summoner of Modifier Holder}}"
                                },
                                "value1": "CurrentHP%",
                                "compareType": ">",
                                "value2": 0
                              },
                              "passed": [
                                {
                                  "name": "Inject Ability Use",
                                  "abilityName": "Monster_W2_HuanlongPart_01_PassiveAbility_InsertAll_Part01",
                                  "priorityTag": "MonsterChangePhase",
                                  "ownerState": "Mask_AliveOrLimbo",
                                  "targetState": "Mask_AliveOrLimbo",
                                  "canHitNonTargets": true,
                                  "allowAbilityTriggers": false
                                }
                              ]
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "InsertFlagFirst",
                          "value": 1
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Summoner of Modifier Holder}}"
                            },
                            "value1": "CurrentHP%",
                            "compareType": ">",
                            "value2": 0
                          },
                          "passed": [
                            {
                              "name": "Inject Ability Use",
                              "abilityName": "Monster_W2_HuanlongPart_01_PassiveAbility_InsertAll_Part01",
                              "priorityTag": "MonsterChangePhase",
                              "ownerState": "Mask_AliveOrLimbo",
                              "targetState": "Mask_AliveOrLimbo",
                              "canHitNonTargets": true,
                              "allowAbilityTriggers": false
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "PartDecisionFlag",
                  "value": 1
                },
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "On Dispel/Cleanse",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Insert3Flag",
                  "value": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "STAT_CTRL"
                  },
                  "failed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{All Unselectable Targets, All Team Members(Exclude Self)}}"
                      },
                      "searchRandom": true,
                      "includeDyingTargets": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1485253143\">Monster_W2_HuanlongPart_01_Revive</a>"
                      },
                      "ifTargetFound": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "value1": "Insert1Flag",
                                "compareType": "=",
                                "value2": 1,
                                "contextScope": "TargetEntity"
                              },
                              {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "value1": "Insert2Flag",
                                "compareType": "=",
                                "value2": 1,
                                "contextScope": "TargetEntity"
                              },
                              {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "value1": "Insert3Flag",
                                "compareType": "=",
                                "value2": 1,
                                "contextScope": "TargetEntity"
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
                                  "target": "{{Parameter Target}}"
                                },
                                "value1": "InsertFlagFirst",
                                "compareType": "=",
                                "value2": 0,
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
                                  "variableName": "InsertFlagFirst",
                                  "value": 1
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Summoner of Modifier Holder}}"
                                    },
                                    "value1": "CurrentHP%",
                                    "compareType": ">",
                                    "value2": 0
                                  },
                                  "passed": [
                                    {
                                      "name": "Inject Ability Use",
                                      "abilityName": "Monster_W2_HuanlongPart_01_PassiveAbility_InsertAll_Part01",
                                      "priorityTag": "MonsterChangePhase",
                                      "ownerState": "Mask_AliveOrLimbo",
                                      "targetState": "Mask_AliveOrLimbo",
                                      "canHitNonTargets": true,
                                      "allowAbilityTriggers": false
                                    }
                                  ]
                                }
                              ]
                            }
                          ],
                          "failed": [
                            {
                              "name": "Define Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "scope": "TargetEntity",
                              "variableName": "InsertFlagFirst",
                              "value": 1
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Summoner of Modifier Holder}}"
                                },
                                "value1": "CurrentHP%",
                                "compareType": ">",
                                "value2": 0
                              },
                              "passed": [
                                {
                                  "name": "Inject Ability Use",
                                  "abilityName": "Monster_W2_HuanlongPart_01_PassiveAbility_InsertAll_Part01",
                                  "priorityTag": "MonsterChangePhase",
                                  "ownerState": "Mask_AliveOrLimbo",
                                  "targetState": "Mask_AliveOrLimbo",
                                  "canHitNonTargets": true,
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
          ],
          "description": "Will use Havoc during the next action. This status can be dispelled by abilities.",
          "type": "Buff",
          "effectName": "Bloom",
          "statusName": "Bloom"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__675106959\">Monster_W2_HuanlongPart_01_Activity_Mark</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__569926357\">Monster_W2_HuanlongPart_01_WeakControl</a>[<span class=\"descriptionNumberColor\">Weakness Protected</span>]",
          "modifierFlags": [
            "STAT_AITargetLowerPriority",
            "MuteBreak"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Protected",
                  "valueList": [
                    "Physical",
                    "Fire",
                    "Ice",
                    "Thunder",
                    "Wind",
                    "Quantum",
                    "Imaginary"
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "PartDecisionFlag"
          ],
          "description": "When Destruction Lotus is not in Bloom, its Toughness cannot be reduced.",
          "type": "Other",
          "statusName": "Weakness Protected"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1043458445\">Monster_W2_HuanlongPart_01_Dormancy</a>[<span class=\"descriptionNumberColor\">Repose</span>]",
          "modifierFlags": [
            "DisableHealHP"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 0.0009999999
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1143427895\">Monster_W2_HuanlongPart_01_Stealth</a>"
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
                  "modifier": "<a class=\"gModGreen\" id=\"1143427895\">Monster_W2_HuanlongPart_01_Stealth</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2080496909\">Monster_W2_HuanlongPart_01_Resistance</a>"
                },
                {
                  "name": "Lock HP",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Action Choice Window [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1143427895\">Monster_W2_HuanlongPart_01_Stealth</a>"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Action-End Phase]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1143427895\">Monster_W2_HuanlongPart_01_Stealth</a>"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "InsertFlag",
            "Insert2Flag",
            "Insert1Flag",
            "Insert3Flag",
            "TeammateInsertFlag",
            "TeammateInsertFlag2"
          ],
          "description": "In Repose.",
          "type": "Other",
          "statusName": "Repose",
          "duration": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1143427895\">Monster_W2_HuanlongPart_01_Stealth</a>",
          "modifierFlags": [
            "Stealth"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                "Mark Entity as Non-Target(Unselectable)"
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            }
          ],
          "stackData": [],
          "latentQueue": [
            "TeammateInsertFlag2",
            "TeammateInsertFlag",
            "Insert3Flag",
            "Insert1Flag",
            "Insert2Flag",
            "InsertFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1485253143\">Monster_W2_HuanlongPart_01_Revive</a>",
          "execute": [
            {
              "eventTrigger": "Waiting for Healing in Limbo",
              "execute": [
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "silent": true
                },
                {
                  "name": "Set HP Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "setValue": 1
                },
                {
                  "name": "Lock HP",
                  "threshold": 0.0009999999,
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2080496909\">Monster_W2_HuanlongPart_01_Resistance</a>"
                },
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
                    "target": "{{Caster}}"
                  }
                },
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
                        "modifier": "<a class=\"gModGreen\" id=\"1845976277\">Monster_W2_HuanlongPart_01_Activity</a>[<span class=\"descriptionNumberColor\">Bloom</span>]"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "Insert3Flag",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "Insert1Flag",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
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
                      "variableName": "Insert2Flag",
                      "value": 1
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{All Unselectable Targets, All Team Members(Exclude Self)}}"
                      },
                      "searchRandom": true,
                      "includeDyingTargets": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1485253143\">Monster_W2_HuanlongPart_01_Revive</a>"
                      },
                      "ifTargetFound": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "value1": "Insert1Flag",
                                "compareType": "=",
                                "value2": 1,
                                "contextScope": "TargetEntity"
                              },
                              {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "value1": "Insert2Flag",
                                "compareType": "=",
                                "value2": 1,
                                "contextScope": "TargetEntity"
                              },
                              {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "value1": "Insert3Flag",
                                "compareType": "=",
                                "value2": 1,
                                "contextScope": "TargetEntity"
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
                                  "target": "{{Parameter Target}}"
                                },
                                "value1": "InsertFlagFirst",
                                "compareType": "=",
                                "value2": 0,
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
                                  "variableName": "InsertFlagFirst",
                                  "value": 1
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Summoner of Modifier Holder}}"
                                    },
                                    "value1": "CurrentHP%",
                                    "compareType": ">",
                                    "value2": 0
                                  },
                                  "passed": [
                                    {
                                      "name": "Inject Ability Use",
                                      "abilityName": "Monster_W2_HuanlongPart_01_PassiveAbility_InsertAll_Part01",
                                      "priorityTag": "MonsterChangePhase",
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
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-1043458445\">Monster_W2_HuanlongPart_01_Dormancy</a>[<span class=\"descriptionNumberColor\">Repose</span>]",
                                  "duration": {
                                    "operator": "Variables[0] (MDF_DormancyLifeTime) || RETURN",
                                    "displayLines": "MDF_DormancyLifeTime",
                                    "constants": [],
                                    "variables": [
                                      "MDF_DormancyLifeTime"
                                    ]
                                  }
                                }
                              ]
                            }
                          ],
                          "failed": [
                            {
                              "name": "Define Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "scope": "TargetEntity",
                              "variableName": "InsertFlagFirst",
                              "value": 1
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Summoner of Modifier Holder}}"
                                },
                                "value1": "CurrentHP%",
                                "compareType": ">",
                                "value2": 0
                              },
                              "passed": [
                                {
                                  "name": "Inject Ability Use",
                                  "abilityName": "Monster_W2_HuanlongPart_01_PassiveAbility_InsertAll_Part01",
                                  "priorityTag": "MonsterChangePhase",
                                  "ownerState": "Mask_AliveOrLimbo",
                                  "targetState": "Mask_AliveOrLimbo",
                                  "canHitNonTargets": true,
                                  "allowAbilityTriggers": false
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1043458445\">Monster_W2_HuanlongPart_01_Dormancy</a>[<span class=\"descriptionNumberColor\">Repose</span>]",
                      "duration": {
                        "operator": "Variables[0] (MDF_DormancyLifeTime) || RETURN",
                        "displayLines": "MDF_DormancyLifeTime",
                        "constants": [],
                        "variables": [
                          "MDF_DormancyLifeTime"
                        ]
                      }
                    }
                  ]
                },
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
                        "modifier": "<a class=\"gModGreen\" id=\"1845976277\">Monster_W2_HuanlongPart_01_Activity</a>[<span class=\"descriptionNumberColor\">Bloom</span>]"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "Insert3Flag",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "Insert1Flag",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1845976277\">Monster_W2_HuanlongPart_01_Activity</a>[<span class=\"descriptionNumberColor\">Bloom</span>]"
                    }
                  ]
                },
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "Phase4"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "NeedRemoveActivity"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "PartDecisionFlag"
                }
              ],
              "priorityLevel": -50
            },
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "Phase0"
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "ChangePhaseFlag",
                  "value": 0
                }
              ]
            }
          ],
          "stackData": [
            "MDF_DormancyLifeTime"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-69472783\">Monster_W2_HuanlongPart_IF_Active</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1296858925\">Monster_W2_HuanlongPart_IF_P2_FirstMark</a>"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team(Exclude Memosprites)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-861835202\">Monster_W2_Huanlong_IF_Sign01</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1190585947\">Monster_W2_HuanlongPart_IF_P2_SecondMark</a>"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team(Exclude Memosprites)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-878612821\">Monster_W2_Huanlong_IF_Sign02</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1242033542\">Monster_W2_HuanlongPart_IF_P2_ThirdMark</a>"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team(Exclude Memosprites)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-895390440\">Monster_W2_Huanlong_IF_Sign03</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1084207204\">Monster_W2_HuanlongPart_IF_P2_ForthMark</a>"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team(Exclude Memosprites)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-777947107\">Monster_W2_Huanlong_IF_Sign04</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "references": []
    }
  }
}