const compositeAbilityObject = {
  "fullCharacterName": 1013011,
  "trimCharacterName": 1013011,
  "abilityList": [
    "1013011_WMonster_W1_Mecha_02_Passive_AIControlAndHPLock",
    "1013011_WMonster_W1_Mecha_02_Ability05_Part02",
    "1013011_WMonster_W1_Mecha_02_Ability05_Part01",
    "1013011_WMonster_W1_Mecha_02_Ability04_Part02",
    "1013011_WMonster_W1_Mecha_02_Ability04_Part01",
    "1013011_WMonster_W1_Mecha_02_Ability03_Part02",
    "1013011_WMonster_W1_Mecha_02_Ability03_Part01",
    "1013011_WMonster_W1_Mecha_02_Ability02_Part02",
    "1013011_WMonster_W1_Mecha_02_Ability02_Part01",
    "1013011_WMonster_W1_Mecha_02_Ability01_Part02",
    "1013011_WMonster_W1_Mecha_02_Ability01_Part01",
    "1013011_WMonster_Mecha_02_PassiveAbilityInitiate",
    "1013011_Modifiers"
  ],
  "abilityObject": {
    "1013011_WMonster_W1_Mecha_02_Passive_AIControlAndHPLock": {
      "fileName": "1013011_WMonster_W1_Mecha_02_Passive_AIControlAndHPLock",
      "childAbilityList": [
        "1013011_WMonster_W1_Mecha_02_Passive_AIControlAndHPLock"
      ],
      "skillTrigger": "PassiveSkillInitiate",
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
          "modifier": "OneMorePerTurn"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 1013011,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Automaton Grizzly (Bug)"
          },
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_W1_Mecha03_RemoveOneMore"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_Mecha03_BreakResetCharge"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "SummonSequence",
          "value": 1
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "HideMonsterHUD"
        }
      ],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "WMonster_Mecha_02_MuteHitFly"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Monster_Mecha03_BreakResetCharge",
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "W1_Mecha02_AttackBonus[<span class=\"descriptionNumberColor\">Charging</span>]"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Enemy ID",
                        "ID": 1013011,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "characterName": "Automaton Grizzly (Bug)"
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
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 3,
                            "contextScope": "TargetEntity"
                          },
                          "passed": [
                            {
                              "name": "Declare Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "scope": "TargetEntity",
                              "variableName": "AIFlag",
                              "value": 2
                            }
                          ]
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
                          "variableName": "AIFlag",
                          "value": 4
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
          "for": "WMonster_Mecha_02_MuteHitFly",
          "modifierFlags": [
            "MuteHitFly"
          ],
          "stackData": [],
          "latentQueue": [
            "SummonSequence"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "HideMonsterHUD",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]"
            },
            {
              "eventTrigger": "Action Choice Window [Owner]"
            }
          ],
          "stackData": [],
          "latentQueue": [
            "SummonSequence"
          ]
        }
      ]
    },
    "1013011_WMonster_W1_Mecha_02_Ability05_Part02": {
      "fileName": "1013011_WMonster_W1_Mecha_02_Ability05_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{All Team Members}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": "<=",
            "value2": 3
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "SummonSequence",
                "compareType": "=",
                "value2": 1,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Enemy ID",
                            "ID": 1013012,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "characterName": "Automaton Grizzly (Complete)"
                          },
                          {
                            "name": "Enemy ID",
                            "ID": 1013013,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "characterName": "Automaton Grizzly (Complete)"
                          },
                          {
                            "name": "Enemy ID",
                            "ID": 1013014,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "characterName": "Automaton Grizzly (Complete)"
                          }
                        ]
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 2
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "TeammateSurvive",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": 0,
                          "enemyList": [
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID",
                              "summonLocation": "BeforeCaster"
                            },
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID",
                              "summonLocation": "First"
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": 0,
                          "enemyList": [
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID",
                              "summonLocation": "BeforeCaster"
                            },
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID",
                              "summonLocation": "First"
                            },
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID",
                              "summonLocation": "AfterCaster"
                            },
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID",
                              "summonLocation": "Last"
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
                        "ID": 1013011,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "characterName": "Automaton Grizzly (Bug)"
                      },
                      "passed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": 0,
                          "enemyList": [
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID2",
                              "summonLocation": "BeforeCaster"
                            },
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID2",
                              "summonLocation": "AfterCaster"
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
                                "name": "OR",
                                "conditionList": [
                                  {
                                    "name": "Enemy ID",
                                    "ID": 1013012,
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Caster}}"
                                    },
                                    "characterName": "Automaton Grizzly (Complete)"
                                  },
                                  {
                                    "name": "Enemy ID",
                                    "ID": 1013013,
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Caster}}"
                                    },
                                    "characterName": "Automaton Grizzly (Complete)"
                                  },
                                  {
                                    "name": "Enemy ID",
                                    "ID": 1013014,
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Caster}}"
                                    },
                                    "characterName": "Automaton Grizzly (Complete)"
                                  }
                                ]
                              },
                              {
                                "name": "Compare: Variable",
                                "value1": "HP_Bars_Remaining",
                                "compareType": "=",
                                "value2": 1
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Create Enemies",
                              "delayPercent": 0,
                              "enemyList": [
                                {
                                  "name": "Create Enemy from Custom",
                                  "value": "Monster_RO_015_SummonID",
                                  "summonLocation": "First"
                                },
                                {
                                  "name": "Create Enemy from Custom",
                                  "value": "Monster_RO_015_SummonID",
                                  "summonLocation": "Last"
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
                                    "name": "OR",
                                    "conditionList": [
                                      {
                                        "name": "Enemy ID",
                                        "ID": 1013012,
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Caster}}"
                                        },
                                        "characterName": "Automaton Grizzly (Complete)"
                                      },
                                      {
                                        "name": "Enemy ID",
                                        "ID": 1013013,
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Caster}}"
                                        },
                                        "characterName": "Automaton Grizzly (Complete)"
                                      }
                                    ]
                                  },
                                  {
                                    "name": "Compare: Variable",
                                    "value1": "HP_Bars_Remaining",
                                    "compareType": "=",
                                    "value2": 3
                                  }
                                ]
                              },
                              "passed": [
                                {
                                  "name": "Create Enemies",
                                  "delayPercent": 0,
                                  "enemyList": [
                                    {
                                      "name": "Create Enemy from Custom",
                                      "value": "Monster_RO_015_SummonID",
                                      "summonLocation": "BeforeCaster"
                                    },
                                    {
                                      "name": "Create Enemy from Custom",
                                      "value": "Monster_RO_015_SummonID",
                                      "summonLocation": "First"
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
                                        "name": "Enemy ID",
                                        "ID": 1013014,
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Caster}}"
                                        },
                                        "characterName": "Automaton Grizzly (Complete)"
                                      },
                                      {
                                        "name": "Compare: Variable",
                                        "value1": "HP_Bars_Remaining",
                                        "compareType": "=",
                                        "value2": 3
                                      }
                                    ]
                                  },
                                  "passed": [
                                    {
                                      "name": "Create Enemies",
                                      "delayPercent": 0,
                                      "enemyList": [
                                        {
                                          "name": "Create Enemy from Custom",
                                          "value": "Monster_RO_015_SummonID2",
                                          "summonLocation": "First"
                                        },
                                        {
                                          "name": "Create Enemy from Custom",
                                          "value": "Monster_RO_015_SummonID2",
                                          "summonLocation": "Last"
                                        }
                                      ]
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Create Enemies",
                                      "delayPercent": 0,
                                      "enemyList": [
                                        {
                                          "name": "Create Enemy from Custom",
                                          "value": "Monster_RO_015_SummonID",
                                          "summonLocation": "BeforeCaster"
                                        },
                                        {
                                          "name": "Create Enemy from Custom",
                                          "value": "Monster_RO_015_SummonID",
                                          "summonLocation": "AfterCaster"
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
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "SummonSequence",
                  "value": 2
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Enemy ID",
                            "ID": 1013012,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "characterName": "Automaton Grizzly (Complete)"
                          },
                          {
                            "name": "Enemy ID",
                            "ID": 1013013,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "characterName": "Automaton Grizzly (Complete)"
                          },
                          {
                            "name": "Enemy ID",
                            "ID": 1013014,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "characterName": "Automaton Grizzly (Complete)"
                          }
                        ]
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 2
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "TeammateSurvive",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": 0,
                          "enemyList": [
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID",
                              "summonLocation": "BeforeCaster"
                            },
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID",
                              "summonLocation": "First"
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": 0,
                          "enemyList": [
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID",
                              "summonLocation": "BeforeCaster"
                            },
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID",
                              "summonLocation": "First"
                            },
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID",
                              "summonLocation": "AfterCaster"
                            },
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID",
                              "summonLocation": "Last"
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
                        "ID": 1013011,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "characterName": "Automaton Grizzly (Bug)"
                      },
                      "passed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": 0,
                          "enemyList": [
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID2",
                              "summonLocation": "BeforeCaster"
                            },
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID2",
                              "summonLocation": "AfterCaster"
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
                                "name": "OR",
                                "conditionList": [
                                  {
                                    "name": "Enemy ID",
                                    "ID": 1013012,
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Caster}}"
                                    },
                                    "characterName": "Automaton Grizzly (Complete)"
                                  },
                                  {
                                    "name": "Enemy ID",
                                    "ID": 1013013,
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Caster}}"
                                    },
                                    "characterName": "Automaton Grizzly (Complete)"
                                  },
                                  {
                                    "name": "Enemy ID",
                                    "ID": 1013014,
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Caster}}"
                                    },
                                    "characterName": "Automaton Grizzly (Complete)"
                                  }
                                ]
                              },
                              {
                                "name": "Compare: Variable",
                                "value1": "HP_Bars_Remaining",
                                "compareType": "=",
                                "value2": 1
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Create Enemies",
                              "delayPercent": 0,
                              "enemyList": [
                                {
                                  "name": "Create Enemy from Custom",
                                  "value": "Monster_RO_015_SummonID",
                                  "summonLocation": "First"
                                },
                                {
                                  "name": "Create Enemy from Custom",
                                  "value": "Monster_RO_015_SummonID",
                                  "summonLocation": "Last"
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
                                    "name": "OR",
                                    "conditionList": [
                                      {
                                        "name": "Enemy ID",
                                        "ID": 1013012,
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Caster}}"
                                        },
                                        "characterName": "Automaton Grizzly (Complete)"
                                      },
                                      {
                                        "name": "Enemy ID",
                                        "ID": 1013013,
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Caster}}"
                                        },
                                        "characterName": "Automaton Grizzly (Complete)"
                                      }
                                    ]
                                  },
                                  {
                                    "name": "Compare: Variable",
                                    "value1": "HP_Bars_Remaining",
                                    "compareType": "=",
                                    "value2": 3
                                  }
                                ]
                              },
                              "passed": [
                                {
                                  "name": "Create Enemies",
                                  "delayPercent": 0,
                                  "enemyList": [
                                    {
                                      "name": "Create Enemy from Custom",
                                      "value": "Monster_RO_015_SummonID",
                                      "summonLocation": "BeforeCaster"
                                    },
                                    {
                                      "name": "Create Enemy from Custom",
                                      "value": "Monster_RO_015_SummonID",
                                      "summonLocation": "First"
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
                                        "name": "Enemy ID",
                                        "ID": 1013014,
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Caster}}"
                                        },
                                        "characterName": "Automaton Grizzly (Complete)"
                                      },
                                      {
                                        "name": "Compare: Variable",
                                        "value1": "HP_Bars_Remaining",
                                        "compareType": "=",
                                        "value2": 3
                                      }
                                    ]
                                  },
                                  "passed": [
                                    {
                                      "name": "Create Enemies",
                                      "delayPercent": 0,
                                      "enemyList": [
                                        {
                                          "name": "Create Enemy from Custom",
                                          "value": "Monster_RO_015_SummonID2",
                                          "summonLocation": "First"
                                        },
                                        {
                                          "name": "Create Enemy from Custom",
                                          "value": "Monster_RO_015_SummonID2",
                                          "summonLocation": "Last"
                                        }
                                      ]
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Create Enemies",
                                      "delayPercent": 0,
                                      "enemyList": [
                                        {
                                          "name": "Create Enemy from Custom",
                                          "value": "Monster_RO_015_SummonID",
                                          "summonLocation": "BeforeCaster"
                                        },
                                        {
                                          "name": "Create Enemy from Custom",
                                          "value": "Monster_RO_015_SummonID",
                                          "summonLocation": "AfterCaster"
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
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "SummonSequence",
                  "value": 1
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Enemy ID",
                        "ID": 1013012,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "characterName": "Automaton Grizzly (Complete)"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 1013013,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "characterName": "Automaton Grizzly (Complete)"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 1013014,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "characterName": "Automaton Grizzly (Complete)"
                      }
                    ]
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 3
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "TeammateSurvive",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "SummonSequence",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": 0,
                          "enemyList": [
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID",
                              "summonLocation": "BeforeCaster"
                            },
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID",
                              "summonLocation": "AfterCaster"
                            }
                          ]
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "SummonSequence",
                          "value": 2
                        }
                      ],
                      "failed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": 0,
                          "enemyList": [
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID",
                              "summonLocation": "BeforeCaster"
                            },
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID",
                              "summonLocation": "AfterCaster"
                            }
                          ]
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "SummonSequence",
                          "value": 1
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
                    "ID": 1013011,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Automaton Grizzly (Bug)"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "SummonSequence",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": 0,
                          "enemyList": [
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID",
                              "summonLocation": "BeforeCaster"
                            },
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID",
                              "summonLocation": "AfterCaster"
                            }
                          ]
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "SummonSequence",
                          "value": 2
                        }
                      ],
                      "failed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": 0,
                          "enemyList": [
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID",
                              "summonLocation": "BeforeCaster"
                            },
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID",
                              "summonLocation": "AfterCaster"
                            }
                          ]
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "SummonSequence",
                          "value": 1
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "Standard_Servant[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": 1013012,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Automaton Grizzly (Complete)"
              },
              {
                "name": "Enemy ID",
                "ID": 1013013,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Automaton Grizzly (Complete)"
              },
              {
                "name": "Enemy ID",
                "ID": 1013014,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Automaton Grizzly (Complete)"
              }
            ]
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "modifier": "Monster_W1_Mecha03_RL_Explode"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1013011_WMonster_W1_Mecha_02_Ability05_Part01": {
      "fileName": "1013011_WMonster_W1_Mecha_02_Ability05_Part01",
      "childAbilityList": [
        "1013011_WMonster_W1_Mecha_02_Ability05_Camera",
        "1013011_WMonster_W1_Mecha_02_A_Ability05_Camera",
        "1013011_WMonster_W1_Mecha_02_Ability05_Part01",
        "1013011_WMonster_W1_Mecha_02_Ability05_Part02"
      ],
      "skillTrigger": "Skill05",
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
          "ability": "WMonster_W1_Mecha_02_Ability05_Part02",
          "isTrigger": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": 1013011,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Automaton Grizzly (Bug)"
              },
              {
                "name": "Enemy ID",
                "ID": 1013012,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Automaton Grizzly (Complete)"
              },
              {
                "name": "Enemy ID",
                "ID": 1013013,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Automaton Grizzly (Complete)"
              },
              {
                "name": "Enemy ID",
                "ID": 1013014,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Automaton Grizzly (Complete)"
              }
            ]
          },
          "passed": [
            "Deleted bullshit"
          ],
          "failed": [
            "Deleted bullshit"
          ]
        }
      ],
      "references": []
    },
    "1013011_WMonster_W1_Mecha_02_Ability04_Part02": {
      "fileName": "1013011_WMonster_W1_Mecha_02_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Looped Event",
          "Event": [
            "Move to Next Listed Target",
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "ResistedFlag"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "Standard_CTRL_Taunt[<span class=\"descriptionNumberColor\">Taunt</span>]",
              "duration": {
                "operator": "Variables[0] ({[Skill04[1]]}) || RETURN",
                "displayLines": "{[Skill04[1]]}",
                "constants": [],
                "variables": [
                  "{[Skill04[1]]}"
                ]
              },
              "baseChance": {
                "operator": "Variables[0] ({[Skill04[2]]}) || RETURN",
                "displayLines": "{[Skill04[2]]}",
                "constants": [],
                "variables": [
                  "{[Skill04[2]]}"
                ]
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "ResistedFlag",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "UI Display Event (On Entity)",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "popUpText": "Not Effective"
                    }
                  ]
                }
              ],
              "resisted": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "ResistedFlag",
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
    "1013011_WMonster_W1_Mecha_02_Ability04_Part01": {
      "fileName": "1013011_WMonster_W1_Mecha_02_Ability04_Part01",
      "childAbilityList": [
        "1013011_WMonster_W1_Mecha_02_Ability04_Camera",
        "1013011_WMonster_W1_Mecha_02_Ability04_Part01",
        "1013011_WMonster_W1_Mecha_02_Ability04_Part02"
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
          "ability": "WMonster_W1_Mecha_02_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1013011_WMonster_W1_Mecha_02_Ability03_Part02": {
      "fileName": "1013011_WMonster_W1_Mecha_02_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || Constants[0] (0.7) || MUL || RETURN",
              "displayLines": "({[Skill03[0]]} * 0.7)",
              "constants": [
                0.7
              ],
              "variables": [
                "{[Skill03[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "70%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
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
            "EnergyGainPercent": "30%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "W1_Mecha02_AttackBonus_Effect"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1013011_WMonster_W1_Mecha_02_Ability03_Part01": {
      "fileName": "1013011_WMonster_W1_Mecha_02_Ability03_Part01",
      "childAbilityList": [
        "1013011_WMonster_W1_Mecha_02_Ability03_Camera",
        "1013011_WMonster_W1_Mecha_02_Ability03_Part01",
        "1013011_WMonster_W1_Mecha_02_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 1013011,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Automaton Grizzly (Bug)"
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Enemy ID",
                    "ID": 1013012,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Automaton Grizzly (Complete)"
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 1013013,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Automaton Grizzly (Complete)"
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 1013014,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Automaton Grizzly (Complete)"
                  }
                ]
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
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "OneMore"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "OneMore"
                }
              ]
            }
          ]
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "WMonster_W1_Mecha_02_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1013011_WMonster_W1_Mecha_02_Ability02_Part02": {
      "fileName": "1013011_WMonster_W1_Mecha_02_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 3
              }
            ]
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Monster_W1_Mecha03_RL_Ability03_DamageUp[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
              "valuePerStack": {
                "MDF_DamageUpRatio_PerLayer": {
                  "operator": "Variables[0] (UnusedUnderThisBase_46) || RETURN",
                  "displayLines": "UnusedUnderThisBase_46",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_46"
                  ]
                }
              }
            }
          ],
          "failed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "W1_Mecha02_AttackBonus[<span class=\"descriptionNumberColor\">Charging</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "W1_Mecha02_AttackBonus[<span class=\"descriptionNumberColor\">Charging</span>]",
              "duration": 1,
              "valuePerStack": {
                "ModifierDamageUpValue": {
                  "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                  "displayLines": "{[Skill02[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[0]]}"
                  ]
                }
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
                "name": "Enemy ID",
                "ID": 1013011,
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "characterName": "Automaton Grizzly (Bug)"
              },
              {
                "name": "Enemy ID",
                "ID": 1013012,
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "characterName": "Automaton Grizzly (Complete)"
              },
              {
                "name": "Enemy ID",
                "ID": 1013013,
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "characterName": "Automaton Grizzly (Complete)"
              },
              {
                "name": "Enemy ID",
                "ID": 1013014,
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "characterName": "Automaton Grizzly (Complete)"
              }
            ]
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "W1_Mecha02_AttackBonus_Effect"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1013011_WMonster_W1_Mecha_02_Ability02_Part01": {
      "fileName": "1013011_WMonster_W1_Mecha_02_Ability02_Part01",
      "childAbilityList": [
        "1013011_WMonster_W1_Mecha_02_Ability02_Camera",
        "1013011_WMonster_W1_Mecha_02_Ability02_Part01",
        "1013011_WMonster_W1_Mecha_02_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "OneMore"
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "WMonster_W1_Mecha_02_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "1013011_WMonster_W1_Mecha_02_Ability01_Part02": {
      "fileName": "1013011_WMonster_W1_Mecha_02_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Looped Event",
          "maxLoops": 5,
          "Event": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "operator": "Variables[0] ({[Skill01[0]]}) || Constants[0] (0.2) || MUL || RETURN",
                  "displayLines": "({[Skill01[0]]} * 0.2)",
                  "constants": [
                    0.2
                  ],
                  "variables": [
                    "{[Skill01[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "20%"
              }
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "1013011_WMonster_W1_Mecha_02_Ability01_Part01": {
      "fileName": "1013011_WMonster_W1_Mecha_02_Ability01_Part01",
      "childAbilityList": [
        "1013011_WMonster_W1_Mecha_02_Ability01_Camera",
        "1013011_WMonster_W1_Mecha_02_Ability01_Part01",
        "1013011_WMonster_W1_Mecha_02_Ability01_Part02"
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
          "ability": "WMonster_W1_Mecha_02_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "references": []
    },
    "1013011_WMonster_Mecha_02_PassiveAbilityInitiate": {
      "fileName": "1013011_WMonster_Mecha_02_PassiveAbilityInitiate",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "ActivationCountDown",
          "value": 2
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "ActivationMode"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "BeingDamageFlag",
          "value": 1
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "WMonster_Mecha_02_Activation_Controller"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "WMonster_Mecha_02_Activation_Controller",
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
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "BeingDamageFlag",
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
                        "value1": "ActivationMode",
                        "compareType": "=",
                        "value2": 0,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "BeingDamageFlag"
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "WMonster_Mecha_02_Ability10_InsertAbility",
                      "priorityTag": "MonsterInsertAttackSelf",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "ActivationCountDown",
            "ActivationMode",
            "BeingDamageFlag"
          ]
        }
      ]
    },
    "1013011_Modifiers": {
      "fileName": "1013011_Modifiers",
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
          "for": "Monster_W1_Mecha03_RemoveOneMore",
          "execute": [
            {
              "eventTrigger": "Action End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 4,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 5,
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
                      "modifier": "OneMorePerTurn"
                    }
                  ],
                  "failed": [
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
                            "modifier": "OneMorePerTurn"
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "Monster_W1_Mecha03_RL_Enhance_Dormancy[<span class=\"descriptionNumberColor\">Firepower Recovery</span>]"
                          }
                        ]
                      },
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "OneMorePerTurn"
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
        }
      ],
      "references": []
    }
  }
}